"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2604],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9161:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},l="Working with logs and statistics",o={unversionedId:"reference/working-logs-stats",id:"reference/working-logs-stats",title:"Working with logs and statistics",description:"Your logs and stats collections",source:"@site/docs/reference/working-logs-stats.md",sourceDirName:"reference",slug:"/reference/working-logs-stats",permalink:"/pr-preview/pr-1138/reference/working-logs-stats",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/working-logs-stats.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composing with conditionals",permalink:"/pr-preview/pr-1138/reference/reduction-strategies/composing-with-conditionals"},next:{title:"Organizing a Flow catalog",permalink:"/pr-preview/pr-1138/reference/organizing-catalogs"}},s={},p=[{value:"Accessing logs and statistics",id:"accessing-logs-and-statistics",level:2},{value:"Logs and statistics in the Flow web app",id:"logs-and-statistics-in-the-flow-web-app",level:3},{value:"Logs",id:"logs",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Accessing logs and statistics from the command line",id:"accessing-logs-and-statistics-from-the-command-line",level:3},{value:"Printing logs or stats since a specific time",id:"printing-logs-or-stats-since-a-specific-time",level:4},{value:"Accessing logs or stats by materialization",id:"accessing-logs-or-stats-by-materialization",level:3},{value:"Available statistics",id:"available-statistics",level:2},{value:"Shard information",id:"shard-information",level:3},{value:"Transaction information",id:"transaction-information",level:3}],d={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-logs-and-statistics"},"Working with logs and statistics"),(0,r.kt)("p",null,"Your ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/advanced/logs-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"logs")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"stats")," collections"),"\nare useful for debugging and monitoring catalog tasks."),(0,r.kt)("h2",{id:"accessing-logs-and-statistics"},"Accessing logs and statistics"),(0,r.kt)("p",null,"You can access logs and statistics in the Flow web app, by materializing them to an external endpoint, or from the command line."),(0,r.kt)("h3",{id:"logs-and-statistics-in-the-flow-web-app"},"Logs and statistics in the Flow web app"),(0,r.kt)("p",null,"You can view a subset of logs and statistics for individual tasks in the Flow web app."),(0,r.kt)("h4",{id:"logs"},"Logs"),(0,r.kt)("p",null,"After you publish a new ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/guides/create-dataflow#create-a-capture"},"capture")," or ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/guides/create-dataflow#create-a-materialization"},"materialization"),", a pop-up window appears that displays the task's logs.\nOnce you close the window, you can't regain access to the full logs in the web app.\nFor a complete view of logs, use ",(0,r.kt)("a",{parentName:"p",href:"#accessing-logs-and-statistics-from-the-command-line"},"flowctl")," or ",(0,r.kt)("a",{parentName:"p",href:"#accessing-logs-or-stats-by-materialization"},"materialize the logs collection")," to an outside system."),(0,r.kt)("p",null,"However, if a task fails, you can view the logs associated with the error(s) that caused the failure.\nIn the ",(0,r.kt)("strong",{parentName:"p"},"Details")," view of the published capture or materialization, click the name of its shard to display the logs."),(0,r.kt)("h4",{id:"statistics"},"Statistics"),(0,r.kt)("p",null,"Two statistics are shown for each capture, collection, and materialization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bytes Written or Read"),".\nThis corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"bytesTotal")," ",(0,r.kt)("a",{parentName:"li",href:"#transaction-information"},"property of the stats collection"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docs Written or Read"),".\nThis corresponds to the ",(0,r.kt)("inlineCode",{parentName:"li"},"docsTotal")," ",(0,r.kt)("a",{parentName:"li",href:"#transaction-information"},"property of the stats collection"),".")),(0,r.kt)("p",null,"These fields have slightly different meanings for each Flow entity type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For captures, ",(0,r.kt)("strong",{parentName:"li"},"Bytes Written")," and ",(0,r.kt)("strong",{parentName:"li"},"Docs Written")," represent the total data written across all of the\ncapture's associated collections."),(0,r.kt)("li",{parentName:"ul"},"For collections, ",(0,r.kt)("strong",{parentName:"li"},"Bytes Written")," and ",(0,r.kt)("strong",{parentName:"li"},"Docs Written")," represent the data written to the collection from\nits associated capture or derivation."),(0,r.kt)("li",{parentName:"ul"},"For materializations, ",(0,r.kt)("strong",{parentName:"li"},"Bytes Read")," and ",(0,r.kt)("strong",{parentName:"li"},"Docs Read")," represent the total data read from all of the\nmaterialization's associated collections.")),(0,r.kt)("h3",{id:"accessing-logs-and-statistics-from-the-command-line"},"Accessing logs and statistics from the command line"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flowctl logs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flowctl stats")," subcommands allow you to print logs and stats, respectively, from the command line.\nThis method allows more flexibility and is ideal for debugging."),(0,r.kt)("p",null,"You can retrieve logs and stats for any published Flow task. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl logs --task acmeCo/anvils/capture-one\n\nflowctl stats --task acmeCo/anvils/capture-one --uncommitted\n")),(0,r.kt)("admonition",{title:"Beta",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--uncommitted")," flag is currently required for ",(0,r.kt)("inlineCode",{parentName:"p"},"flowctl stats"),". This means that all statistics are read, regardless of whether they are about a successfully committed ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/advanced/shards#transactions"},"transaction"),", or a transaction that was rolled back or uncommitted.\nIn the future, committed reads will be the default.")),(0,r.kt)("h4",{id:"printing-logs-or-stats-since-a-specific-time"},"Printing logs or stats since a specific time"),(0,r.kt)("p",null,"To limit output, you can retrieve logs are stats starting at a specific time in the past. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flowctl stats --task acmeCo/anvils/materialization-one --since 1h\n")),(0,r.kt)("p",null,"...will retrieve stats from approximately the last hour. The actual start time will always be at the previous ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/advanced/journals#fragment-files"},"fragment")," boundary, so it can be significantly before the requested time period."),(0,r.kt)("p",null,"Additional options for ",(0,r.kt)("inlineCode",{parentName:"p"},"flowctl logs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"flowctl stats")," can be accessed through command-line help."),(0,r.kt)("h3",{id:"accessing-logs-or-stats-by-materialization"},"Accessing logs or stats by materialization"),(0,r.kt)("p",null,"You can materialize your ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"stats")," collections to an external system.\nThis is typically the preferred method if you\u2019d like to continuously work with or monitor logs or statistics.\nYou can materialize the logs or statistics for all tasks, or select a subset of tasks using a ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/materialization/#partition-selectors"},"partition selector")," (the ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stats")," collections are partitioned on tasks)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to add a partition selector to exclude the logs and statistics of the materialization\nitself. Otherwise, you could trigger an infinite loop in which the connector\nmaterializes its own logs and statistics, collects logs and statistic on that event, and so on.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"acmeCo/anvils/logs:\n  endpoint:\n    connector:\n      image: ghcr.io/estuary/materialize-webhook:dev\n      config:\n        address: my.webhook.com\n  bindings:\n    - resource:\n        relativePath: /log/wordcount\n      source: ops/acmeCo/logs\n      # Exclude the logs of this materialization to avoid an infinite loop.\n      partitions:\n        exclude:\n          name: ['acmeCo/anvils/logs']\n")),(0,r.kt)("h2",{id:"available-statistics"},"Available statistics"),(0,r.kt)("p",null,"Available statistics include information about the amount of data in inputs and outputs of each transaction. They also include temporal information about the transaction. Statistics vary by task type (capture, materialization, or derivation)."),(0,r.kt)("p",null,"A thorough knowledge of Flow's ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1138/concepts/#advanced-concepts"},"advanced concepts")," is necessary to effectively leverage these statistics."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stats")," collection documents include the following properties."),(0,r.kt)("h3",{id:"shard-information"},"Shard information"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"stats")," document begins with data about the shard processing the transaction.\nEach processing shard is uniquely identified by the combination of its ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyBegin"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"rClockBegin"),".\nThis information is important for tasks with multiple shards: it allows you to determine whether data throughput is\nevenly distributed amongst those shards."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Applicable Task Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shard")),(0,r.kt)("td",{parentName:"tr",align:null},"Flow shard information"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shard/kind")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of catalog task. One of ",(0,r.kt)("inlineCode",{parentName:"td"},'"capture"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"derivation"'),", or ",(0,r.kt)("inlineCode",{parentName:"td"},'"materialization"')),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shard/name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the catalog task (without the task type prefix)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shard/keyBegin")),(0,r.kt)("td",{parentName:"tr",align:null},"With ",(0,r.kt)("inlineCode",{parentName:"td"},"rClockBegin"),", this comprises the shard ID. The inclusive beginning of the shard's assigned key range."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/shard/rClockBegin")),(0,r.kt)("td",{parentName:"tr",align:null},"With ",(0,r.kt)("inlineCode",{parentName:"td"},"keyBegin"),", this comprises the shard ID. The inclusive beginning of the shard's assigned rClock range."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"All")))),(0,r.kt)("h3",{id:"transaction-information"},"Transaction information"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stats")," documents include information about a transaction: its inputs and outputs,\nthe amount of data processed, and the time taken.\nYou can use this information to ensure that your Flow tasks are running efficiently,\nand that the amount of data processed matches your expectations."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Applicable Task Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/ts")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp corresponding to the start of the transaction, rounded to the nearest minute"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/openSecondsTotal")),(0,r.kt)("td",{parentName:"tr",align:null},"Total time that the transaction was open before starting to commit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/txnCount")),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of transactions represented by this stats document. Used for reduction."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/capture")),(0,r.kt)("td",{parentName:"tr",align:null},"Capture stats, organized by collection"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/materialize")),(0,r.kt)("td",{parentName:"tr",align:null},"Materialization stats, organized by collection"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Materialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derive")),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation statistics"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<task-type>/<collection-name>/right/")),(0,r.kt)("td",{parentName:"tr",align:null},"Input documents from a the task's source"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture, materialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<task-type>/<collection-name>/left/")),(0,r.kt)("td",{parentName:"tr",align:null},"Input documents from an external destination; used for ",(0,r.kt)("a",{parentName:"td",href:"/pr-preview/pr-1138/concepts/materialization#how-continuous-materialization-works"},"reduced updates")," in materializations"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Materialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<task-type>/<collection-name>/out/")),(0,r.kt)("td",{parentName:"tr",align:null},"Output documents from the transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<task-type>/{}/docsTotal")),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of documents"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/<task-type>/{}/bytesTotal")),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of bytes representing the JSON encoded documents"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"All")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derivations/transforms/transformStats")),(0,r.kt)("td",{parentName:"tr",align:null},"Stats for a specific transform of a derivation, which will have an update, publish, or both"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derivations/transforms/transformStats/input")),(0,r.kt)("td",{parentName:"tr",align:null},"The input documents that were fed into this transform"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derivations/transforms/transformStats/update")),(0,r.kt)("td",{parentName:"tr",align:null},"The outputs from update lambda invocations, which were combined into registers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derivations/transforms/transformStats/publish")),(0,r.kt)("td",{parentName:"tr",align:null},"The outputs from publish lambda invocations."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/derivations/registers/createdTotal")),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of new register keys that were created"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Derivation")))))}m.isMDXComponent=!0}}]);