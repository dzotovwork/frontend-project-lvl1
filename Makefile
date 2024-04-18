install:
	npm ci --legacy-peer-deps # Conflicting peer dependency если без ключа легаси пытаться встать

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .