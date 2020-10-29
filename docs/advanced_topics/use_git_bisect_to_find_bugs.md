---
id: use_git_bisect_to_find_bugs
title: Use git bisect to find bugs
---

## What is Git bisect?

Say your project has a bug, but it was working fine before.
Now you need to find out which commit caused this bug.
You can use `git bisect` to find the exact commit that introduced the bug.

## What is the basic process

When you start `git bisect` you'll have to tell Git which commit is bad, and which commit is good.
Git will then run a binary search, to find the exact commit that introduced the bug.

On each commit in the binary search, `git bisect` will ask you: is this commit good or bad?
Depending on your answer `git bisect` will continue searching, or tell you that it found the bad commit.

## How to use git bisect

Read the [git bisect manual](https://git-scm.com/docs/git-bisect) for instructions.

The ProGit2 book also covers `git bisect` in [chapter 7.10 Git Tools - Debugging with Git](https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git).
