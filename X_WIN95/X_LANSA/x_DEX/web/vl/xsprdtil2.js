// ------------------------------
// -- Reusable Part: XSPRDTIL2 --
// ------------------------------
LANSA.addComponent(
{
   id: "XSPRDTIL2", 
   nm: "XSProductTile2", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Product Tile2", 
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
   var resource1 = Lansa.createBitmap( "xsshpct2.png" );

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
         pCurrentTile: 
         {
            da: "rw"
         },

         pProductID: 
         {
            da: "rw"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         OnItemGotReference: 
         {
            ps: 
            {
               "TileItem":
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
         this.addFields( "XSPRDTIL2", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Units(Pixels) Height(140)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(4) Parent(#TableLayout1) Height(35) Units(Pixels)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(5) Parent(#TableLayout1) Height(30) Units(Pixels)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ProductImageItem1) Manage(#ProductImage) Parent(#TableLayout1) Row(#Row1) Sizing(None) Column(#Column1)
         //
         var PRODUCTIMAGEITEM1 = this.createReference( "PRODUCTIMAGEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lProductDescriptionItem1) Manage(#lProductDescription) Parent(#TableLayout1) Row(#Row2) Column(#Column1) Alignment(CenterLeft)
         //
         var LPRODUCTDESCRIPTIONITEM1 = this.createReference( "LPRODUCTDESCRIPTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AddtoCartItem1) Manage(#AddToCart) Parent(#TableLayout1) Row(#Row5) Column(#Column1) Alignment(CenterLeft)
         //
         var ADDTOCARTITEM1 = this.createReference( "ADDTOCARTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSProductPriceItem1) Manage(#XSProductPrice) Parent(#TableLayout1) Row(#Row4) Sizing(None) Column(#Column1) Alignment(CenterLeft) Flow(Right)
         //
         var XSPRODUCTPRICEITEM1 = this.createReference( "XSPRODUCTPRICEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lProductDetailItem1) Manage(#lProductDetail) Parent(#TableLayout1) Row(#Row3) Column(#Column1) Flow(Down) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LPRODUCTDETAILITEM1 = this.createReference( "LPRODUCTDETAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lStockStatusItem1) Manage(#lStockStatus) Parent(#TableLayout1) Row(#Row4) Sizing(None) Flow(Right) Column(#Column1) Alignment(CenterLeft)
         //
         var LSTOCKSTATUSITEM1 = this.createReference( "LSTOCKSTATUSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row5) Sizing(FitToWidth) Alignment(BottomLeft)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column1) Manage(#lModel) Parent(#TableLayout1) Row(#Row3) Sizing(FitToWidth) Flow(Down) Alignment(TopCenter)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(1) Parent(#TableLayout2) Width(35) Units(Pixels)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(2) Parent(#TableLayout2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label1Item1) Column(#Column3) Manage(#AddToCart) Parent(#TableLayout2) Row(#Row6)
         //
         var LABEL1ITEM1 = this.createReference( "LABEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#AddToCart1) Parent(#TableLayout2) Row(#Row6)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lProductDescription) Displayposition(7) Ellipses(Word) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(140) Width(258) Style(#XSTheme01<Text11BoldBl3>) Caption('<description>') Marginleft(10) Height(77) Marginright(5)
         //
         var LPRODUCTDESCRIPTION = this.createReference( "LPRODUCTDESCRIPTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lStockStatus) Caption('Stock Status') Displayposition(5) Ellipses(Word) Left(142) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(295) Verticalalignment(Center) Width(142) Height(30) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LSTOCKSTATUS = this.createReference( "LSTOCKSTATUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lModel) Caption('Model :') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(217) Verticalalignment(Center) Width(258) Marginleft(10) Marginright(10) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LMODEL = this.createReference( "LMODEL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lProductDetail) Caption('<product detail>') Displayposition(3) Ellipses(Word) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(242) Width(258) Style(#XSTheme01<Text10AlmostBlack>) Height(54) Marginleft(10) Marginright(10)
         //
         var LPRODUCTDETAIL = this.createReference( "LPRODUCTDETAIL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSProductPrice.Visual) Name(#XSProductPrice) Displayposition(4) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(295) Height(30) Width(142) Readonly(True) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Marginleft(20) Caption('$') Labeltype(Caption) Ellipses(Word) Labelhoralignment(Right) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var XSPRODUCTPRICE = this.createFieldReference( "XSPRODUCTPRICE", Fields.XSPRDPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(7) Tabstop(False) Top(329) Width(258) Height(29) Layoutmanager(#TableLayout2) Themedrawstyle('ButtonLook1')
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#AddToCart) Caption('Add to Cart   ') Displayposition(1) Ellipses(Word) Height(29) Left(35) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(223) Alignment(Center) Style(#XSTheme01<Text12Wh>)
         //
         var ADDTOCART = this.createReference( "ADDTOCART", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#AddToCart1) Displayposition(2) Height(29) Image(#XSShoppingCartIconLight) Left(0) Parent(#Panel1) Tabposition(2) Tabstop(False) Top(0) Width(35) Style(#XSTheme01<RightWhBorder>)
         //
         var ADDTOCART1 = this.createReference( "ADDTOCART1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#prim_imag) Name(#ProductImage) Displayposition(6) Parent(#COM_OWNER) Tabposition(5) Imagesizing(BestFit) Left(69) Width(120) Height(120)
         //
         var PRODUCTIMAGE = this.createReference( "PRODUCTIMAGE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#XSProductData) Name(#gProduct) Reference(*Dynamic)
         //
         this.createDynamicReference( "GPRODUCT" );

         //
         // DEFINE_COM Class(#Prim_tile.TileItem) Name(#gTileItem) Reference(*dynamic)
         //
         this.createDynamicReference( "GTILEITEM" );

         //
         // DEFINE_COM Class(#XSShoppingCartSummary) Name(#Popup)
         //
         var POPUP = this.createReference( "POPUP", "XSSHPSM1" );

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
         ROW1.setUnits( "PIXELS" );
         ROW1.setHeight( 140 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 4 );
         ROW4.setParent( TABLELAYOUT1 );
         ROW4.setHeight( 35 );
         ROW4.setUnits( "PIXELS" );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 5 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.setHeight( 30 );
         ROW5.setUnits( "PIXELS" );
         ROW5.initialize();

         // -----------------------------------
         // -- Initialize #PRODUCTIMAGEITEM1 --
         // -----------------------------------
         PRODUCTIMAGEITEM1.setManage( PRODUCTIMAGE );
         PRODUCTIMAGEITEM1.setParent( TABLELAYOUT1 );
         PRODUCTIMAGEITEM1.setRow( ROW1 );
         PRODUCTIMAGEITEM1.setSizing( "NONE" );
         PRODUCTIMAGEITEM1.setColumn( COLUMN1 );
         PRODUCTIMAGEITEM1.initialize();

         // ------------------------------------------
         // -- Initialize #LPRODUCTDESCRIPTIONITEM1 --
         // ------------------------------------------
         LPRODUCTDESCRIPTIONITEM1.setManage( LPRODUCTDESCRIPTION );
         LPRODUCTDESCRIPTIONITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTDESCRIPTIONITEM1.setRow( ROW2 );
         LPRODUCTDESCRIPTIONITEM1.setColumn( COLUMN1 );
         LPRODUCTDESCRIPTIONITEM1.setAlignment( "CENTERLEFT" );
         LPRODUCTDESCRIPTIONITEM1.initialize();

         // --------------------------------
         // -- Initialize #ADDTOCARTITEM1 --
         // --------------------------------
         ADDTOCARTITEM1.setManage( ADDTOCART );
         ADDTOCARTITEM1.setParent( TABLELAYOUT1 );
         ADDTOCARTITEM1.setRow( ROW5 );
         ADDTOCARTITEM1.setColumn( COLUMN1 );
         ADDTOCARTITEM1.setAlignment( "CENTERLEFT" );
         ADDTOCARTITEM1.initialize();

         // -------------------------------------
         // -- Initialize #XSPRODUCTPRICEITEM1 --
         // -------------------------------------
         XSPRODUCTPRICEITEM1.setManage( XSPRODUCTPRICE );
         XSPRODUCTPRICEITEM1.setParent( TABLELAYOUT1 );
         XSPRODUCTPRICEITEM1.setRow( ROW4 );
         XSPRODUCTPRICEITEM1.setSizing( "NONE" );
         XSPRODUCTPRICEITEM1.setColumn( COLUMN1 );
         XSPRODUCTPRICEITEM1.setAlignment( "CENTERLEFT" );
         XSPRODUCTPRICEITEM1.setFlow( "RIGHT" );
         XSPRODUCTPRICEITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTDETAILITEM1 --
         // -------------------------------------
         LPRODUCTDETAILITEM1.setManage( LPRODUCTDETAIL );
         LPRODUCTDETAILITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTDETAILITEM1.setRow( ROW3 );
         LPRODUCTDETAILITEM1.setColumn( COLUMN1 );
         LPRODUCTDETAILITEM1.setFlow( "DOWN" );
         LPRODUCTDETAILITEM1.setSizing( "FITTOWIDTH" );
         LPRODUCTDETAILITEM1.setAlignment( "TOPCENTER" );
         LPRODUCTDETAILITEM1.initialize();

         // -----------------------------------
         // -- Initialize #LSTOCKSTATUSITEM1 --
         // -----------------------------------
         LSTOCKSTATUSITEM1.setManage( LSTOCKSTATUS );
         LSTOCKSTATUSITEM1.setParent( TABLELAYOUT1 );
         LSTOCKSTATUSITEM1.setRow( ROW4 );
         LSTOCKSTATUSITEM1.setSizing( "NONE" );
         LSTOCKSTATUSITEM1.setFlow( "RIGHT" );
         LSTOCKSTATUSITEM1.setColumn( COLUMN1 );
         LSTOCKSTATUSITEM1.setAlignment( "CENTERLEFT" );
         LSTOCKSTATUSITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( PANEL1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW5 );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setAlignment( "BOTTOMLEFT" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setManage( LMODEL );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW3 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setAlignment( "TOPCENTER" );
         LAYOUTITEM3.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 1 );
         COLUMN2.setParent( TABLELAYOUT2 );
         COLUMN2.setWidth( 35 );
         COLUMN2.setUnits( "PIXELS" );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 2 );
         COLUMN3.setParent( TABLELAYOUT2 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 1 );
         ROW6.setParent( TABLELAYOUT2 );
         ROW6.initialize();

         // -----------------------------
         // -- Initialize #LABEL1ITEM1 --
         // -----------------------------
         LABEL1ITEM1.setColumn( COLUMN3 );
         LABEL1ITEM1.setManage( ADDTOCART );
         LABEL1ITEM1.setParent( TABLELAYOUT2 );
         LABEL1ITEM1.setRow( ROW6 );
         LABEL1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( ADDTOCART1 );
         LAYOUTITEM2.setParent( TABLELAYOUT2 );
         LAYOUTITEM2.setRow( ROW6 );
         LAYOUTITEM2.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTDESCRIPTION --
         // -------------------------------------
         LPRODUCTDESCRIPTION.setDisplayPosition( 7 );
         LPRODUCTDESCRIPTION.setEllipses( "WORD" );
         LPRODUCTDESCRIPTION.setLeft( 0 );
         LPRODUCTDESCRIPTION.setParent( this );
         LPRODUCTDESCRIPTION.setTabPosition( 6 );
         LPRODUCTDESCRIPTION.setTabStop( false );
         LPRODUCTDESCRIPTION.setTop( 140 );
         LPRODUCTDESCRIPTION.setWidth( 258 );
         LPRODUCTDESCRIPTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT11BOLDBL3" ) );
         LPRODUCTDESCRIPTION.setCaption( "<description>" );
         LPRODUCTDESCRIPTION.setMarginLeft( 10 );
         LPRODUCTDESCRIPTION.setHeight( 77 );
         LPRODUCTDESCRIPTION.setMarginRight( 5 );
         LPRODUCTDESCRIPTION.initialize();

         // ------------------------------
         // -- Initialize #LSTOCKSTATUS --
         // ------------------------------
         LSTOCKSTATUS.setCaption( "Stock Status" );
         LSTOCKSTATUS.setDisplayPosition( 5 );
         LSTOCKSTATUS.setEllipses( "WORD" );
         LSTOCKSTATUS.setLeft( 142 );
         LSTOCKSTATUS.setParent( this );
         LSTOCKSTATUS.setTabPosition( 4 );
         LSTOCKSTATUS.setTabStop( false );
         LSTOCKSTATUS.setTop( 295 );
         LSTOCKSTATUS.setVerticalAlignment( "CENTER" );
         LSTOCKSTATUS.setWidth( 142 );
         LSTOCKSTATUS.setHeight( 30 );
         LSTOCKSTATUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LSTOCKSTATUS.initialize();

         // ------------------------
         // -- Initialize #LMODEL --
         // ------------------------
         LMODEL.setCaption( "Model :" );
         LMODEL.setDisplayPosition( 2 );
         LMODEL.setEllipses( "WORD" );
         LMODEL.setHeight( 25 );
         LMODEL.setLeft( 0 );
         LMODEL.setParent( this );
         LMODEL.setTabPosition( 1 );
         LMODEL.setTabStop( false );
         LMODEL.setTop( 217 );
         LMODEL.setVerticalAlignment( "CENTER" );
         LMODEL.setWidth( 258 );
         LMODEL.setMarginLeft( 10 );
         LMODEL.setMarginRight( 10 );
         LMODEL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LMODEL.initialize();

         // --------------------------------
         // -- Initialize #LPRODUCTDETAIL --
         // --------------------------------
         LPRODUCTDETAIL.setCaption( "<product detail>" );
         LPRODUCTDETAIL.setDisplayPosition( 3 );
         LPRODUCTDETAIL.setEllipses( "WORD" );
         LPRODUCTDETAIL.setLeft( 0 );
         LPRODUCTDETAIL.setParent( this );
         LPRODUCTDETAIL.setTabPosition( 3 );
         LPRODUCTDETAIL.setTabStop( false );
         LPRODUCTDETAIL.setTop( 242 );
         LPRODUCTDETAIL.setWidth( 258 );
         LPRODUCTDETAIL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LPRODUCTDETAIL.setHeight( 54 );
         LPRODUCTDETAIL.setMarginLeft( 10 );
         LPRODUCTDETAIL.setMarginRight( 10 );
         LPRODUCTDETAIL.initialize();

         // --------------------------------
         // -- Initialize #XSPRODUCTPRICE --
         // --------------------------------
         XSPRODUCTPRICE.setDisplayPosition( 4 );
         XSPRODUCTPRICE.setParent( this );
         XSPRODUCTPRICE.setTabPosition( 2 );
         XSPRODUCTPRICE.setTabStop( false );
         XSPRODUCTPRICE.setTop( 295 );
         XSPRODUCTPRICE.setHeight( 30 );
         XSPRODUCTPRICE.setWidth( 142 );
         XSPRODUCTPRICE.setReadOnly( true );
         XSPRODUCTPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.setMarginLeft( 20 );
         XSPRODUCTPRICE.setCaption( "$" );
         XSPRODUCTPRICE.setLabelType( "CAPTION" );
         XSPRODUCTPRICE.setEllipses( "WORD" );
         XSPRODUCTPRICE.setLabelHorAlignment( "RIGHT" );
         XSPRODUCTPRICE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.applyDefault();
         XSPRODUCTPRICE.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 7 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 329 );
         PANEL1.setWidth( 258 );
         PANEL1.setHeight( 29 );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.setThemeDrawStyle( "ButtonLook1" );
         PANEL1.initialize();

         // ---------------------------
         // -- Initialize #ADDTOCART --
         // ---------------------------
         ADDTOCART.setCaption( "Add to Cart   " );
         ADDTOCART.setDisplayPosition( 1 );
         ADDTOCART.setEllipses( "WORD" );
         ADDTOCART.setHeight( 29 );
         ADDTOCART.setLeft( 35 );
         ADDTOCART.setParent( PANEL1 );
         ADDTOCART.setTabPosition( 1 );
         ADDTOCART.setTabStop( false );
         ADDTOCART.setTop( 0 );
         ADDTOCART.setVerticalAlignment( "CENTER" );
         ADDTOCART.setWidth( 223 );
         ADDTOCART.setAlignment( "CENTER" );
         ADDTOCART.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12WH" ) );
         ADDTOCART.initialize();

         // ----------------------------
         // -- Initialize #ADDTOCART1 --
         // ----------------------------
         ADDTOCART1.setDisplayPosition( 2 );
         ADDTOCART1.setHeight( 29 );
         ADDTOCART1.setImage( resource1 );
         ADDTOCART1.setLeft( 0 );
         ADDTOCART1.setParent( PANEL1 );
         ADDTOCART1.setTabPosition( 2 );
         ADDTOCART1.setTabStop( false );
         ADDTOCART1.setTop( 0 );
         ADDTOCART1.setWidth( 35 );
         ADDTOCART1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "RIGHTWHBORDER" ) );
         ADDTOCART1.initialize();

         // ------------------------------
         // -- Initialize #PRODUCTIMAGE --
         // ------------------------------
         PRODUCTIMAGE.setDisplayPosition( 6 );
         PRODUCTIMAGE.setParent( this );
         PRODUCTIMAGE.setTabPosition( 5 );
         PRODUCTIMAGE.setImageSizing( "BESTFIT" );
         PRODUCTIMAGE.setLeft( 69 );
         PRODUCTIMAGE.setWidth( 120 );
         PRODUCTIMAGE.setHeight( 120 );
         PRODUCTIMAGE.initialize();

         // -----------------------
         // -- Initialize #POPUP --
         // -----------------------
         POPUP.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #ADDTOCART --
         // ---------------------------------------
         ADDTOCART.addEventHandler( "CLICK", this, evtRoutine1 );

         // ----------------------------------------
         // -- Add Event Handlers for #ADDTOCART1 --
         // ----------------------------------------
         ADDTOCART1.addEventHandler( "CLICK", this, evtRoutine1 );

         // -----------------------------------
         // -- Add Event Handlers for #POPUP --
         // -----------------------------------
         POPUP.addEventHandler( "CONTINUE", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 360 );
         this.setWidth( 260 );
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         this.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2" ) );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthONITEMGOTREFERENCE - OnItemGotReference
   //
   COM_OWNER.mthONITEMGOTREFERENCE = function( parm_TILEITEM )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemGotReference", 48 );

      //
      // DEFINE_MAP Class(#PRIM_TILE.TileItem) Name(TileItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TILEITEM = rtn.createDynamicParameter( "TILEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TILEITEM = parm_TILEITEM;

      //
      // MTHROUTINE Name(OnItemGotReference) Options(*redefine)
      //
      rtn.Line( 48 );
      {

         //
         // #com_owner.pCurrentTile #gProduct <= #TileItem.RelatedReference *As #XSProductData
         //
         rtn.Line( 50 );
         this.setPCURRENTTILE( Lansa.cast( TILEITEM.getRelatedReference(), "XSPRDDTA" ) );
         this.setrefGPRODUCT( Lansa.cast( TILEITEM.getRelatedReference(), "XSPRDDTA" ) );

         //
         // #lProductDescription := #gProduct.ProductDesc
         //
         rtn.Line( 52 );
         ref.LPRODUCTDESCRIPTION.set( ref.GPRODUCT.getPRODUCTDESC() );

         //
         // CASE (#gProduct.StockStatus)
         //
         rtn.Line( 54 );
         {
            var value1 = ref.GPRODUCT.getSTOCKSTATUS();

            //
            // WHEN ('= INSTOCK')
            //
            if ( rtn.Line( 56 ), Lansa.String.eq( value1, "INSTOCK" ) )
            {

               //
               // #lStockStatus := 'In Stock'
               //
               rtn.Line( 58 );
               ref.LSTOCKSTATUS.set( "In Stock" );
            }

            //
            // WHEN ('= BACKORDER')
            //
            else if ( rtn.Line( 60 ), Lansa.String.eq( value1, "BACKORDER" ) )
            {

               //
               // #lStockStatus := 'On Order'
               //
               rtn.Line( 62 );
               ref.LSTOCKSTATUS.set( "On Order" );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #lStockStatus := 'No longer available'
               //
               rtn.Line( 66 );
               ref.LSTOCKSTATUS.set( "No longer available" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 68 );
         }

         //
         // #lModel := 'Model : ' + #gProduct.ProductModel
         //
         rtn.Line( 70 );
         ref.LMODEL.set( Lansa.cat( "Model : ", ref.GPRODUCT.getPRODUCTMODEL() ) );

         //
         // #lProductDetail := #gProduct.ProductDetail
         //
         rtn.Line( 71 );
         ref.LPRODUCTDETAIL.set( ref.GPRODUCT.getPRODUCTDETAIL() );

         //
         // #XSProductPrice := #gProduct.UnitPrice
         //
         rtn.Line( 72 );
         ref.XSPRODUCTPRICE.set( ref.GPRODUCT.getUNITPRICE() );

         //
         // #com_owner.pProductID := #gProduct.ID
         //
         rtn.Line( 74 );
         this.setPPRODUCTID( ref.GPRODUCT.getID() );

         //
         // #ProductImage.filename := #gProduct.ImageLink
         //
         rtn.Line( 77 );
         ref.PRODUCTIMAGE.setFileName( ref.GPRODUCT.getIMAGELINK() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 79 );
      rtn.end();
   };

   //
   // evtRoutine1 - #AddToCart.Click #AddToCart1.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddToCart.Click #AddToCart1.Click", 81 );

      //
      // EVTROUTINE Handling(#AddToCart.Click #AddToCart1.Click)
      //
      rtn.Line( 81 );
      {

         //
         // #Popup.AddItemtoCart( #gProduct.ID )
         //
         rtn.Line( 83 );
         ref.POPUP.mthADDITEMTOCART( ref.GPRODUCT.getID() );

         //
         // #Popup.ShowPopup
         //
         rtn.Line( 85 );
         ref.POPUP.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Popup.continue
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Popup.continue", 89 );

      //
      // EVTROUTINE Handling(#Popup.continue)
      //
      rtn.Line( 89 );
      {

         //
         // #Popup.ClosePopup
         //
         rtn.Line( 91 );
         ref.POPUP.mthCLOSEPOPUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(pCurrentTile) Get(*REFERENCE #gProduct) Set(*REFERENCE #gProduct)
   //
   COM_OWNER.getPCURRENTTILE = function()
   {
      return this.REF.GPRODUCT;
   };

   COM_OWNER.setPCURRENTTILE = function( value )
   {
      this.setrefGPRODUCT( value );
   };

   //
   // DEFINE_PTY Name(pProductID) Get(*auto #XSProductID) Set(*auto #XSProductID)
   //
   COM_OWNER.getPPRODUCTID = function()
   {
      return this.FLD.XSPRDTIL2.XSPRDID.get();
   };

   COM_OWNER.setPPRODUCTID = function( value )
   {
      this.FLD.XSPRDTIL2.XSPRDID.set( value );
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

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGPRODUCT = function( refNew )
   {
      this.setref( "GPRODUCT", refNew );
   };

   COM_OWNER.setrefGTILEITEM = function( refNew )
   {
      this.setref( "GTILEITEM", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSSHPSM1", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EVEF", "PRIM_IMAG" ],
   dc: [ "XSPRDDTA" ],
   dp: [ "PRIM_TILE.TileItem" ]
});

//# sourceURL=xsprdtil2.js
