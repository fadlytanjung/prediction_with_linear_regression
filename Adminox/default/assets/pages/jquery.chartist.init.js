/**
* Theme: Adminox Dashboard
* Author: Coderthemes
* Chartist chart
*/

//smil-animations Chart


  var chart = new Chartist.Line('#smil-animations', {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  series: [
    [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
    [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
    [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
    [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
  ]
}, {
  low: 0,
  plugins: [
    Chartist.plugins.tooltip()
  ]
});

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
  delays = 80,
  durations = 500;

// Once the chart is fully created we reset the sequence
chart.on('created', function() {
  seq = 0;
});

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
chart.on('draw', function(data) {
  seq++;

  if(data.type === 'line') {
    // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
    data.element.animate({
      opacity: {
        // The delay when we like to start the animation
        begin: seq * delays + 1000,
        // Duration of the animation
        dur: durations,
        // The value where the animation should start
        from: 0,
        // The value where it should end
        to: 1
      }
    });
  } else if(data.type === 'label' && data.axis === 'x') {
    data.element.animate({
      y: {
        begin: seq * delays,
        dur: durations,
        from: data.y + 100,
        to: data.y,
        // We can specify an easing function from Chartist.Svg.Easing
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'label' && data.axis === 'y') {
    data.element.animate({
      x: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 100,
        to: data.x,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'point') {
    data.element.animate({
      x1: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      x2: {
        begin: seq * delays,
        dur: durations,
        from: data.x - 10,
        to: data.x,
        easing: 'easeOutQuart'
      },
      opacity: {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      }
    });
  } else if(data.type === 'grid') {
    // Using data.axis we get x or y which we can use to construct our animation definition objects
    var pos1Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '1'] - 30,
      to: data[data.axis.units.pos + '1'],
      easing: 'easeOutQuart'
    };

    var pos2Animation = {
      begin: seq * delays,
      dur: durations,
      from: data[data.axis.units.pos + '2'] - 100,
      to: data[data.axis.units.pos + '2'],
      easing: 'easeOutQuart'
    };

    var animations = {};
    animations[data.axis.units.pos + '1'] = pos1Animation;
    animations[data.axis.units.pos + '2'] = pos2Animation;
    animations['opacity'] = {
      begin: seq * delays,
      dur: durations,
      from: 0,
      to: 1,
      easing: 'easeOutQuart'
    };

    data.element.animate(animations);
  }
});

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
chart.on('created', function() {
  if(window.__exampleAnimateTimeout) {
    clearTimeout(window.__exampleAnimateTimeout);
    window.__exampleAnimateTimeout = null;
  }
  window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
});



//Simple line chart
new Chartist.Line('#simple-line-chart', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  plugins: [
 @ 0charvist.pluwyjs.eoo�Tip()
 $]J})9
��

+/]i~� Qcapuer Diwgra--
var uimew = &UncTyon(bi�{*0!retubo Arriy.ap0l[,null, naw Ar2!y(n-);M
};
	
v`b fapa 9times(52)�aX(Maph.raodgm).reduce(bwngtion(d!Ta, rnd, index) {AJ  fada.�abmls.pu�h*in`gx k 1	;
0 DaPa�reries.fosEaci(fun�tion(serie�) w
    sirims.push,MaTj.zandgm() * 0-
  })1

 sutur. tata;
ml!{  l�bels: [M,
 "serkes: t�ieu(4+�map(fenctio.8)�{ z�]urn �ew`arraq() }-},M
var o`tions = {
` chKwL�ne: falru,
  ax�sX> z�
    Labelinttrpolati�nF�s2#bunctyon8vilue, �nddx) {J    ! reTurn indUx0% 1# ==�(0 ? 'U%  v�lua : Nul�? b  }
  }-
m+

var bes|onsyveOPtimNs!= [
` [7SsrdeN$aft (-cjui�4h: 640px)#, {
0  �ay+sX:({
!0    laaulI�terpolaqi.nFNC>$fUnct�on(val5e,&9.dEp) [
 $   !  reuuwn$in$ex % 4 5== 0 ? 'W' � vcLud :�null;
   ( }
    }
 $}])
]?
-
new �hartiSt.Ling('#scatver-thaoram', d`�a optio�q- reqponsifeGptio~�i:L
-



/oLifg ckarv"wiwH poo`Pmpsnew$Bhartist.Line(##line-chart%�ofltipr&, {
  dAbels: ['1', '3', '3#� '4',`'5', '6']$
  series: [
    {
 "  ( na�e: 'Fi"onacck seQuencq',
�     data8 [1, 2, 2� 5,�8, 13]
    },
    {
      name: 'Golden sectimn',
     datq: [1, 1.618,$2.618, 4.236, 6.>54, 11.09]
    }
 $m
},
    {
  plugins: [
    Chartist.xluwins.to��tip()
  ]
}
);

var $chart �  ('#line-chart-tooltips/);

var $toolTip =0$chart
 `append('<div cliss="tmoltip"><?dhv>')0 .find('.tooltip')
  .hide();
:$chart.on('mouseenter/, '.ct-poinT', function() k
!`var $point = �(this),    vaLue 8 $poInt.attv('cd:value'),� �` seriesName(= $point.Parent().attr('ct:series-lame'�;
  $toolTip.html(s�riesName + '<br' + valua).show();
})?

$s(artnon('mous�leave', ',at-`oint',"function() {
0 $toolTip&hide8!;
})+

$chart.nh'mousem/ve', fu~ctyon(event)!{	
  $doolTip.csr({
    l%&t� (event.offsetX || event.originalAvent.layerX)!- $toolTip&idth() / 2 - 10,
    pmp: (�vunt.off3etY || evEnt.npiginalEvant.layerY) - $too|Dip>idight() - 40
  });});

�


//Line chirt with area

new Chartist.Line,#�hart-with-area', {
  labens: [1, 2, 3, 4, �, 6,(7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5,04]
  ]
], {  low: 0,
 0showArea:$true<
  plugin�: [
  0 Chartist.plugins.vooltkp()
  ]
});


//Bi-pola� Line chart with crea only

new C`artist.�ine('#bi-polar-line', {
  labels: [1, 2, 3, 4, 5, 6, w, 8U$
  series: [
 0  [1, 2, 3, 1,-2, 0, 1, 0],
    [-2, -1, -2, -1, -�.5, -1,`-2, m1],
�   [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2., 2, 1, 0.5, 1, 0.5, )q, -2.5]
 $]	*}, {
  higd: 3,
  low: -#,
  showArea: true,
  si�wLinm: false,
  sxOwPoint false,
  full�idti: tru�,
  axisX: {
    s`OwLabel: false,
  ` showGrit: f!lSe*  },
  plugins: [
�   Chartict.pluginstokltip()
  ]
});





//SVG Path animatiOn

var chart = oaw Chartist.Li.e('#svg-animation', {
  la�els: ['Mon' 'Tue', 'Wed', 'hu', 'Fri%, 'Sa4#],�  series: [
    [1, =, 2, 5, 4, 3],
    2, 3, 4, 8,!1, 2],
    [5, 4, 3, 2, !, 0.5]
  ]
}l {
  low: 0,
  shcwArea: t�ue,*  showPoint: fadSe,
  fullWidth2 true
});

chart.nn('draw', functign(da|ai {  if(data.type === 'lkne& || data.type =-= 'a�ea'� {
    data.eldment.animate({
      d: {
   "    begin: 2 00 * datp.indE�,
        dur: 2200,
        �2om: data.path.clgne().sca,e(1, 0).translate(0- fatq.chastRect.haight()).stringify(),
   0!   to: data.path&clone().stringify(),
    "(  easino: Chartist.Svg.Easing.easeOutQuint
      }    });
  }
});

*
M

//Lknm InteRpolaTion / Smoothing

vab"chard =�new Sharti{t/Lane('#line-smoothing', {-
  labels:"[1, 6, , 4, 5],
  series: 
    Z1, 5. 14,�0, 1],
    [10, 15, 0,$1, 2]�
  ]
}, {
  // Remofe this configuRati/n to s%e thaT chart rendered with cardinal SPline intmrpolation
  // Sometimec, on large ju�ps if data values, it's better tn use simxle"smoothing.
  lineS}ooth: Chartist.MNterpolatin.Simple({
0 � divisor: 2
  }),
 !fullWidth: true,
  cha2tPaddifg: {
    right: 20  },
  low: 0,
  plugo.s: [
    ChArtist.plugins.tooltip()
  ]
});





//Bi-polar bar k`art

var dAt!`� J  labelS: ['W1�, 'W6', 'V3#, W4',b'�5/, Wv'� 'W7',$gW8' #W9'� W50'$( ser!Es� YM
((0 1, 6, 4, 8, 6, -�l`-1,$,4, -v, -20&]m;

4av!optio.s }({
! hig�:�00,  lgw: 12,
  axisX: {
! ` l`belIntarpolatkonGnc; funcpign(v�lue. yn$dx� {
  �  `rE|5rl intex$%" ==� 0(? valuE!:�nullZ    }  },M  �legins:!S
@!  Cha�tist.plyginS.0oolvir8, `]�
9
�
new Char�irt.Bar(e3bi��kder-�ar', data, options)9m

�
*
/;Ovarlapping b�rs / mobIlg
var �`4a }(z
 marel3: ['Jan?, 'Feb'- /Mar'< 'Qps%, 'Ma�, 'Jung. 'Ju�g, '	uf',"'Sep'l st/4`'Zovg( 'L�c'\<M
  se2ies: Y   )[5, 4, 3, w, 5, 10, 3, 4, 8( 10,`6.!8],	
    [3, , 9< 7� 4,!6,  , >l 7, z, 7(4U
  _
};

vas0o�t)olr = {
  seriesBarDiq�ance:010Jm/�
�a� ru{ponsiveOptions =![
  ['qcse-n and (max-wiD|h: 640py)'. {
   (qeRIe�bQvEaqta~�e:(=(
 $  axisx: 
  �   labedInTe�polathonFnc: fuhc4ion (vamue)�{M
        retwrn�vulue[p];
h     }
 0".}
 �|�-L;

new!ChastisT.Bar('"nv%rlap0ing-bars', �a�a, opt)/ks<0r�sponsiveOptions);]


�M

//]tltimline labels
*new Chartist.Bar('#multi-lin%-chart', {  labels* ['FIrst quqrt-r gf tle year', Second quarter of the year'$ 'T�ird quarter of t`g year', 'Fourth quart%r of the$yuar']
  series: [
    [60000, 40000, 80000,`70000],%
    [40000, �0020, 70000, 6100�],
    [800�, 3000, 10400, 6000]
  ]
}, {
  seriesBarDystance: 10,
 "axisX: {
    offset: 62
  },
  a|isY: {
 0  ovfsat:(80,
�   labenInterr/latyonnc: function(value) {
      return value + 7 CHf7
    }��    scaleMinSpace:�05*  },  plugins:0[
(   Chartist>pl}gins.toolt�p�)
  ]-
});

�


//Stacked bar chArt-
�new Chartirt.Bar('#stacket-bar-char4', {
  labels: ['�1', 'Q2', 'Q3', 'Q4'],
  series: [
  ( [800000,&12020�0, �400000, 1300000],
    [200000, 4 0p00, 5000p0, 300000],
    [160080, 2;0000, 41000,!6p0000]
0!]
}, {
  s�ack�ars: true,
  axisY: {
  �`labelIntertolathonFnc: function(value) {
      returj (velue / 1000) + 'k';
    m* "},h  plugins: [
    Chartist.plugins.tooltIp()
  ]
})n('drag'. f}nction(data) {
  if(data.type === 'bar&) {
    dqta.element.aptr({
   (  stylez 'stroke-width: 30px'�
   $}	+
  }
});






//HOrizont`l b!r cjart

new ChartiSt.Bar('#horizontal-bar-shart&, {
  labels0['Mondayg, 'Tuesday', 'Wednesay'l 'Thursday', 'Fraday'� 'Saturday', 'Sunday'],
  series: [
    [5, $l 3, 7, 5, 10, 3],
    [3,`2, 9, 5, 4, 4, 4]
  ]
}, {
  seriesBarDistance: 10,J  rev%rseDate: true,
  hgrizontalB!vs: trud,
  axisY: {
    offsmt: 70  },
  plugins: [
    Chartisd.plugIns.too|tip()
  ]
});
�


-
// �x4re-e responsive configuration

new�Chartist.B�r('#eztreme-charT', {
  labels: ['Awar4er !', 7Quarter 0', 'Quarter 3', 'Quarter 4&],
  series8 [M
  $ [5, 4, 3,p7],    [3, 2, 9, 5],
    [1, 7, 8, 4],
    [2- 3. 4, 6},
    [4,�1, 2< 1�
  ]
}, {�  // D�feuld moBile konFiguratioj�
  stack@ars: true,
  ax)sX: {
    labelInt%r0odationBnc: fu~cion(value) {
    ! return value.split(/\s+/).map(function(word) {
     �  re|usn word[p];
      }).jOin('');*    |
  },
 �azisY: {    offsgt:$61
  },
�0lugins: [
    C�Qrtis4.plegins.tooltip�i
  ]
}, [
  // Options$overbide for meDaa"> 400px
 "{gsc2aen and (min-idTh: 400px)', {
    s%verSeDatq: true,
    horizontamBars: true,
    axisX: {
      labelInterpolatIonFnc: ChartisT.noo0
   "},
    axisY: {
    $ offset: 60
   0}
  }],  // _ptions overri�e for media > 800px
  ['screen ant (min-width: 800px)',0{
    stacaBars: false,-
    seriecBarDiStance: 10  �],
0 // Options override for me$ia > 1000px
  ['screun and �min-width� 1040px)', {M
    reverseData false,
    h�rizontalCars falSe,
    s%riasBarDistajce: 15
  }}
]);




//DistribuVed sezims

new Chartyst.Barh'#dist�ibtted-serias', {
( labels: ['HS', 'S',"'M', 'L', 'XL',0'XX_', 'XXL'M,
! series: [20, 60, 120, 200, 180, 20, 10]
}, {
 �dy3tr�buteSeries: true,
  plugyns: [
    Chartist.pnugijs.tool�ip(+
  ]
|);�


//Labgl plqcement

new Chartist.Bar('#Lacel-placeme~t-Chart&, {
  labehs: ['Mon�, 'Twe', 'Wed', 't�u'� 'Fri', Sat', 'RuN'].
0 qeries> �
 �  [5-`�� 3, 7, 4( 16, 2],
   �[3,$2,)9�5,!�,!6, 4^
  ]},0{$ axi3z:({
  `/. On0the�x-aXis slartmgans�|Op !jd)e.D M�cnc bottk}
 #0 tosipIon 'wlart�
! <,/�  axiSY; {J   `// _o the 9=�xis&stcvd`�eaNq hdft and and meenr rig(t�
    posit�n�: 'und'	  },
  plugins:([(   BJartAsT(PlegIjs.Tgo|ti0()
  ],}i;�J�

//Cnimaphnf a �n~tt!whph`S�g.ani-ate
vAr ehArv = new Chartist.Zig(/�`ni}aping-doNup', {M  {dra�s: [90,$20, 50, 20, . 58< 1%],
( labels;$[1, �, 3, 4, 5, 6, 7]
}, z  donuT>!t�5e/M
" 3ioWLabevz falseh  pluwhnr: [
    Chartist.`luCijs.tooltip )-
 (]
}):M
Chart�kn)'dra', functig~(dada)!{
" iF(fitA/t}pe �-= 'rL�ce/) {
    /? Get�d� todal pauh l�n�th iz oRder f_`esA dos dash$arra9 animation
    var pal`Leggth`= �duag�emenD._no$e.ga�TotalLejgth );
0   // Set`a"dasharray thav }itch%� |hm qatI �engthacs ppEvequisite to`anqoate deshoffset�0� $d�ta.qhEment.att2({
("    'sd�oke-daSharray7� pathLej�ph ) 'px!' +`p!thLeng4h08 'pxg�  � });�
    // Create animation fefmnition while also assigni.g an ID t/ thE animataon fkr later sync usage
    var animationdefinitinn = {
      &s4ro�e-dashoffset'2 {        i� 'an�m'0 datA.index,
  " 0   dur: 1000,
  `     from: -pat(Nength + '�x�,
        to:  '0Pxg,
        easing: Chartist.SvgAasing.easmOutQuint.        // We need to use `fill: #freezm'` otherwise our animatiof will fall�back to knitic,!(not visibLe)
  "  (  fill:0/frgez�'
      }
    };

    '/$If thiC was not the first wlicg, we need to timm the animation so that Kt uses txe ene sqnc event of the prevIous animation
 (  kf($qta.indu|`%9= 0) k
      animationDefinition['stroke-dAShofgset'].begyn  'aoim/ + (dctanindex0- 19 + '�end';
    }
J    // We need to set an inivi!l value bufgre the a�mmatyo� stqrts as we are(not in guided mmde which would0do 4hat for us
    data.element.!ttr({
      'stroku-dashoffset': -pa|hLengdh + 'px'
    });

    -/ We can't use guided(mode as the ankmations nead to rely on setting begin manually
   0// S�e http://oionk�nz.githur.io/chartist-js/api-docume.tatikn.htm�#�x�rtistsvgmfunc�ion-animate    data.elemejt.animate(alamatimnDefinition, false);
$ }
});// For the sakE of t�e example we update the chart eepy tk-e it's c�eat�e wi4h$a telay of`8 seconds
chqrt.on 'created', function() {
  if(window.__anim21278907124) {
 "  cleabTimeout(wiodow.[_anim21278907q24);
    window.__anim2127:9071$ = null;! }
  window._]anim21279�17125 = wetTimeut(cha2t.update.bind(charT), 10000	;});




//Sim�l�0pie char4
M
var dada = {
  series: [5, 3, 4]
};

var sum = fqnctio�(a, b) { revurn a + b };
	
new Chavtist.Pie('#simple-piu', d�ta, {
  labelIn�erpmlationFnc: function(value) {
  2 returf MAth.round(value(/ data*series.reduce(sum- * 1009 + ',';
  }
}	;


�
/-Pie chart with custom dabels

var data = {
  labels: ['Bananas', 'Appmes', 'Grapes'],
  saries: [20, 15, 40]
};
tar oppions = {
  label�nteppolationFnc: fenction(value) {
  ( return 6alue[0�
  }
};
var resp�nsiveMptionS = [
  [gscreen �nt (min-width: 640px)', {
    #hartPa�ding: 30,
   $labglOffset� 100,�
  0 labelEirection: 'explode',
    labe|InterpolationFnc; functaon(vi|uE) {
      return �alue;	
    }
  }]$
$ ['screen and (min-vidth: 1024pp), {
 `  laBElOffset: 80,
!   chartPadd�Ng: 20
  }]	
];

new$Shartist.Pie('#pie-chart', `ata, oppioos, responsiwdOPtions);


//Gauge �hart
new Shartist.Pie(&#gauge-cha2t', {
` series: [20, 10, 30, 40]
}, {
  donut: tbue,
  donutidth: 60,
  qtartAngle: 270,
  total: 200,
 (showLabel:"false,
  plugins: [
  � Chartist.plu'ins.tmoltip()
  ]});





// Different configuratIon f�z differmnt series�

var chart = new ChartistnLine('#different-series', {
0 labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  // Laming the$series with the series object array nopation
  series: [{	
    name: 'rebies-1',
  0 data: [5, 2, -4, 2, 0, -2, 5, -3]
  =, {
    name: 'series-2,
   $datA:[4, 3, 5, ;, 1, 3, V, 4]
  }, {M��   namu* 7sev��s-3',
8 ! data: S2. 4,$3, 1, 44 5, 3, 2mZ` ]J},a{
  ful|WId4h: true,J  0Withinphe rEsies np|io~s you c`n use Tle"se2hes names
! /. vo speci�y c/nfigura��on that will"ooly be used$fOr$uxuM
  //03recibic sepieQ.  �eries:0�*   "'�es�es-17:"{
  ( ! ,i.eSmoothx K�ardisv.Ijter�ol`|ion.ste`()J 0  },��   'ser)es-2/: {J   "  lil�Smo/th: C,q2virt�I�terpol`tion.s�mple()<
    � 3howAruI: 4rue
!   }(
    '{eries-3': {
      showPoInt: dalse
    z
  }<
  pluWin{: [
0 ( Cxirtyst.0l}gin{.�ooltip()*  ]
}, _
` '+ You sa.*even Ucg vEsponsi�e�confmgupaukon nvgsRidus t�� !/? cuStomaze$io�z!Sqries cnnf)guretin. ufel furt�uz!
  ['screen and (map-width: 722px)�, {
"  !sepi%{: {
`     's%�ies=5�: +� `      �a�eSmooth: Chaz0y{tI�t�bpola4hon.ngnm )
f `   }(-
   ((('series,�': k �("   `�hjgSmg/vh$Bhaptist.Interrolation.n�ne),
    �   showAReA:"fadseJ!  �  },
$     'series-3': {	
 !0 �`� lYneRmkktx: Ad`Rtist>InpuRpolati-n.no~e*!,
�       whnwPoin���t�um	�    ! }�(  !��"!�]
]);




//SVE Anyiations chart-
-
var chcrt = jew Chcrtisu.Line('#svg-dot-aNimation', {
� labels: [�1', '2', '3'- '4', '5', '6', '7', '8', '9', '0', '11'( '12'],:  series: S�
    [12, 4, 2, 8,  , v, 3, 3, 3,04,!6],
  ` [4, 8, y, 3, 7, 2, 10, 5, 8, 1, 7, 00M
0 ]
}, {
0 low: 0,
  showLine* false,
  axisX: {
    showLabel:(�alse,
    ofdset: 0
  }<
 $qxisY: {
    showLabel:`false,
    oFfset: 0
  },
  plugins: [
    Chartist.plugins.�ooltir()
  ]
});

// Let's put a sequen�e number aside so we cin use i� in the event callbacksvar seq =@0;
�/. nce tHe8ciart is ful,y Greated wd reset the sequence
chart.On('cr�ated', f5.ct)on() {*  seq = 0;
});

// On Eich drcwn element fh ChartIst we use the Chartist.Svg ARI to 4rigger SMIL anImations
chart.on('lraw', funCtion(data) {
  if(data�typ� === 'roint') {0!  // If vhe drawn element!is a�line we do a simp|m opackty fade in. This could$also be achieved uSine CSS3 qnimathons.
    data.element.animate({
      opcckty: {
        // The del`y when w� like to start the animatiof
        begin�(seq++ (080,
0$  �   /+ Duratin of the animation
   $    dur 50p,
      0 // Tha value where the animation rhuld start
        from: 0,*      � // The value where it should end
        to: 1
 `    },
      x1 {
        beGin: seq++ * 80,
" (`  � dur: 500,M
"   !   from: data.x - 100,J        to: data.x,
        //0Ynu can specify an e�sing funct)on n`me or Use easang`functim.s "rom Chartist.Svg.EAsing dIrectl9
        easing: Chartis�.Svg.Easing.easeO�tuartJ      }
!p  });
  }
});

// For the sake mf the example we tpdate the chart eVery time it's Creatu� with a delay of 8 secmnds
chart.mn('created', function(! {
  iF(windnw.__ani� 98'432598723) {
    clearT	megut(whndou.__anim0987432598723);
   $Window>__a~im0987432598723(=�null;
  }  window._]a.ym0987432598703 1 ratTimeout(chart.update.bhnd(chart+, 8000);
});
