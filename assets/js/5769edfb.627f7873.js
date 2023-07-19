"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},l="WooCommerce Connector Documentation",i={unversionedId:"reference/Connectors/capture-connectors/woocommerce",id:"reference/Connectors/capture-connectors/woocommerce",title:"WooCommerce Connector Documentation",description:"This connector captures data from WooCommerce into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/woocommerce.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/woocommerce",permalink:"/reference/Connectors/capture-connectors/woocommerce",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/woocommerce.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Postgres (Heroku) Connector Documentation",permalink:"/reference/Connectors/capture-connectors/postgres-heroku"},next:{title:"Google Cloud Storage",permalink:"/reference/Connectors/capture-connectors/gcs"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up WooCommerce",id:"set-up-woocommerce",level:3},{value:"Set up the WooCommerce connector in Estuary Flow",id:"set-up-the-woocommerce-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Connector-Specific Features &amp; Highlights",id:"connector-specific-features--highlights",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"woocommerce-connector-documentation"},"WooCommerce Connector Documentation"),(0,o.kt)("p",null,"This connector captures data from WooCommerce into Flow collections."),(0,o.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-woocommerce:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To set up the WooCommerce source connector with: you need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WooCommerce 3.5+"),(0,o.kt)("li",{parentName:"ul"},"WordPress 4.4+"),(0,o.kt)("li",{parentName:"ul"},"Pretty permalinks in Settings > Permalinks so that the custom endpoints are supported. e.g. /%year%/%monthnum%/%day%/%postname%/"),(0,o.kt)("li",{parentName:"ul"},"A new API key with read permissions and access to Customer key and Customer Secret.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Follow the steps below to set up the WooCommerce source connector."),(0,o.kt)("h3",{id:"set-up-woocommerce"},"Set up WooCommerce"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a new Rest API key."),(0,o.kt)("li",{parentName:"ol"},"Obtain Customer key and Customer Secret.")),(0,o.kt)("h3",{id:"set-up-the-woocommerce-connector-in-estuary-flow"},"Set up the WooCommerce connector in Estuary Flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,o.kt)("li",{parentName:"ol"},'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'),(0,o.kt)("li",{parentName:"ol"},'Enter the name for the WooCommerce connector and select "WooCommerce" from the dropdown.'),(0,o.kt)("li",{parentName:"ol"},'Fill in "Customer key" and "Customer Secret" with the data from Step 1 of this guide.'),(0,o.kt)("li",{parentName:"ol"},'Fill in "Shop Name". For example, if your shop URL is ',(0,o.kt)("a",{parentName:"li",href:"https://EXAMPLE.com"},"https://EXAMPLE.com"),", the shop name is 'EXAMPLE.com'."),(0,o.kt)("li",{parentName:"ol"},"Choose the start date you want to start syncing data from.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the WooCommerce source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/customer_key")),(0,o.kt)("td",{parentName:"tr",align:null},"Customer Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Customer Key for API in WooCommerce shop"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/customer_secret")),(0,o.kt)("td",{parentName:"tr",align:null},"Customer Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Customer Secret for API in WooCommerce shop"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/shop_name")),(0,o.kt)("td",{parentName:"tr",align:null},"Shop Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the store."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,o.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,o.kt)("td",{parentName:"tr",align:null},"The date you would like to replicate data from. Format: YYYY-MM-DD"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource of your WooCommerce project from which collections are captured."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n\n  }\n}\n')),(0,o.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,o.kt)("p",null,"The WooCommerce source connector in Estuary Flow supports the following streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Coupons (Incremental)"),(0,o.kt)("li",{parentName:"ul"},"Customers (Incremental)"),(0,o.kt)("li",{parentName:"ul"},"Orders (Incremental)"),(0,o.kt)("li",{parentName:"ul"},"Order notes"),(0,o.kt)("li",{parentName:"ul"},"Payment gateways"),(0,o.kt)("li",{parentName:"ul"},"Product attribute terms"),(0,o.kt)("li",{parentName:"ul"},"Product attributes"),(0,o.kt)("li",{parentName:"ul"},"Product categories"),(0,o.kt)("li",{parentName:"ul"},"Product reviews (Incremental)"),(0,o.kt)("li",{parentName:"ul"},"Product shipping classes"),(0,o.kt)("li",{parentName:"ul"},"Product tags"),(0,o.kt)("li",{parentName:"ul"},"Product variations"),(0,o.kt)("li",{parentName:"ul"},"Products (Incremental)"),(0,o.kt)("li",{parentName:"ul"},"Refunds"),(0,o.kt)("li",{parentName:"ul"},"Shipping methods"),(0,o.kt)("li",{parentName:"ul"},"Shipping zone locations"),(0,o.kt)("li",{parentName:"ul"},"Shipping zone methods"),(0,o.kt)("li",{parentName:"ul"},"Shipping zones"),(0,o.kt)("li",{parentName:"ul"},"System status tools"),(0,o.kt)("li",{parentName:"ul"},"Tax classes"),(0,o.kt)("li",{parentName:"ul"},"Tax rates")),(0,o.kt)("h2",{id:"connector-specific-features--highlights"},"Connector-Specific Features & Highlights"),(0,o.kt)("p",null,"Useful links:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://woocommerce.github.io/woocommerce-rest-api-docs/#introduction"},"WooCommerce Rest API Docs"),"."))}m.isMDXComponent=!0}}]);