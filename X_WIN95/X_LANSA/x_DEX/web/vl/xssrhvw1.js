// ------------------------
// -- Web Page: XSSRHVW1 --
// ------------------------
LANSA.addComponent(
{
   id: "XSSRHVW1", 
   nm: "XSSearchView", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Search View", 
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

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "xslansati.png" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XSSRCHVL:
      {
         nm: "XSSRCHVL",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: "Text",
         h1: "Text",
         h2: " ",
         h3: " ",
         de: "Search Value",
         dv: "",
         ia: [ "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
      fd: Fields, 

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
         this.addFields( "XSSRHVW1", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#column2) Displayposition(2) Parent(#TableLayout1) Maxwidth(1170) Minwidth(800) Width(4)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSHead01Item1) Manage(#XSHeader) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var XSHEAD01ITEM1 = this.createReference( "XSHEAD01ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Manage(#XSFooter) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSMenuItem1) Manage(#XSMenu) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var XSMENUITEM1 = this.createReference( "XSMENUITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSSearchView2Item1) Alignment(TopCenter) Column(#column2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down)
         //
         var XSSEARCHVIEW2ITEM1 = this.createReference( "XSSEARCHVIEW2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSSearchView2Item2) Alignment(TopCenter) Column(#column2) Manage(#XSSearchView2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var XSSEARCHVIEW2ITEM2 = this.createReference( "XSSEARCHVIEW2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSHeader) Name(#XSHeader) Parent(#COM_OWNER) Tabstop(False) Left(191) Width(800) Top(10)
         //
         var XSHEADER = this.createReference( "XSHEADER", "XSHEADER" );

         //
         // DEFINE_COM Class(#XSMenu) Name(#XSMenu) Parent(#COM_OWNER) Tabstop(False) Displayposition(2) Top(120) Left(191) Tabposition(2) Width(800)
         //
         var XSMENU = this.createReference( "XSMENU", "XSMENU" );

         //
         // DEFINE_COM Class(#XSSearchView2) Name(#XSSearchView2) Displayposition(3) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Width(800) Left(191) Top(170)
         //
         var XSSEARCHVIEW2 = this.createReference( "XSSEARCHVIEW2", "XSSRHVW2" );

         //
         // DEFINE_COM Class(#XSFooter) Name(#XSFooter) Tabstop(False) Parent(#COM_OWNER) Displayposition(4) Tabposition(4) Top(1350) Width(800) Left(191)
         //
         var XSFOOTER = this.createReference( "XSFOOTER", "XSFOOTER" );

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

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setMaxWidth( 1170 );
         COLUMN2.setMinWidth( 800 );
         COLUMN2.setWidth( 4 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // -------------------------------
         // -- Initialize #XSHEAD01ITEM1 --
         // -------------------------------
         XSHEAD01ITEM1.setManage( XSHEADER );
         XSHEAD01ITEM1.setParent( TABLELAYOUT1 );
         XSHEAD01ITEM1.setRow( ROW1 );
         XSHEAD01ITEM1.setSizing( "FITTOWIDTH" );
         XSHEAD01ITEM1.setColumn( COLUMN2 );
         XSHEAD01ITEM1.setFlow( "DOWN" );
         XSHEAD01ITEM1.setAlignment( "TOPCENTER" );
         XSHEAD01ITEM1.setMarginTop( 10 );
         XSHEAD01ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setManage( XSFOOTER );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setAlignment( "TOPCENTER" );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setMarginTop( 10 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #XSMENUITEM1 --
         // -----------------------------
         XSMENUITEM1.setManage( XSMENU );
         XSMENUITEM1.setParent( TABLELAYOUT1 );
         XSMENUITEM1.setRow( ROW1 );
         XSMENUITEM1.setSizing( "FITTOWIDTH" );
         XSMENUITEM1.setColumn( COLUMN2 );
         XSMENUITEM1.setAlignment( "TOPCENTER" );
         XSMENUITEM1.setFlow( "DOWN" );
         XSMENUITEM1.setMarginTop( 10 );
         XSMENUITEM1.initialize();

         // ------------------------------------
         // -- Initialize #XSSEARCHVIEW2ITEM1 --
         // ------------------------------------
         XSSEARCHVIEW2ITEM1.setAlignment( "TOPCENTER" );
         XSSEARCHVIEW2ITEM1.setColumn( COLUMN2 );
         XSSEARCHVIEW2ITEM1.setParent( TABLELAYOUT1 );
         XSSEARCHVIEW2ITEM1.setRow( ROW1 );
         XSSEARCHVIEW2ITEM1.setSizing( "FITTOWIDTH" );
         XSSEARCHVIEW2ITEM1.setFlow( "DOWN" );
         XSSEARCHVIEW2ITEM1.initialize();

         // ------------------------------------
         // -- Initialize #XSSEARCHVIEW2ITEM2 --
         // ------------------------------------
         XSSEARCHVIEW2ITEM2.setAlignment( "TOPCENTER" );
         XSSEARCHVIEW2ITEM2.setColumn( COLUMN2 );
         XSSEARCHVIEW2ITEM2.setManage( XSSEARCHVIEW2 );
         XSSEARCHVIEW2ITEM2.setParent( TABLELAYOUT1 );
         XSSEARCHVIEW2ITEM2.setRow( ROW1 );
         XSSEARCHVIEW2ITEM2.setSizing( "FITTOWIDTH" );
         XSSEARCHVIEW2ITEM2.setFlow( "DOWN" );
         XSSEARCHVIEW2ITEM2.setMarginTop( 10 );
         XSSEARCHVIEW2ITEM2.initialize();

         // --------------------------
         // -- Initialize #XSHEADER --
         // --------------------------
         XSHEADER.setParent( this );
         XSHEADER.setTabStop( false );
         XSHEADER.setLeft( 191 );
         XSHEADER.setWidth( 800 );
         XSHEADER.setTop( 10 );
         XSHEADER.initialize();

         // ------------------------
         // -- Initialize #XSMENU --
         // ------------------------
         XSMENU.setParent( this );
         XSMENU.setTabStop( false );
         XSMENU.setDisplayPosition( 2 );
         XSMENU.setTop( 120 );
         XSMENU.setLeft( 191 );
         XSMENU.setTabPosition( 2 );
         XSMENU.setWidth( 800 );
         XSMENU.initialize();

         // -------------------------------
         // -- Initialize #XSSEARCHVIEW2 --
         // -------------------------------
         XSSEARCHVIEW2.setDisplayPosition( 3 );
         XSSEARCHVIEW2.setParent( this );
         XSSEARCHVIEW2.setTabPosition( 3 );
         XSSEARCHVIEW2.setTabStop( false );
         XSSEARCHVIEW2.setWidth( 800 );
         XSSEARCHVIEW2.setLeft( 191 );
         XSSEARCHVIEW2.setTop( 170 );
         XSSEARCHVIEW2.initialize();

         // --------------------------
         // -- Initialize #XSFOOTER --
         // --------------------------
         XSFOOTER.setTabStop( false );
         XSFOOTER.setParent( this );
         XSFOOTER.setDisplayPosition( 4 );
         XSFOOTER.setTabPosition( 4 );
         XSFOOTER.setTop( 1350 );
         XSFOOTER.setWidth( 800 );
         XSFOOTER.setLeft( 191 );
         XSFOOTER.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDWHITE" ) );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setTheme( Lansa.getTheme( "XSTHEME01" ) );
         this.setIcon( resource1 );

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
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.XSSRHVW1, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 24 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 24 );
      {

         //
         // #MySession.pProductSearch := #XSSearchValue
         //
         rtn.Line( 27 );
         ref.MYSESSION.ref.setPPRODUCTSEARCH( fld.XSSRCHVL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 29 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSHEADER", "XSMENU", "XSSRHVW2", "XSFOOTER", "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xssrhvw1.js
