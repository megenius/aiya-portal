#!/bin/bash

# Exit on error
set -e

# Default values
PROJECT_ID="aiya-x"
TOPIC_NAME="webhook-line-v3_dev"
SERVICE_ACCOUNT_NAME="webhook-pubsub-sa"
KEY_FILE="service-account-key.json"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --project-id)
      PROJECT_ID="$2"
      shift 2
      ;;
    --topic)
      TOPIC_NAME="$2"
      shift 2
      ;;
    --service-account)
      SERVICE_ACCOUNT_NAME="$2"
      shift 2
      ;;
    --key-file)
      KEY_FILE="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate required parameters
if [[ -z "$PROJECT_ID" ]] || [[ -z "$TOPIC_NAME" ]]; then
  echo "Usage: $0 --project-id PROJECT_ID --topic TOPIC_NAME [--service-account SERVICE_ACCOUNT_NAME] [--key-file KEY_FILE]"
  exit 1
fi

echo "Setting up Pub/Sub infrastructure..."

# Ensure gcloud is configured with the correct project
gcloud config set project "$PROJECT_ID"

# Create the Pub/Sub topic if it doesn't exist
if ! gcloud pubsub topics describe "$TOPIC_NAME" &>/dev/null; then
  echo "Creating Pub/Sub topic: $TOPIC_NAME"
  gcloud pubsub topics create "$TOPIC_NAME"
else
  echo "Pub/Sub topic $TOPIC_NAME already exists"
fi

# Create service account if it doesn't exist
if ! gcloud iam service-accounts describe "$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" &>/dev/null; then
  echo "Creating service account: $SERVICE_ACCOUNT_NAME"
  gcloud iam service-accounts create "$SERVICE_ACCOUNT_NAME" \
    --display-name="Webhook Pub/Sub Service Account"
else
  echo "Service account $SERVICE_ACCOUNT_NAME already exists"
fi

# Grant publisher permissions to the service account
echo "Granting Pub/Sub publisher role to service account"
gcloud pubsub topics add-iam-policy-binding "$TOPIC_NAME" \
  --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/pubsub.publisher"

# Create new key for service account
echo "Creating new service account key"
gcloud iam service-accounts keys create "$KEY_FILE" \
  --iam-account="$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com"

echo "Setup complete! Service account key saved to $KEY_FILE"
echo "
Next steps:
1. Save these environment variables in your application:
   PUBSUB_PROJECT_ID=$PROJECT_ID
   PUBSUB_TOPIC=$TOPIC_NAME

2. Use the generated service account key ($KEY_FILE) for authentication
3. Keep the key file secure and never commit it to version control
"