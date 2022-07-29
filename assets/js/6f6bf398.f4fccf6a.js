"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4096],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="Authorizing users and authenticating with Flow",l={unversionedId:"reference/authentication",id:"reference/authentication",title:"Authorizing users and authenticating with Flow",description:"Read, write, and admin capabilities over Flow catalogs and the collections that comprise them",source:"@site/docs/reference/authentication.md",sourceDirName:"reference",slug:"/reference/authentication",permalink:"/reference/authentication",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/reference/Connectors/materialization-connectors/Snowflake"},next:{title:"Configuring task shards",permalink:"/reference/Configuring-task-shards"}},s={},p=[{value:"Subjects, objects, and inherited capabilities",id:"subjects-objects-and-inherited-capabilities",level:2},{value:"Default authorization settings",id:"default-authorization-settings",level:2},{value:"Authenticating Flow in the web app",id:"authenticating-flow-in-the-web-app",level:2},{value:"Authenticating Flow using the CLI",id:"authenticating-flow-using-the-cli",level:2},{value:"Provisioning capabilities",id:"provisioning-capabilities",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorizing-users-and-authenticating-with-flow"},"Authorizing users and authenticating with Flow"),(0,i.kt)("p",null,"Read, write, and admin capabilities over Flow catalogs and the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/collections"},"collections")," that comprise them\nare granted to Flow users through ",(0,i.kt)("strong",{parentName:"p"},"capabilities"),"."),(0,i.kt)("p",null,"Capabilities are granted in terms of ",(0,i.kt)("strong",{parentName:"p"},"prefixes")," within the Flow ",(0,i.kt)("a",{parentName:"p",href:"/concepts/#namespace"},"namespace"),".\nBy default, each organization has a unique top-level prefix.\nFor example, if you worked for Acme Co, your assigned organization prefix would be ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/"),".\nYou may further divide your namespace however you'd like; for example ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/anvils")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/roadrunners"),".\nWhen you name a collection, you can customize the prefix, and capabilities can be configured at any prefix level.\nThis allows you to flexibly control access to your Flow data."),(0,i.kt)("p",null,"The available capabilities are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"read")),": Allows the subject to read data from collections of the given prefix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"write")),": Allows the subject to read and write data from collections of the given prefix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"admin")),": Allows the subject to read and write data from collections of the given prefix,\nand to manage storage mappings, catalog specifications, and capability grants within the prefix.\nThe admin capability also inherits capabilities granted to the prefix, as discussed below."))),(0,i.kt)("h2",{id:"subjects-objects-and-inherited-capabilities"},"Subjects, objects, and inherited capabilities"),(0,i.kt)("p",null,"The entity to which you grant a capability is called the ",(0,i.kt)("strong",{parentName:"p"},"subject"),", and the entity over which access is granted is called the ",(0,i.kt)("strong",{parentName:"p"},"object"),".\nThe subject can be either a user or a prefix, and the object is always a prefix. This allows subjects to inherit nested capabilities,\nso long as they are granted ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,i.kt)("p",null,"For example, user X of Acme Co has admin access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/")," prefix, and user Y has write access.\nA third party has granted ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/")," read access to shared data at ",(0,i.kt)("inlineCode",{parentName:"p"},"outside-org/acmeCo-share/"),".\nUser X automatically inherits read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"outside-org/acmeCo-share/"),", but user Y does not."),(0,i.kt)("h2",{id:"default-authorization-settings"},"Default authorization settings"),(0,i.kt)("p",null,"When you first sign up to use Flow, your organization is provisioned a prefix, and your username is granted admin access to the prefix.\nYour prefix is granted write access to itself and read access to its logs, which are stored under a unique sub-prefix of the global ",(0,i.kt)("inlineCode",{parentName:"p"},"ops/")," prefix."),(0,i.kt)("p",null,"Using the same example, say user X signs up on behalf of their company, AcmeCo. User X is automatically granted ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/")," prefix.\n",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/"),", in turn, has write access to ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/")," and read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"ops/acmeCo/"),"."),(0,i.kt)("p",null,"As more users and prefixes are added, admins can ",(0,i.kt)("a",{parentName:"p",href:"#provisioning-capabilities"},"provision capabilities")," using the CLI."),(0,i.kt)("h2",{id:"authenticating-flow-in-the-web-app"},"Authenticating Flow in the web app"),(0,i.kt)("p",null,"You must sign in to begin a new session using the Flow web application.\nFor the duration of the session, you'll be able to perform actions depending on the capabilities granted to the user profile."),(0,i.kt)("p",null,"You can view the capabilities currently provisioned in your organization on the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," tab."),(0,i.kt)("h2",{id:"authenticating-flow-using-the-cli"},"Authenticating Flow using the CLI"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"flowctl")," CLI to work with your organization's catalogs and drafts in your local development environment."),(0,i.kt)("p",null,"To authenticate a local development session using the CLI, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign into the Flow web application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," tab, scroll to the ",(0,i.kt)("strong",{parentName:"p"},"Access Token")," box, and copy the token.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the terminal of your local development environment, run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"flowctl auth token --token=<copied-token>\n")))),(0,i.kt)("p",null,"The token will expire after a predetermined duration. Generate a new token using the web application and re-authenticate."),(0,i.kt)("h2",{id:"provisioning-capabilities"},"Provisioning capabilities"),(0,i.kt)("p",null,"As an admin, you can provision capabilities using the CLI with the subcommands of ",(0,i.kt)("inlineCode",{parentName:"p"},"flowctl auth roles"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowctl auth roles list")," returns a list of all currently provisioned capabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowctl auth roles grant --object-role=acmeCo/ --capability=admin --subject-user-id=userZ")," grants user Z admin access to ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"flowctl auth roles revoke --object-role=outside-org/acmeCo-share/ --capability=read --subject-role=acmeCo/")," would be used by an admin of ",(0,i.kt)("inlineCode",{parentName:"p"},"outside-org"),"\nto revoke ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/"),"'s read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"outside-org/acmeCo-share/"),"."))),(0,i.kt)("p",null,"You can find detailed help for all subcommands using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," flag."))}u.isMDXComponent=!0}}]);