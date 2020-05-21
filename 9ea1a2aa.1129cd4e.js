(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(9),o=(n(0),n(238)),i={title:"Programmable Command Line Interface (PCLI)",sidebar_label:"PCLI"},c={id:"concepts_pcli",title:"Programmable Command Line Interface (PCLI)",description:"About the PCLI",source:"@site/docs/concepts_pcli.md",permalink:"/docs/concepts_pcli",lastUpdatedAt:1587736488,sidebar_label:"PCLI",sidebar:"docs",previous:{title:"Intra- and Inter-System Communication",permalink:"/docs/concepts_machine_communication"},next:{title:"Session Timers",permalink:"/docs/concepts_session_timer"}},l=[{value:"About the PCLI",id:"about-the-pcli",children:[]},{value:"The PCLI Prompt",id:"the-pcli-prompt",children:[]},{value:"Shortcuts",id:"shortcuts",children:[{value:"&lt;ctrl&gt;+z",id:"ctrlz",children:[]}]}],p={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-the-pcli"},"About the PCLI"),Object(o.b)("p",null,"The PCLI (an acronym for ",Object(o.b)("em",{parentName:"p"},"Programmable Command Line Interface"),") is one of the two primary human interfaces on the 128T router; this document will use the terms PCLI and CLI interchangeably. This document describes the set of PCLI commands supported by the 128T router. Each command listed below will show all mandatory and optional arguments, representative output from the PCLI where applicable, and version history."),Object(o.b)("p",null,"Note that all of the examples in this document will be run as the ",Object(o.b)("em",{parentName:"p"},"admin")," role (as denoted by the prompt in this and other examples); however, each command will also indicate which user roles \u2013 either ",Object(o.b)("em",{parentName:"p"},"user")," or ",Object(o.b)("em",{parentName:"p"},"admin")," at the time of this writing \u2013 are eligible to run the command based upon that command","'","s privileges. Note that unprivileged ",Object(o.b)("em",{parentName:"p"},"user"),' accounts will not only be unable to execute these commands, they will not "see" them in the PCLI as part of the help text, etc.'),Object(o.b)("p",null,"Optional arguments are written in brackets (",Object(o.b)("inlineCode",{parentName:"p"},"[")," ",Object(o.b)("inlineCode",{parentName:"p"},"]"),"), and users may include or omit them as needed. Variable arguments (where users need to supply a value, rather than entering in the literal string shown in the syntax) are written in angle brackets (",Object(o.b)("inlineCode",{parentName:"p"},"<")," ",Object(o.b)("inlineCode",{parentName:"p"},">"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"show stats packet-processing action failure [core <core>]\n")),Object(o.b)("p",null,"In this example, a user may include core information",Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),'. If including core, the user must supply the literal string "core" and a value for the core, such as "0".'),Object(o.b)("p",null,"Braces, brackets, and pipes are often combined and nested to describe the complete grammar of the command line syntax for any given command."),Object(o.b)("h2",{id:"the-pcli-prompt"},"The PCLI Prompt"),Object(o.b)("p",null,'The PCLI will indicate that there are uncommitted configuration changes via a change to the prompt. When uncommitted changes exist, the prompt is prefixed with an asterisk ("',"*",'"):'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler#\n*admin@labsystem1.fiedler# validate\nCandidate configuration is valid\n*admin@labsystem1.fiedler# commit\nAre you sure you want to commit the candidate config? [y/N]: y\nConfiguration committed\nadmin@labsystem1.fiedler#\n")),Object(o.b)("h2",{id:"shortcuts"},"Shortcuts"),Object(o.b)("h3",{id:"ctrlz"},"<","ctrl",">","+z"),Object(o.b)("p",null,"Cisco CLI implements ",Object(o.b)("inlineCode",{parentName:"p"},"<ctrl>+z"),", which is a shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"enter")," + ",Object(o.b)("inlineCode",{parentName:"p"},"top")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<ctrl>+z")," on the 128T is an improvement over Cisco's CLI and is the equivalent to the following two actions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<enter>")," execute whatever is currently on the prompt line (if any)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"top<enter>")," exit the current menu and go to the root of the PCLI tree")),Object(o.b)("p",null,"When the buffer is empty:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.router1# configure authority router router1 <enter>\nadmin@node1.router1 (router[name=router1])# <ctrl-z>\nadmin@node1.router1#\n")),Object(o.b)("p",null,"With a valid command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.router1# configure authority router router1 <enter>\nadmin@node1.router1 (router[name=Fabric128])# validate <ctrl-z>\n\u2714 Validating...\nCandidate configuration is valid\nadmin@node1.router1#\n")),Object(o.b)("p",null,"With an invalid command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.router1 (router[name=router1])# bad <ctrl-z>\nCommand 'bad' not found (use '?' for help)\nadmin@node1.router1#\n")),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(r.a)({parentName:"ol"},{id:"fn-1"}),"forwarding plan metrics are stored uniquely per worker ",Object(o.b)("inlineCode",{parentName:"li"},"forwarding-core-count"),".",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}m.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=m(n),s=r,d=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);