# du指令

#資訊科技 #終端指令 #網路引用資料 #linux/unix指令 #linux

[資料來源](https://www.runoob.com/linux/linux-comm-du.html)

`du` 指令（全拼：**disk usage**）是 Linux/Unix 系統中用於顯示檔案與目錄所佔用磁碟空間的常用工具。它會遞迴地掃描目錄，統計每個檔案及子目錄所佔用的磁碟空間，並以區塊為單位（預設為 KB）輸出結果。

這個指令在系統管理、磁碟清理與空間分析中相當實用，可協助用戶找出大型目錄或不再需要的佔空間檔案。

## 語法

```
du [-abcDhHklmsSx] [-L <符號連接>] [-X <文件>] [--block-size] [--exclude=<目錄或文件>] [--max-depth=<目錄層數>] [--help] [--version] [目錄或文件]
```

## 參數說明

* `-a`, `--all`：顯示所有檔案與目錄的磁碟使用量（包括檔案，非僅限目錄）。
* `-b`, `--bytes`：以位元組（bytes）為單位顯示大小，而非預設的區塊大小。
* `-c`, `--total`：在最後顯示所有指定檔案與目錄使用空間的總和。
* `-D`, `--dereference-args`：追蹤命令列參數中的符號連結，顯示其原始檔案的大小。
* `-h`, `--human-readable`：使用更可讀的單位（如 KB、MB、GB）顯示大小。
* `-H`, `--si`：類似 `-h`，但以 1000 為單位（而非 1024），符合 SI 單位標準。
* `-k`, `--kilobytes`：以 1024 bytes（即 1 KB）為單位顯示。
* `-l`, `--count-links`：將硬連結檔案重複計算（預設僅計一次）。
* `-L <符號連接>`, `--dereference <符號連接>`：顯示特定符號連結所指向之實體檔案大小。
* `-m`, `--megabytes`：以 1 MB 為單位顯示大小。
* `-s`, `--summarize`：只顯示總計，不顯示每一個子目錄或檔案的詳細資訊。
* `-S`, `--separate-dirs`：在計算目錄大小時，不將子目錄所佔空間納入父目錄。
* `-x`, `--one-file-system`：限制只顯示與起始目錄同一個檔案系統的檔案與目錄。
* `-X <文件>`, `--exclude-from=<文件>`：排除 `<文件>` 中列出的路徑。
* `--exclude=<目錄或文件>`：略過指定的目錄或檔案。
* `--max-depth=<層數>`：限制輸出目錄的層數深度。例如 `--max-depth=1` 表示只顯示當前目錄及其下一層目錄。
* `--block-size=<大小>`：指定區塊大小的單位，例如 `--block-size=1M` 表示以 MB 顯示。
* `--help`：顯示說明文件。
* `--version`：顯示版本資訊。

## 實例

### 1. 顯示目前目錄下的所有子目錄大小：

```bash
# du
608     ./test6
308     ./test4
4       ./scf/lib
4       ./scf/service/deploy/product
4       ./scf/service/deploy/info
12      ./scf/service/deploy
16      ./scf/service
4       ./scf/doc
4       ./scf/bin
32      ./scf
8       ./test3
1288    .
```

輸出中每一行為：佔用大小（KB）+ 路徑名稱。最後一行 `1288` 為目前目錄總佔用空間。

### 2. 顯示單一檔案的磁碟使用量：

```bash
# du log2012.log 
300     log2012.log
```

### 3. 以可讀性高的單位顯示檔案大小：

```bash
# du -h test
608K    test/test6
308K    test/test4
4.0K    test/scf/lib
4.0K    test/scf/service/deploy/product
4.0K    test/scf/service/deploy/info
12K     test/scf/service/deploy
16K     test/scf/service
4.0K    test/scf/doc
4.0K    test/scf/bin
32K     test/scf
8.0K    test/test3
1.3M    test
```

### 4. 顯示目錄層級限制的使用情形：

```bash
# du --max-depth=1 /var
20K     /var/backups
500K    /var/log
4.0K    /var/tmp
524K    /var
```

這會僅列出 `/var` 下第一層目錄的空間使用情形，並總結。

### 5. 排除特定目錄或檔案：

```bash
# du --exclude="*.log" -h
```

這將略過所有 `.log` 檔案，僅統計其他檔案或資料夾。

### 6. 結合 `sort` 使用，找出佔用空間最多的目錄：

```bash
# du -h /home/user | sort -hr | head -n 10
```

顯示 `/home/user` 中前 10 個最佔空間的檔案或目錄。

## 進階應用

* `du` 常與 `find`、`xargs` 結合使用，用來分析特定條件下的檔案空間，例如查找超過 100MB 的檔案：

  ```bash
  find . -type f -size +100M -print | xargs du -sh
  ```
* 結合 `watch` 實現即時監控空間佔用變化：

  ```bash
  watch -n 5 'du -sh /path/to/monitor'
  ```

> **注意事項**
>
> * `du` 顯示的是磁碟實際佔用空間，不一定等於檔案內容的位元組大小（例如因為檔案系統區塊大小或稀疏文件造成差異）。
> * 若目錄中包含符號連結或掛載點，預設不會追蹤，需搭配 `-L` 或 `-x`。