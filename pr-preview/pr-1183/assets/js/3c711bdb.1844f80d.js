"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3},o="Edit Data Flows in the web app",l={unversionedId:"guides/edit-data-flows",id:"guides/edit-data-flows",title:"Edit Data Flows in the web app",description:"You can edit existing captures, collection schemas, and materializations in the Flow web app.",source:"@site/docs/guides/edit-data-flows.md",sourceDirName:"guides",slug:"/guides/edit-data-flows",permalink:"/pr-preview/pr-1183/guides/edit-data-flows",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/edit-data-flows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amazon S3 to Snowflake",permalink:"/pr-preview/pr-1183/guides/system-specific-dataflows/s3-to-snowflake"},next:{title:"flowctl guides",permalink:"/pr-preview/pr-1183/guides/flowctl/"}},p={},s=[{value:"Edit a capture",id:"edit-a-capture",level:2},{value:"Advanced editing",id:"advanced-editing",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edit-data-flows-in-the-web-app"},"Edit Data Flows in the web app"),(0,i.kt)("p",null,"You can edit existing captures, collection schemas, and materializations in the Flow web app.\nFor a tour of the web app, ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1183/concepts/web-app"},"start here"),"."),(0,i.kt)("p",null,"There are separate workflows for editing ",(0,i.kt)("a",{parentName:"p",href:"#edit-a-capture"},"captures")," and ",(0,i.kt)("a",{parentName:"p",href:"#edit-a-materialization"},"materializations"),".\nYou can edit a collection schema using Flow's ",(0,i.kt)("strong",{parentName:"p"},"Schema Inference")," tool by editing either a capture or materialization associated\nwith that collection."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Although you edit components of your Data Flows separately, they are all connected.\nFor this reason, it's important to be mindful of your edits' potential effects.\nFor more information on the implications of editing, see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1183/reference/editing"},"reference documentation"),".")),(0,i.kt)("h2",{id:"edit-a-capture"},"Edit a capture"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/captures"},"Sources page")," of the web app.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the capture you'd like to edit. Click the ",(0,i.kt)("strong",{parentName:"p"},"Options")," button in its table row, then click ",(0,i.kt)("strong",{parentName:"p"},"Edit specification"),"."),(0,i.kt)("p",{parentName:"li"},"The Edit Capture page opens.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the connection to the destination system, if desired. You can either update fields in the Endpoint Config section or manually update the JSON in the Advanced Specification Editor."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You may have to re-authenticate with the source system. Be sure to have current credentials on hand before editing the endpoint configuration.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("strong",{parentName:"p"},"Output Collections")," browser to add or remove collections from the capture, if desired."),(0,i.kt)("p",{parentName:"li"},"To refresh your connection with the source and see an updated list of possible collections, click the ",(0,i.kt)("strong",{parentName:"p"},"Refresh")," button,\nbut be aware that it will overwrite all existing collection selections.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("strong",{parentName:"p"},"Schema Inference")," tool, if desired."),(0,i.kt)("p",{parentName:"li"},"This option is available for source systems with permissive schemas, such as NoSQL databases and cloud storage.\nFlow can help you tighten up the schema to be used for downstream tasks in your Data Flow."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Output Collections browser, choose a collection and click its ",(0,i.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Schema Inference")),(0,i.kt)("p",{parentName:"li"},"The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1183/concepts/schemas#write-and-read-schemas"},(0,i.kt)("inlineCode",{parentName:"a"},"readSchema")),", to use for\ndownstream tasks like materializations and derivations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the new schema and click ",(0,i.kt)("strong",{parentName:"p"},"Apply Inferred Schema"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you're done making changes, click ",(0,i.kt)("strong",{parentName:"p"},"Next."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,i.kt)("p",null,"Editing a capture only affects how it will work going forward.\nData that was captured before editing will reflect the original configuration."),(0,i.kt)("h1",{id:"edit-a-materialization"},"Edit a materialization"),(0,i.kt)("p",null,"To edit a materialization:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/materializations"},"Destinations page")," of the web app.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Locate the materialization you'd like to edit. Click the ",(0,i.kt)("strong",{parentName:"p"},"Options")," button in its table row, then click ",(0,i.kt)("strong",{parentName:"p"},"Edit specification"),"."),(0,i.kt)("p",{parentName:"li"},"The Edit Materialization page opens.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the connection to the destination system, if desired. You can either update fields in the Endpoint Config section or manually update the JSON in the Advanced Specification Editor."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You may have to re-authenticate with the destination system. Be sure to have current credentials on hand before editing the endpoint configuration.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("strong",{parentName:"p"},"Source Collections")," browser to add or remove collections from the materialization, if desired.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optionally apply a stricter schema to each collection to use for the materialization."),(0,i.kt)("p",{parentName:"li"},"This option is available for collections captured from source systems with permissive schemas, such as NoSQL databases and cloud storage.\nFlow can help you tighten up the schema to be used for downstream tasks in your Data Flow."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the Source Collections browser, choose a collection and click its ",(0,i.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Schema Inference")),(0,i.kt)("p",{parentName:"li"},"The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1183/concepts/schemas#write-and-read-schemas"},(0,i.kt)("inlineCode",{parentName:"a"},"readSchema")),", to use for the materialization.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Review the new schema and click ",(0,i.kt)("strong",{parentName:"p"},"Apply Inferred Schema"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you're done making changes, click ",(0,i.kt)("strong",{parentName:"p"},"Next."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,i.kt)("p",null,"Editing a materialization only affects how it will work going forward.\nData that was materialized before editing will reflect the original configuration."),(0,i.kt)("h2",{id:"advanced-editing"},"Advanced editing"),(0,i.kt)("p",null,"For more fine-grain control over editing, you can use flowctl and work directly on specification files in your local environment.\n",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1183/guides/flowctl/edit-specification-locally"},"View the tutorial.")))}m.isMDXComponent=!0}}]);