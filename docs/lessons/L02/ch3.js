/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({O:[.75,.9,1.7],A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0]},[['A','B','C'],['A','B','O'],['B','C','O'],['C','A','O']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','一層一層往上',['說說看：每一層多了甚麼？'],{head:'三層關係',items:['共線：一個向量是另一個的倍數','共面：一個向量可用另外兩個表示','基底：三個不共面的向量，可表示所有向量','表示法唯一：可以比較係數']}),
S.slider('3-2','動手看圖像','P 何時落在平面 ABC 上？',[T`$\v{OP}$ $=k(\v{OA}+\v{OB}+\v{OC})$`,'係數和是 3k。'],(h)=>{const V=Te.V,s3=G3.add(G3.add(G3.sbt(V.A,V.O),G3.sbt(V.B,V.O)),G3.sbt(V.C,V.O)),at=s=>G3.add(V.O,G3.mul(s3,s/3));G3.explore(h,{
 sl:[{id:'s',label:'係數和',min:.5,max:1.5,step:.25,value:.5}],
 draw:v=>{const F=G3.frame(Te,{W:440,H:205,m:28,fs:34,extra:[at(1.5)]});const P=at(v.s);return F.show(F.base(),F.fill(['A','B','C']),F.seg('O',P,RED,4),F.dot(P,RED))},
 fx:v=>T('係數和 $='+v.s+'$：'+(v.s===1?'$P$ 在平面 $ABC$ 內':'$P$ 不在平面內'))
})}),
S.check('3-3','點與平面','連一連：重心',[T`$3\v{OP}$ $=\v{OA}+\v{OB}+\v{OC}$。`],T`$3\v{AP}=$？`,[
 [T`$\v{AB}+\v{AC}$`,T`$P$ 在平面 $ABC$ 內（重心）`,1],
 [T`$\v{AB}-\v{AC}$`,'程序錯誤：符號錯'],
 [T`$3\v{AB}+3\v{AC}$`,'粗心失誤：多乘了 3']
]),
S.check('3-4','用基底表示','連一連：用基底表示',[T`$\v{OA}=\b{a}$，$\v{OB}=\b{b}$，$\v{OC}=\b{c}$。`],T`$M,N$ 是 $OA,BC$ 中點，$\v{MN}=$？`,[
 [T`$\f{1}{2}(\b{b}+\b{c}-\b{a})$`,T`$\v{ON}-\v{OM}$`,1],
 [T`$\f{1}{2}(\b{a}-\b{b}-\b{c})$`,'程序錯誤：始點、終點顛倒'],
 [T`$\b{b}+\b{c}-\b{a}$`,T`粗心失誤：漏了 $\f{1}{2}$`]
],{fig:miniTe}),
S.tasks('3-5','升級挑戰','升級挑戰：共面向量定理',['能寫成另外兩個的組合嗎？'],[
 [T`$\b{a},\b{b}$ 不共線，$\b{c}=3\b{a}-\b{b}$。$\b{a},\b{b},\b{c}$ 共面嗎？為甚麼？`,[T`能寫成 $x\b{a}+y\b{b}$ 的向量，與 $\b{a},\b{b}$ 共面。`],T`共面：$\b{c}$ 是 $\b{a},\b{b}$ 的組合`],
 [T`$O$ 不在平面 $ABC$ 內。$P$ 在平面內嗎？(1) $\v{OP}=2\v{OA}+\v{OB}-2\v{OC}$；(2) $\v{OP}=\v{OA}+\v{OB}+\v{OC}$`,[T`看係數和是否等於 1，或計算 $\v{AP}$。`],T`(1) 在：$\v{AP}=\v{AB}-2\v{AC}$；(2) 不在：係數和是 3`],
 [T`$\b{a},\b{b},\b{c}$ 不共面。這三個向量共面嗎？(1) $\b{a}+\b{b}$，$\b{b}+\b{c}$，$\b{c}+\b{a}$；(2) $\b{a}+\b{b}$，$\b{b}-\b{c}$，$\b{a}+\b{c}$`,null,T`(1) 不共面；(2) 共面：$\b{a}+\b{c}$ $=(\b{a}+\b{b})-(\b{b}-\b{c})$`]
])
  ]));
})();
