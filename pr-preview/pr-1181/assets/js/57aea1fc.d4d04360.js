"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Amazon DynamoDB",l={unversionedId:"reference/Connectors/materialization-connectors/amazon-dynamodb",id:"reference/Connectors/materialization-connectors/amazon-dynamodb",title:"Amazon DynamoDB",description:"This connector materializes Flow collections into tables in an Amazon DynamoDB.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-dynamodb.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-dynamodb",permalink:"/pr-preview/pr-1181/reference/Connectors/materialization-connectors/amazon-dynamodb",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-dynamodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AlloyDB",permalink:"/pr-preview/pr-1181/reference/Connectors/materialization-connectors/alloydb"},next:{title:"Apache Parquet in S3",permalink:"/pr-preview/pr-1181/reference/Connectors/materialization-connectors/Parquet"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Collection Requirements",id:"collection-requirements",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-dynamodb"},"Amazon DynamoDB"),(0,r.kt)("p",null,"This connector materializes Flow collections into tables in an Amazon DynamoDB."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows,\n",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-dynamodb:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-dynamodb:dev")),"\nprovides the latest version of the connector as a Docker image. You can also follow the link in your\nbrowser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An IAM user with the following\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html"},"permissions"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BatchGetItem")," on all resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BatchWriteItem")," on all resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateTable")," on all resources")),(0,r.kt)("p",{parentName:"li"},"These permissions should be specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamodb:")," prefix in an IAM policy document. For\nmore details and examples, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/using-identity-based-policies.html"},"Using identity-based policies with Amazon\nDynamoDB"),"\nin the Amazon docs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The AWS ",(0,r.kt)("strong",{parentName:"p"},"access key")," and ",(0,r.kt)("strong",{parentName:"p"},"secret access key")," for the user. See the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS\nblog")," for help finding these\ncredentials."))),(0,r.kt)("h2",{id:"collection-requirements"},"Collection Requirements"),(0,r.kt)("p",null,"Materialized collections can have at most 2 collection keys."),(0,r.kt)("p",null,"By default, the materialized tables will include the collection keys as the DynamoDB partition key\nand sort key, and the root document. The root document is materialized as ",(0,r.kt)("inlineCode",{parentName:"p"},'"flow_document"')," unless\nan alternate ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1181/concepts/collections#projections"},"projection")," is configured for the source\ncollection. Additional fields may be included, but DynamoDB has a 400KB size limit on an individual\nrow so selecting too many fields of a collection with large documents will cause errors if the row\nsize exceeds that."),(0,r.kt)("p",null,"The root document is materialized as a DynamoDB ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," type, and the fields of the document must be\nvalid DynamoDB ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," keys."),(0,r.kt)("p",null,"To resolve issues with collections with more than 2 keys, excessively large documents, or\nincompatible field names, use a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1181/concepts/derivations"},"derivation")," to derive a new\ncollection and materialize that collection instead."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog\nspecification file. See ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1181/concepts/connectors#using-connectors"},"connectors")," to learn more\nabout using connectors. The values and specification sample below provide configuration details\nspecific to the DynamoDB materialization connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsAccessKeyId"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID for materializing to DynamoDB."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsSecretAccessKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key for materializing to DynamoDB."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Region of the materialized tables."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"advanced/endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS endpoint URI to connect to. Use if you're materializing to a compatible API that isn't provided by AWS."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to be materialized to."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta Update"),(0,r.kt)("td",{parentName:"tr",align:null},"Should updates to this table be done via delta updates. Default is false."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  ${PREFIX}/${MATERIALIZATION_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-dynamodb:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n')))}d.isMDXComponent=!0}}]);