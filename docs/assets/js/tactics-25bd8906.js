import{_ as e}from"./0-index-f1d4bbdc.js";import{E as h,a as j,e as x,f as w,g as U,d as M}from"./element-plus-b2ee86e9.js";import{V as C,r as T,s as N,U as z,o as D,c as E,a as l,R as k,P as u,M as b,Z as v,J as B,a1 as K}from"./@vue-191d933a.js";import"./vue-router-757101a6.js";import"./dayjs-71479f56.js";import"./@element-plus-418b309d.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-3f983848.js";import"./@popperjs-c75af06c.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";const q=(S,d)=>{const _=S[d];return _?typeof _=="function"?_():Promise.resolve(_):new Promise((f,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+d)))})},I=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224,20230227,20230228,20230301,20230302,20230303,20230306,20230307,20230308,20230309,20230310,20230313,20230314,20230315,20230316,20230317,20230320,20230321,20230322,20230323,20230324,20230327,20230328,20230329,20230330,20230331,20230403,20230404,20230406,20230407,20230410,20230411,20230412,20230413,20230414,20230417,20230418],$=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const F={class:"page"},J={style:{display:"flex","justify-content":"space-between","flex-direction":"row","align-items":"center","flex-wrap":"nowrap",margin:"0.5rem 1rem"}},G={style:{color:"red"}},H={class:"box"},Y=l("div",{class:"tit"},"基础筛选条件：",-1),Z={class:"cont"},Q={class:"block"},W=l("div",{class:"block_title"},"数据日期范围：",-1),X={style:{"margin-left":"0.5rem"}},tt={class:"block"},et=l("div",{class:"block_title"},"筛除ST股:",-1),ot={class:"block"},_t=l("div",{class:"block_title"},"筛除科创板股:",-1),lt={class:"block"},it=l("div",{class:"block_title"},"股票现价区间(元):",-1),at={style:{display:"inline-flex","align-items":"center"}},st={class:"block"},nt=l("div",{class:"block_title"},"市值区间(亿元):",-1),rt={style:{display:"inline-flex","align-items":"center"}},ct={class:"block"},ut=l("div",{class:"block_title"},"涨跌幅区间(%):",-1),dt={style:{display:"inline-flex","align-items":"center"}},pt={class:"block"},mt=l("div",{class:"block_title"},"换手率区间(%):",-1),vt={style:{display:"inline-flex","align-items":"center"}},Dt={class:"block"},Et=l("div",{class:"block_title"},"成交额区间(万):",-1),bt={style:{display:"inline-flex","align-items":"center"}},Vt={class:"box"},kt=l("div",{class:"tit"},[v(" 额外筛选条件："),l("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),ft={class:"cont"},gt={class:"block"},St=l("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),ht={class:"block"},Tt=l("div",{class:"text"},"额外条件2：换手是递增趋势",-1),It={class:"block"},yt=l("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Pt={class:"block"},Ot=l("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),At={class:"block"},Lt=l("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),Rt={style:{"text-align":"center"}},jt=l("div",null,"筛选结果：",-1),xt={key:0,class:"cont"},wt={key:1},Ut={style:{margin:"10px"}},Mt={style:{display:"flex","flex-wrap":"wrap"}},Ct=["href"],Zt={__name:"tactics",setup(S){const d=I.map(r=>{let t=String(r).substring(0,4),s=String(r).substring(4,6),c=String(r).substring(6,8);return new Date(t,Number(s)-1,c).getTime()}),_=C({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),f=T("-"),m=T([]),y=r=>d.indexOf(r.getTime())==-1,P=async()=>{const r=h.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});m.value=[],m.value=await g({..._}),r.close(),console.log(_,"---",await g({..._}))},O=()=>{let r=[];d.forEach((t,s)=>{t>=_.select_date[0]&&t<=_.select_date[1]&&r.push(V(t))}),_.select_date_day=r};N(async()=>{const r=h.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});_.select_date=[d[d.length-3],d[d.length-1]],_.select_date_day=[V(d[d.length-3]),V(d[d.length-2]),V(d[d.length-1])],m.value=await g({..._}),r.close()});const A=r=>{let t=[];for(let s=0;s<r.length;s++){let c=r[s].split("=")[1];if(c){let n=c.split("~");t.push({_code:r[s].split("=")[0].split("_")[1],code:n[2],name:n[1],price:n[3],rate:n[32],vot:n[37],st:n[38],market_val:n[45]})}}return t},L=(r,t)=>{let s=[];for(let c=0;c<r.length;c++){const n=r[c];(t.select_ST?n.name.indexOf("ST")===-1:!0)&&(t.select_KC?n.code<688e3:!0)&&n.rate>t.changepercent[0]&&n.rate<t.changepercent[1]&&n.st>t.turnover_rate[0]&&n.st<t.turnover_rate[1]&&n.vot>t.turnover[0]&&n.vot<t.turnover[1]&&n.market_val>t.market_capitalization[0]&&n.market_val<t.market_capitalization[1]&&n.price>t.price[0]&&n.price<t.price[1]&&s.push(n)}return s},R=async r=>{let t=[],s=r.select_date_day;for(let c=0;c<s.length;c++){let n=s[c];const i=(await q(Object.assign({"../public/Stock_Data/20230202.json":()=>e(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>e(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>e(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>e(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>e(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>e(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>e(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>e(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>e(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>e(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>e(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>e(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>e(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>e(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>e(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>e(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>e(()=>import("./20230224-a86ce996.js"),[]),"../public/Stock_Data/20230227.json":()=>e(()=>import("./20230227-6fda72eb.js"),[]),"../public/Stock_Data/20230228.json":()=>e(()=>import("./20230228-68791d33.js"),[]),"../public/Stock_Data/20230301.json":()=>e(()=>import("./20230301-bc95e766.js"),[]),"../public/Stock_Data/20230302.json":()=>e(()=>import("./20230302-49b2bd6a.js"),[]),"../public/Stock_Data/20230303.json":()=>e(()=>import("./20230303-7b122911.js"),[]),"../public/Stock_Data/20230306.json":()=>e(()=>import("./20230306-662a293b.js"),[]),"../public/Stock_Data/20230307.json":()=>e(()=>import("./20230307-251b32c5.js"),[]),"../public/Stock_Data/20230308.json":()=>e(()=>import("./20230308-06eb0bcb.js"),[]),"../public/Stock_Data/20230309.json":()=>e(()=>import("./20230309-3ce372dd.js"),[]),"../public/Stock_Data/20230310.json":()=>e(()=>import("./20230310-f7a920d5.js"),[]),"../public/Stock_Data/20230313.json":()=>e(()=>import("./20230313-c3fc9a1a.js"),[]),"../public/Stock_Data/20230314.json":()=>e(()=>import("./20230314-9d62c184.js"),[]),"../public/Stock_Data/20230315.json":()=>e(()=>import("./20230315-548f795b.js"),[]),"../public/Stock_Data/20230316.json":()=>e(()=>import("./20230316-5b05ecaa.js"),[]),"../public/Stock_Data/20230317.json":()=>e(()=>import("./20230317-7ca300e3.js"),[]),"../public/Stock_Data/20230320.json":()=>e(()=>import("./20230320-af45d1f0.js"),[]),"../public/Stock_Data/20230321.json":()=>e(()=>import("./20230321-75f0ee3c.js"),[]),"../public/Stock_Data/20230322.json":()=>e(()=>import("./20230322-3e042c44.js"),[]),"../public/Stock_Data/20230323.json":()=>e(()=>import("./20230323-d1e3ec32.js"),[]),"../public/Stock_Data/20230324.json":()=>e(()=>import("./20230324-5c3b4d78.js"),[]),"../public/Stock_Data/20230327.json":()=>e(()=>import("./20230327-69b556ef.js"),[]),"../public/Stock_Data/20230328.json":()=>e(()=>import("./20230328-de2e3530.js"),[]),"../public/Stock_Data/20230329.json":()=>e(()=>import("./20230329-8d24e0b3.js"),[]),"../public/Stock_Data/20230330.json":()=>e(()=>import("./20230330-288156ba.js"),[]),"../public/Stock_Data/20230331.json":()=>e(()=>import("./20230331-fb2767b6.js"),[]),"../public/Stock_Data/20230403.json":()=>e(()=>import("./20230403-ef28ea3a.js"),[]),"../public/Stock_Data/20230404.json":()=>e(()=>import("./20230404-ed1acf7a.js"),[]),"../public/Stock_Data/20230406.json":()=>e(()=>import("./20230406-1144e18f.js"),[]),"../public/Stock_Data/20230407.json":()=>e(()=>import("./20230407-dcf526f9.js"),[]),"../public/Stock_Data/20230410.json":()=>e(()=>import("./20230410-89417a85.js"),[]),"../public/Stock_Data/20230411.json":()=>e(()=>import("./20230411-bc0d77f2.js"),[]),"../public/Stock_Data/20230412.json":()=>e(()=>import("./20230412-6213e825.js"),[]),"../public/Stock_Data/20230413.json":()=>e(()=>import("./20230413-b13fac93.js"),[]),"../public/Stock_Data/20230414.json":()=>e(()=>import("./20230414-c733c690.js"),[]),"../public/Stock_Data/20230417.json":()=>e(()=>import("./20230417-276cd953.js"),[]),"../public/Stock_Data/20230418.json":()=>e(()=>import("./20230418-2765419d.js"),[]),"../public/Stock_Data/dateCode.json":()=>e(()=>Promise.resolve().then(()=>$),void 0)}),`../public/Stock_Data/${n}.json`)).default;if(n==s[s.length-1]){let o=i[0].split("=")[1].split("~")[30];f.value=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6,8)+" "+o.substring(8,10)+":"+o.substring(10,12)}const a=A(i),p=L(a,r);t.push(p)}return t},g=async r=>{let t=new Map,s=[],c=await R(r);c.forEach(async i=>{i.forEach(a=>{let p=a.code,o=t.get(p);t.set(p,o?[o[0]+1,{rate:o[1].rate.concat(a.rate),st:o[1].st.concat(a.st),vot:o[1].vot.concat(a.vot)},a._code]:[1,{rate:[a.rate],st:[a.st],vot:[a.vot]},a._code])})}),t.forEach((i,a)=>i[0]>=c.length?s.push([a,i[1],i[2]]):null);function n(i,a=i.length){return a==1?!0:(a==2||n(i,a-1))&&Number(i[a-1])>Number(i[a-2])}return r.e1&&(s=s.filter(i=>n(i[1].rate))),r.e2&&(s=s.filter(i=>n(i[1].st))),r.e3&&(s=s.filter(i=>n(i[1].vot))),r.e4&&(s=s.filter(i=>{let a=!0;for(let p=1;p<i[1].rate.length-1;p++)if(i[1].rate[p]<0){a=!1;break}return i[1].rate[0]<0&&a})),r.e5&&(s=s.filter(i=>{let a=!0;for(let p=1;p<i[1].st.length-1;p++)if(i[1].st[p]<1){a=!1;break}return i[1].st[0]<1&&a})),s},V=r=>{let t=new Date(r),s=""+(t.getMonth()+1),c=""+t.getDate(),n=t.getFullYear();return s.length<2&&(s="0"+s),c.length<2&&(c="0"+c),n+s+c};return(r,t)=>{const s=z("router-link"),c=j,n=x,i=w,a=U,p=M;return D(),E("div",F,[l("div",J,[l("div",G,"最近更新时间："+k(f.value),1),l("div",null,[u(c,{type:"primary"},{default:b(()=>[u(s,{to:"/ranking"},{default:b(()=>[v("进入排名页")]),_:1})]),_:1})])]),u(p,{class:"screening_condition"},{default:b(()=>[l("div",H,[Y,l("div",Z,[l("div",Q,[W,u(n,{style:{"max-width":"300px"},modelValue:_.select_date,"onUpdate:modelValue":t[0]||(t[0]=o=>_.select_date=o),type:"daterange",onChange:O,"disabled-date":y,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),l("div",X,"已选"+k(_.select_date_day.length)+"天数据",1)]),l("div",tt,[et,u(i,{modelValue:_.select_ST,"onUpdate:modelValue":t[1]||(t[1]=o=>_.select_ST=o)},null,8,["modelValue"])]),l("div",ot,[_t,u(i,{modelValue:_.select_KC,"onUpdate:modelValue":t[2]||(t[2]=o=>_.select_KC=o)},null,8,["modelValue"])]),l("div",lt,[it,l("div",at,[u(a,{type:"number",modelValue:_.price[0],"onUpdate:modelValue":t[3]||(t[3]=o=>_.price[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),u(a,{type:"number",modelValue:_.price[1],"onUpdate:modelValue":t[4]||(t[4]=o=>_.price[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",st,[nt,l("div",rt,[u(a,{type:"number",modelValue:_.market_capitalization[0],"onUpdate:modelValue":t[5]||(t[5]=o=>_.market_capitalization[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),u(a,{type:"number",modelValue:_.market_capitalization[1],"onUpdate:modelValue":t[6]||(t[6]=o=>_.market_capitalization[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",ct,[ut,l("div",dt,[u(a,{type:"number",modelValue:_.changepercent[0],"onUpdate:modelValue":t[7]||(t[7]=o=>_.changepercent[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),u(a,{type:"number",modelValue:_.changepercent[1],"onUpdate:modelValue":t[8]||(t[8]=o=>_.changepercent[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",pt,[mt,l("div",vt,[u(a,{type:"number",modelValue:_.turnover_rate[0],"onUpdate:modelValue":t[9]||(t[9]=o=>_.turnover_rate[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),u(a,{type:"number",modelValue:_.turnover_rate[1],"onUpdate:modelValue":t[10]||(t[10]=o=>_.turnover_rate[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),l("div",Dt,[Et,l("div",bt,[u(a,{type:"number",modelValue:_.turnover[0],"onUpdate:modelValue":t[11]||(t[11]=o=>_.turnover[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),v("-"),u(a,{type:"number",modelValue:_.turnover[1],"onUpdate:modelValue":t[12]||(t[12]=o=>_.turnover[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),l("div",Vt,[kt,l("div",ft,[l("div",gt,[u(i,{modelValue:_.e1,"onUpdate:modelValue":t[13]||(t[13]=o=>_.e1=o)},null,8,["modelValue"]),St]),l("div",ht,[u(i,{modelValue:_.e2,"onUpdate:modelValue":t[14]||(t[14]=o=>_.e2=o)},null,8,["modelValue"]),Tt]),l("div",It,[u(i,{modelValue:_.e3,"onUpdate:modelValue":t[15]||(t[15]=o=>_.e3=o)},null,8,["modelValue"]),yt]),l("div",Pt,[u(i,{modelValue:_.e4,"onUpdate:modelValue":t[16]||(t[16]=o=>_.e4=o)},null,8,["modelValue"]),Ot]),l("div",At,[u(i,{modelValue:_.e5,"onUpdate:modelValue":t[17]||(t[17]=o=>_.e5=o)},null,8,["modelValue"]),Lt])])])]),_:1}),l("div",Rt,[u(c,{type:"primary",onClick:P},{default:b(()=>[v("开始筛选")]),_:1})]),u(p,{class:"Results_of_screening"},{default:b(()=>[jt,m.value.length==0?(D(),E("div",xt,"NOT DATA")):(D(),E("div",wt,[l("div",Ut,"已筛选"+k(m.value.length)+"只代码，点击下方代码查看详情",1),l("div",Mt,[(D(!0),E(B,null,K(m.value,o=>(D(),E("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${o[2]}.html?from=classic#fschart-k`},k(o[0]),9,Ct))),256))])]))]),_:1})])}}};export{Zt as default};
