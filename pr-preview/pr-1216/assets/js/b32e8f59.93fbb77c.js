"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6993],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},o="System-specific Data Flows",s={unversionedId:"guides/system-specific-dataflows/README",id:"guides/system-specific-dataflows/README",title:"System-specific Data Flows",description:"The guides in this section cover popular Estuary Flow use cases. Each guide walks you through the process of capturing data from a specific source system and materializing it to a specific destination.",source:"@site/docs/guides/system-specific-dataflows/README.md",sourceDirName:"guides/system-specific-dataflows",slug:"/guides/system-specific-dataflows/",permalink:"/pr-preview/pr-1216/guides/system-specific-dataflows/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/system-specific-dataflows/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a basic Data Flow",permalink:"/pr-preview/pr-1216/guides/create-dataflow"},next:{title:"Google Cloud Firestore to Snowflake",permalink:"/pr-preview/pr-1216/guides/system-specific-dataflows/firestore-to-dwh"}},c={},p=[],u={toc:p},l="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-specific-data-flows"},"System-specific Data Flows"),(0,n.kt)("p",null,"The guides in this section cover popular Estuary Flow use cases. Each guide walks you through the process of ",(0,n.kt)("strong",{parentName:"p"},"capturing")," data from a specific source system and ",(0,n.kt)("strong",{parentName:"p"},"materializing")," it to a specific destination."),(0,n.kt)("p",null,"These are supplemental to the ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/guides/create-dataflow"},"main guide to create a Data Flow"),".\nIf you don't see your exact Data Flow here, use the main guide and the ",(0,n.kt)("a",{parentName:"p",href:"../../reference/Connectors/"},"connector reference"),"\nto mix and match your required source and destination systems."))}f.isMDXComponent=!0}}]);