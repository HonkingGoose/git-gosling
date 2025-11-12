default: install prepare build

install:
	npm ci
	pip install -r requirements.txt

prepare:
	npm run prepare

build:
	zensical build --strict

serve:
	zensical serve

smoketest:
	zensical build --strict
	npm run prettier
