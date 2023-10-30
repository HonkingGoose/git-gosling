---
title: Installing Git
---

## Use Git 2.25 or newer

You must use Git 2.25 or newer to follow this guide.
If you don't, you won't be able to use the `git restore` and `git switch` commands that I use in this guide.

## Checking the Git version

If you've already installed Git on your system, use the `git --version` command to check your version.

```git
$ git --version

git version 2.25
```

## Linux

The easiest way to install Git is via the package manager that comes with your distribution.
Some distributions give you up-to-date versions, others do not.

Ubuntu and Debian usually have old versions of Git.
Fedora, OpenSuse and Arch usually have newer versions of Git.

### Ubuntu/Debian

#### Install older version of Git via the official repositories

You can install an older version of Git via the official repositories:

```
$ sudo apt update
$ sudo apt install git
```

#### Use an unofficial PPA to get an up-to-date version of Git

Ubuntu usually has an older version of Git in their official package repositories.
If you want to get the latest version of Git, you can use the `git-core/ppa`.

When you use the `git-core/ppa` you're trusting somebody other than the official Ubuntu/Debian package maintainers.

To setup a PPA, follow these steps:

```
$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git
```

#### Debian

Debian users can use the backports repository to get a newer version of Git.
Visit the [Debian backports website](https://backports.debian.org/) to learn more.

### Fedora

Install Git with the `dnf` package manager.

```
$ sudo dnf install git
```

### Other distributions

See the list of installation instructions at [git-scm.com/download/linux](https://git-scm.com/download/linux).

## macOS

### via the Xcode command line tools

Try to run Git from the macOS Terminal.
If you don't have Git installed, you will be prompted to install it.

```git
$ git --version
```

### via Homebrew

If you have Homebrew installed, run:

```
$ brew install git
```

### via a binary installer

Go to [the git-scm site](https://git-scm.com/download/mac) to download a binary installer.

## Windows

### Git for Windows

Go to https://git-scm.com/download/win to download **Git for Windows**.

When you're installing Git for Windows select the _check for updates_ checkbox.
Git for Windows will then regulary update Git.

If you want to follow along with this guide, tell Git for Windows to use the `nano` text editor.
