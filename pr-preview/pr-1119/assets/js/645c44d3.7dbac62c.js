"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9493],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,N=p["".concat(i,".").concat(m)]||p[m]||k[m]||o;return a?r.createElement(N,l(l({ref:t},s),{},{components:a})):r.createElement(N,l({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={},l="Capture connectors",c={unversionedId:"reference/Connectors/capture-connectors/README",id:"reference/Connectors/capture-connectors/README",title:"Capture connectors",description:"Estuary's available capture connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name.",source:"@site/docs/reference/Connectors/capture-connectors/README.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/",permalink:"/reference/Connectors/capture-connectors/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/reference/Connectors/"},next:{title:"Airtable",permalink:"/reference/Connectors/capture-connectors/airtable"}},i={},u=[{value:"Available capture connectors",id:"available-capture-connectors",level:2},{value:"Estuary connectors",id:"estuary-connectors",level:3},{value:"Third party connectors",id:"third-party-connectors",level:3}],s={toc:u},p="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"capture-connectors"},"Capture connectors"),(0,n.kt)("p",null,"Estuary's available capture connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name."),(0,n.kt)("p",null,"Also listed are links to the most recent Docker images for each connector. You'll need these to write Flow specifications manually (if you're ",(0,n.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"developing locally"),"). If you're using the Flow web app, they aren't necessary."),(0,n.kt)("p",null,"Estuary is actively developing new connectors, so check back regularly for the latest additions. We\u2019re prioritizing the development of high-scale technological systems, as well as client needs."),(0,n.kt)("h2",{id:"available-capture-connectors"},"Available capture connectors"),(0,n.kt)("h3",{id:"estuary-connectors"},"Estuary connectors"),(0,n.kt)("p",null,"These connectors are created by Estuary. We prioritize high-scale technology systems for development."),(0,n.kt)("p",null,"All Estuary connectors capture data in real time, as it appears in the source system"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AlloyDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/alloydb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-alloydb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Alpaca",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/alpaca"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-alpaca:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Kinesis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amazon-kinesis"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kinesis:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon S3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amazon-s3"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-s3:dev"))),(0,n.kt)("li",{parentName:"ul"},"Apache Kafka",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/apache-kafka"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kafka:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/gcs"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-gcs:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Firestore",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-firestore"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-firestore:dev"))),(0,n.kt)("li",{parentName:"ul"},"HTTP file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/http-file"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-http-file:dev"))),(0,n.kt)("li",{parentName:"ul"},"HTTP ingest (webhook)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/http-ingest"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-http-ingest:dev"))),(0,n.kt)("li",{parentName:"ul"},"MariaDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/mariadb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mariadb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Microsoft SQL Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/sqlserver"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sqlserver:dev"))),(0,n.kt)("li",{parentName:"ul"},"MongoDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/mongodb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mongodb:dev"))),(0,n.kt)("li",{parentName:"ul"},"MySQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/MySQL"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mysql:dev"))),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/PostgreSQL"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-postgres:dev"))),(0,n.kt)("li",{parentName:"ul"},"Salesforce (for real-time data)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/salesforce-real-time"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-salesforce-next:dev"))),(0,n.kt)("li",{parentName:"ul"},"SFTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/sftp"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sftp:dev")))),(0,n.kt)("h3",{id:"third-party-connectors"},"Third party connectors"),(0,n.kt)("p",null,"Estuary supports open-source connectors from third parties. These connectors operate in a ",(0,n.kt)("strong",{parentName:"p"},"batch")," fashion,\ncapturing data in increments. When you run these connectors in Flow, you'll get as close to real time as possible\nwithin the limitations set by the connector itself."),(0,n.kt)("p",null,"Typically, we enable SaaS connectors from third parties to allow more diverse data flows."),(0,n.kt)("p",null,"All the third-party connectors available currently were created by ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/connectors"},"Airbyte"),".\nThe versions made available in Flow have been adapted for compatibility."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Airtable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/airtable"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-airtable.dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amazon-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-amazon-ads.dev"))),(0,n.kt)("li",{parentName:"ul"},"Amplitude",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/amplitude"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-amplitude:dev"))),(0,n.kt)("li",{parentName:"ul"},"Bing Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/bing-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-bing-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Braintree",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/braintree"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-braintree:dev"))),(0,n.kt)("li",{parentName:"ul"},"Braze",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/braze"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-braze:dev"))),(0,n.kt)("li",{parentName:"ul"},"Chargebee",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/chargebee"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-chargebee.dev"))),(0,n.kt)("li",{parentName:"ul"},"Exchange Rates API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/exchange-rates"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-exchange-rates:dev"))),(0,n.kt)("li",{parentName:"ul"},"Facebook Marketing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/facebook-marketing"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-facebook-marketing:dev"))),(0,n.kt)("li",{parentName:"ul"},"Freshdesk",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/freshdesk"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-freshdesk:dev"))),(0,n.kt)("li",{parentName:"ul"},"GitHub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/github"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-github:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Analytics 4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-analytics-4"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-analytics-data-api:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Universal Analytics",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-analytics"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-analytics-ua:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Search Console",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-search-console"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-search-console:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Sheets",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/google-sheets"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-sheets:dev"))),(0,n.kt)("li",{parentName:"ul"},"Greenhouse",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/greenhouse"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-greenhouse.dev"))),(0,n.kt)("li",{parentName:"ul"},"Harvest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/harvest"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-harvest:dev"))),(0,n.kt)("li",{parentName:"ul"},"Hubspot",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/hubspot"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-hubspot:dev"))),(0,n.kt)("li",{parentName:"ul"},"Instagram",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/instagram"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-instagram:dev"))),(0,n.kt)("li",{parentName:"ul"},"Intercom",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/intercom"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-intercom:dev"))),(0,n.kt)("li",{parentName:"ul"},"Iterable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/iterable"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-iterable.dev"))),(0,n.kt)("li",{parentName:"ul"},"Jira",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/jira"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-jira.dev"))),(0,n.kt)("li",{parentName:"ul"},"Klaviyo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/klaviyo"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-klaviyo.dev"))),(0,n.kt)("li",{parentName:"ul"},"LinkedIn Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/linkedin-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-linkedin-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Mailchimp",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/mailchimp"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mailchimp:dev"))),(0,n.kt)("li",{parentName:"ul"},"Marketo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/marketo"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-marketo.dev"))),(0,n.kt)("li",{parentName:"ul"},"MixPanel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/mixpanel"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-mixpanel.dev"))),(0,n.kt)("li",{parentName:"ul"},"NetSuite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/netsuite"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-netsuite:dev"))),(0,n.kt)("li",{parentName:"ul"},"Notion",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/notion"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-notion:dev"))),(0,n.kt)("li",{parentName:"ul"},"Paypal Transaction",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/paypal-transaction"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-paypal-transaction.dev"))),(0,n.kt)("li",{parentName:"ul"},"Recharge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/recharge"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-recharge:dev"))),(0,n.kt)("li",{parentName:"ul"},"Salesforce (For historical data)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/salesforce"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-salesforce:dev"))),(0,n.kt)("li",{parentName:"ul"},"SendGrid",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/sendgrid"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sendgrid:dev"))),(0,n.kt)("li",{parentName:"ul"},"Sentry",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/sentry"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sentry:dev"))),(0,n.kt)("li",{parentName:"ul"},"Slack",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/slack"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-slack:dev"))),(0,n.kt)("li",{parentName:"ul"},"Snapchat",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/snapchat"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-snapchat:dev"))),(0,n.kt)("li",{parentName:"ul"},"Stripe",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/stripe"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-stripe:dev"))),(0,n.kt)("li",{parentName:"ul"},"SurveyMonkey",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/survey-monkey"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-surveymonkey:dev"))),(0,n.kt)("li",{parentName:"ul"},"Twilio",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/twilio"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-twilio:dev"))),(0,n.kt)("li",{parentName:"ul"},"Zendesk Chat",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/zendesk-chat"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-zendesk-chat:dev"))),(0,n.kt)("li",{parentName:"ul"},"Zendesk Support",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/Connectors/capture-connectors/zendesk-support"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-zendesk-support:dev")))))}k.isMDXComponent=!0}}]);