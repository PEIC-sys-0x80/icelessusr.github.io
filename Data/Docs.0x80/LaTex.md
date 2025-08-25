#  LaTex使用說明
#通用文件 #LaTex

## 平方、括號等基本表示

基本數學表示的第一位和末位都要加上「`$`」，以使其識別。
以下是LaTex常用語法的使用方法:

---
### 平方(上標)

使用「`^`」可用於表示平方上標數字，「`^`」後的數字代表平方係數
```
{x}^{y}
```

效果

 ${x}^{y}$
 

---
### 下標

使用「`_`」可以用於表示下標
```
{x}_{y}
```

效果
 ${x}_{y}$
 
---
### 無限符號

`\infty` 或 `\infin`

 $\infty$

### 括號
直接使用括號即可:
```
{a_x+[b^2]+[c^2]-[(2^2+1)+6]}+y
```

 ${a_x+[b^2]+[c^2]-[(2^2+1)+6]}+y$

---

### 分式
使用`\frac`語法標示分式:

前數是分子，後數是分母
```
\frac{x}{y}
```

效果:
 $\frac{x}{y}$

#### 多重分式
```
\frac{\frac{x}{y}}{\frac{a}{b}}
```

效果
 $\frac{\frac{x}{y}}{\frac{a}{b}}$

---

### 根號
使用`\sqrt`標示根號:
```
\sqrt{x}
```

效果

 $\sqrt{x}$



將數字置於根號外面:
```
\sqrt[y]{x}
```


 $\sqrt[y]{x}$

---

### 「`^`」
```
\hat{X}

\widehat{x}
```

效果:

 $\hat{Xyyyy}$
 
 $\widehat{xeer}$


---

### 頂線
```
\overline{xyz}
```

效果

 $\overline{xyz}$

---

### 加波浪線

```
\widetilde{x}
```

效果
 $\widetilde{x}$

---

### 加點
```
加一個點:
\dot{xyz}

加兩個點:
\ddot{xyz}
```

效果

 $\dot{xyz}$
 
 $\ddot{xyz}$


---

### 乘號
```
\times
```

效果：
 $\times$

---
### 除號
```
\div
```

效果
 $\div$



---
## 大於等於和小於等於
---
### 大於等於
```
\geq
```

效果：
 $\geq$

---

### 小於等於
```
\leq
```

效果：
 $\leq$

---



### 平行符號

```
\parallel
```

 $\parallel$

---
## 陣列與方程式
### 陣列
```
\begin{matrix}
a+b & c     & 9   \\
5   & x^2+y & 3   \\
8   & 7     & z_1 \\
\end{matrix}
```

效果:

$$
 \begin{matrix}
 a+b & c     & 9   \\
 5   & x^2+y & 3   \\
 8   & 7     & z_1 \\
 \end{matrix}
 $$

```
\begin{vmatrix}
x & y \\
z & v
\end{vmatrix}
```

效果:
$$
 \begin{vmatrix}
 x & y \\
 z & v
 \end{vmatrix}
 $$
 
---
### 方程組
```
\begin{cases}
3x + 5y +  z \\
7x - 2y + 4z \\
-6x + 3y + 2z
\end{cases}
```

 $$
 \begin{cases}
 3x + 5y +  z \\
 7x - 2y + 4z \\
 -6x + 3y + 2z
 \end{cases}
 $$

---
## 絕對值
$\left| a \right|$
```
$\left| a \right|$
```
## 微積分
|預覽|指令|
|---|---|
|$\Delta x$|`\Delta x`|
|$\nabla{x}$|`\nabla{x}`|
|$\partial{x}$|`\partial{x}`|
|${x}^{\prime}$|`{x}^{\prime}`|
|$\int_{a}^{b}$|`\int_{a}^{b}`|
|$\int\limits_{x}^{y}$|`\int\limits_{x}^{y}`|
|$\int$|`\int`|
|$\iint$|`\iint`|
|$\iiint$|`\iiint`|


## 二元運算符號
|預覽|指令|
|----|----|
|$+$|`+`|
|$-$|`-`|
|$\oplus$|`\oplus`|
|$\oslash$|`\oslash`|
|$\vee$|`\vee`|
|$\circ$|`\circ`|
|$\triangleright$|`\triangleright`|
|$\ast$|`\ast`|
|$\setminus$|`\setminus`|
|$\ominus$|`\ominus`|
|$\bigcirc$|`\bigcirc`|
|$\wedge$|`\wedge`|
|$\bullet$|`\bullet`|
|$\triangleleft$|`\triangleleft`|
|$\pm$|`\pm`|
|$\star$|`\star`|
|$\otimes$|`\otimes`|
|$\uplus$|`\uplus`|
|$\diamond$|`\diamond`|
|$\mp$|`\mp`|
|$\cdot$|`\cdot`|
|$\odot$|`\odot`|

## 二元關係符號
|預覽|指令|
|----|----|
|$<$|`<`|
|$>$|`>`|
|$=$|`=`|
|$\le$|`\le`|
|$\ge$|`\ge`|
|$\equiv$|`\equiv`|
|$\ll$|`\ll`|
|$\gg$|`\gg`|
|$\doteq$|`\doteq`|
|$\prec$|`\prec`|
|$\succ$|`\succ`|
|$\sim$|`\sim`|
|$\preceq$|`\preceq`|
|$\succeq$|`\succeq`|
|$\simeq$|`\simeq`|
|$\subset$|`\subset`|
|$\approx$|`\approx`|
|$\subseteq$|`\subseteq`|
|$\supseteq$|`\supseteq`|
|$\cong$|`\cong`|
|$\bowtie$|`\bowtie`|
|$\sqsubset$|`\sqsubest`|
|$\sqsupset$|`\sqsupset`|
|$\sqsubseteq$|`\sqsubseteq`|
|$\sqsupseteq$|`\sqsupseteq`|
|$\in$|`\in`|
|$\ni$|`\ni`|
|$\propto$|`\propto`|
|$\vdash$|`\vdash`|
|$\dashv$|`\dashv`|
|$\models$|`\models`|
|$\perp$|`\perp`|
|$\mid$|`\mid`|
|$\parallel$|`\parallel`|
|$\smile$|`\smile`|
|$\frown$|`\asymp`|
|$\asymp$|`\saymp`|

 註: 可在前面加上`\not`，得到否定型式，如`\not \approx` → $\not \approx$


## 邏輯符號
|預覽|指令|
|----|----|
|$\forall$|`\forall`|
|$\exists$|`\exists`|
|$\nexists$|`\nexists`|
|$\therefore$|`\therefore`|
|$\because$|`\because`|
|$\And$|`\And`|
|$\lor$|`\lor`|
|$\vee$|`\vee`|
|$\curlyvee$|`\curlyvee`|
|$\bigvee$|`\bigvee`|
|$\land$|`\land`|
|$\wedge$|`\wedge`|
|$\curlywedge$|`\curlywedge`|
|$\bigwedge$|`\bigwedge`|

## 大型運算符號
|預覽|指令|
|---|---|
|$\sum$|`\sum`|
|$\bigsqcup$|`\bigsqcup`|
|$\bigotimes$|`\bigotimes`|
|$\int$|`\int`|
|$\bigcap$|`\bigcap`|
|$\prod$|`\prod`|
|$\bigoplus$|`\bigoplus`|
|$\oint$|`\oint`|
|$\bigcup$|`\bigcup`|
|$\cup$|`\cup`|
|$\cap$|`\cap`|
|$\coprod$|`\coprod`|
|$\bigwedge$|`\bigwedge`|
|$\biguplus$|`\biguplus`|
|$\bigodot$|`\bigodot`|
|$\bigvee$|`\bigvee`|



## 函式
|預覽|指令|
|---|---|
|$\sin$|`\sin`|
|$\sec$|`\sec`|
|$\arcsin$|`\arcsin`|
|$\sinh$|`\sinh`|
|$\exp$|`\exp`|
|$\lim$|`\lim`|
|$\inf$|`\inf`|
|$\deg$|`\deg`|
|$\cos$|`\cos`|
|$\csc$|`\csc`|
|$\arccos$|`\arccos`|
|$\cosh$|`\cosh`|
|$\log$|`\log`|
|$\liminf$|`\liminf`|
|$\max$|`\max`|
|$\arg$|`\arg`|
|$\tan$|`\tan`|
|$\cot$|`\cot`|
|$\arctan$|`\arctan`|
|$\tanh$|`\tanh`|
|$\ln$|`\ln`|
|$\limsup$|`\limsup`|
|$\min$|`\min`|
|$\gcd$|`\gcd`|

## 上下標、Head
|預覽|指令|
|---|---|
|$a^b$|`a^b`|
|$a^{b+1}_{t+1}$|`a^{b+1}_{t+1}`|
|$\overbrace{m+\cdots+n}^{26}$|`\overbrace{m+\cdots+n}^{26}`|
|$\vec{a}$|`\vec{a}`|
|$\overrightarrow{ab}$|`\overrightarrow{ab}`|
|$\overset{\frown} {ab}$|`\overset{\frown} {ab}`|
|$a_t$|`a_t`|
|$\overline{m+n}$|`\overline{m+n}`|
|$\underbrace{m+\cdots+n}_{26}$|`\underbrace{m+\cdots+n}_{26}`|
|$\hat{a}$|`\hat{a}`|
|$\overleftarrow{ab}$|`\overleftarrow{ab}`|
|$a^b_t$|`a^b_t`|
|$\underline{m+n}$|`\underline{m+n}`|
|$\bar{a}$|`\bar{a}`|
|$\dot{a}$|`\dot{a}`|
|$\widehat{yeee}$|`\widehat{yeee}`|

## 根號和分數
| 預覽            | 指令            |
| --------------- | --------------- |
| $\surd$         | `\surd`         |
| $\frac{2}{4}$   | `\frac{2}{4}`   |
| $\tfrac{2}{4}$  | `\tfrac{2}{4}`  |
| $\cfrac{2}{4}$  | `\cfrac{2}{4}`  |
| $\sqrt{2}$      | `\sqrt{2}`      |
| $\sqrt[n]{yee}$ | `\sqrt[n]{yee}` |
| $\sqrt[n]{}$    | `\sqrt[n]{}`    |
| $\%$            | `\%`            |




## 二項式係數
|預覽|指令|
|---|---|
|$x^{\prime}$|`x^{\prime}`|
|$\dbinom{n}{r}$|`\dbinom{n}{r}	`|
|$\binom{n}{n-r}$|`\binom{n}{n-r}`|

## 括號
|預覽|指令|
|---|---|
|$($|`(`|
|$)$|`)`|
|$[$|`[`|
|$]$|`]`|
|$\{$|`\{`|
|$\}$|`\}`|
|$\langle$|`\langle`|
|$\rangle$|`\rangle`|
|$\lfloor$|`\lfloor`|
|$\rfloor$|`\rfloor`|
|$\lceil$|`\lceil`|
|$\rceil$|`\rceil`|
|$\vert$|`\vert`|
|$\Vert$|`\Vert`|
|$/$|`/`|
|$\backslash$|`\backslash`|

## 箭號
|預覽|指令|
|---|---|
|$\leftarrow$|`\leftarrow`|
|$\rightarrow$|`\rightarrow`|
|$\longleftarrow$|`\longleftarrow`|
|$\longrightarrow$|`\longrightarrow`|
|$\Leftarrow$|`\Leftarrow`|
|$\Rightarrow$|`\Rightarrow`|
|$\Longleftarrow$|`\Longleftarrow`|
|$\Longrightarrow$|`\longrightarrow`|
|$\leftharpoonup$|`\leftharpoonup`|
|$\rightharpoonup$|`\rightharpoonup`|
|$\leftharpoondown$|`\leftharpoondown`|
|$\rightharpoondown$|`\rightharpoondown`|
|$\hookleftarrow$|`\hookleftarrow`|
|$\hookrightarrow$|`\hookrightarrow`|
|$\mapsto$|`\mapsto`|
|$\longmapsto$|`\longmapsto`|
|$\leftrightarrow$|`\leftrightarrow`|
|$\longleftrightarrow$|`\longleftrightarrow`|
|$\Leftrightarrow$|`\Leftrightarrow`|
|$\Longleftrightarrow$|`\Longleftrightarrow`|
|$\rightleftharpoons$|`\rightleftharpoons`|
|$\uparrow$|`\uparrow`|
|$\downarrow$|`\downarrow`|
|$\Uparrow$|`\Uparrow`|
|$\Downarrow$|`\Downarrow`|
|$\updownarrow$|`\updownarrow`|
|$\Updownarrow$|`\Updownarrow`|
|$\nearrow$|`\nearrow`|
|$\searrow$|`\searrow`|
|$\swarrow$|`\swarrow`|
|$\nwarrow$|`\nwarrow`|

## 單位符號
| 預覽        | 指令        |
| ----------- | ----------- |
| $^{\circ}C$ | `^{\circ}C` |
| $^{\circ}F$ | `^{\circ}F` |
| $^{\circ}$  | `^{\circ}`  |


## 空格和空行
|動作|指令|
|----|----|
|空行|`\newline`|
|空格|`\space`|

-----------------
## mathfrak
|預覽|指令|
|----|----|
|$\mathfrak {A}$|`\mathfrak {A}`|
|$\mathfrak {B}$|`\mathfrak {B}`|
|$\mathfrak {C}$|`\mathfrak {C}`|
|$\mathfrak {D}$|`\mathfrak {D}`|
|$\mathfrak {E}$|`\mathfrak {E}`|
|$\mathfrak {F}$|`\mathfrak {F}`|
|$\mathfrak {G}$|`\mathfrak {G}`|
|$\mathfrak {H}$|`\mathfrak {H}`|
|$\mathfrak {I}$|`\mathfrak {I}`|
|$\mathfrak {J}$|`\mathfrak {J}`|
|$\mathfrak {K}$|`\mathfrak {K}`|
|$\mathfrak {L}$|`\mathfrak {L}`|
|$\mathfrak {M}$|`\mathfrak {M}`|
|$\mathfrak {N}$|`\mathfrak {N}`|
|$\mathfrak {O}$|`\mathfrak {O}`|
|$\mathfrak {P}$|`\mathfrak {P}`|
|$\mathfrak {Q}$|`\mathfrak {Q}`|
|$\mathfrak {R}$|`\mathfrak {R}`|
|$\mathfrak {S}$|`\mathfrak {S}`|
|$\mathfrak {T}$|`\mathfrak {T}`|
|$\mathfrak {U}$|`\mathfrak {U}`|
|$\mathfrak {V}$|`\mathfrak {V}`|
|$\mathfrak {W}$|`\mathfrak {W}`|
|$\mathfrak {X}$|`\mathfrak {X}`|
|$\mathfrak {Y}$|`\mathfrak {X}`|
|$\mathfrak {Z}$|`\mathfrak {Z}`|

---
## 熱力學與化學
| 名稱 | 預覽 | 指令 |
| ---- | ---- | ---- |
| 標準狀態上標     | $^{\ominus}$     |  `^{\ominus}`     |



---


## 希臘字母
`\(希臘字母讀音拼音)` 
 >註: 首字母為大寫，對應大寫的希臘字母。
 >若使用衍生寫法，就要在前面加上var，如`\varpi`

---

|預覽|指令|
|----|----|
|$\alpha$|`\alpha`|
|$\Alpha$|`\Alpha`|
|$\beta$|`\beta`|
|$\Beta$|`\Beta`|
|$\gamma$|`\gamma`|
|$\Gamma$|`\Gamma`|
|$\delta$|`\delta`|
|$\Delta$|`\Delta`|
|$\epsilon$|`\epsilon`|
|$\Epsilon$|`\Epsilon`|
|$\varepsilon$|`\varepsilon`|
|$\zeta$|`\zeta`|
|$\Zeta$|`\Zeta`|
|$\eta$|`\Eta`|
|$\Theta$|`\Theta`|
|$\vartheta$|`\vartheta`|
|$\iota$|`\iota`|
|$\Iota$|`\Iota`|
|$\kappa$|`\Kappa`|
|$\lambda$|`\lambda`|
|$\Lambda$|`\Lambda`|
|$\mu$|`\mu`|
|$\Mu$|`\Mu`|
|$\nu$|`\nu`|
|$\Nu$|`\Nu`|
|$\xi$|`\Xi`|
|$\pi$|`\pi`|
|$\Pi$|`\Pi`|
|$\varpi$|`\varpi`|
|$\rho$|`\rho`|
|$\varrho$|`\varrho`|
|$\sigma$|`\sigma`|
|$\Sigma$|`\Sigma`|
|$\varsigma$|`\varsigma`|
|$\tau$|`\tau`|
|$\Tau$|`\Tau`|
|$\upsilon$|`\upsilon`|
|$\Upsilon$|`\Upsilon`|
|$\phi$|`\phi`|
|$\Phi$|`\Phi`|
|$\varphi$|`\varphi`|
|$\chi$|`\chi`|
|$\Chi$|`\Chi`|
|$\psi$|`\psi`|
|$\Psi$|`\Psi`|
|$\omega$|`\omega`|
|$\Omega$|`\Omega`|
|$\mho$|`\mho`|

----
## 數位邏輯的運算表達式

當我們討論數位邏輯時，常見的運算符號有與運算、或運算、非運算等邏輯運算符。這些運算符通常用來處理布林代數中的邏輯變數。下面是數位邏輯中常見運算符號的描述以及相對應的 LaTeX 寫法：

### 1. **AND 運算符 (與運算)**

- 符號：`∧` 或 `&`
- 也叫「與」運算，當兩個條件都為真時，結果才為真。
- LaTeX 寫法：
  ```latex
  A \land B
  ```
	
	或
  ```latex
  A \& B
  ```
	

### 2. **OR 運算符 (或運算)**

- 符號：`∨` 或 `|`
- 也叫「或」運算，當至少一個條件為真時，結果為真。
- LaTeX 寫法：
  ```latex
  A \lor B
  ```
  或
  ```latex
  A | B
  ```

### 3. **NOT 運算符 (非運算)**

- 符號：`¬` 或 `!`
- 也叫「非」運算，對一個布林變數取反。
- LaTeX 寫法：
  ```latex
  \neg A
  ```
  或
  ```latex
  \lnot A
  ```

### 4. **XOR 運算符 (異或運算)**

- 符號：`⊕`
- 也叫「異或」運算，當兩個條件不相同時，結果為真。
- LaTeX 寫法：
  ```latex
  A \oplus B
  ```

### 5. **NAND 運算符 (非與運算)**

- 符號：`↑`
- 也叫「非與」運算，當兩個條件都為真時，結果為假，其他情況為真。
- LaTeX 寫法：
  ```latex
  A \uparrow B
  ```

### 6. **NOR 運算符 (非或運算)**

- 符號：`↓`
- 也叫「非或」運算，當兩個條件都為假時，結果為真，其他情況為假。
- LaTeX 寫法：
  ```latex
  A \downarrow B
  ```

### 7. **IMPLICATION (蘊涵運算)**

- 符號：`→`
- 也叫「蘊涵」運算，如果左邊為真，則右邊必須為真，否則為假。
- LaTeX 寫法：
  ```latex
  A \to B
  ```

### 8. **BICONDITIONAL (雙向蘊涵運算)**

- 符號：`↔`
- 也叫「雙向蘊涵」，當兩邊的條件相同時，結果為真。
- LaTeX 寫法：
  ```latex
  A \leftrightarrow B
  ```

### 9. **DOUBLE NEGATION (雙重否定)**

- 符號：`¬(¬A)` 或 `!!A`
- 表示兩次否定，結果等於原始變數。
- LaTeX 寫法：
  ```latex
  \neg (\neg A)
  ```

### 10. **CONDITIONAL (條件運算)**

- 這是蘊涵的一種形式，表示「如果 A 為真，則 B 為真」。
- LaTeX 寫法：
  ```latex
  A \Rightarrow B
  ```

### 11. **Ternary Operator (三元運算符)**

- 符號：`? :`
- 三元運算符是一種條件運算符，可以根據條件返回不同的值。
- LaTeX 寫法：
  ```latex
  \text{if condition then value1 else value2}
  ```

### 12. **Majority Function (多數函數)**

- 符號：`M(A, B, C)`
- 這是當三個變數中有至少兩個為真時，結果為真。
- LaTeX 寫法：
  ```latex
  M(A, B, C)
  ```

### 13. **Equality (等式運算)**

- 符號：`≡`
- 表示兩個邏輯表達式是否相等。
- LaTeX 寫法：
  ```latex
  A \equiv B
  ```

### 14. **Complement (補集)**

- 符號：`A'` 或 `A^C`
- 表示一個變數的補集。
- LaTeX 寫法：
  ```latex
  A' \quad \text{or} \quad A^C
  ```

這些是數位邏輯中最常用的一些運算符的 LaTeX 表達式。這些運算符可用於表示不同的邏輯關係，並且在設計數位電路或進行布林代數計算時非常有用。

## 數位邏輯的邏輯閘符號繪製
>註: 此方法不適用於markdown或原生LaTex環境。

當你需要在 LaTeX 中繪製數位邏輯閘的符號，可以使用 `circuitikz` 這個套件，它能幫助你繪製各種邏輯閘的符號。以下是數位邏輯閘符號的繪製方法，以及對應的 LaTeX 代碼：

### 1. **AND Gate (與閘)**

- 符號：表示與操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[AND, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 2. **OR Gate (或閘)**

- 符號：表示或操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[OR, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 3. **NOT Gate (非閘)**

- 符號：表示非操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[inv, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 4. **NAND Gate (非與閘)**

- 符號：表示非與操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[NAND, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 5. **NOR Gate (非或閘)**

- 符號：表示非或操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[NOR, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 6. **XOR Gate (異或閘)**

- 符號：表示異或操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[XOR, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 7. **XNOR Gate (非異或閘)**

- 符號：表示非異或操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[XNOR, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 8. **Buffer Gate (緩衝閘)**

- 符號：表示緩衝操作的邏輯閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[buffer, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 9. **AND-OR-INVERT Gate (AOI Gate)**

- 符號：表示與-或-非閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[AOI, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 10. **OR-AND-INVERT Gate (OAI Gate)**

- 符號：表示或-與-非閘。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[OAI, height=1cm] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 11. **NOT-AND Gate (NAND Gate)**

- 符號：也可以看作是一個簡單的非閘與與閘組合。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[AND, height=1cm, invert input] (2,0);
  \end{circuitikz}
  \end{document}
  ```

### 12. **NOT-OR Gate (NOR Gate)**

- 符號：這是非閘與或閘的組合。
- LaTeX 代碼：
  ```latex
  \documentclass{article}
  \usepackage{circuitikz}
  \begin{document}
  \begin{circuitikz}
      \draw (0,0) gate[OR, height=1cm, invert input] (2,0);
  \end{circuitikz}
  \end{document}
  ```

---

- 在這些 LaTeX 代碼中，我們使用了 `circuitikz` 套件，這是繪製電路圖和邏輯閘最常用的套件之一。每個邏輯閘符號的 LaTeX 代碼是使用 `gate` 命令來表示的，後面跟著閘的名稱（例如 `AND`、`OR`、`XOR` 等）和其他選項（如高度、輸入/輸出等）。
- 若要顯示圖形，請將上述 LaTeX 代碼放入 LaTeX 編輯器中，並運行以生成對應的數位邏輯閘符號。

這些是最常見的數位邏輯閘及其 LaTeX 繪圖方式。


## 真值表

使用LaTex的陣列(`array`)功能就可以實現這種表格的效果，我們可以利用這種特性來繪製真值表。

範例如下:

```
\begin{array}{|c|c||c|} a & b & Z \\
\hline
0&1&1\\
1&0&1\\
0&0&1\\
0&1&0\\
\end{array}
```


$$
 \begin{array}{|c|c||c|} a & b & Z \\
 \hline
 0&1&1\\
 1&0&1\\
 0&0&1\\
 0&1&0\\
 \end{array}
 $$



## 使用LaTeX繪製卡諾圖（Karnaugh Map）的方法
>註: 此方法不適用於markdown或原生LaTex環境。

卡諾圖（Karnaugh Map，簡稱K-map）是一種可視化工具，用來簡化布爾代數表達式，廣泛應用於數位邏輯設計中。利用LaTeX繪製卡諾圖可以幫助工程師和學生直觀地理解邏輯簡化過程。LaTeX提供了幾種不同的方式來繪製卡諾圖，最常見的方式是使用 `tikz` 和 `pgfplots` 等宏包。

### 1. 安裝所需宏包

在使用LaTeX繪製卡諾圖之前，首先需要確保安裝了必要的宏包。最常用的宏包是 `tikz` 和 `circuitikz`，這些宏包提供了豐富的圖形繪製功能。

```latex
\usepackage{tikz}
```

如果使用 `pgfplots` 等其他圖形工具，也可以根據需要安裝對應的宏包。

### 2. 基本結構

LaTeX中繪製卡諾圖通常會用 `tikzpicture` 環境來繪製圖形。首先，需要決定卡諾圖的大小（例如，2變量、3變量或4變量的卡諾圖）以及每個單元格的位置。

#### 2變量卡諾圖（2x2）

以下是繪製2變量卡諾圖的一個簡單範例：

```latex
\documentclass{article}
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[scale=1]
    % 繪製卡諾圖的格線
    \draw (0, 0) grid (2, 2); % 2x2 grid

    % 標註行和列
    \node at (0.5, 2.5) {0};  % 標註行
    \node at (1.5, 2.5) {1};  % 標註行
    \node at (-0.5, 1.5) {0}; % 標註列
    \node at (-0.5, 0.5) {1}; % 標註列

    % 填充單元格的值 (示例: A'B'、AB'、A'B、AB)
    \node at (0.5, 1.5) {1};  % A'B
    \node at (1.5, 1.5) {0};  % AB
    \node at (0.5, 0.5) {1};  % A'B'
    \node at (1.5, 0.5) {0};  % AB'

\end{tikzpicture}

\end{document}
```

這段代碼創建了一個2x2的卡諾圖，其中每個格子表示布爾代數的真值。可以根據具體情況修改每個格子的數值。

#### 3變量卡諾圖（4x2）

以下是繪製3變量卡諾圖的範例，這需要一個4x2的網格，並且根據變量A、B、C的值來標註行列。

```latex
\documentclass{article}
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[scale=1]
    % 繪製卡諾圖的格線
    \draw (0, 0) grid (4, 2); % 4x2 grid

    % 標註行和列
    \node at (0.5, 2.5) {00}; % 標註列
    \node at (1.5, 2.5) {01};
    \node at (2.5, 2.5) {11};
    \node at (3.5, 2.5) {10};
    
    \node at (-0.5, 1.5) {0};  % 標註行
    \node at (-0.5, 0.5) {1};

    % 填充單元格的值
    \node at (0.5, 1.5) {1}; % A'B'C'
    \node at (1.5, 1.5) {0}; % A'B'C
    \node at (2.5, 1.5) {1}; % ABC'
    \node at (3.5, 1.5) {0}; % ABC
    \node at (0.5, 0.5) {1}; % A'BC'
    \node at (1.5, 0.5) {0}; % A'BC
    \node at (2.5, 0.5) {1}; % ABC'
    \node at (3.5, 0.5) {0}; % ABC
\end{tikzpicture}

\end{document}
```

### 3. 格子的填充和標註

在卡諾圖中，每個格子的數值代表對應變量組合的真值，可以使用 `node` 命令來標註這些值。根據不同的邏輯運算，這些格子可能會有不同的填充值。

### 4. 4變量卡諾圖（4x4）

對於4變量卡諾圖，通常使用4x4的網格來表示。下面是一個簡單的4變量卡諾圖範例：

```latex
\documentclass{article}
\usepackage{tikz}

\begin{document}

\begin{tikzpicture}[scale=1]
    % 繪製4x4的格線
    \draw (0, 0) grid (4, 4); % 4x4 grid

    % 標註行和列
    \node at (0.5, 4.5) {00}; 
    \node at (1.5, 4.5) {01};
    \node at (2.5, 4.5) {11};
    \node at (3.5, 4.5) {10};
    
    \node at (-0.5, 3.5) {00};
    \node at (-0.5, 2.5) {01};
    \node at (-0.5, 1.5) {11};
    \node at (-0.5, 0.5) {10};

    % 填充單元格的值
    \node at (0.5, 3.5) {1};
    \node at (1.5, 3.5) {0};
    \node at (2.5, 3.5) {1};
    \node at (3.5, 3.5) {0};
    
    \node at (0.5, 2.5) {0};
    \node at (1.5, 2.5) {1};
    \node at (2.5, 2.5) {0};
    \node at (3.5, 2.5) {1};
    
    \node at (0.5, 1.5) {1};
    \node at (1.5, 1.5) {1};
    \node at (2.5, 1.5) {0};
    \node at (3.5, 1.5) {1};
    
    \node at (0.5, 0.5) {0};
    \node at (1.5, 0.5) {1};
    \node at (2.5, 0.5) {0};
    \node at (3.5, 0.5) {0};
\end{tikzpicture}

\end{document}
```

### 5. 小技巧與建議

- **標註的對齊**：對於更複雜的卡諾圖，建議使用 `node` 的 `align` 屬性來確保標註整齊對齊。
- **顏色標註**：可以使用 `fill` 屬性來顯示哪些格子已經被選中，便於視覺化簡化過程。例如：

    ```latex
    \node[fill=yellow] at (0.5, 3.5) {1}; 
    ```

- **圓形或方形標註**：可以利用TikZ的 `draw` 功能來突出顯示某些格子，這在進行卡諾圖簡化時很有幫助。


---

## **電路圖**

>註: 此方法不適用於markdown或原生LaTex環境。

在 LaTeX 中繪製電路圖的主要工具也是 `circuitikz` 套件，它提供了簡單的語法來創建各種電子元件和連接，幫助用戶生成高品質的電路圖。以下將介紹 如何使用`circuitikz` 套件來繪製電路圖和各種電路符號。


### **1. 基本符號與元件**

`circuitikz` 套件包括多種常用的電路元件符號。這些符號可用於建立簡單或複雜的電路圖。

#### **1.1 電源與電壓源**

- **直流電源（V）**:
  ```latex
  \draw (0,0) to[V, v=12V] (0,4);
  ```
  用於表示直流電壓源，並可自訂電壓值。

- **交流電源（AC）**:
  ```latex
  \draw (0,0) to[AC, v=10V] (0,4);
  ```
  用於表示交流電源。

- **電池（B）**:
  ```latex
  \draw (0,0) to[B, v=1.5V] (0,4);
  ```
  用於表示具有固定電壓的電池。

#### **1.2 電阻（R）**

- **電阻（R）**:
  ```latex
  \draw (0,0) to[R, l=1k$\Omega$] (4,0);
  ```
  用於表示電阻元件。可自訂電阻值。

#### **1.3 電容（C）**

- **電容（C）**:
  ```latex
  \draw (0,0) to[C, l=10$\mu$F] (4,0);
  ```
  用於表示電容元件，並可自訂其容量。

#### **1.4 電感（L）**

- **電感（L）**:
  ```latex
  \draw (0,0) to[L, l=100mH] (4,0);
  ```
  用於表示電感元件，並可自訂其電感值。

#### **1.5 開關（S）**

- **開關（S）**:
  ```latex
  \draw (0,0) to[S, l=Switch] (4,0);
  ```
  用於表示開關。`l` 參數可用來設置開關的標籤。

#### **1.6 接地（GND）**

- **接地（GND）**:
  ```latex
  \draw (0,0) to[ground] (0,-1);
  ```
  用於表示接地元件。

---

### **2. 連接與布局技巧**

#### **2.1 直線與彎曲**

- **直線連接**：
  直接使用 `--` 來繪製直線。
  ```latex
  \draw (0,0) -- (4,0);
  ```

- **彎曲連接**：
  使用 `to` 指令可以設計彎曲的連接線。
  ```latex
  \draw (0,0) to[short] (2,0) to[R] (4,0);
  ```

#### **2.2 位置與偏移**

- **偏移電路元件位置**：
  通過改變坐標，將元件安置於不同位置。
  ```latex
  \draw (0,0) to[V] (0,4);
  \draw (4,0) to[R] (4,4);
  ```

#### **2.3 標註與註解**

- **標註點**：
  使用 `node` 可以為電路圖中的點添加標註。
  ```latex
  \draw (0,4) node[anchor=south] {V} -- (4,4);
  ```

- **標註元件**：
  使用 `node` 將文本標註添加到元件旁邊。
  ```latex
  \draw (0,0) to[R, l=1k$\Omega$] (4,0) node[midway, above] {R1};
  ```

#### **2.4 電流方向**

- **標註電流方向**：
  可以使用 `current` 來顯示電流方向。
  ```latex
  \draw (0,0) to[R] (4,0) node[midway, above] {I};
  ```

---

### **3. 常見電路圖示範**

#### **3.1 基本串聯電路**

```latex
\documentclass{article}
\usepackage{circuitikz}

\begin{document}

\begin{circuitikz}
    \draw
    (0,0) to[V, v=12V] (0,4)       % 電壓源
    to[R, l=1k$\Omega$] (4,4)      % 電阻
    to[C, l=10$\mu$F] (4,0)        % 電容
    -- (0,0);                       % 連接回起點
\end{circuitikz}

\end{document}
```

#### **3.2 串聯與並聯混合電路**

```latex
\documentclass{article}
\usepackage{circuitikz}

\begin{document}

\begin{circuitikz}
    \draw
    (0,0) to[V, v=12V] (0,4)      % 電壓源
    to[R, l=1k$\Omega$] (4,4)     % 電阻
    (4,4) to[C, l=10$\mu$F] (4,0)  % 電容並聯
    -- (0,0);                      % 連接回起點
\end{circuitikz}

\end{document}
```

---

### **4. 高級技巧與自定義**

#### **4.1 自定義元件**

用戶可以創建自己的電路元件。這需要使用 `circuitikz` 提供的庫，並根據需要自定義其形狀和行為。

#### **4.2 電路與時間圖**

`circuitikz` 可以與 `pgfplots` 結合，用於繪製電路的時間響應圖。這適用於需要顯示電流或電壓隨時間變化的情況。



