"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[543],{3461:(e,s,a)=>{a.d(s,{Z:()=>c});var n,t=a(7294);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const c=function(e){return t.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=t.createElement("path",{d:"M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM79.57 196.57a60 60 0 0 1 96.86 0 83.72 83.72 0 0 1-96.86 0ZM100 120a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm94 59.94a83.48 83.48 0 0 0-29-23.42 52 52 0 1 0-74 0 83.48 83.48 0 0 0-29 23.42 84 84 0 1 1 131.9 0Z"})))}},9543:(e,s,a)=>{a.r(s),a.d(s,{ConversationPage:()=>S,default:()=>T});var n=a(5893),t=a(8370),r=a(8826),c=a(3060),l=a(6765),i=a(9250),o=a(7294),u=a(1110),d=a(4184),v=a.n(d);var h,f=a(6925),m=a(9033),j=a(3416),x=a(966),g=a(8335),p=a(1072),w=function(e){var s=e.className,a=e.sendMessage,t=e.roomId,r=(0,p.$G)("pages").t,c=(0,o.useState)(""),l=c[0],i=c[1],u=(0,x.C)(g.is),d=function(){var e={messageId:(0,j.x0)(),messageType:"text",textOrPathToFile:l,roomId:t,author:u.userId};a(e),i("")},h=(0,o.useCallback)((function(e){"Enter"===e.key&&d()}),[l]);return(0,o.useEffect)((function(){return document.body.addEventListener("keydown",h),function(){document.body.removeEventListener("keydown",h)}}),[h]),(0,n.jsxs)("div",{className:v()("NGKkPNb2",{},[s]),children:[(0,n.jsx)(f.I,{placeholder:r("Напишите сообщение..."),className:"lmjk5h4e",value:l,onChange:i}),(0,n.jsx)(m.Z,{className:"qt3boMLN",onClick:d})]})},N=a(9655),b=a(8770);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const O=function(e){return o.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),h||(h=o.createElement("path",{d:"M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"})))};var Z=a(5914);var M=function(e){var s=e.className,a=e.roomId,t=(0,o.useState)(null),r=t[0],c=t[1],l=(0,p.$G)("pages").t,i=(0,x.C)(g.is);return(0,o.useEffect)((function(){if(i.conversations){var e=i.conversations.find((function(e){return e.roomId===a}));if(e){var s=e.friendId;(0,Z.E)(s).then((function(e){e&&c(e)})).catch(console.log)}}}),[i.conversations]),(0,n.jsxs)("div",{className:v()("HmuVuq_Y",{},[s]),children:[(0,n.jsxs)(N.rU,{to:"/messenger",className:"L1xmzEnL",children:[(0,n.jsx)(O,{className:"Pfxli94o"})," ",l("Назад")]}),null==r?void 0:r.firstName," ",null==r?void 0:r.lastName,(0,n.jsx)(b.q,{avatarPath:null==r?void 0:r.avatarPath,size:"M",isOnline:null==r?void 0:r.isOnline})]})},k=a(7484),E=a.n(k),P=a(4661),C=a(6649);var L=function(e){var s=e.className,a=e.message,t=e.removeMessage,r=(0,o.useState)(null),c=r[0],l=r[1],i=(0,p.$G)("pages"),u=i.t,d=i.i18n,h=(0,x.C)(g.is);return(0,o.useEffect)((function(){var e,s,n,t;e=void 0,s=void 0,t=function(){var e,s;return function(e,s){var a,n,t,r,c={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(c=0)),c;)try{if(a=1,n&&(t=2&l[0]?n.return:l[0]?n.throw||((t=n.return)&&t.call(n),0):n.next)&&!(t=t.call(n,l[1])).done)return t;switch(n=0,t&&(l=[2&l[0],t.value]),l[0]){case 0:case 1:t=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,n=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((t=(t=c.trys).length>0&&t[t.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!t||l[1]>t[0]&&l[1]<t[3])){c.label=l[1];break}if(6===l[0]&&c.label<t[1]){c.label=t[1],t=l;break}if(t&&c.label<t[2]){c.label=t[2],c.ops.push(l);break}t[2]&&c.ops.pop(),c.trys.pop();continue}l=s.call(e,c)}catch(e){l=[6,e],n=0}finally{a=t=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,P.ZP.get("".concat(P.T5,"/user/").concat(a.author))];case 1:return e=n.sent(),l(e.data.user),[3,3];case 2:return s=n.sent(),console.log(s),[3,3];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(a,r){function c(e){try{i(t.next(e))}catch(e){r(e)}}function l(e){try{i(t.throw(e))}catch(e){r(e)}}function i(e){var s;e.done?a(e.value):(s=e.value,s instanceof n?s:new n((function(e){e(s)}))).then(c,l)}i((t=t.apply(e,s||[])).next())}))}),[]),(0,n.jsxs)("div",{className:v()("qTjRnawn",{},[s]),children:[(0,n.jsx)(b.q,{avatarPath:null==c?void 0:c.avatarPath,size:"MS",className:"zWShtmEL"}),(0,n.jsxs)("span",{className:"fG8w2O_y",children:[(0,n.jsxs)("div",{className:"ug534KDM",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"ZGP3n1hj",children:E()(a.createdAt).locale(d.language).toNow(!0)+u(" назад")})}),(0,n.jsx)("div",{children:(null==h?void 0:h.userId)===a.author&&(0,n.jsx)(C.Z,{className:"daqOTnHV",onClick:function(){return t(a.messageId)}})})]}),(0,n.jsx)("div",{className:"ADXiP3M8",children:a.textOrPathToFile})]})]})};var I=function(e){e.className;var s=(0,o.useRef)(null),a=(0,i.s0)(),t=(0,x.C)(g.is).conversations,r=(0,i.UO)().roomId;if((0,o.useEffect)((function(){t&&(t.find((function(e){return e.roomId===r}))||a("*",{replace:!0}))}),[t]),!r)return(0,n.jsx)("div",{children:"Такого диалога не существует"});var c=(0,u.Z)(r),d=(c.log,c.messages),v=(c.users,c.sendMessage),h=c.removeMessage;return(0,o.useEffect)((function(){s.current&&(s.current.scrollTop=s.current.scrollHeight)}),[d]),(0,n.jsx)("div",{className:"jGbBBFW5",children:(0,n.jsxs)(l.O,{className:"MyoXwBQK",children:[(0,n.jsx)(M,{roomId:r}),(0,n.jsx)("div",{className:"loM0MVMK",ref:s,children:d.map((function(e){return(0,n.jsx)(L,{message:e,removeMessage:h},e.messageId)}))}),(0,n.jsx)(w,{roomId:r,sendMessage:v})]})})};var F=a(775),S=function(e){e.className;var s=(0,F.X)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h,{}),(0,n.jsxs)(r.Z,{className:s?"_awlvnuX":"",children:[(0,n.jsx)(c.K,{}),(0,n.jsx)(I,{})]})]})};const T=S},8826:(e,s,a)=>{a.d(s,{Z:()=>l});var n=a(5893),t=a(4184),r=a.n(t);var c=a(775);const l=function(e){var s,a=e.className,t=e.children,l=e.headerStyle,i=(0,c.X)();return(0,n.jsx)("div",{className:r()("FnIs3UxI",(s={},s._qqlRrmD=l,s.kYVyYLOf=i&&!l,s),[a]),children:t})}},8370:(e,s,a)=>{a.d(s,{h:()=>L});var n,t=a(5893),r=a(4184),c=a.n(r),l=a(8826),i=a(3743),o=a(9250),u=a(2519),d=a(3366),v=a(8770),h=a(966),f=a(8335),m=a(7294);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}const x=function(e){return m.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=m.createElement("path",{d:"m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z"})))};var g,p=a(9655),w=a(5667),N=a(1051);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}const y=function(e){return m.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),g||(g=m.createElement("path",{d:"M116 216a12 12 0 0 1-12 12H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h56a12 12 0 0 1 0 24H52v152h52a12 12 0 0 1 12 12Zm108.49-96.49-40-40a12 12 0 0 0-17 17L187 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17Z"})))};var O=a(3461);const Z="lLj83MT8",M="bDPtG7VD";var k=a(4514),E=a(1072),P=function(e){var s,a=e.className,n=(0,m.useState)(!1),r=n[0],l=n[1],u=(0,h.C)(f.is),d=(0,i.T)(),j=(0,o.s0)(),g=(0,E.$G)("pages").t;return(0,m.useEffect)((function(){var e=function(e){e.target.closest("#profileBtn")||l(!1)};return document.body.addEventListener("click",e),function(){document.body.removeEventListener("click",e)}}),[]),(0,t.jsxs)("div",{className:c()("zXdybQLe",{},[a]),onClick:function(e){e.target.closest("#container")||l((function(e){return!e}))},id:"profileBtn",children:[(0,t.jsxs)("div",{className:"g_HDaOnQ",children:[(0,t.jsx)(v.q,{size:"S",avatarPath:u.avatarPath,className:"zYGuNlkk"}),(0,t.jsx)(x,{className:"AhJwW0xn"})]}),(0,t.jsxs)("div",{className:c()("vH4jcesl",(s={},s.zOUMz4rj=r,s),[]),id:"container",children:[(0,t.jsxs)(p.rU,{className:Z,to:"/changeProfile",children:[(0,t.jsx)(O.Z,{className:M}),g("Редактировать профиль")]}),(0,t.jsxs)("span",{className:Z,onClick:function(){d((0,w.w7)()),j("/")},children:[(0,t.jsx)(y,{className:M}),g("Выйти")]}),(0,t.jsxs)("div",{className:"KZfVicZM",children:[(0,t.jsx)(k.k,{short:!0}),(0,t.jsx)(N.Z,{})]})]})]})};var C=a(775),L=function(e){e.className,(0,i.T)(),(0,o.s0)();var s,a=(0,C.X)();return(0,t.jsxs)("div",{className:"KVbUQodg",children:[(0,t.jsx)("div",{className:c()("shonqUwZ",(s={},s.Rqh6NHRV=a,s),[]),children:(0,t.jsxs)(l.Z,{className:"ap0ogjxd",headerStyle:!0,children:[(0,t.jsx)(u.Dt,{}),(0,t.jsx)(P,{})]})}),(0,t.jsx)(d.P_,{})]})}},3060:(e,s,a)=>{a.d(s,{K:()=>k});var n,t=a(5893),r=a(4184),c=a.n(r),l=a(3048),i=a(3461),o=a(7294);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}const d=function(e){return o.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),n||(n=o.createElement("path",{d:"M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 160H44V60h168ZM68 92a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Zm0 36a12 12 0 0 1 12-12h96a12 12 0 0 1 0 24H80a12 12 0 0 1-12-12Z"})))};var v;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}const f=function(e){return o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#fff",viewBox:"0 0 256 256"},e),v||(v=o.createElement("path",{d:"M128 20a108 108 0 0 0-96.15 157.23L21 209.66A20 20 0 0 0 46.34 235l32.43-10.81A108 108 0 1 0 128 20Zm0 192a84 84 0 0 1-42.06-11.27 12 12 0 0 0-6-1.62 12.1 12.1 0 0 0-3.8.62l-29.79 9.93 9.93-29.79a12 12 0 0 0-1-9.81A84 84 0 1 1 128 212Z"})))};var m=a(7974);const j="r6gTLj8k";var x=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j}),(0,t.jsx)("div",{className:j})]})},g=a(966),p=a(8335),w=a(1072);const N="kMmc9nue",b="qL8zRbrL",y="sYzMPwMb",O="lg3MWbpi",Z="wXJOgWkD";var M=a(775),k=function(e){var s=e.className,a=(0,g.C)(p.MS),n=(0,w.$G)("pages").t;return(0,M.X)()?(0,t.jsxs)("div",{className:"gt4tTp2l",children:[(0,t.jsx)(l.F,{to:"/news",className:O,active:!0,activeClass:Z,children:(0,t.jsx)(d,{className:y})}),(0,t.jsx)(l.F,{to:"/friends",className:O,active:!0,activeClass:Z,children:(0,t.jsx)(m.Z,{className:y})}),(0,t.jsx)(l.F,{to:"/messenger",className:O,active:!0,activeClass:Z,children:(0,t.jsx)(f,{className:y})}),(0,t.jsx)(l.F,{to:"/profile",className:O,active:!0,activeClass:Z,children:(0,t.jsx)(i.Z,{className:y})})]}):(0,t.jsx)("div",{className:c()("_C1Y19F4",{},[s]),children:(0,t.jsx)("nav",{className:"cTBJmDKy",children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.F,{to:"/profile",className:N,children:[(0,t.jsx)(i.Z,{className:b}),n("Моя страница")]}),(0,t.jsxs)(l.F,{to:"/news",className:N,children:[(0,t.jsx)(d,{className:b}),n("Новости")]}),(0,t.jsxs)(l.F,{to:"/messenger",className:N,children:[(0,t.jsx)(f,{className:b}),n("Мессенджер")]}),(0,t.jsxs)(l.F,{to:"/friends",className:N,children:[(0,t.jsx)(m.Z,{className:b}),n("Друзья")]})]}):(0,t.jsx)(x,{})})})}},775:(e,s,a)=>{a.d(s,{X:()=>n});var n=function(){return document.documentElement.clientWidth<=900}},3416:(e,s,a)=>{a.d(s,{x0:()=>n});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,s)=>e+((s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_")),"")}}]);