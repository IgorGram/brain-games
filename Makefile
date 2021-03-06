install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

startEven:
	npm run babel-node -- src/bin/brain-even.js

startCalc:
	npm run babel-node -- src/bin/brain-calc.js

startGcd:
	npm run babel-node -- src/bin/brain-gcd.js

startBalance:
	npm run babel-node -- src/bin/brain-balance.js

startProgression:
	npm run babel-node -- src/bin/brain-progression.js

startPrime:
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	npm run eslint .