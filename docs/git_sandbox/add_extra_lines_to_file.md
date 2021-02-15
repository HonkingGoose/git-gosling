---
id: add_extra_lines_to_file
title: Add extra lines to file
description: How to use git add to stage changes
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

Git has a _staging_ area, this is also sometimes called the _index_.
The staging area is where you can check what goes into your next commit.

You can add files to the _staging_ area with `git add`.

## Use git add to stage your changes

Use `git add` to stage the changes you made in the README:

```git
$ git add README.md
```

:::tip How to stage all the things?
You can use `git add .` to include all changes.
Beware, it's very easy to stage changes you don't intend to commit this way!
:::

:::tip Ignore stuff you don't want to stage
Use a `.gitignore` file to tell Git what files to ignore.
Read more about this in the [Best practices, Use a gitignore file](../best_practices/use_a_gitignore_file.md) part of the guide.
:::

:::tip Pick and choose your staging area
You can also use `git add --patch` to pick and choose what you're going to put in your staging area.
Read more about this in the [Best practices, Split up your commits](../best_practices/split_up_your_commits.md) part of the guide.
:::

### Git status

Now you have staged your changes, `git status` tells us:

```git
$ git status

On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   README.md
```

Commit your changes with `git commit --verbose`:

```git
$ git commit --verbose
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

Hooray, you've made your second commit!

## What is a commit?

Now you have made two commits, it's a good time to learn what a commit is.

### Snapshot

When you commit, Git takes a picture/snapshot of your files, and stores a reference to that snapshot.
A reference _points_ to a previous commit.

Every time you commit, Git creates a hash.
A hash is basically a unique number to reference just that commit.

Nearly all commits reference at least one previous commit (merge commits reference at least 2 previous commits).
The root commit cannot point to a previous commit.

### Current repository state

I've made a visual representation of the state of the `sandbox` repository.

```git
d663c4d Create README <-- c79426c Add another line to the README
```

Commit `c79426c` points back to the root commit `d663c4d`.

:::info Why are my commit hashes different?
Your commit hashes will be different from those in the guide.
That's okay, you're not doing anything wrong.
:::

### Recommended reading

Go read [ProGit 2 book, chapter 1.3 Getting Started -What Is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F).

For a visual representation of the way commits point to each other, check _Figure 10. Commits and their parents_ in the [ProGit 2 book, chapter 3.1](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell).
Ignore the rest of that chapter for now, we'll cover branches later.

## Summary

You've saved changes to a file with Git, and learned that nearly all commits point back to a previous commit.

In the next section we'll cover using `git restore` to reject saved changes before committing.
