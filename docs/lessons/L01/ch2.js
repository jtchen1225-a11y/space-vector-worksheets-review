/* ============ 第 2 階段　5–12 分鐘　陷阱大搜查：錯在哪裏？（教案：錯誤診斷；螺旋：錯誤診斷） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–12 分鐘", "陷阱大搜查：錯在哪裏？", C, [
S.mistake('2-1','抓錯偵探','抓錯偵探：夾角是多少？',null,{q:T`棱長 2 的正方體，求 $\v{AB}\cdot\v{BA1}$。`,steps:['兩個向量的夾角是 45°',T`$2\times2\r{2}\times\cos45°=4$`],wrong:0,why:'概念錯誤：兩個向量沒有移到同一始點，夾角其實是 135°。',fix:T`$2\times2\r{2}\times\cos135°=-4$`},{fig:miniCu}),
S.mistake('2-2','再抓一次','再抓一次：括號可以搬嗎？',null,{q:T`$(\b{a}\cdot\b{b})\b{c}$ 可以改寫成 $\b{a}(\b{b}\cdot\b{c})$ 嗎？`,steps:['數的乘法可以隨意換括號','所以兩邊相等'],wrong:0,why:T`概念錯誤：$\b{a}\cdot\b{b}$ 是一個數，左邊與 $\b{c}$ 共線，右邊與 $\b{a}$ 共線。`,fix:'兩邊一般不相等：數量積不能這樣換括號'}),
S.check('2-3','誰是對的？','誰是對的？展開',['先自己展開一次。'],T`甲：$|\b{a}+2\b{b}|^{2}=\b{a}^{2}+4\b{b}^{2}$。乙：還要加 $4\b{a}\cdot\b{b}$。`,[
 ['乙對','展開有中間項',1],
 ['甲對','程序錯誤：漏了中間項'],
 ['兩人都錯','概念錯誤：乙的說法正確']
]),
S.check('2-4','分配律','這樣展開對嗎？',[T`$|\b{a}|=3$，$|\b{b}|=4$，夾角 60°。`],T`$\b{a}\cdot(\b{a}+\b{b})=$？`,[
 ['15','9 ＋ 6',1],
 ['21','程序錯誤：數量積忘了乘餘弦'],
 ['6',T`程序錯誤：漏了 $\b{a}\cdot\b{a}$`]
])
  ]));
})();
