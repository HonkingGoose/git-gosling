---
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

## Git commit

Now we'll commit, and save our work with Git.
The `--verbose` option tells Git to show us precisely what we're changing.
This way you can check you're committing the wanted changes.

```git
$ git commit --verbose
```

## General steps for committing

What follows are the general steps to make a commit.

If you use the Nano editor, read the section: [Committing with Nano](#committing-with-nano).

### Text editor waiting for input

The text editor will open, and show a file like this.

```git title="Text editor, waiting for input"

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

### Enter commit message and save

Enter a nice descriptive commit message: `Create README` and save.

```git title="Text editor with commit message"
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

Well done, you have just made your very first Git commit.

<!-- prettier-ignore -->
!!! caution
    Do not enter/or change the filename of the commit message file!
    This will confuse Git.

### After saving the commit message

After saving the commit message, Git tells us:

```git
[main (root-commit) d663c4d] Create README
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

Because this is the very first commit, it is the `root-commit`.
Then we get the first 7 characters of the Git hash: `d663c4d`.
Git tells us that we changed 1 file, and created one new line.

### Git status after committing

After we have committed, all changes we made are tracked with Git.
Git tells us that we have nothing to commit.
It also tells us that our `working tree` is clean, this basically means that we have no further changes.

```git
$ git status

On branch main
nothing to commit, working tree clean
```

## Committing with Nano

After you've entered `git commit --verbose`, Nano will open.

Enter your commit message, and exit Nano with <kbd>CTRL + X</kbd>.

Nano asks if you want to save your work:

<!-- prettier-ignore-start -->
```markdown title="Nano save dialog"
Save modified buffer?

Y Yes
N No        ^C Cancel
```
<!-- prettier-ignore-end -->

Use <kbd>Y</kbd> to save your work.

Nano asks you for a `File Name to Write`, leave this blank, and press <kbd>ENTER</kbd> to save the commit message.

Use <kbd>CTRL + S</kbd> to save and <kbd>CTRL + X</kbd> to exit.

## Summary

You've learned how to make a commit, and learned how to use Nano to create a commit message.

In the next section we will add new lines to the `README.md` file, and save those with Git.
