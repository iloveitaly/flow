"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,w=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(w,i(i({ref:t},p),{},{components:r})):a.createElement(w,i({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Twilio",l={unversionedId:"reference/Connectors/capture-connectors/twilio",id:"reference/Connectors/capture-connectors/twilio",title:"Twilio",description:"This connector captures data from Twilio into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/twilio.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/twilio",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/twilio",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/twilio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TikTok Marketing",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/tiktok"},next:{title:"YouTube Analytics",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/youtube-analytics"}},s={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"twilio"},"Twilio"),(0,n.kt)("p",null,"This connector captures data from Twilio into Flow collections."),(0,n.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-twilio:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-twilio:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/twilio/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"The following data resources are supported through the Twilio APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/account#read-multiple-account-resources"},"Accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/address#read-multiple-address-resources"},"Addresses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/monitor-alert#read-multiple-alert-resources"},"Alerts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/applications#read-multiple-application-resources"},"Applications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#read-a-list-of-countries"},"Available Phone Number Countries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource#read-multiple-availablephonenumberlocal-resources"},"Available Phone Numbers Local")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-mobile-resource#read-multiple-availablephonenumbermobile-resources"},"Available Phone Numbers Mobile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-tollfree-resource#read-multiple-availablephonenumbertollfree-resources"},"Available Phone Numbers Toll Free")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/call-resource#create-a-call-resource"},"Calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/conference-participant-resource#read-multiple-participant-resources"},"Conference Participants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/conference-resource#read-multiple-conference-resources"},"Conferences")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-resource#read-multiple-conversation-resources"},"Conversations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-message-resource#list-all-conversation-messages"},"Conversation Messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/conversations/api/conversation-participant-resource"},"Conversation Participants")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/address?code-sample=code-list-dependent-pns-subresources&code-language=curl&code-sdk-version=json#instance-subresources"},"Dependent Phone Numbers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources"},"Executions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources"},"Incoming Phone Numbers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/studio/rest-api/flow#read-a-list-of-flows"},"Flows")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/keys#read-a-key-resource"},"Keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/sms/api/media-resource#read-multiple-media-resources"},"Message Media")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources"},"Messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/outgoing-caller-ids#outgoingcallerids-list-resource"},"Outgoing Caller Ids")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/queue-resource#read-multiple-queue-resources"},"Queues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/recording#read-multiple-recording-resources"},"Recordings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/voice/api/recording-transcription?code-sample=code-read-list-all-transcriptions&code-language=curl&code-sdk-version=json#read-multiple-transcription-resources"},"Transcriptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/usage-record#read-multiple-usagerecord-resources"},"Usage Records")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.twilio.com/docs/usage/api/usage-trigger#read-multiple-usagetrigger-resources"},"Usage Triggers"))),(0,n.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Twilio Auth Token for authentication.")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1208/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Twilio source connector."),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"endpoint"},"Endpoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/account_sid")),(0,n.kt)("td",{parentName:"tr",align:null},"Account ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Twilio account SID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/auth_token")),(0,n.kt)("td",{parentName:"tr",align:null},"Auth Token"),(0,n.kt)("td",{parentName:"tr",align:null},"Twilio Auth Token."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,n.kt)("td",{parentName:"tr",align:null},"Replication Start Date"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/lookback_window")),(0,n.kt)("td",{parentName:"tr",align:null},"Lookback window"),(0,n.kt)("td",{parentName:"tr",align:null},"How far into the past to look for records. (in minutes)"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Default")))),(0,n.kt)("h4",{id:"bindings"},"Bindings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,n.kt)("td",{parentName:"tr",align:null},"Stream"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource of your Twilio project from which collections are captured."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,n.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-twilio:dev\n        config:\n          account_sid: <your account ID>\n          auth_token: <secret>\n          start_date: 2017-01-25T00:00:00Z\n          lookback_window: 7\n    bindings:\n      - resource:\n          stream: accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/accounts\n      {...}\n")))}m.isMDXComponent=!0}}]);