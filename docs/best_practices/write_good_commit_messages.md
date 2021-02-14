---
id: write_good_commit_messages
title: Write good commit messages
---

## What's a good commit message?

A good commit message explains _what_ changes you're making, and _why_.
I recommend you follow a template to keep your commit messages consistent over time.

## Starter template

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

:::note About this template
This commit template is copied from the [ProGit2 book, section on contributing](https://github.com/progit/progit2/blob/master/book/05-distributed-git/sections/contributing.asc).

Thank you, Tim Pope for making the original template!
You can find the original at [Tim Pope's blog post, A note about Git commit messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
:::

## Conventional Commits (CC)

If you want a stricter template, take a look at [Conventional Commits](https://www.conventionalcommits.org/).
I'll give a overview of the main concepts, but you really should read the official website.
This section is not intended to replace the official docs for Conventional Commits.

### Main concept

The concept behind CC is that you'll prefix each commit message with a short "type" description.
The "type" explains what kind of change the commit is making.

This has the following benefits:

- Easy to see what kind of change a commit is making
- Your `git log` output is more structured
- Searching in the `git log` for specific types of changes is easier

Also this sets you up nicely in case you want to use Semantic Versioning, automated tooling to generate changelogs and/or automated tooling to make a new release.

### Prefixes

Whenever you commit, add a prefix before the main commit message.
The prefix explains what kind of change the commit is making.

The prefix _must_ have a space after the `:` character.

Here's a table of the most commonly used prefixes.

| Prefix       | Kind of change                                   |
| :----------- | :----------------------------------------------- |
| `fix: `      | Bug fixes, (patch in SemVer)                     |
| `feat: `     | Creating feature (minor in SemVer)               |
| `build: `    | Changes to build process/scripts                 |
| `chore: `    | Things that affect the repository only           |
| `ci: `       | Continous integration (GitHub Actions)           |
| `docs: `     | Documentation                                    |
| `style: `    | Changing the look of your application            |
| `refactor: ` | Code cleaning, does not change end-user behavior |
| `perf: `     | Performance improvements                         |
| `test: `     | Creating, changing or removing tests             |

### Conventional Commit examples

- `feat: create froobs feature`
- `test: create tests for froobs feature`
- `docs: document froobs feature`
- `fix: fix bug in froobs function`
- `chore: update README.md`
