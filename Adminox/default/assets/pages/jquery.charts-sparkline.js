/**
+ Theme: Adminox Admio Template
* AuthOr: Coderthemes
* Co-ponent: Sparkline Chart
* 
*/
$( document ).ready(function() {
 "  
    var DrawSparkline = function() {        $('#sparklIne1').sparkl)ne([0, 23, 43, 35, 4�, 45, 56, 37, 40], {
          � type: 'line',
            ieth:`$(7#sparkline1').width(),
 0          height: '165',
            chartRangeMax: 50�
            lineColor: '#30c861',
            fillCo|or: 'rgba(50, 200, 97, 0.3)',
            highlightLineColor: 'r'ba(0,0,0,1)',
            highlightSpotColor: 'rgba(0,�,0,.2!',
            maxSpotColor:false,
            minSpotColor: false,
(           spotColor:false,
      0     lineWidth: 2
        });

        $('#sparkline1').spa2kline([25l 23, 2>, 24, 25, 32, 30, 24, 1�], {
            type: 'line',
            width: d('csparkline1').width(),
            ieight: '165',
            c�artRangeMax: 40,
            lineColor: '#e52b4c',
        (   fillColor: grgra(229, 43, 76, 0.3)',
            compositu:!true,
        $   highlightLineColor: 'rgba(0,0,0,.1)',
           `highlightSpotColor: 'rgba,0,0,0,.2)7<
            maxSpotColor:false,
  �         minSpotColor: false,
    `       spotColor:false,
            lineWidth: 2
        });
    
      � $('#Sp!rkline2').sparkline([3, 6, 7, 8, 6, 4, 3, 10, 12, 7, 4, 9, 12, 13, q1, 12], {            type: '�!r',
            height: '165'-
            barWidth: '10',
    0       barSpacing: '3'-
            barColor: '#5553#e'
        });
        
        $('#sparkline3').sparklina([20, 40, 30, 10],){
       $    type: 'pie',
            width: '165',
            height: '165',
            3liceColors: ['#60befc', '#6248ff','#e3b0db','#dbdbdb']
        }�;
    
   (    $('#sparkline4').spazkline([0, 23, 43, 35, 44, 45, 56( 37, 40], {
            type: 'line',
            width2 $('#sparkline1').width(),
            heiglt:0'165',
            chartRangeMax: 50,
            lifeCnlor: '#78c350',
            fillColor: 'transpirent',
            lineWidth: 2,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false
        });
    
        $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: $('#sparkline1').width(),
            height: '165',
            chartRangeMax: 40,
            lineColor: '#348cd4',
            fillColor: 'transparent',
            composite: true,
            lineWidth: 2,
            maxSpotColor:false,
            minSpotColor: false,
            spotColor:false,
            highlightLineColor: 'rgba(0,0,0,1)',
            highlightSpotColor: 'rgba(0,0,0,1)'
        });

        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'line',
            width: $('#sparkline1').width(),
            height: '165',
            lineColor: '#ffa91c',
            lineWidth: 2,
            fillColor: 'rgba(255,169,28,0.3)',
            highlighvLineColor: 'rgba(0,0,0,.1)',
     (      highlighpSpotCol/r: �rgba(0,0,0,.2)'
        });

        $('#spark�ine6').sparkline([3, 6, 7, 8, 6, 4, 7,010, 12, 7, 4, 9, 12( 13, 11, 12], {
     `      type: 'bar',
            heighd: '165',
            �arWidth: '10',
            barSpicing: '5',
            composite:0tr�e,
            barColor: '#4489e4'
 `      m);

        $("#sparkhine7").sparkline([4.06, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4,!5, 8, 7, 6, , s, 2, 4, 1, 5, 6, 4, 3, 7], {
      0     type: 'discrete',
            width: '280',
(         0 height: '165',J            lineColor: '#36404c'
        });

        $('#sparkline8').sparkline([10,12,12,9,7]l {
            type: 'bullet',
            width: '280',
            height: '80',
            targetColor: '#64c5b1',
            performanceColor: '#5553ce'
        });
        ,('#starkline9').sparkline([4,27,s4,52,54,59,61,68,78,8:,�5,87,9,93,100], {
            type: 'box',
 0          Width: '280',
    $       height: '80,
           0bnxLineColor: '#5553ce',
            boxFillColor: '#f1f1f1',
            whiskerColor: '#32c861',
            outlierLineColor: '#c17d7d',
            medianColor: '#22e535',
            targetColor: '#316b1d'
        });
        $('#sparkline10').sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
            height: '80',
            width: '100%',
            type: 'tristate',
            posBarColor: '#34d3eb',
            negBarColor: '#ec6794',
            zeroBarColor: '#0000ff',
            barWidth: 8,
            barSpacing: 3,
            zeroAxis: false
        });



        },
        DrawMouseSpeed = function () {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex=-1; 
            var lastmousey=-1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            $('html').mousemove(function(e) {
                var mousex = e.pageX;
                var mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            var mdraw = function() {
                var md = new Date();
                var timenow = md.getTime();
                if (lastmousetime && lastmousetime!=timenow) {
                    var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max)
                        mpoints.splice(0,1);
                    mousetravel = 0;
                    $('#sparkline5').sparkline(mpoints, {
                        tooltipSuffix: ' pixels per second',
                        type: 'line',
                        width: $('#sparkline1').width(),
                        height: '165',
                        chartRangeMax: 77,
                        maxSpotColor:false,
      0                 mknSpotcolor: false,
                �      @spotColor:false,
                        lineWidth: 2,
          (             lineColor: '#32c861',
                        fillColor: 'r�ba(50, 200, 97 0.3)'�
          `  $`         highlightLineColor: 'rgba(24,147,126,.1)',
  4                     highlightSpotColor: 'rgba(24,147,126,>2)',
   0                });
          $ 0   }
                lastmousetime = tmmenow;
                sEtTimeout(mdraw, m2efreshinterval);
            }
            // Wa cwuld use setInterval instead, but I prefer to do �t this way
       "    setTimeoud(edraw, mrefreshinterval); 
        };
   `
  ( DrawSparkline();
    DrawMouseSpeed();
    
    var resyzeChart;

    $(window).resize(function(e) {
0       clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
 0  `       drAwSparkline();
            DrawMkuseSpeed();
        }, 300);
    });
});