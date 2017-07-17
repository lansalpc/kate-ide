// -----------------------------
// -- Reusable Part: XSSHPVW2 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSHPVW2", 
   nm: "XSShoppingCartView2", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Shopping Cart View 2", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(2)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(45) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSShoppingCart3Item2) Manage(#XSShoppingCart3) Parent(#TableLayout1) Row(#Row2) Column(#Column1) Margintop(10) Alignment(TopCenter) Flow(Down)
         //
         var XSSHOPPINGCART3ITEM2 = this.createReference( "XSSHOPPINGCART3ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column2) Manage(#XSShoppingCartView4) Parent(#TableLayout1) Row(#Row2) Alignment(TopCenter) Marginleft(5) Sizing(FitToWidth) Margintop(10)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Alignment(TopLeft) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Columnspan(2)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCurrentSelectionItem1) Manage(#LCurrentSelection) Parent(#TableLayout2) Row(#Row5) Column(#Column5) Alignment(CenterLeft)
         //
         var LCURRENTSELECTIONITEM1 = this.createReference( "LCURRENTSELECTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(3) Height(45) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(0) Width(800) Style(#XSTheme01<PanelBorders1>) Layoutmanager(#TableLayout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentSelection) Caption('MY SHOPPING CART') Displayposition(1) Ellipses(Word) Height(43) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(798) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(0) Marginleft(10)
         //
         var LCURRENTSELECTION = this.createReference( "LCURRENTSELECTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSShoppingCartView3) Name(#XSShoppingCart3) Height(595) Parent(#COM_OWNER) Tabstop(False) Width(534) Top(55)
         //
         var XSSHOPPINGCART3 = this.createReference( "XSSHOPPINGCART3", "XSSHPVW3" );

         //
         // DEFINE_COM Class(#XSShoppingCartView4) Name(#XSShoppingCartView4) Displayposition(2) Height(640) Left(539) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Width(261) Top(55)
         //
         var XSSHOPPINGCARTVIEW4 = this.createReference( "XSSHOPPINGCARTVIEW4", "XSSHPVW4" );

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.setWidth( 2 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setHeight( 45 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // --------------------------------------
         // -- Initialize #XSSHOPPINGCART3ITEM2 --
         // --------------------------------------
         XSSHOPPINGCART3ITEM2.setManage( XSSHOPPINGCART3 );
         XSSHOPPINGCART3ITEM2.setParent( TABLELAYOUT1 );
         XSSHOPPINGCART3ITEM2.setRow( ROW2 );
         XSSHOPPINGCART3ITEM2.setColumn( COLUMN1 );
         XSSHOPPINGCART3ITEM2.setMarginTop( 10 );
         XSSHOPPINGCART3ITEM2.setAlignment( "TOPCENTER" );
         XSSHOPPINGCART3ITEM2.setFlow( "DOWN" );
         XSSHOPPINGCART3ITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setManage( XSSHOPPINGCARTVIEW4 );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW2 );
         LAYOUTITEM3.setAlignment( "TOPCENTER" );
         LAYOUTITEM3.setMarginLeft( 5 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setMarginTop( 10 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM1 --
         // -----------------------------
         PANEL1ITEM1.setAlignment( "TOPLEFT" );
         PANEL1ITEM1.setColumn( COLUMN1 );
         PANEL1ITEM1.setManage( PANEL1 );
         PANEL1ITEM1.setParent( TABLELAYOUT1 );
         PANEL1ITEM1.setRow( ROW1 );
         PANEL1ITEM1.setColumnSpan( 2 );
         PANEL1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 1 );
         COLUMN5.setParent( TABLELAYOUT2 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 1 );
         ROW5.setParent( TABLELAYOUT2 );
         ROW5.initialize();

         // ----------------------------------------
         // -- Initialize #LCURRENTSELECTIONITEM1 --
         // ----------------------------------------
         LCURRENTSELECTIONITEM1.setManage( LCURRENTSELECTION );
         LCURRENTSELECTIONITEM1.setParent( TABLELAYOUT2 );
         LCURRENTSELECTIONITEM1.setRow( ROW5 );
         LCURRENTSELECTIONITEM1.setColumn( COLUMN5 );
         LCURRENTSELECTIONITEM1.setAlignment( "CENTERLEFT" );
         LCURRENTSELECTIONITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 3 );
         PANEL1.setHeight( 45 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 3 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 0 );
         PANEL1.setWidth( 800 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.initialize();

         // -----------------------------------
         // -- Initialize #LCURRENTSELECTION --
         // -----------------------------------
         LCURRENTSELECTION.setCaption( "MY SHOPPING CART" );
         LCURRENTSELECTION.setDisplayPosition( 1 );
         LCURRENTSELECTION.setEllipses( "WORD" );
         LCURRENTSELECTION.setHeight( 43 );
         LCURRENTSELECTION.setParent( PANEL1 );
         LCURRENTSELECTION.setTabPosition( 1 );
         LCURRENTSELECTION.setTabStop( false );
         LCURRENTSELECTION.setTop( 0 );
         LCURRENTSELECTION.setVerticalAlignment( "CENTER" );
         LCURRENTSELECTION.setWidth( 798 );
         LCURRENTSELECTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTSELECTION.setLeft( 0 );
         LCURRENTSELECTION.setMarginLeft( 10 );
         LCURRENTSELECTION.initialize();

         // ---------------------------------
         // -- Initialize #XSSHOPPINGCART3 --
         // ---------------------------------
         XSSHOPPINGCART3.setHeight( 595 );
         XSSHOPPINGCART3.setParent( this );
         XSSHOPPINGCART3.setTabStop( false );
         XSSHOPPINGCART3.setWidth( 534 );
         XSSHOPPINGCART3.setTop( 55 );
         XSSHOPPINGCART3.initialize();

         // -------------------------------------
         // -- Initialize #XSSHOPPINGCARTVIEW4 --
         // -------------------------------------
         XSSHOPPINGCARTVIEW4.setDisplayPosition( 2 );
         XSSHOPPINGCARTVIEW4.setHeight( 640 );
         XSSHOPPINGCARTVIEW4.setLeft( 539 );
         XSSHOPPINGCARTVIEW4.setParent( this );
         XSSHOPPINGCARTVIEW4.setTabPosition( 2 );
         XSSHOPPINGCARTVIEW4.setTabStop( false );
         XSSHOPPINGCARTVIEW4.setWidth( 261 );
         XSSHOPPINGCARTVIEW4.setTop( 55 );
         XSSHOPPINGCARTVIEW4.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 650 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 800 );
         this.setLayoutManager( TABLELAYOUT1 );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSSHPVW3", "XSSHPVW4", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL" ]
});

//# sourceURL=xsshpvw2.js
