"use strict";exports.id=6801,exports.ids=[6801],exports.modules={5441:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},92:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},2995:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},4010:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]])},6206:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(5593);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,a.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},5520:(e,t,r)=>{r.d(t,{NY:()=>k,Ee:()=>h,fC:()=>g});var a=r(9885),o=r(80),n=globalThis?.document?a.useLayoutEffect:()=>{},l=r(3979),u="Avatar",[s,d]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>a.createContext(e));return function(r){let o=r?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return n.scopeName=e,[function(t,n){let l=a.createContext(n),u=r.length;r=[...r,n];let s=t=>{let{scope:r,children:n,...s}=t,d=r?.[e]?.[u]||l,i=a.useMemo(()=>s,Object.values(s));return(0,o.jsx)(d.Provider,{value:i,children:n})};return s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e]?.[u]||l,d=a.useContext(s);if(d)return d;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:a})=>{let o=r(e),n=o[`__scope${a}`];return{...t,...n}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(n,...t)]}(u),[i,c]=s(u),f=a.forwardRef((e,t)=>{let{__scopeAvatar:r,...n}=e,[u,s]=a.useState("idle");return(0,o.jsx)(i,{scope:r,imageLoadingStatus:u,onImageLoadingStatusChange:s,children:(0,o.jsx)(l.WV.span,{...n,ref:t})})});f.displayName=u;var p="AvatarImage",m=a.forwardRef((e,t)=>{let{__scopeAvatar:r,src:u,onLoadingStatusChange:s=()=>{},...d}=e,i=c(p,r),f=function(e,t){let[r,o]=a.useState("idle");return n(()=>{if(!e){o("error");return}let r=!0,a=new window.Image,n=e=>()=>{r&&o(e)};return o("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(u,d.referrerPolicy),m=function(e){let t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...e)=>t.current?.(...e),[])}(e=>{s(e),i.onImageLoadingStatusChange(e)});return n(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,o.jsx)(l.WV.img,{...d,ref:t,src:u}):null});m.displayName=p;var v="AvatarFallback",y=a.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:n,...u}=e,s=c(v,r),[d,i]=a.useState(void 0===n);return a.useEffect(()=>{if(void 0!==n){let e=window.setTimeout(()=>i(!0),n);return()=>window.clearTimeout(e)}},[n]),d&&"loaded"!==s.imageLoadingStatus?(0,o.jsx)(l.WV.span,{...u,ref:t}):null});y.displayName=v;var g=f,h=m,k=y}};