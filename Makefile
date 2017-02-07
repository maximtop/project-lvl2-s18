install:
	yarn

clean:
	rm -rf dist

build: clean
	npm run build

run:
	npm run babel-node -- 'src/bin/gendiff.js' test1 test2

test:
	npm run test

publish:
	npm publish

lint:
	npm run eslint