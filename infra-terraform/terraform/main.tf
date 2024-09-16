# Main Terraform configuration
provider "aws" {
  # default region
  region = var.region
}

# Configure the AWS provider for ap-northeast-1 (Tokyo)
provider "aws" {
  alias  = "tokyo"
  region = "ap-northeast-1"
}

# Configure the AWS provider for ap-southeast-1 (Singapore)
provider "aws" {
  alias  = "singapore"
  region = "ap-southeast-1"
}
