---
id: configuring_git
title: Configuring Git
description: Learn to configure Git
---

Before you can use Git, you must configure it.

## Tell Git who you are

Git must know your username and email.
Every time you save your work with a commit, Git puts your username and email in the commit message.

We'll use the `--global` option, that way Git uses this username and email for everything you do on this system.

If you want to override the global name or email address for a specific project, you can run the command without the `--global` option when you’re in the root directory for that project.

### Username

:::warning Username is visible to anybody
The username you set here can be seen by anybody with read rights to any repository you work on.
:::

I recommend using your GitHub username as the `user.name`.
This makes sure that the commits you create locally have the same username as commits you create via the GitHub web interface.

To set your Git username:

```git
$ git config --global user.name "Name Lastname"
```

### Email

:::warning Email adress is visible to anybody
The email adress you set here can be seen by anybody with read rights to any repository you work on.
:::

The `user.email` you set here does not have to be your real "private" email adress!
In fact, I recommend you use the GitHub provided `no-reply` email adress instead of an alias or your real email adress.

If you have a GitHub account: use the `no-reply` email address that GitHub gives you.
Please read the [GitHub docs, Setting your commit email address](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address) and follow the steps.
I also recommend that you tell GitHub to stop commits which expose your real email adress by ticking the **Keep my email address private** checkbox in the GitHub email settings tab.

Tell Git to use your GitHub provided `no-reply` email address:

```git
$ git config --global user.email 1234567+GitHubusername@users.noreply.github.com
```

## Caching GitHub credentials

If you use GitHub to host your remote repositories and use the HTTPS protocol, then each time you push/pull Git will ask for your GitHub credentials.
You can use the Git Credential Manager Core (GCM Core) program to cache your credentials.

Read the [GitHub docs, caching your GitHub credentials in Git](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git) to learn more.

:::tip
Git for Windows comes with GCM Core.
:::

## Telling Git what editor to use

When you create a commit with `git commit`, Git will open the CLI text editor to let you enter a commit message.
By default, Git will use whatever your CLI uses, which will probably be the `vi`, `vim` or `nano` editor.
You can tell Git what text editor you want to use.

If you want to follow along with the Git sandbox I recommend that you install and use the `nano` editor.
You can use another text editor if you want, but you might run into problems when you want to save your commit message.

:::note
If you want to use another text editor, look at the table in the [Advanced Git configuration, code editor setup](../advanced_topics/advanced_git_configuration.md#Code-editor-setup) part of this guide.
:::

### Installing the nano text editor

|  Operating system   | How to install nano                                                 |
| :-----------------: | ------------------------------------------------------------------- |
|    Ubuntu/Debian    | `sudo apt install nano`                                             |
|       Fedora        | `sudo dnf install nano`                                             |
| macOS with Homebrew | `brew install nano`                                                 |
|       Windows       | Select `nano` as the default editor when installing Git for Windows |

### Use nano as your default editor with Git

Now you have installed nano, tell Git to use it:

```git
$ git config --global core.editor "nano -w"
```

The `-w` option tells Nano to wait until you've saved the file and exited.
