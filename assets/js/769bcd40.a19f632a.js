(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(130)),i={id:"my-first-report",title:"My first Report",sidebar_label:"My first Report"},l={unversionedId:"my-first-report",id:"my-first-report",isDocsHomePage:!1,title:"My first Report",description:"Introduction",source:"@site/docs/my-first-report.md",slug:"/my-first-report",permalink:"/birt-website/docs/my-first-report",editUrl:"https://github.com/eclipse/birt-website/docsEdit/docs/my-first-report.md",version:"current",sidebar_label:"My first Report",sidebar:"someSidebar",previous:{title:"Create a Report",permalink:"/birt-website/docs/create-a-report"},next:{title:"Community",permalink:"/birt-website/docs/community"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Tutorial",id:"tutorial",children:[]},{value:"Templates and Examples",id:"templates-and-examples",children:[]},{value:"Documentation",id:"documentation",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The following introduction walks you through building a simple report with BIRT. It introduces the major UI features, and many of the BIRT reporting elements. At the completion of this tutorial, you should be able to start building your own reports using your own database."),Object(a.b)("p",null,"We'll create a simple customer listing report, with the customers grouped by state and city. For each customer, we'll display a name and phone number."),Object(a.b)("h2",{id:"tutorial"},"Tutorial"),Object(a.b)("p",null,"The following two video tutorial walks you through building a simple report with BIRT. It introduces the major UI features, and many of the BIRT reporting elements. At the completion of this tutorial, you should be able to start building your own reports using your own database."),Object(a.b)("p",null,"In these tutorials, you'll create a simple customer listing report, with the customers grouped by state and city. For each customer, you'll display a name and phone number.## Basic Overview"),Object(a.b)("p",null,"The following videos walks you though the steps to build a basic listing report and introduces the basic BIRT concepts. This is right the place to start. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Watch ",Object(a.b)("a",{parentName:"li",href:"//www.youtube.com/watch?v=6TRndgUMUmU"},"tutorial 1")),Object(a.b)("li",{parentName:"ul"},"Watch ",Object(a.b)("a",{parentName:"li",href:"//www.youtube.com/watch?v=Kdr_LeHjIH8"},"tutorial 2"))),Object(a.b)("h2",{id:"templates-and-examples"},"Templates and Examples"),Object(a.b)("p",null,"Now that you've learned the basics of creating a BIRT design, check out some templates and use them as examples of what you can do with BIRT."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/birt-website/docs/template-introduction"},"Templates and examples"))),Object(a.b)("h2",{id:"documentation"},"Documentation"),Object(a.b)("p",null,"Now that you know enough about BIRT, you'll probably want to see some documentation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/birt-website/docs/t_brief-editor-tour"},"Documentation"))))}s.isMDXComponent=!0},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,l(l({ref:t},u),{},{components:r})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);