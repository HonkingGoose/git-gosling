---
id: split_up_your_commits
title: Split up your commits
description: Learn to split up your work into smaller parts
---

Most of the time, it's a good idea to keep your commits small.
Small commits are easy to reverse.
You should be able to revert a commit, and still end up with a working state.

One good way to craft your commits, is to use the `git add --patch` command.

## Selective staging

When you use `git add <filename>`, Git will just put all changes in that file into the staging area.
Sometimes you want to pick and choose what goes into your commits, so that you can split up your work in logical chunks.

You can use `git add --patch` to enter an interactive mode, where you can pick/edit/skip changes.

### Example `git add --patch` dialog

Say you have just added a new line to a `README.md` file in the `sandbox` repository.

You could use `git add README.md` but instead let's use `git add --patch`.
When you enter the patch mode you see something like this:

```git
$ git add --patch

diff --git a/README.md b/README.md
index 21652e3..717a22c 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,3 @@
 This is the readme for the sandbox repository.
+
+With the help of this project you can build an awesome sandbox.
(1/1) Stage this hunk [y,n,q,a,d,e,?]?
```

Let's explain what this means:

- You're changing the `README.md` file.
- Additions have a plus sign, and are green.
- Removals have a minus sign, and are red.
- `(1/1)` tells us this is one change, and that's the only change in the file.
- Git also asks us what we want to do with this change: `Stage this hunk [y,n,q,a,d,e,?]? `.

### Add a change to the staging area

Git is asking us if we want to `stage this hunk`.
A hunk is basically a part of a file that we changed.

```git
(1/1) Stage this hunk [y,n,q,a,d,e,?]?
```

To stage this change, enter <kbd>y</kbd> and press <kbd>Enter</kbd>.

:::tip Splitting up hunks
Sometimes it makes sense to split the hunk with the `s` option.
If the hunk is still not what you want after splitting, you can manually edit it with the `e` option.
:::

### Get a list of valid commands

You can ask for help by entering the `?` character.
This shows a list of valid options, with a short explanation:

```git
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
e - manually edit the current hunk
? - print help
```
