!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/player-on-top"]=t():n["style/player-on-top"]=t()}(self,(function(){return function(){var n,t,e={962:function(n,t,e){var o=e(645)((function(n){return n[1]}));o.push([n.id,".v-wrap .l-con,\n.v-wrap .r-con {\n  display: flex;\n  flex-direction: column;\n  margin-top: 24px;\n}\n.v-wrap .l-con .player-wrap {\n  order: -1;\n}\n.v-wrap .l-con .video-info {\n  margin: 20px 0 0 0 !important;\n  padding: 0 !important;\n  height: auto !important;\n}\n.v-wrap .l-con .video-info .video-data .argue,\n.v-wrap .l-con .video-info .video-data .copyright {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.v-wrap .r-con .danmaku-box {\n  order: -1;\n}\n.v-wrap .r-con .up-info {\n  padding-top: 0 !important;\n}",""]),n.exports=o},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,o){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&r[p[0]]||(e&&(p[2]?p[2]="".concat(e," and ").concat(p[2]):p[2]=e),t.push(p))}},t}},92:function(n,t,e){var o=e(962);o&&o.__esModule&&(o=o.default),n.exports="string"==typeof o?o:o.toString()}},o={};function r(n){var t=o[n];if(void 0!==t)return t.exports;var i=o[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var a={};n=n||[null,t({}),t([]),t(t)];for(var c=2&o&&e;"object"==typeof c&&!~n.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(n){a[n]=function(){return e[n]}}));return a.default=function(){return e},r.d(i,a),i},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});const n=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"playerOnTop",displayName:"播放器置顶",description:{"zh-CN":"在视频页面中将播放器放在页面最上方."},instantStyles:[{name:"playerOnTop",style:()=>Promise.resolve().then(r.t.bind(r,92,23))}],tags:[componentsTags.style,componentsTags.video],entry:none,commitHash:"cd68678fc633a7bf03c10ed990fa07c7af4563fa",coreVersion:"2.4.1"})}(),i=i.component}()}));