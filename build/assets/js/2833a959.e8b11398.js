"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[135],{7045:(e,s,t)=>{t.d(s,{A:()=>r});const a="container_SE5S";var n=t(4848);const r=function(e){return(0,n.jsx)("div",{className:a,children:e.children})}},3758:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var a=t(4586),n=t(676),r=t(6540),c=t(4721),l=t(1312),i=t(5596),u=t(7045);const o="rootContainer_Qjix",m="titleContainer_pQP5",d="title_v9hd",h="subTitle_gu8o",j="form_blUn",p="formLabel_krnn",x="emailInput_IMps",v="subjectInput_FKmS",b="messageInput_Xxm5",f="submitButton_Avux";var N=t(4848);const g=function(){const{siteConfig:{customFields:e}}=(0,a.A)(),s=r.useRef(null),t=r.useRef(null),g=r.useRef(null);return(0,N.jsx)(i.A,{children:(0,N.jsx)(u.A,{children:(0,N.jsxs)("section",{className:o,children:[(0,N.jsx)(c.l,{dir:"auto",position:"top-center",duration:9e3}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsx)("h2",{className:d,children:"Contact Us"}),(0,N.jsx)("p",{className:h,children:"Let's get the conversation started, at your service"}),(0,N.jsxs)("form",{action:"",onSubmit:a=>{a.preventDefault();const r={email:s?.current?.value,subject:t?.current?.value,message:g?.current?.value};n.Ay.send(e.emailJsServiceId??"",e.emailJsTemplateId??"",r,e.emailJsUserId).then((function(e){c.o.success((0,l.T)({id:"contact.sendmessage.success"}))}),(function(e){c.o.error((0,l.T)({id:"contact.sendmessage.error"}),{description:(0,l.T)({message:"contact.sendmessage.error.description"})})})),s.current.value="",t.current.value="",g.current.value=""},className:j,children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{htmlFor:"email",className:p,children:"Your email"}),(0,N.jsx)("input",{ref:s,type:"email",id:"email",className:x,placeholder:"your email",required:!0})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("label",{htmlFor:"subject",className:p,children:"Subject"}),(0,N.jsx)("input",{ref:t,type:"text",id:"subject",className:v,placeholder:"Let us know how we can help you",required:!0})]}),(0,N.jsxs)("div",{className:"sm:col-span-2",children:[(0,N.jsx)("label",{htmlFor:"message",className:p,children:"Your message"}),(0,N.jsx)("textarea",{ref:g,id:"message",rows:6,className:b,placeholder:"Leave a comment..."})]}),(0,N.jsx)("button",{type:"submit",className:f,children:"Send message"})]})]})]})})})}}}]);