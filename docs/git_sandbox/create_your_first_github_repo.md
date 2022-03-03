---
title: Create your first GitHub repository
---

Let's go create your first GitHub repository!

Make sure you're logged in to GitHub.
From now on, all actions in this guide assume you're logged into GitHub.

### Create new repository

When you're logged in, you will see a black navigation bar.
You will also see your GitHub profile icon.
Click on the + sign next to your profile icon, and select New repository from the drop-down menu.

Now you are at the **Create a new repository** page.

Follow these steps:

1. Enter a name for the repository: `sandbox`.
1. Skip the description field.
1. Set the visibility to private.
1. Skip the "Initialize this repository with" section.
1. Click on the green "Create this repository button"

<!-- prettier-ignore -->
!!! caution "Be aware of repository visibility"
    Select the right visibility level when you create a repository.

    **Public** means that anybody can see what's in your repository.

    **Private** means only you (and people you invite) can view the repository.

<!-- prettier-ignore -->
!!! tip "GitHub docs, creating a new repository"
    If you get stuck, read the [GitHub docs, Creating a new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository).

### After creating your repository

GitHub will help you with the next steps by listing the steps you can take.
We'll follow these steps together and learn what they do.

<!-- prettier-ignore -->
!!! note
    If you've done this before already, you can just use the commands that GitHub tells you to use.
    This sandbox explains the **...or push an existing repository from the command line** commands that GitHub gives you.

## Navigate to your sandbox directory

Go back to the command line, and navigate to your `sandbox` directory.
Use `git status` to check the status of your repository.

```
$ cd sandbox
$ git status

On branch main
nothing to commit, working tree clean
```

### Add GitHub repository to list of remotes

First you must add the newly created GitHub repository to the list of _remotes_:

```git
$ git remote add origin https://github.com/your_username/sandbox.git
```

To use your GitHub repository, it **must** be listed as a remote.

I will cover remotes fully in another section of the guide.
For now, it's enough to know that a remote is a repository that is _elsewhere_.
For the purposes of this guide, the `origin` remote refers to the repository on GitHub.

<!-- prettier-ignore -->
!!! note "About `main` and `origin/main`"
    Remember: `main` is your local branch, `origin/main` is the branch on the GitHub repository.

    You can update your local and remote branches by pushing and/or pulling.
    Learn more about this by following the guide.

    For now, know that you pull to get changes from others and push to make your changes available to others.

### Check current branch name

GitHub is phasing out the `master` branch in favor of using a `main` branch.

Let's check what branch name we're using now with `git status`:

```git
$ git status

On branch main
nothing to commit, working tree clean
```

If git status returns `On branch master`, we'll need to change the branch name.

### Change branch name from `master` to `main`

If Git status shows you have a `main` branch, skip this step.

Use `git branch --move` to replace the `master` branch with a `main` branch:

```git
$ git branch --move master main
```

<!-- prettier-ignore -->
!!! warning
    Changing the default branch name for your repository on GitHub is a breaking change.
    Do not change the name of a branch like `master`, `main`, `mainline` or `trunk` without discussing it with your team first!
    Search for usages of the old branch name in your code.

### Push your local repository to GitHub

Now we've told Git about our remote, and changed the branch name, we're ready to _push_ our work to GitHub.

Push your repository to GitHub with `git push --set-upstream origin main`.
The `--set-upstream` part tells Git that we want to track the `origin/main` remote branch.

Git will ask for your username and password/personal access token:

```git
$ git push --set-upstream origin main

Username for 'https://github.com': enter_your_username
Password for 'https://your_username@github.com': enter_your_password_or_PAT
```

<!-- prettier-ignore -->
!!! tip "2FA and authentication to GitHub via Git CLI"
    If you enabled two-factor authentication (2FA) then you must create a personal access token (PAT).
    Your GitHub password will not work.

    Follow the steps in the [GitHub docs, Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
    Use the PAT instead of your GitHub password whenever you access GitHub via the CLI.

### Git output after push

After you've pushed your repository, Git shows a lot of information.
We'll focus on the important bits at the bottom:

```git
To https://github.com/your_username/sandbox.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Git is telling us that we:

- Pushed the repository to GitHub.
- Created a new branch on the GitHub sandbox repository that's called `main`.
- Told Git to track the remote branch `origin/main`.

### Check your repository on GitHub

Go to [GitHub.com](https://github.com/) while logged in, you will see a list of repositories.
Click on your `sandbox` repository, and go explore.
Do not edit the file in the GitHub repository, we'll do that together in the next section.

## Summary

You pushed your first repository to GitHub.

The next section will cover how to make changes from within the GitHub interface.
