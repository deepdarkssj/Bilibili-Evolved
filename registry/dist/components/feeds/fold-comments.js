!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["feeds/fold-comments"]=n():e["feeds/fold-comments"]=n()}(self,(function(){return function(){var e,n,t={244:function(e,n,t){var o=t(645)((function(e){return e[1]}));o.push([e.id,".panel-area .bb-comment .fold-comment {\n  position: sticky;\n  bottom: 0;\n  height: 40px;\n  width: calc(100% + 48px);\n  font-size: 14px;\n  transform: translateX(-24px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: #99a2aa;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  z-index: 110;\n  border-radius: 4px;\n}\n.panel-area .bb-comment .fold-comment:hover {\n  color: black;\n}\nbody.dark .panel-area .bb-comment .fold-comment {\n  background-color: #444;\n  color: #eee;\n}\nbody.dark .panel-area .bb-comment .fold-comment:hover {\n  color: var(--theme-color);\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){
// eslint-disable-next-line prefer-destructuring
var i=this[c][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},895:function(e,n,t){var o=t(244);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},23:function(e){"use strict";e.exports=coreApis.componentApis.feeds.api},156:function(e){"use strict";e.exports=coreApis.observer}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={id:e,exports:{}};return t[e](c,c.exports,r),c.exports}n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var c=Object.create(null);r.r(c);var i={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},r.d(c,i),c},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){"use strict";r.d(c,{component:function(){return n}});var e=coreApis.componentApis.styledComponent;const n={name:"foldComments",displayName:"快速收起评论",description:{"zh-CN":"动态里查看评论区时, 在底部添加一个`收起评论`按钮, 这样就不用再回到上面收起了."},urlInclude:coreApis.utils.urls.feedsUrlsWithoutDetail,tags:[componentsTags.feeds],entry:(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,895,23))),(async()=>{const{forEachFeedsCard:e}=await Promise.resolve().then(r.t.bind(r,23,23)),{childList:n}=await Promise.resolve().then(r.t.bind(r,156,23));e({added:e=>(e=>{const t=n=>{const t=document.createElement("div");t.classList.add("fold-comment"),t.innerHTML="收起评论";const o=n.querySelector(".bb-comment");null===o.querySelector(".fold-comment")&&(null!==o?(t.addEventListener("click",(()=>{const n=e.querySelector(".button-bar").children[1];null!==n&&(n.click(),e.scrollIntoView())})),o.insertAdjacentElement("beforeend",t)):console.error("未找到评论区"))},o=e.querySelector(".panel-area");if(null===o&&console.log(e),0===o.childElementCount){const[e]=n(o,(n=>{n.length>0&&(t(o),e.disconnect())}))}else t(o)})(e.element)})})),commitHash:"f5c4f2d04dda5328af67975ca8ffeec858e441b7"}}(),c=c.component}()}));