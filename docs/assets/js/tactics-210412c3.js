import{_ as t}from"./0-index-c1567ad5.js";import{E as P,a as y,e as x,f as w,g as U,d as M}from"./element-plus-b2ee86e9.js";import{V as C,r as O,s as N,U as z,o as E,c as v,a as i,R as k,P as u,M as b,Z as D,J as B,a1 as K}from"./@vue-191d933a.js";import"./vue-router-757101a6.js";import"./dayjs-71479f56.js";import"./@element-plus-418b309d.js";import"./@ctrl-8a998e9d.js";import"./lodash-es-3f983848.js";import"./@popperjs-c75af06c.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";const q=(I,d)=>{const _=I[d];return _?typeof _=="function"?_():Promise.resolve(_):new Promise((S,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+d)))})},f=[20230202,20230203,20230206,20230207,20230208,20230209,20230210,20230213,20230214,20230215,20230216,20230217,20230220,20230221,20230222,20230223,20230224,20230227,20230228,20230301,20230302,20230303,20230306,20230307,20230308,20230309,20230310,20230313,20230314,20230315,20230316,20230317,20230320,20230321,20230322,20230323,20230324,20230327,20230328,20230329,20230330,20230331,20230403,20230404,20230406,20230407,20230410,20230411,20230412,20230413,20230414,20230417,20230418,20230419,20230420,20230421,20230424,20230425,20230426,20230427,20230428,20230504,20230505,20230508,20230509,20230510,20230511,20230512,20230515,20230516,20230517,20230518,20230519,20230522,20230523,20230524,20230525,20230526,20230529,20230530,20230531,20230601,20230602,20230605],$=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));const F={class:"page"},J={style:{display:"flex","justify-content":"space-between","flex-direction":"row","align-items":"center","flex-wrap":"nowrap",margin:"0.5rem 1rem"}},G={style:{color:"red"}},H={class:"box"},Y=i("div",{class:"tit"},"基础筛选条件：",-1),Z={class:"cont"},Q={class:"block"},W=i("div",{class:"block_title"},"数据日期范围：",-1),X={style:{"margin-left":"0.5rem"}},tt={class:"block"},et=i("div",{class:"block_title"},"筛除ST股:",-1),ot={class:"block"},_t=i("div",{class:"block_title"},"筛除科创板股:",-1),it={class:"block"},lt=i("div",{class:"block_title"},"股票现价区间(元):",-1),at={style:{display:"inline-flex","align-items":"center"}},st={class:"block"},rt=i("div",{class:"block_title"},"市值区间(亿元):",-1),nt={style:{display:"inline-flex","align-items":"center"}},ct={class:"block"},ut=i("div",{class:"block_title"},"涨跌幅区间(%):",-1),dt={style:{display:"inline-flex","align-items":"center"}},pt={class:"block"},mt=i("div",{class:"block_title"},"换手率区间(%):",-1),Dt={style:{display:"inline-flex","align-items":"center"}},Et={class:"block"},vt=i("div",{class:"block_title"},"成交额区间(万):",-1),bt={style:{display:"inline-flex","align-items":"center"}},Vt={class:"box"},kt=i("div",{class:"tit"},[D(" 额外筛选条件："),i("span",{style:{color:"red"}},"(调整额外筛选条件前,请先注意基础条件参数!)")],-1),St={class:"cont"},Tt={class:"block"},It=i("div",{class:"text"},"额外条件1：振幅是递增趋势",-1),Pt={class:"block"},Ot=i("div",{class:"text"},"额外条件2：换手是递增趋势",-1),ft={class:"block"},At=i("div",{class:"text"},"额外条件3：成交额是递增趋势",-1),Lt={class:"block"},Rt=i("div",{class:"text"},"额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅",-1),gt={class:"block"},jt=i("div",{class:"text"},"额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1",-1),ht={style:{"text-align":"center"}},yt=i("div",null,"筛选结果：",-1),xt={key:0,class:"cont"},wt={key:1},Ut={style:{margin:"10px"}},Mt={style:{display:"flex","flex-wrap":"wrap"}},Ct=["href"],Zt={__name:"tactics",setup(I){const d=f.map(n=>{let e=String(n).substring(0,4),s=String(n).substring(4,6),c=String(n).substring(6,8);return new Date(e,Number(s)-1,c).getTime()}),_=C({select_date_day:[],select_date:"",select_ST:!0,select_KC:!0,price:[2,15],market_capitalization:[30,600],changepercent:[0,3],turnover_rate:[1,10],turnover:[5e3,1e6],e1:!0,e2:!0,e3:!0,e4:!1,e5:!1}),S=O("-"),m=O([]),A=n=>d.indexOf(n.getTime())==-1,L=async()=>{const n=P.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});m.value=[],m.value=await T({..._}),n.close(),console.log(_,"---",await T({..._}))},R=()=>{let n=[];d.forEach((e,s)=>{e>=_.select_date[0]&&e<=_.select_date[1]&&n.push(V(e))}),_.select_date_day=n};N(async()=>{const n=P.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});_.select_date=[d[d.length-3],d[d.length-1]],_.select_date_day=[V(d[d.length-3]),V(d[d.length-2]),V(d[d.length-1])],m.value=await T({..._}),n.close()});const g=n=>{let e=[];for(let s=0;s<n.length;s++){let c=n[s].split("=")[1];if(c){let r=c.split("~");e.push({_code:n[s].split("=")[0].split("_")[1],code:r[2],name:r[1],price:r[3],rate:r[32],vot:r[37],st:r[38],market_val:r[45]})}}return e},j=(n,e)=>{let s=[];for(let c=0;c<n.length;c++){const r=n[c];(e.select_ST?r.name.indexOf("ST")===-1:!0)&&(e.select_KC?r.code<688e3:!0)&&r.rate>e.changepercent[0]&&r.rate<e.changepercent[1]&&r.st>e.turnover_rate[0]&&r.st<e.turnover_rate[1]&&r.vot>e.turnover[0]&&r.vot<e.turnover[1]&&r.market_val>e.market_capitalization[0]&&r.market_val<e.market_capitalization[1]&&r.price>e.price[0]&&r.price<e.price[1]&&s.push(r)}return s},h=async n=>{let e=[],s=n.select_date_day;for(let c=0;c<s.length;c++){let r=s[c];const l=(await q(Object.assign({"../public/Stock_Data/20230202.json":()=>t(()=>import("./20230202-3bdd42c7.js"),[]),"../public/Stock_Data/20230203.json":()=>t(()=>import("./20230203-9e76cf93.js"),[]),"../public/Stock_Data/20230206.json":()=>t(()=>import("./20230206-503966b4.js"),[]),"../public/Stock_Data/20230207.json":()=>t(()=>import("./20230207-b3282033.js"),[]),"../public/Stock_Data/20230208.json":()=>t(()=>import("./20230208-a20c2518.js"),[]),"../public/Stock_Data/20230209.json":()=>t(()=>import("./20230209-27c48efb.js"),[]),"../public/Stock_Data/20230210.json":()=>t(()=>import("./20230210-9459a444.js"),[]),"../public/Stock_Data/20230213.json":()=>t(()=>import("./20230213-9281c5ec.js"),[]),"../public/Stock_Data/20230214.json":()=>t(()=>import("./20230214-086da00a.js"),[]),"../public/Stock_Data/20230215.json":()=>t(()=>import("./20230215-681bac35.js"),[]),"../public/Stock_Data/20230216.json":()=>t(()=>import("./20230216-0c895ba7.js"),[]),"../public/Stock_Data/20230217.json":()=>t(()=>import("./20230217-fc9d1152.js"),[]),"../public/Stock_Data/20230220.json":()=>t(()=>import("./20230220-a6ca7a87.js"),[]),"../public/Stock_Data/20230221.json":()=>t(()=>import("./20230221-5cb39e40.js"),[]),"../public/Stock_Data/20230222.json":()=>t(()=>import("./20230222-5b304613.js"),[]),"../public/Stock_Data/20230223.json":()=>t(()=>import("./20230223-cfaec5a9.js"),[]),"../public/Stock_Data/20230224.json":()=>t(()=>import("./20230224-a86ce996.js"),[]),"../public/Stock_Data/20230227.json":()=>t(()=>import("./20230227-6fda72eb.js"),[]),"../public/Stock_Data/20230228.json":()=>t(()=>import("./20230228-68791d33.js"),[]),"../public/Stock_Data/20230301.json":()=>t(()=>import("./20230301-bc95e766.js"),[]),"../public/Stock_Data/20230302.json":()=>t(()=>import("./20230302-49b2bd6a.js"),[]),"../public/Stock_Data/20230303.json":()=>t(()=>import("./20230303-7b122911.js"),[]),"../public/Stock_Data/20230306.json":()=>t(()=>import("./20230306-662a293b.js"),[]),"../public/Stock_Data/20230307.json":()=>t(()=>import("./20230307-251b32c5.js"),[]),"../public/Stock_Data/20230308.json":()=>t(()=>import("./20230308-06eb0bcb.js"),[]),"../public/Stock_Data/20230309.json":()=>t(()=>import("./20230309-3ce372dd.js"),[]),"../public/Stock_Data/20230310.json":()=>t(()=>import("./20230310-f7a920d5.js"),[]),"../public/Stock_Data/20230313.json":()=>t(()=>import("./20230313-c3fc9a1a.js"),[]),"../public/Stock_Data/20230314.json":()=>t(()=>import("./20230314-9d62c184.js"),[]),"../public/Stock_Data/20230315.json":()=>t(()=>import("./20230315-548f795b.js"),[]),"../public/Stock_Data/20230316.json":()=>t(()=>import("./20230316-5b05ecaa.js"),[]),"../public/Stock_Data/20230317.json":()=>t(()=>import("./20230317-7ca300e3.js"),[]),"../public/Stock_Data/20230320.json":()=>t(()=>import("./20230320-af45d1f0.js"),[]),"../public/Stock_Data/20230321.json":()=>t(()=>import("./20230321-75f0ee3c.js"),[]),"../public/Stock_Data/20230322.json":()=>t(()=>import("./20230322-3e042c44.js"),[]),"../public/Stock_Data/20230323.json":()=>t(()=>import("./20230323-d1e3ec32.js"),[]),"../public/Stock_Data/20230324.json":()=>t(()=>import("./20230324-5c3b4d78.js"),[]),"../public/Stock_Data/20230327.json":()=>t(()=>import("./20230327-69b556ef.js"),[]),"../public/Stock_Data/20230328.json":()=>t(()=>import("./20230328-de2e3530.js"),[]),"../public/Stock_Data/20230329.json":()=>t(()=>import("./20230329-8d24e0b3.js"),[]),"../public/Stock_Data/20230330.json":()=>t(()=>import("./20230330-288156ba.js"),[]),"../public/Stock_Data/20230331.json":()=>t(()=>import("./20230331-fb2767b6.js"),[]),"../public/Stock_Data/20230403.json":()=>t(()=>import("./20230403-ef28ea3a.js"),[]),"../public/Stock_Data/20230404.json":()=>t(()=>import("./20230404-ed1acf7a.js"),[]),"../public/Stock_Data/20230406.json":()=>t(()=>import("./20230406-1144e18f.js"),[]),"../public/Stock_Data/20230407.json":()=>t(()=>import("./20230407-dcf526f9.js"),[]),"../public/Stock_Data/20230410.json":()=>t(()=>import("./20230410-89417a85.js"),[]),"../public/Stock_Data/20230411.json":()=>t(()=>import("./20230411-bc0d77f2.js"),[]),"../public/Stock_Data/20230412.json":()=>t(()=>import("./20230412-6213e825.js"),[]),"../public/Stock_Data/20230413.json":()=>t(()=>import("./20230413-b13fac93.js"),[]),"../public/Stock_Data/20230414.json":()=>t(()=>import("./20230414-c733c690.js"),[]),"../public/Stock_Data/20230417.json":()=>t(()=>import("./20230417-276cd953.js"),[]),"../public/Stock_Data/20230418.json":()=>t(()=>import("./20230418-2765419d.js"),[]),"../public/Stock_Data/20230419.json":()=>t(()=>import("./20230419-06d51236.js"),[]),"../public/Stock_Data/20230420.json":()=>t(()=>import("./20230420-744336d3.js"),[]),"../public/Stock_Data/20230421.json":()=>t(()=>import("./20230421-40b94f60.js"),[]),"../public/Stock_Data/20230424.json":()=>t(()=>import("./20230424-d0c5cdcd.js"),[]),"../public/Stock_Data/20230425.json":()=>t(()=>import("./20230425-a3abb69e.js"),[]),"../public/Stock_Data/20230426.json":()=>t(()=>import("./20230426-65b0bd44.js"),[]),"../public/Stock_Data/20230427.json":()=>t(()=>import("./20230427-4558a096.js"),[]),"../public/Stock_Data/20230428.json":()=>t(()=>import("./20230428-25de450d.js"),[]),"../public/Stock_Data/20230504.json":()=>t(()=>import("./20230504-65a01d20.js"),[]),"../public/Stock_Data/20230505.json":()=>t(()=>import("./20230505-eaa8964b.js"),[]),"../public/Stock_Data/20230508.json":()=>t(()=>import("./20230508-82377b52.js"),[]),"../public/Stock_Data/20230509.json":()=>t(()=>import("./20230509-bdcd9bc9.js"),[]),"../public/Stock_Data/20230510.json":()=>t(()=>import("./20230510-f744243c.js"),[]),"../public/Stock_Data/20230511.json":()=>t(()=>import("./20230511-7822798d.js"),[]),"../public/Stock_Data/20230512.json":()=>t(()=>import("./20230512-41d650d6.js"),[]),"../public/Stock_Data/20230515.json":()=>t(()=>import("./20230515-54ca0e35.js"),[]),"../public/Stock_Data/20230516.json":()=>t(()=>import("./20230516-580a0b36.js"),[]),"../public/Stock_Data/20230517.json":()=>t(()=>import("./20230517-8a9ad716.js"),[]),"../public/Stock_Data/20230518.json":()=>t(()=>import("./20230518-89ee00b8.js"),[]),"../public/Stock_Data/20230519.json":()=>t(()=>import("./20230519-e587b22d.js"),[]),"../public/Stock_Data/20230522.json":()=>t(()=>import("./20230522-5196d08e.js"),[]),"../public/Stock_Data/20230523.json":()=>t(()=>import("./20230523-bd79142e.js"),[]),"../public/Stock_Data/20230524.json":()=>t(()=>import("./20230524-192ff85b.js"),[]),"../public/Stock_Data/20230525.json":()=>t(()=>import("./20230525-e5cb3d7e.js"),[]),"../public/Stock_Data/20230526.json":()=>t(()=>import("./20230526-96e6088a.js"),[]),"../public/Stock_Data/20230529.json":()=>t(()=>import("./20230529-c82c070a.js"),[]),"../public/Stock_Data/20230530.json":()=>t(()=>import("./20230530-dc84c66a.js"),[]),"../public/Stock_Data/20230531.json":()=>t(()=>import("./20230531-7b112db7.js"),[]),"../public/Stock_Data/20230601.json":()=>t(()=>import("./20230601-1e69df5d.js"),[]),"../public/Stock_Data/20230602.json":()=>t(()=>import("./20230602-6dfd7c9d.js"),[]),"../public/Stock_Data/20230605.json":()=>t(()=>import("./20230605-c1b7c6bb.js"),[]),"../public/Stock_Data/dateCode.json":()=>t(()=>Promise.resolve().then(()=>$),void 0)}),`../public/Stock_Data/${r}.json`)).default;if(r==s[s.length-1]){let o=l[0].split("=")[1].split("~")[30];S.value=o.substring(0,4)+"-"+o.substring(4,6)+"-"+o.substring(6,8)+" "+o.substring(8,10)+":"+o.substring(10,12)}const a=g(l),p=j(a,n);e.push(p)}return e},T=async n=>{let e=new Map,s=[],c=await h(n);c.forEach(async l=>{l.forEach(a=>{let p=a.code,o=e.get(p);e.set(p,o?[o[0]+1,{rate:o[1].rate.concat(a.rate),st:o[1].st.concat(a.st),vot:o[1].vot.concat(a.vot)},a._code]:[1,{rate:[a.rate],st:[a.st],vot:[a.vot]},a._code])})}),e.forEach((l,a)=>l[0]>=c.length?s.push([a,l[1],l[2]]):null);function r(l,a=l.length){return a==1?!0:(a==2||r(l,a-1))&&Number(l[a-1])>Number(l[a-2])}return n.e1&&(s=s.filter(l=>r(l[1].rate))),n.e2&&(s=s.filter(l=>r(l[1].st))),n.e3&&(s=s.filter(l=>r(l[1].vot))),n.e4&&(s=s.filter(l=>{let a=!0;for(let p=1;p<l[1].rate.length-1;p++)if(l[1].rate[p]<0){a=!1;break}return l[1].rate[0]<0&&a})),n.e5&&(s=s.filter(l=>{let a=!0;for(let p=1;p<l[1].st.length-1;p++)if(l[1].st[p]<1){a=!1;break}return l[1].st[0]<1&&a})),s},V=n=>{let e=new Date(n),s=""+(e.getMonth()+1),c=""+e.getDate(),r=e.getFullYear();return s.length<2&&(s="0"+s),c.length<2&&(c="0"+c),r+s+c};return(n,e)=>{const s=z("router-link"),c=y,r=x,l=w,a=U,p=M;return E(),v("div",F,[i("div",J,[i("div",G,"最近更新时间："+k(S.value),1),i("div",null,[u(c,{type:"primary"},{default:b(()=>[u(s,{to:"/ranking"},{default:b(()=>[D("进入排名页")]),_:1})]),_:1})])]),u(p,{class:"screening_condition"},{default:b(()=>[i("div",H,[Y,i("div",Z,[i("div",Q,[W,u(r,{style:{"max-width":"300px"},modelValue:_.select_date,"onUpdate:modelValue":e[0]||(e[0]=o=>_.select_date=o),type:"daterange",onChange:R,"disabled-date":A,"start-placeholder":"Start Date","end-placeholder":"End Date","default-value":[new Date(2023,2,2),new Date(2023,2,3)]},null,8,["modelValue","default-value"]),i("div",X,"已选"+k(_.select_date_day.length)+"天数据",1)]),i("div",tt,[et,u(l,{modelValue:_.select_ST,"onUpdate:modelValue":e[1]||(e[1]=o=>_.select_ST=o)},null,8,["modelValue"])]),i("div",ot,[_t,u(l,{modelValue:_.select_KC,"onUpdate:modelValue":e[2]||(e[2]=o=>_.select_KC=o)},null,8,["modelValue"])]),i("div",it,[lt,i("div",at,[u(a,{type:"number",modelValue:_.price[0],"onUpdate:modelValue":e[3]||(e[3]=o=>_.price[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),D("-"),u(a,{type:"number",modelValue:_.price[1],"onUpdate:modelValue":e[4]||(e[4]=o=>_.price[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",st,[rt,i("div",nt,[u(a,{type:"number",modelValue:_.market_capitalization[0],"onUpdate:modelValue":e[5]||(e[5]=o=>_.market_capitalization[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),D("-"),u(a,{type:"number",modelValue:_.market_capitalization[1],"onUpdate:modelValue":e[6]||(e[6]=o=>_.market_capitalization[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",ct,[ut,i("div",dt,[u(a,{type:"number",modelValue:_.changepercent[0],"onUpdate:modelValue":e[7]||(e[7]=o=>_.changepercent[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),D("-"),u(a,{type:"number",modelValue:_.changepercent[1],"onUpdate:modelValue":e[8]||(e[8]=o=>_.changepercent[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",pt,[mt,i("div",Dt,[u(a,{type:"number",modelValue:_.turnover_rate[0],"onUpdate:modelValue":e[9]||(e[9]=o=>_.turnover_rate[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),D("-"),u(a,{type:"number",modelValue:_.turnover_rate[1],"onUpdate:modelValue":e[10]||(e[10]=o=>_.turnover_rate[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])]),i("div",Et,[vt,i("div",bt,[u(a,{type:"number",modelValue:_.turnover[0],"onUpdate:modelValue":e[11]||(e[11]=o=>_.turnover[0]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"]),D("-"),u(a,{type:"number",modelValue:_.turnover[1],"onUpdate:modelValue":e[12]||(e[12]=o=>_.turnover[1]=o),modelModifiers:{number:!0},class:"priceInput"},null,8,["modelValue"])])])])]),i("div",Vt,[kt,i("div",St,[i("div",Tt,[u(l,{modelValue:_.e1,"onUpdate:modelValue":e[13]||(e[13]=o=>_.e1=o)},null,8,["modelValue"]),It]),i("div",Pt,[u(l,{modelValue:_.e2,"onUpdate:modelValue":e[14]||(e[14]=o=>_.e2=o)},null,8,["modelValue"]),Ot]),i("div",ft,[u(l,{modelValue:_.e3,"onUpdate:modelValue":e[15]||(e[15]=o=>_.e3=o)},null,8,["modelValue"]),At]),i("div",Lt,[u(l,{modelValue:_.e4,"onUpdate:modelValue":e[16]||(e[16]=o=>_.e4=o)},null,8,["modelValue"]),Rt]),i("div",gt,[u(l,{modelValue:_.e5,"onUpdate:modelValue":e[17]||(e[17]=o=>_.e5=o)},null,8,["modelValue"]),jt])])])]),_:1}),i("div",ht,[u(c,{type:"primary",onClick:L},{default:b(()=>[D("开始筛选")]),_:1})]),u(p,{class:"Results_of_screening"},{default:b(()=>[yt,m.value.length==0?(E(),v("div",xt,"NOT DATA")):(E(),v("div",wt,[i("div",Ut,"已筛选"+k(m.value.length)+"只代码，点击下方代码查看详情",1),i("div",Mt,[(E(!0),v(B,null,K(m.value,o=>(E(),v("a",{style:{"text-align":"center",width:"70px"},target:"_blank",href:`http://quote.eastmoney.com/concept/${o[2]}.html?from=classic#fschart-k`},k(o[0]),9,Ct))),256))])]))]),_:1})])}}};export{Zt as default};
