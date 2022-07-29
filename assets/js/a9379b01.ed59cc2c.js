"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Configuring task shards",l={unversionedId:"reference/Configuring-task-shards",id:"reference/Configuring-task-shards",title:"Configuring task shards",description:"For some catalog tasks, it's helpful to control the behavior of shards",source:"@site/docs/reference/Configuring-task-shards.md",sourceDirName:"reference",slug:"/reference/Configuring-task-shards",permalink:"/reference/Configuring-task-shards",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Configuring-task-shards.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authorizing users and authenticating with Flow",permalink:"/reference/authentication"},next:{title:"Reduction strategies",permalink:"/reference/reduction-strategies/"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Sample",id:"sample",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-task-shards"},"Configuring task shards"),(0,a.kt)("p",null,"For some catalog tasks, it's helpful to control the behavior of ",(0,a.kt)("a",{parentName:"p",href:"/concepts/advanced/shards"},"shards"),"\nYou do this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"shards")," configuration to the capture or materialization configuration."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/disable")),(0,a.kt)("td",{parentName:"tr",align:null},"Disable"),(0,a.kt)("td",{parentName:"tr",align:null},"Disable processing of the task's shards."),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/logLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"Log level"),(0,a.kt)("td",{parentName:"tr",align:null},'Log levels may currently be \\"error\\", \\"warn\\", \\"info\\", \\"debug\\", or \\"trace\\". If not set, the effective log level is \\"info\\".'),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/maxTxnDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum transaction duration"),(0,a.kt)("td",{parentName:"tr",align:null},"This duration upper-bounds the amount of time during which a transaction may process documents before it must initiate a commit. Note that it may take some additional time for the commit to complete after it is initiated. The shard may run for less time if there aren't additional ready documents for it to process. If not set, the maximum duration defaults to one second."),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/minTxnDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum transaction duration"),(0,a.kt)("td",{parentName:"tr",align:null},"This duration lower-bounds the amount of time during which a transaction must process documents before it must flush and commit. It may run for more time if additional documents are available. The default value is zero seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"String")))),(0,a.kt)("p",null,"For more information about these controls and when you might need to use them, see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/concepts/advanced/shards#transactions"},"Transactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/concepts/advanced/logs-stats#log-level"},"Log level"))),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  acmeCo/snowflake-materialization:\n    endpoint:\n      connector:\n        config:\n          account: acmeCo\n          database: acmeCo_db\n          password: secret\n          cloud_provider: aws\n          region: us-east-1\n          schema: acmeCo_flow_schema\n          user: snowflake_user\n          warehouse: acmeCo_warehouse\n        image: ghcr.io/estuary/materialize-snowflake:dev\n    bindings:\n    - resource:\n        table: anvils\n      source: acmeCo/anvils\n    shards:\n      logLevel: debug\n      minTxnDuration: 30s\n      maxTxnDuration: 4m\n")))}d.isMDXComponent=!0}}]);