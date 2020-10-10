---
id: best_practices_write_good_commit_messages
title: Write good commit messages
---

A good commit message tells the story of your changes.
Explain what changes you're making, and why you're making them.

## Use a commit message template

I recommend you follow a template to keep your commit messages consistent over time.

### Starter template

If you don't know what template to pick, start with this one.

```text title="Tim Pope's commit message template, lightly edited"
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase will confuse you if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```

:::note
This commit template is from the [ProGit2 book, section on contributing](https://github.com/progit/progit2/blob/master/book/05-distributed-git/sections/contributing.asc).

Thank you, Tim Pope for making the original template!
You can find the original at [Tim Pope's blog post, A note about Git commit messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
:::

### Conventional Commits template

If you want a stricter template, take a look at [Conventional Commits](https://www.conventionalcommits.org/).
