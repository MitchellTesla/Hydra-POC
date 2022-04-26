"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3039],{9257:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(1736),o="terminalWindow_wGrl",i="terminalWindowHeader_o9Cs",s="terminalWindowBody_tzdS",d="buttons_IGLB",l="dot_fGZE";function p(e){var t=e.children,a=e.minHeight,p="string"==typeof t?n.createElement(r.Z,null,t):t;return n.createElement("div",{className:o,style:{minHeight:a}},n.createElement("div",{className:i},n.createElement("div",{className:d},n.createElement("span",{className:l,style:{background:"#f25f58"}}),n.createElement("span",{className:l,style:{background:"#fbbe3c"}}),n.createElement("span",{className:l,style:{background:"#58cb42"}}))),n.createElement("div",{className:s},p))}},2708:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(9257),s=["components"],d={sidebar_position:3},l="QuickStart",p={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"QuickStart",description:"Your first steps with a hydra-node.",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/head-protocol/docs/getting-started/quickstart",editUrl:"https://github.com/input-output-hk/hydra-poc/tree/master/docs/docs/docs/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation Instructions",permalink:"/head-protocol/docs/getting-started/installation"},next:{title:"Demo",permalink:"/head-protocol/docs/getting-started/demo/"}},m={},h=[{value:"Hydra-node options...",id:"hydra-node-options",level:2},{value:"...and Where to Find Them",id:"and-where-to-find-them",level:2},{value:"Cardano Keys",id:"cardano-keys",level:3},{value:"Hydra keys",id:"hydra-keys",level:3},{value:"Ledger Parameters",id:"ledger-parameters",level:3},{value:"Fuel",id:"fuel",level:3},{value:"Example Setup",id:"example-setup",level:2},{value:"Google Cloud w/ Terraform",id:"google-cloud-w-terraform",level:3}],c={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"QuickStart"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your first steps with a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),".")),(0,o.kt)("p",null,"Running a Hydra head means running a Hydra node connected to some other Hydra nodes and connected to a Cardano node. A working ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/"},"cardano-node")," is therefore a pre-requisite for running a Hydra head. In this guide, we won't go over details about running a Cardano node and we invite you to look for existing documentation on the matter if need be."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"cardano-node & cardano-cli")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend using containers and the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/inputoutput/cardano-node"},"official Docker image")," for running a Cardano node."),(0,o.kt)("p",{parentName:"div"},"This image contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),". The latter is handy to run various commands, for example to create addresses and to generate keys."))),(0,o.kt)("h2",{id:"hydra-node-options"},"Hydra-node options..."),(0,o.kt)("p",null,"So far, the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," command-line provide a single command only for starting a node. The entire configuration is provided through command-line options and is fully static. Options are used to configured various elements, and can be summarized as follows (note however that reference documentation for those options is available under the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--node-id")),(0,o.kt)("td",{parentName:"tr",align:null},"The Hydra node identifier, serving as identifier within the Head network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--peer")),(0,o.kt)("td",{parentName:"tr",align:null},"The Hydra network peers address. Must be provided multiple time, one for each peer.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--host")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--port")),(0,o.kt)("td",{parentName:"tr",align:null},"This Hydra node host and port, to which peers from the Hydra network can connect to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--node-socket")),(0,o.kt)("td",{parentName:"tr",align:null},"The Cardano node's IPC socket filepath, used for inter-process communication with the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ledger-genesis")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--ledger-protocol-parameters")),(0,o.kt)("td",{parentName:"tr",align:null},"The Hydra ledger rules and parameters for the head.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--hydra-signing-key")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--cardano-signing-key")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--hydra-verification-key")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--cardano-verification-key")),(0,o.kt)("td",{parentName:"tr",align:null},"The Cardano and Hydra credentials for peers and the the node itself. Those options may also be provided multiple times depending on the number of peers.")))),(0,o.kt)("p",null,"Also, optionally:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--api-host")," ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"--api-port")),(0,o.kt)("td",{parentName:"tr",align:null},"The Hydra API host and port, to interact with the ",(0,o.kt)("a",{parentName:"td",href:"/api-reference"},"WebSocket API"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--monitoring-port")),(0,o.kt)("td",{parentName:"tr",align:null},"The port this node listens on for monitoring and metrics via Prometheus. If left empty, monitoring server is not started.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Dynamic Configuration")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We realise that the command-line in its current form isn't as user-friendly as it could, and is somewhat cumbersome to use for setting up large clusters."),(0,o.kt)("p",{parentName:"div"},"There are however plans to make the configuration more user-friendly and configurable dynamically; see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/issues/240"},"#240")," & ",(0,o.kt)("a",{parentName:"p",href:"/adr/15"},"ADR-15")))),(0,o.kt)("h2",{id:"and-where-to-find-them"},"...and Where to Find Them"),(0,o.kt)("h3",{id:"cardano-keys"},"Cardano Keys"),(0,o.kt)("p",null,"The previous section describes the various options and elements needed to setup a Hydra node. In this section, we'll show how to obtain some of those elements. First, let's start with the Cardano keys (",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-signing-key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-verification-key"),"). "),(0,o.kt)("p",null,"In a head, every participant is authenticated by two sets of keys, one key pair is a plain Ed25519 public/private key pair quite common on Cardano already. Such a key pair can be generated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," as follows:"),(0,o.kt)(i.Z,{mdxType:"TerminalWindow"},"cardano-cli address key-gen --verification-key-file cardano.vk --signing-key-file cardano.sk"),(0,o.kt)("p",null,"From there, each participant is expected to share their verification key with other participants. To start a node, one will need its ",(0,o.kt)("strong",{parentName:"p"},"own signing key")," and ",(0,o.kt)("strong",{parentName:"p"},"other participants' verification key"),". Those keys are currently used to authenticate on-chain transactions which drives the execution of the Hydra protocol. They prevent unsolicited actors to fiddle with the head life-cycle (for instance, someone external to the head could otherwise ",(0,o.kt)("em",{parentName:"p"},"abort")," an initialised head). While this wouldn't put head participants' funds at risk, it is still an annoyance that one wants to prevent."),(0,o.kt)("h3",{id:"hydra-keys"},"Hydra keys"),(0,o.kt)("p",null,"The second set of keys are the so-called Hydra ephemeral keys, which are used for multi-signing snapshots within a Head. In the long-run, those keys will be public/private modified MuSig2 key pairs, producing aggregated signatures verifiable on-chain similarly to Ed25519 signatures. At present however, the multisig cryptography is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/issues/193"},"yet to be implemented")," and the Hydra nodes are using a mock cryptography scheme as temporary replacement. This scheme does not provide any security guarantee but provides a similar interface to the one provided by the MuSig2 primitives. "),(0,o.kt)("p",null,"Similarly, the keys are basically plain UInt8 encoded as UTF-8 bytes for the sake of mocking the interface. We provide some mock key pairs as ",(0,o.kt)("inlineCode",{parentName:"p"},"alice.{vk,sk}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bob.{vk,sk}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"carol.{vk,sk}")," in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/tree/master/demo"},"demo folder"),". Currently, participants are expected to pick one of those and in a similar fashion to Cardano keys, share the verification key with their peers and use the signing key for them."),(0,o.kt)("h3",{id:"ledger-parameters"},"Ledger Parameters"),(0,o.kt)("p",null,"At the core of a Hydra head, there's a ledger. At the moment, Hydra is wired only to Cardano and assumes a ledger configuration similar to the one used on the layer 1. This translates as two command-line options ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-genesis")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-protocol-parameters"),". The former defines the (Shelley!) genesis rules and more specifically, the ",(0,o.kt)("strong",{parentName:"p"},"global"),", non-updatable protocol parameters required by the ledger. The latter defines the updatable protocol parameters such as fees or transaction sizes. They use the same format as the one used by the cardano-cli (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli query protocol-parameters"),"'s output)."),(0,o.kt)("p",null,"We provide existing files in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/blob/master/hydra-cluster/config"},"hydra-cluster/config"),' which can be used as basis. In particular, the protocol parameters are defined to nullify costs inside a head. Apart from that, they are the direct copy the current mainnet parameters. An interesting point about the Hydra\'s ledger is that, while it re-uses the same rules and code as the layer 1 (a.k.a. isomorphic), parameters may also be altered to slightly differ from the layer 1. This is the case for fees, but could also be done for script maximum execution budget for instance. However, not all parameters are safe to alter! Changing parameters that control the maximum size of a value (carrying native assets), or the minimum Ada value for a UTxO may render a head "unclosable"! A good rule thumb is that anything that applies strictly to transactions (fees, execution units, max tx size...) is safe to change. But anything that could be reflected in the UTxO is not.  '),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About Protocol Parameters")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that there's a bit of overlap between the two files since most protocol parameters are first and foremost genesis parameters. Moreover, many of those parameters are actually irrelevant in the context of Hydra (for example, there's no treasury or stake pool inside a head; consequently, parameters configuring the reward incentive or delegation rules are pointless and unused). "))),(0,o.kt)("h3",{id:"fuel"},"Fuel"),(0,o.kt)("p",null,"Finally, one last bit necessary to get Hydra nodes all working regards their ",(0,o.kt)("em",{parentName:"p"},"internal wallet"),". Indeed, Hydra-nodes currently come with a rudimentary wallet which they use for fueling transactions driving the Head lifecycle (Init, Commit, Close, Fanout...). Since those transactions happen on the layer 1, they cost money! "),(0,o.kt)("p",null,"For now, this is managed internally by the Hydra's wallet, but it needs some help. The Cardano keys provided to the node are expected to hold funds. More specifically, at least one UTxO entry, marked with a specific datum hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Fuel datum hash"',title:'"Fuel',datum:!0,'hash"':!0},"a654fb60d21c1fed48db2c320aa6df9737ec0204c0ba53b9b94a09fb40e757f3\n")),(0,o.kt)("p",null,"Conveniently (at least, as much as it can possibly be right now), we provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/blob/master/sample-node-config/gcp/scripts/create-marker-utxo.sh"},"create-marker-utxo.sh")," script that uses the cardano-cli to convert a normal UTxO into a marked fuel UTxO. Note that the marker is necessary because, the Cardano keys are expected to hold funds necessary for commits as well, however unmarked. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About commits")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the long-run, we'll ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/issues/215"},"move commits outside of the Hydra node")," to be done by external wallets (likely through wallets following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030"},"CIP-0030")," standard). "))),(0,o.kt)("h2",{id:"example-setup"},"Example Setup"),(0,o.kt)("h3",{id:"google-cloud-w-terraform"},"Google Cloud w/ Terraform"),(0,o.kt)("p",null,"We provide sample node configurations that will help you get started hosting a Hydra node on virtual machines in the Cloud in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/tree/master/sample-node-config/gcp/"},(0,o.kt)("inlineCode",{parentName:"a"},"sample-node-config/")," directory"),". In particular, this setup contains a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/blob/master/sample-node-config/gcp/docker-compose.yaml"},"docker-compose.yaml")," specification which gives a good template for configuring cardano-node + hydra-node services. It also offers various useful scripts to setup your cluster."))}u.isMDXComponent=!0}}]);