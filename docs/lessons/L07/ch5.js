/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Bx = G3.box(2,2,1), miniBx = G3.mini(Bx);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20});
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:T`長方體 $DA=1$，$DC=DD_{1}=2$（$D$ 為原點）。求平面 $A_{1}BD$ 的一個法向量，以及它與平面 $ABCD$ 所成角的餘弦。`,
 ans:T`法向量 $(-2,1,1)$；餘弦是 $\f{\r{6}}{6}$`,
 rubric:{mastered:'法向量正確，餘弦取正值並化簡 → 下一節複習 1.2.5 時直接做 C 層',partial:'法向量正確，但餘弦取負值或化簡錯 → 下一節課首做一題「所成的角取絕對值」',notyet:'求不出法向量 → 課後小組重做 3-4，再做 4-1 A 層'},
 delayed:{when:'約一週後',q:T`長方體 $DA=1$，$DC=DD_{1}=2$（$D$ 為原點）。求平面 $A_{1}BD$ 與平面 $CDD_{1}C_{1}$ 所成角的餘弦。`,ans:T`$\f{\r{6}}{3}$（法向量 $(-2,1,1)$ 與 $(1,0,0)$）`}
}),
S.tally('5-2','我的程度','幫自己打分','我能作平面角，並用法向量求兩平面所成的角'),
S.summary('5-3',null,['平面角：頂點在棱上，兩條射線分別在兩個面內並垂直棱',T`所成的角：$\cos\theta=|\cos〈\b{n}_{1},\b{n}_{2}〉|$`,'所成的角不大於 90°；二面角要看圖取相等或互補','兩種方法求同一個角，可以互相檢查'])
  ]));
})();
