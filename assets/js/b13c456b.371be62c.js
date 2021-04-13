(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(130)),c={id:"t_data-sources",title:"Data Sources",sidebar_label:"Data Sources"},i={unversionedId:"t_data-sources",id:"t_data-sources",isDocsHomePage:!1,title:"Data Sources",description:"About Data Sources and Data Sets",source:"@site/docs/t_data-sources.md",slug:"/t_data-sources",permalink:"/birt-website/docs/t_data-sources",editUrl:"https://github.com/eclipse/birt-website/docs/t_data-sources.md",version:"current",sidebar_label:"Data Sources",sidebar:"someSidebar",previous:{title:"Grids",permalink:"/birt-website/docs/t_grids"},next:{title:"Data Sets",permalink:"/birt-website/docs/t_data-sets"}},u=[{value:"About Data Sources and Data Sets",id:"about-data-sources-and-data-sets",children:[]},{value:"Build a Data Source",id:"build-a-data-source",children:[]},{value:"Edit a Data Source",id:"edit-a-data-source",children:[]}],l={toc:u};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-data-sources-and-data-sets"},"About Data Sources and Data Sets"),Object(o.b)("p",null,"BIRT reports use a data source element to connect to a database or other data provider. BIRT uses a data set element to retrieve data from the data provider. Think of the data source as a connection, and the data set as a query."),Object(o.b)("h2",{id:"build-a-data-source"},"Build a Data Source"),Object(o.b)("p",null,"Let's build our data source:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open the Data Explorer View, if it is not already visible.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the Data Sources node within the tree view.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Right-click to open the context menu.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Choose New Data Source. The New Data Source dialog appears.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Choose Classic Models Inc. Sample Database.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'In the Data Source Name field, enter "Sample".')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Next.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click Finish."))),Object(o.b)("p",null,"Your new data source appears within the Data Sources node in the Data Explorer."),Object(o.b)("h2",{id:"edit-a-data-source"},"Edit a Data Source"),Object(o.b)("p",null,"For future reference, let's review how you would go about changing the data source:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Find or open the Data Explorer View.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open the Data Sources node.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Double-click the data source.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The Data Source editor opens. You can make any needed changes.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click OK to save your changes."))),Object(o.b)("p",null,"BIRT reports use a data source element to connect to a database or other data provider. BIRT uses a data set element to retrieve data from the data provider. Think of the data source as a connection, and the data set as a query. "))}s.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(a),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);