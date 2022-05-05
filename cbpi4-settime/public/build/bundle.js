var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function l(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function m(t){h=t}function $(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const g=[],b=[],w=[],y=[],_=Promise.resolve();let x=!1;function k(t){w.push(t)}const v=new Set;let E=0;function S(){const t=h;do{for(;E<g.length;){const t=g[E];E++,m(t),j(t.$$)}for(m(null),g.length=0,E=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];v.has(n)||(v.add(n),n())}w.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,v.clear(),m(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const A=new Set;function C(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,_.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(c,i,a,s,f,l,d,p=[-1]){const $=h;m(c);const g=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||($?$.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:i.target||$.$$.root};d&&d(g.root);let b=!1;if(g.ctx=a?a(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&f(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&C(c,t)),n})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();i.intro&&((w=c.$$.fragment)&&w.i&&(A.delete(w),w.i(y))),function(t,e,c,i){const{fragment:u,on_mount:a,on_destroy:s,after_update:f}=t.$$;u&&u.m(e,c),i||k((()=>{const e=a.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(k)}(c,i.target,i.anchor,i.customElement),S()}var w,y;m($)}function L(n){let e,r,c,h,m,$,g,b,w,y,_;return{c(){e=a("main"),r=a("h1"),c=s(n[1]),h=f(),m=s(n[0]),$=f(),g=a("button"),g.textContent="Set",b=f(),w=a("button"),w.textContent="Skip",d(r,"class","svelte-1tky8bj"),d(e,"class","svelte-1tky8bj")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),i(e,r),i(r,c),i(e,h),i(e,m),i(e,$),i(e,g),i(e,b),i(e,w),y||(_=[l(g,"click",T),l(w,"click",M)],y=!0)},p(t,[n]){2&n&&p(c,t[1]),1&n&&p(m,t[0])},i:t,o:t,d(t){t&&u(e),y=!1,o(_)}}}function T(){fetch("/settime/set"+Math.floor((new Date).getTime()/1e3)),M()}function M(){window.location.replace("/cbpi_ui/static/index.html")}function N(t,n,e){let{name:o}=n,{nowepoch:r=Math.floor((new Date).getTime()/1e3)}=n,{nowtime:c=(new Date).toLocaleString()}=n;return $((async()=>{fetch("/settime/get").then((t=>{t.text().then((t=>{e(0,o=new Date(1e3*t).toLocaleString())}))}))})),t.$$set=t=>{"name"in t&&e(0,o=t.name),"nowepoch"in t&&e(2,r=t.nowepoch),"nowtime"in t&&e(1,c=t.nowtime)},[o,c,r]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),D(this,t,N,L,c,{name:0,nowepoch:2,nowtime:1})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
