"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7723],{1504:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(7273);o.Z.initialize({startOnLoad:!0});const l=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{o.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},1616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),l=a(1504);const i={sidebar_position:5},r="flowctl",s={unversionedId:"concepts/flowctl",id:"concepts/flowctl",title:"flowctl",description:"There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.",source:"@site/docs/concepts/flowctl.md",sourceDirName:"concepts",slug:"/concepts/flowctl",permalink:"/concepts/flowctl",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/flowctl.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Derivations",permalink:"/concepts/derivations"},next:{title:"Imports",permalink:"/concepts/import"}},c={},p=[{value:"Installation and setup",id:"installation-and-setup",level:2},{value:"flowctl subcommands",id:"flowctl-subcommands",level:2},{value:"Working with catalog drafts",id:"working-with-catalog-drafts",level:2},{value:"Development directories",id:"development-directories",level:2},{value:"TypeScript code generation",id:"typescript-code-generation",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flowctl"},"flowctl"),(0,o.kt)("p",null,"There are two ways to work with Flow: through the web app, and using the flowctl command-line interface.\nflowctl gives you more direct control over the files and directories that comprise your data flows' ",(0,o.kt)("strong",{parentName:"p"},"catalogs"),".\nYou can work with any catalog to which you have ",(0,o.kt)("a",{parentName:"p",href:"/reference/authentication"},"access"),", regardless of whether it was created from the command line or in the web app."),(0,o.kt)("p",null,"You can also authorize Flow users and roles and generate Typescript modules to write custom transformations for your ",(0,o.kt)("a",{parentName:"p",href:"/concepts/derivations"},"derivations")," \u2014 workflows that aren't yet available in the web app."),(0,o.kt)("p",null,"flowctl is the only Flow binary that you need to work with,\nso distribution and upgrades are all simple."),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and setup"),(0,o.kt)("p",null,"flowctl binaries for MacOS and Linux are available."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste the appropriate script below into your terminal. This will download flowctl, make it executable, and add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Linux:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flowctl/releases/latest/download/flowctl-x86_64-linux' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Mac:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flowctl/releases/latest/download/flowctl-multiarch-macos' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,o.kt)("p",{parentName:"li"},"Alternatively, you can find the source files on GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://go.estuary.dev/flowctl"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To connect to your Flow account and start a session, ",(0,o.kt)("a",{parentName:"p",href:"/reference/authentication#authenticating-flow-using-the-cli"},"use an authentication token")," from the web app."))),(0,o.kt)("h2",{id:"flowctl-subcommands"},"flowctl subcommands"),(0,o.kt)("p",null,"flowctl includes several top-level subcommands representing different functional areas. Each of these include multiple nested subcommands.\nImportant top-level flowctl subcommands are described below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"auth")," allows you to authenticate your development session in your local development environment.\nIt's also how you provision Flow roles and users. Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/reference/authentication"},"authentication"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," allows you to work with your organization's current active catalog. You can investigate the current deployment,\nor add its specification to a ",(0,o.kt)("strong",{parentName:"p"},"draft"),", where you can develop it further.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"draft")," allows you to work with draft catalog specifications. You can create, test, develop locally, and then ",(0,o.kt)("strong",{parentName:"p"},"publish"),", or deploy, them."))),(0,o.kt)("p",null,"You can access full documentation of all flowctl subcommands from the command line by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," flag, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flowctl --help")," lists top-level flowctl subcommands.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"flowctl catalog --help")," lists subcommands of ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog"),"."))),(0,o.kt)("h2",{id:"working-with-catalog-drafts"},"Working with catalog drafts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"flowctl draft")," allows you to work with Flow catalog specifications and deploy changes.\nBecause you must work with catalog specifications in the draft state prior to deployment, ",(0,o.kt)("inlineCode",{parentName:"p"},"draft")," is an essential flowctl subcommand that you'll use often."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"draft"),", you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new drafts or convert active catalogs into drafts."),(0,o.kt)("li",{parentName:"ul"},"Pull a draft created in the web app or on the command line into your current working directory."),(0,o.kt)("li",{parentName:"ul"},"Develop the draft locally."),(0,o.kt)("li",{parentName:"ul"},"Author your local changes to the draft. This is equivalent to syncing changes."),(0,o.kt)("li",{parentName:"ul"},"Test and publish the draft to activate the catalog.")),(0,o.kt)(l.Z,{chart:"\n\tgraph LR;\n    a((Start));\n    s[Selected, synced draft];\n    d[Local draft];\n    c[Active catalog];\n    s-- flowctl draft develop --\x3ed;\n    d-- flowctl draft author --\x3es;\n    s-- flowctl draft publish --\x3ec;\n    a-- flowctl draft select --\x3es;\n    d-- Work locally --\x3ed;\n",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"development-directories"},"Development directories"),(0,o.kt)("p",null,"Most of the work you perform with flowctl takes place remotely on Estuary infrastructure.\nYou'll only see files locally when you are actively developing a draft."),(0,o.kt)("p",null,"These files are created within your current working directory when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl draft develop"),"."),(0,o.kt)("p",null,"They typically include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flow.yaml"),":\nThe main specification file that imports all other catalog specifications in the current draft. As part of local development, you may add new specifications that you create as imports."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flow_generated/"),":\nDirectory of generated files, including TypeScript classes and interfaces.\nSee ",(0,o.kt)("a",{parentName:"li",href:"#typescript-code-generation"},"TypeScript code generation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"estuary/"),":\nDirectory of the draft's current specifications. Its contents will vary, but it may contain various YAML files and subdirectories."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json"),":\nFiles used by ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," to manage dependencies and your catalog's associated JavaScript project.\nYou may customize ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),",\nbut its ",(0,o.kt)("inlineCode",{parentName:"li"},"dependencies")," stanza will be overwritten by the\n",(0,o.kt)("a",{parentName:"li",href:"/concepts/derivations#npm-dependencies"},"npmDependencies"),"\nof your catalog source files, if any exist.")),(0,o.kt)("h3",{id:"typescript-code-generation"},"TypeScript code generation"),(0,o.kt)("p",null,"TypeScript files are used in the Flow catalog both as part of the automatic build process,\nand to define lambdas functions for ",(0,o.kt)("a",{parentName:"p",href:"/concepts/derivations"},"derivations"),", which requires your input."),(0,o.kt)("p",null,"As part of the catalog build process, Flow translates your\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/schemas"},"schemas"),"\ninto equivalent TypeScript types on your behalf.\nThese definitions live within ",(0,o.kt)("inlineCode",{parentName:"p"},"flow_generated/")," in your catalog build directory,\nand are frequently over-written by invocations of ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl"),".\nFiles in this subdirectory are human-readable and stable.\nYou may want to commit them as part of a GitOps-managed project, but this isn't required."),(0,o.kt)("p",null,"Whenever you define a derivation that uses a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/derivations#lambdas"},"lambda"),",\nyou must define the lambda in an accompanying TypeScript module, and reference that module\nin the derivation's definition. To facilitate this,\nyou can generate a stub of the module using ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl typescript generate"),"\nand simply write the function bodies.\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/derivations#creating-typescript-modules"},"Learn more about this workflow.")),(0,o.kt)("p",null,"If a TypeScript module exists, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl")," will never overwrite it,\neven if you update or expand your catalog sources such that the required interfaces have changed."))}u.isMDXComponent=!0}}]);