---
id: shell_expansion
title: Shell expansion
description: Learn about shell expansion
---

A handy feature of the Bash shell - and most other shells - is that it comes with shell expansion.

You can type a partial Git command name, and Bash will try to expand it to the full command whenever you press <kbd>tab</kbd>.
Shell expansion will also suggest the correct filenames/locations when you use commands like `ls` or `cd`.

:::tip
If the partial command does not uniquely match a command, add some extra letters to make the match unique and press <kbd>tab</kbd> again.
:::

## Shell expansion with Git

Start typing part of the Git command, and use the <kbd>tab</kbd> key to let the shell suggest the rest of the command.
If you don't see any suggestions from the shell, try pressing <kbd>tab</kbd> a second time.

For example:

1. Type `git st`
1. Press <kbd>tab</kbd>
1. Shell expands to `git sta`, but nothing more happens.
1. Press <kbd>tab</kbd> again, you'll see a list of valid options:
   ```bash
   stage    stash    status
   ```
1. Type in `t` to make a unique match for `status` and press <kbd>tab</kbd>
1. Now the shell expands to the full command: `git status`
1. Press <kbd>Enter</kbd> to execute the command
