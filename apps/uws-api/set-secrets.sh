#!/bin/bash

# Script to set Cloudflare Worker secrets using Wrangler
# Usage: ./set-secrets.sh <env_file> [--filter KEY1,KEY2,...]
# Example: ./set-secrets.sh .env.production --filter API_KEY,DATABASE_URL

# Print usage information
usage() {
    echo "Usage: $0 <env_file> [--filter KEY1,KEY2,...]"
    echo
    echo "Arguments:"
    echo "  env_file      Path to your environment file"
    echo
    echo "Options:"
    echo "  --filter      Comma-separated list of specific secrets to set"
    echo
    echo "Example:"
    echo "  $0 .env.production"
    echo "  $0 .env.production --filter API_KEY,DATABASE_URL"
    exit 1
}

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "Error: Wrangler is not installed"
    echo "Install it using: npm install -g wrangler"
    exit 1
fi

# Check if wrangler.toml exists
if [ ! -f "wrangler.toml" ]; then
    echo "Error: wrangler.toml not found in current directory"
    echo "Please run this script in your worker project directory"
    exit 1
fi

# Parse arguments
ENV_FILE=""
FILTER_KEYS=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --filter)
            FILTER_KEYS="$2"
            shift 2
            ;;
        --help|-h)
            usage
            ;;
        *)
            if [ -z "$ENV_FILE" ]; then
                ENV_FILE="$1"
            else
                echo "Error: Unexpected argument: $1"
                usage
            fi
            shift
            ;;
    esac
done

# Validate required arguments
if [ -z "$ENV_FILE" ]; then
    echo "Error: Missing environment file path"
    usage
fi

# Check if env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "Error: Environment file '$ENV_FILE' not found"
    exit 1
fi

# Convert filter keys to array
if [ -n "$FILTER_KEYS" ]; then
    IFS=',' read -ra FILTER_ARRAY <<< "$FILTER_KEYS"
    echo "📋 Filtering secrets: ${FILTER_KEYS}"
fi

# Read each line from the env file and set secrets
while IFS='=' read -r key value; do
    # Skip empty lines and comments
    if [ -z "$key" ] || [[ "$key" =~ ^# ]]; then
        continue
    fi
    
    # Remove any whitespace from key
    key=$(echo "$key" | tr -d '[:space:]')
    
    # Skip if filtering is enabled and key is not in filter list
    if [ -n "$FILTER_KEYS" ]; then
        if [[ ! " ${FILTER_ARRAY[@]} " =~ " ${key} " ]]; then
            continue
        fi
    fi
    
    # Remove any quotes and leading/trailing whitespace from the value
    value=$(echo "$value" | sed -e 's/^[[:space:]"'\'']*//g' -e 's/[[:space:]"'\'']*$//g')
    
    echo "🔑 Setting secret: $key"
    if ! wrangler secret put "$key" <<< "$value"; then
        echo "❌ Failed to set secret: $key"
        exit 1
    fi
done < "$ENV_FILE"

echo "✅ All secrets have been set successfully!"