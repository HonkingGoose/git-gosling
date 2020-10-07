---
id: installing_git
title: Installing Git
---

## Use Git 2.25 or newer

If you use an older version of Git you will not have the `git restore` and `git switch` commands that I use in this guide.

## Checking the Git version

If you've already got Git on your system, use the `git --version` command to check your version.

```git
$ git --version

git version 2.25
```

## Linux

The easiest way to install Git is via the package manager that comes with your distribution.
Some distributions provide up-to-date versions, others do not.

Ubuntu and Debian will provide a badly outdated version of Git.

Fedora, OpenSuse and Arch provide more up-to-date versions of Git.

### Ubuntu/Debian

#### Install older version of Git via the official repositories

You can install an older version of Git via the official repositories:

```
$ sudo apt update
$ sudo apt install git
```

:::tip
If you're on Ubuntu 20.04, you can use the official repositories, and still follow the guide.
You don't need to use the `git-core/ppa`.
:::

#### Use an unofficial ppa to get an up-to-date version of Git

Ubuntu 18.04/16.04 and Debian Stable will provide an outdated version of Git via their official package repositories.
You will not be able to follow the guide unless you use the `git-core/ppa` or build Git from the source files yourself.

:::warning
When you use a `ppa` you're trusting somebody other than the official Ubuntu/Debian package maintainers!
:::

```
$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git
```

### Fedora

Install Git with the `dnf` package management system:

```
$ sudo dnf install git
```

### Other distributions

You can see a list of installation instructions at [git-scm.com/download/linux](https://git-scm.com/download/linux).

## MacOS

### via the Xcode command line tools

Try to run Git from the MacOS Terminal.
If you don't have Git installed, you will be prompted to install it.

```git
$ git --version
```

### via homebrew

If you have Homebrew installed, do:

```
$ brew install git
```

### via a binary installer

Go to https://git-scm.com/download/mac to download a binary installer.

## Windows

### Git for Windows

Go to https://git-scm.com/download/win to download **Git for Windows**.

:::tip
If you want to follow along with this guide, tell Git for Windows to use the `nano` text editor.
:::

:::tip
When you're installing Git for Windows tick the _check for updates_ checkbox.
This will let Git for Windows check for updates.
It's easy to upgrade Git for Windows, as it will do all the work for you.
:::
