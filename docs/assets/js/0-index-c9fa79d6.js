import{U as p,o as _,c as h,P as y,aa as g}from"./@vue-191d933a.js";import{c as v,a as k}from"./vue-router-757101a6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const E=(s,o)=>{const r=s.__vccOpts||s;for(const[c,t]of o)r[c]=t;return r},L={},O={class:"warp"};function P(s,o){const r=p("router-view");return _(),h("div",O,[y(r)])}const R=E(L,[["render",P]]),S="modulepreload",w=function(s){return"/Stock_Screener/"+s},u={},f=function(o,r,c){if(!r||r.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=w(e),e in u)return;u[e]=!0;const n=e.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!n||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":S,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},A=v({history:k(),routes:[{path:"/",redirect:"ranking"},{path:"/ranking",component:()=>f(()=>import("./ranking-90798e98.js"),["assets/js/ranking-90798e98.js","assets/js/element-plus-b2ee86e9.js","assets/js/dayjs-71479f56.js","assets/js/@vue-191d933a.js","assets/js/@element-plus-418b309d.js","assets/js/@ctrl-8a998e9d.js","assets/js/lodash-es-3f983848.js","assets/js/@popperjs-c75af06c.js","assets/js/escape-html-1d60d822.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/css/element-plus-3bb97642.css","assets/js/axios-08622986.js","assets/css/ranking-43390ed0.css"])},{path:"/tactics",component:()=>f(()=>import("./tactics-ee67b7dc.js"),["assets/js/tactics-ee67b7dc.js","assets/js/element-plus-b2ee86e9.js","assets/js/dayjs-71479f56.js","assets/js/@vue-191d933a.js","assets/js/@element-plus-418b309d.js","assets/js/@ctrl-8a998e9d.js","assets/js/lodash-es-3f983848.js","assets/js/@popperjs-c75af06c.js","assets/js/escape-html-1d60d822.js","assets/js/normalize-wheel-es-ed76fb12.js","assets/css/element-plus-3bb97642.css","assets/js/vue-router-757101a6.js","assets/css/tactics-6f692b81.css"])}]}),d=g(R);d.use(A);d.mount("#app");export{f as _};