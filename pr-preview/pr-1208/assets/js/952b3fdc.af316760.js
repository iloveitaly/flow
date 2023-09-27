"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var n=r.createContext({}),l=function(e){var t=r.useContext(n),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(n.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,n=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=i,k=c["".concat(n,".").concat(d)]||c[d]||m[d]||s;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var p={};for(var n in t)hasOwnProperty.call(t,n)&&(p[n]=t[n]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=a(7462),i=(a(7294),a(3905));const s={sidebar_position:3},o="Jira",p={unversionedId:"reference/Connectors/capture-connectors/jira",id:"reference/Connectors/capture-connectors/jira",title:"Jira",description:"This connector captures data from Jira into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/jira.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/jira",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/jira",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/jira.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Iterable",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/iterable"},next:{title:"Klaviyo",permalink:"/pr-preview/pr-1208/reference/Connectors/capture-connectors/klaviyo"}},n={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],u={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jira"},"Jira"),(0,i.kt)("p",null,"This connector captures data from Jira into Flow collections."),(0,i.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,i.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-jira:dev"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-jira:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,i.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."),(0,i.kt)("p",null,"You can find their documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/jira/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,i.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,i.kt)("p",null,"The following data resources are supported through the Jira APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-application-roles/#api-rest-api-3-applicationrole-get"},"Application roles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-avatars/#api-rest-api-3-avatar-type-system-get"},"Avatars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-other-operations/#api-agile-1-0-board-get"},"Boards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-dashboards/#api-rest-api-3-dashboard-get"},"Dashboards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filters/#api-rest-api-3-filter-search-get"},"Filters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-filter-sharing/#api-rest-api-3-filter-id-permission-get"},"Filter sharing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-groups/#api-rest-api-3-groups-picker-get"},"Groups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-rest-api-3-field-get"},"Issue fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-field-configurations/#api-rest-api-3-fieldconfiguration-get"},"Issue field configurations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-custom-field-contexts/#api-rest-api-3-field-fieldid-context-get"},"Issue custom field contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-link-types/#api-rest-api-3-issuelinktype-get"},"Issue link types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-navigator-settings/#api-rest-api-3-settings-columns-get"},"Issue navigator settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-notification-schemes/#api-rest-api-3-notificationscheme-get"},"Issue notification schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-priorities/#api-rest-api-3-priority-get"},"Issue priorities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-properties/#api-rest-api-3-issue-issueidorkey-properties-propertykey-get"},"Issue properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-remote-links/#api-rest-api-3-issue-issueidorkey-remotelink-get"},"Issue remote links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-resolutions/#api-rest-api-3-resolution-search-get"},"Issue resolutions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-security-schemes/#api-rest-api-3-issuesecurityschemes-get"},"Issue security schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-schemes/#api-rest-api-3-issuetypescheme-get"},"Issue type schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-screen-schemes/#api-rest-api-3-issuetypescreenscheme-get"},"Issue type screen schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-votes/#api-group-issue-votes"},"Issue votes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-watchers/#api-rest-api-3-issue-issueidorkey-watchers-get"},"Issue watchers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jira-settings/#api-rest-api-3-application-properties-get"},"Jira settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-labels/#api-rest-api-3-label-get"},"Labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permissions/#api-rest-api-3-mypermissions-get"},"Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#api-rest-api-3-permissionscheme-get"},"Permission schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-projects/#api-rest-api-3-project-search-get"},"Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-avatars/#api-rest-api-3-project-projectidorkey-avatars-get"},"Project avatars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-categories/#api-rest-api-3-projectcategory-get"},"Project categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-components/#api-rest-api-3-project-projectidorkey-component-get"},"Project components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-email/#api-rest-api-3-project-projectid-email-get"},"Project email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-permission-schemes/#api-group-project-permission-schemes"},"Project permission schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-types/#api-rest-api-3-project-type-get"},"Project types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-project-versions/#api-rest-api-3-project-projectidorkey-version-get"},"Project versions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screens/#api-rest-api-3-screens-get"},"Screens")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tabs/#api-rest-api-3-screens-screenid-tabs-get"},"Screen tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-tab-fields/#api-rest-api-3-screens-screenid-tabs-tabid-fields-get"},"Screen tab fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-screen-schemes/#api-rest-api-3-screenscheme-get"},"Screen schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-sprint-get"},"Sprints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-time-tracking/#api-rest-api-3-configuration-timetracking-list-get"},"Time tracking")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-user-search/#api-rest-api-3-user-search-get"},"Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-users/#api-rest-api-3-user-get"},"UsersGroupsDetailed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflow-search-get"},"Workflows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-schemes/#api-rest-api-3-workflowscheme-get"},"Workflow schemes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-statuses/#api-rest-api-3-status-get"},"Workflow statuses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-status-categories/#api-rest-api-3-statuscategory-get"},"Workflow status categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-board/#api-rest-agile-1-0-board-boardid-issue-get"},"Board issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-comments/#api-rest-api-3-issue-issueidorkey-comment-get"},"Issue comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-worklogs/#api-rest-api-3-issue-issueidorkey-worklog-get"},"Issue worklogs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-rest-api-3-search-get"},"Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/software/rest/api-group-sprint/#api-rest-agile-1-0-sprint-sprintid-issue-get"},"Sprint issues"),"\nBy default, each resource is mapped to a Flow collection through a separate binding.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API Token: You can create an API token following ",(0,i.kt)("a",{parentName:"li",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"these steps from Jira")),(0,i.kt)("li",{parentName:"ul"},"Domain"),(0,i.kt)("li",{parentName:"ul"},"Email")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1208/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Jira source connector."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("h4",{id:"endpoint"},"Endpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/api_token")),(0,i.kt)("td",{parentName:"tr",align:null},"API Token"),(0,i.kt)("td",{parentName:"tr",align:null},"Jira API Token is used for Authorization to your account by BasicAuth."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/domain")),(0,i.kt)("td",{parentName:"tr",align:null},"Domain"),(0,i.kt)("td",{parentName:"tr",align:null},"The Domain for your Jira account, e.g. estuary.atlassian.net, estuary.jira.com, jira.your-domain.com"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/email")),(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"The user email for your Jira account which you used to generate the API token. This field is used for Authorization to your account by BasicAuth."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h4",{id:"bindings"},"Bindings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,i.kt)("td",{parentName:"tr",align:null},"Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource of your Jira project from which collections are captured."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,i.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-jira:dev\n        config:\n          api_token: <token>\n          domain: <domain>\n          email: <email>\n    bindings:\n      - resource:\n          stream: issues\n          syncMode: incremental\n        target: ${PREFIX}/issues\n      {...}\n")))}m.isMDXComponent=!0}}]);