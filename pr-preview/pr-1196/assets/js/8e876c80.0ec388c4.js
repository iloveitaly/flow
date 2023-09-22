"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Captures",c={unversionedId:"concepts/captures",id:"concepts/captures",title:"Captures",description:"A capture is how Flow ingests data from an external source.",source:"@site/docs/concepts/captures.md",sourceDirName:"concepts",slug:"/concepts/captures",permalink:"/pr-preview/pr-1196/concepts/captures",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/captures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Catalog",permalink:"/pr-preview/pr-1196/concepts/catalogs"},next:{title:"Collections",permalink:"/pr-preview/pr-1196/concepts/collections"}},s={},p=[{value:"Connectors",id:"connectors",level:2},{value:"Airbyte sources",id:"airbyte-sources",level:3},{value:"Discovery",id:"discovery",level:2},{value:"Specification",id:"specification",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"captures"},"Captures"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"capture")," is how Flow ingests data from an external source.\nEvery Data Flow starts with a capture."),(0,o.kt)("p",null,"Captures are a type of Flow ",(0,o.kt)("strong",{parentName:"p"},"task"),".\nThey connect to an external data source, or ",(0,o.kt)("strong",{parentName:"p"},"endpoint"),",\nand bind one or more of its resources, such as database tables.\nEach binding adds documents to a corresponding Flow ",(0,o.kt)("strong",{parentName:"p"},"collection"),"."),(0,o.kt)("p",null,"Captures run continuously:\nas soon as new documents are made available at the endpoint resources,\nFlow validates their schema and adds them to the appropriate collection.\nCaptures can process ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/concepts/collections#documents"},"documents")," up to 16 MB in size."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7270).Z,width:"960",height:"540"})),(0,o.kt)("p",null,"You define and configure captures in ",(0,o.kt)("strong",{parentName:"p"},"Flow specifications"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/create-dataflow#create-a-capture"},"See the guide to create a capture")),(0,o.kt)("h2",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Captures extract data from an endpoint using a ",(0,o.kt)("a",{parentName:"p",href:"../#connectors"},"connector"),".\nEstuary builds and maintains many real-time connectors for various technology systems,\nsuch as database change data capture (CDC) connectors."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/"},"source connector reference documentation"),"."),(0,o.kt)("h3",{id:"airbyte-sources"},"Airbyte sources"),(0,o.kt)("p",null,"Flow supports running Airbyte source connectors (through\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/estuary/airbyte/tree/master/airbyte-to-flow"},"airbyte-to-flow"),")\nThese connectors tend to focus on SaaS APIs, and do not offer real-time streaming integrations.\nFlow runs the connector at regular intervals to capture updated documents."),(0,o.kt)("p",null,"Airbyte source connectors are independently reviewed and sometime updated for compatibility with Flow.\nEstuary's ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/"},"source connectors")," documentation includes actively supported Airbyte connectors.\nA full list of Airbyte's connectors is available at ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/airbyte?page=1"},"Airbyte docker hub"),".\nIf you see a connector you'd like to prioritize for access in the Flow web app, ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact us"),"."),(0,o.kt)("h2",{id:"discovery"},"Discovery"),(0,o.kt)("p",null,"To help you configure new pull captures, Flow offers the guided ",(0,o.kt)("strong",{parentName:"p"},"discovery")," workflow in the Flow web application."),(0,o.kt)("p",null,"To begin discovery, you tell Flow the connector you'd like to use and basic information about the endpoint.\nFlow automatically generates a capture configuration for you. It identifies one or more\n",(0,o.kt)("strong",{parentName:"p"},"resources")," \u2014 tables, data streams, or the equivalent \u2014 and generates ",(0,o.kt)("strong",{parentName:"p"},"bindings")," so that each will be mapped to a\ndata collection in Flow."),(0,o.kt)("p",null,"You may then modify the generated configuration as needed before publishing the capture."),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"Captures are defined in Flow specification files per the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# A set of captures to include in the catalog.\n# Optional, type: object\ncaptures:\n  # The name of the capture.\n  acmeCo/example/source-s3:\n    # Endpoint defines how to connect to the source of the capture.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the capture connector.\n        image: ghcr.io/estuary/source-s3:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to/connector-config.yaml\n\n    # Bindings define how collections are populated from the data source.\n    # A capture may bind multiple resources to different collections.\n    # Required, type: array\n    bindings:\n      - # The target collection to capture into.\n        # This may be defined in a separate, imported specification file.\n        # Required, type: string\n        target: acmeCo/example/collection\n\n        # The resource is additional configuration required by the endpoint\n        # connector to identify and capture a specific endpoint resource.\n        # The structure and meaning of this configuration is defined by\n        # the specific connector.\n        # Required, type: object\n        resource:\n          stream: a-bucket/and-prefix\n          # syncMode should be set to incremental for all Estuary connectors\n          syncMode: incremental\n\n      - target: acmeCo/example/another-collection\n        resource:\n          stream: a-bucket/another-prefix\n          syncMode: incremental\n    \n    # Interval of time between invocations of non-streaming connectors.\n    # If a connector runs to completion and then exits, the capture task will\n    # restart the connector after this interval of time has elapsed.\n    #\n    # Intervals are relative to the start of an invocation and not its completion.\n    # For example, if the interval is five minutes, and an invocation of the\n    # capture finishes after two minutes, then the next invocation will be started\n    # after three additional minutes.\n    #\n    # Optional. Default: Five minutes.\n    interval: 5m\n")))}d.isMDXComponent=!0},7270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/captures-new-4479ed989de046cd79db471d502bfc89.svg"}}]);