(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[6],{43:function(e,t,n){"use strict";var a=n(26),o=n(27),i=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,[{key:"setItem",value:function(e,t){if("string"!==typeof t)throw new Error("Value of localStorage by key ".concat(e," is not string."));if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.setItem(e,t)}},{key:"getItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));return localStorage.getItem(e)}},{key:"unsetItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();t.a=new i},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c}));var a="first-name",o="last-name",i="email",c="password"},49:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.f78c8a42.webp"},50:function(e,t,n){"use strict";t.a=n.p+"static/media/github.04be58c1.svg"},51:function(e,t,n){"use strict";t.a=n.p+"static/media/gitlab.a9ff2a14.svg"},59:function(e,t,n){e.exports={BottomNavigation:"BottomNavigation_BottomNavigation__22_Xd",BottomNavigation__item:"BottomNavigation_BottomNavigation__item__1iR41",Link__text_active:"BottomNavigation_Link__text_active__2_gGB",Link__icon_active:"BottomNavigation_Link__icon_active__3Br6u",BottomNavigation__link:"BottomNavigation_BottomNavigation__link__1icWk",Link__icon:"BottomNavigation_Link__icon__1m-6K",Link__text:"BottomNavigation_Link__text__dhgox"}},63:function(e,t,n){e.exports={header:"Header_header__7qZPc"}},64:function(e,t,n){e.exports={headerLogo:"HeaderLogo_headerLogo__2Yzkn"}},74:function(e,t,n){"use strict";n.r(t);var a=n(54),o=n(12),i=n(10),c=n.n(i),r=n(1),s=n(3),l=n(47),d=n(43),u=n(44),b=n(25),m=n(59),j=n.n(m),h=n(72),f=n(62),p=n(6),v=function(){var e=Object(s.g)().pathname,t=Object(r.useState)(null),n=Object(o.a)(t,2),a=n[0],i=n[1],c=[{name:"Library",pathname:"/books-review/library",icon:f.a},{name:"My Bookshelf",pathname:"/books-review/bookshelf",icon:f.b},{name:"Contacts",pathname:"/books-review/contacts",icon:f.c}];Object(r.useEffect)((function(){var t=c.find((function(t){return t.pathname===e}));i((null===t||void 0===t?void 0:t.name)||c[0].name)}),[]);return Object(p.jsx)("ul",{className:j.a.BottomNavigation,children:c.map((function(e,t){return Object(p.jsx)("li",{onClick:(n=e.name,function(){i(n)}),className:j.a.BottomNavigation__item,children:Object(p.jsxs)(b.b,{to:e.pathname,className:j.a.BottomNavigation__link,children:[Object(p.jsx)(h.a,{icon:e.icon,className:"".concat(j.a.Link__icon," ").concat(a===e.name?j.a.Link__icon_active:"")}),Object(p.jsx)("span",{className:"".concat(j.a.Link__text," ").concat(a===e.name?j.a.Link__text_active:""),children:e.name})]})},t);var n}))})},g=n(63),_=n.n(g),O=n(64),x=n.n(O),w=n(49);var k=function(){return Object(p.jsx)("img",{className:x.a.headerLogo,src:w.a,alt:"logo"})},y=n(50),N=n(51),L=function(){return Object(p.jsxs)("header",{className:_.a.header,children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"downloadPrompt",children:Object(p.jsx)("div",{className:"promptControllers",children:Object(p.jsx)("button",{className:"downloadButton",children:"Download"})})}),Object(p.jsxs)("div",{className:"flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0",children:[Object(p.jsx)("a",{href:"https://github.com/Assetbekov-Almar",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:y.a,alt:"github"})}),Object(p.jsx)("a",{href:"https://gitlab.com/almar-a",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:N.a,className:"w-8 h-8",alt:"gitlab"})})]})]})},B=Object(r.lazy)((function(){return n.e(14).then(n.bind(null,81))})),P=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,82))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,75))})),I=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,77))}));function E(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],i=t[1];Object(r.useEffect)((function(){if(n)i(!1);else{var e=document.getElementById("installContainer"),t=document.getElementById("butInstall"),o=document.querySelector(".install-promotion");if(window.addEventListener("beforeinstallprompt",(function(t){console.log("\ud83d\udc4d","beforeinstallprompt",t),t.preventDefault(),window.deferredPrompt=t,o.style.display="block",e.classList.toggle("hidden",!1)})),t.addEventListener("click",Object(a.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("\ud83d\udc4d","butInstall-clicked"),o.style.display="none",n=window.deferredPrompt){t.next=5;break}return t.abrupt("return");case 5:return n.prompt(),t.next=8,n.userChoice;case 8:a=t.sent,console.log("\ud83d\udc4d","userChoice",a),window.deferredPrompt=null,e.classList.toggle("hidden",!0);case 12:case"end":return t.stop()}}),t)})))),window.addEventListener("appinstalled",(function(e){console.log("\ud83d\udc4d","appinstalled",e),o.style.display="none",window.deferredPrompt=null})),"http:"===window.location.protocol){var r=document.getElementById("requireHTTPS");r.querySelector("a").href=window.location.href.replace("http://","https://"),r.classList.remove("hidden")}}})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/books-review/service-worker.js");var d=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.deferredPrompt.prompt(),e.next=3,window.deferredPrompt.userChoice;case 3:t=e.sent,n=t.outcome,console.log("User response to the install prompt: ".concat(n)),window.deferredPrompt=null;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("appinstalled",(function(){window.deferredPrompt=null,console.log("PWA was installed")})),Object(p.jsxs)("div",{style:{width:"100%",overflowX:"hidden"},children:[Object(p.jsx)(l.a,{}),Object(p.jsx)(L,{}),Object(p.jsxs)("div",{className:"content mb-20",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h2",{className:"install-promotion",children:"You can install PWA now."}),Object(p.jsxs)("p",{id:"requireHTTPS",className:"hidden",children:[Object(p.jsx)("b",{children:"STOP!"})," This page ",Object(p.jsx)("b",{children:"must"})," be served over HTTPS. Please ",Object(p.jsx)("a",{children:"reload this page via HTTPS"}),"."]}),Object(p.jsx)("div",{id:"installContainer",className:"hidden",children:Object(p.jsx)("button",{id:"butInstall",type:"button",onClick:function(){return d},children:"Install"})})]}),Object(p.jsx)(s.b,{})]}),Object(p.jsx)(v,{})]})}var T=function(){var e=Object(s.g)(),t=Object(r.useState)(d.a.getItem(u.a)),n=Object(o.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){i(d.a.getItem(u.a))}),[e.pathname]),Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"loading..."}),children:Object(p.jsx)(s.e,{children:a?Object(p.jsxs)(s.c,{path:"/books-review",element:Object(p.jsx)(E,{}),children:[Object(p.jsx)(s.c,{path:"library",element:Object(p.jsx)(B,{})}),Object(p.jsx)(s.c,{path:"bookshelf",element:Object(p.jsx)(P,{})}),Object(p.jsx)(s.c,{path:"contacts",element:Object(p.jsx)(S,{})}),Object(p.jsx)(s.c,{path:"*",element:Object(p.jsx)(s.a,{to:"/books-review/"})})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.c,{path:"/books-review/auth",element:Object(p.jsx)(I,{})}),Object(p.jsx)(s.c,{path:"*",element:Object(p.jsx)(s.a,{to:"/books-review/auth"})})]})})})};t.default=T}}]);
//# sourceMappingURL=6.ef19108a.chunk.js.map