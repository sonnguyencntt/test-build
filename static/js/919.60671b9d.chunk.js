"use strict";(self.webpackChunkdaotao_user_web=self.webpackChunkdaotao_user_web||[]).push([[919],{76948:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(36459),s=(n(72791),n(80184));function l(e,t){(0,a.Z)(t);var n=e.title,l=e.children,o=e.method,r="CREATE"==o?"T\u1ea1o":"EDIT"==o?"S\u1eeda":"DELETE"==o?"X\xf3a":"";return(0,s.jsx)("div",{class:"modal",id:"modalUID",children:(0,s.jsx)("div",{class:"modal-dialog",children:(0,s.jsxs)("div",{class:"modal-content",children:[(0,s.jsxs)("div",{class:"modal-header",children:[(0,s.jsx)("h4",{style:{color:"white"},children:n}),(0,s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,s.jsx)("div",{class:"modal-body",children:l}),(0,s.jsxs)("div",{class:"modal-footer",children:[(0,s.jsx)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal",children:"\u0110\xf3ng"}),""!==r&&(0,s.jsx)("button",{type:"submit",onClick:function(){e.handleOnSave()},class:"btn btn-info",children:r})]})]})})})}},85919:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(1413),s=n(98152),l=n(72791),o=n(4942),r=n(80184);function i(){var e=(0,l.useState)({name:""}),t=(0,s.Z)(e,2),n=t[0],i=t[1],c=n.name;function d(e){var t=e.target,s=t.name,l=t.value;i((0,a.Z)((0,a.Z)({},n),{},(0,o.Z)({},s,l)))}return(0,r.jsxs)("form",{role:"form",children:[(0,r.jsxs)("div",{class:"form-group",children:[(0,r.jsx)("label",{for:"product_name",children:"Nh\u1eadp m\u1eadt kh\u1ea9u c\u0169"}),(0,r.jsx)("input",{type:"password",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,r.jsxs)("div",{class:"form-group",children:[(0,r.jsx)("label",{for:"product_name",children:"Nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi"}),(0,r.jsx)("input",{name:"name",value:c,onChange:d,type:"password",class:"form-control",id:"txtPhone_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,r.jsxs)("div",{class:"form-group",children:[(0,r.jsx)("label",{for:"product_name",children:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u m\u1edbi"}),(0,r.jsx)("input",{name:"name",value:c,onChange:d,type:"password",class:"form-control",id:"txtPhone_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]})]})}var c=n(76948);var d=function(){var e=(0,l.useState)({modal:{componentAction:null,title:"",method:null}}),t=(0,s.Z)(e,2),n=t[0],o=t[1],d=n.modal;return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("h4",{className:"h4 title_content mb-0 text-gray-800",children:"H\u1ed3 s\u01a1"}),(0,r.jsxs)("button",{onClick:function(){return o((0,a.Z)((0,a.Z)({},n),{},{modal:{componentAction:(0,r.jsx)(i,{}),title:"Thay \u0111\u1ed5i m\u1eadt kh\u1ea9u",method:"EDIT"}}))},"data-toggle":"modal","data-target":"#modalUID",className:"btn btn-info btn-icon-split btn-sm ",style:{height:"fit-content",width:"fit-content"},children:[(0,r.jsx)("span",{className:"icon text-white-50",children:(0,r.jsx)("i",{className:"fas fa-plus"})}),(0,r.jsx)("span",{className:"text ",style:{color:"white"},children:"Thay \u0111\u1ed5i m\u1eadt kh\u1ea9u"})]})]}),(0,r.jsxs)("div",{className:"card shadow mb-4",children:[(0,r.jsx)("div",{className:"card-header py-3",children:(0,r.jsx)("h6",{className:"m-0 title_content font-weight-bold text-primary",children:"Th\xf4ng tin c\xe1 nh\xe2n"})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{role:"form",children:[(0,r.jsx)("div",{className:"box-body",children:(0,r.jsxs)("div",{className:"box-body",children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"name",children:"H\u1ecd v\xe0 t\xean"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"txtName",name:"txtName",autoComplete:"off"})]}),(0,r.jsxs)("div",{className:"form-group gender",children:[(0,r.jsx)("label",{htmlFor:"gender",children:"Gi\u1edbi t\xednh"}),(0,r.jsxs)("div",{className:"radio",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"txtSex",className:"male",id:"male"}),"Nam"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"txtSex",className:"male",id:"female"}),"N\u1eef"]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"txtSex",className:"male",id:"another"}),"Kh\xe1c"]})]})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"fname",children:"Ng\xe0y sinh"}),(0,r.jsx)("input",{disabled:!0,type:"number",className:"form-control",id:"txtPhone",name:"txtPhone",autoComplete:"off"})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"lname",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),(0,r.jsx)("input",{disabled:!0,type:"number",className:"form-control",id:"txtPhone",name:"txtPhone",autoComplete:"off",defaultValue:"0389633548"})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"phone",children:"Email"}),(0,r.jsx)("input",{disabled:!0,type:"text",className:"form-control",id:"txtEmail",name:"txtEmail",autoComplete:"off"})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"phone",children:"Ng\xe0y t\u1ea1o"}),(0,r.jsx)("input",{disabled:!0,type:"text",className:"form-control",id:"txtCreateStore",name:"txtCreateStore",autoComplete:"off",defaultValue:"05-07-2022"})]})]})}),(0,r.jsx)("div",{className:"box-footer",children:(0,r.jsxs)("button",{type:"submit",className:"btn btn-info  btn-sm",children:[(0,r.jsx)("i",{className:"fas fa-save"}),"L\u01b0u"]})})]})})]}),(0,r.jsxs)(c.Z,{method:d.method,title:d.title,children:[" ",d.componentAction," "]})]})}},4942:function(e,t,n){function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})},36459:function(e,t,n){function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return a}})},1413:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(4942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=919.60671b9d.chunk.js.map