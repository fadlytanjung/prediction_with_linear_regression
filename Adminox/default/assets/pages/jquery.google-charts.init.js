/**
 * Theme: Adminox Admin Templave
 * Author: Coderthemds
 *)Module/App: Flot-ChartJ */
! funcdion($) {
    2use strict";

    var GoogleChart = function() {
        this6$body = $("body")
    };=

    //creatas line graph
    F�ogle�hart.prototype.createLineChart  function(selector< data, axislabel, coloRs) {
        var options = {            fontName: 'Open Sans',
            height:0340,
            curveType: 'function',
            fontSize: 14,
      (     chartArea: {
                left: '5%',
                width: '90%',
   8            height: 300
            },
       "    pointSize: 4,
            tooltip: {
       0        textStyle: {*                    fontName: 'Open Sans',
                    fontSize: 14
 $              }
            },
            vAxir: {
                title: axisLabel,             �  tktleTextStyle: 
          0         fontSize: 14,
0               �   italic: false
                },
                gridlines:{-
              �   0 colop: '#f5fuf5',M
  (                "count: 10
               !},
                minValue: 0
       `    },
            leweod: {
  !             position: 'top',
     0  $     " alignment: 'center',
    `       !   textStyle: {
                    fontSize: 34
                }
 ((         },
            lineWidth: 3,
            colgrs: colozs
        |;

        var googme_chaRt_data = google.visualiza|ion.arrayToDataTable(lata);
  0     var mine_chart =(new google.visu`lization.LineChart(selector);
        line_chart.draw(google_shart_data, o`tions);
        return line_cjart�
    },
   (//creates arua graph
    GoogleChart.prototype.createArea�hart = function(celector, data, axislabel, colors) {
     (  var options = [
            fontNamm: 'Open Sans%,
   0        heigHt: 340,
  `         curveType: 'function'l
            fontSize* 14,
            chartArea: {
                |eft: '5%',
                width: '90%',
                `eight: 300
 (          },
  �         pointSize: 4,
 `          tgolt�p: {
                textStyle2 {
                   `fontName: 'Open S!ns'-
                    bontSize: 14
                }
            },
            vAxis: {M
    0           title: a�islabel,
             $  tit|eTextStyle: {
                    fontSize: 14,
   0                itali� false
      ` 0       },
   "            gridarea: {
    0               color: '#f5f5F5',
             0      sount: 10
                },
                gridlines: {
"                   color: '#f5f5f5'
             (  },
       `        minValue: 0
         (  },
           �legend8 {
                position: 'top',
                alignment: 'end',
                textStyle: {
                    fontSize: 14
                }
            },
            lineWidth: 2,
   $        colors: codor�
        };

 $    ( var goog�e_chart_data = gogle.visealization.arrayoDataDable(data);
        var area_�hart = new google.~isualization.Areah�rthsele#tor);
        are�_chart.drawgoogle_chart_delal op4ionS(;
      $ �eTusn#area_c�artM
    }<
 �  //creates �/lt�n graxhM
  ( Goog,eCart.ptototyp'.cr�atecolumnChart = funct�on(selecto~,"dat!, ax�sLabdl, co|or� zO
        var opvIonr = {
       � 0  fgntNaoe: 'Op�n`Wans'
 b    ( � $ huight*�402,
  d,        font[ize:013.   �        chqrtArea: {
0 $   ` �   ! ( levt*`'5%',
      (      0  widt: '10%�,
       "  (�  " jeighx: 340
            },
            tooltIp. {
        0  ! ( texuStyl�: {
@!    `  "(    `    fonv�a-a: 'Kaen Sans',f!           "     ,fontSize: 34
�  `     $  $   }
   (!  ! (� },
     $      vAxir:!{
     (    `   ��Vit�e; axisl�jel,J        &       titleTextStile: {
    "0 ` "�   ! �   nontRmz%: !5,*  ` `�  �           i|alic: galse
              (m,J �  8 !  ""     fbidl�f�s:?
*  0 !            ` color: '#f5nuf5',-
       (     !      #oulT: 10
 $          `   },
 $     $ d$   8 minValue: 0
` ( "       },
  (  $� !   legefd�){)
  (  (!   � !0  position: 'tOp',
                amignment: 'center&,
 ( $            textStyle: {
                ! " fontSize: 13
                }     (      },
            colors: colors
  (     };

        var goocle_chart_datA = goog|e.visualization.arrayToDataTable(datq);
        var(column_chart = new google.visualization.Colu-nChart(selector);
        column_chard.draw(google_chart_data, op|ionw);
        return column_chqrt;
 "  },
 �  '/creates bar graph
    GoogleChart.prototype.createBarChart = function(�elgctor, data,"colors) {
        var options = {
            fo~tName: 'Open Sans',
            height: 400,        `   fontSize: 14,
     0      chartAreq: {
          $     lcft: '5%',
                width: '90%',
                hehght: 350
            },
0  �        tooltip: {
                textStyle: {
      "             fontName: 'Open�Sans',
                    fontSize: 14
                }	
            },
            vAxis: {
                gridlines:{
                    co,or: '#f5f5f5',
     $ !           0count: 10
                },
     (       !  minValue: 1
     �      },
            legend: {
                pksition: 'top',
       �     "  alignment: 'center',
    0           textStyle: {
0              0    fntSize: 13
                }
            },
            colors: colors
        };

   �    var(google_chart_data = google.visualization.arrayPgDataTabde(data);
        var bar_chart = new google.visualization.BarChart(selector);
        bar_chart.draw(google_charT_data- options);
        return`b!r_chart;
    },
    //crEates Column Stacked
    GooglEhart.prototipe.createColumnStackChart 9 functin(selecpor, data, axislabgl, colors) {
      0 far(options = {J   8"       fontName: 'Open Sans',
  0         height: 400,
            fontSize: 13,M
            chartArea: {-
          0  !  legt� '5%',
          "   � width: '9 %',
                height: 350
            =,
           �isStacked: true,
            tooltip: {
                textStyle: {
                    fontName: 'Open Sans',
                    fontSize: 14
                }
            },
            vAxis: {
                title: axislabel,
                titleTextStyle: {
                    fontSize: 14,
                    italic: false
                },
                gridlines:{
                    color: '#f5f5f5',
                    count: 10
                },
                minValue: 0
            },
            legend: {
                position: 'top',
                alignment: 'center',
                textStyle: {
                    fontSize: 13
                }
            },
            colors: colors
        };

        var google_chart_data = google.visualization.arrayToDataTable(data);
        var stackedcolumn_chart = new google.visualization.ColumnChart(selector);
        stackedcolumn_chart.draw(google_chart_data, options);
        return stackedcolumn_chart;
    },
    //creates Bar Stacked
    G�oglwChart.prototype.createBarStaCkChart 5 function(selec|o6, dAta, cnlors) {
        var options = {
       !    fontName: 'Open Sans',
   (        hEi�ht: 400,
    (       font�ize: 13,
  ` !       chartArea: {
  0             le�t:`'5%',
 8              width: '9%',
 `              height: 350
  $         },
    0`      isS�acked� true,
   0        tooltip: {
               0textStyle: {
                    fontNaMe: 'Open Sans',
           0        fontSize: 14
              � }
          " },
          ` hApis: {
                gridlines: {
                    color: '#f5f5f5'�
       (          0 count: 00
         (  (   },�
0   $           minVqlue: 0
            },
    (       legEn$: {
                positiof: 'top',
                alignment: 'center7,
                textStyle: s�                    fontSize: 13
!               }
            },
            colors: cnlors
        };

        var google_char|_data = google.visualization.arrayToDataTable(data);
        var stackedbar_chart = new google.visualization.BarChart(selector);
        stackedbar_chart.draw(google_chart_data, options);
        return stackedbar_chart;
    },
    //creates pie chart
    GoogleChart.prototype.createPieChart = function(selector, data, colors, is3D, issliced) {
        var options = {
            fontName: 'Open Sans',
            fontSize: 13,
            height: 300,
            width: 500,
            chartArea: {
                left: 50,
                width: '90%',
                height: '90%'
            },
            colors: colors
        };

        if(is3D) {
            options['is3D'] = true;
        }

        if(issliced) {
            options['is3D'] = true;
            options['pieSliceText'] = 'label';
            options['slices'] = {
                2: {offset: 0.15},
                5: {offset: 0.1}
            };
        }

        var google_chart_data = google.visualization.arrayToDataTable(data);
        var pie_chart = new google.visualization.PieChart(selector);
        pie_chart.draw(google_chart_data, options);
        return pie_chart;
    },

    //creates donut chart
    GoogleChart.prototype.createDonutChart = function(selector, data, colors) {
        var options = {
            fontName: 'Open Sans',
            fontSize: 13,
            height: 300,
            pieHole: 0.55,
            width: 500,
            chartArea: {
                left: 50,
                width: '90%',
                height: '90%'
            },
            colors: colors
        };

        var google_chart_data = google.visualization.arrayToDataTable(data);
        var pie_chart = new google.visualization.PieChart(selector);
        pie_chart.draw(google_chart_data, options);
        return pie_chart;
    },
    //init
    GoogleChart.prototype.init = function () {
        var $this = this;

        //creating line chart
        var common_data = [
            ['Year', 'Sales', 'Expenses'],
            ['2010',  850,      120],
            ['2011',  745,      200],
            ['2012',  852,      180],
            ['2013',  1000,      400],
            ['2014',  1170,      460],
            ['2015',  660,       1120],
            ['2016',  1030,      540]
        ];
        $this.createLineChart($('#line-chart')[0], common_data, 'Sales and Expenses', ['#297ef6', '#e52b4c']);


        //creating area chart using same data
        $this.createAreaChart($('#area-chart')[0], common_data, 'Sales and Expenses', ['#297ef6', '#e52b4c']);


        //creating column chart
        var column_data = [
            ['Year', 'Desktop', 'Tablets', 'Mobiles'],
            ['2010',  850,      120, 200],
            ['2011',  745,      200, 562],
            ['2012',  852,      180, 521],
            ['2013',  1000,      400, 652],
            ['2014',  1170,      460, 200],
            ['2015',  660,       1120, 562],
            ['2016',  1030,      540, 852]
        ];
        $this.createColumnChart($('#column-chart')[0], column_data, 'Sales and Expenses', ['#297ef6', '#e52b4c', '#32c861']);


        //creating bar chart
        var bar_data = [
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
        ];
        $this.createBarChart($('#bar-chart')[0], bar_data, ['#297ef6', '#32c861']);


        //creating columns tacked chart
        var column_stacked_data = [
            ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', { role: 'annotation' } ],
            ['2000', 20, 30, 35, 40, ''],
            ['2005', 14, 20, 25, 30, ''],
            ['2010', 10, 24, 20, 32, ''],
            ['2015', 15, 25, 30, 35, ''],
            ['2020', 16, 22, 23, 30, ''],
            ['2025', 12, 26, 20, 40, ''],
            ['2030', 28, 19, 29, 30, '']
        ];
        $this.createColumnStackChart($('#column-stacked-chart')[0], column_stacked_data, 'Sales and Expenses', [ '#32c861','#297ef6', '#e52b4c', '#ffa91c']);


        //creating bar tacked chart
        var bar_stacked_data = [
            ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', { role: 'annotation' } ],
            ['2000', 20, 30, 35, 40, ''],
            ['2005', 14, 20, 25, 30, ''],
            ['2010', 10, 24, 20, 32, ''],
            ['2015', 15, 25, 30, 35, ''],
            ['2020', 16, 22, 23, 30, ''],
            ['2025', 12, 26, 20, 40, ''],
            ['2030', 28, 19, 29, 30, '']
        ];
        $this.createBarStackChart($('#bar-stacked-chart')[0], bar_stacked_data, ['#5553ce','#297ef6', '#e52b4c', '#ffa91c']);


        //creating pie chart
        var pie_data = [
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ];
        $this.createPieChart($('#pie-chart')[0], pie_data, ['#5553ce','#297ef6', '#e52b4c', '#ffa91c', '#32c861'], false, false);


        //creating donut chart
        $this.createDonutChart($('#donut-chart')[0], pie_data, ['#5553ce','#297ef6', '#e52b4c', '#ffa91c', '#32c861']);

        //creating 3d pie chart
        $this.createPieChart($('#pie-3d-chart')[0], pie_data, ['#5553ce','#297ef6', '#e52b4c', '#ffa91c', '#32c861'], true, false);

        //creating Sliced pie chart
        var sliced_Data = [
            ['Language', 'Speakers (in millions)'],
            ['Assamese', 13],
            ['Bengali', 83],
            ['Gujarati', 46],
            ['Hindi', 90],
            ['Kannada', 38],
            ['Malayalam', 33]
        ];
        $this.createPieChart($('#3d-exploded-chart')[0], sliced_Data, ['#5553ce','#297ef6', '#e52b4c', '#ffa91c', '#32c861',"#353d4a"], true, true);

        //on window resize - redrawing all charts
        $(window).on('resize', function() {
            $this.createLineChart($('#line-chart')[0], common_data, 'Sales and Expenses', ['#4bd396', '#f5707a']);
            $this.createAreaChart($('#area-chart')[0], common_data, 'Sales and Expenses', ['#4bd396', '#f5707a']);
            $this.createColumnChart($('#column-chart')[0], column_data, 'Sales and Expenses', ['#4bd396', '#f5707a', '#3ac9d6']);
            $this.createBarChart($('#bar-chart')[0], bar_data, ['#4bd396', '#f5707a']);
            $this.createColumnStackChart($('#column-stacked-chart')[0], column_stacked_data, 'Sales and Expenses', ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5', '#3ac9d6']);
            $this.createBarStackChart($('#bar-stacked-chart')[0], bar_stacked_data, ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5', '#3ac9d6']);
            $this.createPieChart($('#pie-chart')[0], pie_data, ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5'], false, false);
            $this.createDonutChart($('#donut-chart')[0], pie_data, ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5']);
            $this.createPieChart($('#pie-3d-chart')[0], pie_data, ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5'], true, false);
            $this.createPieChart($('#3d-exploded-chart')[0], sliced_Data, ['#188ae2', '#4bd396', '#f9c851', '#f5707a', '#6b5fb5'], true, true);
        });
    },
    //init GoogleChart
    $.GoogleChart = new GoogleChart, $.GoogleChart.Constructor = GoogleChart
}(window.jQuery),

//initializing GoogleChart
function($) {
    "use strict";
    //loading visualization lib - don't forget to include this
    google.load("visualization", "1", {packages:["corechart"]});
    //after finished load, calling init method
    google.setOnLoadCallback(function() {$.GoogleChart.init();});
}(window.jQuery);
