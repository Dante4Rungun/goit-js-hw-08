function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(h,t),c?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function h(){var e=g();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function w(e){return u=void 0,v&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea"),h={email:"",message:""},w=e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500);(()=>{let e=localStorage.getItem("feedback-form-state");if(null!=e){const t=JSON.parse(e);h.email=t.email,h.message=t.message,j.value=t.email,S.value=t.message}})(),y.addEventListener("input",(e=>{e.preventDefault(),"email"===e.target.getAttribute("name")&&(h.email=e.target.value),"message"===e.target.getAttribute("name")&&(h.message=e.target.value),w()})),y.addEventListener("click",(e=>{e.preventDefault(),"submit"===e.target.getAttribute("type")&&(console.log(h),j.value=null,S.value=null,localStorage.removeItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.c3503eae.js.map
