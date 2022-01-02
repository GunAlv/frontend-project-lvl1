publish:
	npm publish --dry-run

install:
	npm ci

brain-games:
	bin/brain-games.js

lint:
	npx eslint .
