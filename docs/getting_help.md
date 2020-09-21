---
id: getting_help
title: Getting help
---

## Listen to what Git tells you

Git will give lots of helpful tips, take for example this `git status` output:

```git
$ git status

On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   docs/getting_help.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Say you want to add your changes to the staging area, Git tells you how:

```git
(use "git add <file>..." to update what will be committed)
```

If you want to throw away your changes, again Git tells you how:

```git
(use "git restore <file>..." to discard changes in working directory)
```

As you can see, Git really does try to help you.
So let Git help you, and read what it's telling you.

## Use `git status`

Remember to use `git status` whenever you're stuck or unsure what to do next.
Usually Git will offer some advice to get going again, or undo things.

## Git's built-in manual

Git has a built-in manual, which you can read with any of the following commands:

```
$ git help <verb>
$ git <verb> --help
$ man git <verb>
```

Say you need more information on the `git config` command.
You can read the manual for the `git config` command by doing any of the following:

- `$ git help config`
- `$ git config --help`
- `$ man git config`

## Read a proper book (ProGit2)

I recommend that you read the [Pro Git 2 book](https://git-scm.com/book/en/v2) online, it does not cost any money.
The ProGit2 book covers everything I talk about in this guide in more depth and more detail.
