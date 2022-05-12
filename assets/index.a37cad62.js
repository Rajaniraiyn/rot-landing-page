const Ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};Ae();function B(){}function ue(l,e){for(const t in e)l[t]=e[t];return l}function Le(l){return l()}function _e(){return Object.create(null)}function ee(l){l.forEach(Le)}function Te(l){return typeof l=="function"}function O(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let le;function T(l,e){return le||(le=document.createElement("a")),le.href=e,l===le.href}function Ee(l){return Object.keys(l).length===0}function Be(l,e,t,s){if(l){const n=Ce(l,e,t,s);return l[0](n)}}function Ce(l,e,t,s){return l[1]&&s?ue(t.ctx.slice(),l[1](s(e))):t.ctx}function Se(l,e,t,s){if(l[2]&&s){const n=l[2](s(t));if(e.dirty===void 0)return n;if(typeof n=="object"){const o=[],i=Math.max(e.dirty.length,n.length);for(let r=0;r<i;r+=1)o[r]=e.dirty[r]|n[r];return o}return e.dirty|n}return e.dirty}function Oe(l,e,t,s,n,o){if(n){const i=Ce(e,t,s,o);l.p(i,n)}}function Pe(l){if(l.ctx.length>32){const e=[],t=l.ctx.length/32;for(let s=0;s<t;s++)e[s]=-1;return e}return-1}function pe(l){const e={};for(const t in l)t[0]!=="$"&&(e[t]=l[t]);return e}function f(l,e){l.appendChild(e)}function q(l,e,t){l.insertBefore(e,t||null)}function k(l){l.parentNode.removeChild(l)}function me(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function g(l){return document.createElement(l)}function E(l){return document.createTextNode(l)}function h(){return E(" ")}function u(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function De(l){return Array.from(l.childNodes)}function z(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}function K(l,e,t){l.classList[t?"add":"remove"](e)}let de;function Z(l){de=l}const X=[],ve=[],se=[],he=[],Re=Promise.resolve();let ce=!1;function ze(){ce||(ce=!0,Re.then(Me))}function fe(l){se.push(l)}const oe=new Set;let ne=0;function Me(){const l=de;do{for(;ne<X.length;){const e=X[ne];ne++,Z(e),je(e.$$)}for(Z(null),X.length=0,ne=0;ve.length;)ve.pop()();for(let e=0;e<se.length;e+=1){const t=se[e];oe.has(t)||(oe.add(t),t())}se.length=0}while(X.length);for(;he.length;)he.pop()();ce=!1,oe.clear(),Z(l)}function je(l){if(l.fragment!==null){l.update(),ee(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(fe)}}const ie=new Set;let G;function re(){G={r:0,c:[],p:G}}function ae(){G.r||ee(G.c),G=G.p}function w(l,e){l&&l.i&&(ie.delete(l),l.i(e))}function L(l,e,t,s){if(l&&l.o){if(ie.has(l))return;ie.add(l),G.c.push(()=>{ie.delete(l),s&&(t&&l.d(1),s())}),l.o(e)}}function A(l){l&&l.c()}function M(l,e,t,s){const{fragment:n,on_mount:o,on_destroy:i,after_update:r}=l.$$;n&&n.m(e,t),s||fe(()=>{const c=o.map(Le).filter(Te);i?i.push(...c):ee(c),l.$$.on_mount=[]}),r.forEach(fe)}function N(l,e){const t=l.$$;t.fragment!==null&&(ee(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ie(l,e){l.$$.dirty[0]===-1&&(X.push(l),ze(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function P(l,e,t,s,n,o,i,r=[-1]){const c=de;Z(l);const a=l.$$={fragment:null,ctx:null,props:o,update:B,not_equal:n,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:_e(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};i&&i(a.root);let d=!1;if(a.ctx=t?t(l,e.props||{},(m,p,...$)=>{const v=$.length?$[0]:p;return a.ctx&&n(a.ctx[m],a.ctx[m]=v)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](v),d&&Ie(l,m)),p}):[],a.update(),d=!0,ee(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const m=De(e.target);a.fragment&&a.fragment.l(m),m.forEach(k)}else a.fragment&&a.fragment.c();e.intro&&w(l.$$.fragment),M(l,e.target,e.anchor,e.customElement),Me()}Z(c)}class D{$destroy(){N(this,1),this.$destroy=B}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Fe(l){let e,t;const s=l[4].default,n=Be(s,l,l[3],null);return{c(){e=g("button"),n&&n.c(),u(e,"style",l[2]),u(e,"class","svelte-hs3cl"),K(e,"no-border",l[0]),K(e,"has-icon",l[1])},m(o,i){q(o,e,i),n&&n.m(e,null),t=!0},p(o,[i]){n&&n.p&&(!t||i&8)&&Oe(n,s,o,o[3],t?Se(s,o[3],i,null):Pe(o[3]),null),i&1&&K(e,"no-border",o[0]),i&2&&K(e,"has-icon",o[1])},i(o){t||(w(n,o),t=!0)},o(o){L(n,o),t=!1},d(o){o&&k(e),n&&n.d(o)}}}function Ve(l,e,t){let{$$slots:s={},$$scope:n}=e,{noBorder:o=!1}=e,{hasIcon:i=!1}=e,r=e.style;return l.$$set=c=>{t(5,e=ue(ue({},e),pe(c))),"noBorder"in c&&t(0,o=c.noBorder),"hasIcon"in c&&t(1,i=c.hasIcon),"$$scope"in c&&t(3,n=c.$$scope)},e=pe(e),[o,i,r,n,s]}class H extends D{constructor(e){super(),P(this,e,Ve,Fe,O,{noBorder:0,hasIcon:1})}}function He(l){let e;return{c(){e=E("Login")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function Ye(l){let e;return{c(){e=E("Register")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function Ge(l){let e,t,s,n,o,i,r,c,a,d;return r=new H({props:{noBorder:!0,$$slots:{default:[He]},$$scope:{ctx:l}}}),a=new H({props:{$$slots:{default:[Ye]},$$scope:{ctx:l}}}),{c(){e=g("nav"),t=g("div"),t.textContent="ROT",s=h(),n=g("div"),n.innerHTML=`<ul class="svelte-1t0yhg8"><li class="svelte-1t0yhg8">Features</li> 
      <li class="svelte-1t0yhg8">Products</li> 
      <li class="svelte-1t0yhg8">Company</li> 
      <li class="svelte-1t0yhg8">Pricing</li> 
      <li class="svelte-1t0yhg8">Support</li></ul>`,o=h(),i=g("div"),A(r.$$.fragment),c=h(),A(a.$$.fragment),u(t,"class","logo svelte-1t0yhg8"),u(n,"class","navigation svelte-1t0yhg8"),u(i,"class","auth"),u(e,"class","svelte-1t0yhg8")},m(m,p){q(m,e,p),f(e,t),f(e,s),f(e,n),f(e,o),f(e,i),M(r,i,null),f(i,c),M(a,i,null),d=!0},p(m,[p]){const $={};p&1&&($.$$scope={dirty:p,ctx:m}),r.$set($);const v={};p&1&&(v.$$scope={dirty:p,ctx:m}),a.$set(v)},i(m){d||(w(r.$$.fragment,m),w(a.$$.fragment,m),d=!0)},o(m){L(r.$$.fragment,m),L(a.$$.fragment,m),d=!1},d(m){m&&k(e),N(r),N(a)}}}class Ue extends D{constructor(e){super(),P(this,e,null,Ge,O,{})}}var We="/assets/icons8-down.609f3e04.gif",Ne="/assets/right-arrow.66a9ac31.svg";function Ke(l){let e,t,s;return{c(){e=E(`Let's go
        `),t=g("img"),T(t.src,s=Ne)||u(t,"src",s),u(t,"alt","right arrow")},m(n,o){q(n,e,o),q(n,t,o)},p:B,d(n){n&&k(e),n&&k(t)}}}function Je(l){let e,t,s,n,o,i,r,c,a,d,m,p;return c=new H({props:{hasIcon:!0,$$slots:{default:[Ke]},$$scope:{ctx:l}}}),{c(){e=g("header"),t=g("span"),t.textContent="A dedicated platform for",s=h(),n=g("span"),n.textContent="Competitive gaming",o=h(),i=g("p"),i.textContent="A PLATFORM FOR ALL GAMERS TO CONNECT, INTRACT AND WIN MORE",r=h(),A(c.$$.fragment),a=h(),d=g("img"),u(t,"class","svelte-178ue49"),u(n,"class","gradient svelte-178ue49"),T(d.src,m=We)||u(d,"src",m),u(d,"alt",""),u(d,"class","scroll-to-down svelte-178ue49"),u(e,"class","svelte-178ue49")},m($,v){q($,e,v),f(e,t),f(e,s),f(e,n),f(e,o),f(e,i),f(e,r),M(c,e,null),f(e,a),f(e,d),p=!0},p($,[v]){const b={};v&1&&(b.$$scope={dirty:v,ctx:$}),c.$set(b)},i($){p||(w(c.$$.fragment,$),p=!0)},o($){L(c.$$.fragment,$),p=!1},d($){$&&k(e),N(c)}}}class Qe extends D{constructor(e){super(),P(this,e,null,Je,O,{})}}var Xe="/assets/bg.9c7efe68.png",Ze="/assets/bot.083c1e81.svg";function et(l){let e,t,s,n,o;return{c(){e=g("div"),t=g("img"),n=h(),o=g("p"),o.textContent=`A simplified Application to handle all of your events and meet gamers of
        your kind`,T(t.src,s=Ze)||u(t,"src",s),u(t,"alt","bot"),u(t,"class","svelte-1h2jyed"),u(o,"class","gradient svelte-1h2jyed"),u(e,"class","svelte-1h2jyed")},m(i,r){q(i,e,r),f(e,t),f(e,n),f(e,o)},p:B,i:B,o:B,d(i){i&&k(e)}}}class tt extends D{constructor(e){super(),P(this,e,null,et,O,{})}}function lt(l){let e,t,s,n,o,i;return{c(){e=g("div"),t=g("img"),n=h(),o=g("p"),i=E(l[0]),T(t.src,s=l[1])||u(t,"src",s),u(t,"alt",""),u(e,"class","svelte-1yghpb1")},m(r,c){q(r,e,c),f(e,t),f(e,n),f(e,o),f(o,i)},p(r,[c]){c&2&&!T(t.src,s=r[1])&&u(t,"src",s),c&1&&z(i,r[0])},i:B,o:B,d(r){r&&k(e)}}}function nt(l,e,t){let{content:s}=e,{icon:n}=e;return l.$$set=o=>{"content"in o&&t(0,s=o.content),"icon"in o&&t(1,n=o.icon)},[s,n]}class st extends D{constructor(e){super(),P(this,e,nt,lt,O,{content:0,icon:1})}}var Q="/assets/f1.6cd18399.svg";function $e(l,e,t){const s=l.slice();s[1]=e[t];const n=s[1];return s[2]=n.icon,s[3]=n.content,s}function be(l){let e,t;return e=new st({props:{icon:l[2],content:l[3]}}),{c(){A(e.$$.fragment)},m(s,n){M(e,s,n),t=!0},p:B,i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function it(l){let e,t,s,n,o,i=l[0],r=[];for(let a=0;a<i.length;a+=1)r[a]=be($e(l,i,a));const c=a=>L(r[a],1,1,()=>{r[a]=null});return{c(){e=g("section"),t=g("h2"),t.textContent="Explore the features!",s=h(),n=g("div");for(let a=0;a<r.length;a+=1)r[a].c();u(t,"class","gradient svelte-1kd8zl8"),u(n,"class","svelte-1kd8zl8")},m(a,d){q(a,e,d),f(e,t),f(e,s),f(e,n);for(let m=0;m<r.length;m+=1)r[m].m(n,null);o=!0},p(a,[d]){if(d&1){i=a[0];let m;for(m=0;m<i.length;m+=1){const p=$e(a,i,m);r[m]?(r[m].p(p,d),w(r[m],1)):(r[m]=be(p),r[m].c(),w(r[m],1),r[m].m(n,null))}for(re(),m=i.length;m<r.length;m+=1)c(m);ae()}},i(a){if(!o){for(let d=0;d<i.length;d+=1)w(r[d]);o=!0}},o(a){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)L(r[d]);o=!1},d(a){a&&k(e),me(r,a)}}}function rt(l){return[[{icon:Q,content:"Connect with Various Events Around the World"},{icon:Q,content:"Explore a Variety of Games"},{icon:Q,content:"Become a Verified Tournament Host"},{icon:Q,content:"Connect with Gamers Around the World"},{icon:Q,content:"Advanced Leaderboard To Boost Up the Competitive Spirit"}]]}class at extends D{constructor(e){super(),P(this,e,rt,it,O,{})}}var ot="/assets/playbutton.9398ba67.svg",ut="/assets/dummy-video.9e3a1adc.mp4";function ct(l){let e,t,s,n,o,i,r,c,a,d,m;return{c(){e=g("div"),t=g("article"),t.innerHTML=`<p class="head svelte-1bfspfx">Let\u2019s explore the</p> 
        <h2 class="gradient svelte-1bfspfx">Region Of Tournaments</h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            purus odio tempor rutrum...</p>`,s=h(),n=g("section"),o=g("video"),i=g("track"),c=h(),a=g("div"),d=g("img"),u(t,"class","svelte-1bfspfx"),u(i,"kind","captions"),T(o.src,r=ut)||u(o,"src",r),u(o,"class","svelte-1bfspfx"),T(d.src,m=ot)||u(d,"src",m),u(d,"alt",""),u(d,"class","svelte-1bfspfx"),u(a,"class","controls svelte-1bfspfx"),u(n,"class","svelte-1bfspfx"),u(e,"class","svelte-1bfspfx")},m(p,$){q(p,e,$),f(e,t),f(e,s),f(e,n),f(n,o),f(o,i),f(n,c),f(n,a),f(a,d)},p:B,i:B,o:B,d(p){p&&k(e)}}}class ft extends D{constructor(e){super(),P(this,e,null,ct,O,{})}}function mt(l){let e,t,s,n,o,i,r,c,a,d,m,p,$,v,b,x;return p=new H({props:{$$slots:{default:[gt]},$$scope:{ctx:l}}}),{c(){e=g("article"),t=g("h2"),s=E(l[0]),n=h(),o=g("h3"),i=E(l[1]),r=h(),c=g("p"),a=E(l[2]),d=h(),m=g("a"),A(p.$$.fragment),$=h(),v=g("img"),u(t,"class","svelte-mkealu"),u(o,"class","svelte-mkealu"),u(c,"class","svelte-mkealu"),u(m,"href",l[3]),u(m,"class","svelte-mkealu"),u(e,"class","svelte-mkealu"),T(v.src,b=l[4])||u(v,"src",b),u(v,"alt",""),u(v,"class","svelte-mkealu")},m(_,C){q(_,e,C),f(e,t),f(t,s),f(e,n),f(e,o),f(o,i),f(e,r),f(e,c),f(c,a),f(e,d),f(e,m),M(p,m,null),q(_,$,C),q(_,v,C),x=!0},p(_,C){(!x||C&1)&&z(s,_[0]),(!x||C&2)&&z(i,_[1]),(!x||C&4)&&z(a,_[2]);const S={};C&64&&(S.$$scope={dirty:C,ctx:_}),p.$set(S),(!x||C&8)&&u(m,"href",_[3]),(!x||C&16&&!T(v.src,b=_[4]))&&u(v,"src",b)},i(_){x||(w(p.$$.fragment,_),x=!0)},o(_){L(p.$$.fragment,_),x=!1},d(_){_&&k(e),N(p),_&&k($),_&&k(v)}}}function dt(l){let e,t,s,n,o,i,r,c,a,d,m,p,$,v,b,x;return b=new H({props:{$$slots:{default:[_t]},$$scope:{ctx:l}}}),{c(){e=g("img"),s=h(),n=g("article"),o=g("h2"),i=E(l[0]),r=h(),c=g("h3"),a=E(l[1]),d=h(),m=g("p"),p=E(l[2]),$=h(),v=g("a"),A(b.$$.fragment),T(e.src,t=l[4])||u(e,"src",t),u(e,"alt",""),u(e,"class","svelte-mkealu"),u(o,"class","svelte-mkealu"),u(c,"class","svelte-mkealu"),u(m,"class","svelte-mkealu"),u(v,"href",l[3]),u(v,"class","svelte-mkealu"),u(n,"class","svelte-mkealu")},m(_,C){q(_,e,C),q(_,s,C),q(_,n,C),f(n,o),f(o,i),f(n,r),f(n,c),f(c,a),f(n,d),f(n,m),f(m,p),f(n,$),f(n,v),M(b,v,null),x=!0},p(_,C){(!x||C&16&&!T(e.src,t=_[4]))&&u(e,"src",t),(!x||C&1)&&z(i,_[0]),(!x||C&2)&&z(a,_[1]),(!x||C&4)&&z(p,_[2]);const S={};C&64&&(S.$$scope={dirty:C,ctx:_}),b.$set(S),(!x||C&8)&&u(v,"href",_[3])},i(_){x||(w(b.$$.fragment,_),x=!0)},o(_){L(b.$$.fragment,_),x=!1},d(_){_&&k(e),_&&k(s),_&&k(n),N(b)}}}function gt(l){let e;return{c(){e=E("Learn More..")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function _t(l){let e;return{c(){e=E("Learn More..")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function pt(l){let e,t,s,n;const o=[dt,mt],i=[];function r(c,a){return c[5]?0:1}return t=r(l),s=i[t]=o[t](l),{c(){e=g("div"),s.c(),u(e,"class","svelte-mkealu"),K(e,"alternate",l[5])},m(c,a){q(c,e,a),i[t].m(e,null),n=!0},p(c,[a]){let d=t;t=r(c),t===d?i[t].p(c,a):(re(),L(i[d],1,1,()=>{i[d]=null}),ae(),s=i[t],s?s.p(c,a):(s=i[t]=o[t](c),s.c()),w(s,1),s.m(e,null)),a&32&&K(e,"alternate",c[5])},i(c){n||(w(s),n=!0)},o(c){L(s),n=!1},d(c){c&&k(e),i[t].d()}}}function vt(l,e,t){let{title:s}=e,{subtitle:n}=e,{content:o}=e,{learnMoreLink:i}=e,{image:r}=e,{alternate:c}=e;return l.$$set=a=>{"title"in a&&t(0,s=a.title),"subtitle"in a&&t(1,n=a.subtitle),"content"in a&&t(2,o=a.content),"learnMoreLink"in a&&t(3,i=a.learnMoreLink),"image"in a&&t(4,r=a.image),"alternate"in a&&t(5,c=a.alternate)},[s,n,o,i,r,c]}class ht extends D{constructor(e){super(),P(this,e,vt,pt,O,{title:0,subtitle:1,content:2,learnMoreLink:3,image:4,alternate:5})}}var ye="/assets/Esports.2246626a.svg";function we(l,e,t){const s=l.slice();s[1]=e[t];const n=s[1];return s[2]=n.title,s[3]=n.subtitle,s[4]=n.content,s[5]=n.learnMoreLink,s[6]=n.image,s[7]=n.alternate,s}function ke(l){let e,t;return e=new ht({props:{alternate:l[7],title:l[2],subtitle:l[3],content:l[4],learnMoreLink:l[5],image:l[6]}}),{c(){A(e.$$.fragment)},m(s,n){M(e,s,n),t=!0},p:B,i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function $t(l){let e,t,s=l[0],n=[];for(let i=0;i<s.length;i+=1)n[i]=ke(we(l,s,i));const o=i=>L(n[i],1,1,()=>{n[i]=null});return{c(){e=g("div");for(let i=0;i<n.length;i+=1)n[i].c();u(e,"class","svelte-jvs74u")},m(i,r){q(i,e,r);for(let c=0;c<n.length;c+=1)n[c].m(e,null);t=!0},p(i,[r]){if(r&1){s=i[0];let c;for(c=0;c<s.length;c+=1){const a=we(i,s,c);n[c]?(n[c].p(a,r),w(n[c],1)):(n[c]=ke(a),n[c].c(),w(n[c],1),n[c].m(e,null))}for(re(),c=s.length;c<n.length;c+=1)o(c);ae()}},i(i){if(!t){for(let r=0;r<s.length;r+=1)w(n[r]);t=!0}},o(i){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)L(n[r]);t=!1},d(i){i&&k(e),me(n,i)}}}function bt(l){return[[{title:"About",subtitle:"Esports and Evenets",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",learnMoreLink:"#",image:ye},{title:"You can also get",subtitle:"Gamers for Teams",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.",learnMoreLink:"#",image:ye,alternate:!0}]]}class yt extends D{constructor(e){super(),P(this,e,bt,$t,O,{})}}function wt(l){let e;return{c(){e=E("Learn More")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function kt(l){let e,t,s,n,o,i,r;return i=new H({props:{$$slots:{default:[wt]},$$scope:{ctx:l}}}),{c(){e=g("div"),t=g("h2"),t.textContent="Become a Host and Host Your Events With Ease",s=h(),n=g("p"),n.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est ac
        nulla faucibus proin nisl augue. Vestibulum sem scelerisque suspendisse
        praesent pretium non. At mattis bibendum ut sed praesent. Nam at id
        elementum gravida.`,o=h(),A(i.$$.fragment),u(e,"class","svelte-1b1bdos")},m(c,a){q(c,e,a),f(e,t),f(e,s),f(e,n),f(e,o),M(i,e,null),r=!0},p(c,[a]){const d={};a&1&&(d.$$scope={dirty:a,ctx:c}),i.$set(d)},i(c){r||(w(i.$$.fragment,c),r=!0)},o(c){L(i.$$.fragment,c),r=!1},d(c){c&&k(e),N(i)}}}class qt extends D{constructor(e){super(),P(this,e,null,kt,O,{})}}function xt(l){let e,t,s,n,o,i,r,c,a,d,m,p,$;return{c(){e=g("div"),t=g("p"),s=E(l[0]),n=h(),o=g("section"),i=g("img"),c=h(),a=g("h3"),d=E(l[2]),m=h(),p=g("p"),$=E(l[3]),u(t,"class","svelte-124wc0z"),T(i.src,r=l[1])||u(i,"src",r),u(i,"alt",""),u(i,"class","svelte-124wc0z"),u(a,"class","svelte-124wc0z"),u(p,"class","svelte-124wc0z"),u(o,"class","svelte-124wc0z"),u(e,"class","svelte-124wc0z")},m(v,b){q(v,e,b),f(e,t),f(t,s),f(e,n),f(e,o),f(o,i),f(o,c),f(o,a),f(a,d),f(o,m),f(o,p),f(p,$)},p(v,[b]){b&1&&z(s,v[0]),b&2&&!T(i.src,r=v[1])&&u(i,"src",r),b&4&&z(d,v[2]),b&8&&z($,v[3])},i:B,o:B,d(v){v&&k(e)}}}function Lt(l,e,t){let{content:s}=e,{profilePic:n}=e,{profileName:o}=e,{profileDetails:i}=e;return l.$$set=r=>{"content"in r&&t(0,s=r.content),"profilePic"in r&&t(1,n=r.profilePic),"profileName"in r&&t(2,o=r.profileName),"profileDetails"in r&&t(3,i=r.profileDetails)},[s,n,o,i]}class Ct extends D{constructor(e){super(),P(this,e,Lt,xt,O,{content:0,profilePic:1,profileName:2,profileDetails:3})}}var W="/assets/testimonial1.2125cb75.png";function qe(l,e,t){const s=l.slice();return s[1]=e[t],s}function xe(l){let e,t;return e=new Ct({props:{content:l[1].content,profilePic:l[1].profilePic,profileName:l[1].profileName,profileDetails:l[1].profileDetails}}),{c(){A(e.$$.fragment)},m(s,n){M(e,s,n),t=!0},p:B,i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){N(e,s)}}}function Mt(l){let e,t,s,n,o,i=l[0],r=[];for(let a=0;a<i.length;a+=1)r[a]=xe(qe(l,i,a));const c=a=>L(r[a],1,1,()=>{r[a]=null});return{c(){e=g("div"),t=g("h2"),t.textContent="Testimonials",s=h(),n=g("div");for(let a=0;a<r.length;a+=1)r[a].c();u(t,"class","svelte-9ja3wn"),u(n,"class","svelte-9ja3wn"),u(e,"class","svelte-9ja3wn")},m(a,d){q(a,e,d),f(e,t),f(e,s),f(e,n);for(let m=0;m<r.length;m+=1)r[m].m(n,null);o=!0},p(a,[d]){if(d&1){i=a[0];let m;for(m=0;m<i.length;m+=1){const p=qe(a,i,m);r[m]?(r[m].p(p,d),w(r[m],1)):(r[m]=xe(p),r[m].c(),w(r[m],1),r[m].m(n,null))}for(re(),m=i.length;m<r.length;m+=1)c(m);ae()}},i(a){if(!o){for(let d=0;d<i.length;d+=1)w(r[d]);o=!0}},o(a){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)L(r[d]);o=!1},d(a){a&&k(e),me(r,a)}}}function Nt(l){return[[{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"},{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",profilePic:W,profileName:"Saul Ramirez",profileDetails:"CEO, Mirrorly"}]]}class At extends D{constructor(e){super(),P(this,e,Nt,Mt,O,{})}}function Tt(l){let e;return{c(){e=E("Submit")},m(t,s){q(t,e,s)},d(t){t&&k(e)}}}function Et(l){let e,t,s,n,o,i,r,c,a,d,m,p,$,v;return $=new H({props:{style:"grid-area: 3 / 2 / 4 / 4; padding: 0.75em 4em; font-size: 2em; font-weight: bold;",$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){e=g("div"),t=g("h2"),t.textContent="Contact us",s=h(),n=g("p"),n.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus
        odio tempor rutrum...`,o=h(),i=g("form"),r=g("input"),c=h(),a=g("input"),d=h(),m=g("textarea"),p=h(),A($.$$.fragment),u(t,"class","svelte-1hbwxu5"),u(r,"type","text"),u(r,"placeholder","Your Name"),u(r,"id","name"),u(r,"class","svelte-1hbwxu5"),u(a,"type","email"),u(a,"placeholder","Your Email Address"),u(a,"id","email"),u(a,"class","svelte-1hbwxu5"),u(m,"name","Message"),u(m,"placeholder","Your Message"),u(m,"id",""),u(m,"cols","30"),u(m,"rows","10"),u(m,"class","svelte-1hbwxu5"),u(i,"action","#0"),u(i,"class","svelte-1hbwxu5"),u(e,"class","svelte-1hbwxu5")},m(b,x){q(b,e,x),f(e,t),f(e,s),f(e,n),f(e,o),f(e,i),f(i,r),f(i,c),f(i,a),f(i,d),f(i,m),f(i,p),M($,i,null),v=!0},p(b,[x]){const _={};x&1&&(_.$$scope={dirty:x,ctx:b}),$.$set(_)},i(b){v||(w($.$$.fragment,b),v=!0)},o(b){L($.$$.fragment,b),v=!1},d(b){b&&k(e),N($)}}}class Bt extends D{constructor(e){super(),P(this,e,null,Et,O,{})}}var St="/assets/linkdin.8276a3aa.svg",Ot="/assets/facebook.3fbf7f11.svg",Pt="/assets/cb.4cc899af.svg",Dt="/assets/insta.20886a0f.svg",Rt="/assets/twitter.1193a35b.svg";function zt(l){let e,t,s;return{c(){e=E(`Let's go
                `),t=g("img"),T(t.src,s=Ne)||u(t,"src",s),u(t,"alt","right arrow")},m(n,o){q(n,e,o),q(n,t,o)},p:B,d(n){n&&k(e),n&&k(t)}}}function jt(l){let e,t,s,n,o,i,r,c,a,d,m,p,$,v,b,x,_,C,S,F,j,U,R,J,Y,y,V;return c=new H({props:{hasIcon:!0,$$slots:{default:[zt]},$$scope:{ctx:l}}}),{c(){e=g("footer"),t=g("div"),s=g("h2"),s.textContent="ROT",n=h(),o=g("p"),o.textContent=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
            perferendis saepe et minus iste beatae, fugiat numquam, amet, illo
            non dolorem neque soluta molestias nulla ducimus quos qui modi!
            Porro, illo. Amet sequi quo eveniet molestiae voluptas modi vel
            facilis maiores dignissimos deserunt accusantium tempora dolore odio
            quasi nobis voluptatibus nostrum in ipsa, ducimus excepturi, cumque
            quam qui ab?`,i=h(),r=g("div"),A(c.$$.fragment),a=h(),d=g("div"),m=g("img"),$=h(),v=g("img"),x=h(),_=g("img"),S=h(),F=g("img"),U=h(),R=g("img"),Y=h(),y=g("div"),y.innerHTML=`<div><h3>site</h3> 
            <ul class="svelte-1tecswx"><li>features</li> 
                <li>products</li> 
                <li>company</li> 
                <li>pricing</li> 
                <li>support</li></ul></div> 

        <div><h3>company</h3> 
            <ul class="svelte-1tecswx"><li>about us</li> 
                <li>our team</li> 
                <li>our story</li> 
                <li>career</li></ul></div> 

        <div><h3>legale</h3> 
            <ul class="svelte-1tecswx"><li>privacy</li> 
                <li>terms &amp; condition</li> 
                <li>company policy</li></ul></div> 

        <div><h3>follow us one</h3> 
            <ul class="svelte-1tecswx"><li>twitter</li> 
                <li>facebook</li> 
                <li>linkdin</li></ul></div>`,u(s,"class","svelte-1tecswx"),u(r,"class","btn"),T(m.src,p=St)||u(m,"src",p),u(m,"alt",""),T(v.src,b=Ot)||u(v,"src",b),u(v,"alt",""),T(_.src,C=Pt)||u(_,"src",C),u(_,"alt",""),T(F.src,j=Dt)||u(F,"src",j),u(F,"alt",""),T(R.src,J=Rt)||u(R,"src",J),u(R,"alt",""),u(d,"class","imgs svelte-1tecswx"),u(t,"class","svelte-1tecswx"),u(y,"class","links svelte-1tecswx"),u(e,"class","grid svelte-1tecswx")},m(I,te){q(I,e,te),f(e,t),f(t,s),f(t,n),f(t,o),f(t,i),f(t,r),M(c,r,null),f(t,a),f(t,d),f(d,m),f(d,$),f(d,v),f(d,x),f(d,_),f(d,S),f(d,F),f(d,U),f(d,R),f(e,Y),f(e,y),V=!0},p(I,[te]){const ge={};te&1&&(ge.$$scope={dirty:te,ctx:I}),c.$set(ge)},i(I){V||(w(c.$$.fragment,I),V=!0)},o(I){L(c.$$.fragment,I),V=!1},d(I){I&&k(e),N(c)}}}class It extends D{constructor(e){super(),P(this,e,null,jt,O,{})}}function Ft(l){let e,t,s,n,o,i,r,c,a,d,m,p,$,v,b,x,_,C,S,F,j,U,R,J,Y;return s=new Ue({}),o=new Qe({}),r=new tt({}),a=new at({}),m=new ft({}),$=new yt({}),b=new qt({}),_=new At({}),S=new Bt({}),j=new It({}),{c(){e=g("div"),t=g("main"),A(s.$$.fragment),n=h(),A(o.$$.fragment),i=h(),A(r.$$.fragment),c=h(),A(a.$$.fragment),d=h(),A(m.$$.fragment),p=h(),A($.$$.fragment),v=h(),A(b.$$.fragment),x=h(),A(_.$$.fragment),C=h(),A(S.$$.fragment),F=h(),A(j.$$.fragment),U=h(),R=g("img"),u(t,"class","svelte-r7w2e0"),u(e,"class","svelte-r7w2e0"),T(R.src,J=Xe)||u(R,"src",J),u(R,"alt","background"),u(R,"id","bg"),u(R,"class","svelte-r7w2e0")},m(y,V){q(y,e,V),f(e,t),M(s,t,null),f(t,n),M(o,t,null),f(t,i),M(r,t,null),f(t,c),M(a,t,null),f(t,d),M(m,t,null),f(t,p),M($,t,null),f(t,v),M(b,t,null),f(t,x),M(_,t,null),f(t,C),M(S,t,null),f(e,F),M(j,e,null),q(y,U,V),q(y,R,V),Y=!0},p:B,i(y){Y||(w(s.$$.fragment,y),w(o.$$.fragment,y),w(r.$$.fragment,y),w(a.$$.fragment,y),w(m.$$.fragment,y),w($.$$.fragment,y),w(b.$$.fragment,y),w(_.$$.fragment,y),w(S.$$.fragment,y),w(j.$$.fragment,y),Y=!0)},o(y){L(s.$$.fragment,y),L(o.$$.fragment,y),L(r.$$.fragment,y),L(a.$$.fragment,y),L(m.$$.fragment,y),L($.$$.fragment,y),L(b.$$.fragment,y),L(_.$$.fragment,y),L(S.$$.fragment,y),L(j.$$.fragment,y),Y=!1},d(y){y&&k(e),N(s),N(o),N(r),N(a),N(m),N($),N(b),N(_),N(S),N(j),y&&k(U),y&&k(R)}}}class Vt extends D{constructor(e){super(),P(this,e,null,Ft,O,{})}}new Vt({target:document.getElementById("app")});
