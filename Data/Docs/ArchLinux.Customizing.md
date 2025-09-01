# Customizing

Some tips for customzing Arch Linux.

## Yay

Yay stands for “Yet Another Yogurt” — a popular AUR helper for Arch Linux. It’s basically a tool that automates installing, updating, and removing packages from both the official Arch repos and the [AUR (Arch User Repository)](https://aur.archlinux.org/).

### 1. Install Requirements

Install requirements for Yay Installation by `pacman`:

```bash
sudo pacman -S --needed git base-devel
```

### 2. Clone the Yay Repository

Clone the Yay Repository by `git`:

```bash
git clone https://aur.archlinux.org/yay.git
```

And then `cd` to the repository:

```bash
cd yay
```

### 3. Build and Install

The following command will install all requirements for Yay, build Yay, and then install by `makepkg`:

```bash
makepkg -si
```

## Fcitx Installation Guide

Fcitx (Flexible Context-aware Input Tool with eXtra) is a lightweight, flexible input method framework for Linux and other Unix-like systems, including Arch Linux. It allows users to type in non-Latin languages, such as Chinese, Japanese, or Korean, by providing a framework for various input method engines (e.g., Pinyin, Cangjie, or Chewing for Chinese).

### Core

```bash
pacman -S fcitx5
```

### GUI Config Tool

```bash
pacman -S fcitx5-configtool fcitx5-gtk fcitx5-qt
```

### Additional IMEs

- Chinese Traditional Chewing `fcitx5-chewing`
- Chinese Simplified Chinese Pinyin `fcitx5-pinyin`
- Japanese Romaji `fcitx5-mozc`

## Fonts

`/usr/share/fonts` for system-wide.

`~/.local/share/fonts` for user-specific.

To refresh fonts

```bash
fc-cache -fv
```

### Noto Fonts

This is the recommended font family for system.

To install Chinese, Japanese, Korean:

```bash
pacman -S noto-fonts-cjk
```

To install Chinese Traditional only:

```bash
pacman -S noto-fonts-cjk-tc
```

To install Chinese Simplified only:

```bash
pacman -S noto-fonts-cjk-sc
```

To install Korean only

```bash
pacman -S noto-fonts-cjk-kr
```

To install Japanese only

```bash
pacman -S noto-fonts-cjk-jp
```