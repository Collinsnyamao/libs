/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

/**
 * @license
 * lodash 3.5.0 (Custom Build) lodash.com/license | Underscore.js 1.8.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||typeof n=="undefined"&&e)return 1;if(n<t||!e||typeof t=="undefined"&&r)return-1}return 0}function t(n,t,r){if(t!==t)return s(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function r(n){return typeof n=="function"||false}function e(n){return typeof n=="string"?n:null==n?"":n+""}function u(n){return n.charCodeAt(0)}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r
}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Tt[n]}function c(n){return St[n]}function l(n){return"\\"+Ft[n]}function s(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function p(n){return n&&typeof n=="object"||false}function h(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)}function _(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=L,o[++u]=r);
return o}function g(n){for(var t=-1,r=n.length;++t<r&&h(n.charCodeAt(t)););return t}function v(n){for(var t=n.length;t--&&h(n.charCodeAt(t)););return t}function y(n){return Nt[n]}function d(h){function Tt(n){if(p(n)&&!(Uo(n)||n instanceof Ut)){if(n instanceof Nt)return n;if(Lu.call(n,"__chain__")&&Lu.call(n,"__wrapped__"))return ve(n)}return new Nt(n)}function St(){}function Nt(n,t,r){this.__wrapped__=n,this.__actions__=r||[],this.__chain__=!!t}function Ut(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=_o,this.__views__=null
}function Ft(){this.__data__={}}function $t(n){var t=n?n.length:0;for(this.data={hash:uo(null),set:new Xu};t--;)this.push(n[t])}function Lt(n,t){var r=n.data;return(typeof t=="string"||Qe(t)?r.set.has(t):r.hash[t])?0:-1}function Bt(n,t){var r=-1,e=n.length;for(t||(t=xu(e));++r<e;)t[r]=n[r];return t}function Mt(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}function qt(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Pt(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];
t(i,r,n)&&(o[++u]=i)}return o}function Kt(n,t){for(var r=-1,e=n.length,u=xu(e);++r<e;)u[r]=t(n[r],r,n);return u}function Vt(n){for(var t=-1,r=n.length,e=ho;++t<r;){var u=n[t];u>e&&(e=u)}return e}function Yt(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Zt(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function Gt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Jt(n,t){return typeof n=="undefined"?t:n
}function Xt(n,t,r,e){return typeof n!="undefined"&&Lu.call(e,r)?n:t}function Ht(n,t,r){var e=zo(t);if(!r)return nr(t,n,e);for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(typeof f!="undefined"||i in n)||(n[i]=a)}return n}function Qt(n,t){for(var r=-1,e=n.length,u=ae(e),o=t.length,i=xu(o);++r<o;){var f=t[r];u?(f=parseFloat(f),i[r]=ie(f,e)?n[f]:m):i[r]=n[f]}return i}function nr(n,t,r){r||(r=t,t={});for(var e=-1,u=r.length;++e<u;){var o=r[e];t[o]=n[o]}return t
}function tr(n,t,r){var e=typeof n;if("function"==e){if(e=typeof t!="undefined"){var e=Tt.support,u=!(e.funcNames?n.name:e.funcDecomp);if(!u){var o=Fu.call(n);e.funcNames||(u=!yt.test(o)),u||(u=jt.test(o)||nu(n),jo(n,u))}e=u}n=e?Fr(n,t,r):n}else n=null==n?du:"object"==e?wr(n):typeof t=="undefined"?jr(n+""):xr(n+"",t);return n}function rr(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),typeof f!="undefined")return f;if(!Qe(n))return n;if(e=Uo(n)){if(f=ee(n),!t)return Bt(n,f)}else{var a=zu.call(n),c=a==P;
if(a!=V&&a!=B&&(!c||u))return Ct[a]?oe(n,a,t):u?n:{};if(f=ue(c?{}:n),!t)return nr(n,f,zo(n))}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Mt:_r)(n,function(e,u){f[u]=rr(e,t,r,u,n,o,i)}),f}function er(n,t,r,e){if(typeof n!="function")throw new Wu($);return Hu(function(){n.apply(m,Rr(r,e))},t)}function ur(n,r){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=re(),f=i==t,a=f&&200<=r.length?ko(r):null,c=r.length;a&&(i=Lt,f=false,r=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(r[l]===a)continue n;
u.push(a)}else 0>i(r,a,0)&&u.push(a);return u}function or(n,t){var r=n?n.length:0;if(!ae(r))return _r(n,t);for(var e=-1,u=ge(n);++e<r&&false!==t(u[e],e,u););return n}function ir(n,t){var r=n?n.length:0;if(!ae(r))return gr(n,t);for(var e=ge(n);r--&&false!==t(e[r],r,e););return n}function fr(n,t){var r=true;return or(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ar(n,t){var r=[];return or(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function cr(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0
}),u}function lr(n,t,r,e){e-=1;for(var u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(p(f)&&ae(f.length)&&(Uo(f)||Je(f))){t&&(f=lr(f,t,r,0));var a=-1,c=f.length;for(i.length+=c;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function sr(n,t,r){var e=-1,u=ge(n);r=r(n);for(var o=r.length;++e<o;){var i=r[e];if(false===t(u[i],i,u))break}return n}function pr(n,t,r){var e=ge(n);r=r(n);for(var u=r.length;u--;){var o=r[u];if(false===t(e[o],o,e))break}return n}function hr(n,t){sr(n,t,fu)}function _r(n,t){return sr(n,t,zo)
}function gr(n,t){return pr(n,t,zo)}function vr(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];$o(n[i])&&(o[++u]=i)}return o}function yr(n,t,r){var e=-1,u=typeof t=="function",o=n?n.length:0,i=ae(o)?xu(o):[];return or(n,function(n){var o=u?t:null!=n&&n[t];i[++e]=o?o.apply(n,r):m}),i}function dr(n,t,r,e,u,o){if(n===t)return 0!==n||1/n==1/t;var i=typeof n,f=typeof t;if("function"!=i&&"object"!=i&&"function"!=f&&"object"!=f||null==n||null==t)n=n!==n&&t!==t;else n:{var i=dr,f=Uo(n),a=Uo(t),c=z,l=z;
f||(c=zu.call(n),c==B?c=V:c!=V&&(f=uu(n))),a||(l=zu.call(t),l==B?l=V:l!=V&&uu(t));var s=c==V,a=l==V,l=c==l;if(!l||f||s)if(c=s&&Lu.call(n,"__wrapped__"),a=a&&Lu.call(t,"__wrapped__"),c||a)n=i(c?n.value():n,a?t.value():t,r,e,u,o);else if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?Xr:Qr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false;else n=Hr(n,t,c)}return n}function mr(n,t,r,e,u){var o=t.length;if(null==n)return!o;for(var i=-1,f=!u;++i<o;)if(f&&e[i]?r[i]!==n[t[i]]:!Lu.call(n,t[i]))return false;
for(i=-1;++i<o;){var a=t[i];if(f&&e[i])a=Lu.call(n,a);else{var c=n[a],l=r[i],a=u?u(c,l,a):m;typeof a=="undefined"&&(a=dr(l,c,u,true))}if(!a)return false}return true}function br(n,t){var r=[];return or(n,function(n,e,u){r.push(t(n,e,u))}),r}function wr(n){var t=zo(n),r=t.length;if(1==r){var e=t[0],u=n[e];if(ce(u))return function(n){return null!=n&&n[e]===u&&Lu.call(n,e)}}for(var o=xu(r),i=xu(r);r--;)u=n[t[r]],o[r]=u,i[r]=ce(u);return function(n){return mr(n,t,o,i)}}function xr(n,t){return ce(t)?function(r){return null!=r&&r[n]===t
}:function(r){return null!=r&&dr(t,r[n],null,true)}}function Ar(n,t,r,e,u){if(!Qe(n))return n;var o=ae(t.length)&&(Uo(t)||uu(t));return(o?Mt:_r)(t,function(t,i,f){if(p(t)){e||(e=[]),u||(u=[]);n:{t=e;for(var a=u,c=t.length,l=f[i];c--;)if(t[c]==l){n[i]=a[c],i=void 0;break n}c=n[i],f=r?r(c,l,i,n,f):m;var s=typeof f=="undefined";s&&(f=l,ae(l.length)&&(Uo(l)||uu(l))?f=Uo(c)?c:c?Bt(c):[]:Lo(l)||Je(l)?f=Je(c)?ou(c):Lo(c)?c:{}:s=false),t.push(l),a.push(f),s?n[i]=Ar(f,l,r,t,a):(f===f?f!==c:c===c)&&(n[i]=f),i=void 0
}return i}a=n[i],f=r?r(a,t,i,n,f):m,(l=typeof f=="undefined")&&(f=t),!o&&typeof f=="undefined"||!l&&(f===f?f===a:a!==a)||(n[i]=f)}),n}function jr(n){return function(t){return null==t?m:t[n]}}function kr(n,t){return n+Yu(po()*(t-n+1))}function Er(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Rr(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=typeof r=="undefined"||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=xu(u);++e<u;)r[e]=n[e+t];return r}function Ir(n,t){var r;
return or(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Or(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Cr(t,r,e){var u=-1,o=t.length,i=ae(o)?xu(o):[];return or(t,function(n){for(var t=r.length,e=xu(t);t--;)e[t]=null==n?m:n[r[t]];i[++u]={a:e,b:u,c:n}}),Or(i,function(t,r){var u;n:{u=-1;for(var o=t.a,i=r.a,f=o.length,a=e.length;++u<f;){var c=n(o[u],i[u]);if(c){u=u<a?c*(e[u]?1:-1):c;break n}}u=t.b-r.b}return u})}function Wr(n,r){var e=-1,u=re(),o=n.length,i=u==t,f=i&&200<=o,a=f?ko():null,c=[];
a?(u=Lt,i=false):(f=false,a=r?[]:c);n:for(;++e<o;){var l=n[e],s=r?r(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;r&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((r||f)&&a.push(s),c.push(l))}return c}function Tr(n,t){for(var r=-1,e=t.length,u=xu(e);++r<e;)u[r]=n[t[r]];return u}function Sr(n,t){var r=n;r instanceof Ut&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];Gu.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function Nr(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=yo){for(;e<u;){var o=e+u>>>1,i=n[o];
(r?i<=t:i<t)?e=o+1:u=o}return u}return Ur(n,t,du,r)}function Ur(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=typeof t=="undefined";u<o;){var a=Yu((u+o)/2),c=r(n[a]),l=c===c;(i?l||e:f?l&&(e||typeof c!="undefined"):e?c<=t:c<t)?u=a+1:o=a}return ao(o,vo)}function Fr(n,t,r){if(typeof n!="function")return du;if(typeof t=="undefined")return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)
};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function $r(n){return Pu.call(n,0)}function Lr(n,t,r){for(var e=r.length,u=-1,o=fo(n.length-e,0),i=-1,f=t.length,a=xu(o+f);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Br(n,t,r){for(var e=-1,u=r.length,o=-1,i=fo(n.length-u,0),f=-1,a=t.length,c=xu(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function zr(n,t){return function(r,e,u){var o=t?t():{};
if(e=te(e,u,3),Uo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else or(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Dr(n){return function(){var t=arguments,r=t.length,e=t[0];if(2>r||null==e)return e;var u=t[r-2],o=t[r-1],i=t[3];for(3<r&&typeof u=="function"?(u=Fr(u,o,5),r-=2):(u=2<r&&typeof o=="function"?o:null,r-=u?1:0),i&&fe(t[1],t[2],i)&&(u=3==r?null:u,r=2),o=0;++o<r;)(i=t[o])&&n(e,i,u);return e}}function Mr(n,t){function r(){return(this&&this!==zt&&this instanceof r?e:n).apply(t,arguments)
}var e=Kr(n);return r}function qr(n){return function(){var t=arguments.length,r=t,e=n?t-1:0;if(!t)return function(n){return n};for(var u=xu(t);r--;)if(u[r]=arguments[r],"function"!=typeof u[r])throw new Wu($);return function(){for(var r=e,o=u[r].apply(this,arguments);n?r--:++r<t;)o=u[r].call(this,o);return o}}}function Pr(n){return function(t){var r=-1;t=_u(cu(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Kr(n){return function(){var t=Ao(n.prototype),r=n.apply(t,arguments);return Qe(r)?r:t
}}function Vr(n,t){return function(r,e,o){o&&fe(r,e,o)&&(e=null);var i=te(),f=null==e;if(i===tr&&f||(f=false,e=i(e,o,3)),f){if(e=Uo(r),e||!eu(r))return n(e?r:_e(r));e=u}return ne(r,e,t)}}function Yr(n,t,r,e,u,o,i,f,a,c){function l(){for(var A=arguments.length,j=A,k=xu(A);j--;)k[j]=arguments[j];if(e&&(k=Lr(k,e,u)),o&&(k=Br(k,o,i)),g||y){var j=l.placeholder,I=_(k,j),A=A-I.length;if(A<c){var O=f?Bt(f):null,A=fo(c-A,0),C=g?I:null,I=g?null:I,W=g?k:null,k=g?null:k;return t|=g?E:R,t&=~(g?R:E),v||(t&=~(w|x)),k=Yr(n,t,r,W,C,k,I,O,a,A),k.placeholder=j,k
}}if(j=p?r:this,h&&(n=j[b]),f)for(O=k.length,A=ao(f.length,O),C=Bt(k);A--;)I=f[A],k[A]=ie(I,O)?C[I]:m;return s&&a<k.length&&(k.length=a),(this&&this!==zt&&this instanceof l?d||Kr(n):n).apply(j,k)}var s=t&O,p=t&w,h=t&x,g=t&j,v=t&A,y=t&k,d=!h&&Kr(n),b=n;return l}function Zr(n,t,r){return n=n.length,t=+t,n<t&&oo(t)?(t-=n,r=null==r?" ":r+"",pu(r,Ku(t/r.length)).slice(0,t)):""}function Gr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=xu(f+c);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];
return(this&&this!==zt&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&w,i=Kr(n);return u}function Jr(n,t,r,e,u,o,i,f){var a=t&x;if(!a&&typeof n!="function")throw new Wu($);var c=e?e.length:0;if(c||(t&=~(E|R),e=u=null),c-=u?u.length:0,t&R){var l=e,s=u;e=u=null}var p=!a&&Eo(n);if(r=[n,t,r,e,u,l,s,o,i,f],p&&true!==p){e=r[1],t=p[1],f=e|t,o=O|I,u=w|x,i=o|u|A|k;var l=e&O&&!(t&O),s=e&I&&!(t&I),h=(s?r:p)[7],g=(l?r:p)[8];o=f>=o&&f<=i&&(e<I||(s||l)&&h.length<=g),(!(e>=I&&t>u||e>u&&t>=I)||o)&&(t&w&&(r[2]=p[2],f|=e&w?0:A),(e=p[3])&&(u=r[3],r[3]=u?Lr(u,e,p[4]):Bt(e),r[4]=u?_(r[3],L):Bt(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Br(u,e,p[6]):Bt(e),r[6]=u?_(r[5],L):Bt(p[6])),(e=p[7])&&(r[7]=Bt(e)),t&O&&(r[8]=null==r[8]?p[8]:ao(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]
}return r[9]=null==f?a?0:n.length:fo(f-c,0)||0,(p?jo:Ro)(t==w?Mr(r[0],r[2]):t!=E&&t!=(w|E)||r[4].length?Yr.apply(m,r):Gr.apply(m,r),r)}function Xr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=m;if(e&&(l=u?e(p,s,f):e(s,p,f)),typeof l=="undefined")if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function Hr(n,t,r){switch(r){case D:case M:return+n==+t;case q:return n.name==t.name&&n.message==t.message;
case K:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Y:case Z:return n==t+""}return false}function Qr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;if(a!=c&&!u)return false;for(var l,c=-1;++c<a;){var s=f[c],p=Lu.call(t,s);if(p){var h=n[s],_=t[s],p=m;e&&(p=u?e(_,h,s):e(h,_,s)),typeof p=="undefined"&&(p=h&&h===_||r(h,_,e,u,o,i))}if(!p)return false;l||(l="constructor"==s)}return l||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false
}function ne(n,t,r){var e=r?_o:ho,u=e,o=u;return or(n,function(n,i,f){i=t(n,i,f),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)}),o}function te(n,t,r){var e=Tt.callback||vu,e=e===vu?tr:e;return r?e(n,t,r):e}function re(n,r,e){var u=Tt.indexOf||we,u=u===we?t:u;return n?u(n,r,e):u}function ee(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&Lu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function ue(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Iu),new n
}function oe(n,t,r){var e=n.constructor;switch(t){case G:return $r(n);case D:case M:return new e(+n);case J:case X:case H:case Q:case nt:case tt:case rt:case et:case ut:return t=n.buffer,new e(r?$r(t):t,n.byteOffset,n.length);case K:case Z:return new e(n);case Y:var u=new e(n.source,vt.exec(n));u.lastIndex=n.lastIndex}return u}function ie(n,t){return n=+n,t=null==t?bo:t,-1<n&&0==n%1&&n<t}function fe(n,t,r){if(!Qe(r))return false;var e=typeof t;return"number"==e?(e=r.length,e=ae(e)&&ie(t,e)):e="string"==e&&t in r,e?(t=r[t],n===n?n===t:t!==t):false
}function ae(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=bo}function ce(n){return n===n&&(0===n?0<1/n:!Qe(n))}function le(n,t){n=ge(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function se(n,t){var r={};return hr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function pe(n){var t;if(!p(n)||zu.call(n)!=V||!(Lu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return hr(n,function(n,t){r=t}),typeof r=="undefined"||Lu.call(n,r)
}function he(n){for(var t=fu(n),r=t.length,e=r&&n.length,u=Tt.support,u=e&&ae(e)&&(Uo(n)||u.nonEnumArgs&&Je(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&ie(f,e)||Lu.call(n,f))&&i.push(f)}return i}function _e(n){return null==n?[]:ae(n.length)?Qe(n)?n:Iu(n):au(n)}function ge(n){return Qe(n)?n:Iu(n)}function ve(n){return n instanceof Ut?n.clone():new Nt(n.__wrapped__,n.__chain__,Bt(n.__actions__))}function ye(n,t,r){return n&&n.length?((r?fe(n,t,r):null==t)&&(t=1),Rr(n,0>t?0:t)):[]}function de(n,t,r){var e=n?n.length:0;
return e?((r?fe(n,t,r):null==t)&&(t=1),t=e-(+t||0),Rr(n,0,0>t?0:t)):[]}function me(n,t,r){var e=-1,u=n?n.length:0;for(t=te(t,r,3);++e<u;)if(t(n[e],e,n))return e;return-1}function be(n){return n?n[0]:m}function we(n,r,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?fo(u+e,0):e;else if(e)return e=Nr(n,r),n=n[e],(r===r?r===n:n!==n)?e:-1;return t(n,r,e||0)}function xe(n){var t=n?n.length:0;return t?n[t-1]:m}function Ae(n){return ye(n,1)}function je(n,r,e,u){if(!n||!n.length)return[];
null!=r&&typeof r!="boolean"&&(u=e,e=fe(n,r,u)?null:r,r=false);var o=te();if((o!==tr||null!=e)&&(e=o(e,u,3)),r&&re()==t){r=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=r?r(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Wr(n,e);return n}function ke(n){for(var t=-1,r=(n&&n.length&&Vt(Kt(n,$u)))>>>0,e=xu(r);++t<r;)e[t]=Kt(n,jr(t));return e}function Ee(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Uo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Re(n){return n=Tt(n),n.__chain__=true,n
}function Ie(n,t,r){return t.call(r,n)}function Oe(n,t,r){var e=Uo(n)?qt:fr;return(typeof t!="function"||typeof r!="undefined")&&(t=te(t,r,3)),e(n,t)}function Ce(n,t,r){var e=Uo(n)?Pt:ar;return t=te(t,r,3),e(n,t)}function We(n,t,r){return Uo(n)?(t=me(n,t,r),-1<t?n[t]:m):(t=te(t,r,3),cr(n,t,or))}function Te(n,t,r){return typeof t=="function"&&typeof r=="undefined"&&Uo(n)?Mt(n,t):or(n,Fr(t,r,3))}function Se(n,t,r){if(typeof t=="function"&&typeof r=="undefined"&&Uo(n))for(r=n.length;r--&&false!==t(n[r],r,n););else n=ir(n,Fr(t,r,3));
return n}function Ne(n,t,r){var e=n?n.length:0;return ae(e)||(n=au(n),e=n.length),e?(r=typeof r=="number"?0>r?fo(e+r,0):r||0:0,typeof n=="string"||!Uo(n)&&eu(n)?r<e&&-1<n.indexOf(t,r):-1<re(n,t,r)):false}function Ue(n,t,r){var e=Uo(n)?Kt:br;return t=te(t,r,3),e(n,t)}function Fe(n,t,r,e){return(Uo(n)?Yt:Er)(n,te(t,e,4),r,3>arguments.length,or)}function $e(n,t,r,e){return(Uo(n)?Zt:Er)(n,te(t,e,4),r,3>arguments.length,ir)}function Le(n,t,r){return(r?fe(n,t,r):null==t)?(n=_e(n),t=n.length,0<t?n[kr(0,t-1)]:m):(n=Be(n),n.length=ao(0>t?0:+t||0,n.length),n)
}function Be(n){n=_e(n);for(var t=-1,r=n.length,e=xu(r);++t<r;){var u=kr(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function ze(n,t,r){var e=Uo(n)?Gt:Ir;return(typeof t!="function"||typeof r!="undefined")&&(t=te(t,r,3)),e(n,t)}function De(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Wu($);var e=n;n=t,t=e}return function(){return 0<--n?r=t.apply(this,arguments):t=null,r}}function Me(n,t){var r=w;if(2<arguments.length)var e=Rr(arguments,2),u=_(e,Me.placeholder),r=r|E;return Jr(n,r,t,e,u)
}function qe(n,t){var r=w|x;if(2<arguments.length)var e=Rr(arguments,2),u=_(e,qe.placeholder),r=r|E;return Jr(t,r,n,e,u)}function Pe(n,t,r){return r&&fe(n,t,r)&&(t=null),n=Jr(n,j,null,null,null,null,null,t),n.placeholder=Pe.placeholder,n}function Ke(n,t,r){return r&&fe(n,t,r)&&(t=null),n=Jr(n,k,null,null,null,null,null,t),n.placeholder=Ke.placeholder,n}function Ve(n,t,r){function e(){var r=t-(To()-c);0>=r||r>t?(f&&Vu(f),r=p,f=s=p=m,r&&(h=To(),a=n.apply(l,i),s||f||(i=l=null))):s=Hu(e,r)}function u(){s&&Vu(s),f=s=p=m,(g||_!==t)&&(h=To(),a=n.apply(l,i),s||f||(i=l=null))
}function o(){if(i=arguments,c=To(),l=this,p=g&&(s||!v),false===_)var r=v&&!s;else{f||v||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=Vu(f)),h=c,a=n.apply(l,i)):f||(f=Hu(u,o))}return y&&s?s=Vu(s):s||t===_||(s=Hu(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,g=true;if(typeof n!="function")throw new Wu($);if(t=0>t?0:+t||0,true===r)var v=true,g=false;else Qe(r)&&(v=r.leading,_="maxWait"in r&&fo(+r.maxWait||0,t),g="trailing"in r?r.trailing:g);return o.cancel=function(){s&&Vu(s),f&&Vu(f),f=s=p=m
},o}function Ye(n,t){function r(){var e=arguments,u=r.cache,o=t?t.apply(this,e):e[0];return u.has(o)?u.get(o):(e=n.apply(this,e),u.set(o,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Wu($);return r.cache=new Ye.Cache,r}function Ze(n){var t=Rr(arguments,1),r=_(t,Ze.placeholder);return Jr(n,E,null,t,r)}function Ge(n){var t=Rr(arguments,1),r=_(t,Ge.placeholder);return Jr(n,R,null,t,r)}function Je(n){return ae(p(n)?n.length:m)&&zu.call(n)==B||false}function Xe(n){return n&&1===n.nodeType&&p(n)&&-1<zu.call(n).indexOf("Element")||false
}function He(n){return p(n)&&typeof n.message=="string"&&zu.call(n)==q||false}function Qe(n){var t=typeof n;return"function"==t||n&&"object"==t||false}function nu(n){return null==n?false:zu.call(n)==P?Mu.test(Fu.call(n)):p(n)&&mt.test(n)||false}function tu(n){return typeof n=="number"||p(n)&&zu.call(n)==K||false}function ru(n){return p(n)&&zu.call(n)==Y||false}function eu(n){return typeof n=="string"||p(n)&&zu.call(n)==Z||false}function uu(n){return p(n)&&ae(n.length)&&Ot[zu.call(n)]||false}function ou(n){return nr(n,fu(n))
}function iu(n){return vr(n,fu(n))}function fu(n){if(null==n)return[];Qe(n)||(n=Iu(n));for(var t=n.length,t=t&&ae(t)&&(Uo(n)||xo.nonEnumArgs&&Je(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=xu(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&ie(i,t)||"constructor"==i&&(r||!Lu.call(n,i))||u.push(i);return u}function au(n){return Tr(n,zo(n))}function cu(n){return(n=e(n))&&n.replace(bt,a)}function lu(n){return(n=e(n))&&At.test(n)?n.replace(xt,"\\$&"):n}function su(n,t,r){return r&&fe(n,t,r)&&(t=0),so(n,t)
}function pu(n,t){var r="";if(n=e(n),t=+t,1>t||!n||!oo(t))return r;do t%2&&(r+=n),t=Yu(t/2),n+=n;while(t);return r}function hu(n,t,r){var u=n;return(n=e(n))?(r?fe(u,t,r):null==t)?n.slice(g(n),v(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function _u(n,t,r){return r&&fe(n,t,r)&&(t=null),n=e(n),n.match(t||Et)||[]}function gu(){for(var n=arguments[0],t=arguments.length,r=xu(t?t-1:0);0<--t;)r[t-1]=arguments[t];try{return n.apply(m,r)}catch(e){return He(e)?e:new ju(e)}}function vu(n,t,r){return r&&fe(n,t,r)&&(t=null),p(n)?mu(n):tr(n,t)
}function yu(n){return function(){return n}}function du(n){return n}function mu(n){return wr(rr(n,true))}function bu(n,t,r){if(null==r){var e=Qe(t),u=e&&zo(t);((u=u&&u.length&&vr(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=vr(t,zo(t)));var o=true,e=-1,i=$o(n),f=u.length;false===r?o=false:Qe(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=Bt(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e
}return r=[this.value()],Gu.apply(r,arguments),t.apply(n,r)}}(a))}return n}function wu(){}h=h?Dt.defaults(zt.Object(),h,Dt.pick(zt,It)):zt;var xu=h.Array,Au=h.Date,ju=h.Error,ku=h.Function,Eu=h.Math,Ru=h.Number,Iu=h.Object,Ou=h.RegExp,Cu=h.String,Wu=h.TypeError,Tu=xu.prototype,Su=Iu.prototype,Nu=Cu.prototype,Uu=(Uu=h.window)&&Uu.document,Fu=ku.prototype.toString,$u=jr("length"),Lu=Su.hasOwnProperty,Bu=0,zu=Su.toString,Du=h._,Mu=Ou("^"+lu(zu).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qu=nu(qu=h.ArrayBuffer)&&qu,Pu=nu(Pu=qu&&new qu(0).slice)&&Pu,Ku=Eu.ceil,Vu=h.clearTimeout,Yu=Eu.floor,Zu=nu(Zu=Iu.getPrototypeOf)&&Zu,Gu=Tu.push,Ju=Su.propertyIsEnumerable,Xu=nu(Xu=h.Set)&&Xu,Hu=h.setTimeout,Qu=Tu.splice,no=nu(no=h.Uint8Array)&&no,to=nu(to=h.WeakMap)&&to,ro=function(){try{var n=nu(n=h.Float64Array)&&n,t=new n(new qu(10),0,1)&&n
}catch(r){}return t}(),eo=nu(eo=xu.isArray)&&eo,uo=nu(uo=Iu.create)&&uo,oo=h.isFinite,io=nu(io=Iu.keys)&&io,fo=Eu.max,ao=Eu.min,co=nu(co=Au.now)&&co,lo=nu(lo=Ru.isFinite)&&lo,so=h.parseInt,po=Eu.random,ho=Ru.NEGATIVE_INFINITY,_o=Ru.POSITIVE_INFINITY,go=Eu.pow(2,32)-1,vo=go-1,yo=go>>>1,mo=ro?ro.BYTES_PER_ELEMENT:0,bo=Eu.pow(2,53)-1,wo=to&&new to,xo=Tt.support={};!function(n){xo.funcDecomp=!nu(h.WinRTError)&&jt.test(d),xo.funcNames=typeof ku.name=="string";try{xo.dom=11===Uu.createDocumentFragment().nodeType
}catch(t){xo.dom=false}try{xo.nonEnumArgs=!Ju.call(arguments,1)}catch(r){xo.nonEnumArgs=true}}(0,0),Tt.templateSettings={escape:pt,evaluate:ht,interpolate:_t,variable:"",imports:{_:Tt}};var Ao=function(){function n(){}return function(t){if(Qe(t)){n.prototype=t;var r=new n;n.prototype=null}return r||h.Object()}}(),jo=wo?function(n,t){return wo.set(n,t),n}:du;Pu||($r=qu&&no?function(n){var t=n.byteLength,r=ro?Yu(t/mo):0,e=r*mo,u=new qu(t);if(r){var o=new ro(u,0,r);o.set(new ro(n,0,r))}return t!=e&&(o=new no(u,e),o.set(new no(n,e))),u
}:yu(null));var ko=uo&&Xu?function(n){return new $t(n)}:yu(null),Eo=wo?function(n){return wo.get(n)}:wu,Ro=function(){var n=0,t=0;return function(r,e){var u=To(),o=S-(u-t);if(t=u,0<o){if(++n>=T)return r}else n=0;return jo(r,e)}}(),Io=zr(function(n,t,r){Lu.call(n,r)?++n[r]:n[r]=1}),Oo=zr(function(n,t,r){Lu.call(n,r)?n[r].push(t):n[r]=[t]}),Co=zr(function(n,t,r){n[r]=t}),Wo=zr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),To=co||function(){return(new Au).getTime()},So=qr(),No=qr(true),Uo=eo||function(n){return p(n)&&ae(n.length)&&zu.call(n)==z||false
};xo.dom||(Xe=function(n){return n&&1===n.nodeType&&p(n)&&!Lo(n)||false});var Fo=lo||function(n){return typeof n=="number"&&oo(n)},$o=r(/x/)||no&&!r(no)?function(n){return zu.call(n)==P}:r,Lo=Zu?function(n){if(!n||zu.call(n)!=V)return false;var t=n.valueOf,r=nu(t)&&(r=Zu(t))&&Zu(r);return r?n==r||Zu(n)==r:pe(n)}:pe,Bo=Dr(Ht),zo=io?function(n){if(n)var t=n.constructor,r=n.length;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&r&&ae(r)?he(n):Qe(n)?io(n):[]}:he,Do=Dr(Ar),Mo=Pr(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)
}),qo=Pr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()});8!=so(Rt+"08")&&(su=function(n,t,r){return(r?fe(n,t,r):null==t)?t=0:t&&(t=+t),n=hu(n),so(n,t||(dt.test(n)?16:10))});var Po=Pr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Ko=Pr(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Vo=Vr(Vt),Yo=Vr(function(n){for(var t=-1,r=n.length,e=_o;++t<r;){var u=n[t];u<e&&(e=u)}return e},true);return Tt.prototype=St.prototype,Nt.prototype=Ao(St.prototype),Nt.prototype.constructor=Nt,Ut.prototype=Ao(St.prototype),Ut.prototype.constructor=Ut,Ft.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]
},Ft.prototype.get=function(n){return"__proto__"==n?m:this.__data__[n]},Ft.prototype.has=function(n){return"__proto__"!=n&&Lu.call(this.__data__,n)},Ft.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},$t.prototype.push=function(n){var t=this.data;typeof n=="string"||Qe(n)?t.set.add(n):t.hash[n]=true},Ye.Cache=Ft,Tt.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Wu($);var r=n;n=t,t=r}return n=oo(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0
}},Tt.ary=function(n,t,r){return r&&fe(n,t,r)&&(t=null),t=n&&null==t?n.length:fo(+t||0,0),Jr(n,O,null,null,null,null,t)},Tt.assign=Bo,Tt.at=function(n){return ae(n?n.length:0)&&(n=_e(n)),Qt(n,lr(arguments,false,false,1))},Tt.before=De,Tt.bind=Me,Tt.bindAll=function(n){for(var t=n,r=1<arguments.length?lr(arguments,false,false,1):iu(n),e=-1,u=r.length;++e<u;){var o=r[e];t[o]=Jr(t[o],w,t)}return t},Tt.bindKey=qe,Tt.callback=vu,Tt.chain=Re,Tt.chunk=function(n,t,r){t=(r?fe(n,t,r):null==t)?1:fo(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=xu(Ku(e/t));r<e;)o[++u]=Rr(n,r,r+=t);
return o},Tt.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Tt.constant=yu,Tt.countBy=Io,Tt.create=function(n,t,r){var e=Ao(n);return r&&fe(n,t,r)&&(t=null),t?nr(t,e,zo(t)):e},Tt.curry=Pe,Tt.curryRight=Ke,Tt.debounce=Ve,Tt.defaults=function(n){if(null==n)return n;var t=Bt(arguments);return t.push(Jt),Bo.apply(m,t)},Tt.defer=function(n){return er(n,1,arguments,1)},Tt.delay=function(n,t){return er(n,t,arguments,2)},Tt.difference=function(){for(var n=arguments,t=-1,r=n.length;++t<r;){var e=n[t];
if(Uo(e)||Je(e))break}return ur(e,lr(n,false,true,++t))},Tt.drop=ye,Tt.dropRight=de,Tt.dropRightWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];for(t=te(t,r,3);e--&&t(n[e],e,n););return Rr(n,0,e+1)},Tt.dropWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];var u=-1;for(t=te(t,r,3);++u<e&&t(n[u],u,n););return Rr(n,u)},Tt.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&fe(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=typeof e=="undefined"||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;
return n},Tt.filter=Ce,Tt.flatten=function(n,t,r){var e=n?n.length:0;return r&&fe(n,t,r)&&(t=false),e?lr(n,t,false,0):[]},Tt.flattenDeep=function(n){return n&&n.length?lr(n,true,false,0):[]},Tt.flow=So,Tt.flowRight=No,Tt.forEach=Te,Tt.forEachRight=Se,Tt.forIn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Fr(t,r,3)),sr(n,t,fu)},Tt.forInRight=function(n,t,r){return t=Fr(t,r,3),pr(n,t,fu)},Tt.forOwn=function(n,t,r){return(typeof t!="function"||typeof r!="undefined")&&(t=Fr(t,r,3)),_r(n,t)
},Tt.forOwnRight=function(n,t,r){return t=Fr(t,r,3),pr(n,t,zo)},Tt.functions=iu,Tt.groupBy=Oo,Tt.indexBy=Co,Tt.initial=function(n){return de(n,1)},Tt.intersection=function(){for(var n=[],r=-1,e=arguments.length,u=[],o=re(),i=o==t;++r<e;){var f=arguments[r];(Uo(f)||Je(f))&&(n.push(f),u.push(i&&120<=f.length?ko(r&&f):null))}var e=n.length,i=n[0],a=-1,c=i?i.length:0,l=[],s=u[0];n:for(;++a<c;)if(f=i[a],0>(s?Lt(s,f):o(l,f,0))){for(r=e;--r;){var p=u[r];if(0>(p?Lt(p,f):o(n[r],f,0)))continue n}s&&s.push(f),l.push(f)
}return l},Tt.invert=function(n,t,r){r&&fe(n,t,r)&&(t=null),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?Lu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Tt.invoke=function(n,t){return yr(n,t,Rr(arguments,2))},Tt.keys=zo,Tt.keysIn=fu,Tt.map=Ue,Tt.mapValues=function(n,t,r){var e={};return t=te(t,r,3),_r(n,function(n,r,u){e[r]=t(n,r,u)}),e},Tt.matches=mu,Tt.matchesProperty=function(n,t){return xr(n+"",rr(t,true))},Tt.memoize=Ye,Tt.merge=Do,Tt.mixin=bu,Tt.negate=function(n){if(typeof n!="function")throw new Wu($);
return function(){return!n.apply(this,arguments)}},Tt.omit=function(n,t,r){if(null==n)return{};if(typeof t!="function"){var e=Kt(lr(arguments,false,false,1),Cu);return le(n,ur(fu(n),e))}return t=Fr(t,r,3),se(n,function(n,r,e){return!t(n,r,e)})},Tt.once=function(n){return De(n,2)},Tt.pairs=function(n){for(var t=-1,r=zo(n),e=r.length,u=xu(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},Tt.partial=Ze,Tt.partialRight=Ge,Tt.partition=Wo,Tt.pick=function(n,t,r){return null==n?{}:typeof t=="function"?se(n,Fr(t,r,3)):le(n,lr(arguments,false,false,1))
},Tt.pluck=function(n,t){return Ue(n,jr(t))},Tt.property=function(n){return jr(n+"")},Tt.propertyOf=function(n){return function(t){return null==n?m:n[t]}},Tt.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=re(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)Qu.call(t,o,1);return t},Tt.pullAt=function(t){var r=t||[],e=lr(arguments,false,false,1),u=e.length,o=Qt(r,e);for(e.sort(n);u--;){var i=parseFloat(e[u]);if(i!=f&&ie(i)){var f=i;Qu.call(r,i,1)}}return o},Tt.range=function(n,t,r){r&&fe(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;
var e=-1;t=fo(Ku((t-n)/(r||1)),0);for(var u=xu(t);++e<t;)u[e]=n,n+=r;return u},Tt.rearg=function(n){var t=lr(arguments,false,false,1);return Jr(n,I,null,null,null,t)},Tt.reject=function(n,t,r){var e=Uo(n)?Pt:ar;return t=te(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Tt.remove=function(n,t,r){var e=-1,u=n?n.length:0,o=[];for(t=te(t,r,3);++e<u;)r=n[e],t(r,e,n)&&(o.push(r),Qu.call(n,e--,1),u--);return o},Tt.rest=Ae,Tt.shuffle=Be,Tt.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&fe(n,t,r)&&(t=0,r=e),Rr(n,t,r)):[]
},Tt.sortBy=function(n,t,r){if(null==n)return[];var e=-1,u=n.length,o=ae(u)?xu(u):[];return r&&fe(n,t,r)&&(t=null),t=te(t,r,3),or(n,function(n,r,u){o[++e]={a:t(n,r,u),b:e,c:n}}),Or(o,f)},Tt.sortByAll=function(n){if(null==n)return[];var t=arguments,r=t[3];return r&&fe(t[1],t[2],r)&&(t=[n,t[1]]),Cr(n,lr(t,false,false,1),[])},Tt.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&fe(t,r,e)&&(r=null),Uo(t)||(t=null==t?[]:[t]),Uo(r)||(r=null==r?[]:[r]),Cr(n,t,r))},Tt.spread=function(n){if(typeof n!="function")throw new Wu($);
return function(t){return n.apply(this,t)}},Tt.take=function(n,t,r){return n&&n.length?((r?fe(n,t,r):null==t)&&(t=1),Rr(n,0,0>t?0:t)):[]},Tt.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?fe(n,t,r):null==t)&&(t=1),t=e-(+t||0),Rr(n,0>t?0:t)):[]},Tt.takeRightWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];for(t=te(t,r,3);e--&&t(n[e],e,n););return Rr(n,e+1)},Tt.takeWhile=function(n,t,r){var e=n?n.length:0;if(!e)return[];var u=-1;for(t=te(t,r,3);++u<e&&t(n[u],u,n););return Rr(n,0,u)
},Tt.tap=function(n,t,r){return t.call(r,n),n},Tt.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Wu($);return false===r?e=false:Qe(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Wt.leading=e,Wt.maxWait=+t,Wt.trailing=u,Ve(n,t,Wt)},Tt.thru=Ie,Tt.times=function(n,t,r){if(n=+n,1>n||!oo(n))return[];var e=-1,u=xu(ao(n,go));for(t=Fr(t,r,1);++e<n;)e<go?u[e]=t(e):t(e);return u},Tt.toArray=function(n){var t=n?n.length:0;return ae(t)?t?Bt(n):[]:au(n)},Tt.toPlainObject=ou,Tt.transform=function(n,t,r,e){var u=Uo(n)||uu(n);
return t=te(t,e,4),null==r&&(u||Qe(n)?(e=n.constructor,r=u?Uo(n)?new e:[]:Ao($o(e)&&e.prototype)):r={}),(u?Mt:_r)(n,function(n,e,u){return t(r,n,e,u)}),r},Tt.union=function(){return Wr(lr(arguments,false,true,0))},Tt.uniq=je,Tt.unzip=ke,Tt.values=au,Tt.valuesIn=function(n){return Tr(n,fu(n))},Tt.where=function(n,t){return Ce(n,wr(t))},Tt.without=function(n){return ur(n,Rr(arguments,1))},Tt.wrap=function(n,t){return t=null==t?du:t,Jr(t,E,null,[n],[])},Tt.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];
if(Uo(r)||Je(r))var e=e?ur(e,r).concat(ur(r,e)):r}return e?Wr(e):[]},Tt.zip=function(){for(var n=arguments.length,t=xu(n);n--;)t[n]=arguments[n];return ke(t)},Tt.zipObject=Ee,Tt.backflow=No,Tt.collect=Ue,Tt.compose=No,Tt.each=Te,Tt.eachRight=Se,Tt.extend=Bo,Tt.iteratee=vu,Tt.methods=iu,Tt.object=Ee,Tt.select=Ce,Tt.tail=Ae,Tt.unique=je,bu(Tt,Tt),Tt.add=function(n,t){return n+t},Tt.attempt=gu,Tt.camelCase=Mo,Tt.capitalize=function(n){return(n=e(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Tt.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&fe(n,t,r)?t=false:typeof t=="function"&&(e=r,r=t,t=false),r=typeof r=="function"&&Fr(r,e,1),rr(n,t,r)
},Tt.cloneDeep=function(n,t,r){return t=typeof t=="function"&&Fr(t,r,1),rr(n,true,t)},Tt.deburr=cu,Tt.endsWith=function(n,t,r){n=e(n),t+="";var u=n.length;return r=typeof r=="undefined"?u:ao(0>r?0:+r||0,u),r-=t.length,0<=r&&n.indexOf(t,r)==r},Tt.escape=function(n){return(n=e(n))&&st.test(n)?n.replace(ct,c):n},Tt.escapeRegExp=lu,Tt.every=Oe,Tt.find=We,Tt.findIndex=me,Tt.findKey=function(n,t,r){return t=te(t,r,3),cr(n,t,_r,true)},Tt.findLast=function(n,t,r){return t=te(t,r,3),cr(n,t,ir)},Tt.findLastIndex=function(n,t,r){var e=n?n.length:0;
for(t=te(t,r,3);e--;)if(t(n[e],e,n))return e;return-1},Tt.findLastKey=function(n,t,r){return t=te(t,r,3),cr(n,t,gr,true)},Tt.findWhere=function(n,t){return We(n,wr(t))},Tt.first=be,Tt.has=function(n,t){return n?Lu.call(n,t):false},Tt.identity=du,Tt.includes=Ne,Tt.indexOf=we,Tt.inRange=function(n,t,r){return t=+t||0,"undefined"===typeof r?(r=t,t=0):r=+r||0,n>=t&&n<r},Tt.isArguments=Je,Tt.isArray=Uo,Tt.isBoolean=function(n){return true===n||false===n||p(n)&&zu.call(n)==D||false},Tt.isDate=function(n){return p(n)&&zu.call(n)==M||false
},Tt.isElement=Xe,Tt.isEmpty=function(n){if(null==n)return true;var t=n.length;return ae(t)&&(Uo(n)||eu(n)||Je(n)||p(n)&&$o(n.splice))?!t:!zo(n).length},Tt.isEqual=function(n,t,r,e){return r=typeof r=="function"&&Fr(r,e,3),!r&&ce(n)&&ce(t)?n===t:(e=r?r(n,t):m,typeof e=="undefined"?dr(n,t,r):!!e)},Tt.isError=He,Tt.isFinite=Fo,Tt.isFunction=$o,Tt.isMatch=function(n,t,r,e){var u=zo(t),o=u.length;if(r=typeof r=="function"&&Fr(r,e,3),!r&&1==o){var i=u[0];if(e=t[i],ce(e))return null!=n&&e===n[i]&&Lu.call(n,i)
}for(var i=xu(o),f=xu(o);o--;)e=i[o]=t[u[o]],f[o]=ce(e);return mr(n,u,i,f,r)},Tt.isNaN=function(n){return tu(n)&&n!=+n},Tt.isNative=nu,Tt.isNull=function(n){return null===n},Tt.isNumber=tu,Tt.isObject=Qe,Tt.isPlainObject=Lo,Tt.isRegExp=ru,Tt.isString=eu,Tt.isTypedArray=uu,Tt.isUndefined=function(n){return typeof n=="undefined"},Tt.kebabCase=qo,Tt.last=xe,Tt.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?fo(e+r,0):ao(r||0,e-1))+1;else if(r)return u=Nr(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return s(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Tt.max=Vo,Tt.min=Yo,Tt.noConflict=function(){return h._=Du,this},Tt.noop=wu,Tt.now=To,Tt.pad=function(n,t,r){n=e(n),t=+t;var u=n.length;return u<t&&oo(t)?(u=(t-u)/2,t=Yu(u),u=Ku(u),r=Zr("",u,r),r.slice(0,t)+n+r):n},Tt.padLeft=function(n,t,r){return(n=e(n))&&Zr(n,t,r)+n},Tt.padRight=function(n,t,r){return(n=e(n))&&n+Zr(n,t,r)},Tt.parseInt=su,Tt.random=function(n,t,r){r&&fe(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=po(),ao(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t)):kr(n,t)
},Tt.reduce=Fe,Tt.reduceRight=$e,Tt.repeat=pu,Tt.result=function(n,t,r){return t=null==n?m:n[t],typeof t=="undefined"&&(t=r),$o(t)?t.call(n):t},Tt.runInContext=d,Tt.size=function(n){var t=n?n.length:0;return ae(t)?t:zo(n).length},Tt.snakeCase=Po,Tt.some=ze,Tt.sortedIndex=function(n,t,r,e){var u=te(r);return u===tr&&null==r?Nr(n,t):Ur(n,t,u(r,e,1))},Tt.sortedLastIndex=function(n,t,r,e){var u=te(r);return u===tr&&null==r?Nr(n,t,true):Ur(n,t,u(r,e,1),true)},Tt.startCase=Ko,Tt.startsWith=function(n,t,r){return n=e(n),r=null==r?0:ao(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r
},Tt.sum=function(n){Uo(n)||(n=_e(n));for(var t=n.length,r=0;t--;)r+=+n[t]||0;return r},Tt.template=function(n,t,r){var u=Tt.templateSettings;r&&fe(n,t,r)&&(t=r=null),n=e(n),t=Ht(Ht({},r||t),u,Xt),r=Ht(Ht({},t.imports),u.imports,Xt);var o,i,f=zo(r),a=Tr(r,f),c=0;r=t.interpolate||wt;var s="__p+='";r=Ou((t.escape||wt).source+"|"+r.source+"|"+(r===_t?gt:wt).source+"|"+(t.evaluate||wt).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),s+=n.slice(c,a).replace(kt,l),r&&(o=true,s+="'+__e("+r+")+'"),f&&(i=true,s+="';"+f+";\n__p+='"),e&&(s+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t
}),s+="';",(t=t.variable)||(s="with(obj){"+s+"}"),s=(i?s.replace(ot,""):s).replace(it,"$1").replace(ft,"$1;"),s="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+s+"return __p}",t=gu(function(){return ku(f,p+"return "+s).apply(m,a)}),t.source=s,He(t))throw t;return t},Tt.trim=hu,Tt.trimLeft=function(n,t,r){var u=n;return(n=e(n))?n.slice((r?fe(u,t,r):null==t)?g(n):o(n,t+"")):n
},Tt.trimRight=function(n,t,r){var u=n;return(n=e(n))?(r?fe(u,t,r):null==t)?n.slice(0,v(n)+1):n.slice(0,i(n,t+"")+1):n},Tt.trunc=function(n,t,r){r&&fe(n,t,r)&&(t=null);var u=C;if(r=W,null!=t)if(Qe(t)){var o="separator"in t?t.separator:o,u="length"in t?+t.length||0:u;r="omission"in t?e(t.omission):r}else u=+t||0;if(n=e(n),u>=n.length)return n;if(u-=r.length,1>u)return r;if(t=n.slice(0,u),null==o)return t+r;if(ru(o)){if(n.slice(u).search(o)){var i,f=n.slice(0,u);for(o.global||(o=Ou(o.source,(vt.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;
t=t.slice(0,null==i?u:i)}}else n.indexOf(o,u)!=u&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},Tt.unescape=function(n){return(n=e(n))&&lt.test(n)?n.replace(at,y):n},Tt.uniqueId=function(n){var t=++Bu;return e(n)+t},Tt.words=_u,Tt.all=Oe,Tt.any=ze,Tt.contains=Ne,Tt.detect=We,Tt.foldl=Fe,Tt.foldr=$e,Tt.head=be,Tt.include=Ne,Tt.inject=Fe,bu(Tt,function(){var n={};return _r(Tt,function(t,r){Tt.prototype[r]||(n[r]=t)}),n}(),false),Tt.sample=Le,Tt.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return Le(t,n)
}):Le(this.value())},Tt.VERSION=b,Mt("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Tt[n].placeholder=Tt}),Mt(["dropWhile","filter","map","takeWhile"],function(n,t){var r=t!=F,e=t==N;Ut.prototype[n]=function(n,u){var o=this.__filtered__,i=o&&e?new Ut(this):this.clone();return(i.__iteratees__||(i.__iteratees__=[])).push({done:false,count:0,index:0,iteratee:te(n,u,1),limit:-1,type:t}),i.__filtered__=o||r,i}}),Mt(["drop","take"],function(n,t){var r=n+"While";Ut.prototype[n]=function(r){var e=this.__filtered__,u=e&&!t?this.dropWhile():this.clone();
return r=null==r?1:fo(Yu(r)||0,0),e?t?u.__takeCount__=ao(u.__takeCount__,r):xe(u.__iteratees__).limit=r:(u.__views__||(u.__views__=[])).push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},Ut.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()},Ut.prototype[n+"RightWhile"]=function(n,t){return this.reverse()[r](n,t).reverse()}}),Mt(["first","last"],function(n,t){var r="take"+(t?"Right":"");Ut.prototype[n]=function(){return this[r](1).value()[0]}}),Mt(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");
Ut.prototype[n]=function(){return this[r](1)}}),Mt(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?wr:jr;Ut.prototype[n]=function(n){return this[r](e(n))}}),Ut.prototype.compact=function(){return this.filter(du)},Ut.prototype.reject=function(n,t){return n=te(n,t,1),this.filter(function(t){return!n(t)})},Ut.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=0>n?this.takeRight(-n):this.drop(n);return typeof t!="undefined"&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},Ut.prototype.toArray=function(){return this.drop(0)
},_r(Ut.prototype,function(n,t){var r=Tt[t],e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);Tt.prototype[t]=function(){function t(n){return n=[n],Gu.apply(n,o),r.apply(Tt,n)}var o=arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof Ut,l=o[0],s=c||Uo(f);return s&&e&&typeof l=="function"&&1!=l.length&&(c=s=false),c=c&&!a,u&&!i?c?n.call(f):r.call(Tt,this.value()):s?(f=n.apply(c?f:new Ut(this),o),u||!a&&!f.__actions__||(f.__actions__||(f.__actions__=[])).push({func:Ie,args:[t],thisArg:Tt}),new Nt(f,i)):this.thru(t)
}}),Mt("concat join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?Nu:Tu)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Tt.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),Ut.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new Ut(this.__wrapped__);return e.__actions__=n?Bt(n):null,e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=t?Bt(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?Bt(r):null,e
},Ut.prototype.reverse=function(){if(this.__filtered__){var n=new Ut(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},Ut.prototype.value=function(){var n=this.__wrapped__.value();if(!Uo(n))return Sr(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,f=u?u.length:0;++i<f;){var a=u[i],c=a.size;switch(a.type){case"drop":o+=c;break;case"dropRight":t-=c;break;case"take":t=ao(t,o+c);break;case"takeRight":o=fo(o,t-c)}}t={start:o,end:t},u=t.start,o=t.end,t=o-u,u=e?o:u-1,o=ao(t,this.__takeCount__),f=(i=this.__iteratees__)?i.length:0,a=0,c=[];
n:for(;t--&&a<o;){for(var u=u+r,l=-1,s=n[u];++l<f;){var p=i[l],h=p.iteratee,_=p.type;if(_==N){if(p.done&&(e?u>p.index:u<p.index)&&(p.count=0,p.done=false),p.index=u,!(p.done||(_=p.limit,p.done=-1<_?p.count++>=_:!h(s))))continue n}else if(p=h(s),_==F)s=p;else if(!p){if(_==U)continue n;break n}}c[a++]=s}return c},Tt.prototype.chain=function(){return Re(this)},Tt.prototype.commit=function(){return new Nt(this.value(),this.__chain__)},Tt.prototype.plant=function(n){for(var t,r=this;r instanceof St;){var e=ve(r);
t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Tt.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ut?(this.__actions__.length&&(n=new Ut(this)),new Nt(n.reverse(),this.__chain__)):this.thru(function(n){return n.reverse()})},Tt.prototype.toString=function(){return this.value()+""},Tt.prototype.run=Tt.prototype.toJSON=Tt.prototype.valueOf=Tt.prototype.value=function(){return Sr(this.__wrapped__,this.__actions__)},Tt.prototype.collect=Tt.prototype.map,Tt.prototype.head=Tt.prototype.first,Tt.prototype.select=Tt.prototype.filter,Tt.prototype.tail=Tt.prototype.rest,Tt
}var m,b="3.5.0",w=1,x=2,A=4,j=8,k=16,E=32,R=64,I=128,O=256,C=30,W="...",T=150,S=16,N=0,U=1,F=2,$="Expected a function",L="__lodash_placeholder__",B="[object Arguments]",z="[object Array]",D="[object Boolean]",M="[object Date]",q="[object Error]",P="[object Function]",K="[object Number]",V="[object Object]",Y="[object RegExp]",Z="[object String]",G="[object ArrayBuffer]",J="[object Float32Array]",X="[object Float64Array]",H="[object Int8Array]",Q="[object Int16Array]",nt="[object Int32Array]",tt="[object Uint8Array]",rt="[object Uint8ClampedArray]",et="[object Uint16Array]",ut="[object Uint32Array]",ot=/\b__p\+='';/g,it=/\b(__p\+=)''\+/g,ft=/(__e\(.*?\)|\b__t\))\+'';/g,at=/&(?:amp|lt|gt|quot|#39|#96);/g,ct=/[&<>"'`]/g,lt=RegExp(at.source),st=RegExp(ct.source),pt=/<%-([\s\S]+?)%>/g,ht=/<%([\s\S]+?)%>/g,_t=/<%=([\s\S]+?)%>/g,gt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,vt=/\w*$/,yt=/^\s*function[ \n\r\t]+\w/,dt=/^0[xX]/,mt=/^\[object .+?Constructor\]$/,bt=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,wt=/($^)/,xt=/[.*+?^${}()|[\]\/\\]/g,At=RegExp(xt.source),jt=/\bthis\b/,kt=/['\n\r\u2028\u2029\\]/g,Et=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),Rt=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",It="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window WinRTError".split(" "),Ot={};
Ot[J]=Ot[X]=Ot[H]=Ot[Q]=Ot[nt]=Ot[tt]=Ot[rt]=Ot[et]=Ot[ut]=true,Ot[B]=Ot[z]=Ot[G]=Ot[D]=Ot[M]=Ot[q]=Ot[P]=Ot["[object Map]"]=Ot[K]=Ot[V]=Ot[Y]=Ot["[object Set]"]=Ot[Z]=Ot["[object WeakMap]"]=false;var Ct={};Ct[B]=Ct[z]=Ct[G]=Ct[D]=Ct[M]=Ct[J]=Ct[X]=Ct[H]=Ct[Q]=Ct[nt]=Ct[K]=Ct[V]=Ct[Y]=Ct[Z]=Ct[tt]=Ct[rt]=Ct[et]=Ct[ut]=true,Ct[q]=Ct[P]=Ct["[object Map]"]=Ct["[object Set]"]=Ct["[object WeakMap]"]=false;var Wt={leading:false,maxWait:0,trailing:false},Tt={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},St={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Nt={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Ut={"function":true,object:true},Ft={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$t=Ut[typeof exports]&&exports&&!exports.nodeType&&exports,Lt=Ut[typeof module]&&module&&!module.nodeType&&module,Ut=Ut[typeof window]&&window,Bt=Lt&&Lt.exports===$t&&$t,zt=$t&&Lt&&typeof global=="object"&&global||Ut!==(this&&this.window)&&Ut||this,Dt=d();
typeof define=="function"&&typeof define.amd=="object"&&define.amd?(zt._=Dt, define(function(){return Dt})):$t&&Lt?Bt?(Lt.exports=Dt)._=Dt:$t._=Dt:zt._=Dt}).call(this);



/**
 * gridstack.js 0.2.7-dev
 * http://troolee.github.io/gridstack.js/
 * (c) 2014-2016 Pavel Reznikov, Dylan Weiss
 * gridstack.js may be freely distributed under the MIT license.
 * @preserve
*/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'lodash'], factory);
    } else if (typeof exports !== 'undefined') {
        try { jQuery = require('jquery'); } catch (e) {}
        try { _ = require('lodash'); } catch (e) {}
        factory(jQuery, _);
    } else {
        factory(jQuery, _);
    }
})(function($, _) {

    var scope = window;

    var obsolete = function(f, oldName, newName) {
        var wrapper = function() {
            console.warn('gridstack.js: Function `' + oldName + '` is deprecated as of v0.2.5 and has been replaced ' +
            'with `' + newName + '`. It will be **completely** removed in v1.0.');
            return f.apply(this, arguments);
        };
        wrapper.prototype = f.prototype;

        return wrapper;
    };

    var obsoleteOpts = function(oldName, newName) {
        console.warn('gridstack.js: Option `' + oldName + '` is deprecated as of v0.2.5 and has been replaced with `' +
            newName + '`. It will be **completely** removed in v1.0.');
    };

    var Utils = {
        isIntercepted: function(a, b) {
            return !(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y);
        },

        sort: function(nodes, dir, width) {
            width = width || _.chain(nodes).map(function(node) { return node.x + node.width; }).max().value();
            dir = dir != -1 ? 1 : -1;
            return _.sortBy(nodes, function(n) { return dir * (n.x + n.y * width); });
        },

        createStylesheet: function(id) {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.setAttribute('data-gs-style-id', id);
            if (style.styleSheet) {
                style.styleSheet.cssText = '';
            } else {
                style.appendChild(document.createTextNode(''));
            }
            document.getElementsByTagName('head')[0].appendChild(style);
            return style.sheet;
        },

        removeStylesheet: function(id) {
            $('STYLE[data-gs-style-id=' + id + ']').remove();
        },

        insertCSSRule: function(sheet, selector, rules, index) {
            if (typeof sheet.insertRule === 'function') {
                sheet.insertRule(selector + '{' + rules + '}', index);
            } else if (typeof sheet.addRule === 'function') {
                sheet.addRule(selector, rules, index);
            }
        },

        toBool: function(v) {
            if (typeof v == 'boolean') {
                return v;
            }
            if (typeof v == 'string') {
                v = v.toLowerCase();
                return !(v === '' || v == 'no' || v == 'false' || v == '0');
            }
            return Boolean(v);
        },

        _collisionNodeCheck: function(n) {
            return n != this.node && Utils.isIntercepted(n, this.nn);
        },

        _didCollide: function(bn) {
            return Utils.isIntercepted({x: this.n.x, y: this.newY, width: this.n.width, height: this.n.height}, bn);
        },

        _isAddNodeIntercepted: function(n) {
            return Utils.isIntercepted({x: this.x, y: this.y, width: this.node.width, height: this.node.height}, n);
        },

        parseHeight: function(val) {
            var height = val;
            var heightUnit = 'px';
            if (height && _.isString(height)) {
                var match = height.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);
                if (!match) {
                    throw new Error('Invalid height');
                }
                heightUnit = match[2] || 'px';
                height = parseFloat(match[1]);
            }
            return {height: height, unit: heightUnit};
        }
    };

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    Utils.is_intercepted = obsolete(Utils.isIntercepted, 'is_intercepted', 'isIntercepted');

    Utils.create_stylesheet = obsolete(Utils.createStylesheet, 'create_stylesheet', 'createStylesheet');

    Utils.remove_stylesheet = obsolete(Utils.removeStylesheet, 'remove_stylesheet', 'removeStylesheet');

    Utils.insert_css_rule = obsolete(Utils.insertCSSRule, 'insert_css_rule', 'insertCSSRule');
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    /**
    * @class GridStackDragDropPlugin
    * Base class for drag'n'drop plugin.
    */
    function GridStackDragDropPlugin(grid) {
        this.grid = grid;
    }

    GridStackDragDropPlugin.registeredPlugins = [];

    GridStackDragDropPlugin.registerPlugin = function(pluginClass) {
        GridStackDragDropPlugin.registeredPlugins.push(pluginClass);
    };

    GridStackDragDropPlugin.prototype.resizable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.draggable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.droppable = function(el, opts) {
        return this;
    };

    GridStackDragDropPlugin.prototype.isDroppable = function(el) {
        return false;
    };

    GridStackDragDropPlugin.prototype.on = function(el, eventName, callback) {
        return this;
    };


    var idSeq = 0;

    var GridStackEngine = function(width, onchange, floatMode, height, items) {
        this.width = width;
        this.float = floatMode || false;
        this.height = height || 0;

        this.nodes = items || [];
        this.onchange = onchange || function() {};

        this._updateCounter = 0;
        this._float = this.float;

        this._addedNodes = [];
        this._removedNodes = [];
    };

    GridStackEngine.prototype.batchUpdate = function() {
        this._updateCounter = 1;
        this.float = true;
    };

    GridStackEngine.prototype.commit = function() {
        if (this._updateCounter !== 0) {
            this._updateCounter = 0;
            this.float = this._float;
            this._packNodes();
            this._notify();
        }
    };

    // For Meteor support: https://github.com/troolee/gridstack.js/pull/272
    GridStackEngine.prototype.getNodeDataByDOMEl = function(el) {
        return _.find(this.nodes, function(n) { return el.get(0) === n.el.get(0); });
    };

    GridStackEngine.prototype._fixCollisions = function(node) {
        var self = this;
        this._sortNodes(-1);

        var nn = node;
        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));
        if (!this.float && !hasLocked) {
            nn = {x: 0, y: node.y, width: this.width, height: node.height};
        }
        while (true) {
            var collisionNode = _.find(this.nodes, _.bind(Utils._collisionNodeCheck, {node: node, nn: nn}));
            if (typeof collisionNode == 'undefined') {
                return;
            }
            this.moveNode(collisionNode, collisionNode.x, node.y + node.height,
                collisionNode.width, collisionNode.height, true);
        }
    };

    GridStackEngine.prototype.isAreaEmpty = function(x, y, width, height) {
        var nn = {x: x || 0, y: y || 0, width: width || 1, height: height || 1};
        var collisionNode = _.find(this.nodes, _.bind(function(n) {
            return Utils.isIntercepted(n, nn);
        }, this));
        return collisionNode === null || typeof collisionNode === 'undefined';
    };

    GridStackEngine.prototype._sortNodes = function(dir) {
        this.nodes = Utils.sort(this.nodes, dir, this.width);
    };

    GridStackEngine.prototype._packNodes = function() {
        this._sortNodes();

        if (this.float) {
            _.each(this.nodes, _.bind(function(n, i) {
                if (n._updating || typeof n._origY == 'undefined' || n.y == n._origY) {
                    return;
                }

                var newY = n.y;
                while (newY >= n._origY) {
                    var collisionNode = _.chain(this.nodes)
                        .find(_.bind(Utils._didCollide, {n: n, newY: newY}))
                        .value();

                    if (!collisionNode) {
                        n._dirty = true;
                        n.y = newY;
                    }
                    --newY;
                }
            }, this));
        } else {
            _.each(this.nodes, _.bind(function(n, i) {
                if (n.locked) {
                    return;
                }
                while (n.y > 0) {
                    var newY = n.y - 1;
                    var canBeMoved = i === 0;

                    if (i > 0) {
                        var collisionNode = _.chain(this.nodes)
                            .take(i)
                            .find(_.bind(Utils._didCollide, {n: n, newY: newY}))
                            .value();
                        canBeMoved = typeof collisionNode == 'undefined';
                    }

                    if (!canBeMoved) {
                        break;
                    }
                    n._dirty = n.y != newY;
                    n.y = newY;
                }
            }, this));
        }
    };

    GridStackEngine.prototype._prepareNode = function(node, resizing) {
        node = _.defaults(node || {}, {width: 1, height: 1, x: 0, y: 0});

        node.x = parseInt('' + node.x);
        node.y = parseInt('' + node.y);
        node.width = parseInt('' + node.width);
        node.height = parseInt('' + node.height);
        node.autoPosition = node.autoPosition || false;
        node.noResize = node.noResize || false;
        node.noMove = node.noMove || false;

        if (node.width > this.width) {
            node.width = this.width;
        } else if (node.width < 1) {
            node.width = 1;
        }

        if (node.height < 1) {
            node.height = 1;
        }

        if (node.x < 0) {
            node.x = 0;
        }

        if (node.x + node.width > this.width) {
            if (resizing) {
                node.width = this.width - node.x;
            } else {
                node.x = this.width - node.width;
            }
        }

        if (node.y < 0) {
            node.y = 0;
        }

        return node;
    };

    GridStackEngine.prototype._notify = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = typeof args[0] === 'undefined' ? [] : [args[0]];
        args[1] = typeof args[1] === 'undefined' ? true : args[1];
        if (this._updateCounter) {
            return;
        }
        var deletedNodes = args[0].concat(this.getDirtyNodes());
        this.onchange(deletedNodes, args[1]);
    };

    GridStackEngine.prototype.cleanNodes = function() {
        if (this._updateCounter) {
            return;
        }
        _.each(this.nodes, function(n) {n._dirty = false; });
    };

    GridStackEngine.prototype.getDirtyNodes = function() {
        return _.filter(this.nodes, function(n) { return n._dirty; });
    };

    GridStackEngine.prototype.addNode = function(node, triggerAddEvent) {
        node = this._prepareNode(node);

        if (typeof node.maxWidth != 'undefined') { node.width = Math.min(node.width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { node.height = Math.min(node.height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { node.width = Math.max(node.width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { node.height = Math.max(node.height, node.minHeight); }

        node._id = ++idSeq;
        node._dirty = true;

        if (node.autoPosition) {
            this._sortNodes();

            for (var i = 0;; ++i) {
                var x = i % this.width;
                var y = Math.floor(i / this.width);
                if (x + node.width > this.width) {
                    continue;
                }
                if (!_.find(this.nodes, _.bind(Utils._isAddNodeIntercepted, {x: x, y: y, node: node}))) {
                    node.x = x;
                    node.y = y;
                    break;
                }
            }
        }

        this.nodes.push(node);
        if (typeof triggerAddEvent != 'undefined' && triggerAddEvent) {
            this._addedNodes.push(_.clone(node));
        }

        this._fixCollisions(node);
        this._packNodes();
        this._notify();
        return node;
    };

    GridStackEngine.prototype.removeNode = function(node, detachNode) {
        detachNode = typeof detachNode === 'undefined' ? true : detachNode;
        this._removedNodes.push(_.clone(node));
        node._id = null;
        this.nodes = _.without(this.nodes, node);
        this._packNodes();
        this._notify(node, detachNode);
    };

    GridStackEngine.prototype.canMoveNode = function(node, x, y, width, height) {
        if (!this.isNodeChangedPosition(node, x, y, width, height)) {
            return false;
        }
        var hasLocked = Boolean(_.find(this.nodes, function(n) { return n.locked; }));

        if (!this.height && !hasLocked) {
            return true;
        }

        var clonedNode;
        var clone = new GridStackEngine(
            this.width,
            null,
            this.float,
            0,
            _.map(this.nodes, function(n) {
                if (n == node) {
                    clonedNode = $.extend({}, n);
                    return clonedNode;
                }
                return $.extend({}, n);
            }));

        if (typeof clonedNode === 'undefined') {
            return true;
        }

        clone.moveNode(clonedNode, x, y, width, height);

        var res = true;

        if (hasLocked) {
            res &= !Boolean(_.find(clone.nodes, function(n) {
                return n != clonedNode && Boolean(n.locked) && Boolean(n._dirty);
            }));
        }
        if (this.height) {
            res &= clone.getGridHeight() <= this.height;
        }

        return res;
    };

    GridStackEngine.prototype.canBePlacedWithRespectToHeight = function(node) {
        if (!this.height) {
            return true;
        }

        var clone = new GridStackEngine(
            this.width,
            null,
            this.float,
            0,
            _.map(this.nodes, function(n) { return $.extend({}, n); }));
        clone.addNode(node);
        return clone.getGridHeight() <= this.height;
    };

    GridStackEngine.prototype.isNodeChangedPosition = function(node, x, y, width, height) {
        if (typeof x != 'number') { x = node.x; }
        if (typeof y != 'number') { y = node.y; }
        if (typeof width != 'number') { width = node.width; }
        if (typeof height != 'number') { height = node.height; }

        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }

        if (node.x == x && node.y == y && node.width == width && node.height == height) {
            return false;
        }
        return true;
    };

    GridStackEngine.prototype.moveNode = function(node, x, y, width, height, noPack) {
        if (!this.isNodeChangedPosition(node, x, y, width, height)) {
            return node;
        }
        if (typeof x != 'number') { x = node.x; }
        if (typeof y != 'number') { y = node.y; }
        if (typeof width != 'number') { width = node.width; }
        if (typeof height != 'number') { height = node.height; }

        if (typeof node.maxWidth != 'undefined') { width = Math.min(width, node.maxWidth); }
        if (typeof node.maxHeight != 'undefined') { height = Math.min(height, node.maxHeight); }
        if (typeof node.minWidth != 'undefined') { width = Math.max(width, node.minWidth); }
        if (typeof node.minHeight != 'undefined') { height = Math.max(height, node.minHeight); }

        if (node.x == x && node.y == y && node.width == width && node.height == height) {
            return node;
        }

        var resizing = node.width != width;
        node._dirty = true;

        node.x = x;
        node.y = y;
        node.width = width;
        node.height = height;

        node = this._prepareNode(node, resizing);

        this._fixCollisions(node);
        if (!noPack) {
            this._packNodes();
            this._notify();
        }
        return node;
    };

    GridStackEngine.prototype.getGridHeight = function() {
        return _.reduce(this.nodes, function(memo, n) { return Math.max(memo, n.y + n.height); }, 0);
    };

    GridStackEngine.prototype.beginUpdate = function(node) {
        _.each(this.nodes, function(n) {
            n._origY = n.y;
        });
        node._updating = true;
    };

    GridStackEngine.prototype.endUpdate = function() {
        _.each(this.nodes, function(n) {
            n._origY = n.y;
        });
        var n = _.find(this.nodes, function(n) { return n._updating; });
        if (n) {
            n._updating = false;
        }
    };

    var GridStack = function(el, opts) {
        var self = this;
        var oneColumnMode, isAutoCellHeight;

        opts = opts || {};

        this.container = $(el);

        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        if (typeof opts.handle_class !== 'undefined') {
            opts.handleClass = opts.handle_class;
            obsoleteOpts('handle_class', 'handleClass');
        }
        if (typeof opts.item_class !== 'undefined') {
            opts.itemClass = opts.item_class;
            obsoleteOpts('item_class', 'itemClass');
        }
        if (typeof opts.placeholder_class !== 'undefined') {
            opts.placeholderClass = opts.placeholder_class;
            obsoleteOpts('placeholder_class', 'placeholderClass');
        }
        if (typeof opts.placeholder_text !== 'undefined') {
            opts.placeholderText = opts.placeholder_text;
            obsoleteOpts('placeholder_text', 'placeholderText');
        }
        if (typeof opts.cell_height !== 'undefined') {
            opts.cellHeight = opts.cell_height;
            obsoleteOpts('cell_height', 'cellHeight');
        }
        if (typeof opts.vertical_margin !== 'undefined') {
            opts.verticalMargin = opts.vertical_margin;
            obsoleteOpts('vertical_margin', 'verticalMargin');
        }
        if (typeof opts.min_width !== 'undefined') {
            opts.minWidth = opts.min_width;
            obsoleteOpts('min_width', 'minWidth');
        }
        if (typeof opts.static_grid !== 'undefined') {
            opts.staticGrid = opts.static_grid;
            obsoleteOpts('static_grid', 'staticGrid');
        }
        if (typeof opts.is_nested !== 'undefined') {
            opts.isNested = opts.is_nested;
            obsoleteOpts('is_nested', 'isNested');
        }
        if (typeof opts.always_show_resize_handle !== 'undefined') {
            opts.alwaysShowResizeHandle = opts.always_show_resize_handle;
            obsoleteOpts('always_show_resize_handle', 'alwaysShowResizeHandle');
        }
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

        opts.itemClass = opts.itemClass || 'grid-stack-item';
        var isNested = this.container.closest('.' + opts.itemClass).length > 0;

        this.opts = _.defaults(opts || {}, {
            width: parseInt(this.container.attr('data-gs-width')) || 12,
            height: parseInt(this.container.attr('data-gs-height')) || 0,
            itemClass: 'grid-stack-item',
            placeholderClass: 'grid-stack-placeholder',
            placeholderText: '',
            handle: '.grid-stack-item-content',
            handleClass: null,
            cellHeight: 60,
            verticalMargin: 20,
            auto: true,
            minWidth: 768,
            float: false,
            staticGrid: false,
            _class: 'grid-stack-instance-' + (Math.random() * 10000).toFixed(0),
            animate: Boolean(this.container.attr('data-gs-animate')) || false,
            alwaysShowResizeHandle: opts.alwaysShowResizeHandle || false,
            resizable: _.defaults(opts.resizable || {}, {
                autoHide: !(opts.alwaysShowResizeHandle || false),
                handles: 'se'
            }),
            draggable: _.defaults(opts.draggable || {}, {
                handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) ||
                    '.grid-stack-item-content',
                scroll: false,
                appendTo: 'body'
            }),
            disableDrag: opts.disableDrag || false,
            disableResize: opts.disableResize || false,
            rtl: 'auto',
            removable: false,
            removeTimeout: 2000,
            verticalMarginUnit: 'px',
            cellHeightUnit: 'px',
            oneColumnModeClass: opts.oneColumnModeClass || 'grid-stack-one-column-mode',
            ddPlugin: null
        });

        if (this.opts.ddPlugin === false) {
            this.opts.ddPlugin = GridStackDragDropPlugin;
        } else if (this.opts.ddPlugin === null) {
            this.opts.ddPlugin = _.first(GridStackDragDropPlugin.registeredPlugins) || GridStackDragDropPlugin;
        }

        this.dd = new this.opts.ddPlugin(this);

        if (this.opts.rtl === 'auto') {
            this.opts.rtl = this.container.css('direction') === 'rtl';
        }

        if (this.opts.rtl) {
            this.container.addClass('grid-stack-rtl');
        }

        this.opts.isNested = isNested;

        isAutoCellHeight = this.opts.cellHeight === 'auto';
        if (isAutoCellHeight) {
            self.cellHeight(self.cellWidth(), true);
        } else {
            this.cellHeight(this.opts.cellHeight, true);
        }
        this.verticalMargin(this.opts.verticalMargin, true);

        this.container.addClass(this.opts._class);

        this._setStaticClass();

        if (isNested) {
            this.container.addClass('grid-stack-nested');
        }

        this._initStyles();

        this.grid = new GridStackEngine(this.opts.width, function(nodes, detachNode) {
            detachNode = typeof detachNode === 'undefined' ? true : detachNode;
            var maxHeight = 0;
            _.each(nodes, function(n) {
                if (detachNode && n._id === null) {
                    if (n.el) {
                        n.el.remove();
                    }
                } else {
                    n.el
                        .attr('data-gs-x', n.x)
                        .attr('data-gs-y', n.y)
                        .attr('data-gs-width', n.width)
                        .attr('data-gs-height', n.height);
                    maxHeight = Math.max(maxHeight, n.y + n.height);
                }
            });
            self._updateStyles(maxHeight + 10);
        }, this.opts.float, this.opts.height);

        if (this.opts.auto) {
            var elements = [];
            var _this = this;
            this.container.children('.' + this.opts.itemClass + ':not(.' + this.opts.placeholderClass + ')')
                .each(function(index, el) {
                el = $(el);
                elements.push({
                    el: el,
                    i: parseInt(el.attr('data-gs-x')) + parseInt(el.attr('data-gs-y')) * _this.opts.width
                });
            });
            _.chain(elements).sortBy(function(x) { return x.i; }).each(function(i) {
                self._prepareElement(i.el);
            }).value();
        }

        this.setAnimation(this.opts.animate);

        this.placeholder = $(
            '<div class="' + this.opts.placeholderClass + ' ' + this.opts.itemClass + '">' +
            '<div class="placeholder-content">' + this.opts.placeholderText + '</div></div>').hide();

        this._updateContainerHeight();

        this._updateHeightsOnResize = _.throttle(function() {
            self.cellHeight(self.cellWidth(), false);
        }, 100);

        this.onResizeHandler = function() {
            if (isAutoCellHeight) {
                self._updateHeightsOnResize();
            }

            if (self._isOneColumnMode()) {
                if (oneColumnMode) {
                    return;
                }
                self.container.addClass(self.opts.oneColumnModeClass);
                oneColumnMode = true;

                self.grid._sortNodes();
                _.each(self.grid.nodes, function(node) {
                    self.container.append(node.el);

                    if (self.opts.staticGrid) {
                        return;
                    }
                    if (node.noMove || self.opts.disableDrag) {
                        self.dd.draggable(node.el, 'disable');
                    }
                    if (node.noResize || self.opts.disableResize) {
                        self.dd.resizable(node.el, 'disable');
                    }

                    node.el.trigger('resize');
                });
            } else {
                if (!oneColumnMode) {
                    return;
                }

                self.container.removeClass(self.opts.oneColumnModeClass);
                oneColumnMode = false;

                if (self.opts.staticGrid) {
                    return;
                }

                _.each(self.grid.nodes, function(node) {
                    if (!node.noMove && !self.opts.disableDrag) {
                        self.dd.draggable(node.el, 'enable');
                    }
                    if (!node.noResize && !self.opts.disableResize) {
                        self.dd.resizable(node.el, 'enable');
                    }

                    node.el.trigger('resize');
                });
            }
        };

        $(window).resize(this.onResizeHandler);
        this.onResizeHandler();

        if (!self.opts.staticGrid && typeof self.opts.removable === 'string') {
            var trashZone = $(self.opts.removable);
            if (!this.dd.isDroppable(trashZone)) {
                this.dd.droppable(trashZone, {
                    accept: '.' + self.opts.itemClass
                });
            }
            this.dd
                .on(trashZone, 'dropover', function(event, ui) {
                    var el = $(ui.draggable);
                    var node = el.data('_gridstack_node');
                    if (node._grid !== self) {
                        return;
                    }
                    self._setupRemovingTimeout(el);
                })
                .on(trashZone, 'dropout', function(event, ui) {
                    var el = $(ui.draggable);
                    var node = el.data('_gridstack_node');
                    if (node._grid !== self) {
                        return;
                    }
                    self._clearRemovingTimeout(el);
                });
        }

        if (!self.opts.staticGrid && self.opts.acceptWidgets) {
            var draggingElement = null;

            var onDrag = function(event, ui) {
                var el = draggingElement;
                var node = el.data('_gridstack_node');
                var pos = self.getCellFromPixel(ui.offset, true);
                var x = Math.max(0, pos.x);
                var y = Math.max(0, pos.y);
                if (!node._added) {
                    node._added = true;

                    node.el = el;
                    node.x = x;
                    node.y = y;
                    self.grid.cleanNodes();
                    self.grid.beginUpdate(node);
                    self.grid.addNode(node);

                    self.container.append(self.placeholder);
                    self.placeholder
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .show();
                    node.el = self.placeholder;
                    node._beforeDragX = node.x;
                    node._beforeDragY = node.y;

                    self._updateContainerHeight();
                } else {
                    if (!self.grid.canMoveNode(node, x, y)) {
                        return;
                    }
                    self.grid.moveNode(node, x, y);
                    self._updateContainerHeight();
                }
            };

            this.dd
                .droppable(self.container, {
                    accept: function(el) {
                        el = $(el);
                        var node = el.data('_gridstack_node');
                        if (node && node._grid === self) {
                            return false;
                        }
                        return el.is(self.opts.acceptWidgets === true ? '.grid-stack-item' : self.opts.acceptWidgets);
                    }
                })
                .on(self.container, 'dropover', function(event, ui) {
                    var offset = self.container.offset();
                    var el = $(ui.draggable);
                    var cellWidth = self.cellWidth();
                    var cellHeight = self.cellHeight();
                    var origNode = el.data('_gridstack_node');

                    var width = origNode ? origNode.width : (Math.ceil(el.outerWidth() / cellWidth));
                    var height = origNode ? origNode.height : (Math.ceil(el.outerHeight() / cellHeight));

                    draggingElement = el;

                    var node = self.grid._prepareNode({width: width, height: height, _added: false, _temporary: true});
                    el.data('_gridstack_node', node);
                    el.data('_gridstack_node_orig', origNode);

                    el.on('drag', onDrag);
                })
                .on(self.container, 'dropout', function(event, ui) {
                    var el = $(ui.draggable);
                    el.unbind('drag', onDrag);
                    var node = el.data('_gridstack_node');
                    node.el = null;
                    self.grid.removeNode(node);
                    self.placeholder.detach();
                    self._updateContainerHeight();
                    el.data('_gridstack_node', el.data('_gridstack_node_orig'));
                })
                .on(self.container, 'drop', function(event, ui) {
                    self.placeholder.detach();

                    var node = $(ui.draggable).data('_gridstack_node');
                    node._grid = self;
                    var el = $(ui.draggable).clone(false);
                    el.data('_gridstack_node', node);
                    $(ui.draggable).remove();
                    node.el = el;
                    self.placeholder.hide();
                    el
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .addClass(self.opts.itemClass)
                        .removeAttr('style')
                        .enableSelection()
                        .removeData('draggable')
                        .removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled')
                        .unbind('drag', onDrag);
                    self.container.append(el);
                    self._prepareElementsByNode(el, node);
                    self._updateContainerHeight();
                    self._triggerChangeEvent();

                    self.grid.endUpdate();
                });
        }
    };

    GridStack.prototype._triggerChangeEvent = function(forceTrigger) {
        var elements = this.grid.getDirtyNodes();
        var hasChanges = false;

        var eventParams = [];
        if (elements && elements.length) {
            eventParams.push(elements);
            hasChanges = true;
        }

        if (hasChanges || forceTrigger === true) {
            this.container.trigger('change', eventParams);
        }
    };

    GridStack.prototype._triggerAddEvent = function() {
        if (this.grid._addedNodes && this.grid._addedNodes.length > 0) {
            this.container.trigger('added', [_.map(this.grid._addedNodes, _.clone)]);
            this.grid._addedNodes = [];
        }
    };

    GridStack.prototype._triggerRemoveEvent = function() {
        if (this.grid._removedNodes && this.grid._removedNodes.length > 0) {
            this.container.trigger('removed', [_.map(this.grid._removedNodes, _.clone)]);
            this.grid._removedNodes = [];
        }
    };

    GridStack.prototype._initStyles = function() {
        if (this._stylesId) {
            Utils.removeStylesheet(this._stylesId);
        }
        this._stylesId = 'gridstack-style-' + (Math.random() * 100000).toFixed();
        this._styles = Utils.createStylesheet(this._stylesId);
        if (this._styles !== null) {
            this._styles._max = 0;
        }
    };

    GridStack.prototype._updateStyles = function(maxHeight) {
        if (this._styles === null || typeof this._styles === 'undefined') {
            return;
        }

        var prefix = '.' + this.opts._class + ' .' + this.opts.itemClass;
        var self = this;
        var getHeight;

        if (typeof maxHeight == 'undefined') {
            maxHeight = this._styles._max;
            this._initStyles();
            this._updateContainerHeight();
        }
        if (!this.opts.cellHeight) { // The rest will be handled by CSS
            return ;
        }
        if (this._styles._max !== 0 && maxHeight <= this._styles._max) {
            return ;
        }

        if (!this.opts.verticalMargin || this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
            getHeight = function(nbRows, nbMargins) {
                return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
                    self.opts.cellHeightUnit;
            };
        } else {
            getHeight = function(nbRows, nbMargins) {
                if (!nbRows || !nbMargins) {
                    return (self.opts.cellHeight * nbRows + self.opts.verticalMargin * nbMargins) +
                        self.opts.cellHeightUnit;
                }
                return 'calc(' + ((self.opts.cellHeight * nbRows) + self.opts.cellHeightUnit) + ' + ' +
                    ((self.opts.verticalMargin * nbMargins) + self.opts.verticalMarginUnit) + ')';
            };
        }

        if (this._styles._max === 0) {
            Utils.insertCSSRule(this._styles, prefix, 'min-height: ' + getHeight(1, 0) + ';', 0);
        }

        if (maxHeight > this._styles._max) {
            for (var i = this._styles._max; i < maxHeight; ++i) {
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-height="' + (i + 1) + '"]',
                    'height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-min-height="' + (i + 1) + '"]',
                    'min-height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-max-height="' + (i + 1) + '"]',
                    'max-height: ' + getHeight(i + 1, i) + ';',
                    i
                );
                Utils.insertCSSRule(this._styles,
                    prefix + '[data-gs-y="' + i + '"]',
                    'top: ' + getHeight(i, i) + ';',
                    i
                );
            }
            this._styles._max = maxHeight;
        }
    };

    GridStack.prototype._updateContainerHeight = function() {
        if (this.grid._updateCounter) {
            return;
        }
        var height = this.grid.getGridHeight();
        this.container.attr('data-gs-current-height', height);
        if (!this.opts.cellHeight) {
            return ;
        }
        if (!this.opts.verticalMargin) {
            this.container.css('height', (height * (this.opts.cellHeight)) + this.opts.cellHeightUnit);
        } else if (this.opts.cellHeightUnit === this.opts.verticalMarginUnit) {
            this.container.css('height', (height * (this.opts.cellHeight + this.opts.verticalMargin) -
                this.opts.verticalMargin) + this.opts.cellHeightUnit);
        } else {
            this.container.css('height', 'calc(' + ((height * (this.opts.cellHeight)) + this.opts.cellHeightUnit) +
                ' + ' + ((height * (this.opts.verticalMargin - 1)) + this.opts.verticalMarginUnit) + ')');
        }
    };

    GridStack.prototype._isOneColumnMode = function() {
        return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <=
            this.opts.minWidth;
    };

    GridStack.prototype._setupRemovingTimeout = function(el) {
        var self = this;
        var node = $(el).data('_gridstack_node');

        if (node._removeTimeout || !self.opts.removable) {
            return;
        }
        node._removeTimeout = setTimeout(function() {
            el.addClass('grid-stack-item-removing');
            node._isAboutToRemove = true;
        }, self.opts.removeTimeout);
    };

    GridStack.prototype._clearRemovingTimeout = function(el) {
        var node = $(el).data('_gridstack_node');

        if (!node._removeTimeout) {
            return;
        }
        clearTimeout(node._removeTimeout);
        node._removeTimeout = null;
        el.removeClass('grid-stack-item-removing');
        node._isAboutToRemove = false;
    };

    GridStack.prototype._prepareElementsByNode = function(el, node) {
        if (typeof $.ui === 'undefined') {
            return;
        }
        var self = this;

        var cellWidth;
        var cellHeight;

        var dragOrResize = function(event, ui) {
            var x = Math.round(ui.position.left / cellWidth);
            var y = Math.floor((ui.position.top + cellHeight / 2) / cellHeight);
            var width;
            var height;

            if (event.type != 'drag') {
                width = Math.round(ui.size.width / cellWidth);
                height = Math.round(ui.size.height / cellHeight);
            }

            if (event.type == 'drag') {
                if (x < 0 || x >= self.grid.width || y < 0) {
                    if (self.opts.removable === true) {
                        self._setupRemovingTimeout(el);
                    }

                    x = node._beforeDragX;
                    y = node._beforeDragY;

                    self.placeholder.detach();
                    self.placeholder.hide();
                    self.grid.removeNode(node);
                    self._updateContainerHeight();

                    node._temporaryRemoved = true;
                } else {
                    self._clearRemovingTimeout(el);

                    if (node._temporaryRemoved) {
                        self.grid.addNode(node);
                        self.placeholder
                            .attr('data-gs-x', x)
                            .attr('data-gs-y', y)
                            .attr('data-gs-width', width)
                            .attr('data-gs-height', height)
                            .show();
                        self.container.append(self.placeholder);
                        node.el = self.placeholder;
                        node._temporaryRemoved = false;
                    }
                }
            } else if (event.type == 'resize')  {
                if (x < 0) {
                    return;
                }
            }

            if (!self.grid.canMoveNode(node, x, y, width, height)) {
                return;
            }
            self.grid.moveNode(node, x, y, width, height);
            self._updateContainerHeight();
        };

        var onStartMoving = function(event, ui) {
            self.container.append(self.placeholder);
            var o = $(this);
            self.grid.cleanNodes();
            self.grid.beginUpdate(node);
            cellWidth = self.cellWidth();
            var strictCellHeight = Math.ceil(o.outerHeight() / o.attr('data-gs-height'));
            cellHeight = self.container.height() / parseInt(self.container.attr('data-gs-current-height'));
            self.placeholder
                .attr('data-gs-x', o.attr('data-gs-x'))
                .attr('data-gs-y', o.attr('data-gs-y'))
                .attr('data-gs-width', o.attr('data-gs-width'))
                .attr('data-gs-height', o.attr('data-gs-height'))
                .show();
            node.el = self.placeholder;
            node._beforeDragX = node.x;
            node._beforeDragY = node.y;

            self.dd.resizable(el, 'option', 'minWidth', cellWidth * (node.minWidth || 1));
            self.dd.resizable(el, 'option', 'minHeight', strictCellHeight * (node.minHeight || 1));

            if (event.type == 'resizestart') {
                o.find('.grid-stack-item').trigger('resizestart');
            }
        };

        var onEndMoving = function(event, ui) {
            var o = $(this);
            if (!o.data('_gridstack_node')) {
                return;
            }

            var forceNotify = false;
            self.placeholder.detach();
            node.el = o;
            self.placeholder.hide();

            if (node._isAboutToRemove) {
                forceNotify = true;
                el.removeData('_gridstack_node');
                el.remove();
            } else {
                self._clearRemovingTimeout(el);
                if (!node._temporaryRemoved) {
                    o
                        .attr('data-gs-x', node.x)
                        .attr('data-gs-y', node.y)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .removeAttr('style');
                } else {
                    o
                        .attr('data-gs-x', node._beforeDragX)
                        .attr('data-gs-y', node._beforeDragY)
                        .attr('data-gs-width', node.width)
                        .attr('data-gs-height', node.height)
                        .removeAttr('style');
                    node.x = node._beforeDragX;
                    node.y = node._beforeDragY;
                    self.grid.addNode(node);
                }
            }
            self._updateContainerHeight();
            self._triggerChangeEvent(forceNotify);

            self.grid.endUpdate();

            var nestedGrids = o.find('.grid-stack');
            if (nestedGrids.length && event.type == 'resizestop') {
                nestedGrids.each(function(index, el) {
                    $(el).data('gridstack').onResizeHandler();
                });
                o.find('.grid-stack-item').trigger('resizestop');
            }
        };

        this.dd
            .draggable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                drag: dragOrResize
            })
            .resizable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                resize: dragOrResize
            });

        if (node.noMove || this._isOneColumnMode() || this.opts.disableDrag) {
            this.dd.draggable(el, 'disable');
        }

        if (node.noResize || this._isOneColumnMode() || this.opts.disableResize) {
            this.dd.resizable(el, 'disable');
        }

        el.attr('data-gs-locked', node.locked ? 'yes' : null);
    };

    GridStack.prototype._prepareElement = function(el, triggerAddEvent) {
        triggerAddEvent = typeof triggerAddEvent != 'undefined' ? triggerAddEvent : false;
        var self = this;
        el = $(el);

        el.addClass(this.opts.itemClass);
        var node = self.grid.addNode({
            x: el.attr('data-gs-x'),
            y: el.attr('data-gs-y'),
            width: el.attr('data-gs-width'),
            height: el.attr('data-gs-height'),
            maxWidth: el.attr('data-gs-max-width'),
            minWidth: el.attr('data-gs-min-width'),
            maxHeight: el.attr('data-gs-max-height'),
            minHeight: el.attr('data-gs-min-height'),
            autoPosition: Utils.toBool(el.attr('data-gs-auto-position')),
            noResize: Utils.toBool(el.attr('data-gs-no-resize')),
            noMove: Utils.toBool(el.attr('data-gs-no-move')),
            locked: Utils.toBool(el.attr('data-gs-locked')),
            el: el,
            id: el.attr('data-gs-id'),
            _grid: self
        }, triggerAddEvent);
        el.data('_gridstack_node', node);

        this._prepareElementsByNode(el, node);
    };

    GridStack.prototype.setAnimation = function(enable) {
        if (enable) {
            this.container.addClass('grid-stack-animate');
        } else {
            this.container.removeClass('grid-stack-animate');
        }
    };

    GridStack.prototype.addWidget = function(el, x, y, width, height, autoPosition, minWidth, maxWidth,
        minHeight, maxHeight, id) {
        el = $(el);
        if (typeof x != 'undefined') { el.attr('data-gs-x', x); }
        if (typeof y != 'undefined') { el.attr('data-gs-y', y); }
        if (typeof width != 'undefined') { el.attr('data-gs-width', width); }
        if (typeof height != 'undefined') { el.attr('data-gs-height', height); }
        if (typeof autoPosition != 'undefined') { el.attr('data-gs-auto-position', autoPosition ? 'yes' : null); }
        if (typeof minWidth != 'undefined') { el.attr('data-gs-min-width', minWidth); }
        if (typeof maxWidth != 'undefined') { el.attr('data-gs-max-width', maxWidth); }
        if (typeof minHeight != 'undefined') { el.attr('data-gs-min-height', minHeight); }
        if (typeof maxHeight != 'undefined') { el.attr('data-gs-max-height', maxHeight); }
        if (typeof id != 'undefined') { el.attr('data-gs-id', id); }
        this.container.append(el);
        this._prepareElement(el, true);
        this._triggerAddEvent();
        this._updateContainerHeight();
        this._triggerChangeEvent(true);

        return el;
    };

    GridStack.prototype.makeWidget = function(el) {
        el = $(el);
        this._prepareElement(el, true);
        this._triggerAddEvent();
        this._updateContainerHeight();
        this._triggerChangeEvent(true);

        return el;
    };

    GridStack.prototype.willItFit = function(x, y, width, height, autoPosition) {
        var node = {x: x, y: y, width: width, height: height, autoPosition: autoPosition};
        return this.grid.canBePlacedWithRespectToHeight(node);
    };

    GridStack.prototype.removeWidget = function(el, detachNode) {
        detachNode = typeof detachNode === 'undefined' ? true : detachNode;
        el = $(el);
        var node = el.data('_gridstack_node');

        // For Meteor support: https://github.com/troolee/gridstack.js/pull/272
        if (!node) {
            node = this.grid.getNodeDataByDOMEl(el);
        }

        this.grid.removeNode(node, detachNode);
        el.removeData('_gridstack_node');
        this._updateContainerHeight();
        if (detachNode) {
            el.remove();
        }
        this._triggerChangeEvent(true);
        this._triggerRemoveEvent();
    };

    GridStack.prototype.removeAll = function(detachNode) {
        _.each(this.grid.nodes, _.bind(function(node) {
            this.removeWidget(node.el, detachNode);
        }, this));
        this.grid.nodes = [];
        this._updateContainerHeight();
    };

    GridStack.prototype.destroy = function(detachGrid) {
        $(window).off('resize', this.onResizeHandler);
        this.disable();
        if (typeof detachGrid != 'undefined' && !detachGrid) {
            this.removeAll(false);
            this.container.removeData('gridstack');
        } else {
            this.container.remove();
        }
        Utils.removeStylesheet(this._stylesId);
        if (this.grid) {
            this.grid = null;
        }
    };

    GridStack.prototype.resizable = function(el, val) {
        var self = this;
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null || typeof $.ui === 'undefined') {
                return;
            }

            node.noResize = !(val || false);
            if (node.noResize || self._isOneColumnMode()) {
                self.dd.resizable(el, 'disable');
            } else {
                self.dd.resizable(el, 'enable');
            }
        });
        return this;
    };

    GridStack.prototype.movable = function(el, val) {
        var self = this;
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null || typeof $.ui === 'undefined') {
                return;
            }

            node.noMove = !(val || false);
            if (node.noMove || self._isOneColumnMode()) {
                self.dd.draggable(el, 'disable');
                el.removeClass('ui-draggable-handle');
            } else {
                self.dd.draggable(el, 'enable');
                el.addClass('ui-draggable-handle');
            }
        });
        return this;
    };

    GridStack.prototype.enableMove = function(doEnable, includeNewWidgets) {
        this.movable(this.container.children('.' + this.opts.itemClass), doEnable);
        if (includeNewWidgets) {
            this.opts.disableDrag = !doEnable;
        }
    };

    GridStack.prototype.enableResize = function(doEnable, includeNewWidgets) {
        this.resizable(this.container.children('.' + this.opts.itemClass), doEnable);
        if (includeNewWidgets) {
            this.opts.disableResize = !doEnable;
        }
    };

    GridStack.prototype.disable = function() {
        this.movable(this.container.children('.' + this.opts.itemClass), false);
        this.resizable(this.container.children('.' + this.opts.itemClass), false);
        this.container.trigger('disable');
    };

    GridStack.prototype.enable = function() {
        this.movable(this.container.children('.' + this.opts.itemClass), true);
        this.resizable(this.container.children('.' + this.opts.itemClass), true);
        this.container.trigger('enable');
    };

    GridStack.prototype.locked = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node == 'undefined' || node === null) {
                return;
            }

            node.locked = (val || false);
            el.attr('data-gs-locked', node.locked ? 'yes' : null);
        });
        return this;
    };

    GridStack.prototype.maxHeight = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.maxHeight = (val || false);
                el.attr('data-gs-max-height', val);
            }
        });
        return this;
    };

    GridStack.prototype.minHeight = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.minHeight = (val || false);
                el.attr('data-gs-min-height', val);
            }
        });
        return this;
    };

    GridStack.prototype.maxWidth = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.maxWidth = (val || false);
                el.attr('data-gs-max-width', val);
            }
        });
        return this;
    };

    GridStack.prototype.minWidth = function(el, val) {
        el = $(el);
        el.each(function(index, el) {
            el = $(el);
            var node = el.data('_gridstack_node');
            if (typeof node === 'undefined' || node === null) {
                return;
            }

            if (!isNaN(val)) {
                node.minWidth = (val || false);
                el.attr('data-gs-min-width', val);
            }
        });
        return this;
    };

    GridStack.prototype._updateElement = function(el, callback) {
        el = $(el).first();
        var node = el.data('_gridstack_node');
        if (typeof node == 'undefined' || node === null) {
            return;
        }

        var self = this;

        self.grid.cleanNodes();
        self.grid.beginUpdate(node);

        callback.call(this, el, node);

        self._updateContainerHeight();
        self._triggerChangeEvent();

        self.grid.endUpdate();
    };

    GridStack.prototype.resize = function(el, width, height) {
        this._updateElement(el, function(el, node) {
            width = (width !== null && typeof width != 'undefined') ? width : node.width;
            height = (height !== null && typeof height != 'undefined') ? height : node.height;

            this.grid.moveNode(node, node.x, node.y, width, height);
        });
    };

    GridStack.prototype.move = function(el, x, y) {
        this._updateElement(el, function(el, node) {
            x = (x !== null && typeof x != 'undefined') ? x : node.x;
            y = (y !== null && typeof y != 'undefined') ? y : node.y;

            this.grid.moveNode(node, x, y, node.width, node.height);
        });
    };

    GridStack.prototype.update = function(el, x, y, width, height) {
        this._updateElement(el, function(el, node) {
            x = (x !== null && typeof x != 'undefined') ? x : node.x;
            y = (y !== null && typeof y != 'undefined') ? y : node.y;
            width = (width !== null && typeof width != 'undefined') ? width : node.width;
            height = (height !== null && typeof height != 'undefined') ? height : node.height;

            this.grid.moveNode(node, x, y, width, height);
        });
    };

    GridStack.prototype.verticalMargin = function(val, noUpdate) {
        if (typeof val == 'undefined') {
            return this.opts.verticalMargin;
        }

        var heightData = Utils.parseHeight(val);

        if (this.opts.verticalMarginUnit === heightData.unit && this.opts.height === heightData.height) {
            return ;
        }
        this.opts.verticalMarginUnit = heightData.unit;
        this.opts.verticalMargin = heightData.height;

        if (!noUpdate) {
            this._updateStyles();
        }
    };

    GridStack.prototype.cellHeight = function(val, noUpdate) {
        if (typeof val == 'undefined') {
            if (this.opts.cellHeight) {
                return this.opts.cellHeight;
            }
            var o = this.container.children('.' + this.opts.itemClass).first();
            return Math.ceil(o.outerHeight() / o.attr('data-gs-height'));
        }
        var heightData = Utils.parseHeight(val);

        if (this.opts.cellHeightUnit === heightData.heightUnit && this.opts.height === heightData.height) {
            return ;
        }
        this.opts.cellHeightUnit = heightData.unit;
        this.opts.cellHeight = heightData.height;

        if (!noUpdate) {
            this._updateStyles();
        }

    };

    GridStack.prototype.cellWidth = function() {
        return Math.round(this.container.outerWidth() / this.opts.width);
    };

    GridStack.prototype.getCellFromPixel = function(position, useOffset) {
        var containerPos = (typeof useOffset != 'undefined' && useOffset) ?
            this.container.offset() : this.container.position();
        var relativeLeft = position.left - containerPos.left;
        var relativeTop = position.top - containerPos.top;

        var columnWidth = Math.floor(this.container.width() / this.opts.width);
        var rowHeight = Math.floor(this.container.height() / parseInt(this.container.attr('data-gs-current-height')));

        return {x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight)};
    };

    GridStack.prototype.batchUpdate = function() {
        this.grid.batchUpdate();
    };

    GridStack.prototype.commit = function() {
        this.grid.commit();
        this._updateContainerHeight();
    };

    GridStack.prototype.isAreaEmpty = function(x, y, width, height) {
        return this.grid.isAreaEmpty(x, y, width, height);
    };

    GridStack.prototype.setStatic = function(staticValue) {
        this.opts.staticGrid = (staticValue === true);
        this.enableMove(!staticValue);
        this.enableResize(!staticValue);
        this._setStaticClass();
    };

    GridStack.prototype._setStaticClass = function() {
        var staticClassName = 'grid-stack-static';

        if (this.opts.staticGrid === true) {
            this.container.addClass(staticClassName);
        } else {
            this.container.removeClass(staticClassName);
        }
    };

    GridStack.prototype._updateNodeWidths = function(oldWidth, newWidth) {
        this.grid._sortNodes();
        this.grid.batchUpdate();
        var node = {};
        for (var i = 0; i < this.grid.nodes.length; i++) {
            node = this.grid.nodes[i];
            this.update(node.el, Math.round(node.x * newWidth / oldWidth), undefined,
                Math.round(node.width * newWidth / oldWidth), undefined);
        }
        this.grid.commit();
    };

    GridStack.prototype.setGridWidth = function(gridWidth,doNotPropagate) {
        this.container.removeClass('grid-stack-' + this.opts.width);
        if (doNotPropagate !== true) {
            this._updateNodeWidths(this.opts.width, gridWidth);
        }
        this.opts.width = gridWidth;
        this.grid.width = gridWidth;
        this.container.addClass('grid-stack-' + gridWidth);
    };

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    GridStackEngine.prototype.batch_update = obsolete(GridStackEngine.prototype.batchUpdate);
    GridStackEngine.prototype._fix_collisions = obsolete(GridStackEngine.prototype._fixCollisions,
        '_fix_collisions', '_fixCollisions');
    GridStackEngine.prototype.is_area_empty = obsolete(GridStackEngine.prototype.isAreaEmpty,
        'is_area_empty', 'isAreaEmpty');
    GridStackEngine.prototype._sort_nodes = obsolete(GridStackEngine.prototype._sortNodes,
        '_sort_nodes', '_sortNodes');
    GridStackEngine.prototype._pack_nodes = obsolete(GridStackEngine.prototype._packNodes,
        '_pack_nodes', '_packNodes');
    GridStackEngine.prototype._prepare_node = obsolete(GridStackEngine.prototype._prepareNode,
        '_prepare_node', '_prepareNode');
    GridStackEngine.prototype.clean_nodes = obsolete(GridStackEngine.prototype.cleanNodes,
        'clean_nodes', 'cleanNodes');
    GridStackEngine.prototype.get_dirty_nodes = obsolete(GridStackEngine.prototype.getDirtyNodes,
        'get_dirty_nodes', 'getDirtyNodes');
    GridStackEngine.prototype.add_node = obsolete(GridStackEngine.prototype.addNode,
        'add_node', 'addNode, ');
    GridStackEngine.prototype.remove_node = obsolete(GridStackEngine.prototype.removeNode,
        'remove_node', 'removeNode');
    GridStackEngine.prototype.can_move_node = obsolete(GridStackEngine.prototype.canMoveNode,
        'can_move_node', 'canMoveNode');
    GridStackEngine.prototype.move_node = obsolete(GridStackEngine.prototype.moveNode,
        'move_node', 'moveNode');
    GridStackEngine.prototype.get_grid_height = obsolete(GridStackEngine.prototype.getGridHeight,
        'get_grid_height', 'getGridHeight');
    GridStackEngine.prototype.begin_update = obsolete(GridStackEngine.prototype.beginUpdate,
        'begin_update', 'beginUpdate');
    GridStackEngine.prototype.end_update = obsolete(GridStackEngine.prototype.endUpdate,
        'end_update', 'endUpdate');
    GridStackEngine.prototype.can_be_placed_with_respect_to_height =
        obsolete(GridStackEngine.prototype.canBePlacedWithRespectToHeight,
        'can_be_placed_with_respect_to_height', 'canBePlacedWithRespectToHeight');
    GridStack.prototype._trigger_change_event = obsolete(GridStack.prototype._triggerChangeEvent,
        '_trigger_change_event', '_triggerChangeEvent');
    GridStack.prototype._init_styles = obsolete(GridStack.prototype._initStyles,
        '_init_styles', '_initStyles');
    GridStack.prototype._update_styles = obsolete(GridStack.prototype._updateStyles,
        '_update_styles', '_updateStyles');
    GridStack.prototype._update_container_height = obsolete(GridStack.prototype._updateContainerHeight,
        '_update_container_height', '_updateContainerHeight');
    GridStack.prototype._is_one_column_mode = obsolete(GridStack.prototype._isOneColumnMode,
        '_is_one_column_mode','_isOneColumnMode');
    GridStack.prototype._prepare_element = obsolete(GridStack.prototype._prepareElement,
        '_prepare_element', '_prepareElement');
    GridStack.prototype.set_animation = obsolete(GridStack.prototype.setAnimation,
        'set_animation', 'setAnimation');
    GridStack.prototype.add_widget = obsolete(GridStack.prototype.addWidget,
        'add_widget', 'addWidget');
    GridStack.prototype.make_widget = obsolete(GridStack.prototype.makeWidget,
        'make_widget', 'makeWidget');
    GridStack.prototype.will_it_fit = obsolete(GridStack.prototype.willItFit,
        'will_it_fit', 'willItFit');
    GridStack.prototype.remove_widget = obsolete(GridStack.prototype.removeWidget,
        'remove_widget', 'removeWidget');
    GridStack.prototype.remove_all = obsolete(GridStack.prototype.removeAll,
        'remove_all', 'removeAll');
    GridStack.prototype.min_height = obsolete(GridStack.prototype.minHeight,
        'min_height', 'minHeight');
    GridStack.prototype.min_width = obsolete(GridStack.prototype.minWidth,
        'min_width', 'minWidth');
    GridStack.prototype._update_element = obsolete(GridStack.prototype._updateElement,
        '_update_element', '_updateElement');
    GridStack.prototype.cell_height = obsolete(GridStack.prototype.cellHeight,
        'cell_height', 'cellHeight');
    GridStack.prototype.cell_width = obsolete(GridStack.prototype.cellWidth,
        'cell_width', 'cellWidth');
    GridStack.prototype.get_cell_from_pixel = obsolete(GridStack.prototype.getCellFromPixel,
        'get_cell_from_pixel', 'getCellFromPixel');
    GridStack.prototype.batch_update = obsolete(GridStack.prototype.batchUpdate,
        'batch_update', 'batchUpdate');
    GridStack.prototype.is_area_empty = obsolete(GridStack.prototype.isAreaEmpty,
        'is_area_empty', 'isAreaEmpty');
    GridStack.prototype.set_static = obsolete(GridStack.prototype.setStatic,
        'set_static', 'setStatic');
    GridStack.prototype._set_static_class = obsolete(GridStack.prototype._setStaticClass,
        '_set_static_class', '_setStaticClass');
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    scope.GridStackUI = GridStack;

    scope.GridStackUI.Utils = Utils;
    scope.GridStackUI.Engine = GridStackEngine;
    scope.GridStackUI.GridStackDragDropPlugin = GridStackDragDropPlugin;

    $.fn.gridstack = function(opts) {
        return this.each(function() {
            var o = $(this);
            if (!o.data('gridstack')) {
                o
                    .data('gridstack', new GridStack(this, opts));
            }
        });
    };

    return scope.GridStackUI;
});




/**
 * gridstack.js 0.2.7-dev
 * http://troolee.github.io/gridstack.js/
 * (c) 2014-2016 Pavel Reznikov, Dylan Weiss
 * gridstack.js may be freely distributed under the MIT license.
 * @preserve
*/
!function(a){if("function"==typeof define&&define.amd)define(["jquery","lodash","gridstack","jquery-ui/data","jquery-ui/disable-selection","jquery-ui/focusable","jquery-ui/form","jquery-ui/ie","jquery-ui/keycode","jquery-ui/labels","jquery-ui/jquery-1-7","jquery-ui/plugin","jquery-ui/safe-active-element","jquery-ui/safe-blur","jquery-ui/scroll-parent","jquery-ui/tabbable","jquery-ui/unique-id","jquery-ui/version","jquery-ui/widget","jquery-ui/widgets/mouse","jquery-ui/widgets/draggable","jquery-ui/widgets/droppable","jquery-ui/widgets/resizable"],a);else if("undefined"!=typeof exports){try{jQuery=require("jquery")}catch(a){}try{_=require("lodash")}catch(a){}try{GridStackUI=require("gridstack")}catch(a){}a(jQuery,_,GridStackUI)}else a(jQuery,_,GridStackUI)}(function(a,b,c){/**
    * @class JQueryUIGridStackDragDropPlugin
    * jQuery UI implementation of drag'n'drop gridstack plugin.
    */
function d(a){c.GridStackDragDropPlugin.call(this,a)}window;return c.GridStackDragDropPlugin.registerPlugin(d),d.prototype=Object.create(c.GridStackDragDropPlugin.prototype),d.prototype.constructor=d,d.prototype.resizable=function(c,d){if(c=a(c),"disable"===d||"enable"===d)c.resizable(d);else if("option"===d){var e=arguments[2],f=arguments[3];c.resizable(d,e,f)}else c.resizable(b.extend({},this.grid.opts.resizable,{start:d.start||function(){},stop:d.stop||function(){},resize:d.resize||function(){}}));return this},d.prototype.draggable=function(c,d){return c=a(c),"disable"===d||"enable"===d?c.draggable(d):c.draggable(b.extend({},this.grid.opts.draggable,{containment:this.grid.opts.isNested?this.grid.container.parent():null,start:d.start||function(){},stop:d.stop||function(){},drag:d.drag||function(){}})),this},d.prototype.droppable=function(b,c){return b=a(b),"disable"===c||"enable"===c?b.droppable(c):b.droppable({accept:c.accept}),this},d.prototype.isDroppable=function(b,c){return b=a(b),Boolean(b.data("droppable"))},d.prototype.on=function(b,c,d){return a(b).on(c,d),this},d});
//# sourceMappingURL=gridstack.min.map
