(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{18:function(e,t,n){"use strict";var r=n(23),a=n(24),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,[{key:"setItem",value:function(e,t){if("string"!==typeof t)throw new Error("Value of localStorage by key ".concat(e," is not string."));if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.setItem(e,t)}},{key:"getItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));return localStorage.getItem(e)}},{key:"unsetItem",value:function(e){if("string"!==typeof e)throw new Error("Key ".concat(e," is not string"));localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();t.a=new c},20:function(e,t,n){e.exports={headerTabs:"HeaderTabs_headerTabs__kntLB",exit_btn:"HeaderTabs_exit_btn__3CCPf",headerTabs__name:"HeaderTabs_headerTabs__name__2pNON",active:"HeaderTabs_active__32-5n"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return o}));var r="first-name",a="last-name",c="email",o="password"},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o}));var r="SET_REVIEW",a="SET_REVIEW",c=function(e){return{type:r,payload:e}},o=function(e){return{type:a,payload:e}}},34:function(e,t,n){e.exports={header:"Header_header__3smQK"}},35:function(e,t,n){e.exports={headerLogo:"HeaderLogo_headerLogo__6kCHJ"}},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),o=n.n(c),s=(n(41),n(31)),i=n(14),l=n(36),u=n(11),d=n(8),b={books:[]};var j=n(21),f=n(28),h={reviews:[]};var p={books:[],loading:!1,error:null};var m=Object(i.b)({libraryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a:return{books:[].concat(Object(u.a)(e.books),[t.payload])};case d.e:return{books:e.books.filter((function(e){return e.id!==t.payload.id}))};default:return e}},bookshelfReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:var n=t.payload,r=n.id,a=n.rating,c=n.review,o=e.reviews;if(o.some((function(e){return e.id===r}))){var s=o.findIndex((function(e){return e.id===r}));return o[s].rating!==a||o[s].review!==c?{reviews:Object.assign(Object(u.a)(o),Object(j.a)({},s,{id:r,rating:a,review:c}))}:{reviews:Object(u.a)(o)}}return{reviews:[].concat(Object(u.a)(o),[{id:r,rating:a,review:c}])};case f.a:var i=e.reviews.findIndex((function(e){return e.id===t.payloadid}));return{reviews:[].concat(Object(u.a)(e.reviews.splice(i,1)),Object(u.a)(e.reviews))};default:return e}},getBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.c:return{books:[],loading:!0,error:null};case d.d:return{books:t.payload,loading:!1,error:null};case d.b:return{books:[],loading:!1,error:t.payload};default:return e}}}),O=n(10),v=n.n(O),x=n(15),w=n(23),g=n(24),y="".concat("https://www.googleapis.com/books","/").concat("v1","/volumes"),k=new(function(){function e(){Object(w.a)(this,e)}return Object(g.a)(e,[{key:"search",value:function(e){return fetch("".concat(y,"?q=").concat(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return function(e){var t=e.headers.get("content-type");return t&&-1!==t.indexOf("application/json")?e.json().then((function(t){return{status:e.status,payload:t}})):{status:e.status,payload:{error:"Unexpected error"}}}(e)}))}}]),e}()),_=v.a.mark(E);function E(e){var t,n,r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(x.b)(k.search,e.payload);case 3:if(t=a.sent,n=t.status,r=t.payload,200!==n){a.next=12;break}return a.next=9,Object(x.c)(Object(d.i)(null===r||void 0===r?void 0:r.items));case 9:case 14:return a.abrupt("return",{status:n,payload:r});case 12:return a.next=14,Object(x.c)(Object(d.g)(r));case 15:a.next=22;break;case 17:return a.prev=17,a.t0=a.catch(0),console.log("getBooksWorker",a.t0),a.next=22,Object(x.c)(Object(d.g)(a.t0));case 22:case"end":return a.stop()}}),_,null,[[0,17]])}var T=[Object(x.d)(d.c,E)],S=v.a.mark(N);function N(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(Object(u.a)(T));case 2:case"end":return e.stop()}}),S)}var I=Object(l.a)(),P=i.c;var B=[];B.push(I);var C=Object(i.d)(m,P(i.a.apply(void 0,B)));I.run(N);var L=C,H=n(12),K=n(30),R=n(9),A=n(4),W=n(34),q=n.n(W),U=n(35),z=n.n(U),D=n.p+"static/media/logo.f78c8a42.webp",G=n(2);var V=function(){return Object(G.jsx)("img",{className:z.a.headerLogo,src:D,alt:"logo"})},J=n(20),M=n.n(J),F=n(18),Q=function(){var e=Object(A.h)(),t=Object(r.useState)(null),n=Object(R.a)(t,2),a=n[0],c=n[1];return Object(G.jsxs)("ul",{className:M.a.headerTabs,children:[[{name:"Library",pathname:"/books-review/library"},{name:"My Bookshelf",pathname:"/books-review/bookshelf"},{name:"Contacts",pathname:"/books-review/contacts"}].map((function(e,t){return Object(G.jsx)("li",{onClick:(n=e.name,function(){c(n)}),className:"".concat(M.a.headerTabs__name," ").concat(a===e.name?M.a.active:""),children:Object(G.jsx)(H.b,{to:e.pathname,children:e.name})},t);var n})),Object(G.jsx)("button",{className:M.a.exit_btn,onClick:function(){F.a.clear(),e("/auth")},children:"Sign out"})]})},Y=function(){return Object(G.jsxs)("header",{className:q.a.header,children:[Object(G.jsx)(V,{}),Object(G.jsx)("div",{className:"downloadPrompt",children:Object(G.jsx)("div",{className:"promptControllers",children:Object(G.jsx)("button",{className:"downloadButton",children:"Download"})})}),Object(G.jsx)("button",{id:"enableNotifications",children:"\ud83d\udd14 Enable Notification"}),Object(G.jsx)(Q,{})]})},$=n(32),X=n.p+"static/media/github.04be58c1.svg",Z=n.p+"static/media/gitlab.a6e2e6ad.svg",ee=function(){return Object(G.jsx)("footer",{className:"border-t relative border-gray-200 w-1200 m-auto mt-6",children:Object(G.jsxs)("div",{className:"container flex flex-wrap items-center justify-center py-8 mx-auto  lg:justify-between",children:[Object(G.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(G.jsxs)("ul",{className:"flex items-center space-x-4",children:[Object(G.jsx)("li",{children:Object(G.jsx)(H.b,{to:"/library",children:"Library"})}),Object(G.jsx)("li",{children:Object(G.jsx)(H.b,{to:"/bookshelf",children:"My Bookshelf"})}),Object(G.jsx)("li",{children:Object(G.jsx)(H.b,{to:"/contacts",children:"Contacts"})})]})}),Object(G.jsx)("div",{className:"absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4",children:"Books Review \xa9 2021"}),Object(G.jsxs)("div",{className:"flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0",children:[Object(G.jsx)("a",{href:"https://github.com/Assetbekov-Almar",target:"_blank",rel:"noreferrer",children:Object(G.jsx)("img",{src:X,alt:"github"})}),Object(G.jsx)("a",{href:"https://gitlab.com/almar-a",target:"_blank",rel:"noreferrer",children:Object(G.jsx)("img",{src:Z,className:"w-8 h-8",alt:"gitlab"})})]})]})})},te=n(27),ne=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,56))})),re=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,57))})),ae=Object(r.lazy)((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,55))})),ce=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,54))}));function oe(){var e=a.a.useState(!0),t=Object(R.a)(e,2),n=t[0],r=t[1];a.a.useEffect((function(){if(n)r(!1);else{var e=document.getElementById("installContainer"),t=document.getElementById("butInstall"),a=document.querySelector(".install-promotion");if(window.addEventListener("beforeinstallprompt",(function(t){console.log("\ud83d\udc4d","beforeinstallprompt",t),t.preventDefault(),window.deferredPrompt=t,a.style.display="block",e.classList.toggle("hidden",!1)})),t.addEventListener("click",Object(K.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("\ud83d\udc4d","butInstall-clicked"),a.style.display="none",n=window.deferredPrompt){t.next=5;break}return t.abrupt("return");case 5:return n.prompt(),t.next=8,n.userChoice;case 8:r=t.sent,console.log("\ud83d\udc4d","userChoice",r),window.deferredPrompt=null,e.classList.toggle("hidden",!0);case 12:case"end":return t.stop()}}),t)})))),window.addEventListener("appinstalled",(function(e){console.log("\ud83d\udc4d","appinstalled",e),a.style.display="none",window.deferredPrompt=null})),"http:"===window.location.protocol){var c=document.getElementById("requireHTTPS");c.querySelector("a").href=window.location.href.replace("http://","https://"),c.classList.remove("hidden")}}})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/books-review/service-worker.js");var c=function(){var e=Object(K.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.deferredPrompt.prompt(),e.next=3,window.deferredPrompt.userChoice;case 3:t=e.sent,n=t.outcome,console.log("User response to the install prompt: ".concat(n)),window.deferredPrompt=null;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("appinstalled",(function(){window.deferredPrompt=null,console.log("PWA was installed")})),Object(G.jsxs)("div",{children:[Object(G.jsx)($.a,{}),Object(G.jsx)(Y,{}),Object(G.jsxs)("div",{className:"content w-1200 m-auto",children:[Object(G.jsxs)("header",{className:"App-header",children:[Object(G.jsx)("h2",{className:"install-promotion",children:"You can install PWA now."}),Object(G.jsxs)("p",{id:"requireHTTPS",className:"hidden",children:[Object(G.jsx)("b",{children:"STOP!"})," This page ",Object(G.jsx)("b",{children:"must"})," be served over HTTPS. Please ",Object(G.jsx)("a",{children:"reload this page via HTTPS"}),"."]}),Object(G.jsx)("div",{id:"installContainer",className:"hidden",children:Object(G.jsx)("button",{id:"butInstall",type:"button",onClick:function(){return c},children:"Install"})})]}),Object(G.jsx)(A.b,{})]}),Object(G.jsx)(ee,{})]})}var se=function(){var e=Object(A.g)(),t=Object(r.useState)(F.a.getItem(te.a)),n=Object(R.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){c(F.a.getItem(te.a))}),[e.pathname]),Object(G.jsx)(r.Suspense,{fallback:Object(G.jsx)("div",{children:"loading..."}),children:Object(G.jsx)(A.e,{children:a?Object(G.jsxs)(A.c,{path:"/books-review",element:Object(G.jsx)(oe,{}),children:[Object(G.jsx)(A.c,{path:"library",element:Object(G.jsx)(ne,{})}),Object(G.jsx)(A.c,{path:"bookshelf",element:Object(G.jsx)(re,{})}),Object(G.jsx)(A.c,{path:"contacts",element:Object(G.jsx)(ae,{})}),Object(G.jsx)(A.c,{path:"*",element:Object(G.jsx)(A.a,{to:"/books-review/"})})]}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(A.c,{path:"/books-review//auth",element:Object(G.jsx)(ce,{})}),Object(G.jsx)(A.c,{path:"*",element:Object(G.jsx)(A.a,{to:"/books-review//auth"})})]})})})};var ie=function(){return Object(G.jsx)(se,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=Object(G.jsx)(s.a,{store:L,children:Object(G.jsx)(H.a,{children:Object(G.jsx)(ie,{})})});o.a.render(le,document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s}));var r="GET_BOOKS_REQUEST",a="GET_BOOKS_SUCCESS",c="GET_BOOKS_FAILURE",o="ADD_BOOK",s="REMOVE_BOOK",i=function(e){return{type:r,payload:e}},l=function(e){return{type:a,payload:e}},u=function(e){return{type:c,payload:e}},d=function(e){return{type:o,payload:e}},b=function(e){return{type:s,payload:e}}}},[[47,1,2]]]);
//# sourceMappingURL=main.1d7992b0.chunk.js.map