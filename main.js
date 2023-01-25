(()=>{"use strict";var e={573:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(663),r=n.n(o),i=n(237),a=n.n(i)()(r());a.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},578:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(663),r=n.n(o),i=n(237),a=n.n(i),s=n(432),d=n.n(s),l=new URL(n(405),n.b),c=a()(r());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);"]);var u=d()(l);c.push([e.id,'body{font-family:"Roboto",sans-serif;background:#e0dedf;min-height:100vh;display:flex;overflow:hidden;justify-content:center;align-items:center}body ::-webkit-scrollbar{width:3vh;background:rgba(0,0,0,0)}body ::-webkit-scrollbar-thumb{background:#673a65;border:1vh #e0dedf solid;border-radius:1vw}@media(max-width: 1500px){body ::-webkit-scrollbar-thumb{border-radius:50px}}div.Todo-List{width:50vw}@media(max-width: 1024px){div.Todo-List{width:80vw}}section.Todo-List__Tasks{margin-top:2vh;display:flex;flex-direction:column;padding-left:3vh;gap:1vh;overflow-x:hidden;overflow-y:scroll;max-height:35vh}@media(max-width: 1024px){section.Todo-List__Tasks{max-height:45vh}}input.Todo-List__Tasks__Task__Toggle-Check{position:absolute;opacity:0;z-index:-1}div.Completed>label.Todo-List__Tasks__Task__Custom-Checkbox::before{opacity:1}label.Todo-List__Tasks__Task__Custom-Checkbox{position:relative;cursor:pointer;width:1em;height:1em;border:2px #673a65 solid;border-radius:5px}label.Todo-List__Tasks__Task__Custom-Checkbox::before{position:absolute;content:"";rotate:45deg;top:12%;left:35%;width:.2em;height:.55em;border-bottom:2px #673a65 solid;border-right:2px #673a65 solid;opacity:0;transition:.2s}div.Todo-List__Tasks__Task{position:relative;display:inline-flex;align-items:center;color:#e0dedf;background:#a16195;border:2px rgba(0,0,0,0) solid;height:1.5vw;font-size:2.2vh;padding:1.5vh;border-radius:.8vw}@media(max-width: 1024px){div.Todo-List__Tasks__Task{height:3vw;border-radius:10px}}div.Todo-List__Tasks__Task:hover button.Todo-List__Tasks__Task__Delete-Task{opacity:1}div.Completed textarea.Todo-List__Tasks__Task__Task-Title{text-decoration:line-through;opacity:.5}div.Edited{border:2px #673a65 solid}div.Edited textarea.Todo-List__Tasks__Task__Task-Title{margin-left:calc(1em + 19px);text-decoration:none;opacity:1}textarea.Todo-List__Tasks__Task__Task-Title{background:rgba(0,0,0,0);border:none;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;resize:none;overflow:hidden;word-break:break-word;padding:0;margin-left:15px;margin-top:0;margin-bottom:0;line-height:1em;width:85%;max-width:100%;color:#e0dedf;transition:width,height .3s}@media(max-width: 1024px){textarea.Todo-List__Tasks__Task__Task-Title{width:77%}}textarea.Todo-List__Tasks__Task__Task-Title.Focus{outline:none;cursor:text;border-radius:5px}button.Todo-List__Tasks__Task__Delete-Task{position:absolute;cursor:pointer;right:1.5vh;top:50%;transform:translate(0, -50%);opacity:0;border:none;padding:0;height:1em;width:1em;background-image:url('+u+");background-color:rgba(0,0,0,0);background-size:contain;transition:.2s}.Todo-List__Footer-Buttons{display:inline-flex;flex-direction:column;margin-top:1.5vw;gap:1.5vw;width:calc(100% - 6vh);padding-left:3vh;font-weight:500;font-size:1vw}@media(max-width: 1024px){.Todo-List__Footer-Buttons{font-size:1.5vh}}div.Todo-List__Footer-Buttons__Tasks-Type{display:inline-flex;justify-content:space-between}div.Todo-List__Footer-Buttons__Tasks-Type button.Todo-List__Footer-Buttons__Link{width:20%;padding-top:.1vw;cursor:pointer;color:#a16195;background:rgba(0,0,0,0);border:2px #a16195 solid;border-radius:20px;transition:.2s}@media(max-width: 1300px){div.Todo-List__Footer-Buttons__Tasks-Type button.Todo-List__Footer-Buttons__Link{width:30%}}div.Todo-List__Footer-Buttons__Tasks-Type button.Todo-List__Footer-Buttons__Link:hover{scale:1.1}div.Todo-List__Footer-Buttons__Tasks-Type button.Todo-List__Footer-Buttons__Link:active{scale:1}div.Todo-List__Footer-Buttons__Tasks-Type button.Todo-List__Footer-Buttons__Link.Active-Link{color:#673a65;font-weight:700;border:3px #673a65 solid}div.Todo-List__Footer-Buttons__Second-Line{display:inline-flex;justify-content:space-around;height:1em;text-align:center}div.Todo-List__Footer-Buttons__Second-Line p.Footer-Buttons__Second-Line__Tasks-Count{width:20%;color:#a16195;margin:0}div.Todo-List__Footer-Buttons__Second-Line button.Footer-Buttons__Second-Line__Other-Button{outline:none;border:none;padding-left:0;padding-right:0;width:20%;color:#a16195;cursor:pointer;background:rgba(0,0,0,0);transition:.3s}div.Todo-List__Footer-Buttons__Second-Line button.Footer-Buttons__Second-Line__Other-Button:hover{scale:1.1;color:#673a65}div.Todo-List__Footer-Buttons__Second-Line button.Footer-Buttons__Second-Line__Other-Button:active{scale:1}header.Todo-List__Header{display:flex;align-items:center;flex-direction:column;padding-left:1.5vh;padding-right:1.5vh}header.Todo-List__Header h1.Todo-List__Header__Title{color:#673a65;letter-spacing:.05em;font-weight:900;text-align:center;font-size:4vw}@media(max-width: 1024px){header.Todo-List__Header h1.Todo-List__Header__Title{font-size:5vh}}header.Todo-List__Header input.Todo-List__Header__Input{width:calc(100% - 6vh);padding:1.5vh;height:2vw;font-size:2.3vh;outline:none;border:2px rgba(0,0,0,0) solid;border-radius:.8vw;background:#a16195;color:#e0dedf}@media(max-width: 1024px){header.Todo-List__Header input.Todo-List__Header__Input{border-radius:10px}}header.Todo-List__Header input.Todo-List__Header__Input::-moz-placeholder{opacity:.5;color:#e0dedf}header.Todo-List__Header input.Todo-List__Header__Input::placeholder{opacity:.5;color:#e0dedf}header.Todo-List__Header input.Todo-List__Header__Input:focus{border:2px #673a65 solid}",""]);const f=c},237:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},432:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},663:e=>{e.exports=function(e){return e[1]}},856:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var f=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var d=o(e,r),l=0;l<i.length;l++){var c=n(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=d}}},370:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},278:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},458:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},470:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},488:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},405:(e,t,n)=>{e.exports=n.p+"69933557c4f99f1bd68e.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(856),t=n.n(e),o=n(470),r=n.n(o),i=n(370),a=n.n(i),s=n(458),d=n.n(s),l=n(278),c=n.n(l),u=n(488),f=n.n(u),p=n(578),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var m=n(573),v={};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}v.styleTagTransform=f(),v.setAttributes=d(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=c(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;var b=document.getElementById("User-Input");function y(){var e=document.querySelectorAll(".Todo-List__Tasks__Task:not(.Completed)").length;document.getElementById("Tasks-Counter").innerHTML=e+" tasks left"}function g(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}b.addEventListener("keypress",(function(e){if("Enter"===e.key&&b.value.trim()){var t,n="",o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(b.value.toString().split(" "));try{for(o.s();!(t=o.n()).done;){var r=t.value;""!==r&&(n+=r+" ")}}catch(e){o.e(e)}finally{o.f()}n.trim(),b.value="";var i={title:n,completed:!1,id:Date.now()};H.push(i),localStorage.setItem("todoList",JSON.stringify(H)),new O(i).createElement(),S()}b.value.trim()||(b.value="")}));var T=document.getElementById("All-Tasks"),w=document.getElementById("Active-Tasks"),x=document.getElementById("Completed-Tasks");function L(e){var t=document.URL.split("/");t[t.length-1]=e,window.location.href=t.join("/"),S()}T.addEventListener("click",(function(){return L("#")})),w.addEventListener("click",(function(){return L("#Active")})),x.addEventListener("click",(function(){return L("#Completed")})),document.getElementById("Clear-Completed").addEventListener("click",(function(){var e,t=g(C.querySelectorAll("div.Completed"));try{for(t.s();!(e=t.n()).done;){var n=e.value;n.remove(),M(+n.getAttribute("data-id"))}}catch(e){t.e(e)}finally{t.f()}})),document.getElementById("Toggle-State").addEventListener("click",(function(){var e=document.querySelectorAll("div.Todo-List__Tasks__Task.Completed");!function(e,t){for(var n in H)H[n].completed=t;var o,r=g(e);try{for(r.s();!(o=r.n()).done;){var i=o.value;t?i.classList.remove("Completed"):i.classList.add("Completed")}}catch(e){r.e(e)}finally{r.f()}localStorage.setItem("todoList",JSON.stringify(H)),y()}(document.querySelectorAll("div.Todo-List__Tasks__Task"),e.length===H.length)}));var C=document.getElementById("Task-Section");function S(){var e,t=[],n=g(document.getElementsByClassName("Todo-List__Footer-Buttons__Link"));try{for(n.s();!(e=n.n()).done;)e.value.classList.remove("Active-Link")}catch(e){n.e(e)}finally{n.f()}var o=document.URL.split("/");switch(o[o.length-1]){case"#Active":t=[!1],w.classList.add("Active-Link");break;case"#Completed":t=[!0],x.classList.add("Active-Link");break;default:t=[!0,!1],T.classList.add("Active-Link")}var r,i=g(C.querySelectorAll("div.Todo-List__Tasks__Task"));try{for(i.s();!(r=i.n()).done;){var a=r.value,s=t.includes(a.classList.contains("Completed"));a.style.display=s?"inline-flex":"none"}}catch(e){i.e(e)}finally{i.f()}}function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function I(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,B(o.key),o)}}function F(e,t,n){return(t=B(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===E(t)?t:String(t)}var j=document.getElementById("Task-Section"),O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"text",""),F(this,"data_id",0),F(this,"checked",!1),F(this,"taskComponents",{task:"",customCheckbox:"",completeInput:"",deleteInput:"",taskTitle:""}),this.text=t.title,this.data_id=t.id,this.checked=t.completed}var t,n;return t=e,n=[{key:"createElement",value:function(){var e=this,t='\n            <div class="Todo-List__Tasks__Task '.concat(this.checked?"Completed":"",'" \n                   style="display: inline-flex" data-id="').concat(this.data_id,'">\n                <label class="Todo-List__Tasks__Task__Custom-Checkbox">\n                    <input class="Todo-List__Tasks__Task__Toggle-Check" type="checkbox">\n                </label>\n                <textarea class="Todo-List__Tasks__Task__Task-Title" readonly="true" rows="1"></textarea>\n                <button class="Todo-List__Tasks__Task__Delete-Task"></button>\n            </div>');j.insertAdjacentHTML("beforeend",t),this.taskComponents.task=j.querySelector("div.Todo-List__Tasks__Task[data-id='".concat(this.data_id,"']")),this.taskComponents.customCheckbox=this.taskComponents.task.querySelector("label.Todo-List__Tasks__Task__Custom-Checkbox"),this.taskComponents.completeInput=this.taskComponents.task.querySelector("input.Todo-List__Tasks__Task__Toggle-Check"),this.taskComponents.deleteInput=this.taskComponents.task.querySelector("button.Todo-List__Tasks__Task__Delete-Task"),this.taskComponents.taskTitle=this.taskComponents.task.querySelector("textarea.Todo-List__Tasks__Task__Task-Title"),this.taskComponents.taskTitle.value=this.text,this.taskComponents.completeInput.addEventListener("click",(function(){return e.checkTask()})),this.taskComponents.deleteInput.addEventListener("click",(function(){return e.removeTask()})),this.taskComponents.task.addEventListener("dblclick",(function(){return e.editTask()})),this.resizeTask(),window.addEventListener("resize",(function(){return e.resizeTask()})),y()}},{key:"removeTask",value:function(){this.taskComponents.task.remove(),M(this.data_id)}},{key:"checkTask",value:function(){this.taskComponents.task.classList.toggle("Completed");for(var e=0;e<H.length;e++)H[e].id===this.data_id&&(H[e].completed=!H[e].completed,localStorage.setItem("todoList",JSON.stringify(H)));S(),y()}},{key:"resizeTask",value:function(){var e=this.taskComponents.task,t=this.taskComponents.taskTitle;t.style.height="auto",t.style.height=t.scrollHeight+"px",e.style.height="calc(".concat(t.scrollHeight+"px"," + 1.5vh")}},{key:"editTask",value:function(){var e=this,t=[this.taskComponents.task,this.taskComponents.taskTitle,this.taskComponents.customCheckbox,this.taskComponents.deleteInput],n=t[0],o=t[1],r=t[2],i=t[3];window.getSelection().removeAllRanges(),o.focus(),o.selectionStart=o.value.length,r.style.display="none",i.style.display="none",n.classList.add("Edited"),o.removeAttribute("readonly"),o.classList.add("Focus"),o.addEventListener("focusout",(function(){e.disableFocus("focusout",e.disableFocus)})),o.addEventListener("keypress",(function t(n){"Enter"===n.key&&e.disableFocus("keypress",t)}))}},{key:"disableFocus",value:function(e,t){var n,o=[this.taskComponents.task,this.taskComponents.taskTitle,this.taskComponents.customCheckbox,this.taskComponents.deleteInput],r=o[0],i=o[1],a=o[2],s=o[3],d=I(H);try{for(d.s();!(n=d.n()).done;){var l=n.value;if(l.id===this.data_id){if(!i.value.trim()){a.click();break}var c,u="",f=I(i.value.toString().split(" "));try{for(f.s();!(c=f.n()).done;){var p=c.value;""!==p&&(u+=p+" ")}}catch(e){f.e(e)}finally{f.f()}i.value=u.trim(),this.resizeTask(i,r),l.title=i.value,localStorage.setItem("todoList",JSON.stringify(H));break}}}catch(e){d.e(e)}finally{d.f()}r.classList.remove("Edited"),i.setAttribute("readonly","true"),i.classList.remove("Focus"),a.removeAttribute("style"),s.removeAttribute("style"),i.removeEventListener(e,t)}}],n&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var H=[];function M(e){H=H.filter((function(t){return t.id!==e})),localStorage.setItem("todoList",JSON.stringify(H)),y()}!function(){if(localStorage.getItem("todoList")){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(H=JSON.parse(localStorage.getItem("todoList")));try{for(t.s();!(e=t.n()).done;){var n=e.value;new O(n).createElement()}}catch(e){t.e(e)}finally{t.f()}S()}else localStorage.setItem("todoList","[]")}(),n.p,n(405)})()})();