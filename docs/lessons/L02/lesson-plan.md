# L02　1.1.2 空間向量基本定理（複習課）

> 課型：**複習課**｜工作紙 1.1.2 複習簡報（共 8 份）｜教材範圍：1.1.2 空間向量基本定理。工作紙丙、戊兩關的題目全部收進第 3、4 階段（3-5、4-1、4-3、4-4），另加一頁跨情境題（4-5）；工作紙原設計 50 分鐘，這裏依複習課技能編成 40 分鐘，4-3、4-4 可擇一在課內做，另一頁留作功課。學生表現一律為「預期情況」，實際請依課堂證據調整。

## A. 課堂基本資料

- 年級：高中選修（相當於中五）
- 課題：空間向量基本定理
- 課時：40分鐘
- 課型：複習課
- 核心學習目標：不看筆記，能判斷向量共線、共面與四點共面，選定基底表示向量，並用基底計算長度與證明垂直
- 先備知識：1.1.2 新課與工作紙練習；1.1.1 線性運算與數量積
- 教學重點：共線、共面、基底三個概念的關係；表示法唯一
- 學習難點：共面的三個向量當作基底；係數和等於 1 的條件；求出平方忘了開方
- 本節刻意不教：坐標表示（1.1.3）

## B. 40分鐘教學流程表

| 時間 | 階段 | 教師活動 | 學生活動 | 分層支持 | 學習證據 | 對應投影片 |
|------|------|----------|----------|----------|----------|------------|
| 0–5 分鐘 | 複習目標＋概念提取 | 展示複習目標；用快問提取概念。 | 不看筆記作答。 | 快問不計分。 | 三道快問票數。 | 1-1 今天的目標、1-2 快問快答、1-3 快問二：基底、1-4 快問三：係數 |
| 5–12 分鐘 | 錯誤診斷 | 展示易錯解法，引導辨識錯在概念、程序或粗心。 | 找錯、辯論誰對。 | 基礎薄弱者先對照公式卡。 | 錯因解釋、2-3／2-4 票數。 | 2-1 抓錯偵探、2-2 再抓一次、2-3 誰是對的？、2-4 共面嗎？ |
| 12–22 分鐘 | 知識連結 | 引導學生把本單元概念串成網絡，比較不同方法。 | 操作互動圖、做連結題。 | C 層比較方法優劣。 | 3-3／3-4 票數、升級挑戰。 | 3-1 概念連連看、3-2 動手看圖像、3-3 點與平面、3-4 用基底表示、3-5 升級挑戰 |
| 22–35 分鐘 | 跨情境遷移＋巡視 | 安排換情境的綜合題並巡視。 | 獨立解情境題，自行設計條件。 | A／B／C 同頁，可換層。 | 巡視觀察表、解題過程。 | 4-1 立體圖闖關、4-2 有解嗎？、4-3 共面：全部題目、4-4 基底：全部題目、4-5 走出課本 |
| 35–40 分鐘 | 出口題＋自我評估 | 派發出口題、學生自評；總結。 | 獨立完成出口題、舉手自評。 | 出口題全班同題。 | 出口小紙條、自評票數。 | 5-1 出口挑戰、5-2 我的程度、5-3 核心知識小結 |

### 第 1 階段　0–5 分鐘　複習目標＋概念提取（簡報：熱身快問：你還記得多少？；螺旋：概念提取）

- 教師活動：展示複習目標；用快問提取概念。
- 學生活動：不看筆記作答。
- 教學資源：互動簡報 1-1 今天的目標、1-2 快問快答、1-3 快問二：基底、1-4 快問三：係數；學習單（handout.html）。
- 理解檢查：\(\boldsymbol{b}=\lambda\boldsymbol{a}\)（\(\boldsymbol{a}\neq\boldsymbol{0}\)），則 \(\boldsymbol{a},\boldsymbol{b}\)？；不共面的三個向量，可以作空間的一組？；平行六面體中，\(\overrightarrow{AC_1}=x\overrightarrow{AB}\) \(+y\overrightarrow{AD}+z\overrightarrow{AA_1}\)，則？
- 可能困難（預期情況）：概念錯誤：垂直是數量積為 0；概念錯誤：兩個向量一定共面；概念錯誤：法向量是垂直平面的向量
- 應對策略：先提示、後答案（重讀題目→相關概念→部分線索→關鍵步驟→必要時示範後換相近題再試）；票數超過三成選錯時，退回本階段前一頁重講。
- 支援提示：疲累或注意力不足：快問低壓力。

### 第 2 階段　5–12 分鐘　錯誤診斷（簡報：陷阱大搜查：錯在哪裏？；螺旋：錯誤診斷）

- 教師活動：展示易錯解法，引導辨識錯在概念、程序或粗心。
- 學生活動：找錯、辯論誰對。
- 教學資源：互動簡報 2-1 抓錯偵探、2-2 再抓一次、2-3 誰是對的？、2-4 共面嗎？；學習單（handout.html）。
- 理解檢查：\(\overrightarrow{OP}=\overrightarrow{OA}+\overrightarrow{OB}-\overrightarrow{OC}\)。甲：\(P\) 在平面 \(ABC\) 內。乙：不在。；\(\boldsymbol{a}+\boldsymbol{b}\)、\(\boldsymbol{b}+\boldsymbol{c}\)、\(\boldsymbol{a}-\boldsymbol{c}\) 共面嗎？
- 可能困難（預期情況）：概念錯誤：係數和是 1；概念錯誤：係數和是 1 時與 O 無關；概念錯誤：第三個可由前兩個表示；概念錯誤：\(\boldsymbol{a}+\boldsymbol{b}\) 與 \(\boldsymbol{a},\boldsymbol{b}\) 共面，基底要三個向量不共面。；粗心失誤：求出平方就停，忘了開方。
- 應對策略：先提示、後答案（重讀題目→相關概念→部分線索→關鍵步驟→必要時示範後換相近題再試）；票數超過三成選錯時，退回本階段前一頁重講。
- 支援提示：基礎薄弱：對照公式卡。

### 第 3 階段　12–22 分鐘　知識連結（簡報：把概念串起來；螺旋：知識連結）

- 教師活動：引導學生把本單元概念串成網絡，比較不同方法。
- 學生活動：操作互動圖、做連結題。
- 教學資源：互動簡報 3-1 概念連連看、3-2 動手看圖像、3-3 點與平面、3-4 用基底表示、3-5 升級挑戰；學習單（handout.html）。
- 理解檢查：\(3\overrightarrow{AP}=\)？；\(M,N\) 是 \(OA,BC\) 中點，\(\overrightarrow{MN}=\)？
- 可能困難（預期情況）：程序錯誤：符號錯；粗心失誤：多乘了 3；程序錯誤：始點、終點顛倒
- 應對策略：先提示、後答案（重讀題目→相關概念→部分線索→關鍵步驟→必要時示範後換相近題再試）；票數超過三成選錯時，退回本階段前一頁重講。
- 支援提示：能力較高：比較方法優劣。

### 第 4 階段　22–35 分鐘　跨情境遷移＋巡視（簡報：走出課本：換個情境也能用；螺旋：跨情境遷移）

- 教師活動：安排換情境的綜合題並巡視。
- 學生活動：獨立解情境題，自行設計條件。
- 教學資源：互動簡報 4-1 立體圖闖關、4-2 有解嗎？、4-3 共面：全部題目、4-4 基底：全部題目、4-5 走出課本；學習單（handout.html）。
- 理解檢查：\(\{\boldsymbol{a},\boldsymbol{b},\boldsymbol{c}\}\) 是基底。\(x\boldsymbol{a}+y\boldsymbol{b}=\boldsymbol{c}\) 有解嗎？
- 可能困難（預期情況）：概念錯誤：那樣三個向量就共面了；概念錯誤：那樣三個向量就共面了
- 應對策略：先提示、後答案（重讀題目→相關概念→部分線索→關鍵步驟→必要時示範後換相近題再試）；票數超過三成選錯時，退回本階段前一頁重講。
- 支援提示：動機不足：情境題提供選擇。

### 第 5 階段　35–40 分鐘　出口題＋自我評估（簡報：最後一關＋幫自己打分；螺旋：學習證據）

- 教師活動：派發出口題、學生自評；總結。
- 學生活動：獨立完成出口題、舉手自評。
- 教學資源：互動簡報 5-1 出口挑戰、5-2 我的程度、5-3 核心知識小結；學習單（handout.html）。
- 理解檢查：出口小紙條、自評票數。
- 可能困難（預期情況）：起步較慢、未能用手勢表態。
- 應對策略：先提示、後答案（重讀題目→相關概念→部分線索→關鍵步驟→必要時示範後換相近題再試）；票數超過三成選錯時，退回本階段前一頁重講。
- 支援提示：三類學生同題。

## C. 課堂練習

### 3-5 升級挑戰

| 層次 | 題目 | 答案 | 提示階梯 |
|------|------|------|----------|
| A層 基礎支持 | \(\boldsymbol{a},\boldsymbol{b}\) 不共線，\(\boldsymbol{c}=3\boldsymbol{a}-\boldsymbol{b}\)。\(\boldsymbol{a},\boldsymbol{b},\boldsymbol{c}\) 共面嗎？為甚麼？ | 共面：\(\boldsymbol{c}\) 是 \(\boldsymbol{a},\boldsymbol{b}\) 的組合 | 能寫成 \(x\boldsymbol{a}+y\boldsymbol{b}\) 的向量，與 \(\boldsymbol{a},\boldsymbol{b}\) 共面。 |
| B層 核心達標 | \(O\) 不在平面 \(ABC\) 內。\(P\) 在平面內嗎？(1) \(\overrightarrow{OP}=2\overrightarrow{OA}+\overrightarrow{OB}-2\overrightarrow{OC}\)；(2) \(\overrightarrow{OP}=\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}\) | (1) 在：\(\overrightarrow{AP}=\overrightarrow{AB}-2\overrightarrow{AC}\)；(2) 不在：係數和是 3 | 看係數和是否等於 1，或計算 \(\overrightarrow{AP}\)。 |
| C層 延伸挑戰 | \(\boldsymbol{a},\boldsymbol{b},\boldsymbol{c}\) 不共面。這三個向量共面嗎？(1) \(\boldsymbol{a}+\boldsymbol{b}\)，\(\boldsymbol{b}+\boldsymbol{c}\)，\(\boldsymbol{c}+\boldsymbol{a}\)；(2) \(\boldsymbol{a}+\boldsymbol{b}\)，\(\boldsymbol{b}-\boldsymbol{c}\)，\(\boldsymbol{a}+\boldsymbol{c}\) | (1) 不共面；(2) 共面：\(\boldsymbol{a}+\boldsymbol{c}\) \(=(\boldsymbol{a}+\boldsymbol{b})-(\boldsymbol{b}-\boldsymbol{c})\) | 不設提示，鼓勵先自行解釋 |

### 4-1 立體圖闖關（專注 7 分鐘）

| 層次 | 題目 | 答案 | 提示階梯 |
|------|------|------|----------|
| A層 基礎支持 | \(M\) 是 \(BC\) 中點。表示：(1) \(\overrightarrow{AB}\)；(2) \(\overrightarrow{OM}\)；(3) \(\overrightarrow{AM}\) | (1) \(\boldsymbol{b}-\boldsymbol{a}\)；(2) \(\frac{1}{2}(\boldsymbol{b}+\boldsymbol{c})\)；(3) \(-\boldsymbol{a}+\frac{1}{2}\boldsymbol{b}+\frac{1}{2}\boldsymbol{c}\) | (1) 終點減始點；(2) 中點公式。；(3) \(\overrightarrow{AM}=\overrightarrow{OM}-\overrightarrow{OA}\)。 |
| B層 核心達標 | 平行六面體中 \(\overrightarrow{AB}=\boldsymbol{a}\)，\(\overrightarrow{AD}=\boldsymbol{b}\)，\(\overrightarrow{AA_1}=\boldsymbol{c}\)，\(M\)、\(N\) 是 \(CC_{1}\)、\(A_{1}D_{1}\) 中點。表示 \(\overrightarrow{AM}\)、\(\overrightarrow{BN}\) | \(\overrightarrow{AM}=\boldsymbol{a}+\boldsymbol{b}+\frac{1}{2}\boldsymbol{c}\)；\(\overrightarrow{BN}=-\boldsymbol{a}+\frac{1}{2}\boldsymbol{b}+\boldsymbol{c}\) | \(\overrightarrow{AM}=\overrightarrow{AC}+\overrightarrow{CM}\)。；\(\overrightarrow{BN}=\overrightarrow{BA}+\overrightarrow{AA_1}+\overrightarrow{A_1N}\)。 |
| C層 延伸挑戰 | \(G\) 是 \(\triangle ABC\) 的重心，\(P\) 是 \(OG\) 中點。表示 \(\overrightarrow{AP}\) | \(-\frac{5}{6}\boldsymbol{a}+\frac{1}{6}\boldsymbol{b}+\frac{1}{6}\boldsymbol{c}\) | 不設提示，鼓勵先自行解釋 |

### 4-3 共面：全部題目

| 層次 | 題目 | 答案 | 提示階梯 |
|------|------|------|----------|
| A層 基礎支持 | \(\overrightarrow{MP}=2\overrightarrow{MA}-\overrightarrow{MB}\)，則 \(M,A,B,P\) 四點有甚麼關係？ | 四點共面 | \(\overrightarrow{MP}\) 是 \(\overrightarrow{MA},\overrightarrow{MB}\) 的組合。 |
| B層 核心達標 | 四面體 \(ABCD\) 中，\(E,F,G,H\) 是 \(AB,BC,CD,DA\) 的中點。證明四點共面 | \(\overrightarrow{EG}=\overrightarrow{EF}+\overrightarrow{FG}=\overrightarrow{EF}+\overrightarrow{EH}\)，所以共面 | \(\overrightarrow{EH}\) 與 \(\overrightarrow{FG}\) 都等於 \(\frac{1}{2}\overrightarrow{BD}\)。 |
| C層 延伸挑戰 | \(\overrightarrow{OP}=x\overrightarrow{OA}+y\overrightarrow{OB}+z\overrightarrow{OC}\) 且 \(x+y+z=1\)。證明 \(P\) 在平面 \(ABC\) 內 | 代入 \(x=1-y-z\)，得 \(\overrightarrow{AP}=y\overrightarrow{AB}+z\overrightarrow{AC}\) | 不設提示，鼓勵先自行解釋 |

### 4-4 基底：全部題目

| 層次 | 題目 | 答案 | 提示階梯 |
|------|------|------|----------|
| A層 基礎支持 | \(\{\boldsymbol{a},\boldsymbol{b},\boldsymbol{c}\}\) 是基底，\(x\boldsymbol{a}+y\boldsymbol{b}+z\boldsymbol{c}=2\boldsymbol{a}-\boldsymbol{c}\)，求 \(x,y,z\) | \(x=2,y=0,z=-1\) | 表示法唯一：兩邊對應係數相等。 |
| B層 核心達標 | 平行六面體中 \(AB=AD=1\)，\(AA_{1}=2\)，\(\angle BAD=90^\circ \)，\(\angle BAA_{1}=\angle DAA_{1}=60^\circ \)。求 \(\vert \overrightarrow{AC_1}\vert \) | \(\sqrt{10}\) | \(\overrightarrow{AC_1}=\boldsymbol{a}+\boldsymbol{b}+\boldsymbol{c}\)，先平方。；\(\boldsymbol{a}\cdot\boldsymbol{b}=0\)，\(\boldsymbol{a}\cdot\boldsymbol{c}=\boldsymbol{b}\cdot\boldsymbol{c}=1\)。 |
| C層 延伸挑戰 | 正四面體 \(ABCD\) 棱長 1，以 \(\{\overrightarrow{AB},\overrightarrow{AC},\overrightarrow{AD}\}\) 為基底，證明 \(AB\perp CD\) | \(\overrightarrow{AB}\cdot\overrightarrow{CD}\) \(=\overrightarrow{AB}\cdot\overrightarrow{AD}-\overrightarrow{AB}\cdot\overrightarrow{AC}\) \(=\frac{1}{2}-\frac{1}{2}=0\) | 不設提示，鼓勵先自行解釋 |

### 4-5 走出課本

| 層次 | 題目 | 答案 | 提示階梯 |
|------|------|------|----------|
| A層 基礎支持 | 三條腿不共面。位置 \(\boldsymbol{p}=2\boldsymbol{a}+\boldsymbol{b}-\boldsymbol{c}\) 還有第二種寫法嗎？ | 沒有：基底的表示法唯一 | 想想基底的性質。 |
| B層 核心達標 | 三條腿長度都是 1，兩兩成 60°。求 \(\vert \boldsymbol{a}+\boldsymbol{b}+\boldsymbol{c}\vert \) | \(\sqrt{6}\) | 先平方：三個平方項，三個交叉項。 |
| C層 延伸挑戰 | 為甚麼三腳架的三條腿不能在同一個平面內？用基底解釋 | 三條腿共面，就撐不起平面以外的方向 | 不設提示，鼓勵先自行解釋 |

### 巡視觀察表（也印在 handout.html 的教師版）

| 觀察重點（錯誤類型） | 人數 | 用於錯誤分析 |
|------|------|------|
| 始點、終點顛倒（程序） |  | ☐ |
| 中點漏了 ½（粗心） |  | ☐ |
| 重心的係數寫錯（程序） |  | ☐ |
| 其他： |  | ☐ |

### 不同學生的支援

| 學生情況 | 本節做法 |
|------|------|
| 基礎薄弱 | 從 A 層與提示階梯開始，先確認先備知識地圖中的舊知識；成功後逐步減少提示，不長期只做低層次題。 |
| 動機不足 | 任務短而明確、可自選層次、先猜後驗，讓學生看到可達成的進步；不等同懶惰。 |
| 疲累或注意力不足 | 每段都有短回應（手勢、拖滑桿）；任務分段；個別關心，持續異常疲倦依校方程序跟進，不當成紀律問題。 |
| 能力較高 | 做 C 層的解釋、比較、推理與遷移；不固定安排為其他學生的助手。 |

## D. 典型錯誤分析

以下均為「預期錯誤」（未取自真實學生作答），教師可換成當堂收集、去識別化的例子。

### 2-1 抓錯偵探：這組能作基底嗎？

- 題目：\(\boldsymbol{a},\boldsymbol{b}\) 不共線。\(\{\boldsymbol{a},\boldsymbol{b},\boldsymbol{a}+\boldsymbol{b}\}\) 能作基底嗎？
- 錯誤示例：三個向量各不相同，也互不共線 → 所以可以作基底（錯在第 2 步）
- 可能原因：概念錯誤：\(\boldsymbol{a}+\boldsymbol{b}\) 與 \(\boldsymbol{a},\boldsymbol{b}\) 共面，基底要三個向量不共面。
- 診斷問題：這個解法哪一步開始出現問題？為甚麼這樣計算不正確？怎樣檢查答案是否合理？
- 教師引導方式：不公開學生身份；先讓學生指出步驟，再追問成因，最後由學生修正。
- 正確做法：不能作基底
- 修正後練習：三條腿長度都是 1，兩兩成 60°。求 \(\vert \boldsymbol{a}+\boldsymbol{b}+\boldsymbol{c}\vert \)

### 2-2 再抓一次：做完了嗎？

- 題目：\(\boldsymbol{a},\boldsymbol{b},\boldsymbol{c}\) 長度都是 2，兩兩成 60°，\(\overrightarrow{MN}\) \(=\frac{1}{2}(\boldsymbol{b}+\boldsymbol{c}-\boldsymbol{a})\)，求 \(\vert \overrightarrow{MN}\vert \)。
- 錯誤示例：\(\vert \overrightarrow{MN}\vert ^{2}\) \(=\frac{1}{4}(12+4-4-4)\) \(=2\) → 所以 \(\vert \overrightarrow{MN}\vert =2\)（錯在第 2 步）
- 可能原因：粗心失誤：求出平方就停，忘了開方。
- 診斷問題：這個解法哪一步開始出現問題？為甚麼這樣計算不正確？怎樣檢查答案是否合理？
- 教師引導方式：不公開學生身份；先讓學生指出步驟，再追問成因，最後由學生修正。
- 正確做法：\(\vert \overrightarrow{MN}\vert =\sqrt{2}\)
- 修正後練習：三條腿長度都是 1，兩兩成 60°。求 \(\vert \boldsymbol{a}+\boldsymbol{b}+\boldsymbol{c}\vert \)

## E. 出口題及評估

- 出口題：四面體 OABC 中，\(M\) 是 \(AB\) 中點，\(N\) 在 \(OC\) 上，\(ON=2NC\)。(1) 用 \(\overrightarrow{OA},\overrightarrow{OB},\overrightarrow{OC}\) 表示 \(\overrightarrow{MN}\)；(2) \(\overrightarrow{MN},\overrightarrow{OA},\overrightarrow{OB}\) 共面嗎？
- 參考答案：(1) \(-\frac{1}{2}\overrightarrow{OA}-\frac{1}{2}\overrightarrow{OB}+\frac{2}{3}\overrightarrow{OC}\)；(2) 不共面：\(\overrightarrow{OC}\) 的係數不是 0
- 時間：2～3 分鐘，獨立完成。

| 結果 | 判準及下一節安排 |
|------|------|
| 已掌握 | 兩小題全對並說出理由 → 下一節複習 1.1.3 時直接做 C 層 |
| 部分掌握 | 表示正確但共面理由不清，或分點係數有錯 → 下一節課首做一題「分點表示」 |
| 尚未掌握 | 未能寫出 OM 或 ON → 課後小組在四面體模型上走路線，重做 4-1 A 層 |

## F. 課後反思（上課後由教師依真實證據填寫）

- 本節課最有效的設計：
- 學生最常見的困難：
- 需要個別跟進的學生：
- 下一節課的調整：

## G. 螺旋設計與學習追蹤

**本課型路徑**：知識整合螺旋：概念提取 → 錯誤診斷 → 知識連結 → 跨情境遷移

| 時間 | 階段 | 螺旋位置 |
|------|------|------|
| 0–5 分鐘 | 複習目標＋概念提取 | 概念提取 |
| 5–12 分鐘 | 錯誤診斷 | 錯誤診斷 |
| 12–22 分鐘 | 知識連結 | 知識連結 |
| 22–35 分鐘 | 跨情境遷移＋巡視 | 跨情境遷移 |
| 35–40 分鐘 | 出口題＋自我評估 | 學習證據 |

### 1. 先備知識地圖

| 舊知識 | 本課怎樣用 | 怎樣確認（哪一頁或哪一題） | 不足時的補救 |
|------|------|------|------|
| 共線向量 | 共面、基底的起點 | 1-2 快問一 | 畫兩支同方向的箭 |
| 基底的定義 | 表示空間向量 | 1-3 快問二 | 回到 3-1 概念連連看 |
| 用三條棱表示向量 | 基底表示 | 1-4 快問三 | 在平行六面體上沿棱走一次 |

### 2. 螺旋深化路徑

- 學生已經理解：已分別練過共面判斷和基底表示。
- 本次新增的理解：看出層次：共線（一個向量）→ 共面（兩個向量）→ 基底（三個向量）；每一層都是「能否用前面的向量表示」。
- 之後會延伸到：1.1.3 取單位正交基底，係數就是坐標。

### 3. 分層學習任務

| 學生 | 任務層 | 支持方式 | 完成後 |
|------|------|------|------|
| 基礎薄弱 | A 層 | 提示階梯、附圖與第一步線索 | 嘗試 B 層 |
| 一般 | B 層 | 必要時看提示 | 嘗試 C 層 |
| 能力較高 | C 層 | 少提示，要求解釋或比較 | 自編變式題 |

分層指任務與支持不同，不是固定學生標籤；學生可依表現隨時換層。

### 4. 間隔重現計劃

| 概念 | 何時再出現 | 形式（改變題目或情境） |
|------|------|------|
| 用基底表示向量 | 下一節（1.1.3） | 係數改稱坐標 |
| 分點與共面 | 約一週後 | 延遲檢測：重心 |
| 用基底證垂直 | 約一個月後（1.2.1） | 改用方向向量 |

### 5. 學習證據追蹤

- 出口題（當堂）：見 E 節。
- 延遲檢測（約一週後，不提前通知、不先複習、不計分）：四面體 \(OABC\) 中 \(\overrightarrow{OA}=\boldsymbol{a}\)，\(\overrightarrow{OB}=\boldsymbol{b}\)，\(\overrightarrow{OC}=\boldsymbol{c}\)，\(G\) 是 \(\triangle OAB\) 的重心。表示 \(\overrightarrow{CG}\)，並判斷 \(\overrightarrow{CG},\boldsymbol{a},\boldsymbol{b}\) 是否共面。　答案：\(\frac{1}{3}\boldsymbol{a}+\frac{1}{3}\boldsymbol{b}-\boldsymbol{c}\)；不共面

| 出口題 | 延遲檢測 | 判斷 | 跟進 |
|------|------|------|------|
| 已掌握 | 已掌握 | 真正掌握 | 進入更高層次任務 |
| 已掌握 | 未掌握 | 短暫學會 | 增加間隔重現，改變情境再練 |
| 未掌握 | 已掌握 | 延後學會 | 了解後續哪些安排有效 |
| 未掌握 | 未掌握 | 尚未掌握 | 找出成因，小組或個別重建概念 |

## 教案品質檢查

- [x] 是否具有明確、可觀察的學習目標？
- [x] 各教學階段的總時間是否為40分鐘？
- [x] 是否讓不同程度學生都有明確任務？
- [x] 是否設計至少兩個理解檢查點？
- [x] 是否安排學生獨立思考及解題？
- [x] 是否預測典型數學錯誤？
- [x] 是否提供分層支持？
- [x] 是否包含有效的出口題？
- [x] 是否說明如何利用學習證據調整教學？
- [x] 是否考慮教師實際工作量及課堂可行性？
- [x] 簡報是否至少 25 頁（含階段頁），最後一頁是否為本節核心知識小結？
- [x] 是否標明各階段在螺旋路徑的位置？
- [x] 是否有先備知識地圖？
- [x] 是否說明本次比過去增加了哪些新理解？
- [x] 是否規劃間隔重現？
- [x] 是否設計延遲檢測，能分辨短暫學會與真正掌握？
