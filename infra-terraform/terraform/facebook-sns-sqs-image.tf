# Create SNS topic in singapore
resource "aws_sns_topic" "webhook_facebook_sns_image" {
  provider = aws.singapore
  name     = "webhook-facebook-sns-image-v2_${var.env}.fifo"

  fifo_topic = true
  content_based_deduplication = true

  tags = {
    Project = "webhook-facebook-v2"
    Environment = var.env
  }
}

# Create SQS queue in Singapore
resource "aws_sqs_queue" "webhook_facebook_sqs_image" {
  provider = aws.singapore
  name     = "webhook-facebook-sqs-image-v2_${var.env}.fifo"
  fifo_queue = true
  content_based_deduplication = true

  tags = {
    Project = "webhook-facebook-v2"
    Environment = var.env
  }
}

# Create an SNS topic subscription for the SQS queue
resource "aws_sns_topic_subscription" "webhook_facebook_sns_to_sqs_image" {
  provider  = aws.singapore  # Change this to match the SNS topic's region
  topic_arn = aws_sns_topic.webhook_facebook_sns_image.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.webhook_facebook_sqs_image.arn
}

# SQS queue policy to allow SNS to send messages
resource "aws_sqs_queue_policy" "webhook_facebook_sns_queue_policy_image" {
  provider = aws.singapore
  queue_url = aws_sqs_queue.webhook_facebook_sqs_image.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "sns.amazonaws.com"
        }
        Action   = "sqs:SendMessage"
        Resource = aws_sqs_queue.webhook_facebook_sqs_image.arn
        Condition = {
          ArnEquals = {
            "aws:SourceArn" = aws_sns_topic.webhook_facebook_sns_image.arn
          }
        }
      }
    ]
  })
}