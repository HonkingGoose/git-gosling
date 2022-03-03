---
title: Use a .gitignore file
---

It's a good idea to tell Git to ignore certain files/directories.
This stops you from committing things that you don't want to commit.
You do this by creating a `.gitignore` file.

## What kinds of files you should ignore

In general, it's a good idea to ignore the following kinds of files and directories:

- Files containing secrets
- Directories that contain development/production dependencies
- Environment configuration files
- Files produced by your build system
- Log files

## Getting a basic gitignore template

### Framework gitignore

Most frameworks create a basic `.gitignore` file for you when you start a new project.

### GitHub gitignore templates

If you're not using a framework, grab a `.gitignore` from [GitHub's gitignore templates repository](https://github.com/github/gitignore).
When you create a repository via the GitHub web interface, you can add a `.gitignore` template right away.

## Gitignore basics

### Filename and location

The file must be called `.gitignore` and it must be in the repository's root directory.

It's possible to put `.gitignore` files into subdirectories of your project.
I won't talk about this, as this is an advanced use-case.

### Syntax

Gitignore files have their own syntax to specify what you want to ignore.
I'm not going to cover this in depth, and will just point you to the resources you can use to learn more.

You can find a list of valid `.gitignore` syntax in the gitignore help files:

```git
$ git --help gitignore
```

Or you can read the help files online at [git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore).

### Commit your gitignore file

You must commit the `.gitignore` file.
This way everybody who contributes to your project has the same `.gitignore` file.
