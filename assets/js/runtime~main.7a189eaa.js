!function(){"use strict";var e,n,t,r={},o={};function u(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,u),t.loaded=!0,t.exports}u.m=r,u.c=o,e=[],u.O=function(n,t,r,o){if(!t){var i=1/0;for(a=0;a<e.length;a++){t=e[a][0],r=e[a][1],o=e[a][2];for(var c=!0,f=0;f<t.length;f++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](t[f])}))?t.splice(f--,1):(c=!1,o<i&&(i=o));c&&(e.splice(a--,1),n=r())}return n}o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[t,r,o]},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,{a:n}),n},u.d=function(e,n){for(var t in n)u.o(n,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(n,t){return u.f[t](e,n),n}),[]))},u.u=function(e){return"assets/js/"+({237:"1df93b7f",592:"common",632:"308e483f"}[e]||e)+"."+{119:"b85888d2",237:"dbef2068",592:"d892d227",597:"ddcfacef",632:"b20b2829",856:"93dc2e66"}[e]+".js"},u.miniCssF=function(e){return"assets/css/styles.c1d0b451.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="2021-ddd-conference:",u.l=function(e,r,o,i){if(n[e])n[e].push(r);else{var c,f;if(void 0!==o)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var s=a[d];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==t+o){c=s;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",t+o),c.src=e),n[e]=[r];var l=function(t,r){c.onerror=c.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",u.gca=function(e){return e={"1df93b7f":"237",common:"592","308e483f":"632"}[e]||e,u.p+u.u(e)},function(){var e={303:0,532:0};u.f.j=function(n,t){var r=u.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(303|532)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=u.p+u.u(n),c=new Error;u.l(i,(function(t){if(u.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+n,n)}},u.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,i=t[0],c=t[1],f=t[2],a=0;for(r in c)u.o(c,r)&&(u.m[r]=c[r]);if(f)var d=f(u);for(n&&n(t);a<i.length;a++)o=i[a],u.o(e,o)&&e[o]&&e[o][0](),e[i[a]]=0;return u.O(d)},t=self.webpackChunk_2021_ddd_conference=self.webpackChunk_2021_ddd_conference||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}()}();