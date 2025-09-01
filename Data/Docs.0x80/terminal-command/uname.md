# uname指令

#資訊科技 #終端指令 #網路引用資料 #linux/unix指令 #linux

[資料來源](https://www.runoob.com/linux/linux-comm-uname.html)

`uname`（unix name）指令用於顯示作業系統資訊，例如核心名稱（kernel name）、主機名稱（nodename）、核心版本（release）、作業系統版本、處理器類型、硬體架構等資訊，是系統診斷與資訊查詢中不可或缺的基本指令之一。

`uname` 可以讓使用者快速獲得當前作業系統與硬體平台的基本資訊，有助於除錯、系統識別、自動化腳本中的條件判斷等情境。

## 語法

```
uname [選項]
```

或：

```
uname [-a] [-m] [-n] [-r] [-s] [-v] [-p] [--help] [--version]
```

### 參數說明

* `-a`, `--all`: 顯示所有可用資訊，包含核心名稱、主機名稱、核心版本、系統版本、處理器類型與硬體平台等。
* `-m`, `--machine`: 顯示硬體機器名稱，通常是處理器架構（如 `x86_64`、`armv7l`）。
* `-n`, `--nodename`: 顯示網路節點名稱，亦即主機名稱（hostname）。
* `-r`, `--release`: 顯示核心版本號，對於判斷所用的 Linux 核心版本非常有用。
* `-s`, `--sysname`: 顯示作業系統名稱（如 Linux、Darwin、FreeBSD）。
* `-v`: 顯示作業系統的版本資訊，通常包含建置時間與版本編號。
* `-p`: 顯示處理器類型，某些系統可能會顯示與 `-m` 相同結果（如 `x86_64`），但在某些系統中會更具體。
* `--help`: 顯示 `uname` 的使用說明。
* `--version`: 顯示 `uname` 程式本身的版本資訊。

> ⚠️ 注意：部分選項如 `-p`、`-i`、`-o` 在某些 Linux 發行版中可能無法正確顯示或未被支援，具體行為依系統實作而異。

## 實例

### 顯示完整系統資訊：

```
$ uname -a
Linux iZbp19byk2t6khuqj437q6Z 4.11.0-14-generic #20~16.04.1-Ubuntu SMP Wed Aug 9 09:06:22 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux
```

此輸出包含：
核心名稱、主機名稱、核心版本、版本編號與建置資訊、硬體架構、處理器與作業系統名稱等。

### 顯示硬體機器名稱（處理器架構）：

```
$ uname -m
x86_64
```

### 顯示主機名稱：

```
$ uname -n
runoob-linux
```

### 顯示核心版本：

```
$ uname -r
4.11.0-14-generic
```

### 顯示作業系統名稱：

```
$ uname -s
Linux
```

### 顯示系統版本與建置時間：

```
$ uname -v
#20~16.04.1-Ubuntu SMP Wed Aug 9 09:06:22 UTC 2017
```

## 進階用法與應用場景

### 結合其他指令判斷系統平台：

透過 `uname` 輸出的資訊，可以在 shell 腳本中用來判斷執行平台，例如：

```bash
if [[ "$(uname -s)" == "Linux" ]]; then
    echo "這是 Linux 系統"
elif [[ "$(uname -s)" == "Darwin" ]]; then
    echo "這是 macOS 系統"
fi
```

### 判斷架構進行條件安裝：

```bash
if [[ "$(uname -m)" == "x86_64" ]]; then
    echo "下載 x86_64 專用套件"
else
    echo "使用其他版本"
fi
```

---

>在 GNU/Linux 系統中，`uname` 是由 GNU coreutils 提供。而在其他 UNIX 系統如 BSD、macOS 中也有此指令，但部分選項可能不同。為了最大相容性，建議在撰寫跨平台腳本時使用常見選項如 `-s`, `-r`, `-m`。
>
>此外，若需更詳細的硬體資訊，可搭配其他指令如 `lscpu`, `hostnamectl`, `cat /proc/version` 等。