# Noto Fonts

## Basic knowledge

`/usr/share/fonts` for system-wide.

`~/.local/share/fonts` for user-specific.

To refresh fonts

```bash
fc-cache -fv
```

## Noto Fonts

This is the recommended font family for system.

To install Chinese, Japanese, Korean:

```bash
sudo pacman -S noto-fonts-cjk
```

To install Chinese Traditional only:

```bash
sudo pacman -S noto-fonts-cjk-tc
```

To install Chinese Simplified only:

```bash
sudo pacman -S noto-fonts-cjk-sc
```

To install Korean only

```bash
sudo pacman -S noto-fonts-cjk-kr
```

To install Japanese only

```bash
sudo pacman -S noto-fonts-cjk-jp
```
