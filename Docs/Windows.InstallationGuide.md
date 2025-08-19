# Windows Install Guide

## 1. Prepare Environments

### System pacakges

```bash
pacman -S ntfs-3g wimlib dosfstools
```

- `ntfs-3g` For formatting and mounting NTFS.
- `wimlib` For listing indexes and applying WIM.
- `dosfstools` For formatting FAT 32.

### Files

- A Windows PE (Preinstallation Environment) ISO.
- A Normal Windows ISO or WIM.

## 2. Format Your Disk

The following includes all the kinds of partitions you should have:

- EFI (ESP, boot, about 300MiB)
- Microsoft Recovery (MSR, msftres, about 16MiB)
- Windows Root (NTFS, msftdata, at least 32GiB for newer versions)

### Partitions

Now, to start partition, run:

```bash
parted /dev/YourDrive
```

It starts a shell, the following commands should be executed in that.

First, make label GPT for the disk:

```bash
mklabel gpt
```

Second, configure the EFI Partition:

```bash
mkpart ESP fat32 1MiB 301MiB
set 1 esp on
```

Third, configure the MSR Partition:

```bash
mkpart msr 301MiB 317MiB
set 2 msftres on
```

Next, configure the Windows Root Partition:

```bash
mkpart primary ntfs 317MiB 100%
set 3 msftdata on
```

To print the status of the disk:

```bash
print
```

To exit `parted`:

```bash
quit
```

### Format the Partitions

Remember, Microsoft Recovery Partiton shouldn't be formatted.

To format EFI Partition:

```bash
mkfs.fat -F 32 /dev/YourDrive1
```

To format Windows Root Partition:

```bash
mkfs.ntfs -f /dev/YourDrive3
```

## 3. Install Windows

### Access the WIM inside the ISO

**If you have an existing WIM file, skip this.**

Make a dir for the ISO mountpoint:

```bash
mkdir -p /YourISOMountpoint
```

Mount the ISO:

```bash
sudo mount -o loop /YourISOMountpoint /YourISO
```

Now your WIM file can be accessed by `/YourISOMountpoint/sources/install.wim` (such as `/YourWIM` of the following).

### List Windows Editions

```bash
winlib-imagex info /YourISO
```

It lists the editions' informations in your ISO including name, index...

### Apply WIM to Windows Root Partition

To mount the partition:

```bash
mount /dev/YourDrive3 /YourRootMountpoint
```

To apply WIM:

```bash
wimapply /YourWIM YourIndex /YourRootMountpoint
```

### Clean up

If you'd mounted the ISO:

```bash
umount /YourISOMountpoint
```

To unmount the Windows Root Partition:

```bash
umount /YourRootMountpoint
```

## 4. Install EFI

Remember, we didn't install EFI for Windows by any of above, and we cannot install EFI for Windows from Linux. 

### Boot into Windows PE

Just boot your device into Windows PE

### Install EFI

In the terminal in the Windows PE:

```bash
bcdboot X:\Windows /s Y: /f UEFI 
```

Replace `X:` with your Windows Root Partition Drive Letter and `Y:` with your EFI Partition Drive Letter.

Now, exit Windows PE and you've finished Windows Installation. Boot into your Windows and finish setup!
