"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9924],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:8},c="Storage mappings",l={unversionedId:"concepts/storage-mappings",id:"concepts/storage-mappings",title:"Storage mappings",description:"A storage mapping defines how Flow should persist the documents of collections into cloud storage locations,",source:"@site/docs/concepts/storage-mappings.md",sourceDirName:"concepts",slug:"/concepts/storage-mappings",permalink:"/concepts/storage-mappings",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/storage-mappings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/concepts/schemas"},next:{title:"Tests",permalink:"/concepts/tests"}},p={},m=[{value:"Recovery logs",id:"recovery-logs",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storage-mappings"},"Storage mappings"),(0,r.kt)("p",null,"A storage mapping defines how Flow should persist the documents of collections into cloud storage locations,\nsuch as your S3 bucket. When you first set up Flow, a default storage mapping is created for you,\nin which all collections will be stored by default.\nHowever, you can also override this default for one or more collections\nby specifying a storage mapping in your catalog specification using the CLI."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Storage mapping control is coming to the Flow web application soon"))),(0,r.kt)("p",null,"Each storage mapping consists of a ",(0,r.kt)("strong",{parentName:"p"},"catalog prefix")," and a mapped storage location. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"storageMappings:\n  acmeCo/:\n    stores:\n      - provider: S3\n        bucket: acmeco-bucket\n        prefix: my-prefix/\n")),(0,r.kt)("p",null,"This mapping causes Flow to store the data of any collection having prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://acmeco-bucket/my-prefix/"),".\nA collection like the below would store all of its data files under path ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://acmeco-bucket/my-prefix/acmeCo/anvils/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/anvils:\n    key: [/id]\n    schema: anvil-schema.yaml\n")),(0,r.kt)("p",null,"Every Flow collection must have an associated storage mapping,\nand a catalog build will fail if multiple storage mappings have overlapping prefixes."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/concepts/advanced/projections#logical-partitions"},"Learn more about logical partitions and storage"),"."),(0,r.kt)("h2",{id:"recovery-logs"},"Recovery logs"),(0,r.kt)("p",null,"Flow tasks \u2014 captures, derivations, and materializations \u2014 use recovery logs to durably store their processing context.\nRecovery logs are an opaque binary log, but may contain user data and are stored within the user\u2019s buckets.\nThey must have a defined storage mapping."),(0,r.kt)("p",null,"The recovery logs of a task are always prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery/"),",\nand a task named ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/produce-TNT")," would require a storage mapping like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"storageMappings:\n  recovery/acmeCo/:\n    stores:\n      - provider: S3\n        bucket: acmeco-recovery\n")),(0,r.kt)("p",null,"You may wish to use a separate bucket for recovery logs, distinct from the bucket where collection data is stored.\nBuckets holding collection data are free to use a bucket lifecycle policy to manage data retention;\nfor example, to remove data after six months."),(0,r.kt)("p",null,"This is not true of buckets holding recovery logs. Flow prunes data from recovery logs once it is no longer required."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Deleting data from recovery logs while it is still in use can\ncause Flow processing tasks to fail permanently."))))}d.isMDXComponent=!0}}]);