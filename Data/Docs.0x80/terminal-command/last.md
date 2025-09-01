# last指令-查詢開機和重啟紀錄

#資訊科技  #終端指令  #linux/unix指令 #linux

`last` 是 Linux/Unix 系統中用於查詢使用者登入、登出、系統開機（`boot`）、關機（`shutdown`）、重新啟動（`reboot`）等紀錄的終端指令。它主要讀取 `/var/log/wtmp` 檔案來顯示歷史活動紀錄，並依照時間倒序排列，最近的紀錄排在最上方。

此指令廣泛用於系統維護、安全稽核與故障追蹤，其優點是使用簡單、輸出清晰，且支援多樣化的過濾條件與自定義格式。

如果要查詢機器的關機紀錄，可以使用 `last` 指令：

```linux-terminal
last -x shutdown
```

此時就會輸出關機紀錄：

```
shutdown system down  3.8.0-26-generic Mon Oct  7 19:03 - 19:31  (00:27)
shutdown system down  3.8.0-26-generic Mon Oct  7 16:07 - 19:00  (02:53)
shutdown system down  3.8.0-26-generic Mon Oct  7 11:59 - 14:53  (02:54)
```

若要查詢重新開機的紀錄，方法也差不多：

```linux-terminal
last -x reboot
```

輸出重啟紀錄：

```
reboot   system boot  3.8.0-26-generic Mon Oct  7 19:31 - 19:46  (00:15)    
reboot   system boot  3.8.0-26-generic Mon Oct  7 19:00 - 19:03  (00:02)    
reboot   system boot  3.8.0-26-generic Mon Oct  7 14:53 - 16:07  (01:13)
```

---

##  基本參數

顯示特定使用者的登入紀錄:
```bash
last [使用者名稱]
```

* `-x`：顯示系統層級的事件，包括 `shutdown` 和 `reboot`。
* `-n [數量]` 或 `-[數量]`：顯示指定筆數的紀錄，例如 `last -10`。
* `-f [檔案]`：指定自定義紀錄檔，如 `/var/log/wtmp.1`（輪替後檔案）。
* `-s [時間]`：從指定時間起顯示紀錄，例如 `-s -3days`。
* `-t [時間]`：到指定時間為止，例如 `-t 2025-05-01`。

---

## 進階用法

### 顯示登入紀錄的 IP / 主機名稱

當遠端使用者透過 SSH 等方式登入時，通常會顯示來源 IP 或主機名：

```
alice   pts/1        192.168.0.101     Mon Apr 15 09:42   still logged in
```

若未顯示來源資訊，請確認登入服務設定或使用 `journalctl`, `who`, `sshd` 日誌輔助查詢。

---

### 顯示登入總時長

每筆登出紀錄後會自動計算該次登入時長：

```
bob     tty1         Mon Apr 15 08:12 - 09:30  (01:18)
```

有助於分析工作時段與系統使用效率。

---

### 查詢登入到特定終端機的紀錄

```bash
last -t pts/1
```

`pts/x` 表示虛擬終端（如 SSH），`ttyx` 則為本機實體終端，方便追蹤特定終端的使用情況。

---

### 查詢 GUI 或本機登入

本機登入記錄常顯示為 `tty` 或 `:0`：

```
charlie tty2         :0               Tue May 20 09:00 - 11:15  (02:15)
```

表示使用者直接於系統登入畫面（如 GNOME、KDE）進入桌面環境。

---

### 結合其他工具進行日誌分析

#### 使用 `grep` 篩選登入關鍵字

```bash
last | grep 'bob'
last | grep '192.168.'
```

快速過濾特定使用者、來源 IP 或主機。

#### 與 `cut`、`awk`、`wc` 結合進行統計

```bash
last alice | wc -l           # alice 登入次數
last alice | awk '{print $4, $5, $6}'  # 列出登入日期時間
```

#### 計算登入總時長（搭配 `awk`）：

可自訂腳本計算所有登入時段總長，用於管理報表。

---

### 讀取自定的紀錄檔

```bash
last -f /var/log/wtmp.1
```

方便查詢歷史資料或輪替過的紀錄檔案。若定期備份 `/var/log/wtmp*`，可有效保留完整歷史。

---

### 查看登入失敗紀錄（搭配 `lastb`）

`lastb` 是 `last` 的姊妹工具，專門讀取 `/var/log/btmp`，顯示失敗登入嘗試紀錄。

```bash
sudo lastb
```

可協助辨識是否有人進行暴力破解（brute-force）或帳號濫用行為。

---

### 指令結合範例：列出過去 7 天的登入活動

```bash
last -s -7days
```

或使用時間區間：

```bash
last -s 2025-04-08 -t 2025-04-15
```

支援多種時間格式，包括 `YYYY-MM-DD`, `HH:MM`, `yesterday`, `today` 等。

---

## 系統管理實際應用場景

| 情境       | 搭配指令                | 用途說明          |
| -------- | ------------------- | ------------- |
| 使用者行為稽核  | `last [使用者]`        | 查看誰在什麼時間登入系統  |
| 異常重啟追蹤   | `last -x reboot`    | 是否有非預期重啟（如斷電） |
| 確認維護時間   | `last -x shutdown`  | 是否有依計畫關機維護    |
| 網路來源分析   | `last \| grep [IP]` | 過濾可疑或異常登入來源   |
| 登入失敗偵測   | `lastb`             | 偵測暴力破解或異常登入行為 |
| 記錄彙整報表   | `last -f`           | 分析不同時段登入行為    |
| 指定時間範圍查詢 | `last -s -7days`    | 只查詢過去一週紀錄     |

---

>**小提示與注意事項**
>
>* `/var/log/wtmp` 通常會定期被 logrotate 輪替，需注意歷史資料保存。
>* 長時間未登入的使用者，其紀錄可能已被覆蓋。
>* `last` 顯示的使用者名稱最長為 8 個字元，過長會被截斷。
>* 若系統沒有 `/var/log/wtmp` 或該檔案損毀，`last` 將無法正常顯示紀錄。
>* 可結合 `logrotate` 設定保存更多歷史檔案，如 `/var/log/wtmp.1`, `.2.gz` 等，以利追溯。