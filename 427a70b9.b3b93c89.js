(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(11),o=(n(0),n(224)),i={title:"Open Shortest Path First (OSPF)",sidebar_label:"OSPF"},s={id:"config_ospf",title:"Open Shortest Path First (OSPF)",description:"The goal of this guide is to provide guidance for implementing OSPF on the 128T Networking Platform. The OSPF feature enables a dynamic and flexible integration of SVR in customer networks.",source:"@site/docs/config_ospf.md",permalink:"/docs/config_ospf",lastUpdatedAt:1586364891,sidebar_label:"OSPF",sidebar:"docs",previous:{title:"Network Address Translation (NAT)",permalink:"/docs/config_nat"},next:{title:"Simple Network Management Protocol (SNMP)",permalink:"/docs/config_snmp"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"OSPF Configuration",id:"ospf-configuration",children:[]},{value:"Configuration Verification",id:"configuration-verification",children:[]},{value:"OSPF Troubleshooting Steps",id:"ospf-troubleshooting-steps",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal of this guide is to provide guidance for implementing OSPF on the 128T Networking Platform. The OSPF feature enables a dynamic and flexible integration of SVR in customer networks.\nOpen Shortest Path First (OSPF) is an interior gateway protocol (IGP) that is most often used to dynamically manage network routes in large enterprise network. It determines routes  dynamically by obtaining information from other routers and advertising routes to other routers by way of Link State Advertisements (LSAs). The information gathered from the LSAs is used to construct a topology map of the network. This topology map is shared across routers in the network and used to populate the IP routing table with available routes."),Object(o.b)("p",null,"Learning routes from OSPF simplifies enterprise configuration and integration with Secure  Vector Routing."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"This document presumes that the reader has a running 128T system and wants to add configuration to support OSPF. The running 128T system includes configuration for basic platform functionality (e.g., router, node, device-interface, network-interface) and basic routing configuration (e.g., tenants, services, etc.)."),Object(o.b)("h2",{id:"ospf-configuration"},"OSPF Configuration"),Object(o.b)("p",null,"As with BGP and static routes, the OSPF configuration exists within the routing configuration container in the 128T data model. First, we\u2019ll configure the OSPF \u201cinstance\u201d and give it the instance-id of 1."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler# config authority\n*admin@labsystem1.fiedler (authority)# router burlington *admin@labsystem1.fiedler (router[name=burlington])# routing default-instance *admin@labsystem1.fiedler (routing[type=default-instance])# ospf 1\n*admin@labsystem1.fiedler (ospf[instance=1])# show\ninstance 1\n")),Object(o.b)("p",null,"Next we\u2019ll configure a router-id. Typically, the highest router-id on the network becomes the designated router for the network."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler (ospf[instance=1])# router-id 192.0.2.1\n*admin@labsystem1.fiedler (ospf[instance=1])# show\ninstance 1\nrouter-id 192.0.2.1\n")),Object(o.b)("p",null,"Next we\u2019ll configure an OSPF area and put interfaces into that area. The area is in the format x.x.x.x; for example, area 0 is configured as 0.0.0.0. Interfaces, as they are in other areas of the system, require the node name that contains the interface and the interface\u2019s name."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If adding an interface that is part of a highly available set (e.g., they share the same MAC address and global ID), it is important that you only add one of the interfaces into the area. This will be sufficient to achieve high availability, as the 128T software will map the \u201cshared\u201d interface into the area."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler (ospf[instance=1])# area 0.0.0.0\n*admin@labsystem1.fiedler (area[id=0.0.0.0])# interface labsystem5 lan0\n*admin@labsystem1.fiedler (interface[node=labsystem5][interface=lan0])# exit\n*admin@labsystem1.fiedler (area[id=0.0.0.0])# exit\n*admin@labsystem1.fiedler (ospf[instance=1])# show\ninstance 1\nrouter-id 192.0.2.1\narea 0.0.0.0\nid 0.0.0.0\n       interface  labsystem5 lan0\n       node       labsystem5\n       interface lan0\n       exit\nexit\n")),Object(o.b)("p",null,"Next, we can optionally elect to have the 128T redistribute connected routes, static routes, BGP routes, or service routes into OSPF. This is done with one or more \u201credistribute\u201d elements within the OSPF instance. (Within each of these redistribute elements you can specify metrics, metric-type, and policies to apply to the redistributed routes.)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler (ospf[instance=1])# redistribute bgp\n*admin@labsystem1.fiedler (redistribute[protocol=bgp])#\n*admin@labsystem1.fiedler (redistribute[protocol=bgp])# up\n*admin@labsystem1.fiedler (ospf[instance=1])# redistribute static\n*admin@labsystem1.fiedler (redistribute[protocol=static])# up\n*admin@labsystem1.fiedler (ospf[instance=1])# show\ninstance      1\nrouter-id     192.0.2.1\n\narea          0.0.0.0\n       id            0.0.0.0\n\n       interface  labsystem5 lan0\n       node       labsystem5\n       interface  lan0\n       exit\nexit\n\nredistribute  bgp\n       protocol  bgp\nexit\n\nredistribute  static\n       protocol  static\nexit\n")),Object(o.b)("p",null,"To enable service routing (service-route elements) to leverage the learned routes that a 128T has exchanged via OSPF (or any routing protocol), the \u201cuse-learned-routes\u201d selector should be enabled in the appropriate service-route configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*admin@labsystem1.fiedler (router[name=burlington])# service-route rte_internet\n*admin@labsystem1.fiedler (service-route[name=rte_internet])# use-learned-routes\n*admin@labsystem1.fiedler (service-route[name=rte_internet])# show\nname rte_internet\nservice-name internet\nuse-learned-routes\n")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/config_ospf.png",alt:"OSPF Topology"}))),Object(o.b)("h2",{id:"configuration-verification"},"Configuration Verification"),Object(o.b)("p",null,"Several \u201cshow\u201d commands are available in the PCLI to display information about the state of the OSP protocol. In addition to the \u201cshow ospf\u201d branch of output, you will now see contributions to the RIB from OSPF in the output of \u201cshow rib\u201d."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@labsystem1.fiedler# show ospf\nusage: ospf [area <area-id>] [router <router>] [<verbosity>]\n\nShow general information about OSPF\n\nkeyword arguments:\narea   the area to filter OSPF information for\nrouter the router to request OSPF information from\n\npositional arguments:\nverbosity    detail | summary (default: summary)\n\nsubcommands:\nborder-routers    Show information about the OSPF border routers\ndatabase          Show OSPF database information\ninterfaces        Show information about the OSPF interfaces\nneighbors         Show information about OSPF neighbors\nroutes            Show information about the OSPF routes\n")),Object(o.b)("h2",{id:"ospf-troubleshooting-steps"},"OSPF Troubleshooting Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Verify OSPF router information (show ospf detail or show ospf summary)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Check the area"),Object(o.b)("li",{parentName:"ol"},"Check for adjacency"))),Object(o.b)("li",{parentName:"ol"},"Verify OSPF interface ( show ospf interface)"),Object(o.b)("li",{parentName:"ol"},"Verify OSPF neighbors (show ospf neighbors)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Check state FULL for each neighbor"),Object(o.b)("li",{parentName:"ol"},"Verify which router is the designated router"))),Object(o.b)("li",{parentName:"ol"},"Verify RIB (show rib or show ospf routes)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Routes beginning with O are OSPF routes"))),Object(o.b)("li",{parentName:"ol"},"Verify FIB ( show fib)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"FIB entry has the appropriate next hop")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@128tconductor-node.128TConductor# show ospf router 128TRouter summary\nSat 2018-10-20 17:48:29 UTC\n\n================== =============== ========== ======== =========== ========= =========== ========\nRouter              Router ID       ABR Type   ASBR     External    Area ID   Area Type   Area\n                                               Router   LSA Count                         Border\n                                                                                          Router\n================== =============== ========== ======== =========== ========= =========== ========\n128TRouter          10.52.113.128   unknown    true     84          0.0.0.0\n\nCompleted in 0.66 seconds\nadmin@128tconductor-node.128TConductor#\n\n*admin@128tconductor-node.128TConductor# show ospf router 128TRouter detail\nSat 2018-10-20 17:46:27 UTC\n\n=============================================================\n Router 128TRouter\n=============================================================\n  Router ID:                             10.10.10.128\n  Deferred Shutdown:                     0.0 s\n  RFC1583 Compatible:                    false\n  Stub Advertisement Enabled:            false\n  Opaque Capable:                        false\n  Post-Start Enabled:                    0.0 s\n  Pre-Shutdown Enabled:                  0.0 s\n  SPF Schedule Delay:                    0.0 s\n  Holdtime Minimum:                      50 ms\n  Holdtime Maximum:                      5000 ms\n  Holdtime Multiplier:                   1\n  SPF Last Executed:                     -1d 17h 56m 15s ago\n  SPF Last Duration:                     0 ms\n  SPF Has Not Run:                       false\n  SPF Timer Due:                         0.0 s\n  LSA Minimum Interval:                  5.0 s\n  LSA Minimum Arrival:                   1.0 s\n  Write Multiplier:                      20\n  Refresh Timer:                         10.0 s\n  ABR Type:                              unknown\n  ASBR Router:                           true\n  External LSA Count:                    84\n  External LSA Checksum:                 0x002c4b5a\n  Opaque AS LSA Count:                   0\n  Opaque AS LSA Checksum:                0x00000000\n  Attached Area Count:                   1\n  Adjacency Changes Logged:              false\n  Adjacency Changes Logged (all):        false\n  Area:\n    Area ID:                             0.0.0.0\n    Backbone:                            true\n    Interface Total Count:               1\n    Interface Active Count:              1\n    Fully Adjacent Neighbor Count:       1\n    Authentication:                      none\n    Passing Fully Virtual Adjacencies:   0\n    SPF Executed Count:                  4\n    LSA Count:                           3\n    LSA Router Count:                    2\n    LSA Router Checksum:                 0x0000c2b1\n    LSA Network Count:                   1\n    LSA Network Checksum:                0x0000c606\n    LSA Summary Count:                   0\n    LSA Summary Checksum:                0x00000000\n    LSA ASBR Count:                      0\n    LSA ASBR Checksum:                   0x00000000\n    LSA NSSA Count:                      0\n    LSA NSSA Checksum:                   0x00000000\n    LSA Opaque Link Count:               0\n    LSA Opaque Link Checksum:            0x00000000\n    LSA Opaque Area Count:               0\n    LSA Opaque Area Checksum:            0x00000000\n    \nCompleted in 0.58 seconds\nadmin@128tconductor-node.128TConductor#\n\nadmin@128tconductor-node.128TConductor# show ospf database router 128TRouter\nSat 2018-10-20 03:21:52 UTC\n\n============ ============= ============= ============== ============= ===== ============\n Router       Area ID       Type          LSA ID         Advertising   Age   Sequence\n                                                         Router              Number\n============ ============= ============= ============== ============= ===== ============\n 128TRouter   0.0.0.0       Router        10.10.10.128   10.10.10.128  617   0x8000000e\n 128TRouter   0.0.0.0       Router        10.10.10.1     10.10.10.1    385   0x80000017\n 128TRouter   0.0.0.0       Network       10.58.0.0      10.10.10.1    641   0x80000003\n 128TRouter   unavailable   AS_External   10.0.0.0       10.10.10.128  607   0x80000006\n 128TRouter   unavailable   AS_External   10.1.254.96    10.10.10.128  597   0x80000006\n 128TRouter   unavailable   AS_External   10.10.60.0     10.10.10.128  597   0x80000006\n 128TRouter   unavailable   AS_External   10.10.220.0    10.10.10.128  587   0x80000006\n 128TRouter   unavailable   AS_External   10.10.221.0    10.10.10.128  607   0x80000006\n 128TRouter   unavailable   AS_External   10.10.225.0    10.10.10.128  617   0x80000006\n 128TRouter   unavailable   AS_External   10.10.226.0    10.10.10.128  607   0x80000006\n 128TRouter   unavailable   AS_External   10.10.252.0    10.10.10.128  627   0x80000006\n 128TRouter   unavailable   AS_External   10.52.0.0      10.10.10.128  627   0x80000006\n")))}u.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return n?a.a.createElement(p,s({ref:t},c,{components:n})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);