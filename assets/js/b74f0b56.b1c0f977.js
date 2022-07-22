"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6337],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return a?n.createElement(f,r(r({ref:t},m),{},{components:a})):n.createElement(f,r({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6168:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=["components"],i={sidebar_position:5},s="Organizing a Flow catalog",c={unversionedId:"reference/organizing-catalogs",id:"reference/organizing-catalogs",title:"Organizing a Flow catalog",description:"It's not necessary to store the entire catalog spec in one YAML file, and Flow provides the flexibility to reference other files, which can be managed independently.",source:"@site/docs/reference/organizing-catalogs.md",sourceDirName:"reference",slug:"/reference/organizing-catalogs",permalink:"/reference/organizing-catalogs",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/organizing-catalogs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Working with logs and statistics",permalink:"/reference/working-logs-stats"}},m={},p=[{value:"<code>import</code>",id:"import",level:3},{value:"Example: Organizing collections",id:"example-organizing-collections",level:4},{value:"Example: Separate environments",id:"example-separate-environments",level:4},{value:"Example: Cross-team collaboration",id:"example-cross-team-collaboration",level:4},{value:"Global namespace",id:"global-namespace",level:3}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"organizing-a-flow-catalog"},"Organizing a Flow catalog"),(0,l.kt)("p",null,"It's not necessary to store the entire catalog spec in one YAML file, and Flow provides the flexibility to reference other files, which can be managed independently.\nYou can leverage this capability when you ",(0,l.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"run Flow from the command line"),". You may want to do so if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You want to ensure shared collections remain easy to find"),(0,l.kt)("li",{parentName:"ul"},"You use group data that's managed by different teams"),(0,l.kt)("li",{parentName:"ul"},"You could benefit from DRY factoring things that are different per environment"),(0,l.kt)("li",{parentName:"ul"},"You need to manage sensitive credentials separately from materialization definitions")),(0,l.kt)("h3",{id:"import"},(0,l.kt)("inlineCode",{parentName:"h3"},"import")),(0,l.kt)("p",null,"Flow's ",(0,l.kt)("a",{parentName:"p",href:"/concepts/import"},(0,l.kt)("inlineCode",{parentName:"a"},"import"))," directive can help you easily handle all of these scenarios while keeping your catalogs well organized. Each catalog spec file may import any number of other files, and each import may refer to either relative or an absolute URL."),(0,l.kt)("p",null,"When you use ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," in a catalog spec, you're conceptually bringing the entirety of another catalog \u2014 as well as the schemas and typescript files it uses \u2014 into your catalog. Imports are also transitive, so when you import another catalog, you're ",(0,l.kt)("em",{parentName:"p"},"also")," importing everything that other catalog has imported. This allows you to keep your catalogs organized, and is flexible enough to support collaboration between separate teams and organizations."),(0,l.kt)("p",null,"Perhaps the best way of explaining this is with some examples."),(0,l.kt)("h4",{id:"example-organizing-collections"},"Example: Organizing collections"),(0,l.kt)("p",null,"Let's look at a relatively simple case in which you want to organize your collections into multiple catalog files. Say you work for Acme Corp on the team that's introducing Flow. You might start with the collections and directory structure below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acme/customers/customerInfo\nacme/products/info/manufacturers\nacme/products/info/skus\nacme/products/inventory\nacme/sales/pending\nacme/sales/complete\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acme\n\u251c\u2500\u2500 flow.yaml\n\u251c\u2500\u2500 customers\n\u2502   \u251c\u2500\u2500 flow.ts\n\u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u2514\u2500\u2500 schemas.yaml\n\u251c\u2500\u2500 products\n\u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u251c\u2500\u2500 info\n\u2502   \u2502   \u251c\u2500\u2500 flow.ts\n\u2502   \u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u2502   \u2514\u2500\u2500 schemas.yaml\n\u2502   \u2514\u2500\u2500 inventory\n\u2502       \u251c\u2500\u2500 flow.ts\n\u2502       \u251c\u2500\u2500 flow.yaml\n\u2502       \u2514\u2500\u2500 schemas.yaml\nschemas.yaml\n\u2514\u2500\u2500 sales\n    \u251c\u2500\u2500 flow.ts\n    \u251c\u2500\u2500 flow.yaml\n    \u2514\u2500\u2500 schemas.yaml\n")),(0,l.kt)("p",null,"It's immediately clear where each of the given collections is defined, since the directory names match the path segments in the collection names. This is not required by the",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl")," CLI, but is strongly recommended, since it makes your catalogs more readable and maintainable. Each directory contains a catalog spec (",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml"),"), which will import all of the catalogs from child directories."),(0,l.kt)("p",null,"So, the top-level catalog spec, ",(0,l.kt)("inlineCode",{parentName:"p"},"acme/flow.yaml"),", might look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n")),(0,l.kt)("p",null,"This type of layout has a number of other advantages. During development, you can easily work with a subset of collections using, for example, ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl test --source acme/products/flow.yaml")," to run only the tests for product-related collections. It also allows other imports to be more granular. For example, you might want a derivation under ",(0,l.kt)("inlineCode",{parentName:"p"},"sales")," to read from ",(0,l.kt)("inlineCode",{parentName:"p"},"acme/products/info"),". Since ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," has a separate catalog spec, ",(0,l.kt)("inlineCode",{parentName:"p"},"acme/sales/flow.yaml")," can import ",(0,l.kt)("inlineCode",{parentName:"p"},"acme/products/info/flow.yaml")," without creating a dependency on the ",(0,l.kt)("inlineCode",{parentName:"p"},"inventory")," collection."),(0,l.kt)("h4",{id:"example-separate-environments"},"Example: Separate environments"),(0,l.kt)("p",null,"It's common to use separate environments for tiers like development, staging, and production. Flow catalog specs often necessarily include endpoint configuration for external systems that will hold materialized views. Let's say you want your production environment to materialize views to Snowflake, but you want to develop locally on SQLite. We might modify the Acme example slightly to account for this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acme\n\u251c\u2500\u2500 dev.flow.yaml\n\u251c\u2500\u2500 prod.flow.yaml\n... the remainder is the same as above\n")),(0,l.kt)("p",null,"Each of the top-level catalog specs might import all of the collections and define an endpoint called ",(0,l.kt)("inlineCode",{parentName:"p"},"ourMaterializationEndpoint")," that points to the desired system. The ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," block might be the same for each system, but each file may use a different configuration for the endpoint, which is used by any materializations that reference it."),(0,l.kt)("p",null,"Our configuration for our development environment will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="dev.flow.yaml"',title:'"dev.flow.yaml"'},"  import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n\n  ourMaterializationEndpoint:\n    # dev.flow.yaml\n    sqlite:\n      path: dev-materializations.db\n")),(0,l.kt)("p",null,"While production will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="prod.flow.yaml"',title:'"prod.flow.yaml"'},"import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n\nendpoints:\n    snowflake:\n      account: acme_production\n      role: admin\n      schema: snowflake.com/acmeProd\n      user: importantAdmin\n      password: abc123\n      warehouse: acme_production\n")),(0,l.kt)("p",null,"When we test the draft locally, we'll work with dev.flow.yaml, but we'll publish prod.flow.yaml."),(0,l.kt)("p",null,"Everything will continue to work because in our development environment we'll be binding collections to our local SQLite DB and in production we'll use Snowflake."),(0,l.kt)("h4",{id:"example-cross-team-collaboration"},"Example: Cross-team collaboration"),(0,l.kt)("p",null,"When working across teams, it's common for one team to provide a data product for another to reference and use. Flow is designed for cross-team collaboration, allowing teams and users to reference each other's full catalog or schema. "," "),(0,l.kt)("p",null,"Again using the Acme example, let's imagine we have two teams. Team Web is responsible for Acme's website, and Team User is responsible for providing a view of Acme customers that's always up to date. Since Acme wants a responsive site that provides a good customer experience, Team Web needs to pull the most up-to-date information from Team User at any point. Let's look at Team User's collections:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="teamUser.flow.yaml"',title:'"teamUser.flow.yaml"'},"import:\n    - userProfile.flow.yaml\n")),(0,l.kt)("p",null,"Which references:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="userProfile.flow.yaml"',title:'"userProfile.flow.yaml"'},'collection:\n    userProfile:\n        schema:\n            -"/userProfile/schema"\n        key:\n            [/id]\n')),(0,l.kt)("p",null,"Team User references files in their directory, which they actively manage in both their import and schema sections. If Team Web wants to access user data (and they have access), they can use a relative path or a URL-based path given that Team User publishes their data to a URL for access:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="teamWeb.flow.yaml"',title:'"teamWeb.flow.yaml"'},"import:\n    -http://www.acme.com/teamUser#userProfile.flow.yaml\n    -webStuff.flow.yaml\n")),(0,l.kt)("p",null,"Now Team Web has direct access to collections (referenced by their name) to build derived collections on top of. They can also directly import schemas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="webStuff.flow.yaml"',title:'"webStuff.flow.yaml"'},"collection:\n    webStuff:\n        schema:\n            -http://acme.com/teamUser#userProfile/#schema\n        key:\n            [/id]\n")),(0,l.kt)("h3",{id:"global-namespace"},"Global namespace"),(0,l.kt)("p",null,"Every Flow collection has a name, and that name ",(0,l.kt)("em",{parentName:"p"},"must")," be unique within a running Flow system. Flow collections should be thought of as existing within a global namespace. Keeping names globally unique makes it easy to import catalogs from other teams, or even other organizations, without having naming conflicts or ambiguities."),(0,l.kt)("p",null,"For example, imagine your catalog for the inside sales team has a collection just named ",(0,l.kt)("inlineCode",{parentName:"p"},"customers"),". If you later try to import a catalog from the outside sales team that also contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"customers")," collection, \ud83d\udca5 there's a collision. A better collection name would be ",(0,l.kt)("inlineCode",{parentName:"p"},"acme/inside-sales/customers"),". This allows a catalog to include customer data from separate teams, and also separate organizations."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/concepts/#namespace"},"Learn more about the Flow namespace.")))}d.isMDXComponent=!0}}]);