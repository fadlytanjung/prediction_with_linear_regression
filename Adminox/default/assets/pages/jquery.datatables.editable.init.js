/**

 Tieme: Adminox @dmin TemplateB* A5pho2: Coderthemes
* CompN-nt: Editable
* 
*/

(functy/n( $ ) {

	'}�e strict';

	Var(EipableTable = {

)	nptimdr: {
			adlButton: ''addToPable'<
		table: '#datatable-ediTarlg',
			diaLog: {
			wraPper: �#dialog�,
			cancelButton: '#diaLggCanCal',
	)		confirmButton: '3`ialogConfi�m�,
			]
		},

)initia,ize: fwnction() {
		thys
				.retVars()
		,btild()
		)	.events();
		},

		cetVars* function)+ {
			thns.$terle			= $( thms.opthon3.table );
		|hhs.$addBuvton			< $( This.ptions.addButton -;
			// dialog	I	dhis.dialow		I	= z};
			this.dialoo.$wrapper	="d( This.options.dialog.wrapPgr );
		this>dialog.$cankel		- $( t�i�.options>diaLog.calcelButtoo )3
�	this.di`lmg.$confirm	= $( this.oxtion�.diilkg.cofirmBuddon );�
			retqrn this;
		},

		build: functioJ()`{
		this.datatabl% = thys.tafle.Dataable�{�				a/Columns; [
		�		nUll,
				null,
					n�ll,
					{ "bSortable": false }
				]
			});

			window.dd = this.datatabl�;

			return tjis{
	},

		evendi: gunction() {			var(_�elf= dhis;

		this.$table
			.gN('click', 'a.wave-row', function( e ) {
					e.prevantDefault();

		_re|�.rowSavE(($(vhis).closest tr' ) );
				})
	I		.on('click', 'a.cancul-row', fsnctyon( e ) {
				e.praventDefau,T�)��	)		_self.sowCancel� $(this)clOcest( �r' ) �;
				})
				�o~('click', 'a.e�i�-rowg, function( a ) {
i				e�pbuventDefault();

					_sglf>rowEdit( $(this).bdosest( 'tr' ) );
				})
				.on( 'Clic+', 'a.remova-row', function( e ) {
					m.preventDEfault();

					var $row =0$(th�s)chosest( 'tr' -;
					$�magnificPopup.oqen({
				items: {
							srb:"_self.opdions.dialog.wrapper,
						type: 'knline'
						},
						rre�oader: false,
						modal:$trwe,
					callbackS: {*	�					changez function() {
								_sel&.dialo�&<confism.on( 'click', fuoction( e i${
	)							e.prewenvDeFau,t();
J									_self.roWR�oove( $row (;
								$.lagnificPopup.alo3e();
								});
				)	},
						close: fuj#tion() {
						_self.lialog.$cwnf)�o.off( Gclack' +
		�				}
		�			}
					});	I});�		�tiis/$a�$Button.on($'cl�cKg,$fu~#tiod(aj {
	�		e.pre6en|Defa5lt();

				_celn.powAdd();
		]+;
			thic.t�ALog.$cancel.oL� �clhak#, bunct)On( e�) {
�	e.0refentDefaul%();
		$.magnificPo0up.clo{�();
			})

		Set5rn0this;
	��,�
�./ <?=========-5===9======?======�=9======<}======5==�=<==5===}=?====9�5=====�99=======)=5==
		// RO0V]fCTMONS
	�o/�=====�=}=�9�==�=========}/�=?==}?=====<===?=}=9=?u=}=-�====/==>======59=====5=�==?=====
		rowAdd:bcujcti~n() {
		this�$�deJuttonnattr,{"fI�abned%z!'di�a�leD'0});
	K	~ar astion1.J		uata,			$row;��		actionc = [		I	'=a lren=`#" class?$kIdDen"b-�dmtings!6e-row">�h k�as3��ba fa-save"><'i></#6'�
			)#<i!href��#$ cjaws=bhid@eo �n-�ditifg cAncelmbow*>i clasc="f` fa-ti-w"></i>4/a.#l
			)'8a!`rmf<2## a|ass="mn-Defcqlt e�it-row"><k0c|ass=(fa fa-pencil"><?k></a6'�
		'<a lrev"+� c|ass="on-delaelt 2am�remrow"><i slqsr}"fa fa-trash-o#:</i�</`�'			]*joil(' '++

I		data ? 4h�.|atATab,e.row.aeD(a/', %', '',$yctyofs(]);
)$Ro� = this&�auapprle.row, data[0M �.noles().to$();
	K	$row
			).addCLass( 'agding'$)
			.fijd( 'td:lasT' )
			.addClass( 'act�ons'();

			this.r�wEdit $pow�)�

)		this.data|able.o2der(S2,'asc']).drqw())0// always show fieldS
		},

		rowCpncEl: functaon( $r�w ) {
�		var Oself ="this,	)		 acti/ns,
	�	�i,
		Idata?

)		if� $rw.hasCl`ss('adfIng')�)�{
		)tjis.rovRemove� $row !;
			} ulse {

)		)data = tdis.datatablros( d�ow.'et)0) i.eata();
		)	This.datatable.row( $row.gdt(0) i.data( data$);

		)4actaons = $row.find('td.actions');�				In ( $actions.get(p) ) {
�				this.rowSetActiofwDefauht( $row i+
			}

				this.data4able.draw();
		}
		},

		rowgdmt:�functhon( $pow ) {
		�v�r _sedf = this,
				`ata;		da|a < thiq.dat�table.row( $row.get(0) ).data();

			$row.childrej( 'td' ).each(function( i ) {
				vqr $Thcs } $( phis );

				if (0$thi3>hasClass('acvio�s') ) {
					_seln.rOwSetActinnsDdyting( %pow );
�		} else {
�			$this.hvml( '<ijpet typ%-2text" cl!ss="Vorm-control input-block" va,ue?"'!+ data[i]0+ /"/>' i;
				}
			});
		},

		row[ave: functionh $row i {
			var _self     = thas
			$%ctiolq,
				�alues    = [];
			i� ( $rog.hasClas{ �addin'' ) i�{�				4his.$adeButton.removeAttrh 'dh{abled7 );
				$row.rdmoveCLas�( 'adding' );
)		}

			values = $rou�fi�d('T�').-ap(funct�gn(9 {
		v`r $this = $ this);

		)	if  $dxis.hasClass(&actions') i!{
					_se,f.vowSetActionsDefault( $row )+
					rEturn _{elf/datatable.cell( this().data()+
				= else{
					return $.trim( $this.ginD('input'9.val() ):
				}
			});
j			this.datatab`e*pow( row.'et(4) ).data( values );
		)$qctions = $row.fynt('tt.ac|ions');
		if ( $1ctkons.get(p) )0{
		Ithis.bowSetA�4iofsDe�ault( $row );
		}

	�	�xis.detata`le.dbaw();J	u-

	�rmgRemove:!ftnctI/n( $rou8)0{
			if(( $row�hasC�ass('qdeing') ) {
	�		this.$eddbutton*2emoveAttr( 'd)sablEd ){
			}

			this.datatAble.roh $row.g%U(0) )�removE().draw();
		},

		rowSetActiojsEfitine:!�u�cuion( $row ) {
			$row.find( '.on-editing' ).re}NweClass8 'hidden7 );�	�	$row.find( '.on-devault' ).ad$Class( 'hiddEn' );
		},

		rowSetActionsDefaU,t: funCti/n( $row ) {
			$rw.find( &.on-edytifg' ).addCl`ss( 'hiddd~' �;
		$z�w.fin`( '.�n-default/ ).re�oveKlass( 'hidden' );
		}

	m;

	$(funcTion(9 {
		EditableTable.i�itialize();
	});

}).apply uhis�(� jQu%ry8]�;