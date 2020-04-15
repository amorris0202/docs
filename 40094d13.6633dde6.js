(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(1),r=n(11),o=(n(0),n(224)),a={title:"Configuring Audit Logging",sidebar_label:"Audit Log"},c={id:"config_audit_log",title:"Configuring Audit Logging",description:"The 128T Networking Platform can maintain a history of all configuration changes in its *event log*, which can subsequently be used to support compliance audits, forensics on network issues related to configuration (misapplied or otherwise), and traceability. This document covers:",source:"@site/docs/config_audit_log.md",permalink:"/docs/config_audit_log",lastUpdatedAt:1585338305,sidebar_label:"Audit Log",sidebar:"docs",previous:{title:"Configuration Element Reference",permalink:"/docs/config_reference_guide"},next:{title:"DNS Proxy",permalink:"/docs/config_dns_proxy"}},s=[{value:"Basic Configuration",id:"basic-configuration",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Viewing the Audit Log",id:"viewing-the-audit-log",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The 128T Networking Platform can maintain a history of all configuration changes in its ",Object(o.b)("em",{parentName:"p"},"event log"),", which can subsequently be used to support compliance audits, forensics on network issues related to configuration (misapplied or otherwise), and traceability. This document covers:\n1. Enabling the Audit Log (using the PCLI or the GUI)\n2. Using the Event Viewer in the GUI"),Object(o.b)("h2",{id:"basic-configuration"},"Basic Configuration"),Object(o.b)("p",null,"The configuration for audit logging is done within the ",Object(o.b)("inlineCode",{parentName:"p"},"system > audit")," branch within a ",Object(o.b)("inlineCode",{parentName:"p"},"router")," hierarchy, by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"enabled")," property within the ",Object(o.b)("inlineCode",{parentName:"p"},"administration")," branch to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". In most cases, the only configuration that is required for enabling audit logging is to add it to the ",Object(o.b)("inlineCode",{parentName:"p"},"router")," element for your Authority's conductor. For cases where a 128T router is not managed by a conductor, its audit logging configuration is similarly added to the ",Object(o.b)("inlineCode",{parentName:"p"},"system > audit")," branch of its ",Object(o.b)("inlineCode",{parentName:"p"},"router")," hierarchy."),Object(o.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(o.b)("p",null,"Here is a sample configuration showing the minimum required configuration to enable audit logging."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Configuration not related to audit logging has been filtered out for illustrative purposes."))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"admin@labsystem1.fiedler# show config running authority router fiedler system\n\nconfig\n    authority\n        router  fiedler\n            name    fiedler\n            system\n                audit\n                    administration\n                        enabled  true\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("h2",{id:"viewing-the-audit-log"},"Viewing the Audit Log"),Object(o.b)("p",null,"The only way at present to view the contents of the audit log is via the GUI (on the conductor or router as configured above)."),Object(o.b)("p",null,"To view the contents of the audit log, navigate to the ",Object(o.b)("strong",{parentName:"p"},"Tools")," page and choose ",Object(o.b)("strong",{parentName:"p"},"Event History"),". The Event History viewer shows all of the events that this 128T has accumulated, including audit log events. Audit log events are of type ",Object(o.b)("strong",{parentName:"p"},"ADMIN"),"; you can use the built-in filtering mechanism to limit the Event History search results to ADMIN type events to find events of interest."))}l.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,g=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(g,c({ref:t},u,{components:n})):r.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);