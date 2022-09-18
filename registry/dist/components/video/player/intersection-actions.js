!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/intersection-actions"]=t():e["video/player/intersection-actions"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return p}});var n,o=coreApis.componentApis.video.playerAgent,i=coreApis.componentApis.video.playerLight,a=coreApis.observer,r=coreApis.settings,s=coreApis.utils.urls;!function(e){e.Top="视频顶部",e.Medium="视频中间",e.Bottom="视频底部"}(n||(n={}));const p={name:"playerIntersectionActions",author:{name:"FoundTheWOUT",link:"https://github.com/FoundTheWOUT"},tags:[componentsTags.video],urlInclude:s.allVideoUrls,entry:async e=>{let{settings:{options:t},metadata:s}=e;const p=t;Promise.resolve().then((async()=>{const{query:{video:e}}=o.playerAgent,t=await e.element(),c=document.getElementById("video-player")??(dq(".player-wrap")||dq(".player-module"));let u,d=!0;function l(e){switch(e){case n.Top:return 1;case n.Medium:return.5;case n.Bottom:return 0;default:return.5}}function m(){u.observe(c)}function f(){u.unobserve(c)}const y=e=>new IntersectionObserver((e=>{let[n]=e;n.isIntersecting?d||(d=!0,p.pause&&t.paused&&t.play(),p.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&!t.paused&&(0,i.lightOff)()):(t.paused||(d=!1),p.pause&&!t.paused&&t.pause(),p.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!p.pause&&(0,i.lightOn)())}),{threshold:l(e||p.triggerLocation)});(0,r.addComponentListener)(`${s.name}.triggerLocation`,(e=>{f(),u=y(e),m()})),u=y(),(0,a.videoChange)((async()=>{o.playerAgent.isAutoPlay()&&m(),t.addEventListener("play",m),t.addEventListener("ended",f)}))}))},displayName:"播放器位置动作",description:{"zh-CN":"设置当播放器移出视图的位置变化时执行的动作."},options:{triggerLocation:{defaultValue:n.Medium,displayName:"触发位置",dropdownEnum:n},pause:{defaultValue:!1,displayName:"自动暂停"},light:{defaultValue:!0,displayName:"自动开灯"}},commitHash:"cd68678fc633a7bf03c10ed990fa07c7af4563fa",coreVersion:"2.4.1"};return t=t.component}()}));