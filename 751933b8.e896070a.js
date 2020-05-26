(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),o=(n(0),n(241)),i={title:"Maintenance Mode"},c={id:"howto_maintenance_mode",title:"Maintenance Mode",description:"Maintenance mode is used when staging equipment in a production network prior to its go-live date, or to isolate a router/device from the network in order to perform debugging or an upgrade. The primary function of maintenance mode is to suppress alarms from systems that are incomplete, or undergoing maintenance activities that would cause alarms. When the device maintenance is complete, you can set the router out of maintenance mode.",source:"@site/docs/howto_maintenance_mode.md",permalink:"/docs/howto_maintenance_mode",lastUpdatedAt:1586731675,sidebar:"docs",previous:{title:"LTE",permalink:"/docs/howto_lte"},next:{title:"Adding a Trusted Certificate",permalink:"/docs/howto_trusted_ca_certificate"}},s=[{value:"Alarms during Maintenance mode",id:"alarms-during-maintenance-mode",children:[]},{value:"Enabling Maintenance Mode",id:"enabling-maintenance-mode",children:[]}],m={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Maintenance mode is used when staging equipment in a production network prior to its go-live date, or to isolate a router/device from the network in order to perform debugging or an upgrade. The primary function of maintenance mode is to suppress alarms from systems that are incomplete, or undergoing maintenance activities that would cause alarms. When the device maintenance is complete, you can set the router out of maintenance mode."),Object(o.b)("h2",{id:"alarms-during-maintenance-mode"},"Alarms during Maintenance mode"),Object(o.b)("p",null,"When a 128T is put into ",Object(o.b)("strong",{parentName:"p"},"Maintenance Mode")," all alarms for that 128T device will be ",Object(o.b)("strong",{parentName:"p"},"shelved"),". Shelving refers to placing an alarm in state such that it is not considered critical and so as to not bother the user. Shelved alarms will continue to be monitored by the system but will not be presented on the standard UI."),Object(o.b)("p",null,"The state of shelved alarms can be optionally viewed by issuing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"show alarms shelved\n")),Object(o.b)("p",null,"You can use the router keyword to display alarms from a specific router"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"show alarms shelved router bostonsite1\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can view events for a specific router starting from a particular time by using the from/to keyword"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"show events alarm router bostonsite1 from 2019-04-03\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Alarms follow the ISO 8601 standard for date & time."))),Object(o.b)("h2",{id:"enabling-maintenance-mode"},"Enabling Maintenance Mode"),Object(o.b)("p",null,"You can enable maintenance mode by setting it to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," either in the GUI or in the PCLI: ",Object(o.b)("inlineCode",{parentName:"p"},"authority > router > maintenance-mode > true/false")),Object(o.b)("p",null,"On GUI:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/howto_maintenance_mode.png",alt:"Maintenance Mode in Configuration"}))),Object(o.b)("p",null,"On PCLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@datacenter1~]# su admin\n Starting the PCLI...\n admin@datacenter1.bostonsite1# config authority router bostonsite1 maintenance-mode true\n")),Object(o.b)("p",null,"Similarly, you can disable the  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"maintenance-mode"))," by setting it to ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"false")),"."))}l.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,u=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(u,c(c({ref:t},m),{},{components:n})):r.a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);