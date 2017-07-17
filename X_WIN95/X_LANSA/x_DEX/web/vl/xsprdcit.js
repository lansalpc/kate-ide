// -----------------------------
// -- Reusable Part: XSPRDCIT --
// -----------------------------
LANSA.addComponent(
{
   id: "XSPRDCIT", 
   nm: "XSProductCarouselItem", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Product CarouselItem", 
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
         OnItemGotReference: 
         {
            ps: 
            {
               "CarouselItem":
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
         this.addFields( "XSPRDCIT", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Units(Pixels) Width(125)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Minwidth(125)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(70) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(3) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(2) Parent(#TableLayout1) Height(3)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(4) Parent(#TableLayout1)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(5) Parent(#TableLayout1) Height(40) Units(Pixels)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lStockStatusItem1) Manage(#lStockStatus) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Column(#Column2) Alignment(TopLeft) Flow(Down) Margintop(3) Marginleft(10)
         //
         var LSTOCKSTATUSITEM1 = this.createReference( "LSTOCKSTATUSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSProductPriceItem1) Manage(#XSProductPrice) Parent(#TableLayout1) Row(#Row4) Sizing(FitToWidth) Column(#Column2) Alignment(TopLeft) Flow(Down) Margintop(3) Marginleft(10)
         //
         var XSPRODUCTPRICEITEM1 = this.createReference( "XSPRODUCTPRICEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AddtoCartItem1) Manage(#AddToCart) Parent(#TableLayout1) Row(#Row5) Column(#Column1) Alignment(BottomCenter) Flow(Down) Columnspan(2)
         //
         var ADDTOCARTITEM1 = this.createReference( "ADDTOCARTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#TBLO_10) Column(#Column1) Flow(Down) Manage(#ProductImage) Parent(#TableLayout1) Row(#Row3) Rowspan(4) Sizing(None)
         //
         var TBLO_10 = this.createReference( "TBLO_10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column2) Flow(Down) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lProductDescriptionItem1) Manage(#lProductDescription) Parent(#TableLayout1) Row(#Row1) Column(#Column1) Alignment(TopLeft) Flow(Down) Columnspan(2)
         //
         var LPRODUCTDESCRIPTIONITEM1 = this.createReference( "LPRODUCTDESCRIPTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lProductDetailItem1) Manage(#lProductDetail) Parent(#TableLayout1) Row(#Row3) Column(#Column2) Marginright(5) Margintop(2) Marginleft(5)
         //
         var LPRODUCTDETAILITEM1 = this.createReference( "LPRODUCTDETAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row5) Columnspan(2)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#TableLayout2) Width(35) Units(Pixels)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(2) Parent(#TableLayout2)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AddToCartItem2) Manage(#AddToCart) Parent(#TableLayout2) Row(#Row6) Column(#Column4)
         //
         var ADDTOCARTITEM2 = this.createReference( "ADDTOCARTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AddToCart1Item1) Manage(#AddToCart1) Parent(#TableLayout2) Row(#Row6) Column(#Column3)
         //
         var ADDTOCART1ITEM1 = this.createReference( "ADDTOCART1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lProductDescription) Displayposition(6) Ellipses(Word) Left(0) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(0) Width(388) Caption('<description>') Verticalalignment(Center) Alignment(Center) Themedrawstyle('PanelHeader1') Height(70)
         //
         var LPRODUCTDESCRIPTION = this.createReference( "LPRODUCTDESCRIPTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lStockStatus) Caption('Stock Status') Displayposition(3) Ellipses(Word) Left(135) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(222) Verticalalignment(Center) Width(253) Height(30) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LSTOCKSTATUS = this.createReference( "LSTOCKSTATUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lProductDetail) Caption('<product detail>') Displayposition(2) Ellipses(Word) Left(130) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(72) Verticalalignment(Center) Width(253) Style(#XSTheme01<Text10AlmostBlack>) Height(147)
         //
         var LPRODUCTDETAIL = this.createReference( "LPRODUCTDETAIL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSProductPrice.Visual) Name(#XSProductPrice) Displayposition(4) Left(135) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(272) Height(30) Width(253) Readonly(True) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Marginleft(10) Caption('$') Labeltype(Caption) Ellipses(Word) Labelhoralignment(Right) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var XSPRODUCTPRICE = this.createFieldReference( "XSPRODUCTPRICE", Fields.XSPRDPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#prim_imag) Name(#ProductImage) Displayposition(5) Parent(#COM_OWNER) Tabposition(4) Imagesizing(BestFit) Top(154) Left(2) Width(120) Height(120)
         //
         var PRODUCTIMAGE = this.createReference( "PRODUCTIMAGE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(318) Width(388) Layoutmanager(#TableLayout2) Themedrawstyle('ButtonLook1') Height(40)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#AddToCart) Caption('Add to Cart   ') Displayposition(1) Ellipses(Word) Left(35) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(353) Alignment(Center) Style(#XSTheme01<Text12Wh>) Height(40)
         //
         var ADDTOCART = this.createReference( "ADDTOCART", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#AddToCart1) Displayposition(2) Image(#XSShoppingCartIconLight) Left(0) Parent(#Panel1) Tabposition(2) Tabstop(False) Top(0) Width(35) Style(#XSTheme01<RightWhBorder>) Height(40)
         //
         var ADDTOCART1 = this.createReference( "ADDTOCART1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#XSProductData) Name(#gProduct) Reference(*Dynamic)
         //
         this.createDynamicReference( "GPRODUCT" );

         //
         // DEFINE_COM Class(#Prim_caro.CarouselItem) Name(#gTileItem) Reference(*dynamic)
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
         COLUMN1.setUnits( "PIXELS" );
         COLUMN1.setWidth( 125 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setMinWidth( 125 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setHeight( 70 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 3 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 2 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.setHeight( 3 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 4 );
         ROW4.setParent( TABLELAYOUT1 );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 5 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.setHeight( 40 );
         ROW5.setUnits( "PIXELS" );
         ROW5.initialize();

         // -----------------------------------
         // -- Initialize #LSTOCKSTATUSITEM1 --
         // -----------------------------------
         LSTOCKSTATUSITEM1.setManage( LSTOCKSTATUS );
         LSTOCKSTATUSITEM1.setParent( TABLELAYOUT1 );
         LSTOCKSTATUSITEM1.setRow( ROW2 );
         LSTOCKSTATUSITEM1.setSizing( "FITTOWIDTH" );
         LSTOCKSTATUSITEM1.setColumn( COLUMN2 );
         LSTOCKSTATUSITEM1.setAlignment( "TOPLEFT" );
         LSTOCKSTATUSITEM1.setFlow( "DOWN" );
         LSTOCKSTATUSITEM1.setMarginTop( 3 );
         LSTOCKSTATUSITEM1.setMarginLeft( 10 );
         LSTOCKSTATUSITEM1.initialize();

         // -------------------------------------
         // -- Initialize #XSPRODUCTPRICEITEM1 --
         // -------------------------------------
         XSPRODUCTPRICEITEM1.setManage( XSPRODUCTPRICE );
         XSPRODUCTPRICEITEM1.setParent( TABLELAYOUT1 );
         XSPRODUCTPRICEITEM1.setRow( ROW4 );
         XSPRODUCTPRICEITEM1.setSizing( "FITTOWIDTH" );
         XSPRODUCTPRICEITEM1.setColumn( COLUMN2 );
         XSPRODUCTPRICEITEM1.setAlignment( "TOPLEFT" );
         XSPRODUCTPRICEITEM1.setFlow( "DOWN" );
         XSPRODUCTPRICEITEM1.setMarginTop( 3 );
         XSPRODUCTPRICEITEM1.setMarginLeft( 10 );
         XSPRODUCTPRICEITEM1.initialize();

         // --------------------------------
         // -- Initialize #ADDTOCARTITEM1 --
         // --------------------------------
         ADDTOCARTITEM1.setManage( ADDTOCART );
         ADDTOCARTITEM1.setParent( TABLELAYOUT1 );
         ADDTOCARTITEM1.setRow( ROW5 );
         ADDTOCARTITEM1.setColumn( COLUMN1 );
         ADDTOCARTITEM1.setAlignment( "BOTTOMCENTER" );
         ADDTOCARTITEM1.setFlow( "DOWN" );
         ADDTOCARTITEM1.setColumnSpan( 2 );
         ADDTOCARTITEM1.initialize();

         // -------------------------
         // -- Initialize #TBLO_10 --
         // -------------------------
         TBLO_10.setColumn( COLUMN1 );
         TBLO_10.setFlow( "DOWN" );
         TBLO_10.setManage( PRODUCTIMAGE );
         TBLO_10.setParent( TABLELAYOUT1 );
         TBLO_10.setRow( ROW3 );
         TBLO_10.setRowSpan( 4 );
         TBLO_10.setSizing( "NONE" );
         TBLO_10.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.initialize();

         // ------------------------------------------
         // -- Initialize #LPRODUCTDESCRIPTIONITEM1 --
         // ------------------------------------------
         LPRODUCTDESCRIPTIONITEM1.setManage( LPRODUCTDESCRIPTION );
         LPRODUCTDESCRIPTIONITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTDESCRIPTIONITEM1.setRow( ROW1 );
         LPRODUCTDESCRIPTIONITEM1.setColumn( COLUMN1 );
         LPRODUCTDESCRIPTIONITEM1.setAlignment( "TOPLEFT" );
         LPRODUCTDESCRIPTIONITEM1.setFlow( "DOWN" );
         LPRODUCTDESCRIPTIONITEM1.setColumnSpan( 2 );
         LPRODUCTDESCRIPTIONITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTDETAILITEM1 --
         // -------------------------------------
         LPRODUCTDETAILITEM1.setManage( LPRODUCTDETAIL );
         LPRODUCTDETAILITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTDETAILITEM1.setRow( ROW3 );
         LPRODUCTDETAILITEM1.setColumn( COLUMN2 );
         LPRODUCTDETAILITEM1.setMarginRight( 5 );
         LPRODUCTDETAILITEM1.setMarginTop( 2 );
         LPRODUCTDETAILITEM1.setMarginLeft( 5 );
         LPRODUCTDETAILITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setManage( PANEL1 );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW5 );
         LAYOUTITEM2.setColumnSpan( 2 );
         LAYOUTITEM2.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 1 );
         COLUMN3.setParent( TABLELAYOUT2 );
         COLUMN3.setWidth( 35 );
         COLUMN3.setUnits( "PIXELS" );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 2 );
         COLUMN4.setParent( TABLELAYOUT2 );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 1 );
         ROW6.setParent( TABLELAYOUT2 );
         ROW6.initialize();

         // --------------------------------
         // -- Initialize #ADDTOCARTITEM2 --
         // --------------------------------
         ADDTOCARTITEM2.setManage( ADDTOCART );
         ADDTOCARTITEM2.setParent( TABLELAYOUT2 );
         ADDTOCARTITEM2.setRow( ROW6 );
         ADDTOCARTITEM2.setColumn( COLUMN4 );
         ADDTOCARTITEM2.initialize();

         // ---------------------------------
         // -- Initialize #ADDTOCART1ITEM1 --
         // ---------------------------------
         ADDTOCART1ITEM1.setManage( ADDTOCART1 );
         ADDTOCART1ITEM1.setParent( TABLELAYOUT2 );
         ADDTOCART1ITEM1.setRow( ROW6 );
         ADDTOCART1ITEM1.setColumn( COLUMN3 );
         ADDTOCART1ITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTDESCRIPTION --
         // -------------------------------------
         LPRODUCTDESCRIPTION.setDisplayPosition( 6 );
         LPRODUCTDESCRIPTION.setEllipses( "WORD" );
         LPRODUCTDESCRIPTION.setLeft( 0 );
         LPRODUCTDESCRIPTION.setParent( this );
         LPRODUCTDESCRIPTION.setTabPosition( 5 );
         LPRODUCTDESCRIPTION.setTabStop( false );
         LPRODUCTDESCRIPTION.setTop( 0 );
         LPRODUCTDESCRIPTION.setWidth( 388 );
         LPRODUCTDESCRIPTION.setCaption( "<description>" );
         LPRODUCTDESCRIPTION.setVerticalAlignment( "CENTER" );
         LPRODUCTDESCRIPTION.setAlignment( "CENTER" );
         LPRODUCTDESCRIPTION.setThemeDrawStyle( "PanelHeader1" );
         LPRODUCTDESCRIPTION.setHeight( 70 );
         LPRODUCTDESCRIPTION.initialize();

         // ------------------------------
         // -- Initialize #LSTOCKSTATUS --
         // ------------------------------
         LSTOCKSTATUS.setCaption( "Stock Status" );
         LSTOCKSTATUS.setDisplayPosition( 3 );
         LSTOCKSTATUS.setEllipses( "WORD" );
         LSTOCKSTATUS.setLeft( 135 );
         LSTOCKSTATUS.setParent( this );
         LSTOCKSTATUS.setTabPosition( 2 );
         LSTOCKSTATUS.setTabStop( false );
         LSTOCKSTATUS.setTop( 222 );
         LSTOCKSTATUS.setVerticalAlignment( "CENTER" );
         LSTOCKSTATUS.setWidth( 253 );
         LSTOCKSTATUS.setHeight( 30 );
         LSTOCKSTATUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LSTOCKSTATUS.initialize();

         // --------------------------------
         // -- Initialize #LPRODUCTDETAIL --
         // --------------------------------
         LPRODUCTDETAIL.setCaption( "<product detail>" );
         LPRODUCTDETAIL.setDisplayPosition( 2 );
         LPRODUCTDETAIL.setEllipses( "WORD" );
         LPRODUCTDETAIL.setLeft( 130 );
         LPRODUCTDETAIL.setParent( this );
         LPRODUCTDETAIL.setTabPosition( 1 );
         LPRODUCTDETAIL.setTabStop( false );
         LPRODUCTDETAIL.setTop( 72 );
         LPRODUCTDETAIL.setVerticalAlignment( "CENTER" );
         LPRODUCTDETAIL.setWidth( 253 );
         LPRODUCTDETAIL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LPRODUCTDETAIL.setHeight( 147 );
         LPRODUCTDETAIL.initialize();

         // --------------------------------
         // -- Initialize #XSPRODUCTPRICE --
         // --------------------------------
         XSPRODUCTPRICE.setDisplayPosition( 4 );
         XSPRODUCTPRICE.setLeft( 135 );
         XSPRODUCTPRICE.setParent( this );
         XSPRODUCTPRICE.setTabPosition( 3 );
         XSPRODUCTPRICE.setTabStop( false );
         XSPRODUCTPRICE.setTop( 272 );
         XSPRODUCTPRICE.setHeight( 30 );
         XSPRODUCTPRICE.setWidth( 253 );
         XSPRODUCTPRICE.setReadOnly( true );
         XSPRODUCTPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.setMarginLeft( 10 );
         XSPRODUCTPRICE.setCaption( "$" );
         XSPRODUCTPRICE.setLabelType( "CAPTION" );
         XSPRODUCTPRICE.setEllipses( "WORD" );
         XSPRODUCTPRICE.setLabelHorAlignment( "RIGHT" );
         XSPRODUCTPRICE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.applyDefault();
         XSPRODUCTPRICE.initialize();

         // ------------------------------
         // -- Initialize #PRODUCTIMAGE --
         // ------------------------------
         PRODUCTIMAGE.setDisplayPosition( 5 );
         PRODUCTIMAGE.setParent( this );
         PRODUCTIMAGE.setTabPosition( 4 );
         PRODUCTIMAGE.setImageSizing( "BESTFIT" );
         PRODUCTIMAGE.setTop( 154 );
         PRODUCTIMAGE.setLeft( 2 );
         PRODUCTIMAGE.setWidth( 120 );
         PRODUCTIMAGE.setHeight( 120 );
         PRODUCTIMAGE.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 6 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 318 );
         PANEL1.setWidth( 388 );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.setThemeDrawStyle( "ButtonLook1" );
         PANEL1.setHeight( 40 );
         PANEL1.initialize();

         // ---------------------------
         // -- Initialize #ADDTOCART --
         // ---------------------------
         ADDTOCART.setCaption( "Add to Cart   " );
         ADDTOCART.setDisplayPosition( 1 );
         ADDTOCART.setEllipses( "WORD" );
         ADDTOCART.setLeft( 35 );
         ADDTOCART.setParent( PANEL1 );
         ADDTOCART.setTabPosition( 1 );
         ADDTOCART.setTabStop( false );
         ADDTOCART.setTop( 0 );
         ADDTOCART.setVerticalAlignment( "CENTER" );
         ADDTOCART.setWidth( 353 );
         ADDTOCART.setAlignment( "CENTER" );
         ADDTOCART.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12WH" ) );
         ADDTOCART.setHeight( 40 );
         ADDTOCART.initialize();

         // ----------------------------
         // -- Initialize #ADDTOCART1 --
         // ----------------------------
         ADDTOCART1.setDisplayPosition( 2 );
         ADDTOCART1.setImage( resource1 );
         ADDTOCART1.setLeft( 0 );
         ADDTOCART1.setParent( PANEL1 );
         ADDTOCART1.setTabPosition( 2 );
         ADDTOCART1.setTabStop( false );
         ADDTOCART1.setTop( 0 );
         ADDTOCART1.setWidth( 35 );
         ADDTOCART1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "RIGHTWHBORDER" ) );
         ADDTOCART1.setHeight( 40 );
         ADDTOCART1.initialize();

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
         this.setWidth( 390 );
         this.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2" ) );
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         this.setLayoutManager( TABLELAYOUT1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthONITEMGOTREFERENCE - OnItemGotReference
   //
   COM_OWNER.mthONITEMGOTREFERENCE = function( parm_CAROUSELITEM )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "OnItemGotReference", 48 );

      //
      // DEFINE_MAP Class(#PRIM_CARO.CarouselItem) Name(CarouselItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var CAROUSELITEM = rtn.createDynamicParameter( "CAROUSELITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CAROUSELITEM = parm_CAROUSELITEM;

      //
      // MTHROUTINE Name(OnItemGotReference) Options(*redefine)
      //
      rtn.Line( 48 );
      {

         //
         // #gProduct <= #CarouselItem.RelatedReference *As #XSProductData
         //
         rtn.Line( 50 );
         this.setrefGPRODUCT( Lansa.cast( CAROUSELITEM.getRelatedReference(), "XSPRDDTA" ) );

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
         // #lProductDetail := #gProduct.ProductDetail
         //
         rtn.Line( 70 );
         ref.LPRODUCTDETAIL.set( ref.GPRODUCT.getPRODUCTDETAIL() );

         //
         // #XSProductPrice := #gProduct.UnitPrice
         //
         rtn.Line( 71 );
         ref.XSPRODUCTPRICE.set( ref.GPRODUCT.getUNITPRICE() );

         //
         // #ProductImage.filename := #gProduct.ImageLink
         //
         rtn.Line( 73 );
         ref.PRODUCTIMAGE.setFileName( ref.GPRODUCT.getIMAGELINK() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 75 );
      rtn.end();
   };

   //
   // evtRoutine1 - #AddToCart.Click #AddToCart1.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddToCart.Click #AddToCart1.Click", 77 );

      //
      // EVTROUTINE Handling(#AddToCart.Click #AddToCart1.Click)
      //
      rtn.Line( 77 );
      {

         //
         // #Popup.AddItemtoCart( #gProduct.ID )
         //
         rtn.Line( 80 );
         ref.POPUP.mthADDITEMTOCART( ref.GPRODUCT.getID() );

         //
         // #Popup.ShowPopup
         //
         rtn.Line( 82 );
         ref.POPUP.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 84 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Popup.continue
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Popup.continue", 86 );

      //
      // EVTROUTINE Handling(#Popup.continue)
      //
      rtn.Line( 86 );
      {

         //
         // #Popup.ClosePopup
         //
         rtn.Line( 89 );
         ref.POPUP.mthCLOSEPOPUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 91 );
      rtn.end();
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
   dp: [ "PRIM_CARO.CarouselItem" ]
});

//# sourceURL=xsprdcit.js
