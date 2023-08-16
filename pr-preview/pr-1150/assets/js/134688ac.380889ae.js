"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2496],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},o="Microsoft SQL Server",s={unversionedId:"reference/Connectors/capture-connectors/sqlserver",id:"reference/Connectors/capture-connectors/sqlserver",title:"Microsoft SQL Server",description:"This connector uses change data capture (CDC) to continuously capture updates in a Microsoft SQL Server database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/sqlserver.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/sqlserver",permalink:"/pr-preview/pr-1150/reference/Connectors/capture-connectors/sqlserver",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/sqlserver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MixPanel",permalink:"/pr-preview/pr-1150/reference/Connectors/capture-connectors/mixpanel"},next:{title:"MongoDB",permalink:"/pr-preview/pr-1150/reference/Connectors/capture-connectors/mongodb"}},i={},p=[{value:"Supported versions and platforms",id:"supported-versions-and-platforms",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup: Self-hosted SQL Server",id:"setup-self-hosted-sql-server",level:3},{value:"Setup: Azure SQL Database",id:"setup-azure-sql-database",level:3},{value:"Setup: Amazon RDS for SQL Server",id:"setup-amazon-rds-for-sql-server",level:3},{value:"Setup: Google Cloud SQL for SQL Server",id:"setup-google-cloud-sql-for-sql-server",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Specifying Flow collection keys",id:"specifying-flow-collection-keys",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-sql-server"},"Microsoft SQL Server"),(0,r.kt)("p",null,"This connector uses change data capture (CDC) to continuously capture updates in a Microsoft SQL Server database into one or more Flow collections."),(0,r.kt)("p",null,"It\u2019s available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-sqlserver:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-sqlserver:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"supported-versions-and-platforms"},"Supported versions and platforms"),(0,r.kt)("p",null,"This connector supports SQL Server 2017 and later on major cloud providers,\nas well as self-hosted instances.\nSetup instructions are provided for the following platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-self-hosted-sql-server"},"Self-hosted SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-azure-sql-database"},"Azure SQL Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-amazon-rds-for-sql-server"},"Amazon RDS for SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-google-cloud-sql-for-sql-server"},"Google Cloud SQL for SQL Server"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To capture change events from SQL Server tables using this connector, you need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For each table to be captured, a primary key should be specified in the database.\nIf a table doesn't have a primary key, you must manually specify a key in the associated Flow collection definition while creating the capture.\n",(0,r.kt)("a",{parentName:"p",href:"#specifying-flow-collection-keys"},"See detailed steps"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/sql/relational-databases/track-changes/enable-and-disable-change-data-capture-sql-server?view=sql-server-ver16"},"CDC enabled"),"\non the database and the individual tables to be captured.\n(This creates ",(0,r.kt)("em",{parentName:"p"},"change tables")," in the database, from which the connector reads.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("strong",{parentName:"p"},"watermarks table"),". The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A user role with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT")," permissions on the CDC schema and the schemas that contain tables to be captured."),(0,r.kt)("li",{parentName:"ul"},"Access to the change tables created as part of the SQL Server CDC process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SELECT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE")," permissions on the watermarks table")))),(0,r.kt)("p",null,"To meet these requirements, follow the steps for your hosting type."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-self-hosted-sql-server"},"Self-hosted SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-azure-sql-database"},"Azure SQL Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-amazon-rds-for-sql-server"},"Amazon RDS for SQL Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setup-google-cloud-sql-for-sql-server"},"Google Cloud SQL for SQL Server"))),(0,r.kt)("h3",{id:"setup-self-hosted-sql-server"},"Setup: Self-hosted SQL Server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect to the server and issue the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE <database>;\n-- Enable CDC for the database.\nEXEC sys.sp_cdc_enable_db;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_capture WITH PASSWORD = 'secret';\nCREATE USER flow_capture FOR LOGIN flow_capture;\n-- Grant the user permissions on the CDC schema and schemas with data.\n-- This assumes all tables to be captured are in the default schema, `dbo`.\n-- Add similar queries for any other schemas that contain tables you want to capture.\nGRANT SELECT ON SCHEMA :: dbo TO flow_capture;\nGRANT SELECT ON SCHEMA :: cdc TO flow_capture;\n-- Create the watermarks table and grant permissions.\nCREATE TABLE dbo.flow_watermarks(slot INTEGER PRIMARY KEY, watermark TEXT);\nGRANT SELECT, INSERT, UPDATE ON dbo.flow_watermarks TO flow_capture;\n-- Enable CDC on tables. The below query enables CDC the watermarks table ONLY.\n-- You should add similar query for all other tables you intend to capture.\nEXEC sys.sp_cdc_enable_table @source_schema = 'dbo', @source_name = 'flow_watermarks', @role_name = 'flow_capture';\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow secure connection to Estuary Flow from your hosting environment. Either:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up an ",(0,r.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"SSH server for tunneling"),"."),(0,r.kt)("p",{parentName:"li"},"When you fill out the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint configuration"),",\ninclude the additional ",(0,r.kt)("inlineCode",{parentName:"p"},"networkTunnel")," configuration to enable the SSH tunnel.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),"\nfor additional details and a sample.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Whitelist the Estuary IP address, ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128")," in your firewall rules."))))),(0,r.kt)("h3",{id:"setup-azure-sql-database"},"Setup: Azure SQL Database"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections to the server from the Estuary Flow IP address."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Create a new ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure?view=azuresql#use-the-azure-portal-to-manage-server-level-ip-firewall-rules"},"firewall rule"),"\nthat grants access to the IP address ",(0,r.kt)("inlineCode",{parentName:"li"},"34.121.207.128"),".")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can allow secure connections via SSH tunneling as described in the setup steps for\n",(0,r.kt)("a",{parentName:"p",href:"#setup-self-hosted-sql-server"},"self-hosted databases"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your SQL client, connect to your instance as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlserver")," user and issue the following commands."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE <database>;\n-- Enable CDC for the database.\nEXEC sys.sp_cdc_enable_db;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_capture WITH PASSWORD = 'secret';\nCREATE USER flow_capture FOR LOGIN flow_capture;\n-- Grant the user permissions on the CDC schema and schemas with data.\n-- This assumes all tables to be captured are in the default schema, `dbo`.\n-- Add similar queries for any other schemas that contain tables you want to capture.\nGRANT SELECT ON SCHEMA :: dbo TO flow_capture;\nGRANT SELECT ON SCHEMA :: cdc TO flow_capture;\n-- Create the watermarks table and grant permissions.\nCREATE TABLE dbo.flow_watermarks(slot INTEGER PRIMARY KEY, watermark TEXT);\nGRANT SELECT, INSERT, UPDATE ON dbo.flow_watermarks TO flow_capture;\n-- Enable CDC on tables. The below query enables CDC the watermarks table ONLY.\n-- You should add similar query for all other tables you intend to capture.\nEXEC sys.sp_cdc_enable_table @source_schema = 'dbo', @source_name = 'flow_watermarks', @role_name = 'flow_capture';\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note the following important items for configuration:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Find the instance's host under Server Name. The port is always ",(0,r.kt)("inlineCode",{parentName:"li"},"1433"),". Together, you'll use the host:port as the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," property when you configure the connector."),(0,r.kt)("li",{parentName:"ul"},"Format ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"username@databasename"),"; for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"flow_capture@myazuredb"),".")))),(0,r.kt)("h3",{id:"setup-amazon-rds-for-sql-server"},"Setup: Amazon RDS for SQL Server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections to the database from the Estuary Flow IP address."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html"},"Modify the database"),", setting ",(0,r.kt)("strong",{parentName:"p"},"Public accessibility")," to ",(0,r.kt)("strong",{parentName:"p"},"Yes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the VPC security group associated with your database, or create a new VPC security group and associate it with the database.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html#Overview.RDSSecurityGroups.Create"},"steps in the Amazon documentation"),".\nCreate a new inbound rule and a new outbound rule that allow all traffic from the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),"."))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can allow secure connections via SSH tunneling as described in the setup steps for\n",(0,r.kt)("a",{parentName:"p",href:"#setup-self-hosted-sql-server"},"self-hosted databases"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your SQL client, connect to your instance as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlserver")," user and issue the following commands."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE <database>;\n-- Enable CDC for the database.\nEXEC msdb.dbo.rds_cdc_enable_db;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_capture WITH PASSWORD = 'secret';\nCREATE USER flow_capture FOR LOGIN flow_capture;\n-- Grant the user permissions on the CDC schema and schemas with data.\n-- This assumes all tables to be captured are in the default schema, `dbo`.\n-- Add similar queries for any other schemas that contain tables you want to capture.\nGRANT SELECT ON SCHEMA :: dbo TO flow_capture;\nGRANT SELECT ON SCHEMA :: cdc TO flow_capture;\n-- Create the watermarks table and grant permissions.\nCREATE TABLE dbo.flow_watermarks(slot INTEGER PRIMARY KEY, watermark TEXT);\nGRANT SELECT, INSERT, UPDATE ON dbo.flow_watermarks TO flow_capture;\n-- Enable CDC on tables. The below query enables CDC the watermarks table ONLY.\n-- You should add similar query for all other tables you intend to capture.\nEXEC sys.sp_cdc_enable_table @source_schema = 'dbo', @source_name = 'flow_watermarks', @role_name = 'flow_capture';\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/rds/"},"RDS console"),", note the instance's Endpoint and Port. You'll need these for the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," property when you configure the connector.")),(0,r.kt)("h3",{id:"setup-google-cloud-sql-for-sql-server"},"Setup: Google Cloud SQL for SQL Server"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections to the database from the Estuary Flow IP address."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sql/docs/sqlserver/configure-ip#add"},"Enable public IP on your database")," and add\n",(0,r.kt)("inlineCode",{parentName:"li"},"34.121.207.128")," as an authorized IP address.")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can allow secure connections via SSH tunneling as described in the setup steps for\n",(0,r.kt)("a",{parentName:"p",href:"#setup-self-hosted-sql-server"},"self-hosted databases"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your SQL client, connect to your instance as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlserver")," user and issue the following commands."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE <database>;\n-- Enable CDC for the database.\nEXEC msdb.dbo.gcloudsql_cdc_enable_db '<database>';\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_capture WITH PASSWORD = 'secret';\nCREATE USER flow_capture FOR LOGIN flow_capture;\n-- Grant the user permissions on the CDC schema and schemas with data.\n-- This assumes all tables to be captured are in the default schema, `dbo`.\n-- Add similar queries for any other schemas that contain tables you want to capture.\nGRANT SELECT ON SCHEMA :: dbo TO flow_capture;\nGRANT SELECT ON SCHEMA :: cdc TO flow_capture;\n-- Create the watermarks table and grant permissions.\nCREATE TABLE dbo.flow_watermarks(slot INTEGER PRIMARY KEY, watermark TEXT);\nGRANT SELECT, INSERT, UPDATE ON dbo.flow_watermarks TO flow_capture;\n-- Enable CDC on tables. The below query enables CDC the watermarks table ONLY.\n-- You should add similar query for all other tables you intend to capture.\nEXEC sys.sp_cdc_enable_table @source_schema = 'dbo', @source_name = 'flow_watermarks', @role_name = 'flow_capture';\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"In the Cloud Console, note the instance's host under Public IP Address. Its port will always be ",(0,r.kt)("inlineCode",{parentName:"li"},"1433"),".\nTogether, you'll use the host:port as the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," property when you configure the connector.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the SQL Server source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Server Address"),(0,r.kt)("td",{parentName:"tr",align:null},"The host or host:port at which the database can be reached."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Logical database name to capture from."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"The database user to authenticate as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"flow_capture"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/backfill_chunk_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Backfill Chunk Size"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rows which should be fetched from the database in a single backfill query."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4096"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_backfills")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Backfills"),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list of fully-qualified table names which should not be backfilled."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/watermarksTable")),(0,r.kt)("td",{parentName:"tr",align:null},"Watermarks Table"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes during backfills. Must be fully-qualified in ","'","<","schema",">",".","<","table",">","'"," form."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"dbo.flow_watermarks"'))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/sql/relational-databases/databases/databases?view=sql-server-ver16#basic-information-about-databases"},"namespace/schema")," of the table."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/primary_key")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary Key Columns"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The columns which together form the primary key of the table."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-sqlserver:dev"\n        config:\n          address: "<host>:1433"\n          database: "my_db"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: dbo\n          primary_key: ["id"]\n        target: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h2",{id:"specifying-flow-collection-keys"},"Specifying Flow collection keys"),(0,r.kt)("p",null,"Every Flow collection must have a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/collections#keys"},"key"),".\nAs long as your SQL Server tables have a primary key specified, the connector will set the\ncorresponding collection's key accordingly."),(0,r.kt)("p",null,"In cases where a SQL Server table you want to capture doesn't have a primary key,\nyou can manually add it to the collection definition during the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/guides/create-dataflow#create-a-capture"},"capture creation workflow"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After you input the endpoint configuration and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),",\nthe tables in your database have been mapped to Flow collections.\nClick each collection's ",(0,r.kt)("strong",{parentName:"p"},"Specification")," tab and identify a collection where ",(0,r.kt)("inlineCode",{parentName:"p"},'"key": [ ],')," is empty.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click inside the empty key value in the editor and input the name of column in the table to use as the key, formatted as a JSON pointer. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'"key": ["/foo"],')),(0,r.kt)("p",{parentName:"li"},"Make sure the key field is required, not nullable, and of an ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/collections#schema-restrictions"},"allowed type"),".\nMake any other necessary changes to the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1150/concepts/collections#specification"},"collection specification")," to accommodate this.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat with other missing collection keys, if necessary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save and publish the capture as usual."))))}u.isMDXComponent=!0}}]);