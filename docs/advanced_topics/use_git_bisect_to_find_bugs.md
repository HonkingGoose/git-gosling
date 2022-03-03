---
title: Use Git bisect to find bugs
---

## What is Git bisect?

Your project used to work fine, but now it has a bug.
Now you need to find out which commit caused this bug.
You can use `git bisect` to find the exact commit that introduced the bug.

## The basic process

When you start `git bisect` you'll have to tell Git which commit is bad, and which commit is good.
Git will then run a binary search, to find the exact commit that introduced the bug.

On each commit in the binary search, `git bisect` will ask you if the commit is good or bad.
Depending on your answer `git bisect` will continue searching, or tell you that it found the bad commit.

## How to use git bisect

Read the [git bisect manual](https://git-scm.com/docs/git-bisect) for instructions.

The ProGit2 book also covers `git bisect` in [chapter 7.10 Git Tools - Debugging with Git](https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git).
