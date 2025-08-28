# sudo與su指令
#資訊科技  #終端指令 #linux #linux/unix指令

`sudo` 與 `su` 是linux中以`root`權限執行指令的方式。

## sudo

```bash
sudo -i

sudo <command>
```

* **全局提升權限**
  * 輸入 `sudo -i` 之後，系統會要求輸入**當前使用者的密碼**（非root密碼），核對無誤後即會以 root 權限開啟一個新的登入型 shell（類似於執行 `login shell`），這樣的 shell 將擁有完整的`root`權限，可連續執行多個需要`root` 權限的指令，不需每次都加上 `sudo`。此方式通常用於需要多次以 root 身份操作的情境。
  * 可搭配 `exit` 指令離開 root 環境，回到一般使用者的 shell。

* **單指令提升權限**
  * 在任一指令前加上 `sudo`，即可讓該單一指令以 root 權限執行。例如：

    ```bash
    sudo apt update  
    ```
  * 此方式常見於日常系統管理，例如安裝/更新套件、修改系統設定等任務，具有**最小權限原則**的優點，能降低安全風險。
  * `sudo` 執行時會記錄至 `/var/log/auth.log`（Ubuntu系），便於系統稽核與追蹤。

* **sudo 的相關功能與進階用法**
  * `sudo -s`：啟動一個以 root 權限執行的 shell（非 login shell），與 `sudo -i` 類似，但不會載入 root 的 shell 設定檔（如 `.profile`）。
  * `sudo -u <使用者> <command>`：以指定使用者的身份執行指令，預設是 root。例如：

    ```bash
    sudo -u www-data whoami  
    ```
  * 編輯 sudo 權限表：使用 `sudo visudo` 命令來安全編輯 `/etc/sudoers` 檔案。這可設置哪些使用者或群組能執行哪些指令，是否需要密碼等。
  * 加入 `sudo` 群組：某些發行版會透過將使用者加入 `sudo` 群組（如 Ubuntu），來授予其使用 `sudo` 權限。可使用下列命令新增使用者到群組：

    ```bash
    usermod -aG sudo username  
    ```
  * `NOPASSWD` 標誌：可在 sudoers 檔案中設定某些指令無需密碼即可執行，但需謹慎使用，例如：

    ```
    username ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
    ```

---

## su

```bash
su
```

* `su`（substitute user 或 switch user）指令是 Linux/Unix 系統中最早期用於切換使用者帳號的方式，預設切換為 root 帳號，並啟動一個新的 shell。

* **操作方式**：輸入 `su` 後系統會要求輸入 **root 密碼**，而非當前使用者的密碼。登入成功後，你將完全進入 root 使用者身份，可執行任何系統操作。

* **首次設定密碼（以 Debian 為例）**：Debian 系統預設 root 帳戶為鎖定狀態，若欲使用 `su`，需先設定 root 密碼：

  ```bash
  sudo passwd root  
  ```

  建議不要使用與普通使用者相同的密碼，以強化系統安全。

* **離開 root 身份**：執行 `exit` 或按下 `Ctrl+D` 可離開 root shell，回到原本的使用者身份。

* **su 的進階用法**：

  * `su -`：等同於 `login shell`，會模擬完全登入 root 帳戶，載入 `/root` 的環境變數與設定檔（如 `.bash_profile`）。
  * `su <username>`：切換至其他指定帳號，例如：

    ```bash
    su postgres  
    ```
  * 可搭配 `-c` 選項執行單一指令後立即退出，例如：

    ```bash
    su -c "apt update"  
    ```

* **比較 su 與 sudo 的差異**：

  | 項目   | su                    | sudo               |
  | ---- | --------------------- | ------------------ |
  | 身份驗證 | root 密碼               | 使用者自己密碼            |
  | 權限控制 | 無細部限制，一旦登入為 root 即無限制 | 可細分授權特定指令          |
  | 安全性  | 易被濫用，難以追蹤操作紀錄         | 較安全，具操作紀錄          |
  | 使用場景 | 傳統方式或 root 已啟用的系統     | 現代系統推薦方式，root 預設停用 |

---

如需安全地管理系統，建議優先使用 `sudo` 而非啟用 root 帳戶，特別是在多用戶或公共伺服器環境中。