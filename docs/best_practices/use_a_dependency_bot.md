---
id: use_a_dependency_bot
title: Use a dependency  bot
---

## Introduction

It's easy to forget to update your dependencies on a regular basis.
This is bad for the security and functionality of your software.
Newer versions of dependencies can fix security issues, improve existing features, or add new features.

I strongly recommend that you use a bot like _Renovate_ or _Dependabot_ to get and keep up-to-date with your dependencies.

## Bot comparison

| Feature                                 | Renovate | Dependabot |
| --------------------------------------- | :------: | :--------: |
| Open pull request for updates           |  **x**   |   **x**    |
| Get updates on a regular schedule       |  **x**   |   **x**    |
| Display changelog in PR                 |  **x**   |   **x**    |
| Display dependency compatibility score  |  **x**   |   **x**    |
| Group monorepo updates into a single PR |  **x**   |            |
| Fully customizable                      |  **x**   |            |
| Rules-based auto-merging                |  **x**   |            |

## Supported ecosystems

Both Dependabot and Renovate support:

- JavaScript
- PHP
- Python
- Java
- Ruby
- Rust
- .NET
- Dockerfiles
- GitHub Action runners

:::tip Check the docs before installing
Check the official documentation for _Renovate_ and _Dependabot_ to verify that the bot will work with your programming language/ecosystem.
:::

## Renovate

The Renovate bot is free to use for public and private repositories.

### Renovate documentation

Read the [Renovate Docs](https://docs.renovatebot.com/) to learn more about the Renovate bot.

### Enabling Renovate

Follow the [Renovate GitHub app installation](https://docs.renovatebot.com/install-github-app/) documentation.

The basic process is:

1. Install Renovate from the [GitHub marketplace for Renovate](https://github.com/marketplace/renovate).
1. Choose whether you want to run Renovate on all repositories or only on repositories you select.
1. Renovate bot creates a onboarding pull request with a basic configuration on each enabled repository.
1. The onboarding PR shows a preview of what Renovate will do once you merge the config.
1. _Optional:_ Customize the Renovate configuration on the onboarding PR branch.
1. After you merge the onboarding PR, Renovate will start creating real PRs.

:::tip Need help configuring Renovate?
If you get stuck or confused, and need help, go to the `renovatebot/renovate` repository's [discussions forum](https://github.com/renovatebot/renovate/discussions) to get help from the Renovate bot team.
:::

## Dependabot

Dependabot is the "built-in" dependency management bot for GitHub, this means you can use it without installing an app.
You can use it for free on public and private repositories.

### Dependabot documentation

Read the [GitHub docs, Keeping your dependencies updated automatically](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/keeping-your-dependencies-updated-automatically).

### Enabling Dependabot

Follow the steps in the [GitHub docs, Enabling and disabling version updates](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/enabling-and-disabling-version-updates) documentation.
