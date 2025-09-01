# ArchLinux的客製化

#ArchLinux #Linux

>**此文件翻譯自IcelessDocs。**
>
>譯者: 靛夜子洛 (PEIC_sys_0x80)


這邊提供一些客製化Arch Linux的技巧。

## Yay

Yay 是「Yet Another Yogurt」的縮寫，是一個Arch Linux熱門的[AUR (Arch User Repository)](https://aur.archlinux.org/)工具。 它本質上是一個可以自動從Arch官方倉庫和AUR (Arch用戶倉庫) 安裝、更新與刪除軟體包的工具。

### 1.安裝所需工具

先用`pacman`裝上安裝Yay時所需的工具:

```bash
sudo pacman -S --needed git base-devel
```

### 2.複製儲存庫

使用`git`複製Yay的儲存庫:

```bash
git clone https://aur.archlinux.org/yay.git
```

然後`cd`進去:

```bash
cd yay
```

### 3.編譯並安裝

使用以下指令`makepkg`會自動安裝Yay的所有依賴，然後編譯他，然後安裝上:

```bash
makepkg -si
```

## Fcitx安裝指南

Fcitx (Flexible Context-aware Input Tool with eXtra) 是一個輕量級、靈活的輸入法框架，支援Linux與其他類Unix系統，它主要透過位各種輸入法引擎(如中文拼音、倉頡或新酷音)提供框架，讓使用者能夠輸入非拉丁系語言，如中文、日文或韓文。

### 安裝核心

```bash
pacman -S fcitx5
```

### 安裝GUI設定工具

```bash
pacman -S fcitx5-configtool fcitx5-gtk fcitx5-qt
```

### IME插件
- **中文繁體「新酷音」**: `fcitx5-chewing`
- **中文簡體 「中文拼音」**: `fcitx5-pinyin`
- **日語羅馬字**: `fcitx5-mozc`

## 字體

linux的字體路徑主要分為這兩個:

- `/usr/share/fonts`: 這裡主要是存放系統的全域字體。
- `~/.local/share/fonts`: 這裡主要是存放特定使用者專屬字體。

你可以使用以下這個指令來重新加載字體:

```bash
fc-cache -fv
```

## Noto系列字體

這是我們推薦用於系統字體的字體系列。

安裝中文、韓文、日文:

```bash
pacman -S noto-fonts-cjk
```

只安裝繁體中文:

```bash
pacman -S noto-fonts-cjk-tc
```

只安裝簡體中文:

```bash
pacman -S noto-fonts-cjk-sc
```

只安裝韓文:

```bash
pacman -S noto-fonts-cjk-kr
```

只安裝日文:

```bash
pacman -S noto-fonts-cjk-jp
```