"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},o="Salesforce \u2014 Real-time data",i={unversionedId:"reference/Connectors/capture-connectors/salesforce-real-time",id:"reference/Connectors/capture-connectors/salesforce-real-time",title:"Salesforce \u2014 Real-time data",description:"This connector captures data from Salesforce objects into Flow collections in real time via the Salesforce PushTopic API.",source:"@site/docs/reference/Connectors/capture-connectors/salesforce-real-time.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/salesforce-real-time",permalink:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/salesforce-real-time",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/salesforce-real-time.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recharge",permalink:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/recharge"},next:{title:"Salesforce \u2014 Historical data",permalink:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/salesforce"}},s={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Salesforce in the Flow web app",id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Setup",id:"setup",level:3},{value:"Create a read-only Salesforce user",id:"create-a-read-only-salesforce-user",level:4},{value:"Create a developer application and generate authorization tokens",id:"create-a-developer-application-and-generate-authorization-tokens",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"salesforce--real-time-data"},"Salesforce \u2014 Real-time data"),(0,n.kt)("p",null,"This connector captures data from Salesforce objects into Flow collections in real time via the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/pushtopic_events_intro.htm"},"Salesforce PushTopic API"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/reference/Connectors/capture-connectors/salesforce"},"A separate connector is available for syncing historical Salesforce data"),".\nFor help using both connectors in parallel, ",(0,n.kt)("a",{parentName:"p",href:"mailto:info@estuary.dev"},"contact your Estuary account manager"),"."),(0,n.kt)("p",null,"This connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-salesforce-next:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-salesforce-next:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"This connector can capture the following Salesforce ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_list.htm"},"standard objects"),", if present in your account:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Account"),(0,n.kt)("li",{parentName:"ul"},"Contact"),(0,n.kt)("li",{parentName:"ul"},"User"),(0,n.kt)("li",{parentName:"ul"},"OpportunityFilledHistory"),(0,n.kt)("li",{parentName:"ul"},"LeadHistory"),(0,n.kt)("li",{parentName:"ul"},"Opportunity"),(0,n.kt)("li",{parentName:"ul"},"Campaign"),(0,n.kt)("li",{parentName:"ul"},"Case"),(0,n.kt)("li",{parentName:"ul"},"ContactLineItem"),(0,n.kt)("li",{parentName:"ul"},"Entitlement"),(0,n.kt)("li",{parentName:"ul"},"Lead"),(0,n.kt)("li",{parentName:"ul"},"LiveChatTranscript"),(0,n.kt)("li",{parentName:"ul"},"MessagingSession"),(0,n.kt)("li",{parentName:"ul"},"Quote"),(0,n.kt)("li",{parentName:"ul"},"QuoteLineItem"),(0,n.kt)("li",{parentName:"ul"},"ServiceAppointment"),(0,n.kt)("li",{parentName:"ul"},"ServiceContract"),(0,n.kt)("li",{parentName:"ul"},"Task"),(0,n.kt)("li",{parentName:"ul"},"UserServicePresence"),(0,n.kt)("li",{parentName:"ul"},"WorkOrder"),(0,n.kt)("li",{parentName:"ul"},"WorkOrderLineItem")),(0,n.kt)("p",null,"Because most Salesforce accounts contain large volumes of data, you may only want to capture a subset of the available objects.\nThere are several ways to control this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("a",{parentName:"p",href:"#create-a-read-only-salesforce-user"},"dedicated Salesforce user")," with access only to the objects you'd like to capture.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"During ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/create-dataflow#create-a-capture"},"capture creation in the web application"),",\nremove the bindings for objects you don't want to capture."))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"Using OAuth2 to authenticate with Salesforce in the Flow web app"),(0,n.kt)("p",null,"If you're using the Flow web app, you'll be prompted to authenticate with Salesforce using OAuth. You'll need the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Salesforce organization on the Enterprise tier, or with an equivalent ",(0,n.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm"},"API request allocation"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Salesforce user credentials. We recommend creating a dedicated read-only ",(0,n.kt)("a",{parentName:"p",href:"#create-a-read-only-salesforce-user"},"Salesforce user"),"."))),(0,n.kt)("h3",{id:"configuring-the-connector-specification-manually"},"Configuring the connector specification manually"),(0,n.kt)("p",null,"If you're working with flowctl and writing specifications in a local development environment,\nyou'll need to manually supply OAuth credentials. You'll need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The items required to ",(0,n.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"set up with OAuth2"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Salesforce developer application with a generated client ID, client secret, and refresh token. ",(0,n.kt)("a",{parentName:"p",href:"#create-a-developer-application-and-generate-authorization-tokens"},"See setup steps.")))),(0,n.kt)("h3",{id:"setup"},"Setup"),(0,n.kt)("h4",{id:"create-a-read-only-salesforce-user"},"Create a read-only Salesforce user"),(0,n.kt)("p",null,"Creating a dedicated read-only Salesforce user is a simple way to specify which objects Flow will capture."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"While signed in as an administrator, create a ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.users_profiles_cloning.htm&type=5"},"new profile")," by cloning the standard ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.standard_profiles.htm&type=5"},"Minimum Access")," profile.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.perm_sets_object_perms_edit.htm&type=5"},"Edit the new profile's permissions"),". Grant it read access to all the standard and custom objects you'd like to capture with Flow.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.adding_new_users.htm&type=5"},"Create a new user"),", applying the profile you just created.\nYou'll use this user's email address and password to authenticate Salesforce in Flow."))),(0,n.kt)("h4",{id:"create-a-developer-application-and-generate-authorization-tokens"},"Create a developer application and generate authorization tokens"),(0,n.kt)("p",null,"To manually write a capture specification for Salesforce, you need to create and configure a developer application.\nThrough this process, you'll obtain the client ID, client secret, and refresh token."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_create_api_integration.htm&type=5"},"new developer application"),"."),(0,n.kt)("p",{parentName:"li"},"a. When selecting ",(0,n.kt)("strong",{parentName:"p"},"Scopes")," for your app, select ",(0,n.kt)("strong",{parentName:"p"},"Manage user data via APIs ",(0,n.kt)("inlineCode",{parentName:"strong"},"(api)")),", ",(0,n.kt)("strong",{parentName:"p"},"Perform requests at any time ",(0,n.kt)("inlineCode",{parentName:"strong"},"(refresh_token, offline_access)")),", and ",(0,n.kt)("strong",{parentName:"p"},"Manage user data via Web browsers ",(0,n.kt)("inlineCode",{parentName:"strong"},"(web)")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the app to ensure that ",(0,n.kt)("strong",{parentName:"p"},"Permitted users")," is set to ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_oauth.htm&type=5"},"All users may self-authorize"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5"},"Consumer Key and Consumer Secret"),". These are equivalent to the client id and client secret, respectively.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5"},"Salesforce Web Server Flow"),". The final POST response will include your refresh token."))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the real-time Salesforce source connector."),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"endpoint"},"Endpoint"),(0,n.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,n.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-salesforce-in-the-flow-web-app"},"OAuth2"),",\nso you won't need the ",(0,n.kt)("inlineCode",{parentName:"p"},"/credentials")," values listed here."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/credentials/client_id"))),(0,n.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,n.kt)("td",{parentName:"tr",align:null},"The Salesforce Client ID, also known as a Consumer Key, for your developer application."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/credentials/client_secret"))),(0,n.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"The Salesforce Client Secret, also known as a Consumer Secret, for your developer application."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/credentials/refresh_token"))),(0,n.kt)("td",{parentName:"tr",align:null},"Refresh Token"),(0,n.kt)("td",{parentName:"tr",align:null},"The refresh token generated by your developer application."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/is_sandbox")),(0,n.kt)("td",{parentName:"tr",align:null},"Sandbox"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether you","'","re using a ",(0,n.kt)("a",{parentName:"td",href:"https://help.salesforce.com/s/articleView?id=sf.deploy_sandboxes_parent.htm&type=5"},"Salesforce Sandbox"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))))),(0,n.kt)("h4",{id:"bindings"},"Bindings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,n.kt)("td",{parentName:"tr",align:null},"Stream"),(0,n.kt)("td",{parentName:"tr",align:null},"Salesforce object from which a collection is captured."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-salesforce-next:dev\n        config:\n          credentials:\n            client_id: {your_client_id}\n            client_secret: {secret}\n            refresh_token: {XXXXXXXX}\n          is_sandbox: false\n    bindings:\n      - resource:\n          stream: WorkOrder\n        target: ${PREFIX}/WorkOrder\n      - resource:\n          stream: WorkOrderLineItem\n        target: ${PREFIX}/WorkOrderLineItem\n")))}d.isMDXComponent=!0}}]);