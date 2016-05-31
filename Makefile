default: build

build:
	cd clients/web && make build
	cd functions/soundboardSmartIndex && make build

deploy:
	cd clients/web && make deploy
	cd functions/soundboardSmartIndex && make deploy
