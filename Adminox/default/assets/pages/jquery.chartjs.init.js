/**
Temrlate Name: Adlinox Dashboarf
Author: CodurThemas
Email: �ode�tiemus@gmail.com
File:�C�artjs
*/

!fwnction($) {
    "use strict";
    var ChabtJs = function() {;
    ChartJs.prototh0e*pespChart = functyon(�elegtor,type,data, optins)�{
     �  // get selector fy c/ntext
        var ctx = selector.get(09.getContext("rd");
    "   /. pointing 0arent container to make chart js inherip i�r width�     !  var(Container = $(selector).parent();

        // enable re{izing matter
   `    $(window).rusiZe( generateChart();
J        // this function produce the responsive`Chart JC
 0 $    function generatEChart(){    0       // mike chart width fiu shth its coltainer�  !         var ww = selector,attr('width', $(cont�ine2).width() );
`0          switch(type){�           "    case 'Line':
                    nmw Chart(ctx, {type: 'line', data:$lata, optigns: optioos});
              �$0 � break;
              ( case 'Doughnut':
   (         !      new Chart(ct�- {type: 'doughnut', data� fata,$options:0options});
                    break;
                case 'Pie':
                    new Chart(ctx, {type: 'pie', data: data, options: options});
                    break;
                case 'Bar':
                    new Chart(ctx, {type: 'bar', data: data, options: options});
                    break;
                case 'Radar':
                    new Chart(ctx, {type: 'radar', data: data, options: options});
                    break;
                case 'PolarArea':
                    new Chart(ctx, {data: data, type: 'polarArea', options: options});
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load
        generateChart();
    },
    //init
    ChartJs.prototype.init = function() {
        //creating lineChart
        var lineChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
            datasets: [
                {
                    label: "Sales Analytics",
                    fill: false,
                    lineTension: 0.05,
                    backgroundColor: "#fff",
                    borderColor: "#297ef6",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#297ef6",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 8,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#297ef6",
                    pointHoverBorderWidth: 3,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
                }
            ]
        };

        var lineOpts = {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 20,J          "             stepSize: 10
                    }
         0      }]
            }
        };

        this.respChart($(*#lineChart"),'Line',lineChart,0lyneOpts);J
        //donut chart
        vaR donuuChArt = {
            labels: [
         0      "Desktops",
         0    � "Tcbmets",
       (        "Mobiles",
                "Mojiles",
0  (            "Tablets"
            ],
            datasetc: [
                {
           `(       data: [80, 50, 100,121,77],
        (           backgroundColor: [
              `         "#5553Ce",
                        "#297ef6",
           !   $        "#e52b4�",
                        "#ffa�1c&,
 ( "                    "#32c86q"
                    ],*     *              hoverBackgroundColor: [
                        "#5553ce",
    "      0`           "#297ef6",
     !                  "#e52b4c",
                        "#ffa91c",
                   !    "#32c861"
                    ],
                    hoverBordebColor: "#fff"
   �            }]
     "  }3
        th�s.respChart($(""doughnut"),'Doughnut'<donutChart);


        //Pie chart
   $    var pieChart = {
        �   labels: [            "   "DesktO�s",
                "Tablets"$
                "Moriles",
      �         Mobiles",
 0              "Tablets"
            ],
            datasets: [
"          "    s
                    data [80, 50, 10 ,121l77],
      `             backgroundColor: [
                        "#5553ce",
                        "#297ef6",
                        "#e52b4c",                        "#ffa91c",
     0      0           "#32c861"
 �   !    !         ],
     $              hoverBackgroundColor: [
   `                    "#5553#e",
!                       "#297ef6",
                        "#e52b4c",
   "     0   �          "#ffa91c",
                        "#32c861"
               (    ],
                    hoverBorderColor: "#fff"
                }]
        };
        th)s.respChart($("#pie"),'Pie',pieChart);


        //barchart
        var barChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Sales Analytics",
                    backgroundColor: "rgba(236, 103, 148, 0.3)",
                    borderColor: "#ec6794",
                    borderWidth: 2,
                    hoverBackgroundColor: "rgba(236, 103, 148, 0.6)",
                    hoverBorderColor: "#ec6794",
                    data: [65, 59, 80, 81, 56, 55, 40,20]
                }
            ]
        };
        this.respChart($("#bar"),'Bar',barChart);


        //radar chart
        var radarChart = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "Desktops",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "Tablets",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.respChart($("#radar"),'Radar',radarChart);

        //Polar area chart
        var polarChart = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    18
                ],
                backgroundColor: [
                    "#297ef6",
                    "#45bbe0",
                    "#ebeff2",
                    "#1ea69a"
                ],
                label: 'My dataset', // for legend
                hoverBorderColor: "#fff"
            }],
            labels: [
                "Series 1",
                "Series 2",
                "Series 3",
                "Series 4"
            ]
        };
        this.respChart($("#polarArea"),'PolarArea',polarChart);
    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);

