---
id: dealing_with_dependencies
title: Dealing with dependencies
---

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
