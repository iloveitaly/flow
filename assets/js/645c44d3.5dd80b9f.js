"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,f=m["".concat(l,".").concat(k)]||m[k]||p[k]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},c="Capture connectors",i={unversionedId:"reference/Connectors/capture-connectors/README",id:"reference/Connectors/capture-connectors/README",title:"Capture connectors",description:"Estuary's available capture connectors are listed in this section. Each connector has a unique configuration you must follow in your catalog specification; these will be linked below the connector name.",source:"@site/docs/reference/Connectors/capture-connectors/README.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/",permalink:"/reference/Connectors/capture-connectors/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/reference/Connectors/"},next:{title:"Amazon Kinesis",permalink:"/reference/Connectors/capture-connectors/amazon-kinesis"}},l={},u=[{value:"Available capture connectors",id:"available-capture-connectors",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"capture-connectors"},"Capture connectors"),(0,a.kt)("p",null,"Estuary's available capture connectors are listed in this section. Each connector has a unique configuration you must follow in your ",(0,a.kt)("a",{parentName:"p",href:"/concepts/#specifications"},"catalog specification"),"; these will be linked below the connector name."),(0,a.kt)("p",null,"Also listed are links to the most recent Docker image, which you'll need for certain configuration methods."),(0,a.kt)("p",null,"Estuary is actively developing new connectors, so check back regularly for the latest additions. We\u2019re prioritizing the development of high-scale technological systems, as well as client needs."),(0,a.kt)("h2",{id:"available-capture-connectors"},"Available capture connectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Amazon Kinesis",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amazon-kinesis"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kinesis:dev"))),(0,a.kt)("li",{parentName:"ul"},"Amazon S3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amazon-s3"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-s3:dev"))),(0,a.kt)("li",{parentName:"ul"},"Amplitude",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amplitude"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-amplitude:dev"))),(0,a.kt)("li",{parentName:"ul"},"Apache Kafka",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/apache-kafka"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kafka:dev"))),(0,a.kt)("li",{parentName:"ul"},"Exchange Rates API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/exchange-rates"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-exchange-rates:dev"))),(0,a.kt)("li",{parentName:"ul"},"Facebook Marketing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/facebook-marketing"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-facebook-marketing:dev"))),(0,a.kt)("li",{parentName:"ul"},"Google Analytics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-analytics"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-analytics-v4:dev"))),(0,a.kt)("li",{parentName:"ul"},"Google Cloud Storage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/gcs"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-gcs:dev"))),(0,a.kt)("li",{parentName:"ul"},"Google Sheets",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-sheets"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-sheets:dev"))),(0,a.kt)("li",{parentName:"ul"},"HTTP file",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/http-file"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-http-file:dev"))),(0,a.kt)("li",{parentName:"ul"},"Hubspot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/hubspot"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-hubspot:dev"))),(0,a.kt)("li",{parentName:"ul"},"Intercom",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/intercom"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-intercom:dev"))),(0,a.kt)("li",{parentName:"ul"},"Mailchimp",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/mailchimp"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mailchimp:dev"))),(0,a.kt)("li",{parentName:"ul"},"MySQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/MySQL"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mysql:dev"))),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/PostgreSQL"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-postgres:dev"))),(0,a.kt)("li",{parentName:"ul"},"Stripe",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/stripe"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-stripe:dev"))),(0,a.kt)("li",{parentName:"ul"},"Zendesk Support",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/zendesk-support"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-zendesk-support:dev")))))}p.isMDXComponent=!0}}]);