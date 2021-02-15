---
id: fetching_changes_merging_git_pull
title: Fetching changes, merging, git pull
description: How to fetch changes, merge and pull with Git
---

The changes you made are on your GitHub repository only.
You want to keep working based on the changes you just made.
This section explains how you can update your local repository.

:::tip
Your GitHub repository is the `origin` remote on your local workstation.

Use `git remote --verbose` to verify your remotes.
:::

## Git status must be manually updated

First it's important to realize that `git status` is not up-to-date automatically.
Git does not check if the remote has new changes unless you tell Git to fetch changes.

### Git status before fetching

Go to your local `sandbox` repository, and run `git status`:

```git
$ git status

On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

You've merged new commits into your remote `origin/main` branch, so you're actually out of date with the `origin/main` branch.
However, Git doesn't know about this yet.
You must tell Git to _fetch_, so that Git checks for changes.

### Git fetch

Let's check for changes with `git fetch --all --prune`:

```git
$ git fetch --all --prune

remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 1.29 KiB | 263.00 KiB/s, done.
From https://github.com/username/sandbox
   bd9afb9..fff2ec6  main       -> origin/main
```

The `--all` option fetches from all remotes, which is the `origin` remote for us right now.

The `--prune` option removes references to branches that are gone on the remote.

### Git status after fetching

Run `git status` again:

```git
$ git status

On branch main
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)

nothing to commit, working tree clean
```

Now Git is aware of the changes that you made on the remote `origin/main` branch:

- You're on the `main` branch, which is behind `origin/main` by 2 commits.
- If you merge right now, Git will perform a `fast-forward` merge.
- Git offers advice to do a `git pull` to update our local branch.

Ignore the advice to do a `git pull`, we'll go through the steps manually, one at a time.

## Git diff

It's a good idea to check what you're about to merge into your own local branch.
You can use the `git diff` command to list the differences between the `main` and `origin/main` branch.

```git
$ git diff main origin/main

diff --git a/README.md b/README.md
index 808f63c..4eba824 100644
--- a/README.md
+++ b/README.md
@@ -3,3 +3,5 @@ This is the readme for the sandbox repository.
 With the help of this project you can build an awesome sandbox.

 This change is from the `feature` branch.
+
+This change is from an edit within the GitHub interface.
```

## Git merge

You've checked the incoming changes, and are ready to merge.

The syntax is: `git merge <origin_branch> <target_branch>`.
If you don't supply a `<target_branch>` Git will assume you want to merge into the branch you're currently in.

Go ahead and merge:

```git
$ git merge origin/main main

Updating bd9afb9..fff2ec6
Fast-forward
 README.md | 2 ++
 1 file changed, 2 insertions(+)
```

This command tells Git to merge the `origin/main` branch into the `main` branch.
Because we have made no further changes to our local branch, Git can do a `fast-forward` merge.
We're basically taking the commits that are on the `origin/main` branch, and put those on top of the commits on the `main` branch.

### Git status after merge

Let's see what Git status tells us after the merge:

```git
$ git status

On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

You're up to date with the `origin/main` branch again.

## Git pull

You must be thinking, it's a bit inconvenient having to do a `git fetch` and then a `git merge`.
Luckily because this is something you do all the time, there's a command to do both at once.

The `git pull` command checks for updates with `git fetch`, and then does a merge/rebase.

:::tip Git complains about `pull.rebase` variable
If Git complains about the `pull.rebase` variable not being set, read
[Advanced Git configuration, git pull rebase/merge strategy](advanced_topics/advanced_git_configuration.md#git-pull-rebase-or-merge-strategy) chapter.
:::

## Summary

You've learned that:

- `git status` is accurate only right after you've done a `git fetch`.
- `git fetch` will fetch changes.
- `git diff` is a way to check for differences between branches.
- `git merge` merges work done on a local or remote branch into your branch.
- `git pull` is basically `git fetch` and `git merge` rolled into one command.

You'll learn how to see your repository's history with `git log` in the next section.
