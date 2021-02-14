---
id: introduction_to_the_nano_text_editor
title: Introduction to the Nano text editor
---

Nano is a simple and easy to use text editor.
It's also what we'll be using in the Git sandbox.

## Starting Nano

You can start editing a file with Nano from the CLI:

```bash
$ nano <filename>
```

If the filename does not exist, Nano will create the file when you save.

## Basic use

You can start typing right away.
Use the arrow keys to move your cursor.

| Action                    |          Keys to use          |
| ------------------------- | :---------------------------: |
| Move cursor               |     <kbd>arrow keys</kbd>     |
| Saving/write-out          |      <kbd>CTRL + O</kbd>      |
| Save without confirmation |      <kbd>CTRL + S</kbd>      |
| Exit                      |      <kbd>CTRL + X</kbd>      |
| Selecting text            | <kbd>SHIFT + arrow keys</kbd> |
| Cut selected text         |      <kbd>CTRL + K</kbd>      |
| Paste selected text       |      <kbd>CTRL + U</kbd>      |
| Undo                      |      <kbd>ALT + U</kbd>       |
| Redo                      |      <kbd>ALT + E</kbd>       |
| Search forward            |      <kbd>CTRL + W</kbd>      |
| Search backward           |      <kbd>CTRL + Q</kbd>      |
| Go to matching bracket    |      <kbd>ALT + ]</kbd>       |
| Toggle help mode          |      <kbd>ALT + X</kbd>       |

## Command list

By default, Nano lists the commands you can use at the bottom of the editor window, this is called _help mode_.

```
^G Get Help ^O Write Out ^W Where Is ^K Cut Text   ^J Justify  ^C Cur Pos
^X Exit     ^R Read File ^\ Replace  ^U Paste Text ^T To Spell ^_ Go To Line
```

- `^` is the <kbd>Ctrl</kbd> key.
- `M-` is the <kbd>ALT</kbd> key.

:::tip Toggle help mode back on
If you disabled _help mode_ by mistake, and want it back use the <kbd>ALT + X</kbd> keys.
:::

## Get help inside Nano

Use <kbd>CTRL + G</kbd> or <kbd>F1</kbd> to read the built-in help.

## Read the Nano manual

Enter `man nano` in the CLI to read the manual.
