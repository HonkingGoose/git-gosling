---
id: conventions
title: Conventions
---

## Command line

The prompt for a Linux terminal is usually a `$` sign, this tells you that you're logged in as a user with normal rights.
If you're logged in as a root user, the terminal prompt will be a `#` sign.

Example of an Ubuntu prompt, the last character is a `$` sign:

```bash
computername@username:~/$
```

:::caution
Do not copy the `$` or `#` sign when entering a Git command.
:::

### Example of command line input

The `$` sign or `#` sign precedes a command that you can enter in your command line.
The rest of the text in the code block is Git output.

For example `$ git status` tells you to enter `git status` in your terminal:

```git
$ git status

On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
```

We will cover the `git status` command in more detail later.
