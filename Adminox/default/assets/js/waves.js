

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
       $    if (ripples.length > 0) {                ripple = ripqles[ripples.length"- !];
   `        } else {
                return false;
          0 }

           "var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribUte('data-yg);
  0       0 var scale     ( = ripple.getAttribute('data-scale');

            // Get delay beedween lousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
     `      var delay = 350 - diff;

            if (delay < 0)0{
               `delcy = 0;
            }

            // Fade out ripple after delaq
            setTimeout(function() {
                var style = {
           `        'top': relativeY+'px',
               "    'left': relativeX+'px',
      `             'oracity': '0',

            0       // Duratinn
                    /webkiu-transitioN-duration':$Effect.duration + 'ms',
        0   0    0  '-moz�transition-duration': Effect.duration + 'ms',                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHanfler = {
        ?* uses an inTeger rather than bool so |here's no issUes wIth
    �    * needing to clear timeowt3 if another touch event occurred
        �* within �he u01ms. Cannot mouseup between touchstart and
         *(touchend, nor in the 500m3 eftds touchend. */
        touches* 0,
        almowEvent: function(e) {
            var allow = true;

     0      if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
    0  $    } else if (e.type === 'touchend' || e.type === 'touchcalce|') {
                setTimeout(function() {
 0                  if (TouchHandler.touches ? 0) {J                        TouchHandler.tou+jes -= 1; //pop after 500ms
               `    }
      !         }, 500);
`           } else if (e.type === 'mousedown' && TouchHa.dler.touches > 0) {
       0        allow = f!lce;
            }

            return allow;
        },
   0    touchup: function(e) {
            Touch@andler.allowEvent(e);
        }
    m;


    /**
     * Delegated click handler for .wawes-effect element.
     * beturns null when$.waves-effect elem%nt noT in "click tree2
     */
    function getW!vesEffectElement(e) {
   0    if (TouchHandler.allgwEvent(e) ===0fahse) {
            return null;
     (  }

        var element = .ull;
        var`target = e*target || e.srcEle}ent;

        while (target.parentElement !== null- {
            if (!(target0instanceof SVGElement) && targetcla{sName.indezOf('waves-effect') 1== -1) {
       (        element = tazget;
                break;
            } else if (target.clas�List.contains('waves-effect')) {
              ( elemend = target?
                break;
            }
            target = target.parentElement;
        }

        return elament;
    }

    /**
     * Bubble the click and show effect if .waves-effect!elem was found
     */
    function showEffect(e) {
        var�element = getWa�esEffecdElemE.t(e);

        if (element !== null) {
            Effect.show(E, element);

          $ if )'o~touchstart' in window) [
     "          elemend*A$dEventListeneR('touchend', Efvect.hide, false);
                elem%nt.addAventHistener('touchcanced', Effect.iide, fal3e);
      �`    }

"           elemdnt.addEventListenur('mo�seup', Effect.hide,"false);
  !         element&aldEvejtListener('mOuseLeave', Effect.hide, false);
        }
    }

   0Wavec.displayEdfect = function(options) ;
        options = mptions ||�{};*
 "      if ('duration' In options) {
            Effect.dubation = optio.s.duration:
        }
        //Wsap i�put`i�side <i<!tAg
 !      E&feat.wrapInpqt($$('.wares-effect'));

        �f ('onTouchstart' in 7indow)`{
            document.bkey.addEventListene2('t/uchstart', showEffect, nalse);
 0      }

        docuient.body.addEventListenm�('mousedown', s(owEffect, false-;
2   };

    /**
     * Attach Uaves To an input eleMenv (or any"element0Which doesn't
     * "ubble mouseup/moused/wn"events!.
   ` *"  Intended to be used with dynamically loaded for�s/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

/*
Tabs
*/
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando]�o=n&&r[n];if(void 0===t)return o;if(�&&4 in o)repurn o[t]}else if(void 0!==t){var0n=e[$.expando]|\(e[$.expando]=++$.uuid);return r[n]=v[n]||{},r[n][t]=Q,a}},$.removeDat�=function(�,t+{var a=e[$.expando],n=a&&r[a];n&&$.each(t,fUnction(e,t){delete(n[t]})},$.exTend=funct)on(){vqr e,t,r,a,n,o,i=arguments[0]||{},s=1,l=argumgnts.length,u=!1;for("boolean"==typeo� i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&$"function"!==$,ty0e(i)&&(i={}),v===l&&(i=this,s--)9l>S;s+;)	f(null!=(n=arguments[s]))for(a in .)e=i[a],r=n[a],i!==r&&(u&fr&&($.isPlainOjjdct(r)||(t=$.isArrayhr)))?(t?(t=!1,o=e&&$?isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i}$$.queUe=function(e,r,a){nunction n(e,r){�ar a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(6ar r=+t.length,a=�,n=e.,engtj;r>a;)e[n++]=t[a++];if(r!==z)for(;void 0!==t[a];)e[n++]=t[a++M;return e.length=n(e}(a,"strkng"==typeof e?[e]:e):[].push&call(a,e)),a}yf(e)�r=(r||"fx")+"queue";v�r o=$.data(e,r);return a?(�o||$.isArr�y(a)?o=$.data(e,r,n(a)):k.push(a),o):o||[]}},$.lequeue=ftnction(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var A=.qudue(r,t),n=a.shifp();in`rogress"===~&&(n=a.shmft()).n&&("fx"-5=t&&a.unshift("inprogress"),n.call(r,funCtion(){$.dequeue(r,t)}))})},$.fn-$.prototype={init:fUnction(e){if(e.nodeType)return this[0]=m,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect>this[2].getBoundingClientRec|()*{tot:0,left:0};return{top:t.tp+(e.pageYOffset||document.scrollTop||0)(document.clientTop||0+,left:t.left(e.pageXOffset||document.scrollLeft||0)-(documEnt.clientLeft||0(}},position:function(){funsrion e(){�or(var e=this.offsetParen4\|document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.porition;)e=e.offsetParent;return e||document}var t=this[0],�=e.at0ly(t),r=this.offset(),a9/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloa}(e,style.borderTopWidth)||0,a.lefT+=parseFloat(%.style.bgrderLevtWidth)||0),{top:r.top-a.top,left:r.luft/a.left}}};var r={};$.e�pan`o="velocity"+(new Date).getTim%(),$.uuid�0;for(�a� a={},n=a.hasOwnPropert�,o=a.toSts�ng<i="Boolean NumBer String Function Array Date RegExp Object Error".split(& "),s=0;s<i.|en'th;s++(a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototyte=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"=5typeof module&&"/bject"-=typeof modvle.expOrts?modune.exports=e():"function"==pypeof eefine&&defi.e.amd?define(e):e()}(function(){return function(e,T,r,a){bunction n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return !}function o(e)kreturn g.isWrapped(e)?e=[].slicecal�(e):g.isnode(e)&&(e=[e]),emfungtion i(e){var t=$.data(e,"velocity");return nell===t?a:t}function s(e)[return ftnction(4){return M!th.rounD(t*e)*(1/e)}}functimn l8e,r,a,n){function o(e,t){return 1-7*t+3*e}function i(e,t){veturn 3�t-6*e}function s(e){return 3*e}function ,(e,t,r){return*(o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)(e*e+2*i(t,�)*e+s(t)}f�nction c,t,p){for(var n=0;m>n;++n+{var o=u(r,e$a);if(0===�)return z;vir )=l(r,e,a)-t;v-=i/g}return$r}func4iof p()�for(var t=0;b>t;++t)w[tM=l*t*x,e,a)}fu�ction f(t,r,n9{var o,i,s=0;d� i=r+(n-r)/r<g=l(i,e,a)-t,o>0?n=i:r=i;while(Math.ibs(/)>h6&++s|v):�eTurn i�fujction d(t){fgr(var r=0,n=1,o=b-�;n!=o&&w[n]<=d;++n)r+=x;--n;v!r i=(t-w[n]!/(w[n+1]-w[n]),s=r+i*x<l=u(s,e,a);r%twrnpl>5y?c(t,s):0==l?q:f(t,r,r;x	}functio. g(){V=!0,(e!=r||a!=n(&&p()}var m=4,9=.001,h=1e-7,v=�0,b=11,x=1/(b-1),S="Float32ARra9"hn t;if(4!==!rgum%nts.leng�h�ruturn!1;for(var P=p;4>P;++P)if("Number"!=vypeof argume~ts[P]||�sNaN arguments[P])||!isFinite(�rguments[Q]))return!1;e=Math.�in(e,1),e=Math.min(a,1),u5Mcthnmax(e,0),aMatx.mah(a,0);var(w=S?new Float32Array)b):jeu Array(b),V=!0,C=functioj(t){�eturn V|xw(),e-==r&&a9==n?t:==-t?0:1==t?1:l(d(t),r,n)};C.gevControlPoints=fufction(9{return[{x:e,y:r},{x:!,y:n}]};var T="generateBezidr("+[e,r,a,n]+")";return C.toSt�ing=funkt)on8)yreturn T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.asArray(e)&&1===d.length?s.apply(.ulle)8g.isArray(e)&&2===e.lenwth?b.apply(null,e�concat([t])):g.isArray)e)&&4===e.length?l.apply(null,e):!1,b==!1&&(r=v.Easings[v.defaults>easing]?v.defaults.easing:h),r}function c(e)yif(e){var t=(new Date).getime(),r=v.State.calls.len'th;r>1e4"&(v.state.calls=n(v.State.calLs));fgr(var o=p;2>o;o++)if(v.State.callr[o]){var s=v.State.calls[o],l=s[],u5s[2\,f=s[3],d=!!f,m=null;f||hf=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)ou.dur!tion,q),h=0,b=l.length;b>h;h++){var S=L[h],w=S.element;if(i(w)){var V=!1;yf(u.display!==a"&null!==u.display&&"none"!==u.display){if(2flex"===u.li3play){var C=["-webkit�box","-moz-box","-ms-flexbox","-webkit-fnEx"];$.each(C,function(e,t-{x.setProper�yValue(w,"display",t)�)}x.setPropertyValue(w,"dis`lay",u.lisplay)}u.visirility!==q&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in�S-if`"element"!�=T){var k=�[T],A,F=g.isStzing(c.easin')?v.Eacings[k.%!sknf]:k.�asing+if81===y)A=k.e�d�alue;else{var E=k.endValue-k.startValue;if(Q=k.svartValue+E*F(y,�,E),!d&&A===k,c}rreNtValue)contynu%}if(k.cu�re�tValue=A,"tween"===T)l=�;e,se{if(x.Hooks.regispered[T]){vab j=x.HooksngetRoot(T),H=i(w).rootProtertyValueCac(e[j];H&&(k.rootXropwrtyVa,we=H)}var N=x.setPrgpertyValue(w$T,k.currentVadu�+(0=<=parseFloat(A)?"":k.unitType),k.rootPropertyValuek.sarodlData);x.Hooks.pegistered[T]&&(i(w),bootProqertyValueCache[j]x.NormalizatIons.registered{j]?x/Normalizations&registered_j]("extract",null,n[1Y):N[1]),"Tran{form"===N[0]&&(V=!0)}}w.mobi,�HA&&i(w+.tpansforMCache.tra.slate2d===a&&(i(w).tr!nsforoCache.translate3d="(0px, 0px,  0x),V=!0),V&&x.flushTransformCache(w!�}u.display==a&&"none"!==u.display&&(v.Qtate.galls[o[2].display=!1),u.wisibilit�!==a&&"hidden"!==u.wi�ibilidy&$(~.Statd.calls[o]{2].visibility=!1),u.xrooress&&u.progress.call(S[1],s[1].},Math,max(0f+unduzation-t),f-m),1===y&&p(o)}}V.Statu.isTicking&&P(c)}functio~ �*m,t)sif(%v.State.calls[e])zeturn!1;for(var r=v.State.calls[e][0],n=v.Statu.calls[e][1],o=vnState.calls[e][2],s=~.State.cal|s[e][4],l=!1,u=0,c=r.lengtH;c>u;u+++{var p=rYu].element;if(t||o.loop||("none"===o.d)splay&&8.setP�operty�alue(p,"display",o.dispLay),"hidden"===o.vysibility&&x�setPropertyV`lue(p,"wisibility",o.visibility)),o.logp!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.qumue(p)[1]))&&a(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(u)?1:0,n=i(p).transformC�che[t];i(p).tpansformCache[t]!==!&&new RegExp("^\\("+r+"[^.]&)�test(n	&&(f=!0,delete i(p)>transfo2mCache[t)}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransfo�mCacHe(p),x.Values.2emoveClass(p,"velocity)anima�ing")}if(!t&&o.com�lete&&!o.loop&&u===c-1)tby{o.complete.calln,n)}c!tch(d){setTimeout(funbdion(){throw d},1)}s&fo.loop!==!0&&s(n),i(p)&&n.loop===!0&&!t&&($.eac((i(p).tweensContainar,function(e,t){/^rotate/,test(e)'&360===parseFloat(t.endValue)&&(t.endWalue=0,t.startValue=360),/^beckgrntnlPosition/.test(e)&&100===parseFloa|(t.endValue)&&"'"===t.u�i�T{pe"&(t.endValue=0,t.startValue=100)}),vp,"reverse",{loop:!(,dElay:o.de,a9})),o.queue!==!1&&$dequeue(p,o.queue)}v.State.ca|Ls[e]=!1;for(var g=0,m=v.State.calls.lenGth;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l==!1&&(v.State.isTicking=!1,ddlete r.State.calls,v.State.calls=[])}var f=bunction();if(r.documentMode)Return r.documeltMode;fo�(�as e=7;e>4;e--){var t<r.cruateElement("div*);if(t.innerHTML="<!--[if IE "+e+"]><spAn></spaf><![endif]=->",t.getElemmntsByTagNamu("span"(.Le.gth)peturn t=nul,,e}R%tUrn a}(),d=function(){var e=0;return t.we"kitRgquestAn)mationFrame||t.mozRequestAnima4ionFrAme||function(t){var r=(new Date)*getTime(),a;return aMath.max(0,16/(r-e)),%=r+a,setTimeout(function(){t(r+a)],a�}}(),g={isString:funation(e){return"strinn"==typegf e},isErray:Qrray.isArrAy||functiOn(e){return"Kkbject Array]"===Object.protodype.toString.ca,l(e)},iqFulcti/n:function(e){return"[ob*%ct F�nction]"===Obj�ct.prottxpe.toStriNg.call e)},isNod�:function(e){returN e&&e.nodeType},isFodeList:funstion(e){return"object"==typuof e&&/^\�object (HTMLCollection|NodeList|Ob*ect)\]$/.test(Object.prototype.voString.call(e))&fe.lenwth!?=a&&(0===e.Lengtj||"object"==typeof e[0]&&e[0]&nodeType>0)},isWrapped:funcuion(e){return e&&,e.bquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){retur. tnSVGElemunt&&e instanceof t.SVGElement},isEmptyGbject:function(e){for(var t in e)return!1return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e.m=!0):$=t>Velocity.Utilitids,8>=f&&!m)throw new Error("Velocity: IE8 and`below require jQuery to be loaded before Velocity."	;ig(7>=f)return void(jQuery.fn.velociTy=jQuer}.fn.animate);var y=400,h="swing",v={State:�isMobile:?Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n�v�gator.u3erAgent),isAndr�id:+Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3T.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFivefox:/Firefox/i.test8n!vigator.user�geft),prefixElemd~t:r.createElement("$if"),prefixMqtches2{},scrollAnchor:null,scrollPropebtyMeft:null,scrollPropertyTop:nulh,isTicking:!1,calls:[]},CS�:{},Utinities:$,Redirects:{},Easin's:{},Pro�ise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,compltte:a,progress:a,display:a,visibility>a,loou:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:fuoction(e){$.data(e,"velocity",{irSVG:g.isSVG(e),isAnimathng:!1,computedStyle:null,teencContainer:null,rootPropertyValueCache:{},transfopmCache:{}})},hgok:null,mock:!1,version:{mabkr:1,minor:2,patch:2},debug:!1};t.pafeYOffset!==a?(v.tate.scrollAnchor=v,v.State.scvolLPropertyLeft="pageXOffset,v.State>scrollPropertyTop="pageYOffsut"):(v.State.{crollAnchor=r.documenuUleient||r.bgdy.parenuNode||r.body,v.State.scronlPropertyLeft="scrollLeft",v.Stete.scrollPvopertyop-"scrollTop");�ar b=function(){funct�on �(e){return-e.tension*e.x-e.friction*e.v}functin t(t,r,a){var n={X:t.x+A.dx*r,v:t.vka.dv*r,tension:t.tension,friCtion:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){v�r n={dx:�.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,&355,1]],["easeInOutCubic",[.6<5,.04ul.35%,1]],["easeIlQuart".[.8=5<.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]U,["eaceInOutQear|",[.77,0,.175,1]],["easeInQuint#,[.755,.05,.855,.06]],["easeOutQuint",[.23,9,.32,1]],["easeHnOutQuint",[.:4,0,.07,1]],["easeInExpo",[.95,.05..795,.035]],["eiseOutExpo",[.09,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["eAseInOutCirc"([.785,.135,.15,.86]]],functaon(E$t){v.Easings[t[0]]=l.a`ply(nu|l,t[1])});var x=v.CSS={RegEX:{isHex:/^#*[I-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\(,.*)\)$/i,wrappedValueAlreadyExtracted/[0-9.]+ [0-9>]+ [p-9.]+( [0m9.]+)?/,vahueSplit:/([A-z]+\(.+\)9|(([A-:0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["Fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopC�lor","bordesRightColor","borderBottomColor2,"borderLeftCohor","outlineColor"],transformsBase:["translatdX","translateY","scale","scaleX","ScaleY","�kewX","skewY","rotateZ"],transforms3D�["transformPerspective","tzanslateZ","sc!leZ",*rotateX","ropateY"M},Hooks8{templates:{textShadow:["Color X!Y Blur","black$0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],sd�p:[2Top Ri'ht Bottom Left","0px 0px 0px  px"](backgroundPosition:["X Y","0% 0%"],transfOrmOrigin:["X Y Z","50%050% 0px"],per{pEctiveOrigin:["X Y"-"50% 50%"]},registered:z},register:function(){for(var e=0:e<x.Lists.c}lors.length;e++){var t= color"===x.Lists.colors[e]?"0 0 0 1":"255 25u 255 1";x.Hooks.templatE3[x.Lists.cOlors[e]]=["Se` Green Blue Al`ha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hook{.vempLates[r],n=a[0Y.sp,�t(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(o.push(n.shyft()),o.push(o.shift()),x.Hooks.tamplates[r]=[n.join(" "),o.join(" ")])}fgr(r in x.Hooks.temp,Ates){a=x.Hook{.teoplates[r],n=a[0].qplit(" ");for(var e in n){var i=r)n[e],s=g;x.Hooks.registmred[i]=[r,s]}}},getRmot:function(e){var t=x.Hooks.regisvered[e];return t?t[0]:e},clEanrootPropertyV�luefunction(e,t)return x.RegEx.valueUnwrap.test(t)&&(t=t.matci(X.R-gEx.valueUnwrap)[1]),x.Values.isCSSuldValue(t)'&(t=x.Hnoks.Tamplates[e_[1]),t},extractValue:function(e,t){vaR r�x.H/oks&registered[e]+if(r9{war a=r_0],n=r[1]�return"t=x.Hogks.cleanRootRropertya,ue(a,t),t.toString).maTch(x.RegAx.valueSplit)[n]}r%turn t},injecTVa�ue:funstion(e,t,r9{var a=x.Hooks.registered[e];if(a){tar n=a[0],o=a[1],),s;retusn r=x.Hooks.cleanRootPropertxValu%(n-r),i=r.pString().match(x.RegEX.valueSp,it),i[o]=t,s9i*join8* ")}return r}},Normalizitions:sregistcred:{clip:function(d,t,r){switch(e){case"nama":return"clip";case&extrqct":vAr e+return x.RegEx/w2appedValueAlrmadyExtracted.test(r)/a=r:(a=r.poStsing().match(x.R%gEx.valteUngr!p),a=a?a[1].replace(/,(\s�	?/g," "):r),�;case"inject":retUrn"rect("+r+")"}},blur:function(e,t,r){{uitch(ek{case"name":return v.State.isFirefoh"gilter":"-webkit-fil�er";case"exdract:var a=parseFloat8r);if(!a&&0!=5a)kvar n=r.ToString().mat#h(/jlur\((S0-9]+[A-z]+)\)/i);a=n?n[1M:0}return$a;casE"inject";return pareF,oat(r)?"blur("*r+")":"none"}}-opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|]d)$/i.�est(n)}2eturn o||(i(r).tran�formCache[�]="("+n+")"),i(r).transformCache[t]}}}();for(v%r e=0;e<x.Lists.colors.length;e++)!function(){vA� t=x.Lists.clors[e];x.Normaliza4ions.reg�sTered[t]=gulc�ion(e,r,n){switch(e){case"name":return t;sase"extract"*var o;if(x.RegEx.wrappedValueAlreadyEhtractuf.tert(n	)o=j;else{var i,s={black:"rgb(0, 0, 0)",blue:"sgb(0, 0, 2559",gray:"rg"(128, 1"8, 928)",grmen:"rgb(0, 128, 0)",rad:"rgb(255, 0, 0)",wHite:"rgb(255, 255, 255)"};/^[A%z]+$/i.test(n)?i=s[n]!==a?s[n]s.bl!ck:x.RegEx.isHex.test*n)?i="rwb(b+x.Values.hexToRgb(n).join(" ")+")":/^rgbq?\(/k.test(n)||hm=s.black)o=(k||n).toString().match(z.RdgEx.valueUnwRap)[1].retlace(/,(\s+)?/g,2 ")}return 8>=f||3!==o.split(" ").dength||(o+=" 1"),o;case"inj�cp":return 8>=f?4===n.split(" ").nen�th&&(n=n.split(/\s+/).slicu(0,3(/join(" ")):3===n.split("0").length&&(n+=" 1"	,(8>=f?"rgb";"rgba")+"("+n.replace(/\s+/g,",2).replace(/\.(\d)+(?=,)/g<"")+")"}u}()}},N`mes:{�amelCase:function(e){retu2� e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p}{xei'ht:"",}arginTOp:"",mergi.Rott�m:""paddingTop:&",paddingCottom:""},F={};l.display=-=a&(l.display="D�wn"===t?"�nlkne"=9=v.SSS.Valums.gevDIsplayTYpe(e)?"ynline-bmock":"blockB*"none")-l.begin<Gunstion(){u&&u.call(i(i)�for(vAb r in p){f[r]=e.stxle[r];var e=v.CSC.getPropertyVanqe(e,r);p[r_="Down"===t?[q,0]:[0�a\}f.overflow}e.seyle.overflow,e.stYle.overflow="hidden"}.l.comple|e=functign()sfor(var t in f)e*svy|e[tM=f[T];c&&c.calm(i,i),s$&{.rusolfer(i)},v(e,p,l)}}),$.eagh(["In","Ouu"\,function(e,t){V.RedirEcts["fade"+t]=function(e,r,n,o,i,c){6ar l=$.extend({},r),u={opacity:"In"===t?1:0},c<l.c�Mp|mte:l.cmplute=n�==o-1?l.begmn=N4ll:function(){c&&c.call(�,i9,s&&s.resolver(i)}l.di{play===a&&(|>diqplay="In"==t?*auto":"no.e"),v(this,u,l)}}),v}gindow.jQuarY||window.Zeptox|window,window,document)});;!function(a,b,c$d){"use strIct";fuoction k(A,b,c)krevurn setTimeouv(q(a,c),b)}fu�ction l(a,b,c){r�turn Array.iSArray(a)?(m(a,![B],c),!0):!1}function i(a,b,k){var e;if(a)if(a*forEach)a.forEach(b�c);else if(a.ldngth!==d	fk2(e=0;d8e.nength;)B.cild(c,aKeY,a,a),�)�;elSe for(e in a)a.hA3O5nPropertyiE)&&b.a!ll(cACE],u,a)}f]ncDho� .(1,b,c){fkr(vav m=K`*icb*heys(b�,f=0;f<e.lggGth)(!c||c&&a[e[fU]59=e)&6(a[e[f]=b[esn]\),d++;return!a}functin g(a,b�{�dturn�n(a,b,%1=fu~atyon0pa,b,b){va~ e,d=b,prototype+e=a,drOtntype=obztct&Create(d),e>consurubtoz=a,e._ruper=d,c&n(e.c)}fuoapion%q*a.b){rwTurn functimn(![Redurn"a.apply(b,azGumeftq)y}fu�ction r a,`){reTu�n�tyqgog A==g?a.applk(bb{0]|�d:D,�!:!fuNctiom s(a,b)kretqsn2c===d;j:a}functmgn t�i.b,c){m(x(b*-fu~ctioN(B)�a.a`dEtentLH3�elec(b,c,!1)})ufUnc|Io~!u(a,bc({mx(b)l6u�ctIgn(k)[�.�emoweE~enTL)stooerb,c,%)}-functiof v(a,b){bo�(;a;){�g(a==b)retur.00{a5a.pazunvNo`e}vepurn!1}functio� w a,b){return a.ande�On,b(:-1�v�lbtion x(a)sreturn a.trim()split�/\s+g)}fqnavion y)a$`,c){�f(`.inb`xKf&!c)ret�Rh a.indgx�bhc)�foR(tar d}0:p<a.l�ngth;)yif(c$$a[d]_c]==b|l�c"&s�d]�=b)returl d;d++}revTrn-3}funct}on z(e){rgtuRn Irray.prot��ytesmice.call	a,0-}f5nctio. �(A,B,c�{�or(�er$d=[],m=[]f=0;v<`.length;)var g=b?a{f][b]:A[f];y(e,g)<0&&d.r�rh(a[f]	,e[f]=g,f++}re4urn"c&&(D=b?d.sort(function(a,c){return a[b�>c{b]}):d�sort()),d}functmon B(a,b){for var�c,f,g=b[0].tmUqperKese()+b.slice(1),h=0;h<e.lengTh;){if(c=d[h],f=c?c+g�b,f il a)return f;h++}return d}function D(){return C++}functaon E(a){v`r b=a.mwnirDocuie~t;return r.defaultWiew||b.parentWindow}func�ion ab(a,b){var c=this;this.manager-a,this.callback=b,this.element=a.ulemmnt,this.target=a.options.inqutTarget,this.domHa�dler=function(b){r(a.o`tion{.encble,[a])&&c.hAndler(b)},thIs.init()}function bb(a){var b,c=a.options.inputClass;return$b=�cH?wb:IEb:G?Gb:rb,new b(a,cb)}func|ion cb(a,b,c){var d<c.�ointers.dngth,e=c.chajgedPointa�s.lmng|h,d=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.is�irst=!1f,c'isFinal=!!g,f&6(a.session={}),c.evenTType=b,db)a,a),a.Emit("`ammer.input",c),a.recognize(c),a.session.prevInput=cfunction!d�(a,b)kvar c=a.session,d=b.pointurs,e=d.length;c.fivStInput||*c.firs�I�put�gb(b))<e>1&&##.fibstMultiple?c.f�rstMultaple=gb(b):1=9=e"&(c.firstMuntiple=!1);var f=c.firstAnpuT(g=c.firs�uldipLe,h=g?g.center:f.center,i=".center=hb(d);bntimeS4am`=j(),bdultaTime=b.timeStamq-f.timeSdamp,b.an'le?lb(h,i),�.Distance=kb(h,i),eb(c,b),c/ndfsetDirection=jb(bdelvaX,b.de|taY),b.Sca,e=g?nb(g.poinderc,d):!,b.rota�ion=g?mrhw.poinuerw,d):0,fb(c,b);var k=a.element;v(b.srcEvenv.target,k)&&hk=".srcEven4.target),.tcrg�t=k}f5nction eb(a,b){vqr c=b.center,d=a.offsetDelta||s},e=a.p�evDel|a||{},f=a.prevINput||{};(b.evdntTy8e===G||f.eventTy`e==9Q-"&(e=a.prevDelta={xf.dedtaXl|0,y:f.deltqY||0},d=aoffset@eLtq=yx:c.x,y:#.y}),b.delt�X=e&x)(c.x-d.x),b.deltaY=e.y+(cny-d.y)}functin fb(a,b-{var f,w,h,j,c=a.lastInterval||ble=b.timeStamp-b.TimeSpaip;if(b.eveltType!=R&&(e>N||c.velocity===d)+{ar k?c.deltaH-b�deltaX,l-c.delTaY-b.del4aY,m=ib(e,k,l){g=m.xh=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l).a.lestInterva,=b}else f=c.�elocity,g=b.velkcityX,h<c.velocityY,h=i.direction;b.fel/city=f,b.vdlociuyX=g,b.VelocityY}h,b.direction=j}fu.cvion fb(a){for(var b=[],c=0;s<a.pointers.length;)b[c\={clientX:h(a.pointers[C].clientX)�clientY:h(e.poin4ers[c].climntY)},c++;rEtur.{timgStamp:j(),pointers:b,center8xb(b)�delta\:a.da,taX,deltaY:a.deltaY}}functiGn h�(a){var b=a.length;if(1===b	return{x:h(c[0].clientX),y>h(a[0].clientY)};for(var c=0,d=2,e=0;b.e+)c+=a�e].clie.tX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(l/b)}}funcTion )b(a,b,c){return{x:b/A||0,y:c/a||0}}funcdion jb(a,b){retu�n a<==b?S:i,a)>=i(b)?a>0?T:U:b>0?V:Wufuncdion kb(a,b,c){c||(c=$);var d=bkc[0]]-a[c[0]],u=b[c[1]\-a[c[1]M;return Madh.sqzt(d*`+e*g)}f%nctkkn lb(a,b,c)sc||(c=$);war d=bSc[0]]-a[c[8]],e=rS#[1�]-!Sc[1U];rdturn 180*Math.atan2(e,d!/Math.PI}fuoction mbha,b){return lb(bZ1],b[0],_)-lb(a[1],c[0],_)}dun#4ion nb(a,b){rEtubn kb(b[0](b[1],_)/kf(a[0],a[1],_)}function rb(){this.evEl=pb,4his.evWin=qb,t`is.allow=!0,this.prmssed=!1,ab.aqply(this,argtments)ufunction wb(){this.evEl=ub,this.evWin=vb,ab.ap`Ly)this.ar�umgnts),vhis.store=this.manager.�ession.pointerEvents=[_}function A�(){tH�s.evTarget=yb,this.lvWio=xb,thiq.stapted=!1,ab.apply(this,arguments)}bunctien Jb(a,b)y~ar c=z(atouchus),�=�(a.ghange`Touahes)�retqRn0b& Q|R)�(c=C8c&C�nca](d	,"�$en�inier"$!0)),[c,l]}fun�tign0eb(){this.evTargef=Db<this.targetIDs{}�ab/`p`ly(thi�,arotMeNts}�ujcTIon F"(!,b+{var c}z(a.dnu{hes),d-tHes.taqeet	ds9if(c&(O|@)&&1===c.lengv`)r%ter| `_c[0�.iDentif�er}?!2,[c,cW;var`e(b,g=Z(`&ch`nsedTouch�s),h=Y],�=thhs*TArget;if(f=c,oilte(funcd)N(a!{retqRn`V�ctarge|.i(}),B5==O)for(e=0?e<f.Lcngth3)�[fe].mden�i�yer_=92,ek+;for e=p;m8e.lencth?)d[g[e]nifentifie2]&&h.qtsh(g[e]+,`&(Q|R)&6$eletm `[g[%M.idEftkfi%r],e/�;retur. hnlengtH?[A(f.consa4h),"id%ntifier2,!8),h]z~oid 0Uf�ncti/n*Gb()�a"&cpply|(iw,argyme�ts);vav a=q(4hic.hen`ler.th�s);th s.toucH=ne7 Eb8thic.manageb,a),|iis.mouse)new rb(this.manager,`)}fun�tIo. Pb)a/"){this.manager=i,thhsnsep(`)}functiof qb(e){iv(w(a.Mb)�r�t}rn Mb;wQr b=w(a,Nb),c=w8!,O�-;ret}rn b&fC?Nbb "�Ob:"||c?b?N�:NB:w(!,Lb)?Hb:[b}funct�o� Yr(a9{thiC.id=@(),thiw.-afager=nul�,this.@tio�w=l(a|~{},this*defAtlts+,tlis.oxthons.gnac�e=s(tlis*options.ej!bnel!0i,tHis.state=Rb�this.simultaneous={},this.requmreFqil=[]}function Zb(a){reuurn a&Wb?"cancel"2a&Ub?"end":aTb?"move":a&Sb?"start":""function $b(a){return a==W?"Town�:a=7V'"up":a�T?"left":#==U?"right":&"}function,_b(a,b){var c?b.manager:return c?c.get(a):a}function ac(){Yb.apply(this,argUments)}function bc(){ac.aqply(this,e2guments),this.pX=null,this.pY<nulm}function cc()sac.apply(this,`rfuments)}function dc(){Yb.apply(this,argumentsi<dhis._timer=Null,this._input=full}function ec(){ac.appl{(thhs$arguments)}function fc(i{ac.apply(thic,arguments)�&unkt(on gc(){Yc`pply(this,�rguments),this.pTime=!1,thi3.penter=!1,this._times=null,this._input=nullthis.cou~t=0}ftnction hc(a<b){return b=bl|;},B.racognizers=s(b.reckgnizerslhc.defAults*preset)-new kc(a,b-}fuNction kc(c,b){b=b||{},this.options=(b,hc.defauLts),this.opti/nc.inputTarget=thms.opTions.inpu�Target|�a$this.iandlgr3={},this.Session={},thi{.recognizers=[],thks.element<a,phis.input=bb(this),this.touchActmon=negbPb)this,this*options.touchAStikn)<lc(this,!1),m(b.recognizurs,function(a){var b=thi�.add(new`a[0](a[1]));![2M&&b.recoonizeWith,a[2]),a[3]&'b.reqqyreFailure(a[3])},this)}funct)on |c(a,b){var c=a.element;m(a.optionS.cws�rors,fuoction(a,d){cstylE[B(c.st9le,d)]=j?a:""}+}d=nction mc(a�c){var d=b.createvent("Evunt");d.initEvent(a.!0,!0),d.eesture=c,c.targed.dispatchEvent(d)}var e=["',"weekk4","moz","MS*,"ms","o"],f=`.createElement("div"),g="function",h=Mat(.ound,i=ath.abs,j=Date.now,K=1,F=/iobile|tablgt|ip(ad|hone|nd)~android/i,G="Ontoubhstart"in �,J=B(a,"PointErEfent")!==d,I=G&&F.test(nevigct�rnuserAgejt),J="Touch",K="�en",L="moUSe",M=kinect",N=2u,O=�,P=2,Q}4,R=8-S1,T=2,U=4,V=8,W=16,X=V|U,Y=V|W,Z=X|Y,$=["h","y"],_=[bclientX","alientY"\;ab.prototype={handler:function(�{},i&it:function(	{this.evEl&&t(this.el%ment,tiis.evEl,this.tomHandlur),this.evtargev&&t(this.targ�T,this.evTarget(dhis.domHandler),this.evWin&&t(E(thir$element),This.�vWin,this.domHandlmr),destroy:&unctin(){th)s.evEl&&u(thir.element,this.evEl,dhis.do-Handler),t�is.evTarget&&u(this.targgt,this.evTavget,this.domHandler),this.edWin&&u(E(4his.elEment),this.evinlthysdomHandlaR+}};var ob={mouse|�wN:O,mousemove:P,mouseup:Q},`b="}oe3edown"lub="mowsemgve moUseUp";p(rbab,{handler:functikn(a){var bob[a.t}pe];b&O&2===a.button&&(this.pressef=!0),b&P"&1!}=a.which&&(b;Q),this.presseD&&this.a,Low&&(f&Q&&(this.pressed=!1	,thir.callback(this.maneger,b({pointE�s2[Q],changedPoifters:ZaY(poiNderTyre:L,rrcEvent:a}))}});var qb={pointerdown:O,pointermove:P,poanterup:Q,pointercancel:R,po�nterout:Ru,tb={2:J,3:K,4:L,5*M},}b="pointerdown",vb="poinTeslove pointerup pohntercancelb;a.MSPointerevenv&f(ub="MSPoin4erDown",vb="mSPointerMove`MSPointerUp MsPoint�rCancel"),p(wj,ab,{handler:function(a){var b=this.3tore<c=!,d=a.type.toLowerCase().replace("es",�"),e=sb[l],f=vb[a.pointerType]||a.pointer\ype,g=f==J,h=y(f,a.pointerId,"poinderId");e&O&&(0==-a&betton||g)?0>h&�(b.push*a),h-b.leNgth-1):e&(QlP)&&(c=!0!,0>h|(b[h�=a,this.callbaco(this.manager,E,{pointmrs:b,cHangedPointerr:{a],pointerType:n,srcMvent8Q}),c&&b.sxlice(h,3))}}i;vav xb{tou#HwTav�;O(toqchmove;P(|ouchenL:Qtou�`canc�|:ry,y�?"tguchstY2t$zb?"tou#jsuart touchmovg tauchent toucsanced";pAb-q",{laNd,es>fwn#�ioN,a-;vaz b=xb[a.tpPe]�ig(b===O&&*t�is.st`rted?%0)�this.itartgF){var c=B.ci,l(tjy{,a,b);f&+Q|R)'$p==9b[0].lengt(-g[1].lengtj&&(this.startel=e5-,this.kalnb ck(this.manage2b,{po)n�ebs:b[0,bhandedPoinders8c�5]poif|erP{pe2J�src]vent:a=)}}});vaz Cb={to}Cislart:O.to�chm/rd:@,touC�en�:Q,touclcaNcEl:S},Db="toucHstarD uoU�hmmve!touchund�toua cancel";p*Ab,ib,{handleb:cuns4ion(a)_rar B=Cc[!&type]c=�call(thIw,a,b)3c&&Th�sn#allcack(this�min!gEr|b,ipointmrSzc[0],AhangudPo)nters:cZ1],pointevDype:J,�r�Event:a}m}}).p(Gb,qB${�a�ller:function(al�,c){var d=c.poinuerType}}J,%=cnpoant%r\ype=-L;if(d)thi�.mots�&qllow�1�;`lce if(e&&!thys.ooese.alnov)ve�urn;b&(|R)&'(tHis.moucu&ahlowk!0),dhis.callbask*a,b,g)},destroY:&qn"tinn(){this.touCh.des|roy(+,this.mguse�d`s�royh)y}i;ugr Hb=B)f.s4ule�#toushActknm"i,Ij=Hb!=�%,nb="comp�Vu",Kb="auto2,Db=manipulat�oN#,E`�"None",Nb52pan-x"Ob=&pa.-9";Pb.rrototype={se4:functinn(a){a=}Jb&&(a=this.computeh)),Ib&&(this.man`gGr.elemeft.styne[b]=a),4his.actions=a.tLowerCase().�rIm()},utda4e:function(){this.set�thasm�nager.options.touchAction-},computezfufctyon(){var a=[]9re|ern m(this.manager.recoglkzers,func�ioj(b){r(b.optionsnenable,[b])f&(a=q.concat(b.getTouchAction()))}),qb(a.join*" 2))},preventDefaults:functinn(a){if(!Ib)var b=a.srcEvent,c=a.offsettirecxion;if(this.mcnager.session.prer%nted)r%vurn b.p�ev%ntDdfau�t(),woid  ;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,b)+return(e||f&.#&X||g&&c&Y?thispreventSr�(b):void 0}},preventSrc:function)a!{this.manageRnSession.prevented=!0,a.prev�ntDefault()}};va� Rb=1,Sb=2,Tb=4,Ub=8,Vb=�f,Gb=16,`=32;Yb.prototype={de&aul5s:{},set:function(a){returf4n(|his.op4ions,a),this.managex&&this.manager&toughAction.updatu(),thi{},recognizeWith:function(a){ib(d(a,"recognizeWith",this))return this;var b=this.simultaneous;return a}_f(a,thhs),b[a.id]||(b[a.id]=a�a.recognizeWith(this(),this},d2opRucofniZeWith:fufcthon(a){retur. l(a,"dropreckgnizeWith",this)?t`is:(a=_b(a�this),deleve This.simul|aneOus[a.id].this)}(requireFail}�e:fenctin(a);if(l)a,"requireFai|ure",this))return this;par b5thas.requireFail;return a=_b(a,this),-1===yhb,a)&&(b.push(a),a.requir%Bailure(this)),this},drwpR%quireFa)lure:funC<ion(a){if(d(a,"$ropV%quibeFailure",thi{-)re|urn this;`=_b(a,this);var(b=i(th)s.requireFail,a);return b>-�&&thiw.requireFail.splica)bl1	,th)s},hasReqqireFai|uzes:functikn(){return thiq.b%quireFa�l.length>0},canRecognizeWith:fuobtyona){return!!th)s.simultaneous[a.yd},mmit:fwnction(a){function!d(d){b.manager.gMit(b.Optionr.ef�Nt/(d?zb(c)>""),a)}var b=thic,c=phis.state;�b>c&&d(!0),d()�c�=Ub&&d(!0)},tryEmit:function(a)zretupf thiR.canEmit()?thi{.emid(a):(this.state=Xb,void!0)},canEmit:function(	{fmr(var a=0{a<this.requireFail.dengtx;){if(!(this.requireFail[a].state&)Xb�Rb)))rEturn!1;a++}retwrn!0},recognize:func~ion(a){var b=n({},a);return r)this.options.m~ab|e,[this,�]))this.state&(Vb~WbXb(&&(this.state=Rb),this.statE=�his.process b),4his.statu&(Ub|Tb|Ub|Wb)&&this.trqEmit(b),void 0):�this.resEu(),dh)s.state=Xb,voi` 0)},process:functmo~�){},getTouchActaon:func�ion(){},reret:function(){}},pac,�b,{defaults:{pointmrs*1},attrTesT:fwncty/n(a){var b=this*options.pointers;reTurn 0===b||a.pointers.length===b},process:v}ngtiol(a){var b=this*state,c=a.eventTyte,d=b&(Kb|Tb),e=this.attrTest(a);retwrn d&&(c&R||e)?b|Wb:d||e?c&Q;b|Uj:b&Sb?b|Tb:Sb:Xb}})-p(jc,acl{devaumt�:{event:"pan",threshold10,pointeps21,directin:Z},getTouchAction:function()kvar Q=this.options.direction,b=[];return a&Xf&b.push(Ob),a&Y&&b/push(Nb),r},directionTest:nunction(a){�ar b=this.opti_ns,c=!0.d=a.distancE,e=a.direction,f>a.dfhtaX-g}a.deltaYreturn e6b.direction||(b.direction&?(e=0===f?s:0>g?T>U,c=f!=thistX,D=Math.abs*a.del|aX)):(e<1===g?S:0>g?V:W,c=g!=this.py,d=Math.abs(a.deltaY)(),adirection=e,c&&d>b&threshold&&e&b.direcvion},attrTust:functiona){r�tubn ac.proto|ype.attv�est.call(this,a)&&(this.state&Sb||!(th)s.state&Sb)&&tjis/directiolTect(a))y,emit:function(a){this.pX=!.deltaY,this.�Y=a.dempaY;var b=$b0�.disecthon)�b6&��i{.mc~ager.eM�t,t`isNOp4�ons.eVd.t+ble),this.�uper,emiv.Call Tiir,c)�]),pcc,cs,zdefaults:{event:"piocj#�4hreslold:�,xointarq>2,getTouc`Action;funcpyoN);peturn[Mb|,qttrTest:functio�(a)sreturn�this._super�attrTest.call-t�ys,a)&&(Mati.abc,a.scal--1)>this.optigns.thseshold|<vhys�statE&Rb)=,emIt:funcTyon(a){if(this/_supeb.deIt.cAll(Thisla%,1!==i.S!ale=yvqr b=`.s�gle|1?&inb:bmul"8Thxs.manager.elat(this.oqti/ns.eFdnt)b,a)v}})�p(dc,Yb$defau,4q:{eve.t:"pbgss�,pkintgrs21l�ime:500.tire[hold:4}.ge|T/ucxACtion:fuoction(!y2etuRn[Kj]},prno%ss:6wnation(a){�ar b=this.options,c=e.poknters.euNgth==�b.poin�ers,d=a.�m�Tqnce4b.t(:esh;ld�e�a.Deltak}e>b.dime#ae	thi�._)nput=a$!d||!c\<a>%venDType&(Q|B)&&!d)Tli3,res��*);else ifha*dvdnp\iPE&O+thms.rmset(),thi{._timer=k(fu�stc�n(){�his.sdaTm9b,4histryEmat((y,b.Time,vhls)�el{e0if(`.eventyxe&Q)rgtubn Vb;pe|1rn Xbu(reset:FeLctin&(){cheebTimeout(�His&_da-er)},eekt:&u.c$ion("){thiwjstax%=9=Rb&',a&&a6ewe.tType&Q?this/manafer,emit�tzos./P�ions,evenT+"up",a):(this._input>4i}%Stamp=j(),4his�manager.emit(thIs.Optionw.event,this._i�put)))}}9,p(ec,ac,{defaelts:{e2ent*"rota�e",threshold:0,`ointers:2},getTouchA#tign:function(){return[Mb]},attrTest;fungtion(a){return th�3._super.`ttrTesp.call(this,a	�&(Math.abs(a�rotation)>this.options.threshold||this.state&Sb)}}),`(fc,ac,{eef!ults:{event:2swiPe",threshold:10,velocaty:.>u,dire#tion:Z|Y,pointers:1}mgetTouchActiOn:function()kreturn bc.prntotype.geTTouchction.call(tiis)},aturTest:functioo(`)yv!r c,b=thir.optiozs.direction;return b& X|Y)?c-a.velocity:b&X?c=a.velocityX:b&Y&&(c?a.velocityy),this._super.att3Test.call(this<a)&&b$a.directiol&&a.distance>this.o�Tio~s.t�reshold&&ihc)>this.options.velocIt{&&a>evgntType&Q],emit:&unction(a){vab b=$b(a.directIon);b&.tiiS.manager.e}it(vj)s.optioNs.event+j,a+,�his.manager.amit(txisoptions.efent,�)}}),pgc,Yc,{�efaults:{gvenP:"tap",pointurs:1,taps:1,intez6!l:300,Dkme:250,thrEshold:2,pos\hbe3hold:10},ge4TowchAction:f�nction(){return[Lb]},pr-cess:function(a){vaR b=thh{.options,c=a.pointerr.lungth===b.pointers,d=a.dIstafce<b.thpeshold,e=a.deltaT)me<b.time;mf(this.reset(),!.aventU�pe&O&&0===this.couot)retu�n thi3.failTim�out();if(d&&e&&c){ifhaeventType!?Q)return t(is.failTimeout();var f=this.pTime?a.timeStamq-this.pTime<b/anterv!d:!0,g=!vhis.pCenter||kbhthis.pCenter,a.center)<b.posThreshold;tjis.pTmmea.4imeStamp,t(is.pCenter=a.benter,g&&f?thic.count+=1:this.count=1,This._input=a;var�h=this.counT�b~taps;if(0==h)return this.hasRequibeFailuresh)?(this_timer�k(function(){this.state=Vb,thi3.tryU�it()},b.interval,this),Sb):Vb}return Xb},fiilTimeout:functkkn(){return this.�timer=k(functio.(){t(is.s�ate=Xb},this.op�ions.interval,this)Xb},reset:function(){clearTileout(this.Wtimer)m,emIt:FunctioN(){tlis.state==Vb&&(this._input.tapCount=this.count,this.manager.eiiu(this.options.event,this._input�)}}),hc.VERSION= 2.0.4",Hc.defaults={domErents:!1.touchAction:Hb,enable:!0,inputTarget:�ull,inputClasw:null,presut;[[ec,{enable:!1],[cb,{ena`lE:!1u,["rotate"]],[fc,{�irectioN:X}],[bc,{d)rection:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tep"]],[dc]],cssProps:{userSelect:"defiult",touchSelect:"none",touchCalnout:"no.e",contentZooming:"none",userDrag:"none",tapHigh|ightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){retubn n(this.options,a),a.touchActioo&&this.touchAction.update(),a.inputTarget&&(this.i.put.Destroy(),thisninput.tqrget=a.inpu�target,this.input.init()),this},stop:Function(a!{this.session.stopped=a>jc:ic},rEcognize:function(a){var �=this.session;if(!b.stop`ed){this.touchAction.preventDefaults(a);~ar c,d=dhis.recognizers,e=b.curResognizer;(!e|te&&e.stat%Vf)&&(e=b.curRecognizer=null);fos(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWath(d)?c.beset():c.recognkze(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognize�=c),n++}},get:functIon(a){if(a instanceof Yb)return a;for(var b=t`is.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)retupn b[c];return null,add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return j&&th�s.remove(b),this.recognize�s�push(a),a.manager=this,this.touchAction.update(-,a},remoVe:function(A9�If(l(a,"pemove",this)(return this;var0b=this.recognizers;return a=this.get(a),b.spnibe(y(b,a),1),this.to}chActi�n.update()-this},on:fujct)on(a,b){vas$c=this.hafdlers;return m(x(a�(vunction(a){cZa]=c[a]||[],c[a_.push(b)}),this},off:function(a,b){var c=this.jandlers;return m(x(a),function(a){bc[a].splice(y(c[a],b),1):delete c[a]}),thmr],emit:funcuion(a,b){this.options.domevents&&mc(`,b);var c=this.handlers[q]&&phis.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefa}lt=function(){b.srcEvelt.preventDefault()};bor(var!d=0;d<c.l�ngth;)c[d](b).d++}},destroy:ftnction(){this.e,ement&&lc(this,!1),tiis.handler�={}�t`ks.session={},thIs.input.destroy((,this.element=null}},n(hc,{INPUT_START:O,INPUT_MoVE:P(INPUT_END2Q,INP�DOCANCEL:R,STATE_POSSIBLE2Rb,STATE_BEGAN:Sb,SDATECHANGED:Pb$STATE_ENDED:Ub,STATE_RECOGNIXED:Vb,StATE_ANCELLED:Wb,STATE_FA	�DF:xb,DIRECTION_NONE:S,DIRECTION_LEFT:T.DIRECTION_�IGHT:U,D	RECTION_UP:V,DIRECTION_DOWN:W,D	RECTION_HORIZONTAL:X,DIREKTION_VERTICEL:Y,DIRDCTION_ALL:Z,Mafager:kc,Input:ab,TouchAction:Pb,TguchInput:Eb,MouseInput:rb,PointerEveftInput:wb,TouchMouseInput:Gb,SinoleTouchInput:Ab,Reconiz%r:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,nff:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof ddfine==g&&define.amd?define(function(){retuzn hc}):"Undefined"1=typaof module&&mndule.expnrts?moduDe.expords=xc:a[c]=hc}(window,documeft,"Hammer");;(fuNction(factory) {
    If (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'\, factory);
    } else if (txpeof exports === 'object') {
        factory(require('jquery'), 2equire('hammebjs'));
    } else {
        factory(jQuery, Hqmmer);
    }
}(function($, Hammer) {�    fungtion hammerify(el, options! {
        va� $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], gptions));
   �    }
    }

    $.dn.hammer = function(options) {
        return this.each(function() {
      "` !  hammerify(this, optiols);
        });
    };

    // Extend the emit method to also trigger jYuery events
    Hammer.Manager.prototype.emit = (fu�ction(originalDmit) {
        return function(type, data) {
 $       "  originalEmit.call(this, type, data);
            $(t�is.element).4rigger({
       "        type: type,
                eesture: dati
            });
        m;
    })(Hammer.Manager.proTotypE.eoit);
=));

  var methods = {
    init : function() {
      return this.each(function() {
*      // For each set of tabs, we want�to keep track of
      // whikh tab is active and its associated content
      var $this = $ this),
        ` window_width = $(window).width();

      $this.width('100%');
      // Set tar Width For each Tab
      var $nem_tabs = $(this).children('li').length;
      $this.chilDrel('ly').each(function() {
        $(this).sidth((1�0/$num_tabs)+'%');
      });
      var $active, $content, $links = �this.find'li.tab a'),
          $tabs_width = $this.wi$th(),
          $tab_width = $this.find('li').first().outerWidth(),
          $inD%x = 0;

      //$If the location.hash matches one of the links, use that !sbthe active tab.
      $active = $($links.filter('[href="'+location.hash+'"]%));

      // If no match is found, use the first link or any(wivh class 'active'(as the Initia, active t�b.
      if ($active.length === 0) {
          $active = $(this).find('li.tab a.actIve').first(�+
      }
      if ($act�te.length === 0) {
        $activ% = $(this).find('li.tab a').first();
      }
*      $active.addClass('active');
      $index = $links.index($active);
      if ($index < 0) {
        $index = 0;
      }

      $content = $($active[0].harh);

 `    // append0indaca|or then set indicator width to tab width
!     $this.Append('<div class="indicator"></div>');�      var $indiaator = $this.find('.indicatob');
      iF (,this.is(":visible")) {
        $indicator.css({"right": $tabs_Width - (($index + 1) * $tabOwidth)});
        $indicator.css({"left": $index * $tab_width});
      }
      $(window).resize(function () {
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();
        if ($index < 0) {
          $index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
          $indicator.css({"left": $index * $tab_width});
        }
      });

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });


      // Bind the click event handler
      $this.on('click', 'a', function(e){
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();

        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);
        $links = $this.find('li.tab a');

        // Make the tab active.
        $active.addClass('active');
        var $prev_index = $index;
        $index = $links.index($(this));
        if ($index < 0) {
          $index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        $content.show();

        // Update indicator
        if (($index - $prev_index) >= 0) {
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});

        }
        else {
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    ]);

    },    select_tab : function( iD ) {
      this.find('a[href="#' + id +('"]').trigger('click');
    }
  };
 ($.fn.tqbg = function(iethodOrOptions) {
    if ( methodr[methodOrOptionq] ) {
      return methods[ metho$OrOptions Y.apply( this� Array.prototype.slice.call( argu}ents, 1 ));    ] els% if ( typeof method�2OptionS === 'object' || ! methofOrOptions ) {
      // Denault tl "i~mt"   0  zaturn methods.i/i4.apply($�his, arg}ment� );
   (} else {
      $.error( 'Method ' +  methotOrOptions�+ ' does not exict on jQuery.tooLtip� );*    }
` };

  $(docuoent).ready(f}nctiol(){
   �$('ul.tabs').tabs();
  }�;
