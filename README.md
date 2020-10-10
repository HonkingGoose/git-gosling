![Node.js CI](https://github.com/RoostingGeese/git-gosling/workflows/Node.js%20CI/badge.svg)
![Prettier](https://github.com/RoostingGeese/git-gosling/workflows/Prettier/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c74514-690d-49c9-8f0c-ed7317f02cf9/deploy-status)](https://app.netlify.com/sites/git-gosling/deploys)

# Grow from gosling to goose with Git

This project contains lessons and hands-on exercises, best practices and more.
If you've read all the material, you should be able to work with others using Git and GitHub.

## How to contribute to this project

We use [Docusaurus 2](https://v2.docusaurus.io/) to generate the website.
If you want to contribute, you must clone this repository, and follow the steps below.

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens a browser window.
Most changes can be seen live without having to restart the server.

### Making a build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Before opening a pull request, run the smoketest

```
$ yarn smoketest
```

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
