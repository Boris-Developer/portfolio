const p=document.getElementById("matrixCanvas"),v=p.getContext("2d");p.width=window.innerWidth*.986;p.height=window.innerHeight;const nt="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",F=nt.split(""),E=16;v.font=`${E}px monospace`;const ot=p.width/E;p.height/E;const T=[];for(let t=0;t<ot;t++)T[t]=1;function rt(){v.fillStyle="rgba(0, 0, 0, 0.08)",v.fillRect(0,0,p.width,p.height),v.fillStyle="#003840";for(let t=0;t<T.length;t++){Math.random()>.95&&(T[t]=0);const e=F[Math.floor(Math.random()*F.length)];v.fillText(e,t*E,T[t]*E),T[t]++}}setInterval(rt,60);window.addEventListener("resize",()=>{p.width=window.innerWidth,p.height=window.innerHeight});const b="data-astro-transition-persist";function it(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function st(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function at(t){for(const e of Array.from(document.head.children)){const n=ut(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function ct(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=t.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ft(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const lt=()=>{const t=document.activeElement;if(t?.closest(`[${b}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>D({activeElement:t,start:e,end:n})}return()=>D({activeElement:t})}else return()=>D({activeElement:null})},D=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},ut=(t,e)=>{const n=t.getAttribute(b),o=n&&e.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ft=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},dt=t=>{it(t),st(t),at(t);const e=lt();ct(t.body,document.body),e()},mt="astro:before-preparation",ht="astro:after-preparation",wt="astro:before-swap",pt="astro:after-swap",gt=t=>document.dispatchEvent(new Event(t));class V extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,s,u,a,c,f,l){super(e,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=c,this.newDocument=f,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class yt extends V{formData;loader;constructor(e,n,o,r,s,u,a,c,f,l){super(mt,{cancelable:!0},e,n,o,r,s,u,a,c),this.formData=f,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class bt extends V{direction;viewTransition;swap;constructor(e,n){super(wt,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>dt(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function vt(t,e,n,o,r,s,u,a,c){const f=new yt(t,e,n,o,r,s,window.document,u,a,c);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(gt(ht),f.navigationType!=="traverse"&&H({scrollX,scrollY}))),f}function Tt(t,e){const n=new bt(t,e);return document.dispatchEvent(n),n.swap(),n}const Et=history.pushState.bind(history),L=history.replaceState.bind(history),H=t=>{history.state&&(history.scrollRestoration="manual",L({...history.state,...t},""))},N=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),K=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let d,g,x;const j=t=>document.dispatchEvent(new Event(t)),z=()=>j("astro:page-load"),At=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},X="data-astro-transition-persist",Y="data-astro-transition",I="data-astro-transition-fallback";let $,A=0;history.state?(A=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(L({index:A,scrollX,scrollY},""),history.scrollRestoration="manual");async function St(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function G(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Lt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const J=(t,e,n,o,r)=>{const s=K(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;L({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",t.href)}else Et({...n.state,index:++A,scrollX:0,scrollY:0},"",t.href);if(document.title=u,x=t,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const c=history.state;location.href=t.href,history.state||(L(c,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Rt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${X}="${n.getAttribute(X)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return e}async function _(t,e,n,o,r){async function s(c){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(I,c);const w=document.getAnimations().filter(h=>!l.includes(h)&&!f(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await s("old")}catch{}const u=document.title,a=Tt(t,n.viewTransition);J(a.to,a.from,e,u,o),j(pt),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function xt(){return d?.controller.abort(),d={controller:new AbortController}}async function Q(t,e,n,o,r){const s=xt();if(!O()||location.origin!==n.origin){s===d&&(d=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&H({scrollX,scrollY}),K(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){J(n,e,o,document.title,r),s===d&&(d=void 0);return}const a=await vt(e,n,t,u,o.sourceElement,o.info,s.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){s===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function c(i){const w=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const y=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await St(w,h);if(m===null){i.preventDefault();return}if(m.redirected){const y=new URL(m.redirected);if(y.origin!==i.to.origin){i.preventDefault();return}i.to=y}if($??=new DOMParser,i.newDocument=$.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const k=Rt(i.newDocument);k.length&&!i.signal.aborted&&await Promise.all(k)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const l=await f();if(a.signal.aborted){s===d&&(d=void 0);return}if(document.documentElement.setAttribute(Y,a.direction),N)l.viewTransition=document.startViewTransition(async()=>await _(a,o,l,r));else{const i=(async()=>{await Promise.resolve(),await _(a,o,l,r,G())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(w=>l.viewTransitionFinished=w),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(I)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await Lt(),z(),At()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===g&&(g=void 0),s===d&&(d=void 0),document.documentElement.removeAttribute(Y),document.documentElement.removeAttribute(I)});try{await l.viewTransition.updateCallbackDone}catch(i){const w=i;console.log("[astro]",w.name,w.message,w.stack)}}async function U(t,e){await Q("forward",x,new URL(t,location.href),e??{})}function Pt(t){if(!O()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>A?"forward":"back";A=n,Q(o,x,new URL(location.href),{},e)}const q=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&H({scrollX,scrollY})};{if(N||G()!=="none")if(x=new URL(location.href),addEventListener("popstate",Pt),addEventListener("load",z),"onscrollend"in window)addEventListener("scrollend",q);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,q();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const Z=new Set,R=new WeakSet;let M,tt,B=!1;function kt(t){B||(B=!0,M??=t?.prefetchAll,tt??=t?.defaultStrategy??"hover",Dt(),It(),Mt(),Nt())}function Dt(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{S(e.target,"tap")&&P(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function It(){let t;document.body.addEventListener("focusin",o=>{S(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),C(()=>{for(const o of document.getElementsByTagName("a"))R.has(o)||S(o,"hover")&&(R.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{P(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function Mt(){let t;C(()=>{for(const e of document.getElementsByTagName("a"))R.has(e)||S(e,"viewport")&&(R.add(e),t??=Ht(),t.observe(e))})}function Ht(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,s=t.get(r);o.isIntersecting?(s&&clearTimeout(s),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),P(r.href)},300))):s&&(clearTimeout(s),t.delete(r))}})}function Nt(){C(()=>{for(const t of document.getElementsByTagName("a"))S(t,"load")&&P(t.href)})}function P(t,e){const n=e?.ignoreSlowConnection??!1;if(Ot(t,n))if(Z.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function Ot(t,e){if(!navigator.onLine||!e&&et())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Z.has(t)}catch{}return!1}function S(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||M)&&et()?!0:n==null&&M||n===""?e===tt:n===e}function et(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function C(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Ct(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function W(t){return t.dataset.astroReload!==void 0}(N||Ct()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;W(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),U(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||W(e))return;const n=e,o=t.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(c==="get"){const l=new URLSearchParams(r),i=new URL(a);i.search=l.toString(),a=i.toString()}else f.formData=r;t.preventDefault(),U(a,f)}),kt({prefetchAll:!0}));
