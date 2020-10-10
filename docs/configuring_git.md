---
id: configuring_git
title: Configuring Git
---

Before you can use Git, you must configure it.

## Tell Git who you are

Git must know your username and email.
Every time you save your work with a commit, Git puts your username and email in the commit message.

We'll use the `--global` option, that way Git uses this username and email for everything you do on this system.

If you want to override the global name or email address for a specific project, you can run the command without the `--global` option when you’re in that project.

### Username

Tell Git your username:

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

Tell Git your email address:

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

## Telling Git what editor to use

When you create a commit with `git commit`, Git will open the CLI text editor to let you enter a commit message.
By default, Git will use whatever your CLI uses, which will probably be the `vi`, `vim` or `nano` editor.
You can tell Git what text editor you want to use.

If you want to follow along with the Git sandbox I recommend that you install and use the `nano` editor.
You can use another text editor if you want, but you might run into problems when you want to save your commit message.

:::note
If you want to use another text editor, look at the table in the [Advanced Git configuration, code editor setup](advanced_git_configuration.md#Code-editor-setup) part of this guide.
:::

### Installing the nano text editor

|  Operating system   | How to install nano                                                 |
| :-----------------: | ------------------------------------------------------------------- |
|    Ubuntu/Debian    | `sudo apt install nano`                                             |
|       Fedora        | `sudo dnf install nano`                                             |
| MacOS with Homebrew | `brew install nano`                                                 |
|       Windows       | Select `nano` as the default editor when installing Git for Windows |

### Use nano as your default editor with Git

Now you have installed nano, tell Git to use it:

```git
$ git config --global core.editor "nano -w"
```
