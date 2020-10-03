---
id: sandbox_explore_files
title: Explore your Git sandbox
---

You've just created your very first Git repository.
Hooray!

What is going on behind the scenes in the `sandbox` directory?
Let's go take a look!

## Figuring out where you are

Your command line will usually display your current working directory in the prompt.

As an example, the Ubuntu Bash command line prompt looks like this:
```bash
computername@username:~/sandbox$
```

You can use the "print working directory" command `pwd` to make sure where you are:

```bash
$ pwd
/home/username/sandbox
```

:::tip

If you get lost, and want to return to your sandbox directory:

```bash
$ cd
$ cd sandbox
```
:::

## Listing the files in the sandbox

List the files/directories in the sandbox directory:

```bash
$ ls
```

This is a bit confusing, it looks like nothing has happened at all!

Use `ls` again but with the `--all` flag, this tells `ls` to list all files:

```bash
$ ls --all
.  ..  .git
```

Now you can see the _hidden_ `.git` directory that Git creates when you do `git init`.

## What's this `.git` directory?

Go into the `.git` directory and display a list of file/directories:

```bash
$ cd .git

$ ls --file-type
branches/  config  description  HEAD  hooks/  info/  objects/  refs/
```

Hey, Git did create some new directories and files after all, they were just hidden from view.
You do not need to understand what any of the files/directories in the `.git` directory are for.

The key point is: Git needs the `.git` directory to do its work.

## Do not touch the `.git` directory!

:::warning
You do not need to create/edit/remove any files in this directory.
Git will do what it needs to do in this directory all by itself.

Do not remove the `.git` directory!
This will throw away all your Git configuration and history.
:::

## Return to the sandbox directory

Let's go back to the `sandbox` directory:

```bash
$ cd ..
```

Read the next section to get started using Git.
