(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c});const r=require("vue");var n=e.n(r);function o(e,t,r,n,o,s,a,i){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=i?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}const s=o({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._ssrNode("<p>App.vue</p> "),r("router-view",{staticClass:"view"})],2)}),[],!1,null,null,"0cf91ba3").exports,a=require("vue-router");var i=e.n(a);const u=o({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"home"}},[e._ssrNode("<p>Home.vue</p>")])}),[],!1,null,null,"5ef6690c").exports;n().use(i());const c=e=>new Promise(((t,r)=>{const{app:o,router:a}=function(){const e=new(i())({mode:"history",fallback:!1,routes:[{path:"/",component:u}]});return{app:new(n())({router:e,render:e=>e(s)}),router:e}}();a.push(e.url).then((()=>{a.onReady((()=>{if(!a.getMatchedComponents().length)return r({code:404});t(o)}),r)})).catch(r)}));module.exports=t})();