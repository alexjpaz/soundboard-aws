default: build

build:
	zip deploy.zip index.js

clean:
	rm -f deploy.zip

deploy:
	docker pull xueshanf/awscli
	docker run --rm \
	 -e AWS_ACCESS_KEY_ID=$(AWS_ACCESS_KEY_ID) \
	 -e AWS_SECRET_ACCESS_KEY=$(AWS_SECRET_ACCESS_KEY) \
	 -e AWS_DEFAULT_REGION=us-east-1 \
	 -v $(PWD):/app xueshanf/awscli\
		aws lambda update-function-code \
		  --function soundboardSmartIndex \
		  --zip-file  fileb:///app/deploy.zip
