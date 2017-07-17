// -----------------------------
// -- Reusable Part: XSSHPVW4 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSHPVW4", 
   nm: "XSShoppingCartView4", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Shopping Cart Total", 
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
      XSCRTTAX:
      {
         nm: "XSCRTTAX",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total Tax",
         h1: "Cart",
         h2: "Tax",
         h3: " ",
         de: "Cart Total Tax",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTPRC:
      {
         nm: "XSCRTPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Ttl Price",
         h1: "Cart",
         h2: "Total",
         h3: "Price",
         de: "Cart Total Price",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTTTL:
      {
         nm: "XSCRTTTL",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total",
         h1: "Cart",
         h2: "Total",
         h3: " ",
         de: "Cart Total",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTSHP:
      {
         nm: "XSCRTSHP",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total Tax",
         h1: "Cart",
         h2: "Tax",
         h3: " ",
         de: "Cart Total Shipping",
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

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         UpdateSummary: 
         {
         },

         IncludeTaxes: 
         {
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
         this.addFields( "XSSHPVW4", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(2)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(25) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(40) Units(Pixels)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1) Height(40) Units(Pixels)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(4) Parent(#TableLayout1) Height(40) Units(Pixels)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(5) Parent(#TableLayout1) Height(40) Units(Pixels)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(6) Parent(#TableLayout1) Units(Pixels) Height(100)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(7) Parent(#TableLayout1) Height(70) Units(Pixels)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCartTotalItem1) Alignment(TopLeft) Column(#Column1) Manage(#LCartSummary) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Columnspan(2)
         //
         var LCARTTOTALITEM1 = this.createReference( "LCARTTOTALITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(CenterLeft) Column(#Column1) Flow(Down) Manage(#LProductTotal) Parent(#TableLayout1) Row(#Row2)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(CenterLeft) Column(#Column1) Flow(Down) Manage(#LTaxes) Parent(#TableLayout1) Row(#Row3)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(CenterLeft) Column(#Column1) Flow(Down) Manage(#LShipping) Parent(#TableLayout1) Row(#Row4)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(CenterLeft) Column(#Column1) Flow(Down) Manage(#LCartTotal) Parent(#TableLayout1) Row(#Row5)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(CenterLeft) Column(#Column2) Flow(Down) Manage(#XSCartTotalTax) Parent(#TableLayout1) Row(#Row3)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(CenterLeft) Column(#Column2) Flow(Down) Manage(#XSCartTotalPrice) Parent(#TableLayout1) Row(#Row2)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(CenterLeft) Column(#Column2) Flow(Down) Manage(#XSCartTotal) Parent(#TableLayout1) Row(#Row5)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Button1Item1) Column(#Column1) Manage(#ContinueShoppingButton) Parent(#TableLayout1) Row(#Row6) Sizing(None) Columnspan(2) Alignment(BottomRight) Marginright(10) Marginbottom(5)
         //
         var BUTTON1ITEM1 = this.createReference( "BUTTON1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Button2Item1) Column(#Column1) Manage(#CheckoutButton) Parent(#TableLayout1) Row(#Row7) Sizing(None) Alignment(BottomRight) Marginright(10) Columnspan(2) Marginbottom(5)
         //
         var BUTTON2ITEM1 = this.createReference( "BUTTON2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCartSummary) Caption('Summary') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Marginleft(20) Width(398) Themedrawstyle('PanelHeader1')
         //
         var LCARTSUMMARY = this.createReference( "LCARTSUMMARY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LProductTotal) Caption('Products Total') Displayposition(2) Ellipses(Word) Height(40) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(25) Verticalalignment(Center) Width(266) Left(0) Marginleft(20) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LPRODUCTTOTAL = this.createReference( "LPRODUCTTOTAL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LTaxes) Caption('Taxes') Displayposition(3) Ellipses(Word) Height(40) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(65) Verticalalignment(Center) Width(266) Left(0) Marginleft(20) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LTAXES = this.createReference( "LTAXES", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LShipping) Caption('Shipping not included') Displayposition(4) Ellipses(Word) Height(40) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(105) Verticalalignment(Center) Width(266) Left(0) Marginleft(20) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LSHIPPING = this.createReference( "LSHIPPING", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCartTotal) Caption('Cart Total') Displayposition(5) Ellipses(Word) Height(40) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(145) Verticalalignment(Center) Width(266) Left(0) Marginleft(20) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LCARTTOTAL = this.createReference( "LCARTTOTAL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSCartTotalTax.Visual) Name(#XSCartTotalTax) Displayposition(6) Left(266) Parent(#COM_OWNER) Tabposition(6) Top(65) Marginleft(10) Width(132) Height(40) Readonly(True) Editstyle(#XSTheme01<Text10AlmostBlack>) Style(#XSTheme01<Text10AlmostBlack>) Caption('$') Labeltype(Caption) Labelposition(None)
         //
         var XSCARTTOTALTAX = this.createFieldReference( "XSCARTTOTALTAX", Fields.XSCRTTAX.VISUALEDIT );

         //
         // DEFINE_COM Class(#XSCartTotalPrice.Visual) Name(#XSCartTotalPrice) Displayposition(7) Left(266) Parent(#COM_OWNER) Tabposition(7) Top(25) Marginleft(10) Width(132) Height(40) Readonly(True) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Caption('$') Labeltype(Caption)
         //
         var XSCARTTOTALPRICE = this.createFieldReference( "XSCARTTOTALPRICE", Fields.XSCRTPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#XSCartTotal.Visual) Name(#XSCartTotal) Displayposition(8) Left(266) Parent(#COM_OWNER) Tabposition(8) Top(145) Marginleft(10) Width(132) Height(40) Readonly(True) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Caption('$') Labeltype(Caption)
         //
         var XSCARTTOTAL = this.createFieldReference( "XSCARTTOTAL", Fields.XSCRTTTL.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#ContinueShoppingButton) Caption('Continue Shopping') Displayposition(9) Left(208) Parent(#COM_OWNER) Tabposition(9) Top(230) Width(180) Themedrawstyle('ButtonLook1') Height(50)
         //
         var CONTINUESHOPPINGBUTTON = this.createReference( "CONTINUESHOPPINGBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#CheckoutButton) Caption('Checkout') Displayposition(10) Left(208) Parent(#COM_OWNER) Tabposition(10) Top(300) Width(180) Themedrawstyle('ButtonLook1') Height(50)
         //
         var CHECKOUTBUTTON = this.createReference( "CHECKOUTBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#Prim_boln) Name(#IncludeTax)
         //
         var INCLUDETAX = this.createReference( "INCLUDETAX", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#Prim_boln) Name(#IncludeShipping)
         //
         var INCLUDESHIPPING = this.createReference( "INCLUDESHIPPING", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#XSServer.GotoProducts) Name(#Products)
         //
         var PRODUCTS = this.createWebPageRequest( "PRODUCTS", "XSSERVER", "GOTOPRODUCTS" );

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
         ROW1.setHeight( 25 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( 40 );
         ROW2.setUnits( "PIXELS" );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.setHeight( 40 );
         ROW3.setUnits( "PIXELS" );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 4 );
         ROW4.setParent( TABLELAYOUT1 );
         ROW4.setHeight( 40 );
         ROW4.setUnits( "PIXELS" );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 5 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.setHeight( 40 );
         ROW5.setUnits( "PIXELS" );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 6 );
         ROW6.setParent( TABLELAYOUT1 );
         ROW6.setUnits( "PIXELS" );
         ROW6.setHeight( 100 );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 7 );
         ROW7.setParent( TABLELAYOUT1 );
         ROW7.setHeight( 70 );
         ROW7.setUnits( "PIXELS" );
         ROW7.initialize();

         // ---------------------------------
         // -- Initialize #LCARTTOTALITEM1 --
         // ---------------------------------
         LCARTTOTALITEM1.setAlignment( "TOPLEFT" );
         LCARTTOTALITEM1.setColumn( COLUMN1 );
         LCARTTOTALITEM1.setManage( LCARTSUMMARY );
         LCARTTOTALITEM1.setParent( TABLELAYOUT1 );
         LCARTTOTALITEM1.setRow( ROW1 );
         LCARTTOTALITEM1.setSizing( "FITTOWIDTH" );
         LCARTTOTALITEM1.setColumnSpan( 2 );
         LCARTTOTALITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "CENTERLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( LPRODUCTTOTAL );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "CENTERLEFT" );
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( LTAXES );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW3 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "CENTERLEFT" );
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( LSHIPPING );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW4 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "CENTERLEFT" );
         LAYOUTITEM4.setColumn( COLUMN1 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( LCARTTOTAL );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW5 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "CENTERLEFT" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( XSCARTTOTALTAX );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW3 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "CENTERLEFT" );
         LAYOUTITEM6.setColumn( COLUMN2 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( XSCARTTOTALPRICE );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW2 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "CENTERLEFT" );
         LAYOUTITEM7.setColumn( COLUMN2 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( XSCARTTOTAL );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW5 );
         LAYOUTITEM7.initialize();

         // ------------------------------
         // -- Initialize #BUTTON1ITEM1 --
         // ------------------------------
         BUTTON1ITEM1.setColumn( COLUMN1 );
         BUTTON1ITEM1.setManage( CONTINUESHOPPINGBUTTON );
         BUTTON1ITEM1.setParent( TABLELAYOUT1 );
         BUTTON1ITEM1.setRow( ROW6 );
         BUTTON1ITEM1.setSizing( "NONE" );
         BUTTON1ITEM1.setColumnSpan( 2 );
         BUTTON1ITEM1.setAlignment( "BOTTOMRIGHT" );
         BUTTON1ITEM1.setMarginRight( 10 );
         BUTTON1ITEM1.setMarginBottom( 5 );
         BUTTON1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #BUTTON2ITEM1 --
         // ------------------------------
         BUTTON2ITEM1.setColumn( COLUMN1 );
         BUTTON2ITEM1.setManage( CHECKOUTBUTTON );
         BUTTON2ITEM1.setParent( TABLELAYOUT1 );
         BUTTON2ITEM1.setRow( ROW7 );
         BUTTON2ITEM1.setSizing( "NONE" );
         BUTTON2ITEM1.setAlignment( "BOTTOMRIGHT" );
         BUTTON2ITEM1.setMarginRight( 10 );
         BUTTON2ITEM1.setColumnSpan( 2 );
         BUTTON2ITEM1.setMarginBottom( 5 );
         BUTTON2ITEM1.initialize();

         // ------------------------------
         // -- Initialize #LCARTSUMMARY --
         // ------------------------------
         LCARTSUMMARY.setCaption( "Summary" );
         LCARTSUMMARY.setDisplayPosition( 1 );
         LCARTSUMMARY.setEllipses( "WORD" );
         LCARTSUMMARY.setHeight( 25 );
         LCARTSUMMARY.setLeft( 0 );
         LCARTSUMMARY.setParent( this );
         LCARTSUMMARY.setTabPosition( 1 );
         LCARTSUMMARY.setTabStop( false );
         LCARTSUMMARY.setTop( 0 );
         LCARTSUMMARY.setVerticalAlignment( "CENTER" );
         LCARTSUMMARY.setMarginLeft( 20 );
         LCARTSUMMARY.setWidth( 398 );
         LCARTSUMMARY.setThemeDrawStyle( "PanelHeader1" );
         LCARTSUMMARY.initialize();

         // -------------------------------
         // -- Initialize #LPRODUCTTOTAL --
         // -------------------------------
         LPRODUCTTOTAL.setCaption( "Products Total" );
         LPRODUCTTOTAL.setDisplayPosition( 2 );
         LPRODUCTTOTAL.setEllipses( "WORD" );
         LPRODUCTTOTAL.setHeight( 40 );
         LPRODUCTTOTAL.setParent( this );
         LPRODUCTTOTAL.setTabPosition( 2 );
         LPRODUCTTOTAL.setTabStop( false );
         LPRODUCTTOTAL.setTop( 25 );
         LPRODUCTTOTAL.setVerticalAlignment( "CENTER" );
         LPRODUCTTOTAL.setWidth( 266 );
         LPRODUCTTOTAL.setLeft( 0 );
         LPRODUCTTOTAL.setMarginLeft( 20 );
         LPRODUCTTOTAL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LPRODUCTTOTAL.initialize();

         // ------------------------
         // -- Initialize #LTAXES --
         // ------------------------
         LTAXES.setCaption( "Taxes" );
         LTAXES.setDisplayPosition( 3 );
         LTAXES.setEllipses( "WORD" );
         LTAXES.setHeight( 40 );
         LTAXES.setParent( this );
         LTAXES.setTabPosition( 3 );
         LTAXES.setTabStop( false );
         LTAXES.setTop( 65 );
         LTAXES.setVerticalAlignment( "CENTER" );
         LTAXES.setWidth( 266 );
         LTAXES.setLeft( 0 );
         LTAXES.setMarginLeft( 20 );
         LTAXES.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LTAXES.initialize();

         // ---------------------------
         // -- Initialize #LSHIPPING --
         // ---------------------------
         LSHIPPING.setCaption( "Shipping not included" );
         LSHIPPING.setDisplayPosition( 4 );
         LSHIPPING.setEllipses( "WORD" );
         LSHIPPING.setHeight( 40 );
         LSHIPPING.setParent( this );
         LSHIPPING.setTabPosition( 4 );
         LSHIPPING.setTabStop( false );
         LSHIPPING.setTop( 105 );
         LSHIPPING.setVerticalAlignment( "CENTER" );
         LSHIPPING.setWidth( 266 );
         LSHIPPING.setLeft( 0 );
         LSHIPPING.setMarginLeft( 20 );
         LSHIPPING.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LSHIPPING.initialize();

         // ----------------------------
         // -- Initialize #LCARTTOTAL --
         // ----------------------------
         LCARTTOTAL.setCaption( "Cart Total" );
         LCARTTOTAL.setDisplayPosition( 5 );
         LCARTTOTAL.setEllipses( "WORD" );
         LCARTTOTAL.setHeight( 40 );
         LCARTTOTAL.setParent( this );
         LCARTTOTAL.setTabPosition( 5 );
         LCARTTOTAL.setTabStop( false );
         LCARTTOTAL.setTop( 145 );
         LCARTTOTAL.setVerticalAlignment( "CENTER" );
         LCARTTOTAL.setWidth( 266 );
         LCARTTOTAL.setLeft( 0 );
         LCARTTOTAL.setMarginLeft( 20 );
         LCARTTOTAL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LCARTTOTAL.initialize();

         // --------------------------------
         // -- Initialize #XSCARTTOTALTAX --
         // --------------------------------
         XSCARTTOTALTAX.setDisplayPosition( 6 );
         XSCARTTOTALTAX.setLeft( 266 );
         XSCARTTOTALTAX.setParent( this );
         XSCARTTOTALTAX.setTabPosition( 6 );
         XSCARTTOTALTAX.setTop( 65 );
         XSCARTTOTALTAX.setMarginLeft( 10 );
         XSCARTTOTALTAX.setWidth( 132 );
         XSCARTTOTALTAX.setHeight( 40 );
         XSCARTTOTALTAX.setReadOnly( true );
         XSCARTTOTALTAX.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSCARTTOTALTAX.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSCARTTOTALTAX.setCaption( "$" );
         XSCARTTOTALTAX.setLabelType( "CAPTION" );
         XSCARTTOTALTAX.setLabelPosition( "NONE" );
         XSCARTTOTALTAX.applyDefault();
         XSCARTTOTALTAX.initialize();

         // ----------------------------------
         // -- Initialize #XSCARTTOTALPRICE --
         // ----------------------------------
         XSCARTTOTALPRICE.setDisplayPosition( 7 );
         XSCARTTOTALPRICE.setLeft( 266 );
         XSCARTTOTALPRICE.setParent( this );
         XSCARTTOTALPRICE.setTabPosition( 7 );
         XSCARTTOTALPRICE.setTop( 25 );
         XSCARTTOTALPRICE.setMarginLeft( 10 );
         XSCARTTOTALPRICE.setWidth( 132 );
         XSCARTTOTALPRICE.setHeight( 40 );
         XSCARTTOTALPRICE.setReadOnly( true );
         XSCARTTOTALPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSCARTTOTALPRICE.setCaption( "$" );
         XSCARTTOTALPRICE.setLabelType( "CAPTION" );
         XSCARTTOTALPRICE.applyDefault();
         XSCARTTOTALPRICE.initialize();

         // -----------------------------
         // -- Initialize #XSCARTTOTAL --
         // -----------------------------
         XSCARTTOTAL.setDisplayPosition( 8 );
         XSCARTTOTAL.setLeft( 266 );
         XSCARTTOTAL.setParent( this );
         XSCARTTOTAL.setTabPosition( 8 );
         XSCARTTOTAL.setTop( 145 );
         XSCARTTOTAL.setMarginLeft( 10 );
         XSCARTTOTAL.setWidth( 132 );
         XSCARTTOTAL.setHeight( 40 );
         XSCARTTOTAL.setReadOnly( true );
         XSCARTTOTAL.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSCARTTOTAL.setCaption( "$" );
         XSCARTTOTAL.setLabelType( "CAPTION" );
         XSCARTTOTAL.applyDefault();
         XSCARTTOTAL.initialize();

         // ----------------------------------------
         // -- Initialize #CONTINUESHOPPINGBUTTON --
         // ----------------------------------------
         CONTINUESHOPPINGBUTTON.setCaption( "Continue Shopping" );
         CONTINUESHOPPINGBUTTON.setDisplayPosition( 9 );
         CONTINUESHOPPINGBUTTON.setLeft( 208 );
         CONTINUESHOPPINGBUTTON.setParent( this );
         CONTINUESHOPPINGBUTTON.setTabPosition( 9 );
         CONTINUESHOPPINGBUTTON.setTop( 230 );
         CONTINUESHOPPINGBUTTON.setWidth( 180 );
         CONTINUESHOPPINGBUTTON.setThemeDrawStyle( "ButtonLook1" );
         CONTINUESHOPPINGBUTTON.setHeight( 50 );
         CONTINUESHOPPINGBUTTON.initialize();

         // --------------------------------
         // -- Initialize #CHECKOUTBUTTON --
         // --------------------------------
         CHECKOUTBUTTON.setCaption( "Checkout" );
         CHECKOUTBUTTON.setDisplayPosition( 10 );
         CHECKOUTBUTTON.setLeft( 208 );
         CHECKOUTBUTTON.setParent( this );
         CHECKOUTBUTTON.setTabPosition( 10 );
         CHECKOUTBUTTON.setTop( 300 );
         CHECKOUTBUTTON.setWidth( 180 );
         CHECKOUTBUTTON.setThemeDrawStyle( "ButtonLook1" );
         CHECKOUTBUTTON.setHeight( 50 );
         CHECKOUTBUTTON.initialize();

         // ----------------------------
         // -- Initialize #INCLUDETAX --
         // ----------------------------
         INCLUDETAX.initialize();

         // ---------------------------------
         // -- Initialize #INCLUDESHIPPING --
         // ---------------------------------
         INCLUDESHIPPING.initialize();

         // --------------------------
         // -- Initialize #PRODUCTS --
         // --------------------------
         PRODUCTS.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #MYSESSION --
         // ---------------------------------------
         MYSESSION.addEventHandler( "CARTPRICEUPDATED", this, evtRoutine2 );
         MYSESSION.addEventHandler( "EMAILUPDATED", this, evtRoutine3 );

         // ----------------------------------------------------
         // -- Add Event Handlers for #CONTINUESHOPPINGBUTTON --
         // ----------------------------------------------------
         CONTINUESHOPPINGBUTTON.addEventHandler( "CLICK", this, evtRoutine4 );

         // --------------------------------------------
         // -- Add Event Handlers for #CHECKOUTBUTTON --
         // --------------------------------------------
         CHECKOUTBUTTON.addEventHandler( "CLICK", this, evtRoutine5 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 355 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 400 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );

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
   // evtRoutine1 - #com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 45 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 45 );
      {

         //
         // #Com_owner.UpdateSummary
         //
         rtn.Line( 47 );
         this.mthUPDATESUMMARY();

         //
         // #Com_owner.IncludeTaxes
         //
         rtn.Line( 49 );
         this.mthINCLUDETAXES();

         //
         // #IncludeShipping := false
         //
         rtn.Line( 52 );
         ref.INCLUDESHIPPING.set( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 54 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MySession.CartPriceUpdated
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.CartPriceUpdated", 56 );

      //
      // EVTROUTINE Handling(#MySession.CartPriceUpdated)
      //
      rtn.Line( 56 );
      {

         //
         // #Com_owner.UpdateSummary
         //
         rtn.Line( 58 );
         this.mthUPDATESUMMARY();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // evtRoutine3 - #MySession.EmailUpdated
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.EmailUpdated", 62 );

      //
      // EVTROUTINE Handling(#MySession.EmailUpdated)
      //
      rtn.Line( 62 );
      {

         //
         // #Com_owner.IncludeTaxes
         //
         rtn.Line( 64 );
         this.mthINCLUDETAXES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // mthUPDATESUMMARY - UpdateSummary
   //
   COM_OWNER.mthUPDATESUMMARY = function()
   {
      var fld = this.FLD.XSSHPVW4, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "UpdateSummary", 68 );

      //
      // MTHROUTINE Name(UpdateSummary)
      //
      rtn.Line( 68 );
      {

         //
         // #XSCartTotalPrice := #MySession.pCartPrice
         //
         rtn.Line( 70 );
         ref.XSCARTTOTALPRICE.set( ref.MYSESSION.ref.getPCARTPRICE() );

         //
         // #XSCartTotalTax := #MySession.pCartTax
         //
         rtn.Line( 71 );
         ref.XSCARTTOTALTAX.set( ref.MYSESSION.ref.getPCARTTAX() );

         //
         // #XSCartTotalShipping := #MySession.pCartShipping
         //
         rtn.Line( 72 );
         fld.XSCRTSHP.set( ref.MYSESSION.ref.getPCARTSHIPPING() );

         //
         // #XSCartTotal := #XSCartTotalPrice
         //
         rtn.Line( 73 );
         ref.XSCARTTOTAL.set( ref.XSCARTTOTALPRICE.get() );

         //
         // IF (#IncludeShipping)
         //
         rtn.Line( 75 );
         if ( Lansa.toBool( ref.INCLUDESHIPPING.get() ) )
         {

            //
            // #XSCartTotal := #XSCartTotal + #XSCartTotalShipping
            //
            rtn.Line( 77 );
            ref.XSCARTTOTAL.set( Lansa.add( ref.XSCARTTOTAL.get(), fld.XSCRTSHP.get() ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#IncludeTax)
         //
         rtn.Line( 81 );
         if ( Lansa.toBool( ref.INCLUDETAX.get() ) )
         {

            //
            // #XSCartTotal := #XSCartTotal + #XSCartTotalTax
            //
            rtn.Line( 83 );
            ref.XSCARTTOTAL.set( Lansa.add( ref.XSCARTTOTAL.get(), ref.XSCARTTOTALTAX.get() ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();
   };

   //
   // evtRoutine4 - #ContinueShoppingButton.Click
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ContinueShoppingButton.Click", 90 );

      //
      // EVTROUTINE Handling(#ContinueShoppingButton.Click)
      //
      rtn.Line( 90 );
      {

         //
         // #Products.execute( '3' )
         //
         rtn.Line( 93 );
         ref.PRODUCTS.mthEXECUTE( { FLD: { "XSPRDLNID": "3" } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      rtn.end();
   };

   //
   // evtRoutine5 - #CheckoutButton.Click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#CheckoutButton.Click", 97 );

      //
      // EVTROUTINE Handling(#CheckoutButton.Click)
      //
      rtn.Line( 97 );
      {

         //
         // #MySession.AddMessage( ('The Checkout interface has not been implemented at this point in time.') )
         //
         rtn.Line( 99 );
         ref.MYSESSION.ref.mthADDMESSAGE( "The Checkout interface has not been implemented at this point in time." );

         //
         // #MySession.ShowMessageBox
         //
         rtn.Line( 100 );
         ref.MYSESSION.ref.mthSHOWMESSAGEBOX();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 102 );
      rtn.end();
   };

   //
   // mthINCLUDETAXES - IncludeTaxes
   //
   COM_OWNER.mthINCLUDETAXES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "IncludeTaxes", 104 );

      //
      // MTHROUTINE Name(IncludeTaxes)
      //
      rtn.Line( 104 );
      {

         //
         // IF (#MySession.pEmail = *blank)
         //
         rtn.Line( 106 );
         if ( Lansa.String.eq( ref.MYSESSION.ref.getPEMAIL(), "" ) )
         {

            //
            // #XSCartTotalTax.visible := false
            //
            rtn.Line( 108 );
            ref.XSCARTTOTALTAX.setVisible( false );

            //
            // #LTaxes := 'Taxes are not included'
            //
            rtn.Line( 109 );
            ref.LTAXES.set( "Taxes are not included" );

            //
            // #IncludeTax := false
            //
            rtn.Line( 110 );
            ref.INCLUDETAX.set( false );

            //
            // RETURN 
            //
            rtn.end();
            return;

         //
         // ENDIF 
         //
         }

         //
         // #XSCartTotalTax.visible := true
         //
         rtn.Line( 116 );
         ref.XSCARTTOTALTAX.setVisible( true );

         //
         // #IncludeTax := true
         //
         rtn.Line( 117 );
         ref.INCLUDETAX.set( true );

         //
         // #LTaxes := 'Taxes'
         //
         rtn.Line( 119 );
         ref.LTAXES.set( "Taxes" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 121 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // -----------------------------
   // -- XSCRTTAX Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTTAX.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTTAX );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTTAX.DataClass, an: "PRIM_FLD", fn: "XSCRTTAX" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSCRTTAX.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSCRTTAX.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTTAX.VISUALEDIT, an: "PRIM_EVEF", fn: "XSCRTTAX", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSCRTPRC Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTPRC.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTPRC );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTPRC.DataClass, an: "PRIM_FLD", fn: "XSCRTPRC" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSCRTPRC.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSCRTPRC.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTPRC.VISUALEDIT, an: "PRIM_EVEF", fn: "XSCRTPRC", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSCRTTTL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTTTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTTTL );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTTTL.DataClass, an: "PRIM_FLD", fn: "XSCRTTTL" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSCRTTTL.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSCRTTTL.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTTTL.VISUALEDIT, an: "PRIM_EVEF", fn: "XSCRTTTL", cn: "VisualEdit" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EVEF", "PRIM_PHBN", "PRIM_BOLN", "PRIM_WEB.WebPageRequest" ]
});

//# sourceURL=xsshpvw4.js
