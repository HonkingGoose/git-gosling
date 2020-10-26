---
id: create_a_github_account
title: Create a GitHub account
---

## Create a GitHub account

You need a GitHub account to follow this guide.
Go to [GitHub.com](https://github.com/) and create your account.

:::tip
Need help with creating your GitHub account?

Follow the [GitHub Getting Started documentation](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/signing-up-for-github).
:::

### Verify your email address with GitHub

After you have created your account, you must verify your email address.
Read the docs and follow the steps: [Verify your email address](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/verifying-your-email-address).

:::caution
If you do not verify your email address, GitHub will be _useless_.
You will not be able to create or fork a repository.
:::

### Secure your account with two-factor authentication

GitHub strongly recommends you enable two-factor authentication (2FA).
When you enable 2FA, you log in with something you know (password) plus something you have (app, security key, SMS text message).
Using 2FA makes it harder for somebody to access your account.

You can choose from these authentication methods:

- An authenticator app on your mobile phone like Authy, Google Authenticator or LastPass authenticator.
- A security key like a Yubikey, in addition to the authenticator app.
- Receiving SMS text messages on your mobile phone.

Read and follow the steps in the [GitHub docs, Securing your account with two-factor authentication](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa).

:::warning
Write down or print the recovery codes that GitHub gives you, and keep them somewhere safe!
:::

### Create personal access token (PAT)

If you have two-factor authentication enabled, you must create a GitHub personal access token (PAT).
Follow the steps in the [GitHub documentation, Creating a personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).
Use this personal access token instead of your GitHub password when you use the Git CLI.

## Summary

You have:

- Created a GitHub account.
- Verified your email address.
- Turned on two-factor authentication.
- Created a personal access token.

That was a lot of work, but you're ready to go now!
