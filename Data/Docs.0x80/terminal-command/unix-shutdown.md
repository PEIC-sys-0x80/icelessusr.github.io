# 類unix與linux的關機指令

#資訊科技  #終端指令 #linux #linux/unix指令 

shutdown 指令是常用的關機指令，不過在類unix和winNT核心中，此指令的格式仍略有不同。

## shutdown指令

### 類unix中的shutdown指令

```bash
shutdown [OPTION] TIME [MESSAGE]
```

#### OPTION參數
在選項（`OPTION`）的部分，可用的選項有：

-   `-r`：讓系統重新開機（reboot）。
-   `-h`：讓系統停止運作（halt）或關閉電源（power off），至於會選擇哪一種則取決於系統（有時候可以在 BIOS 中更改）。
-   `-H`：讓系統停止運作。
-   `-P`：讓系統關閉電源。
-   `-c`：取消之前所下達的關機指令。
-   `-k`：模擬關機，只有對使用者發出警告，並禁止新使用者登入，但不關機。

這裡的**停止運作（halt）** 與 **關閉電源（power off）** 是有差異的，停止運作是指停止電腦上所有 CPU 的運作，這時候螢幕上應該會出現類似「System halted」的字眼，然後就停住了（**電源還是開著的**），而關閉電源（power off）就是會送出 ACPI 指令通知 PSU 關閉電腦的電源。

#### TIME參數
TIME是指要關機的時間，格式可分為好幾種:

`now`:目前時間，有立即關機的意思
`+m`指定增加多少時間後關機，`+30`就是30分鐘後關機。
`hh:mm`:24小時制格式，指定固定時間點關機。

當 `TIME` 所指定的時間到了之後，`shutdown` 指令就會送出一個通知給 `init` 這個 daemon，讓系統進入適當的 runlevel，準備關機。

#### 常用的 `shutdown` 指令範例
關機的動作只有 `root` 管理者有權限可以執行，所以在使用時記得在 `shutdown` 指令前加上 `sudo -s` 或是使用 `su -` 變更為 `root`。


#### 立即關機

```bash
shutdown -h now
```

```bash
shutdown -h +0
```

```bash
shutdown -h 0
```


#### 指定時間點關機
設定當天晚上9點關機

```bash
shutdown -h 21:30
```


如果是使用 SSH 這類的遠端登入，要設定讓機器在某個時間關機，可以讓 `shutdown` 放在背景執行：

```bash
shutdown -h 21:30 &
```



#### 關機並送出警告訊息給所有使用者
```bash
shutdown -h +10 "Development server is going down for maintenance. Please save your work ASAP."
```
這行指令設定系統將在10分鐘後關機。

此時系統會送出關機訊息提示使用者:
```
Broadcast message from root@wks01 (pts/0) (Sat Apr 21 02:26:30 2012):
Development server is going down for maintenance. Please save your work ASAP.
The system is going DOWN for system halt in 10 minutes!
```

並且在時間到之後執行官機。


#### 取消關機
要停止先前設置好的自動關機，可以使用以下指令:
```bash
shutdown -c
```

#### 模擬關機
有時候我們沒有要真正關機，只是想嚇一嚇線上的使用者(?)，或是在實際執行關機前，測試一下指令，可以搭配 `-k` 參數：
```bash
shutdown -k 18:30
```

此時系統只會出現關機訊息，但不會真的關機:
```
Broadcast message from seal@steteo1
(/dev/pts/0) at 16:50 ...
The system is going down for maintenance in 100 minutes!
```


## `halt` 與 `poweroff` 指令
`halt` 其實跟 `shutdown` 沒多大分別，只不過 `shutdown` 在關機時會把系統的服務都關閉之後，才關閉電腦，而 `halt` 指令則允許不管系統的狀態為何，直接把CPU停掉：
```bash
halt -f
````

`poweroff` 指令也是類似的狀況，它也允許你不管系統的狀況，直接把電腦的電源切斷：

```bash
poweroff -f
```

其中的`-f`代表強制。


雖然系統有提供這樣的功能，但是其實這些功能在一般的狀況根本用不到，除非是系統真的當機，不然使用 `shutdown` 來關機會比較安全。

當然，也可以使用`poweroff`並且不加上強制參數，使其能正常關機。