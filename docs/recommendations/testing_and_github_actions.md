---
title: Testing and GitHub Actions
---

## Write tests

Developers avoid merges/updates, because they are afraid of breaking things.
If this is you, go write some tests!

At the very least write a _smoke test_, to ensure that you can actually make a build.

Even better, test the _happy path_ of your code.
This ensures the most frequently used code continues to work.

For even more confidence, learn and follow the _Test Driven Development_ (TDD) process.
Following the TDD process will result in code that has full test coverage.

## GitHub Actions

You can use GitHub Actions to perform actions when a given event happens.

Examples of things you can do with GitHub Actions:

- Check that your program/website builds properly.
- Run unit tests.
- Run feature tests.
- Run a linter like Prettier/ESLint.
- Make a release of your program.

To create a new GitHub Action, go to your repository, and select the _Actions_ tab.
