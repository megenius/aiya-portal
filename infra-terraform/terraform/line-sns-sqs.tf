# Create SNS topic in Tokyo
resource "aws_sns_topic" "webhook_line_sns" {
  provider = aws.tokyo
  name     = "webhook-line-sns-v2_${var.env}.fifo"

  fifo_topic = true
  content_based_deduplication = true

  tags = {
    Project = "webhook-line-v2"
    Environment = var.env
  }
}

# Create SQS queue in Singapore
resource "aws_sqs_queue" "webhook_line_sqs" {
  provider = aws.singapore
  name     = "webhook-line-sqs-v2_${var.env}.fifo"
  fifo_queue = true
  content_based_deduplication = true

  tags = {
    Project = "webhook-line-v2"
    Environment = var.env
  }
}

# Create an SNS topic subscription for the SQS queue
resource "aws_sns_topic_subscription" "webhook_line_sns_to_sqs" {
  provider  = aws.tokyo
  topic_arn = aws_sns_topic.webhook_line_sns.arn
  protocol  = "sqs"
  endpoint  = aws_sqs_queue.webhook_line_sqs.arn
}

# SQS queue policy to allow SNS to send messages
resource "aws_sqs_queue_policy" "webhook_line_sns_queue_policy" {
  provider = aws.singapore
  queue_url = aws_sqs_queue.webhook_line_sqs.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "sns.amazonaws.com"
        }
        Action   = "sqs:SendMessage"
        Resource = aws_sqs_queue.webhook_line_sqs.arn
        Condition = {
          ArnEquals = {
            "aws:SourceArn" = aws_sns_topic.webhook_line_sns.arn
          }
        }
      }
    ]
  })
}