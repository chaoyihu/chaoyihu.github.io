(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6507)}])},6691:function(e,t){"use strict";var r,n,o,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return c},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return h}});let c="refresh",i="navigate",u="restore",s="server-patch",a="prefetch",f="fast-refresh",d="server-action";function h(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(l=n||(n={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(8754),o=r(5893),l=n._(r(7294)),c=r(1401),i=r(2045),u=r(7420),s=r(7201),a=r(1443),f=r(9953),d=r(5320),h=r(2905),p=r(4318),v=r(953),x=r(6691),j=new Set;function y(e,t,r,n,o,l){if(l||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(j.has(o))return;j.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let r,n;let{href:u,as:j,children:m,prefetch:C=null,passHref:g,replace:_,shallow:w,scroll:E,locale:O,onClick:N,onMouseEnter:M,onTouchStart:P,legacyBehavior:T=!1,...k}=e;r=m,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let R=l.default.useContext(f.RouterContext),L=l.default.useContext(d.AppRouterContext),A=null!=R?R:L,S=!R,I=!1!==C,z=null===C?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:H,as:V}=l.default.useMemo(()=>{if(!R){let e=b(u);return{href:e,as:j?b(j):e}}let[e,t]=(0,c.resolveHref)(R,u,!0);return{href:e,as:j?(0,c.resolveHref)(R,j):t||e}},[R,u,j]),U=l.default.useRef(H),K=l.default.useRef(V);T&&(n=l.default.Children.only(r));let F=T?n&&"object"==typeof n&&n.ref:t,[B,D,q]=(0,h.useIntersection)({rootMargin:"200px"}),G=l.default.useCallback(e=>{(K.current!==V||U.current!==H)&&(q(),K.current=V,U.current=H),B(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[V,F,H,q,B]);l.default.useEffect(()=>{A&&D&&I&&y(A,H,V,{locale:O},{kind:z},S)},[V,H,D,O,I,null==R?void 0:R.locale,A,S,z]);let W={ref:G,onClick(e){T||"function"!=typeof N||N(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,c,u,s,a){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:c,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};a?l.default.startTransition(d):d()}(e,A,H,V,_,w,E,O,S)},onMouseEnter(e){T||"function"!=typeof M||M(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(I||!S)&&y(A,H,V,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},S)},onTouchStart:function(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(I||!S)&&y(A,H,V,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},S)}};if((0,s.isAbsoluteUrl)(V))W.href=V;else if(!T||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(V,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);W.href=t||(0,v.addBasePath)((0,a.addLocale)(V,e,null==R?void 0:R.defaultLocale))}return T?l.default.cloneElement(n,W):(0,o.jsx)("a",{...k,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),o=r(3815),l="function"==typeof IntersectionObserver,c=new Map,i=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[a,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(s||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=c.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),c.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),c.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!a){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,a,d.current]),[h,a,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6507:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893);r(9871);var o=r(7294),l=r(1664),c=r.n(l),i=e=>{let{href:t,text:r,active:o}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(c(),{href:t,className:" nav__link ".concat(o?"active":""),children:r})})};let u=[{text:"Home",href:"/",idx:0},{text:"Projects",href:"/projects",idx:1},{text:"Blogs",href:"/blogs",idx:2},{text:"Contact",href:"/contact",idx:3}];var s=()=>{let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let e=window.location.pathname,t=[...u].sort((e,t)=>t.href.length-e.href.length).find(t=>e.startsWith(t.href));t&&l(t.idx)},[]),(0,n.jsxs)("nav",{className:"nav",children:[(0,n.jsx)(c(),{href:"/",onClick:()=>l(0),children:(0,n.jsx)("img",{src:"/favicon.ico",width:"50px"})}),(0,n.jsxs)("div",{onClick:()=>t(!e),className:"nav__menu-bar",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),(0,n.jsx)("div",{className:"".concat(e?"active":""," nav__menu-list"),children:u.map((e,o)=>(0,n.jsx)("div",{onClick:()=>{l(o),t(!1)},children:(0,n.jsx)(i,{active:r===o,...e})},e.text))})]})},a=e=>{let{username:t,repositoryName:r,baseUrl:o}=e,l="https://github.com/".concat(t).concat(r)||0;return(0,n.jsx)("a",{href:l,className:"github-corner","aria-label":"View source on GitHub",children:(0,n.jsxs)("svg",{height:"80%",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0,zIndex:999},"aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,n.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),(0,n.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})},f=()=>(0,n.jsx)("footer",{className:"site-footer h-card",children:(0,n.jsxs)("div",{className:"footer-col-wrapper",children:[(0,n.jsx)("div",{className:"footer-col footer-col-1",children:(0,n.jsxs)("ul",{className:"contact-list",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,n.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/hu-chaoyi",children:" hu-chaoyi"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,n.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),(0,n.jsx)("a",{href:"https://github.com/chaoyihu",children:" chaoyihu"})]})]})}),(0,n.jsx)("div",{className:"footer-col footer-col-2",children:(0,n.jsx)("p",{children:"\xa9 2024 Chaoyi Hu. All rights reserved."})}),(0,n.jsx)("div",{className:"footer-col footer-col-3",children:(0,n.jsx)("p",{children:"Curiosity is a gift."})})]})});function d(e){let{Component:t,pageProps:r}=e,[l,c]=(0,o.useState)(0),i=(0,o.useRef)(null),u=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=()=>{if(i.current){var e,t;let r=i.current.clientHeight,n=null===(t=u.current)||void 0===t?void 0:null===(e=t.querySelector("svg"))||void 0===e?void 0:e.clientWidth;c(r);let o=document.querySelector(".sticky-header");o&&(o.style.paddingRight="".concat(n,"px"))}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.jsxs)("div",{className:"root",children:[(0,n.jsxs)("div",{className:"sticky-header",ref:i,children:[(0,n.jsx)("div",{ref:u,children:(0,n.jsx)(a,{username:"chaoyihu",repositoryName:"",baseUrl:"https://github.com/chaoyihu"})}),(0,n.jsx)(s,{})]}),(0,n.jsxs)("div",{className:"page-content",style:{height:"calc(100vh - ".concat(l,"px)")},children:[(0,n.jsx)(t,{...r}),(0,n.jsx)(f,{})]})]})}},9871:function(){},1664:function(e,t,r){e.exports=r(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);