/**
(* Theme: Adminnx Admin0Te}plateJ * Au4�or: Coderthemes
 * T9peahuad
 :/

M

$(documelt).ready,bunction)) {

  // the b`sycs
!!// ----------

  var subsprinfMatcher 9 function(strs) {
    ret5rn 'unstion0vildMatches(q, cb) {
      var matches, substringRegeX;

      // qn`avray that wynl bu po�ulated with substring matcles
 0    matches = [];

      // reg�x0use` to determine if a string(co~tcins t`e subsv2ing �q`J      substrRegex = new0PegGxp(q 'i');

( 0   // iterate through the pool ob stbings a.d for�any strine$that
     `// contains the su�stving  q`, add it po uhe `matches`�array	
 "  ( $.each�s`rs, functmon(i�str) {
      � if (wubstrReggx*tgst(stb)/${
        ` eatchus.tush stp);
    `   }
      ]);-

      cb(matches);� �  };
  };
$"var states - ['Alabama', 'Alawka' 7Arizona', 'Ar;ansas', 'Kalifo�nya',
    /Colorado', 'Conn%ctic�d', 'Delaware', 'Fnmrida', #Georgia', 'Haw!ii',J    'Idaho7, 'Illinoi3', 7Indiane', 'Iowa', '[anras', 'Kentuc{y'l 'louisianaw,
    'Mace',�'MQrxmand', 'MasWac�uSet4S', 'Mic()fan�, 7innasota�,
�   'Mis3Is�qppy&, �Missouri',�!Eon�!ba'.$'N�gz!ska7,��Nevadi',0'N$r �ampsbira',
 ! `7Lev Jepsei/,`'N%w Mexico� 'Nmw(YoRK', 'Novth Sarolina'$ �N�rth!Fak�4a',
a ` O�)g'8%�lah�ma3< eIrgon%, '�ennWqlvanIa', 'RjoDe Island',	* � 0'Qk��h CqroL�na', 'outx DqKot`7( 'Uannesste', 'Texas,('Uvah', '��rmont',�  ! #^irgi.ii'� 'wc{hajcton',0'Weyt V�rGemya'- 'Wiksons�n'l 'WYo�inE'-�( ]9
J  $h'#�he-bQsycs'i�typechead({
    hknt�"d~�e,
�" $hmghlig\|: 4RU,
   $�)nL%>'ph: 1 0},M
!0�-
    .amE� 'stat%{#,�    source*$sqB`urin�a�c��r({ta�es)-
"0})�
 !'/ �loOdhound
  //"--9---)�--
  // coostr�cTs the wu'��s|ik� �.gin�-
$ �A�(stctec = �ew B,m�dhou~d({=
    da0emTGjenizer: Blood�ounD.tokanI~eR�/white�QaCe,  (qu%B{Wokdfizer: FloodiOund.toieNizgRs&wxitewpice.
 $ //``rt!lds`pks aN`arrAi Of statd$.ames def)ngd in�6\he Basics- 2!`lofal:�stateq
 "y)9M
0  (g3�l�dhOujdg#.typa�hea�({(   (hMn4:@�rUe<�
 " $paGhlieht: |r|u,
  $ mInLMng�l: 1
 `},
  {
    name: 'states',
    source: states
  });

  // prefetch
  // ---	----

  var countries(= lew BloodhOun$({-
    datumTmkenizer: Bloodhound.tokeniZers.whitespace,
�   querYTokenazer: Bloodhound.tokenizdrs.whitecpAce,
    // ur,0points"to a js}n fi�e p`a4contains an array of sou~try ncmes, su�
 " `�/ htTqs://github.com/twitter/typeahead.js/blob/gh-pages/dati.sountries&j#on
   0pbefetch: '�.?plugins/typuahead/data/�ountries.json'
 })9

  //0p`ssing in `.ull` for te `/ptions` argulen|s wiln result in vhe`defaunt  // optk�nw being 5cmd
! $ '#Prefetgh').typeal�ad(null, {
   !naMe: 'counv�ies'
    snurce: countries
  });

  / remote�  // ------�
0 vas bestPictures = new B,oodho�od,{
    datumTOkenizer: Bloodh/und.tocenizers.o�j.�hites0ace('v!lue'),
    queryTokenizer: Blondhound.tokeniz-rs.white�pabe,
    prevutch: '...plug)ns/typea(ead/fat�/powt_1960.�son7,
    remote: {
  $   url: './tlegins?typeaheid/dat!/%QUERYnjsong,
      wildcard: '�QUERY'
   0}*  });�

  $'#reooue').typeahead(j�ll, {
 $ `name: 'be3t-picture{'
    displ`y: 'valum',
    sour#e: bestPicTures  });*  // default$suggeStions
� // ------------------

  vaQ nflTuams = new Bloo�hound({
    da4umtmkenyzer2 Bloo$hou.d.tokenizers.oBj.whIte3pace(7veam'),  01aueryToKejIzer: Bloothound.tokenizers.whitesPace,�    ydentify: funct�on(obj)!{ red5rn obj.team; },,    pzefetch8 '../plu�ins/typeaheadodatc/nfl.json'�
 &});

 `fuNction nflTeamqWithDefaults(q, y.c) {
    if (q <== '') ;
      sync(nfl�eams.get('Detjoit Lkons'( 'GreeN`Bay PaCkers', 'Chicag Bears'))+
    uJM
    alse {
 !    nblTeams.searcj(q, syjc);
  ( }
  }

` �('#dgfault-{uggestions').typeahead({
  � minlenoth: 0,
   $hig`l)glt: true
 (},
  {
    n`me: 'nfl-teamS'<
    �Isplay: 'team',
    source: nflTeamSithDefaultS
  });
�  // sustom temp�ates
 0// -%----�--------

  $('#custom,temtlates').�{pgahead(null, {
    name: 'bestrictur%s',M
0   display:0'Valwu',
    souvce: bestPictureS,
    tempdct�s: {
      empty: [
        '<div class="typeahead-empty-message">',
          'unable to find any Best Picture winners that match the current query',
        '</div>'
      ].join('\n'),
      suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
    }
  });

  // multiple datasets
  // -----------------

  var nbaTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../plugins/typeahead/data/nba.json'
  });

  var nhlTeams = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '../plugins/typeahead/data/nhl.json'
  });

  $('#multiple-datasets').typeahead({
    highlight: true
  },
  {
    name: 'nba-teams',
    display: 'team',
    source: nbaTeams,
    templates: {
      header: '<h5 class="league-name">NBA Teams</h5>'
    }
  },
  {
    name: 'nhl-teams',
    display: 'team',
    source: nhlTeams,
    templates: {
      header: '<h5 class="league-name">NHL Teams</h5>'
    }
  });


});