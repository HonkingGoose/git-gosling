---
id: clean_up_your_git_history
title: Clean up your Git history
---

You can clean much of your Git history before going public with your changes.
I recommend that you make a practice `sandbox` repository, and learn how this stuff works, before attempting it on production work.

:::warning
This section is not for newcomers to Git.
Do not try this on your production work if you don't know how any of this works!

Recovering from bad edits might not be possible or out of your comfort zone.
:::

:::warning
Think before you use `git push --force-with-lease` to push your changed history!

Changing the history of public branches is generally a bad idea.

Don't force push to a **main**, **master** or **trunk** branch, as that will mess things up for everybody on the project.
:::

:::tip
Some bad changes can be recovered from with the use of the  `git reflog`, and creating a new branch from the "known good" commits.
:::

### Re-do the last commit

You can re-do the last commit with the `git commit --amend` command.
This is handy for fixing small stuff like spelling errors, or adding a change that should be in the commit.

Let's go through an example:

```git
$ git commit -m "Fix issue with snorgleborf"

[main d476184] Fix issue with snorgleborf
 1 file changed, 1 insertion(+)
```

Dang it, I meant to type `snarglebarf`!
Let's check the log to confirm what the commit message is:

```git
$ git log --oneline
d476184 (HEAD -> main) Fix issue with snorgleborf
002d4f4 Initial commit
```

Yep, that's not right.
Let's fix it with `git commit --amend`:

```git
$ git commit --amend

Edit commit message in my editor.
```

Now let's check the log:

```git
$ git log --oneline

4e1a197 (HEAD -> main) Fix issue with snarglebarf
002d4f4 Initial commit
```

As you can see, we've *replaced* commit `d476184` with commit `4e1a197`.
If you need the old commit, you can retrieve it from the `git reflog`.

:::warning
Do not amend commits that you have pushed somewhere public.
:::

## Squash multiple commits into one

When you work, you will create a lot of commits to keep track of your work.
Some commit messages will be like:

```git
Fix bug
Try again to fix bug
IT WORKS!!!
```

It's a good idea to clean up your work before presenting it to others.
You can do this by squashing your work into one commit.

### Example of squashing commits

You're on the `main` branch, and ready to start work.

```git
$ git status

On branch main
nothing to commit, working tree clean
```

So you create a new branch to put your work in:

```git
$ git switch --create=feature

Switched to a new branch 'feature'
```

You work on the feature, and create commits as you work.

Usually you'll end up with something looking like this:

```git
$ git log --oneline

8e285fd (HEAD -> feature) Bugfix: validate input better
066f28c Bugfix: validate function input
3b09c7f Expand feature
27f9683 Create basic feature
8e81288 (main) Initial commit
```

All this messy work is not really of value to your collaborators.
Let's clean it up!

#### Start of clean up

Because you made a branch before starting your work, you can now do:

```git
$ git rebase -i main
```

This opens your editor with the following file:

```git
pick 27f9683 Create basic feature
pick 3b09c7f Expand feature
pick 066f28c Bugfix: validate function input
pick 8e285fd Bugfix: validate input better

# Rebase 8e81288..8e285fd onto 8e285fd (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

:::tip
This file tells you what the commands are and what they do.
Be sure to read the comments!
:::

We edit the file to look like this, and save:

```git
pick 27f9683 Create basic feature
squash 3b09c7f Expand feature
squash 066f28c Bugfix: validate function input
squash 8e285fd Bugfix: validate input better

# Lines with a # are comments, you can leave them in or remove them.
```

The editor will open again, but now with this:

```git
# This is a combination of 4 commits.
# This is the 1st commit message:

Create basic feature

# This is the commit message #2:

Expand feature

# This is the commit message #3:

Bugfix: validate function input

# This is the commit message #4:

Bugfix: validate input better
```

We edit the file again:

```git
Create function registerUserName

# Lines with a # are comments, you can leave them in or remove them.
```

We save one last time.

Let's go look at the log and see what we ended up with.
We now have one clean commit:

```git
$ git log --oneline

e1fa060 (HEAD -> feature) Create function registerUserName
8e81288 (main) Initial commit
```

We can now push our work so that others can look at it, or so that we can open a pull request.

:::tip
You can use `fixup` instead of `squash` when you don't want to keep the associated message.
:::

## Recovering from a bad squash/fixup with the git reflog

You can sometimes recover from your edits by digging into the Git `reflog`.
The `git reflog` contains a list of all that you do.

Let's look at the reflog from just after our example squash from above:

```git
$ git reflog

dd02361 HEAD@{2}: rebase -i (squash): # This is a combination of 3 commits.
791685a HEAD@{3}: rebase -i (squash): # This is a combination of 2 commits.
27f9683 HEAD@{4}: rebase -i (start): checkout main
8e285fd HEAD@{5}: rebase -i (abort): updating HEAD
8e285fd HEAD@{6}: rebase -i (abort): updating HEAD
8e285fd HEAD@{7}: commit: Bugfix: validate input better
066f28c HEAD@{8}: commit: Bugfix: validate function input
3b09c7f HEAD@{9}: commit: Expand feature
27f9683 HEAD@{10}: commit: Create basic feature
8e81288 (main) HEAD@{11}: checkout: moving from main to feature
8e81288 (main) HEAD@{12}: checkout: moving from feature to main
8e81288 (main) HEAD@{13}: checkout: moving from main to feature
8e81288 (main) HEAD@{14}: Branch: renamed refs/heads/master to refs/heads/main
8e81288 (main) HEAD@{16}: commit (initial): Initial commit
```

If you want to return to commit `8e285fd` from before you started rebasing do a `git checkout 8e285fd`:

```
$ git checkout 8e285fd

Note: switching to '8e285fd'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 8e285fd Bugfix: validate input better
```

Now you are in a `detached HEAD` state, but don't worry about that.
Note how Git tells you how to get back your previous work:
```
If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>
```

Let's do what Git tells us:

```git
$ git switch -c keep-my-work-safe
```

Now we have a new branch with all of our previous commits back the way they were before we started.
Note that the rebased `feature` branch is also still around.

```git
$ git branch

  feature
* keep-my-work-safe
  main

$ git log --oneline --graph --all

* e1fa060 (feature) Create function registerUserName
| * 8e285fd (HEAD -> keep-my-work-safe) Bugfix: validate input better
| * 066f28c Bugfix: validate function input
| * 3b09c7f Expand feature
| * 27f9683 Create basic feature
|/
* 8e81288 (main) Initial commit
```
