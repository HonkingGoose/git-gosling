---
id: installing
title: Installing Git
---

## Linux

The easiest way to install Git is via the package manager that comes with your distribution.

:::note
Ubuntu and Debian will probably install an old version of Git.
If you want the latest and greatest you can use the `git-core/ppa`.
This is only recommended for advanced users!
```
$ sudo add-apt-repository ppa:git-core/ppa
$ sudo apt update
$ sudo apt install git
```
:::

### Ubuntu/Debian

Install Git with the `apt` package management system:

```
$ sudo apt update
$ sudo apt install git
```

### Fedora

Install Git with the `dnf` package management system:

```
$ sudo dnf install git
```

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
When you're installing Git for Windows tick the _check for updates_ checkbox.
This will let Git for Windows check for updates.
It's easy to upgrade Git for Windows, as it will do all the work for you.
:::
