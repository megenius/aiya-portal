remove all terraform states 
```

check plan
```
./script/deploy.sh
```


deploy
```
./script/deploy.sh -a apply
```



STEP1
./clean.sh

Download last version for lambda

# For Facebook Image Lambda
terraform import aws_lambda_function.webhook_facebook_lambda_image webhook-facebook-chatbot-image-v2_dev

# For Facebook Lambda
terraform import aws_lambda_function.webhook_facebook_lambda webhook-facebook-chatbot-v2_dev

# For Line Lambda
terraform import aws_lambda_function.webhook_line_lambda webhook-line-chatbot-v2_dev