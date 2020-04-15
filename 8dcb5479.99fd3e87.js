(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(1),r=n(11),a=(n(0),n(224)),o={title:"Adding a Trusted Certificate",sidebar_label:"Adding a Trusted Certificate"},c={id:"howto_trusted_ca_certificate",title:"Adding a Trusted Certificate",description:"Any Linux system hosting 128T comes with public certificates of common public Certificate Authorities (CA) already loaded. This allows them to trust end host certificates signed by these CAs, or signed by designated signing authorities in a chain of trust back to the CAs, right out of the box.",source:"@site/docs/howto_trusted_ca_certificate.md",permalink:"/docs/howto_trusted_ca_certificate",lastUpdatedAt:1585860752,sidebar_label:"Adding a Trusted Certificate",sidebar:"docs",previous:{title:"Maintenance Mode",permalink:"/docs/howto_maintenance_mode"},next:{title:"Tuning BFD Settings",permalink:"/docs/howto_tune_bfd"}},s=[{value:"Example Scenario",id:"example-scenario",children:[]},{value:"Automation of CA Certificate Installation Using Salt",id:"automation-of-ca-certificate-installation-using-salt",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Any Linux system hosting 128T comes with public certificates of common public Certificate Authorities (CA) already loaded. This allows them to trust end host certificates signed by these CAs, or signed by designated signing authorities in a chain of trust back to the CAs, right out of the box."),Object(a.b)("p",null,"However, many enterprises or service providers operate their own CA with no tie to public CA infrastructure. Should the 128T host need to connect to servers using certificates signed by these private CAs, the system will need to have the private CA's certificates installed as a trusted certificate authority."),Object(a.b)("p",null,"An example of this is a 128T host configured for LDAP over SSL, which must connect to an LDAP server that is using a host certificate signed by the private CA. If the 128T host is to trust the server when it opens a connection, it will require that it can has the private CA certificate, and any intermediate signing CA certificates."),Object(a.b)("h2",{id:"example-scenario"},"Example Scenario"),Object(a.b)("p",null,"Let's say our enterprise has a private certificate authority consisting of a root CA which delegates signing authority to a subordinate signing CA, and the signing CA signs end host certificates which are to be trusted."),Object(a.b)("p",null,"The public certificate of the root CA in PEM form looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"-----BEGIN CERTIFICATE-----\nMIIDxjCCAq6gAwIBAgIBATANBgkqhkiG9w0BAQUFADB0MRMwEQYKCZImiZPyLGQB\n...root CA contents...\nEvWDvU72qH7pfC7TMeuvTOhnBmGsY/0RZnVbzG3SvE5/ZfWhjBK1MegQeHKVvZjl\nEz9VDlefIZwjSA==\n-----END CERTIFICATE-----\n")),Object(a.b)("p",null,"The public certificate of the signing CA in PEM form looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"-----BEGIN CERTIFICATE-----\nMIIDzzCCAregAwIBAgIBAjANBgkqhkiG9w0BAQUFADB0MRMwEQYKCZImiZPyLGQB\n...signing CA contents...\nNB7FEenRXO+vevj0PVVaxJUNyJEqfQwTyH0GaQD3VlGXJheyMCzpW9Gx76aBOXz0\nEyuS5Hop+ONX7G3qPTv8gQc8EQ==\n-----END CERTIFICATE-----\n")),Object(a.b)("p",null,"To load these on a 128T host, place the PEM formatted public key contents in ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/pki/ca-trust/source/anchors/"),". For this example the root CA public certificate would be saved to ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/pki/ca-trust/source/anchors/myenterprise-root-ca.crt"),", and the signing CA public certificate would be saved to ",Object(a.b)("inlineCode",{parentName:"p"},"/etc/pki/ca-trust/source/anchors/myenterprise-signing-ca.crt"),"."),Object(a.b)("p",null,"With the public certificate saved, run ",Object(a.b)("inlineCode",{parentName:"p"},"sudo update-ca-trust")," for the system to process and recognize them as trusted CA certificates."),Object(a.b)("h2",{id:"automation-of-ca-certificate-installation-using-salt"},"Automation of CA Certificate Installation Using Salt"),Object(a.b)("p",null,"If you have a deployment of many 128T nodes which must all be loaded with private CA certificates, you can automate the distribution of the certificates using salt."),Object(a.b)("p",null,"For example, the salt state ",Object(a.b)("inlineCode",{parentName:"p"},"/srv/salt/trusted-ca-certificates.sls")," with contents below would install the certificate as previously described:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"myenterprise root ca:\n  file.managed:\n    - name: /etc/pki/ca-trust/source/anchors/myenterprise-root-ca.crt\n    - contents: |\n        -----BEGIN CERTIFICATE-----\n        MIIDxjCCAq6gAwIBAgIBATANBgkqhkiG9w0BAQUFADB0MRMwEQYKCZImiZPyLGQB\n        ...root CA contents...\n        EvWDvU72qH7pfC7TMeuvTOhnBmGsY/0RZnVbzG3SvE5/ZfWhjBK1MegQeHKVvZjl\n        Ez9VDlefIZwjSA==\n        -----END CERTIFICATE-----\n\nmyenterprise signing ca:\n  file.managed:\n    - name: /etc/pki/ca-trust/source/anchors/myenterprise-signing-ca.crt\n    - contents: |\n        -----BEGIN CERTIFICATE-----\n        MIIDzzCCAregAwIBAgIBAjANBgkqhkiG9w0BAQUFADB0MRMwEQYKCZImiZPyLGQB\n        ...signing CA contents...\n        NB7FEenRXO+vevj0PVVaxJUNyJEqfQwTyH0GaQD3VlGXJheyMCzpW9Gx76aBOXz0\n        EyuS5Hop+ONX7G3qPTv8gQc8EQ==\n        -----END CERTIFICATE-----\n\nupdate ca trust:\n  cmd.run:\n   - name: 'update-ca-trust'\n   - onchanges_any:\n     - file: /etc/pki/ca-trust/source/anchors/myenterprise-signing-ca.crt\n     - file: /etc/pki/ca-trust/source/anchors/myenterprise-root-ca.crt\n")))}u.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,h=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return n?r.a.createElement(h,c({ref:t},l,{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);