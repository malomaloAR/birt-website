(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,y=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(y,i(i({ref:t},s),{},{components:n})):a.a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(130)),o={id:"t_styles",title:"Styles",sidebar_label:"Styles"},i={unversionedId:"t_styles",id:"t_styles",isDocsHomePage:!1,title:"Styles",description:"About Styles",source:"@site/docs/t_styles.md",slug:"/t_styles",permalink:"/birt-website/docs/t_styles",editUrl:"https://github.com/eclipse/birt-website/docs/t_styles.md",version:"current",sidebar_label:"Styles",sidebar:"someSidebar",previous:{title:"Create a Report",permalink:"/birt-website/docs/t_create-a-report"},next:{title:"Tables",permalink:"/birt-website/docs/t_tables"}},c=[{value:"About Styles",id:"about-styles",children:[]},{value:"Applying a Style",id:"applying-a-style",children:[]},{value:"Editing a Style",id:"editing-a-style",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"about-styles"},"About Styles"),Object(l.b)("p",null,"We mentioned that BIRT uses CSS to define the styles for report items. BIRT also allows you to define the properties in a style sheet, then to apply the style to a report item, just as in HTML. The result is that you create the style once and use it multiple times. If you need to change the look of a report, you can change the style in one place rather then in many different report items. If you've defined your own styles when creating HTML pages, you're well on your way to understanding the BIRT style system. Styles can also be placed into BIRT libraries (Using Themes) and shared across reports.\nCreating a Style"),Object(l.b)("p",null,"Let's use the style feature to format the table header. Let's make the table header a blue bar with contrasting text. Instead of formatting each label one-by-one, we'll define a style, then apply it. To do this:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select the first label (State label) in the Table Header band.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Right-click and select Style->New Style from the context menu.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The Style Properties dialog appears.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Enter "Header" in the Custom Style (Name) field on the General page and make sure that the Custom Style radio button is selected.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Switch to the Background page from the left most column of the New Style dialog.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Click the Background color button and choose the same blue: third from the right in the top row.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Switch to the Font page.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Set the Color to white.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Set the Weight to Bold.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Click OK."))),Object(l.b)("p",null,"Notice that the new style has been applied to the label."),Object(l.b)("h2",{id:"applying-a-style"},"Applying a Style"),Object(l.b)("p",null,"Next, let's apply the style to the other three header labels. (We could have done this in a single step by selecting all four when we defined the style. We're doing it in two steps just to show how it's done.)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select the other three labels: click on the City label, then use Ctrl+click to add the other two to the selection.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Choose Style->Apply Style->Header from the context menu."))),Object(l.b)("p",null,"The other three cells are now also formatted."),Object(l.b)("h2",{id:"editing-a-style"},"Editing a Style"),Object(l.b)("p",null,"Suppose we wanted to change the style we just created. Here's how we find and change it."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Find or open the Outline view.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Scroll down to the bottom and find the Styles node.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Open the Styles node to reveal our styles.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Double-click the style you want to edit.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can also edit a style by selecting Style->Edit Style->Style Name from the context menu when a report item is selected."))))}b.isMDXComponent=!0}}]);