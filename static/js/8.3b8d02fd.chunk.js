(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[8],{45:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var o=n(47),r=(n(46),function(){return o.b.success("The message has been successfully sent!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}),s=function(){return o.b.error("Something went wrong! Try again, please.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}},46:function(e,t,n){},67:function(e,t,n){e.exports={Download__button:"DownloadButton_Download__button__19Kw2"}},77:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n(11),s=n(12),i=n(1),a=n(15),c=n(22),l=n(45),u=n(67),d=n.n(u),b=n(6),v=function(){return Object(b.jsx)("div",{className:"downloadPrompt",style:{margin:"10px 0"},children:Object(b.jsx)("div",{className:"promptControllers",children:Object(b.jsx)("button",{className:"".concat(d.a.Download__button," downloadButton"),children:"Install"})})})},j=Object(a.b)((function(e){return{books:e.libraryReducer.books,reviews:e.bookshelfReducer.reviews}}),{setReview:c.d})((function(e){var t=e.books,n=e.reviews,a=e.setReview,c=Object(i.useState)([]),u=Object(s.a)(c,2),d=u[0],j=u[1],f=function(e,t){return function(){var o,r,s,i;(null===(o=d[t])||void 0===o?void 0:o.review)===(null===(r=n.find((function(t){return t.id===e})))||void 0===r?void 0:r.review)&&(null===(s=d[t])||void 0===s?void 0:s.starNumber)===(null===(i=n.find((function(t){return t.id===e})))||void 0===i?void 0:i.rating)||(a({id:e,review:d[t].review,rating:d[t].starNumber}),Object(l.b)())}},m=function(e){return function(t){j((function(n){var s;return Object.assign(Object(r.a)(n),Object(o.a)({},e,{review:t.target.value,starNumber:null===(s=d[e])||void 0===s?void 0:s.starNumber}))}))}},h=function(e,t){return function(){j((function(n){var s;return Object.assign(Object(r.a)(n),Object(o.a)({},e,{review:null===(s=d[e])||void 0===s?void 0:s.review,starNumber:t}))}))}};return 0===t.length?Object(b.jsxs)("div",{className:"text-center mt-5 text-2xl",children:["It seems like you don't have any books on your shelves.",Object(b.jsx)("br",{}),"You can go to Library and pick any book you want."]}):Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsx)(v,{}),t.map((function(e,t){var o,s,i,a,c=e.volumeInfo;return Object(b.jsxs)("div",{className:"shadow-xl mb-10 border-2 border-black-600 rounded",children:[Object(b.jsxs)("div",{className:"pt-10",children:[Object(b.jsxs)("div",{className:"max-w-sm rounded overflow-hidden flex my-0 mx-auto",children:[Object(b.jsx)("img",{className:"w-50 h-40 m-auto",src:null===(o=c.imageLinks)||void 0===o?void 0:o.thumbnail,alt:""}),Object(b.jsxs)("div",{className:"px-6 py-4 w-60",children:[Object(b.jsx)("div",{className:"font-bold text-xl mb-2",children:null===c||void 0===c||null===(s=c.authors)||void 0===s?void 0:s.map((function(e,t){return Object(b.jsx)("div",{children:e},t)}))}),Object(b.jsx)("div",{className:"font-bold text-xl mb-2",children:c.title}),Object(b.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.11.2/css/all.css"}),Object(b.jsx)("ul",{className:"flex justify-center",children:Object(r.a)(Array(5).keys()).map((function(o,r){var s,i;return Object(b.jsx)("li",{onMouseMove:h(t,r+1),children:Object(b.jsx)("i",{className:"fa-star fa-sm text-yellow-500 mr-1 cursor-pointer\n                                      star-".concat(r+1," ").concat(r+1<=((null===(s=d[t])||void 0===s?void 0:s.starNumber)||(null===(i=n.find((function(t){return t.id===e.id})))||void 0===i?void 0:i.rating))?"fas":"far")})},r+1)}))})]})]}),Object(b.jsx)("textarea",{className:"p-2.5 mt-5 h-40 text-gray-700 w-full text-base border-t-2 border-b-2 border-black-200 focus:outline-none focus:border-gray-300 focus:border-opacity-85 resize-none ",defaultValue:null===(i=n.find((function(t){return t.id===e.id})))||void 0===i?void 0:i.review,onChange:m(t),value:null===(a=d[t])||void 0===a?void 0:a.review,placeholder:"Type here..."})]}),Object(b.jsx)("div",{className:"flex justify-end p-2 gap-4",children:Object(b.jsx)("button",{className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",onClick:f(e.id,t),children:"Save"})})]},t)}))]})}));t.default=j}}]);
//# sourceMappingURL=8.3b8d02fd.chunk.js.map