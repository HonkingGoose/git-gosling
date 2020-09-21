---
id: configuring_git
title: Configuring Git
---

Before you can use Git, you'll need to configure it.

## Tell Git who you are

Before you can do anything at all, you'll need to tell Git who you are.
This is important because every time you save your work Git uses this information.

We'll use the `--global` flag so that Git will use this username and email for everything you do on this system.
If you want to override the global name or email address for a specific project, you can run the command without the `--global` option when you’re in that project.

### Username

We'll tell Git what username to use when we create a commit.

```git
$ git config --global user.name "Name Lastname"
```

:::warning
This username will be seen by anybody who has read rights to your repositories.
:::

:::tip
If you have a GitHub account: use your GitHub username!

Read the [GitHub docs on setting your username](https://docs.github.com/en/github/using-git/setting-your-username-in-git)
:::


### Email

Next we'll tell Git what email address to use:

```git
$ git config --global user.email johndoe@example.com
```

:::warning
This email address will be seen by anybody who has read rights to your repositories.
:::

:::tip
If you have a GitHub account: use the `no-reply` email address that GitHub gives you.
For more on this read the [GitHub docs: setting your email address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address).

Alternatively you can use an email alias.
:::

## Code editor setup

When you create a commit with `git commit`, Git will open a text editor to let you enter a message.
By default, Git will use whatever your terminal uses, which will probably be `vi`, `vim` or `nano`.
You can tell Git to use another text editor.
The `--wait` option tells Git to wait until you've saved the message.

### Visual Studio Code

```git
$ git config --global core.editor "code --wait"
```

### VSCodium

```git
$ git config --global core.editor "codium --wait"
```

### Atom

```git
$ git config --global core.editor "atom --wait"
```
