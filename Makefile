install:
	npm ci --legacy-peer-deps # Conflicting peer dependency если без ключа легаси пытаться встать

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix