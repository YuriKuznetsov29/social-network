"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[543],{3461:(e,s,a)=>{a.d(s,{Z:()=>c});var n,t=a(7294);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const c=function(e){return t.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=t.createElement("path",{d:"M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM79.57 196.57a60 60 0 0 1 96.86 0 83.72 83.72 0 0 1-96.86 0ZM100 120a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm94 59.94a83.48 83.48 0 0 0-29-23.42 52 52 0 1 0-74 0 83.48 83.48 0 0 0-29 23.42 84 84 0 1 1 131.9 0Z"})))}},9543:(e,s,a)=>{a.r(s),a.d(s,{ConversationPage:()=>F,default:()=>H});var n=a(5893),t=a(8370),r=a(8826),c=a(3060),i=a(6765),l=a(9250),o=a(7294),d=a(1110),u=a(4184),m=a.n(u),v=a(6925),h=a(9033),f=a(3416),j=a(966),x=a(8335),g=a(1072);var p,N=(0,o.memo)((function(e){var s=e.className,a=e.sendMessage,t=e.roomId,r=(0,g.$G)("pages").t,c=(0,o.useState)(""),i=c[0],l=c[1],d=(0,j.C)(x.is),u=function(){var e={messageId:(0,f.x0)(),messageType:"text",textOrPathToFile:i,roomId:t,author:d.userId};a(e),l("")},p=(0,o.useCallback)((function(e){"Enter"===e.key&&u()}),[i]);return(0,o.useEffect)((function(){return document.body.addEventListener("keydown",p),function(){document.body.removeEventListener("keydown",p)}}),[p]),(0,n.jsxs)("div",{className:m()("NGKkPNb2",{},[s]),children:[(0,n.jsx)(v.I,{placeholder:r("Напишите сообщение..."),className:"lmjk5h4e",value:i,onChange:l}),(0,n.jsx)(h.Z,{className:"qt3boMLN",onClick:u})]})})),w=a(9655),b=a(9588);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const O=function(e){return o.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),p||(p=o.createElement("path",{d:"M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"})))};var E=a(5914);var Z=(0,o.memo)((function(e){var s=e.className,a=e.roomId,t=(0,o.useState)(null),r=t[0],c=t[1],i=(0,g.$G)("pages").t,l=(0,j.C)(x.is);return(0,o.useEffect)((function(){if(l.conversations){var e=l.conversations.find((function(e){return e.roomId===a}));if(e){var s=e.friendId;(0,E.E)(s).then((function(e){e&&c(e)})).catch(console.log)}}}),[l.conversations]),(0,n.jsxs)("div",{className:m()("HmuVuq_Y",{},[s]),children:[(0,n.jsxs)(w.rU,{to:"/messenger",className:"L1xmzEnL",children:[(0,n.jsx)(O,{className:"Pfxli94o"})," ",i("Назад")]}),null==r?void 0:r.firstName," ",null==r?void 0:r.lastName,(0,n.jsx)(b.q,{avatarPath:null==r?void 0:r.avatarPath,size:"M",isOnline:null==r?void 0:r.isOnline})]})})),M=a(7484),k=a.n(M),P=a(6649);var C=function(e){var s=e.className,a=e.message,t=e.removeMessage,r=(0,o.useState)(null),c=r[0],i=r[1],l=(0,g.$G)("pages"),d=l.t,u=l.i18n,v=(0,j.C)(x.is);return(0,o.useEffect)((function(){(0,E.E)(a.author).then((function(e){e&&i(e)})).catch(console.log)}),[]),(0,n.jsxs)("div",{className:m()("qTjRnawn",{},[s]),children:[(0,n.jsx)(b.q,{avatarPath:null==c?void 0:c.avatarPath,size:"MS",className:"zWShtmEL"}),(0,n.jsxs)("span",{className:"fG8w2O_y",children:[(0,n.jsxs)("div",{className:"ug534KDM",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"ZGP3n1hj",children:k()(a.createdAt).locale(u.language).toNow(!0)+d(" назад")})}),(0,n.jsx)("div",{children:(null==v?void 0:v.userId)===a.author&&(0,n.jsx)(P.Z,{className:"daqOTnHV",onClick:function(){return t(a.messageId)}})})]}),(0,n.jsx)("div",{className:"ADXiP3M8",children:a.textOrPathToFile})]})]})};var L=function(e){e.className;var s=(0,o.useRef)(null),a=(0,l.s0)(),t=(0,g.$G)().t,r=(0,j.C)(x.is).conversations,c=(0,l.UO)().roomId;if((0,o.useEffect)((function(){r&&(r.find((function(e){return e.roomId===c}))||a("*",{replace:!0}))}),[r]),!c)return(0,n.jsx)("div",{children:t("Такого диалога не существует")});var u=(0,d.Z)(c),m=u.messages,v=u.sendMessage,h=u.removeMessage;return(0,o.useEffect)((function(){s.current&&(s.current.scrollTop=s.current.scrollHeight)}),[m]),(0,o.useEffect)((function(){return window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),function(){window.removeEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))}})),(0,n.jsx)("div",{className:"jGbBBFW5",children:(0,n.jsxs)(i.O,{className:"MyoXwBQK",children:[(0,n.jsx)(Z,{roomId:c}),(0,n.jsx)("div",{className:"loM0MVMK",ref:s,children:m.map((function(e){return(0,n.jsx)(C,{message:e,removeMessage:h},e.messageId)}))}),(0,n.jsx)(N,{roomId:c,sendMessage:v})]})})};var I=a(775),F=function(e){e.className;var s=(0,I.X)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h,{}),(0,n.jsxs)(r.Z,{className:s?"_awlvnuX":"",children:[(0,n.jsx)(c.K,{}),(0,n.jsx)(L,{})]})]})};const H=F},8826:(e,s,a)=>{a.d(s,{Z:()=>i});var n=a(5893),t=a(4184),r=a.n(t);var c=a(775);const i=function(e){var s,a=e.className,t=e.children,i=e.headerStyle,l=(0,c.X)();return console.log(l,"mobile"),(0,n.jsx)("div",{className:r()("FnIs3UxI",(s={},s._qqlRrmD=i,s.kYVyYLOf=l&&!i,s),[a]),children:t})}},8370:(e,s,a)=>{a.d(s,{h:()=>L});var n,t=a(5893),r=a(4184),c=a.n(r),i=a(8826),l=a(3743),o=a(9250),d=a(2519),u=a(2116),m=a(9588),v=a(966),h=a(8335),f=a(7294);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}const x=function(e){return f.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=f.createElement("path",{d:"m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"})))};var g,p=a(9655),N=a(7312),w=a(1051);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}const y=function(e){return f.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),g||(g=f.createElement("path",{d:"M116 216a12 12 0 0 1-12 12H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h56a12 12 0 0 1 0 24H52v152h52a12 12 0 0 1 12 12Zm108.49-96.49-40-40a12 12 0 0 0-17 17L187 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17Z"})))};var O=a(3461),E=a(4514),Z=a(1072);const M="lLj83MT8",k="bDPtG7VD";var P=function(e){var s,a=e.className,n=(0,f.useState)(!1),r=n[0],i=n[1],d=(0,v.C)(h.is),u=(0,l.T)(),j=(0,o.s0)(),g=(0,Z.$G)("pages").t;return(0,f.useEffect)((function(){var e=function(e){e.target.closest("#profileBtn")||i(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]),(0,t.jsxs)("div",{className:c()("zXdybQLe",{},[a]),onClick:function(e){e.target.closest("#container")||i((function(e){return!e}))},id:"profileBtn",children:[(0,t.jsxs)("div",{className:"g_HDaOnQ",children:[(0,t.jsx)(m.q,{size:"S",avatarPath:d.avatarPath,className:"zYGuNlkk"}),(0,t.jsx)(x,{className:"AhJwW0xn"})]}),(0,t.jsxs)("div",{className:c()("vH4jcesl",(s={},s.zOUMz4rj=r,s),[]),id:"container",children:[(0,t.jsxs)(p.rU,{className:M,to:"/changeProfile",children:[(0,t.jsx)(O.Z,{className:k}),g("Редактировать профиль")]}),(0,t.jsxs)("span",{className:M,onClick:function(){u((0,N.w7)({navigate:j}))},children:[(0,t.jsx)(y,{className:k}),g("Выйти")]}),(0,t.jsxs)("div",{className:"KZfVicZM",children:[(0,t.jsx)(E.k,{short:!0}),(0,t.jsx)(w.Z,{})]})]})]})};var C=a(775),L=function(e){e.className,(0,l.T)(),(0,o.s0)();var s,a=(0,C.X)();return(0,t.jsxs)("div",{className:"KVbUQodg",children:[(0,t.jsx)("div",{className:c()("shonqUwZ",(s={},s.Rqh6NHRV=a,s),[]),children:(0,t.jsxs)(i.Z,{className:"ap0ogjxd",headerStyle:!0,children:[(0,t.jsx)(d.Dt,{}),(0,t.jsx)(P,{})]})}),(0,t.jsx)(u.P_,{})]})}},3060:(e,s,a)=>{a.d(s,{K:()=>M});var n,t=a(5893),r=a(4184),c=a.n(r),i=a(3048),l=a(3461),o=a(7294);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}const u=function(e){return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=o.createElement("path",{d:"M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 160H44V60h168ZM68 92a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Z"})))};var m;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}const h=function(e){return o.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),m||(m=o.createElement("path",{d:"M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20Zm0 192a84 84 0 0 1-42.06-11.27 12 12 0 0 0-6-1.62 12.1 12.1 0 0 0-3.8.62l-29.79 9.93 9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212Z"})))};var f=a(7974);const j="r6gTLj8k";var x=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j})]})},g=a(966),p=a(8335),N=a(1072);const w="kMmc9nue",b="qL8zRbrL",y="sYzMPwMb",O="lg3MWbpi",E="wXJOgWkD";var Z=a(775),M=function(e){var s=e.className,a=(0,g.C)(p.MS),n=(0,N.$G)("pages").t;return(0,Z.X)()?(0,t.jsxs)("div",{className:"gt4tTp2l",children:[(0,t.jsx)(i.F,{to:"/news",className:O,active:!0,activeClass:E,children:(0,t.jsx)(u,{className:y})}),(0,t.jsx)(i.F,{to:"/friends",className:O,active:!0,activeClass:E,children:(0,t.jsx)(f.Z,{className:y})}),(0,t.jsx)(i.F,{to:"/messenger",className:O,active:!0,activeClass:E,children:(0,t.jsx)(h,{className:y})}),(0,t.jsx)(i.F,{to:"/profile",className:O,active:!0,activeClass:E,children:(0,t.jsx)(l.Z,{className:y})})]}):(0,t.jsx)("div",{className:c()("_C1Y19F4",{},[s]),children:(0,t.jsx)("nav",{className:"cTBJmDKy",children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.F,{to:"/profile",className:w,children:[(0,t.jsx)(l.Z,{className:b}),n("Моя страница")]}),(0,t.jsxs)(i.F,{to:"/news",className:w,children:[(0,t.jsx)(u,{className:b}),n("Новости")]}),(0,t.jsxs)(i.F,{to:"/messenger",className:w,children:[(0,t.jsx)(h,{className:b}),n("Мессенджер")]}),(0,t.jsxs)(i.F,{to:"/friends",className:w,children:[(0,t.jsx)(f.Z,{className:b}),n("Друзья")]})]}):(0,t.jsx)(x,{})})})}},775:(e,s,a)=>{a.d(s,{X:()=>n});var n=function(){return document.documentElement.clientWidth<=900}},3416:(e,s,a)=>{a.d(s,{x0:()=>n});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+((s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_")),"")}}]);