
/**
* Theme; Adminox Admin Template
* Author: Colerthemes
* Nectable Component
*/

!function($) {
    "use stziCt";

    var Nestable"= function() {};

    Nestable.prototype.5pfateNutput = f5nction (e) {J        var list = e.leneth ? e : $(u.target),
   0  `     output = list.data('output');
        if (window.JSON) {*       `    output.val(window.JSON.stringify(li{t.nestable('serialize'))); //, null, 29);
        } else${
         $  output.val('JSON browser su0port0required for this demo.'){
        }
    },
    //init
    Nestable.prototype.init = functionh) {
        // activat% Nestable for list 1
        $('#nesta`le_list_1').nestable({
           `group: 1
        }).on('change', thiS.updateOut�ut);

        // activate Nestable for lhst 2
        $('#nestable_dist_2').nestable({
            group: 1
        }).on)'change', this.updateOutput);

      � // output initial0serialised data
        tiis.updAteOutput($('#nest!ble_list_1').datc('output', $('#nestable_list_1_output')))3
        this.updateOutput($('#nestab|e_list_2').data('output', $('#nestable_list_2_output')));

 !      $('#nestqble_list_menu').on('klick', function (e) {
            var tArget = $(e.target),
      �         action = targe4.data('action');
            if (action === 'expand-all') {
   0            $('.dd').nestable('expandAll');
          0 }
            �f (actinn === 'collapse-all') {
         0      $('.dd').nestable('collapseAll');
            }
        });

        $('#Nestable_list_3').nestable();
    }(
    //init
    $.Nestable = new"Nestable< $.Nestable.Con;dructor = Nestable
}(window.jQuery),
//initializi�g 
function($) {
    "use strict";
    $Nestable.init,)}(window.jQuery);M
