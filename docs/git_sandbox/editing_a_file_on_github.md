---
id: editing_a_file_on_github
title: Editing a file on GitHub
---

We have pushed our repo to GitHub.
Let's make a small edit to our `README.md` file from within the GitHub interface.

## Navigate to the README on your GitHub repository

Go to your `sandbox` repository on GitHub.
Click on the `README.md` file.
A new window opens, now you can see the contents of the file.
Click on the pencil icon to go the online editor for the file.

## Edit the README on GitHub

Add a new line of text.

```markdown title="sandbox/readme.md on GitHub"
This is the readme for the sandbox repository.

With the help of this project you can build an awesome sandbox.

This change is from the `feature` branch.

This change is from an edit within the GitHub interface.
```

### Edit the commit message

Scroll down to the section **Commit changes**.

GitHub will provide a commit message title like `Update README.md`.
Below the commit title is a box where we can enter the commit body.
Both the commit message title and body are OK, leave them as they are.

### Select branch

Before GitHub can create a commit, it must know where the commit should go: on your `main` branch or on a new branch.

Select "Create a **new branch** for this commit and start a pull request.".

Replace the default branch name `Username-patch-1` with `Update-README`.

Click on the green button **Propose changes**

:::tip Remember to change the branch name!
By default GitHub will create a `Username-patch-x` branch.

This branch name tells us nothing about the changes you're making.
So change the branch name to something meaningful.
:::

## Opening a pull request

After you've clicked on the button **Propose changes** a new screen opens.
This is the **Open a pull request** interface.

The commit message title is also the Pull Request title.
Let's leave a comment:

```markdown title="Comment on pull request"
This is a pull request from within the GitHub interface.
```

Click on the green button **Create pull request**.

Now you have made your first pull request.
In the next section you'll learn how to merge this pull request.

## Summary

You've learned:

- How to navigate to your repository on GitHub.
- How to make an edit within the GitHub interface.
- How to open a pull request.

In the next section you'll learn how to merge the pull request into your repository on GitHub.
