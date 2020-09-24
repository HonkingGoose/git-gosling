---
id: sandbox_first_git_add
title: Create a new file and track it
---

## Creating a new README

Let's create a README for our repository.
First we create an empty markdown file:

```bash
touch README.md
```

Now we edit it with our editor of choice, let's say Visual Studio Code:

```bash
code README.md
```

Enter the following text and add a newline at the end:

```
This is the readme for the sandbox repository.

```

Save the file in the editor.

## Git status after creating a file

Let's see what `git status` shows, now we've created a file:

```git
$ git status

On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

nothing added to commit but untracked files present (use "git add" to track)

```

What Git is telling us:

- There are no commits yet.
- The README.md file is untracked by Git.
- Git tells us how to start tracking the file: `use "git add" to track`.

## Tracking a new file

When you create a file, you will need to tell Git to track the file.
Just saving a file in the editor does not mean Git will track it.

Let's track the `README.md` file with `git add`:

```git
$ git add README.md
```

Now let's check again with `git status`:

```git
$ git status

On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md

```

Now the file is ready to be committed.
Go to the next section to finally make your first commit!
