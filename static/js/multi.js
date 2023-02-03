var multi=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let g;function m(t){g=t}const $=[],b=[],y=[],v=[],x=Promise.resolve();let w=!1;function _(t){y.push(t)}const E=new Set;let L=0;function k(){const t=g;do{for(;L<$.length;){const t=$[L];L++,m(t),S(t.$$)}for(m(null),$.length=0,L=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while($.length);for(;v.length;)v.pop()();w=!1,E.clear(),m(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const M=new Set;function O(t,e){-1===t.$$.dirty[0]&&($.push(t),w||(w=!0,x.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(s,c,l,u,i,f,d,h=[-1]){const p=g;m(s);const $=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:c.target||p.$$.root};d&&d($.root);let b=!1;if($.ctx=l?l(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&O(s,t)),e})):[],$.update(),b=!0,o($.before_update),$.fragment=!!u&&u($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();c.intro&&((y=s.$$.fragment)&&y.i&&(M.delete(y),y.i(v))),function(t,n,s,c){const{fragment:l,on_mount:a,on_destroy:u,after_update:i}=t.$$;l&&l.m(n,s),c||_((()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(_)}(s,c.target,c.anchor,c.customElement),k()}var y,v;m(p)}function A(t,e,n){const o=t.slice();return o[14]=e[n],o}function C(t){let e,n,r,s,i,p,g,m,$,b,y,v,x,w,_,E,L=t[1],k=[];for(let e=0;e<L.length;e+=1)k[e]=P(A(t,L,e));return{c(){e=u("div"),n=u("div"),r=u("form"),s=u("input"),p=f(),g=u("textarea"),m=f(),$=u("button"),$.textContent="send",b=f(),y=u("div");for(let t=0;t<k.length;t+=1)k[t].c();x=f(),w=u("button"),w.textContent="☎️",h(s,"type","text"),h(s,"name","user"),s.value=i=t[0].user,s.hidden=!0,h(g,"cols","50"),h(g,"type","text"),h(g,"name","msg"),h($,"type","submit"),h(r,"name","message"),h(y,"class","msg"),h(n,"class",v="chat-channel "+(t[0].open?"open":"hidden")+" svelte-167hwtc"),h(w,"class","chat-btn svelte-167hwtc"),h(w,"type","button"),h(e,"class","chat-board svelte-167hwtc")},m(o,a){l(o,e,a),c(e,n),c(n,r),c(r,s),c(r,p),c(r,g),c(r,m),c(r,$),c(n,b),c(n,y);for(let t=0;t<k.length;t+=1)k[t].m(y,null);var u;c(e,x),c(e,w),_||(E=[d(r,"submit",(u=t[2],function(t){return t.preventDefault(),u.call(this,t)})),d(w,"click",t[7])],_=!0)},p(t,e){if(1&e&&i!==(i=t[0].user)&&s.value!==i&&(s.value=i),2&e){let n;for(L=t[1],n=0;n<L.length;n+=1){const o=A(t,L,n);k[n]?k[n].p(o,e):(k[n]=P(o),k[n].c(),k[n].m(y,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=L.length}1&e&&v!==(v="chat-channel "+(t[0].open?"open":"hidden")+" svelte-167hwtc")&&h(n,"class",v)},d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),_=!1,o(E)}}}function P(t){let e,n,o,r,s,d,h=t[14].user+"",g=t[14].text+"";return{c(){e=u("li"),n=u("span"),o=i(h),r=f(),s=u("span"),d=f(),p(n,"color","hsl("+t[14].color+",90%,40%)")},m(t,a){l(t,e,a),c(e,n),c(n,o),c(e,r),c(e,s),s.innerHTML=g,c(e,d)},p(t,e){2&e&&h!==(h=t[14].user+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,h),2&e&&p(n,"color","hsl("+t[14].color+",90%,40%)"),2&e&&g!==(g=t[14].text+"")&&(s.innerHTML=g)},d(t){t&&a(e)}}}function R(e){let n,o=e[0].start&&C(e);return{c(){var t,e,r;n=u("sse-chat"),o&&o.c(),r="chat svelte-167hwtc",(e="class")in(t=n)?t[e]="boolean"==typeof t[e]&&""===r||r:h(t,e,r)},m(t,e){l(t,n,e),o&&o.m(n,null)},p(t,[e]){t[0].start?o?o.p(t,e):(o=C(t),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&a(n),o&&o.d()}}}let T="https://cdn.rutynka.io/img/avatar/martinez.svg";function j(t){let e=0;return t.split("").forEach((t=>e+=t.charCodeAt(0))),e}function N(t,e,n){const o="Anonymous"+Math.floor(1e3*Math.random());let r="salt"+Math.floor(1e3*Math.random()),s={},c={open:!1,start:!1,userURL:!1,user:o,avatar:T},l=[];const a=async()=>{c.userURL&&await fetch(api.userUrl,{mode:"cors",headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{t.user&&n(0,c.user=t.user,c),t.avatar&&n(0,c.avatar=t.avatar,c)})).catch((t=>{console.log(t)}));const t={user:c.user,key:c.sseKey,salt:r},e=new URLSearchParams(t),o=new EventSource(c.sseURL+"?"+e);return o.addEventListener("meconnect",(function(t){let e=bb.init({mini:!0,settings:{img:T,text:c.user,progress:100,color:j(c.user)}});s[c.user]=e})),o.addEventListener("userstatus",(function(t){!function(t){let e=t.users.split(",");e.forEach((t=>{if(void 0===s[t]){let e=bb.init({mini:!0,settings:{text:t,progress:100,color:j(t)}});s[t]=e}}));for(let t in s)e.includes(t)||(bb.del(parseInt(s[t])),delete s[t]);console.log(t)}(JSON.parse(t.data))})),o.addEventListener("msg",(function(t){console.log("new msg",t.data);let e=JSON.parse(t.data);l.push({color:j(e.user),user:e.user+":",text:e.msg}),n(1,l=[...l])})),o.onerror=function(t){bb.delAll();for(const t in s)delete s[t];console.error("EventSource failed:",t)},o};console.log("multi loaded 0.2.2");return[c,l,function(t){console.log("send");let e=new FormData(t.target),n={};for(let t of e){const[e,o]=t;n[e]=o}let o=JSON.stringify(n);(async function(t="",e=""){return await fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e})})(c.postMsgURL,"key="+c.sseKey+"&message="+o).then((t=>{console.log("sended",t)}))},function(t){Object.assign(c,t)},function(t){return"debug"===t&&console.log(l,c,s),c[t]},function(){for(const t in s)bb.set({position:0},s[t])},function(t){return t.sseURL?(console.log("pls set sseURL"),!1):!0===t.start?(n(0,c.start=!0,c),n(0,c={...c}),a()):void 0},()=>n(0,c.open=!c.open,c)]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),U(this,t,N,R,s,{set:3,get:4,resetPosition:5,connect:6})}get set(){return this.$$.ctx[3]}get get(){return this.$$.ctx[4]}get resetPosition(){return this.$$.ctx[5]}get connect(){return this.$$.ctx[6]}}({target:document.body,props:{}})}();