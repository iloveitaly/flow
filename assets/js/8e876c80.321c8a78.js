"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5039],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:1},s="Captures",u={unversionedId:"concepts/captures",id:"concepts/captures",title:"Captures",description:"A capture is a catalog task that connects to an external data source, or endpoint,",source:"@site/docs/concepts/captures.md",sourceDirName:"concepts",slug:"/concepts/captures",permalink:"/concepts/captures",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/captures.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/concepts/"},next:{title:"Collections",permalink:"/concepts/collections"}},l=[{value:"Pull captures",id:"pull-captures",children:[{value:"Estuary sources",id:"estuary-sources",children:[],level:3},{value:"Airbyte sources",id:"airbyte-sources",children:[],level:3},{value:"Discovery",id:"discovery",children:[],level:3}],level:2},{value:"Push captures",id:"push-captures",children:[],level:2}],p={toc:l};function d(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"captures"},"Captures"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"capture")," is a catalog task that connects to an external data source, or endpoint,\nand binds one or more of its resources, such as database tables,\nto Flow collections.\nAs documents become available for any of the bindings,\nFlow validates their schema and adds them to their bound collection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4653).Z})),(0,a.kt)("h2",{id:"pull-captures"},"Pull captures"),(0,a.kt)("p",null,"Pull captures pull documents from an endpoint using a ",(0,a.kt)("a",{parentName:"p",href:"../#connectors"},"connector"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# A set of captures to include in the catalog.\n# Optional, type: object\ncaptures:\n  # The name of the capture.\n  acmeCo/example/source-s3:\n    # Endpoint defines how to connect to the source of the capture.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image which implements the capture connector.\n        image: ghcr.io/estuary/source-s3:dev\n        # File which provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to/connector-config.yaml\n\n    # Bindings define how collections are populated from the data source.\n    # A capture may bind multiple resources to different collections.\n    # Required, type: array\n    bindings:\n      - # The target collection to capture into.\n        # This may be defined in a separate, imported catalog source file.\n        # Required, type: string\n        target: acmeCo/example/collection\n\n        # The resource is additional configuration required by the endpoint\n        # connector to identify and capture a specific endpoint resource.\n        # The structure and meaning of this configuration is defined by\n        # the specific connector.\n        # Required, type: object\n        resource:\n          stream: a-bucket/and-prefix\n          # syncMode should be set to incremental for all Estuary connectors\n          syncMode: incremental\n\n      - target: acmeCo/example/another-collection\n        resource:\n          stream: a-bucket/another-prefix\n          syncMode: incremental\n")),(0,a.kt)("h3",{id:"estuary-sources"},"Estuary sources"),(0,a.kt)("p",null,"Estuary builds and maintains many real-time connectors for various technology systems,\nsuch as database change data capture (CDC) connectors."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/reference/Connectors/capture-connectors/"},"source connector reference documentation"),"."),(0,a.kt)("h3",{id:"airbyte-sources"},"Airbyte sources"),(0,a.kt)("p",null,"Flow also natively supports Airbyte source connectors.\nThese connectors tend to focus on SaaS APIs, and do not offer real-time streaming integrations.\nFlow runs the connector at regular intervals to capture updated documents."),(0,a.kt)("p",null,"Airbyte source connectors are independently reviewed and sometime updated for compatibility with Flow.\nEstuary's ",(0,a.kt)("a",{parentName:"p",href:"/reference/Connectors/capture-connectors/"},"source connectors")," documentation includes actively supported Airbyte connectors.\nA full list of Airbyte's connectors is available at ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/airbyte?page=1"},"Airbyte docker hub"),".\nIf you see a connector you'd like to prioritize for access in the Flow web app, ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact us"),"."),(0,a.kt)("h3",{id:"discovery"},"Discovery"),(0,a.kt)("p",null,"Flow offers a CLI tool ",(0,a.kt)("inlineCode",{parentName:"p"},"flowctl discover --image connector/image:tag")," which\nprovides a guided workflow for creating a correctly configured capture."),(0,a.kt)("h2",{id:"push-captures"},"Push captures"),(0,a.kt)("p",null,"Push captures expose an endpoint to which documents may be pushed using a supported ingestion protocol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n\n  # The name of the capture.\n  acmeCo/example/webhook-ingest:\n    endpoint:\n      # This endpoint is an ingestion.\n      ingest: {}\n\n    bindings:\n      - # The target collection to capture into.\n        target: acmeCo/example/webhooks\n        # The resource configures the specific behavior of the ingestion endpoint.\n        resource:\n          name: webhooks\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Push captures are under development.\nEstuary intends to offer Webhook, Websocket, and Kafka-compatible APIs for capturing into collections. Specification details are likely to exist."))))}d.isMDXComponent=!0},4653:function(e,t,n){t.Z=n.p+"assets/images/captures-742cfb1373feea7dd799fcd9c3bbbf78.svg"}}]);