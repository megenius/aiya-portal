# Create a Lambda function for each channel
resource "aws_lambda_function" "webhook_line_lambda_image" {
  filename      = "../lambda_function_line.zip"
  function_name = "webhook-line-chatbot-image-v2_${var.env}"
  # role          = aws_iam_role.webhook_lambda_role.arn
  role          = "arn:aws:iam::398684454127:role/lambda_full_access"
  handler       = "webhook-line-chatbot-image-v2_${var.env}.lambda_handler"
  runtime       = "python3.9"
  memory_size   = 512
  timeout       = 60
  layers        = ["arn:aws:lambda:ap-southeast-1:398684454127:layer:py39-5:13"]

  environment {
    variables = {
      ENV     = var.env
    }
  }

  tags = {
    Project = "webhook-line-v2"
    Environment = var.env
  }

  lifecycle {
    ignore_changes = all
  }

  # depends_on = [null_resource.build_lambda_packages]
}


# Allow SQS to invoke Lambda
resource "aws_lambda_event_source_mapping" "line_sqs_to_lambda_image" {
  event_source_arn = aws_sqs_queue.webhook_line_sqs.arn
  function_name    = aws_lambda_function.webhook_line_lambda_image.arn
  batch_size       = 1

  lifecycle {
    ignore_changes = all
  }
}