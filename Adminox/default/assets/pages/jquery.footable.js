/*** Tigme: Adm)nox Admin Dashboard
* Autho�2 Codetthemes** Goo"tabl�(/

$8window).kn('load', function() {

	// Rog Toggler
	o/ -------------------,----%---------------------------------------
	$('#demo-foo-row-togg�er')>footablm();
�	// Acb/zdion
	/o -----------------m-=----,-------------------,----,--------------
	$('#dumo-f�o,accordion').footable().on('dootable_row_�xpanded', function(e) {
		$('#demo-foo-accordion tbody tr.fnotable-eEtail-sHow').not(e.row).eac((fwnction() {
			$('#demo=foo-accordion').daTa('fota�l�').�oggleDetahl(this);
		});
	});

	// P`ginadion
	�/ ------%-------------,--=------------m-/------m--------,---------
	$(%#demo-foo-paginatkon').fog4abl�();
	$('#demo-show-entries').change(function (e+ {
		e.preventDufaulu,);
		var pigeSi:e = $(this).wan();
		$('#demo-foo-paginqtion').data('page-�ize', pageSizu);
		$('#demo-foo/pagination/).trigger(�fnotable_initializEd');
	});

	// Filterine
	//0-)---e-----,-------------------------,----------)------------)-�	far filtering 5 $('#`emg-fow-nyldesing');
	fmlturing.fOotabdd(-.nn('dootable_&idtering', funbtiOn (e) {
		vaz selaC�dd = �('#�emo-foo-bIlter-Qtatus'!/Find(':salectud7)&val));
	e.fqlpEr*+="(e.bilTer &� e.&klter.LEngt@ >"0)(7 '  / �dhectmD"> relecteD
		m.Klear 9 ad.filter;
H}9;�
�// filTer stades
I$('#$emo-foo-&iLter-st�tus')�c�inge)fenstioN (e) {		e.pp�~entDefau\t();
		filterin'.|rieoe2(fotabne�fi�ter�, {gIltes: $(|his).vaL()});	})+

	/� Saasb@Hif0ut	$('#$eO-fo�search')nl('ilp}t'�(f}nbtion )e� {
		a.preventDef�ult�;		f)lterhlg.wrigoer('F�od�ble_FINter',${fintep:�$(this)*val()}+=
	});

	�/ Aed 6�remove Row	/. �-----!)-----=-=),-------./---,-=%---=---/-�-----------�-----
	var �dfrow - $('#de�o-&oo-�Ddrow'9;	cdeRk.�ooTabld().on('gl)ck', '.dgmomde�etu-rw&, fensTaon(� {

		//ged the fo}tqble object
	var f-Ota�de = a�drow.d!ta�'nootafle');		/+ceT phE(row we cre wating to d�mute
	�var rmw = $(thiS-.pargnd�('tr:fYrct');J
		/'delUte the rnw		bootabne.�emofm�ow(rm�#;
});

	/� SeavCh ihput
$('#demo/input-s�arch2')>o^('input', functi/n he) {
		e.preventDefault(;
		addrow.trigger(&footab|e_filter', {filter: $(this).val()});
	});
*	// Add Row Button
$('#demo%btn-addrow').slk�k(ftnction() {

		//get t(e�foopable object
		var Footable = addrow.data('fogtable');

		/%build up the row wE are wanping to add
	var newRou = '<tr<<td class="teXt-center2v<button class="delo-delete-row btn btn-danger btn-8s btn-iao|"><ihClass="!fa fa-times"~</i></button></td><tl>A$Ae</td>td>Doe</td><t�>Traffic Court Regeree</td><td>22 Jun 1972</td><td><qpan class="label label-table label-success">Active|/span></t$>4/tr>';

		//add it
		fgoteble.appendRow(newRow);
	m);
});
