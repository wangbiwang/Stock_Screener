import{V as U,r as w,s as R,c as E,a as o,R as x,P as p,M as I,o as D,Z as y,J as C,a1 as N,a5 as z}from"./@vue-c73d5d4d.js";import{E as O,a as B,b as M,c as K,d as $,e as q}from"./element-plus-d1e6be34.js";import"./normalize-wheel-es-4ed993c7.js";import"./dayjs-71479f56.js";import"./@element-plus-fa23d0e3.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-90298dfe.js";import"./@popperjs-c75af06c.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&h(f)}).observe(document,{childList:!0,subtree:!0});function t(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(r){if(r.ep)return;r.ep=!0;const u=t(r);fetch(r.href,u)}})();const F="modulepreload",J=function(b){return"/Stock_Screener/"+b},P={},v=function(_,t,h){if(!t||t.length===0)return _();const r=document.getElementsByTagName("link");return Promise.all(t.map(u=>{if(u=J(u),u in P)return;P[u]=!0;const f=u.endsWith(".css"),T=f?'[rel="stylesheet"]':"";if(!!h)for(let V=r.length-1;V>=0;V--){const k=r[V];if(k.href===u&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${T}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":F,f||(g.as="script",g.crossOrigin=""),g.href=u,document.head.appendChild(g),f)return new Promise((V,k)=>{g.addEventListener("load",V),g.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>_())},j=(b,_)=>{const t=b[_];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((h,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+_)))})},A=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217],G=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const H={class:"warp"},W={style:{margin:"0.5rem 1rem",color:"red"}},Y={class:"box"},Z=o("div",{class:"tit"},"基础筛选条件：",-1),Q={class:"cont"},X={class:"block"},ee=o("div",{class:"block_title"},"数据日期范围：",-1),te={style:{"margin-left":"0.5rem"}},le={class:"block"},oe=o("div",{class:"block_title"},"筛除ST股:",-1),se={class:"block"},ne=o("div",{class:"block_title"},"筛除科创板股:",-1),ie={class:"block"},ae=o("div",{class:"block_title"},"股票现价区间(元):",-1),re={style:{display:"inline-flex","align-items":"center"}},ce={class:"block"},de=o("div",{class:"block_title"},"市值区间(亿元):",-1),ue={style:{display:"inline-flex","align-items":"center"}},_e={class:"block"},pe=o("div",{class:"block_title"},"涨跌幅区间(%):",-1),me={style:{display:"inline-flex","align-items":"center"}},ve={class:"block"},fe=o("div",{class:"block_title"},"换手率区间(%):",-1),ge={style:{display:"inline-flex","align-items":"center"}},he={class:"block"},ke=o("div",{class:"block_title"},"成交额区间(万):",-1),Ve={style:{display:"inline-flex","align-items":"center"}},ye={class:"box"},be=o("div",{class:"tit"},[y(" 额外筛选条件："),o("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),Ee={class:"cont"},De={class:"block"},Se=o("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),xe={class:"block"},Te=o("div",{class:"text"},"额外条件2：换手是递增趋势",-1),Ie={class:"block"},Le=o("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),we={class:"block"},Oe=o("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),Pe={class:"block"},Ae=o("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),Ue={style:{"text-align":"center"}},Re=o("div",null,"筛选结果：",-1),Ce={key:0,class:"cont"},Ne={key:1},ze={style:{margin:"10px"}},Be={style:{display:"flex"}},Me=["href"],Ke={__name:"App",setup(b){const _=A.map(i=>{let e=String(i).substring(0,4),n=String(i).substring(4,6),c=String(i).substring(6,8);return new Date(e,Number(n)-1,c).getTime()}),t=U({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),h=w("-"),r=w([]),u=i=>_.indexOf(i.getTime())==-1,f=async()=>{const i=O.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});r.value=[],r.value=await k({...t}),i.close(),console.log(t,"---",await k({...t}))},T=()=>{let i=[];_.forEach((e,n)=>{e>=t.select_date[0]&&e<=t.select_date[1]&&i.push(S(e))}),t.select_date_day=i};R(async()=>{const i=O.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});t.select_date=[_[_.length-3],_[_.length-1]],t.select_date_day=[S(_[_.length-3]),S(_[_.length-2]),S(_[_.length-1])],r.value=await k({...t}),i.close(),console.log(r.value)});const L=i=>{let e=[];for(let n=0;n<i.length;n++){let c=i[n].split("=")[1];if(c){let s=c.split("~");e.push({_code:i[n].split("=")[0].split("_")[1],code:s[2],name:s[1],price:s[3],rate:s[32],vot:s[37],st:s[38],market_val:s[45]})}}return e},g=(i,e)=>{let n=[];for(let c=0;c<i.length;c++){const s=i[c];(e.select_ST?s.name.indexOf("ST")===-1:!0)&&(e.select_KC?s.code<688e3:!0)&&s.rate>e.changepercent[0]&&s.rate<e.changepercent[1]&&s.st>e.turnover_rate[0]&&s.st<e.turnover_rate[1]&&s.vot>e.turnover[0]&&s.vot<e.turnover[1]&&s.market_val>e.market_capitalization[0]&&s.market_val<e.market_capitalization[1]&&s.price>e.price[0]&&s.price<e.price[1]&&n.push(s)}return n},V=async i=>{let e=[],n=i.select_date_day;for(let c=0;c<n.length;c++){let s=n[c];const a=(await j(Object.assign({"../public/Stock_Data/20230202.json":()=>v(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>v(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>v(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>v(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>v(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>v(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>v(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>v(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>v(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>v(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>v(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>v(()=>import("./20230217-2ea9b12a.js"),[]),"../public/Stock_Data/dateCode.json":()=>v(()=>Promise.resolve().then(()=>G),void 0)}),`../public/Stock_Data/${s}.json`)).default;if(s==n[n.length-1]){let m=a[0].split("=")[1].split("~")[30];h.value=m.substring(0,4)+"-"+m.substring(4,6)+"-"+m.substring(6,8)+" "+m.substring(8,10)+":"+m.substring(10,12)}const d=L(a),l=g(d,i);e.push(l)}return e},k=async i=>{let e=new Map,n=[],c=await V(i);c.forEach(async a=>{a.forEach(d=>{let l=d.code,m=e.get(l);e.set(l,m?[m[0]+1,{rate:m[1].rate.concat(d.rate),st:m[1].st.concat(d.st),vot:m[1].vot.concat(d.vot)}]:[1,{rate:[d.rate],st:[d.st],vot:[d.vot]}])})}),e.forEach((a,d)=>a[0]>=c.length?n.push([d,a[1]]):null);function s(a,d=a.length){return d==1?!0:(d==2||s(a,d-1))&&Number(a[d-1])>Number(a[d-2])}return i.e1&&(n=n.filter(a=>s(a[1].rate))),i.e2&&(n=n.filter(a=>s(a[1].st))),i.e3&&(n=n.filter(a=>s(a[1].vot))),i.e4&&(n=n.filter(a=>{let d=!0;for(let l=1;l<a[1].rate.length-1;l++)if(a[1].rate[l]<0){d=!1;break}return a[1].rate[0]<0&&d})),i.e5&&(n=n.filter(a=>{let d=!0;for(let l=1;l<a[1].st.length-1;l++)if(a[1].st[l]<1){d=!1;break}return a[1].st[0]<1&&d})),n},S=i=>{let e=new Date(i),n=""+(e.getMonth()+1),c=""+e.getDate(),s=e.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),s+n+c};return(i,e)=>{const n=B,c=M,s=K,a=$,d=q;return D(),E("div",H,[o("div",W,"数据更新时间："+x(h.value),1),p(a,{class:"screening_condition"},{default:I(()=>[o("div",Y,[Z,o("div",Q,[o("div",X,[ee,p(n,{style:{"max-width":"300px"},modelValue:t.select_date,"onUpdate:modelValue":e[0]||(e[0]=l=>t.select_date=l),type:"daterange",onChange:T,"disabled-date":u,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),o("div",te,"已选"+x(t.select_date_day.length)+"天数据",1)]),o("div",le,[oe,p(c,{modelValue:t.select_ST,"onUpdate:modelValue":e[1]||(e[1]=l=>t.select_ST=l)},null,8,["modelValue"])]),o("div",se,[ne,p(c,{modelValue:t.select_KC,"onUpdate:modelValue":e[2]||(e[2]=l=>t.select_KC=l)},null,8,["modelValue"])]),o("div",ie,[ae,o("div",re,[p(s,{modelValue:t.price[0],"onUpdate:modelValue":e[3]||(e[3]=l=>t.price[0]=l),class:"priceInput"},null,8,["modelValue"]),y("-"),p(s,{modelValue:t.price[1],"onUpdate:modelValue":e[4]||(e[4]=l=>t.price[1]=l),class:"priceInput"},null,8,["modelValue"])])]),o("div",ce,[de,o("div",ue,[p(s,{modelValue:t.market_capitalization[0],"onUpdate:modelValue":e[5]||(e[5]=l=>t.market_capitalization[0]=l),class:"priceInput"},null,8,["modelValue"]),y("-"),p(s,{modelValue:t.market_capitalization[1],"onUpdate:modelValue":e[6]||(e[6]=l=>t.market_capitalization[1]=l),class:"priceInput"},null,8,["modelValue"])])]),o("div",_e,[pe,o("div",me,[p(s,{modelValue:t.changepercent[0],"onUpdate:modelValue":e[7]||(e[7]=l=>t.changepercent[0]=l),class:"priceInput"},null,8,["modelValue"]),y("-"),p(s,{modelValue:t.changepercent[1],"onUpdate:modelValue":e[8]||(e[8]=l=>t.changepercent[1]=l),class:"priceInput"},null,8,["modelValue"])])]),o("div",ve,[fe,o("div",ge,[p(s,{modelValue:t.turnover_rate[0],"onUpdate:modelValue":e[9]||(e[9]=l=>t.turnover_rate[0]=l),class:"priceInput"},null,8,["modelValue"]),y("-"),p(s,{modelValue:t.turnover_rate[1],"onUpdate:modelValue":e[10]||(e[10]=l=>t.turnover_rate[1]=l),class:"priceInput"},null,8,["modelValue"])])]),o("div",he,[ke,o("div",Ve,[p(s,{modelValue:t.turnover[0],"onUpdate:modelValue":e[11]||(e[11]=l=>t.turnover[0]=l),class:"priceInput"},null,8,["modelValue"]),y("-"),p(s,{modelValue:t.turnover[1],"onUpdate:modelValue":e[12]||(e[12]=l=>t.turnover[1]=l),class:"priceInput"},null,8,["modelValue"])])])])]),o("div",ye,[be,o("div",Ee,[o("div",De,[p(c,{modelValue:t.e1,"onUpdate:modelValue":e[13]||(e[13]=l=>t.e1=l)},null,8,["modelValue"]),Se]),o("div",xe,[p(c,{modelValue:t.e2,"onUpdate:modelValue":e[14]||(e[14]=l=>t.e2=l)},null,8,["modelValue"]),Te]),o("div",Ie,[p(c,{modelValue:t.e3,"onUpdate:modelValue":e[15]||(e[15]=l=>t.e3=l)},null,8,["modelValue"]),Le]),o("div",we,[p(c,{modelValue:t.e4,"onUpdate:modelValue":e[16]||(e[16]=l=>t.e4=l)},null,8,["modelValue"]),Oe]),o("div",Pe,[p(c,{modelValue:t.e5,"onUpdate:modelValue":e[17]||(e[17]=l=>t.e5=l)},null,8,["modelValue"]),Ae])])])]),_:1}),o("div",Ue,[p(d,{type:"primary",onClick:f},{default:I(()=>[y("开始筛选")]),_:1})]),p(a,{class:"Results_of_screening"},{default:I(()=>[Re,r.value.length==0?(D(),E("div",Ce,"NOT DATA")):(D(),E("div",Ne,[o("div",ze,"已筛选"+x(r.value.length)+"只代码，点击下方代码查看详情",1),o("div",Be,[(D(!0),E(C,null,N(r.value,l=>(D(),E("a",{style:{"text-align":"center",width:"60px"},target:"_blank",href:"https://gushitong.baidu.com/stock/ab-"+l[0]},x(l[0]),9,Me))),256))])]))]),_:1})])}}};z(Ke).mount("#app");