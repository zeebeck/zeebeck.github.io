/*! For license information please see cd7d5f864fc9e15ed8adef086269b0aeff617554-085e84ccafa7426bc2d3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1jzt":function(e,t,a){(function(a){var r,o;o=void 0!==a?a:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),r=a.length,o=-1,i="",n=a.charCodeAt(0);++o<r;){if(0===(t=a.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===n?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(o):"\\"+a.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,a))},n=function(t,a,r,o){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(s,l){var c,d,u,f,p={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||n("scrollCancel",c)},animateScroll:function(r,s,l){p.cancelScroll();var d=a(c||t,l||{}),h="[object Number]"===Object.prototype.toString.call(r),m=h||!r.tagName?null:r;if(h||m){var g=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var y,v,b,S,E,w,L,I,O=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),R=h?r:function(t,a,r,i){var n=0;if(t.offsetParent)for(;n+=t.offsetTop,t=t.offsetParent;);return n=Math.max(n-a-r,0),i&&(n=Math.min(n,o()-e.innerHeight)),n}(m,O,parseInt("function"==typeof d.offset?d.offset(r,s):d.offset,10),d.clip),x=R-g,T=o(),H=0,C=(y=x,b=(v=d).speedAsDuration?v.speed:Math.abs(y/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),L=r,I=d,h||history.pushState&&I.updateURL&&history.pushState({smoothScroll:JSON.stringify(I),anchor:L.id},document.title,L===document.documentElement?"#top":"#"+L.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(r,Math.floor(R),!1):(n("scrollStart",d,r,s),p.cancelScroll(!0),e.requestAnimationFrame((function t(a){var o,l,c;S||(S=a),H+=a-S,w=g+x*(l=E=1<(E=0===C?0:H/C)?1:E,"easeInQuad"===(o=d).easing&&(c=l*l),"easeOutQuad"===o.easing&&(c=l*(2-l)),"easeInOutQuad"===o.easing&&(c=l<.5?2*l*l:(4-2*l)*l-1),"easeInCubic"===o.easing&&(c=l*l*l),"easeOutCubic"===o.easing&&(c=--l*l*l+1),"easeInOutCubic"===o.easing&&(c=l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1),"easeInQuart"===o.easing&&(c=l*l*l*l),"easeOutQuart"===o.easing&&(c=1- --l*l*l*l),"easeInOutQuart"===o.easing&&(c=l<.5?8*l*l*l*l:1-8*--l*l*l*l),"easeInQuint"===o.easing&&(c=l*l*l*l*l),"easeOutQuint"===o.easing&&(c=1+--l*l*l*l*l),"easeInOutQuint"===o.easing&&(c=l<.5?16*l*l*l*l*l:1+16*--l*l*l*l*l),o.customEasing&&(c=o.customEasing(l)),c||l),e.scrollTo(0,Math.floor(w)),function(t,a){var o=e.pageYOffset;if(t==a||o==a||(g<a&&e.innerHeight+o)>=T)return p.cancelScroll(!0),i(r,a,h),n("scrollStop",d,r,s),!(f=S=null)}(w,R)||(f=e.requestAnimationFrame(t),S=a)})))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var a,o;try{a=r(decodeURIComponent(d.hash))}catch(t){a=r(d.hash)}if("#"===a){if(!c.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(a);(o=o||"#top"!==a?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(c),p.animateScroll(o,d))}},m=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){c&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",m,!1),p.cancelScroll(),f=u=d=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),c=a(t,l||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",h,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",m,!1)}(),p}}(o)}.apply(t,[]))||(e.exports=r)}).call(this,a("yLpj"))},"9H8W":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var o,i=r(a("PJYZ")),n=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,o=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),o&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),g=function(e){var t=u(e),a=p(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,o=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:o,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:o,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,o=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(o?'media="'+o+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),o);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+c+n+s+a+r+t+i+o+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,o=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(H,(0,l.default)({ref:t,src:a},i,{ariaHidden:n}));return r.length>1?c.default.createElement("picture",null,o(r),s):s})),H=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,o=e.src,i=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:o},h,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));H.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,o=e.style,i=void 0===o?{}:o,n=e.imgStyle,s=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,O=e.draggable,R=m||g;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:C?1:0,transition:M?"opacity "+v+"ms":"none"},s),V="boolean"==typeof y?"lightgray":y,z={transitionDelay:v+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},M&&z,s,f),q={title:t,alt:this.state.isVisible?"":a,style:k,className:p,itemProp:S},j=this.state.isHydrated?h(R):R[0];if(m)return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&z)}),j.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:q,imageVariants:R,generateSources:I}),j.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:q,imageVariants:R,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,E(R),c.default.createElement(H,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},j,{imageVariants:R}))}}));if(g){var P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete P.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},M&&z)}),j.base64&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:q,imageVariants:R,generateSources:I}),j.tracedSVG&&c.default.createElement(T,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:q,imageVariants:R,generateSources:L}),this.state.isVisible&&c.default.createElement("picture",null,E(R),c.default.createElement(H,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},j,{imageVariants:R}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var o;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((o={})[a]=e,o),t,"prop",r)}}C.propTypes={resolutions:M,sizes:N,fixed:V(d.default.oneOfType([M,d.default.arrayOf(M)])),fluid:V(d.default.oneOfType([N,d.default.arrayOf(N)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=C;t.default=z},EXIE:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var r,o=a("1jzt"),i=a.n(o),n=a("dwco"),s=a.n(n);function l(){return s.a.polyfill(),r=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function c(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function d(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,n=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var a=f(this),r=a.getBoundingClientRect(),i=this.getBoundingClientRect();a!==t.body?(h.call(this,a,a.scrollLeft+i.left-r.left,a.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+n<e.scrollHeight:"X"===t?e.clientWidth+n<e.scrollWidth:void 0}function d(t,a){var r=e.getComputedStyle(t,null)["overflow"+a];return"auto"===r||"scroll"===r}function u(e){var t=c(e,"Y")&&d(e,"Y"),a=c(e,"X")&&d(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,r,o,n,s=(i()-t.startTime)/468;n=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*n)),r=t.startX+(t.x-t.startX)*a,o=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(a,r,n){var l,c,d,u,f=i();a===t.body?(l=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=o.scroll):(l=a,c=a.scrollLeft,d=a.scrollTop,u=s),p({scrollable:l,method:u,startTime:f,startX:c,startY:d,x:r,y:n})}}}}()},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),o=a.n(r),i=a("Wbzz"),n=a("9eSz"),s=a.n(n),l=(a("9H8W"),function(){return o.a.createElement(i.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social,n=t.introduction;return o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"author-description"},o.a.createElement(s.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),o.a.createElement("div",{className:"author-name"},o.a.createElement("span",{className:"author-name-prefix"},"Written by"),o.a.createElement(i.Link,{to:"/about",className:"author-name-content"},o.a.createElement("span",null,"@",a)),o.a.createElement("div",{className:"author-introduction"},n),o.a.createElement("p",{className:"author-socials"},r.instagram&&o.a.createElement("a",{href:"https://www.instagram.com/"+r.instagram},"Instagram"),r.github&&o.a.createElement("a",{href:"https://github.com/"+r.github},"GitHub"),r.medium&&o.a.createElement("a",{href:"https://medium.com/"+r.medium},"Medium"),r.tistory&&o.a.createElement("a",{href:"https://zeebeck.tistory.com"},"Velog"),r.facebook&&o.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"),r.linkedin&&o.a.createElement("a",{href:"https://www.linkedin.com/in/"+r.linkedin+"/"},"LinkedIn"))))))}})}),c="3442803692"}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-085e84ccafa7426bc2d3.js.map