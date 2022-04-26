"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6427],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,m=c["".concat(d,".").concat(u)]||c[u]||s[u]||r;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2702:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={slug:18,title:"18. Single state in Hydra.Node.\n",authors:[],tags:["Proposed"]},d=void 0,p={permalink:"/head-protocol/adr/18",source:"@site/adr/2022-04-13_018-single-state.md",title:"18. Single state in Hydra.Node.\n",description:"Status",date:"2022-04-13T00:00:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"Proposed",permalink:"/head-protocol/adr/tags/proposed"}],readingTime:3.61,truncated:!1,authors:[],frontMatter:{slug:"18",title:"18. Single state in Hydra.Node.\n",authors:[],tags:["Proposed"]},prevItem:{title:"17. Use UDP protocol for Hydra networking\n",permalink:"/head-protocol/adr/17"}},h={authorsImageUrls:[]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Alternative",id:"alternative",level:2}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Proposed"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," maintains two pieces of state during the life-cycle of a Hydra Head:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState tx")," provided by the ",(0,r.kt)("inlineCode",{parentName:"li"},"HydraHead tx m")," handle interface and part of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," module. It provides the basis for the main ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," business logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Node.processNextEvent")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.HeadLogic.update"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Node.hs#L256-L257"},"Creation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Node.hs#L174"},"Usage")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SomeOnChainHeadState")," is kept in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," to keep track of the latest known head state, including notable transaction outputs and information how to spend it (e.g. scripts and datums)\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L156-L162"},"Code"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L449"},"Usage 1"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L414"},"Usage 2"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L349-L352"},"Usage 3"),"\n(There are other unrelated things kept in memory like the event history in the API server or a peer map in the network heartbeat component.)"))),(0,r.kt)("li",{parentName:"ul"},"The interface between the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," and a ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain")," component consists of ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"constructing certain Head protocol transactions given a description of it (",(0,r.kt)("inlineCode",{parentName:"li"},"PostChainTx tx"),"):",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: MonadThrow m => PostChainTx tx -> m ()\n"))),(0,r.kt)("li",{parentName:"ul"},"a callback function when the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain")," component observed a new Head protocol transaction described by ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainTx tx"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"type ChainCallback tx m = OnChainTx tx -> m ()\n"))))),(0,r.kt)("li",{parentName:"ul"},"Given by the usage sites above, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," module requires additional info to do both, construct protocol transactions with ",(0,r.kt)("inlineCode",{parentName:"li"},"postTx")," as well as observe potential ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainTx")," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/blob/a98e2907c4e425de2736782793383aad63132c14/hydra-node/src/Hydra/Chain/Direct.hs#L333-L336"},"here"),"). Hence we see that, operation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," component (and likely any implementing the interface fully) is ",(0,r.kt)("strong",{parentName:"li"},"inherently stateful"),"."),(0,r.kt)("li",{parentName:"ul"},"We are looking at upcoming features to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/185"},"handle rollbacks")," and dealing with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/187"},"persisting the head state"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Both could benefit from the idea, that the ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState")," is just a result of pure ",(0,r.kt)("inlineCode",{parentName:"li"},"Event")," processing (a.k.a event sourcing)."),(0,r.kt)("li",{parentName:"ul"},"Right now the ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState")," kept in ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Node")," alone, is not enough to fully describe the state of the ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node"),". Hence it would not be enough to just persist all the ",(0,r.kt)("inlineCode",{parentName:"li"},"Event"),"s and replaying them to achieve persistence, nor resetting to some previous ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState")," in the presence of a rollback.")))),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'We define and keep a "blackbox" ',(0,r.kt)("inlineCode",{parentName:"li"},"ChainState tx")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState tx"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It shall not be introspectable to the business logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadLogic")),(0,r.kt)("li",{parentName:"ul"},"It shall contain chain-specific information about the current Hydra Head, which will naturally need to evolve once we have multiple Heads in our feature scope"),(0,r.kt)("li",{parentName:"ul"},"For example:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"data HeadState tx\n  = ReadyState\n  | InitialState\n      { chainState :: ChainState tx\n      -- ...\n      }\n  | OpenState\n      { chainState :: ChainState tx\n      -- ...\n      }\n  | ClosedState\n      { chainState :: ChainState tx\n      -- ...\n      }\n"))),(0,r.kt)("li",{parentName:"ul"},"We provide the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState tx")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"postTx"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: ChainState tx -> PostChainTx tx -> m ()\n"))),(0,r.kt)("li",{parentName:"ul"},"We change the callback interface of ",(0,r.kt)("inlineCode",{parentName:"li"},"Chain")," to",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"type ChainCallback tx m = (ChainState tx -> Maybe (OnChainTx tx, ChainState tx)) -> m ()\n")),"with the meaning, that invoking the callback indicates receival of a potential Hydra transaction which is ",(0,r.kt)("inlineCode",{parentName:"li"},"Maybe")," observing a relevant ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainTx tx")," paired with a (potentially updated) ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState tx"),"."),(0,r.kt)("li",{parentName:"ul"},"We also decide to extend ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainEvent")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainEffect")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState tx")," and threading it through the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.HeadLogic"),".")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We need to change the construction of ",(0,r.kt)("inlineCode",{parentName:"li"},"Chain")," handles and the call sites of ",(0,r.kt)("inlineCode",{parentName:"li"},"postTx")),(0,r.kt)("li",{parentName:"ul"},"We need to extract the state handling (similar to the event queue) out of the ",(0,r.kt)("inlineCode",{parentName:"li"},"HydraNode")," handle and shuffle the main of ",(0,r.kt)("inlineCode",{parentName:"li"},"hydra-node")," a bit to be able to provide the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState")," to the chain callback as a continuation."),(0,r.kt)("li",{parentName:"ul"},"We need to make the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState")," already serializable (",(0,r.kt)("inlineCode",{parentName:"li"},"ToJSON"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FromJSON"),") as it will be part of the ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState"),"."),(0,r.kt)("li",{parentName:"ul"},"We can drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"TVar")," of keeping ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainHeadState")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct")," module."),(0,r.kt)("li",{parentName:"ul"},"We might be able to simplify the ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState tx")," to be just a ",(0,r.kt)("inlineCode",{parentName:"li"},"UTxOType tx")," later.")),(0,r.kt)("h2",{id:"alternative"},"Alternative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We could extend ",(0,r.kt)("inlineCode",{parentName:"li"},"PostChainTx")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainTx")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState")," and keep the signatures:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hs"},"postTx :: MonadThrow m => PostChainTx tx -> m ()\ntype ChainCallback tx m = (ChainState tx -> Maybe (OnChainTx tx) -> m ()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consequences:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We need to change the interface between ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct.Tx")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Hydra.Chain.Direct.State")," to something else than ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChainTx")," as the former would not have a suitable ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState")," to construct, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"observeInitTx")," would return ",(0,r.kt)("inlineCode",{parentName:"li"},"Maybe InitObervation"),". This may be an orthogonally desired change though."),(0,r.kt)("li",{parentName:"ul"},"Traces (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ToPost"),") and errors (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"PostTxError"),") would automatically include the full ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainState"),", which might be helpful but also possible big.")))))}u.isMDXComponent=!0}}]);