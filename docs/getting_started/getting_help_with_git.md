---
id: getting_help_with_git
title: Getting help with Git
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
Usually Git will offer some advice to get going again, or tell you how to undo things.

## Git's built-in manual

Git has a built-in manual, which you can read with any of the following commands:

```git
$ git help <verb>
$ git <verb> --help
$ man git <verb>
```

### Example: help for `git config`

Say you need more information on the `git config` command.
You can read the manual for the `git config` command by doing any of the following:

- `$ git help config`
- `$ git config --help`
- `$ man git config`

## Use the `-h` option to view a short help message

Say you forgot what options the `git add` command takes.
You can use `git add -h` to view a short help message.

```git
$ git add -h

usage: git add [<options>] [--] <pathspec>...

    -n, --dry-run         dry run
    -v, --verbose         be verbose

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    --renormalize         renormalize EOL of tracked files (implies -u)
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run
    --chmod (+|-)x        override the executable bit of the listed files
    --pathspec-from-file <file>
                          read pathspec from file
    --pathspec-file-nul   with --pathspec-from-file, pathspec elements are separated with NUL character
```

## Read a proper book (ProGit2)

I recommend that you read the [Pro Git 2 book](https://git-scm.com/book/en/v2) online, it does not cost any money.
The ProGit2 book covers everything I talk about in this guide in more depth and more detail.

## Use a Git Cheat Sheet

It can be hard to keep track of all the Git commands that you can use, and what they do.
To help you with learning Git, you can use a cheat sheet.

I recommend this [Git Cheat Sheet made by GitHub](https://training.github.com/downloads/github-git-cheat-sheet.pdf).
