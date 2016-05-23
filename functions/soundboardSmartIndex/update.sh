zip deploy.zip index.js
aws lambda update-function-code --function soundboardSmartIndex\
  --zip-file  fileb://deploy.zip
