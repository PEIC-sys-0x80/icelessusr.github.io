# Linux 檢視硬體資訊

#資訊科技 #終端指令 #linux/unix指令 #linux 

## `lscpu`:

檢視 CPU 資訊。

```bash
lscpu [-a|-b|-c] [-x] [-s directory] [-e[=list]|-p[=list]]
```

`lscpu` 指令用來顯示 CPU 架構的詳細資訊，包含 CPU 型號、核心數量、線程數量、位元架構（32 或 64 位元）、快取大小等。它的資訊來源主要是 `/proc/cpuinfo` 文件，並進行格式化輸出。這指令特別適用於快速了解系統的處理器配置，包括其是否支援虛擬化技術（如 VT-x 或 AMD-V）。

常見參數：

  * `--all`：顯示所有可用的 CPU 資訊，這在有多個 CPU 插槽的系統上特別有用。
  * `--extended`：以表格格式輸出更詳細的欄位，如每個處理器的 **NUMA** 節點、線程、核心配置等。這對於需要了解 CPU 在多插槽或 NUMA 架構中如何分佈的系統管理員非常實用。
  * `--parse`：以鍵值對（key=value）的方式輸出，適合腳本解析。

此指令不需要使用 root 權限，輸出清晰簡潔，適合快速查看 CPU 結構與效能配置。此外，`lscpu` 的輸出內容不僅限於實體 CPU，也會顯示虛擬化環境下的虛擬 CPU 資訊，這使得它在虛擬機中同樣是個好用的工具。

-----

## `lshw`

檢視所有硬體基本資訊。

```bash
sudo lshw
```

`lshw`（list hardware）是功能非常完整的系統硬體檢視工具，它會掃描並列出所有已知的硬體設備，包括 CPU、RAM、主機板、儲存裝置、網路介面卡、顯示卡等硬體詳細資訊。它會從多個來源收集資訊，例如 `/proc`、`sysfs` 以及 **DMI**（桌面管理介面）。

因為 `lshw` 能夠存取到核心層級的硬體資訊，因此通常需要 **root 權限**才能執行完整掃描。

常見用法與參數：

  * `-short`：用表格方式快速列出硬體概況，這是最常用的參數之一，適合快速瀏覽。
  * `-class <CLASS>`：根據硬體類別來過濾輸出。例如 `-class cpu` 只顯示 CPU 相關資訊，`-class network` 顯示網路卡資訊，`-class disk` 顯示磁碟設備資訊。
  * `-html` 或 `-xml`：以 HTML 或 XML 格式輸出，方便在網頁瀏覽器或腳本中進行分析和處理。

建議搭配 `grep` 使用以快速定位資訊，例如：

```bash
sudo lshw | grep -i memory
```

這會列出所有包含 "memory" 關鍵字的行，能快速幫助你找到記憶體模組的詳細資訊。

-----

## `lspci`

檢視 PCI 硬體資訊。

```bash
lspci
```

`lspci` 用於列出系統中所有透過 **PCI（Peripheral Component Interconnect）** 匯流排連接的設備，如顯示卡、聲卡、乙太網路卡、USB 控制器等。這些裝置的資訊儲存在 `/sys/bus/pci/devices` 目錄中。

常見參數：

  * `-v`：顯示較詳細資訊（verbose 模式），包括 IRQ、I/O 埠、記憶體位址等。
  * `-vv`：顯示更進階的詳細資訊（very verbose），會列出所有裝置的 PCI configuration space。
  * `-k`：顯示該硬體使用的核心驅動模組，這對於檢查驅動程式是否正確載入非常有用。
  * `-nn`：顯示每個裝置的廠商與裝置 ID，方便使用者透過這些 ID 在線上資料庫（如 PCI ID Repository）查找相關驅動或資訊。
  * `-t`：以樹狀圖方式顯示 PCI 裝置結構，這有助於理解裝置之間的層級關係。

### 查看顯示卡資訊

```bash
lspci | grep -i vga
```

這是一個非常實用的技巧，透過管道（pipe）和 `grep` 指令快速篩選出與顯示卡相關的資訊。

-----

## `lsusb`

檢視 USB 裝置

```bash
lsusb [option]
```

`lsusb` 指令用於列出所有連接到系統的 USB 裝置，它從 `/sys/bus/usb/devices` 取得裝置資訊。這個指令對於確認外部裝置（如 USB 隨身碟、鍵盤、滑鼠、印表機等）是否被系統正確識別非常有用。

常見參數：

  * `-v`：顯示更詳細的裝置描述符、配置和端點資訊。
  * `-t`：以樹狀圖方式顯示 USB 裝置的層級結構，例如哪個裝置連接在哪個 USB 集線器（hub）上。
  * `-s`：指定要顯示的匯流排（bus）和裝置（device），例如 `lsusb -s 001:002`。

-----

## `lsblk`

列出磁碟與分割區資訊

```bash
lsblk [option]
```

`lsblk`（list block devices）用於以樹狀圖方式列出所有區塊裝置（block devices），包括硬碟、固態硬碟、USB 隨身碟，以及其下的分割區。它的資訊來源是 `sysfs` 文件系統。這個指令清晰地呈現了裝置、分割區、掛載點（mountpoint）之間的關係，非常直觀。

常見參數：

  * `-f`：顯示檔案系統資訊，如檔案系統類型（FAT32, ext4, XFS）、UUID 和標籤（label）。
  * `-m`：顯示裝置的權限和使用者/群組資訊。
  * `-p`：顯示裝置的完整路徑，例如 `/dev/sda`。
  * `-a`：顯示所有裝置，包括空的或沒有分割區的裝置。

**範例:**

```bash
lsblk -f
```

這個指令會列出所有區塊裝置及其檔案系統資訊，這對於系統管理員來說是日常工作中不可或缺的指令。

-----

## `dmidecode`

檢視 BIOS、主機板、記憶體模組等詳細硬體資訊（需 root）

```bash
sudo dmidecode [option]
```

`dmidecode` 是一個強大的工具，它會解析 **DMI（Desktop Management Interface）** 表格，這個表格包含了關於系統硬體詳細且底層的資訊。這些資訊通常由 BIOS 或 UEFI 提供。

由於 `dmidecode` 讀取的是系統底層資料，因此需要 **root 權限**才能執行。

常見用法與參數：

  * `-t <TYPE>`：指定要顯示的資訊類型，這是最常用的參數。常見的類型包括：
      * `bios`：顯示 BIOS 版本、製造商、日期等。
      * `system`：顯示主機的製造商、產品名稱、序號等。
      * `baseboard`：顯示主機板製造商、型號、版本。
      * `processor`：顯示每個 CPU 的詳細資訊，與 `lscpu` 相比更為底層。
      * `memory`：顯示每個記憶體模組的詳細資訊，包括類型、速度、插槽位置和製造商。
  * `--string <KEY>`：根據鍵值來過濾輸出。例如 `dmidecode --string 'System Information'`。

**範例:**

想要查看記憶體插槽的詳細資訊，可以使用以下指令：

```bash
sudo dmidecode -t memory
```

這會列出每個記憶體插槽的狀態、大小、速度、製造商和零件編號。