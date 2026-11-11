/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Bx = G3.box(1,2,2), miniBx = G3.mini(Bx);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:T`棱長 2 的正方體（$D$ 為原點），$E$、$F$ 是 $AB$、$CC_{1}$ 的中點。求 $EF$ 與 $A_{1}D$ 所成角的餘弦。`,
 ans:T`$\v{EF}=(-2,1,1)$，$\v{A1D}=(-2,0,-2)$，餘弦是 $\f{\r{3}}{6}$`,
 rubric:{mastered:'兩個向量正確，餘弦取正值並化簡 → 下一節複習 1.2.2 時直接做 C 層',partial:'向量正確，但餘弦取了負值或計算有誤 → 下一節課首比較「向量夾角與直線所成的角」',notyet:'寫不出兩個向量的坐標 → 課後小組重做 3-3，再做 3-5 B 層'},
 delayed:{when:'約一週後',q:T`棱長 2 的正方體（$D$ 為原點），$M$ 是 $B_{1}C_{1}$ 中點。求 $AM$ 與 $BD$ 所成角的餘弦。`,ans:T`$\f{\r{2}}{6}$`}
},{fig:miniCu}),
S.tally('5-2','我的程度','幫自己打分','我能用方向向量判斷位置關係，並求所成的角'),
S.summary('5-3',null,['直線 ＝ 一點 ＋ 方向向量','方向向量平行：再檢查一點，分清平行與重合','不平行的兩條直線：相交或異面',T`所成的角：$\cos\theta=|\cos〈\b{v}_{1},\b{v}_{2}〉|$`])
  ]));
})();
