---
id: dealing_with_merges
title: Dealing with merges
---

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
