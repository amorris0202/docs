(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(9),r=(n(0),n(238)),o={title:"Linux Host Networking Through 128T",sidebar_label:"Linux Host Networking"},c={id:"concepts_linux_host_networking",title:"Linux Host Networking Through 128T",description:"The 128T software is a set of daemons (processes) that run within a Linux operating system. There are many standard Linux components leveraged by 128T (e.g., NTP, sshd, dnf, etc.) that require network access. These components (hereafter referred to as host components) will send traffic via Linux's routing table unless instructed otherwise. This document describes the best practice for routing that traffic from the underlying Linux host operating system into the 128T routing domain, for subsequent traffic forwarding using the 128T paradigm.",source:"@site/docs/concepts_linux_host_networking.md",permalink:"/docs/concepts_linux_host_networking",lastUpdatedAt:1586600121,sidebar_label:"Linux Host Networking",sidebar:"docs",previous:{title:"Interface Types",permalink:"/docs/concepts_interface_types"},next:{title:"Forwarding Plane Separation",permalink:"/docs/concepts_network_planes"}},s=[{value:"Basic Configuration",id:"basic-configuration",children:[{value:"Advanced Configuration",id:"advanced-configuration",children:[]},{value:"KNI VLAN",id:"kni-vlan",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The 128T software is a set of daemons (processes) that run within a Linux operating system. There are many standard Linux components leveraged by 128T (e.g., NTP, sshd, dnf, etc.) that require network access. These components (hereafter referred to as ",Object(r.b)("em",{parentName:"p"},"host components"),") will send traffic via Linux's routing table unless instructed otherwise. This document describes the best practice for routing that traffic from the underlying Linux host operating system into the 128T routing domain, for subsequent traffic forwarding using the 128T paradigm."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When running on the host platform, the 128T has its own routing table in addition to the one that is running within Linux."))),Object(r.b)("p",null,"This document applies specifically to 128T routers. The 128T conductor does not require any special configuration to affect Linux host networking, since it does not forward packets using any technique other than Linux host networking to begin with."),Object(r.b)("h2",{id:"basic-configuration"},"Basic Configuration"),Object(r.b)("p",null,"To forward traffic between Linux and 128T, we will use an interface type known as a ",Object(r.b)("em",{parentName:"p"},"Kernel Network Interface"),", or KNI. This is used to connect userspace applications with kernel networking."),Object(r.b)("p",null,'By default, the 128T creates a KNI interface ("kni254") that is used to route packets to Linux as part of its ',Object(r.b)("em",{parentName:"p"},"host-service")," configuration. (A host-service is configured on a network-interface, and is used to forward various traffic types such as SSH and HTTP/HTTPS to Linux applications.) This kni254 interface is, by default, only used for inbound traffic (from Linux to the 128T) for host-services. By following the steps below, we can leverage the kni254 interface to send outbound traffic to 128T."),Object(r.b)("p",null,"Create services (or modify existing services) for network access, adding an ",Object(r.b)("inlineCode",{parentName:"p"},"access-policy")," that permits the tenant ",Object(r.b)("inlineCode",{parentName:"p"},"_internal_"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"_internal_")," tenant is associated with all inbound requests arriving from Linux to 128T via kni254."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'service  internet\n    name                  internet\n    description           "internet reachability"\n    scope                 private\n    security              internal\n    address               0.0.0.0/0\n       \n    access-policy         guest\n        source      guest\n        permission  allow\n    exit\n    access-policy         trusted\n        source      trusted\n        permission  allow\n    exit\n    access-policy         _internal_\n        source      _internal_\n        permission  allow\n    exit\n    share-service-routes  false\nexit\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Traffic originating from Linux and traveling through a KNI interface will have a source address of 169.254.127.127, which is a ",Object(r.b)("em",{parentName:"p"},"link-local")," address. You must ensure that ",Object(r.b)("inlineCode",{parentName:"p"},"source-nat")," is enabled on the egress interface used to carry this traffic out of the 128T platform."))),Object(r.b)("h3",{id:"advanced-configuration"},"Advanced Configuration"),Object(r.b)("p",null,"If you want to selectively forward via 128T, you can edit  ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/route-kni254")," from its default route of  ",Object(r.b)("inlineCode",{parentName:"p"},"0.0.0.0/0")," with any address/prefix you wish. Additionally, you can edit the ",Object(r.b)("inlineCode",{parentName:"p"},"route-kni254")," file to contain as many individual route statements as you like; it is important to only edit this file while 128T is stopped, however, since 128T will cache the contents of the file when it starts, and restore the copy it cached when software is stopped."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Stop 128T software on a given router. There are many ways to accomplish this, one of which is to type ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl stop 128T")," from the Linux shell prompt.",Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You must ensure you are in a position to access the Linux subsystem on a 128T router even when 128T software is not running.")))),Object(r.b)("li",{parentName:"ol"},"Add a route to the internet in a route file associated with ",Object(r.b)("inlineCode",{parentName:"li"},"kni254")," (the following should all be typed on one line):",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sudo echo 0.0.0.0/0 via 169.254.127.126 dev kni254 metric 200 > /etc/sysconfig/network-scripts/route-kni254\n"))),Object(r.b)("li",{parentName:"ol"},"Start 128T software: ",Object(r.b)("inlineCode",{parentName:"li"},"sudo systemctl start 128T"))),Object(r.b)("h3",{id:"kni-vlan"},"KNI VLAN"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"host")," device-interface can be configured with a vlan-enabled network interface.  Doing so creates a unique linux interface that is managed for each network-interface, but only one underlying KNI will be created on the system. If there is no non-vlan network-interface on the device-interface, an implicit underlying \u201cbase\u201d interface is instantiated for the KNI, and linux VLAN interfaces are stacked on it."),Object(r.b)("p",null,"Output reflecting KNI interfaces with a VLAN of 200 configured:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@t124-dut1.Fabric128# show device-interface\nSat 2019-02-16 18:45:18 UTC\n\n========================================\n t124-dut1:dev12\n========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         b2:9c:1f:9a:d9:7a\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n\n in-octets:                        2816\n in-unicast-pkts:                    38\n in-errors:                           0\n out-octets:                          0\n out-unicast-pkts:                    0\n out-errors:                          0\n\n network-interfaces:\n   dev12:\n     base state:      good\n   dev12.200:\n     vlan state:      good\n\nCompleted in 0.24 seconds\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"admin@t124-dut1.Fabric128# show platform device-interfaces\nSat 2019-02-16 18:45:56 UTC\n\n===============================================================\n t124-dut1\n===============================================================\n ----------------------------\n Device Interface Information\n ----------------------------\n\n Name:                     dev12\n Manufacturer:\n Description:\n Driver:\n Driver Version:           unavailable\n Speed:\n PCI Address:\n MAC Address:              be:0c:c2:1e:79:be\n Firmware Version:         unavailable\n Statistics Supported:     unavailable\n Test Info Supported:      unavailable\n EEPROM Access Supported:  unavailable\n Register Dump Supported:  unavailable\n network-interfaces:\n   dev12:\n     base info:            good\n   dev12.200:\n     vlan info:            good\n\nCompleted in 1.29 seconds\n")))}l.isMDXComponent=!0},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);