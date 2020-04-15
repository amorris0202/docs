(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{206:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(11),o=(t(0),t(224)),i={title:"GRE Plugin",sidebar_lable:"GRE"},c={id:"plugin_gre",title:"GRE Plugin",description:"The 128T GRE plugin can be used for creating IPv4 GRE tunnels between a 128T router and a remote GRE tunnel destination. For services such as Zscaler, this provides better throughput compared to other tunneling mechanisms.",source:"@site/docs/plugin_gre.md",permalink:"/docs/plugin_gre",lastUpdatedAt:1585147876,sidebar:"docs",previous:{title:"128T Monitoring Agent",permalink:"/docs/plugin_monitoring_agent"},next:{title:"128T-4.2.0",permalink:"/docs/api_rest_4.2.0"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Remote GRE tunnel information",id:"remote-gre-tunnel-information",children:[]},{value:"128T services to transport over the tunnel",id:"128t-services-to-transport-over-the-tunnel",children:[]},{value:"WAN interfaces for sending the tunnel packets",id:"wan-interfaces-for-sending-the-tunnel-packets",children:[]}]},{value:"Debugging &amp; Troubleshooting",id:"debugging--troubleshooting",children:[{value:"Config Generation",id:"config-generation",children:[]},{value:"GRE Tunnel not working on the router",id:"gre-tunnel-not-working-on-the-router",children:[]},{value:"Tunnel operation",id:"tunnel-operation",children:[]}]}],s={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The 128T GRE plugin can be used for creating IPv4 GRE tunnels between a 128T router and a remote GRE tunnel destination. For services such as Zscaler, this provides better throughput compared to other tunneling mechanisms."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"The 128T-gre plugin is available in following versions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"128T-gre-1.0.0: >= 128T-3.2.8, < 128T-4.3.0"),Object(o.b)("li",{parentName:"ul"},"128T-gre-2.0.0: >= 128T-4.3.0")),Object(o.b)("p",null,"It is recommended to use the conductor GUI > Plugins page for installing plugins. This allows the system to select the correct version of plugin based on the 128T version."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# dnf list 128T 128T-gre\nLast metadata expiration check: 5 days, 5:37:52 ago on Wed 18 Mar 2020 08:54:57 PM UTC.\nInstalled Packages\n128T.x86_64         4.2.4-1.el7         @128tech-local-saved\n128T-gre.x86_64     1.0.0-1.el7         @128tech-local-saved\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"After installing the plugin, the 128T service on the conductor should be restarted for the changes to take effect."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The GRE plugin can be configured on an individual router. In order to configure the tunnel, it is important to collect the following information up-front:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remote tunnel information"),Object(o.b)("li",{parentName:"ul"},"Ingress traffic to be sent through the tunnel"),Object(o.b)("li",{parentName:"ul"},"WAN interfaces to be used for sending the tunnel traffic")),Object(o.b)("h3",{id:"remote-gre-tunnel-information"},"Remote GRE tunnel information"),Object(o.b)("h4",{id:"tunnel-information"},"Tunnel information"),Object(o.b)("p",null,"First and foremost, it is important to identify the address and other probe parameter for the remote GRE endpoints."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 gre\n\nconfig\n\n    authority\n\n        router  router1\n            name  router1\n\n            gre\n                enabled       true\n\n                destination   pri-tunnel\n                    name  pri-tunnel\n                    host  20.20.20.13\n                exit\n\n                destination   sec-tunnel\n                    name  sec-tunnel\n                    host  30.30.30.14\n\n                    icmp-keep-alive\n                        enabled             true\n                        link-test-interval  10\n                        number-of-retries          3\n                        retry-interval      1\n                    exit\n                exit\n\n                enabled-node  node1\n                    node-name    node1\n                    tenant       _internal_\n                    destination  pri-tunnel\n                    destination  sec-tunnel\n                exit\n            exit\n        exit\n    exit\nexit\n\nadmin@node1.conductor1#\n")),Object(o.b)("p",null,"In the above example, you will notice there are two tunnels configured on the router. Each ",Object(o.b)("inlineCode",{parentName:"p"},"destination")," represents a single tunnel interface and allows the user to configure an IPv4 address for the destination. The ",Object(o.b)("inlineCode",{parentName:"p"},"enabled-node")," configuration allows the user to control which 128T router node will be operating which tunnel. In addition the ",Object(o.b)("inlineCode",{parentName:"p"},"enabled-node > tenant")," can be used to apply a specific tenant for the GRE tunnel traffic. For each destination on each enabled-node, the 128T router creates a unique KNI interface and the configured tenant is applied to this interface."),Object(o.b)("h4",{id:"tunnel-icmp-health-check-parameters"},"Tunnel ICMP health check parameters"),Object(o.b)("p",null,"The GRE tunnels do not have an inherent mechanism to detect the availability of remote peers.  As a result, the GRE plugin allows the user to configure ICMP probes to the destination. The configuration is enabled by default with the following settings:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"icmp-keep-alive\n    enabled             true\n    link-test-interval  10\n    number-of-retries          3\n    retry-interval      1\nexit\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The time interval for the attributes are in seconds."))),Object(o.b)("p",null,"Every ",Object(o.b)("inlineCode",{parentName:"p"},"link-test-interval")," an icmp check is performed to determine the availability of the remote tunnel peer. When the peer does not respond, a new attempt is made after ",Object(o.b)("inlineCode",{parentName:"p"},"retry-interval"),". After sending the initial ping plus ",Object(o.b)("inlineCode",{parentName:"p"},"number-of-retries")," amount of ping requests, the peer is considered as down. In the above config, assuming an unresponsive peer, first ping is sent at 10 seconds, followed by 3 more pings at 1 second interval each. In total taking the system about 13 seconds and 4 pings to detect a peer as down. Once a peer is considered down, the next attempt to detect the tunnel liveliness is made after 10 seconds (or the ",Object(o.b)("inlineCode",{parentName:"p"},"link-test-interval"),")."),Object(o.b)("p",null,"In the above example, the two tunnels ",Object(o.b)("inlineCode",{parentName:"p"},"pri-tunnel")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sec-tunnel")," create two additional KNI interfaces called ",Object(o.b)("inlineCode",{parentName:"p"},"gre-0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"gre-1")," respectively. When a tunnel is determined to be non-responsive, the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"gre-x")," interfaces are brought down. For example, in the above config, when the ",Object(o.b)("inlineCode",{parentName:"p"},"pri-tunnel")," goes down, the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"gre-0")," interfaces is brought down as well. The significance of this will be made clear in the next sections."),Object(o.b)("h3",{id:"128t-services-to-transport-over-the-tunnel"},"128T services to transport over the tunnel"),Object(o.b)("p",null,"Next step is to identify the the prefix or the subnet to be transported over the tunnel. In some cases, it might be desirable to transport all internet traffic through the tunnel, so the prefix could be as simple as 0.0.0.0/0. This can be done by capturing the prefix in a 128T service and setting the next-hop as the ",Object(o.b)("inlineCode",{parentName:"p"},"gre-x")," interfaces. As noted in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#tunnelicmp_health_check_parameters"}),"previous section"),", each destination on a given node corresponds to a ",Object(o.b)("inlineCode",{parentName:"p"},"gre-x")," inteface. By configuring the next-hop as the appropriate GRE interfaces, it allows the incoming traffic to be service-function chained to a GRE tunnel towards a WAN interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service lan-svc\n\nconfig\n\n    authority\n\n        service  lan-svc\n            name           lan-svc\n            address        10.10.10.0/24\n\n            access-policy  lan\n                source  lan\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route lan-svc-rte-primary\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  lan-svc-rte-primary\n                name          lan-svc-rte-primary\n                service-name  lan-svc\n\n                next-hop      node1 gre-0-intf\n                    node-name   node1\n                    interface   gre-0-intf\n                    gateway-ip  169.254.132.10\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route lan-svc-rte-secondary\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  lan-svc-rte-secondary\n                name          lan-svc-rte-secondary\n                service-name  lan-svc\n\n                next-hop      node1 gre-1-intf\n                    node-name   node1\n                    interface   gre-1-intf\n                    gateway-ip  169.254.132.14\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"In the example above, all the ",Object(o.b)("inlineCode",{parentName:"p"},"lan")," tenant traffic in the ",Object(o.b)("inlineCode",{parentName:"p"},"10.10.10.0/24")," subnet will be sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"gre-0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"gre-1")," network interfaces. These ",Object(o.b)("inlineCode",{parentName:"p"},"gre-x-intf")," are auto generated by the conductor and correspond to the configured destination. In the above config, when the ",Object(o.b)("inlineCode",{parentName:"p"},"gre-0")," interface will be used as primary target for lan subnet while that tunnel is up. If the ",Object(o.b)("inlineCode",{parentName:"p"},"pri-tunnel")," goes down, all new sessions will automatically be routed to the ",Object(o.b)("inlineCode",{parentName:"p"},"sec-tunnel")," via the ",Object(o.b)("inlineCode",{parentName:"p"},"gre-1")," interface."),Object(o.b)("h3",{id:"wan-interfaces-for-sending-the-tunnel-packets"},"WAN interfaces for sending the tunnel packets"),Object(o.b)("p",null,"Another piece of configuration that is auto-generated is the service corresponding to the two configured tunnels. In the above example, the two tunnels ",Object(o.b)("inlineCode",{parentName:"p"},"pri-tunnel")," and ",Object(o.b)("inlineCode",{parentName:"p"},"sec-tunnel")," will trigger two auto-generated services, one for each of the destination. The generated service will look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service gre_router1__internal__0\n\nconfig\n\n    authority\n\n        service  gre_router1__internal__0\n            name                  gre_router1__internal__0\n\n            applies-to            router\n                type         router\n                router-name  router1\n            exit\n\n            transport             gre\n                protocol  gre\n            exit\n\n            transport             icmp\n                protocol  icmp\n            exit\n            address               20.20.20.13\n\n            access-policy         _internal_\n                source      _internal_\n                permission  allow\n            exit\n            share-service-routes  false\n        exit\n    exit\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority service gre_router1__internal__1\n\nconfig\n\n    authority\n\n        service  gre_router1__internal__1\n            name                  gre_router1__internal__1\n\n            applies-to            router\n                type         router\n                router-name  router1\n            exit\n\n            transport             gre\n                protocol  gre\n            exit\n\n            transport             icmp\n                protocol  icmp\n            exit\n            address               30.30.30.14\n\n            access-policy         _internal_\n                source      _internal_\n                permission  allow\n            exit\n            share-service-routes  false\n        exit\n    exit\nexit\n")),Object(o.b)("p",null,"The next step, is to configure the service-routes or other routing configuration for these generated services. Typically, such routes are directed towards the WAN interface and user has full control over how & where this traffic can be routed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route pri_tunnel_rte\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  pri_tunnel_rte\n                name          pri_tunnel_rte\n                service-name  gre_router1__internal__0\n\n                next-hop      node1 dpdk2-wan1-intf\n                    node-name        node1\n                    interface        dpdk2-wan1-intf\n                    source-nat-pool  gre-dpdk2-nat-pool\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 service-route sec_tunnel_rte\n\nconfig\n\n    authority\n\n        router  router1\n            name           router1\n\n            service-route  sec_tunnel_rte\n                name          sec_tunnel_rte\n                service-name  gre_router1__internal__1\n\n                next-hop      node1 dpdk3-wan2-intf\n                    node-name        node1\n                    interface        dpdk3-wan2-intf\n                    source-nat-pool  gre-dpdk3-nat-pool\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("h4",{id:"static-source-nat-considerations"},"Static Source NAT considerations"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For some of the KNI based interfaces such as PPPoE and LTE, the source nat may not be needed"))),Object(o.b)("p",null,"Please note that the ",Object(o.b)("inlineCode",{parentName:"p"},"next-hop")," is making use of a ",Object(o.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," called ",Object(o.b)("inlineCode",{parentName:"p"},"gre-dpdk2-nat-pool")," for example. This nat-pool is necessary for performing a source nat of the GRE tunnel traffic depending on which egress interface are being used. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"network-interface > source-nat")," flag does not support GRE, hence the ",Object(o.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," is required."))),Object(o.b)("p",null,"The sample ",Object(o.b)("inlineCode",{parentName:"p"},"shared-nat-pool")," configuration is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 nat-pool gre-dpdk2-nat-pool\n\nconfig\n\n    authority\n\n        router  router1\n            name      router1\n\n            nat-pool  gre-dpdk2-nat-pool\n                name          gre-dpdk2-nat-pool\n\n                address-pool  20.20.20.12/32\n                    address      20.20.20.12/32\n                    tenant-name  _internal_\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show config running authority router router1 nat-pool gre-dpdk3-nat-pool\n\nconfig\n\n    authority\n\n        router  router1\n            name      router1\n\n            nat-pool  gre-dpdk3-nat-pool\n                name          gre-dpdk3-nat-pool\n\n                address-pool  30.30.30.12/32\n                    address      30.30.30.12/32\n                    tenant-name  _internal_\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(o.b)("h2",{id:"debugging--troubleshooting"},"Debugging & Troubleshooting"),Object(o.b)("h3",{id:"config-generation"},"Config Generation"),Object(o.b)("p",null,"When the plugin is installed on the conductor, each commit triggers two scripts called ",Object(o.b)("inlineCode",{parentName:"p"},"generate_confguration")," and ",Object(o.b)("inlineCode",{parentName:"p"},"generate_pillar")," to auto-generate KNI, services etc and to generate pillar data for each router. Please check the following locations for debugging information."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Logs for the config and pillar generation for each commit can be found here")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/var/log/128technology/plugins/gre-generate-config.log\n/var/lib/128technology/plugins/pillar/gre/<router>.sls\n")),Object(o.b)("h3",{id:"gre-tunnel-not-working-on-the-router"},"GRE Tunnel not working on the router"),Object(o.b)("p",null,"When the config and pillar data are successfully generated, a ",Object(o.b)("inlineCode",{parentName:"p"},"t128-setup-gre")," RPM is installed on the router itself. As part of this process, a script called ",Object(o.b)("inlineCode",{parentName:"p"},"handle_gre_config")," is executed which will create all the necessary config etc on the running system."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Logs for the config generation on the router can be found here")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/var/log/128technology/plugins/gre-handle-config.log\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Debugging the runtime status of the GRE tunnels can be done by monitoring the journal for the following tags")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"journalctl -t /monitoring_script.par -t /init.par\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For debugging the linux network namespace, here are some of the common commands:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# ip netns <name> ip addr\n# ip netns <name> ip route show table all\n# ip netns <name> ip rule list\n")),Object(o.b)("h3",{id:"tunnel-operation"},"Tunnel operation"),Object(o.b)("p",null,"The status of the tunnel and other data is available via the auto generated tunnel interfaces. Here's an example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@node1.conductor1# show device-interface router router1 name pri-tunnel\nTue 2020-03-24 03:22:37 UTC\n\n===========================================\n node1.router1:pri-tunnel\n===========================================\n Type:                host\n Forwarding:          true\n Mode:                host\n MAC Address:         ea:a6:fe:1c:3d:70\n\n Admin Status:        up\n Operational Status:  up\n Redundancy Status:   non-redundant\n Speed:               1000\n\n in-octets:                     6243918\n in-unicast-pkts:                104054\n in-errors:                           0\n out-octets:                    4691030\n out-unicast-pkts:               100393\n out-errors:                          0\n\n GRE::\n   icmp-probe-status:\n     attempts:        45008\n     elapsed:         0.006435333052650094\n     last_attempt:    1585020151.1222534\n     status:          up\n   stats:\n     RX errors::\n       crc:           0\n       fifo:          0\n       frame:         0\n       length:        0\n       missed:        0\n     RX::\n       bytes:         380\n       dropped:       0\n       errors:        0\n       mcast:         0\n       overrun:       0\n       packets:       7\n     TX errors::\n       aborted:       0\n       fifo:          0\n       heartbeat:     0\n       transns:       0\n       window:        0\n     TX::\n       bytes:         692\n       carrier:       106\n       collsns:       4\n       dropped:       0\n       errors:        110\n       packets:       11\n\nCompleted in 0.07 seconds\n")),Object(o.b)("p",null,"In addition, a ",Object(o.b)("inlineCode",{parentName:"p"},"ping-monitor")," service is started for each configured tunnel, the ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl status ping-monitor@<tunnel-name>")," can be used to query the status of the ping service."))}d.isMDXComponent=!0},224:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(h,c({ref:n},s,{components:t})):a.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);