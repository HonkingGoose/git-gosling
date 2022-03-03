---
title: Merge pull request
---

Now we have a pull request, let's learn how to merge it.

## Navigate to the pull request

Go to your GitHub repository.
Click on the tab **Pull requests**.
Click on the _Update README.md_ pull request.

## About the GitHub pull request interface

There are 4 tabs in the Pull Request interface.
See the table for information on each tab.

| Tab name      | What the tab shows                            |
| ------------- | --------------------------------------------- |
| Conversation  | Discussion about pull request                 |
| Commits       | Shows what commits belong to the pull request |
| Checks        | Contains results from GitHub Actions          |
| Files changed | Shows the changes the pull request makes      |

## Check pull request

Go to the **Files changed** tab.

Here you'll see what changes this pull request makes.

- Green lines with a `+` are new lines of code/text.
- Red lines with a `-` are lines that are removed.

Always check the changes that a pull requests is making!

Go back to the **Conversation** tab.

## Merge pull request

Now you have checked the changes, let's merge this pull request.
Click on the green button **Merge pull request**.

You can edit the merge commit title and body.
Leave them as they are and click **Confirm merge**.

### Alternative merge methods

You can also use the "rebase" or "squash merge" strategy when merging a pull request.
Click on the arrow next to the **Merge pull request** button to select a different merge strategy.

The main benefit of using a "rebase" or "squash merge" is that the final repository history will be cleaner and easier to understand.

## Delete your branch after merging

Your work is now safely on the `main` branch, so there's no need to keep the `Update-README` branch.
Clean up the branch by clicking on **Delete branch**.

## Summary

You've learned how to merge a pull request.
The next section covers how to get those changes on the GitHub repository into your local repository.
