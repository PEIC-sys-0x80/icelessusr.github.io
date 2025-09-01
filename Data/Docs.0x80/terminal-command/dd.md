# dd指令  
#資訊科技  #終端指令  #linux/unix指令

`dd` 是一個強大的類 Unix 系統中使用的低階資料複製工具。其名稱源自 IBM JCL 語言中的 "data definition"。該指令能夠直接在位元層次操作檔案或裝置，非常適合用於製作磁碟映像、備份磁區、轉換檔案格式或直接與硬體裝置互動（如 USB、磁碟、ISO 映像等）。

```
dd if=<source_path_or_file> of=<target_file>
```

## 功能描述  
- **複製檔案或磁碟裝置內容**
- **轉換檔案格式**（如大小寫轉換、編碼轉換等）
- **製作磁碟映像檔（image file）**
- **恢復映像至裝置**
- **執行資料抹除（如以0或亂數覆寫磁碟）**
- **測試儲存裝置的讀寫速度**

## 基本參數說明  

| 參數 | 說明 |
|------|------|
| `if=` | 指定來源（input file），可以是檔案或裝置（如 `/dev/sda`） |
| `of=` | 指定目的地（output file），可以是檔案或裝置 |
| `bs=` | block size，設定每次讀寫的區塊大小，預設為 512 bytes（例如 `bs=1M` 表示每次1MB） |
| `count=` | 限制讀取區塊數目，例如 `count=100` 表示只讀取100個區塊 |
| `skip=` | 略過來源檔案的前N個區塊 |
| `seek=` | 略過輸出檔案的前N個區塊，從指定位置開始寫入 |
| `conv=` | 執行轉換操作，如 `notrunc`、`noerror`、`sync`、`ucase` 等 |

## 使用範例  

### 1. 複製整顆硬碟
```bash
dd if=/dev/sda of=/dev/sdb bs=64K conv=noerror,sync
```
將 `/dev/sda` 磁碟的資料完整複製到 `/dev/sdb`。`noerror` 表示忽略錯誤繼續複製，`sync` 表示用0填補錯誤資料區塊。

---

### 2. 建立磁碟映像檔
```bash
dd if=/dev/sda of=backup.img bs=4M
```
這會將整顆硬碟 `/dev/sda` 備份成映像檔 `backup.img`。

---

### 3. 將映像檔還原至磁碟
```bash
dd if=backup.img of=/dev/sda bs=4M
```
將映像檔還原到原本的硬碟裝置上。

---

### 4. 擷取檔案的前512個位元組
```bash
dd if=file.iso of=header.bin bs=512 count=1
```
這會將 ISO 檔案的前512位元組（例如 MBR 區段）複製出來。

---

### 5. 將整顆磁碟抹除為零（安全刪除）
```bash
dd if=/dev/zero of=/dev/sdX bs=1M
```
將磁碟 `/dev/sdX` 所有資料以零值覆蓋，相當於低階格式化。

---

### 6. 測試硬碟寫入速度
```bash
dd if=/dev/zero of=testfile bs=1G count=1 oflag=dsync
```
建立一個1GB大小的測試檔案，同時測試寫入速度。

> **注意事項**  
>- `dd` 無任何安全警告或確認提示，一個錯誤的目標裝置可能會瞬間覆寫整個磁碟！  
>- 操作前務必確認 `if=` 與 `of=` 指定正確，特別是在處理系統裝置時。
>- 若不熟悉硬碟代號（如 `/dev/sda`、`/dev/sdb`），可搭配 `lsblk` 或 `fdisk -l` 指令查詢。

## 小技巧  
- 加入 `status=progress` 可以即時顯示處理進度：
```bash
dd if=... of=... bs=... status=progress
```
- 若需更快速地複製，可適度提高 `bs=` 數值（例如 `bs=1M` 或更高）。

