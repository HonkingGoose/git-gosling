---
id: advanced_git_configuration
title: Advanced Git configuration
description: Learn about advanced Git configuration
---

## List all Git settings

Get a list of all your settings with `git config --list --show-origin`.
The output shows you the current settings, and what file is providing these settings.

```git
$ git config --list --show-origin
```

For more on this read [First-Time Git Setup, ProGit2 book](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

## Default branch for new repositories

Starting with Git 2.28 you can set the default branch name.
I recommend you use `main` as this is what GitHub uses by default.

To set the default branch name for new repositories do:

```git
$ git config --global init.defaultBranch main
```

## git pull rebase or merge strategy

Git version 2.27 (and newer) complains at you, every time you pull, until you set the `pull.rebase` variable.
Use the `pull.rebase` variable to tell Git what merge strategy to use: merge or rebase.

### Use merge strategy when pulling

This is probably what you want Git to do, as it is the default merge strategy.
This strategy will fast-forward if possible, and create merge commits if needed:

```git
$ git config --global pull.rebase "false"
```

### Use rebase strategy when pulling

To rebase when you pull:

```git
$ git config --global pull.rebase "true"
```

## Code editor setup

When Git needs your input, it opens the default editor automatically (usually `vi` or `nano`).
Use the `git config --global core.editor` command to tell Git what editor you want to use.

|       Editor       | Git configuration command                         |
| :----------------: | ------------------------------------------------- |
|        Nano        | `git config --global core.editor "nano -w"`       |
| Visual Studio Code | `git config --global core.editor "code --wait"`   |
|      VSCodium      | `git config --global core.editor "codium --wait"` |
|        Atom        | `git config --global core.editor "atom --wait"`   |

:::note Use the wait option when possible
The `--wait` or `-w` option tells Git to wait until you've saved the file and closed the editor.
This option is not available for all editors.
:::
