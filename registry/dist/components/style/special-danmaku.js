!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/special-danmaku"]=n():t["style/special-danmaku"]=n()}(self,(function(){return function(){var t,n,e={359:function(t,n,e){var o=e(645)((function(t){return t[1]}));o.push([t.id,"body.disable-highlight-danmaku-style .b-danmaku-high {\n  display: block !important;\n  padding: 0 !important;\n  line-height: 1.125 !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-icon {\n  display: none !important;\n}\nbody.disable-highlight-danmaku-style .b-danmaku-high .b-danmaku-high-text {\n  margin: 0 !important;\n  text-shadow: inherit;\n}\n\nbody.disable-up-danmaku-style .b-danmaku-up {\n  padding: 0 !important;\n  line-height: 1.125 !important;\n  background-color: transparent !important;\n  border-radius: 0 !important;\n}\nbody.disable-up-danmaku-style .b-danmaku-up .b-danmaku-up-tip {\n  display: none !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var a={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var r=this[i][0];null!=r&&(a[r]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);o&&a[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},655:function(t,n,e){var o=e(359);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={id:t,exports:{}};return e[t](i,i.exports,a),i.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);a.r(i);var r={};t=t||[null,n({}),n([]),n(n)];for(var u=2&o&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(t){r[t]=function(){return e[t]}}));return r.default=function(){return e},a.d(i,r),i},a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";a.d(i,{component:function(){return u}});var t=coreApis.componentApis.define,n=coreApis.componentApis.styledComponent,e=coreApis.utils.urls,o=coreApis.settings;const r=(0,t.defineOptionsMetadata)({highlight:{displayName:"禁用高赞弹幕",defaultValue:!0},up:{displayName:"禁用UP主弹幕",defaultValue:!0}}),u=(0,t.defineComponentMetadata)({displayName:"禁用特殊弹幕样式",tags:[componentsTags.style],...(0,n.toggleStyle)("disableSpecialDanmaku",(()=>Promise.resolve().then(a.t.bind(a,655,23))),(t=>{let{metadata:n,settings:e}=t;Object.keys(e.options).forEach((t=>{(0,o.addComponentListener)(`${n.name}.${t}`,(n=>{document.body.classList.toggle(`disable-${t}-danmaku-style`,n)}),!0)}))})),urlInclude:e.playerUrls,description:{"zh-CN":"移除高赞弹幕或 UP 主弹幕的特殊样式, 弹幕内容不会移除."},options:r,commitHash:"cd68678fc633a7bf03c10ed990fa07c7af4563fa",coreVersion:"2.4.1"})}(),i=i.component}()}));