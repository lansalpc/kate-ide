// ------------------------------
// -- Reusable Part: XSSTRCTYD --
// ------------------------------
LANSA.addComponent(
{
   id: "XSSTRCTYD", 
   nm: "XSStoreCountryDropDown", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Store Country Dropdown", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XSCNTRYNM:
      {
         nm: "XSCNTRYNM",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Country",
         h1: "Country",
         h2: " ",
         h3: " ",
         de: "Country",
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         pCurrentValue: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddDropDownEntry: 
         {
            ps: 
            {
               "Country":
               {
                  pt: "i"
               }
            }
         }
      },

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "XSSTRCTYD", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XSSession) Name(#MySession) Scope(*Application)
         //
         var MYSESSION = this.createApplicationReference( "MYSESSION", "XSMYSSN" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CountriesItem1) Alignment(TopLeft) Column(#Column1) Manage(#Countries) Parent(#TableLayout1) Row(#Row1)
         //
         var COUNTRIESITEM1 = this.createReference( "COUNTRIESITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#Countries) Columnheaderheight(0) Columnlines(False) Displayposition(1) Left(0) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(1) Top(0) Dropdownstyle(DropDown) Width(489) Rowheight(25) Height(25)
         //
         var COUNTRIES = this.createReference( "COUNTRIES", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#DropDownColumn1) Columnresize(False) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#Countries) Source(#XSCountryName)
         //
         var DROPDOWNCOLUMN1 = this.createReference( "DROPDOWNCOLUMN1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#XSCountryName) Name(#XSCountry)
         //
         var XSCOUNTRY = this.createFieldReference( "XSCOUNTRY", Fields.XSCNTRYNM.DataClass );

         // ---------------------------
         // -- Initialize #MYSESSION --
         // ---------------------------
         if ( ( MYSESSION != null ) && ( MYSESSION.isInitialized() == false ) )
         {
            MYSESSION.initialize();
         }

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // --------------------------------
         // -- Initialize #COUNTRIESITEM1 --
         // --------------------------------
         COUNTRIESITEM1.setAlignment( "TOPLEFT" );
         COUNTRIESITEM1.setColumn( COLUMN1 );
         COUNTRIESITEM1.setManage( COUNTRIES );
         COUNTRIESITEM1.setParent( TABLELAYOUT1 );
         COUNTRIESITEM1.setRow( ROW1 );
         COUNTRIESITEM1.initialize();

         // ---------------------------
         // -- Initialize #COUNTRIES --
         // ---------------------------
         COUNTRIES.setColumnHeaderHeight( 0 );
         COUNTRIES.setColumnLines( false );
         COUNTRIES.setDisplayPosition( 1 );
         COUNTRIES.setLeft( 0 );
         COUNTRIES.setParent( this );
         COUNTRIES.setRowLines( false );
         COUNTRIES.setShowSelection( false );
         COUNTRIES.setTabPosition( 1 );
         COUNTRIES.setTop( 0 );
         COUNTRIES.setDropDownStyle( "DROPDOWN" );
         COUNTRIES.setWidth( 489 );
         COUNTRIES.setRowHeight( 25 );
         COUNTRIES.setHeight( 25 );
         COUNTRIES.initialize();

         // ---------------------------------
         // -- Initialize #DROPDOWNCOLUMN1 --
         // ---------------------------------
         DROPDOWNCOLUMN1.setColumnResize( false );
         DROPDOWNCOLUMN1.setColumnUnits( "PROPORTION" );
         DROPDOWNCOLUMN1.setColumnWidth( 1 );
         DROPDOWNCOLUMN1.setDisplayPosition( 1 );
         DROPDOWNCOLUMN1.setParent( COUNTRIES );
         DROPDOWNCOLUMN1.setSource( fld.XSCNTRYNM );
         DROPDOWNCOLUMN1.initialize();

         // ---------------------------
         // -- Initialize #XSCOUNTRY --
         // ---------------------------
         XSCOUNTRY.applyDefault();
         XSCOUNTRY.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 25 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 489 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setThemeDrawStyle( "DropDown" );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthGETCURRENT - GetCurrent
   //
   COM_OWNER.mthGETCURRENT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetCurrent", 19 );

      //
      // DEFINE_MAP For(*output) Class(#XSCountryName) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSCNTRYNM.DataClass );

      //
      // PTYROUTINE Name(GetCurrent)
      //
      rtn.Line( 19 );
      {

         //
         // #value := #Countries.Value
         //
         rtn.Line( 22 );
         VALUE.set( ref.COUNTRIES.getValue() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      return rtn.retVal( VALUE.get() );
   };

   //
   // mthSETCURRENT - SetCurrent
   //
   COM_OWNER.mthSETCURRENT = function( parm_VALUE )
   {
      var fld = this.FLD.XSSTRCTYD, ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCurrent", 26 );

      //
      // DEFINE_MAP For(*input) Class(#XSCountryName) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSCNTRYNM.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );

      //
      // PTYROUTINE Name(SetCurrent)
      //
      rtn.Line( 26 );
      {

         //
         // #XSCountry #XSCountryName := #value
         //
         rtn.Line( 29 );
         ref.XSCOUNTRY.set( VALUE.get() );
         fld.XSCNTRYNM.set( VALUE.get() );

         //
         // SELECTLIST Named(#Countries)
         //
         rtn.Line( 31 );
         for ( var i1 = 1; i1 <= ref.COUNTRIES.entryCount(); i1++ )
         {
            ref.COUNTRIES.getEntry( i1 );

            //
            // CONTINUE If(#XSCountry <> #XSCountryName)
            //
            rtn.Line( 33 );
            if ( Lansa.String.ne( ref.XSCOUNTRY.get(), fld.XSCNTRYNM.get() ) )
            {
               continue;
            }

            //
            // #Countries.CurrentItem.Selected := true
            //
            rtn.Line( 35 );
            ref.COUNTRIES.getCurrentItem().setSelected( true );

            //
            // LEAVE 
            //
            rtn.Line( 37 );
            break;

         //
         // ENDSELECT 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 43 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 43 );
      {

         //
         // #com_owner.AddDropDownEntry( ' ' )
         //
         rtn.Line( 46 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, " " );

         //
         // #com_owner.AddDropDownEntry( 'Australia' )
         //
         rtn.Line( 47 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Australia" );

         //
         // #com_owner.AddDropDownEntry( 'Canada' )
         //
         rtn.Line( 48 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Canada" );

         //
         // #com_owner.AddDropDownEntry( 'France' )
         //
         rtn.Line( 49 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "France" );

         //
         // #com_owner.AddDropDownEntry( 'Japan' )
         //
         rtn.Line( 50 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Japan" );

         //
         // #com_owner.AddDropDownEntry( 'Netherlands' )
         //
         rtn.Line( 51 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Netherlands" );

         //
         // #com_owner.AddDropDownEntry( 'Singapore' )
         //
         rtn.Line( 52 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Singapore" );

         //
         // #com_owner.AddDropDownEntry( 'United Kingdom' )
         //
         rtn.Line( 53 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "United Kingdom" );

         //
         // #com_owner.AddDropDownEntry( 'USA' )
         //
         rtn.Line( 54 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "USA" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 56 );
      rtn.end();
   };

   //
   // mthADDDROPDOWNENTRY - AddDropDownEntry
   //
   COM_OWNER.mthADDDROPDOWNENTRY = function( parm_COUNTRY )
   {
      var fld = this.FLD.XSSTRCTYD, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddDropDownEntry", 58 );

      //
      // DEFINE_MAP For(*input) Class(#XSCountryName) Name(#Country)
      //
      var COUNTRY = rtn.createFieldParameter( "COUNTRY", Fields.XSCNTRYNM.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COUNTRY.set( parm_COUNTRY );

      //
      // MTHROUTINE Name(AddDropDownEntry)
      //
      rtn.Line( 58 );
      {

         //
         // #XSCountryName := #Country
         //
         rtn.Line( 61 );
         fld.XSCNTRYNM.set( COUNTRY.get() );

         //
         // ADD_ENTRY To_List(#Countries)
         //
         rtn.Line( 62 );
         ref.COUNTRIES.addEntry();

         //
         // #Countries.CurrentItem.MouseOverStyle <= #XSTheme01<BackgroundGreen2_50>
         //
         rtn.Line( 64 );
         ref.COUNTRIES.getCurrentItem().setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREEN2_50" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(pCurrentValue) Get(GetCurrent) Set(SetCurrent)
   //
   COM_OWNER.getPCURRENTVALUE = function()
   {
      return this.mthGETCURRENT();
   };

   COM_OWNER.setPCURRENTVALUE = function( value )
   {
      this.mthSETCURRENT(value);
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ------------------------------
   // -- XSCNTRYNM Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCNTRYNM.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCNTRYNM );
      };

      Lansa.createFieldClass( { co: Fields.XSCNTRYNM.DataClass, an: "PRIM_FLD", fn: "XSCNTRYNM" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LIST.DropDown", "PRIM_LIST.String", "PRIM_FLD" ]
});

//# sourceURL=xsstrctyd.js
