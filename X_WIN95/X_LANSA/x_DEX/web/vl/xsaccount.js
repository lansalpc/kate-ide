// -------------------------
// -- Web Page: XSACCOUNT --
// -------------------------
LANSA.addComponent(
{
   id: "XSACCOUNT", 
   nm: "XSAccount", 
   ot: "wp", 
   tp: "Web Page", 
   de: "My Account", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "xslansati.png" );

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Maxwidth(1170) Minwidth(800) Width(4)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSHead01Item1) Manage(#XSHeader) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var XSHEAD01ITEM1 = this.createReference( "XSHEAD01ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Manage(#XSFooter) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSMenuItem1) Manage(#XSMenu) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var XSMENUITEM1 = this.createReference( "XSMENUITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#XSAccountInformation) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSHeader) Name(#XSHeader) Parent(#COM_OWNER) Tabstop(False) Left(191) Width(800) Top(10)
         //
         var XSHEADER = this.createReference( "XSHEADER", "XSHEADER" );

         //
         // DEFINE_COM Class(#XSMenu) Name(#XSMenu) Parent(#COM_OWNER) Tabstop(False) Displayposition(2) Top(120) Left(191) Tabposition(2) Width(800)
         //
         var XSMENU = this.createReference( "XSMENU", "XSMENU" );

         //
         // DEFINE_COM Class(#XSAccountInformation) Name(#XSAccountInformation) Displayposition(3) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(170) Width(800) Left(191) Height(729)
         //
         var XSACCOUNTINFORMATION = this.createReference( "XSACCOUNTINFORMATION", "XSACCINF" );

         //
         // DEFINE_COM Class(#XSFooter) Name(#XSFooter) Tabstop(False) Parent(#COM_OWNER) Displayposition(4) Tabposition(4) Top(909) Width(800) Left(191)
         //
         var XSFOOTER = this.createReference( "XSFOOTER", "XSFOOTER" );

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
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 3 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.initialize();

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

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( XSACCOUNTINFORMATION );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setMarginTop( 10 );
         LAYOUTITEM2.initialize();

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

         // --------------------------------------
         // -- Initialize #XSACCOUNTINFORMATION --
         // --------------------------------------
         XSACCOUNTINFORMATION.setDisplayPosition( 3 );
         XSACCOUNTINFORMATION.setParent( this );
         XSACCOUNTINFORMATION.setTabPosition( 3 );
         XSACCOUNTINFORMATION.setTabStop( false );
         XSACCOUNTINFORMATION.setTop( 170 );
         XSACCOUNTINFORMATION.setWidth( 800 );
         XSACCOUNTINFORMATION.setLeft( 191 );
         XSACCOUNTINFORMATION.setHeight( 729 );
         XSACCOUNTINFORMATION.initialize();

         // --------------------------
         // -- Initialize #XSFOOTER --
         // --------------------------
         XSFOOTER.setTabStop( false );
         XSFOOTER.setParent( this );
         XSFOOTER.setDisplayPosition( 4 );
         XSFOOTER.setTabPosition( 4 );
         XSFOOTER.setTop( 909 );
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
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSHEADER", "XSMENU", "XSACCINF", "XSFOOTER", "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xsaccount.js
