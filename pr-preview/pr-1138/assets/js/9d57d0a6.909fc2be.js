"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Notion",l={unversionedId:"reference/Connectors/capture-connectors/notion",id:"reference/Connectors/capture-connectors/notion",title:"Notion",description:"This connector captures data from Notion into Flow collections via the Notion API.",source:"@site/docs/reference/Connectors/capture-connectors/notion.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/notion",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/notion",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/notion.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/netsuite"},next:{title:"Paypal Transaction",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/paypal-transaction"}},p={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup for OAuth authentication",id:"setup-for-oauth-authentication",level:3},{value:"Setup for manual authentication",id:"setup-for-manual-authentication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notion"},"Notion"),(0,a.kt)("p",null,"This connector captures data from Notion into Flow collections via the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.notion.com/reference/intro"},"Notion API"),"."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-notion:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-notion:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/notion/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-block"},"Blocks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-database"},"Databases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/retrieve-a-page"},"Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.notion.com/reference/get-user"},"Users"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this connector, you'll need a Notion account with an ",(0,a.kt)("a",{parentName:"p",href:"https://developers.notion.com/docs/authorization"},"integration")," created to connect with Flow."),(0,a.kt)("p",null,"Before you create your integration, choose how you'll authenticate with Notion.\nThere are two ways: using OAuth to sign in directly in the web app,\nor manually, using an access token.\nOAuth is recommended in the web app; only manual configuration is supported when using the CLI."),(0,a.kt)("h3",{id:"setup-for-oauth-authentication"},"Setup for OAuth authentication"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/my-integrations"},"your integrations page")," and create a new integration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the new integration's ",(0,a.kt)("strong",{parentName:"p"},"Secrets")," page, change the integration type to ",(0,a.kt)("strong",{parentName:"p"},"Public"),". Fill in the required fields."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Redirect URIs: ",(0,a.kt)("a",{parentName:"li",href:"http://dashboard.estuary.dev"},"http://dashboard.estuary.dev")),(0,a.kt)("li",{parentName:"ul"},"Website homepage: ",(0,a.kt)("a",{parentName:"li",href:"http://dashboard.estuary.dev"},"http://dashboard.estuary.dev")),(0,a.kt)("li",{parentName:"ul"},"Privacy policy: ",(0,a.kt)("a",{parentName:"li",href:"https://www.estuary.dev/privacy-policy/"},"https://www.estuary.dev/privacy-policy/")),(0,a.kt)("li",{parentName:"ul"},"Terms of use: ",(0,a.kt)("a",{parentName:"li",href:"https://www.estuary.dev/terms/"},"https://www.estuary.dev/terms/"))))),(0,a.kt)("h3",{id:"setup-for-manual-authentication"},"Setup for manual authentication"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://www.notion.so/my-integrations"},"your integrations page")," and create a new ",(0,a.kt)("a",{parentName:"p",href:"https://developers.notion.com/docs/authorization#integration-types"},"internal integration"),". Notion integrations are internal by default."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"During setup, ",(0,a.kt)("a",{parentName:"li",href:"https://www.notion.so/help/create-integrations-with-the-notion-api#granular-integration-permissions"},"change ",(0,a.kt)("strong",{parentName:"a"},"User Capabilities")),"\nfrom ",(0,a.kt)("strong",{parentName:"li"},"No user information")," (the default) to ",(0,a.kt)("strong",{parentName:"li"},"Read user information without email address"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the generated token for use in the connector configuration."))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Notion source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,a.kt)("a",{parentName:"p",href:"#setup-for-oauth-authentication"},"OAuth2"),",\nso many of these properties aren't required."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,a.kt)("td",{parentName:"tr",align:null},"Authenticate using"),(0,a.kt)("td",{parentName:"tr",align:null},"Pick an authentication method."),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/credentials/auth_type"))),(0,a.kt)("td",{parentName:"tr",align:null},"Authentication type"),(0,a.kt)("td",{parentName:"tr",align:null},"Set to ",(0,a.kt)("inlineCode",{parentName:"td"},"token")," for manual authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/credentials/token")),(0,a.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,a.kt)("td",{parentName:"tr",align:null},"Notion API access token"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,a.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2017-01-25T00:00:00.000Z. Any data before this date will not be replicated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Notion resource from which a collection is captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-notion:dev\n        config:\n          credentials:\n            auth_type: token\n            token: {secret}\n          start_date: 2021-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: blocks\n          syncMode: incremental\n        target: ${PREFIX}/blocks\n      {...}\n")))}d.isMDXComponent=!0}}]);