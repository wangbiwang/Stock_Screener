import{V as R,r as O,s as U,c as E,a as l,R as T,P as m,M as L,o as D,Z as V,J as C,a1 as M,a5 as N}from"./@vue-c73d5d4d.js";import{E as P,a as z,b as B,c as j,d as $,e as q}from"./element-plus-d1e6be34.js";import"./normalize-wheel-es-4ed993c7.js";import"./dayjs-71479f56.js";import"./@element-plus-fa23d0e3.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-90298dfe.js";import"./@popperjs-c75af06c.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const v of u.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&h(v)}).observe(document,{childList:!0,subtree:!0});function t(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerpolicy&&(u.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?u.credentials="include":d.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(d){if(d.ep)return;d.ep=!0;const u=t(d);fetch(d.href,u)}})();const K="modulepreload",F=function(y){return"/Stock_Screener/"+y},w={},p=function(_,t,h){if(!t||t.length===0)return _();const d=document.getElementsByTagName("link");return Promise.all(t.map(u=>{if(u=F(u),u in w)return;w[u]=!0;const v=u.endsWith(".css"),I=v?'[rel="stylesheet"]':"";if(!!h)for(let k=d.length-1;k>=0;k--){const b=d[k];if(b.href===u&&(!v||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${I}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":K,v||(g.as="script",g.crossOrigin=""),g.href=u,document.head.appendChild(g),v)return new Promise((k,b)=>{g.addEventListener("load",k),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>_())},J=(y,_)=>{const t=y[_];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((h,d)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(d.bind(null,new Error("Unknown variable dynamic import: "+_)))})},A=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224],G=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const H={class:"warp"},W={style:{margin:"0.5rem 1rem",color:"red"}},Y={class:"box"},Z=l("div",{class:"tit"},"基础筛选条件：",-1),Q={class:"cont"},X={class:"block"},ee=l("div",{class:"block_title"},"数据日期范围：",-1),te={style:{"margin-left":"0.5rem"}},oe={class:"block"},le=l("div",{class:"block_title"},"筛除ST股:",-1),se={class:"block"},ne=l("div",{class:"block_title"},"筛除科创板股:",-1),ie={class:"block"},re=l("div",{class:"block_title"},"股票现价区间(元):",-1),ae={style:{display:"inline-flex","align-items":"center"}},de={class:"block"},ce=l("div",{class:"block_title"},"市值区间(亿元):",-1),ue={style:{display:"inline-flex","align-items":"center"}},_e={class:"block"},me=l("div",{class:"block_title"},"涨跌幅区间(%):",-1),pe={style:{display:"inline-flex","align-items":"center"}},fe={class:"block"},ve=l("div",{class:"block_title"},"换手率区间(%):",-1),ge={style:{display:"inline-flex","align-items":"center"}},he={class:"block"},be=l("div",{class:"block_title"},"成交额区间(万):",-1),ke={style:{display:"inline-flex","align-items":"center"}},Ve={class:"box"},ye=l("div",{class:"tit"},[V(" 额外筛选条件："),l("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),Ee={class:"cont"},De={class:"block"},Se=l("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),Te={class:"block"},Ie=l("div",{class:"text"},"额外条件2：换手是递增趋势",-1),Le={class:"block"},xe=l("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Oe={class:"block"},Pe=l("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),we={class:"block"},Ae=l("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),Re={style:{"text-align":"center"}},Ue=l("div",null,"筛选结果：",-1),Ce={key:0,class:"cont"},Me={key:1},Ne={style:{margin:"10px"}},ze={style:{display:"flex","flex-wrap":"wrap"}},Be=["href"],je={__name:"App",setup(y){const _=A.map(r=>{let e=String(r).substring(0,4),n=String(r).substring(4,6),c=String(r).substring(6,8);return new Date(e,Number(n)-1,c).getTime()}),t=R({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),h=O("-"),d=O([]),u=r=>_.indexOf(r.getTime())==-1,v=async()=>{const r=P.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});d.value=[],d.value=await b({...t}),r.close(),console.log(t,"---",await b({...t}))},I=()=>{let r=[];_.forEach((e,n)=>{e>=t.select_date[0]&&e<=t.select_date[1]&&r.push(S(e))}),t.select_date_day=r};U(async()=>{const r=P.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});t.select_date=[_[_.length-3],_[_.length-1]],t.select_date_day=[S(_[_.length-3]),S(_[_.length-2]),S(_[_.length-1])],d.value=await b({...t}),r.close(),console.log(d.value)});const x=r=>{let e=[];for(let n=0;n<r.length;n++){let c=r[n].split("=")[1];if(c){let s=c.split("~");e.push({_code:r[n].split("=")[0].split("_")[1],code:s[2],name:s[1],price:s[3],rate:s[32],vot:s[37],st:s[38],market_val:s[45]})}}return e},g=(r,e)=>{let n=[];for(let c=0;c<r.length;c++){const s=r[c];(e.select_ST?s.name.indexOf("ST")===-1:!0)&&(e.select_KC?s.code<688e3:!0)&&s.rate>e.changepercent[0]&&s.rate<e.changepercent[1]&&s.st>e.turnover_rate[0]&&s.st<e.turnover_rate[1]&&s.vot>e.turnover[0]&&s.vot<e.turnover[1]&&s.market_val>e.market_capitalization[0]&&s.market_val<e.market_capitalization[1]&&s.price>e.price[0]&&s.price<e.price[1]&&n.push(s)}return n},k=async r=>{let e=[],n=r.select_date_day;for(let c=0;c<n.length;c++){let s=n[c];const i=(await J(Object.assign({"../public/Stock_Data/20230202.json":()=>p(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>p(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>p(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>p(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>p(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>p(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>p(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>p(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>p(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>p(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>p(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>p(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>p(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>p(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>p(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>p(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>p(()=>import("./20230224-289259d7.js"),[]),"../public/Stock_Data/dateCode.json":()=>p(()=>Promise.resolve().then(()=>G),void 0)}),`../public/Stock_Data/${s}.json`)).default;if(s==n[n.length-1]){let f=i[0].split("=")[1].split("~")[30];h.value=f.substring(0,4)+"-"+f.substring(4,6)+"-"+f.substring(6,8)+" "+f.substring(8,10)+":"+f.substring(10,12)}const a=x(i),o=g(a,r);e.push(o)}return e},b=async r=>{let e=new Map,n=[],c=await k(r);c.forEach(async i=>{i.forEach(a=>{let o=a.code,f=e.get(o);e.set(o,f?[f[0]+1,{rate:f[1].rate.concat(a.rate),st:f[1].st.concat(a.st),vot:f[1].vot.concat(a.vot)},a._code]:[1,{rate:[a.rate],st:[a.st],vot:[a.vot]},a._code])})}),e.forEach((i,a)=>i[0]>=c.length?n.push([a,i[1],i[2]]):null);function s(i,a=i.length){return a==1?!0:(a==2||s(i,a-1))&&Number(i[a-1])>Number(i[a-2])}return r.e1&&(n=n.filter(i=>s(i[1].rate))),r.e2&&(n=n.filter(i=>s(i[1].st))),r.e3&&(n=n.filter(i=>s(i[1].vot))),r.e4&&(n=n.filter(i=>{let a=!0;for(let o=1;o<i[1].rate.length-1;o++)if(i[1].rate[o]<0){a=!1;break}return i[1].rate[0]<0&&a})),r.e5&&(n=n.filter(i=>{let a=!0;for(let o=1;o<i[1].st.length-1;o++)if(i[1].st[o]<1){a=!1;break}return i[1].st[0]<1&&a})),n},S=r=>{let e=new Date(r),n=""+(e.getMonth()+1),c=""+e.getDate(),s=e.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),s+n+c};return(r,e)=>{const n=z,c=B,s=j,i=$,a=q;return D(),E("div",H,[l("div",W,"数据更新时间："+T(h.value),1),m(i,{class:"screening_condition"},{default:L(()=>[l("div",Y,[Z,l("div",Q,[l("div",X,[ee,m(n,{style:{"max-width":"300px"},modelValue:t.select_date,"onUpdate:modelValue":e[0]||(e[0]=o=>t.select_date=o),type:"daterange",onChange:I,"disabled-date":u,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),l("div",te,"已选"+T(t.select_date_day.length)+"天数据",1)]),l("div",oe,[le,m(c,{modelValue:t.select_ST,"onUpdate:modelValue":e[1]||(e[1]=o=>t.select_ST=o)},null,8,["modelValue"])]),l("div",se,[ne,m(c,{modelValue:t.select_KC,"onUpdate:modelValue":e[2]||(e[2]=o=>t.select_KC=o)},null,8,["modelValue"])]),l("div",ie,[re,l("div",ae,[m(s,{type:"number",modelValue:t.price[0],"onUpdate:modelValue":e[3]||(e[3]=o=>t.price[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.price[1],"onUpdate:modelValue":e[4]||(e[4]=o=>t.price[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",de,[ce,l("div",ue,[m(s,{type:"number",modelValue:t.market_capitalization[0],"onUpdate:modelValue":e[5]||(e[5]=o=>t.market_capitalization[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.market_capitalization[1],"onUpdate:modelValue":e[6]||(e[6]=o=>t.market_capitalization[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",_e,[me,l("div",pe,[m(s,{type:"number",modelValue:t.changepercent[0],"onUpdate:modelValue":e[7]||(e[7]=o=>t.changepercent[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.changepercent[1],"onUpdate:modelValue":e[8]||(e[8]=o=>t.changepercent[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",fe,[ve,l("div",ge,[m(s,{type:"number",modelValue:t.turnover_rate[0],"onUpdate:modelValue":e[9]||(e[9]=o=>t.turnover_rate[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.turnover_rate[1],"onUpdate:modelValue":e[10]||(e[10]=o=>t.turnover_rate[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",he,[be,l("div",ke,[m(s,{type:"number",modelValue:t.turnover[0],"onUpdate:modelValue":e[11]||(e[11]=o=>t.turnover[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),V("-"),m(s,{type:"number",modelValue:t.turnover[1],"onUpdate:modelValue":e[12]||(e[12]=o=>t.turnover[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),l("div",Ve,[ye,l("div",Ee,[l("div",De,[m(c,{modelValue:t.e1,"onUpdate:modelValue":e[13]||(e[13]=o=>t.e1=o)},null,8,["modelValue"]),Se]),l("div",Te,[m(c,{modelValue:t.e2,"onUpdate:modelValue":e[14]||(e[14]=o=>t.e2=o)},null,8,["modelValue"]),Ie]),l("div",Le,[m(c,{modelValue:t.e3,"onUpdate:modelValue":e[15]||(e[15]=o=>t.e3=o)},null,8,["modelValue"]),xe]),l("div",Oe,[m(c,{modelValue:t.e4,"onUpdate:modelValue":e[16]||(e[16]=o=>t.e4=o)},null,8,["modelValue"]),Pe]),l("div",we,[m(c,{modelValue:t.e5,"onUpdate:modelValue":e[17]||(e[17]=o=>t.e5=o)},null,8,["modelValue"]),Ae])])])]),_:1}),l("div",Re,[m(a,{type:"primary",onClick:v},{default:L(()=>[V("开始筛选")]),_:1})]),m(i,{class:"Results_of_screening"},{default:L(()=>[Ue,d.value.length==0?(D(),E("div",Ce,"NOT DATA")):(D(),E("div",Me,[l("div",Ne,"已筛选"+T(d.value.length)+"只代码，点击下方代码查看详情",1),l("div",ze,[(D(!0),E(C,null,M(d.value,o=>(D(),E("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${o[2]}.html?from=classic#fschart-k`},T(o[0]),9,Be))),256))])]))]),_:1})])}}};N(je).mount("#app");
