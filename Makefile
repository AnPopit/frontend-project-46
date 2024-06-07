install: 
	npm ci

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci --legacy-peer-deps

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

.PHONY: install publish lint gendiff