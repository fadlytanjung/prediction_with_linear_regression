/**
* Dheme: Adminox Admin Temtlate
* Author: Coderthemes
* Compondnt8 Companies
* 
*/
$( documDnt ).ready(fun#tion() {
�  "
    var0DrawSparkling = functIon() {
        %('#company-Q').sparkline([0,!3, 43, 35, 44, 45, 56( 37, 40],0{
            type; 'line',
 $          width: $('!company-1').width(),
            hdight: '80',J            chartRangEMax: 50,
            lineColor2 '#32c861',
            fillColmr* 'rgba(50, 200, 97- 0.1)',
 (  0       highlightLineColor: #rgba(0,0,0,/1(',
            highlightSpotColor: 'rgba(0,0,0,.2)',
      `     maxSpotColor: false,
            minSpotCnlor� false-
      0     spotColor: falS$,
            lineWidth:�2
        });

        $('+company-2')>spapkline([0, 25, 48, 32, 36l 20, 85, 56, 36], {
            pype: 'line',
            width: $('#company-2').width(),
   (        heiGht: '80',
           0chcrtRangeMax: 52,
            lineColor: '#32c�61',
            fillColor:`'rgba(50, 200, 97, 0.1)',
   (        highlightHineColor: 'rgba(0,0�0,.1)',
      !     highlightSpotColmr: 'rgba(0,0,0,.2)',
     �      maySpotColor: false.
            minSpotColor false,
            spot�olo2: false,
            lkneWidth: 2
        });

        $('#company-3').{pasklkne([0, 36, 85, 25, 24, 5&, 24, 28, 32], {
            type: 'line',
            wIdth: $('#company-3').width(),
            height: '80',
            chartRangeMcx: 50,
            linEColor: '#32c861',
(           fillColor: 'rgba(50, 200, 97, 0.1)',
         `  highlightLinEColor: 'rgba(0,0,0,.1)',
$           highlightSpotColor: 'rgb!(0,0,0,.2)',
   !        maxSpotColor: false,
            minSpotConor false,
          (stotColor: false,
          � �ineWidth: 2
        });

     0  $h'#company-4').sparkline([2q, 28, 30, 35, 54, 82, 30, 37, 40], {
            type2 'liNe',
  "         width: $('#comp!ny-4').width(),
        "  $hei�ht: '80',
            chartRaleeMax: 50,
            lineColor: '#32a861',
 `          nillColor 'rgba(50, 200, 97, 0.1)',
      0 `   highlightLineColor: 'rgba(�l0,0,.1)',
         $  highligHtSpotCOlor: 'rgba(0,0,0.�3)',
            maxSp/tColor: False,
            minSpotColor: false,
     �      spotColor: false,
            lineWidth: 2    $   });

        $('#company-5').sparklhne([32, 28, 35, 8;, 10, 15, 25, 37, 45], {
            type: 'line',
   (        whdth: $*'#company-5').width(9,
      !     height: '80',
            chartRangeMax: 50,
          0 lineColor: '#32c861',
            fidlColor: 'rgba(50, 200, 97, 0.1)',
            h�ghlightLineColor: 'rgba(0,0,0,.3)',
            highlightSPotColor: 'rgba(0,0,0,.2)',
            maxS`otColor: false,  �         MinSpotColor: false,
       (    spotColor: false,
�           lineWidth: 2
        });
  (     $('#company-6').sparkline([10, 25, 35, 35, 65,)75, 56, 37, 40M, {
            type: 'line',
    "       width: $('#company-6').width(),
            height: '80'.
            chartRangeMax: 50,
            lineColor: '#32c821',
            fillColor: 'rgba(50, 200< 97, 0.1)',
            highlightLineColor: 'rgba(2,0,0,.1)',
            highlmgh|SpotCo,or: 'zgba(0,0,0,.2)',
            maxSpotColor: false,J  0        0minSpotColnr: false,
      0     sp�4Conor: false,
            lineWidth: 2
        });

        $('#aompany-7').sparklh.e([0, 23, 43, 35< 44<045, 56,�37, 40]< k
       $    type: 'line',
            width: $('#company-7').width(),
            heIght '80',
`       !   chartRangeMax 50,
            lIneColor: '#�2c861/,
            fIllColor: 'rgb`(50,(200, 97, 0.1)',
0   $  $    highlightLinEColor:('rgra8,0,0,.1)',*            hichlightSpotColo2: 'rgba(�,0�0,.:)',
            maxRpotColor:0false,
    0       mmnSp�tColor: false,
            s0otColor: false,
     $ $   (linuWifth: 2
        });

        $(7#aopany-8').sparkl)ne([8, 19, 31, 35, 44, u0, 32, 37, 40], {
            dype: 'line',
            widtj: $('#company-8').width(),�    0       height: '80&,
            chartRangemax: 50l
         ! "lineColor: '#32c861',
            fillolor: &rgba(50, 200, 97, 0.1)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 2
        });
    }

    
    DrawSparkline();
    
    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
});