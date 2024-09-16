# Create a Lambda function for each channel
resource "aws_lambda_function" "webhook_facebook_lambda" {
  filename      = "../lambda_function_facebook.zip"
  function_name = "webhook-facebook-chatbot-v2_${var.env}"
  # role          = aws_iam_role.webhook_lambda_role.arn
  role          = "arn:aws:iam::398684454127:role/lambda_full_access"
  handler       = "webhook-facebook-chatbot-v2_${var.env}.lambda_handler"
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
    Project = "webhook-facebook-v2"
    Environment = var.env
  }
  lifecycle {
    ignore_changes = all
  }

  # depends_on = [null_resource.build_lambda_packages]
}


# Allow SQS to invoke Lambda
resource "aws_lambda_event_source_mapping" "facebook_sqs_to_lambda" {
  event_source_arn = aws_sqs_queue.webhook_facebook_sqs.arn
  function_name    = aws_lambda_function.webhook_facebook_lambda.arn
  batch_size       = 1

  lifecycle {
    prevent_destroy = true
  }
}