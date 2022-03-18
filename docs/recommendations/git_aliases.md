---
title: Git aliases
---

You'll use commands like `git status`, `git log`, `git commit` and `git push` often.
Normally you have to type out Git commands in full before you can use them.

You can save some typing by setting up Git aliases, think of them as "shortcuts" to the full command.
Aliases do not replace the original Git commands.
The full length Git commands are _always_ available.

## Local vs global aliases

Aliases can be "local" or "global".

A local alias only works in the repository where you initially setup the alias.
A global alias can be used anywhere on your workstation.

### Setting a local Git alias

Use `git config` to set a local alias:

```git
$ git config alias.ci commit
```

Now you can choose whether you want to type `git commit` or `git ci` when making a new commit in the repository where you set the alias.

### Setting a global Git alias

Use `git config --global` to set a global alias:

```git
$ git config --global alias.ci commit
```

Now you can choose whether you want to type `git commit` or `git ci` when making a new commit in any repository on your workstation.

## Listing current aliases

You can use the `git config --list --local` command to see the local Git configuration.
Conversely, if you want to see the global configuration, use `git config --list --global`.

### Listing local aliases

```git
$ git config --list --local
alias.ci=commit
```

### Listing global aliases

```git
$ git config --list --global
alias.ci=commit
```
