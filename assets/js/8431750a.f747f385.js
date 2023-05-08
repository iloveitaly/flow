"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l="Google Analytics 4",i={unversionedId:"reference/Connectors/capture-connectors/google-analytics-4",id:"reference/Connectors/capture-connectors/google-analytics-4",title:"Google Analytics 4",description:"This connector captures data from Google Analytics 4 properties into Flow collections via the",source:"@site/docs/reference/Connectors/capture-connectors/google-analytics-4.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-analytics-4",permalink:"/reference/Connectors/capture-connectors/google-analytics-4",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-analytics-4.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Ads",permalink:"/reference/Connectors/capture-connectors/google-ads"},next:{title:"Greenhouse",permalink:"/reference/Connectors/capture-connectors/greenhouse"}},s={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Custom reports",id:"custom-reports",level:3},{value:"Sample",id:"sample",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data sampling",id:"data-sampling",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-analytics-4"},"Google Analytics 4"),(0,r.kt)("p",null,"This connector captures data from Google Analytics 4 properties into Flow collections via the\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1"},"Google Analytics Data API"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This connector supports Google Analytics 4, not Universal Analytics."),(0,r.kt)("p",{parentName:"admonition"},"Universal Analytics is supported by a ",(0,r.kt)("a",{parentName:"p",href:"/reference/Connectors/capture-connectors/google-analytics"},"separate connector"),".")),(0,r.kt)("p",null,"It\u2019s available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-google-analytics-data-api:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-google-analytics-data-api:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/google-analytics-v4/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Daily active users"),(0,r.kt)("li",{parentName:"ul"},"Devices"),(0,r.kt)("li",{parentName:"ul"},"Four-weekly active users"),(0,r.kt)("li",{parentName:"ul"},"Locations"),(0,r.kt)("li",{parentName:"ul"},"Pages"),(0,r.kt)("li",{parentName:"ul"},"Traffic sources"),(0,r.kt)("li",{parentName:"ul"},"Website overview"),(0,r.kt)("li",{parentName:"ul"},"Weekly active users")),(0,r.kt)("p",null,"Each is ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport"},"fetched as a report")," and mapped to a Flow collection through a separate binding."),(0,r.kt)("p",null,"You can also capture ",(0,r.kt)("a",{parentName:"p",href:"#custom-reports"},"custom reports"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Google Analytics Data API ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158841?hl=en"},"enabled")," on your Google ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/projects"},"project")," with which your Analytics property is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Google Analytics 4 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/property-id#what_is_my_property_id"},"property ID"),"."))),(0,r.kt)("p",null,"There are two ways to authenticate this connector with Google:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Directly with Google using OAuth")," through the Flow web app. You'll only need your username and password.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Manually"),", by generating a service account key. Using this method, there are more prerequisites."))),(0,r.kt)("h3",{id:"authenticating-manually-with-a-service-account-key"},"Authenticating manually with a service account key"),(0,r.kt)("p",null,"In addition to the above prerequisites, you'll need a Google service account with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A JSON key generated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access to the Google Analytics 4 property."))),(0,r.kt)("p",null,"To set this up:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount"},"service account and generate a JSON key"),".\nDuring setup, grant the account the ",(0,r.kt)("strong",{parentName:"p"},"Viewer")," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9305788#zippy=%2Cin-this-article"},"Add the service account")," to the Google Analytics property."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Grant the account ",(0,r.kt)("strong",{parentName:"li"},"Viewer")," permissions.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing a specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Analytics 4 source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The following properties reflect the manual authentication method. If you authenticate directly with Google in the Flow web app, some of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials for the service"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Service")," for manual authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/credentials_json")),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"Contents of the JSON key file generated during setup."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/custom_reports")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Reports (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON array describing the custom reports you want to sync from Google Analytics. ",(0,r.kt)("a",{parentName:"td",href:"#custom-reports"},"Learn more about custom reports"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/date_ranges_start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date Range Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The start date. One of the values ",(0,r.kt)("inlineCode",{parentName:"td"},"<N>daysago"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"yesterday"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"today")," or in the format ",(0,r.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/property_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Property ID"),(0,r.kt)("td",{parentName:"tr",align:null},"A Google Analytics GA4 property identifier whose events are tracked."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/window_in_days")),(0,r.kt)("td",{parentName:"tr",align:null},"Data request time increment in days (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The time increment used by the connector when requesting data from the Google Analytics API. We recommend setting this to 1 unless you have a hard requirement to make the sync faster at the expense of accuracy. The minimum allowed value for this field is 1, and the maximum is 364. See ",(0,r.kt)("a",{parentName:"td",href:"#data-sampling"},"data sampling")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Data resource from Google Analytics."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"custom-reports"},"Custom reports"),(0,r.kt)("p",null,"You can include data beyond the ",(0,r.kt)("a",{parentName:"p",href:"#supported-data-resources"},"default data resources")," with Custom Reports.\nThese replicate the functionality of ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/10445879?hl=en"},"Custom Reports")," in the Google Analytics Web console."),(0,r.kt)("p",null,"Fill out the Custom Reports property with a JSON array as a string with the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{"name": "<report-name>", "dimensions": ["<dimension-name>", ...], "metrics": ["<metric-name>", ...]}]\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/9304353#zippy=%2Cin-this-article"},"Segments")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/FilterExpression#Filter"},"filters")," are also supported.\nWhen using segments, you must include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ga:segment")," dimension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[{"name": "<report-name>", "dimensions": ["ga:segment", "<other-dimension-name>", ...], "metrics": ["<metric-name>", ...], "segments": "<segment-id>", "filter": "<filter-expression>"}]\n')),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-analytics-data-api:dev\n          config:\n            credentials:\n              auth_type: Service\n              credentials_json: <secret>\n            date_ranges_start_date: 2023-01-01\n            property_id: 000000000\n            window_in_days: 1\n\n      bindings:\n        - resource:\n            stream: daily_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: devices\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: four_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: locations\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: pages\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: traffic_sources\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: website_overview\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n")),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("h3",{id:"data-sampling"},"Data sampling"),(0,r.kt)("p",null,"The Google Analytics Data API enforces compute thresholds for ad-hoc queries and reports.\nIf a threshold is exceeded, the API will apply sampling to limit the number of sessions analyzed for the specified time range.\nThese thresholds can be found ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/2637192?hl=en&ref_topic=2601030&visit_id=637868645346124317-2833523666&rd=1#thresholds&zippy=%2Cin-this-article"},"here"),"."),(0,r.kt)("p",null,"If your account is on the Analytics 360 tier, you're less likely to run into these limitations.\nFor Analytics Standard accounts, you can avoid sampling by keeping the ",(0,r.kt)("inlineCode",{parentName:"p"},"window_in_days")," parameter set to its default value, ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".\nThis makes it less likely that you will exceed the threshold."))}d.isMDXComponent=!0}}]);