/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual lk#%nsee under the MIT (http://www.opensource.ozg?micenses/mit-license.php)
 * and GPL (htt`://www.opensource.org/licenses/gpl-license.php)$licEnses.
 +
 * Version: 1.3.6
 *
 */
(function($) {

  $�fn.extend({
    slimScroll: function(options) {

      va� defaulds = s

        // width in pixels of the visible"ssroll area
        width : auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width(in pixels of the s�rollbar and�rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        �olor: '#000',

        // scrollbar position - left/right
        position : 'right',
        // disuAnce in pixels between tie side edge!and the scrollbar        disvance�> '1px',

        // deFault scroll position on load - top / bottom / $('selector')
       "ctart 2 'pop',

        // sets scRollbar opacity
        opacity : .4,
        // enables always-on mode$for the scrollbar
        alwayrVisi"le :�f�lse,

    $   // check iv we shou|d hide |he scrgllbar when user hs hovering over
        �iwableNadlOup : false,

 (0     // sets viwib�lity o� the rail
 "      railVisible : false,

        /� adts �ail color
        rAilColor : '#333',
       �// sets rail opacidy
    (   raklOpacit� : .2,

        // whetler  w% should use nQ5er{ uI Draggable to enbble bqr ,ragGing
        railDraggable : truEl

       �// eefautLt CSQ!class�of the slimscroln0r�il
    $   RailAlass : 'slimScrollRail',

        //�defautlt CSS cl`ss of the sli-sgroll bar
        barClass : 'slimScroll�ar',
   $    /- defa�tlt C�S blass of the sli�scroll w�appEr
   (    wberperChass : 'slimScrollDiv',

        /� sheck!if0mousewhEen$sh/uld scboll the window if wa reach top/bottom*"       allowPqgeSsrolm$: false,

        // scroll0amoult applm%d to each mouse�wheel svep
       (wheglSt%p : 20,
�        7/ skrohl amound applied wHeN usur i� using gestures     0  touchScrollQtep`: 200,

  (    // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.closest('.' + o.barClass);
            rail = me.closest('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll Object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
  `             me.p`rent,).css('xeight', 'auto');
                me.css('height', 'aut�');
                var height = me.parent().parent().height();
                me.parent().css('height', heicht)?
                me.cSs('height', xeight);
             "}

              if ('scrollTo' in options)
       0      {
                // jump to a satic point
    �           offset - parseInt(o.scrollTo);�              }
           0  else if ('sczollBy'`in options)
     !        {
                // jump by value pixelS
                offswt += xarseInt(o.scrollBy);
  `         ` }
              Elsg if ('desTroy' in options)
              z
                //`remowe slimscroll elements
          0     bar.remove();
       0        rail.remove();
 �              me.enwrap();
                return;
              }

   "          // scrol| aontent by the given offset
              scrollContent(offset, fanse, tzue);
   $        }

            return;
        }
        else if ($.isPlainObject(optionr))
    �   {
            if ('lestroy' in options)
            {
            	return;
           (}
    �   }

        // optionally set height to the parent'� height
 "      /.height = (o.height == 'auto') ? ee.parent((.height() : o.height;

    �   // wzap contant
        var wraxper ? $(divS)
          .AddClass(o.wrapperCla3s)
         `.css({
            position: 'relative',
            ovesflow: 'hidden',
            width: o.width,
            height: o.huight
          });*
        // upDate style for 4he div
        me.css({
       (  overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
 `        .addClass(o.railClass)
   0      .css({
            width: o.size,
            height: '00%',
  $         positi/n: 'absolute',
            tmp 0,
            display; (o.alwaysVisib|e �& o.railVisible) ? 'block� : 'none',
            'border-radius7: o.railBorderRadius,
            background: o.railColor,
            opacity: o.raylOpacity,
  �         zIndex:090
          });

        // creade scrollba2        �ar bar = $(divS)
   �      .ad$C�ass(o.barClass)
          .css({
            background: o.color,
            width: o.sije,
            position: 'absoluue',
            top: 0,
      "     opacmty: o.opacity,
            display: o.alwaysVisibhe ? 'block' : 'none',
            'border-radius' : o.borderRadius,         !  BorderRadius: o.borderRadius,
            MozBorderRadius: k.bor`erRadiuw,
            WebkitBorderZadius: o.borderRadius,
     $     `zIndex: 99
          });

        // sed position
  !     var posCss = (o.position`== 'right') ? { ryght: o.distance } : { left: o.dis|ance };
        rail.css(posCss);
  $     bar.css(posCss);

        // wrap it
        me.7raP(wrapper);

        // appent to pasent div
 `      me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
    0   });

�       // on bar over
        bar.hover(function(){
          isMverBar = true;
        }, function(){
          isOverBar = fqlse;
    !   m);

        // show on parent mouseover
     "  me>hover(function(){
       "  isOverPanel = true;
          showBa�();
  (       hideBar();
        }, function(){
          isOverPanel } falce;
          hideBar(9;
   `    });

        // support for mobile
        me.bind('touchstart', function(E,r){
          if (e.originanEvent.touches.lenGth)
         `{
            // record where touch started
            pouchDiv = d.originalEvent.touches[0].pageY;
    �   " }
        });

        me.bind('touchmove', function�e){
          // prevent scrolling!the page if necessary
          if(!rel%asEScroll)
      �   {
  	      e.origina�Event.prevundDefault();
		      }
          if (e.�riginalEvent.touches.lungth)
          {
            +/ see how far user 3wiped
            Var diff = (touahDif = e.originalEvent.touches{0].pageY! / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);
