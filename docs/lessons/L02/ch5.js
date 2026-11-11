/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({O:[.75,.9,1.7],A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0]},[['A','B','C'],['A','B','O'],['B','C','O'],['C','A','O']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:T`四面體 OABC 中，$M$ 是 $AB$ 中點，$N$ 在 $OC$ 上，$ON=2NC$。(1) 用 $\v{OA},\v{OB},\v{OC}$ 表示 $\v{MN}$；(2) $\v{MN},\v{OA},\v{OB}$ 共面嗎？`,
 ans:T`(1) $-\f{1}{2}\v{OA}-\f{1}{2}\v{OB}+\f{2}{3}\v{OC}$；(2) 不共面：$\v{OC}$ 的係數不是 0`,
 rubric:{mastered:'兩小題全對並說出理由 → 下一節複習 1.1.3 時直接做 C 層',partial:'表示正確但共面理由不清，或分點係數有錯 → 下一節課首做一題「分點表示」',notyet:'未能寫出 OM 或 ON → 課後小組在四面體模型上走路線，重做 4-1 A 層'},
 delayed:{when:'約一週後',q:T`四面體 $OABC$ 中 $\v{OA}=\b{a}$，$\v{OB}=\b{b}$，$\v{OC}=\b{c}$，$G$ 是 $△OAB$ 的重心。表示 $\v{CG}$，並判斷 $\v{CG},\b{a},\b{b}$ 是否共面。`,ans:T`$\f{1}{3}\b{a}+\f{1}{3}\b{b}-\b{c}$；不共面`}
},{fig:miniTe}),
S.tally('5-2','我的程度','幫自己打分','我能判斷共面，並用基底表示向量'),
S.summary('5-3',null,['共線 → 共面 → 基底：看能否用前面的向量表示',T`$P$ 在平面 $ABC$ 內：係數和 $x+y+z=1$`,'基底：三個向量不共面；表示法唯一','用基底求長度：表示 → 平方展開 → 開方'])
  ]));
})();
