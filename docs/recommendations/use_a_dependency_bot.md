---
title: Use a dependency bot
---

## Introduction

It's easy to forget to update your dependencies.
This is bad for the security and functionality of your software.
Newer versions of dependencies can fix security issues, improve existing features, or add new features.

I recommend you use a bot like Renovate or Dependabot keep your dependencies up-to-date.

## Bot comparison

| Feature                                 | Renovate | Dependabot |
| --------------------------------------- | :------: | :--------: |
| Open pull request for updates           |    ✔️    |     ✔️     |
| Get updates on a regular schedule       |    ✔️    |     ✔️     |
| Display changelog in pull request       |    ✔️    |     ✔️     |
| Display dependency compatibility score  |    ✔️    |     ✔️     |
| Group monorepo updates into a single PR |    ✔️    |            |
| Fully customizable                      |    ✔️    |            |
| Rules-based auto-merging                |    ✔️    |            |

## Supported ecosystems

Both Renovate and Dependabot support:

- JavaScript
- PHP
- Python
- Java
- Ruby
- Rust
- .NET
- Dockerfiles
- GitHub Action runners

Read the documentation for Renovate or Dependabot to confirm that the bot supports your programming language/ecosystem.

## Renovate

Renovate is free to use on public and private repositories.

### Renovate documentation

Read the [Renovate Docs](https://docs.renovatebot.com/) to learn more about Renovate.

### Enabling Renovate

Read the [Installing and onboarding Renovate into repositories](https://docs.renovatebot.com/getting-started/installing-onboarding/) documentation for more information.

The basic process is:

1. Install Renovate from the [GitHub Marketplace for Renovate](https://github.com/marketplace/renovate).
1. Choose whether you want to run Renovate on all repositories or only on repositories you select.
1. Renovate creates a onboarding pull request with a basic configuration on each enabled repository.
1. The onboarding PR shows a preview of what Renovate will do once you merge the config.
1. _Optional:_ Customize the Renovate configuration on the onboarding PR branch.
1. After you merge the onboarding PR, Renovate will start creating real PRs.

<!-- prettier-ignore -->
!!! tip "Need help configuring Renovate?"
    If you get stuck or confused, and need help, go to the `renovatebot/renovate` repository's [discussions forum](https://github.com/renovatebot/renovate/discussions) to get help from the Renovate maintainers.

## Dependabot

Dependabot is the "built-in" dependency management bot for GitHub, this means you can use it without installing an app.
Dependabot is free to use on public and private repositories.

### Dependabot documentation

Read the [GitHub Docs, Keeping your dependencies updated automatically](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically).

### Enabling Dependabot

Follow the steps in the [GitHub Docs, Configuring Dependabot version updates](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
