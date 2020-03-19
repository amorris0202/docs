(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(9),r=(n(0),n(174)),o={title:"SNMP",sidebar_label:"SNMP"},s={id:"config_snmp",title:"SNMP",description:"Simple Network Management Protocol (SNMP) is an Internet Standard protocol for collecting and organizing information about managed devices on IP networks and for modifying that information to change device behavior. SNMP is widely used in network management for network monitoring. SNMP exposes management data in the form of variables on the managed systems organized in a management information base (MIB) which describe the system status and configuration.[^1]",source:"@site/docs/config_snmp.md",permalink:"/docs/config_snmp",editUrl:"https://github.com/128technology/docs/tree/master/docs/config_snmp.md",lastUpdatedAt:1584640763,sidebar_label:"SNMP",sidebar:"docs",previous:{title:"Transitioning a Conductor from Standalone to HA",permalink:"/docs/config_transition_standalone_to_ha"},next:{title:"SNMP: User defined metrics",permalink:"/docs/config_snmp_metrics"}},c=[{value:"MIB Definitions",id:"mib-definitions",children:[]},{value:"Basic Configuration",id:"basic-configuration",children:[{value:"Protocol Configuration",id:"protocol-configuration",children:[]},{value:"Access Configuration",id:"access-configuration",children:[]},{value:"Notification Receiver Configuration",id:"notification-receiver-configuration",children:[]}]},{value:"Polling SNMP",id:"polling-snmp",children:[{value:"Routing SNMP Responses",id:"routing-snmp-responses",children:[]},{value:"Polling via Forwarding Interfaces",id:"polling-via-forwarding-interfaces",children:[]}]},{value:"Sample Configuration (Basic)",id:"sample-configuration-basic",children:[]},{value:"Sample Configuration (Via Forwarding Interface)",id:"sample-configuration-via-forwarding-interface",children:[]},{value:"MIB Layout",id:"mib-layout",children:[{value:"T128-MIB.mib",id:"t128-mibmib",children:[]},{value:"T128-ALARM.mib",id:"t128-alarmmib",children:[]},{value:"T128-METRICS.mib",id:"t128-metricsmib",children:[]},{value:"T128-SYSTEM.mib",id:"t128-systemmib",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Simple Network Management Protocol (SNMP) is an Internet Standard protocol for collecting and organizing information about managed devices on IP networks and for modifying that information to change device behavior. SNMP is widely used in network management for network monitoring. SNMP exposes management data in the form of variables on the managed systems organized in a management information base (MIB) which describe the system status and configuration.",Object(r.b)("sup",Object(i.a)({parentName:"p"},{id:"fnref-1"}),Object(r.b)("a",Object(i.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),Object(r.b)("p",null,"The 128T implementation of SNMP relies on the ",Object(r.b)("em",{parentName:"p"},"snmpd")," process running within the host operating system. All configuration for SNMP, however, is done within the 128T's data model via its administrative interfaces (e.g., PCLI, GUI, NETCONF, etc.)."),Object(r.b)("h2",{id:"mib-definitions"},"MIB Definitions"),Object(r.b)("p",null,"128T provdes MIB files that describe the 128T SNMP objects and traps available on the 128T device and how they are encoded. For ease of use, these are installed on the device itself in this location"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"/usr/share/snmp/128technology/\n")),Object(r.b)("p",null,'A Network Management System (NMS) can import these MIBs when managing the 128T appliance. On a Centos based NMS the latest mibs can be optionally installed by downloading the latest "128T-mibs" package from the 128T yum repoisitory.'),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"dnf install 128T-mibs\n")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to install the 128T MIBS on another platform, a valid certificate and yum repo file must be present on the platform in order to obtain the file from the 128 Technology repository."))),Object(r.b)("p",null,"The specific objects available in the MIB are described in more details in the the section ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#mib-layout"}),"MIB Layout"),"."),Object(r.b)("h2",{id:"basic-configuration"},"Basic Configuration"),Object(r.b)("p",null,"Configuring SNMP on the 128T is done on a per-router basis, and is done within the ",Object(r.b)("inlineCode",{parentName:"p"},"router > system > services > snmp-server")," branch of the configuration hierarchy. There are three areas of configuration required: the ",Object(r.b)("em",{parentName:"p"},"protocol")," configuration, the ",Object(r.b)("em",{parentName:"p"},"access")," configuration, and the ",Object(r.b)("em",{parentName:"p"},"notification receiver")," configuration."),Object(r.b)("h3",{id:"protocol-configuration"},"Protocol Configuration"),Object(r.b)("p",null,"The protocol configuration requires three settings: setting ",Object(r.b)("inlineCode",{parentName:"p"},"enabled")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," enables the SNMP agent on your 128T. You must also set the ",Object(r.b)("inlineCode",{parentName:"p"},"protocol")," to ",Object(r.b)("inlineCode",{parentName:"p"},"v2c")," (SNMPv2c is the only version of SNMP supported by 128T). Finally, configure the ",Object(r.b)("inlineCode",{parentName:"p"},"port")," on which the SNMP agent will listen for inbound requests; this is typically ",Object(r.b)("inlineCode",{parentName:"p"},"161"),", the well-known port for SNMP agent requests."),Object(r.b)("h3",{id:"access-configuration"},"Access Configuration"),Object(r.b)("p",null,'The access configuration lets you create a set of "whitelist" addresses allowed to interact with the 128T SNMP agent (i.e., to send GET requests to the 128T). This represents your SNMP management platform.'),Object(r.b)("p",null,"The access configuration, configured within ",Object(r.b)("inlineCode",{parentName:"p"},"access-control")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"snmp-server")," element, has three components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"name"),': a unique name given to the access configuration element (this is the "key" for the configuration, to uniquely identify a whitelisted SNMP source)')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"community"),": the community string to expect in requests from the requesting SNMP agent, as an authentication mechanism")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"source"),": the IP address of the whitelisted device"))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"access-control         my-nms-platform\n    name       my-nms-platform\n    community  public\n    source     10.128.201.2\nexit\n")),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Iif you intend on polling the 128T device via one of the ",Object(r.b)("em",{parentName:"p"},"managed interfaces")," (i.e., one that is configured within 128T as a forwarding interface), this will require additional configuration steps. This in turn may affect the source address that the SNMP daemon sees as requests arrive. See the section below on Polling SNMP."))),Object(r.b)("h3",{id:"notification-receiver-configuration"},"Notification Receiver Configuration"),Object(r.b)("p",null,"The notification receiver configuration defines where the 128T will send SNMP information in the event of a system issue. This is configured within ",Object(r.b)("inlineCode",{parentName:"p"},"notification-receiver")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"snmp-server")," element. Like the access configuration, it too has three components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ip-address"),": the address of your trap receiver"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"port"),": the UDP listening port on the trap receiver (typically 162)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type"),": either ",Object(r.b)("inlineCode",{parentName:"li"},"trap")," or ",Object(r.b)("inlineCode",{parentName:"li"},"inform"),". This determines whether the 128T will send traps or informRequests to the receiver")),Object(r.b)("p",null,"Because the traps/informRequests are sent by the snmpd process running on the host Linux operating system, it is crucial that the host's routing table is capable of reaching the ",Object(r.b)("inlineCode",{parentName:"p"},"notification-receiver")," via the appropriate egress interface. Use the Linux command ",Object(r.b)("inlineCode",{parentName:"p"},"ip r")," to review the host's routing table to confirm that it meets your requirements."),Object(r.b)("h2",{id:"polling-snmp"},"Polling SNMP"),Object(r.b)("p",null,"Once the ",Object(r.b)("inlineCode",{parentName:"p"},"snmp-server")," is configured, the 128T device is eligible to be polled for SNMP requests from any source identified in an ",Object(r.b)("inlineCode",{parentName:"p"},"access-control")," configuration. Depending on your system architecture, this may require some additional configuration for polling to be successful."),Object(r.b)("h3",{id:"routing-snmp-responses"},"Routing SNMP Responses"),Object(r.b)("p",null,"Because the SNMP protocol is handled by a system process running on the host operating system, it is important that your host operating system's routing table has routes suitable for returning responses to inbound queries to the appropriate destination(s) via the appropriate interface. Use the Linux command ",Object(r.b)("inlineCode",{parentName:"p"},"ip r")," to review the host operating system's route table, to ensure that snmpd is capable of transmitting responses to inbound polling requests."),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This also applies to traps sent by the 128T to the ",Object(r.b)("inlineCode",{parentName:"p"},"notification-receiver"),"."))),Object(r.b)("p",null,"When sendiing responses via a forwarding interface (as described below), the 128T software manages the Linux routing table rules on your behalf."),Object(r.b)("h3",{id:"polling-via-forwarding-interfaces"},"Polling via Forwarding Interfaces"),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"forwarding interface")," is one that is identified in your 128T configuration as being managed by the 128T software \u2013\xa0generally, this is a ",Object(r.b)("inlineCode",{parentName:"p"},"device-interface")," of type ",Object(r.b)("inlineCode",{parentName:"p"},"ethernet"),", with a ",Object(r.b)("inlineCode",{parentName:"p"},"pci-address")," on your platform's PCI bus. In order to successfully poll a 128T via a forwarding interface, there are several other configuration components required:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"host-service")," on the network-interface, with type set to ",Object(r.b)("inlineCode",{parentName:"li"},"custom")," and ",Object(r.b)("inlineCode",{parentName:"li"},"transport")," set to UDP/161 (or whichever port you've specified in your ",Object(r.b)("inlineCode",{parentName:"li"},"snmp-server")," configuration)."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"host-service")," should include one or more ",Object(r.b)("inlineCode",{parentName:"li"},"access-policy")," statements to allow access by the SNMP polling device(s)."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"access-control")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"snmp-server")," should have its ",Object(r.b)("inlineCode",{parentName:"li"},"source")," set to ",Object(r.b)("inlineCode",{parentName:"li"},"169.254.127.126")," instead of the actual address of your SNMP polling server. This is due to the fact that the inbound SNMP requests will arrive at the Linux host operating system via a ",Object(r.b)("em",{parentName:"li"},"kernel network interface")," (KNI), which performs source NAT of the outbound packets sent to snmpd.")),Object(r.b)("h2",{id:"sample-configuration-basic"},"Sample Configuration (Basic)"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"snmp-server\n    enabled                true\n    version                v2c\n    port                   161\n\n    access-control         my-nms-agent\n        name       my-nms-agent\n        community  public\n        source     10.128.201.2\n    exit\n\n    notification-receiver  10.128.201.2 162 trap\n        ip-address  10.128.201.2\n        port        162\n        type        trap\n    exit\nexit\n")),Object(r.b)("h2",{id:"sample-configuration-via-forwarding-interface"},"Sample Configuration (Via Forwarding Interface)"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'snmp-server\n    enabled                true\n    version                v2c\n    port                   162\n\n    access-control         snmp-agent\n        name       snmp-agent\n        community  public\n        source     169.254.127.126\n    exit\nexit\n\nnetwork-interface\n    name                   lan\n    description            "LAN"\n\n    inter-router-security  internal\n\n    address                192.168.1.1\n        ip-address     192.168.1.1\n        prefix-length  24\n\n        host-service   custom\n            service-type   custom\n\n            transport      udp\n                protocol    udp\n\n                port-range  161\n                    start-port  161\n                exit\n            exit\n\n            access-policy  10.128.201.2/32\n                source      10.128.201.2/32\n                permission  allow\n            exit\n\n            access-policy  blacklist\n                source      blacklist\n                permission  deny\n            exit\n        exit\n    exit\nexit\n')),Object(r.b)("h2",{id:"mib-layout"},"MIB Layout"),Object(r.b)("p",null,"The 128T MIB Database tree is structured as shown in the following diagram:"),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/img/config_snmp_mib_layout.png",alt:"MIB layout"}))),Object(r.b)("p",null,"Note that the SNMP MIB objects only support read-only access (eg: GET, GETNEXT). To configure or alter the system it is necessary to use user-interfaces like PCLI or Web GUI or  configuration APIs (eg: NETCONF)."),Object(r.b)("p",null,"The MIBs are described individually below."),Object(r.b)("h3",{id:"t128-mibmib"},"T128-MIB.mib"),Object(r.b)("p",null,"The parent T128-MIB defines the overall structure of the MIB and supported products. Only the t128NetworkingPlatform currently exists, however future MIBs may expand this to other 128T products."),Object(r.b)("h3",{id:"t128-alarmmib"},"T128-ALARM.mib"),Object(r.b)("p",null,"The T128-ALARM-MIB defines objects that describes the state of 128T alarms. The MIB also contains definitions for the SNMP trap notifications sent out by the system on event of an alarm being added or cleared."),Object(r.b)("p",null,"There are two tables for viewing the current alarm state, t128AlarmTable and t128ShelvedAlarmTable. Each row in this table represents a unique alarm that is active in the system. The t128ShelvedAlarmTable represents alarms that are shelved (for instance if the router is marked as being in ",Object(r.b)("em",{parentName:"p"},"maintenance-mode"),'). The t128AlarmTable represents current alarms that are active and not shelved. The key for each row is an instance identifier string, either t128AlarmTableInstanceId or t128ShelvedAlarmTableInstanceId depending on which table the alarm resides. This string can be used to indicate a specific instance of an alarm, for example "Interface operationally down on eth0", which would be a different instance than a "Interface operationally down on dpdk1" alarm. This instance identifier should be considered an opaque string (i.e. the contents have no meaning other than that for each alarm this string is garaunteed to be unique).'),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The opaque instance identifiers are currently implemented as hex strings however the implementation may change from release to release so the exact content should not be relied on."))),Object(r.b)("p",null,"The t128AlarmNotification definition defines the alarm trap sent out by the system and contains the relevant objects to describe the alarm (e.g. source node and router, severity, alarm message, etc). The trap will also contain a unique t128AlarmInstanceId that can be used to correlate the alarm with the t128AlarmTable and t128ShelvedAlarmTable instance identifiers. If an alarm moves from a shelved to unshelved state or vice versa the instance ID will remain the same."),Object(r.b)("h3",{id:"t128-metricsmib"},"T128-METRICS.mib"),Object(r.b)("p",null,"The 128T-METRICS-MIB provides SNMP access to the expansive set of metrics provided by the 128T product which are exposed via the t128MetricsTable."),Object(r.b)("p",null,'Each row of the metrics table is keyed by two objects, the t128MetricAlias and the t128MetricIndex. The t128MetricAlias is an arbitrary string of up to 64 characters long that represents a description of the metric. When read from the table, this alias also includes a metric instance suffix which in the most common case will be "_0". For example the default CPU utlization metric has an alias "cpuUtilization" will be returned as "cpuUtilization_0". In addition to the alias the t128MetricIndex key represents a unique series of a metric.'),Object(r.b)("p",null,'The values contained in each row are the t128MetricValue and t128MetricContributors objects. The t128MetricValue is simply the current value of the metric. The unique parameters that identify each data series are referred to as "contributors". For the CPU metric the contributors are router, node and core and the t128MetricContributors object will contain a string representation of these values so that each row can be correlated with the correct metric data series.'),Object(r.b)("p",null,"Below is an example of an SNMP query of the t128MetricsTable showing the 4 rows returned for each CPU utilization data series:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'snmptable -Cl -Ci -mALL -v2c -c public 172.18.1.55 T128-METRICS-MIB::t128MetricsTable\n\nSNMP table: T128-METRICS-MIB::t128MetricsTable\n\nindex                   t128MetricContributors    t128MetricValue\n"cpuUtilization_0".0    Fabric128.test1.3         5\n"cpuUtilization_0".1    Fabric128.test1.2         2\n"cpuUtilization_0".2    Fabric128.test1.1         100\n"cpuUtilization_0".3    Fabric128.test1.0         4\n')),Object(r.b)("p",null,'Note that in this example the router name is "Fabric128", the node is called "test1" and the CPU cores are 0, 1, 2 and 3. This can be clearly seen in the t128MetricContributors column, eg: "Fabric128.test1.0".'),Object(r.b)("p",null,"The metrics table can be configured to contain any of the 128T metrics that can be exposed via SNMP however this is an advanced feature and is outside the scope of this document. By default a small set of the most useful metrics are configured in the t128MetricsTable."),Object(r.b)("h3",{id:"t128-systemmib"},"T128-SYSTEM.mib"),Object(r.b)("p",null,"The T128-SYSTEM-MIB contains objects to describe the running state of the local 128T system."),Object(r.b)("p",null,"The local node and router name, role and asset-id objects (t128RouterName, t128NodeName, t128NodeRole and t128AssetId) can be used to identify the system. The values of these parameters will match those in the 128T system configuration."),Object(r.b)("p",null,'There are several processes running on the system that comprise the 128T product. The table t128ProcessTable provides details about these processes, for instance whether they are running or, if applicable, are assuming a leadership role. The key for the table rows is the process name, for example "nodeMonitor".'),Object(r.b)("div",{className:"footnotes"},Object(r.b)("hr",{parentName:"div"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",Object(i.a)({parentName:"ol"},{id:"fn-1"}),Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol"}),"https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol"),Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}b.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(h,s({ref:t},l,{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);