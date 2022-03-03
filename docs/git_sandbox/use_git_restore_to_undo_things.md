---
title: Use git restore to undo things
---

## Make a silly edit

Let's edit the README file again.
Open it with your editor, and make some silly changes, and save the file:

```markdown title="sandbox/README.md"
This is the readme for the sandbox repository.

With the help of this project you can build an awesome sandbox.

Snarglebarf snorgleborf.
```

Oops!
What's this `Snarglebarf snorgleborf.`?
Let's use Git to recover from this silly edit.

## The status after the silly edit

Use `git status` to figure out what happened.

```git
$ git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

Look at that, `git status` tries to help us:

```git
use "git restore <file>..." to discard changes in working directory`
```

Follow Git's advice:

```git
$ git restore README.md
```

## The status after restoring

Let's use `git status` again:

```git
$ git status

On branch main
nothing to commit, working tree clean
```

As you can see: there's nothing to commit, and our working tree is clean.

You've learned how to use `git restore` to undo bad changes.

## Warnings for `git restore`

When you use `git restore <file>` to discard changes in the working directory, those changes cannot be retrieved.

It's safe to use `git restore <file> --staged`, as that only removes changes from the staging area.
