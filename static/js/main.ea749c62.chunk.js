(this["webpackJsonpform-validator"]=this["webpackJsonpform-validator"]||[]).push([[0],[,,,function(e,a,t){},,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/welcome.1c874721.png"},function(e,a,t){e.exports=t.p+"static/media/join_us_resize.8fd9cc6a.jpg"},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(6),l=t.n(s),m=(t(12),t(1));t(3);function o(e){var a={};return e.username.trim()||(a.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email required",e.password?e.password.length<6&&(a.password="Password needs to be 6 characters or more"):a.password="Password is required",e.password2?e.password2!==e.password&&(a.password2="Passwords do not match"):a.password2="Password is required",a}var c=t(2),i=t(4),u=function(e,a){var t=Object(r.useState)({username:"",email:"",password:"",password2:""}),n=Object(m.a)(t,2),s=n[0],l=n[1],o=Object(r.useState)({}),u=Object(m.a)(o,2),d=u[0],p=u[1],f=Object(r.useState)(!1),E=Object(m.a)(f,2),b=E[0],w=E[1];return Object(r.useEffect)((function(){0===Object.keys(d).length&&b&&e()}),[d]),{handleChange:function(e){var a=e.target,t=a.name,r=a.value;l(Object(i.a)(Object(i.a)({},s),{},Object(c.a)({},t,r)))},handleSubmit:function(e){e.preventDefault(),p(a(s)),w(!0)},values:s,errors:d}},d=function(e){var a=e.submitForm,t=u(a,o),r=t.handleChange,s=t.handleSubmit,l=t.values,m=t.errors;return n.a.createElement("div",{className:"form-content-right"},n.a.createElement("form",{onSubmit:s,className:"form",noValidate:!0},n.a.createElement("h1",null,"Get started with us today! Create your account by filling out the information below."),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Username"),n.a.createElement("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your username",value:l.username,onChange:r}),m.username&&n.a.createElement("p",null,m.username)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Email"),n.a.createElement("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:l.email,onChange:r}),m.email&&n.a.createElement("p",null,m.email)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Password"),n.a.createElement("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:l.password,onChange:r}),m.password&&n.a.createElement("p",null,m.password)),n.a.createElement("div",{className:"form-inputs"},n.a.createElement("label",{className:"form-label"},"Confirm Password"),n.a.createElement("input",{className:"form-input",type:"password",name:"password2",placeholder:"Confirm your password",value:l.password2,onChange:r}),m.password2&&n.a.createElement("p",null,m.password2)),n.a.createElement("button",{className:"form-input-btn",type:"submit"},"Sign up"),n.a.createElement("span",{className:"form-input-login"},"Already have an account? Login ",n.a.createElement("a",{href:"#"},"here"))))},p=function(){return n.a.createElement("div",{className:"form-content-right"},n.a.createElement("h1",{className:"form-success"},"We have received your request!"),n.a.createElement("img",{className:"form-img-2",src:t(13)}))},f=function(){var e=Object(r.useState)(!1),a=Object(m.a)(e,2),s=a[0],l=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-container"},n.a.createElement("span",{className:"close-btn"},"\xd7"),n.a.createElement("div",{className:"form-content-left"},n.a.createElement("img",{className:"form-img",src:t(14)})),s?n.a.createElement(p,null):n.a.createElement(d,{submitForm:function(){l(!0)}})))};var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ea749c62.chunk.js.map