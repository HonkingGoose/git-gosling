---
id: sandbox_create_branch
title: Create a new branch
---

It's time to learn about branches.
Think of branches as a place to organize your work.

## Frequently asked questions about branches

### Why is my branch called `master` but the examples use `main`?

By default, Git will use `master` whenever it creates a new repository.
I've changed the default branch name from `master` to `main` for my examples.

If you have a `master` branch, just substitute `main` in our examples with `master`.

:::tip
Starting from Git 2.28 you can set the default branch name for new repositories.
Read this section of my guide: Advanced Git configuration](advanced_git_configuration.md) to learn how to do this.
:::

### Can I rename a branch?

Yes you can, for more on this, read the section **Changing a branch name** in the [ProGit2 book](https://git-scm.com/book/en/v2/Git-Branching-Branch-Management)

:::warning
Prepare before you rename a branch like `master`, `main`, `trunk` or `mainline`!

Remember that changing the mainline branch name for a repository is a breaking change!
Discuss this move with your team before you start!

Read the section on _Changing the master branch name_ in the [ProGit2 book](https://git-scm.com/book/en/v2/Git-Branching-Branch-Management) to learn all you need to know.
:::

## Listing all branches

The `git branch` command can be used to list all branches:

```git
$ git branch

* main
```

We only have one branch right now: the `main` branch.
This is the branch that Git created for us when we created the sandbox repository with `git init`.

## Create a new branch

Before you create a new branch, it's a good idea to check on what branch you are.
The branch you create will be based on the branch you're on now.

```git
$ git status

On branch main
nothing to commit, working tree clean
```

Create a new branch:

```git
$ git branch feature
```

Let's check if we actually have a `feature` branch now:

```git
$ git branch

  feature
* main
```

The `*` character tells us we're on the `main` branch.

The next section of the guide covers how to use `git switch` to switch between branches.
