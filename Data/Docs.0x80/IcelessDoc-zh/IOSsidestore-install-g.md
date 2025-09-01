# IOS側載APP商店(Sidestore)安裝指南

#IOS #IOS側載 #IOS第三方商店

>**此文件翻譯自IcelessDocs。**
>
>譯者: 靛夜子洛 (PEIC_sys_0x80)

[SideStore](https://sidestore.io/) 是一款iOS/iPadOS的第三方應用商店，屬於 [AltStore](https://altstore.io/) 的fork, 不過它刷新、安裝app與IPA等都可以獨立在裝置上進行，無須電腦。

但一開始安裝SideStore本身時還是需要電腦來安裝。

## 1. 安裝環境

### 系統軟體包安裝

這裡以archLinux為例:

```bash
sudo pacman -S usbmuxd libimobiledevice avahi bind docker
```

### 安裝 Docker

如果你要讓docker在沒有root權限的情況下執行:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

或是將 `$USER` 替換成你要用的使用者名稱。

### 啟用系統服務

```bash
sudo systemctl enable --now avahi-daemon
```

```bash
sudo systemctl enable --now usbmuxd
```

```bash
sudo systemctl enable --now docker
```

### 重開機

重開機以套用以上更改:

```bash
reboot
```

### 下載相關檔案

#### SideStore 的 ipa 檔案

下載位址: [SideStore Github 儲存庫](https://github.com/SideStore/SideStore).

#### AltServer Linux版

下載位址: [AltServer-Linux Github 儲存庫](https://github.com/NyaMisty/AltServer-Linux).

#### iDevicePair

下載位址: [iDevicePair Github 儲存庫](https://github.com/jkcoxson/idevice_pair).

## 2. 裝置設定

### 開發者模式(Developer Mode)

在你的iOS/iPadOS裝置，打開 **設定**(Settings)，然後滑到 **隱私與安全 > 開發者模式**(Privacy & Security > Developer Mode)，開啟**開發者模式**(Developer Mode)。

然後你的設備會彈出一個選單，選擇 **重新啟動** ，裝置將重新啟動。

重新啟動完成後，你的裝置會顯示一個**向上滑動以繼續**(Swipe Up to Continue)，此時你就往上滑 然後選擇**啟用**(Enable)，然後輸入你的密碼。

然後你的裝置會出現蘋果logo一段時間，然後會進入鎖定畫面，輸入密碼進入後，開發者模式就啟用了。

### StosVPN

StosVPN是SideStore官方推薦的本地隧道(tunnel)應用程式，當然你也可以用其他的本地隧道應用程式。

下載位址: 
- [App Store](https://apps.apple.com/us/app/stosvpn/id6744003051)
- [官方github儲存庫](https://github.com/SideStore/StosVPN) 

安裝stosVPN後，打開它，然後單擊**連接**，它會彈出一個對話框，要求您添加VPN配置，選擇**允許**之後輸入密碼，然後點**添加**，這樣你的stosvpn就設定好了！

## 3. 安裝

### 連接你的裝置

連接你的 iOS/iPadOS 裝置到你的電腦, 然後執行以下指令來跟你的裝置配對:

```bash
idevicepair pair
```

然後執行以下指令來取得你裝置的UUID:

```bash
idevice_id -l
```

### 安裝 SideStore

首先，使用docker啟動[Dadoum's anisette-v3-server](https://github.com/Dadoum/anisette-v3-server)，並讓它在背景執行:

```bash
docker run -d --restart always --name anisette-v3 -p 6969:6969 --volume anisette-v3_data:/home/Alcoholic/.config/anisette-v3/lib/ dadoum/anisette-v3-server
```

然後，安裝 SideStore:

```bash
ALTSERVER_ANISETTE_SERVER="http://127.0.0.1:6969" ./AltServer -u "UUID" -a "AppleAccount" -p "AppleAccountPassword" "SideStore.ipa"
```

### 信任開發者

您可能會注意到，安裝後不能立即打開，因為它是由**不受信任的開發人員**安裝的。打開**設定**(Settings)，轉到**通用> VPN＆設備管理**(General > VPN & Device Management)，尋找**開發人員應用程序**(DEVELOPER APP)，選擇您的Apple帳戶，單擊**信任“ (你的apple帳戶)”** ，然後單擊 **允許**，然橫就能打開sidestore了。



## 4. 配對文件

打開 SideStore 之後, 你會看到它提示你安裝 配對文件。(參見: [配對文件](https://support.apple.com/en-bw/guide/security/secadb5b6434/web))。

然後去執行 [iDevicePair](https://github.com/jkcoxson/idevice_pair)，取得配對文件，並直接安裝到 SideStore。

```bash
./iDevicePair.AppImage
```

從頂部選單選擇你的裝置，然後點**生成**(Generate)。

![yeeeee](../DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.GeneratePairingFile.png)

然後如果沒有找到裝置，像這樣:

![yeeeeeeee!!!](../DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.NoDeviceFound.png)

那請檢查你的裝置與電腦之間的連接是否正常，然後按 **刷新**(Refresh)。

生成完後，滑到下面SideStore的區域，然後按 **安裝**(Install)。

![yeeeeeeeeeeeeee!!!!!!!!!](../DocAttachments/iOS.SideStoreInstallationGuide.iDevicePair.InstallToSideStore.png)

現在，你的SideStore就已經成功安裝了!

> **注意**:
> - 當刷新或安裝ipa的時候，ShosVPN或你用的其他的本地隧道軟體都要開著。
> - 不要分享你的配對文件，因為它只能用在你的設備上，無法用在其他設備。
