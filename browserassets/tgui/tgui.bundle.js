!function(e){function t(t){for(var o,i,l=t[0],c=t[1],u=t[2],s=0,f=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;a.push([394,0]),n()}({131:function(e,t,n){"use strict";t.__esModule=!0,t.EmptyPlaceholderCn=t.ToolLabelCn=t.ModuleViewCn=t.BlockCn=void 0;var o=n(454),r="cyborg-module-rewriter-interface";t.BlockCn=r;var a=(0,o.block)(r,"module-view");t.ModuleViewCn=a;var i=(0,o.element)(a,"tool-label");t.ToolLabelCn=i;var l=(0,o.block)(r,"empty-placeholder");t.EmptyPlaceholderCn=l},388:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(4),a=n(131),i=function(e){var t=e.children,n=e.className,i=(0,r.classes)([a.EmptyPlaceholderCn,n]);return(0,o.createVNode)(1,"div",i,t,0)};t["default"]=i},394:function(e,t,n){e.exports=n(395)},395:function(e,t,n){"use strict";n(137),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(165),n(166),n(167),n(168),n(169),n(170),n(172),n(173),n(174),n(176),n(177),n(178),n(107),n(181),n(182),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(207),n(208),n(209),n(210),n(212),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(236),n(237),n(238),n(239),n(240),n(241),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(117),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(365),n(366),n(367),n(368);var o=n(1);n(369),n(370),n(371),n(372),n(373),n(374),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420);var r,a,i=n(88),l=(n(89),n(124)),c=n(36);i.perf.mark("inception",null==(r=window.performance)||null==(a=r.timing)?void 0:a.navigationStart),i.perf.mark("init");var u=(0,c.configureStore)(),d=(0,l.createRenderer)((function(){var e=(0,n(449).getRoutedComponent)(u);return(0,o.createComponentVNode)(2,c.StoreProvider,{store:u,children:(0,o.createComponentVNode)(2,e)})}));!function s(){if("loading"!==document.readyState){for(u.subscribe(d),window.update=function(e){return u.dispatch(Byond.parseJson(e))};;){var e=window.__updateQueue__.shift();if(!e)break;window.update(e)}0}else document.addEventListener("DOMContentLoaded",s)}()},412:function(e,t,n){},413:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},420:function(e,t,n){},449:function(e,t,n){"use strict";t.__esModule=!0,t.getRoutedComponent=void 0;var o=n(1),r=n(18),a=(n(91),n(51)),i=n(450),l=function(e,t){return function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0,children:["notFound"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" was not found.")],4),"missingExport"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" is missing an export.")],4)]})})}},c=function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0})})};t.getRoutedComponent=function(e){var t=e.getState(),n=(0,r.selectBackend)(t),o=n.suspended,a=n.config;if(o)return c;var u,d=null==a?void 0:a["interface"];try{u=i("./"+d+".js")}catch(f){if("MODULE_NOT_FOUND"===f.code)return l("notFound",d);throw f}var s=u[d];return s||l("missingExport",d)}},450:function(e,t,n){var o={"./CameraConsole.js":451,"./CyborgModuleRewriter.js":452,"./PaperSheet.js":458,"./TankDispenser.js":461};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=450},451:function(e,t,n){"use strict";t.__esModule=!0,t.CameraConsoleContent=t.CameraConsole=void 0;var o=n(1),r=n(69),a=n(125),i=n(4),l=n(387),c=n(18),u=n(17),d=n(51),s=function(e,t){void 0===t&&(t="");var n=(0,l.createSearch)(t,(function(e){return e.name}));return(0,a.flow)([(0,r.filter)((function(e){return null==e?void 0:e.name})),t&&(0,r.filter)(n),(0,r.sortBy)((function(e){return e.name}))])(e)};t.CameraConsole=function(e,t){var n=(0,c.useBackend)(t),r=n.act,a=n.data,i=(n.config,a.mapRef),l=a.activeCamera,p=function(e,t){var n,o;if(!t)return[];var r=e.findIndex((function(e){return e.name===t.name}));return[null==(n=e[r-1])?void 0:n.name,null==(o=e[r+1])?void 0:o.name]}(s(a.cameras),l),m=p[0],v=p[1];return(0,o.createComponentVNode)(2,d.Window,{width:870,height:708,resizable:!0,children:[(0,o.createVNode)(1,"div","CameraConsole__left",(0,o.createComponentVNode)(2,d.Window.Content,{scrollable:!0,children:(0,o.createComponentVNode)(2,f)}),2),(0,o.createVNode)(1,"div","CameraConsole__right",[(0,o.createVNode)(1,"div","CameraConsole__toolbar",[(0,o.createVNode)(1,"b",null,"Camera: ",16),l&&l.name||"\u2014"],0),(0,o.createVNode)(1,"div","CameraConsole__toolbarRight",[(0,o.createComponentVNode)(2,u.Button,{icon:"chevron-left",disabled:!m,onClick:function(){return r("switch_camera",{name:m})}}),(0,o.createComponentVNode)(2,u.Button,{icon:"chevron-right",disabled:!v,onClick:function(){return r("switch_camera",{name:v})}})],4),(0,o.createComponentVNode)(2,u.ByondUi,{className:"CameraConsole__map",params:{id:i,type:"map"}})],4)]})};var f=function(e,t){var n=(0,c.useBackend)(t),r=n.act,a=n.data,l=(0,c.useLocalState)(t,"searchText",""),d=l[0],f=l[1],p=a.activeCamera,m=s(a.cameras,d);return(0,o.createFragment)([(0,o.createComponentVNode)(2,u.Input,{autoFocus:!0,fluid:!0,mb:1,placeholder:"Search for a camera",onInput:function(e,t){return f(t)}}),(0,o.createComponentVNode)(2,u.Section,{children:m.map((function(e){return(0,o.createVNode)(1,"div",(0,i.classes)(["Button","Button--fluid","Button--color--transparent","Button--ellipsis",p&&e.name===p.name&&"Button--selected"]),e.name,0,{title:e.name,onClick:function(){return r("switch_camera",{name:e.name})}},e.name)}))})],4)};t.CameraConsoleContent=f},452:function(e,t,n){"use strict";t.__esModule=!0,t.CyborgModuleRewriter=void 0;var o,r=n(1),a=n(18),i=n(51),l=(o=n(453))&&o.__esModule?o:{"default":o},c=n(131);t.CyborgModuleRewriter=function(e,t){var n=(0,a.useBackend)(t),o=n.act,u=n.data.modules;return(0,r.createComponentVNode)(2,i.Window,{width:670,height:640,resizable:!0,children:(0,r.createComponentVNode)(2,i.Window.Content,{className:c.BlockCn,scrollable:!0,children:(0,r.createComponentVNode)(2,l["default"],{modules:u,onEjectModule:function(e){return o("module-eject",{moduleRef:e})},onMoveToolDown:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-move",{dir:"down",moduleRef:t,toolRef:n})},onMoveToolUp:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-move",{dir:"up",moduleRef:t,toolRef:n})},onRemoveTool:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-remove",{moduleRef:t,toolRef:n})},onResetModule:function(e){var t=e.moduleId,n=e.moduleRef;return o("module-reset",{moduleId:t,moduleRef:n})},onSelectModule:function(e){return o("module-select",{moduleRef:e})}})})})}},453:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(17),a=l(n(388)),i=l(n(455));function l(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){var t=e.modules,n=(t=void 0===t?{}:t).available,l=void 0===n?[]:n,c=t.selected,u=e.onEjectModule,d=e.onMoveToolDown,s=e.onMoveToolUp,f=e.onRemoveTool,p=e.onResetModule,m=e.onSelectModule,v=c||{},h=v.ref,C=v.tools,b=void 0===C?[]:C;return l.length>0?(0,o.createComponentVNode)(2,r.Flex,{children:[(0,o.createComponentVNode)(2,r.Flex.Item,{width:18,mr:1,children:(0,o.createComponentVNode)(2,r.Section,{title:"Modules",fitted:!0,children:(0,o.createComponentVNode)(2,r.Tabs,{vertical:!0,children:l.map((function(e){var t=e.ref,n=e.name,a=(0,o.createComponentVNode)(2,r.Button,{icon:"eject",color:"transparent",onClick:function(){return u(t)},title:"Eject "+n});return(0,o.createComponentVNode)(2,r.Tabs.Tab,{onClick:function(){return m(t)},rightSlot:a,selected:t===h,children:n},t)}))})})}),(0,o.createComponentVNode)(2,r.Flex.Item,{grow:1,basis:0,children:h?(0,o.createComponentVNode)(2,i["default"],{onMoveToolDown:function(e){return d({moduleRef:h,toolRef:e})},onMoveToolUp:function(e){return s({moduleRef:h,toolRef:e})},onRemoveTool:function(e){return f({moduleRef:h,toolRef:e})},onResetModule:function(e){return p({moduleId:e,moduleRef:h})},tools:b}):(0,o.createComponentVNode)(2,r.Section,{children:(0,o.createComponentVNode)(2,a["default"],{children:"No module selected"})})})]}):(0,o.createComponentVNode)(2,r.Section,{children:(0,o.createComponentVNode)(2,a["default"],{children:"No modules inserted"})})};t["default"]=c},454:function(e,t,n){"use strict";t.__esModule=!0,t.modifier=t.element=t.block=void 0;t.block=function(e,t){return e+"-"+t};t.element=function(e,t){return e+"__"+t};t.modifier=function(e,t){return e+"--"+t}},455:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o,r=n(1),a=n(17),i=(o=n(456))&&o.__esModule?o:{"default":o};var l=[{id:"brobocop",name:"Brobocop"},{id:"chemistry",name:"Chemistry"},{id:"civilian",name:"Civilian"},{id:"engineering",name:"Engineering"},{id:"medical",name:"Medical"},{id:"mining",name:"Mining"}],c=function(e){var t=e.onMoveToolDown,n=e.onMoveToolUp,o=e.onRemoveTool,c=e.onResetModule,u=e.tools;return(0,r.createFragment)([(0,r.createComponentVNode)(2,a.Section,{title:"Preset",children:l.map((function(e){var t=e.id,n=e.name;return(0,r.createComponentVNode)(2,a.Button,{onClick:function(){return c(t)},title:n,children:n},t)}))}),(0,r.createComponentVNode)(2,a.Section,{title:"Tools",children:(0,r.createComponentVNode)(2,i["default"],{onMoveToolDown:t,onMoveToolUp:n,onRemoveTool:o,tools:u})})],4)};t["default"]=c},456:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=i(n(388)),a=i(n(457));function i(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){var t=e.onMoveToolDown,n=e.onMoveToolUp,i=e.onRemoveTool,l=e.tools,c=void 0===l?[]:l;return(0,o.createVNode)(1,"div",null,c.length>0?c.map((function(e){var r=e.name,l=e.ref;return(0,o.createComponentVNode)(2,a["default"],{onMoveToolDown:function(){return t(l)},onMoveToolUp:function(){return n(l)},onRemoveTool:function(){return i(l)},children:r},l)})):(0,o.createComponentVNode)(2,r["default"],{children:"Module has no tools"}),0)};t["default"]=l},457:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(17),a=n(131),i=function(e){var t=e.children,n=e.onMoveToolDown,i=e.onMoveToolUp,l=e.onRemoveTool;return(0,o.createVNode)(1,"div",null,[(0,o.createComponentVNode)(2,r.Button,{icon:"arrow-up",onClick:i,title:"Move Up"}),(0,o.createComponentVNode)(2,r.Button,{icon:"arrow-down",onClick:n,title:"Move Down"}),(0,o.createComponentVNode)(2,r.Button,{icon:"trash",onClick:l,title:"Remove"}),(0,o.createVNode)(1,"span",a.ToolLabelCn,t,0)],4)};t["default"]=i},458:function(e,t,n){"use strict";t.__esModule=!0,t.PaperSheet=void 0;var o=n(1),r=n(4),a=n(377),i=s(n(459)),l=s(n(460)),c=n(18),u=n(17),d=n(51);function s(e){return e&&e.__esModule?e:{"default":e}}function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function p(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t){h=function(e,t){return new a(e,undefined,t)};var n=b(RegExp),o=RegExp.prototype,r=new WeakMap;function a(e,t,o){var a=n.call(this,e,t);return r.set(a,o||r.get(e)),a}function i(e,t){var n=r.get(t);return Object.keys(n).reduce((function(t,o){return t[o]=e[n[o]],t}),Object.create(null))}return C(a,n),a.prototype.exec=function(e){var t=o.exec.call(this,e);return t&&(t.groups=i(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var n=r.get(this);return o[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"==typeof t){var a=this;return o[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(i(e,a)),t.apply(this,e)}))}return o[Symbol.replace].call(this,e,t)},h.apply(this,arguments)}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function b(e){var t="function"==typeof Map?new Map:undefined;return(b=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return y(e,arguments,w(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),x(o,e)})(e)}function y(e,t,n){return(y=g()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&x(r,n.prototype),r}).apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e,t,n,o){return void 0===o&&(o=!1),"<span style=\"color:'"+n+"';font-family:'"+t+"';"+(o?"font-weight: bold;":"")+'">'+e+"</span>"},N=/\[(_+)\]/g,V=h(/\[<input[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(.*?)id="(paperfield_[0-9]+)"(.*?)\/>\]/gm,{id:2}),S=/%s(?:ign)?(?=\\s|$)/gim,M=function(e,t,n,o,r){var a=e.replace(N,(function(e,a,i,l){var c=function(e,t,n){t=n+"x "+t;var o=document.createElement("canvas").getContext("2d");return o.font=t,o.measureText(e).width}(e,t,n)+"px";return function(e,t,n,o,r,a){return'[<input type="text" style="font:\''+o+"x "+n+"';color:'"+r+"';min-width:"+t+";max-width:"+t+';" id="'+a+'" maxlength='+e+" size="+e+" />]"}(a.length,c,t,n,o,"paperfield_"+r++)}));return{counter:r,text:a}},k=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1},T=function(e,t){var n=e.image,a=e.opacity,i=(p(e,["image","opacity"]),"rotate("+n.rotate+"deg) translate("+n.x+"px,"+n.y+"px)"),l={transform:i,"-ms-transform":i,"-webkit-transform":i,opacity:a||1,position:"absolute"};return(0,o.createVNode)(1,"div",(0,r.classes)(["paper121x54",n.sprite]),null,1,{style:l})},R=function(e,t){var n,r,a=e.value,i=e.stamps,l=e.backgroundColor,c=e.readOnly,d=i||[],s={__html:'<span class="paper-text">'+(n=a,r=c,(r?n.replace(/<input\s[^d]/g,"<input disabled "):n.replace(/<input\sdisabled\s/g,"<input "))+"</span>")};return(0,o.createComponentVNode)(2,u.Box,{position:"relative",backgroundColor:l,width:"100%",height:"100%",children:[(0,o.createComponentVNode)(2,u.Box,{fillPositionedParent:!0,width:"100%",height:"100%",dangerouslySetInnerHTML:s,p:"10px"}),d.map((function(e,t){return(0,o.createComponentVNode)(2,T,{image:{sprite:e[0],x:e[1],y:e[2],rotate:e[3]}},e[0]+t)}))]})},O=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={x:0,y:0,rotate:0},o}f(t,e);var n=t.prototype;return n.findStampPosition=function(e){for(var t=event.pageX,n=event.pageY,o={left:e.target.offsetLeft,top:e.target.offsetTop},r=e.target.offsetParent;r;)o.left+=r.offsetLeft,o.top+=r.offsetTop,r=r.offsetParent;var i=[t-o.left,n-o.top],l=(0,a.vecScale)([121,51],.5);return(0,a.vecSubtract)(i,l)},n.componentDidMount=function(){document.onwheel=this.handleWheel.bind(this)},n.handleMouseMove=function(e){var t=this.findStampPosition(e);k(e),this.setState({x:t[0],y:t[1]})},n.handleMouseClick=function(e){var t=this.findStampPosition(e),n=(0,c.useBackend)(this.context),o=n.act;n.data,o("stamp",{x:t[0],y:t[1],r:this.state.rotate}),this.setState({x:t[0],y:t[1]})},n.handleWheel=function(e){var t=e.deltaY>0?15:-15;if(e.deltaY<0&&0===this.state.rotate)this.setState({rotate:360+t});else if(e.deltaY>0&&360===this.state.rotate)this.setState({rotate:t});else{var n={rotate:t+this.state.rotate};this.setState((function(){return n}))}k(e)},n.render=function(){var e=this.props,t=e.value,n=e.stamp_class,r=e.stamps,a=p(e,["value","stamp_class","stamps"]),i=r||[],l={sprite:n,x:this.state.x,y:this.state.y,rotate:this.state.rotate};return(0,o.normalizeProps)((0,o.createComponentVNode)(2,u.Box,Object.assign({onClick:this.handleMouseClick.bind(this),onMouseMove:this.handleMouseMove.bind(this),onwheel:this.handleWheel.bind(this)},a,{children:[(0,o.createComponentVNode)(2,R,{readOnly:!0,value:t,stamps:i}),(0,o.createComponentVNode)(2,T,{opacity:.5,image:l})]})))},t}(o.Component),P=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={previewSelected:"Preview",old_text:t.value||"",textarea_text:"",combined_text:t.value||""},o}f(t,e);var n=t.prototype;return n.createPreview=function(e,t){void 0===t&&(t=!1);var n,o,r=(0,c.useBackend)(this.context).data,a=r.text,u=r.pen_color,d=r.pen_font,s=r.is_crayon,f=r.field_counter,p=r.edit_usr,v={text:a};if((e=e.trim()).length>0){var h=function(e){return i["default"].sanitize(e,{FORBID_ATTR:["class","style"],ALLOWED_TAGS:["br","code","li","p","pre","span","table","td","tr","th","ul","ol","menu","font","b","center","table","tr","th"]})}(e+="\n"===e[e.length]?" \n":"\n \n"),C=(n=u,o=p,h.replace(S,(function(){return _(o,"Times New Roman",n,!0)}))),b=M(C,d,12,u,f),y=function(e){return(0,l["default"])(e,{breaks:!0,smartypants:!0,smartLists:!0,walkTokens:function(e){switch(e.type){case"url":case"autolink":case"reflink":case"link":case"image":e.type="text",e.href=""}},baseUrl:"thisshouldbreakhttp"})}(b.text),g=_(y,d,u,s);v.text+=g,v.field_counter=b.counter}if(t){var x=function(e,t,n,o,r){var a;void 0===r&&(r=!1);for(var l={},c=[];null!==(a=V.exec(e));){var u=a[0],d=a.groups.id;if(d){var s=document.getElementById(d);if(0===(s&&s.value?s.value:"").length)continue;var f=i["default"].sanitize(s.value.trim(),{ALLOWED_TAGS:[]});if(0===f.length)continue;var p=s.cloneNode(!0);f.match(S)?(p.style.fontFamily="Times New Roman",r=!0,p.defaultValue=o):(p.style.fontFamily=t,p.defaultValue=f),r&&(p.style.fontWeight="bold"),p.style.color=n,p.disabled=!0;var v=document.createElement("div");v.appendChild(p),l[d]=f,c.push({value:"["+v.innerHTML+"]",raw_text:u})}}if(c.length>0)for(var h,C=m(c);!(h=C()).done;){var b=h.value;e=e.replace(b.raw_text,b.value)}return{text:e,fields:l}}(v.text,d,u,p,s);v.text=x.text,v.form_fields=x.fields}return v},n.onInputHandler=function(e,t){var n=this;if(t!==this.state.textarea_text){var o=this.state.old_text.length+this.state.textarea_text.length;if(o>5e3&&(t=o-5e3>=t.length?"":t.substr(0,t.length-(o-5e3)))===this.state.textarea_text)return;this.setState((function(){return{textarea_text:t,combined_text:n.createPreview(t)}}))}},n.finalUpdate=function(e){var t=(0,c.useBackend)(this.context).act,n=this.createPreview(e,!0);t("save",n),this.setState((function(){return{textarea_text:"",previewSelected:"save",combined_text:n.text}}))},n.render=function(){var e=this,t=this.props,n=(t.value,t.textColor),r=t.fontFamily,a=t.stamps,i=t.backgroundColor;return p(t,["value","textColor","fontFamily","stamps","backgroundColor"]),(0,o.createComponentVNode)(2,u.Flex,{direction:"column",fillPositionedParent:!0,children:[(0,o.createComponentVNode)(2,u.Flex.Item,{children:(0,o.createComponentVNode)(2,u.Tabs,{children:[(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"Edit"===this.state.previewSelected?"grey":"white",selected:"Edit"===this.state.previewSelected,onClick:function(){return e.setState({previewSelected:"Edit"})},children:"Edit"},"marked_edit"),(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"Preview"===this.state.previewSelected?"grey":"white",selected:"Preview"===this.state.previewSelected,onClick:function(){return e.setState((function(){return{previewSelected:"Preview",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}}))},children:"Preview"},"marked_preview"),(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"confirm"===this.state.previewSelected?"red":"save"===this.state.previewSelected?"grey":"white",selected:"confirm"===this.state.previewSelected||"save"===this.state.previewSelected,onClick:function(){"confirm"===e.state.previewSelected?e.finalUpdate(e.state.textarea_text):"Edit"===e.state.previewSelected?e.setState((function(){return{previewSelected:"confirm",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}})):e.setState({previewSelected:"confirm"})},children:"confirm"===this.state.previewSelected?"confirm":"save"},"marked_done")]})}),(0,o.createComponentVNode)(2,u.Flex.Item,{grow:1,basis:1,children:"Edit"===this.state.previewSelected&&(0,o.createComponentVNode)(2,u.TextArea,{value:this.state.textarea_text,textColor:n,fontFamily:r,height:window.innerHeight-80+"px",backgroundColor:i,onInput:this.onInputHandler.bind(this)})||(0,o.createComponentVNode)(2,R,{value:this.state.combined_text,stamps:a,fontFamily:r,textColor:n})})]})},t}(o.Component);t.PaperSheet=function(e,t){var n=(0,c.useBackend)(t).data,r=n.edit_mode,a=n.text,i=n.paper_color,l=n.pen_color,s=void 0===l?"black":l,f=n.pen_font,p=void 0===f?"Verdana":f,m=n.stamps,v=n.stamp_class,h=(n.stamped,i&&"white"!==i?i:"#FFFFFF"),C=m&&null!==m?m:[];return(0,o.createComponentVNode)(2,d.Window,{theme:"paper",width:400,height:500,resizable:!0,children:(0,o.createComponentVNode)(2,d.Window.Content,{children:(0,o.createComponentVNode)(2,u.Box,{fillPositionedParent:!0,backgroundColor:h,children:function(e){switch(e){case 0:return(0,o.createComponentVNode)(2,R,{value:a,stamps:C,readOnly:!0});case 1:return(0,o.createComponentVNode)(2,P,{value:a,textColor:s,fontFamily:p,stamps:C,backgroundColor:h});case 2:return(0,o.createComponentVNode)(2,O,{value:a,stamps:C,stamp_class:v});default:return"ERROR ERROR WE CANNOT BE HERE!!"}}(r)})})})}},461:function(e,t,n){"use strict";t.__esModule=!0,t.TankDispenser=void 0;var o=n(1),r=n(18),a=n(17),i=n(51);t.TankDispenser=function(e,t){var n=(0,r.useBackend)(t),l=n.act,c=n.data;return(0,o.createComponentVNode)(2,i.Window,{width:280,height:105,children:(0,o.createComponentVNode)(2,i.Window.Content,{children:(0,o.createComponentVNode)(2,a.Section,{children:(0,o.createComponentVNode)(2,a.LabeledList,{children:[(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Plasma",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:c.plasma?"circle":"circle-o",content:"Dispense",disabled:!c.plasma,onClick:function(){return l("dispense-plasma")}}),children:c.plasma}),(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Oxygen",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:c.oxygen?"circle":"circle-o",content:"Dispense",disabled:!c.oxygen,onClick:function(){return l("dispense-oxygen")}}),children:c.oxygen})]})})})})}}});