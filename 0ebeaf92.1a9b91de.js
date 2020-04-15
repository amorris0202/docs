(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(11),o=(r(0),r(224)),i={title:"Creating a Bootable USB from ISO",sidebar_label:"Creating Bootable USB"},c={id:"intro_creating_bootable_usb",title:"Creating a Bootable USB from ISO",description:"## Introduction",source:"@site/docs/intro_creating_bootable_usb.md",permalink:"/docs/intro_creating_bootable_usb",lastUpdatedAt:1586877354,sidebar_label:"Creating Bootable USB",sidebar:"docs",previous:{title:"Quick Start from Bootable ISO",permalink:"/docs/intro_ztp"},next:{title:"Upgrading the 128T Networking Platform",permalink:"/docs/intro_upgrading"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Windows",id:"windows",children:[{value:"Prequisites",id:"prequisites",children:[]},{value:"Procedure",id:"procedure",children:[]}]},{value:"OSX",id:"osx",children:[]},{value:"System Preparation",id:"system-preparation",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],s={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"128 Technology distributes its software as a set of RPM packages, an ISO or a container.  The ISO is most commonly used to stage a system when it does not have an operating system or if the system is being repurposed as a 128T."),Object(o.b)("p",null,"The goal of this guide is produce a bootable USB drive from a 128T ISO."),Object(o.b)("p",null,"The first step is to acquire an ISO of the version of software that is intended to be loaded onto the bootable USB media following the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/intro_downloading_iso"}),"download instructions"),"."),Object(o.b)("h2",{id:"windows"},"Windows"),Object(o.b)("h3",{id:"prequisites"},"Prequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Rufus software ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rufus.akeo.ie/downloads/"}),"https://rufus.akeo.ie/downloads/")," ",Object(o.b)("sup",Object(n.a)({parentName:"li"},{id:"fnref-1"}),Object(o.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(o.b)("li",{parentName:"ul"},"Verify in system BIOS that the USB drive is listed in the boot priority properly")),Object(o.b)("h3",{id:"procedure"},"Procedure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Launch Rufus"),Object(o.b)("li",{parentName:"ul"},"Select the USB Device"),Object(o.b)("li",{parentName:"ul"},'Select "MBR partition scheme for BIOS or UEFI"'),Object(o.b)("li",{parentName:"ul"},"Select the 128T ISO"),Object(o.b)("li",{parentName:"ul"},'Click "Start"'),Object(o.b)("li",{parentName:"ul"},'Select "Write in ISO image mode"'),Object(o.b)("li",{parentName:"ul"},'Click "OK"')),Object(o.b)("h2",{id:"osx"},"OSX"),Object(o.b)("p",null,"Creating a bootable ISO from OS is straightforward.  The only requirements are that you need administrative privileges to the system."),Object(o.b)("p",null,"Locate the USB volume name of the target drive (in this example, \u201cdisk2s1\u201d) with the ",Object(o.b)("inlineCode",{parentName:"p"},"diskutil")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"diskutil list\n")),Object(o.b)("p",null,"Once you have identified the target USB device, ensure that you have ISO already copied onto the machine creating the bootable USB.  This example uses ",Object(o.b)("inlineCode",{parentName:"p"},"128T-OTP-4.2.4-1.el7.x86_64.iso")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo diskutil unmount /dev/disk2s1\nsudo dd if=~/128T-OTP-4.2.4-1.el7.x86_64.iso of=/dev/rdisk2 bs=16384\ndiskutil eject /dev/disk2s1\n")),Object(o.b)("h2",{id:"system-preparation"},"System Preparation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ensure that the platform meets minimal 128T hardware requirements"),Object(o.b)("li",{parentName:"ul"},"BIOS configured to boot off from USB drive first")),Object(o.b)("h2",{id:"further-resources"},"Further Resources"),Object(o.b)("p",null,"Additional information on other available possible USB bootable creation tools can be found here as well:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/"}),"https://www.pcsteps.com/1461-create-linux-installation-usb-dvd/")),Object(o.b)("div",{className:"footnotes"},Object(o.b)("hr",{parentName:"div"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"tested on version 2.18.1213",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,O=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return r?a.a.createElement(O,c({ref:t},s,{components:r})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);