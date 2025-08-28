# SideStore Installation Guide

[SideStore](https://sidestore.io/) is a third-party store for iOS/iPadOS fork of [AltStore](https://altstore.io/), but it refreshes, installs, ipa directly on device (no computers required)

## 1. Prepare requirements

### Sytem packages

```bash
sudo pacman -S usbmuxd libimobiledevice avahi bind docker
```

### Setup Docker

Let current user run docker commands without root permsissions:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

or replace `$USER` with whatever you want.

### Enable system services

```bash
sudo systemctl enable --now avahi-daemon
```

```bash
sudo systemctl enable --now usbmuxd
```

```bash
sudo systemctl enable --now docker
```

### Reboot

To apply above changes:

```bash
reboot
```

### SideStore ipa File

Download from [SideStore Github Repository](https://github.com/SideStore/SideStore).

### AltServer for Linux

Download from [AltServer-Linux Github Repository](https://github.com/NyaMisty/AltServer-Linux).

### iDevicePair

Download from [iDevicePair Github Repository](https://github.com/jkcoxson/idevice_pair).

## 2. Device Setup

### Developer Mode

On your iOS/iPadOS device, open **Settings**, go to **Privacy & Security > Developer Mode**, and enable **Developer Mode**.

Your device will pop up a menu, select **Restart**, your device restarts.

After restarting, your device will show **Swipe Up to Continue**, just swipe up and select **Enable**, and enter your password.

Your device will show up Apple Logo for a while, and it will go to Lock Screen and require password, Developer Mode enables.

### StosVPN

[StosVPN](https://github.com/SideStore/StosVPN) is a recommended local [tunnel](https://en.wikipedia.org/wiki/Tunneling_protocol) also by SideStore, you can use other local tunnel apps if you want.

Download from [App Store](https://apps.apple.com/us/app/stosvpn/id6744003051).

After installing StosVPN, open it, and click **Connect**, it pops up a dialog asking you for adding a VPN configuration, select **Allow**, enter your password and then click **Add**, your StosVPN will work!

## 3. Installation

### Connect your device

Connect your iOS/iPadOS device to your computer, and run the following command to pair with your device:

```bash
idevicepair pair
```

And the following to get the UUID of your device:

```bash
idevice_id -l
```

### Install SideStore

First, start [Dadoum's anisette-v3-server](https://github.com/Dadoum/anisette-v3-server) using `docker` in background:

```bash
docker run -d --restart always --name anisette-v3 -p 6969:6969 --volume anisette-v3_data:/home/Alcoholic/.config/anisette-v3/lib/ dadoum/anisette-v3-server
```

Now, install SideStore

```bash
ALTSERVER_ANISETTE_SERVER="http://127.0.0.1:6969" ./AltServer -u "UUID" -a "AppleAccount" -p "AppleAccountPassword" "SideStore.ipa"
```

### Trust Developer

You may notice that you cannot open SideStore right after you install it because it's installed by **Untrusted Developer**. Open **Settings**, go to **General > VPN & Device Management**, look for **DEVELOPER APP** , choose your Apple Account, click **Trust "YourAppleAccount"**, and click **Allow**, now SideStore is available to be open.

## 4. Pairing File

After opening SideStore, you will see a dialog asks you to install a [pairing file](https://support.apple.com/en-bw/guide/security/secadb5b6434/web).

To get and install directly to SideStore, run [iDevicePair](https://github.com/jkcoxson/idevice_pair).

```bash
./iDevicePair.AppImage
```

Select your device from the top menu, and click **Generate**.

<img src="Data/DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.GeneratePairingFile.png" width="100%">

If there's no device found like this

![](/Data/DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.NoDeviceFound.png)

Please check your connection between your pc and device, and then click **Refresh**.

After generating, scroll down to the SideStore area and click **Install**.

![](/Data/DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.InstallToSideStore.png)

Now, your SideStore is completely installed on your device!

## Notice

- ShosVPN or other local tunnel should be running while refreshing, installing ipa.

- Don't share your pairing files with anyone and it's useless excepting on your device.