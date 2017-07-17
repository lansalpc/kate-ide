// ----------------------
// -- Web Page: XSHOME --
// ----------------------
LANSA.addComponent(
{
   id: "XSHOME", 
   nm: "XSHome", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Home", 
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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSHeaderItem1) Manage(#XSHeader) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var XSHEADERITEM1 = this.createReference( "XSHEADERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column2) Manage(#XSMenu) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#XSBanner) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column2) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Column(#Column2) Manage(#XSServices) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Manage(#XSFooter) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSFeaturedProductsItem1) Alignment(TopCenter) Column(#Column2) Manage(#XSFeaturedProducts) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var XSFEATUREDPRODUCTSITEM1 = this.createReference( "XSFEATUREDPRODUCTSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSHeader) Name(#XSHeader) Parent(#COM_OWNER) Tabstop(False) Left(200) Width(800) Top(10)
         //
         var XSHEADER = this.createReference( "XSHEADER", "XSHEADER" );

         //
         // DEFINE_COM Class(#XSMenu) Name(#XSMenu) Parent(#COM_OWNER) Tabstop(False) Left(200) Displayposition(2) Tabposition(2) Top(120) Width(800)
         //
         var XSMENU = this.createReference( "XSMENU", "XSMENU" );

         //
         // DEFINE_COM Class(#XSBanner) Name(#XSBanner) Parent(#COM_OWNER) Tabstop(False) Top(170) Left(200) Displayposition(3) Tabposition(3) Width(800)
         //
         var XSBANNER = this.createReference( "XSBANNER", "XSBANNER" );

         //
         // DEFINE_COM Class(#XSFeaturedProducts) Name(#XSFeaturedProducts) Displayposition(4) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Left(200) Top(496) Width(800)
         //
         var XSFEATUREDPRODUCTS = this.createReference( "XSFEATUREDPRODUCTS", "XSFTRDPRD" );

         //
         // DEFINE_COM Class(#XSServices) Name(#XSServices) Displayposition(5) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(931) Left(200)
         //
         var XSSERVICES = this.createReference( "XSSERVICES", "XSSRVCE1" );

         //
         // DEFINE_COM Class(#XSFooter) Name(#XSFooter) Tabstop(False) Parent(#COM_OWNER) Displayposition(6) Tabposition(6) Width(800) Left(200) Top(1191)
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
         // -- Initialize #XSHEADERITEM1 --
         // -------------------------------
         XSHEADERITEM1.setManage( XSHEADER );
         XSHEADERITEM1.setParent( TABLELAYOUT1 );
         XSHEADERITEM1.setRow( ROW1 );
         XSHEADERITEM1.setSizing( "FITTOWIDTH" );
         XSHEADERITEM1.setColumn( COLUMN2 );
         XSHEADERITEM1.setFlow( "DOWN" );
         XSHEADERITEM1.setAlignment( "TOPCENTER" );
         XSHEADERITEM1.setMarginTop( 10 );
         XSHEADERITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setManage( XSMENU );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setMarginTop( 10 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( XSBANNER );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setMarginTop( 10 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setAlignment( "TOPCENTER" );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setMarginTop( 10 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setColumn( COLUMN2 );
         LAYOUTITEM4.setManage( XSSERVICES );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW1 );
         LAYOUTITEM4.setAlignment( "TOPCENTER" );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setMarginTop( 10 );
         LAYOUTITEM4.initialize();

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

         // -----------------------------------------
         // -- Initialize #XSFEATUREDPRODUCTSITEM1 --
         // -----------------------------------------
         XSFEATUREDPRODUCTSITEM1.setAlignment( "TOPCENTER" );
         XSFEATUREDPRODUCTSITEM1.setColumn( COLUMN2 );
         XSFEATUREDPRODUCTSITEM1.setManage( XSFEATUREDPRODUCTS );
         XSFEATUREDPRODUCTSITEM1.setParent( TABLELAYOUT1 );
         XSFEATUREDPRODUCTSITEM1.setRow( ROW1 );
         XSFEATUREDPRODUCTSITEM1.setSizing( "FITTOWIDTH" );
         XSFEATUREDPRODUCTSITEM1.setFlow( "DOWN" );
         XSFEATUREDPRODUCTSITEM1.setMarginTop( 10 );
         XSFEATUREDPRODUCTSITEM1.initialize();

         // --------------------------
         // -- Initialize #XSHEADER --
         // --------------------------
         XSHEADER.setParent( this );
         XSHEADER.setTabStop( false );
         XSHEADER.setLeft( 200 );
         XSHEADER.setWidth( 800 );
         XSHEADER.setTop( 10 );
         XSHEADER.initialize();

         // ------------------------
         // -- Initialize #XSMENU --
         // ------------------------
         XSMENU.setParent( this );
         XSMENU.setTabStop( false );
         XSMENU.setLeft( 200 );
         XSMENU.setDisplayPosition( 2 );
         XSMENU.setTabPosition( 2 );
         XSMENU.setTop( 120 );
         XSMENU.setWidth( 800 );
         XSMENU.initialize();

         // --------------------------
         // -- Initialize #XSBANNER --
         // --------------------------
         XSBANNER.setParent( this );
         XSBANNER.setTabStop( false );
         XSBANNER.setTop( 170 );
         XSBANNER.setLeft( 200 );
         XSBANNER.setDisplayPosition( 3 );
         XSBANNER.setTabPosition( 3 );
         XSBANNER.setWidth( 800 );
         XSBANNER.initialize();

         // ------------------------------------
         // -- Initialize #XSFEATUREDPRODUCTS --
         // ------------------------------------
         XSFEATUREDPRODUCTS.setDisplayPosition( 4 );
         XSFEATUREDPRODUCTS.setParent( this );
         XSFEATUREDPRODUCTS.setTabPosition( 4 );
         XSFEATUREDPRODUCTS.setTabStop( false );
         XSFEATUREDPRODUCTS.setLeft( 200 );
         XSFEATUREDPRODUCTS.setTop( 496 );
         XSFEATUREDPRODUCTS.setWidth( 800 );
         XSFEATUREDPRODUCTS.initialize();

         // ----------------------------
         // -- Initialize #XSSERVICES --
         // ----------------------------
         XSSERVICES.setDisplayPosition( 5 );
         XSSERVICES.setParent( this );
         XSSERVICES.setTabPosition( 5 );
         XSSERVICES.setTabStop( false );
         XSSERVICES.setTop( 931 );
         XSSERVICES.setLeft( 200 );
         XSSERVICES.initialize();

         // --------------------------
         // -- Initialize #XSFOOTER --
         // --------------------------
         XSFOOTER.setTabStop( false );
         XSFOOTER.setParent( this );
         XSFOOTER.setDisplayPosition( 6 );
         XSFOOTER.setTabPosition( 6 );
         XSFOOTER.setWidth( 800 );
         XSFOOTER.setLeft( 200 );
         XSFOOTER.setTop( 1191 );
         XSFOOTER.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( TABLELAYOUT1 );
         this.setIcon( resource1 );
         this.setTheme( Lansa.getTheme( "XSTHEME01" ) );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSHEADER", "XSMENU", "XSBANNER", "XSFTRDPRD", "XSSRVCE1", "XSFOOTER", "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xshome.js
