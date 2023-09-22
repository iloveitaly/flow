(self.webpackChunksite=self.webpackChunksite||[]).push([[8422],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(7294),l=a(2764);l.Z.initialize({startOnLoad:!0});const n=e=>{let{chart:t}=e;return(0,i.useEffect)((()=>{l.Z.contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)}},1765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=a(7462),l=(a(7294),a(3905)),n=a(1504);const r={sidebar_position:1},o="Edit a Flow specification locally",p={unversionedId:"guides/flowctl/edit-specification-locally",id:"guides/flowctl/edit-specification-locally",title:"Edit a Flow specification locally",description:"The Flow web application is designed to make the most common Flow tasks quick and easy.",source:"@site/docs/guides/flowctl/edit-specification-locally.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/edit-specification-locally",permalink:"/pr-preview/pr-1196/guides/flowctl/edit-specification-locally",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/edit-specification-locally.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"flowctl guides",permalink:"/pr-preview/pr-1196/guides/flowctl/"},next:{title:"Edit a draft created in the web app",permalink:"/pr-preview/pr-1196/guides/flowctl/edit-draft-from-webapp"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pull specifications locally",id:"pull-specifications-locally",level:2},{value:"Edit source files and re-publish specifications",id:"edit-source-files-and-re-publish-specifications",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"edit-a-flow-specification-locally"},"Edit a Flow specification locally"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/concepts/web-app"},"Flow web application")," is designed to make the most common Flow tasks quick and easy.\nWith the app, you're able to create, monitor, and manage captures, materializations, and more.\nFor ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/create-dataflow"},"creating basic Data Flows"),", the web app is by far the most efficient option,\nand ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/edit-data-flows"},"basic editing capabilities")," are provided."),(0,l.kt)("p",null,"However, advanced editing tasks are only possible using flowctl. These include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Manually editing collection schemas, for example, to add ",(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/advanced/projections"},"projections"),"\nor change the ",(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/reference/reduction-strategies/"},"reduction strategy"),"."),(0,l.kt)("li",{parentName:"ul"},"Editing, testing, and publishing multiple entities at once."),(0,l.kt)("li",{parentName:"ul"},"Creating and editing derivations.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"A simplified development experience for derivations is available. You can use the web app to create a cloud-based development environment pre-populated with the components you need. Learn how ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/flowctl/create-derivation"},"here"),".")),(0,l.kt)("p",null,"This guide covers the basic procedure of pulling one or more live Flow entities to your local development environment,\nediting their specifications, and re-publishing them."),(0,l.kt)(n.Z,{chart:"\n\tgraph LR;\n    d[Local files];\n    c[Catalog];\n    d-- 2: Test --\x3ed;\n    d-- 3: Publish specifications --\x3ec;\n    c-- 1: Pull specifications --\x3ed;\n",mdxType:"Mermaid"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To complete this workflow, you need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"An ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/getting-started/installation#registration-and-setup"},"Estuary account"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/getting-started/installation#get-started-with-the-flow-cli"},"flowctl installed locally"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"One or more published Flow entities. (To edit unpublished drafts, ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1196/guides/flowctl/edit-draft-from-webapp"},"use this guide"),".)"))),(0,l.kt)("h2",{id:"pull-specifications-locally"},"Pull specifications locally"),(0,l.kt)("p",null,"Every ",(0,l.kt)("em",{parentName:"p"},"entity")," (including active ",(0,l.kt)("em",{parentName:"p"},"tasks"),", like captures and materializations, and static ",(0,l.kt)("em",{parentName:"p"},"collections"),")\nhas a globally unique name in the Flow catalog."),(0,l.kt)("p",null,"For example, a given Data Flow may comprise:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A capture, ",(0,l.kt)("inlineCode",{parentName:"li"},"myOrg/marketing/leads"),", which writes to..."),(0,l.kt)("li",{parentName:"ul"},"Two collections, ",(0,l.kt)("inlineCode",{parentName:"li"},"myOrg/marketing/emailList")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"myOrg/marketing/socialMedia"),", which are materialized as part of..."),(0,l.kt)("li",{parentName:"ul"},"A materialization, ",(0,l.kt)("inlineCode",{parentName:"li"},"myOrg/marketing/contacts"),".")),(0,l.kt)("p",null,"Using these names, you'll identify and pull the relevant specifications for editing."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Authorize flowctl."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Determine which entities you need to pull from the catalog. You can:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the web app's ",(0,l.kt)("strong",{parentName:"p"},"Sources"),", ",(0,l.kt)("strong",{parentName:"p"},"Collections"),", and ",(0,l.kt)("strong",{parentName:"p"},"Destinations")," pages.\nAll published entities to which you have access are listed and can be searched.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog list"),". This command returns a complete list of entities to which you have access.\nYou can refine by specifying a ",(0,l.kt)("inlineCode",{parentName:"p"},"--prefix")," and filter by entity type:  ",(0,l.kt)("inlineCode",{parentName:"p"},"--captures"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--collections"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--materializations"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"--tests"),"."),(0,l.kt)("p",{parentName:"li"},"  From the above example, ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog list --prefix myOrg/marketing --captures --materializations")," would return\n",(0,l.kt)("inlineCode",{parentName:"p"},"myOrg/marketing/leads")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"myOrg/marketing/contacts"),".")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull the specifications you need by running ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pull one or more specifications by name, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs --name myOrg/marketing/emailList"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pull a group of specifications by prefix or type filter, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog pull-specs --prefix myOrg/marketing --collections")))),(0,l.kt)("p",{parentName:"li"},"The source files are written to your current working directory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Browse the source files."),(0,l.kt)("p",{parentName:"li"},"flowctl pulls specifications into subdirectories organized by entity name,\nand specifications sharing a catalog prefix are written to the same YAML file."),(0,l.kt)("p",{parentName:"li"},"Regardless of what you pull, there is always a top-level file called ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml")," that ",(0,l.kt)("em",{parentName:"p"},"imports")," all other nested YAML files.\nThese, in turn, contain the entities' specifications."))),(0,l.kt)("h2",{id:"edit-source-files-and-re-publish-specifications"},"Edit source files and re-publish specifications"),(0,l.kt)("p",null,"Next, you'll complete your edits, test that they were performed correctly, and re-publish everything."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the YAML files that contain the specification you want to edit.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make changes. For guidance on how to construct Flow specifications, see the documentation for the task type:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/captures#specification"},"Captures")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/collections#specification"},"Collections")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/materialization#specification"},"Materializations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/derivations#specification"},"Derivations")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1196/concepts/tests"},"Tests")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When you're done, you can test your changes:\n",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog test --source flow.yaml")),(0,l.kt)("p",{parentName:"li"},"  You'll almost always use the top-level ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file as the source here because it imports all other Flow specifications\nin your working directory."),(0,l.kt)("p",{parentName:"li"},"  Once the test has passed, you can publish your specifications.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Re-publish all the specifications you pulled: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog publish --source flow.yaml")),(0,l.kt)("p",{parentName:"li"},"Again you'll almost always want to use the top-level ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file. If you want to publish only certain specifications,\nyou can provide a path to a different file.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Return to the web app or use ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog list")," to check the status of the entities you just published.\nTheir publication time will be updated to reflect the work you just did."))),(0,l.kt)("p",null,"If you're not satisfied with the results of your edits, repeat the process iteratively until you are."))}m.isMDXComponent=!0},1748:(e,t,a)=>{var i={"./locale":9234,"./locale.js":9234};function l(e){var t=n(e);return a(t)}function n(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=n,e.exports=l,l.id=1748}}]);