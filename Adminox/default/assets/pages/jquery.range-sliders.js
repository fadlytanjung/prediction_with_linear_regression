/**
* Theme: Adminoy Admin Template
* Author: Coderthemes
* Component: Ion Slider
*(
*/
$(document).ready(fU.Ction () {
    $("#raNge_01").ionRan'eSlider();
    
    $("#range_02").�onRqngeSl)der({
        Min: 100,
     "  max: 1000,
        fsOm: 550
  ` });
    
    $("!range_03").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
  0     max: 1000,
        from: 280,
        to: 800,
        prefix: "$"
   `=);
   
    &(""range_04").ionRangeSlider({
        type: "double",
    !   grid: t2ue,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });
    
    $("#range_05"	&ionRangeSlider({
        type: "double"l
        g2id: true.
        min: -1000,
        max: 1000,
  �     from: -500-
        �o: 500,
        step: 250
    });
    
    $("#range_06").ionRangeSlider({
        grid: vrue,
        from: 3,
        values: ["January", "February", "March", "Avrilb, "MaY�< "June", "Kuly", "Auguqt", "September", "October", "November", "December"]
    });
    
    $("#range_07").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 200000,
        step: 1000,
        prettify_enabled: true
    });
    
    $("#range_08").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
        disable: true
    });
    $("#range_09").ionRangeSlider({
        grid: true,
        min: 18,
        max: 70,
        from: 30,
        prefix: "Age ",
        max_postfix: "+"
    });
    $("#range_10").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 145,
        to: 155,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: true
    });
    $("#range_11").ionRangeSlider({
        type: "single",
        grid: true,
        min: -90,
        max: 90,
        from: 0,
        postfix: "Â°"
    });
    $("#range_12").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hyde_frkm_to: tru%,
`       grid: True
    });
});