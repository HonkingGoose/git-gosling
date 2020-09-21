![Node.js CI](https://github.com/RoostingGeese/git-gosling/workflows/Node.js%20CI/badge.svg)

# Website

This website uses [Docusaurus 2](https://v2.docusaurus.io/) to generate the website.

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

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
