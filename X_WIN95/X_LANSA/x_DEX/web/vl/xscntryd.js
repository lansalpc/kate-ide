// -----------------------------
// -- Reusable Part: XSCNTRYD --
// -----------------------------
LANSA.addComponent(
{
   id: "XSCNTRYD", 
   nm: "XSCountryDropDown", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Country Dropdown", 
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
      },
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: "Entries .......",
         h1: "Number",
         h2: "of Entrys",
         h3: " ",
         de: "Number of entries in a browse list",
         dv: 0,
         ia: [ "FE", "RB" ]
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
         HighlightSelection: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         CountryUpdated: 
         {
            ps: 
            {
               "CountryID":
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
         var fld = this.addFields( "XSCNTRYD", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
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
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#Countries) Columnheaderheight(0) Columnlines(False) Displayposition(1) Left(0) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(1) Top(0) Dropdownstyle(DropDown) Width(489) Rowheight(25) Height(21)
         //
         var COUNTRIES = this.createReference( "COUNTRIES", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#DropDownColumn1) Columnresize(False) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#Countries) Source(#XSCountryName)
         //
         var DROPDOWNCOLUMN1 = this.createReference( "DROPDOWNCOLUMN1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#XSCountryName) Name(#SelectedCountry)
         //
         var SELECTEDCOUNTRY = this.createFieldReference( "SELECTEDCOUNTRY", Fields.XSCNTRYNM.DataClass );

         //
         // DEFINE_COM Class(#XSServer.LoadCountries) Name(#LoadCountries)
         //
         var LOADCOUNTRIES = this.createDataRequest( "LOADCOUNTRIES", "XSSERVER", "LOADCOUNTRIES" );

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
         COUNTRIES.setHeight( 21 );
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

         // ---------------------------------
         // -- Initialize #SELECTEDCOUNTRY --
         // ---------------------------------
         SELECTEDCOUNTRY.applyDefault();
         SELECTEDCOUNTRY.initialize();

         // -------------------------------
         // -- Initialize #LOADCOUNTRIES --
         // -------------------------------
         LOADCOUNTRIES.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #COUNTRIES --
         // ---------------------------------------
         COUNTRIES.addEventHandler( "CHANGED", this, evtRoutine3 );

         // -------------------------------------------
         // -- Add Event Handlers for #LOADCOUNTRIES --
         // -------------------------------------------
         LOADCOUNTRIES.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 21 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 489 );
         this.setLayoutManager( TABLELAYOUT1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "XSCNTRYD" );

         //
         // DEF_LIST Name(#CountryList) Fields(#XSCountryName) Counter(#listcount) Type(*Working) Entrys(500)
         //
         list.COUNTRYLIST = Lansa.createList( { "XSCNTRYNM": fld.XSCNTRYNM }, fld.LISTCOUNT );
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
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetCurrent", 23 );

      //
      // DEFINE_MAP For(*output) Class(#XSCountryName) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSCNTRYNM.DataClass );

      //
      // PTYROUTINE Name(GetCurrent)
      //
      rtn.Line( 23 );
      {

         //
         // #SelectedCountry #value := #Countries.value
         //
         rtn.Line( 26 );
         ref.SELECTEDCOUNTRY.set( ref.COUNTRIES.getValue() );
         VALUE.set( ref.COUNTRIES.getValue() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      return rtn.retVal( VALUE.get() );
   };

   //
   // mthSETCURRENT - SetCurrent
   //
   COM_OWNER.mthSETCURRENT = function( parm_VALUE )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCurrent", 30 );

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
      rtn.Line( 30 );
      {

         //
         // #SelectedCountry := #value
         //
         rtn.Line( 33 );
         ref.SELECTEDCOUNTRY.set( VALUE.get() );

         //
         // #Com_owner.HighlightSelection
         //
         rtn.Line( 35 );
         this.mthHIGHLIGHTSELECTION();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 37 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var list = this.LIST.XSCNTRYD, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 39 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 39 );
      {

         //
         // #LoadCountries.ExecuteAsync( #CountryList )
         //
         rtn.Line( 41 );
         ref.LOADCOUNTRIES.mthEXECUTEASYNC( {  }, { LIST: { "COUNTRYLIST": list.COUNTRYLIST } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadCountries.completed
   //
   function evtRoutine2( sender, parms )
   {
      var list = this.LIST.XSCNTRYD, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadCountries.completed", 45 );

      //
      // EVTROUTINE Handling(#LoadCountries.completed)
      //
      rtn.Line( 45 );
      {

         //
         // SELECTLIST Named(#CountryList)
         //
         rtn.Line( 51 );
         for ( var i1 = 1; i1 <= list.COUNTRYLIST.entryCount(); i1++ )
         {
            list.COUNTRYLIST.getEntry( i1 );

            //
            // ADD_ENTRY To_List(#Countries)
            //
            rtn.Line( 53 );
            ref.COUNTRIES.addEntry();

         //
         // ENDSELECT 
         //
         }

         //
         // #Com_owner.HighlightSelection
         //
         rtn.Line( 59 );
         this.mthHIGHLIGHTSELECTION();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 61 );
      rtn.end();
   };

   //
   // mthHIGHLIGHTSELECTION - HighlightSelection
   //
   COM_OWNER.mthHIGHLIGHTSELECTION = function()
   {
      var fld = this.FLD.XSCNTRYD, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "HighlightSelection", 71 );

      //
      // MTHROUTINE Name(HighlightSelection)
      //
      rtn.Line( 71 );
      {

         //
         // IF (#SelectedCountry = *blank)
         //
         rtn.Line( 74 );
         if ( Lansa.String.eq( ref.SELECTEDCOUNTRY.get(), "" ) )
         {

            //
            // #SelectedCountry := 'United States'
            //
            rtn.Line( 76 );
            ref.SELECTEDCOUNTRY.set( "United States" );

         //
         // ENDIF 
         //
         }

         //
         // SELECTLIST Named(#Countries)
         //
         rtn.Line( 80 );
         for ( var i1 = 1; i1 <= ref.COUNTRIES.entryCount(); i1++ )
         {
            ref.COUNTRIES.getEntry( i1 );

            //
            // CONTINUE If(#SelectedCountry.uppercase <> #XSCountryName.uppercase)
            //
            rtn.Line( 82 );
            if ( Lansa.String.ne( Lansa.String.UpperCase( ref.SELECTEDCOUNTRY.get() ), Lansa.String.UpperCase( fld.XSCNTRYNM.get() ) ) )
            {
               continue;
            }

            //
            // #Countries.CurrentItem.Selected := true
            //
            rtn.Line( 84 );
            ref.COUNTRIES.getCurrentItem().setSelected( true );

            //
            // LEAVE 
            //
            rtn.Line( 89 );
            break;

         //
         // ENDSELECT 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Countries.Changed
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Countries.Changed", 95 );

      //
      // EVTROUTINE Handling(#Countries.Changed)
      //
      rtn.Line( 95 );
      {

         //
         // IF (#Countries.value.CurChars = 1)
         //
         rtn.Line( 98 );
         if ( Lansa.Number.eq( Lansa.String.CurChars( ref.COUNTRIES.getValue() ), 1 ) )
         {

            //
            // #Countries.value := #Countries.value.UpperCase
            //
            rtn.Line( 100 );
            ref.COUNTRIES.setValue( Lansa.String.UpperCase( ref.COUNTRIES.getValue() ) );

         //
         // ENDIF 
         //
         }

         //
         // #com_owner.pCurrentValue := #Countries.value
         //
         rtn.Line( 104 );
         this.setPCURRENTVALUE( ref.COUNTRIES.getValue() );

         //
         // SIGNAL Event(CountryUpdated) Countryid(#com_owner.pCurrentValue)
         //
         rtn.Line( 106 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "COUNTRYID", Fields.XSCNTRYNM.DataClass );

            evtParms.ref( "COUNTRYID" ).set( this.getPCURRENTVALUE() );

            this.fireEvent( "COUNTRYUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 108 );
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
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LIST.DropDown", "PRIM_LIST.String", "PRIM_FLD", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xscntryd.js
