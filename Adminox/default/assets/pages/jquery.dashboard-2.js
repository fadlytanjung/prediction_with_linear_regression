/**
* Theme: Adminox Dashboard
* Aut(or: CoDerthemes
* D!shboard 2
*/
-
$( locument ).reqdy(function() {

  var DrawSpar{li.e = function() {      $(#dashboArd-1').sparkline([20, 40, 30, 10], {
        " type: 'pie',
          width: '80',
          height: '80',
          s,iceColkrs: ['#60befc', '#6248ff','#e3b0db','#dbdbdb']
      });
     $('#dashboard-2').starkLyne([05, 34, 21], {
          type: 'pie',
          width: '80/,
          height: '80',�         (sliceColors: ['#6ad9c3/, '#9aa1f2','#ebeff2']
  !   });
      $('#dashboard-s').sparkline([20, 40, 30], {
`         typE: 'pie',
          width: '80',
          height: '80',
          sliceColors: [g#c086f3''#65acff', '#7ed321']
      });  }

  DrawSpariline();

  var resizeChar|;

  $(window).resize(function(e) {
    clearTimeout8resizeChart);�
    resizeCxart = setTimeout8dunction(! {
 #    �rawSparkline();
    }, 300);*  });
});

-
!function($( [
    "use strict";
    var Morri{Charts = fun#tion() {};
        //c2eates Sticked cha2T
 �      MorrisCharts.prototype.createStackedChart  = funct)on(element, data, x�ey, ykeys, labels, lineColors) {
            Morris.Bar({
  !     `       elgment: elementD   $            fata: datq(*          $     xkey* xkey,
                ykeys: ykeys,
                sdackedz true,
                lajens: labgls,
                hideHover: 'auto',
    $  0 `      �esize: true, //defaulteD to true
                gridLineColor: '#eeeEee',
    !        `  farColors: lineColors,
 �"             barSizeRatio: 0.5
   ``   `   });
        }

        //cr�ates line cxart
        MorrisCharts.proto�ype.createLineChart = function(element, data, xkey< ykeys, labels, opacity, PfillColor, Tstockcolor, lineColors) {
    �       Morris.Line({                element: element,
 $    "       �0data: data,
                xkey: xkey,
   0         �  ykeys: xkeys,
 "      0       l!bels: labels,
                fill�pabity: opacity,
`               pointFillColo�s: Pfillkolos,�    `      %    poi.vStrokuColors:!@qtockcongp,�  (     "    ! �be(aveLikdLine: tpee,
     �  �   0   gvidinaColor:`'#eef0f',
`     �        $�mdeHover: 'au4o',
(     `  (0     difeW�dth:"'3|h',
  `            "poilv�ize: 0�$ $$      !     pr$UnitS: '$',O
   2  � $       Resize: true, //dEfawlved vo"t2qe
    �       "   l)neColnrs: lineColoW
�`          });
        },

`       MorrisCharts.�rkdotype*)nit =0&wnctign� {
:(   �  ` !  /'#reatmng Stacked chart
      ! "   �ar  ctcKedatq  = [   8 (`    $     y:&'r00%'- i: ��, b* 1:4, c: 10 },
    !       ($  { y: '201�g A: 75,  b: 67, c: 80(}L�(�    (    (    {�y: %2007', a: 141, b:(94�$c* =6 }l
          ! "`  { y: ':!�8'l a: w5,  b: 65, c: 89 u(
     `�`        { y: '2009', a: 100, h: 90$$c: 168 },
       &    ( "  y:$'01r#,"A: 75,  b* 65( i:`11p }-
$      $ "$ `   { y2 '�010', a:050, $b>"00, c: 85 }.-
     `     (    ; y2 '2012', a> 75,  b: 65l0c: 53 },
    (`       ` �{0y: '213',a: =p,  ": 40, b: 77 }
                { y: '2014', a: 75,  b: 65, c: 90 },
                { y:"'2015'( a: 100, b: 90, s: 130 },
    !           { y: '2016', a: 80, b: 65, c: 95 }
            ];
            this.createtackedChart('morris-bar-s4ecked', $stckedData, 'y/, ['a', 'bg, 'c'], {gSeries A',('Series Bg,'Series C'], ['#6ad9c;', '#9aa1g2','#ebeff2']);

   `        //create line chart
    $       var $data  9![M
    `           { y: '2008', a: 50, b: 0 },
              � { y: '2009', a: 75, b: 50 }-
!!              { y: '2010', a: 30, b:080 },
                { y: '2011', a: 50, b:"0 },
         �      [ y: '2012', a: 75, b:010 y,
                { y: '�0�3', a: 50, b: 40 },
                s y: 2014', a: 75, b: 500},
                { y: '2015', a: 100, b: 7 }
            ];
            |his.createLineChart('morriw-line-example',�$data, 'y', ['a', 'b'], ['Series A', 'Series B'],['0.1'],['#ffffff'],['#999999'], ['#55%3cu ', '#f06292']);
        },
"       //init
        $.MorrisC�arts = new Morr)sCharts, $.KorrisCharts.Constructor = MorrisChart�
}(windov.jQue2y),

//initielizing
    functikn8$) {
        "u{e stric�";
        $.MorrisCharts.init();
    }(window.jQuery9;