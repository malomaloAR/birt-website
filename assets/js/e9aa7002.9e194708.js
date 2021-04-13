(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(130)),l={id:"t_data-sets",title:"Data Sets",sidebar_label:"Data Sets"},o={unversionedId:"t_data-sets",id:"t_data-sets",isDocsHomePage:!1,title:"Data Sets",description:"Build a Data Set",source:"@site/docs/t_data-sets.md",slug:"/t_data-sets",permalink:"/birt-website/docs/t_data-sets",editUrl:"https://github.com/eclipse/birt-website/docs/t_data-sets.md",version:"current",sidebar_label:"Data Sets",sidebar:"someSidebar",previous:{title:"Data Sources",permalink:"/birt-website/docs/t_data-sources"},next:{title:"Data Properties",permalink:"/birt-website/docs/t_data-properties"}},s=[{value:"Build a Data Set",id:"build-a-data-set",children:[]},{value:"Data Set Editor Pages",id:"data-set-editor-pages",children:[]},{value:"Database Browser",id:"database-browser",children:[]},{value:"Test the Query",id:"test-the-query",children:[]},{value:"Edit a Data Set",id:"edit-a-data-set",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"build-a-data-set"},"Build a Data Set"),Object(i.b)("p",null,"Now we're ready to build and test our data set."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find or open the Data Explorer view.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the Data Sets node in the tree view.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Right-click to open the context menu. (We\'ll just say "open the context menu" or "choose x from the context menu" from now on.)')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select New Data Set. The New Data Set dialog will appear.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter "Customers" for the Data Set Name field.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the Data Source field shows the Sample data source created above.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Ensure that the Data Set Type field shows "SQL Select Query".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Next.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter the following Query: SELECT *")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"FROM CUSTOMERS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WHERE COUNTRY = 'USA'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Finish."))),Object(i.b)("h2",{id:"data-set-editor-pages"},"Data Set Editor Pages"),Object(i.b)("p",null,"The data set editor now opens. Let's take a look at the pages within this editor. The data set editor provides the following pages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Query - Displays your SQL SELECT statement. This is where you create and change your SQL query. Once you have the basic query, you can add a WHERE clause, adjust the set of selected columns, and more. Use the SQL editor to add computed columns that are to be calculated by the database engine. Give such columns a name using the SQL ALIAS clause.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data Source - Displays the name of the data source for this data set so you can view or change it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Preview Results - Lets you test your query and see the output. Very handy to make sure that the data is right before you proceed with report design.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Computed Columns - Computed columns are calculated by BIRT and appear to the rest of the report just like any other column. You can use JavaScript expressions, and even call into Java for advanced business logic.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Parameters - SQL SELECT statements can include input parameters that pass data into the query. They are marked using the SQL "?" symbol in the query. This page lets you give the parameters a name, a default value, and so on. There must be a one-to-one correspondence between entries on this page and the "?" symbols in your query.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Filters - Additional filters that BIRT applies to your data. Filters restrict the data passed to the report. The WHERE clause is also a filter: one executed by the database. This tab lets you define additional filters using BIRT (JavaScript) scripting.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Output Columns - Shows the columns within the query, and lets you define a column alias for use in the report. Note that this view shows the columns as the report will see them. The Query page shows the columns as selected from the database."))),Object(i.b)("h2",{id:"database-browser"},"Database Browser"),Object(i.b)("p",null,"Switch to the Query page if you're not already there. This page provides a simple database browser."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Expand the Sample data source to see the schemas within this database. There is only one: "CLASSICMODELS".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Expand "CLASSICMODELS" to see the list of tables in the database.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Expand a table to see its columns.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This editor supports drag and drop."))),Object(i.b)("h2",{id:"test-the-query"},"Test the Query"),Object(i.b)("p",null,"With the data set editor open, do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click on the Preview Results item.")),Object(i.b)("p",null,"The preview page appears. This page shows the columns selected in your query listed across the top. The actual rows in your query appear down the page."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify that the list of customers appears.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click OK to close the data set editor."))),Object(i.b)("p",null,"If an error dialog appears, check the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Your Eclipse is installed in a directory without spaces.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You have typed the SQL statement as shown above.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You have not put a semi-colon at the end of your statement."))),Object(i.b)("h2",{id:"edit-a-data-set"},"Edit a Data Set"),Object(i.b)("p",null,"Your new data set appears in the Data Explorer along with your data source. We can use the data set editor to change the data set, and to test it to make sure it returns the correct data."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find or open the Data Explorer.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Data Sets node.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Double-click the Customers data set. The Data Set editor opens."))))}p.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return a?n.a.createElement(m,o(o({ref:t},c),{},{components:a})):n.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);