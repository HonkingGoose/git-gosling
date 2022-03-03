default: install prepare build

install:
	npm ci
	pip install -r requirements.txt

prepare:
	npm run prepare

build:
	mkdocs build

serve:
	mkdocs serve

smoketest:
	mkdocs build
	npm run prettier
