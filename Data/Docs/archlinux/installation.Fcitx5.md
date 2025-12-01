# Fcitx Installation Guide

Fcitx (Flexible Context-aware Input Tool with eXtra) is a lightweight, flexible input method framework for Linux and other Unix-like systems, including Arch Linux. It allows users to type in non-Latin languages, such as Chinese, Japanese, or Korean, by providing a framework for various input method engines (e.g., Pinyin, Cangjie, or Chewing for Chinese).

## Core

```bash
pacman -S fcitx5
```

## GUI Config Tool

```bash
pacman -S fcitx5-configtool fcitx5-gtk fcitx5-qt
```

## Additional IMEs

- Chinese Traditional Chewing `fcitx5-chewing`
- Chinese Simplified Chinese Pinyin `fcitx5-pinyin`
- Japanese Romaji `fcitx5-mozc`
