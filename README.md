![Docusaurus build](https://github.com/HonkingGoose/git-gosling/workflows/Docusaurus%20build/badge.svg)
![Prettier](https://github.com/HonkingGoose/git-gosling/workflows/Prettier/badge.svg)

# Grow from gosling to goose with Git

This project contains lessons and hands-on exercises, best practices and more.
If you've read all the material, you should be able to work with others using Git and GitHub.

## How to contribute to this project

We use [Docusaurus 2](https://v2.docusaurus.io/) to generate the website.
If you want to contribute, you must clone this repository, and follow the steps below.

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm run start
```

This command starts a local development server and opens a browser window.
Most changes can be seen live without having to restart the server.

### Making a build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Before opening a pull request, run the smoketest

```bash
$ npm run smoketest
```

### Fix Prettier style issues

```bash
$ npm run prettier-fix
```

### After upgrading Docusaurus packages

After upgrading any Docusaurus packages `@docusaurus/core` .etc run the following command:

```bash
$ npm run after-upgrade
```

This command runs the `docusaurus clear` command which clears the cache directories.
