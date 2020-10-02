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

### This guide uses long form Git command options

I want to make it as easy as possible to learn what Git command options do.
That's why I use the long form options, instead of the shorthand options.

Take a look at this `git commit` example:

```git
git commit -am "Create a commit"
```

This example forces the reader to figure out what `-am` means.
It's not immediately clear what's going on.
Let's compare that with using the full options instead:

```git
git commit --all --message="Create a commit"
```

A new reader can see:

- Git commit does something with `--all`, probably all files.
- Git commit creates some kind of message `"Create a commit"`.

:::tip
If you're sharing Git code/tips with others, use the long form options.
:::
