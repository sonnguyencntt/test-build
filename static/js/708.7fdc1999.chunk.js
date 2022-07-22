"use strict";(self.webpackChunkdaotao_user_web=self.webpackChunkdaotao_user_web||[]).push([[708],{76948:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(36459),a=(n(72791),n(80184));function r(e,t){(0,s.Z)(t);var n=e.title,r=e.children,l=e.method,o="CREATE"==l?"T\u1ea1o":"EDIT"==l?"S\u1eeda":"DELETE"==l?"X\xf3a":"";return(0,a.jsx)("div",{class:"modal",id:"modalUID",children:(0,a.jsx)("div",{class:"modal-dialog",children:(0,a.jsxs)("div",{class:"modal-content",children:[(0,a.jsxs)("div",{class:"modal-header",children:[(0,a.jsx)("h4",{style:{color:"white"},children:n}),(0,a.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:(0,a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,a.jsx)("div",{class:"modal-body",children:r}),(0,a.jsxs)("div",{class:"modal-footer",children:[(0,a.jsx)("button",{type:"button",class:"btn btn-default","data-dismiss":"modal",children:"\u0110\xf3ng"}),""!==o&&(0,a.jsx)("button",{type:"submit",onClick:function(){e.handleOnSave()},class:"btn btn-info",children:o})]})]})})})}},46708:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var s=n(72791),a=n(91523);n(61794);function r(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var l=r("Tab"),o=r("TabList"),i=r("TabPanel");function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c.apply(this,arguments)}function d(e,t){return s.Children.map(e,(function(e){return null===e?null:function(e){return l(e)||o(e)||i(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,s.cloneElement)(e,c({},e.props,{children:d(e.props.children,t)})):e}))}function h(e,t){return s.Children.forEach(e,(function(e){null!==e&&(l(e)||i(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(o(e)&&t(e),h(e.props.children,t)))}))}function u(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}var p=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(s&&(s+=" "),s+=t);return s},m=0;function f(){return"react-tabs-"+m++}function x(e){var t=0;return h(e,(function(e){l(e)&&t++})),t}var b,j=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},g.apply(this,arguments)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){return e&&"getAttribute"in e}function N(e){return v(e)&&e.getAttribute("data-rttab")}function T(e){return v(e)&&"true"===e.getAttribute("aria-disabled")}var C=function(e){var t,n;function a(){for(var t,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props,s=n.direction,a=n.disableUpDownKeys;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,l=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(l=!0,o=!1,t.handleClick(e)),37===e.keyCode||!a&&38===e.keyCode?(r="rtl"===s?t.getNextTab(r):t.getPrevTab(r),l=!0,o=!0):39===e.keyCode||!a&&40===e.keyCode?(r="rtl"===s?t.getPrevTab(r):t.getNextTab(r),l=!0,o=!0):35===e.keyCode?(r=t.getLastTab(),l=!0,o=!0):36===e.keyCode&&(r=t.getFirstTab(),l=!0,o=!0),l&&e.preventDefault(),o&&t.setSelected(r,e)}},t.handleClick=function(e){var n=e.target;do{if(t.isTabFromContainer(n)){if(T(n))return;var s=[].slice.call(n.parentNode.children).filter(N).indexOf(n);return void t.setSelected(s,e)}}while(null!=(n=n.parentNode))},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,y(t,n);var r=a.prototype;return r.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},r.getNextTab=function(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!T(this.getTab(n)))return n;for(var s=0;s<e;s++)if(!T(this.getTab(s)))return s;return e},r.getPrevTab=function(e){for(var t=e;t--;)if(!T(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!T(this.getTab(t)))return t;return e},r.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!T(this.getTab(t)))return t;return null},r.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!T(this.getTab(e)))return e;return null},r.getTabsCount=function(){return x(this.props.children)},r.getPanelsCount=function(){return function(e){var t=0;return h(e,(function(e){i(e)&&t++})),t}(this.props.children)},r.getTab=function(e){return this.tabNodes["tabs-"+e]},r.getChildren=function(){var e=this,t=0,n=this.props,a=n.children,r=n.disabledTabClassName,c=n.focus,h=n.forceRenderTabPanel,u=n.selectedIndex,p=n.selectedTabClassName,m=n.selectedTabPanelClassName,x=n.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var j=this.tabIds.length-this.getTabsCount();j++<0;)this.tabIds.push(f()),this.panelIds.push(f());return d(a,(function(n){var a=n;if(o(n)){var f=0,j=!1;null==b&&function(e){var t=e||("undefined"!==typeof window?window:void 0);try{b=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){b=!1}}(x),b&&(j=s.Children.toArray(n.props.children).filter(l).some((function(t,n){var s=x||("undefined"!==typeof window?window:void 0);return s&&s.document.activeElement===e.getTab(n)}))),a=(0,s.cloneElement)(n,{children:d(n.props.children,(function(t){var n="tabs-"+f,a=u===f,l={tabRef:function(t){e.tabNodes[n]=t},id:e.tabIds[f],panelId:e.panelIds[f],selected:a,focus:a&&(c||j)};return p&&(l.selectedClassName=p),r&&(l.disabledClassName=r),f++,(0,s.cloneElement)(t,l)}))})}else if(i(n)){var g={id:e.panelIds[t],tabId:e.tabIds[t],selected:u===t};h&&(g.forceRender=h),m&&(g.selectedClassName=m),t++,a=(0,s.cloneElement)(n,g)}return a}))},r.isTabFromContainer=function(e){if(!N(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1},r.render=function(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),r=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,t.environment,t.disableUpDownKeys,function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,j));return s.createElement("div",g({},r,{className:p(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,a&&a(t)},"data-rttabs":!0}),this.getChildren())},a}(s.Component);C.defaultProps={className:"react-tabs",focus:!1},C.propTypes={};var O=["children","defaultIndex","defaultFocus"];function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}var w=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelected=function(e,t,s){var a=n.props.onSelect,r=n.state.mode;if("function"!==typeof a||!1!==a(e,t,s)){var l={focus:"keydown"===s.type};1===r&&(l.selectedIndex=e),n.setState(l)}},n.state=a.copyPropsToState(n.props,{},t.defaultFocus),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,_(t,n),a.getDerivedStateFromProps=function(e,t){return a.copyPropsToState(e,t)},a.getModeFromProps=function(e){return null===e.selectedIndex?1:0},a.copyPropsToState=function(e,t,n){void 0===n&&(n=!1);var s={focus:n,mode:a.getModeFromProps(e)};if(1===s.mode){var r=Math.max(0,x(e.children)-1),l=null;l=null!=t.selectedIndex?Math.min(t.selectedIndex,r):e.defaultIndex||0,s.selectedIndex=l}return s},a.prototype.render=function(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,O)),a=this.state,r=a.focus,l=a.selectedIndex;return n.focus=r,n.onSelect=this.handleSelected,null!=l&&(n.selectedIndex=l),s.createElement(C,n,t)},a}(s.Component);w.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1},w.propTypes={},w.tabsRole="Tabs";var I=["children","className"];function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},k.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}var Z=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,D(t,n),a.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,I);return s.createElement("ul",k({},a,{className:p(n),role:"tablist"}),t)},a}(s.Component);Z.defaultProps={className:"react-tabs__tab-list"},Z.propTypes={},Z.tabsRole="TabList";var S=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},E.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}var A="react-tabs__tab",R=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,P(t,n);var r=a.prototype;return r.componentDidMount=function(){this.checkFocus()},r.componentDidUpdate=function(){this.checkFocus()},r.checkFocus=function(){var e=this.props,t=e.selected,n=e.focus;t&&n&&this.node.focus()},r.render=function(){var e,t=this,n=this.props,a=n.children,r=n.className,l=n.disabled,o=n.disabledClassName,i=(n.focus,n.id),c=n.panelId,d=n.selected,h=n.selectedClassName,u=n.tabIndex,m=n.tabRef,f=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,S);return s.createElement("li",E({},f,{className:p(r,(e={},e[h]=d,e[o]=l,e)),ref:function(e){t.node=e,m&&m(e)},role:"tab",id:i,"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":c,tabIndex:u||(d?"0":null),"data-rttab":!0}),a)},a}(s.Component);R.defaultProps={className:A,disabledClassName:A+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:A+"--selected"},R.propTypes={},R.tabsRole="Tab";var U=["children","className","forceRender","id","selected","selectedClassName","tabId"];function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},L.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}var B="react-tabs__tab-panel",K=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,F(t,n),a.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,r=t.forceRender,l=t.id,o=t.selected,i=t.selectedClassName,c=t.tabId,d=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,U);return s.createElement("div",L({},d,{className:p(a,(e={},e[i]=o,e)),role:"tabpanel",id:l,"aria-labelledby":c}),r||o?n:null)},a}(s.Component);K.defaultProps={className:B,forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},K.propTypes={},K.tabsRole="TabPanel";var V=n(4942),X=n(1413),q=n(98152),M=(n(14845),n(80184));function W(e){var t=(0,s.useState)({isOpenLesson:!1}),n=(0,q.Z)(t,2),a=n[0];n[1],a.isOpenLesson;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("tr",{className:"hover-product",children:[(0,M.jsx)("td",{children:"1"}),(0,M.jsx)("td",{style:{maxWidth:"200px"},onClick:e.handleUpdate,"data-toggle":"modal","data-target":"#modalUID",children:(0,M.jsx)("div",{style:{color:"blue"},children:"B\xe0i h\u1ecdc A"})}),(0,M.jsx)("td",{children:"H\u1ed9i nh\u1eadp"}),(0,M.jsx)("td",{children:"Nguy\u1ec5n V\u0103n A"}),(0,M.jsx)("td",{style:{color:"green"},children:"80%"}),(0,M.jsxs)("td",{children:[(0,M.jsxs)("button",{name:"action",onClick:e.showListDoc,"data-toggle":"modal","data-target":"#modalUID",className:"btn btn-primary btn-sm show",children:[(0,M.jsx)("i",{className:"fa fa-file"})," Xem t\xe0i li\u1ec7u"]}),(0,M.jsxs)("button",{name:"action",onClick:e.handleDelete,"data-toggle":"modal","data-target":"#modalUID",className:"btn btn-danger btn-sm show",style:{marginLeft:"10px"},children:[(0,M.jsx)("i",{className:"fa fa-trash"})," X\xf3a"]})]})]})})}function z(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0],a=t[1],r=n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i h\u1ecdc"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("select",{name:"type_schedule",className:"form-control",children:(0,M.jsx)("option",{value:0,children:"Nguy\u1ec5n V\u0103n A"})}),"      "]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xe0i li\u1ec7u"}),(0,M.jsx)("div",{children:(0,M.jsx)("input",{name:"name",value:r,onChange:function(e){var t=e.target,s=t.name,r=t.value;a((0,X.Z)((0,X.Z)({},n),{},(0,V.Z)({},s,r)))},type:"file",id:"txtPhone_branch",autocomplete:"off"})})]})]})}function Q(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0],a=t[1],r=n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i h\u1ecdc"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("select",{name:"type_schedule",className:"form-control",children:(0,M.jsx)("option",{value:0,children:"Nguy\u1ec5n V\u0103n A"})}),"      "]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xe0i li\u1ec7u"}),(0,M.jsx)("div",{children:(0,M.jsx)("input",{name:"name",value:r,onChange:function(e){var t=e.target,s=t.name,r=t.value;a((0,X.Z)((0,X.Z)({},n),{},(0,V.Z)({},s,r)))},type:"file",id:"txtPhone_branch",autocomplete:"off"})})]})]})}function H(){return(0,M.jsx)("form",{role:"form",children:(0,M.jsx)("div",{class:"form-group",children:(0,M.jsx)("label",{for:"product_name",children:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a b\xe0i h\u1ecdc n\xe0y kh\xf4ng?"})})})}function G(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i test"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"S\u1ed1 \u0111i\u1ec3m y\xeau c\u1ea7u"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]})]})}function J(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i test"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"S\u1ed1 \u0111i\u1ec3m y\xeau c\u1ea7u"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]})]})}function Y(){return(0,M.jsx)("form",{role:"form",children:(0,M.jsx)("div",{class:"form-group",children:(0,M.jsx)("label",{for:"product_name",children:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a b\xe0i test n\xe0y kh\xf4ng?"})})})}function $(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("div",{className:"list-docs",style:{display:"flex",flexDirection:"column"},children:[(0,M.jsxs)("div",{className:"item",children:[(0,M.jsx)("span",{children:"1. "}),(0,M.jsx)("a",{href:"#",style:{textDecoration:"underline",fontStyle:"oblique"},children:"T\xe0i li\u1ec7u h\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng s\xe1ch gi\xe1o khoa..."})]}),(0,M.jsxs)("div",{className:"item",children:[(0,M.jsx)("span",{children:"2. "}),(0,M.jsx)("a",{href:"#",style:{textDecoration:"underline",fontStyle:"oblique"},children:"T\xe0i li\u1ec7u h\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng s\xe1ch gi\xe1o khoa..."})]})]})}var ee=n(76948);var te=function(){var e=(0,s.useState)({isOpenLesson:!1,modal:{componentAction:null,title:"",method:null}}),t=(0,q.Z)(e,2),n=t[0],a=t[1],r=n.modal;function l(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(H,{}),title:"X\xf3a b\xe0i h\u1ecdc",method:"REMOVE"}}))}function o(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)($,{}),title:"Danh s\xe1ch t\xe0i li\u1ec7u",method:null}}))}function i(){console.log("ssss"),a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(Q,{}),title:"S\u1eeda b\xe0i h\u1ecdc",method:"EDIT"}}))}function c(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(Y,{}),title:"X\xf3a b\xe0i test",method:"REMOVE"}}))}function d(){console.log("ssss"),a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(J,{}),title:"S\u1eeda b\xe0i test",method:"EDIT"}}))}function h(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(G,{}),title:"T\u1ea1o b\xe0i test",method:"EDIT"}}))}return n.isOpenLesson,console.log(n),(0,M.jsxs)("div",{className:"",style:{},children:[(0,M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)("form",{children:(0,M.jsxs)("div",{className:"input-group mb-6",style:{padding:"0px"},children:[(0,M.jsx)("input",{type:"search",name:"txtSearch",className:"form-control",placeholder:"T\xecm theo b\xe0i h\u1ecdc",style:{maxWidth:"400px",minWidth:"300px"}}),(0,M.jsx)("div",{className:"input-group-append",children:(0,M.jsx)("button",{className:"btn btn-primary",type:"submit",children:(0,M.jsx)("i",{className:"fa fa-search"})})})]})}),(0,M.jsxs)("div",{style:{display:"flex"},children:[(0,M.jsxs)("button",{style:{marginRight:"10px"},class:"btn btn-danger btn-icon-split btn-sm  ",children:[(0,M.jsx)("span",{class:"icon text-white-50",children:(0,M.jsx)("i",{class:"fas fa-file-export"})}),(0,M.jsx)("span",{style:{color:"white"},class:"text",children:"Export Excel"})]}),(0,M.jsxs)("button",{style:{marginRight:"10px"},class:"btn btn-primary btn-icon-split btn-sm  ",children:[(0,M.jsx)("span",{class:"icon text-white-50",children:(0,M.jsx)("i",{class:"fas fa-file-import"})}),(0,M.jsx)("span",{style:{color:"white"},class:"text",children:"Import Excel"})]}),(0,M.jsxs)("button",{className:"btn btn-info btn-icon-split btn-sm show",onClick:function(){return a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(z,{}),title:"Th\xeam b\xe0i h\u1ecdc",method:"CREATE"}}))},"data-toggle":"modal","data-target":"#modalUID",children:[(0,M.jsx)("span",{className:"icon text-white-50",children:(0,M.jsx)("i",{className:"fas fa-plus"})}),(0,M.jsx)("span",{className:"text",children:"Th\xeam b\xe0i h\u1ecdc"})]})]})]}),(0,M.jsx)("div",{className:"card shadow ",children:(0,M.jsxs)("div",{className:"card-body",children:[(0,M.jsx)("div",{className:"table-responsive",children:(0,M.jsxs)("table",{className:"table table-border ",id:"dataTable",width:"100%",cellSpacing:0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{children:"STT"}),(0,M.jsx)("th",{children:"T\xean b\xe0i h\u1ecdc "}),(0,M.jsx)("th",{children:"T\xean b\xe0i h\u1ecdc"}),(0,M.jsx)("th",{children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("th",{children:"T\xecnh tr\u1ea1ng ho\xe0n th\xe0nh"}),(0,M.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),(0,M.jsxs)("tbody",{children:[(0,M.jsx)(W,{handleDelete:l,showListDoc:o,handleUpdate:i,handleDeleteQuiz:c,handleUpdateQuiz:d,handleCreateQuiz:h}),(0,M.jsx)(W,{handleDelete:l,showListDoc:o,handleUpdate:i,handleDeleteQuiz:c,handleUpdateQuiz:d,handleCreateQuiz:h})]})]})}),(0,M.jsx)("nav",{"aria-label":"Page navigation",className:"float-pagination undefined IKITECH",children:(0,M.jsxs)("ul",{className:"pagination  tab-pagination pg-blue",children:[(0,M.jsx)("li",{className:"page-item null ",children:(0,M.jsx)("a",{className:"page-link",children:"Tr\u01b0\u1edbc"})}),(0,M.jsx)("li",{className:"page-item active ",children:(0,M.jsx)("a",{className:"page-link",children:"1"})}),(0,M.jsx)("li",{className:"page-item null ",children:(0,M.jsx)("a",{className:"page-link",children:"Sau"})})]})})]})}),(0,M.jsxs)(ee.Z,{method:r.method,title:r.title,children:[" ",r.componentAction," "]})]})};function ne(e){var t=(0,s.useState)({isOpenLesson:!1}),n=(0,q.Z)(t,2),r=n[0],l=n[1],o=r.isOpenLesson;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("tr",{className:"hover-product",style:{border:!0===o?"1px solid #ebe2e2":null},children:[(0,M.jsx)("td",{children:(0,M.jsxs)("button",{style:{maxWidth:"30px"},className:"btn-not-background",onClick:function(){l((0,X.Z)((0,X.Z)({},r),{},{isOpenLesson:!o}))},children:[" ",(0,M.jsx)("i",{class:"fas fa-angle-double-".concat(!0===o?"down":"right")})]})}),(0,M.jsx)("td",{style:{maxWidth:"200px"},onClick:e.handleUpdate,"data-toggle":"modal","data-target":"#modalUID",children:(0,M.jsx)("div",{style:{color:"blue"},children:"B\xe0i Test 1"})}),(0,M.jsx)("td",{children:"B\xe0i h\u1ecdc A"}),(0,M.jsx)("td",{children:"Nguy\u1ec5n V\u0103n A"}),(0,M.jsx)("td",{style:{color:"green"},children:"80%"}),(0,M.jsxs)("td",{className:"three-btn-group",children:[(0,M.jsxs)(a.rU,{to:"/train/question",className:"btn btn-success btn-sm show",children:[(0,M.jsx)("i",{className:"fa fa-plus"})," T\u1ea1o c\xe2u h\u1ecfi"]}),(0,M.jsxs)("button",{name:"action",onClick:e.showListDoc,"data-toggle":"modal","data-target":"#modalUID",className:"btn btn-primary btn-sm show",children:[(0,M.jsx)("i",{className:"fa fa-file"})," Xem t\xe0i li\u1ec7u"]}),(0,M.jsxs)("button",{name:"action",onClick:e.handleDelete,"data-toggle":"modal","data-target":"#modalUID",className:"btn btn-danger btn-sm show",children:[(0,M.jsx)("i",{className:"fa fa-trash"})," X\xf3a"]})]})]}),(0,M.jsxs)("tr",{className:"collaspe-lesson ".concat(1==o?"":"hide"),children:[(0,M.jsx)("td",{style:{background:"beige"}}),(0,M.jsx)("td",{colSpan:5,style:{border:"1px solid #dcd2d2",padding:"4px",marginTop:"5px"},children:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:"total",children:["- T\u1ec9 l\u1ec7 \u0111\u1ea1t y\xeau c\u1ea7u: ",(0,M.jsx)("span",{className:"total-number",children:"100%"})]}),(0,M.jsxs)("div",{className:"total",children:["- T\u1ec9 l\u1ec7 \u0111\u1ea1t gi\u1ecfi tr\u1edf l\xean: ",(0,M.jsx)("span",{className:"total-number",children:"100%"})]}),(0,M.jsxs)("div",{className:"total",children:["- T\u1ec9 l\u1ec7 \u0111\u1ea1t \u0111\u1ea1t xu\u1ea5t s\u1eafc: ",(0,M.jsx)("span",{className:"total-number",children:"100%"})]}),(0,M.jsxs)("div",{className:"total",children:["- X\u1ebfp lo\u1ea1i: ",(0,M.jsx)("span",{className:"total-number",children:"14/20"})]})]})})]})]})}function se(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i Test"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i h\u1ecdc li\xean quan"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("select",{name:"type_schedule",className:"form-control",children:(0,M.jsx)("option",{value:0,children:"Nguy\u1ec5n V\u0103n A"})}),"      "]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"S\u1ed1 \u0111i\u1ec3m y\xeau c\u1ea7u"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]})]})}function ae(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("form",{role:"form",children:[(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i Test"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"T\xean b\xe0i h\u1ecdc li\xean quan"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("select",{name:"type_schedule",className:"form-control",children:(0,M.jsx)("option",{value:0,children:"Nguy\u1ec5n V\u0103n A"})}),"      "]}),(0,M.jsxs)("div",{class:"form-group",children:[(0,M.jsx)("label",{for:"product_name",children:"S\u1ed1 \u0111i\u1ec3m y\xeau c\u1ea7u"}),(0,M.jsx)("input",{type:"text",class:"form-control",id:"txtName_branch",placeholder:"Nh\u1eadp...",autocomplete:"off"})]})]})}function re(){return(0,M.jsx)("form",{role:"form",children:(0,M.jsx)("div",{class:"form-group",children:(0,M.jsx)("label",{for:"product_name",children:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a b\xe0i Test n\xe0y kh\xf4ng?"})})})}function le(){var e=(0,s.useState)({name:""}),t=(0,q.Z)(e,2),n=t[0];t[1],n.name;return(0,M.jsxs)("div",{className:"list-docs",style:{display:"flex",flexDirection:"column"},children:[(0,M.jsxs)("div",{className:"item",children:[(0,M.jsx)("span",{children:"1. "}),(0,M.jsx)("a",{href:"#",style:{textDecoration:"underline",fontStyle:"oblique"},children:"T\xe0i li\u1ec7u h\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng s\xe1ch gi\xe1o khoa..."})]}),(0,M.jsxs)("div",{className:"item",children:[(0,M.jsx)("span",{children:"2. "}),(0,M.jsx)("a",{href:"#",style:{textDecoration:"underline",fontStyle:"oblique"},children:"T\xe0i li\u1ec7u h\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng s\xe1ch gi\xe1o khoa..."})]})]})}var oe=function(){var e=(0,s.useState)({isOpenLesson:!1,modal:{componentAction:null,title:"",method:null}}),t=(0,q.Z)(e,2),n=t[0],a=t[1];function r(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(le,{}),title:"Danh s\xe1ch t\xe0i li\u1ec7u",method:null}}))}var l=n.modal;function o(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(re,{}),title:"X\xf3a b\xe0i test",method:"REMOVE"}}))}function i(){console.log("ssss"),a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(ae,{}),title:"S\u1eeda b\xe0i Test",method:"EDIT"}}))}function c(){a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(se,{}),title:"T\u1ea1o b\xe0i Test",method:"CREATE"}}))}return n.isOpenLesson,console.log(n),(0,M.jsxs)("div",{className:"",style:{},children:[(0,M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)("form",{children:(0,M.jsxs)("div",{className:"input-group mb-6",style:{padding:"0px"},children:[(0,M.jsx)("input",{type:"search",name:"txtSearch",className:"form-control",placeholder:"T\xecm theo b\xe0i h\u1ecdc",style:{maxWidth:"400px",minWidth:"300px"}}),(0,M.jsx)("div",{className:"input-group-append",children:(0,M.jsx)("button",{className:"btn btn-primary",type:"submit",children:(0,M.jsx)("i",{className:"fa fa-search"})})})]})}),(0,M.jsxs)("div",{style:{display:"flex"},children:[(0,M.jsxs)("button",{style:{marginRight:"10px"},class:"btn btn-danger btn-icon-split btn-sm  ",children:[(0,M.jsx)("span",{class:"icon text-white-50",children:(0,M.jsx)("i",{class:"fas fa-file-export"})}),(0,M.jsx)("span",{style:{color:"white"},class:"text",children:"Export Excel"})]}),(0,M.jsxs)("button",{style:{marginRight:"10px"},class:"btn btn-primary btn-icon-split btn-sm  ",children:[(0,M.jsx)("span",{class:"icon text-white-50",children:(0,M.jsx)("i",{class:"fas fa-file-import"})}),(0,M.jsx)("span",{style:{color:"white"},class:"text",children:"Import Excel"})]}),(0,M.jsxs)("button",{className:"btn btn-info btn-icon-split btn-sm show",onClick:function(){return a((0,X.Z)((0,X.Z)({},n),{},{modal:{componentAction:(0,M.jsx)(se,{}),title:"Th\xeam b\xe0i Test",method:"CREATE"}}))},"data-toggle":"modal","data-target":"#modalUID",children:[(0,M.jsx)("span",{className:"icon text-white-50",children:(0,M.jsx)("i",{className:"fas fa-plus"})}),(0,M.jsx)("span",{className:"text",children:"Th\xeam b\xe0i Test"})]})]})]}),(0,M.jsx)("div",{className:"card shadow ",children:(0,M.jsxs)("div",{className:"card-body",children:[(0,M.jsx)("div",{className:"table-responsive",children:(0,M.jsxs)("table",{className:"table table-border ",id:"dataTable",width:"100%",cellSpacing:0,children:[(0,M.jsx)("thead",{children:(0,M.jsxs)("tr",{children:[(0,M.jsx)("th",{}),(0,M.jsx)("th",{children:"T\xean b\xe0i Test "}),(0,M.jsx)("th",{children:"T\xean b\xe0i h\u1ecdc li\xean quan"}),(0,M.jsx)("th",{children:"Ng\u01b0\u1eddi ph\u1ee5 tr\xe1ch"}),(0,M.jsx)("th",{children:"T\xecnh tr\u1ea1ng ho\xe0n th\xe0nh"}),(0,M.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),(0,M.jsxs)("tbody",{children:[(0,M.jsx)(ne,{handleDelete:o,handleUpdate:i,handleCreate:c,showListDoc:r}),(0,M.jsx)(ne,{handleDelete:o,handleUpdate:i,showListDoc:r,handleCreate:c})]})]})}),(0,M.jsx)("nav",{"aria-label":"Page navigation",className:"float-pagination undefined IKITECH",children:(0,M.jsxs)("ul",{className:"pagination  tab-pagination pg-blue",children:[(0,M.jsx)("li",{className:"page-item null ",children:(0,M.jsx)("a",{className:"page-link",children:"Tr\u01b0\u1edbc"})}),(0,M.jsx)("li",{className:"page-item active ",children:(0,M.jsx)("a",{className:"page-link",children:"1"})}),(0,M.jsx)("li",{className:"page-item null ",children:(0,M.jsx)("a",{className:"page-link",children:"Sau"})})]})})]})}),(0,M.jsxs)(ee.Z,{method:l.method,title:l.title,children:[" ",l.componentAction," "]})]})};var ie=function(e){return(0,M.jsxs)("div",{className:"container-fluid",children:[(0,M.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,M.jsx)("h4",{className:"h4 title_content mb-0 text-gray-800",children:"B\xe0i h\u1ecdc - B\xe0i Test"})}),(0,M.jsx)("div",{className:"card shadow mb-4",children:(0,M.jsx)("div",{className:"card-body",children:(0,M.jsxs)(w,{defaultIndex:0,children:[(0,M.jsxs)(Z,{children:[(0,M.jsx)(R,{children:(0,M.jsxs)(a.rU,{to:"?tab-index=0",children:["  ",(0,M.jsx)("i",{class:"fas fa-book-open"}),(0,M.jsxs)("span",{children:[" ","B\xe0i h\u1ecdc"]})]})}),(0,M.jsx)(R,{children:(0,M.jsxs)(a.rU,{to:"?tab-index=1",children:[" ",(0,M.jsx)("i",{class:"fas fa-user"}),(0,M.jsxs)("span",{children:[" ","B\xe0i Test"]})]})})]}),(0,M.jsx)(K,{children:(0,M.jsx)(te,{})}),(0,M.jsx)(K,{children:(0,M.jsx)(oe,{})})]})})})]})}},61794:function(){},4942:function(e,t,n){function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return s}})},36459:function(e,t,n){function s(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,{Z:function(){return s}})},1413:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=708.7fdc1999.chunk.js.map