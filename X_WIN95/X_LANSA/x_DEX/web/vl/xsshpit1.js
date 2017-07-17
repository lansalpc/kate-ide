// -----------------------------
// -- Reusable Part: XSSHPIT1 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSHPIT1", 
   nm: "XSShoppingCartTreeItem", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Shopping Cart Tree Item", 
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
      XSPRDPRC:
      {
         nm: "XSPRDPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Product Price",
         h1: "Product",
         h2: "Price",
         h3: " ",
         de: "Product Price",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSQTY:
      {
         nm: "XSQTY",
         ft: "S",
         ln: 7,
         dc: 0,
         ec: "3",
         lb: "Quantity",
         h1: "Quantity",
         h2: " ",
         h3: " ",
         de: "Quantity",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSITMPRC:
      {
         nm: "XSITMPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Item Total",
         h1: "Cart Item",
         h2: "Price",
         h3: " ",
         de: "Cart Item Total Price",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSPRDID:
      {
         nm: "XSPRDID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product ID",
         h1: "Product",
         h2: "ID",
         h3: " ",
         de: "Product ID",
         dv: "",
         ia: [ "FE" ]
      },
      XSCRTID:
      {
         nm: "XSCRTID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Shopping Cart I",
         h1: "Shopping",
         h2: "Cart",
         h3: "ID",
         de: "Shopping Cart ID",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDDSC:
      {
         nm: "XSPRDDSC",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Desc",
         h1: "Product",
         h2: "Description",
         h3: " ",
         de: "Product Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPRDIMG:
      {
         nm: "XSPRDIMG",
         ft: "C",
         ln: 200,
         dc: 0,
         lb: "Image Link",
         h1: "Image",
         h2: "Link",
         h3: " ",
         de: "Product Image Link",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPRDSTS:
      {
         nm: "XSPRDSTS",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Stock S",
         h1: "Product",
         h2: "Stock",
         h3: "Status",
         de: "Product Stock Status",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDDTL:
      {
         nm: "XSPRDDTL",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Detail",
         h1: "Product",
         h2: "Detail",
         h3: " ",
         de: "Product Detail",
         dv: "",
         ia: [ "FE" ]
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
      XSCRTQTY:
      {
         nm: "XSCRTQTY",
         ft: "S",
         ln: 7,
         dc: 0,
         lb: "Quantity",
         h1: "Quantity",
         h2: " ",
         h3: " ",
         de: "Number of items in cart",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
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
      XSSTATUS:
      {
         nm: "XSSTATUS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: "Status",
         h1: "Status",
         h2: " ",
         h3: " ",
         de: "Status",
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
         TreeItem: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         OnAdd: 
         {
            ps: 
            {
               "TreeItem":
               {
                  pt: "i"
               }
            }
         },

         UpdatetheCart: 
         {
            ps: 
            {
               "treeItem":
               {
                  pt: "i"
               }
            }
         },

         DeletefromCart: 
         {
            ps: 
            {
               "treeItem":
               {
                  pt: "i"
               }
            }
         },

         UpdateCartTotals: 
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
         var fld = this.addFields( "XSSHPIT1", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XSSession) Name(#MySession) Scope(*Application)
         //
         var MYSESSION = this.createApplicationReference( "MYSESSION", "XSMYSSN" );

         //
         // DEFINE_COM Class(#Prim_Tree.TreeItem) Name(#CurrentTreeItem) Reference(*dynamic)
         //
         this.createDynamicReference( "CURRENTTREEITEM" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(5) Minwidth(150)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(5) Minwidth(150)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1) Width(2) Minwidth(100)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#column4) Displayposition(4) Parent(#TableLayout1) Width(2) Minwidth(100)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#column5) Displayposition(5) Parent(#TableLayout1) Width(2) Minwidth(100)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Column(#column4) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Alignment(TopCenter) Margintop(10)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#column4) Flow(Down) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#Detail) Parent(#TableLayout1) Row(#Row1) Marginleft(5) Margintop(3)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#Description) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Marginleft(5) Margintop(10)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column2) Manage(#ProductImage) Parent(#TableLayout1) Row(#Row1) Rowspan(4) Marginbottom(10) Marginright(20) Marginleft(20)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column3) Flow(Down) Manage(#XSProductPrice) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(TopLeft) Column(#Column3) Flow(Down) Manage(#LStockStatus) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#column5) Flow(Down) Manage(#XSItemTotalPrice) Parent(#TableLayout1) Row(#Row1) Sizing(None) Margintop(10)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(2) Parent(#TableLayout2) Width(30) Units(Pixels)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) Displayposition(3) Parent(#TableLayout2) Width(30) Units(Pixels)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) Displayposition(4) Parent(#TableLayout2) Width(30) Units(Pixels)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column10) Displayposition(5) Parent(#TableLayout2)
         //
         var COLUMN10 = this.createReference( "COLUMN10", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout2) Height(30) Units(Pixels)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(2) Parent(#TableLayout2) Height(30) Units(Pixels)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSQuantityItem1) Manage(#XSQuantity) Parent(#TableLayout2) Row(#Row3) Column(#Column7)
         //
         var XSQUANTITYITEM1 = this.createReference( "XSQUANTITYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#IncrementItem1) Manage(#LDecrement) Parent(#TableLayout2) Row(#Row3) Column(#Column6)
         //
         var INCREMENTITEM1 = this.createReference( "INCREMENTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DecrementItem1) Manage(#LDecrement) Parent(#TableLayout2) Row(#Row3) Column(#Column8)
         //
         var DECREMENTITEM1 = this.createReference( "DECREMENTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LRemoveItem1) Manage(#LRemove) Parent(#TableLayout2) Row(#Row4) Column(#Column7)
         //
         var LREMOVEITEM1 = this.createReference( "LREMOVEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#ProductImage) Displayposition(1) Left(170) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Width(110) Height(134) Imagesizing(BestFit) Top(0)
         //
         var PRODUCTIMAGE = this.createReference( "PRODUCTIMAGE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Description) Caption('<description>') Displayposition(2) Ellipses(Word) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Width(145) Style(#XSTheme01<Text11BoldBl3>) Left(5) Height(55)
         //
         var DESCRIPTION = this.createReference( "DESCRIPTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Detail) Caption('<detail>') Displayposition(3) Ellipses(Word) Left(5) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(68) Width(145) Height(141)
         //
         var DETAIL = this.createReference( "DETAIL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LStockStatus) Caption('Stock Status') Displayposition(5) Height(25) Left(300) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(45) Width(100) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LSTOCKSTATUS = this.createReference( "LSTOCKSTATUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSProductPrice.Visual) Name(#XSProductPrice) Displayposition(4) Left(300) Parent(#COM_OWNER) Tabposition(5) Width(100) Marginleft(10) Caption('$') Labelhoralignment(Right) Labeltype(Caption) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Style(#XSTheme01<Text10BoldAlmostBlack>) Readonly(True) Height(45)
         //
         var XSPRODUCTPRICE = this.createFieldReference( "XSPRODUCTPRICE", Fields.XSPRDPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(8) Left(400) Parent(#COM_OWNER) Tabposition(8) Tabstop(False) Width(100) Layoutmanager(#TableLayout2) Height(60)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#XSQuantity.Visual) Name(#XSQuantity) Displayposition(3) Height(30) Left(35) Parent(#Panel1) Tabposition(3) Width(30) Marginleft(0) Labelhoralignment(Right) Labelposition(None) Editalignment(Right) Displayalignment(Center)
         //
         var XSQUANTITY = this.createFieldReference( "XSQUANTITY", Fields.XSQTY.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDecrement) Caption('-') Displayposition(2) Ellipses(Word) Left(5) Parent(#Panel1) Tabposition(1) Tabstop(False) Verticalalignment(Center) Style(#XSTheme01<Text12BoldGn2>) Top(0) Alignment(Center) Height(30) Width(30) Mouseoverstyle(#XSTheme01<Text12BoldOr3>)
         //
         var LDECREMENT = this.createReference( "LDECREMENT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LIncrement) Caption('+') Displayposition(1) Ellipses(Word) Left(65) Parent(#Panel1) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Style(#XSTheme01<Text12BoldGn2>) Alignment(Center) Height(30) Width(30) Mouseoverstyle(#XSTheme01<Text12BoldOr3>)
         //
         var LINCREMENT = this.createReference( "LINCREMENT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LRemove) Caption('X') Displayposition(4) Ellipses(Word) Left(35) Parent(#Panel1) Tabposition(4) Tabstop(False) Top(30) Alignment(Center) Style(#XSTheme01<Text12BoldOr3>) Height(30) Width(30) Mouseoverstyle(#XSTheme01<Text12BoldGn2>)
         //
         var LREMOVE = this.createReference( "LREMOVE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSItemTotalPrice.Visual) Name(#XSItemTotalPrice) Displayposition(6) Left(500) Parent(#COM_OWNER) Tabposition(6) Top(10) Width(296) Readonly(True) Style(#XSTheme01<Text10BoldAlmostBlack>) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Caption('$') Labeltype(Caption) Labelhoralignment(Right) Marginleft(10)
         //
         var XSITEMTOTALPRICE = this.createFieldReference( "XSITEMTOTALPRICE", Fields.XSITMPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#XSProductID.Visual) Name(#XSProductID) Displayposition(7) Left(8) Parent(#COM_OWNER) Tabposition(7) Visible(False) Width(5) Marginleft(70)
         //
         var XSPRODUCTID = this.createFieldReference( "XSPRODUCTID", Fields.XSPRDID.VISUALEDIT );

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
         COLUMN1.setWidth( 5 );
         COLUMN1.setMinWidth( 150 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setWidth( 5 );
         COLUMN2.setMinWidth( 150 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.setWidth( 2 );
         COLUMN3.setMinWidth( 100 );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 4 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.setWidth( 2 );
         COLUMN4.setMinWidth( 100 );
         COLUMN4.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 5 );
         COLUMN5.setParent( TABLELAYOUT1 );
         COLUMN5.setWidth( 2 );
         COLUMN5.setMinWidth( 100 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setColumn( COLUMN4 );
         LAYOUTITEM11.setManage( PANEL1 );
         LAYOUTITEM11.setParent( TABLELAYOUT1 );
         LAYOUTITEM11.setRow( ROW1 );
         LAYOUTITEM11.setSizing( "FITTOWIDTH" );
         LAYOUTITEM11.setFlow( "DOWN" );
         LAYOUTITEM11.setAlignment( "TOPCENTER" );
         LAYOUTITEM11.setMarginTop( 10 );
         LAYOUTITEM11.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN4 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setSizing( "NONE" );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( DETAIL );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setMarginLeft( 5 );
         LAYOUTITEM2.setMarginTop( 3 );
         LAYOUTITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setAlignment( "TOPLEFT" );
         LAYOUTITEM10.setColumn( COLUMN1 );
         LAYOUTITEM10.setFlow( "DOWN" );
         LAYOUTITEM10.setManage( DESCRIPTION );
         LAYOUTITEM10.setParent( TABLELAYOUT1 );
         LAYOUTITEM10.setRow( ROW1 );
         LAYOUTITEM10.setSizing( "FITTOWIDTH" );
         LAYOUTITEM10.setMarginLeft( 5 );
         LAYOUTITEM10.setMarginTop( 10 );
         LAYOUTITEM10.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setManage( PRODUCTIMAGE );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setRowSpan( 4 );
         LAYOUTITEM1.setMarginBottom( 10 );
         LAYOUTITEM1.setMarginRight( 20 );
         LAYOUTITEM1.setMarginLeft( 20 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN3 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( XSPRODUCTPRICE );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setColumn( COLUMN3 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( LSTOCKSTATUS );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW1 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN5 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( XSITEMTOTALPRICE );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW1 );
         LAYOUTITEM4.setSizing( "NONE" );
         LAYOUTITEM4.setMarginTop( 10 );
         LAYOUTITEM4.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 2 );
         COLUMN6.setParent( TABLELAYOUT2 );
         COLUMN6.setWidth( 30 );
         COLUMN6.setUnits( "PIXELS" );
         COLUMN6.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 3 );
         COLUMN7.setParent( TABLELAYOUT2 );
         COLUMN7.setWidth( 30 );
         COLUMN7.setUnits( "PIXELS" );
         COLUMN7.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 4 );
         COLUMN8.setParent( TABLELAYOUT2 );
         COLUMN8.setWidth( 30 );
         COLUMN8.setUnits( "PIXELS" );
         COLUMN8.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 1 );
         COLUMN9.setParent( TABLELAYOUT2 );
         COLUMN9.initialize();

         // --------------------------
         // -- Initialize #COLUMN10 --
         // --------------------------
         COLUMN10.setDisplayPosition( 5 );
         COLUMN10.setParent( TABLELAYOUT2 );
         COLUMN10.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT2 );
         ROW3.setHeight( 30 );
         ROW3.setUnits( "PIXELS" );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 2 );
         ROW4.setParent( TABLELAYOUT2 );
         ROW4.setHeight( 30 );
         ROW4.setUnits( "PIXELS" );
         ROW4.initialize();

         // ---------------------------------
         // -- Initialize #XSQUANTITYITEM1 --
         // ---------------------------------
         XSQUANTITYITEM1.setManage( XSQUANTITY );
         XSQUANTITYITEM1.setParent( TABLELAYOUT2 );
         XSQUANTITYITEM1.setRow( ROW3 );
         XSQUANTITYITEM1.setColumn( COLUMN7 );
         XSQUANTITYITEM1.initialize();

         // --------------------------------
         // -- Initialize #INCREMENTITEM1 --
         // --------------------------------
         INCREMENTITEM1.setManage( LDECREMENT );
         INCREMENTITEM1.setParent( TABLELAYOUT2 );
         INCREMENTITEM1.setRow( ROW3 );
         INCREMENTITEM1.setColumn( COLUMN6 );
         INCREMENTITEM1.initialize();

         // --------------------------------
         // -- Initialize #DECREMENTITEM1 --
         // --------------------------------
         DECREMENTITEM1.setManage( LDECREMENT );
         DECREMENTITEM1.setParent( TABLELAYOUT2 );
         DECREMENTITEM1.setRow( ROW3 );
         DECREMENTITEM1.setColumn( COLUMN8 );
         DECREMENTITEM1.initialize();

         // ------------------------------
         // -- Initialize #LREMOVEITEM1 --
         // ------------------------------
         LREMOVEITEM1.setManage( LREMOVE );
         LREMOVEITEM1.setParent( TABLELAYOUT2 );
         LREMOVEITEM1.setRow( ROW4 );
         LREMOVEITEM1.setColumn( COLUMN7 );
         LREMOVEITEM1.initialize();

         // ------------------------------
         // -- Initialize #PRODUCTIMAGE --
         // ------------------------------
         PRODUCTIMAGE.setDisplayPosition( 1 );
         PRODUCTIMAGE.setLeft( 170 );
         PRODUCTIMAGE.setParent( this );
         PRODUCTIMAGE.setTabPosition( 1 );
         PRODUCTIMAGE.setTabStop( false );
         PRODUCTIMAGE.setWidth( 110 );
         PRODUCTIMAGE.setHeight( 134 );
         PRODUCTIMAGE.setImageSizing( "BESTFIT" );
         PRODUCTIMAGE.setTop( 0 );
         PRODUCTIMAGE.initialize();

         // -----------------------------
         // -- Initialize #DESCRIPTION --
         // -----------------------------
         DESCRIPTION.setCaption( "<description>" );
         DESCRIPTION.setDisplayPosition( 2 );
         DESCRIPTION.setEllipses( "WORD" );
         DESCRIPTION.setParent( this );
         DESCRIPTION.setTabPosition( 2 );
         DESCRIPTION.setTabStop( false );
         DESCRIPTION.setWidth( 145 );
         DESCRIPTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT11BOLDBL3" ) );
         DESCRIPTION.setLeft( 5 );
         DESCRIPTION.setHeight( 55 );
         DESCRIPTION.initialize();

         // ------------------------
         // -- Initialize #DETAIL --
         // ------------------------
         DETAIL.setCaption( "<detail>" );
         DETAIL.setDisplayPosition( 3 );
         DETAIL.setEllipses( "WORD" );
         DETAIL.setLeft( 5 );
         DETAIL.setParent( this );
         DETAIL.setTabPosition( 3 );
         DETAIL.setTabStop( false );
         DETAIL.setTop( 68 );
         DETAIL.setWidth( 145 );
         DETAIL.setHeight( 141 );
         DETAIL.initialize();

         // ------------------------------
         // -- Initialize #LSTOCKSTATUS --
         // ------------------------------
         LSTOCKSTATUS.setCaption( "Stock Status" );
         LSTOCKSTATUS.setDisplayPosition( 5 );
         LSTOCKSTATUS.setHeight( 25 );
         LSTOCKSTATUS.setLeft( 300 );
         LSTOCKSTATUS.setParent( this );
         LSTOCKSTATUS.setTabPosition( 4 );
         LSTOCKSTATUS.setTabStop( false );
         LSTOCKSTATUS.setTop( 45 );
         LSTOCKSTATUS.setWidth( 100 );
         LSTOCKSTATUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LSTOCKSTATUS.initialize();

         // --------------------------------
         // -- Initialize #XSPRODUCTPRICE --
         // --------------------------------
         XSPRODUCTPRICE.setDisplayPosition( 4 );
         XSPRODUCTPRICE.setLeft( 300 );
         XSPRODUCTPRICE.setParent( this );
         XSPRODUCTPRICE.setTabPosition( 5 );
         XSPRODUCTPRICE.setWidth( 100 );
         XSPRODUCTPRICE.setMarginLeft( 10 );
         XSPRODUCTPRICE.setCaption( "$" );
         XSPRODUCTPRICE.setLabelHorAlignment( "RIGHT" );
         XSPRODUCTPRICE.setLabelType( "CAPTION" );
         XSPRODUCTPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.setReadOnly( true );
         XSPRODUCTPRICE.setHeight( 45 );
         XSPRODUCTPRICE.applyDefault();
         XSPRODUCTPRICE.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 8 );
         PANEL1.setLeft( 400 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 8 );
         PANEL1.setTabStop( false );
         PANEL1.setWidth( 100 );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.setHeight( 60 );
         PANEL1.initialize();

         // ----------------------------
         // -- Initialize #XSQUANTITY --
         // ----------------------------
         XSQUANTITY.setDisplayPosition( 3 );
         XSQUANTITY.setHeight( 30 );
         XSQUANTITY.setLeft( 35 );
         XSQUANTITY.setParent( PANEL1 );
         XSQUANTITY.setTabPosition( 3 );
         XSQUANTITY.setWidth( 30 );
         XSQUANTITY.setMarginLeft( 0 );
         XSQUANTITY.setLabelHorAlignment( "RIGHT" );
         XSQUANTITY.setLabelPosition( "NONE" );
         XSQUANTITY.setEditAlignment( "RIGHT" );
         XSQUANTITY.setDisplayAlignment( "CENTER" );
         XSQUANTITY.applyDefault();
         XSQUANTITY.initialize();

         // ----------------------------
         // -- Initialize #LDECREMENT --
         // ----------------------------
         LDECREMENT.setCaption( "-" );
         LDECREMENT.setDisplayPosition( 2 );
         LDECREMENT.setEllipses( "WORD" );
         LDECREMENT.setLeft( 5 );
         LDECREMENT.setParent( PANEL1 );
         LDECREMENT.setTabPosition( 1 );
         LDECREMENT.setTabStop( false );
         LDECREMENT.setVerticalAlignment( "CENTER" );
         LDECREMENT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDGN2" ) );
         LDECREMENT.setTop( 0 );
         LDECREMENT.setAlignment( "CENTER" );
         LDECREMENT.setHeight( 30 );
         LDECREMENT.setWidth( 30 );
         LDECREMENT.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDOR3" ) );
         LDECREMENT.initialize();

         // ----------------------------
         // -- Initialize #LINCREMENT --
         // ----------------------------
         LINCREMENT.setCaption( "+" );
         LINCREMENT.setDisplayPosition( 1 );
         LINCREMENT.setEllipses( "WORD" );
         LINCREMENT.setLeft( 65 );
         LINCREMENT.setParent( PANEL1 );
         LINCREMENT.setTabPosition( 2 );
         LINCREMENT.setTabStop( false );
         LINCREMENT.setTop( 0 );
         LINCREMENT.setVerticalAlignment( "CENTER" );
         LINCREMENT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDGN2" ) );
         LINCREMENT.setAlignment( "CENTER" );
         LINCREMENT.setHeight( 30 );
         LINCREMENT.setWidth( 30 );
         LINCREMENT.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDOR3" ) );
         LINCREMENT.initialize();

         // -------------------------
         // -- Initialize #LREMOVE --
         // -------------------------
         LREMOVE.setCaption( "X" );
         LREMOVE.setDisplayPosition( 4 );
         LREMOVE.setEllipses( "WORD" );
         LREMOVE.setLeft( 35 );
         LREMOVE.setParent( PANEL1 );
         LREMOVE.setTabPosition( 4 );
         LREMOVE.setTabStop( false );
         LREMOVE.setTop( 30 );
         LREMOVE.setAlignment( "CENTER" );
         LREMOVE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDOR3" ) );
         LREMOVE.setHeight( 30 );
         LREMOVE.setWidth( 30 );
         LREMOVE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDGN2" ) );
         LREMOVE.initialize();

         // ----------------------------------
         // -- Initialize #XSITEMTOTALPRICE --
         // ----------------------------------
         XSITEMTOTALPRICE.setDisplayPosition( 6 );
         XSITEMTOTALPRICE.setLeft( 500 );
         XSITEMTOTALPRICE.setParent( this );
         XSITEMTOTALPRICE.setTabPosition( 6 );
         XSITEMTOTALPRICE.setTop( 10 );
         XSITEMTOTALPRICE.setWidth( 296 );
         XSITEMTOTALPRICE.setReadOnly( true );
         XSITEMTOTALPRICE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSITEMTOTALPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSITEMTOTALPRICE.setCaption( "$" );
         XSITEMTOTALPRICE.setLabelType( "CAPTION" );
         XSITEMTOTALPRICE.setLabelHorAlignment( "RIGHT" );
         XSITEMTOTALPRICE.setMarginLeft( 10 );
         XSITEMTOTALPRICE.applyDefault();
         XSITEMTOTALPRICE.initialize();

         // -----------------------------
         // -- Initialize #XSPRODUCTID --
         // -----------------------------
         XSPRODUCTID.setDisplayPosition( 7 );
         XSPRODUCTID.setLeft( 8 );
         XSPRODUCTID.setParent( this );
         XSPRODUCTID.setTabPosition( 7 );
         XSPRODUCTID.setVisible( false );
         XSPRODUCTID.setWidth( 5 );
         XSPRODUCTID.setMarginLeft( 70 );
         XSPRODUCTID.applyDefault();
         XSPRODUCTID.initialize();

         // ----------------------------------------
         // -- Add Event Handlers for #LDECREMENT --
         // ----------------------------------------
         LDECREMENT.addEventHandler( "CLICK", this, evtRoutine4 );

         // ----------------------------------------
         // -- Add Event Handlers for #LINCREMENT --
         // ----------------------------------------
         LINCREMENT.addEventHandler( "CLICK", this, evtRoutine5 );

         // -------------------------------------
         // -- Add Event Handlers for #LREMOVE --
         // -------------------------------------
         LREMOVE.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 145 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 600 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1BOTTOM" ) );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2BOTTOM" ) );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "XSCRTID": fld.XSCRTID, "XSPRDID": XSPRODUCTID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDDTL": fld.XSPRDDTL, "XSPRDPRC": XSPRODUCTPRICE, "XSQTY": XSQUANTITY, "XSITMPRC": XSITEMTOTALPRICE } );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #LRemove.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LRemove.Click", 67 );

      //
      // EVTROUTINE Handling(#LRemove.Click)
      //
      rtn.Line( 67 );
      {

         //
         // #Com_owner.DeletefromCart( #CurrentTreeItem )
         //
         rtn.Line( 70 );
         COM_OWNER.mthDELETEFROMCART.call( this, ref.CURRENTTREEITEM );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 72 );
      rtn.end();
   };

   //
   // mthONADD - OnAdd
   //
   COM_OWNER.mthONADD = function( parm_TREEITEM )
   {
      var fld = this.FLD.XSSHPIT1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "OnAdd", 75 );

      //
      // DEFINE_MAP Class(#PRIM_TREE.TreeItem) Name(TreeItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TREEITEM = rtn.createDynamicParameter( "TREEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TREEITEM = parm_TREEITEM;

      //
      // MTHROUTINE Name(OnAdd) Options(*REDEFINE)
      //
      rtn.Line( 75 );
      {

         //
         // #CurrentTreeItem <= #TreeItem
         //
         rtn.Line( 77 );
         this.setrefCURRENTTREEITEM( TREEITEM );

         //
         // #ProductImage.filename := #XSProductImageLink
         //
         rtn.Line( 79 );
         ref.PRODUCTIMAGE.setFileName( fld.XSPRDIMG.get() );

         //
         // CASE (#XSProductStockStatus)
         //
         rtn.Line( 82 );
         {
            var value1 = fld.XSPRDSTS.get();

            //
            // WHEN ('= INSTOCK')
            //
            if ( rtn.Line( 84 ), Lansa.String.eq( value1, "INSTOCK" ) )
            {

               //
               // #LStockStatus := 'In Stock'
               //
               rtn.Line( 86 );
               ref.LSTOCKSTATUS.set( "In Stock" );
            }

            //
            // WHEN ('= BACKORDER')
            //
            else if ( rtn.Line( 88 ), Lansa.String.eq( value1, "BACKORDER" ) )
            {

               //
               // #LStockStatus := 'On Order'
               //
               rtn.Line( 90 );
               ref.LSTOCKSTATUS.set( "On Order" );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #LStockStatus := 'No longer available'
               //
               rtn.Line( 94 );
               ref.LSTOCKSTATUS.set( "No longer available" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 96 );
         }

         //
         // #Description := #XSProductDescription
         //
         rtn.Line( 98 );
         ref.DESCRIPTION.set( fld.XSPRDDSC.get() );

         //
         // #Detail := #XSProductDetail
         //
         rtn.Line( 99 );
         ref.DETAIL.set( fld.XSPRDDTL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 101 );
      rtn.end();
   };

   //
   // mthUPDATETHECART - UpdatetheCart
   //
   COM_OWNER.mthUPDATETHECART = function( parm_TREEITEM )
   {
      var fld = this.FLD.XSSHPIT1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "UpdatetheCart", 103 );

      //
      // DEFINE_MAP For(*input) Class(#prim_tree.TreeItem) Name(#treeItem) Pass(*by_reference)
      //
      var TREEITEM = rtn.createDynamicParameter( "TREEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TREEITEM = parm_TREEITEM;

      //
      // DEFINE_COM Class(#XSServer.UpdateCartItem) Name(#UpdateCartItem)
      //
      var UPDATECARTITEM = rtn.createDataRequest( "UPDATECARTITEM", "XSSERVER", "UPDATECARTITEM" );

      // --------------------------------
      // -- Initialize #UPDATECARTITEM --
      // --------------------------------
      UPDATECARTITEM.initialize();

      // --------------------------------------------
      // -- Add Event Handlers for #UPDATECARTITEM --
      // --------------------------------------------
      UPDATECARTITEM.addEventHandler( "COMPLETED", this, evtRoutine2 );

      //
      // MTHROUTINE Name(UpdatetheCart)
      //
      rtn.Line( 103 );
      {

         //
         // #UpdateCartItem.ExecuteAsync( #XSCartID #XSProductID #XSQuantity #XSItemTotalPrice #XSCartTotalPrice #XSCartTotalQuantity #XSCartTotalTax #XSCartTotalShipping #XSCartTotal #XSStatus )
         //
         rtn.Line( 109 );
         UPDATECARTITEM.mthEXECUTEASYNC( { FLD: { "XSCRTID": fld.XSCRTID.get(), "XSPRDID": ref.XSPRODUCTID.get(), "XSQTY": ref.XSQUANTITY.get() } }, { FLD: { "XSCRTID": fld.XSCRTID, "XSITMPRC": ref.XSITEMTOTALPRICE, "XSCRTPRC": fld.XSCRTPRC, "XSCRTQTY": fld.XSCRTQTY, "XSCRTTAX": fld.XSCRTTAX, "XSCRTSHP": fld.XSCRTSHP, "XSCRTTTL": fld.XSCRTTTL, "XSSTATUS": fld.XSSTATUS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 117 );
      rtn.end();

      //
      // evtRoutine2 - #UpdateCartItem.completed
      //
      function evtRoutine2( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#UpdateCartItem.completed", 111 );

         //
         // EVTROUTINE Handling(#UpdateCartItem.completed)
         //
         rtn.Line( 111 );
         {

            //
            // #Com_owner.UpdateCartTotals
            //
            rtn.Line( 113 );
            this.mthUPDATECARTTOTALS();

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 115 );
         rtn.end();
      }
   };

   //
   // mthDELETEFROMCART - DeletefromCart
   //
   COM_OWNER.mthDELETEFROMCART = function( parm_TREEITEM )
   {
      var fld = this.FLD.XSSHPIT1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "DeletefromCart", 119 );

      //
      // DEFINE_MAP For(*input) Class(#prim_tree.TreeItem) Name(#treeItem) Pass(*by_reference)
      //
      var TREEITEM = rtn.createDynamicParameter( "TREEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TREEITEM = parm_TREEITEM;

      //
      // DEFINE_COM Class(#XSServer.DeletefromCart) Name(#DeletefromCart)
      //
      var DELETEFROMCART = rtn.createDataRequest( "DELETEFROMCART", "XSSERVER", "DELETEFROMCART" );

      // --------------------------------
      // -- Initialize #DELETEFROMCART --
      // --------------------------------
      DELETEFROMCART.initialize();

      // --------------------------------------------
      // -- Add Event Handlers for #DELETEFROMCART --
      // --------------------------------------------
      DELETEFROMCART.addEventHandler( "COMPLETED", this, evtRoutine3 );

      //
      // MTHROUTINE Name(DeletefromCart)
      //
      rtn.Line( 119 );
      {

         //
         // #DeletefromCart.ExecuteAsync( #XSCartID #XSProductID #XSCartTotalPrice #XSCartTotalQuantity #XSCartTotalTax #XSCartTotalShipping #XSCartTotal #XSStatus )
         //
         rtn.Line( 124 );
         DELETEFROMCART.mthEXECUTEASYNC( { FLD: { "XSCRTID": fld.XSCRTID.get(), "XSPRDID": ref.XSPRODUCTID.get() } }, { FLD: { "XSCRTID": fld.XSCRTID, "XSCRTPRC": fld.XSCRTPRC, "XSCRTQTY": fld.XSCRTQTY, "XSCRTTAX": fld.XSCRTTAX, "XSCRTSHP": fld.XSCRTSHP, "XSCRTTTL": fld.XSCRTTTL, "XSSTATUS": fld.XSSTATUS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 144 );
      rtn.end();

      //
      // evtRoutine3 - #DeletefromCart.completed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DeletefromCart.completed", 126 );

         //
         // EVTROUTINE Handling(#DeletefromCart.completed)
         //
         rtn.Line( 126 );
         {

            //
            // #Com_owner.UpdateCartTotals
            //
            rtn.Line( 129 );
            this.mthUPDATECARTTOTALS();

            //
            // IF (#CurrentTreeItem.parentitems.ItemCount = 0)
            //
            rtn.Line( 131 );
            if ( Lansa.Number.eq( ref.CURRENTTREEITEM.getParentItems().getItemCount(), 0 ) )
            {

               //
               // #MySession.AddMessage( ('Your shopping cart is empty') )
               //
               rtn.Line( 133 );
               ref.MYSESSION.ref.mthADDMESSAGE( "Your shopping cart is empty" );

               //
               // #MySession.ShowMessageBox
               //
               rtn.Line( 134 );
               ref.MYSESSION.ref.mthSHOWMESSAGEBOX();

            //
            // ENDIF 
            //
            }

            //
            // #CurrentTreeItem.Delete
            //
            rtn.Line( 138 );
            ref.CURRENTTREEITEM.mthDELETE();

            //
            // #CurrentTreeItem #treeItem <= *null
            //
            rtn.Line( 140 );
            this.setrefCURRENTTREEITEM( null );
            TREEITEM = rtn.setref( "TREEITEM", null );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 142 );
         rtn.end();
      }
   };

   //
   // mthUPDATECARTTOTALS - UpdateCartTotals
   //
   COM_OWNER.mthUPDATECARTTOTALS = function()
   {
      var fld = this.FLD.XSSHPIT1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "UpdateCartTotals", 146 );

      //
      // MTHROUTINE Name(UpdateCartTotals)
      //
      rtn.Line( 146 );
      {

         //
         // #MySession.pcartquantity := #XSCartTotalQuantity
         //
         rtn.Line( 149 );
         ref.MYSESSION.ref.setPCARTQUANTITY( fld.XSCRTQTY.get() );

         //
         // #MySession.pCartPrice := #XSCartTotalPrice
         //
         rtn.Line( 150 );
         ref.MYSESSION.ref.setPCARTPRICE( fld.XSCRTPRC.get() );

         //
         // #MySession.pCartTax := #XSCartTotalTax
         //
         rtn.Line( 151 );
         ref.MYSESSION.ref.setPCARTTAX( fld.XSCRTTAX.get() );

         //
         // #MySession.pCartShipping := #XSCartTotalShipping
         //
         rtn.Line( 152 );
         ref.MYSESSION.ref.setPCARTSHIPPING( fld.XSCRTSHP.get() );

         //
         // #MySession.pCartTotal := #XSCartTotal
         //
         rtn.Line( 153 );
         ref.MYSESSION.ref.setPCARTTOTAL( fld.XSCRTTTL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 155 );
      rtn.end();
   };

   //
   // evtRoutine4 - #LDecrement.Click
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LDecrement.Click", 157 );

      //
      // EVTROUTINE Handling(#LDecrement.Click)
      //
      rtn.Line( 157 );
      {

         //
         // #XSQuantity -= 1
         //
         rtn.Line( 160 );
         ref.XSQUANTITY.set( Lansa.sub( ref.XSQUANTITY.get(), 1 ) );

         //
         // IF (#XSQuantity = 0)
         //
         rtn.Line( 162 );
         if ( Lansa.Number.eq( ref.XSQUANTITY.get(), 0 ) )
         {

            //
            // #Com_owner.DeletefromCart( #CurrentTreeItem )
            //
            rtn.Line( 164 );
            COM_OWNER.mthDELETEFROMCART.call( this, ref.CURRENTTREEITEM );

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
         // #Com_owner.UpdatetheCart( #CurrentTreeItem )
         //
         rtn.Line( 170 );
         COM_OWNER.mthUPDATETHECART.call( this, ref.CURRENTTREEITEM );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 172 );
      rtn.end();
   };

   //
   // evtRoutine5 - #LIncrement.click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LIncrement.click", 174 );

      //
      // EVTROUTINE Handling(#LIncrement.click)
      //
      rtn.Line( 174 );
      {

         //
         // #XSQuantity += 1
         //
         rtn.Line( 177 );
         ref.XSQUANTITY.set( Lansa.add( ref.XSQUANTITY.get(), 1 ) );

         //
         // #Com_owner.UpdatetheCart( #CurrentTreeItem )
         //
         rtn.Line( 178 );
         COM_OWNER.mthUPDATETHECART.call( this, ref.CURRENTTREEITEM );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 180 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(TreeItem) Get(*reference #CurrentTreeItem)
   //
   COM_OWNER.getTREEITEM = function()
   {
      return this.REF.CURRENTTREEITEM;
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // -----------------------------
   // -- XSPRDPRC Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDPRC.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDPRC );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDPRC.DataClass, an: "PRIM_FLD", fn: "XSPRDPRC" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPRDPRC.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPRDPRC.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDPRC.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPRDPRC", cn: "VisualEdit" } );
   }

   // --------------------------
   // -- XSQTY Member Classes --
   // --------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSQTY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSQTY );
      };

      Lansa.createFieldClass( { co: Fields.XSQTY.DataClass, an: "PRIM_FLD", fn: "XSQTY" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSQTY.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSQTY.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 261 );
      };

      Lansa.createFieldClass( { co: Fields.XSQTY.VISUALEDIT, an: "PRIM_EVEF", fn: "XSQTY", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSITMPRC Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSITMPRC.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSITMPRC );
      };

      Lansa.createFieldClass( { co: Fields.XSITMPRC.DataClass, an: "PRIM_FLD", fn: "XSITMPRC" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSITMPRC.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSITMPRC.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSITMPRC.VISUALEDIT, an: "PRIM_EVEF", fn: "XSITMPRC", cn: "VisualEdit" } );
   }

   // ----------------------------
   // -- XSPRDID Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDID );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDID.DataClass, an: "PRIM_FLD", fn: "XSPRDID" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPRDID.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPRDID.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDID.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPRDID", cn: "VisualEdit" } );
   }

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefCURRENTTREEITEM = function( refNew )
   {
      this.setref( "CURRENTTREEITEM", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_IMAG", "PRIM_LABL", "PRIM_EVEF", "PRIM_WEB.DataRequest" ],
   dp: [ "PRIM_TREE.TreeItem" ]
});

//# sourceURL=xsshpit1.js
