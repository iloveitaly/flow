"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5228],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={},i="Google Cloud Firestore to Snowflake",l={unversionedId:"guides/system-specific-dataflows/firestore-to-dwh",id:"guides/system-specific-dataflows/firestore-to-dwh",title:"Google Cloud Firestore to Snowflake",description:"This guide walks you through the process of creating an",source:"@site/docs/guides/system-specific-dataflows/firestore-to-dwh.md",sourceDirName:"guides/system-specific-dataflows",slug:"/guides/system-specific-dataflows/firestore-to-dwh",permalink:"/pr-preview/pr-1216/guides/system-specific-dataflows/firestore-to-dwh",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/system-specific-dataflows/firestore-to-dwh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System-specific Data Flows",permalink:"/pr-preview/pr-1216/guides/system-specific-dataflows/"},next:{title:"Amazon S3 to Snowflake",permalink:"/pr-preview/pr-1216/guides/system-specific-dataflows/s3-to-snowflake"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Capture from Firestore",id:"capture-from-firestore",level:2},{value:"Materialize to Snowflake",id:"materialize-to-snowflake",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-firestore-to-snowflake"},"Google Cloud Firestore to Snowflake"),(0,o.kt)("p",null,"This guide walks you through the process of creating an\nend-to-end real-time Data Flow from Google Cloud Firestore to Snowflake using Estuary Flow."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(Recommended) understanding of the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/concepts/#essential-concepts"},"basic Flow concepts"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Access to the ",(0,o.kt)("a",{parentName:"p",href:"http://dashboard.estuary.dev"},(0,o.kt)("strong",{parentName:"a"},"Flow web application"))," through an Estuary account.\nIf you don't have one, visit the web app to register for free.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"Firestore database")," that contains the data you'd like to move to Snowflake. You ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library"},"create this as part of a Google Firebase project"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Google service account with:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read access to your Firestore database, via ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/datastore/docs/access/iam"},"roles/datastore.viewer"),".\nYou can assign this role when you ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating"},"create the service account"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#single-role"},"add it to an existing service account"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A generated ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating"},"JSON service account key")," for the account.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Snowflake account with:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A target ",(0,o.kt)("strong",{parentName:"p"},"database"),", ",(0,o.kt)("strong",{parentName:"p"},"schema"),", and virtual ",(0,o.kt)("strong",{parentName:"p"},"warehouse"),"; and a ",(0,o.kt)("strong",{parentName:"p"},"user")," with a ",(0,o.kt)("strong",{parentName:"p"},"role")," assigned that grants the appropriate access levels to these resources.\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/reference/Connectors/materialization-connectors/Snowflake#setup"},"You can use a script to quickly create all of these items.")," Have these details on hand for setup with Flow.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The account identifier and host URL noted. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used"},"The URL is formatted using the account identifier"),". For example, you might have the account identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"orgname-accountname.snowflakecomputing.com"),"."))))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In Estuary Flow, you create ",(0,o.kt)("strong",{parentName:"p"},"Data Flows")," to transfer data from ",(0,o.kt)("strong",{parentName:"p"},"source")," systems to ",(0,o.kt)("strong",{parentName:"p"},"destination")," systems in real time.\nIn this use case, your source is an Google Cloud Firestore NoSQL database and your destination is a Snowflake data warehouse."),(0,o.kt)("p",null,"After following this guide, you'll have a Data Flow that comprises:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"capture"),", which ingests data from Firestore"),(0,o.kt)("li",{parentName:"ul"},"Several ",(0,o.kt)("strong",{parentName:"li"},"collection"),", cloud-backed copies of ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/firestore/docs/data-model"},"Firestore collections")," in the Flow system"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"materialization"),", which pushes the collections to Snowflake")),(0,o.kt)("p",null,"The capture and materialization rely on plug-in components called ",(0,o.kt)("strong",{parentName:"p"},"connectors"),".\nWe'll walk through how to configure the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/reference/Connectors/capture-connectors/google-firestore"},"Firestore")," and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/reference/Connectors/materialization-connectors/Snowflake"},"Snowflake")," connectors to integrate these systems with Flow."),(0,o.kt)("h2",{id:"capture-from-firestore"},"Capture from Firestore"),(0,o.kt)("p",null,"You'll first create a capture to connect to your Firestore database, which will yield one Flow collection for each ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/firestore/docs/data-model"},"Firestore collection")," in your database."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Flow web application at ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/"},"dashboard.estuary.dev")," and sign in using the\ncredentials provided by your Estuary account manager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Sources")," tab and choose ",(0,o.kt)("strong",{parentName:"p"},"New Capture"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the ",(0,o.kt)("strong",{parentName:"p"},"Google Firestore")," tile and click ",(0,o.kt)("strong",{parentName:"p"},"Capture"),"."),(0,o.kt)("p",{parentName:"li"},"A form appears with the properties required for a Firestore capture.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type a name for your capture."),(0,o.kt)("p",{parentName:"li"},"Your capture name must begin with a ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/concepts/catalogs#namespace"},"prefix")," to which you ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/reference/authentication"},"have access"),"."),(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Name")," field, use the drop-down to select your prefix.\nAppend a unique capture name after the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," to create the full name, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/myFirestoreCapture"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required properties for Firestore."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Database"),": Flow can autodetect the database name, but you may optionally specify it here. This is helpful if the service account used has access to multiple Firebase projects. Your database name usually follows the format ",(0,o.kt)("inlineCode",{parentName:"p"},"projects/$PROJECTID/databases/(default)"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Credentials"),": The JSON service account key created per the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"Flow uses the provided configuration to initiate a connection with Firestore."),(0,o.kt)("p",{parentName:"li"},"It maps each available Firestore collection to a possible Flow collection. It also generates minimal schemas for each collection."),(0,o.kt)("p",{parentName:"li"},"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Source Collections")," browser to remove or modify collections. You'll have the chance to tighten up each collection's JSON schema later, when you materialize to Snowflake."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you make any changes to collections, click ",(0,o.kt)("strong",{parentName:"p"},"Next")," again."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you're satisfied with the collections to be captured, click ",(0,o.kt)("strong",{parentName:"p"},"Save and Publish"),"."),(0,o.kt)("p",{parentName:"li"},"You'll see a notification when the capture publishes successfully."),(0,o.kt)("p",{parentName:"li"},"The data currently in your Firestore database has been captured, and future updates to it will be captured continuously.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Materialize Collections")," to continue."))),(0,o.kt)("h2",{id:"materialize-to-snowflake"},"Materialize to Snowflake"),(0,o.kt)("p",null,"Next, you'll add a Snowflake materialization to connect the captured data to its destination: your data warehouse."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the ",(0,o.kt)("strong",{parentName:"p"},"Snowflake")," tile and click ",(0,o.kt)("strong",{parentName:"p"},"Materialization"),"."),(0,o.kt)("p",{parentName:"li"},"A form appears with the properties required for a Snowflake materialization.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/mySnowflakeMaterialization"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required properties for Snowflake (you should have most of these handy from the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),")."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Host URL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Warehouse"),": optional"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Role"),": optional"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},"Flow uses the provided configuration to initiate a connection to Snowflake."),(0,o.kt)("p",{parentName:"li"},"You'll be notified if there's an error. In that case, fix the configuration form or Snowflake setup as needed and click ",(0,o.kt)("strong",{parentName:"p"},"Next")," to try again."),(0,o.kt)("p",{parentName:"li"},"Once the connection is successful, the Endpoint Config collapses and the ",(0,o.kt)("strong",{parentName:"p"},"Source Collections")," browser becomes prominent.\nIt shows the collections you captured previously.\nEach of them will be mapped to a Snowflake table.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Source Collections")," browser, optionally change the name in the ",(0,o.kt)("strong",{parentName:"p"},"Table")," field for each collection."),(0,o.kt)("p",{parentName:"li"},"These will be the names of the output tables in Snowflake.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each table, choose whether to ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/reference/Connectors/materialization-connectors/Snowflake#delta-updates"},"enable delta updates"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each collection, apply a stricter schema to be used for the materialization."),(0,o.kt)("p",{parentName:"li"},"Firestore has a flat data structure.\nTo materialize data effectively from Firestore to Snowflake, you should apply a schema can translate to a table structure.\nFlow's ",(0,o.kt)("strong",{parentName:"p"},"Schema Inference")," tool can help."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Source Collections browser, choose a collection and click its ",(0,o.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Schema Inference")),(0,o.kt)("p",{parentName:"li"},"The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,o.kt)("inlineCode",{parentName:"p"},"readSchema"),", to use for the materialization.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review the new schema and click ",(0,o.kt)("strong",{parentName:"p"},"Apply Inferred Schema"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next")," to apply the changes you made to collections.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save and Publish"),". You'll see a notification when the full Data Flow publishes successfully."))),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Your Data Flow has been deployed, and will run continuously until it's stopped. Updates in your Firestore database will be reflected in your Snowflake table as they occur."),(0,o.kt)("p",null,"You can advance your Data Flow by adding a ",(0,o.kt)("strong",{parentName:"p"},"derivation"),". Derivations are real-time data transformations.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1216/guides/flowctl/create-derivation"},"guide to create a derivation"),"."))}m.isMDXComponent=!0}}]);