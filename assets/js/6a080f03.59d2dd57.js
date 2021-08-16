"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[687],{9462:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],l={sidebar_position:5},r="Using components",p={unversionedId:"using-components",id:"using-components",isDocsHomePage:!1,title:"Using components",description:"Block and inline component syntax",source:"@site/docs/using-components.md",sourceDirName:".",slug:"/using-components",permalink:"/slippers/docs/using-components",editUrl:"https://github.com/mixxorz/slippers/edit/main/docs/docs/using-components.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Registering components",permalink:"/slippers/docs/registering-components"},next:{title:"Template tags and filters",permalink:"/slippers/docs/template-tags-filters"}},c=[{value:"Block and inline component syntax",id:"block-and-inline-component-syntax",children:[]},{value:"Component context",id:"component-context",children:[]},{value:"Assigning output to a variable",id:"assigning-output-to-a-variable",children:[]}],d={toc:c};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-components"},"Using components"),(0,i.kt)("h2",{id:"block-and-inline-component-syntax"},"Block and inline component syntax"),(0,i.kt)("p",null,"Components can be used in two ways: block-level or inline-level."),(0,i.kt)("p",null,"For example, given an ",(0,i.kt)("inlineCode",{parentName:"p"},"icon_button")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig",metastring:'title="icon_button.html"',title:'"icon_button.html"'},"<button>{{ children }} {% icon name=icon %}</button>\n")),(0,i.kt)("p",null,"We can use the block syntax to pass the label of the button as ",(0,i.kt)("inlineCode",{parentName:"p"},"children.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'{% #icon_button icon="star" %}Favorite{% /icon_button %}\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," denotes the opening tag and ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," denotes the closing tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},"<button>Favorite <svg>...</svg></button>\n")),(0,i.kt)("p",null,"If we didn't need to pass a label, or if the component itself doesn't use ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ children }}"),", we can use the inline syntax instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'{% icon_button icon="heart" %}\n')),(0,i.kt)("p",null,"The inline syntax just uses the plain component name. No ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Output"',title:'"Output"'},"<button><svg>...</svg></button>\n")),(0,i.kt)("h2",{id:"component-context"},"Component context"),(0,i.kt)("p",null,"Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," tag, component template tags ",(0,i.kt)("strong",{parentName:"p"},"do not")," pass the current context to the child component. Variables need to be passed in explicitly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'{% #button variant="primary" size="large" %}Hello{% /button %}\n')),(0,i.kt)("p",null,"In addition, any variable set inside of a component template does not leak out to to the global context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig",metastring:"button.html","button.html":!0},'{% var class=class|default:"btn btn-primary" %}\n<button {% attrs class %}>{{ children }}</button>\n\n{# The `class` variable will not "leak" out onto the global context #}\n')),(0,i.kt)("p",null,"This is a deliberate design decision to improve readability and reduce side-effects."),(0,i.kt)("p",null,"You can of course still use ",(0,i.kt)("inlineCode",{parentName:"p"},"{% include %}")," if its behaviour is more convenient in specific circumstances."),(0,i.kt)("h2",{id:"assigning-output-to-a-variable"},"Assigning output to a variable"),(0,i.kt)("p",null,"Similar to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/template-tags-filters#fragment"},(0,i.kt)("inlineCode",{parentName:"a"},"fragment"))," tag, a component's output can be assigned to a variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'{% #heading variant="large" as my_heading %}Hello, World{% /heading %}\n\n{# Render it like a normal variable #}\n{{ my_heading }}\n\n{# Or pass to to another component #}\n{% card_heading heading=my_heading %}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Assigning component output to a variable cannot be done inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," block."))))}m.isMDXComponent=!0}}]);