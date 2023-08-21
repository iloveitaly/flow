(self.webpackChunksite=self.webpackChunksite||[]).push([[924],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),i=a(2764);i.Z.initialize({startOnLoad:!0});const o=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{i.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(1504);const r={sidebar_position:6},l="Web application",s={unversionedId:"concepts/web-app",id:"concepts/web-app",title:"Web application",description:"Flow's web application is at dashboard.estuary.dev.",source:"@site/docs/concepts/web-app.md",sourceDirName:"concepts",slug:"/concepts/web-app",permalink:"/pr-preview/pr-1156/concepts/web-app",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/web-app.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Derivations",permalink:"/pr-preview/pr-1156/concepts/derivations"},next:{title:"flowctl",permalink:"/pr-preview/pr-1156/concepts/flowctl"}},p={},c=[{value:"When to use the web app",id:"when-to-use-the-web-app",level:2},{value:"Signing in",id:"signing-in",level:2},{value:"Navigating the web app",id:"navigating-the-web-app",level:2},{value:"Captures page",id:"captures-page",level:2},{value:"Detail view",id:"detail-view",level:3},{value:"Editing captures and collections",id:"editing-captures-and-collections",level:3},{value:"Creating a capture",id:"creating-a-capture",level:3},{value:"Collections page",id:"collections-page",level:2},{value:"Materializations page",id:"materializations-page",level:2},{value:"Detail view",id:"detail-view-1",level:3},{value:"Editing materializations",id:"editing-materializations",level:3},{value:"Creating a materialization",id:"creating-a-materialization",level:3},{value:"Admin page",id:"admin-page",level:2},{value:"Users",id:"users",level:4},{value:"Storage Mappings",id:"storage-mappings",level:4},{value:"Connectors",id:"connectors",level:4},{value:"CLI-API",id:"cli-api",level:4},{value:"Cookie Preferences",id:"cookie-preferences",level:4}],u={toc:c},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"web-application"},"Web application"),(0,i.kt)("p",null,"Flow's web application is at ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"dashboard.estuary.dev"),"."),(0,i.kt)("p",null,"The web app is the central, low-code environment for creating, managing, and monitoring Data Flows."),(0,i.kt)("h2",{id:"when-to-use-the-web-app"},"When to use the web app"),(0,i.kt)("p",null,"The web app and ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/flowctl"},"flowctl")," are designed to work together as a complete platform.\nYou can use either, or both, to work on your Data Flows, depending on your preference."),(0,i.kt)("p",null,"With the Flow web app, you can perform most common workflows, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating end-to-end Data Flows: ",(0,i.kt)("strong",{parentName:"li"},"capturing")," data from source systems and ",(0,i.kt)("strong",{parentName:"li"},"materializing")," it to destinations."),(0,i.kt)("li",{parentName:"ul"},"Creating, viewing, and editing individual captures and materializations."),(0,i.kt)("li",{parentName:"ul"},"Viewing data ",(0,i.kt)("strong",{parentName:"li"},"collections"),"."),(0,i.kt)("li",{parentName:"ul"},"Viewing users and permissions."),(0,i.kt)("li",{parentName:"ul"},"Authenticating with the flowctl CLI.")),(0,i.kt)("p",null,"Some advanced workflows, like granting or revoking permissions and transforming data with ",(0,i.kt)("strong",{parentName:"p"},"derivations"),", aren't available in the web app."),(0,i.kt)("p",null,"Even if you prefer the command line or plan to perform a task that's only available through flowctl, we recommend you begin your work in the web app;\nit provides a quicker and easier path to create captures and materializations. You can then switch to flowctl to continue working."),(0,i.kt)("h2",{id:"signing-in"},"Signing in"),(0,i.kt)("p",null,"You use either a Google or GitHub account to sign into Flow."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5792).Z,width:"1188",height:"685"})),(0,i.kt)("p",null,"If you've never used Flow before, you'll be prompted to register before being issued a trial account. If you want to use Flow for production workflows or collaborate with team members, you'll need an organizational account.\n",(0,i.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"Contact Estuary")," to create a new organizational account or join an existing organization."),(0,i.kt)("h2",{id:"navigating-the-web-app"},"Navigating the web app"),(0,i.kt)("p",null,"When you log into the web app, you land on the ",(0,i.kt)("strong",{parentName:"p"},"Welcome")," page.\nThere are four additional pages visible as tabs in the side navigation: ",(0,i.kt)("strong",{parentName:"p"},"Captures"),", ",(0,i.kt)("strong",{parentName:"p"},"Collections"),", ",(0,i.kt)("strong",{parentName:"p"},"Materializations"),", and ",(0,i.kt)("strong",{parentName:"p"},"Admin"),"."),(0,i.kt)("p",null,"The order of the tabs mirrors the order of a basic Data Flow:"),(0,i.kt)(o.Z,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"While you may choose to ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/guides/create-dataflow"},"use the tabs in this sequence"),", it's not necessary.\nAll Flow entities exist individually, outside of the context of complete Data Flow.\nYou can use the different pages in the web app to monitor and manage your items in a number of other ways, as described below."),(0,i.kt)("h2",{id:"captures-page"},"Captures page"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Captures")," page shows you a table of existing Flow ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/captures"},"captures")," to which you have ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/reference/authentication"},"access"),".\nThe ",(0,i.kt)("strong",{parentName:"p"},"New Capture")," button is also visible.\nYou use the table to monitor your captures."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(433).Z,width:"1331",height:"477"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1:")," Select all or deselect all."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2:")," Enable, Disable, and Delete buttons. These actions will be applied to the selected table rows. Choose ",(0,i.kt)("strong",{parentName:"p"},"Disable")," to temporarily pause the flow of data, ",(0,i.kt)("strong",{parentName:"p"},"Enable")," to resume, and ",(0,i.kt)("strong",{parentName:"p"},"Delete")," to permanently remove the capture(s)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3:")," Materialize button. When you click this button, you're directed to the ",(0,i.kt)("strong",{parentName:"p"},"Create Materializations")," page.\nAll the collections of the selected capture(s) will be added to the materialization."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4:")," Filter captures. Type a catalog prefix, unique capture name, or connector name to return captures that match your query."),(0,i.kt)("p",null,"Capture names follow the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix/unique-identifier/connector-name"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," supporting multiple layers of nesting.\nYou can search for any part of this full capture name. You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," wildcard.\nFor example, if you have a capture called ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/logistics/anvil-locations/source-postgres"),",\nyou can find it by filtering for ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo*source-postgres"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5:")," Status indicator. Shows the status of the primary task ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/shards"},"shard")," that backs this capture."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Primary (Green)"),": Data is actively flowing through the capture."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pending (Yellow)"),": The capture is attempting to re-connect. Often, you'll see this after you re-enable the capture as Flow backfills historical data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed (Red)"),": The capture has failed with an unrecoverable error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disabled (Hollow circle)"),": The capture is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unknown (Black when app is in light mode; white when app is in dark mode)"),": The web app is unable to determine shard status. Usually, this is due to a temporary connection error.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6:")," Capture name. The full name is shown, including all ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/catalogs#namespace"},"prefixes"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7:")," Capture type. The icon shows the type of source system data is captured from."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8:")," Capture ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/logs-stats#statistics"},"statistics"),". The ",(0,i.kt)("strong",{parentName:"p"},"Data Written")," column shows the total amount of data, in bytes and in ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/collections#documents"},"documents"),",\nthat the capture has written to its associated collections within a configurable time interval.\nClick the time interval in the header to select from ",(0,i.kt)("strong",{parentName:"p"},"Today"),", ",(0,i.kt)("strong",{parentName:"p"},"Yesterday"),", ",(0,i.kt)("strong",{parentName:"p"},"This Week"),", ",(0,i.kt)("strong",{parentName:"p"},"Last Week"),", ",(0,i.kt)("strong",{parentName:"p"},"This Month"),", or ",(0,i.kt)("strong",{parentName:"p"},"Last Month"),".\nNote that the time intervals are in UTC."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"9:")," Associated collections. The ",(0,i.kt)("strong",{parentName:"p"},"Writes to")," column shows all the collections to which the capture writes data. For captures with a large number of collections, hover over this column and scroll to view the full list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"10:")," Publish time. Hover over this value to see the exact UTC time the capture was first published."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"11:")," Options. Choose to ",(0,i.kt)("strong",{parentName:"p"},"View Details")," or ",(0,i.kt)("strong",{parentName:"p"},"Edit Specification"),"."),(0,i.kt)("h3",{id:"detail-view"},"Detail view"),(0,i.kt)("p",null,"When you click ",(0,i.kt)("strong",{parentName:"p"},"View Details")," for a capture, the ",(0,i.kt)("strong",{parentName:"p"},"Status")," and ",(0,i.kt)("strong",{parentName:"p"},"Specification")," viewers are revealed."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Status")," section shows the full identifier of the shard(s) that back your capture. If there's an error, you'll see an alert identifying the failing shard(s). Use the drop-down to open an expanded view of the failed shard's logs."),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Specification")," section, you can view the specification of the capture itself, as well as each collection to which it writes.\nSelect a specification from the ",(0,i.kt)("strong",{parentName:"p"},"Files")," list to view the JSON."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To change the size of each side of the ",(0,i.kt)("strong",{parentName:"p"},"Specification")," section, click and drag the center divider.")),(0,i.kt)("h3",{id:"editing-captures-and-collections"},"Editing captures and collections"),(0,i.kt)("p",null,"When you click ",(0,i.kt)("strong",{parentName:"p"},"Edit specification")," for a capture, you're taken to the ",(0,i.kt)("strong",{parentName:"p"},"Edit Capture")," page."),(0,i.kt)("p",null,"This page is similar to the ",(0,i.kt)("a",{parentName:"p",href:"#creating-a-capture"},(0,i.kt)("strong",{parentName:"a"},"Create Capture"))," page as it was filled out just before the capture was published."),(0,i.kt)("p",null,"For detailed steps to edit a capture, see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/guides/edit-data-flows#edit-a-capture"},"guide"),"."),(0,i.kt)("h3",{id:"creating-a-capture"},"Creating a capture"),(0,i.kt)("p",null,"When you click ",(0,i.kt)("strong",{parentName:"p"},"Create Capture"),", you're taken to the Create Capture page.\nIn the first view, all available capture connectors are displayed."),(0,i.kt)("p",null,"Select the tile of the system from which you want to capture data to show the full capture form.\nThe form details are specific to the connector you chose."),(0,i.kt)("p",null,"For detailed steps to create a capture, see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/guides/create-dataflow#create-a-capture"},"guide"),"."),(0,i.kt)("p",null,"After you successfully publish a capture, you're given the option to materialize the collections you just captured.\nYou can proceed to the materialization, or opt to exit to a different page of the web app."),(0,i.kt)("h2",{id:"collections-page"},"Collections page"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Collections")," page shows a read-only table of ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/collections"},"collections")," to which you have access.\nThe table has many of the same features as the ",(0,i.kt)("strong",{parentName:"p"},"Captures")," table, with several important distinctions\nthat are called out in the image below."),(0,i.kt)("p",null,"You can use the table to view each collection's specification and see a sample of its data.\nThis can help you verify that collection data was captured as expected and that you'll be able to materialize it how you want, and troubleshoot it necessary."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2997).Z,width:"1383",height:"1258"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1:")," Status indicator. If the collection does not contain a ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/#derivations"},"derivation"),', the indicator should always show green, and hover text will say "Collection."\nIn the event that the server cannot be reached, the indicator will show "Unknown" status (black in light mode and white in dark mode).'),(0,i.kt)("p",null,"  If the collection contains a derivation, the status of the derivation's primary task ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/shards"},"shard")," will be indicated:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Primary (Green)"),": Data is actively flowing through the derivation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pending (Yellow)"),": The derivation is attempting to re-connect."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed (Red)"),": The derivation has failed with an unrecoverable error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disabled (Hollow circle)"),": The derivation is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unknown (Black when app is in light mode; white when app is in dark mode)"),": The web app is unable to determine shard status. Usually, this is due to a temporary connection error.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2:")," Collection ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/logs-stats#statistics"},"statistics"),". The ",(0,i.kt)("strong",{parentName:"p"},"Data Written")," column shows the total amount of data, in bytes and in ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/collections#documents"},"documents"),",\nthat has been written to each collection from its associated capture or derivation within a configurable time interval.\nClick the time interval in the header to select from ",(0,i.kt)("strong",{parentName:"p"},"Today"),", ",(0,i.kt)("strong",{parentName:"p"},"Yesterday"),", ",(0,i.kt)("strong",{parentName:"p"},"This Week"),", ",(0,i.kt)("strong",{parentName:"p"},"Last Week"),", ",(0,i.kt)("strong",{parentName:"p"},"This Month"),", or ",(0,i.kt)("strong",{parentName:"p"},"Last Month"),".\nNote that the time intervals are in UTC."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3:")," To reveal the ",(0,i.kt)("strong",{parentName:"p"},"Specification")," and ",(0,i.kt)("strong",{parentName:"p"},"Data Preview")," sections, expand ",(0,i.kt)("strong",{parentName:"p"},"Details")," next to a collection name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4:")," The ",(0,i.kt)("strong",{parentName:"p"},"Specification")," section shows the collection specification as JSON in a read-only editor.\n(If you need to modify a collection, edit the ",(0,i.kt)("a",{parentName:"p",href:"#editing-captures"},"capture")," that it came from.)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5:")," The ",(0,i.kt)("strong",{parentName:"p"},"Data Preview")," section shows a sample of collection ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/collections#documents"},"documents"),": the individual JSON files that comprise the collection.\nDocuments are organized by their collection key value. Click a key from the list to view its document."),(0,i.kt)("h2",{id:"materializations-page"},"Materializations page"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Materializations")," page shows you a table of existing Flow ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/materialization"},"materializations")," to which you have ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/reference/authentication"},"access"),".\nThe ",(0,i.kt)("strong",{parentName:"p"},"New Materialization")," button is also visible."),(0,i.kt)("p",null,"You use the table to monitor your materializations. It's nearly identical to the table on the ",(0,i.kt)("a",{parentName:"p",href:"#captures-page"},"Captures page"),", with a few exceptions."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(367).Z,width:"1500",height:"452"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1:")," Select all or deselect all."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2:")," Enable, Disable, and Delete buttons. These actions will be applied to the selected table rows. Choose ",(0,i.kt)("strong",{parentName:"p"},"Disable")," to temporarily pause the flow of data, ",(0,i.kt)("strong",{parentName:"p"},"Enable")," to resume, and ",(0,i.kt)("strong",{parentName:"p"},"Delete")," to permanently remove the materialization(s)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3:")," Filter materializations by name. Type a catalog prefix, unique materialization name, or connector name to return materializations that match your query."),(0,i.kt)("p",null,"Materialization names follow the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix/unique-identifier"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," supporting multiple layers of nesting.\nYou can search for any part of this full materialization name. You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," wildcard.\nFor example, if you have a materialization called ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/logistics/anvil-locations"),",\nyou can find it by filtering for ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo*locations"),"."),(0,i.kt)("p",null,"Unlike capture names, materialization names don't contain the connector name, but you can still filter them by connector."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4:")," Status indicator. Shows the status of the primary task ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/shards"},"shard")," that backs this materialization."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Primary (Green)"),": Data is actively flowing through the materialization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pending (Yellow)"),": The materialization is attempting to re-connect. Often, you'll see this after you re-enable the materialization as Flow backfills historical data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed (Red)"),": The materialization has failed with an unrecoverable error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disabled (Hollow circle)"),": The materialization is disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unknown (Black when app is in light mode; white when app is in dark mode)"),": The web app is unable to determine shard status. Usually, this is due to a temporary connection error.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5:")," Materialization name. The full name is shown, including all ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/catalogs#namespace"},"prefixes"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6:")," Materialization type. The icon shows the type of destination system data is materialized to."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"7:")," Materialization ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/advanced/logs-stats#statistics"},"statistics"),". The ",(0,i.kt)("strong",{parentName:"p"},"Data Read")," column shows the total amount of data, in bytes and in ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/collections#documents"},"documents"),",\nthat the materialization has read from its associated collections within a configurable time interval.\nClick the time interval in the header to select from ",(0,i.kt)("strong",{parentName:"p"},"Today"),", ",(0,i.kt)("strong",{parentName:"p"},"Yesterday"),", ",(0,i.kt)("strong",{parentName:"p"},"This Week"),", ",(0,i.kt)("strong",{parentName:"p"},"Last Week"),", ",(0,i.kt)("strong",{parentName:"p"},"This Month"),", or ",(0,i.kt)("strong",{parentName:"p"},"Last Month"),".\nNote that the time intervals are in UTC."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8:")," Associated collections. The ",(0,i.kt)("strong",{parentName:"p"},"Reads from")," column shows all the collections from which the materialization reads data. For materializations with a large number of collections, hover over this column and scroll to view the full list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"9:")," Publish time. Hover over this value to see the exact UTC time the materialization was first published."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"10:")," Options. Choose to ",(0,i.kt)("strong",{parentName:"p"},"View Details")," or ",(0,i.kt)("strong",{parentName:"p"},"Edit Specification"),"."),(0,i.kt)("h3",{id:"detail-view-1"},"Detail view"),(0,i.kt)("p",null,"When you click ",(0,i.kt)("strong",{parentName:"p"},"View Details")," for a materialization, the ",(0,i.kt)("strong",{parentName:"p"},"Status")," and ",(0,i.kt)("strong",{parentName:"p"},"Specification")," viewers are revealed."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Status")," section shows the full identifier of the shard(s) that backs your materialization.\nIf there's an error, you'll see an alert identifying the failing shard(s). Use the drop-down to open an expanded view of the failed shard's logs."),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Specification")," window, you can view the specification of the materialization itself, as well as each collection from which it reads.\nSelect a specification from the ",(0,i.kt)("strong",{parentName:"p"},"Files")," list to view the JSON."),(0,i.kt)("h3",{id:"editing-materializations"},"Editing materializations"),(0,i.kt)("p",null,"When you click ",(0,i.kt)("strong",{parentName:"p"},"Edit specification")," for a materialization, you're taken to the ",(0,i.kt)("strong",{parentName:"p"},"Edit Materialization")," page."),(0,i.kt)("p",null,"This page is similar to the ",(0,i.kt)("a",{parentName:"p",href:"#creating-a-materialization"},(0,i.kt)("strong",{parentName:"a"},"Create Materialization"))," page as it was filled out just before the materialization was published."),(0,i.kt)("p",null,"For detailed steps to edit a materialization, see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/guides/edit-data-flows#edit-a-materialization"},"guide"),"."),(0,i.kt)("h3",{id:"creating-a-materialization"},"Creating a materialization"),(0,i.kt)("p",null,"There are three ways to begin creating a materialization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clicking ",(0,i.kt)("strong",{parentName:"li"},"New Materialization")," on the Materializations page."),(0,i.kt)("li",{parentName:"ul"},"Selecting one or more captures from the Captures page and clicking ",(0,i.kt)("strong",{parentName:"li"},"Materialize"),"."),(0,i.kt)("li",{parentName:"ul"},"Clicking ",(0,i.kt)("strong",{parentName:"li"},"Materialize Collections")," immediately after publishing a capture.")),(0,i.kt)("p",null,"When you initiate the workflow in any of these ways, all available materialization connectors are displayed.\nSelect a connector to reveal the full form with configuration options specific to your desired destination."),(0,i.kt)("p",null,"Fill out the ",(0,i.kt)("strong",{parentName:"p"},"Endpoint Config")," form and use the ",(0,i.kt)("strong",{parentName:"p"},"Collection Selector")," to map Flow collections to\nresources in the destination system."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can filter to quickly find the collections you want to include in your materialization.\nHover your cursor within the Collection Selector table header, next to the ",(0,i.kt)("strong",{parentName:"p"},"Remove All")," button, to reveal an expandable menu icon (three dots).\nClick the menu icon, and then choose ",(0,i.kt)("strong",{parentName:"p"},"Filter"),".")),(0,i.kt)("p",null,"Note that if you entered the workflow from the Captures page or after publishing a capture, collections will be pre-populated for you."),(0,i.kt)("p",null,"For detailed steps to create a materialization, see the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/guides/create-dataflow#create-a-materialization"},"guide"),"."),(0,i.kt)("h2",{id:"admin-page"},"Admin page"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," page, you can view users' access grants, your organization's cloud storage locations, and a complete list of connectors.\nYou can also get an access token to authenticate with flowctl and update your cookie preferences."),(0,i.kt)("h4",{id:"users"},"Users"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Users")," tab shows you all provisioned access grants on objects to which you also have access.\nBoth users and catalog prefixes can receive access grants.\nThese are split up into two tables called ",(0,i.kt)("strong",{parentName:"p"},"Users")," and ",(0,i.kt)("strong",{parentName:"p"},"Prefixes"),".\nEach access grant has its own row, so a given user or prefix may have multiple rows."),(0,i.kt)("p",null,"For example, if you had read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/")," and write access to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar/"),", you'd have a separate table row in the ",(0,i.kt)("strong",{parentName:"p"},"Users")," table for each of these capabilities.\nIf users Alice, Bob, and Carol each had write access on ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/"),", you'd see three more table rows representing these access grants."),(0,i.kt)("p",null,"Taking this a step further, the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/")," could have read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"buz/"),". You'd see this in the ",(0,i.kt)("strong",{parentName:"p"},"Prefixes")," table,\nand it'd signify that everyone who has access to ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/")," also inherits read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"buz/"),"."),(0,i.kt)("p",null,"Use the search boxes to filter by username, prefix, or object."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/reference/authentication"},"Learn more about capabilities and access.")),(0,i.kt)("h4",{id:"storage-mappings"},"Storage Mappings"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Storage Mappings")," tab includes a table of the cloud storage locations that back your Flow collections.\nYou're able to view the table if you're an admin."),(0,i.kt)("p",null,"Each top-level Flow ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/catalogs#namespace"},"prefix")," is backed by one or more cloud storage bucket that you own.\nYou typically have just one prefix: your organization name, which you provided when configuring your Flow organizational account.\nIf you're a trial user, your prefix is ",(0,i.kt)("inlineCode",{parentName:"p"},"trial/"),", and this tab isn't applicable to you;\nyour data is stored temporarily in Estuary's cloud storage bucket for your trial period."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/concepts/storage-mappings"},"Learn more about storage mappings.")),(0,i.kt)("h4",{id:"connectors"},"Connectors"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Connectors")," tab offers a complete view of all connectors that are currently available through the web application, including both capture and materialization connectors.\nIf a connector you need is missing, you can request it."),(0,i.kt)("h4",{id:"cli-api"},"CLI-API"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"CLI-API")," tab provides the access token required to ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1156/reference/authentication#authenticating-flow-using-the-cli"},"authenticate with flowctl"),"."),(0,i.kt)("h4",{id:"cookie-preferences"},"Cookie Preferences"),(0,i.kt)("p",null,"You use the ",(0,i.kt)("strong",{parentName:"p"},"Cookie Preferences")," tab to view and modify cookie settings."))}d.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=1748},433:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/capture-page-72321a9f577d812d706f3150d1b0f748.png"},2997:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/collections-page-1c00d91c8cf49cc08da817501357200c.png"},5792:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-screen-72844d909e46164615c2934a5ddbbd5b.png"},367:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/materialization-page-59ccb67ac74ce5dd8e6a2b0100ded333.png"}}]);