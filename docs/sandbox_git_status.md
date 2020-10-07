---
id: sandbox_git_status
title: Introduction to git status
---

The most used Git command is `git status`.
As you might have guessed already, `git status` wil display the status of your repository.
The output of this command will change depending on what's happening in your repository.

Let's see what the Git status of our (nearly empty) sandbox repository is.

Remember: the `.git` folder is for Git's use only.
You will not see this folder in the `git status` output.

:::tip
Use `git status` whenever you're stuck or not sure on what to do next.
Git will try to help you!
:::

## Git status command

Let's see what `git status` tells us about our `sandbox` repository.

```git
$ git status

On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

In English, Git is telling us:

1. That we are on the `main` branch, think of a branch as a place to save your work.
2. That we have zero previous work saved with Git: `No commits yet`
3. That there are no files in the directory that Git can track: `nothing to commit`.
4. Git offers a good tip to get started: `(create/copy files and use "git add" to track)`.

Let's go follow Git's advice, and make a commit to save our work.
Go to the next section to make your first commit.
