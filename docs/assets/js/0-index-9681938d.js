import{V as w,r as P,s as j,c as h,a as l,R as T,P as m,M as L,o as y,Z as E,J as U,a1 as C,a5 as M}from"./@vue-c73d5d4d.js";import{E as A,a as N,b as z,c as B,d as $,e as q}from"./element-plus-d1e6be34.js";import"./normalize-wheel-es-4ed993c7.js";import"./dayjs-71479f56.js";import"./@element-plus-fa23d0e3.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-90298dfe.js";import"./@popperjs-c75af06c.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))k(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&k(f)}).observe(document,{childList:!0,subtree:!0});function t(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function k(c){if(c.ep)return;c.ep=!0;const u=t(c);fetch(c.href,u)}})();const K="modulepreload",F=function(D){return"/Stock_Screener/"+D},R={},i=function(p,t,k){if(!t||t.length===0)return p();const c=document.getElementsByTagName("link");return Promise.all(t.map(u=>{if(u=F(u),u in R)return;R[u]=!0;const f=u.endsWith(".css"),I=f?'[rel="stylesheet"]':"";if(!!k)for(let g=c.length-1;g>=0;g--){const V=c[g];if(V.href===u&&(!f||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${I}`))return;const b=document.createElement("link");if(b.rel=f?"stylesheet":K,f||(b.as="script",b.crossOrigin=""),b.href=u,document.head.appendChild(b),f)return new Promise((g,V)=>{b.addEventListener("load",g),b.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>p())},J=(D,p)=>{const t=D[p];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((k,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+p)))})},x=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224,20230227,20230228,20230301,20230302,20230303,20230306,20230307,20230308,20230309,20230310,20230313,20230314,20230315,20230316,20230317,20230320,20230321,20230322],G=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const H={class:"warp"},W={style:{margin:"0.5rem 1rem",color:"red"}},Y={class:"box"},Z=l("div",{class:"tit"},"基础筛选条件：",-1),Q={class:"cont"},X={class:"block"},ee=l("div",{class:"block_title"},"数据日期范围：",-1),te={style:{"margin-left":"0.5rem"}},oe={class:"block"},le=l("div",{class:"block_title"},"筛除ST股:",-1),se={class:"block"},ie=l("div",{class:"block_title"},"筛除科创板股:",-1),ne={class:"block"},re=l("div",{class:"block_title"},"股票现价区间(元):",-1),ae={style:{display:"inline-flex","align-items":"center"}},_e={class:"block"},ce=l("div",{class:"block_title"},"市值区间(亿元):",-1),de={style:{display:"inline-flex","align-items":"center"}},ue={class:"block"},pe=l("div",{class:"block_title"},"涨跌幅区间(%):",-1),me={style:{display:"inline-flex","align-items":"center"}},ve={class:"block"},fe=l("div",{class:"block_title"},"换手率区间(%):",-1),be={style:{display:"inline-flex","align-items":"center"}},ke={class:"block"},Ve=l("div",{class:"block_title"},"成交额区间(万):",-1),ge={style:{display:"inline-flex","align-items":"center"}},Ee={class:"box"},De=l("div",{class:"tit"},[E(" 额外筛选条件："),l("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),he={class:"cont"},ye={class:"block"},Se=l("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),Te={class:"block"},Ie=l("div",{class:"text"},"额外条件2：换手是递增趋势",-1),Le={class:"block"},Oe=l("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Pe={class:"block"},Ae=l("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),Re={class:"block"},xe=l("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),we={style:{"text-align":"center"}},je=l("div",null,"筛选结果：",-1),Ue={key:0,class:"cont"},Ce={key:1},Me={style:{margin:"10px"}},Ne={style:{display:"flex","flex-wrap":"wrap"}},ze=["href"],Be={__name:"App",setup(D){const p=x.map(a=>{let e=String(a).substring(0,4),n=String(a).substring(4,6),d=String(a).substring(6,8);return new Date(e,Number(n)-1,d).getTime()}),t=w({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),k=P("-"),c=P([]),u=a=>p.indexOf(a.getTime())==-1,f=async()=>{const a=A.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});c.value=[],c.value=await V({...t}),a.close(),console.log(t,"---",await V({...t}))},I=()=>{let a=[];p.forEach((e,n)=>{e>=t.select_date[0]&&e<=t.select_date[1]&&a.push(S(e))}),t.select_date_day=a};j(async()=>{const a=A.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});t.select_date=[p[p.length-3],p[p.length-1]],t.select_date_day=[S(p[p.length-3]),S(p[p.length-2]),S(p[p.length-1])],c.value=await V({...t}),a.close(),console.log(c.value)});const O=a=>{let e=[];for(let n=0;n<a.length;n++){let d=a[n].split("=")[1];if(d){let s=d.split("~");e.push({_code:a[n].split("=")[0].split("_")[1],code:s[2],name:s[1],price:s[3],rate:s[32],vot:s[37],st:s[38],market_val:s[45]})}}return e},b=(a,e)=>{let n=[];for(let d=0;d<a.length;d++){const s=a[d];(e.select_ST?s.name.indexOf("ST")===-1:!0)&&(e.select_KC?s.code<688e3:!0)&&s.rate>e.changepercent[0]&&s.rate<e.changepercent[1]&&s.st>e.turnover_rate[0]&&s.st<e.turnover_rate[1]&&s.vot>e.turnover[0]&&s.vot<e.turnover[1]&&s.market_val>e.market_capitalization[0]&&s.market_val<e.market_capitalization[1]&&s.price>e.price[0]&&s.price<e.price[1]&&n.push(s)}return n},g=async a=>{let e=[],n=a.select_date_day;for(let d=0;d<n.length;d++){let s=n[d];const r=(await J(Object.assign({"../public/Stock_Data/20230202.json":()=>i(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>i(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>i(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>i(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>i(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>i(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>i(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>i(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>i(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>i(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>i(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>i(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>i(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>i(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>i(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>i(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>i(()=>import("./20230224-a86ce996.js"),[]),"../public/Stock_Data/20230227.json":()=>i(()=>import("./20230227-6fda72eb.js"),[]),"../public/Stock_Data/20230228.json":()=>i(()=>import("./20230228-68791d33.js"),[]),"../public/Stock_Data/20230301.json":()=>i(()=>import("./20230301-bc95e766.js"),[]),"../public/Stock_Data/20230302.json":()=>i(()=>import("./20230302-49b2bd6a.js"),[]),"../public/Stock_Data/20230303.json":()=>i(()=>import("./20230303-7b122911.js"),[]),"../public/Stock_Data/20230306.json":()=>i(()=>import("./20230306-662a293b.js"),[]),"../public/Stock_Data/20230307.json":()=>i(()=>import("./20230307-251b32c5.js"),[]),"../public/Stock_Data/20230308.json":()=>i(()=>import("./20230308-06eb0bcb.js"),[]),"../public/Stock_Data/20230309.json":()=>i(()=>import("./20230309-3ce372dd.js"),[]),"../public/Stock_Data/20230310.json":()=>i(()=>import("./20230310-f7a920d5.js"),[]),"../public/Stock_Data/20230313.json":()=>i(()=>import("./20230313-c3fc9a1a.js"),[]),"../public/Stock_Data/20230314.json":()=>i(()=>import("./20230314-9d62c184.js"),[]),"../public/Stock_Data/20230315.json":()=>i(()=>import("./20230315-548f795b.js"),[]),"../public/Stock_Data/20230316.json":()=>i(()=>import("./20230316-5b05ecaa.js"),[]),"../public/Stock_Data/20230317.json":()=>i(()=>import("./20230317-7ca300e3.js"),[]),"../public/Stock_Data/20230320.json":()=>i(()=>import("./20230320-af45d1f0.js"),[]),"../public/Stock_Data/20230321.json":()=>i(()=>import("./20230321-75f0ee3c.js"),[]),"../public/Stock_Data/20230322.json":()=>i(()=>import("./20230322-3e042c44.js"),[]),"../public/Stock_Data/dateCode.json":()=>i(()=>Promise.resolve().then(()=>G),void 0)}),`../public/Stock_Data/${s}.json`)).default;if(s==n[n.length-1]){let v=r[0].split("=")[1].split("~")[30];k.value=v.substring(0,4)+"-"+v.substring(4,6)+"-"+v.substring(6,8)+" "+v.substring(8,10)+":"+v.substring(10,12)}const _=O(r),o=b(_,a);e.push(o)}return e},V=async a=>{let e=new Map,n=[],d=await g(a);d.forEach(async r=>{r.forEach(_=>{let o=_.code,v=e.get(o);e.set(o,v?[v[0]+1,{rate:v[1].rate.concat(_.rate),st:v[1].st.concat(_.st),vot:v[1].vot.concat(_.vot)},_._code]:[1,{rate:[_.rate],st:[_.st],vot:[_.vot]},_._code])})}),e.forEach((r,_)=>r[0]>=d.length?n.push([_,r[1],r[2]]):null);function s(r,_=r.length){return _==1?!0:(_==2||s(r,_-1))&&Number(r[_-1])>Number(r[_-2])}return a.e1&&(n=n.filter(r=>s(r[1].rate))),a.e2&&(n=n.filter(r=>s(r[1].st))),a.e3&&(n=n.filter(r=>s(r[1].vot))),a.e4&&(n=n.filter(r=>{let _=!0;for(let o=1;o<r[1].rate.length-1;o++)if(r[1].rate[o]<0){_=!1;break}return r[1].rate[0]<0&&_})),a.e5&&(n=n.filter(r=>{let _=!0;for(let o=1;o<r[1].st.length-1;o++)if(r[1].st[o]<1){_=!1;break}return r[1].st[0]<1&&_})),n},S=a=>{let e=new Date(a),n=""+(e.getMonth()+1),d=""+e.getDate(),s=e.getFullYear();return n.length<2&&(n="0"+n),d.length<2&&(d="0"+d),s+n+d};return(a,e)=>{const n=N,d=z,s=B,r=$,_=q;return y(),h("div",H,[l("div",W,"数据更新时间："+T(k.value),1),m(r,{class:"screening_condition"},{default:L(()=>[l("div",Y,[Z,l("div",Q,[l("div",X,[ee,m(n,{style:{"max-width":"300px"},modelValue:t.select_date,"onUpdate:modelValue":e[0]||(e[0]=o=>t.select_date=o),type:"daterange",onChange:I,"disabled-date":u,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),l("div",te,"已选"+T(t.select_date_day.length)+"天数据",1)]),l("div",oe,[le,m(d,{modelValue:t.select_ST,"onUpdate:modelValue":e[1]||(e[1]=o=>t.select_ST=o)},null,8,["modelValue"])]),l("div",se,[ie,m(d,{modelValue:t.select_KC,"onUpdate:modelValue":e[2]||(e[2]=o=>t.select_KC=o)},null,8,["modelValue"])]),l("div",ne,[re,l("div",ae,[m(s,{type:"number",modelValue:t.price[0],"onUpdate:modelValue":e[3]||(e[3]=o=>t.price[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),E("-"),m(s,{type:"number",modelValue:t.price[1],"onUpdate:modelValue":e[4]||(e[4]=o=>t.price[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",_e,[ce,l("div",de,[m(s,{type:"number",modelValue:t.market_capitalization[0],"onUpdate:modelValue":e[5]||(e[5]=o=>t.market_capitalization[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),E("-"),m(s,{type:"number",modelValue:t.market_capitalization[1],"onUpdate:modelValue":e[6]||(e[6]=o=>t.market_capitalization[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ue,[pe,l("div",me,[m(s,{type:"number",modelValue:t.changepercent[0],"onUpdate:modelValue":e[7]||(e[7]=o=>t.changepercent[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),E("-"),m(s,{type:"number",modelValue:t.changepercent[1],"onUpdate:modelValue":e[8]||(e[8]=o=>t.changepercent[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ve,[fe,l("div",be,[m(s,{type:"number",modelValue:t.turnover_rate[0],"onUpdate:modelValue":e[9]||(e[9]=o=>t.turnover_rate[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),E("-"),m(s,{type:"number",modelValue:t.turnover_rate[1],"onUpdate:modelValue":e[10]||(e[10]=o=>t.turnover_rate[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ke,[Ve,l("div",ge,[m(s,{type:"number",modelValue:t.turnover[0],"onUpdate:modelValue":e[11]||(e[11]=o=>t.turnover[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),E("-"),m(s,{type:"number",modelValue:t.turnover[1],"onUpdate:modelValue":e[12]||(e[12]=o=>t.turnover[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),l("div",Ee,[De,l("div",he,[l("div",ye,[m(d,{modelValue:t.e1,"onUpdate:modelValue":e[13]||(e[13]=o=>t.e1=o)},null,8,["modelValue"]),Se]),l("div",Te,[m(d,{modelValue:t.e2,"onUpdate:modelValue":e[14]||(e[14]=o=>t.e2=o)},null,8,["modelValue"]),Ie]),l("div",Le,[m(d,{modelValue:t.e3,"onUpdate:modelValue":e[15]||(e[15]=o=>t.e3=o)},null,8,["modelValue"]),Oe]),l("div",Pe,[m(d,{modelValue:t.e4,"onUpdate:modelValue":e[16]||(e[16]=o=>t.e4=o)},null,8,["modelValue"]),Ae]),l("div",Re,[m(d,{modelValue:t.e5,"onUpdate:modelValue":e[17]||(e[17]=o=>t.e5=o)},null,8,["modelValue"]),xe])])])]),_:1}),l("div",we,[m(_,{type:"primary",onClick:f},{default:L(()=>[E("开始筛选")]),_:1})]),m(r,{class:"Results_of_screening"},{default:L(()=>[je,c.value.length==0?(y(),h("div",Ue,"NOT DATA")):(y(),h("div",Ce,[l("div",Me,"已筛选"+T(c.value.length)+"只代码，点击下方代码查看详情",1),l("div",Ne,[(y(!0),h(U,null,C(c.value,o=>(y(),h("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${o[2]}.html?from=classic#fschart-k`},T(o[0]),9,ze))),256))])]))]),_:1})])}}};M(Be).mount("#app");
