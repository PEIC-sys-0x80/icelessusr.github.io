# systemctl

#資訊科技 #終端指令 #linux #linux/unix指令

`systemctl` 是 Linux 系統中用來與 `systemd` 初始化系統互動的主要指令工具。`systemd` 是現今大多數 Linux 發行版（如 Ubuntu、Debian、Fedora、CentOS）所使用的系統與服務管理器，負責系統啟動時的初始化、管理服務（daemons）、掛載檔案系統、處理系統狀態轉換等工作。

## 基本語法

```shell
systemctl [options] [command] [unit]
```

  - **options**：可選參數，例如 `--now`、`--user` 等。
  - **command**：如 start、stop、enable、disable 等。
  - **unit**：目標單位，例如 nginx.service、multi-user.target 等。

-----

## 所有可選參數一覽

`systemctl` 提供豐富的選項，用來改變指令的行為。以下是一些常見且實用的選項：

  - `--user`：以使用者身份而非系統身份執行操作。這對於管理使用者層級的服務（位於 `~/.config/systemd/user/` 目錄下）非常有用。
  - `--now`：與 `enable` 或 `disable` 指令搭配使用，表示除了設定開機自動啟動外，也立即執行 `start` 或 `stop` 的動作。
  - `-H` 或 `--host`：透過 SSH 連線到遠端主機，並在其上執行 `systemctl` 指令，例如 `systemctl -H user@host status apache2.service`。
  - `-r` 或 `--recursive`：與 `list-dependencies` 搭配，遞歸地顯示所有子依賴關係。
  - `-a` 或 `--all`：與 `list-units` 搭配，顯示所有狀態的單位，包括非活動的。
  - `--state=`：過濾單位狀態，例如 `systemctl list-units --type=service --state=running` 只顯示正在執行的服務。

## systemd 單位（Unit）詳解

除了服務（`.service`）和目標（`.target`）之外，`systemd` 還有多種不同類型的單位，每種都用於特定的目的。理解這些單位類型對於深入掌握 `systemd` 至關重要。

### 常見單位類型：

  - `.service`：最常見的類型，用於管理系統服務（如 Web 伺服器、資料庫）。
  - `.target`：用於對多個單位進行分組和同步，代表一個系統狀態（如 `multi-user.target`）。
  - `.socket`：用於管理網路或 IPC（行程間通訊）的 socket。`systemd` 可以根據 socket 的連線請求，按需啟動相關服務，這稱為 **socket 啟用（socket activation）**。
  - `.mount`：用於管理檔案系統掛載點，可以確保在服務啟動前，相關檔案系統已經掛載。
  - `.device`：用於管理裝置文件，`systemd` 能夠根據 udev 事件自動處理裝置。
  - `.timer`：用於執行定時任務，功能上可以取代 `cron`。
  - `.path`：用於監控特定的檔案或目錄路徑，當路徑狀態改變時觸發相關服務。
  - `.slice`：用於管理 cgroups（控制群組），將行程分組以便於資源管理。

-----

## 常用功能與用途範例

### 啟動與停止服務

```shell
sudo systemctl start nginx.service      # 啟動 nginx 服務
sudo systemctl stop nginx.service       # 停止 nginx 服務
```

### 重新啟動與重新載入服務

```shell
sudo systemctl restart apache2.service      # 重新啟動服務
sudo systemctl reload apache2.service       # 重新載入配置（不會中斷服務）
```

> 備註：`reload` 僅在服務本身支援熱重載（Hot Reload）時有效，若不支援，`systemctl` 會自動回退執行 `restart`。

### 啟用或停用服務自動啟動

```shell
sudo systemctl enable ssh.service       # 開機自動啟動
sudo systemctl disable ssh.service      # 禁止開機自動啟動
```

### 查看服務狀態

```shell
sudo systemctl status mysql.service
```

> 備註：此指令會顯示服務的執行狀態、PID、記憶體使用量、近期的日誌訊息以及是否開機自動啟動等詳細資訊。

### 查看所有服務狀態

```shell
systemctl list-units --type=service
```

### 開啟或關閉圖形介面

以純文字開機:

```shell
sudo systemctl set-default multi-user.target
```

以圖形介面開機:

```shell
sudo systemctl set-default graphical.target
```

解決菱形亂碼問題:

```shell
export LC_ALL="en_US.UTF-8"
export LANGUAGE="en_US.UTF-8"
export LANG="en_US.UTF-8"
```

> 備註：此設定為暫時性的，僅在當前終端機會話中生效。若要永久設定，需寫入使用者的 shell 設定檔（如 `~/.bashrc` 或 `~/.profile`）。

-----

## 開機目標（Target）

Target 是 systemd 中一種特殊的「單位」（unit），用來定義系統在某種狀態下應該啟動哪些服務。一個 Target 單位本身不執行任何動作，而是作為一個邏輯分組，透過 `Wants=` 或 `Requires=` 等指令來拉起其所依賴的服務。

### 常見 target：

| Target 名稱 | 說明 |
|---|---|
| `graphical.target` | 包含圖形化介面 (GUI) 的完整系統，是 `multi-user.target` 的超集。 |
| `multi-user.target` | 純文字模式，提供完整的網路服務和多使用者登入功能。 |
| `rescue.target` | 單人維護模式，只啟動最基礎的服務，用於系統修復。 |
| `emergency.target` | 更低階的維護模式，只掛載 root 檔案系統，不啟動任何服務，通常用於無法進入 `rescue` 模式的極端情況。 |
| `reboot.target` | 系統重啟目標。 |
| `poweroff.target` | 系統關機目標。 |

### 立即切換 target：

```shell
sudo systemctl isolate multi-user.target
```

> 備註：`isolate` 指令會關閉所有非目標所需的服務，因此可能中斷正在運作的服務。

### 設定預設開機目標：

```shell
sudo systemctl set-default graphical.target
sudo systemctl set-default multi-user.target
```

-----

## 進階用法

### 查看開機時間與效能分析

```shell
systemd-analyze
systemd-analyze blame
```

  - `systemd-analyze`：顯示系統開機時間，並提供核心和使用者空間啟動的詳細時間。
  - `systemd-analyze blame`：列出所有服務的啟動時間排行，能迅速找出拖慢開機速度的「元兇」。

### 檢查單位（Unit）的依賴關係

```shell
systemctl list-dependencies apache2.service
```

> 備註：這對於了解服務的啟動順序與依賴關係非常重要。`systemd` 會自動根據這些關係來管理服務的啟動與停止。

### 建立與編輯自訂服務（User-defined Service）

除了管理系統內建服務，`systemctl` 也允許使用者建立和管理自己的服務。

建立一個簡單的 systemd 服務單元檔案：

```shell
sudo nano /etc/systemd/system/myapp.service
```

範例內容：

```ini
[Unit]
Description=My Custom App
After=network.target # 定義啟動順序：在 network.target 之後啟動

[Service]
ExecStart=/usr/bin/python3 /home/user/myapp.py # 服務啟動時執行的指令
Restart=always # 當服務終止時，總是重新啟動
User=user # 以指定的用戶執行此服務

[Install]
WantedBy=multi-user.target # 定義服務屬於哪個目標，以便於 systemctl enable 時建立 symlink
```

> 備註：`.service` 檔案通常分為三個區塊：
>
>   - `[Unit]`：定義單元的通用屬性，如描述 (`Description`)、依賴關係 (`Requires`, `Wants`) 和啟動順序 (`After`, `Before`)。
>   - `[Service]`：針對服務類型單位的配置，如執行指令 (`ExecStart`)、重新啟動策略 (`Restart`) 和執行使用者 (`User`) 等。
>   - `[Install]`：定義單元如何被「安裝」到系統中，主要用於 `enable` 和 `disable` 指令。

啟用並啟動該服務：

```shell
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service
```

> 備註：`systemctl daemon-reload` 在修改或新增單位檔案後，必須執行此指令讓 `systemd` 重新載入配置，否則新的單位將無法被辨識。

-----

## 常見錯誤與除錯技巧

### 查看日誌訊息

```shell
journalctl -u nginx.service          # 查看特定服務的所有日誌
journalctl -f -u nginx.service       # 即時追蹤特定服務的日誌
journalctl -xe                       # 查看系統錯誤日誌，並提供詳細解釋
```

> 備註：`journalctl` 是 `systemd` 的日誌管理工具，是除錯服務的首選。

### 重新載入 systemd 配置

```shell
sudo systemctl daemon-reload
```

> 備註：當你手動修改了任何 `systemd` 單位檔案（`.service`, `.target` 等）之後，**務必**執行此指令，讓 `systemd` 讀取新的配置。

### 檢查服務是否啟用

```shell
systemctl is-enabled myapp.service
```

> 備註：此指令會輸出 `enabled`、`disabled`、`static` 或 `masked` 等狀態，能快速判斷服務是否設定為開機自動啟動。其中 `masked` 表示該服務被徹底禁用，即使執行 `enable` 也無法啟用。

-----

`systemctl` 是管理現代 Linux 系統中最重要的指令之一，不僅可控制服務啟動與停止，也可管理整個系統的運作模式與開機流程。透過熟練掌握 `systemctl`，你將能更有效率地管理與診斷你的 Linux 系統。

---
