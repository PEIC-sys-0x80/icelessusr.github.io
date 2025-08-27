# 用linux安裝windows的安裝指南

#Linux #windows #windows特殊安裝方法

>**此文件翻譯自IcelessDocs。**
>
>譯者: 靛夜子洛 (PEIC_sys_0x80)

## 1. 準備環境

### 需要安裝的系統軟體包

>這裡先以Arch Linux為例，之後會補充debian系linux相關資訊。

在開始之前，請確認你的linux系統中有安裝這些軟體包:
- `ntfs-3g`: 用於格式化與掛載NTFS。
- `wimlib`: 用於列出索引與刷入WIM檔案。
- `dosfstools`: 用於格式化FAT32。

如果還沒安裝，請執行以下指令進行安裝:

```bash
pacman -S ntfs-3g wimlib dosfstools
```

### 需要準備的檔案

- Windows PE (預安裝環境) ISO。
- 一個普通的windows ISO或wim檔案。

## 2. 分區建立與格式化

以下是必要的分區:
- EFI (ESP, boot, about 300MiB)
- Microsoft Recovery (MSR, msftres, about 16MiB)
- Windows Root (NTFS, msftdata, at least 32GiB for newer versions)

### 分區

接下來就是要來給硬碟分區了，首先，先執行以下這個指令:

```bash
parted /dev/(你的硬碟代號)
```

此時它會開啟一個shell，接下來的指令都需要在這個shell中執行。

首先，先在這個硬碟中建立GPT標籤。

```bash
mklabel gpt
```

然後，建立EFI分區:

```bash
mkpart EFI fat32 1MiB 301MiB
set 1 esp on
```

接著，建立MSR(Microsoft Recovery)分區:

```bash
mkpart Recovery 301MiB 317MiB
set 2 msftres on
```

最後是Windows Root分區:

```bash
mkpart Windows ntfs 317MiB 100%
set 3 msftdata on
```

完成之後你可以使用這個指令來確認硬碟分區狀態:

```bash
print
```

確認沒問題之後，退出 `parted`:

```bash
quit
```

### 格式化分區

> ※ 請注意 Microsoft Recovery 分區 **不能被格式化** !

格式化EFI分區:

```bash
mkfs.fat -F 32 /dev/(你的硬碟代號)1
```

格式化windows Root分區:

```bash
mkfs.ntfs -f /dev/(你的硬碟代號)3
```

## 3. 安裝windows

### 從ISO裡面撈出wim

> **如果你是要直接使用wim檔案，請跳過這一步**

創建一個資料夾作為ISO掛載點:

```bash
mkdir -p /(你的ISO掛載路徑)
```

把ISO掛上去:

```bash
sudo mount -o loop /(你的ISO掛載路徑) /(你的iso檔)
```

然後你就可以透過這個掛載的資料夾撈出WIM檔了。 這個wim檔通常在`/(你的ISO掛載路徑)/sources/install.wim`.

### 列出windows版本

```bash
winlib-imagex info /(你的iso檔)
```

執行之後會列出這個iso的版本資訊、索引等..


### 將WIM刷進windows root分區

先掛載Windows root分區:

```bash
mount /dev/(你的硬碟代號)3 /(你的Windows root掛載路徑)
```

刷入WIM:

```bash
wimapply /(你的wim檔) (你的索引) /(你的Windows root掛載路徑)
```

### 解除掛載

如果你的ISO還是掛載狀態，執行以下指令來卸載:

```bash
umount /(你的ISO掛載路徑)
```

然後卸載 Windows Root分區:

```bash
umount /(你的Windows root掛載路徑)
```

## 4. Install EFI

> 注意: 以上操作只有建立分區與刷入windows，但還沒有安裝EFI，目前也沒有辦法直接用Linux來給windows安裝EFI。

### 進入 Windows PE

重開機進入 Windows PE。

### 安裝 EFI

在 Windows PE 的CMD中輸入以下指令:

```bash
bcdboot X:\Windows /s Y: /f UEFI 
```

將`X：`替換為您的 Windows root分割區磁碟機號，將`Y：`替換為您的 EFI 分割區磁碟機號。

到這裡，你的windows就已經安裝好了! 重開機進入你的windows完成最後的設定吧!
