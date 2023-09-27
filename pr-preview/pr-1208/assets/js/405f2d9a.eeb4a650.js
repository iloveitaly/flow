"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8273],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},554:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={description:"Using the merge reduction strategy",sidebar_position:3},o="merge",s={unversionedId:"reference/reduction-strategies/merge",id:"reference/reduction-strategies/merge",title:"merge",description:"Using the merge reduction strategy",source:"@site/docs/reference/reduction-strategies/merge.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/merge",permalink:"/pr-preview/pr-1208/reference/reduction-strategies/merge",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/merge.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Using the merge reduction strategy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"firstWriteWins and lastWriteWins",permalink:"/pr-preview/pr-1208/reference/reduction-strategies/firstwritewins-and-lastwritewins"},next:{title:"minimize and maximize",permalink:"/pr-preview/pr-1208/reference/reduction-strategies/minimize-and-maximize"}},c={},l=[],p={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge"},"merge"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"merge")," reduces the left-hand side and right-hand side by recursively reducing shared document locations. The LHS and RHS must either both be objects, or both be arrays."),(0,a.kt)("p",null,"If both sides are objects, ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," performs a deep merge of each property. If LHS and RHS are both arrays, items at each index of both sides are merged together, extending the shorter of the two sides by taking items off the longer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/merge\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Merge only works with types "array" or "object".\n          # Others will throw an error at build time.\n          type: [array, object]\n          reduce: { strategy: merge }\n          # Deeply merge sub-locations (items or properties) by summing them.\n          items:\n            type: number\n            reduce: { strategy: sum }\n          additionalProperties:\n            type: number\n            reduce: { strategy: sum }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can merge arrays by index":\n    - ingest:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: [1, 1] }\n          - { key: "key", value: [2, 2, 2] }\n    - verify:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: [3, 3, 2] }\n\n  "Expect we can merge objects by property":\n    - ingest:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: { "a": 1, "b": 1 } }\n          - { key: "key", value: { "a": 1, "c": 1 } }\n    - verify:\n        collection: example/reductions/merge\n        documents:\n          - { key: "key", value: { "a": 2, "b": 1, "c": 1 } }\n')),(0,a.kt)("p",null,"Merge may also take a ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", which is one or more JSON pointers that are relative to the reduced location. If both sides are arrays and a merge key is present, then a deep sorted merge of the respective items is done, as ordered by the key. Arrays must be pre-sorted and de-duplicated by the key, and ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," itself always maintains this invariant."),(0,a.kt)("p",null,"Note that you can use a key of ","[","\u201c\u201d] for natural item ordering, such as merging sorted arrays of scalars."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/merge-key\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          type: array\n          reduce:\n            strategy: merge\n            key: [/k]\n          items: { reduce: { strategy: firstWriteWins } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can merge sorted arrays":\n    - ingest:\n        collection: example/reductions/merge-key\n        documents:\n          - { key: "key", value: [{ k: "a", v: 1 }, { k: "b", v: 1 }] }\n          - { key: "key", value: [{ k: "a", v: 2 }, { k: "c", v: 2 }] }\n    - verify:\n        collection: example/reductions/merge-key\n        documents:\n          - {\n              key: "key",\n              value: [{ k: "a", v: 1 }, { k: "b", v: 1 }, { k: "c", v: 2 }],\n            }\n')),(0,a.kt)("p",null,"As with ",(0,a.kt)("inlineCode",{parentName:"p"},"append"),", the LHS of ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," ",(0,a.kt)("em",{parentName:"p"},"may")," be null, in which case the reduction is treated as a no-op and its result remains null."))}u.isMDXComponent=!0}}]);