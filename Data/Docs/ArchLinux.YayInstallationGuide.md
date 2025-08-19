# Yay Installation Guide

Yay stands for “Yet Another Yogurt” — a popular AUR helper for Arch Linux. It’s basically a tool that automates installing, updating, and removing packages from both the official Arch repos and the [AUR (Arch User Repository)](https://aur.archlinux.org/).

## 1. Install Requirements

Install requirements for Yay Installation by `pacman`:

```bash
sudo pacman -S --needed git base-devel
```

## 2. Clone the Yay Repository

Clone the Yay Repository by `git`:

```bash
git clone https://aur.archlinux.org/yay.git
```

And then `cd` to the repository:

```bash
cd yay
```

## 3. Build and Install

The following command will install all requirements for Yay, build Yay, and then install by `makepkg`:

```bash
makepkg -si
```