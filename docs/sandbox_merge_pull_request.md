---
id: sandbox_merge_pull_request
title: Merge pull request
---

Now we have a pull request, let's learn how to merge it.

## Navigate to the pull request

Go to your GitHub repository.
Click on the tab **Pull requests**.
Click on the Update README.md pull request.

## About the GitHub pull request interface

There are 4 tabs in the Pull Request interface:

- Conversation
- Commits
- Checks
- Files changed

The **Conversation** tab is where all discussion about this pull request lives.
The **Commits** tab shows you what commits belong to this pull request.
If the repository has automated tests, you'll find them under the **Checks** tab.
The **Files changed** tab shows you the changes this pull request makes.

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

## Delete your branch after merging

Your work is now safely on the `main` branch, so there's no need to keep the `Update-README` branch.
Clean up the branch by clicking on **Delete branch**.

:::tip
You can also use the rebase or squash merge strategy when merging a pull request.
Click on the arrow next to the **Merge pull request** button to select a different merge strategy.
:::

## Summary:

You've learned how to merge a pull request.
The next section covers how to get those changes on the GitHub repository into your local repository.
