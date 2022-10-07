"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2665],{1504:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(7294),n=a(7273);n.Z.initialize({startOnLoad:!0});const r=e=>{let{chart:t}=e;return(0,o.useEffect)((()=>{n.Z.contentLoaded()}),[]),o.createElement("div",{className:"mermaid"},t)}},4379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905)),r=a(1504);const i={sidebar_position:7},l="Imports",s={unversionedId:"concepts/import",id:"concepts/import",title:"Imports",description:"When you work on a draft Data Flow using use flowctl draft,",source:"@site/docs/concepts/import.md",sourceDirName:"concepts",slug:"/concepts/import",permalink:"/concepts/import",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/import.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"flowctl",permalink:"/concepts/flowctl"},next:{title:"Schemas",permalink:"/concepts/schemas"}},p={},c=[{value:"Fetch behavior",id:"fetch-behavior",level:2},{value:"Import types",id:"import-types",level:2},{value:"JSON Schema <code>$ref</code>",id:"json-schema-ref",level:2},{value:"Importing derivation resources",id:"importing-derivation-resources",level:2},{value:"Import paths",id:"import-paths",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imports"},"Imports"),(0,n.kt)("p",null,"When you work on a draft Data Flow ",(0,n.kt)("a",{parentName:"p",href:"/concepts/flowctl#working-with-drafts"},"using use ",(0,n.kt)("inlineCode",{parentName:"a"},"flowctl draft")),",\nyour Flow specifications may be spread across multiple files.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," section allows you to interlink these files and define a complete Data Flow."),(0,n.kt)("p",null,"A common convention for a given draft is to have a single top-level specification\nfile which imports all the others.\nFlow automatically generates such a top-level file for your draft when you begin a local work session\nusing ",(0,n.kt)("inlineCode",{parentName:"p"},"flowctl draft develop"),"."),(0,n.kt)("p",null,"When the draft is published, the imported resources are treated as part of the file\ninto which they are imported."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," section is structured as a list of partial or absolute URIs,\nwhich Flow always evaluates relative to the base directory of the current source file.\nFor example, these are possible imports within a collection:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'# Suppose we\'re in file "/path/dir/flow.yaml"\nimport:\n  - sub/directory/flow.yaml        # Resolves to "file:///path/dir/sub/directory/flow.yaml".\n  - ../sibling/directory/flow.yaml # Resolves to "file:///path/sibling/directory/flow.yaml".\n  - https://example/path/flow.yaml # Uses the absolute url.\n')),(0,n.kt)("p",null,"The import rule is flexible; a collection doesn\u2019t have to do anything special\nto be imported by another,\nand ",(0,n.kt)("a",{parentName:"p",href:"/concepts/flowctl"},(0,n.kt)("inlineCode",{parentName:"a"},"flowctl"))," can even directly build remote sources:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Test an example from a GitHub repository.\n$ flowctl draft test --source https://raw.githubusercontent.com/estuary/flow-template/main/word-counts.flow.yaml\n")),(0,n.kt)("h2",{id:"fetch-behavior"},"Fetch behavior"),(0,n.kt)("p",null,"Flow resolves, fetches, and validates all imports in your local environment during the catalog build process,\nand then includes their fetched contents within the published catalog on the Estuary servers.\nThe resulting catalog entities are thus self-contained snapshots of all resources\n",(0,n.kt)("em",{parentName:"p"},"as they were")," at the time of publication."),(0,n.kt)("p",null,"This means it's both safe and recommended to directly reference\nan authoritative source of a resource, such as a third-party JSON schema, as well as resources within your private network.\nIt will be fetched and verified locally at build time,\nand thereafter that fetched version will be used for execution,\nregardless of whether the authority URL itself later changes or errors."),(0,n.kt)("h2",{id:"import-types"},"Import types"),(0,n.kt)("p",null,"Almost always, the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," stanza is used to import other Flow\nspecification files.\nThis is the default when given a string path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n - path/to/source/catalog.flow.yaml\n")),(0,n.kt)("p",null,"A long-form variant also accepts a content type of the imported resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n - url: path/to/source/catalog.flow.yaml\n   contentType: CATALOG\n")),(0,n.kt)("p",null,"Other permitted content types include ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON_SCHEMA"),",\nbut these are not typically used and are needed only for advanced use cases."),(0,n.kt)("h2",{id:"json-schema-ref"},"JSON Schema ",(0,n.kt)("inlineCode",{parentName:"h2"},"$ref")),(0,n.kt)("p",null,"Certain catalog entities, like collections, commonly reference JSON schemas.\nIt's not necessary to explicitly add these to the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," section;\nthey are automatically resolved and treated as an import.\nYou can think of this as an analog to the JSON Schema ",(0,n.kt)("inlineCode",{parentName:"p"},"$ref")," keyword,\nwhich is used to reference a schema that may\nbe contained in another file."),(0,n.kt)("p",null,"The one exception is schemas that use the ",(0,n.kt)("inlineCode",{parentName:"p"},"$id")," keyword\nat their root to define an alternative canonical URL.\nIn this case, the schema must be referenced through its canonical URL,\nand then explicitly added to the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," section\nwith ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON_SCHEMA")," content type."),(0,n.kt)("h2",{id:"importing-derivation-resources"},"Importing derivation resources"),(0,n.kt)("p",null,"In many cases, ",(0,n.kt)("a",{parentName:"p",href:"/concepts/derivations"},"derivations")," in your catalog will need to import resources.\nUsually, these are Typescript modules that define the lambda functions of a transformation,\nand, in certain cases, the NPM dependencies of that Typescript module."),(0,n.kt)("p",null,"These imports are specified in the derivation specification, ",(0,n.kt)("em",{parentName:"p"},"not")," in the import section of the catalog spec."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/concepts/derivations#specification"},"Derivation specification")," and ",(0,n.kt)("a",{parentName:"p",href:"/concepts/derivations#creating-typescript-modules"},"creating TypeScript modules"),"."),(0,n.kt)("h2",{id:"import-paths"},"Import paths"),(0,n.kt)("p",null,"If a catalog source file ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml")," references a collection in ",(0,n.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml"),",\nfor example as a target of a capture,\nthere must be an ",(0,n.kt)("em",{parentName:"p"},"import path")," where either ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml"),"\nimports ",(0,n.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml")," or vice versa."),(0,n.kt)("p",null,"Import paths can be direct:"),(0,n.kt)(r.Z,{chart:"\n\tgraph LR;\n\t\tfoo.flow.yaml--\x3ebar.flow.yaml;\n",mdxType:"Mermaid"}),(0,n.kt)("p",null,"Or they can be indirect:"),(0,n.kt)(r.Z,{chart:"\n\tgraph LR;\n\t\tbar.flow.yaml--\x3eother.flow.yaml;\n        other.flow.yaml--\x3efoo.flow.yaml;\n",mdxType:"Mermaid"}),(0,n.kt)("p",null,"The sources must still have an import path\neven if referenced from a common parent.\nThe following would ",(0,n.kt)("strong",{parentName:"p"},"not")," work:"),(0,n.kt)(r.Z,{chart:"\n\tgraph LR;\n\t\tparent.flow.yaml--\x3efoo.flow.yaml;\n\t\tparent.flow.yaml--\x3ebar.flow.yaml;\n",mdxType:"Mermaid"}),(0,n.kt)("p",null,"These rules make your catalog sources more self-contained\nand less brittle to refactoring and reorganization.\nConsider what might otherwise happen if ",(0,n.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml"),"\nwere imported in another project without ",(0,n.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml"),"."))}d.isMDXComponent=!0}}]);