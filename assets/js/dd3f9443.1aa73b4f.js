(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),o=(r(0),r(130)),i={id:"t_data-properties",title:"Data Properties",sidebar_label:"Data Properties"},s={unversionedId:"t_data-properties",id:"t_data-properties",isDocsHomePage:!1,title:"Data Properties",description:"In addition to the visual properties we just saw, BIRT provides a set of data-related properties for each report item. We'll use these to control the sort order of the customers within our report.",source:"@site/docs/t_data-properties.md",slug:"/t_data-properties",permalink:"/birt-website/docs/t_data-properties",editUrl:"https://github.com/eclipse/birt-website/docsEdit/docs/t_data-properties.md",version:"current",sidebar_label:"Data Properties",sidebar:"someSidebar",previous:{title:"Data Sets",permalink:"/birt-website/docs/t_data-sets"},next:{title:"Cascading Styles",permalink:"/birt-website/docs/t_cascading-styles"}},p=[{value:"Data properties include:",id:"data-properties-include",children:[]},{value:"Setting the Detail Sort",id:"setting-the-detail-sort",children:[]}],l={toc:p};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to the visual properties we just saw, BIRT provides a set of data-related properties for each report item. We'll use these to control the sort order of the customers within our report."),Object(o.b)("p",null,"Data sets in BIRT are reusable: you can use the same data set multiple times. For example, suppose you want to show year-to-date (YTD) sales three ways: by month, by sales rep, and as a chart. With BIRT, you define the data set once, but present it three times. Each use of the data set can provide data properties that customize the data set to that particular use."),Object(o.b)("h2",{id:"data-properties-include"},"Data properties include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Data set binding: lets you specify the data set to use with any given report item.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Parameter binding: you can pass data into the data set. For example, you can create a "master/detail" subreport by using data set parameters to pass data from the current row in the master report to the detail for the subreport. Or as another example, you can obtain a list of customers from one database, then have the subreport display orders from a different database.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Filters: provide filter conditions unique to a given presentation. For example, a list of transactions might list all transactions, but then use filters to display sales in one chart, returns in another.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Groups: provide ability to create subtotals as we have already seen.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sorting: controls the order of the detail rows within a table. This is the property we'll use."))),Object(o.b)("h2",{id:"setting-the-detail-sort"},"Setting the Detail Sort"),Object(o.b)("p",null,"We're ready to specify the sort order for customers within our report."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the table. (by clicking on the table tab in the Layout Editor.)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Choose the Sorting tab within the Property Editor. (Note: Sorting is a tab on the top of the Property Editor and not a page on the left as we've used thus far.)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click the Add button to add a new sort condition.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Use the pull-down under Sort Key to choose "CUSTOMERNAME".')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Leave the Sort Direction at Ascending."))))}c.isMDXComponent=!0},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);