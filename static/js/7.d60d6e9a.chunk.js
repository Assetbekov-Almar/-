(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[7],{45:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var s=a(47),n=(a(46),function(){return s.b.success("The message has been successfully sent!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}),r=function(){return s.b.error("Something went wrong! Try again, please.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"colored",progress:void 0})}},52:function(e,t,a){"use strict";t.a=a.p+"static/media/Feedback.8e07ee44.gif"},68:function(e,t,a){e.exports={"will-change":"Contacts_will-change__2AO1n",cursor:"Contacts_cursor__fHI26"}},69:function(e,t,a){},70:function(e,t,a){e.exports={Background:"LoaderWithBackground_Background__Cr6Lk"}},75:function(e,t,a){"use strict";a.r(t);var s=a(18),n=a(21),r=a(12),c=a(1),o=a(68),l=a.n(o),i=a(52),d=a(55),b=a(45),u=(a(69),a(6)),m=function(e){var t=e.position,a=void 0===t?"absolute":t;return Object(u.jsx)("div",{className:"loader",style:{position:a},"data-testid":"loader",children:Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignSelf:"center"},className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})},p=a(70),x=a.n(p),j=function(e){var t=e.loading,a=e.position,s=void 0===a?"absolute":a;return t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{position:s}),Object(u.jsx)("div",{className:x.a.Background})]}):null},g=function(){var e=Object(c.useState)({from_name:"",to_name:"Books Review",message:"",reply_to:""}),t=Object(r.a)(e,2),a=t[0],o=t[1],m=Object(c.useState)(!1),p=Object(r.a)(m,2),x=p[0],g=p[1],f=Object(c.useState)(!1),h=Object(r.a)(f,2),O=h[0],y=h[1],v=function(e){o(Object(n.a)(Object(n.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{className:"m-5",children:[Object(u.jsxs)("div",{className:"mb-16 group",children:[Object(u.jsxs)("span",{className:"relative",children:[Object(u.jsx)("span",{className:"h-20 pt-2 text-4xl overflow-x-hidden whitespace-nowrap text-brand-accent text-blue-700",children:"We care what you think!"}),Object(u.jsx)("span",{className:"".concat(l.a.cursor," absolute -top-4 left-0 -top-1 inline-block h-10 bg-white w-full animate-type will-change")})]}),Object(u.jsx)("p",{className:"text-2xl text-gray-500 mt-2 animate-appear opacity-0",children:"Give us feedback, so that we know what we should improve to deliver a better experience."}),Object(u.jsx)("img",{src:i.a,alt:"feedback"})]}),Object(u.jsxs)("form",{className:"w-full max-w-lg relative",onSubmit:function(e){e.preventDefault(),Object.values(a).some((function(e){return""===e}))?g(!0):(g(!1),y(!0),Object(d.a)("service_0c0t89b","template_f1fo9tg",a,"user_fzMcAS4TUL53ER9r0bZex").then((function(e){200===e.status?(Object(b.b)(),function(){if("granted"===Notification.permission){var e={body:"Your message has been delivered successfully! Thank you for your contribution!",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};new Notification("Delivered!",e)}}(),window.scrollTo(0,0),y(!1),o({from_name:"",to_name:"",message:"",reply_to:""})):Object(b.a)()})).catch((function(){Object(b.a)()})))},children:[Object(u.jsx)(j,{loading:O}),Object(u.jsxs)("div",{className:"flex flex-wrap -mx-3 mb-6",children:[Object(u.jsxs)("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[Object(u.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"from-name",children:"From"}),Object(u.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"from-name",type:"text",name:"from_name",placeholder:"Name",value:a.from_name,onChange:v})]}),Object(u.jsxs)("div",{className:"w-full md:w-1/2 px-3",children:[Object(u.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"to-name",children:"To"}),Object(u.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"to-last-name",type:"text",name:"to_name",placeholder:"Name",value:a.to_name,disabled:!0,onChange:v})]})]}),Object(u.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:Object(u.jsxs)("div",{className:"w-full px-3",children:[Object(u.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"email",children:"E-mail"}),Object(u.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"email",type:"email",name:"reply_to",placeholder:"Your email",value:a.reply_to,onChange:v})]})}),Object(u.jsx)("div",{className:"flex flex-wrap -mx-3 mb-3",children:Object(u.jsxs)("div",{className:"w-full px-3",children:[Object(u.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"password",children:"Message"}),Object(u.jsx)("textarea",{className:" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",id:"message",name:"message",placeholder:"Your message",value:a.message,onChange:v})]})}),Object(u.jsxs)("div",{className:"md:flex gap-y-2 flex-col md:items-center justify-center",children:[x&&Object(u.jsx)("span",{className:"text-red-600",children:"Please make sure all fields are filled."}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"shadow  bg-black hover:bg-opacity-80 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"submit",children:"Send"})}),Object(u.jsx)("div",{className:"md:w-2/3"})]})]})]})};t.default=g}}]);
//# sourceMappingURL=7.d60d6e9a.chunk.js.map