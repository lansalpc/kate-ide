// ------------------------------
// -- Reusable Part: XSACCTTLD --
// ------------------------------
LANSA.addComponent(
{
   id: "XSACCTTLD", 
   nm: "XSAccountTitleDropDown", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Account Title Dropdown", 
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
      XSACCTTL:
      {
         nm: "XSACCTTL",
         ft: "C",
         ln: 10,
         dc: 0,
         lb: "Account Title",
         h1: "Account",
         h2: "Title",
         h3: " ",
         de: "Account Title",
         dv: "",
         ia: [ "FE", "LC" ]
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
               "Title":
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
         var fld = this.addFields( "XSACCTTLD", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#TitlesItem1) Alignment(TopLeft) Column(#Column1) Manage(#Titles) Parent(#TableLayout1) Row(#Row1)
         //
         var TITLESITEM1 = this.createReference( "TITLESITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#Titles) Columnheaderheight(0) Columnlines(False) Displayposition(1) Left(0) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(1) Top(0) Dropdownstyle(DropDown) Width(489) Rowheight(25) Height(21)
         //
         var TITLES = this.createReference( "TITLES", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#DropDownColumn1) Columnresize(False) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#Titles) Source(#XSAccountTitle)
         //
         var DROPDOWNCOLUMN1 = this.createReference( "DROPDOWNCOLUMN1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#XSAccountTitle) Name(#XSTitle)
         //
         var XSTITLE = this.createFieldReference( "XSTITLE", Fields.XSACCTTL.DataClass );

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

         // -----------------------------
         // -- Initialize #TITLESITEM1 --
         // -----------------------------
         TITLESITEM1.setAlignment( "TOPLEFT" );
         TITLESITEM1.setColumn( COLUMN1 );
         TITLESITEM1.setManage( TITLES );
         TITLESITEM1.setParent( TABLELAYOUT1 );
         TITLESITEM1.setRow( ROW1 );
         TITLESITEM1.initialize();

         // ------------------------
         // -- Initialize #TITLES --
         // ------------------------
         TITLES.setColumnHeaderHeight( 0 );
         TITLES.setColumnLines( false );
         TITLES.setDisplayPosition( 1 );
         TITLES.setLeft( 0 );
         TITLES.setParent( this );
         TITLES.setRowLines( false );
         TITLES.setShowSelection( false );
         TITLES.setTabPosition( 1 );
         TITLES.setTop( 0 );
         TITLES.setDropDownStyle( "DROPDOWN" );
         TITLES.setWidth( 489 );
         TITLES.setRowHeight( 25 );
         TITLES.setHeight( 21 );
         TITLES.initialize();

         // ---------------------------------
         // -- Initialize #DROPDOWNCOLUMN1 --
         // ---------------------------------
         DROPDOWNCOLUMN1.setColumnResize( false );
         DROPDOWNCOLUMN1.setColumnUnits( "PROPORTION" );
         DROPDOWNCOLUMN1.setColumnWidth( 1 );
         DROPDOWNCOLUMN1.setDisplayPosition( 1 );
         DROPDOWNCOLUMN1.setParent( TITLES );
         DROPDOWNCOLUMN1.setSource( fld.XSACCTTL );
         DROPDOWNCOLUMN1.initialize();

         // -------------------------
         // -- Initialize #XSTITLE --
         // -------------------------
         XSTITLE.applyDefault();
         XSTITLE.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #TITLES --
         // ------------------------------------
         TITLES.addEventHandler( "CHANGED", this, evtRoutine2 );

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
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetCurrent", 16 );

      //
      // DEFINE_MAP For(*output) Class(#XSAccountTitle) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSACCTTL.DataClass );

      //
      // PTYROUTINE Name(GetCurrent)
      //
      rtn.Line( 16 );
      {

         //
         // #value := #Titles.Value
         //
         rtn.Line( 19 );
         VALUE.set( ref.TITLES.getValue() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 21 );
      return rtn.retVal( VALUE.get() );
   };

   //
   // mthSETCURRENT - SetCurrent
   //
   COM_OWNER.mthSETCURRENT = function( parm_VALUE )
   {
      var fld = this.FLD.XSACCTTLD, ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCurrent", 23 );

      //
      // DEFINE_MAP For(*input) Class(#XSAccountTitle) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSACCTTL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );

      //
      // PTYROUTINE Name(SetCurrent)
      //
      rtn.Line( 23 );
      {

         //
         // #XSTitle #XSAccountTitle := #value
         //
         rtn.Line( 26 );
         ref.XSTITLE.set( VALUE.get() );
         fld.XSACCTTL.set( VALUE.get() );

         //
         // SELECTLIST Named(#Titles)
         //
         rtn.Line( 28 );
         for ( var i1 = 1; i1 <= ref.TITLES.entryCount(); i1++ )
         {
            ref.TITLES.getEntry( i1 );

            //
            // CONTINUE If(#XSTitle.uppercase <> #XSAccountTitle.uppercase)
            //
            rtn.Line( 30 );
            if ( Lansa.String.ne( Lansa.String.UpperCase( ref.XSTITLE.get() ), Lansa.String.UpperCase( fld.XSACCTTL.get() ) ) )
            {
               continue;
            }

            //
            // #Titles.CurrentItem.Selected := true
            //
            rtn.Line( 32 );
            ref.TITLES.getCurrentItem().setSelected( true );

            //
            // LEAVE 
            //
            rtn.Line( 34 );
            break;

         //
         // ENDSELECT 
         //
         }

         //
         // #Titles.value := #Value
         //
         rtn.Line( 39 );
         ref.TITLES.setValue( VALUE.get() );

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
         // #com_owner.AddDropDownEntry( *BLANKS )
         //
         rtn.Line( 46 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "" );

         //
         // #com_owner.AddDropDownEntry( 'Ms' )
         //
         rtn.Line( 47 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Ms" );

         //
         // #com_owner.AddDropDownEntry( 'Mr' )
         //
         rtn.Line( 48 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Mr" );

         //
         // #com_owner.AddDropDownEntry( 'Mrs' )
         //
         rtn.Line( 49 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Mrs" );

         //
         // #com_owner.AddDropDownEntry( 'Miss' )
         //
         rtn.Line( 50 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Miss" );

         //
         // #com_owner.AddDropDownEntry( 'Dr' )
         //
         rtn.Line( 51 );
         COM_OWNER.mthADDDROPDOWNENTRY.call( this, "Dr" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 53 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Titles.changed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Titles.changed", 55 );

      //
      // EVTROUTINE Handling(#Titles.changed)
      //
      rtn.Line( 55 );
      {

         //
         // #com_owner.pCurrentValue := #Titles.value
         //
         rtn.Line( 57 );
         this.setPCURRENTVALUE( ref.TITLES.getValue() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

   //
   // mthADDDROPDOWNENTRY - AddDropDownEntry
   //
   COM_OWNER.mthADDDROPDOWNENTRY = function( parm_TITLE )
   {
      var fld = this.FLD.XSACCTTLD, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddDropDownEntry", 61 );

      //
      // DEFINE_MAP For(*input) Class(#XSAccountTitle) Name(#Title)
      //
      var TITLE = rtn.createFieldParameter( "TITLE", Fields.XSACCTTL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TITLE.set( parm_TITLE );

      //
      // MTHROUTINE Name(AddDropDownEntry)
      //
      rtn.Line( 61 );
      {

         //
         // #XSAccountTitle := #Title
         //
         rtn.Line( 64 );
         fld.XSACCTTL.set( TITLE.get() );

         //
         // ADD_ENTRY To_List(#Titles)
         //
         rtn.Line( 65 );
         ref.TITLES.addEntry();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 67 );
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

   // -----------------------------
   // -- XSACCTTL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCTTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCTTL );
      };

      Lansa.createFieldClass( { co: Fields.XSACCTTL.DataClass, an: "PRIM_FLD", fn: "XSACCTTL" } );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.XSACCTTL.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_1) Value(1) Caption(' ') Parent(#Picklist) Default(True)
         //
         var PKIT_1 = this.createReference( "PKIT_1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_2) Value('Mr') Caption('Mr') Parent(#Picklist)
         //
         var PKIT_2 = this.createReference( "PKIT_2", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT1) Parent(#Picklist) Caption('Mrs') Value('Mrs')
         //
         var PKIT1 = this.createReference( "PKIT1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT2) Parent(#Picklist) Caption('Ms') Value('Ms')
         //
         var PKIT2 = this.createReference( "PKIT2", "PRIM_PKIT" );

         // ------------------------
         // -- Initialize #PKIT_1 --
         // ------------------------
         PKIT_1.setValue( "1" );
         PKIT_1.setCaption( " " );
         PKIT_1.setParent( this );
         PKIT_1.setDefault( true );
         PKIT_1.initialize();

         // ------------------------
         // -- Initialize #PKIT_2 --
         // ------------------------
         PKIT_2.setValue( "Mr" );
         PKIT_2.setCaption( "Mr" );
         PKIT_2.setParent( this );
         PKIT_2.initialize();

         // -----------------------
         // -- Initialize #PKIT1 --
         // -----------------------
         PKIT1.setParent( this );
         PKIT1.setCaption( "Mrs" );
         PKIT1.setValue( "Mrs" );
         PKIT1.initialize();

         // -----------------------
         // -- Initialize #PKIT2 --
         // -----------------------
         PKIT2.setParent( this );
         PKIT2.setCaption( "Ms" );
         PKIT2.setValue( "Ms" );
         PKIT2.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "BLANKS" );
      };

      Lansa.createFieldClass( { co: Fields.XSACCTTL.pl, an: "PRIM_PKLT", fn: "XSACCTTL", cn: "Picklist" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LIST.DropDown", "PRIM_LIST.String", "PRIM_PKLT", "PRIM_FLD" ]
});

//# sourceURL=xsaccttld.js
