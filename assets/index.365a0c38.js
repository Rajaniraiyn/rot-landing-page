const Ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};Ae();function P(){}function fe(l,e){for(const t in e)l[t]=e[t];return l}function xe(l){return l()}function pe(){return Object.create(null)}function te(l){l.forEach(xe)}function Be(l){return typeof l=="function"}function S(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let se;function T(l,e){return se||(se=document.createElement("a")),se.href=e,l===se.href}function Pe(l){return Object.keys(l).length===0}function Se(l,e,t,s){if(l){const n=Me(l,e,t,s);return l[0](n)}}function Me(l,e,t,s){return l[1]&&s?fe(t.ctx.slice(),l[1](s(e))):t.ctx}function De(l,e,t,s){if(l[2]&&s){const n=l[2](s(t));if(e.dirty===void 0)return n;if(typeof n=="object"){const o=[],r=Math.max(e.dirty.length,n.length);for(let i=0;i<r;i+=1)o[i]=e.dirty[i]|n[i];return o}return e.dirty|n}return e.dirty}function Oe(l,e,t,s,n,o){if(n){const r=Me(e,t,s,o);l.p(r,n)}}function ze(l){if(l.ctx.length>32){const e=[],t=l.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function he(l){const e={};for(const t in l)t[0]!=="$"&&(e[t]=l[t]);return e}function m(l,e){l.appendChild(e)}function L(l,e,t){l.insertBefore(e,t||null)}function w(l){l.parentNode.removeChild(l)}function ge(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function v(l){return document.createElement(l)}function A(l){return document.createTextNode(l)}function $(){return A(" ")}function ae(l,e,t,s){return l.addEventListener(e,t,s),()=>l.removeEventListener(e,t,s)}function Re(l){return function(e){return e.preventDefault(),l.call(this,e)}}function f(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function je(l){return Array.from(l.childNodes)}function R(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}function K(l,e,t){l.classList[t?"add":"remove"](e)}function Ie(l,e,{bubbles:t=!1,cancelable:s=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(l,t,s,e),n}let ee;function Z(l){ee=l}function Fe(){if(!ee)throw new Error("Function called outside component initialization");return ee}function Ve(){const l=Fe();return(e,t,{cancelable:s=!1}={})=>{const n=l.$$.callbacks[e];if(n){const o=Ie(e,t,{cancelable:s});return n.slice().forEach(r=>{r.call(l,o)}),!o.defaultPrevented}return!0}}function He(l,e){const t=l.$$.callbacks[e.type];t&&t.slice().forEach(s=>s.call(this,e))}const X=[],me=[],ie=[],$e=[],Ye=Promise.resolve();let de=!1;function Ge(){de||(de=!0,Ye.then(Ne))}function ve(l){ie.push(l)}const ce=new Set;let ne=0;function Ne(){const l=ee;do{for(;ne<X.length;){const e=X[ne];ne++,Z(e),Ue(e.$$)}for(Z(null),X.length=0,ne=0;me.length;)me.pop()();for(let e=0;e<ie.length;e+=1){const t=ie[e];ce.has(t)||(ce.add(t),t())}ie.length=0}while(X.length);for(;$e.length;)$e.pop()();de=!1,ce.clear(),Z(l)}function Ue(l){if(l.fragment!==null){l.update(),te(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(ve)}}const re=new Set;let G;function oe(){G={r:0,c:[],p:G}}function ue(){G.r||te(G.c),G=G.p}function k(l,e){l&&l.i&&(re.delete(l),l.i(e))}function C(l,e,t,s){if(l&&l.o){if(re.has(l))return;re.add(l),G.c.push(()=>{re.delete(l),s&&(t&&l.d(1),s())}),l.o(e)}}function N(l){l&&l.c()}function x(l,e,t,s){const{fragment:n,on_mount:o,on_destroy:r,after_update:i}=l.$$;n&&n.m(e,t),s||ve(()=>{const u=o.map(xe).filter(Be);r?r.push(...u):te(u),l.$$.on_mount=[]}),i.forEach(ve)}function M(l,e){const t=l.$$;t.fragment!==null&&(te(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function We(l,e){l.$$.dirty[0]===-1&&(X.push(l),Ge(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function D(l,e,t,s,n,o,r,i=[-1]){const u=ee;Z(l);const a=l.$$={fragment:null,ctx:null,props:o,update:P,not_equal:n,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:pe(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};r&&r(a.root);let d=!1;if(a.ctx=t?t(l,e.props||{},(c,_,...h)=>{const p=h.length?h[0]:_;return a.ctx&&n(a.ctx[c],a.ctx[c]=p)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](p),d&&We(l,c)),_}):[],a.update(),d=!0,te(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const c=je(e.target);a.fragment&&a.fragment.l(c),c.forEach(w)}else a.fragment&&a.fragment.c();e.intro&&k(l.$$.fragment),x(l,e.target,e.anchor,e.customElement),Ne()}Z(u)}class O{$destroy(){M(this,1),this.$destroy=P}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ke(l){let e,t,s,n;const o=l[5].default,r=Se(o,l,l[4],null);return{c(){e=v("button"),r&&r.c(),f(e,"style",l[2]),f(e,"class","svelte-i51r6m"),K(e,"no-border",l[0]),K(e,"has-icon",l[1])},m(i,u){L(i,e,u),r&&r.m(e,null),t=!0,s||(n=ae(e,"click",l[3]),s=!0)},p(i,[u]){r&&r.p&&(!t||u&16)&&Oe(r,o,i,i[4],t?De(o,i[4],u,null):ze(i[4]),null),u&1&&K(e,"no-border",i[0]),u&2&&K(e,"has-icon",i[1])},i(i){t||(k(r,i),t=!0)},o(i){C(r,i),t=!1},d(i){i&&w(e),r&&r.d(i),s=!1,n()}}}function Je(l,e,t){let{$$slots:s={},$$scope:n}=e,{noBorder:o=!1}=e,{hasIcon:r=!1}=e,i=e.style;const u=Ve(),a=d=>u("click");return l.$$set=d=>{t(7,e=fe(fe({},e),he(d))),"noBorder"in d&&t(0,o=d.noBorder),"hasIcon"in d&&t(1,r=d.hasIcon),"$$scope"in d&&t(4,n=d.$$scope)},e=he(e),[o,r,i,a,n,s]}class H extends O{constructor(e){super(),D(this,e,Je,Ke,S,{noBorder:0,hasIcon:1})}}function Qe(l){let e;return{c(){e=A("Login")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function Xe(l){let e;return{c(){e=A("Register")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function Ze(l){let e,t,s,n,o,r,i,u,a,d;return i=new H({props:{noBorder:!0,$$slots:{default:[Qe]},$$scope:{ctx:l}}}),a=new H({props:{$$slots:{default:[Xe]},$$scope:{ctx:l}}}),{c(){e=v("nav"),t=v("div"),t.textContent="ROT",s=$(),n=v("div"),n.innerHTML=`<ul class="svelte-1t0yhg8"><li class="svelte-1t0yhg8">Features</li> 
      <li class="svelte-1t0yhg8">Products</li> 
      <li class="svelte-1t0yhg8">Company</li> 
      <li class="svelte-1t0yhg8">Pricing</li> 
      <li class="svelte-1t0yhg8">Support</li></ul>`,o=$(),r=v("div"),N(i.$$.fragment),u=$(),N(a.$$.fragment),f(t,"class","logo svelte-1t0yhg8"),f(n,"class","navigation svelte-1t0yhg8"),f(r,"class","auth"),f(e,"class","svelte-1t0yhg8")},m(c,_){L(c,e,_),m(e,t),m(e,s),m(e,n),m(e,o),m(e,r),x(i,r,null),m(r,u),x(a,r,null),d=!0},p(c,[_]){const h={};_&1&&(h.$$scope={dirty:_,ctx:c}),i.$set(h);const p={};_&1&&(p.$$scope={dirty:_,ctx:c}),a.$set(p)},i(c){d||(k(i.$$.fragment,c),k(a.$$.fragment,c),d=!0)},o(c){C(i.$$.fragment,c),C(a.$$.fragment,c),d=!1},d(c){c&&w(e),M(i),M(a)}}}class et extends O{constructor(e){super(),D(this,e,null,Ze,S,{})}}var tt="./assets/down.956e6158.webp",Te="./assets/right-arrow.66a9ac31.svg";function lt(l){let e,t,s;return{c(){e=A(`Let's go
        `),t=v("img"),T(t.src,s=Te)||f(t,"src",s),f(t,"alt","right arrow")},m(n,o){L(n,e,o),L(n,t,o)},p:P,d(n){n&&w(e),n&&w(t)}}}function st(l){let e,t,s,n,o,r,i,u,a,d,c,_;return u=new H({props:{hasIcon:!0,$$slots:{default:[lt]},$$scope:{ctx:l}}}),{c(){e=v("header"),t=v("span"),t.textContent="A dedicated platform for",s=$(),n=v("span"),n.textContent="Competitive gaming",o=$(),r=v("p"),r.textContent="A PLATFORM FOR ALL GAMERS TO CONNECT, INTRACT AND WIN MORE",i=$(),N(u.$$.fragment),a=$(),d=v("img"),f(t,"class","svelte-12i73k8"),f(n,"class","gradient svelte-12i73k8"),T(d.src,c=tt)||f(d,"src",c),f(d,"alt",""),f(d,"class","scroll-to-down svelte-12i73k8"),f(e,"class","svelte-12i73k8")},m(h,p){L(h,e,p),m(e,t),m(e,s),m(e,n),m(e,o),m(e,r),m(e,i),x(u,e,null),m(e,a),m(e,d),_=!0},p(h,[p]){const b={};p&1&&(b.$$scope={dirty:p,ctx:h}),u.$set(b)},i(h){_||(k(u.$$.fragment,h),_=!0)},o(h){C(u.$$.fragment,h),_=!1},d(h){h&&w(e),M(u)}}}class nt extends O{constructor(e){super(),D(this,e,null,st,S,{})}}var it="./assets/bg.9c7efe68.png",rt="./assets/bot.083c1e81.svg";function at(l){let e,t,s,n,o;return{c(){e=v("div"),t=v("img"),n=$(),o=v("p"),o.textContent=`A simplified Application to handle all of your events and meet gamers of
        your kind`,T(t.src,s=rt)||f(t,"src",s),f(t,"alt","bot"),f(t,"class","svelte-1h2jyed"),f(o,"class","gradient svelte-1h2jyed"),f(e,"class","svelte-1h2jyed")},m(r,i){L(r,e,i),m(e,t),m(e,n),m(e,o)},p:P,i:P,o:P,d(r){r&&w(e)}}}class ot extends O{constructor(e){super(),D(this,e,null,at,S,{})}}function ut(l){let e,t,s,n,o,r;return{c(){e=v("div"),t=v("img"),n=$(),o=v("p"),r=A(l[0]),T(t.src,s=l[1])||f(t,"src",s),f(t,"alt",""),f(e,"class","svelte-1yghpb1")},m(i,u){L(i,e,u),m(e,t),m(e,n),m(e,o),m(o,r)},p(i,[u]){u&2&&!T(t.src,s=i[1])&&f(t,"src",s),u&1&&R(r,i[0])},i:P,o:P,d(i){i&&w(e)}}}function ct(l,e,t){let{content:s}=e,{icon:n}=e;return l.$$set=o=>{"content"in o&&t(0,s=o.content),"icon"in o&&t(1,n=o.icon)},[s,n]}class ft extends O{constructor(e){super(),D(this,e,ct,ut,S,{content:0,icon:1})}}var Q="./assets/f1.6cd18399.svg";function be(l,e,t){const s=l.slice();s[1]=e[t];const n=s[1];return s[2]=n.icon,s[3]=n.content,s}function we(l){let e,t;return e=new ft({props:{icon:l[2],content:l[3]}}),{c(){N(e.$$.fragment)},m(s,n){x(e,s,n),t=!0},p:P,i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function mt(l){let e,t,s,n,o,r=l[0],i=[];for(let a=0;a<r.length;a+=1)i[a]=we(be(l,r,a));const u=a=>C(i[a],1,1,()=>{i[a]=null});return{c(){e=v("section"),t=v("h2"),t.textContent="Explore the features!",s=$(),n=v("div");for(let a=0;a<i.length;a+=1)i[a].c();f(t,"class","gradient svelte-1kd8zl8"),f(n,"class","svelte-1kd8zl8")},m(a,d){L(a,e,d),m(e,t),m(e,s),m(e,n);for(let c=0;c<i.length;c+=1)i[c].m(n,null);o=!0},p(a,[d]){if(d&1){r=a[0];let c;for(c=0;c<r.length;c+=1){const _=be(a,r,c);i[c]?(i[c].p(_,d),k(i[c],1)):(i[c]=we(_),i[c].c(),k(i[c],1),i[c].m(n,null))}for(oe(),c=r.length;c<i.length;c+=1)u(c);ue()}},i(a){if(!o){for(let d=0;d<r.length;d+=1)k(i[d]);o=!0}},o(a){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)C(i[d]);o=!1},d(a){a&&w(e),ge(i,a)}}}function dt(l){return[[{icon:Q,content:"Connect with Various Events Around the World"},{icon:Q,content:"Explore a Variety of Games"},{icon:Q,content:"Become a Verified Tournament Host"},{icon:Q,content:"Connect with Gamers Around the World"},{icon:Q,content:"Advanced Leaderboard To Boost Up the Competitive Spirit"}]]}class vt extends O{constructor(e){super(),D(this,e,dt,mt,S,{})}}var gt="./assets/playbutton.9398ba67.svg",_t="./assets/dummy-video.9e3a1adc.mp4";function ye(l){let e,t,s,n,o;return{c(){e=v("div"),t=v("img"),T(t.src,s=gt)||f(t,"src",s),f(t,"alt",""),f(t,"class","svelte-sx1hvx"),f(e,"class","controls svelte-sx1hvx")},m(r,i){L(r,e,i),m(e,t),n||(o=ae(t,"click",l[2]),n=!0)},p:P,d(r){r&&w(e),n=!1,o()}}}function pt(l){let e,t,s,n,o,r,i,u,a,d,c=!l[1]&&ye(l);return{c(){e=v("div"),t=v("article"),t.innerHTML=`<p class="head svelte-sx1hvx">Let\u2019s explore the</p> 
        <h2 class="gradient svelte-sx1hvx">Region Of Tournaments</h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...</p>`,s=$(),n=v("section"),o=v("video"),r=v("track"),u=$(),c&&c.c(),f(t,"class","svelte-sx1hvx"),f(r,"kind","captions"),T(o.src,i=_t)||f(o,"src",i),f(o,"class","svelte-sx1hvx"),f(n,"class","svelte-sx1hvx"),f(e,"class","svelte-sx1hvx")},m(_,h){L(_,e,h),m(e,t),m(e,s),m(e,n),m(n,o),m(o,r),l[4](o),m(n,u),c&&c.m(n,null),a||(d=ae(o,"click",l[3]),a=!0)},p(_,[h]){_[1]?c&&(c.d(1),c=null):c?c.p(_,h):(c=ye(_),c.c(),c.m(n,null))},i:P,o:P,d(_){_&&w(e),l[4](null),c&&c.d(),a=!1,d()}}}function ht(l,e,t){let s,n=!1;function o(){s.play(),t(1,n=!0),t(0,s.controls=!0,s)}function r(){s.pause(),t(1,n=!1),t(0,s.controls=!1,s)}function i(u){me[u?"unshift":"push"](()=>{s=u,t(0,s)})}return[s,n,o,r,i]}class $t extends O{constructor(e){super(),D(this,e,ht,pt,S,{})}}function bt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h,p,b,E;return _=new H({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),{c(){e=v("article"),t=v("h2"),s=A(l[0]),n=$(),o=v("h3"),r=A(l[1]),i=$(),u=v("p"),a=A(l[2]),d=$(),c=v("a"),N(_.$$.fragment),h=$(),p=v("img"),f(t,"class","svelte-mkealu"),f(o,"class","svelte-mkealu"),f(u,"class","svelte-mkealu"),f(c,"href",l[3]),f(c,"class","svelte-mkealu"),f(e,"class","svelte-mkealu"),T(p.src,b=l[4])||f(p,"src",b),f(p,"alt",""),f(p,"class","svelte-mkealu")},m(g,y){L(g,e,y),m(e,t),m(t,s),m(e,n),m(e,o),m(o,r),m(e,i),m(e,u),m(u,a),m(e,d),m(e,c),x(_,c,null),L(g,h,y),L(g,p,y),E=!0},p(g,y){(!E||y&1)&&R(s,g[0]),(!E||y&2)&&R(r,g[1]),(!E||y&4)&&R(a,g[2]);const B={};y&64&&(B.$$scope={dirty:y,ctx:g}),_.$set(B),(!E||y&8)&&f(c,"href",g[3]),(!E||y&16&&!T(p.src,b=g[4]))&&f(p,"src",b)},i(g){E||(k(_.$$.fragment,g),E=!0)},o(g){C(_.$$.fragment,g),E=!1},d(g){g&&w(e),M(_),g&&w(h),g&&w(p)}}}function wt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h,p,b,E;return b=new H({props:{$$slots:{default:[qt]},$$scope:{ctx:l}}}),{c(){e=v("img"),s=$(),n=v("article"),o=v("h2"),r=A(l[0]),i=$(),u=v("h3"),a=A(l[1]),d=$(),c=v("p"),_=A(l[2]),h=$(),p=v("a"),N(b.$$.fragment),T(e.src,t=l[4])||f(e,"src",t),f(e,"alt",""),f(e,"class","svelte-mkealu"),f(o,"class","svelte-mkealu"),f(u,"class","svelte-mkealu"),f(c,"class","svelte-mkealu"),f(p,"href",l[3]),f(p,"class","svelte-mkealu"),f(n,"class","svelte-mkealu")},m(g,y){L(g,e,y),L(g,s,y),L(g,n,y),m(n,o),m(o,r),m(n,i),m(n,u),m(u,a),m(n,d),m(n,c),m(c,_),m(n,h),m(n,p),x(b,p,null),E=!0},p(g,y){(!E||y&16&&!T(e.src,t=g[4]))&&f(e,"src",t),(!E||y&1)&&R(r,g[0]),(!E||y&2)&&R(a,g[1]),(!E||y&4)&&R(_,g[2]);const B={};y&64&&(B.$$scope={dirty:y,ctx:g}),b.$set(B),(!E||y&8)&&f(p,"href",g[3])},i(g){E||(k(b.$$.fragment,g),E=!0)},o(g){C(b.$$.fragment,g),E=!1},d(g){g&&w(e),g&&w(s),g&&w(n),M(b)}}}function yt(l){let e;return{c(){e=A("Learn More..")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function qt(l){let e;return{c(){e=A("Learn More..")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function kt(l){let e,t,s,n;const o=[wt,bt],r=[];function i(u,a){return u[5]?0:1}return t=i(l),s=r[t]=o[t](l),{c(){e=v("div"),s.c(),f(e,"class","svelte-mkealu"),K(e,"alternate",l[5])},m(u,a){L(u,e,a),r[t].m(e,null),n=!0},p(u,[a]){let d=t;t=i(u),t===d?r[t].p(u,a):(oe(),C(r[d],1,1,()=>{r[d]=null}),ue(),s=r[t],s?s.p(u,a):(s=r[t]=o[t](u),s.c()),k(s,1),s.m(e,null)),a&32&&K(e,"alternate",u[5])},i(u){n||(k(s),n=!0)},o(u){C(s),n=!1},d(u){u&&w(e),r[t].d()}}}function Lt(l,e,t){let{title:s}=e,{subtitle:n}=e,{content:o}=e,{learnMoreLink:r}=e,{image:i}=e,{alternate:u}=e;return l.$$set=a=>{"title"in a&&t(0,s=a.title),"subtitle"in a&&t(1,n=a.subtitle),"content"in a&&t(2,o=a.content),"learnMoreLink"in a&&t(3,r=a.learnMoreLink),"image"in a&&t(4,i=a.image),"alternate"in a&&t(5,u=a.alternate)},[s,n,o,r,i,u]}class Ct extends O{constructor(e){super(),D(this,e,Lt,kt,S,{title:0,subtitle:1,content:2,learnMoreLink:3,image:4,alternate:5})}}var qe="./assets/Esports.2246626a.svg";function ke(l,e,t){const s=l.slice();s[1]=e[t];const n=s[1];return s[2]=n.title,s[3]=n.subtitle,s[4]=n.content,s[5]=n.learnMoreLink,s[6]=n.image,s[7]=n.alternate,s}function Le(l){let e,t;return e=new Ct({props:{alternate:l[7],title:l[2],subtitle:l[3],content:l[4],learnMoreLink:l[5],image:l[6]}}),{c(){N(e.$$.fragment)},m(s,n){x(e,s,n),t=!0},p:P,i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Et(l){let e,t,s=l[0],n=[];for(let r=0;r<s.length;r+=1)n[r]=Le(ke(l,s,r));const o=r=>C(n[r],1,1,()=>{n[r]=null});return{c(){e=v("div");for(let r=0;r<n.length;r+=1)n[r].c();f(e,"class","svelte-jvs74u")},m(r,i){L(r,e,i);for(let u=0;u<n.length;u+=1)n[u].m(e,null);t=!0},p(r,[i]){if(i&1){s=r[0];let u;for(u=0;u<s.length;u+=1){const a=ke(r,s,u);n[u]?(n[u].p(a,i),k(n[u],1)):(n[u]=Le(a),n[u].c(),k(n[u],1),n[u].m(e,null))}for(oe(),u=s.length;u<n.length;u+=1)o(u);ue()}},i(r){if(!t){for(let i=0;i<s.length;i+=1)k(n[i]);t=!0}},o(r){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)C(n[i]);t=!1},d(r){r&&w(e),ge(n,r)}}}function xt(l){return[[{title:"About",subtitle:"Esports and Evenets",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",learnMoreLink:"#",image:qe},{title:"You can also get",subtitle:"Gamers for Teams",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",learnMoreLink:"#",image:qe,alternate:!0}]]}class Mt extends O{constructor(e){super(),D(this,e,xt,Et,S,{})}}function Nt(l){let e;return{c(){e=A("Learn More")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function Tt(l){let e,t,s,n,o,r,i;return r=new H({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),{c(){e=v("div"),t=v("h2"),t.textContent="Become a Host and Host Your Events With Ease",s=$(),n=v("p"),n.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac
        nulla faucibus proin nisl augue. Vestibulum sem scelerisque suspendisse
        praesent pretium non. At mattis bibendum ut sed praesent. Nam at id
        elementum gravida.`,o=$(),N(r.$$.fragment),f(e,"class","svelte-1u8hvsy")},m(u,a){L(u,e,a),m(e,t),m(e,s),m(e,n),m(e,o),x(r,e,null),i=!0},p(u,[a]){const d={};a&1&&(d.$$scope={dirty:a,ctx:u}),r.$set(d)},i(u){i||(k(r.$$.fragment,u),i=!0)},o(u){C(r.$$.fragment,u),i=!1},d(u){u&&w(e),M(r)}}}class At extends O{constructor(e){super(),D(this,e,null,Tt,S,{})}}function Bt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h;return{c(){e=v("div"),t=v("p"),s=A(l[0]),n=$(),o=v("section"),r=v("img"),u=$(),a=v("h3"),d=A(l[2]),c=$(),_=v("p"),h=A(l[3]),f(t,"class","svelte-124wc0z"),T(r.src,i=l[1])||f(r,"src",i),f(r,"alt",""),f(r,"class","svelte-124wc0z"),f(a,"class","svelte-124wc0z"),f(_,"class","svelte-124wc0z"),f(o,"class","svelte-124wc0z"),f(e,"class","svelte-124wc0z")},m(p,b){L(p,e,b),m(e,t),m(t,s),m(e,n),m(e,o),m(o,r),m(o,u),m(o,a),m(a,d),m(o,c),m(o,_),m(_,h)},p(p,[b]){b&1&&R(s,p[0]),b&2&&!T(r.src,i=p[1])&&f(r,"src",i),b&4&&R(d,p[2]),b&8&&R(h,p[3])},i:P,o:P,d(p){p&&w(e)}}}function Pt(l,e,t){let{content:s}=e,{profilePic:n}=e,{profileName:o}=e,{profileDetails:r}=e;return l.$$set=i=>{"content"in i&&t(0,s=i.content),"profilePic"in i&&t(1,n=i.profilePic),"profileName"in i&&t(2,o=i.profileName),"profileDetails"in i&&t(3,r=i.profileDetails)},[s,n,o,r]}class St extends O{constructor(e){super(),D(this,e,Pt,Bt,S,{content:0,profilePic:1,profileName:2,profileDetails:3})}}var W="./assets/testimonial1.2125cb75.png";function Ce(l,e,t){const s=l.slice();return s[1]=e[t],s}function Ee(l){let e,t;return e=new St({props:{content:l[1].content,profilePic:l[1].profilePic,profileName:l[1].profileName,profileDetails:l[1].profileDetails}}),{c(){N(e.$$.fragment)},m(s,n){x(e,s,n),t=!0},p:P,i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Dt(l){let e,t,s,n,o,r=l[0],i=[];for(let a=0;a<r.length;a+=1)i[a]=Ee(Ce(l,r,a));const u=a=>C(i[a],1,1,()=>{i[a]=null});return{c(){e=v("div"),t=v("h2"),t.textContent="Testimonials",s=$(),n=v("div");for(let a=0;a<i.length;a+=1)i[a].c();f(t,"class","svelte-9ja3wn"),f(n,"class","svelte-9ja3wn"),f(e,"class","svelte-9ja3wn")},m(a,d){L(a,e,d),m(e,t),m(e,s),m(e,n);for(let c=0;c<i.length;c+=1)i[c].m(n,null);o=!0},p(a,[d]){if(d&1){r=a[0];let c;for(c=0;c<r.length;c+=1){const _=Ce(a,r,c);i[c]?(i[c].p(_,d),k(i[c],1)):(i[c]=Ee(_),i[c].c(),k(i[c],1),i[c].m(n,null))}for(oe(),c=r.length;c<i.length;c+=1)u(c);ue()}},i(a){if(!o){for(let d=0;d<r.length;d+=1)k(i[d]);o=!0}},o(a){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)C(i[d]);o=!1},d(a){a&&w(e),ge(i,a)}}}function Ot(l){return[[{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"}]]}class zt extends O{constructor(e){super(),D(this,e,Ot,Dt,S,{})}}function Rt(l){let e;return{c(){e=A("Submit")},m(t,s){L(t,e,s)},d(t){t&&w(e)}}}function jt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h,p,b,E;return h=new H({props:{style:"grid-area: 3 / 2 / 4 / 4; padding: 0.75em 4em; font-size: 2em; font-weight: bold;",$$slots:{default:[Rt]},$$scope:{ctx:l}}}),h.$on("click",It),{c(){e=v("div"),t=v("h2"),t.textContent="Contact us",s=$(),n=v("p"),n.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus
        odio tempor rutrum...`,o=$(),r=v("form"),i=v("input"),u=$(),a=v("input"),d=$(),c=v("textarea"),_=$(),N(h.$$.fragment),f(t,"class","svelte-1hbwxu5"),f(i,"type","text"),f(i,"placeholder","Your Name"),f(i,"id","name"),f(i,"class","svelte-1hbwxu5"),f(a,"type","email"),f(a,"placeholder","Your Email Address"),f(a,"id","email"),f(a,"class","svelte-1hbwxu5"),f(c,"name","Message"),f(c,"placeholder","Your Message"),f(c,"id",""),f(c,"cols","30"),f(c,"rows","10"),f(c,"class","svelte-1hbwxu5"),f(r,"class","svelte-1hbwxu5"),f(e,"class","svelte-1hbwxu5")},m(g,y){L(g,e,y),m(e,t),m(e,s),m(e,n),m(e,o),m(e,r),m(r,i),m(r,u),m(r,a),m(r,d),m(r,c),m(r,_),x(h,r,null),p=!0,b||(E=ae(r,"submit",Re(l[0])),b=!0)},p(g,[y]){const B={};y&2&&(B.$$scope={dirty:y,ctx:g}),h.$set(B)},i(g){p||(k(h.$$.fragment,g),p=!0)},o(g){C(h.$$.fragment,g),p=!1},d(g){g&&w(e),M(h),b=!1,E()}}}function It(){alert(`Thank you for your submission. 
 we'll contact you soon.`)}function Ft(l){function e(t){He.call(this,l,t)}return[e]}class Vt extends O{constructor(e){super(),D(this,e,Ft,jt,S,{})}}var Ht="./assets/linkdin.8276a3aa.svg",Yt="./assets/facebook.3fbf7f11.svg",Gt="./assets/cb.4cc899af.svg",Ut="./assets/insta.20886a0f.svg",Wt="./assets/twitter.1193a35b.svg";function Kt(l){let e,t,s;return{c(){e=A(`Let's go
                `),t=v("img"),T(t.src,s=Te)||f(t,"src",s),f(t,"alt","right arrow")},m(n,o){L(n,e,o),L(n,t,o)},p:P,d(n){n&&w(e),n&&w(t)}}}function Jt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h,p,b,E,g,y,B,F,j,U,z,J,Y,q,V;return u=new H({props:{hasIcon:!0,$$slots:{default:[Kt]},$$scope:{ctx:l}}}),{c(){e=v("footer"),t=v("div"),s=v("h2"),s.textContent="ROT",n=$(),o=v("p"),o.textContent=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
            perferendis saepe et minus iste beatae, fugiat numquam, amet, illo
            non dolorem neque soluta molestias nulla ducimus quos qui modi!
            Porro, illo. Amet sequi quo eveniet molestiae voluptas modi vel
            facilis maiores dignissimos deserunt accusantium tempora dolore odio
            quasi nobis voluptatibus nostrum in ipsa, ducimus excepturi, cumque
            quam qui ab?`,r=$(),i=v("div"),N(u.$$.fragment),a=$(),d=v("div"),c=v("img"),h=$(),p=v("img"),E=$(),g=v("img"),B=$(),F=v("img"),U=$(),z=v("img"),Y=$(),q=v("div"),q.innerHTML=`<div><h3 class="svelte-1vq09wd">site</h3> 
            <ul class="svelte-1vq09wd"><li class="svelte-1vq09wd">features</li> 
                <li class="svelte-1vq09wd">products</li> 
                <li class="svelte-1vq09wd">company</li> 
                <li class="svelte-1vq09wd">pricing</li> 
                <li class="svelte-1vq09wd">support</li></ul></div> 

        <div><h3 class="svelte-1vq09wd">company</h3> 
            <ul class="svelte-1vq09wd"><li class="svelte-1vq09wd">about us</li> 
                <li class="svelte-1vq09wd">our team</li> 
                <li class="svelte-1vq09wd">our story</li> 
                <li class="svelte-1vq09wd">career</li></ul></div> 

        <div><h3 class="svelte-1vq09wd">legale</h3> 
            <ul class="svelte-1vq09wd"><li class="svelte-1vq09wd">privacy</li> 
                <li class="svelte-1vq09wd">terms &amp; condition</li> 
                <li class="svelte-1vq09wd">company policy</li></ul></div> 

        <div><h3 class="svelte-1vq09wd">follow us one</h3> 
            <ul class="svelte-1vq09wd"><li class="svelte-1vq09wd">twitter</li> 
                <li class="svelte-1vq09wd">facebook</li> 
                <li class="svelte-1vq09wd">linkdin</li></ul></div>`,f(s,"class","svelte-1vq09wd"),f(i,"class","btn"),T(c.src,_=Ht)||f(c,"src",_),f(c,"alt",""),T(p.src,b=Yt)||f(p,"src",b),f(p,"alt",""),T(g.src,y=Gt)||f(g,"src",y),f(g,"alt",""),T(F.src,j=Ut)||f(F,"src",j),f(F,"alt",""),T(z.src,J=Wt)||f(z,"src",J),f(z,"alt",""),f(d,"class","imgs svelte-1vq09wd"),f(t,"class","svelte-1vq09wd"),f(q,"class","links svelte-1vq09wd"),f(e,"class","grid svelte-1vq09wd")},m(I,le){L(I,e,le),m(e,t),m(t,s),m(t,n),m(t,o),m(t,r),m(t,i),x(u,i,null),m(t,a),m(t,d),m(d,c),m(d,h),m(d,p),m(d,E),m(d,g),m(d,B),m(d,F),m(d,U),m(d,z),m(e,Y),m(e,q),V=!0},p(I,[le]){const _e={};le&1&&(_e.$$scope={dirty:le,ctx:I}),u.$set(_e)},i(I){V||(k(u.$$.fragment,I),V=!0)},o(I){C(u.$$.fragment,I),V=!1},d(I){I&&w(e),M(u)}}}class Qt extends O{constructor(e){super(),D(this,e,null,Jt,S,{})}}function Xt(l){let e,t,s,n,o,r,i,u,a,d,c,_,h,p,b,E,g,y,B,F,j,U,z,J,Y;return s=new et({}),o=new nt({}),i=new ot({}),a=new vt({}),c=new $t({}),h=new Mt({}),b=new At({}),g=new zt({}),B=new Vt({}),j=new Qt({}),{c(){e=v("div"),t=v("main"),N(s.$$.fragment),n=$(),N(o.$$.fragment),r=$(),N(i.$$.fragment),u=$(),N(a.$$.fragment),d=$(),N(c.$$.fragment),_=$(),N(h.$$.fragment),p=$(),N(b.$$.fragment),E=$(),N(g.$$.fragment),y=$(),N(B.$$.fragment),F=$(),N(j.$$.fragment),U=$(),z=v("img"),f(t,"class","svelte-r7w2e0"),f(e,"class","svelte-r7w2e0"),T(z.src,J=it)||f(z,"src",J),f(z,"alt","background"),f(z,"id","bg"),f(z,"class","svelte-r7w2e0")},m(q,V){L(q,e,V),m(e,t),x(s,t,null),m(t,n),x(o,t,null),m(t,r),x(i,t,null),m(t,u),x(a,t,null),m(t,d),x(c,t,null),m(t,_),x(h,t,null),m(t,p),x(b,t,null),m(t,E),x(g,t,null),m(t,y),x(B,t,null),m(e,F),x(j,e,null),L(q,U,V),L(q,z,V),Y=!0},p:P,i(q){Y||(k(s.$$.fragment,q),k(o.$$.fragment,q),k(i.$$.fragment,q),k(a.$$.fragment,q),k(c.$$.fragment,q),k(h.$$.fragment,q),k(b.$$.fragment,q),k(g.$$.fragment,q),k(B.$$.fragment,q),k(j.$$.fragment,q),Y=!0)},o(q){C(s.$$.fragment,q),C(o.$$.fragment,q),C(i.$$.fragment,q),C(a.$$.fragment,q),C(c.$$.fragment,q),C(h.$$.fragment,q),C(b.$$.fragment,q),C(g.$$.fragment,q),C(B.$$.fragment,q),C(j.$$.fragment,q),Y=!1},d(q){q&&w(e),M(s),M(o),M(i),M(a),M(c),M(h),M(b),M(g),M(B),M(j),q&&w(U),q&&w(z)}}}class Zt extends O{constructor(e){super(),D(this,e,null,Xt,S,{})}}new Zt({target:document.getElementById("app")});
