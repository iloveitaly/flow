"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?i.createElement(y,m(m({ref:n},l),{},{components:t})):i.createElement(y,m({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,m=new Array(a);m[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:r,m[1]=o;for(var s=2;s<a;s++)m[s]=t[s];return i.createElement.apply(null,m)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={description:"Using the minimize and maximize reduction strategies",sidebar_position:4},m="minimize and maximize",o={unversionedId:"reference/reduction-strategies/minimize-and-maximize",id:"reference/reduction-strategies/minimize-and-maximize",title:"minimize and maximize",description:"Using the minimize and maximize reduction strategies",source:"@site/docs/reference/reduction-strategies/minimize-and-maximize.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/minimize-and-maximize",permalink:"/pr-preview/pr-1156/reference/reduction-strategies/minimize-and-maximize",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/minimize-and-maximize.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Using the minimize and maximize reduction strategies",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"merge",permalink:"/pr-preview/pr-1156/reference/reduction-strategies/merge"},next:{title:"set",permalink:"/pr-preview/pr-1156/reference/reduction-strategies/set"}},c={},s=[],l={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minimize-and-maximize"},"minimize and maximize"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minimize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maximize")," reduce by taking the smallest or largest seen value, respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/min-max\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        min: { reduce: { strategy: minimize } }\n        max: { reduce: { strategy: maximize } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can min/max values":\n    - ingest:\n        collection: example/reductions/min-max\n        documents:\n          - { key: "key", min: 32, max: "abc" }\n          - { key: "key", min: 42, max: "def" }\n    - verify:\n        collection: example/reductions/min-max\n        documents:\n          - { key: "key", min: 32, max: "def" }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"minimize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maximize")," can also take a ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", which is one or more JSON pointers that are relative to the reduced location. Keys make it possible to minimize and maximize over complex types by ordering over an extracted composite key."),(0,r.kt)("p",null,"In the event that a right-hand side document key equals the current left-hand side minimum or maximum, the documents are deeply merged. This can be used to, for example, track not just the minimum value but also the number of times it\u2019s been seen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/min-max-key\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        min:\n          $anchor: min-max-value\n          type: array\n          items:\n            - type: string\n            - type: number\n              reduce: { strategy: sum }\n          reduce:\n            strategy: minimize\n            key: [/0]\n        max:\n          $ref: "#min-max-value"\n          reduce:\n            strategy: maximize\n            key: [/0]\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can min/max values using a key extractor":\n    - ingest:\n        collection: example/reductions/min-max-key\n        documents:\n          - { key: "key", min: ["a", 1], max: ["a", 1] }\n          - { key: "key", min: ["c", 2], max: ["c", 2] }\n          - { key: "key", min: ["b", 3], max: ["b", 3] }\n          - { key: "key", min: ["a", 4], max: ["a", 4] }\n    - verify:\n        collection: example/reductions/min-max-key\n        documents:\n          # Min of equal keys ["a", 1] and ["a", 4] => ["a", 5].\n          - { key: "key", min: ["a", 5], max: ["c", 2] }\n')))}u.isMDXComponent=!0}}]);