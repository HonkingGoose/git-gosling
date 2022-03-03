---
title: Check the repository history with git log
---

Let's take a look at your repository's history with the `git log` command.

## Basic git log usage

If you don't specify any options, and run `git log` the first entry you'll see looks like this:

```git
$ git log

commit fff2ec646b5c488f647e3a35ce94edeb3a8799d8 (HEAD -> main, origin/main)
Merge: bd9afb9 490f66b
Author: username <34918129+username@users.noreply.github.com>
Date:   Mon Oct 5 12:26:38 2020 +0200

    Merge pull request #1 from username/Update-README

    Update README.md
```

Git log shows us:

- The full commit hash: `fff2ec646b5c488f647e3a35ce94edeb3a8799d8`.
- This is a merge commit which references 2 commits: `bd9afb9` and `490f66b`.
- The author: `username <34918129+username@users.noreply.github.com>`
- The date and time for the commit:`Mon Oct 5 12:26:38 2020 +0200`
- The full commit message.

Usually you don't need this much information.
Let's take a look at some options we can use to filter the result.
You can stack `git log` options until you get the result you want.

If you don't want to see merge commits use the `--no-merges` option when you're using `git log`.

## See a graph with all history

Use the `git log --all --decorate --oneline --graph` command.
This gives the following result on the `sandbox` repository:

```git
$ git log --all --decorate --oneline --graph

*   fff2ec6 (HEAD -> main, origin/main) Merge pull request #1 from username/Update-README
|\
| * 490f66b Update README.md
|/
* bd9afb9 Add new sentence while on feature branch
* c79426c Add another line to the README
* d663c4d Create README
```

| Git log option | What it does                                                      |
| -------------- | ----------------------------------------------------------------- |
| `--all`        | Shows all commits/branches.                                       |
| `--decorate`   | Print the ref names of any commits.                               |
| `--oneline`    | Shows short commit hash, and makes the log output a bit prettier. |
| `--graph`      | Make a ASCII graph of the commit history.                         |

## Limit output to a time range

`git log` takes an option called `--since=`.
This shows all commits since a certain time.
You can use a relative time, or specify a date.

| Git log examples             | Timeframe                               |
| ---------------------------- | --------------------------------------- |
| `git log --since=30.minutes` | Shows changes since the last half hour. |
| `git log --since=2.hours`    | Shows changes since 2 hours ago.        |
| `git log --since=midnight`   | Shows changes you made today.           |
| `git log --since=yesterday`  | Show changes since yesterday.           |
| `git log --since=3.weeks`    | Shows changes since 3 weeks ago.        |
| `git log --since=1.10`       | Shows changes since 1th of October.     |

## See your own changes

If you're only interested in changes you made, use `git log --author=yourusername` to find your commits.
This is a case-sensitive regular expression, you only need to enter enough characters to get a unique match.

For example, if your username is _SnargleBarf_, you can find your commits with: `git log --author=SnargleBarf`.
