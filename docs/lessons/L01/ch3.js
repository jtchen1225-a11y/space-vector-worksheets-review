/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','三件事，一條線',['說說看：哪一步最容易錯？'],{head:'串起來',items:['表示：沿棱走，首尾相接；同始點相減',T`數量積：$\b{a}\cdot\b{b}=|\b{a}||\b{b}|\cos〈\b{a},\b{b}〉$`,T`長度：$|\b{a}|^{2}=\b{a}\cdot\b{a}$，先平方再開方`,T`垂直：$\b{a}\cdot\b{b}=0$`]}),
S.slider('3-2','動手看圖像','M 沿 CC₁ 移動，數量積會變嗎？',['棱長 2 的正方體。','先猜，再拖滑桿。'],(h)=>G3.explore(h,{
 sl:[{id:'t',label:'CM',min:0,max:2,step:.5,value:1}],
 draw:v=>{const F=G3.frame(Cu,{W:440,H:205,m:28,fs:34});const M=[0,2,v.t];return F.show(F.base(),F.vec('A','B',BLU,'',1),F.vec('A',M,RED,'',1),F.dot(M,RED))},
 fx:v=>T('$\\v{AM}\\cdot\\v{AB}=4$；$|\\v{AM}|='+Math.sqrt(8+v.t*v.t).toFixed(2)+'$')
})),
S.check('3-3','表示向量','連一連：表示向量',[T`$\v{AB}=\b{a}$，$\v{AD}=\b{b}$，$\v{AA1}=\b{c}$。`],T`$M$ 是上底的中心，$\v{BM}=$？`,[
 [T`$-\f{1}{2}\b{a}+\f{1}{2}\b{b}+\b{c}$`,T`$\v{BB1}+\f{1}{2}\v{B1D1}$`,1],
 [T`$\f{1}{2}\b{a}+\f{1}{2}\b{b}+\b{c}$`,T`程序錯誤：這是 $\v{AM}$`],
 [T`$-\b{a}+\b{b}+\b{c}$`,T`粗心失誤：漏了 $\f{1}{2}$`]
],{fig:miniPa}),
S.check('3-4','求長度','連一連：求長度',[T`$|\b{a}|=2$，$|\b{b}|=3$，夾角 120°。`],T`$|\b{a}+2\b{b}|=$？`,[
 [T`$2\r{7}$`,'平方是 4 − 12 ＋ 36 ＝ 28',1],
 [T`$2\r{13}$`,'程序錯誤：把 cos 120° 當成正數'],
 [T`$2\r{10}$`,'程序錯誤：漏了中間項']
]),
S.tasks('3-5','升級挑戰','升級挑戰：線性運算',[T`$\v{AB}=\b{a}$，$\v{AD}=\b{b}$，$\v{AA1}=\b{c}$。`],[
 [T`化簡 $3(\b{a}-2\b{b})-2(\b{a}-\b{b}+\b{c})$`,['先拆括號，負號要乘每一項。','再合併同類項。'],T`$\b{a}-4\b{b}-2\b{c}$`],
 [T`用 $\b{a},\b{b},\b{c}$ 表示：(1) $\v{BD1}$；(2) $\v{CA1}$`,[T`沿棱走：$B\to A\to D\to D_{1}$。`],T`(1) $-\b{a}+\b{b}+\b{c}$；(2) $-\b{a}-\b{b}+\b{c}$`],
 [T`求 $\v{AC1}+\v{BD1}+\v{CA1}+\v{DB1}$，並解釋 $\b{a},\b{b}$ 為甚麼消失`,null,T`$4\b{c}$：$\b{a},\b{b}$ 各有兩正兩負，互相抵消`]
],{fig:miniPa})
  ]));
})();
