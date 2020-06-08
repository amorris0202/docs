(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{235:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(242)),l={title:"128T Installer 2.2 Release Notes",sidebar_label:2.2},i={id:"release_notes_128t_installer_2.2",title:"128T Installer 2.2 Release Notes",description:"Release 2.2.0",source:"@site/docs/release_notes_128t_installer_2.2.md",permalink:"/docs/release_notes_128t_installer_2.2",lastUpdatedAt:1586829165,sidebar_label:2.2,sidebar:"docs",previous:{title:"128T Installer 2.3 Release Notes",permalink:"/docs/release_notes_128t_installer_2.3"},next:{title:"128T Installer 2.1 Release Notes",permalink:"/docs/release_notes_128t_installer_2.1"}},s=[{value:"Release 2.2.0",id:"release-220",children:[{value:"New Features and Improvements",id:"new-features-and-improvements",children:[]},{value:"Caveats",id:"caveats",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"release-220"},"Release 2.2.0"),Object(o.b)("h3",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-55")," Installer supports and installs CentOS 7.5 for 128T Software ")),Object(o.b)("h3",{id:"caveats"},"Caveats"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-106")," - Installer fails due to presense of .repodata\n",Object(o.b)("em",{parentName:"li"},Object(o.b)("strong",{parentName:"em"},"Symptom:"))," Installer fails with",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Failed creating repo database in directory /var/lib/install128t/repos/saved: \n  Temporary repodata directory /var/lib/install128t/repos/saved/.repodata/ already exists!\n")),"  ",Object(o.b)("em",{parentName:"li"},Object(o.b)("strong",{parentName:"em"},"Corrective Action:"))," On the system with the error, remove the directory ",Object(o.b)("inlineCode",{parentName:"li"},"/var/lib/install128t/repos/saved/.repodata/")," and restart the installation")))}p.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);