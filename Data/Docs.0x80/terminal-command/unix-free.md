# free指令
#資訊科技 #終端指令 #網路引用資料 #linux/unix指令 #linux
[參考資料](https://www.runoob.com/linux/linux-comm-free.html)

linux的free指令用於顯示記憶體狀態。
free指令會顯示記憶體的使用情況，包刮實體記憶體、虛擬的交換文件記憶體（Swap）、共享的記憶體區段（Shared Memory）、系統核心使用的緩衝區（Buffers）與快取（Cached）等。這個指令對於監控系統效能與除錯記憶體問題非常實用。

## 功能描述與用途

`free` 指令主要用途為監控記憶體的使用情況，協助使用者判斷系統目前的資源分配狀況。尤其在系統負載過高、執行記憶體密集型應用、或進行效能優化時，它能提供即時的資訊支援。

顯示的資料分為以下幾類：

* **Mem（實體記憶體）**：包括總容量（total）、已使用（used）、可用（free）、共享記憶體（shared）、緩衝區（buffers）與快取（cached）。
* **-/+ buffers/cache**：該行顯示「已使用」與「可用」的記憶體排除掉 buffers 與 cached 的影響，更能真實反映應用程式實際使用的記憶體。
* **Swap（交換區）**：當實體記憶體不足時，系統會將部分資料轉存到硬碟上的交換區。此區域讀寫速度遠低於實體記憶體，過度依賴 Swap 可能會導致系統效能降低。
* **Total（總合列）**：在加上 `-t` 參數時會出現，顯示所有記憶體（實體記憶體與 Swap）的總使用情況。

## 語法

```
free [-bkmotV] [-s <間隔秒數>]
```

### 參數

* `-b`: 以 Byte 為單位顯示記憶體使用情況。
* `-k`: 以 KB 為單位顯示記憶體使用情況（預設）。
* `-m`: 以 MB 為單位顯示記憶體使用狀況。
* `-g`: 以 GB 為單位顯示記憶體狀況。
* `-h`: 以「人類可讀的格式」（Human-readable）顯示記憶體使用情況，系統會自動選擇最合適的單位（例如 KB、MB、GB）顯示。

 單位如下：

```
B = bytes
K = kilos
M = megas
G = gigas
T = teras
```

* `-o`: 不顯示 buffers/cache 行，精簡輸出。
* `-s <間隔秒數>`: 每隔指定秒數重新執行一次指令，持續觀察記憶體使用變化，常用於監控腳本或系統觀察中。
* `-t`: 顯示記憶體與 Swap 的總合資訊。
* `-V`: 顯示 free 指令版本。

## 實例

### 顯示記憶體使用情況

```
# free
             total       used       free     shared    buffers     cached
Mem:        254772     184568      70204          0       5692      89892
-/+ buffers/cache:      88984     165788
Swap:       524280      65116     459164
```

### 以總和的形式顯示記憶體使用資訊

```
# free -t
             total       used       free     shared    buffers     cached
Mem:        254772     184868      69904          0       5936      89908
-/+ buffers/cache:      89024     165748
Swap:       524280      65116     459164
Total:      779052     249984     529068
```

### 使用「人類可讀單位」顯示資訊

```
# free -h
              total        used        free      shared  buff/cache   available
Mem:           249M        180M         20M        1.0M         48M         49M
Swap:          512M         63M        449M
```

### 每10秒週期性查詢記憶體使用資訊

```
# free -s 10
              total        used        free      shared  buff/cache   available
Mem:           249M        187M         23M        1.1M         39M         33M
Swap:          512M         64M        448M

...每隔10秒更新一次輸出
```

## 進階用法

### 配合 `watch` 指令持續監控

可以使用 `watch` 搭配 `free -h` 持續觀察記憶體狀態，格式更為清晰：

```
watch -n 2 free -h
```

這會每兩秒執行一次 `free -h` 指令，適合用於伺服器效能即時監控。

### 配合 `grep` 或 `awk` 提取指定欄位

若只想取得可用記憶體數值（例如在腳本中使用），可以結合 `awk`：

```
free -m | awk '/^Mem:/ { print "Used: " $3 " MB, Free: " $4 " MB" }'
```

### 檢查記憶體壓力是否過大

觀察 `-/+ buffers/cache` 行的 used 欄，可以了解應用程式實際佔用的記憶體量，比直接看 `used` 更準。

