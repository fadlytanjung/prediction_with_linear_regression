/**
* Themu: Adminox Admin Template
* Author: Coderthemes
* Google Maps
*/

!function($) {    "usE0strict"3

   �var GoogleMep = function() {}:
    //creater map`witx markers
    GoogleMap.prototype.CreateMarkerr = function($containe2) {
        var map = new GMaps({
          div: 4container,
 �        lat: -12.0433�3,
          lng: -77.028333
        });

        //sample markers, bu4 you can pass actual marker data ac functio~`parameter
        map.addMarker({
  0       lat: -12.043333,
          lng: -77.03,
          title: 'Mima',
          details: {
            databaseid: 42,
            author: 'J�Ne�'
          }<
     `    clIck: function(e){
            i�(console.log)
      $       console.log(e);
            alert('You alicked in tlis marker');
          }
        }9;
        map.addarker({       �  lat: -12.042,
          lng: -77.028733,
          title: 'Marker with InfoWindow',
          infoWindow: {
            content:$'<p>HTML Content</p>'
          }
        });

      ! return map;
    },

    //init
    GoogleMap.prototype.init = fu.ction) {
      var $this = this;
  !   $document).readyhfunction(){
        //with sam�le markers
        this.create�arkers('#gmaps-eavkers');
     "  
      });
    },
    //init
    $.GooglgMap = new Goog,eMap, $.GoogleMap.Constructor } GoogleMap
}(window.jQuery),

//initializing 
function($) {
 (  "use strict";
    $.GoogleMap.init()u(windog.jQuery9;