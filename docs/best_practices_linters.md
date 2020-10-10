---
id: best_practices_linters
title: Use a linter
---

## About linters

A linter is a program that runs with your code editor.
The linter ensures code you write conforms to a given standard.

It will check things like:

- Spaces/tabs for indentation
- Semicolon use
- Indentation levels
- Unused variables

If the code is not up to scratch, the linter will tell you.
The linter usually supplies a quick fix, which you can select and execute from within the editor.
You can also run the linter from within the terminal to automatically fix many issues.

## Prettier

If you're not using Prettier, you really should!

When you and your team all use Prettier, all code looks the same.
This prevents fights over code style.

Using Prettier also makes merges easier, as all code looks the same, so it's easy to spot the differences.

Prettier can format a lot of languages, and is supported with a lot of editors.

## Well-known linters

|                 Name                  |                     Supported languages                      |
| :-----------------------------------: | :----------------------------------------------------------: |
|   [Prettier](https://prettier.io/)    | JavaScript/TypeScript, HTML/CSS, Vue/Angular, Markdown, YAML |
|     [ESLint](https://eslint.org/)     |                    JavaScript/TypeScript                     |
| [StandardJS](https://standardjs.com/) |                          JavaScript                          |
