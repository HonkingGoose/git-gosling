---
id: sandbox_git_add_after_changed_file
title: Add extra lines to file
---

Let's add another sentence to the readme.
Open the `README.md` file with your text-editor.
It should look like this when you're done:

```markdown title="sandbox/README.md"
This is the readme for the sandbox repository.

With the help of this project you can build an awesome sandbox.

```

Great, we made a change, and saved our work.
Git does not know about this yet.

## Selective staging

When you use `git add <filename>`, Git will just put all changes in that file into the staging area.

Sometimes you want to pick and choose what goes into your commits, so that you can split up your work in logical chunks.
Git has an option for `git add`, which is `--patch`.
When you use this option, you enter an interactive mode.
Git will show you the changes you made, and asks you if you want to keep them or not.
Let's go experiment with `git add --patch`!

Use `git add --patch` now:

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

Let's explain what you're seeing:

- You're changing the `README.md` file.
- Additions have a plus sign, and are green.
- Removals have a minus sign, and are red.
- `(1/1)` tells us this is one change, and that's the only change in the file.
- Git also asks us what we want to do with this change: `Stage this hunk [y,n,q,a,d,e,?]? `.

Git is asking us if we want to `stage this hunk`:

```git
(1/1) Stage this hunk [y,n,q,a,d,e,?]?
```
A hunk is basically a part of a file that we changed.

Git lists our options: `[y,n,q,a,d,e,?]`.
We can ask for help with the `?` character:

```git
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
e - manually edit the current hunk
? - print help
```

These letters are the commands that you can use with `git add --patch`.

Enter `y` to stage your changes to the `README.md` file.

## Git status after using `git add --patch`

Now we have staged our changes, `git status` tells us:

```git
$ git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   README.md
```

We're going to commit our changes with `git commit -v`:

```git
$ git commit -v
```

It's a good idea to review your changes, to make sure you're committing the right things.
Remember to add a commit message, let's use `Add another line to the README` as the commit message:

```git
Add another line to the README
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Changes to be committed:
#	modified:   README.md
#
# ------------------------ >8 ------------------------
# Do not modify or remove the line above.
# Everything below it will be ignored.
diff --git a/README.md b/README.md
index 21652e3..717a22c 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,3 @@
 This is the readme for the sandbox repository.
+
+With the help of this project you can build an awesome sandbox.
```

After you've entered the commit message and saved the file, Git will summarize:

```git
[main c79426c] Add another line to the README
 1 file changed, 2 insertions(+)
```

Hooray, you've made your second commit, and learned about `git add --patch`!

In the next section we'll cover using `git restore` to reject saved changes before committing.
