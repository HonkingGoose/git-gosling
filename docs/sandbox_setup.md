---
id: sandbox_setup
title: Setup your Git sandbox
---

The best way to learn is by doing, so let's dive right in!
Let's first create a safe place for you to try things out.
Follow the steps listed below.

## Steps to create your sandbox

:::tip
Use the Git for Windows's bash shell emulation when you use Windows.

You can find the Git Bash shell by going to the Windows Start menu and searching for "git".
:::

:::warning
These instructions are for `Bash` shells only.
:::

### Navigate to the home directory

You can change directories with the `cd` command.
If you just use `cd` and provide no directory, you'll go to your home directory:

```bash
$ cd
```

### Create a new directory

Create a new directory with `mkdir` and use `cd` to go to the sandbox directory:

```bash
$ mkdir sandbox
$ cd sandbox
```

### Create a Git repository

Create a Git repository with the `git init` command.

```git
$ git init
Initialized empty Git repository in /home/username/sandbox/.git/
```

Git tells you it created a new Git repository in your sandbox directory.
Go to the next page to see what just happened.
