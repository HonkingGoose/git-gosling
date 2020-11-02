---
id: your_first_merge
title: Your first merge
---

We've done some work on the `feature` branch, and our work is ready to be merged into the `main` branch.
You can merge your work into another branch with `git merge`.
First, let's recap where we are now.

## Recap before merge

Let's use `git log` to get a recap of the current situation.
We'll cover `git log` fully in a later section.

What I'm telling Git here: show me the history of `--all` branches, `--decorate` it with ASCII characters, put the commit messages on `--oneline` and display it as a `--graph`.

```git
$ git log --all --decorate --oneline --graph

* bd9afb9 (HEAD -> feature) Add new sentence while on feature branch
* c79426c (main) Add another line to the README
* d663c4d Create README
```

As you can tell, we have made a commit on `feature`, that points towards a commit on the `main` branch (`c79426c`).

## Merge process

### Switch to the target branch

Make sure you're on the target branch, which is `main` for us right now.

```git
$ git switch main
```

### Git merge full syntax

The `git merge` command tells Git to merge a branch into another branch.

The full syntax is: `git merge origin_branch target_branch`.
In our case the origin branch is the `feature` branch, and the target is our `main` branch:

```git
$ git merge feature main

Updating c79426c..bd9afb9
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
```

Because the `main` branch did not have newer commits, we can do a fast-forward merge.
If the `main` branch was ahead of our feature branch, Git would create a merge commit if needed.

### Git merge shorthand

When you're on the target branch you don't need to tell Git what branch to merge into.
Git will assume you want to merge into the current branch.
The shorthand form is: `git merge origin_branch`.

```git
$ git status

On branch main
nothing to commit, working tree clean

$ git merge feature

Updating c79426c..bd9afb9
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
```

:::tip
Make sure you're on the target branch with `git status` or `git branch` before entering a shorthand `git merge` command!
:::

## Recap after our merge

Let's check with `git log` what we end up with:

```git
$ git log --all --decorate --oneline --graph

* bd9afb9 (HEAD -> main, feature) Add new sentence while on feature branch
* c79426c Add another line to the README
* d663c4d Create README
```

Commit `bd9afb9` applies to the `main` branch cleanly and Git was able to "fast-forward".
The `main` branch and `feature` branch both point to the same commit (`bd9afb9`).

Note that Git does not remove any branches automatically:

```git
$ git branch

  feature
* main
```

Our work from the `feature` branch is now on the `main` branch.
We can delete the `feature` branch, as we no longer need it:

```git
$ git branch --delete feature
```

Now only the `main` branch remains:

```git
$ git log --all --decorate --oneline --graph

* bd9afb9 (HEAD -> main) Add new sentence while on feature branch
* c79426c Add another line to the README
* d663c4d Create README

$ git branch

* main
```

## Summary

You have learned how to merge your work with `git merge`.

:::note
If Git cannot do a clean merge, you will get a _merge conflict_.
This means you have to tell Git what changes to keep, and what changes to reject.

Read the [best practices](best_practices/dealing_with_merges.md) part of the guide for advice on preventing merge conflicts.
:::
