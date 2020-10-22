---
id: switching_between_branches
title: Switching between branches
---

Now we have a `feature` branch, let's explain how you can switch between branches.

## On what branch are we now?

You can always use `git branch` to get an overview of your local branches.
The branch you're on is marked with a `*` before the branch name.

```git
$ git branch

  feature
* main
```

We're on the main branch now.

## Switch to the feature branch

Let's use `git switch` to move to the feature branch:

```git
$ git switch feature

Switched to branch 'feature'
```

Git tells us: `Switched to branch 'feature'`, so we know where we are.

:::tip
If you're using a version of Git older than 2.23, use `git checkout` instead of `git switch`.

Git checkout is the old way to switch between branches.
:::

:::note
For some things you must still use the old `git checkout` command.

Try `git switch` first and use `git checkout` if Git complains at you.
:::

## Switch to main branch

Let's use `git switch` again, but now to switch back to the main branch:

```git
$ git switch main

Switched to branch 'main'
```

## Handy shortcut to return to previous branch

You can use `git switch -` to return to the previous branch.

Say you're on the feature branch, and had previously checked out the main branch.
You can return to the previously checked out main branch by using the `git switch -` shortcut:

```git
$ git switch -

Switched to branch 'main'
```

## Let's make some changes on the feature branch

### Ensure you're on the right branch

```git
$ git branch

* feature
  main
```

Switch to the feature branch if you're not on it already.

### Edit the README

```markdown title="sandbox/README.md"
This is the readme for the sandbox repository.

With the help of this project you can build an awesome sandbox.

This change is from the `feature` branch.
```

### git status

```git
$ git status

On branch feature
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### Add the changes to the staging area

```git
$ git add --patch
```

### Commit

```git
$ git commit --verbose
```

Enter `Add new sentence while on feature branch` as the commit message.

## Summary:

You learned: how to switch between branches, and how to make a commit on a branch.
The next section will cover how to use `git merge` to merge your work on the `feature` branch into the `main` branch.
