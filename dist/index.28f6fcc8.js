!function(){function t(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function e(t,e){return e.get?e.get.call(t):e.value}function i(i,n){return e(i,t(i,n,"get"))}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(t,e,i){n(t,e),e.set(t,i)}function s(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function r(t,e){n(t,e),e.add(t)}var o=new WeakMap,l=new WeakMap,h=new WeakMap,u=new WeakSet,c=new WeakSet,d=new WeakSet;function f(){i(this,h).validity.valid?i(this,l).innerHTML="":s(this,d,w).call(this)}function v(t){i(this,h).validity.valid?i(this,l).innerHTML="":(s(this,d,w).call(this),t.preventDefault())}function w(){i(this,h).validity.valueMissing&&(i(this,l).innerHTML="Oops! Please add your email"),i(this,h).validity.typeMismatch&&(i(this,l).innerHTML="Oops! Please check your email")}new class{constructor(){r(this,u),r(this,c),r(this,d),a(this,o,{writable:!0,value:document.getElementById("form")}),a(this,l,{writable:!0,value:document.querySelector(".error-message")}),a(this,h,{writable:!0,value:document.getElementById("email")}),i(this,o).addEventListener("submit",s(this,c,v).bind(this)),i(this,h).addEventListener("input",s(this,u,f).bind(this))}}}();
//# sourceMappingURL=index.28f6fcc8.js.map