(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),a=(n(0),n(149)),i={title:"Conductor Deployment Patterns",sidebar_label:"Conductor Deployment"},c={id:"bcp_conductor_deployment",title:"Conductor Deployment Patterns",description:"The 128T conductor is the centralized orchestration platform within a 128T Authority, and maintains (many) persistent connections to each router and its constituent node(s). This document discusses the various  options for deploying the 128T conductor, discussing the relative strengths and drawbacks of each.",source:"@site/docs/bcp_conductor_deployment.md",permalink:"/docs/bcp_conductor_deployment",editUrl:"https://github.com/128technology/docs/tree/master/docs/bcp_conductor_deployment.md",lastUpdatedBy:"Michael Baj",lastUpdatedAt:1582670139,sidebar_label:"Conductor Deployment",sidebar:"docs",previous:{title:"Alarms and Events",permalink:"/docs/events"},next:{title:"LTE Peering",permalink:"/docs/bcp_lte_peering"}},s=[{value:"Universal Considerations",id:"universal-considerations",children:[{value:"POD Design",id:"pod-design",children:[]},{value:"Linux OS Tuning",id:"linux-os-tuning",children:[]},{value:"About <em>Conductor Host Services</em>",id:"about-conductor-host-services",children:[]}]},{value:"Addressing",id:"addressing",children:[{value:"Public Conductor",id:"public-conductor",children:[]},{value:"Public Conductor Behind NAT",id:"public-conductor-behind-nat",children:[]},{value:"Split Horizon Conductor",id:"split-horizon-conductor",children:[]}]},{value:"Conductor Redundancy",id:"conductor-redundancy",children:[{value:"Geographic Redundancy",id:"geographic-redundancy",children:[]}]},{value:"Conductor Access (Router Design)",id:"conductor-access-router-design",children:[{value:"Jekyll/Hyde Access",id:"jekyllhyde-access",children:[]},{value:"In-Band Management",id:"in-band-management",children:[]},{value:"Out-of-Band Management",id:"out-of-band-management",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The 128T conductor is the centralized orchestration platform within a 128T Authority, and maintains (many) persistent connections to each router and its constituent node(s). This document discusses the various  options for deploying the 128T conductor, discussing the relative strengths and drawbacks of each."),Object(a.b)("p",null,"All of the design patterns contained within this document are supported configurations; however, certain designs are discouraged due to their complexity, the number of limitations it imposes on your network design, the functional caveats it imposes, etc. These will be explicitly noted within each section accordingly."),Object(a.b)("p",null,"For each topic, we will discuss items such as:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Any resource requirements (e.g., public internet addresses)"),Object(a.b)("li",{parentName:"ul"},"All corresponding 128T or Linux OS configuration requirements"),Object(a.b)("li",{parentName:"ul"},"When the design pattern is encouraged or discouraged"),Object(a.b)("li",{parentName:"ul"},"Its flexibility and scale")),Object(a.b)("h2",{id:"universal-considerations"},"Universal Considerations"),Object(a.b)("h3",{id:"pod-design"},"POD Design"),Object(a.b)("p",null,"The conductor is the single point of configuration for an array of managed routers; as such, its configuration can grow to be quite large. As the configuration grows larger, the processing time for new configuration moves, adds, and changes grows accordingly. 128 Technology recommends that network deployments be sized to a ratio of 2,000 assets per conductor (where an asset is a single instance of 128T software). I.e., either 1,000 highly available routers comprised of two nodes each, 2,000 standalone nodes, or any combination thereof."),Object(a.b)("p",null,"For large scale deployments exceeding 2,000 assets, the conventional approach is to subdivide the network into PODs \u2013 independently managed networks."),Object(a.b)("h3",{id:"linux-os-tuning"},"Linux OS Tuning"),Object(a.b)("h4",{id:"configuring-firewalld"},"Configuring firewalld"),Object(a.b)("p",null,"When deploying conductor on theInternet, 128 Technology recommends limiting access to the system using ",Object(a.b)("em",{parentName:"p"},"firewalld"),". The basic premise is to restrict inbound access to the public-facing addresses to only allow ports 4505/TCP, 4506/TCP, and 930/TCP. This is generally done by:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Creating a specific firewalld ",Object(a.b)("strong",{parentName:"li"},"zone"),"; e.g., ",Object(a.b)("inlineCode",{parentName:"li"},"conductor")),Object(a.b)("li",{parentName:"ol"},"Creating a firewalld ",Object(a.b)("strong",{parentName:"li"},"service")," for the conductor's salt master, containing TCP ports 4505, 4506; e.g., ",Object(a.b)("inlineCode",{parentName:"li"},"salt-master")),Object(a.b)("li",{parentName:"ol"},"Creating a firewalld ",Object(a.b)("strong",{parentName:"li"},"service")," for the conductor's NETCONF connection, containing TCP port 930; e.g., ",Object(a.b)("inlineCode",{parentName:"li"},"netconf")),Object(a.b)("li",{parentName:"ol"},'Adding the "salt-master" and "netconf" services to the ',Object(a.b)("inlineCode",{parentName:"li"},"conductor")," zone"),Object(a.b)("li",{parentName:"ol"},"Set the public address to be in the ",Object(a.b)("inlineCode",{parentName:"li"},"conductor")," zone")),Object(a.b)("p",null,"128 Technology has developed some salt states to assist with these common configuration steps. Refer to our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/128technology/salt-states/blob/master/setup-firewalld-t128-zone.sls"}),"public Github repo")," for some samples you can use to tune your system accordingly."),Object(a.b)("h4",{id:"hyperthreading"},"Hyperthreading"),Object(a.b)("p",null,"128 Technology recommends enabling hyperthreading for systems operating as conductors, as it may improve performance."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Because 128 Technology ",Object(a.b)("em",{parentName:"p"},"does not")," recommend hyperthreading for nodes running 128T software as a router, please be aware when repurposing a host from conductor to router that hyperthreading should be disabled.")),Object(a.b)("h3",{id:"about-conductor-host-services"},"About ",Object(a.b)("em",{parentName:"h3"},"Conductor Host Services")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Conductor Host Services")," refers to the built-in feature within the 128T software that will generate configuration to simplify the connectivity between routers and their conductor(s). By configuring the ",Object(a.b)("inlineCode",{parentName:"p"},"conductor-address")," field within the 128T's data model, and by indicating which interface(s) on a manged router should be used to connect to conductor, the conductor will automatically generate the supporting configuration infrastructure. This includes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"_conductor_")," service (which will have a trailing sequence number; e.g., ",Object(a.b)("inlineCode",{parentName:"li"},"_conductor_1"),")"),Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("inlineCode",{parentName:"li"},"service-route")," for each ",Object(a.b)("inlineCode",{parentName:"li"},"network-interface")," on each router that has ",Object(a.b)("inlineCode",{parentName:"li"},"conductor")," set to ",Object(a.b)("inlineCode",{parentName:"li"},"true"))),Object(a.b)("p",null,"The Conductor Host Services feature forms the basis for the majority of the conductor design patterns described in this document, and should be leveraged whenever possible."),Object(a.b)("h2",{id:"addressing"},"Addressing"),Object(a.b)("h3",{id:"public-conductor"},"Public Conductor"),Object(a.b)("p",null,"The most conventional deployment model is where the conductor is reachable on a public IPv4 address, and all managed nodes have direct access to it via one or more WAN connections. This is the simplest of all deployment schemes, as it allows you to leverage the global ",Object(a.b)("inlineCode",{parentName:"p"},"conductor-address")," fields within the 128T data model to unambiguously define the conductor targets across the entire population of router nodes."),Object(a.b)("p",null,"This deployment model is recommended when possible."),Object(a.b)("p",null,"Configuration required:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"config auth conductor-address [public address of conductor]\nconfig auth router r1 node n1 device-interface WAN network-interface WAN0 conductor true\n")),Object(a.b)("h3",{id:"public-conductor-behind-nat"},"Public Conductor Behind NAT"),Object(a.b)("p",null,'Another common model is a deployment where the conductor is behind a static NAT/firewall, which is forwarding to a private address assigned to the conductor. When placing the conductor behind a static NAT/firewall (effectively giving it a public IP address), be mindful of whether the NAT/firewall supports "hairpinning." (Hairpinning is when a device sends packets to the public IP address of a NAT that it sits behind.) This is because a conductor\'s salt-minion will connect to its own salt master, and will attempt to do so at the same IP address that all external minions connect to. If the NAT does not support hairpinning, then follow the steps outlined below in the section on ',Object(a.b)("em",{parentName:"p"},"Split Horizon Conductor"),"."),Object(a.b)("h4",{id:"port-forwarding"},"Port Forwarding"),Object(a.b)("p",null,"When deploying a conductor behind a firewall, open 930/TCP (used for NETCONF) and 4505-4506/TCP (used for salt) to allow a conductor to communicate to managed routers. Open 443/TCP for the web UI, and 22/TCP for remote SSH."),Object(a.b)("h3",{id:"split-horizon-conductor"},"Split Horizon Conductor"),Object(a.b)("p",null,'A "split horizon" conductor is one that has IP presence on more than one broadcast domain, and where it is contacted on multiple IP addresses by different subsets of the overall population. (E.g., when a conductor resides in a data center coresident with head end routers, and external routers address the conductor on a public IP address while the data center routers address it using a LAN or management IP address.)'),Object(a.b)("p",null,"When deploying a split horizon conductor, there are two options: use the 128T's native ",Object(a.b)("em",{parentName:"p"},"Conductor Host Services")," using the public conductor's address (with some exceptions, as noted below), or manually define conductor services. Each of these will be defined further here."),Object(a.b)("h4",{id:"using-conductor-host-services"},"Using Conductor Host Services"),Object(a.b)("p",null,"Despite the router population having multiple distinct targets for a single conductor, it is nevertheless possible to use authority-wide, fixed addresses in the 128T configuration, yet have the routers forward to different targets. This leverages the Linux ",Object(a.b)("em",{parentName:"p"},"firewalld")," process."),Object(a.b)("p",null,"This design is recommended when the majority of the router population uses one address (typically a public address), and a minority of the router population access the same conductor at a second address (typically a private address). In this design, you should configure the authority-wide ",Object(a.b)("inlineCode",{parentName:"p"},"conductor-address")," as the address that is to be used by the majority of the routers. For the subset of routers that will use a second address, we'll perform a NAT function."),Object(a.b)("p",null,"Within each Linux host on the minority set of routers, use the following ",Object(a.b)("inlineCode",{parentName:"p"},"firewall-cmd")," command (all on one line):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"firewall-cmd --permanent --direct --add-rule ipv4 nat OUTPUT 0 -d <public IP> -j \n    DNAT --to-destination <private IP>\n")),Object(a.b)("p",null,"This command will set a persistent ",Object(a.b)("inlineCode",{parentName:"p"},"firewalld")," rule that will translate packets sent from ",Object(a.b)("inlineCode",{parentName:"p"},"<public IP>")," on output, and instead send them to ",Object(a.b)("inlineCode",{parentName:"p"},"<private IP>"),". The application(s) (i.e., ",Object(a.b)("inlineCode",{parentName:"p"},"persistentDataManager")," and ",Object(a.b)("inlineCode",{parentName:"p"},"salt-minion"),") will believe they're sending packets to ",Object(a.b)("inlineCode",{parentName:"p"},"<public IP>"),", but ",Object(a.b)("inlineCode",{parentName:"p"},"firewalld")," will rewrite them and send them to ",Object(a.b)("inlineCode",{parentName:"p"},"<private IP>")," instead."),Object(a.b)("h4",{id:"manually-defining-conductor-services"},"Manually Defining Conductor Services"),Object(a.b)("p",null,"Rather than use the built-in conductor services feature, you can \"roll your own\" conductor services by manually defining a conductor service. For the purposes of this example, we'll assume your conductor has two appearances: one on the public internet, and a second on a LAN. We'll need to define a ",Object(a.b)("inlineCode",{parentName:"p"},"conductor")," service that contains both IP addresses, and the various ports used for the routers to connect to it."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," It is possible to split the conductor service into separate services for each address, and set the ",Object(a.b)("inlineCode",{parentName:"p"},"applies-to")," for the service to the various populations. E.g., all of your data center routers can be in a ",Object(a.b)("inlineCode",{parentName:"p"},"router-group"),' named "dc-routers" and your branch locations can be in a ',Object(a.b)("inlineCode",{parentName:"p"},"router-group"),' named "branch". Then you can have a ',Object(a.b)("inlineCode",{parentName:"p"},"service")," defined for the local address with ",Object(a.b)("inlineCode",{parentName:"p"},"applies-to")," set to ",Object(a.b)("inlineCode",{parentName:"p"},"dc-routers"),", and a second ",Object(a.b)("inlineCode",{parentName:"p"},"service")," defined for the public address with ",Object(a.b)("inlineCode",{parentName:"p"},"applies-to")," set to ",Object(a.b)("inlineCode",{parentName:"p"},"branch"),".")),Object(a.b)("p",null,"Once the services are defined, you'll also need to create ",Object(a.b)("inlineCode",{parentName:"p"},"service-route")," configuration for each router, to reach the conductor service."),Object(a.b)("h5",{id:"linux-configuration"},"Linux Configuration"),Object(a.b)("p",null,"Each of the routers using the manually-defined conductor service will need to be initialized with the appropriate conductor address. (This will set the ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/128technology/global.init")," and ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/salt/minion")," files to their appropriate values.)"),Object(a.b)("h2",{id:"conductor-redundancy"},"Conductor Redundancy"),Object(a.b)("p",null,"Most production deployments include redundant conductor nodes. When deployed as a highly available pair, conductor nodes are always run as ",Object(a.b)("em",{parentName:"p"},"active/active"),", with all managed routers connecting to both. Unlike highly available routers, there is no notion of interface takeover with conductors; each conductor node is given a unique IP address reachable by all devices at all times."),Object(a.b)("h3",{id:"geographic-redundancy"},"Geographic Redundancy"),Object(a.b)("p",null,"Highly available conductors run as active/active, and have ongoing needs for state synchronization between one another. For this reason, 128 Technology requires that the network between geographically separated conductors have ",Object(a.b)("em",{parentName:"p"},"latency of no more than 100ms"),", and ",Object(a.b)("em",{parentName:"p"},"packet loss no greater than 1%"),"."),Object(a.b)("h2",{id:"conductor-access-router-design"},"Conductor Access (Router Design)"),Object(a.b)("h3",{id:"jekyllhyde-access"},"Jekyll/Hyde Access"),Object(a.b)("p",null,'A critical design consideration when configuring 128T routers to talk to the conductor is referred to as the "Jekyll/Hyde" problem: the system daemons that require connectivity to the 128T conductor must have persistent access whether the 128T router application is running or not. As starting the 128T application will typically have an (intentional) impact on that host platform\'s routing behavior, administrators must be aware of two distinct behaviors: the routing configuration in Linux while 128T is stopped ("Dr. Jekyll"), and the routing configuration in Linux while 128T is running ("Mr. Hyde"). Fortunately, the 128T software has facilities to create most, if not all of the requisite configuration.'),Object(a.b)("p",null,"When using ",Object(a.b)("em",{parentName:"p"},"Conductor Host Services")," to create your configuration for a router to reach the conductor, the 128T configuration generator will create all of the necessary infrastructure (within both 128T as well as the host platform) to connect to the conductor on the interfaces you've specified. It does so by creating a ",Object(a.b)("em",{parentName:"p"},"KNI")," (Kernel Network Interface), which is a network interface that connects between the Linux kernel and the 128T software."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," You must also specify ",Object(a.b)("em",{parentName:"p"},"conductor=true")," on one of your network-interface configuration elements, in order for the 128T to recognize which egress path(s) to use.")),Object(a.b)("p",null,"The KNI (named ",Object(a.b)("inlineCode",{parentName:"p"},"kni254"),') shuttles packets back and forth between the Linux processses (salt, secureCommunicationManager) and the 128T routing domain. Conductor Host Services will install specific, /32 routes to one or two conductor addresses, using the local KNI address (169.254.127.126) as its next-hop. Those will be sent "up" to the 128T routing domain, where they will match the generated ',Object(a.b)("inlineCode",{parentName:"p"},"_conductor_")," service(s), and follow the service-route out of the specified interface."),Object(a.b)("h3",{id:"in-band-management"},"In-Band Management"),Object(a.b)("p",null,"The term ",Object(a.b)("em",{parentName:"p"},"in-band management"),' in the context of conductor connectivity refers to the use of a forwarding interface by a router node for reaching the conductor. I.e., there is no dedicated interface specifically for the conductor to "manage" the node. As most 128T deployments separate the remote sites from the conductor over a WAN, it is exceedingly common to leverage in-band management between a remote node and a conductor. For SDWAN deployments, in-band management is ',Object(a.b)("em",{parentName:"p"},"strongly recommended"),", for the branch locations. For head end systems that are colocated with the conductors, out-of-band management is preferable, assuming there are sufficent free interfaces on the chosen head end hardware platform."),Object(a.b)("h3",{id:"out-of-band-management"},"Out-of-Band Management"),Object(a.b)("p",null,"Routing nodes are said to leverage ",Object(a.b)("em",{parentName:"p"},"out-of-band management")," when they have a dedicated interface for the traffic to reach the conductor. Out-of-band management is generally only feasible when a conductor is colocated with the routing nodes, as is commonly the case at a head end data center."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," It is possible to have a dedicated out-of-band management interface on branch locations, but this connection will almost certainly ultimately ride over the same device's WAN connection to the conductor. I.e., the management traffic will egress one interface on the device and be sent back to another interface on the same device. As such, the in-band management model is more suitable, as it avoids unnecessary hops.")))}l.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,p=u["".concat(i,".").concat(h)]||u[h]||b[h]||a;return n?r.a.createElement(p,c({ref:t},d,{components:n})):r.a.createElement(p,c({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);