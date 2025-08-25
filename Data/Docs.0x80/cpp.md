# C++語言基本語法
#程式設計 #程式語言基礎結構 #Cpp語言 

C++ 是一種強型別、靜態編譯、支持多範式的程式語言。以下為 C++ 在不引入任何函式庫（包括標準函式庫）的情況下的所有通用語法與程式結構。

---

## 1. 基本結構

### 1.1 `main()` 函數
C++ 程式的進入點為 `main()` 函數。

```cpp
int main() {
    return 0;
}
```

- `int`：返回型別，表示返回一個整數。
- `return 0;`：回傳狀態碼，0 代表正常結束。

在某些特定環境下，`main()` 可能會替換為：

- **Linux 命令列程式**：
  ```cpp
  int main(int argc, char* argv[]) {
      return 0;
  }
  ```

- **微控制器（MCU）**（依架構不同有多種變體）：
  - **通用無作業系統 MCU**（如 AVR、STM32）：
    ```cpp
    int main() {
        while (1) {}
        return 0;
    }
    ```
  - **Arduino（基於 AVR 或 ARM）**：
    ```cpp
    void setup() {}
    void loop() {}
    ```

- **Windows Driver Kit（WDK）驅動程式**：
  ```cpp
  extern "C" NTSTATUS DriverEntry(void* driver, void* path) {
      return STATUS_SUCCESS;
  }
  ```

- **UEFI 應用程式**：
  ```cpp
  extern "C" EFI_STATUS efi_main(EFI_HANDLE image_handle, EFI_SYSTEM_TABLE* system_table) {
      return EFI_SUCCESS;
  }
  ```

## 2. 資料型別


- `char` :   字元
- `short` : 短整數
- `int`: 整數
- `long` : 長整數
- `long long` : 更長的整數
- `float`:單精度浮點數
- `double`: 雙精度浮點數
- `bool`:  布林值（true/false）

```cpp
char letter = 'A';
char symbol = '#';

short smallNumber = 12345;

int age = 30;
int temperature = -5;

long population = 1000000;

long long distanceToMoon = 384400000;

float price = 19.99f;
float pi = 3.14f;

double precisePi = 3.141592653589793;
double massOfEarth = 5.972e24;

bool isCodingFun = true;
bool isNight = false;

```


### 指標型別（儲存記憶體位址）：

#### 定義
在 C++ 中，**指標型別**（Pointer Type）是一種變數類型，用來儲存其他變數的記憶體位址。指標型別的變數可以指向任何類型的資料（例如 `int`、`float`、`char` 等）。指標型別本身並不儲存實際的資料，而是儲存資料所在記憶體位置的位址。

#### 語法
指標型別的語法結構如下：

```
<資料型別>* <指標變數名稱>;
```

其中：
- `<資料型別>`：指標所指向的變數型別。例如，`int`、`float`、`char` 等。
- `*`：星號符號，表示變數是指標型別，並指示該變數儲存的是記憶體位址，而非資料值。
- `<指標變數名稱>`：指標變數的名稱，這是用來引用儲存記憶體位址的變數。

#### 例子
1. **整數指標**：
   ```cpp
   int* ptr;
   ```
   此處，`ptr` 是一個指向 `int` 型別變數的指標。

2. **浮點數指標**：
   ```cpp
   float* ptr;
   ```
   此處，`ptr` 是一個指向 `float` 型別變數的指標。

3. **字符指標**：
   ```cpp
   char* ptr;
   ```
   此處，`ptr` 是一個指向 `char` 型別變數的指標。

#### 重要概念

1. **指標的資料型別**：
   指標型別的資料型別指定了指標所指向的變數型別。例如，`int* ptr;` 表示 `ptr` 是一個指向 `int` 型別的指標，這意味著 `ptr` 會儲存一個 `int` 型別變數的記憶體位址。

2. **`*` 的作用**：
   在指標型別中，`*` 符號的作用是告訴編譯器該變數是指標型別，而不是普通變數。這裡的 `*` 並不代表解參照操作，而是指示指標型別的定義。例如，`int*` 是指指向 `int` 型別的指標，而不是 `int` 本身。

3. **指標變數名稱**：
   指標變數名稱是你給指標所起的名稱，通常會遵循命名規則。指標變數用來存儲指向其他變數的記憶體位址。

#### 常見指標型別
- **整數指標 (`int*`)**：
  用來儲存 `int` 型別變數的記憶體位址。
  
- **浮點數指標 (`float*`)**：
  用來儲存 `float` 型別變數的記憶體位址。
  
- **字符指標 (`char*`)**：
  用來儲存 `char` 型別變數的記憶體位址。

- **其他型別的指標**：
  幾乎所有 C++ 基本資料型別和自訂型別（例如結構、類別等）都可以有相對應的指標型別。

#### `*` 在指標型別中的誤解
在 C++ 中，`*` 符號有兩個不同的用途：
1. **在指標型別中**：`*` 用來定義變數為指標型別，例如 `int*` 表示指向 `int` 型別的指標。
2. **解參照操作**：`*` 用來解參照指標變數，即取得指標所指向的記憶體位置的資料。

這兩種用途完全不同，且必須根據上下文來理解。

#### 初始化指標
指標在使用前應該初始化，以避免指向未知的記憶體位址。初始化的方式通常有兩種：
1. **指向某個變數的位址**：
   ```cpp
   int num = 10;
   int* ptr = &num;  // ptr 儲存 num 的記憶體位址
   ```

2. **指向空指標 (`nullptr`)**：
   ```cpp
   int* ptr = nullptr;  // ptr 不指向任何有效的記憶體位置
   ```

#### 指標型別與變數型別的區別
- 變數型別：描述變數所儲存的資料類型。
- 指標型別：描述指標變數所儲存的**記憶體位址**的類型，指標指向的資料類型。

例如，`int* ptr;` 不是定義 `ptr` 儲存一個 `int` 資料，而是儲存一個記憶體位址，這個位址指向一個 `int` 型別變數。

#### 小結
指標型別在 C++ 中非常重要，用來處理和操作記憶體位址。指標型別的語法結構簡單而強大，可以用來達到更靈活的記憶體管理和資料操作。

## 3. 運算子

- **算術運算**: `+`, `-` ,`*`,`/`,`%`  
  - `+`: 相加  
  - `-`: 相減  
  - `*`: 相乘  
  - `/`: 相除  
  - `%`: 取餘數  

- **邏輯運算**: `&&`,`||`, `!`  
  - `&&`: 邏輯 AND（當兩個運算元皆為 `true` 時結果為 `true`）  
  - `||`: 邏輯 OR（當任一運算元為 `true` 時結果為 `true`）  
  - `!`: 邏輯 NOT（將 `true` 轉為 `false`，反之亦然）  

- **位元運算**: `&`,`|` , `^`,`~`,`<<`,`>>`  
  - `&`: 位元 AND（對應位皆為 `1` 時結果為 `1`，否則為 `0`）  
  - `|`: 位元 OR（對應位任一為 `1` 時結果為 `1`）  
  - `^`: 位元 XOR（對應位不同時結果為 `1`，相同時為 `0`）  
  - `~`: 位元 NOT（將所有位元取反）  
  - `<<`: 左移運算（將位元向左移動指定次數，右側補 `0`）  
  - `>>`: 右移運算（將位元向右移動指定次數，左側補 `0`（無號數）或最高位元的值（有號數））  

- **指定運算**: `=`,`+=`,`-=`,`*=`,`/=`,`%=`,`&=`,`|=`,`^=`,`<<=`,`>>=`  
  - `=`: 指定值（將右側值賦予左側變數）  
  - `+=`: 加法指定（`a += b` 等價於 `a = a + b`）  
  - `-=`: 減法指定（`a -= b` 等價於 `a = a - b`）  
  - `*=`: 乘法指定（`a *= b` 等價於 `a = a * b`）  
  - `/=`: 除法指定（`a /= b` 等價於 `a = a / b`）  
  - `%=`: 取餘指定（`a %= b` 等價於 `a = a % b`）  
  - `&=`: 位元 AND 指定（`a &= b` 等價於 `a = a & b`）  
  - `|=`: 位元 OR 指定（`a |= b` 等價於 `a = a | b`）  
  - `^=`: 位元 XOR 指定（`a ^= b` 等價於 `a = a ^ b`）  
  - `<<=`: 左移指定（`a <<= b` 等價於 `a = a << b`）  
  - `>>=`: 右移指定（`a >>= b` 等價於 `a = a >> b`）  

- **比較運算**: `==`, `!=`, `>`, `<`, `>=`, `<=`  
  - `==`: 等於（判斷兩數是否相等）  
  - `!=`: 不等於（判斷兩數是否不相等）  
  - `>`: 大於（判斷左側是否大於右側）  
  - `<`: 小於（判斷左側是否小於右側）  
  - `>=`: 大於或等於（判斷左側是否大於等於右側）  
  - `<=`: 小於或等於（判斷左側是否小於等於右側）  


## 4. 控制流程（Control Flow）

### 條件判斷（if、else、switch）
- 使用`if`和`else`建立判斷結構
- `switch`建立選擇結構；`break`跳出`case`

```cpp
// if else 範例
if (條件) {
    // 執行區塊
} else {
    // 執行區塊
}

// switch 範例
switch (變數) {
    case 值1:
        // 執行區塊
        break;
    case 值2:
        // 執行區塊
        break;
    default:
        // 執行區塊
        break;
}

```

#### 實際範例
```cpp
// if else 範例
int x = 10;
if (x > 5) {
    // x 大於 5
} else {
    // x 小於或等於 5
}

// switch 範例
int y = 3;
switch (y) {
    case 1:
        // y 等於 1
        break;
    case 3:
        // y 等於 3
        break;
    default:
        // 其他情況
        break;
}

```


### 迴圈（while、do-while、for）
- `while`: 建立一個條件迴圈，當符合條件時執行內容
- `do`+`while`: 和上述相同，但在第一次執行時，無論是否符合條件都會先執行一次指令
- `for` :確定執行次數的迴圈

```cpp
// while 範例
while (條件) {
    // 執行區塊
}

// do-while 範例
do {
    // 執行區塊
} while (條件);

// for 範例
for (初始條件; 條件; 更新步驟) {
    // 執行區塊
}

```

#### 實際範例
```cpp
// while 範例
int i = 0;
while (i < 5) {
    // i 從 0 到 4 逐次執行
    i++;
}

// do-while 範例
int j = 0;
do {
    // j 從 0 開始執行一次，然後檢查條件
    j++;
} while (j < 3);

// for 範例
for (int k = 0; k < 3; k++) {
    // k 從 0 到 2 逐次執行
}

```

### 跳轉語句（break、continue、goto）
- `togo`:跳轉到指定位置
- `break`: 強制結束目前迴圈或選擇結構的循環
- `continue`: 類似`break`，但不會結束循環，而是跳過當前循環，強制開啟下一輪循環。

```cpp
// break 範例
while (條件) {
    if (條件2) {
        break;  // 跳出迴圈
    }
}

// continue 範例
for (初始化; 條件; 更新) {
    if (條件) {
        continue;  // 跳過這次迴圈，繼續下一次
    }
}

// goto 範例
if (條件) {
    goto 標籤;  // 跳到標籤位置
}

```

#### 實際範例
```cpp
// break 範例
for (int i = 0; i < 5; i++) {
    if (i == 3) {
        break;  // 當 i 等於 3 時，退出迴圈
    }
}

// continue 範例
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue;  // 當 i 等於 2 時，跳過此次迴圈，繼續下一次
    }
    // 其他 i 不等於 2 時執行
}

// goto 範例
int count = 0;
start:
if (count < 3) {
    // 執行某些操作
    count++;
    goto start;  // 重複回到 start 標籤
}

```



## 5. 函數
#### 定義
在 C++ 中，**函數**（Function）是一組可以被重複調用的語句塊，目的是執行特定的任務。函數可以接收輸入參數並返回結果。它是 C++ 程式的基本組成單位，幫助開發者將程式邏輯劃分成可重複使用的區塊。

#### 語法
C++ 中函數的基本語法如下：

```cpp
<回傳型別> <函數名稱>(<參數型別> <參數名稱>, ...) {
    // 函數體：執行的程式碼
}
```

其中：
- `<回傳型別>`：定義函數將會返回的資料型別，若無返回值，則使用 `void`。
- `<函數名稱>`：函數的名稱，用來呼叫此函數。
- `<參數型別>`：函數所接收的輸入參數的型別，可以有多個參數。
- `<參數名稱>`：函數參數的名稱，用來在函數內部引用。
- 函數體：包含函數邏輯的程式碼。

#### 例子

```cpp
int add(int a, int b) { 
    return a + b; 
}
```

- `int`：表示函數返回一個整數型別的值。
- `add`：是函數名稱。
- `int a, int b`：是兩個整數型別的參數，這些參數會被函數用來計算並返回它們的和。
- 函數體內部執行 `a + b`，並將結果返回。

#### 參數與回傳型別

1. **回傳型別**：
   函數必須指定其返回值的資料型別。如果函數不返回任何值，可以使用 `void` 類型。例如：

   ```cpp
   void printMessage() {
       std::cout << "Hello, World!";
   }
   ```

   這個函數的回傳型別是 `void`，表示它不返回任何資料。

2. **函數參數**：
   函數可以接收零個或多個參數。每個參數都必須指定型別，可以是基本型別（如 `int`、`float`）、結構體、指標或其他自訂型別。

#### 默認參數值

C++ 允許在函數參數中設置默認值。若呼叫該函數時未提供該參數，則使用默認值。

```cpp
int sum(int a, int b = 5) { 
    return a + b; 
}
```

- `b = 5`：這表示如果呼叫 `sum` 函數時未傳遞 `b` 參數，則 `b` 默認為 5。
- 例如，呼叫 `sum(10)` 時，`a` 會是 10，`b` 默認為 5，結果是 15。

#### 內聯函數（Inline Functions）

C++ 允許使用 `inline` 關鍵字來定義內聯函數。內聯函數的特點是，編譯器會嘗試在每個呼叫該函數的地方插入該函數的代碼，而不是進行常規的函數呼叫。這樣可以提高效能，尤其是在小型函數中。

```cpp
inline int fastAdd(int a, int b) { 
    return a + b; 
}
```

- `inline`：告訴編譯器將該函數的代碼內聯（插入）到每個呼叫位置，避免函數調用的額外開銷。
- `fastAdd` 是內聯函數，它直接返回兩個整數的和。

#### 函數重載

C++ 支援函數重載，即多個函數具有相同的名稱，但參數列表不同。編譯器根據參數類型和數量來決定呼叫哪個版本的函數。

```cpp
int add(int a, int b) { 
    return a + b; 
}

double add(double a, double b) { 
    return a + b; 
}
```

- `add(int, int)` 和 `add(double, double)` 是兩個重載的函數，它們有相同的名稱，但是參數型別不同。

#### 範例：綜合應用

```cpp
#include <iostream>
using namespace std;

// 普通函數
int add(int a, int b) { 
    return a + b; 
}

// 默認參數值
int sum(int a, int b = 5) { 
    return a + b; 
}

// 內聯函數
inline int fastAdd(int a, int b) { 
    return a + b; 
}

int main() {
    cout << "add(10, 20): " << add(10, 20) << endl;  // 輸出 30
    cout << "sum(10): " << sum(10) << endl;          // 輸出 15，使用默認的 b = 5
    cout << "fastAdd(10, 20): " << fastAdd(10, 20) << endl;  // 輸出 30
    return 0;
}
```

#### 小結
- **函數回傳型別**：指定函數返回的資料型別，若無返回值則使用 `void`。
- **函數名稱**：用來呼叫函數的名稱，通常使用動詞來表示函數的功能。
- **參數型別與數量**：可以接受零個或多個參數，且參數可以有默認值。
- **內聯函數**：通過 `inline` 關鍵字，將小型函數的代碼插入到每個呼叫位置，從而提高效能。
- **函數重載**：同名函數，根據參數型別或數量的不同來選擇對應的版本。



## 6. 陣列與結構

#### 陣列（Array）

##### 定義
在 C++ 中，**陣列**（Array）是一種資料結構，用來儲存固定大小的同類型元素集合。每個元素都可以通過索引來訪問。陣列的大小在編譯時已經確定，並且一旦建立後，大小不可改變。

##### 語法
C++ 陣列的語法結構如下：

```cpp
<資料型別> <陣列名稱>[<元素數量>];
```

其中：
- `<資料型別>`：指定陣列元素的型別，例如 `int`、`float`、`char` 等。
- `<陣列名稱>`：為陣列指定一個名稱。
- `<元素數量>`：指定陣列的大小，即陣列中元素的數量。

#### 例子

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

- `int`：指定陣列中元素的資料型別為 `int`。
- `arr`：陣列的名稱。
- `[5]`：指定陣列有 5 個元素，這些元素的索引從 0 到 4。
- `{1, 2, 3, 4, 5}`：初始化陣列中的每個元素，`arr[0]` 存儲 `1`，`arr[1]` 存儲 `2`，以此類推。

#### 其他資料型別的陣列

##### 1. **整數型別陣列（`int`）**

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

- 陣列 `arr` 儲存 5 個 `int` 型別的元素。
- 可以使用索引（`arr[0]` 到 `arr[4]`）來訪問陣列中的元素。

##### 2. **浮點數型別陣列（`float`）**

```cpp
float arr[3] = {3.14f, 2.71f, 1.61f};
```

- 陣列 `arr` 儲存 3 個 `float` 型別的元素，表示浮點數。

##### 3. **字符型別陣列（`char`）**

```cpp
char arr[4] = {'A', 'B', 'C', 'D'};
```

- 陣列 `arr` 儲存 4 個 `char` 型別的元素，這些元素是字符。

##### 4. **布林型別陣列（`bool`）**

```cpp
bool arr[3] = {true, false, true};
```

- 陣列 `arr` 儲存 3 個 `bool` 型別的元素，表示布林值 `true` 或 `false`。

##### 5. **字串型別陣列（`std::string`）**

```cpp
#include <string>
std::string arr[3] = {"Hello", "World", "C++"};
```

- 陣列 `arr` 儲存 3 個 `std::string` 型別的元素，表示字串。

##### 6. **結構型別陣列（`struct`）**

```cpp
struct Point {
    int x, y;
};

Point points[2] = {{1, 2}, {3, 4}};
```

- 陣列 `points` 儲存 2 個 `Point` 結構型別的元素，每個結構有 `x` 和 `y` 兩個整數成員。

##### 7. **指標型別陣列（`pointer`）**

```cpp
int a = 10, b = 20, c = 30;
int* arr[3] = {&a, &b, &c};
```

- 陣列 `arr` 儲存 3 個 `int*` 型別的元素，每個元素儲存一個 `int` 變數的位址。

##### 8. **浮點數指標型別陣列（`float*`）**

```cpp
float x = 1.5f, y = 2.5f;
float* arr[2] = {&x, &y};
```

- 陣列 `arr` 儲存 2 個 `float*` 型別的元素，每個元素儲存一個 `float` 變數的位址。

##### 9. **多維陣列（`int`）**

```cpp
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

- 這是一個 2x3 的二維陣列 `matrix`，儲存整數型別的數據。

##### 10. **指標陣列的多維例子（`int*`）**

```cpp
int a = 10, b = 20, c = 30;
int* matrix[2][2] = {{&a, &b}, {&c, &a}};
```

- 這是一個 2x2 的二維指標陣列 `matrix`，每個元素都是一個 `int*` 型別，儲存 `int` 型別變數的位址。

##### 11. **空陣列（`void` 指標）**

```cpp
void* arr[3] = {&a, &b, &c};
```

- 陣列 `arr` 儲存 3 個 `void*` 型別的元素，這些元素可以指向任何資料型別（如 `int`、`float`、`char` 等）的位址。

---

##### 小結
以上範例展示了如何使用不同型別來定義陣列。在 C++ 中，陣列的型別可以是：
- 基本資料型別（如 `int`、`float`、`char` 等）
- 結構型別（如 `struct`）
- 指標型別（如 `int*`、`float*` 等）
- 甚至可以使用 `void*` 指標來存放任何型別的位址。

##### 陣列的特點
1. **固定大小**：陣列的大小在宣告時決定，並且在使用過程中不可更改。
2. **索引訪問**：陣列的元素可以通過索引來訪問，索引從 0 開始。
3. **內存連續性**：陣列的所有元素在內存中是連續排列的。

#### 多維陣列
C++ 支援多維陣列，例如二維陣列、三維陣列等。

```cpp
int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

這表示一個 2x3 的整數二維陣列，`matrix[0][0]` 是 `1`，`matrix[1][2]` 是 `6`。

---

#### 結構（Structure）

##### 定義
**結構**（Structure）是一種用來將不同類型的變數組織在一起的資料類型。結構可以包含多種類型的資料，這些資料項目稱為「成員」，而結構本身則是「自訂資料型別」。

##### 語法
C++ 結構的語法如下：

```cpp
struct <結構名稱> {
    <資料型別> <成員名稱>;
    <資料型別> <成員名稱>;
    // ...
};
```

- `<結構名稱>`：結構的名稱，用來引用該結構。
- `<資料型別>`：成員變數的資料型別，可以是基本型別、指標、陣列或其他結構。
- `<成員名稱>`：結構中的每個成員變數名稱。

#### 例子

```cpp
struct Point { 
    int x, y; 
};
```

- `struct Point`：定義一個結構 `Point`，其包含兩個整數型別的成員 `x` 和 `y`。
- `x` 和 `y`：分別代表點的 x 和 y 座標，都是 `int` 型別。

##### 結構的特點
1. **異質性**：結構成員可以是不同資料型別，這讓結構能夠存儲各種類型的資料。
2. **易於擴展**：可以隨著需要增加更多的成員來擴展結構的功能。

##### 結構變數的創建
結構定義後，可以創建結構變數來儲存具體的資料。

```cpp
Point p1;
p1.x = 10;
p1.y = 20;
```

這裡，`p1` 是 `Point` 結構型別的變數，並且我們為 `p1.x` 和 `p1.y` 指定了具體的值。

#### 結構初始化

結構也可以在創建時進行初始化：

```cpp
Point p1 = {10, 20};
```

這裡，`p1.x` 被初始化為 `10`，`p1.y` 被初始化為 `20`。

---

#### 聯合（Union）

##### 定義
**聯合**（Union）是一種特殊的資料型別，它允許在同一記憶體位置儲存多種不同型別的資料。聯合中的所有成員共用同一個記憶體區域，因此，聯合變數的大小等於其最大成員的大小。

##### 語法
C++ 聯合的語法結構如下：

```cpp
union <聯合名稱> {
    <資料型別> <成員名稱>;
    <資料型別> <成員名稱>;
    // ...
};
```

#### 例子

```cpp
union Data { 
    int i; 
    float f; 
    char c; 
};
```

- `union Data`：定義一個聯合 `Data`，它有三個成員：`i`（整數）、`f`（浮點數）和 `c`（字符）。
- 聯合的所有成員會共享相同的記憶體位置，因此一次只能儲存其中一個成員的值。

##### 聯合的特點
1. **記憶體共享**：聯合中的所有成員共用同一記憶體空間，因此它們的大小等於最大成員的大小。
2. **節省空間**：由於不同型別的資料共享相同記憶體，聯合在某些情況下比結構更有效率，尤其是當需要儲存不同型別但不會同時使用的資料時。

#### 聯合變數的使用

```cpp
Data data;
data.i = 10;    // 儲存整數
data.f = 3.14;  // 儲存浮點數，會覆蓋掉整數
data.c = 'A';   // 儲存字符，會覆蓋掉浮點數
```

由於所有成員共享相同記憶體，最後只會有 `data.c` 儲存有效的值。

---

#### 小結
- **陣列**：一種固定大小的資料結構，所有元素的型別相同，且元素在內存中是連續的。可以是單維或多維。
- **結構**：自訂資料型別，允許將不同型別的資料組織在一起。每個成員可以有不同的資料型別。
- **聯合**：與結構類似，但所有成員共用相同記憶體空間，因此一次只能儲存其中一個成員的值，節省記憶體。


## 7. 類別與物件


#### 定義
**類別**（Class）是 C++ 中的一種自訂資料型別，用來封裝資料（成員變數）和方法（成員函數）在一起，提供對資料的操作方式。**物件**（Object）則是從類別所創建的實體，它擁有類別定義的屬性和行為。

#### 類別的語法
C++ 中的類別語法如下：

```cpp
class <類別名稱> {
    <存取修飾符>:
        <資料型別> <成員名稱>;
        <資料型別> <成員名稱>;
        // ...
    <存取修飾符>:
        <成員函數>  // 可操作成員變數的函數
        <成員函數>
};
```

其中：
- `<類別名稱>`：定義類別的名稱。
- `<資料型別>`：定義類別的成員變數型別。
- `<成員名稱>`：定義類別的成員變數名稱。
- `<成員函數>`：定義類別的成員函數，這些函數可以操作類別的資料。

#### 類別的存取修飾符
C++ 類別有三種主要的存取修飾符：
1. **`public`**：對外可見，表示該成員可以被外部程式訪問。
2. **`private`**：對外不可見，表示該成員只能在類別內部被訪問。
3. **`protected`**：對外不可見，但子類別（繼承類別）可以訪問。

#### 範例：基本類別

```cpp
class Animal {
public:
    int age;  // 成員變數，儲存年齡

    void speak() {  // 成員函數，執行某些行為
        // 講話行為的程式碼
    }
};
```

- `Animal` 類別包含一個整數型別的成員變數 `age` 和一個成員函數 `speak()`，用來代表動物的講話行為。

#### 創建物件
根據類別定義，我們可以創建物件。物件是類別的實體。

```cpp
Animal dog;
dog.age = 5;  // 設定物件 dog 的年齡
dog.speak();  // 呼叫物件 dog 的 speak 函數
```

- `dog` 是 `Animal` 類別的物件，透過 `.` 運算符來訪問物件的成員。

---

#### 繼承（Inheritance）

C++ 支援物件導向程式設計的繼承機制，讓一個類別可以繼承另一個類別的屬性和行為。繼承的類別稱為 **派生類別**（Derived Class），被繼承的類別稱為 **基底類別**（Base Class）。

#### 範例：繼承

```cpp
class Dog : public Animal {
public:
    void bark() {  // 派生類別的專有功能
        // 狗吠聲的程式碼
    }
};
```

- `Dog` 類別從 `Animal` 類別繼承，這意味著 `Dog` 類別會自動擁有 `Animal` 類別的所有公開成員（如 `age` 和 `speak()`），並可以新增自己的成員函數（如 `bark()`）。

#### 創建派生類別物件

```cpp
Dog myDog;
myDog.age = 3;    // 繼承自 Animal 類別的 age 屬性
myDog.speak();    // 繼承自 Animal 類別的 speak() 函數
myDog.bark();     // 呼叫 Dog 類別自有的 bark() 函數
```

- `myDog` 是 `Dog` 類別的物件，因為 `Dog` 類別繼承了 `Animal` 類別，所以它也擁有 `Animal` 類別的屬性和方法。

---

#### 抽象類別（Abstract Class）

在 C++ 中，抽象類別是不能實例化的類別，通常用來作為其他類別的基底。抽象類別中可以包含純虛擬函數（pure virtual functions），這些函數沒有具體的實現，並且在派生類別中必須加以實現。

#### 範例：抽象類別

```cpp
class Abstract {
public:
    virtual void pureFunction() = 0;  // 純虛擬函數，沒有實作
};
```

- `pureFunction` 是一個純虛擬函數，這意味著任何繼承 `Abstract` 類別的類別都必須實作這個函數，否則該類別也將是抽象類別，無法實例化。
- `= 0` 表示純虛擬函數的語法。

#### 派生類別實現純虛擬函數

```cpp
class Concrete : public Abstract {
public:
    void pureFunction() override {  // 重寫純虛擬函數
        // 實現具體功能
    }
};
```

- `Concrete` 類別從 `Abstract` 類別繼承，並且實作了 `pureFunction()` 函數。

#### 創建抽象類別物件的限制

```cpp
Abstract a;  // 編譯錯誤，無法創建抽象類別物件
```

- 不能創建抽象類別的物件，因為它包含純虛擬函數。

---

### 小結
- **類別（Class）**：C++ 中的類別用來封裝資料與函數，實現物件導向程式設計。類別定義了物件的屬性和行為。
- **物件（Object）**：物件是類別的實體，具有類別所定義的屬性和行為。透過物件可以訪問類別的成員。
- **繼承（Inheritance）**：一個類別可以從另一個類別繼承屬性和行為，派生類別可以擴展基底類別的功能。
- **抽象類別（Abstract Class）**：抽象類別不能實例化，通常用來作為基底類別。它包含純虛擬函數，派生類別必須實作這些函數。

## 8. 模板（Template）

#### 定義
**模板**（Template）是 C++ 中的泛型機制，它允許我們編寫能夠處理多種資料型別的程式碼，而不需要重複編寫相同邏輯的程式碼。模板可以是函數模板或類別模板。

- **函數模板**：允許定義一個函數，根據傳入的資料型別來生成對應的函數版本。
- **類別模板**：允許定義一個類別，並根據資料型別來生成對應的類別版本。

#### 類別模板（Class Template）

**類別模板**是一種允許你為類別定義一個通用結構的方式。在類別模板中，資料型別（或其他型別參數）被作為模板參數，並且可以在類別內部使用。

#### 語法
類別模板的基本語法如下：

```cpp
template<typename T>
class <類別名稱> {
public:
    T value;  // 使用模板參數 T
    void setValue(T v) { value = v; }  // 使用模板參數 T 作為函數參數
    T getValue() { return value; }
};
```

- `template<typename T>`：這是模板的定義，`T` 是一個型別參數，它代表類別模板中的資料型別。
- `<類別名稱>`：定義類別名稱，這將是你將來用來創建物件的名稱。

#### 範例：類別模板

```cpp
template<typename T>
class Box {
public:
    T value;  // 使用模板型別 T 定義成員變數

    void setValue(T v) {  // 定義方法來設定值
        value = v;
    }

    T getValue() {  // 定義方法來取得值
        return value;
    }
};
```

- `Box` 是一個類別模板，模板參數 `T` 可以是任何型別（如 `int`、`float`、`std::string` 等）。
- `value` 是類別中的成員變數，其型別為 `T`，這使得 `Box` 類別能夠存儲不同型別的資料。

#### 創建類別物件

```cpp
Box<int> intBox;  // 創建一個 Box 類別的物件，型別為 int
intBox.setValue(10);  // 設定 intBox 的值為 10
std::cout << intBox.getValue() << std::endl;  // 輸出 10

Box<std::string> stringBox;  // 創建一個 Box 類別的物件，型別為 string
stringBox.setValue("Hello, Templates!");  // 設定 stringBox 的值為字串
std::cout << stringBox.getValue() << std::endl;  // 輸出 "Hello, Templates!"
```

- `Box<int>` 創建了一個 `Box` 類別，型別為 `int`，而 `Box<std::string>` 則創建了一個型別為 `std::string` 的 `Box` 物件。
- 使用模板時，實際的資料型別在物件創建時被指定。

#### 模板的多個參數

C++ 也支援多個模板參數，可以讓你使用多個資料型別來定義更複雜的類別模板。

```cpp
template<typename T, typename U>
class Pair {
public:
    T first;  // 第一個資料型別
    U second; // 第二個資料型別

    Pair(T a, U b) : first(a), second(b) {}

    void print() {
        std::cout << "First: " << first << ", Second: " << second << std::endl;
    }
};
```

- `Pair` 類別有兩個模板參數 `T` 和 `U`，分別代表兩種不同的資料型別。
- `first` 和 `second` 代表這對資料的成員變數。

#### 使用 `Pair` 類別模板

```cpp
Pair<int, double> p1(10, 3.14);
p1.print();  // 輸出 "First: 10, Second: 3.14"

Pair<std::string, char> p2("Hello", 'A');
p2.print();  // 輸出 "First: Hello, Second: A"
```

- `Pair<int, double>` 創建了一個 `Pair` 類別，`first` 的型別為 `int`，`second` 的型別為 `double`。
- `Pair<std::string, char>` 創建了一個 `Pair` 類別，`first` 的型別為 `std::string`，`second` 的型別為 `char`。

---

### 小結
- **模板** 允許我們定義通用的類別或函數，這樣同一份程式碼可以處理不同型別的資料。
- **類別模板** 可以讓你為類別定義一個型別參數，並根據這個參數來定義類別的成員變數和函數。
- 模板可以使用多個型別參數，允許我們創建更加靈活的資料結構。

## 9. 命名空間(namespace)
#### 定義
**命名空間**（Namespace）是 C++ 中的一種機制，主要用來解決不同程式碼區塊或庫之間名稱衝突的問題。當兩個不同的程式或庫定義了相同的變數、函數、類別名稱時，使用命名空間可以避免這些名稱衝突。

命名空間的基本概念是將所有的變數、函數或類別等成員放進特定的命名空間中，這樣相同名稱的成員就不會互相干擾。

#### 語法

命名空間的基本語法如下：

```cpp
namespace <命名空間名稱> {
    <成員宣告>;
}
```

其中：
- `<命名空間名稱>`：定義命名空間的名稱，這是一個用來區分不同命名空間的標識符。
- `<成員宣告>`：命名空間內部的成員，可以是變數、函數、類別等。

#### 範例：基本命名空間

```cpp
namespace MyNamespace {
    int x;  // 命名空間 MyNamespace 內的變數 x
}
```

- 這個範例定義了名為 `MyNamespace` 的命名空間，其中包含了一個整數型別的變數 `x`。

#### 使用命名空間成員

要使用命名空間中的成員，我們需要使用命名空間的名稱來訪問它。可以使用兩種方式來訪問命名空間中的成員：

1. **使用命名空間名稱加作用域解析運算符 `::`**

```cpp
MyNamespace::x = 10;  // 設定命名空間 MyNamespace 中變數 x 的值
```

2. **使用 `using` 關鍵字**（引入命名空間）

```cpp
using namespace MyNamespace;  // 引入命名空間 MyNamespace
x = 10;  // 直接使用 x，因為已經引入了 MyNamespace
```

- 當我們使用 `using namespace` 時，命名空間中的所有成員都可以直接訪問，而無需加上 `MyNamespace::`。

---

#### 範例：多個命名空間

C++ 中可以定義多個命名空間，甚至可以在同一個檔案中多次定義相同名稱的命名空間。

```cpp
namespace MyNamespace {
    int x = 5;
}

namespace AnotherNamespace {
    int x = 10;
}

int main() {
    std::cout << MyNamespace::x << std::endl;  // 輸出 5
    std::cout << AnotherNamespace::x << std::endl;  // 輸出 10
    return 0;
}
```

- 這裡我們定義了兩個命名空間 `MyNamespace` 和 `AnotherNamespace`，它們各自包含一個變數 `x`，但因為它們處於不同的命名空間中，所以不會發生名稱衝突。

---

#### 範例：命名空間與函數

命名空間也可以包含函數，這樣我們可以將不同的函數按照功能分類到不同的命名空間中。

```cpp
namespace Math {
    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }
}

namespace Print {
    void printMessage(const std::string& message) {
        std::cout << message << std::endl;
    }
}
```

- `Math` 命名空間包含了數學相關的函數 `add` 和 `subtract`。
- `Print` 命名空間則包含了與輸出相關的函數 `printMessage`。

#### 使用命名空間中的函數

```cpp
int main() {
    int result = Math::add(5, 3);  // 呼叫 Math 命名空間中的 add 函數
    Math::subtract(10, 4);  // 呼叫 Math 命名空間中的 subtract 函數
    Print::printMessage("Hello, World!");  // 呼叫 Print 命名空間中的 printMessage 函數
    return 0;
}
```

- 使用 `Math::add` 和 `Print::printMessage` 來呼叫相應命名空間中的函數。

---

#### 範例：內嵌命名空間

命名空間也可以被嵌套在其他命名空間內部：

```cpp
namespace OuterNamespace {
    namespace InnerNamespace {
        int x = 20;
    }
}
```

- 這樣定義了兩個命名空間 `OuterNamespace` 和 `InnerNamespace`，`InnerNamespace` 是嵌套在 `OuterNamespace` 中的。

#### 訪問內嵌命名空間中的成員

```cpp
int main() {
    std::cout << OuterNamespace::InnerNamespace::x << std::endl;  // 輸出 20
    return 0;
}
```

- 要訪問內嵌命名空間中的成員，必須使用完整的名稱路徑，即 `OuterNamespace::InnerNamespace::x`。

---

#### 小結
- **命名空間** 用來組織程式碼並避免名稱衝突。它可以包含變數、函數、類別等成員。
- 使用命名空間中的成員時，可以使用 `::` 來指定命名空間，或者使用 `using namespace` 來引入命名空間。
- C++ 支援多個命名空間，並且可以在命名空間中嵌套其他命名空間。

## 10. `typedef` 和 `using`

#### 定義
`typedef` 和 `using` 是 C++ 中用來定義型別別名（type alias）的關鍵字，它們允許我們給型別定義一個新的名稱。這對於簡化型別的使用、提高程式碼可讀性或實現平台無關的程式碼非常有用。

- **`typedef`**：是較舊的語法，用來為一個現有型別定義別名。
- **`using`**：是 C++11 引入的語法，功能與 `typedef` 相似，但語法更加直觀，並且支持更複雜的型別別名。

---

### `typedef` 語法

`typedef` 是 C++ 中用來為現有型別定義一個新名稱的關鍵字。它通常用來簡化複雜的型別，或將某些型別與特定平台或實現細節相關聯。

#### 語法

```cpp
typedef <現有型別> <別名名稱>;
```

#### 範例：使用 `typedef`

```cpp
typedef unsigned int uint;  // 定義 uint 為 unsigned int 的別名
```

- 在這個範例中，`typedef unsigned int uint;` 將 `unsigned int` 型別命名為 `uint`，使我們在程式中可以使用 `uint` 來代替 `unsigned int`。

#### 使用 `typedef`

```cpp
uint x = 10;  // 等同於 unsigned int x = 10;
std::cout << x << std::endl;
```

- 現在，我們可以使用 `uint` 作為 `unsigned int` 型別的別名。

---

### `using` 語法

`using` 是 C++11 引入的語法，用來定義型別別名，功能和 `typedef` 相似，但語法更加直觀，並且更靈活，特別是在處理複雜型別（如模板）時，`using` 更加方便。

#### 語法

```cpp
using <別名名稱> = <現有型別>;
```

#### 範例：使用 `using`

```cpp
using uint = unsigned int;  // 定義 uint 為 unsigned int 的別名
```

- 和 `typedef` 範例相同，這行程式碼將 `unsigned int` 型別命名為 `uint`。

#### 使用 `using`

```cpp
uint y = 20;  // 等同於 unsigned int y = 20;
std::cout << y << std::endl;
```

- `using uint = unsigned int;` 和 `typedef unsigned int uint;` 完全相同，都是讓我們能使用 `uint` 作為 `unsigned int` 的別名。

---

### `typedef` 與 `using` 的區別

雖然 `typedef` 和 `using` 的功能相似，兩者有一些微小的差異，主要在於語法的簡潔性和靈活性。

1. **語法簡潔性**：
   - `using` 語法比 `typedef` 更直觀，尤其是在處理模板時。
   
2. **模板型別別名**：
   - 在處理模板型別別名時，`using` 更加直觀。`typedef` 的語法在處理模板時會顯得比較複雜。
   
   ```cpp
   // 使用 typedef 定義模板別名
   typedef std::vector<int> IntVector;
   
   // 使用 using 定義模板別名
   using IntVector = std::vector<int>;
   ```

3. **型別別名的簡化**：
   - `using` 可以更輕鬆地為複雜的型別創建別名，尤其是在面對類似 `std::function` 或 `std::map` 等複雜類型時。
   
   ```cpp
   // 使用 typedef 創建複雜型別別名
   typedef std::map<int, std::vector<std::string>> MapType;
   
   // 使用 using 創建複雜型別別名
   using MapType = std::map<int, std::vector<std::string>>;
   ```

---

### 進階範例：模板型別別名

`using` 語法在 C++11 引入後，變得更加方便，尤其是當處理模板型別時。

#### 使用 `using` 定義模板別名

```cpp
template<typename T>
using Vec = std::vector<T>;  // 定義 Vec 作為 std::vector 的模板別名

Vec<int> intVec;  // 相當於 std::vector<int> intVec;
Vec<std::string> stringVec;  // 相當於 std::vector<std::string> stringVec;
```

- 在這裡，`using Vec = std::vector<T>;` 定義了一個模板別名 `Vec`，我們可以使用 `Vec<int>` 來表示 `std::vector<int>`。

---

### 小結

- **`typedef`** 是舊有的用來定義型別別名的方式，在簡單情況下仍然可以使用，但語法在面對複雜型別（如模板）時不夠直觀。
- **`using`** 是 C++11 引入的替代方案，語法簡潔直觀，特別是在處理模板型別別名時非常有用。
- `typedef` 和 `using` 都能實現型別別名的功能，`using` 更為靈活且易於理解，特別是在處理模板和複雜型別時。

希望這些資訊能幫助你更好地理解 `typedef` 和 `using` 的差異及使用場景！如果你還有其他問題，隨時告訴我！

## 11. `enum` 列舉

#### 定義
**`enum`** 是 C++ 中用來定義列舉類型（enumeration type）的一種機制。列舉是一種自定義型別，允許我們將相關的整數常數進行分組，並給它們一個有意義的名稱。這樣可以提高程式碼的可讀性，讓程式中的常數更具可理解性。

#### 語法

```cpp
enum <列舉名稱> { 
    <常數名稱1>, 
    <常數名稱2>, 
    ... 
};
```

- **`enum`** 關鍵字用來定義列舉型別。
- **`<列舉名稱>`** 是列舉的名稱，它定義了這個列舉型別。
- **`<常數名稱1>`, `<常數名稱2>`** 是列舉中的各個常數，這些常數代表某些有意義的整數值。

#### 範例：基本的 `enum`

```cpp
enum Color { RED, GREEN, BLUE };
```

- 在這個範例中，定義了一個列舉型別 `Color`，其中包含三個常數：`RED`、`GREEN` 和 `BLUE`。這些常數會被自動賦予整數值。
- 預設情況下，`RED` 被賦值為 0，`GREEN` 被賦值為 1，`BLUE` 被賦值為 2。

#### 使用列舉

```cpp
int main() {
    Color c = RED;  // 將列舉常數 RED 指派給變數 c
    std::cout << c << std::endl;  // 輸出 0，因為 RED 預設值是 0
    return 0;
}
```

- 在這裡，`c` 是 `Color` 類型的變數，它被設定為列舉常數 `RED`。由於 `RED` 的預設值是 0，因此 `std::cout` 會輸出 0。

---

### 指定列舉常數的值

在列舉定義中，我們也可以手動指定每個列舉常數的整數值，這樣我們就可以自訂列舉常數的對應數值。

#### 範例：指定列舉常數的值

```cpp
enum Color { RED = 1, GREEN = 5, BLUE = 10 };
```

- 在這個範例中，我們將 `RED` 設為 1，`GREEN` 設為 5，`BLUE` 設為 10，而不是使用預設的 0、1、2。

#### 使用指定值的列舉

```cpp
int main() {
    Color c = GREEN;  // c 會被設定為 5
    std::cout << c << std::endl;  // 輸出 5，因為 GREEN 被設定為 5
    return 0;
}
```

- 這裡，`c` 被設定為 `GREEN`，而 `GREEN` 被顯式設為 5，因此輸出的結果是 5。

---

### 列舉的範圍

列舉的值是從整數型別派生而來的。預設情況下，列舉常數的底層型別是 `int`，但我們也可以為列舉指定其他整數型別，例如 `unsigned int` 或 `short`。

#### 範例：指定列舉的底層型別

```cpp
enum Color : unsigned int { RED = 1, GREEN = 5, BLUE = 10 };
```

- 在這裡，我們將 `Color` 列舉的底層型別指定為 `unsigned int`。這樣 `Color` 列舉的每個常數值就會被存儲為 `unsigned int` 類型。

---

### `enum` 與 `enum class`

在 C++11 之後，C++ 引入了強型別的列舉 `enum class`。它與傳統的 `enum` 有些不同，主要的區別是 `enum class` 不會將列舉常數暴露到全域範圍內，因此可以避免名稱衝突。

#### 範例：`enum class` 的使用

```cpp
enum class Color { RED, GREEN, BLUE };
```

- `Color::RED`、`Color::GREEN` 和 `Color::BLUE` 必須使用 `Color::` 來訪問，這樣可以避免不同列舉類型間的名稱衝突。

#### 使用 `enum class`

```cpp
int main() {
    Color c = Color::RED;  // 必須使用 Color::RED
    std::cout << static_cast<int>(c) << std::endl;  // 輸出 0，因為 RED 預設值是 0
    return 0;
}
```

- 這裡，`c` 被設定為 `Color::RED`，並且通過 `static_cast<int>` 將 `enum class` 轉換為底層整數類型進行輸出。

---

### 小結

- **`enum`** 用來定義列舉類型，它允許將相關的常數組織在一起，並賦予它們有意義的名稱。列舉常數的底層型別預設是 `int`，並且會自動賦予連續的整數值。
- 可以手動指定列舉常數的值，並且可以為列舉指定其他底層型別（如 `unsigned int`）。
- **`enum class`** 是 C++11 引入的強型別列舉，提供了更強的類型安全性，避免了名稱衝突。

## 12. 內存操作：`volatile` 和 `constexpr`

#### 1. **`volatile`** 關鍵字

**`volatile`** 是 C++ 中的一個修飾符，用來告訴編譯器該變數的值可能會被外部因素（如硬體、其他執行緒或中斷處理程序）改變。因此，編譯器不應該對這個變數進行任何優化。

#### 定義和語法

```cpp
volatile <型別> <變數名稱>;
```

- **`volatile`** 修飾符告訴編譯器，該變數的值是「不確定的」，即編譯器無法假設它的值在每次訪問時都不變。
- 這對於與硬體介面（例如讀取硬體寄存器）或多執行緒程式設計中的共享變數尤為重要。

#### 使用情境

通常使用 **`volatile`** 的情況包括：
- 訪問硬體寄存器。
- 多執行緒中，當一個執行緒修改變數時，另一個執行緒也會讀取它。
- 處理器中斷服務例程（ISR），中斷會修改變數的值，且該變數在中斷處理後必須重新讀取。

#### 範例：`volatile` 使用

```cpp
volatile int x;  // 表示 x 可能在任何時候被外部改變
```

- 在這個範例中，`x` 被宣告為 `volatile`，意味著編譯器在處理 `x` 時不會做任何優化。每次訪問 `x` 都必須從記憶體中讀取它的實際值，而不是使用寄存器快取。

#### 範例：`volatile` 的應用（多執行緒）

```cpp
volatile bool flag = false;

void thread1() {
    flag = true;  // 設定 flag 為 true
}

void thread2() {
    while (!flag) {
        // 等待 flag 變為 true
    }
    std::cout << "Flag is true!" << std::endl;
}
```

- 在這裡，`flag` 是 `volatile`，這意味著編譯器不會對 `flag` 做優化，確保 `thread2` 可以在 `thread1` 設定 `flag` 的值後正確讀取到。

---

#### 2. **`constexpr`** 關鍵字

**`constexpr`** 用來表示常數表達式，即在編譯時期可以求值的表達式。當使用 `constexpr` 修飾一個變數或函數時，編譯器會嘗試在編譯過程中計算這個變數或函數的值，而不是在執行時期計算。

#### 定義和語法

```cpp
constexpr <型別> <變數名稱> = <常數值>;
```

- **`constexpr`** 用來告訴編譯器，該變數或函數的值必須在編譯階段計算出來。對於變數，這表示它的值在編譯時是已知且不可改變的；對於函數，這表示該函數可以在編譯時期被求值。

#### 範例：`constexpr` 變數

```cpp
constexpr int y = 10;  // y 的值為 10，且在編譯時期已確定
```

- 在這個範例中，`y` 是 `constexpr` 變數，這表示它的值在編譯期間是已經確定的。這樣 `y` 的值可以在編譯階段直接用來進行運算，而不會等到執行時再計算。

#### 範例：`constexpr` 函數

```cpp
constexpr int square(int n) {
    return n * n;
}

int main() {
    constexpr int x = square(5);  // 編譯時期計算 x 的值
    std::cout << x << std::endl;  // 輸出 25
    return 0;
}
```

- 在這個範例中，`square` 是一個 `constexpr` 函數，它可以在編譯時期進行計算。因此，`x` 的值會在編譯期間被求得，並且在程式執行時直接使用。

#### `constexpr` 的條件

- 必須是常數表達式：`constexpr` 函數中的所有表達式和參數必須能夠在編譯期間計算。
- 必須是有返回值的函數，並且函數內部的邏輯必須是簡單的運算（例如基本數學操作、常數等）。
  
#### 範例：帶有參數的 `constexpr` 函數

```cpp
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

int main() {
    constexpr int result = factorial(5);  // 編譯時期計算結果
    std::cout << result << std::endl;  // 輸出 120
    return 0;
}
```

- 這裡的 `factorial` 函數是 `constexpr`，並且它計算的是階乘。在編譯時期，`factorial(5)` 就會被計算為 120，並且在程式執行時使用已計算好的結果。

---

### 小結

1. **`volatile`**：
   - 告訴編譯器該變數的值可能在任何時候被外部改變，因此編譯器不能對這個變數進行優化。
   - 常用於多執行緒或硬體寄存器操作，確保每次讀取變數時都從記憶體中取得最新的值。

2. **`constexpr`**：
   - 用於標註編譯時期可計算的常數或函數，允許編譯器在編譯階段就計算出常數或函數的結果，從而提高執行效率。
   - 常用於數學運算、階乘、數組大小等固定的運算。


## 13. 前置處理器


前置處理器是 C++ 編譯過程中的一個重要步驟，它在編譯器處理程式碼之前進行處理。它的主要作用是對程式碼進行文本替換、條件編譯等操作，從而生成最終的源碼，然後再由編譯器進行編譯。

#### 常見的前置處理器指令：
- **`#define`**：用來定義常數或宏。
- **`#ifdef` / `#ifndef`**：用來進行條件編譯。
- **`#endif`**：結束條件編譯區塊。
- **`#include`**：用來包含其他檔案。
- **`#undef`**：用來取消宏定義。

---

### 1. **`#define`** 定義宏

**`#define`** 是 C++ 中用來定義宏（或常數）的指令。宏在前置處理階段進行文本替換，因此可以方便地使用常數或重複的代碼片段。

#### 語法

```cpp
#define <宏名稱> <值或代碼>
```

- 宏的名稱是用來在程式中引用的標識符。
- 宏的值可以是常數、表達式，甚至是複雜的代碼段。

#### 範例：定義常數

```cpp
#define PI 3.14
```

- 在這個範例中，`#define` 用來定義一個名為 `PI` 的常數，並將其賦值為 `3.14`。當編譯器處理程式碼時，所有出現 `PI` 的地方會被替換為 `3.14`。

#### 範例：定義帶參數的宏

```cpp
#define SQUARE(x) ((x) * (x))
```

- 這裡定義了一個帶參數的宏 `SQUARE`，用來計算一個數字的平方。當程式碼中使用 `SQUARE(5)` 時，編譯器會將其替換為 `((5) * (5))`。

---

### 2. **`#ifdef` / `#ifndef`** 條件編譯

條件編譯指令允許根據是否已經定義了某個宏來決定是否編譯某段程式碼。這對於調試、不同平台的代碼、或條件功能的開發特別有用。

- **`#ifdef`**：如果宏已經定義，則編譯隨後的代碼。
- **`#ifndef`**：如果宏尚未定義，則編譯隨後的代碼。

#### 語法

```cpp
#ifdef <宏名稱>
// 如果宏已定義，編譯這段程式碼
#endif

#ifndef <宏名稱>
// 如果宏未定義，編譯這段程式碼
#endif
```

#### 範例：使用 `#ifdef` 和 `#ifndef`

```cpp
#define DEBUG

#ifdef DEBUG
    std::cout << "Debugging is enabled!" << std::endl;
#endif

#ifndef RELEASE
    std::cout << "Release mode is not enabled!" << std::endl;
#endif
```

- 在這個範例中：
  - 如果 `DEBUG` 宏已經定義（使用 `#define DEBUG`），則會輸出 `Debugging is enabled!`。
  - 如果 `RELEASE` 宏未定義（即沒有 `#define RELEASE`），則會輸出 `Release mode is not enabled!`。

---

### 3. **`#endif`** 結束條件編譯

`#endif` 用來結束一個由 `#ifdef` 或 `#ifndef` 開始的條件編譯區塊。每個條件編譯指令都需要對應的 `#endif` 來結束。

#### 語法

```cpp
#endif
```

#### 範例：完整條件編譯

```cpp
#define DEBUG

#ifdef DEBUG
    std::cout << "Debugging is enabled!" << std::endl;
#endif

#ifndef RELEASE
    std::cout << "Release mode is not enabled!" << std::endl;
#endif
```

- 在這裡，條件編譯區塊都被 `#endif` 正確結束，從而確保編譯過程的正常運行。

---

### 前置處理器的其他指令

- **`#include`**：用來引入其他檔案（例如頭文件）。它會將指定的檔案內容插入到當前檔案中。
  
  ```cpp
  #include <iostream>  // 引入標準庫頭文件
  ```

- **`#undef`**：用來取消宏的定義，使其不再有效。
  
  ```cpp
  #define MAX 100
  #undef MAX  // 取消 MAX 的定義
  ```

---

### 小結

- **`#define`**：用來定義常數、宏，並進行文本替換。它是預處理器中最常用的指令之一。
- **`#ifdef` / `#ifndef`**：用來進行條件編譯，根據宏是否已定義來決定是否編譯某段程式碼。
- **`#endif`**：結束由 `#ifdef` 或 `#ifndef` 開始的條件編譯區塊。

前置處理器指令使得程式的編譯過程更加靈活，能夠根據不同的條件編譯不同的代碼片段，並且能簡化常數或複雜代碼的管理。這對於多平台開發、條件編譯和調試都是非常有用的。




