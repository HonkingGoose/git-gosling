---
id: best_practices
title: Best practices
---

Here's a collection of best practices when working with code, Git and GitHub.

## Preventing merge conflicts

Like anybody, I hate dealing with big merge conflicts.
It takes a lot of time to figure out what to keep/reject, and it always leads to breakage.

The best way to deal with merge conflicts it to not have them at all.
Failing that, the second best way is to limit the size of merge conflicts.

### Divide up work between your team

This is not always possible, but often you can divide up work into parts of the file.
This ensures nobody is altering the same lines in a file at the same time.

### Do small chunks of work at a time

If you keep your changes small, it will be easy to figure out what to keep/reject when you do have a merge conflict.
Another benefit is that small chunks of work are quick to review and easy to merge.

### Integrate your work frequently

One major issue I see in many teams is a failure to frequently integrate work.
Not integrating frequently leads to:

- Long lived branches that nobody ever wants to merge.
- Nobody gets a heads-up about changes in the code that affect their work.
- Big messy merges that leave everybody afraid to do a `git merge` ever again.

To be very clear, integrating your work means pulling **and** pushing to the mainline branch.
You're not integrating if you're merely pulling the current mainline!

I recommend that you read Martin Fowler's work on [Integration Frequency](https://martinfowler.com/articles/branching-patterns.html#integration-frequency).

## Write good descriptive commit messages

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

## Write tests

Developers avoid merges/updates, because they are afraid of breaking things.
If this is you, go write some proper tests!

At the very least write a *smoke test*, to ensure that you can actually make a build.

Even better, test the *happy path* of your code.
This ensures the most frequently used code continues to work.

For even more confidence, learn and follow the **Test Driven Development** (TDD) process.
Following the TDD process will result in code that has full test coverage.

## Use GitHub Actions

You can use GitHub Actions to run tests on each push and pull to the mainline branch.

## Use a dependency management bot

It's essential to keep your dependencies up-to-date if you want your software to be safe and functional.
Delaying your updates will only worsen the headache you will get when you must update!

I recommend that you use a dependency manager bot to help you get and keep up-to-date.

A dependency management bot will:

- Check for updates on a set schedule.
- Open pull requests to update dependencies.
- Display the changelog for the dependency.
- Display a dependency compatibility score (based on how many other repositories have passing tests for this pull).

:::tip
Make sure the bot you're going to install/configure supports the programming language(s) you use!
:::

### GitHub-native Dependabot

It's easiest to get started with **Dependabot**, as that is integrated into GitHub.
It's free on public and private repositories and supports a lot of popular programming languages.

Read the [GitHub docs, Keeping your dependencies updated automatically](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/keeping-your-dependencies-updated-automatically) to learn more about Dependabot.

You can enable Dependabot by following the steps in the [GitHub docs, Enabling and disabling version updates](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/enabling-and-disabling-version-updates).

### Alternatives to Dependabot

If you don't like Dependabot, take a look at [Depfu](https://depfu.com/) or [Renovate](https://renovate.whitesourcesoftware.com/).
See the list of [Verified dependency bots on the GitHub Marketplace](https://github.com/marketplace?category=dependency-management&verification=verified) to install either of those.

:::tip
Read the **Pricing and setup** section before installing any app from the GitHub Marketplace.
:::
