---
id: best_practices_testing_github_actions
title: Testing and GitHub Actions
---

## Write tests

Developers avoid merges/updates, because they are afraid of breaking things.
If this is you, go write some proper tests!

At the very least write a _smoke test_, to ensure that you can actually make a build.

Even better, test the _happy path_ of your code.
This ensures the most frequently used code continues to work.

For even more confidence, learn and follow the _Test Driven Development_ (TDD) process.
Following the TDD process will result in code that has full test coverage.

## Use GitHub Actions

You can use GitHub Actions to run tests on each push and pull to the mainline branch.
