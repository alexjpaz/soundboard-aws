default: dist

clean:
	rm -rf dist

dist:
	mkdir -p dist
	cp clients/web/index.html dist/index.html
	cp clients/web/manifest.json dist/manifest.json
