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
Explain what you did, why you did it.

I recommend your commit messages follow a template, like this one:

```markdown title="Tim Pope's commit message template"
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
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

## Write tests

Developers avoid merges/updates, because they are afraid of breaking things.
If this is you, go write some proper tests!
Tests provide a safety net and peace of mind.

At the very least you write a *smoke test*, to ensure you can actually create a build.

Even better is to test the *happy path* of your code with unit tests.
This ensures that the things you do most often continue to work.

If you really want my seal of approval: follow Test Driven Development.

## Use GitHub Actions

You can use GitHub Actions to run tests on each push and pull to the mainline branch.

## Use Dependabot to check for updates

Keeping your dependencies up to date is essential to keep your code safe and functional.
Not updating frequently will only increase the headache when you do finally need to update!
I recommend that you use Dependabot to check for updates to your (development) dependencies.
It's free and fully integrated into GitHub.
