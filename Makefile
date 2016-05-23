default: buildWeb

clean:
	rm -rf dist

buildWeb:
	cd clients/web
	make build
