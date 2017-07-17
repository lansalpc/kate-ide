// ------------------------
// -- Web Page: XSSHPVW1 --
// ------------------------
LANSA.addComponent(
{
   id: "XSSHPVW1", 
   nm: "XSShoppingCartView", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Shopping Cart", 
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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#column2) Displayposition(2) Parent(#TableLayout1) Maxwidth(1170) Minwidth(800) Width(4)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1) Width(40) Units(Pixels)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(4) Parent(#TableLayout1)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSHead01Item1) Manage(#XSHeader) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var XSHEAD01ITEM1 = this.createReference( "XSHEAD01ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Manage(#XSFooter) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Alignment(TopCenter) Flow(Down) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSMenuItem1) Manage(#XSMenu) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#column2) Alignment(TopCenter) Flow(Down) Margintop(10) Columnspan(2)
         //
         var XSMENUITEM1 = this.createReference( "XSMENUITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSShoppingCart2Item1) Alignment(TopCenter) Column(#column2) Manage(#XSShoppingCart2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Margintop(10) Columnspan(2)
         //
         var XSSHOPPINGCART2ITEM1 = this.createReference( "XSSHOPPINGCART2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column3) Manage(#XSComponentHelp) Parent(#TableLayout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSHeader) Name(#XSHeader) Parent(#COM_OWNER) Tabstop(False) Left(171) Width(800) Top(10)
         //
         var XSHEADER = this.createReference( "XSHEADER", "XSHEADER" );

         //
         // DEFINE_COM Class(#XSMenu) Name(#XSMenu) Parent(#COM_OWNER) Tabstop(False) Displayposition(2) Top(120) Left(171) Tabposition(3)
         //
         var XSMENU = this.createReference( "XSMENU", "XSMENU" );

         //
         // DEFINE_COM Class(#XSShoppingCartView2) Name(#XSShoppingCart2) Displayposition(3) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(170) Left(171) Width(840)
         //
         var XSSHOPPINGCART2 = this.createReference( "XSSHOPPINGCART2", "XSSHPVW2" );

         //
         // DEFINE_COM Class(#XSFooter) Name(#XSFooter) Tabstop(False) Parent(#COM_OWNER) Displayposition(4) Tabposition(4) Top(830) Width(840) Left(171)
         //
         var XSFOOTER = this.createReference( "XSFOOTER", "XSFOOTER" );

         //
         // DEFINE_COM Class(#XSComponentHelp) Name(#XSComponentHelp) Displayposition(5) Height(800) Left(971) Parent(#COM_OWNER) Tabposition(5) Tabstop(False)
         //
         var XSCOMPONENTHELP = this.createReference( "XSCOMPONENTHELP", "XSCMPHLP" );

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
         COLUMN3.setWidth( 40 );
         COLUMN3.setUnits( "PIXELS" );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 4 );
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
         LAYOUTITEM5.setColumnSpan( 2 );
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
         XSMENUITEM1.setColumnSpan( 2 );
         XSMENUITEM1.initialize();

         // --------------------------------------
         // -- Initialize #XSSHOPPINGCART2ITEM1 --
         // --------------------------------------
         XSSHOPPINGCART2ITEM1.setAlignment( "TOPCENTER" );
         XSSHOPPINGCART2ITEM1.setColumn( COLUMN2 );
         XSSHOPPINGCART2ITEM1.setManage( XSSHOPPINGCART2 );
         XSSHOPPINGCART2ITEM1.setParent( TABLELAYOUT1 );
         XSSHOPPINGCART2ITEM1.setRow( ROW1 );
         XSSHOPPINGCART2ITEM1.setSizing( "FITTOWIDTH" );
         XSSHOPPINGCART2ITEM1.setFlow( "DOWN" );
         XSSHOPPINGCART2ITEM1.setMarginTop( 10 );
         XSSHOPPINGCART2ITEM1.setColumnSpan( 2 );
         XSSHOPPINGCART2ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN3 );
         LAYOUTITEM1.setManage( XSCOMPONENTHELP );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // --------------------------
         // -- Initialize #XSHEADER --
         // --------------------------
         XSHEADER.setParent( this );
         XSHEADER.setTabStop( false );
         XSHEADER.setLeft( 171 );
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
         XSMENU.setLeft( 171 );
         XSMENU.setTabPosition( 3 );
         XSMENU.initialize();

         // ---------------------------------
         // -- Initialize #XSSHOPPINGCART2 --
         // ---------------------------------
         XSSHOPPINGCART2.setDisplayPosition( 3 );
         XSSHOPPINGCART2.setParent( this );
         XSSHOPPINGCART2.setTabPosition( 2 );
         XSSHOPPINGCART2.setTabStop( false );
         XSSHOPPINGCART2.setTop( 170 );
         XSSHOPPINGCART2.setLeft( 171 );
         XSSHOPPINGCART2.setWidth( 840 );
         XSSHOPPINGCART2.initialize();

         // --------------------------
         // -- Initialize #XSFOOTER --
         // --------------------------
         XSFOOTER.setTabStop( false );
         XSFOOTER.setParent( this );
         XSFOOTER.setDisplayPosition( 4 );
         XSFOOTER.setTabPosition( 4 );
         XSFOOTER.setTop( 830 );
         XSFOOTER.setWidth( 840 );
         XSFOOTER.setLeft( 171 );
         XSFOOTER.initialize();

         // ---------------------------------
         // -- Initialize #XSCOMPONENTHELP --
         // ---------------------------------
         XSCOMPONENTHELP.setDisplayPosition( 5 );
         XSCOMPONENTHELP.setHeight( 800 );
         XSCOMPONENTHELP.setLeft( 971 );
         XSCOMPONENTHELP.setParent( this );
         XSCOMPONENTHELP.setTabPosition( 5 );
         XSCOMPONENTHELP.setTabStop( false );
         XSCOMPONENTHELP.initialize();

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
   rc: [ "XSHEADER", "XSMENU", "XSSHPVW2", "XSFOOTER", "XSCMPHLP", "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xsshpvw1.js
