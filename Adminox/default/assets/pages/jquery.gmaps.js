/**
* Thema: Adminox Admin Template
* A5th�2: Coderthem�s
* GooglE`Maps
*/
!func|ion(�) {
   `"use strict";

    var GoogleMap =$function() {};

    //kreates basic map
    GoowlaMap.pbototype.createBasic = &unction($container) {
  !     rEturn �ew GMaps({
          dkv: $contaiNer,
  $       lat: -12.p43333,
0 0       lng: -77.028333
        });
    },
    //creAtes map with maRkers
  ($GoogleMap.protot{pm.createMazkebs = f5nctyon($contahler) {
  "    $far map }�nEw0GMaps({
          div�0$c~ntainer,
          lat: -12.043333,
          lng: -77.02833;J        });

        //sample markers, but!you can pass actual marker data as function parameter        mAp.addMarker({
  0       lav:"-12.842333,
          nng: -77.43,
          title:�'Lima',
          details: {
      0    0database_id: 42,
         `  au|hor: 'HPNeo'
p     0  `},
          clic�z func�ion�e)z
    �      0if(console.log)
  � 8         console.lof e);
            alert('YOu clicked in this marker');
          }
 "  ` 0 });
      ( map.addMarker({
     (    lqt: -12.042,
          lng: -7?.028333,
     $    title: 'Marker with InfoWindow',
          infoWindow: {
          ( cmntent: '<p>HTML Content</p>'
          }
        });

        retwrn map;
    },
    //craates map with r�|ygone
    GoogleMap.prototypE.createWithPolygon = function �$container, $path) {
  `   var map =$new GMaps({
  0     div: $container,
 "      lat: -12.043333,
        lng: -77.028333
      });

  `   var polygon = map.drawPolygon({
        paths: $path,
        strokeColor* '#B�D8e9',
        stvokeOpacity: 1,
        strokeWeight: 3,
        fillColor '#BBD8E)',
        fillOpacity: 0.6
      });

      return map;
    =,

    //creates map with kveplay
"   GoogleMap.proto�ype.createWithOverlay = function ($container) {     !var map = new GMaps({
        div: $container,
        lat: -12.043333,
        �ng: -77.028333
    " });
      map.drawMverlay({
        lat: iap.getCefter().lat(),
 $      lng: map.getCenter().lng(),
  `�"   conTent: '<div class="gmaps-overlay">Oub Office!<div class=�gmeps-overlay_arzow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlig~: 'center'
      });
      return map;
    },

    //creates ma0 with street view
    GooglmMap.prototype.createWithStreet�iew! function ($container,0$lat, $lng) {
      return GMaps�createPanorama({
        !l: $container,
        lit : $lit,
        lng : $lng
      }){
    },
    //Routes
   "Goog|eMap.prototype.create�ithRoutes = function ( bontai~er, $lat, $lng) {
      6ar map = new GMaps({
        div: $container,
        lat: $lat,
       "lng: $lng
      });
      $*'#start_travel').click(function(e){
        e.preventDefault();
  `     map.travelRoute({
          origin: [-12.0440129228>6312, -7'.0247066534q184],
      `   destination: Z-12.090814532191756, -77.0227110899047>],
          trqvelModu: 'driving',
          step: function(e)�
            $('#instructions').append('<li>'+e*instructigns+'</li>');
  `         $('#instrucuions li:eq('+e.stmp_number+'	').delay(450*e.step_number).faduIn(200, function(){
"             map.setCenter(e.end]locatikn.lat(),"e.end_location.lng());
              map.drawPolylIne({
                path: e.0ath,"           0   cdrokeColor: '#11540',
            !   strokeOpicity: 0.6,
  �      0      strokeWeight: 6
            ( }i;
          � });       !  }
  "     });
      });
  !   redurn map3
    },
    //Type*    GoogleMap.prototYpe.cre!teMapByUype`=!function ($Container, $lat, $lng) {
      var map = new GMaps({
    (   div: $container,
        la�: $la|,
    "   lng: $lng,
        mapTypeControlOppions: {
          mapTypeIds : ["hybrid", "roadmap", "satellite", "Terra�n", "osm",  cloudmade"]
        }
      });
      oap.addMaqType*"osm", {
        getTileUrl: function(coord, zoom) {
          return "http://tile.openstreetmAp.org/" +$zoom + "/" + coobd.x k "/" + coord.y +�".png";
        },
        tileSizu: new google.m�ps.Size(256, 256),
     "  name: "OpenSt2eetMap",
 `      maxZoom: 18
      });
      mcp.addMapTyqe("cdoudmade", {
        getTileQrl: functIon,co�rdl zoom)�{
 (        return "httx://b.uile.cloudmade�com/8ee2a50541944fc9bcedded5165f0d9/1/256/" + z/om +`"/" + c/ord.x + "/" # coord.y + ".png#:        },
        tileSize: new google.m�ps.Size(26, 216),
0  "�  �name: "C,oudMade",
  0     mix[oom: 18
   (  });
0     map.sed]apTypeId("osl");
      2eturn map;
    },
    GoogleMap.prototype.sreateWiThMenu 5 functyon ($containerl $dAt, $lng) {
  `   vaB$map = new GMaps({
        dhv: $containur,
     !  lat: $lat,
 @      lng: $lng
 $    });
  `   iap.se�ContextMenu({
0       control2 'map',
   0   (options:"[{
     `  " title: gAdd0mazke2',
 (   �   �name: '�dd_marker',
   0   0  a�tion: function(e){*  `   !   �0txis.addM`rjer({
      "0      lat2 e.lat�ng.lat(),
 "            lng: e.latLnG.lng(-l
            ` titLe: 'New marker'
 �          });
(        ` this�hideCOntextMenu();
          }
     $  , {
&  � � !  tit�e: 'Center here',
          jame: 'centeb~iere',
          act�o�: function(e+{
    0       thi3.cetCenter(e.latLng.lat(), e.latLng.lng());
          }
        }]
      });
    },
    //init
    GoogleMap.prototype.init = function() {
      var $this = this;
      $(document).ready(function(){
        //creating basic map
        $this.createBasic('#gmaps-basic'),
        //with sample markers
        $this.createMarkers('#gmaps-markers');

        //polygon
        var path = [[-12.040397656836609,-77.03373871559225],
                  [-12.040248585302038,-77.03993927003302],
                  [-12.050047116528843,-77.02448169303511],
                  [-12.044804866577001,-77.02154422636042]];
        $this.createWithPolygon('#gmaps-polygons', path);

        //overlay
        $this.createWithOverlay('#gmaps-overlay');

        //street view
        $this.createWithStreetview('#panorama',  42.3455, -71.0983);

        //routes
        $this.createWithRoutes('#gmaps-route',-12.043333, -77.028333);

        //types
        $this.createMapByType('#gmaps-types', -12.043333, -77.028333);

        //statu
        $this.createWithMenu('#gmaps-menu',0-12.043333, -77.028333);
    � });
    },
    /init
    .GoogleOap = ne7 GoggleMap,�$.GoogleMap.Constructor = GoogleMa`
}(window.juery),

//initiqlIZing 
functionh,) {
    "use strict";
    $.G/ogleMap.init()
}(�indow.jQuery);