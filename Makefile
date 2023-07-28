default: install prepare build

install:
	npm ci
	pip install -r requirements.txt

prepare:
	npm run prepare

build:
	mkdocs build --strict

serve:
	mkdocs serve

smoketest:
	mkdocs build --strict
	npm run prettier
