# Linux sync指令
#資訊科技 #終端指令 #網路引用資料 #linux/unix指令 #linux 

[參考來源](https://blog.csdn.net/u012964600/article/details/135695631)

`sync`是一個在linux和Unix系統中用來將緩存中的檔案系統緩存資料寫入到硬碟中的指令。 當我們在向硬碟寫入資料的時候，系統並不會立刻將資料寫入到硬碟，而是暫存在緩存區，等到適合的時機，作業系統自己會將相應的資料同步到硬碟中。 sync指令就是用戶主動命令作業系統將所有未寫入的系統緩存區寫入硬碟，包刮super區塊、索引節點、資料塊和位址表等等。
>補充: `sync`指令會同步當前所有掛載的文件系統。

## 適用的Linux版本
`sync`指令在大部分Linux系統都可以用，包刮Debian、Ubuntu、Alpine、Arch Linux、Kali Linux、RedHat/CentOS、Fedora、Raspbian等等。 預設情況下，各個Linux版本都會內建`sync`指令，因此無需通過特殊方式進行安裝。


## 基本語法
`sync`指令的基本語法非常簡單，如下:
```bash
sync [option]
```

## 常用選項或參數說明
`sync`命令的向相對較少，下面是詳細的參數列表

| 選項       | 說明                         |
| ---------- | ---------------------------- |
| -d, --data | 只同步文件數據，不同步元數據 |
| -help      | 顯示幫助信息                 |
| -version   | 顯示版本資訊                 |


## 常見應用場景
###  sync基本使用
`sync`指令可以在沒有任何參數的情況下使用。 這將使操作系統把所有資料從記憶體緩存區同步到硬碟。
```bash
sync
```


### 只同步文件資料，不同步metadata
這個選項會讓`sync`只同步文件的資料，而不同步metadata。
```bash
sync -d
```

### 在對文件進行修改後使用`sync`指令
在修改了一些關鍵的文件之後，我們可以使用`Sync`指令來確保修改被同步到硬碟。 在這裡，我首先修改了一個文件，然後運行`sync`指令。
```bash
echo "yeeeee" > /path/to/important-file
sync
```
修改完成之後，立即使用`sync`指令，可以確保重要資料立刻寫入到硬碟中，減少資料丟失的風險。

### sync命令與重新啟動
在系統重啟之前，可以使用`sync`指令來確保所有資料都已經同步到硬碟中。 這樣可以在系統重啟過程中防止資料丟失。
```bash
sync
sudo reboot
```

### 在執行系統升級之前使用`sync`指令
在執行系統升級前使用`sync`指令，可以確保所有資料都已經同步到硬碟，這樣在升級過程中，若發生任何錯誤，已修改的資料都不會遺失。
```bash
sync
sudo apt-get update && sudo apt-get upgrade 
```

### 使用循環寫入資料，並使用`sync`指令同步資料
在很多情況下，我們需要不斷的向一個文件寫入資料。 在這種情況下，我們可以使用`sync`指令來確保這些新增的資料被同步到硬碟。
```bash
for i in {1..1000}; do echo "data $i" >> data.txt; done
sync
```
完成循環寫入之後，執行sync指令，可以確保所有新寫入的資料得到立即的保存。

### 在移除USB設備之前使用`sync`指令
當我們向USB設備寫入資料，並且準備斷開他，那最好在這之前先執行`sync`指令。
```bash
echo "yeeeeee" > /media/usb/important-file
sync
sudo umount /media/usb
```

### 使用`sync`指令防止再進行文件系統操作時的資料丟失
在進行重要文件系統操作，如調整分區大小或格式化分區之前，運行`sync`指令可以保護資料。
```bash
sync
sudo fdisk /dev/sda
```

### 編寫腳本時使用`sync`指令確保資料完整性
在編寫和重要檔案操作有關的腳本時，你可以在其中加入`sync`指令，來確保任何腳本在執行過程中寫入的資料被同步到硬碟，增加穩定性。
```bash
#!/bin/bash
echo "Starting a critical operation..."
echo "yeeeeee data" > /path/to/critical-file
sync
echo "Critical operation finished."

```

### 使用`sync`確保資料庫同步
如果你正在維護一個資料庫，並且對資料庫進行更新操作，那麼在操作結束之後執行`sync`指令可以確保這些更新被寫入硬碟。
```bash
mysql -u root -p yee_database < updates.sql
sync
```

這種使用sync指令保證資料更新完整性的方式，可以有效的防止意外事件發生時的資料遺失。

### 在備份資料時使用`sync`指令
這是一個比較常見的場景，我們經常需要備份重要的文件，已防止這些文件遺失。 在備份過程完成後，我們可以使用`Sync`指令來確保所有的副本都被同步到硬碟。

```bash
cp /path/to/original /path/to/backup
sync
```

### 修改配置文件並使用`sync`指令
在Linux系統中，我們經常需要修改配置文件。 一旦配置文件被修改，我們可以使用`sync`指令來確保這些更改被同步到硬碟，並且立即生效。
```bash
nano /etc/sysctl.conf
sync
```

### 拷貝大量文件時使用`sync`指令
當我們需要拷貝大量文件時，操作系統會把這些操作先儲存在緩存區中，當緩存區滿的時候，再將這些操作寫入到硬碟中。 使用`sync`指令可以讓我們控制這個過程，避免在系統突然掛起時丟出資料。
```bash
cp -r /path/to/source /path/to/destination
sync
```

這種方式尤其適合處理大文件因為大文件可能需要較長的時間來完成拷貝，運行`sync`命令可以確保這些文件被正確的寫入到硬碟中。

### 下載大文件之後使用`sync`指令
如果你從網路上下載了一個大文件，因為大文件可能需要更長的時間來完成拷貝，運行`sync`指令來手動啟動這個過程。

```bash
wget http://yee.com/e.zip
sync
```

### 在解壓包大的壓縮包之後使用`sync`指令
當我們在硬碟中解包一個大的壓縮包之後，`sync`指令可以幫助我們確保所有解壓縮出來的文件被正確的寫入到硬碟中。
```bash
tar xzvf big-archive.tar.gz
sync
```

---
綜合以上，`sync`是一個非常實用的指令，只要涉及到資料寫入硬碟的操作，都可以考慮使用它。

>  **注意事項**
> - 在使用`sync`指令後，他會立即返回訊息，而不等實際資料寫入到硬碟上，因此可能會出現`sync`提示已同步，但資料還沒完成同步的情況。 因此若這時候斷電還是可能會造成資料遺失。
> - 如果使用`sync`指令時出現`bash: sync: command not found`表示系統中未安裝`sync`，你可以先安裝它。 不過通常現在的Linux都會預裝這個指令。