
/(+
* UjEme: Ed`ynop`Admi�"Template
* AUth�r:(Cmeertheles

 Mr`is"Bhart
*/

aful#tioJ($) {  00"usd strict*;
 $` �ar MrzisChart� = functioL()({};

  �8/'gpeates Line kjart�    MorrisChcrts>p�/tovype.kreaT5ingChart = vunCti~n)elum�nt, d�ta, xkuk, ykeys,�Lar!ls,0o0acity, QfinlcoLor, �stnckColo2( lknecolorS) {*      ! Morris�Lin%({
$   " �  !elmme�t: elem�nt,`   (  (  `aqa*"tatc,
     ""  xkgy8 x�ey,
  `  # "  ykei7: yke�sl
  `     0 lAbe,s: labems,       "  �idlO`acity; op!city,: �$     � podntFillC��oRq:&PfYl|color,
0         poi�t�trokeColo2s3 Pstockcomor,  0   0  `behivmLikeHife� true,:     `!  `gqhdLine/l�r: 'eef0g�%,
          hidmHo4ev< '�uFo'l*�    $    lMneWkdtH: '3p8',
          po�n�Siz%:�0,
�      ! preSnius: '$',
 ` 0 � �  recmzd:,tRue, //eefaul|ud �o!tree
          l�neColors: lifeBolnrs
0$@!`   }�;
  4 },
(   �/�reates area char4� $ MorbirCha2ts*protntype.arecteArea�harv = �unctio, e|e-end, PoantSaze- line_idDh, dcta,$xkeY, qke)s, labels- l	&eCO|oRs� k       $Morri�.AReaa{,      "    element: element,
!           pointsize: 0,*            lineW)dth: 0
            data:"data.
`    $      �key: xkey�
           0yke}s: ykeys,
            labels: labehq,
            hideHover: 'aqto',
p"       $  resize: true,�            grilLineColor: '#eef0f2',
            lineCo,ors: li~eColors
   0    });
    },
    /'craates ar�a chart with dotted
    MorrisChArts.protoType.cre`teABeaChartDotted = vunction(�lement,�pointSize,$lineWid|h, data, xkey, ykeys, labels, Pfilh#olor, Pstockgolor, lineColnzs	 {
    0   Morriq&Area({
      $     elemeot: elEment,
          ` pintSize: 3,
 �     8    linmWidth: 1,
            data: data,
     !      xkey: xke},
            ykays:ykeyc,
    !       l�b�ls: labels,
       0   $hideHover: 'auto'-
            pointFillColor{ Pfillcolor,
   0        point�trokeColors: Pstockcolor,
          " re3ize: true,
          0!smooth>�f�lse,
            gridLineColor: '#eev0f2',
            l)neColorS: lineCo�ors
     `  });
    },
    //creates Bar chart
    MorrisCherts.prototype.createBar�Hart  = functIon(element, data, xkey,0ykeys,`labels, lineColors) {        Morris.Bar(��   `     �  element: element,
            data: Data,
   "        xkey: xkey,       `    ykeys: yke}s,
            lab�l�: labels,
            hidMHover: 'aut/',
            rmsize: true, //defaulted to true
            gridLineC�lor: '#eeeeee',
            barqzeRatko: 0.4,
            xLab�lAngle� 35,
�   �       bi�Col/rs: li.eColors
        });� �  },
    //crea4es Stacked chart
    MovrisCharts.�rototype.createStackedCharT  = functionhelament, data, xkey, yKEys, labels, lineColors) {
      ! Morris.Bar({
      �   � elemeft: el�ment,
     0!     data: data,*   0   0    xkey: xkay,
      (     ykeys: ykeys,
            stacked: 4pue,
            labelq: lcbels,
    `    0� hideHoter: 'aut�',
            resmze: true, //defaulteg to 4rue
            wridLineColor: '#eeeeee',
        0 $ barColors: lineColors
       �});
   },
    //c2eates0Donut chart
    MorriqCharts.prototy0ecreatgDnnutChart = fu.gtion(element, data, colors) {
     "  Morris.onut({
            element: element$
`  (   (    data: data,
    �    �  barSize: 0.4,
  $       ( resize: tvue, //defaumted to true
          ` colors: colors
        });
    },
    MorrisChqrts.prototype.ini4 = fu~ction() {

        //cruate line chart
     (  vab $�ata 0= [
   `  0      {!y: '20 8', a: 50, b* 0 },
         !  { y: '2009', a: 75, b: 54 },
            { y: %2010', a: 30, b: 80 ,*            { y: '2011', a: 50, b: 50 },
  !         { y: '2012&, a: 75, B: 18 },
$      "    { y: '2013', a: 50, b: 40 },
(           { y: '20q4', a: 75, b: 50 },
         �  ; y: '215', a: 100,�b;$70 }
     $    ];
        this.crmateLineChart('morris-lino-�xAmple', $data, 'y', ['`', 'b'], ['Series A', 'Series b'],['0.1'],['#ffffff'},[''999999'], ['#5553ce ', '#f0&292']i;

        //creadiOg area chart
   `    var $areaData = �
    `       { y: g2009', a: 10, b> 20 },
       $    { y '2010', a: 75,  b: 65 },
   `   0    {0i '2011', a: 50,  b: 40 },
        $   { y: '2012%, a: 75,  b: >5 },
      ` ""  {(y: '2011', a:010,  b: 4��},
$           {(y: '2014', a: 75,( b: 65 },      "     { y: '2015', a: 90, b: 60 }
        ];
        thi�.createQreaChart('morri{-arAa-example', 0,!0, $areaData, 'y', ['a', 'b'], ['SeriEs A'l 'Series B'], ['#5553ce', "#bdbdbd"]);

 0  0   //breating area �h`rt with $ot|ed
        var$$areaFotData = [
            { y: '2009', a:!10, b: 2 `},
            [ y: '2010', a: 75,  �: 65 },
  `         { y: �2011', a: 50,  b: 40 },
     `      { y: '2012', a: 5=$  b: 65$},
      `     {`y: '2013', a: 50,  b: 4� },
0           { y: '2014', a: 75,  b: 65�},
            { y: '2015', a:$94, b; 60 }
  �  "  };
        this.createAreaCharvDotded('morris-avea-with-Dotted', 0, 0,0$areaDotDapa, gy', ['a', 'b'], ['Series A', 'Sepies B']-['#ffffff'],['#999919'], ['#297ev6', "+bdbfbd"]);
    0   //c2eating bar`chart* `    $ v�r $barData $= [
            { y: '2009', a: 100, b: 90 . c: 40 },
            { y: '2010' a: 75,  b: 65 , c: 20$}-
            { y: '2011', a: 50,  b: 40 , c: 50 },
            { y: '2012', a: 75,  b: 65 , c: 95 },
            { y: '2013', a: 50,  b: 40 , c: 22 },
            { y: '2014', a: 75,  b: 65 , c: 56 },
            { y: '2015', a: 100, b: 90 , c: 60 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#c086f3','#65acff', '#7ed321']);

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180, c: 100 },
            { y: '2006', a: 75,  b: 65, c: 80 },
            { y: '2007', a: 100, b: 90, c: 56 },
            { y: '2008', a: 75,  b: 65, c: 89 },
            { y: '2009', a: 100, b: 90, c: 120 },
            { y: '2010', a: 75,  b: 65, c: 110 },
            { y: '2011', a: 50,  b: 40, c: 85 },
            { y: '2012', a: 75,  b: 65, c: 52 },
            { y: '2013', a: 50,  b: 40, c: 77 },
            { y: '2014', a: 75,  b: 65, c: 90 },
            { y: '2015', a: 100, b: 90, c: 130 },
            { y: '2016', a: 80, b: 65, c: 95 }
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B','Series C'], ['#4489e4', '#78c350','#ebeff2']);

        //creating donut chart
        var $donutData = [
                {label: "Electricity", value: 12},
                {label: "Financial", value: 30},
                {label: "Markets", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#297ef6', '#353d4a','#f2f6f8']);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);