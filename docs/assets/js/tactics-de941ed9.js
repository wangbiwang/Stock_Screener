import{_ as l}from"./0-index-1d41b3ef.js";import{E as y,a as j,e as x,f as w,g as U,d as M}from"./element-plus-b2ee86e9.js";import{V as C,r as S,s as N,U as z,o as D,c as E,a as i,R as k,P as d,M as b,Z as v,J as B,a1 as K}from"./@vue-191d933a.js";import"./vue-router-757101a6.js";import"./dayjs-71479f56.js";import"./@element-plus-418b309d.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-3f983848.js";import"./@popperjs-c75af06c.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";const q=(h,u)=>{const o=h[u];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((f,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+u)))})},T=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224,20230227,20230228,20230301,20230302,20230303,20230306,20230307,20230308,20230309,20230310,20230313,20230314,20230315,20230316,20230317,20230320,20230321,20230322,20230323,20230324,20230327,20230328,20230329,20230330,20230331,20230403,20230404,20230406,20230407],$=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const F={class:"page"},J={style:{display:"flex","justify-content":"space-between","flex-direction":"row","align-items":"center","flex-wrap":"nowrap",margin:"0.5rem 1rem"}},G={style:{color:"red"}},H={class:"box"},Y=i("div",{class:"tit"},"基础筛选条件：",-1),Z={class:"cont"},Q={class:"block"},W=i("div",{class:"block_title"},"数据日期范围：",-1),X={style:{"margin-left":"0.5rem"}},tt={class:"block"},et=i("div",{class:"block_title"},"筛除ST股:",-1),ot={class:"block"},lt=i("div",{class:"block_title"},"筛除科创板股:",-1),it={class:"block"},_t=i("div",{class:"block_title"},"股票现价区间(元):",-1),st={style:{display:"inline-flex","align-items":"center"}},at={class:"block"},nt=i("div",{class:"block_title"},"市值区间(亿元):",-1),rt={style:{display:"inline-flex","align-items":"center"}},ct={class:"block"},dt=i("div",{class:"block_title"},"涨跌幅区间(%):",-1),ut={style:{display:"inline-flex","align-items":"center"}},pt={class:"block"},mt=i("div",{class:"block_title"},"换手率区间(%):",-1),vt={style:{display:"inline-flex","align-items":"center"}},Dt={class:"block"},Et=i("div",{class:"block_title"},"成交额区间(万):",-1),bt={style:{display:"inline-flex","align-items":"center"}},Vt={class:"box"},kt=i("div",{class:"tit"},[v(" 额外筛选条件："),i("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),ft={class:"cont"},gt={class:"block"},ht=i("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),yt={class:"block"},St=i("div",{class:"text"},"额外条件2：换手是递增趋势",-1),Tt={class:"block"},It=i("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Pt={class:"block"},Ot=i("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),At={class:"block"},Lt=i("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),Rt={style:{"text-align":"center"}},jt=i("div",null,"筛选结果：",-1),xt={key:0,class:"cont"},wt={key:1},Ut={style:{margin:"10px"}},Mt={style:{display:"flex","flex-wrap":"wrap"}},Ct=["href"],Zt={__name:"tactics",setup(h){const u=T.map(r=>{let t=String(r).substring(0,4),a=String(r).substring(4,6),c=String(r).substring(6,8);return new Date(t,Number(a)-1,c).getTime()}),o=C({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),f=S("-"),m=S([]),I=r=>u.indexOf(r.getTime())==-1,P=async()=>{const r=y.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});m.value=[],m.value=await g({...o}),r.close(),console.log(o,"---",await g({...o}))},O=()=>{let r=[];u.forEach((t,a)=>{t>=o.select_date[0]&&t<=o.select_date[1]&&r.push(V(t))}),o.select_date_day=r};N(async()=>{const r=y.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});o.select_date=[u[u.length-3],u[u.length-1]],o.select_date_day=[V(u[u.length-3]),V(u[u.length-2]),V(u[u.length-1])],m.value=await g({...o}),r.close()});const A=r=>{let t=[];for(let a=0;a<r.length;a++){let c=r[a].split("=")[1];if(c){let n=c.split("~");t.push({_code:r[a].split("=")[0].split("_")[1],code:n[2],name:n[1],price:n[3],rate:n[32],vot:n[37],st:n[38],market_val:n[45]})}}return t},L=(r,t)=>{let a=[];for(let c=0;c<r.length;c++){const n=r[c];(t.select_ST?n.name.indexOf("ST")===-1:!0)&&(t.select_KC?n.code<688e3:!0)&&n.rate>t.changepercent[0]&&n.rate<t.changepercent[1]&&n.st>t.turnover_rate[0]&&n.st<t.turnover_rate[1]&&n.vot>t.turnover[0]&&n.vot<t.turnover[1]&&n.market_val>t.market_capitalization[0]&&n.market_val<t.market_capitalization[1]&&n.price>t.price[0]&&n.price<t.price[1]&&a.push(n)}return a},R=async r=>{let t=[],a=r.select_date_day;for(let c=0;c<a.length;c++){let n=a[c];const _=(await q(Object.assign({"../public/Stock_Data/20230202.json":()=>l(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>l(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>l(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>l(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>l(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>l(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>l(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>l(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>l(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>l(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>l(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>l(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>l(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>l(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>l(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>l(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>l(()=>import("./20230224-a86ce996.js"),[]),"../public/Stock_Data/20230227.json":()=>l(()=>import("./20230227-6fda72eb.js"),[]),"../public/Stock_Data/20230228.json":()=>l(()=>import("./20230228-68791d33.js"),[]),"../public/Stock_Data/20230301.json":()=>l(()=>import("./20230301-bc95e766.js"),[]),"../public/Stock_Data/20230302.json":()=>l(()=>import("./20230302-49b2bd6a.js"),[]),"../public/Stock_Data/20230303.json":()=>l(()=>import("./20230303-7b122911.js"),[]),"../public/Stock_Data/20230306.json":()=>l(()=>import("./20230306-662a293b.js"),[]),"../public/Stock_Data/20230307.json":()=>l(()=>import("./20230307-251b32c5.js"),[]),"../public/Stock_Data/20230308.json":()=>l(()=>import("./20230308-06eb0bcb.js"),[]),"../public/Stock_Data/20230309.json":()=>l(()=>import("./20230309-3ce372dd.js"),[]),"../public/Stock_Data/20230310.json":()=>l(()=>import("./20230310-f7a920d5.js"),[]),"../public/Stock_Data/20230313.json":()=>l(()=>import("./20230313-c3fc9a1a.js"),[]),"../public/Stock_Data/20230314.json":()=>l(()=>import("./20230314-9d62c184.js"),[]),"../public/Stock_Data/20230315.json":()=>l(()=>import("./20230315-548f795b.js"),[]),"../public/Stock_Data/20230316.json":()=>l(()=>import("./20230316-5b05ecaa.js"),[]),"../public/Stock_Data/20230317.json":()=>l(()=>import("./20230317-7ca300e3.js"),[]),"../public/Stock_Data/20230320.json":()=>l(()=>import("./20230320-af45d1f0.js"),[]),"../public/Stock_Data/20230321.json":()=>l(()=>import("./20230321-75f0ee3c.js"),[]),"../public/Stock_Data/20230322.json":()=>l(()=>import("./20230322-3e042c44.js"),[]),"../public/Stock_Data/20230323.json":()=>l(()=>import("./20230323-d1e3ec32.js"),[]),"../public/Stock_Data/20230324.json":()=>l(()=>import("./20230324-5c3b4d78.js"),[]),"../public/Stock_Data/20230327.json":()=>l(()=>import("./20230327-69b556ef.js"),[]),"../public/Stock_Data/20230328.json":()=>l(()=>import("./20230328-de2e3530.js"),[]),"../public/Stock_Data/20230329.json":()=>l(()=>import("./20230329-8d24e0b3.js"),[]),"../public/Stock_Data/20230330.json":()=>l(()=>import("./20230330-288156ba.js"),[]),"../public/Stock_Data/20230331.json":()=>l(()=>import("./20230331-fb2767b6.js"),[]),"../public/Stock_Data/20230403.json":()=>l(()=>import("./20230403-ef28ea3a.js"),[]),"../public/Stock_Data/20230404.json":()=>l(()=>import("./20230404-ed1acf7a.js"),[]),"../public/Stock_Data/20230406.json":()=>l(()=>import("./20230406-1144e18f.js"),[]),"../public/Stock_Data/20230407.json":()=>l(()=>import("./20230407-0aef8326.js"),[]),"../public/Stock_Data/dateCode.json":()=>l(()=>Promise.resolve().then(()=>$),void 0)}),`../public/Stock_Data/${n}.json`)).default;if(n==a[a.length-1]){let e=_[0].split("=")[1].split("~")[30];f.value=e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8)+" "+e.substring(8,10)+":"+e.substring(10,12)}const s=A(_),p=L(s,r);t.push(p)}return t},g=async r=>{let t=new Map,a=[],c=await R(r);c.forEach(async _=>{_.forEach(s=>{let p=s.code,e=t.get(p);t.set(p,e?[e[0]+1,{rate:e[1].rate.concat(s.rate),st:e[1].st.concat(s.st),vot:e[1].vot.concat(s.vot)},s._code]:[1,{rate:[s.rate],st:[s.st],vot:[s.vot]},s._code])})}),t.forEach((_,s)=>_[0]>=c.length?a.push([s,_[1],_[2]]):null);function n(_,s=_.length){return s==1?!0:(s==2||n(_,s-1))&&Number(_[s-1])>Number(_[s-2])}return r.e1&&(a=a.filter(_=>n(_[1].rate))),r.e2&&(a=a.filter(_=>n(_[1].st))),r.e3&&(a=a.filter(_=>n(_[1].vot))),r.e4&&(a=a.filter(_=>{let s=!0;for(let p=1;p<_[1].rate.length-1;p++)if(_[1].rate[p]<0){s=!1;break}return _[1].rate[0]<0&&s})),r.e5&&(a=a.filter(_=>{let s=!0;for(let p=1;p<_[1].st.length-1;p++)if(_[1].st[p]<1){s=!1;break}return _[1].st[0]<1&&s})),a},V=r=>{let t=new Date(r),a=""+(t.getMonth()+1),c=""+t.getDate(),n=t.getFullYear();return a.length<2&&(a="0"+a),c.length<2&&(c="0"+c),n+a+c};return(r,t)=>{const a=z("router-link"),c=j,n=x,_=w,s=U,p=M;return D(),E("div",F,[i("div",J,[i("div",G,"最近更新时间："+k(f.value),1),i("div",null,[d(c,{type:"primary"},{default:b(()=>[d(a,{to:"/ranking"},{default:b(()=>[v("进入排名页")]),_:1})]),_:1})])]),d(p,{class:"screening_condition"},{default:b(()=>[i("div",H,[Y,i("div",Z,[i("div",Q,[W,d(n,{style:{"max-width":"300px"},modelValue:o.select_date,"onUpdate:modelValue":t[0]||(t[0]=e=>o.select_date=e),type:"daterange",onChange:O,"disabled-date":I,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),i("div",X,"已选"+k(o.select_date_day.length)+"天数据",1)]),i("div",tt,[et,d(_,{modelValue:o.select_ST,"onUpdate:modelValue":t[1]||(t[1]=e=>o.select_ST=e)},null,8,["modelValue"])]),i("div",ot,[lt,d(_,{modelValue:o.select_KC,"onUpdate:modelValue":t[2]||(t[2]=e=>o.select_KC=e)},null,8,["modelValue"])]),i("div",it,[_t,i("div",st,[d(s,{type:"number",modelValue:o.price[0],"onUpdate:modelValue":t[3]||(t[3]=e=>o.price[0]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),d(s,{type:"number",modelValue:o.price[1],"onUpdate:modelValue":t[4]||(t[4]=e=>o.price[1]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",at,[nt,i("div",rt,[d(s,{type:"number",modelValue:o.market_capitalization[0],"onUpdate:modelValue":t[5]||(t[5]=e=>o.market_capitalization[0]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),d(s,{type:"number",modelValue:o.market_capitalization[1],"onUpdate:modelValue":t[6]||(t[6]=e=>o.market_capitalization[1]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",ct,[dt,i("div",ut,[d(s,{type:"number",modelValue:o.changepercent[0],"onUpdate:modelValue":t[7]||(t[7]=e=>o.changepercent[0]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),d(s,{type:"number",modelValue:o.changepercent[1],"onUpdate:modelValue":t[8]||(t[8]=e=>o.changepercent[1]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",pt,[mt,i("div",vt,[d(s,{type:"number",modelValue:o.turnover_rate[0],"onUpdate:modelValue":t[9]||(t[9]=e=>o.turnover_rate[0]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),d(s,{type:"number",modelValue:o.turnover_rate[1],"onUpdate:modelValue":t[10]||(t[10]=e=>o.turnover_rate[1]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",Dt,[Et,i("div",bt,[d(s,{type:"number",modelValue:o.turnover[0],"onUpdate:modelValue":t[11]||(t[11]=e=>o.turnover[0]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),d(s,{type:"number",modelValue:o.turnover[1],"onUpdate:modelValue":t[12]||(t[12]=e=>o.turnover[1]=e),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),i("div",Vt,[kt,i("div",ft,[i("div",gt,[d(_,{modelValue:o.e1,"onUpdate:modelValue":t[13]||(t[13]=e=>o.e1=e)},null,8,["modelValue"]),ht]),i("div",yt,[d(_,{modelValue:o.e2,"onUpdate:modelValue":t[14]||(t[14]=e=>o.e2=e)},null,8,["modelValue"]),St]),i("div",Tt,[d(_,{modelValue:o.e3,"onUpdate:modelValue":t[15]||(t[15]=e=>o.e3=e)},null,8,["modelValue"]),It]),i("div",Pt,[d(_,{modelValue:o.e4,"onUpdate:modelValue":t[16]||(t[16]=e=>o.e4=e)},null,8,["modelValue"]),Ot]),i("div",At,[d(_,{modelValue:o.e5,"onUpdate:modelValue":t[17]||(t[17]=e=>o.e5=e)},null,8,["modelValue"]),Lt])])])]),_:1}),i("div",Rt,[d(c,{type:"primary",onClick:P},{default:b(()=>[v("开始筛选")]),_:1})]),d(p,{class:"Results_of_screening"},{default:b(()=>[jt,m.value.length==0?(D(),E("div",xt,"NOT DATA")):(D(),E("div",wt,[i("div",Ut,"已筛选"+k(m.value.length)+"只代码，点击下方代码查看详情",1),i("div",Mt,[(D(!0),E(B,null,K(m.value,e=>(D(),E("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${e[2]}.html?from=classic#fschart-k`},k(e[0]),9,Ct))),256))])]))]),_:1})])}}};export{Zt as default};
