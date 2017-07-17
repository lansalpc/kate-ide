// ------------------------
// -- Web Page: XSSTRLOC --
// ------------------------
LANSA.addComponent(
{
   id: "XSSTRLOC", 
   nm: "XSStoreLocator", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Store Locator", 
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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Parent(#TableLayout1) Displayposition(1)
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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSHeaderItem1) Manage(#XSHeader2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column2) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var XSHEADERITEM1 = this.createReference( "XSHEADERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(3) Marginleft(5) Marginright(5) Marginbottom(3)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSStoreMapItem1) Alignment(TopCenter) Column(#Column2) Manage(#XSStoreMap) Parent(#TableLayout1) Row(#Row1) Flow(Down) Margintop(10) Sizing(FitToWidth)
         //
         var XSSTOREMAPITEM1 = this.createReference( "XSSTOREMAPITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column2) Manage(#XSLocatorSearch) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter) Sizing(FitToWidth) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#Column2) Manage(#XSFooter) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSHeader2) Name(#XSHeader2) Parent(#COM_OWNER) Tabstop(False) Left(191) Width(800) Top(10)
         //
         var XSHEADER2 = this.createReference( "XSHEADER2", "XSHEAD02" );

         //
         // DEFINE_COM Class(#XSLocatorSearch) Name(#XSLocatorSearch) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(120) Width(800) Left(191)
         //
         var XSLOCATORSEARCH = this.createReference( "XSLOCATORSEARCH", "XSSRCLOC" );

         //
         // DEFINE_COM Class(#XSStoreMap) Name(#XSStoreMap) Parent(#COM_OWNER) Tabstop(False) Top(287) Left(191) Displayposition(3) Tabposition(3) Style(#XSTheme01<BackgroundWhite>) Width(800) Height(550)
         //
         var XSSTOREMAP = this.createReference( "XSSTOREMAP", "XSSTRMAP" );

         //
         // DEFINE_COM Class(#XSFooter) Name(#XSFooter) Displayposition(4) Left(191) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(847) Width(800)
         //
         var XSFOOTER = this.createReference( "XSFOOTER", "XSFOOTER" );

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.setDisplayPosition( 1 );
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
         // -- Initialize #XSHEADERITEM1 --
         // -------------------------------
         XSHEADERITEM1.setManage( XSHEADER2 );
         XSHEADERITEM1.setParent( TABLELAYOUT1 );
         XSHEADERITEM1.setRow( ROW1 );
         XSHEADERITEM1.setSizing( "FITTOWIDTH" );
         XSHEADERITEM1.setColumn( COLUMN2 );
         XSHEADERITEM1.setFlow( "DOWN" );
         XSHEADERITEM1.setAlignment( "TOPCENTER" );
         XSHEADERITEM1.setMarginTop( 10 );
         XSHEADERITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setMarginTop( 3 );
         LAYOUTITEM2.setMarginLeft( 5 );
         LAYOUTITEM2.setMarginRight( 5 );
         LAYOUTITEM2.setMarginBottom( 3 );
         LAYOUTITEM2.initialize();

         // ---------------------------------
         // -- Initialize #XSSTOREMAPITEM1 --
         // ---------------------------------
         XSSTOREMAPITEM1.setAlignment( "TOPCENTER" );
         XSSTOREMAPITEM1.setColumn( COLUMN2 );
         XSSTOREMAPITEM1.setManage( XSSTOREMAP );
         XSSTOREMAPITEM1.setParent( TABLELAYOUT1 );
         XSSTOREMAPITEM1.setRow( ROW1 );
         XSSTOREMAPITEM1.setFlow( "DOWN" );
         XSSTOREMAPITEM1.setMarginTop( 10 );
         XSSTOREMAPITEM1.setSizing( "FITTOWIDTH" );
         XSSTOREMAPITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setManage( XSLOCATORSEARCH );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setAlignment( "TOPCENTER" );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setMarginTop( 10 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setManage( XSFOOTER );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.setAlignment( "TOPCENTER" );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setMarginTop( 10 );
         LAYOUTITEM5.initialize();

         // ---------------------------
         // -- Initialize #XSHEADER2 --
         // ---------------------------
         XSHEADER2.setParent( this );
         XSHEADER2.setTabStop( false );
         XSHEADER2.setLeft( 191 );
         XSHEADER2.setWidth( 800 );
         XSHEADER2.setTop( 10 );
         XSHEADER2.initialize();

         // ---------------------------------
         // -- Initialize #XSLOCATORSEARCH --
         // ---------------------------------
         XSLOCATORSEARCH.setDisplayPosition( 2 );
         XSLOCATORSEARCH.setParent( this );
         XSLOCATORSEARCH.setTabPosition( 2 );
         XSLOCATORSEARCH.setTabStop( false );
         XSLOCATORSEARCH.setTop( 120 );
         XSLOCATORSEARCH.setWidth( 800 );
         XSLOCATORSEARCH.setLeft( 191 );
         XSLOCATORSEARCH.initialize();

         // ----------------------------
         // -- Initialize #XSSTOREMAP --
         // ----------------------------
         XSSTOREMAP.setParent( this );
         XSSTOREMAP.setTabStop( false );
         XSSTOREMAP.setTop( 287 );
         XSSTOREMAP.setLeft( 191 );
         XSSTOREMAP.setDisplayPosition( 3 );
         XSSTOREMAP.setTabPosition( 3 );
         XSSTOREMAP.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDWHITE" ) );
         XSSTOREMAP.setWidth( 800 );
         XSSTOREMAP.setHeight( 550 );
         XSSTOREMAP.initialize();

         // --------------------------
         // -- Initialize #XSFOOTER --
         // --------------------------
         XSFOOTER.setDisplayPosition( 4 );
         XSFOOTER.setLeft( 191 );
         XSFOOTER.setParent( this );
         XSFOOTER.setTabPosition( 4 );
         XSFOOTER.setTabStop( false );
         XSFOOTER.setTop( 847 );
         XSFOOTER.setWidth( 800 );
         XSFOOTER.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
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
   rc: [ "XSHEAD02", "XSSRCLOC", "XSSTRMAP", "XSFOOTER", "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xsstrloc.js
