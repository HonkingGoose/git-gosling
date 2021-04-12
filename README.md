![Docusaurus build](https://github.com/HonkingGoose/git-gosling/workflows/Docusaurus%20build/badge.svg)
![Prettier](https://github.com/HonkingGoose/git-gosling/workflows/Prettier/badge.svg)

# Git Gosling

> Grow from gosling to goose with Git

Taking your first steps with Git?
Grow from gosling to goose with this Git guide.
The guide is easy to follow, you'll learn by doing, and you'll get smart with Git.

## Introduction

If you want to learn Git you're at the right place!
Go to the [Git Gosling](https://git-gosling.vercel.app/) website to start your journey.

## Contributing

Your feedback and pull requests are very welcome!

If you find a typo or other small textual error on a published page, click on the "Edit this page" link at the bottom of the affected page.
This link will take you to the right file on GitHub to make the edit and open a pull request.

For larger edits we recommend that you setup a development environment, so that you can preview your work.

### Creating a development environment

#### What you'll need before starting

We use [Docusaurus 2](https://docusaurus.io/) to build the website.
To build the website locally you'll need:

- Node 14
- npm 6 (comes pre-installed with Node 14)

#### Steps to get started

Follow these steps to setup your local development environment:

1. Install Node 14 (npm 6 is bundled with Node 14)
1. Install Git (if you haven't already)
1. Make a fork of this repository via GitHub (click on the "Fork" button)
1. Clone your fork repository with `git clone link_to_fork`
1. Tell Git that `HonkingGoose/git-gosling` is the `upstream` remote: `git remote add upstream https://github.com/HonkingGoose/git-gosling.git`
1. Make sure you have all the data from the `upstream` remote by doing a `git fetch --all --prune`
1. Do `git merge upstream/main main` to update your local `main` branch
1. Make you're sure on the local main branch with `git switch main` (do not make your own commits on the local `main` branch!)
1. Create a new branch to do your work on with `git switch -c descriptive_name_for_branch`
1. Run `npm ci` to download and install all the dependencies for this project with npm
1. Run `npm run smoketest` to ensure everything works before you start your work
1. You can get a live preview with `npm run start`, this starts a local development server and opens a browser window, most changes can be seen live without having to restart the server
1. Make your changes
1. When you're done, run the Prettier formatter with `npm run prettier-fix`
1. Use the `git add` command to stage your work and commit with `git commit -v`
1. Run the smoketest with `npm run smoketest`
1. Push your local feature branch to your GitHub fork with `git push --set-upstream origin descriptive_name_for_branch`
1. Open a pull request by going to this projects repository and going to the "Pull requests" tab
1. GitHub will show your recently pushed branches here, and suggest you make a pull request, if your branch does not show up, click on the "New pull request" button
1. Your pull request will get reviewed, and if the maintainers like it, it will get merged.
1. After your pull request is merged, you can remove your local branch with `git branch -D branch_name`

### After Docusaurus package upgrades

After `@docusaurus/` packages are upgraded you should run the following command:

```bash
$ npm run after-upgrade
```

This command runs the `docusaurus clear` command which clears the Docusaurus cache directories.

## Thanks

### Docusaurus v2

Thank you [Docusaurus v2](https://docusaurus.io/) for making this project possible!

### Algolia DocSearch

Thank you Algolia for providing this project with [DocSearch](https://docsearch.algolia.com/) functionality!
The search works great, and was very easy to get setup with Docusaurus v2.

### Vercel

Thank you [Vercel](https://vercel.com/) for providing this project with free hosting and a super handy website preview functionality!
