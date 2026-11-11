/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb, T} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20});
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','兩條路，同一個角',['說說看：兩條路在哪裏相遇？'],{head:'兩種方法',items:['幾何法：找垂線 → 連射影 → 解直角三角形','向量法：方向向量 → 法向量 → 正弦','相遇：v 與 n 的夾角和線面角互餘','線面角是斜線與平面內直線所成角中最小的']}),
S.slider('3-2','動手看圖像','M 沿 CC₁ 上升，AM 與底面的角怎樣變？',['棱長 2 的正方體。','先猜，再拖滑桿。'],(h)=>G3.explore(h,{
 sl:[{id:'t',label:'CM',min:0,max:2,step:.5,value:1}],
 draw:v=>{const F=G3.frame(Cu,{W:440,H:205,m:28,fs:34});const M=[0,2,v.t];return F.show(F.base(),F.seg('A','C',AMB,3,'7 6'),F.seg('A',M,RED,4),F.dot(M,RED))},
 fx:v=>{const s=v.t/Math.sqrt(8+v.t*v.t);return T('$\\sin\\theta='+s.toFixed(3)+'$，$\\theta='+(Math.asin(s)*180/Math.PI).toFixed(1)+'°$')}
})),
S.check('3-3','幾何法','連一連：幾何法',['棱長 2 的正方體。'],T`$A_{1}C$ 與底面所成角的正弦是？`,[
 [T`$\f{\r{3}}{3}$`,T`$AA_{1}\div A_{1}C=2\div2\r{3}$`,1],
 [T`$\f{\r{6}}{3}$`,'程序錯誤：這是餘弦'],
 [T`$\f{\r{2}}{2}$`,T`程序錯誤：把 $A_{1}C$ 當成 $2\r{2}$`]
],{fig:miniCu}),
S.check('3-4','向量法','連一連：向量法',[T`$PA\perp$ 底面，$PA=AB=2$，$A$ 為原點。`],T`平面 $PBD$ 的法向量是 $(1,1,1)$。$PA$ 與平面 $PBD$ 所成角的正弦是？`,[
 [T`$\f{\r{3}}{3}$`,T`$\f{2}{2\times\r{3}}$`,1],
 [T`$\f{\r{6}}{3}$`,'概念錯誤：這是餘弦'],
 [T`$\f{2}{3}$`,'程序錯誤：分母算錯']
],{fig:miniPy}),
S.tasks('3-5','升級挑戰','升級挑戰：用定義與射影',['A 層看圖：棱長 2 的正方體。'],[
 [T`寫出線面角：(1) $AA_{1}$ 與平面 $ABCD$；(2) $A_{1}B$ 與平面 $ABCD$`,['先找經過斜線上一點、垂直平面的直線。'],'(1) 90°；(2) 45°'],
 [T`長方體中 $DA=DC=2$，$DD_{1}=4$。求 $BD_{1}$ 與平面 $ABCD$ 所成角的正弦`,[T`射影是 $BD$，在直角 $△D_{1}DB$ 中計算。`],T`$\f{\r{6}}{3}$`],
 [T`正四面體 $ABCD$ 棱長 2。求 $AB$ 與平面 $BCD$ 所成角的正弦`,null,T`$\f{\r{6}}{3}$（$A$ 的射影是 $△BCD$ 的中心）`]
],{fig:miniCu})
  ]));
})();
