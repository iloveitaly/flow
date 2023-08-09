"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Hubspot",p={unversionedId:"reference/Connectors/capture-connectors/hubspot",id:"reference/Connectors/capture-connectors/hubspot",title:"Hubspot",description:"This connector captures data from a Hubspot account.",source:"@site/docs/reference/Connectors/capture-connectors/hubspot.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/hubspot",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/hubspot",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/hubspot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/http-ingest"},next:{title:"Instagram",permalink:"/pr-preview/pr-1138/reference/Connectors/capture-connectors/instagram"}},s={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Hubspot in the Flow web app",id:"using-oauth2-to-authenticate-with-hubspot-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hubspot"},"Hubspot"),(0,r.kt)("p",null,"This connector captures data from a Hubspot account."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-hubspot:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-hubspot:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/hubspot"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"By default, each resource associated with your Hubspot account is mapped to a Flow collection through a separate binding."),(0,r.kt)("p",null,"The following data resources are supported for all subscription levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_campaign_data"},"Campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/companies"},"Companies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://developers.hubspot.com/docs/methods/lists/get_lists"},"Contact Lists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts List Memberships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/pipelines/get_pipelines_for_object_type"},"Deal Pipelines")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/deals"},"Deals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_events"},"Email Events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/engagements/get-all-engagements"},"Engagements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/calls"},"Engagements Calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/email"},"Engagements Emails")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/meetings"},"Engagements Meetings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/notes"},"Engagements Notes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tasks"},"Engagements Tasks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/marketing/forms"},"Forms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/forms/get-submissions-for-a-form"},"Form Submissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/line-items"},"Line Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/owners/get_owners"},"Owners")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/products"},"Products")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Property History")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/quotes"},"Quotes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_subscriptions_timeline"},"Subscription Changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tickets"},"Tickets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/pipelines"},"Ticket Pipelines"))),(0,r.kt)("p",null,"The following data resources are supported for pro accounts (set ",(0,r.kt)("strong",{parentName:"p"},"Subscription type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"pro")," in the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"configuration"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/feedback-submissions"},"Feedback Submissions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/cms_email/get-all-marketing-email-statistics"},"Marketing Emails")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/workflows/v3/get_workflows"},"Workflows"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with Hubspot when capturing data: using OAuth2, and manually, with a private app access token.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-hubspot-in-the-flow-web-app"},"Using OAuth2 to authenticate with Hubspot in the Flow web app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Hubspot account")),(0,r.kt)("h3",{id:"configuring-the-connector-specification-manually"},"Configuring the connector specification manually"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Hubspot account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The access token for an appropriately configured ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/private-apps"},"private app")," on the Hubspot account."))),(0,r.kt)("h4",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To create a private app in Hubspot and generate its access token, do the following."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that your Hubspot user account has ",(0,r.kt)("a",{parentName:"p",href:"https://knowledge.hubspot.com/settings/hubspot-user-permissions-guide#super-admin"},"super admin")," privileges.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Hubspot, create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/private-apps#create-a-private-app"},"new private app"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Name the app "Estuary Flow," or choose another name that is memorable to you.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the new app ",(0,r.kt)("strong",{parentName:"p"},"Read")," access for all available scopes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the access token for use in the connector configuration."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Hubspot source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The following properties reflect the access token authentication method."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Private Application"),(0,r.kt)("td",{parentName:"tr",align:null},"Authenticate with a private app access token"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/access_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,r.kt)("td",{parentName:"tr",align:null},"HubSpot Access token."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/credentials_title"))),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the credentials set"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"Private App Credentials"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/subscription_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Your HubSpot account subscription type"),(0,r.kt)("td",{parentName:"tr",align:null},"Some streams are only available to certain subscription packages, we use this information to select which streams to pull data from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"starter"'))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Data resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the data resource."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-hubspot:dev\n          config:\n            credentials:\n              credentials_title: Private App Credentials\n              access_token: <secret>\n      bindings:\n        - resource:\n            stream: companies\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n")),(0,r.kt)("p",null,"Your configuration will have many more bindings representing all supported ",(0,r.kt)("a",{parentName:"p",href:"#supported-data-resources"},"resources"),"\nin your Hubspot account."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/captures#pull-captures"},"Learn more about capture definitions.")))}m.isMDXComponent=!0}}]);