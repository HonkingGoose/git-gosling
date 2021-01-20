![Node.js CI](https://github.com/RoostingGeese/git-gosling/workflows/Node.js%20CI/badge.svg)
![Prettier](https://github.com/RoostingGeese/git-gosling/workflows/Prettier/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c74514-690d-49c9-8f0c-ed7317f02cf9/deploy-status)](https://app.netlify.com/sites/git-gosling/deploys)
[![Renovate Badge](https://img.shields.io/badge/renovate-enabled-brightgreen)](https://github.com/marketplace/renovate)

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
