---
id: sandbox_first_commit
title: Making your first commit
---

## Git status

We have created a file, saved it, and told Git to track it.

```git
$ git status

On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md
```

## Git commit --verbose

Now we'll make a commit, and save our work with Git.
The `--verbose` flag tells Git to show us precisely what we're changing.
This way you can check you're committing the wanted changes.

```git
$ git commit --verbose
```

The code editor will open, and show a file like this:
```git

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
#
# Initial commit
#
# Changes to be committed:
#	new file:   README.md
#
# ------------------------ >8 ------------------------
# Do not modify or remove the line above.
# Everything below it will be ignored.
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..21652e3
--- /dev/null
+++ b/README.md
@@ -0,0 +1 @@
+This is the readme for the sandbox repository.
```

## Add commit message and save file

Type in a nice descriptive commit message: `Create README` and save the file:

```git
Create README
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
#
# Initial commit
#
# Changes to be committed:
#	new file:   README.md
#
# ------------------------ >8 ------------------------
# Do not modify or remove the line above.
# Everything below it will be ignored.
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..21652e3
--- /dev/null
+++ b/README.md
@@ -0,0 +1 @@
+This is the readme for the sandbox repository.
```

After saving the commit message, Git tells us this:

```git
[main (root-commit) d663c4d] Create README
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

Well done, you have just made your very first Git commit.
Because this is the very first commit, it is the `root-commit`.
Then we get the first 7 characters of the Git hash: `d663c4d`.
Git tells us that we changed 1 file, and created one new line.

## Git status after committing

After we have committed, all changes we made are tracked with Git.
Git tells us that we have nothing to commit.
It also tells us that our `working tree` is clean, this basically means that we have no further changes.

```git
$ git status

On branch main
nothing to commit, working tree clean
```

In the next section we will add new lines to the `README.md` file.
