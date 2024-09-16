#!/bin/bash

# Set default values
ENV="prod"
ACTION="plan"

# Function to display script usage
usage() {
    echo "Usage: $0 [-e <environment>] [-a <action>]" 1>&2
    echo "  -e    Environment (default: dev)"
    echo "  -a    Action: plan or apply (default: plan)"
    exit 1
}

# Parse command line options
while getopts ":e:a:c:" opt; do
    case ${opt} in
        e )
            ENV=$OPTARG
            ;;
        a )
            ACTION=$OPTARG
            ;;
        \? )
            usage
            ;;
    esac
done

# Validate action
if [[ "$ACTION" != "plan" && "$ACTION" != "apply" ]]; then
    echo "Invalid action. Use 'plan' or 'apply'."
    usage
fi

# Navigate to Terraform directory
cd terraform

# Initialize Terraform
terraform init

# Run Terraform
if [[ "$ACTION" == "plan" ]]; then
    terraform plan -var="env=${ENV}"
elif [[ "$ACTION" == "apply" ]]; then
    terraform apply -var="env=${ENV}" -auto-approve
fi

# Return to root directory
cd ..

echo "Deployment process completed"
