---
id: contribute_to_a_project_by_forking
title: Contribute to a project by forking
description: Learn how to fork a project and contribute
---

If you want to contribute to a project, but don't have the necessary write rights, you can _fork_ the project.

## What's a fork?

A fork is a copy of the original project repository, you can do whatever you like on this copy.

Your fork lives in your own namespace.
Example: your username is `SnargleBarf`, you fork the repository `git-gosling`.
Your fork is then:`SnargleBarf/git-gosling`.

## Downstream/upstream

I first want to cover the _downstream/upstream_ concept.

Picture a river flowing down the mountain.
A river always has a source at the top of the mountain.
In software development we call this source upstream.

Water flows downstream to the ocean or a lake.
In software development, changes from the upstream project are flowing downstream to users.

Anybody who has a fork of the original project is downstream.

If you open a pull request at the source repository, you're providing your work to the upstream.

## Fork workflow

### Getting started

1. Create a fork via the GitHub interface.
1. Clone the fork to your local workstation.
1. Add remote pointing to `upstream` project.
1. Check configuration of the remotes with `git remote --verbose`.

### Working on a feature

1. Create a new feature branch on your local workstation.
1. Work on the feature branch.
1. Check for new changes on the upstream with `git fetch --all --prune`
1. Merge the latest changes from the upstream into your feature branch with `git merge upstream/main feature`.
1. Push your `feature` branch to your `origin` remote `git push --set-upstream origin feature`.
1. Create pull request at upstream project via GitHub interface.
1. After the upstream project merges your pull request, update your main branch: `git merge upstream/main main`.
1. Delete the merged branch on the fork (you can usually do this right from the pull request window).
1. Delete the feature branch that's on your local workstation, as the changes are now in `main`.

:::warning Never commit to the `main` branch
The only thing you should do on your fork's `main` branch is pulling in the `upstream/main` changes.

Create a new feature branch to do your work in!
:::

### Create a fork

Go to the repository for the project you want to contribute to.
Click on the _fork_ button.
GitHub will create the fork under your own namespace.

Read the [GitHub docs, Fork a repo](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo).

### Clone the fork to your local workstation

Now you have a fork on GitHub, it's a good idea to clone the fork to your local workstation.

```git
$ git clone https://github.com/your_username/repository_name
```

Git automatically creates the `origin` remote for you whenever you clone a repository.
The `origin` remote refers to your fork.

### Add remote pointing to upstream project

Git doesn't know about the upstream project yet, you must add it as a remote:

```git
$ git remote add upstream https://github.com/organization_account/repository_name
```

### Check your remote configuration

Use `git remote --verbose` to see all remotes that Git knows about:

```git
$ git remote --verbose

origin	https://github.com/username/your_fork.git (fetch)
origin	https://github.com/username/your_fork.git (push)

upstream https://github.com/original_project_username/original_repository.git (fetch)
upstream https://github.com/original_project_username/original_repository.git (push)
```

You should see an `origin` remote (your fork), and a `upstream` remote (upstream project).

### Syncing a fork

You must manually synchronise your fork with the upstream project.

:::tip
Read the [GitHub docs, Syncing a fork](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).
:::

:::tip
Remember to delete merged branches on your local workstation as well.

You can get an overview of the branches that are merged with:

```git
$ git branch --merged
```

Note: this will only work when the repository uses normal merges.
You won't see branches that are rebased or squash-merged into the upstream mainline branch!
:::

:::tip
You can delete a branch that is merged by doing:

```git
$ git branch -d <name_of_branch_to_delete>
```

:::

:::tip
If you want to force the deletion of a branch, do:

```git
$ git branch -D <name_of_branch_to_delete>
```

:::

### Git fetch and forks

Use `git fetch --all --prune` to fetch from all repositories and prune/delete references to branches that are gone on the remotes.
The `--prune` option will not throw away any of your local branches.

### Git status and forks

Use `git fetch --all --prune` before running a `git status` or `git log` command.
This will ensure that you get current output for those commands.

### Git log and forks

First fetch all changes, then use `git log --all --decorate --oneline --graph` to get a full overview of all branches.
