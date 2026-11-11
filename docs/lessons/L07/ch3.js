/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Bx = G3.box(2,2,1), miniBx = G3.mini(Bx);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20});
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','兩種方法，互相印證',['說說看：甚麼時候用哪一種？'],{head:'連起來',items:['幾何法：棱上取點 → 兩面各作垂線 → 平面角','向量法：兩個法向量 → 餘弦取絕對值','所成的角不大於 90°；二面角可以是鈍角','射影面積 ＝ 原面積 × cos θ']}),
S.slider('3-2','動手看圖像','長方體變高，二面角怎樣變？',[T`$DA=DC=2$，高 $DD_{1}$ 可以改變。`,T`看二面角 $C_{1}$-$BD$-$C$。`],(h)=>G3.explore(h,{
 sl:[{id:'hh',label:'高',min:.5,max:3,step:.5,value:1}],
 draw:v=>{const B=G3.box(2,2,v.hh),F=G3.frame(B,{W:440,H:205,m:28,fs:34,extra:[[0,0,3],[2,2,3],[2,0,3],[0,2,3]]}),O=G3.mid(B.V.B,B.V.D);return F.show(F.base({only:['B','D','C','C1']}),F.fill(['D','B','C1'],'rgba(37,99,235,.22)'),F.seg('C',O,GRN,4),F.seg('C1',O,RED,4),F.dot(O,RED))},
 fx:v=>{const t=v.hh/Math.SQRT2;return T('$\\tan\\theta='+t.toFixed(2)+'$，$\\theta='+(Math.atan(t)*180/Math.PI).toFixed(1)+'°$')}
})),
S.check('3-3','幾何法','連一連：幾何法',[T`$DA=DC=2$，$DD_{1}=1$。`],T`二面角 $C_{1}$-$BD$-$C$ 的正切是？`,[
 [T`$\f{\r{2}}{2}$`,T`$CC_{1}\div CO=1\div\r{2}$`,1],
 [T`$\r{2}$`,'程序錯誤：對邊、鄰邊對調'],
 [T`$\f{1}{2}$`,T`程序錯誤：把 $CO$ 當成 2`]
],{fig:miniBx}),
S.check('3-4','向量法','連一連：向量法',[T`同一個長方體，$D$ 為原點。`],T`平面 $C_{1}BD$ 的一個法向量是？`,[
 [T`$(-1,1,-2)$`,T`垂直 $\v{DB}=(2,2,0)$ 和 $\v{DC1}=(0,2,1)$`,1],
 [T`$(1,1,-2)$`,T`程序錯誤：不垂直 $\v{DB}$`],
 [T`$(0,0,1)$`,'概念錯誤：這是底面的法向量']
],{fig:miniBx}),
S.tasks('3-5','升級挑戰','升級挑戰：二面角的平面角',['A 層看圖：棱長 2 的正方體。'],[
 [T`求二面角：(1) $D_{1}$-$AB$-$D$；(2) $B$-$AA_{1}$-$D$`,['在棱上找一點，兩個面內各作一條垂直棱的射線。'],T`(1) $\angle D_{1}AD=45°$；(2) $\angle BAD=90°$`],
 [T`四棱錐 $P$-$ABCD$：底面是正方形，$PA\perp$ 底面，$PA=AB=2$。求：(1) 二面角 $P$-$CD$-$A$；(2) 二面角 $P$-$BD$-$A$ 的正切`,[T`(1) $AD\perp CD$，$PD\perp CD$。`,T`(2) 取 $BD$ 中點 $O$，平面角是 $\angle POA$。`],T`(1) $\angle PDA=45°$；(2) $\r{2}$`],
 [T`二面角 $\alpha$-$l$-$\beta$ 是 60°，$\alpha$ 內一點 $P$ 到棱的距離是 4。求 $P$ 到平面 $\beta$ 的距離`,null,T`$4\sin60°=2\r{3}$`]
],{fig:miniCu})
  ]));
})();
