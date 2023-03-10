import{V as w,r as P,s as U,c as y,a as l,R as T,P as m,M as L,o as D,Z as V,J as C,a1 as M,a5 as j}from"./@vue-c73d5d4d.js";import{E as A,a as N,b as z,c as B,d as $,e as q}from"./element-plus-d1e6be34.js";import"./normalize-wheel-es-4ed993c7.js";import"./dayjs-71479f56.js";import"./@element-plus-fa23d0e3.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-90298dfe.js";import"./@popperjs-c75af06c.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&b(f)}).observe(document,{childList:!0,subtree:!0});function t(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function b(c){if(c.ep)return;c.ep=!0;const u=t(c);fetch(c.href,u)}})();const K="modulepreload",F=function(E){return"/Stock_Screener/"+E},R={},_=function(p,t,b){if(!t||t.length===0)return p();const c=document.getElementsByTagName("link");return Promise.all(t.map(u=>{if(u=F(u),u in R)return;R[u]=!0;const f=u.endsWith(".css"),I=f?'[rel="stylesheet"]':"";if(!!b)for(let k=c.length-1;k>=0;k--){const h=c[k];if(h.href===u&&(!f||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${I}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":K,f||(g.as="script",g.crossOrigin=""),g.href=u,document.head.appendChild(g),f)return new Promise((k,h)=>{g.addEventListener("load",k),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>p())},J=(E,p)=>{const t=E[p];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((b,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+p)))})},x=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224,20230227,20230228,20230301,20230302,20230303,20230306,20230307,20230308,20230309,20230310],G=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const H={class:"warp"},W={style:{margin:"0.5rem 1rem",color:"red"}},Y={class:"box"},Z=l("div",{class:"tit"},"基础筛选条件：",-1),Q={class:"cont"},X={class:"block"},ee=l("div",{class:"block_title"},"数据日期范围：",-1),te={style:{"margin-left":"0.5rem"}},oe={class:"block"},le=l("div",{class:"block_title"},"筛除ST股:",-1),se={class:"block"},ne=l("div",{class:"block_title"},"筛除科创板股:",-1),ie={class:"block"},re=l("div",{class:"block_title"},"股票现价区间(元):",-1),ae={style:{display:"inline-flex","align-items":"center"}},ce={class:"block"},de=l("div",{class:"block_title"},"市值区间(亿元):",-1),_e={style:{display:"inline-flex","align-items":"center"}},ue={class:"block"},pe=l("div",{class:"block_title"},"涨跌幅区间(%):",-1),me={style:{display:"inline-flex","align-items":"center"}},ve={class:"block"},fe=l("div",{class:"block_title"},"换手率区间(%):",-1),ge={style:{display:"inline-flex","align-items":"center"}},be={class:"block"},he=l("div",{class:"block_title"},"成交额区间(万):",-1),ke={style:{display:"inline-flex","align-items":"center"}},Ve={class:"box"},Ee=l("div",{class:"tit"},[V(" 额外筛选条件："),l("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),ye={class:"cont"},De={class:"block"},Se=l("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),Te={class:"block"},Ie=l("div",{class:"text"},"额外条件2：换手是递增趋势",-1),Le={class:"block"},Oe=l("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Pe={class:"block"},Ae=l("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),Re={class:"block"},xe=l("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),we={style:{"text-align":"center"}},Ue=l("div",null,"筛选结果：",-1),Ce={key:0,class:"cont"},Me={key:1},je={style:{margin:"10px"}},Ne={style:{display:"flex","flex-wrap":"wrap"}},ze=["href"],Be={__name:"App",setup(E){const p=x.map(r=>{let e=String(r).substring(0,4),n=String(r).substring(4,6),d=String(r).substring(6,8);return new Date(e,Number(n)-1,d).getTime()}),t=w({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),b=P("-"),c=P([]),u=r=>p.indexOf(r.getTime())==-1,f=async()=>{const r=A.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});c.value=[],c.value=await h({...t}),r.close(),console.log(t,"---",await h({...t}))},I=()=>{let r=[];p.forEach((e,n)=>{e>=t.select_date[0]&&e<=t.select_date[1]&&r.push(S(e))}),t.select_date_day=r};U(async()=>{const r=A.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});t.select_date=[p[p.length-3],p[p.length-1]],t.select_date_day=[S(p[p.length-3]),S(p[p.length-2]),S(p[p.length-1])],c.value=await h({...t}),r.close(),console.log(c.value)});const O=r=>{let e=[];for(let n=0;n<r.length;n++){let d=r[n].split("=")[1];if(d){let s=d.split("~");e.push({_code:r[n].split("=")[0].split("_")[1],code:s[2],name:s[1],price:s[3],rate:s[32],vot:s[37],st:s[38],market_val:s[45]})}}return e},g=(r,e)=>{let n=[];for(let d=0;d<r.length;d++){const s=r[d];(e.select_ST?s.name.indexOf("ST")===-1:!0)&&(e.select_KC?s.code<688e3:!0)&&s.rate>e.changepercent[0]&&s.rate<e.changepercent[1]&&s.st>e.turnover_rate[0]&&s.st<e.turnover_rate[1]&&s.vot>e.turnover[0]&&s.vot<e.turnover[1]&&s.market_val>e.market_capitalization[0]&&s.market_val<e.market_capitalization[1]&&s.price>e.price[0]&&s.price<e.price[1]&&n.push(s)}return n},k=async r=>{let e=[],n=r.select_date_day;for(let d=0;d<n.length;d++){let s=n[d];const i=(await J(Object.assign({"../public/Stock_Data/20230202.json":()=>_(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>_(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>_(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>_(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>_(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>_(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>_(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>_(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>_(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>_(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>_(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>_(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>_(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>_(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>_(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>_(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>_(()=>import("./20230224-a86ce996.js"),[]),"../public/Stock_Data/20230227.json":()=>_(()=>import("./20230227-6fda72eb.js"),[]),"../public/Stock_Data/20230228.json":()=>_(()=>import("./20230228-68791d33.js"),[]),"../public/Stock_Data/20230301.json":()=>_(()=>import("./20230301-bc95e766.js"),[]),"../public/Stock_Data/20230302.json":()=>_(()=>import("./20230302-49b2bd6a.js"),[]),"../public/Stock_Data/20230303.json":()=>_(()=>import("./20230303-7b122911.js"),[]),"../public/Stock_Data/20230306.json":()=>_(()=>import("./20230306-662a293b.js"),[]),"../public/Stock_Data/20230307.json":()=>_(()=>import("./20230307-251b32c5.js"),[]),"../public/Stock_Data/20230308.json":()=>_(()=>import("./20230308-06eb0bcb.js"),[]),"../public/Stock_Data/20230309.json":()=>_(()=>import("./20230309-3ce372dd.js"),[]),"../public/Stock_Data/20230310.json":()=>_(()=>import("./20230310-c64df19c.js"),[]),"../public/Stock_Data/dateCode.json":()=>_(()=>Promise.resolve().then(()=>G),void 0)}),`../public/Stock_Data/${s}.json`)).default;if(s==n[n.length-1]){let v=i[0].split("=")[1].split("~")[30];b.value=v.substring(0,4)+"-"+v.substring(4,6)+"-"+v.substring(6,8)+" "+v.substring(8,10)+":"+v.substring(10,12)}const a=O(i),o=g(a,r);e.push(o)}return e},h=async r=>{let e=new Map,n=[],d=await k(r);d.forEach(async i=>{i.forEach(a=>{let o=a.code,v=e.get(o);e.set(o,v?[v[0]+1,{rate:v[1].rate.concat(a.rate),st:v[1].st.concat(a.st),vot:v[1].vot.concat(a.vot)},a._code]:[1,{rate:[a.rate],st:[a.st],vot:[a.vot]},a._code])})}),e.forEach((i,a)=>i[0]>=d.length?n.push([a,i[1],i[2]]):null);function s(i,a=i.length){return a==1?!0:(a==2||s(i,a-1))&&Number(i[a-1])>Number(i[a-2])}return r.e1&&(n=n.filter(i=>s(i[1].rate))),r.e2&&(n=n.filter(i=>s(i[1].st))),r.e3&&(n=n.filter(i=>s(i[1].vot))),r.e4&&(n=n.filter(i=>{let a=!0;for(let o=1;o<i[1].rate.length-1;o++)if(i[1].rate[o]<0){a=!1;break}return i[1].rate[0]<0&&a})),r.e5&&(n=n.filter(i=>{let a=!0;for(let o=1;o<i[1].st.length-1;o++)if(i[1].st[o]<1){a=!1;break}return i[1].st[0]<1&&a})),n},S=r=>{let e=new Date(r),n=""+(e.getMonth()+1),d=""+e.getDate(),s=e.getFullYear();return n.length<2&&(n="0"+n),d.length<2&&(d="0"+d),s+n+d};return(r,e)=>{const n=N,d=z,s=B,i=$,a=q;return D(),y("div",H,[l("div",W,"数据更新时间："+T(b.value),1),m(i,{class:"screening_condition"},{default:L(()=>[l("div",Y,[Z,l("div",Q,[l("div",X,[ee,m(n,{style:{"max-width":"300px"},modelValue:t.select_date,"onUpdate:modelValue":e[0]||(e[0]=o=>t.select_date=o),type:"daterange",onChange:I,"disabled-date":u,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),l("div",te,"已选"+T(t.select_date_day.length)+"天数据",1)]),l("div",oe,[le,m(d,{modelValue:t.select_ST,"onUpdate:modelValue":e[1]||(e[1]=o=>t.select_ST=o)},null,8,["modelValue"])]),l("div",se,[ne,m(d,{modelValue:t.select_KC,"onUpdate:modelValue":e[2]||(e[2]=o=>t.select_KC=o)},null,8,["modelValue"])]),l("div",ie,[re,l("div",ae,[m(s,{type:"number",modelValue:t.price[0],"onUpdate:modelValue":e[3]||(e[3]=o=>t.price[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.price[1],"onUpdate:modelValue":e[4]||(e[4]=o=>t.price[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ce,[de,l("div",_e,[m(s,{type:"number",modelValue:t.market_capitalization[0],"onUpdate:modelValue":e[5]||(e[5]=o=>t.market_capitalization[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.market_capitalization[1],"onUpdate:modelValue":e[6]||(e[6]=o=>t.market_capitalization[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ue,[pe,l("div",me,[m(s,{type:"number",modelValue:t.changepercent[0],"onUpdate:modelValue":e[7]||(e[7]=o=>t.changepercent[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.changepercent[1],"onUpdate:modelValue":e[8]||(e[8]=o=>t.changepercent[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ve,[fe,l("div",ge,[m(s,{type:"number",modelValue:t.turnover_rate[0],"onUpdate:modelValue":e[9]||(e[9]=o=>t.turnover_rate[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.turnover_rate[1],"onUpdate:modelValue":e[10]||(e[10]=o=>t.turnover_rate[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",be,[he,l("div",ke,[m(s,{type:"number",modelValue:t.turnover[0],"onUpdate:modelValue":e[11]||(e[11]=o=>t.turnover[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.turnover[1],"onUpdate:modelValue":e[12]||(e[12]=o=>t.turnover[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),l("div",Ve,[Ee,l("div",ye,[l("div",De,[m(d,{modelValue:t.e1,"onUpdate:modelValue":e[13]||(e[13]=o=>t.e1=o)},null,8,["modelValue"]),Se]),l("div",Te,[m(d,{modelValue:t.e2,"onUpdate:modelValue":e[14]||(e[14]=o=>t.e2=o)},null,8,["modelValue"]),Ie]),l("div",Le,[m(d,{modelValue:t.e3,"onUpdate:modelValue":e[15]||(e[15]=o=>t.e3=o)},null,8,["modelValue"]),Oe]),l("div",Pe,[m(d,{modelValue:t.e4,"onUpdate:modelValue":e[16]||(e[16]=o=>t.e4=o)},null,8,["modelValue"]),Ae]),l("div",Re,[m(d,{modelValue:t.e5,"onUpdate:modelValue":e[17]||(e[17]=o=>t.e5=o)},null,8,["modelValue"]),xe])])])]),_:1}),l("div",we,[m(a,{type:"primary",onClick:f},{default:L(()=>[V("开始筛选")]),_:1})]),m(i,{class:"Results_of_screening"},{default:L(()=>[Ue,c.value.length==0?(D(),y("div",Ce,"NOT DATA")):(D(),y("div",Me,[l("div",je,"已筛选"+T(c.value.length)+"只代码，点击下方代码查看详情",1),l("div",Ne,[(D(!0),y(C,null,M(c.value,o=>(D(),y("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${o[2]}.html?from=classic#fschart-k`},T(o[0]),9,ze))),256))])]))]),_:1})])}}};j(Be).mount("#app");
