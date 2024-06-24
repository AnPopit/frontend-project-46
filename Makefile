install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
gendiff:
	node bin/gendiff.js
test:
	npx jest
test-coverage:
	npm run test:coverage

.PHONY: install publish lint gendiff