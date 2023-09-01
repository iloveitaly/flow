"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),w=i,f=u["".concat(c,".").concat(w)]||u[w]||d[w]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=w;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},4710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const s={description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},a="firstWriteWins and lastWriteWins",o={unversionedId:"reference/reduction-strategies/firstwritewins-and-lastwritewins",id:"reference/reduction-strategies/firstwritewins-and-lastwritewins",title:"firstWriteWins and lastWriteWins",description:"Using the firstWriteWins and lastWriteWins reduction strategies",source:"@site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/firstwritewins-and-lastwritewins",permalink:"/pr-preview/pr-1176/reference/reduction-strategies/firstwritewins-and-lastwritewins",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"append",permalink:"/pr-preview/pr-1176/reference/reduction-strategies/append"},next:{title:"merge",permalink:"/pr-preview/pr-1176/reference/reduction-strategies/merge"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firstwritewins-and-lastwritewins"},"firstWriteWins and lastWriteWins"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"firstWriteWins")," always takes the first value seen at the annotated location. Likewise, ",(0,i.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," always takes the last. Schemas that don\u2019t have an explicit reduce annotation default to ",(0,i.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/fww-lww\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        fww: { reduce: { strategy: firstWriteWins } }\n        lww: { reduce: { strategy: lastWriteWins } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can track first- and list-written values":\n    - ingest:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "one" }\n          - { key: "key", fww: "two", lww: "two" }\n    - verify:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "two" }\n')))}d.isMDXComponent=!0}}]);