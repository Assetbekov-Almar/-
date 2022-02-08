(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{18:function(e,t,n){"use strict";var r=n(23),a=n(24),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,[{key:"setItem",value:function(e,t){if("string"!==typeof t)throw new Error("Value of localStorage by key ".concat(e," is not string."));if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.setItem(e,t)}},{key:"getItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));return localStorage.getItem(e)}},{key:"unsetItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();t.a=new o},20:function(e,t,n){e.exports={headerTabs:"HeaderTabs_headerTabs__kntLB",exit_btn:"HeaderTabs_exit_btn__3CCPf",headerTabs__name:"HeaderTabs_headerTabs__name__2pNON",active:"HeaderTabs_active__32-5n"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c}));var r="first-name",a="last-name",o="email",c="password"},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return c}));var r="SET_REVIEW",a="SET_REVIEW",o=function(e){return{type:r,payload:e}},c=function(e){return{type:a,payload:e}}},34:function(e,t,n){e.exports={header:"Header_header__3smQK"}},35:function(e,t,n){e.exports={headerLogo:"HeaderLogo_headerLogo__6kCHJ"}},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),i=(n(41),n(31)),s=n(14),l=n(36),u=n(11),d=n(8),b={books:[]};var f=n(21),j=n(28),h={reviews:[]};var p={books:[],loading:!1,error:null};var v=Object(s.b)({libraryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a:return{books:[].concat(Object(u.a)(e.books),[t.payload])};case d.e:return{books:e.books.filter((function(e){return e.id!==t.payload.id}))};default:return e}},bookshelfReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.b:var n=t.payload,r=n.id,a=n.rating,o=n.review,c=e.reviews;if(c.some((function(e){return e.id===r}))){var i=c.findIndex((function(e){return e.id===r}));return c[i].rating!==a||c[i].review!==o?{reviews:Object.assign(Object(u.a)(c),Object(f.a)({},i,{id:r,rating:a,review:o}))}:{reviews:Object(u.a)(c)}}return{reviews:[].concat(Object(u.a)(c),[{id:r,rating:a,review:o}])};case j.a:var s=e.reviews.findIndex((function(e){return e.id===t.payloadid}));return{reviews:[].concat(Object(u.a)(e.reviews.splice(s,1)),Object(u.a)(e.reviews))};default:return e}},getBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:return{books:[],loading:!0,error:null};case d.d:return{books:t.payload,loading:!1,error:null};case d.b:return{books:[],loading:!1,error:t.payload};default:return e}}}),m=n(10),O=n.n(m),w=n(15),g=n(23),x=n(24),y="".concat("https://www.googleapis.com/books","/").concat("v1","/volumes"),k=new(function(){function e(){Object(g.a)(this,e)}return Object(x.a)(e,[{key:"search",value:function(e){return fetch("".concat(y,"?q=").concat(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return function(e){var t=e.headers.get("content-type");return t&&-1!==t.indexOf("application/json")?e.json().then((function(t){return{status:e.status,payload:t}})):{status:e.status,payload:{error:"Unexpected error"}}}(e)}))}}]),e}()),_=O.a.mark(E);function E(e){var t,n,r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(w.b)(k.search,e.payload);case 3:if(t=a.sent,n=t.status,r=t.payload,200!==n){a.next=12;break}return a.next=9,Object(w.c)(Object(d.i)(null===r||void 0===r?void 0:r.items));case 9:case 14:return a.abrupt("return",{status:n,payload:r});case 12:return a.next=14,Object(w.c)(Object(d.g)(r));case 15:a.next=22;break;case 17:return a.prev=17,a.t0=a.catch(0),console.log("getBooksWorker",a.t0),a.next=22,Object(w.c)(Object(d.g)(a.t0));case 22:case"end":return a.stop()}}),_,null,[[0,17]])}var S=[Object(w.d)(d.c,E)],T=O.a.mark(I);function I(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(Object(u.a)(S));case 2:case"end":return e.stop()}}),T)}var N=Object(l.a)(),P=s.c;var C=[];C.push(N);var L=Object(s.d)(v,P(s.a.apply(void 0,C)));N.run(I);var B=L,W=n(12),H=n(30),R=n(9),A=n(4),K=n(34),U=n.n(K),q=n(35),z=n.n(q),G=n.p+"static/media/logo.f78c8a42.webp",V=n(2);var D=function(){return Object(V.jsx)("img",{className:z.a.headerLogo,src:G,alt:"logo"})},J=n(20),M=n.n(J),F=n(18),Q=function(){var e=Object(A.h)(),t=Object(r.useState)(null),n=Object(R.a)(t,2),a=n[0],o=n[1];return Object(V.jsxs)("ul",{className:M.a.headerTabs,children:[[{name:"Library",pathname:"/books-review/library"},{name:"My Bookshelf",pathname:"/books-review/bookshelf"},{name:"Contacts",pathname:"/books-review/contacts"}].map((function(e,t){return Object(V.jsx)("li",{onClick:(n=e.name,function(){o(n)}),className:"".concat(M.a.headerTabs__name," ").concat(a===e.name?M.a.active:""),children:Object(V.jsx)(W.b,{to:e.pathname,children:e.name})},t);var n})),Object(V.jsx)("button",{className:M.a.exit_btn,onClick:function(){F.a.clear(),e("/books-review/auth")},children:"Sign out"})]})},Y=function(){return Object(V.jsxs)("header",{className:U.a.header,children:[Object(V.jsx)(D,{}),Object(V.jsx)(Q,{})]})},$=n(32),X=n.p+"static/media/github.04be58c1.svg",Z=n.p+"static/media/gitlab.a6e2e6ad.svg",ee=function(){return Object(V.jsx)("footer",{className:"border-t relative border-gray-200 w-1200 m-auto mt-6",children:Object(V.jsxs)("div",{className:"container flex flex-wrap items-center justify-center py-8 mx-auto  lg:justify-between",children:[Object(V.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(V.jsxs)("ul",{className:"flex items-center space-x-4",children:[Object(V.jsx)("li",{children:Object(V.jsx)(W.b,{to:"/library",children:"Library"})}),Object(V.jsx)("li",{children:Object(V.jsx)(W.b,{to:"/bookshelf",children:"My Bookshelf"})}),Object(V.jsx)("li",{children:Object(V.jsx)(W.b,{to:"/contacts",children:"Contacts"})})]})}),Object(V.jsx)("div",{className:"absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4",children:"Books Review \xa9 2021"}),Object(V.jsxs)("div",{className:"flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0",children:[Object(V.jsx)("a",{href:"https://github.com/Assetbekov-Almar",target:"_blank",rel:"noreferrer",children:Object(V.jsx)("img",{src:X,alt:"github"})}),Object(V.jsx)("a",{href:"https://gitlab.com/almar-a",target:"_blank",rel:"noreferrer",children:Object(V.jsx)("img",{src:Z,className:"w-8 h-8",alt:"gitlab"})})]})]})})},te=n(27),ne=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,56))})),re=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,57))})),ae=Object(r.lazy)((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,55))})),oe=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,54))}));function ce(){var e=a.a.useState(!0),t=Object(R.a)(e,2),n=t[0],r=t[1];a.a.useEffect((function(){if(n)r(!1);else{var e=document.getElementById("installContainer"),t=document.getElementById("butInstall"),a=document.querySelector(".install-promotion");if(window.addEventListener("beforeinstallprompt",(function(t){console.log("\ud83d\udc4d","beforeinstallprompt",t),t.preventDefault(),window.deferredPrompt=t,a.style.display="block",e.classList.toggle("hidden",!1)})),t.addEventListener("click",Object(H.a)(O.a.mark((function t(){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("\ud83d\udc4d","butInstall-clicked"),a.style.display="none",n=window.deferredPrompt){t.next=5;break}return t.abrupt("return");case 5:return n.prompt(),t.next=8,n.userChoice;case 8:r=t.sent,console.log("\ud83d\udc4d","userChoice",r),window.deferredPrompt=null,e.classList.toggle("hidden",!0);case 12:case"end":return t.stop()}}),t)})))),window.addEventListener("appinstalled",(function(e){console.log("\ud83d\udc4d","appinstalled",e),a.style.display="none",window.deferredPrompt=null})),"http:"===window.location.protocol){var o=document.getElementById("requireHTTPS");o.querySelector("a").href=window.location.href.replace("http://","https://"),o.classList.remove("hidden")}}})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js");var o=function(){var e=Object(H.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.deferredPrompt.prompt(),e.next=3,window.deferredPrompt.userChoice;case 3:t=e.sent,n=t.outcome,console.log("User response to the install prompt: ".concat(n)),window.deferredPrompt=null;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("appinstalled",(function(){window.deferredPrompt=null,console.log("PWA was installed")})),Object(V.jsxs)("div",{children:[Object(V.jsx)($.a,{}),Object(V.jsx)(Y,{}),Object(V.jsxs)("div",{className:"content w-1200 m-auto",children:[Object(V.jsx)("h2",{className:"install-promotion",children:"You can install PWA now."}),Object(V.jsxs)("p",{id:"requireHTTPS",className:"hidden",children:[Object(V.jsx)("b",{children:"STOP!"})," This page ",Object(V.jsx)("b",{children:"must"})," be served over HTTPS. Please ",Object(V.jsx)("a",{children:"reload this page via HTTPS"}),"."]}),Object(V.jsx)("div",{id:"installContainer",className:"hidden",children:Object(V.jsx)("button",{id:"butInstall",type:"button",onClick:function(){return o},children:"Install"})}),Object(V.jsx)(A.b,{})]}),Object(V.jsx)(ee,{})]})}var ie=function(){var e=Object(A.g)(),t=Object(r.useState)(F.a.getItem(te.a)),n=Object(R.a)(t,2),a=n[0],o=n[1];return Object(r.useEffect)((function(){o(F.a.getItem(te.a))}),[e.pathname]),Object(V.jsx)(r.Suspense,{fallback:Object(V.jsx)("div",{children:"loading..."}),children:Object(V.jsx)(A.e,{children:a?Object(V.jsxs)(A.c,{path:"/books-review",element:Object(V.jsx)(ce,{}),children:[Object(V.jsx)(A.c,{path:"library",element:Object(V.jsx)(ne,{})}),Object(V.jsx)(A.c,{path:"bookshelf",element:Object(V.jsx)(re,{})}),Object(V.jsx)(A.c,{path:"contacts",element:Object(V.jsx)(ae,{})}),Object(V.jsx)(A.c,{path:"*",element:Object(V.jsx)(A.a,{to:"/books-review"})})]}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(A.c,{path:"/books-review/auth",element:Object(V.jsx)(oe,{})}),Object(V.jsx)(A.c,{path:"*",element:Object(V.jsx)(A.a,{to:"/books-review/auth"})})]})})})};var se=function(){return Object(V.jsx)(ie,{})},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var de=Object(V.jsx)(i.a,{store:B,children:Object(V.jsx)(W.a,{children:Object(V.jsx)(se,{})})});c.a.render(de,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/books-review",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/books-review","/service-worker.js");le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ue(t,e)}))}}()},8:function(e,t,n){"use strict";n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i}));var r="GET_BOOKS_REQUEST",a="GET_BOOKS_SUCCESS",o="GET_BOOKS_FAILURE",c="ADD_BOOK",i="REMOVE_BOOK",s=function(e){return{type:r,payload:e}},l=function(e){return{type:a,payload:e}},u=function(e){return{type:o,payload:e}},d=function(e){return{type:c,payload:e}},b=function(e){return{type:i,payload:e}}}},[[47,1,2]]]);
//# sourceMappingURL=main.029474ff.chunk.js.map