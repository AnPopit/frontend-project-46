install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: install publish lint gendiff