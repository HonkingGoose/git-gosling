---
id: setup_your_git_sandbox
title: Setup your Git sandbox
description: Setup your Git sandbox
---

The best way to learn is by doing, so let's dive right in!
Let's create a safe place for you to try things.

Follow the steps listed below.

:::caution This guide uses Linux Bash shell commands
The instructions in this guide are for Linux Bash shells only.

The commands listed in this guide don't work with PowerShell terminals.

The commands listed in this guide also don't work with the macOS Terminal (which defaults to the Z shell `zsh`).

If you're copy/pasting a Bash shell command and it doesn't work with your terminal, search online for the proper command.
:::

:::tip Git for Windows, use Bash shell
When you're using Windows, use Git for Windows's Bash shell emulation.

Do not use the default `cmd.exe` terminal or PowerShell.

You can find the Git Bash shell by going to the Windows Start menu and searching for "git".
:::

## Steps to create your sandbox

### Navigate to the home directory

You can change directories with the `cd` command.
If you just use `cd` and provide no directory, you'll go to your home directory:

```bash
$ cd
```

### Create a new directory

Create a new directory with `mkdir` and use `cd` to navigate to the sandbox directory:

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
