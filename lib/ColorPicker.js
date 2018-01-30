!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("reactist",["react","react-dom"],e):"object"==typeof exports?exports.reactist=e(require("react"),require("react-dom")):t.reactist=e(t.React,t.ReactDOM)}("undefined"!=typeof self?self:this,function(t,e){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=150)}({1:function(e,r){e.exports=t},10:function(t,e,r){var o,n;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var n=typeof o;if("string"===n||"number"===n)t.push(o);else if(Array.isArray(o))t.push(r.apply(null,o));else if("object"===n)for(var a in o)i.call(o,a)&&o[a]&&t.push(a)}}return t.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=r:(o=[],void 0!==(n=function(){return r}.apply(e,o))&&(t.exports=n))}()},11:function(t,r){t.exports=e},12:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();r(13);var c=r(1),u=o(c),l=r(11),p=o(l),f=r(2),d=o(f),h=r(10),y=o(h),v=function(t){function e(t,r){n(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r));return o.state={show_body:!1,top:o.props.top||!1,right:o.props.right||!1,scrolling_parent:o.props.scrolling_parent||null},o._handleClickOutside=o._handleClickOutside.bind(o),o._setPosition=o._setPosition.bind(o),o._toggleShowBody=o._toggleShowBody.bind(o),o._timeout=null,o}return a(e,t),s(e,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this._handleClickOutside,!0),this._timeout&&clearTimeout(this._timeout)}},{key:"_handleClickOutside",value:function(t){var e=this;p.default.findDOMNode(this).contains(t.target)?this.props.allowBodyInteractions||(this._timeout=setTimeout(function(){e.state.show_body&&e._toggleShowBody()},100)):this._toggleShowBody()}},{key:"_toggleShowBody",value:function(){this.state.show_body?(this.props.onHideBody&&this.props.onHideBody(),document.removeEventListener("click",this._handleClickOutside,!0)):(this.props.onShowBody&&this.props.onShowBody(),document.addEventListener("click",this._handleClickOutside,!0)),this.setState({show_body:!this.state.show_body,top:this.state.top})}},{key:"_getTriggerComponent",value:function(){var t=this.props.children[0];return u.default.cloneElement(t,{onClick:this._toggleShowBody})}},{key:"_setPosition",value:function(t){if(t){var e=document.getElementById(this.state.scrolling_parent);if(e){var r=p.default.findDOMNode(this),o=p.default.findDOMNode(this).offsetTop,n=r.querySelector(".trigger").clientHeight,i=t.clientHeight,a=e.clientHeight,s=e.scrollTop,c=a+s-o-n,u=c<i;u!==this.state.top&&this.setState({top:u})}}}},{key:"_getBodyComponent",value:function(){var t=this.props.children[1],e={position:"relative"},r=this.state,o=r.right,n=r.top,i={top:n,right:o,setPosition:this._setPosition},a=(0,y.default)({body_wrapper:!0,with_arrow:!0,top:n,bottom:!n});return!!this.state.show_body&&u.default.createElement("div",{className:a,style:e},u.default.cloneElement(t,i))}},{key:"render",value:function(){var t="reactist dropdown",e={display:"inline-block"};return this.props.className&&(t+=" "+this.props.className),u.default.createElement("div",{style:e,className:t},this.state.top&&this._getBodyComponent(),this._getTriggerComponent(),!this.state.top&&this._getBodyComponent())}}]),e}(u.default.Component);v.displayName="Dropdown.Box",v.propTypes={top:d.default.bool,right:d.default.bool,scrolling_parent:d.default.string,allowBodyInteractions:d.default.bool,onShowBody:d.default.func,onHideBody:d.default.func,className:d.default.string,children:d.default.any};var m=function(t){function e(t,r){n(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r));return o._onClick=o._onClick.bind(o),o}return a(e,t),s(e,[{key:"_onClick",value:function(t){t.preventDefault(),t.stopPropagation(),this.props.onClick(t)}},{key:"render",value:function(){var t={display:"block"};return u.default.createElement("div",{style:t,className:"trigger",onClick:this._onClick},this.props.children)}}]),e}(u.default.Component);m.displayName="Dropdown.Trigger",m.propTypes={onClick:d.default.func,children:d.default.any};var b=function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"render",value:function(){var t={position:"absolute",right:0,top:0};return this.props.top&&(t.top="auto",t.bottom=0),this.props.right&&(t.right="auto",t.left=0),u.default.createElement("div",{ref:this.props.setPosition,style:t,className:"body",id:"reactist-dropdown-body"},this.props.children)}}]),e}(u.default.Component);b.displayName="Dropdown.Body",b.propTypes={top:d.default.bool,right:d.default.bool,setPosition:d.default.func,children:d.default.any},e.default={Box:v,Trigger:m,Body:b}},13:function(t,e,r){var o=r(14);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0};n.transform=void 0,r(4)(o,n),o.locals&&(t.exports=o.locals)},14:function(t,e,r){e=t.exports=r(3)(!1),e.push([t.i,'.reactist.dropdown .trigger{cursor:pointer}.reactist.dropdown .body{border-radius:3px;overflow:hidden;box-shadow:0 2px 10px -1px hsla(0,0%,46%,.5);z-index:1;background-color:#fff}.reactist.dropdown hr{border:none;height:1px;background-color:#ececec;margin:0 5px!important}.reactist.dropdown .with_arrow:after,.reactist.dropdown .with_arrow:before{z-index:1;content:"";display:block;position:absolute;width:0;height:0;border-style:solid;border-width:6px;right:14px}.reactist.dropdown .with_arrow:after{top:-12px;border-color:transparent transparent #fff}.reactist.dropdown .with_arrow:before{top:-13px;border-color:transparent transparent #ececec}.reactist.dropdown .with_arrow.top:after{top:0;border-color:#fff transparent transparent}.reactist.dropdown .with_arrow.top:before{top:0;right:13px;border-width:7px;border-color:#ececec transparent transparent}',""])},150:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.COLORS=e.ColorItem=void 0,r(151);var n=r(1),i=o(n),a=r(2),s=o(a),c=r(12),u=o(c),l=["#606060","#4A90E2","#03B3B2","#008299","#82BA00","#D24726","#AC193D","#DC4FAD","#3BD5FB","#74E8D3","#FFCC00","#FB886E","#CCCCCC"],p=function(t){var e=t.color,r=t.onChange;return i.default.createElement(u.default.Box,{right:!0,className:"reactist color_picker"},i.default.createElement(u.default.Trigger,null,i.default.createElement(f,{colorIndex:e})),i.default.createElement(u.default.Body,null,i.default.createElement("div",{className:"color_options"},l.reduce(function(t,o,n){return n!==e&&t.push(i.default.createElement(f,{key:n,colorIndex:n,onClick:r})),t},[]))))};p.displayName="ColorPicker",p.defaultProps={color:0},p.propTypes={color:s.default.number.isRequired,onChange:s.default.func};var f=function(t){var e=t.colorIndex,r=t.onClick;return i.default.createElement("span",{className:"reactist color_item",style:{backgroundColor:l[e]},onClick:function(){return r&&r(e)}})};f.displayName="ColorItem",f.propTypes={colorIndex:s.default.number.isRequired,onClick:s.default.func},e.default=p,e.ColorItem=f,e.COLORS=l},151:function(t,e,r){var o=r(152);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0};n.transform=void 0,r(4)(o,n),o.locals&&(t.exports=o.locals)},152:function(t,e,r){e=t.exports=r(3)(!1),e.push([t.i,".reactist.color_picker .color_item{flex:0 0 auto;display:block;margin:5px;width:15px;height:15px;border-radius:10px;cursor:pointer}.reactist.color_picker .color_options{display:flex;flex-wrap:wrap;width:75px}",""])},2:function(t,e,r){t.exports=r(6)()},3:function(t,e){function r(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=o(n);return[r].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=r(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},4:function(t,e,r){function o(t,e){for(var r=0;r<t.length;r++){var o=t[r],n=h[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(l(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(l(o.parts[i],e));h[o.id]={id:o.id,refs:1,parts:a}}}}function n(t,e){for(var r=[],o={},n=0;n<t.length;n++){var i=t[n],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(l):r.push(o[a]={id:a,parts:[l]})}return r}function i(t,e){var r=v(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=g[g.length-1];if("top"===t.insertAt)o?o.nextSibling?r.insertBefore(e,o.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=v(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,n)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),i(t,e),e}function u(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function l(t,e){var r,o,n,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=b++;r=m||(m=s(e)),o=p.bind(null,r,u,!1),n=p.bind(null,r,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(e),o=d.bind(null,r,e),n=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),o=f.bind(null,r),n=function(){a(r)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}function p(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=_(e,n);else{var i=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var r=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function d(t,e,r){var o=r.css,n=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||i)&&(o=w(o)),n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},y=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(r){if(void 0===e[r]){var o=t.call(this,r);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[r]=o}return e[r]}}(function(t){return document.querySelector(t)}),m=null,b=0,g=[],w=r(5);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=y()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=n(t,e);return o(r,e),function(t){for(var i=[],a=0;a<r.length;a++){var s=r[a],c=h[s.id];c.refs--,i.push(c)}t&&o(n(t,e),e);for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var _=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,o=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n))return t;var i;return i=0===n.indexOf("//")?n:0===n.indexOf("/")?r+n:o+n.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},6:function(t,e,r){"use strict";var o=r(7),n=r(8),i=r(9);t.exports=function(){function t(t,e,r,o,a,s){s!==i&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return r.checkPropTypes=o,r.PropTypes=r,r}},7:function(t,e,r){"use strict";function o(t){return function(){return t}}var n=function(){};n.thatReturns=o,n.thatReturnsFalse=o(!1),n.thatReturnsTrue=o(!0),n.thatReturnsNull=o(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},t.exports=n},8:function(t,e,r){"use strict";function o(t,e,r,o,i,a,s,c){if(n(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,a,s,c],p=0;u=new Error(e.replace(/%s/g,function(){return l[p++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var n=function(t){};t.exports=o},9:function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}})});
//# sourceMappingURL=ColorPicker.map