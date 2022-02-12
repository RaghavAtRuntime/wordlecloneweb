var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return c(t,(t=>e=t))(),e}function i(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function d(t,e,n){return t.set(n),e}const f="undefined"!=typeof window;let g=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):t;const m=new Set;function h(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&p(h)}function y(t){let e;return 0===m.size&&p(h),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function $(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function b(t){const e=C("style");return function(t,e){$(t.head||t,e)}(w(t),e),e.sheet}function v(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function L(){return _(" ")}function I(){return _("")}function O(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function N(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function G(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}const M=new Map;let B,T=0;function A(t,e,n,o,s,r,l,c=0){const a=16.666/o;let i="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*r(t);i+=100*t+`%{${l(o,1-o)}}\n`}const u=i+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,f=w(t),{stylesheet:g,rules:p}=M.get(f)||function(t,e){const n={stylesheet:b(e),rules:{}};return M.set(t,n),n}(f,t);p[d]||(p[d]=!0,g.insertRule(`@keyframes ${d} ${u}`,g.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${s}ms 1 both`,T+=1,d}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),T-=s,T||p((()=>{T||(M.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),M.clear())})))}function F(t){B=t}const U=[],P=[],W=[],R=[],q=Promise.resolve();let K=!1;function Y(t){W.push(t)}const V=new Set;let J,H=0;function Q(){const t=B;do{for(;H<U.length;){const t=U[H];H++,F(t),X(t.$$)}for(F(null),U.length=0,H=0;P.length;)P.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];V.has(e)||(V.add(e),e())}W.length=0}while(U.length);for(;R.length;)R.pop()();K=!1,V.clear(),F(t)}function X(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function Z(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function tt(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const et=new Set;let nt;function ot(){nt={r:0,c:[],p:nt}}function st(){nt.r||s(nt.c),nt=nt.p}function rt(t,e){t&&t.i&&(et.delete(t),t.i(e))}function lt(t,e,n,o){if(t&&t.o){if(et.has(t))return;et.add(t),nt.c.push((()=>{et.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ct={duration:0};function at(n,o,s){let l,c,a=o(n,s),i=!1,u=0;function d(){l&&D(n,l)}function f(){const{delay:o=0,duration:s=300,easing:r=e,tick:f=t,css:p}=a||ct;p&&(l=A(n,0,1,s,o,r,p,u++)),f(0,1);const m=g()+o,h=m+s;c&&c.abort(),i=!0,Y((()=>tt(n,!0,"start"))),c=y((t=>{if(i){if(t>=h)return f(1,0),tt(n,!0,"end"),d(),i=!1;if(t>=m){const e=r((t-m)/s);f(e,1-e)}}return i}))}let p=!1;return{start(){p||(p=!0,D(n),r(a)?(a=a(),Z().then(f)):f())},invalidate(){p=!1},end(){i&&(d(),i=!1)}}}function it(n,o,l){let c,a=o(n,l),i=!0;const u=nt;function d(){const{delay:o=0,duration:r=300,easing:l=e,tick:d=t,css:f}=a||ct;f&&(c=A(n,1,0,r,o,l,f));const p=g()+o,m=p+r;Y((()=>tt(n,!1,"start"))),y((t=>{if(i){if(t>=m)return d(0,1),tt(n,!1,"end"),--u.r||s(u.c),!1;if(t>=p){const e=l((t-p)/r);d(1-e,e)}}return i}))}return u.r+=1,r(a)?Z().then((()=>{a=a(),d()})):d(),{end(t){t&&a.tick&&a.tick(1,0),i&&(c&&D(n,c),i=!1)}}}function ut(n,o,l,c){let a=o(n,l),i=c?0:1,u=null,d=null,f=null;function p(){f&&D(n,f)}function m(t,e){const n=t.b-i;return e*=Math.abs(n),{a:i,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:r=0,duration:l=300,easing:c=e,tick:h=t,css:$}=a||ct,w={start:g()+r,b:o};o||(w.group=nt,nt.r+=1),u||d?d=w:($&&(p(),f=A(n,i,o,l,r,c,$)),o&&h(0,1),u=m(w,l),Y((()=>tt(n,o,"start"))),y((t=>{if(d&&t>d.start&&(u=m(d,l),d=null,tt(n,u.b,"start"),$&&(p(),f=A(n,i,u.b,u.duration,0,c,a.css))),u)if(t>=u.end)h(i=u.b,1-i),tt(n,u.b,"end"),d||(u.b?p():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;i=u.a+u.d*c(e/u.duration),h(i,1-i)}return!(!u&&!d)})))}return{run(t){r(a)?Z().then((()=>{a=a(),h(t)})):h(t)},end(){p(),u=d=null}}}function dt(t){t&&t.c()}function ft(t,e,o,l){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),l||Y((()=>{const e=a.map(n).filter(r);i?i.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(Y)}function gt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(U.push(t),K||(K=!0,q.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(e,n,r,l,c,a,i,u=[-1]){const d=B;F(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};i&&i(f.root);let g=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),g&&pt(e,t)),n})):[],f.update(),g=!0,s(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(k)}else f.fragment&&f.fragment.c();n.intro&&rt(e.$$.fragment),ft(e,n.target,n.anchor,n.customElement),Q()}F(d)}class ht{$destroy(){gt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function yt(t){const e=t-1;return e*e*e+1}function $t(t,{delay:n=0,duration:o=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}function wt(t,{delay:e=0,duration:n=400,easing:o=yt}={}){const s=getComputedStyle(t),r=+s.opacity,l=parseFloat(s.height),c=parseFloat(s.paddingTop),a=parseFloat(s.paddingBottom),i=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*r};height: ${t*l}px;padding-top: ${t*c}px;padding-bottom: ${t*a}px;margin-top: ${t*i}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function bt(t,{delay:e=0,duration:n=400,easing:o=yt,start:s=0,opacity:r=0}={}){const l=getComputedStyle(t),c=+l.opacity,a="none"===l.transform?"":l.transform,i=1-s,u=c*(1-r);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} scale(${1-i*e});\n\t\t\topacity: ${c-u*e}\n\t\t`}}const vt=[];function kt(e,n=t){let o;const s=new Set;function r(t){if(l(e,t)&&(e=t,o)){const t=!vt.length;for(const t of s)t[1](),vt.push(t,e);if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(l,c=t){const a=[l,c];return s.add(a),1===s.size&&(o=n(r)||t),l(e),()=>{s.delete(a),0===s.size&&(o(),o=null)}}}}const xt=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];const Ct=kt(new class{constructor(){this.popups={},this.id=0,this.update=!1}remove(t){delete this.popups[t],this.update=!this.update,Ct.update((t=>t))}add(t,e=2e3){this.popups[this.id]={message:t,delay:e},this.id+=1,this.update=!this.update,Ct.update((t=>t))}});class St{constructor(t,e,n,o,s=!1,r=!1){this.wordLength=t,this.maxGuesses=e,this.guessesList=n,this.answersList=o,this.dailyWord=r;const l=a(Ct);this.guesses=[],this.boxes=[...Array(e)].map((()=>[...Array(t)].map((()=>"empty")))),s&&r?(console.log("📝 Using daily word!"),l&&l.add("Daily word detected & used!"),this.word=s):s&&n.includes(s)?(console.log("📝 Custom word detected!"),l&&l.add("Custom word detected & used!"),this.word=s):this.word=o[Math.floor(Math.random()*o.length)],this.started=Date.now(),this.endTimer=!1,this.keyboardColors={},xt.forEach((t=>this.keyboardColors[t]="none")),this.word&&console.log(`Word is "${this.word}" (cheater 👀)`)}getColor(t,e=!1){switch(t){case"correct":return"#AFE1AF";case"empty":return e?"dimgrey":"#D3D3D3";case"semicorrect":return"#FFC300";case"none":return""}}get coloredBoxes(){return this.boxes.map((t=>t.map((t=>this.getColor(t)))))}validateInput(t){return t?(null==t?void 0:t.length)<this.wordLength?"Input too short!":(null==t?void 0:t.length)>this.wordLength?"Input too long!":this.guesses.includes(t)?"Don't waste your guesses!":!!this.guessesList.includes(t)||`"${t}" is not a valid word!`:"Enter something!"}}const _t=kt(new St(0,0,[],[]));function Lt(e){let n,o,s,r;return{c(){n=C("button"),o=_(e[0])},m(t,l){v(t,n,l),$(n,o),s||(r=O(n,"click",e[1]),s=!0)},p(t,[e]){1&e&&j(o,t[0])},i:t,o:t,d(t){t&&k(n),s=!1,r()}}}function It(t,e,n){let{label:o="🌓"}=e,s="light";function r(){"dark"===s?window.document.body.classList.add("darkMode"):window.document.body.classList.remove("darkMode")}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(s="dark");const l=localStorage.getItem("theme");return"light"!==l&&"dark"!==l||(s=l),r(),t.$$set=t=>{"label"in t&&n(0,o=t.label)},[o,function(){s="dark"===s?"light":"dark",r(),localStorage.setItem("theme",s)}]}class Ot extends ht{constructor(t){super(),mt(this,t,It,Lt,l,{label:0})}}function zt(t,e,n){const o=t.slice();return o[4]=e[n],o}function jt(t){let e,n=t[1],o=[];for(let e=0;e<n.length;e+=1)o[e]=Et(zt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=I()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);v(t,e,n)},p(t,s){if(2&s){let r;for(n=t[1],r=0;r<n.length;r+=1){const l=zt(t,n,r);o[r]?o[r].p(l,s):(o[r]=Et(l),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){x(o,t),t&&k(e)}}}function Et(t){let e,n,o,s,l=t[4].message+"";return{c(){e=C("button"),n=_(l)},m(l,c){v(l,e,c),$(e,n),o||(s=O(e,"click",(function(){r(t[4].onClick)&&t[4].onClick.apply(this,arguments)})),o=!0)},p(e,o){t=e,2&o&&l!==(l=t[4].message+"")&&j(n,l)},d(t){t&&k(e),o=!1,s()}}}function Nt(t){let e,n,o,s,l,c,a,i,d;const f=t[3].default,g=function(t,e,n,o){if(t){const s=u(t,e,n,o);return t[0](s)}}(f,t,t[2],null);let p=t[1]&&jt(t);return{c(){e=C("div"),g&&g.c(),n=L(),o=C("button"),o.textContent="Close",s=L(),p&&p.c(),z(e,"class","popup svelte-8vo8ko")},m(l,c){v(l,e,c),g&&g.m(e,null),$(e,n),$(e,o),$(e,s),p&&p.m(e,null),a=!0,i||(d=O(o,"click",(function(){r(t[0])&&t[0].apply(this,arguments)})),i=!0)},p(n,[o]){t=n,g&&g.p&&(!a||4&o)&&function(t,e,n,o,s,r){if(s){const l=u(e,n,o,r);t.p(l,s)}}(g,f,t,t[2],a?function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(f,t[2],o,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),t[1]?p?p.p(t,o):(p=jt(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i(t){a||(rt(g,t),Y((()=>{c&&c.end(1),l=at(e,$t,{}),l.start()})),a=!0)},o(t){lt(g,t),l&&l.invalidate(),c=it(e,$t,{}),a=!1},d(t){t&&k(e),g&&g.d(t),p&&p.d(),t&&c&&c.end(),i=!1,d()}}}function Gt(t,e,n){let{$$slots:o={},$$scope:s}=e,{onClose:r}=e,{customButtons:l=null}=e;return t.$$set=t=>{"onClose"in t&&n(0,r=t.onClose),"customButtons"in t&&n(1,l=t.customButtons),"$$scope"in t&&n(2,s=t.$$scope)},[r,l,s,o]}class Mt extends ht{constructor(t){super(),mt(this,t,Gt,Nt,l,{onClose:0,customButtons:1})}}function Bt(e){let n,o,l,c,a,i,u;return{c(){n=C("button"),n.textContent="Share your word",l=L(),c=C("button"),c.textContent="Share this game"},m(t,o){v(t,n,o),v(t,l,o),v(t,c,o),i||(u=[O(n,"click",(function(){r(e[3])&&e[3].apply(this,arguments)})),O(c,"click",(function(){r(e[4])&&e[4].apply(this,arguments)}))],i=!0)},p(t,n){e=t},i(t){o||Y((()=>{o=at(n,$t,{}),o.start()})),a||Y((()=>{a=at(c,$t,{}),a.start()}))},o:t,d(t){t&&k(n),t&&k(l),t&&k(c),i=!1,s(u)}}}function Tt(t){let e,n;return e=new Mt({props:{onClose:t[12],$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){dt(e.$$.fragment)},m(t,o){ft(e,t,o),n=!0},p(t,n){const o={};128&n&&(o.onClose=t[12]),8224&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){gt(e,t)}}}function At(t){let e,n,o,s,r,l,c,a,i,u,d,f,g,p,m,h,y,w,b,x,S,I,O,E,N,G,M,B=t[5]().played+"",T=Math.round(t[5]().wins/t[5]().played*1e3)/10+"",A=t[5]().currentStreak+"",D=t[5]().maxStreak+"";return{c(){e=C("div"),n=C("h2"),n.textContent="Statistics",o=L(),s=C("div"),r=C("div"),l=C("div"),c=_(B),a=L(),i=C("div"),i.textContent="Played",u=L(),d=C("div"),f=C("div"),g=_(T),p=L(),m=C("div"),m.textContent="Win %",h=L(),y=C("div"),w=C("div"),b=_(A),x=L(),S=C("div"),S.textContent="Current streak",I=L(),O=C("div"),E=C("div"),N=_(D),G=L(),M=C("div"),M.textContent="Max streak",z(l,"class","statValue svelte-1em1056"),z(i,"class","statKey svelte-1em1056"),z(r,"class","stat svelte-1em1056"),z(f,"class","statValue svelte-1em1056"),z(m,"class","statKey svelte-1em1056"),z(d,"class","stat svelte-1em1056"),z(w,"class","statValue svelte-1em1056"),z(S,"class","statKey svelte-1em1056"),z(y,"class","stat svelte-1em1056"),z(E,"class","statValue svelte-1em1056"),z(M,"class","statKey svelte-1em1056"),z(O,"class","stat svelte-1em1056"),z(s,"class","stats svelte-1em1056"),z(e,"class","container svelte-1em1056")},m(t,k){v(t,e,k),$(e,n),$(e,o),$(e,s),$(s,r),$(r,l),$(l,c),$(r,a),$(r,i),$(s,u),$(s,d),$(d,f),$(f,g),$(d,p),$(d,m),$(s,h),$(s,y),$(y,w),$(w,b),$(y,x),$(y,S),$(s,I),$(s,O),$(O,E),$(E,N),$(O,G),$(O,M)},p(t,e){32&e&&B!==(B=t[5]().played+"")&&j(c,B),32&e&&T!==(T=Math.round(t[5]().wins/t[5]().played*1e3)/10+"")&&j(g,T),32&e&&A!==(A=t[5]().currentStreak+"")&&j(b,A),32&e&&D!==(D=t[5]().maxStreak+"")&&j(N,D)},d(t){t&&k(e)}}}function Dt(t){let e,n,o,l,c,a,i,u,d,f,g,p,m,h,y,w,b,x,S,N,G,M,B,T=t[8].endTimer&&Bt(t);d=new Ot({});let A=t[7]&&Tt(t);return{c(){e=C("div"),n=C("div"),o=C("button"),o.textContent="🔎➖",l=L(),c=C("button"),c.textContent="🔎➕",a=L(),i=C("div"),T&&T.c(),u=L(),dt(d.$$.fragment),f=L(),g=C("button"),g.textContent="🔨",p=L(),m=C("button"),m.textContent="🔄",h=L(),y=C("button"),y.textContent="📊",w=L(),b=C("h3"),x=_(t[6]),S=L(),A&&A.c(),N=I(),E(n,"float","left"),E(i,"float","right"),z(b,"class","timer svelte-1em1056"),z(e,"class","sidebar svelte-1em1056")},m(s,k){v(s,e,k),$(e,n),$(n,o),$(n,l),$(n,c),$(e,a),$(e,i),T&&T.m(i,null),$(i,u),ft(d,i,null),$(i,f),$(i,g),$(i,p),$(i,m),$(i,h),$(i,y),$(e,w),$(e,b),$(b,x),v(s,S,k),A&&A.m(s,k),v(s,N,k),G=!0,M||(B=[O(o,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),O(c,"click",(function(){r(t[2])&&t[2].apply(this,arguments)})),O(g,"click",t[9]),O(m,"click",t[10]),O(y,"click",t[11])],M=!0)},p(e,[n]){(t=e)[8].endTimer?T?(T.p(t,n),256&n&&rt(T,1)):(T=Bt(t),T.c(),rt(T,1),T.m(i,u)):T&&(T.d(1),T=null),(!G||64&n)&&j(x,t[6]),t[7]?A?(A.p(t,n),128&n&&rt(A,1)):(A=Tt(t),A.c(),rt(A,1),A.m(N.parentNode,N)):A&&(ot(),lt(A,1,1,(()=>{A=null})),st())},i(t){G||(rt(T),rt(d.$$.fragment,t),rt(A),G=!0)},o(t){lt(d.$$.fragment,t),lt(A),G=!1},d(t){t&&k(e),T&&T.d(),gt(d),t&&k(S),A&&A.d(t),t&&k(N),M=!1,s(B)}}}function Ft(t,e,n){let o;i(t,_t,(t=>n(8,o=t)));let{toggleSettings:s}=e,{zoomOut:r}=e,{zoomIn:l}=e,{copyLink:c}=e,{copyGame:a}=e,{getStats:u}=e,d="00:00:00";setInterval((()=>{o.endTimer||n(6,d=new Date(Date.now()-o.started).toISOString().substr(11,8))}),1e3);let f=!1;return t.$$set=t=>{"toggleSettings"in t&&n(0,s=t.toggleSettings),"zoomOut"in t&&n(1,r=t.zoomOut),"zoomIn"in t&&n(2,l=t.zoomIn),"copyLink"in t&&n(3,c=t.copyLink),"copyGame"in t&&n(4,a=t.copyGame),"getStats"in t&&n(5,u=t.getStats)},[s,r,l,c,a,u,d,f,o,()=>s(),()=>location.reload(),()=>n(7,f=!f),()=>n(7,f=!1)]}class Ut extends ht{constructor(t){super(),mt(this,t,Ft,Dt,l,{toggleSettings:0,zoomOut:1,zoomIn:2,copyLink:3,copyGame:4,getStats:5})}}function Pt(t){let e,n,o,s,r;return{c(){e=C("div"),n=_(t[0]),z(e,"class","instantpopup svelte-1wqpc29")},m(t,o){v(t,e,o),$(e,n),r=!0},p(t,[e]){(!r||1&e)&&j(n,t[0])},i(t){r||(Y((()=>{s&&s.end(1),o=at(e,$t,{}),o.start()})),r=!0)},o(t){o&&o.invalidate(),s=it(e,$t,{}),r=!1},d(t){t&&k(e),t&&s&&s.end()}}}function Wt(t,e,n){let{message:o}=e,{duration:s}=e,{destroy:r}=e;return setTimeout(r,s),t.$$set=t=>{"message"in t&&n(0,o=t.message),"duration"in t&&n(1,s=t.duration),"destroy"in t&&n(2,r=t.destroy)},[o,s,r]}class Rt extends ht{constructor(t){super(),mt(this,t,Wt,Pt,l,{message:0,duration:1,destroy:2})}}function qt(t,e,n){const o=t.slice();return o[6]=e[n],o}function Kt(t,e,n){const o=t.slice();return o[9]=e[n],o}function Yt(t){let e,n,o,s,r=t[9].toUpperCase()+"";function l(){return t[5](t[9])}return{c(){e=C("button"),n=_(r),z(e,"class","key svelte-yf0t7n"),E(e,"background-color",t[1].getColor(t[1].keyboardColors[t[9]],!0))},m(t,r){v(t,e,r),$(e,n),o||(s=O(e,"click",l),o=!0)},p(n,o){t=n,2&o&&E(e,"background-color",t[1].getColor(t[1].keyboardColors[t[9]],!0))},d(t){t&&k(e),o=!1,s()}}}function Vt(t){let e;let n=function(t,e){return"backspace"===t[9]?Ht:Jt}(t),o=n(t);return{c(){o.c(),e=I()},m(t,n){o.m(t,n),v(t,e,n)},p(t,e){o.p(t,e)},d(t){o.d(t),t&&k(e)}}}function Jt(t){let e,n,o,s,r=t[9]+"";function l(){return t[4](t[9])}return{c(){e=C("button"),n=_(r),z(e,"class","specialKey svelte-yf0t7n")},m(t,r){v(t,e,r),$(e,n),o||(s=O(e,"click",l),o=!0)},p(e,n){t=e},d(t){t&&k(e),o=!1,s()}}}function Ht(t){let e,n,o;function s(){return t[3](t[9])}return{c(){e=C("button"),e.innerHTML='<svg width="40" height="30" fill="currentColor" viewBox="0 0 16 16"><path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"></path><path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"></path></svg>',z(e,"class","specialKey svelte-yf0t7n")},m(t,r){v(t,e,r),n||(o=O(e,"click",s),n=!0)},p(e,n){t=e},d(t){t&&k(e),n=!1,o()}}}function Qt(t){let e;let n=function(t,e){return 1!==t[9].length?Vt:Yt}(t),o=n(t);return{c(){o.c(),e=I()},m(t,n){o.m(t,n),v(t,e,n)},p(t,e){o.p(t,e)},d(t){o.d(t),t&&k(e)}}}function Xt(t){let e,n,o=t[6],s=[];for(let e=0;e<o.length;e+=1)s[e]=Qt(Kt(t,o,e));return{c(){e=C("div");for(let t=0;t<s.length;t+=1)s[t].c();n=L(),z(e,"class","keyboardRow svelte-yf0t7n"),E(e,"--columns",t[6].length)},m(t,o){v(t,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);$(e,n)},p(t,r){if(7&r){let l;for(o=t[6],l=0;l<o.length;l+=1){const c=Kt(t,o,l);s[l]?s[l].p(c,r):(s[l]=Qt(c),s[l].c(),s[l].m(e,n))}for(;l<s.length;l+=1)s[l].d(1);s.length=o.length}},d(t){t&&k(e),x(s,t)}}}function Zt(t){let e,n=t[2],o=[];for(let e=0;e<n.length;e+=1)o[e]=Xt(qt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=I()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);v(t,e,n)},p(t,s){if(7&s){let r;for(n=t[2],r=0;r<n.length;r+=1){const l=qt(t,n,r);o[r]?o[r].p(l,s):(o[r]=Xt(l),o[r].c(),o[r].m(e.parentNode,e))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){x(o,t),t&&k(e)}}}function te(e){let n,o=e[1],s=Zt(e);return{c(){n=C("div"),s.c(),z(n,"class","keyboard svelte-yf0t7n")},m(t,e){v(t,n,e),s.m(n,null)},p(t,[e]){2&e&&l(o,o=t[1])?(s.d(1),s=Zt(t),s.c(),s.m(n,null)):s.p(t,e)},i:t,o:t,d(t){t&&k(n),s.d(t)}}}function ee(t,e,n){let o;i(t,_t,(t=>n(1,o=t)));let{keyboardPress:s}=e;return t.$$set=t=>{"keyboardPress"in t&&n(0,s=t.keyboardPress)},[s,o,[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["Enter","z","x","c","v","b","n","m","backspace"]],t=>s(t),t=>s(t),t=>s(t)]}class ne extends ht{constructor(t){super(),mt(this,t,ee,te,l,{keyboardPress:0})}}function oe(t,e,n){const o=t.slice();return o[7]=e[n],o[9]=n,o}function se(t,e,n){const o=t.slice();return o[7]=e[n],o[9]=n,o}function re(e){let n,o,s,r,l,c,a=e[9]+3+"",i=e[9]+3===5?"(deafult)":"";return{c(){n=C("option"),o=_(a),s=_(" letter words "),r=_(i),l=L(),n.__value=c=e[9]+3,n.value=n.__value},m(t,e){v(t,n,e),$(n,o),$(n,s),$(n,r),$(n,l)},p:t,d(t){t&&k(n)}}}function le(e){let n,o,s,r,l,c,a=e[9]+3+"",i=e[9]+3===6?"(deafult)":"";return{c(){n=C("option"),o=_(a),s=_(" tries "),r=_(i),l=L(),n.__value=c=e[9]+3,n.value=n.__value},m(t,e){v(t,n,e),$(n,o),$(n,s),$(n,r),$(n,l)},p:t,d(t){t&&k(n)}}}function ce(t){let e,n,o,r,l,c,a,i,u,d,f,g,p,m,h,y,w,b=Array(5),S=[];for(let e=0;e<b.length;e+=1)S[e]=re(se(t,b,e));let _=Array(7),I=[];for(let e=0;e<_.length;e+=1)I[e]=le(oe(t,_,e));return{c(){e=C("div"),n=C("br"),o=L(),r=C("select");for(let t=0;t<S.length;t+=1)S[t].c();l=L(),c=C("select");for(let t=0;t<I.length;t+=1)I[t].c();a=L(),i=C("select"),u=C("option"),u.textContent="Use daily word ",d=C("option"),d.textContent="Don't use daily word (deafult)",f=L(),g=C("button"),g.innerHTML="<strong>Apply settings (will reset)</strong>",void 0===t[0]&&Y((()=>t[3].call(r))),void 0===t[1]&&Y((()=>t[4].call(c))),u.__value=!0,u.value=u.__value,d.__value=!1,d.value=d.__value,void 0===t[2]&&Y((()=>t[5].call(i))),z(e,"class","settings svelte-1brgwls")},m(s,p){v(s,e,p),$(e,n),$(e,o),$(e,r);for(let t=0;t<S.length;t+=1)S[t].m(r,null);N(r,t[0]),$(e,l),$(e,c);for(let t=0;t<I.length;t+=1)I[t].m(c,null);N(c,t[1]),$(e,a),$(e,i),$(i,u),$(i,d),N(i,t[2]),$(e,f),$(e,g),h=!0,y||(w=[O(r,"change",t[3]),O(c,"change",t[4]),O(i,"change",t[5]),O(g,"click",t[6])],y=!0)},p(t,[e]){1&e&&N(r,t[0]),2&e&&N(c,t[1]),4&e&&N(i,t[2])},i(t){h||(Y((()=>{m&&m.end(1),p=at(e,wt,{}),p.start()})),h=!0)},o(t){p&&p.invalidate(),m=it(e,wt,{}),h=!1},d(t){t&&k(e),x(S,t),x(I,t),t&&m&&m.end(),y=!1,s(w)}}}function ae(t,e,n){let o=5,s=6,r=!1;return[o,s,r,function(){o=G(this),n(0,o)},function(){s=G(this),n(1,s)},function(){r=G(this),n(2,r)},()=>window.location.href=`./?wordLength=${o}&maxGuesses=${s}`]}class ie extends ht{constructor(t){super(),mt(this,t,ae,ce,l,{})}}function ue(){const t=a(Ct),e=a(_t);var n;navigator.clipboard.writeText(e.dailyWord?`${window.location.href.split("?")[0]}?wordLength=${e.wordLength}&maxGuesses=${e.maxGuesses}&word=daily`:`${window.location.href.split("?")[0]}?wordLength=${e.wordLength}&maxGuesses=${e.maxGuesses}&word=${n=e.word,n.split("").map((t=>2*(t.toLowerCase().charCodeAt(0)-96)+3)).join("|")}`).then((()=>{t.add("Link copied to clipboard!")})).catch((e=>{console.error(e),t.add("An error has occured!")}))}function de(){const t=a(Ct),e=a(_t),n=[];n.push(`Check out my game of Wordimik I completed in ${new Date(e.endTimer-e.started).toISOString().substr(11,8)}s!\nWord: ${e.word}`),e.boxes.forEach((t=>{const e=[];t.forEach((t=>{switch(t){case"correct":e.push("🟩");break;case"empty":e.push("⬛");break;case"semicorrect":e.push("🟨")}})),n.push(e.join(" "))})),n.push(`Click the link below to try a game of Wordimik!\n${window.location.href.split("?")[0]}?wordLength=${e.wordLength}&maxGuesses=${e.maxGuesses}`),navigator.clipboard.writeText(n.join("\n")).then((()=>{t.add("Link copied to clipboard!")})).catch((e=>{console.error(e),t.add("An error has occured!")}))}function fe(t,e,n){const o=t.slice();return o[34]=e[n],o}function ge(t,e,n){const o=t.slice();return o[37]=e[n],o[39]=n,o}function pe(t,e,n){const o=t.slice();return o[40]=e[n],o[42]=n,o}function me(t){let e,n,o,s,r,l=t[8].coloredBoxes,c=[];for(let e=0;e<l.length;e+=1)c[e]=be(ge(t,l,e));const a=t=>lt(c[t],1,1,(()=>{c[t]=null}));return s=new ne({props:{keyboardPress:t[10]}}),{c(){e=C("div");for(let t=0;t<c.length;t+=1)c[t].c();n=L(),o=C("div"),dt(s.$$.fragment),z(e,"class","game svelte-1cege1a"),E(e,"--max-guesses",t[8].maxGuesses),E(e,"--word-length",t[8].wordLength),z(o,"class","input svelte-1cege1a")},m(l,a){v(l,e,a);for(let t=0;t<c.length;t+=1)c[t].m(e,null);t[16](e),v(l,n,a),v(l,o,a),ft(s,o,null),r=!0},p(t,n){if(258&n[0]){let o;for(l=t[8].coloredBoxes,o=0;o<l.length;o+=1){const s=ge(t,l,o);c[o]?(c[o].p(s,n),rt(c[o],1)):(c[o]=be(s),c[o].c(),rt(c[o],1),c[o].m(e,null))}for(ot(),o=l.length;o<c.length;o+=1)a(o);st()}(!r||256&n[0])&&E(e,"--max-guesses",t[8].maxGuesses),(!r||256&n[0])&&E(e,"--word-length",t[8].wordLength)},i(t){if(!r){for(let t=0;t<l.length;t+=1)rt(c[t]);rt(s.$$.fragment,t),r=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)lt(c[t]);lt(s.$$.fragment,t),r=!1},d(r){r&&k(e),x(c,r),t[16](null),r&&k(n),r&&k(o),gt(s)}}}function he(e){let n,o,s,r=(e[1]?.[e[42]]&&e[8].guesses.length===e[39]?e[1]?.[e[42]]?.toUpperCase():"")+"";return{c(){n=C("div"),o=_(r),s=L(),z(n,"class","box svelte-1cege1a")},m(t,e){v(t,n,e),$(n,o),$(n,s)},p(t,e){258&e[0]&&r!==(r=(t[1]?.[t[42]]&&t[8].guesses.length===t[39]?t[1]?.[t[42]]?.toUpperCase():"")+"")&&j(o,r)},i:t,o:t,d(t){t&&k(n)}}}function ye(e){let n,o,s=e[8].guesses[e[39]].charAt(e[42]).toUpperCase(),r=$e(e);return{c(){r.c(),n=I()},m(t,e){r.m(t,e),v(t,n,e),o=!0},p(e,o){256&o[0]&&l(s,s=e[8].guesses[e[39]].charAt(e[42]).toUpperCase())?(ot(),lt(r,1,1,t),st(),r=$e(e),r.c(),rt(r),r.m(n.parentNode,n)):r.p(e,o)},i(t){o||(rt(r),o=!0)},o(t){lt(r),o=!1},d(t){t&&k(n),r.d(t)}}}function $e(t){let e,n,o,s,r,l=t[8].guesses[t[39]][t[42]].toUpperCase()+"";return{c(){e=C("div"),n=_(l),o=L(),z(e,"class","box noBorder svelte-1cege1a"),E(e,"--color",t[37][t[42]])},m(t,s){v(t,e,s),$(e,n),$(e,o),r=!0},p(t,o){(!r||256&o[0])&&l!==(l=t[8].guesses[t[39]][t[42]].toUpperCase()+"")&&j(n,l),(!r||256&o[0])&&E(e,"--color",t[37][t[42]])},i(n){r||(Y((()=>{s||(s=ut(e,bt,{delay:200*t[42]},!0)),s.run(1)})),r=!0)},o(n){s||(s=ut(e,bt,{delay:200*t[42]},!1)),s.run(0),r=!1},d(t){t&&k(e),t&&s&&s.end()}}}function we(t){let e,n,o,s;const r=[ye,he],l=[];function c(t,e){return t[8].guesses[t[39]]?0:1}return e=c(t),n=l[e]=r[e](t),{c(){n.c(),o=I()},m(t,n){l[e].m(t,n),v(t,o,n),s=!0},p(t,s){let a=e;e=c(t),e===a?l[e].p(t,s):(ot(),lt(l[a],1,1,(()=>{l[a]=null})),st(),n=l[e],n?n.p(t,s):(n=l[e]=r[e](t),n.c()),rt(n,1),n.m(o.parentNode,o))},i(t){s||(rt(n),s=!0)},o(t){lt(n),s=!1},d(t){l[e].d(t),t&&k(o)}}}function be(t){let e,n,o=t[37],s=[];for(let e=0;e<o.length;e+=1)s[e]=we(pe(t,o,e));const r=t=>lt(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=I()},m(t,o){for(let e=0;e<s.length;e+=1)s[e].m(t,o);v(t,e,o),n=!0},p(t,n){if(258&n[0]){let l;for(o=t[37],l=0;l<o.length;l+=1){const r=pe(t,o,l);s[l]?(s[l].p(r,n),rt(s[l],1)):(s[l]=we(r),s[l].c(),rt(s[l],1),s[l].m(e.parentNode,e))}for(ot(),l=o.length;l<s.length;l+=1)r(l);st()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)rt(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)lt(s[t]);n=!1},d(t){x(s,t),t&&k(e)}}}function ve(t){let e,n;return e=new ie({}),{c(){dt(e.$$.fragment)},m(t,o){ft(e,t,o),n=!0},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){gt(e,t)}}}function ke(t){let e,n;function o(){return t[17](t[34])}return e=new Rt({props:{message:t[9].popups[t[34]].message,duration:t[9].popups[t[34]].delay,destroy:o}}),{c(){dt(e.$$.fragment)},m(t,o){ft(e,t,o),n=!0},p(n,s){t=n;const r={};512&s[0]&&(r.message=t[9].popups[t[34]].message),512&s[0]&&(r.duration=t[9].popups[t[34]].delay),512&s[0]&&(r.destroy=o),e.$set(r)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){gt(e,t)}}}function xe(t){let e,n,o=Object.keys(t[9].popups),s=[];for(let e=0;e<o.length;e+=1)s[e]=ke(fe(t,o,e));const r=t=>lt(s[t],1,1,(()=>{s[t]=null}));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=I()},m(t,o){for(let e=0;e<s.length;e+=1)s[e].m(t,o);v(t,e,o),n=!0},p(t,n){if(512&n[0]){let l;for(o=Object.keys(t[9].popups),l=0;l<o.length;l+=1){const r=fe(t,o,l);s[l]?(s[l].p(r,n),rt(s[l],1)):(s[l]=ke(r),s[l].c(),rt(s[l],1),s[l].m(e.parentNode,e))}for(ot(),l=o.length;l<s.length;l+=1)r(l);st()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)rt(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)lt(s[t]);n=!1},d(t){x(s,t),t&&k(e)}}}function Ce(t){let e,n;return e=new Mt({props:{onClose:t[18],customButtons:[{message:"Share your word",onClick:ue},{message:"Share this game",onClick:de}],$$slots:{default:[Se]},$$scope:{ctx:t}}}),{c(){dt(e.$$.fragment)},m(t,o){ft(e,t,o),n=!0},p(t,n){const o={};8&n[0]&&(o.onClose=t[18]),256&n[0]|4096&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){gt(e,t)}}}function Se(t){let e,n,o,s=1===t[8].guesses.length?"first try! (hacker)":`in ${t[8].guesses.length} tries!`;return{c(){e=C("h1"),n=_("🎉 You won "),o=_(s),z(e,"class","svelte-1cege1a")},m(t,s){v(t,e,s),$(e,n),$(e,o)},p(t,e){256&e[0]&&s!==(s=1===t[8].guesses.length?"first try! (hacker)":`in ${t[8].guesses.length} tries!`)&&j(o,s)},d(t){t&&k(e)}}}function _e(t){let e,n;return e=new Mt({props:{onClose:t[19],customButtons:[{message:"Share your word",onClick:ue},{message:"Share this game",onClick:de}],$$slots:{default:[Le]},$$scope:{ctx:t}}}),{c(){dt(e.$$.fragment)},m(t,o){ft(e,t,o),n=!0},p(t,n){const o={};32&n[0]&&(o.onClose=t[19]),256&n[0]|4096&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){lt(e.$$.fragment,t),n=!1},d(t){gt(e,t)}}}function Le(t){let e,n,o,s,r=t[8].word+"";return{c(){e=C("h1"),n=_("🎈 You lost, the word was "),o=_(r),s=_("!"),z(e,"class","svelte-1cege1a")},m(t,r){v(t,e,r),$(e,n),$(e,o),$(e,s)},p(t,e){256&e[0]&&r!==(r=t[8].word+"")&&j(o,r)},d(t){t&&k(e)}}}function Ie(e){let n,o,s,r,c,a,i,u,d,f,g,p,m,h=e[9].update;o=new Ut({props:{zoomIn:e[11],zoomOut:e[12],copyLink:ue,copyGame:de,getStats:e[14],toggleSettings:e[15]}});let y=0!==e[8].wordLength&&me(e),w=e[6]&&ve(),b=xe(e),x=e[2]&&!e[3]&&Ce(e),_=e[4]&&!e[5]&&_e(e);return{c(){n=C("main"),dt(o.$$.fragment),s=L(),y&&y.c(),r=L(),w&&w.c(),c=L(),b.c(),a=L(),x&&x.c(),i=L(),_&&_.c(),u=L(),d=S("svg"),f=S("path"),z(f,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),z(f,"class","svelte-1cege1a"),z(d,"class","githubIco svelte-1cege1a"),z(d,"width","24"),z(d,"height","24"),z(d,"viewBox","0 0 24 24"),z(d,"fill-opacity","0.6"),z(n,"class","svelte-1cege1a")},m(t,l){v(t,n,l),ft(o,n,null),$(n,s),y&&y.m(n,null),$(n,r),w&&w.m(n,null),$(n,c),b.m(n,null),$(n,a),x&&x.m(n,null),$(n,i),_&&_.m(n,null),$(n,u),$(n,d),$(d,f),g=!0,p||(m=O(d,"click",e[20]),p=!0)},p(e,s){const d={};128&s[0]&&(d.getStats=e[14]),64&s[0]&&(d.toggleSettings=e[15]),o.$set(d),0!==e[8].wordLength?y?(y.p(e,s),256&s[0]&&rt(y,1)):(y=me(e),y.c(),rt(y,1),y.m(n,r)):y&&(ot(),lt(y,1,1,(()=>{y=null})),st()),e[6]?w?64&s[0]&&rt(w,1):(w=ve(),w.c(),rt(w,1),w.m(n,c)):w&&(ot(),lt(w,1,1,(()=>{w=null})),st()),512&s[0]&&l(h,h=e[9].update)?(ot(),lt(b,1,1,t),st(),b=xe(e),b.c(),rt(b),b.m(n,a)):b.p(e,s),e[2]&&!e[3]?x?(x.p(e,s),12&s[0]&&rt(x,1)):(x=Ce(e),x.c(),rt(x,1),x.m(n,i)):x&&(ot(),lt(x,1,1,(()=>{x=null})),st()),e[4]&&!e[5]?_?(_.p(e,s),48&s[0]&&rt(_,1)):(_=_e(e),_.c(),rt(_,1),_.m(n,u)):_&&(ot(),lt(_,1,1,(()=>{_=null})),st())},i(t){g||(rt(o.$$.fragment,t),rt(y),rt(w),rt(b),rt(x),rt(_),g=!0)},o(t){lt(o.$$.fragment,t),lt(y),lt(w),lt(b),lt(x),lt(_),g=!1},d(t){t&&k(n),gt(o),y&&y.d(),w&&w.d(),b.d(t),x&&x.d(),_&&_.d(),p=!1,m()}}}function Oe(t,e,n){let o,s;i(t,_t,(t=>n(8,o=t))),i(t,Ct,(t=>n(9,s=t)));let r=5,l=6;const c=new URLSearchParams(window.location.search);if(c.has("wordLength")&&!isNaN(c.get("wordLength"))&&parseInt(c.get("wordLength"))>=3&&parseInt(c.get("wordLength"))<=7){const t=parseInt(c.get("wordLength"));r=t}if(c.has("maxGuesses")&&!isNaN(c.get("maxGuesses"))&&parseInt(c.get("maxGuesses"))>=3&&parseInt(c.get("maxGuesses"))<=9){const t=parseInt(c.get("maxGuesses"));l=t}let a=!1;c.has("word")&&(a=function(t){return t.split("|").map((t=>String.fromCharCode(96+(parseInt(t)-3)/2))).join("")}(c.get("word")),a.length!==r&&(a=!1));const u=new Date;let f=u.getUTCDate()-1;for(let t=0;t<u.getUTCMonth();t++)f+=(g=t+1,p=u.getUTCFullYear(),new Date(p,g,0).getDate());var g,p;function m(){if(!0!==o.validateInput(h))return;d(_t,o.guesses=[...o.guesses,h],o),_t.update((t=>t));const t=[];for(let e=0;e<h.length;e++){const n=h[e],s=o.word.indexOf(n);if(-1===s){d(_t,o.boxes[o.guesses.length-1][e]="empty",o),"correct"!==o.keyboardColors[n]&&"semicorrect"!==o.keyboardColors[n]&&d(_t,o.keyboardColors[n]="empty",o);continue}if(o.word[e]===n){d(_t,o.boxes[o.guesses.length-1][e]="correct",o),d(_t,o.keyboardColors[n]="correct",o);continue}let r=!1;for(let t=0;t<h.length;t++)if(o.word[e]===h[t]&&t===e){r=!0;break}r?(d(_t,o.boxes[o.guesses.length-1][e]="empty",o),"correct"!==o.keyboardColors[n]&&"semicorrect"!==o.keyboardColors[n]&&d(_t,o.keyboardColors[n]="empty",o)):t.includes(s)?(d(_t,o.boxes[o.guesses.length-1][e]="empty",o),"correct"!==o.keyboardColors[n]&&"semicorrect"!==o.keyboardColors[n]&&d(_t,o.keyboardColors[n]="empty",o)):(d(_t,o.boxes[o.guesses.length-1][e]="semicorrect",o),"correct"!==o.keyboardColors[n]&&d(_t,o.keyboardColors[n]="semicorrect",o),t.push(s))}h===o.word?(n(2,w=!0),d(_t,o.endTimer=Date.now(),o),z(Object.assign(Object.assign({},I),{wins:I.wins+1})),z(Object.assign(Object.assign({},I),{currentStreak:I.currentStreak+1})),I.currentStreak>I.maxStreak&&z(Object.assign(Object.assign({},I),{maxStreak:I.currentStreak})),z(Object.assign(Object.assign({},I),{played:I.played+1})),localStorage.setItem(`daily,${r}`,f.toString())):o.guesses.length>=o.maxGuesses&&(n(4,v=!0),d(_t,o.endTimer=Date.now(),o),z(Object.assign(Object.assign({},I),{losses:I.losses+1})),z(Object.assign(Object.assign({},I),{played:I.played+1}))),_t.update((t=>t)),n(1,h="")}(async function(){let t,e;const n=await fetch(`./words/word_${r}.txt`),o=await n.text();if(t=o.split(","),5!==r&&(e=o.split(",")),5===r){const t=await fetch(`./words/word_${r}_answers.txt`);e=(await t.text()).split(",")}let l;if("daily"===c.get("word"))if(localStorage.getItem(`daily,${r}`)!==f.toString()){const t=await fetch(`./words/daily_${r}.txt`);l=(await t.text()).split(",").filter((t=>t.split("|")[0]===f.toString()))[0].split("|")[1]}else s.add("You already did the daily word for today!, using random word instead.");return[t,e,l]})().then((t=>{const e=t[0],n=t[1],s=t[2];s?(d(_t,o=new St(r,l,e,n,s,!0),o),_t.update((t=>t))):(d(_t,o=new St(r,l,e,n,a),o),_t.update((t=>t)))}));let h="";function y(){return w?"You won!":v?`You lost, the word was ${o.word}!`:o.validateInput(h)}document.onkeydown=t=>{"Escape"===t.code?n(6,x=!x):"Equal"===t.code?S():"Minus"===t.code?_():"Backspace"===t.code?n(1,h=h.slice(0,-1)):"Enter"===t.code?(!0!==y()&&s.add(y().toString()),m()):xt.includes(t.key.toLowerCase())&&h.length<=o.wordLength-1&&n(1,h=`${h}${t.key}`)};let $,w=!1,b=!1,v=!1,k=!1,x=!1,C=!1;function S(){const t=getComputedStyle($);n(0,$.style.zoom=parseFloat(t.zoom)+.05,$),localStorage.setItem("zoom",`${parseFloat(t.zoom)+.05}`)}function _(){const t=getComputedStyle($);n(0,$.style.zoom=parseFloat(t.zoom)-.05,$),localStorage.setItem("zoom",""+(parseFloat(t.zoom)-.05))}const L=["played","wins","losses","currentStreak","maxStreak"];let I={played:0,wins:0,losses:0,currentStreak:0,maxStreak:0};const O=localStorage.getItem("stats");if(O){let t;try{t=JSON.parse(O)}catch(e){t=null}if(t){const e=Object.keys(t);e.sort().join(",")===L.sort().join(",")&&e.forEach((e=>{"number"!=typeof t[e]&&(t[e]=0)})),I=t}localStorage.setItem("stats",JSON.stringify(I))}else localStorage.setItem("stats",JSON.stringify(I));function z(t){n(7,I=t),localStorage.setItem("stats",JSON.stringify(I))}return t.$$.update=()=>{if(8193&t.$$.dirty[0]&&(null==$?void 0:$.style)&&!C){const t=localStorage.getItem("zoom");t&&!isNaN(t)&&n(0,$.style.zoom=parseFloat(t),$),n(13,C=!0)}},[$,h,w,b,v,k,x,I,o,s,function(t){"backspace"===t?n(1,h=h.slice(0,-1)):"Enter"==t?(!0!==y()&&s.add(y().toString()),m()):h.length<=o.wordLength-1&&n(1,h=`${h}${t}`)},S,_,C,()=>I,()=>n(6,x=!x),function(t){P[t?"unshift":"push"]((()=>{$=t,n(0,$),n(13,C)}))},t=>s.remove(t),()=>n(3,b=!0),()=>n(5,k=!0),()=>window.open("https://github.com/jameslinimk/wordlecloneweb","_blank")]}return new class extends ht{constructor(t){super(),mt(this,t,Oe,Ie,l,{},null,[-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
