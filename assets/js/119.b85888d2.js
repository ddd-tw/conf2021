(self.webpackChunk_2021_ddd_conference=self.webpackChunk_2021_ddd_conference||[]).push([[119],{307:function(e,t,o){"use strict";o.d(t,{Z:function(){return y}});var r=o(9698),l=o(2791),n=o(9496),i=(o(9036),o(1626)),a=o(4297),s=o(5569),c=o(3194),u=o(6459),d=o(1197),f=o(9526);function p(e){return(0,f.Z)("MuiTab",e)}var b=(0,o(6171).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","wrapper"]),h=o(4637);const v=["className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],m=(0,d.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,l.Z)({},t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.Z)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped)}})((({theme:e,styleProps:t})=>(0,l.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& .${b.wrapper} > *:first-child`]:{marginBottom:6}},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${b.selected}`]:{opacity:1},[`&.${b.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"primary"===t.textColor&&{color:e.palette.text.secondary,[`&.${b.selected}`]:{color:e.palette.primary.main},[`&.${b.disabled}`]:{color:e.palette.text.disabled}},"secondary"===t.textColor&&{color:e.palette.text.secondary,[`&.${b.selected}`]:{color:e.palette.secondary.main},[`&.${b.disabled}`]:{color:e.palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12),lineHeight:1.5}))),x=(0,d.ZP)("span",{name:"MuiTab",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column",lineHeight:1.25});var y=n.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTab"}),{className:n,disabled:s=!1,disableFocusRipple:d=!1,fullWidth:f,icon:b,indicator:y,label:g,onChange:w,onClick:Z,onFocus:C,selected:S,selectionFollowsFocus:M,textColor:T="inherit",value:B,wrapped:W=!1}=o,P=(0,r.Z)(o,v),j=(0,l.Z)({},o,{disabled:s,disableFocusRipple:d,selected:S,icon:!!b,label:!!g,fullWidth:f,textColor:T,wrapped:W}),N=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:i,selected:s,disabled:u}=e,d={root:["root",n&&i&&"labelIcon",`textColor${(0,c.Z)(o)}`,r&&"fullWidth",l&&"wrapped",s&&"selected",u&&"disabled"],wrapper:["wrapper"]};return(0,a.Z)(d,p,t)})(j);return(0,h.jsxs)(m,(0,l.Z)({focusRipple:!d,className:(0,i.Z)(N.root,n),ref:t,role:"tab","aria-selected":S,disabled:s,onClick:e=>{!S&&w&&w(e,B),Z&&Z(e)},onFocus:e=>{M&&!S&&w&&w(e,B),C&&C(e)},styleProps:j,tabIndex:S?0:-1},P,{children:[(0,h.jsxs)(x,{className:N.wrapper,styleProps:j,children:[b,g]}),y]}))}))},954:function(e,t,o){"use strict";o.d(t,{Z:function(){return q}});var r=o(9698),l=o(2791),n=o(9496),i=(o(7679),o(9036),o(1626)),a=o(4297),s=o(1197),c=o(6459),u=o(4896);var d=function(e,t=166){let o;function r(...r){clearTimeout(o),o=setTimeout((()=>{e.apply(this,r)}),t)}return r.clear=()=>{clearTimeout(o)},r};function f(e){return e&&e.ownerDocument||document}var p=function(e){return f(e).defaultView||window};let b;function h(){if(b)return b;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),b="reverse",e.scrollLeft>0?b="default":(e.scrollLeft=1,0===e.scrollLeft&&(b="negative")),document.body.removeChild(e),b}function v(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var x=o(4637);const y=["onChange"],g={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var w=o(5732),Z=(0,w.Z)((0,x.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),C=(0,w.Z)((0,x.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),S=o(5569),M=o(9526),T=o(6171);function B(e){return(0,M.Z)("MuiTabScrollButton",e)}var W,P,j=(0,T.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const N=["className","direction","orientation","disabled"],E=(0,s.ZP)(S.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,l.Z)({},t.root,o.orientation&&t[o.orientation])}})((({styleProps:e})=>(0,l.Z)({width:40,flexShrink:0,opacity:.8,[`&.${j.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var R=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabScrollButton"}),{className:n,direction:s}=o,d=(0,r.Z)(o,N),f="rtl"===(0,u.Z)().direction,p=(0,l.Z)({isRtl:f},o),b=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,a.Z)(l,B,t)})(p);return(0,x.jsx)(E,(0,l.Z)({component:"div",className:(0,i.Z)(b.root,n),ref:t,role:null,styleProps:p,tabIndex:null},d,{children:"left"===s?W||(W=(0,x.jsx)(Z,{fontSize:"small"})):P||(P=(0,x.jsx)(C,{fontSize:"small"}))}))})),k=o(9576);function L(e){return(0,M.Z)("MuiTabs",e)}var z=(0,T.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),F=f;const H=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],A=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,I=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,$=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},X=(0,s.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,l.Z)({[`& .${z.scrollButtons}`]:(0,l.Z)({},t.scrollButtons,o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile)},t.root,o.vertical&&t.vertical)}})((({styleProps:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${z.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),O=(0,s.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,l.Z)({},t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY)}})((({styleProps:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),D=(0,s.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{styleProps:o}=e;return(0,l.Z)({},t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered)}})((({styleProps:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),Y=(0,s.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({styleProps:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:t.palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:t.palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),V=(0,s.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,y),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return n.useEffect((()=>{const e=d((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=p(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,x.jsx)("div",(0,l.Z)({style:g,ref:a},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),_={};var q=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabs"}),s=(0,u.Z)(),f="rtl"===s.direction,{"aria-label":b,"aria-labelledby":y,action:g,centered:w=!1,children:Z,className:C,component:S="div",allowScrollButtonsMobile:M=!1,indicatorColor:T="primary",onChange:B,orientation:W="horizontal",ScrollButtonComponent:P=R,scrollButtons:j="auto",selectionFollowsFocus:N,TabIndicatorProps:E={},TabScrollButtonProps:z={},textColor:q="primary",value:K,variant:U="standard",visibleScrollbar:G=!1}=o,J=(0,r.Z)(o,H),Q="scrollable"===U,ee="vertical"===W,te=ee?"scrollTop":"scrollLeft",oe=ee?"top":"left",re=ee?"bottom":"right",le=ee?"clientHeight":"clientWidth",ne=ee?"height":"width",ie=(0,l.Z)({},o,{component:S,allowScrollButtonsMobile:M,indicatorColor:T,orientation:W,vertical:ee,scrollButtons:j,textColor:q,variant:U,visibleScrollbar:G,fixed:!Q,hideScrollbar:Q&&!G,scrollableX:Q&&!ee,scrollableY:Q&&ee,centered:w&&!Q,scrollButtonsHideMobile:!M}),ae=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:s,classes:c}=e,u={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,a.Z)(u,L,c)})(ie);const[se,ce]=n.useState(!1),[ue,de]=n.useState(_),[fe,pe]=n.useState({start:!1,end:!1}),[be,he]=n.useState({overflow:"hidden",scrollbarWidth:0}),ve=new Map,me=n.useRef(null),xe=n.useRef(null),ye=()=>{const e=me.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:v(e,s.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==K){const e=xe.current.children;if(e.length>0){const t=e[ve.get(K)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},ge=(0,k.Z)((()=>{const{tabsMeta:e,tabMeta:t}=ye();let o,r=0;if(ee)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const l=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(f?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ne]:t?t[ne]:0};if(isNaN(ue[o])||isNaN(ue[ne]))de(l);else{const e=Math.abs(ue[o]-l[o]),t=Math.abs(ue[ne]-l[ne]);(e>=1||t>=1)&&de(l)}})),we=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=(()=>{})){const{ease:n=m,duration:i=300}=r;let a=null;const s=t[e];let c=!1;const u=()=>{c=!0},d=r=>{if(c)return void l(new Error("Animation cancelled"));null===a&&(a=r);const u=Math.min(1,(r-a)/i);t[e]=n(u)*(o-s)+s,u>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(d)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(d)}(te,me.current,e):me.current[te]=e},Ze=e=>{let t=me.current[te];ee?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),we(t)},Ce=()=>{const e=me.current[le];let t=0;const o=Array.from(xe.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[le]>e)break;t+=l[le]}return t},Se=()=>{Ze(-1*Ce())},Me=()=>{Ze(Ce())},Te=n.useCallback((e=>{he({overflow:null,scrollbarWidth:e})}),[]),Be=(0,k.Z)((e=>{const{tabsMeta:t,tabMeta:o}=ye();if(o&&t)if(o[oe]<t[oe]){const r=t[te]+(o[oe]-t[oe]);we(r,{animation:e})}else if(o[re]>t[re]){const r=t[te]+(o[re]-t[re]);we(r,{animation:e})}})),We=(0,k.Z)((()=>{if(Q&&!1!==j){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:r,clientWidth:l}=me.current;let n,i;if(ee)n=e>1,i=e<t-o-1;else{const e=v(me.current,s.direction);n=f?e<r-l-1:e>1,i=f?e>1:e<r-l-1}n===fe.start&&i===fe.end||pe({start:n,end:i})}}));n.useEffect((()=>{const e=d((()=>{ge(),We()})),t=p(me.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[ge,We]);const Pe=n.useMemo((()=>d((()=>{We()}))),[We]);n.useEffect((()=>()=>{Pe.clear()}),[Pe]),n.useEffect((()=>{ce(!0)}),[]),n.useEffect((()=>{ge(),We()})),n.useEffect((()=>{Be(_!==ue)}),[Be,ue]),n.useImperativeHandle(g,(()=>({updateIndicator:ge,updateScrollButtons:We})),[ge,We]);const je=(0,x.jsx)(Y,(0,l.Z)({},E,{className:(0,i.Z)(ae.indicator,E.className),styleProps:ie,style:(0,l.Z)({},ue,E.style)}));let Ne=0;const Ee=n.Children.map(Z,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Ne:e.props.value;ve.set(t,Ne);const o=t===K;return Ne+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===U,indicator:o&&!se&&je,selected:o,selectionFollowsFocus:N,onChange:B,textColor:q,value:t},1!==Ne||!1!==K||e.props.tabIndex?{}:{tabIndex:0}))})),Re=(()=>{const e={};e.scrollbarSizeListener=Q?(0,x.jsx)(V,{onChange:Te,className:(0,i.Z)(ae.scrollableX,ae.hideScrollbar)}):null;const t=fe.start||fe.end,o=Q&&("auto"===j&&t||!0===j);return e.scrollButtonStart=o?(0,x.jsx)(P,(0,l.Z)({orientation:W,direction:f?"right":"left",onClick:Se,disabled:!fe.start},z,{className:(0,i.Z)(ae.scrollButtons,z.className)})):null,e.scrollButtonEnd=o?(0,x.jsx)(P,(0,l.Z)({orientation:W,direction:f?"left":"right",onClick:Me,disabled:!fe.end},z,{className:(0,i.Z)(ae.scrollButtons,z.className)})):null,e})();return(0,x.jsxs)(X,(0,l.Z)({className:(0,i.Z)(ae.root,C),styleProps:ie,ref:t,as:S},J,{children:[Re.scrollButtonStart,Re.scrollbarSizeListener,(0,x.jsxs)(O,{className:ae.scroller,styleProps:ie,style:{overflow:be.overflow,[ee?"margin"+(f?"Left":"Right"):"marginBottom"]:G?void 0:-be.scrollbarWidth},ref:me,onScroll:Pe,children:[(0,x.jsx)(D,{"aria-label":b,"aria-labelledby":y,"aria-orientation":"vertical"===W?"vertical":null,className:ae.flexContainer,styleProps:ie,onKeyDown:e=>{const t=xe.current,o=F(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===W?"ArrowLeft":"ArrowUp",l="horizontal"===W?"ArrowRight":"ArrowDown";switch("horizontal"===W&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),$(t,o,I);break;case l:e.preventDefault(),$(t,o,A);break;case"Home":e.preventDefault(),$(t,null,A);break;case"End":e.preventDefault(),$(t,null,I)}},ref:xe,role:"tablist",children:Ee}),se&&je]}),Re.scrollButtonEnd]}))}))},3917:function(e,t,o){"use strict";var r=o(5732),l=o(4637);t.Z=(0,r.Z)((0,l.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew")},4396:function(e,t,o){var r=o(9165).Symbol;e.exports=r},732:function(e,t,o){var r=o(4396),l=o(1239),n=o(7058),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?l(e):n(e)}},3124:function(e,t,o){var r=o(2996),l=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(l,""):e}},6476:function(e,t,o){var r="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;e.exports=r},1239:function(e,t,o){var r=o(4396),l=Object.prototype,n=l.hasOwnProperty,i=l.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=n.call(e,a),o=e[a];try{e[a]=void 0;var r=!0}catch(s){}var l=i.call(e);return r&&(t?e[a]=o:delete e[a]),l}},7058:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9165:function(e,t,o){var r=o(6476),l="object"==typeof self&&self&&self.Object===Object&&self,n=r||l||Function("return this")();e.exports=n},2996:function(e){var t=/\s/;e.exports=function(e){for(var o=e.length;o--&&t.test(e.charAt(o)););return o}},6292:function(e,t,o){var r=o(6838),l=o(6668),n=o(2448),i=Math.max,a=Math.min;e.exports=function(e,t,o){var s,c,u,d,f,p,b=0,h=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var o=s,r=c;return s=c=void 0,b=t,d=e.apply(r,o)}function y(e){return b=e,f=setTimeout(w,t),h?x(e):d}function g(e){var o=e-p;return void 0===p||o>=t||o<0||v&&e-b>=u}function w(){var e=l();if(g(e))return Z(e);f=setTimeout(w,function(e){var o=t-(e-p);return v?a(o,u-(e-b)):o}(e))}function Z(e){return f=void 0,m&&s?x(e):(s=c=void 0,d)}function C(){var e=l(),o=g(e);if(s=arguments,c=this,p=e,o){if(void 0===f)return y(p);if(v)return clearTimeout(f),f=setTimeout(w,t),x(p)}return void 0===f&&(f=setTimeout(w,t)),d}return t=n(t)||0,r(o)&&(h=!!o.leading,u=(v="maxWait"in o)?i(n(o.maxWait)||0,t):u,m="trailing"in o?!!o.trailing:m),C.cancel=function(){void 0!==f&&clearTimeout(f),b=0,s=p=c=f=void 0},C.flush=function(){return void 0===f?d:Z(l())},C}},6838:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5073:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6764:function(e,t,o){var r=o(732),l=o(5073);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==r(e)}},6668:function(e,t,o){var r=o(9165);e.exports=function(){return r.Date.now()}},8209:function(e,t,o){var r=o(6292),l=o(6838);e.exports=function(e,t,o){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return l(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),r(e,t,{leading:n,maxWait:t,trailing:i})}},2448:function(e,t,o){var r=o(3124),l=o(6838),n=o(6764),i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var o=a.test(e);return o||s.test(e)?c(e.slice(2),o?2:8):i.test(e)?NaN:+e}}}]);