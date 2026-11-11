/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20});
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:T`四棱錐 $P$-$ABCD$：底面是邊長 2 的正方形，$PA\perp$ 底面，$PA=2$，$A$ 為原點。求 $PB$ 與平面 $PCD$ 所成角的正弦。`,
 ans:T`平面 $PCD$ 的法向量 $(0,1,1)$，$\v{PB}=(2,0,-2)$，正弦是 $\f{1}{2}$`,
 rubric:{mastered:'法向量正確，用正弦並取絕對值 → 下一節複習 1.2.4 時直接做 C 層',partial:'法向量正確，但用了餘弦或漏了絕對值 → 下一節課首比較「線面角用正弦、面面角用餘弦」',notyet:'求不出法向量 → 課後小組重做 1.2.2 的求法向量，再做 4-1 A 層'},
 delayed:{when:'約一週後',q:T`四棱錐 $P$-$ABCD$：底面是邊長 2 的正方形，$PA\perp$ 底面，$PA=2$，$A$ 為原點。求 $PC$ 與平面 $PBD$ 所成角的正弦。`,ans:T`$\f{1}{3}$（法向量 $(1,1,1)$）`}
},{fig:miniPy}),
S.tally('5-2','我的程度','幫自己打分','我能用射影和法向量兩種方法求線面角'),
S.summary('5-3',null,['線面角：斜線與射影所成的角，0° 至 90°','幾何法：垂線 → 射影 → 直角三角形',T`向量法：$\sin\theta=|\cos〈\b{v},\b{n}〉|$`,'用正弦，是因為 v 與 n 的夾角和線面角互餘'])
  ]));
})();
