# Arch Linux Installation Guide

## 1. Download

Download ISO from one of the following:
- [Directly Download the Latest Version](https://geo.mirror.pkgbuild.com/iso/2025.08.01/archlinux-x86_64.iso)
- [Worldwide Server](https://geo.mirror.pkgbuild.com/iso/2025.08.01/)
- [Server List](https://archlinux.org/download)

## 2. Boot into the ISO

Just boot your device from the ISO.

## 3. Make Partitions

Use [cfdisk](https://cfdisk.com/) which is bulit in the ISO to make partitions for your Arch Linux Installation. **You don't have to format the partition now** but the next step.

1. UEFI Partition, about 300MB
2. Swap Partition, as large as you want, or don't use.
3. Root Partition, at least 4GB.

Now start making partitions:

```bash
cfdisk /dev/YourDisk
```

## 4. Format the partitions

First, format the UEFI partition to FAT32:

```bash
mkfs.fat -F 32 /dev/YourDiskPartitionForUEFI
```

Second, format the Swap Partition if you'd use:

```bash
mkswap /dev/YourDiskPartitionForSwap
```

Third, format the Root Partition to Ext4:

```bash
mkfs.ext4 /dev/YourDiskPartitionForRoot
```

## 5. Mount the Root Partition

Mount the Root Partition for installation:

```bash
mount /dev/YourDiskPartitionForRoot /YourDiskPartitionForRoot/MountPoint
```

## 6. Connect to Network

Ethernet will automatically be used, but if you use WiFi, you should connect manually by `iwctl` from [iwd](https://wiki.archlinux.org/title/Iwd).

First, enter `iwctl` shell by:

```bash
iwctl
```

Second, in the shell, enter:

```bash
station wlan0 connect "YourSSID"
```

Third, exit the shell, enter:

```bash
exit
```

## 7. Init Arch Linux

We have to install some packages into the Root Partition for installation, run the following command to install them:

```bash
pacstrap /YourDiskPartitionForRoot/MountPoint base linux-lts linux-lts-headers linux-firmware sof-firmware base-devel nano grub sudo efibootmgr networkmanager
```

-  Also `openssh` if you need ssh.
-  Drivers

Chip|Packages
-|-
Intel iGPU|`mesa vulkan-intel lib32-mesa lib32-vulkan-intel vulkan-icd-loader intel-media-driver libva-utils`
Intel Arc|`mesa vulkan-intel lib32-mesa lib32-vulkan-intel libva-intel-driver intel-media-driver`
AMD iGPU/dGPU|`mesa libva-mesa-driver mesa-vdpau vulkan-radeon xf86-video-amdgpu`
QEMU via virtio-vga-gl|`mesa mesa-utils vulkan-radeon xf86-video-vesa`
Nvidia Any|`nvidia-dkms nvidia-prime`
Nvidia New (open source) >= 3050|`nvidia-open-dkms nvidia-prime`


This will take a long time processing, please wait for it and keep the network connected.

## 8. Make fstab File

For making the fstab file, we have to mount all the devices we want. Remember, we mounted the Root Partition, so we don't have to mount it again. 

Make the mountpoint for UEFI Partition and mount:

```bash
mkdir -p /YourDiskPartitionForRoot/MountPoint/boot/efi
```

```bash
mount /dev/YourDiskPartitionForUEFI /YourDiskPartitionForRoot/MountPoint/boot/efi
```

Enable swap if you'd use:

```bash
swapon /dev/YourDiskPartitionForSwap
```

Now generate the fstab file:

```bash
genfstab -U /YourDiskPartitionForRoot/MountPoint > /YourDiskPartitionForRoot/MountPoint/etc/fstab
```

## 9. Configure Arch Linux

### 9-1. Enter the Root Partition

We have to enter the Root Partition and all of the following commands SHOULD BE EXECUTED IN CHROOT.

```bash
arch-chroot /YourDiskPartitionForRoot/MountPoint
```

### 9-2. Configure Users

Set the password for root:

```bash
passwd
```

and enter the new password.

Add a new user for Arch Linux:

```bash
useradd -m -G wheel -s /bin/bash YourUserName
```

Set the password for the new user

```bash
passwd YourUserName
```

### 9-3. Configure sudo

We have to configure sudo to let users do sudo commands.

Enter the following command to edit sudo's configuration:

```bash
EDITOR=nano visudo
```

Look for these words in the editor:

```
## Uncomment to allow members of group wheel to execute any command
# %wheel ALL=(ALL:ALL) ALL
```

Usually at the end of the file you're editing, and then uncomment:

```
%wheel ALL=(ALL:ALL) ALL
```

Now, save and exit the editor with `Ctrl` + `O`, `Enter`, and then `Ctrl` + `X`.

### 9-4. Enable Services

To enable Network Manager:

```bash
systemctl enable NetworkManger
```

To enable ssh if needed:

```bash
systemctl enable sshd
```

### 9-5. Graphics Driver

For Nvidia Graphics users, also run the following commnad:

```bash
pacman -S nvidia-dkms nvidia-utils lib32-nvidia-utils
```

### 9-6. Configure hostname

You can custom your hostname by:

```bash
echo "YourHost" > /etc/hostname
```

### 9-7 Time Zone
List available timezones
```bash
timedatectl list-timezone
```

Set one
```bash
timedatectl set-timezone Your/Timezone
```

Setup auto sync
```bash
timedatectl set-ntp true
```

If not working
```bash
systemctl enable systemd-timesyncd
```

### 9-8. Install UEFI and GRUB

To install GRUB manually:

```bash
grub-install
```

or for removable devices like you'd like to install on an external drive:

```bash
grub-install --removable --recheck
```

Now, make GRUB config file:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

### 9-9. Exit chroot

To exit chroot environment:

```bash
exit
```

## 10. Finish up

To unmount everything:

```bash
umount -a
```

To reboot:

```bash
reboot
```

After reboot, to connect to WiFi if you'd use:

```bash
nmcli device wifi connect "SSID" password "PASSWORD"
```
