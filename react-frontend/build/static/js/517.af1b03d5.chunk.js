"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[517],{2037:function(e,r,t){var a=t(4569),s=t.n(a)().create({baseURL:"https://jira-clone.onrender.com/",withCredentials:!0});r.Z=s},1796:function(e,r,t){var a=t(4165),s=t(5861),n=t(9439),l=t(2791),o=t(1465),c=t(184);r.Z=function(e){var r=e.register,t=e.onSubmit,i=e.handleSubmit,u=e.errors,d=e.loading,m=e.type,p=(0,l.useState)(""),x=(0,n.Z)(p,2),g=x[0],b=x[1],h=i(function(){var e=(0,s.Z)((0,a.Z)().mark((function e(r){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(r);case 3:window.location.replace("http://localhost:3000/project"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),b((null===(s=e.t0.response)||void 0===s?void 0:s.data).message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}());return(0,c.jsxs)("form",{onSubmit:h,children:[(0,c.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,c.jsx)(o.Z,{label:"Email",register:r("email",{required:{value:!0,message:"email must not be empty"},pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"please provide a valid email"}}),error:u.email,inputClass:"border-gray-500",autoFocus:!0}),"SIGNUP"===m&&(0,c.jsx)(o.Z,{label:"Username",register:r("username",{required:{value:!0,message:"username must not be empty"},minLength:{value:2,message:"must be at least two characters long"},pattern:{value:/^[A-Za-z0-9_]+$/g,message:"username can be a-z,A-Z,0-9,_"}}),error:u.username,inputClass:"border-gray-500"}),(0,c.jsx)(o.Z,{label:"Password",register:r("pwd",{required:{value:!0,message:"password must not be empty"},minLength:{value:4,message:"must be at least 4 characters long"},maxLength:{value:14,message:"must be under 15 characters"}}),error:u.pwd,inputClass:"border-gray-500",type:"password"})]}),g&&(0,c.jsx)("span",{className:"text-red-400 block mt-3",children:g}),(0,c.jsx)("hr",{className:"border-t-[.5px] border-gray-400 mt-3"}),(0,c.jsxs)("span",{className:"text-[12px] text-gray-600 block mt-6",children:["By clicking below, you agree to the our",(0,c.jsx)("span",{className:"text-blue-800",children:" Privacy Policy."})]}),(0,c.jsx)("button",{type:"submit",className:"btn w-full mt-4 py-2 bg-[#321898]",children:"SIGNUP"===m?d?"registering ...":"Join now":d?"logging in ...":"Log In"})]})}},7517:function(e,r,t){t.r(r);var a=t(4165),s=t(5861),n=t(1134),l=t(3504),o=t(2037),c=t(1796),i=t(184);r.default=function(){var e=(0,n.cI)(),r=e.register,t=e.formState,a=t.errors,s=t.isSubmitting,o=e.handleSubmit;return(0,i.jsxs)("div",{className:"bg-white w-[22rem] rounded-md py-12 px-6",children:[(0,i.jsx)("h3",{className:"text-center text-gray-800 font-medium text-3xl",children:"Welcome back"}),(0,i.jsx)("h4",{className:"text-center mb-5 text-[15px] text-gray-600",children:"Free for testing"}),(0,i.jsx)(c.Z,{type:"LOGIN",onSubmit:u,errors:a,handleSubmit:o,register:r,loading:s}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("hr",{className:"border-t-[.5px] grow border-gray-400"}),(0,i.jsx)("span",{className:"text-center block my-3 bg-white w-fit px-2",children:"OR"}),(0,i.jsx)("hr",{className:"border-t-[.5px] grow border-gray-400"})]}),(0,i.jsx)(l.rU,{to:"/register",children:(0,i.jsx)("span",{className:"text-center block text-blue-600 hover:underline",children:"Join now"})})]})};var u=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post("auth/login",r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},1465:function(e,r,t){var a=t(1413),s=t(184);r.Z=function(e){var r,t=e.darkEnabled,n=void 0!==t&&t,l=e.register,o=e.error,c=e.placeholder,i=e.label,u=e.defaultValue,d=e.readOnly,m=e.autoFocus,p=e.inputClass,x=e.type;return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-sm tracking-wide ".concat(n?"text-c-5":"text-gray-800"),children:i}),(0,s.jsx)("input",(0,a.Z)({defaultValue:null!==u&&void 0!==u?u:"",className:"block w-full focus:border-chakra-blue mt-2 px-3 rounded-sm text-sm py-[3px] border-2 duration-200 outline-none ".concat(n?"hover:bg-c-7 focus:bg-c-1 bg-c-6 text-c-text":"bg-slate-100 hover:border-gray-400"," ").concat(null!==p&&void 0!==p?p:" border-transparent"," ").concat(d?"pointer-events-none":""),placeholder:c,readOnly:d,autoFocus:m,type:x},l)),(0,s.jsx)("span",{className:"text-[13px] text-red-400",children:null===o||void 0===o||null===(r=o.message)||void 0===r?void 0:r.toString()})]})}}}]);
//# sourceMappingURL=517.af1b03d5.chunk.js.map