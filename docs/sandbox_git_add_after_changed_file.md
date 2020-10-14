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

Git has a _staging_ area, this is also sometimes called the _index_.
The staging area is where you can check what goes into your next commit.

You can add files to the _staging_ area with `git add`.

## Use git add to stage your changes

Use `git add` to stage the changes you made in the README:

```git
$ git add README.md
```

:::tip
You can use `git add .` as a wildcard to include all changes.
Beware that this makes it very easy to commit things you don't want to commit.
:::

:::tip
You can also use `git add --patch` to pick and choose what you're going to put in your staging area.
Read more about this in the [Best practices, Split up your commits](best_practices_split_up_your_commits) part of the guide.
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

Hooray, you've made your second commit!

In the next section we'll cover using `git restore` to reject saved changes before committing.
