/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:T`棱長 2 的正方體中，$E$ 是 $CC_{1}$ 中點。(1) 用 $\v{AB},\v{AD},\v{AA1}$ 表示 $\v{AE}$；(2) 求 $\v{AE}\cdot\v{BD}$ 和 $|\v{AE}|$。`,
 ans:T`(1) $\v{AB}+\v{AD}+\f{1}{2}\v{AA1}$；(2) 0，3`,
 rubric:{mastered:'兩小題全對 → 下一節複習 1.1.2 時直接做 C 層',partial:'表示正確，但數量積或長度有錯 → 下一節課首再做一題「長度先平方」',notyet:'未能用三條棱表示向量 → 課後小組用實物正方體重做 3-3、3-5 A 層'},
 delayed:{when:'約一週後',q:T`棱長 2 的正方體中，$F$ 是 $A_{1}D_{1}$ 中點。求 $\v{BF}\cdot\v{AA1}$ 和 $|\v{BF}|$。`,ans:'4；3'}
},{fig:miniCu}),
S.tally('5-2','我的程度','幫自己打分','我能不看筆記表示向量，並用數量積求長度'),
S.summary('5-3',null,['表示：沿棱走；差向量指向被減數的終點','夾角：先平移到同一始點，留意鈍角','數量積是一個數：可以分配，不能換括號','求長度：先平方、展開，最後開方'])
  ]));
})();
