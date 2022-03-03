# Contributing

Your feedback and pull requests are very welcome!

We use MkDocs + Material for MkDocs to build the website.

If you find a typo or other small textual error on a published page, click on the "Edit this page" link at the bottom of the affected page.
This link will take you to the right file on GitHub to make the edit and open a pull request.

For larger edits we recommend that you create a development environment, so that you can preview your work.

## Creating a development environment

You have two options to get a development environment going:

- Use Gitpod
- Setup local workstation

We _strongly recommend_ you use Gitpod.

### Gitpod

The easiest and fastest way to set up a development environment is via Gitpod:

1. Sign in with your GitHub account to Gitpod
1. Check your Git credentials in Gitpod and adjust them if necessary
1. Create a fork of `honkinggoose/git-gosling` by clicking on the "Fork" button in the GitHub interface
1. Ensure Gitpod can access your forked repository, and has `write` level rights to the repository
1. Open your forked repository with Gitpod
1. Create a new Git branch to start your work on
1. Once you are done, make a new commit, and push your changes
1. You can now close the Gitpod workspace

Whenever you start work on a new bug/feature, sync you fork so you're up-to-date with upstream, and then start a new Gitpod workspace from your fork to do your work in.

### Local workstation

To build the site locally on your workstation you'll need:

- Node 14
- npm 6 (comes pre-installed with Node 14)
- Python 3.8

Follow these steps to setup your local development environment:

1. Install the latest version of Python 3.8
1. Install Node 14 (npm 6 is bundled with Node 14)
1. Install Git, if you haven't already
1. Make a fork of this repository via GitHub (click on the "Fork" button)
1. Clone your fork repository with `git clone link_to_fork`
1. Tell Git that `HonkingGoose/git-gosling` is the `upstream` remote: `git remote add upstream https://github.com/HonkingGoose/git-gosling.git`
1. Make sure you have all the data from the `upstream` remote by doing a `git fetch --all --prune`
1. Do `git merge upstream/main main` to update your local `main` branch
1. Make you're sure on the local main branch with `git switch main` (do not make your own commits on the local `main` branch!)
1. Create a new branch to do your work on with `git switch -c descriptive_name_for_branch`
1. Run `npm ci` to download and install all the dependencies for this project with npm
1. Run `make smoketest` to ensure everything works before you start your work
1. You can get a live preview with `npm run start`, this starts a local development server and opens a browser window, most changes can be seen live without having to restart the server
1. Make your changes
1. When you're done, run the Prettier formatter with `npm run prettier-fix`
1. Use the `git add` command to stage your work and commit with `git commit -v`
1. Run the smoketest with `make smoketest`
1. Push your local feature branch to your GitHub fork with `git push --set-upstream origin descriptive_name_for_branch`
1. Open a pull request by going to this projects repository and going to the "Pull requests" tab
1. GitHub will show your recently pushed branches here, and suggest you make a pull request, if your branch does not show up, click on the "New pull request" button
1. Your pull request will get reviewed, and if the maintainers like it, it will get merged.
1. After your pull request is merged, you can remove your local branch with `git branch -D branch_name`
