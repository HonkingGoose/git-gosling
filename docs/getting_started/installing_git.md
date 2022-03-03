---
title: Installing Git
---

## Use Git 2.25 or newer

If you use an older version of Git you will not have the `git restore` and `git switch` commands that I use in this guide.

## Checking the Git version

If you've already installed Git on your system, use the `git --version` command to check your version.

```git
$ git --version

git version 2.25
```

## Linux

The easiest way to install Git is via the package manager that comes with your distribution.
Some distributions provide up-to-date versions, others do not.

Ubuntu and Debian provide a badly outdated version of Git.
Fedora, OpenSuse and Arch provide more up-to-date versions of Git.

### Ubuntu/Debian

#### Install older version of Git via the official repositories

You can install an older version of Git via the official repositories:

```
$ sudo apt update
$ sudo apt install git
```

#### Use an unofficial ppa to get an up-to-date version of Git

Ubuntu 18.04/16.04 and Debian Stable will provide an outdated version of Git via their official package repositories.
You will not be able to follow the guide unless you use the `git-core/ppa` or build Git from the source files.

Keep in mind, that when you use a `git-core/ppa` you're trusting somebody other than the official Ubuntu/Debian package maintainers.

To setup a ppa, follow these steps:

```
$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git
```

If you're on Ubuntu 20.04, you can skip setting up the `git-code/ppa`.
The version of Git that comes with Ubuntu 20.04 is recent enough to follow the guide.

#### Debian

Debian users can use the backports repository to get a newer version of Git.
Visit the [Debian backports website](https://backports.debian.org/) to learn more.

### Fedora

Install Git with the `dnf` package management system:

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

If you have Homebrew installed, do:

```
$ brew install git
```

### via a binary installer

Go to https://git-scm.com/download/mac to download a binary installer.

## Windows

### Git for Windows

Go to https://git-scm.com/download/win to download **Git for Windows**.

When you're installing Git for Windows tick the _check for updates_ checkbox.
It's easy to update Git for Windows, as the program does all the work for you.

If you want to follow along with this guide, tell Git for Windows to use the `nano` text editor.
