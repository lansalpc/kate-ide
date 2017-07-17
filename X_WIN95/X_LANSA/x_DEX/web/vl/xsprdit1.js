// -----------------------------
// -- Reusable Part: XSPRDIT1 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSPRDIT1", 
   nm: "XSProductTreeItem", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Product Tree Item", 
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
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDecimal( "3.01" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
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
      },
      XSPRDCTID:
      {
         nm: "XSPRDCTID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Categry",
         h1: "Product",
         h2: "Category",
         h3: "ID",
         de: "Product Category ID",
         dv: "",
         ia: [ "FE" ]
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
         OnAdd: 
         {
            ps: 
            {
               "TreeItem":
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
         var fld = this.addFields( "XSPRDIT1", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(3)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(3)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1) Width(2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(3.01)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1) Height(3.01)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(4) Parent(#TableLayout1) Height(3)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(5) Parent(#TableLayout1) Height(3)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(6) Parent(#TableLayout1)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#ProductImage) Parent(#TableLayout1) Row(#Row1) Rowspan(6) Margintop(20) Marginbottom(20) Marginright(20) Marginleft(20)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#XSProductDescription) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Columnspan(2)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#XSProductDetail) Parent(#TableLayout1) Row(#Row3) Sizing(FitToWidth) Columnspan(2)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#XSProductPrice) Parent(#TableLayout1) Row(#Row5) Sizing(FitToWidth)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(BottomRight) Column(#Column3) Flow(Right) Manage(#AddtoCart) Parent(#TableLayout1) Row(#Row5) Sizing(None) Marginright(5)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#LStockStatus) Parent(#TableLayout1) Row(#Row4) Sizing(FitToWidth)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#PopupItem1) Manage(#Popup) Parent(#TableLayout1) Row(#Row6) Sizing(None) Column(#Column3) Alignment(TopRight) Marginright(5)
         //
         var POPUPITEM1 = this.createReference( "POPUPITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#ProductImage) Displayposition(1) Left(20) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(20) Width(210) Height(119) Imagesizing(BestFit)
         //
         var PRODUCTIMAGE = this.createReference( "PRODUCTIMAGE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#XSProductDescription.Visual) Name(#XSProductDescription) Displayposition(2) Left(250) Parent(#COM_OWNER) Tabposition(2) Top(12) Labelposition(None) Marginleft(0) Width(415) Readonly(True) Editstyle(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var XSPRODUCTDESCRIPTION = this.createFieldReference( "XSPRODUCTDESCRIPTION", Fields.XSPRDDSC.VISUALEDIT );

         //
         // DEFINE_COM Class(#XSProductDetail.Visual) Name(#XSProductDetail) Componentversion(1) Displayposition(3) Height(21) Left(250) Parent(#COM_OWNER) Tabposition(3) Top(46) Usepicklist(False) Width(415) Labelposition(None) Marginleft(0) Readonly(True) Editstyle(#XSTheme01<Text10AlmostBlack>)
         //
         var XSPRODUCTDETAIL = this.createFieldReference( "XSPRODUCTDETAIL", Fields.XSPRDDTL.VISUAL );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LStockStatus) Caption('Stock Status') Displayposition(4) Height(25) Left(250) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(80) Verticalalignment(Center) Width(249) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LSTOCKSTATUS = this.createReference( "LSTOCKSTATUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSProductPrice.Visual) Name(#XSProductPrice) Displayposition(5) Left(250) Parent(#COM_OWNER) Tabposition(5) Top(114) Width(249) Marginleft(10) Caption('$') Labelhoralignment(Right) Labeltype(Caption) Editstyle(#XSTheme01<Text10BoldAlmostBlack>) Style(#XSTheme01<Text10AlmostBlack>) Readonly(True)
         //
         var XSPRODUCTPRICE = this.createFieldReference( "XSPRODUCTPRICE", Fields.XSPRDPRC.VISUALEDIT );

         //
         // DEFINE_COM Class(#XSProductID.Visual) Name(#XSProductID) Displayposition(8) Left(249) Parent(#COM_OWNER) Tabposition(8) Top(161) Visible(False)
         //
         var XSPRODUCTID = this.createFieldReference( "XSPRODUCTID", Fields.XSPRDID.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#AddtoCart) Caption('Add to Cart') Displayposition(6) Left(540) Parent(#COM_OWNER) Tabposition(6) Top(123) Width(120)
         //
         var ADDTOCART = this.createReference( "ADDTOCART", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#XSShoppingCartSummary) Name(#Popup) Parent(#COM_OWNER) Top(148) Left(307)
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
         COLUMN1.setWidth( 3 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setWidth( 3 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.setWidth( 2 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( const1 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.setHeight( const1 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 4 );
         ROW4.setParent( TABLELAYOUT1 );
         ROW4.setHeight( 3 );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 5 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.setHeight( 3 );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 6 );
         ROW6.setParent( TABLELAYOUT1 );
         ROW6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( PRODUCTIMAGE );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setRowSpan( 6 );
         LAYOUTITEM1.setMarginTop( 20 );
         LAYOUTITEM1.setMarginBottom( 20 );
         LAYOUTITEM1.setMarginRight( 20 );
         LAYOUTITEM1.setMarginLeft( 20 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( XSPRODUCTDESCRIPTION );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW2 );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setColumnSpan( 2 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( XSPRODUCTDETAIL );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW3 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setColumnSpan( 2 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( XSPRODUCTPRICE );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW5 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "BOTTOMRIGHT" );
         LAYOUTITEM6.setColumn( COLUMN3 );
         LAYOUTITEM6.setFlow( "RIGHT" );
         LAYOUTITEM6.setManage( ADDTOCART );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW5 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.setMarginRight( 5 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setColumn( COLUMN2 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( LSTOCKSTATUS );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW4 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.initialize();

         // ----------------------------
         // -- Initialize #POPUPITEM1 --
         // ----------------------------
         POPUPITEM1.setManage( POPUP );
         POPUPITEM1.setParent( TABLELAYOUT1 );
         POPUPITEM1.setRow( ROW6 );
         POPUPITEM1.setSizing( "NONE" );
         POPUPITEM1.setColumn( COLUMN3 );
         POPUPITEM1.setAlignment( "TOPRIGHT" );
         POPUPITEM1.setMarginRight( 5 );
         POPUPITEM1.initialize();

         // ------------------------------
         // -- Initialize #PRODUCTIMAGE --
         // ------------------------------
         PRODUCTIMAGE.setDisplayPosition( 1 );
         PRODUCTIMAGE.setLeft( 20 );
         PRODUCTIMAGE.setParent( this );
         PRODUCTIMAGE.setTabPosition( 1 );
         PRODUCTIMAGE.setTabStop( false );
         PRODUCTIMAGE.setTop( 20 );
         PRODUCTIMAGE.setWidth( 210 );
         PRODUCTIMAGE.setHeight( 119 );
         PRODUCTIMAGE.setImageSizing( "BESTFIT" );
         PRODUCTIMAGE.initialize();

         // --------------------------------------
         // -- Initialize #XSPRODUCTDESCRIPTION --
         // --------------------------------------
         XSPRODUCTDESCRIPTION.setDisplayPosition( 2 );
         XSPRODUCTDESCRIPTION.setLeft( 250 );
         XSPRODUCTDESCRIPTION.setParent( this );
         XSPRODUCTDESCRIPTION.setTabPosition( 2 );
         XSPRODUCTDESCRIPTION.setTop( 12 );
         XSPRODUCTDESCRIPTION.setLabelPosition( "NONE" );
         XSPRODUCTDESCRIPTION.setMarginLeft( 0 );
         XSPRODUCTDESCRIPTION.setWidth( 415 );
         XSPRODUCTDESCRIPTION.setReadOnly( true );
         XSPRODUCTDESCRIPTION.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTDESCRIPTION.applyDefault();
         XSPRODUCTDESCRIPTION.initialize();

         // ---------------------------------
         // -- Initialize #XSPRODUCTDETAIL --
         // ---------------------------------
         XSPRODUCTDETAIL.setComponentVersion( 1 );
         XSPRODUCTDETAIL.setDisplayPosition( 3 );
         XSPRODUCTDETAIL.setHeight( 21 );
         XSPRODUCTDETAIL.setLeft( 250 );
         XSPRODUCTDETAIL.setParent( this );
         XSPRODUCTDETAIL.setTabPosition( 3 );
         XSPRODUCTDETAIL.setTop( 46 );
         XSPRODUCTDETAIL.setUsePicklist( false );
         XSPRODUCTDETAIL.setWidth( 415 );
         XSPRODUCTDETAIL.setLabelPosition( "NONE" );
         XSPRODUCTDETAIL.setMarginLeft( 0 );
         XSPRODUCTDETAIL.setReadOnly( true );
         XSPRODUCTDETAIL.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPRODUCTDETAIL.applyDefault();
         XSPRODUCTDETAIL.initialize();

         // ------------------------------
         // -- Initialize #LSTOCKSTATUS --
         // ------------------------------
         LSTOCKSTATUS.setCaption( "Stock Status" );
         LSTOCKSTATUS.setDisplayPosition( 4 );
         LSTOCKSTATUS.setHeight( 25 );
         LSTOCKSTATUS.setLeft( 250 );
         LSTOCKSTATUS.setParent( this );
         LSTOCKSTATUS.setTabPosition( 4 );
         LSTOCKSTATUS.setTabStop( false );
         LSTOCKSTATUS.setTop( 80 );
         LSTOCKSTATUS.setVerticalAlignment( "CENTER" );
         LSTOCKSTATUS.setWidth( 249 );
         LSTOCKSTATUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LSTOCKSTATUS.initialize();

         // --------------------------------
         // -- Initialize #XSPRODUCTPRICE --
         // --------------------------------
         XSPRODUCTPRICE.setDisplayPosition( 5 );
         XSPRODUCTPRICE.setLeft( 250 );
         XSPRODUCTPRICE.setParent( this );
         XSPRODUCTPRICE.setTabPosition( 5 );
         XSPRODUCTPRICE.setTop( 114 );
         XSPRODUCTPRICE.setWidth( 249 );
         XSPRODUCTPRICE.setMarginLeft( 10 );
         XSPRODUCTPRICE.setCaption( "$" );
         XSPRODUCTPRICE.setLabelHorAlignment( "RIGHT" );
         XSPRODUCTPRICE.setLabelType( "CAPTION" );
         XSPRODUCTPRICE.setEditStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         XSPRODUCTPRICE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPRODUCTPRICE.setReadOnly( true );
         XSPRODUCTPRICE.applyDefault();
         XSPRODUCTPRICE.initialize();

         // -----------------------------
         // -- Initialize #XSPRODUCTID --
         // -----------------------------
         XSPRODUCTID.setDisplayPosition( 8 );
         XSPRODUCTID.setLeft( 249 );
         XSPRODUCTID.setParent( this );
         XSPRODUCTID.setTabPosition( 8 );
         XSPRODUCTID.setTop( 161 );
         XSPRODUCTID.setVisible( false );
         XSPRODUCTID.applyDefault();
         XSPRODUCTID.initialize();

         // ---------------------------
         // -- Initialize #ADDTOCART --
         // ---------------------------
         ADDTOCART.setCaption( "Add to Cart" );
         ADDTOCART.setDisplayPosition( 6 );
         ADDTOCART.setLeft( 540 );
         ADDTOCART.setParent( this );
         ADDTOCART.setTabPosition( 6 );
         ADDTOCART.setTop( 123 );
         ADDTOCART.setWidth( 120 );
         ADDTOCART.initialize();

         // -----------------------
         // -- Initialize #POPUP --
         // -----------------------
         POPUP.setParent( this );
         POPUP.setTop( 148 );
         POPUP.setLeft( 307 );
         POPUP.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #ADDTOCART --
         // ---------------------------------------
         ADDTOCART.addEventHandler( "CLICK", this, evtRoutine1 );

         // -----------------------------------
         // -- Add Event Handlers for #POPUP --
         // -----------------------------------
         POPUP.addEventHandler( "CONTINUE", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 160 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 665 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2BOTTOM" ) );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2BOTTOM" ) );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "XSPRDID": XSPRODUCTID, "XSPRDCTID": fld.XSPRDCTID, "XSPRDDSC": XSPRODUCTDESCRIPTION, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDPRC": XSPRODUCTPRICE, "XSPRDDTL": XSPRODUCTDETAIL } );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthONADD - OnAdd
   //
   COM_OWNER.mthONADD = function( parm_TREEITEM )
   {
      var fld = this.FLD.XSPRDIT1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "OnAdd", 42 );

      //
      // DEFINE_MAP Class(#PRIM_TREE.TreeItem) Name(TreeItem) For(*INPUT) Pass(*BY_REFERENCE)
      //
      var TREEITEM = rtn.createDynamicParameter( "TREEITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TREEITEM = parm_TREEITEM;

      //
      // MTHROUTINE Name(OnAdd) Options(*Redefine)
      //
      rtn.Line( 42 );
      {

         //
         // #ProductImage.filename := #XSProductImageLink
         //
         rtn.Line( 44 );
         ref.PRODUCTIMAGE.setFileName( fld.XSPRDIMG.get() );

         //
         // CASE (#XSProductStockStatus)
         //
         rtn.Line( 46 );
         {
            var value1 = fld.XSPRDSTS.get();

            //
            // WHEN ('= INSTOCK')
            //
            if ( rtn.Line( 48 ), Lansa.String.eq( value1, "INSTOCK" ) )
            {

               //
               // #LStockStatus := 'In Stock'
               //
               rtn.Line( 50 );
               ref.LSTOCKSTATUS.set( "In Stock" );
            }

            //
            // WHEN ('= BACKORDER')
            //
            else if ( rtn.Line( 52 ), Lansa.String.eq( value1, "BACKORDER" ) )
            {

               //
               // #LStockStatus := 'On Order'
               //
               rtn.Line( 54 );
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
               rtn.Line( 58 );
               ref.LSTOCKSTATUS.set( "No longer available" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 60 );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 62 );
      rtn.end();
   };

   //
   // evtRoutine1 - #AddtoCart.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddtoCart.Click", 64 );

      //
      // EVTROUTINE Handling(#AddtoCart.Click)
      //
      rtn.Line( 64 );
      {

         //
         // #Popup.AddItemtoCart( #XSProductID )
         //
         rtn.Line( 66 );
         ref.POPUP.mthADDITEMTOCART( ref.XSPRODUCTID.get() );

         //
         // #Popup.ShowPopup
         //
         rtn.Line( 68 );
         ref.POPUP.mthSHOWPOPUP( undefined, undefined, undefined, undefined, undefined );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Popup.continue
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Popup.continue", 72 );

      //
      // EVTROUTINE Handling(#Popup.continue)
      //
      rtn.Line( 72 );
      {

         //
         // #Popup.ClosePopup
         //
         rtn.Line( 74 );
         ref.POPUP.mthCLOSEPOPUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // -----------------------------
   // -- XSPRDDSC Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDDSC.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDDSC );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDDSC.DataClass, an: "PRIM_FLD", fn: "XSPRDDSC" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPRDDSC.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPRDDSC.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDDSC.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPRDDSC", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSPRDDTL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDDTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDDTL );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDDTL.DataClass, an: "PRIM_FLD", fn: "XSPRDDTL" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.XSPRDDTL.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPRDDTL.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDDTL.VISUAL, an: "PRIM_EVEF", fn: "XSPRDDTL", cn: "Visual" } );
   }

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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSSHPSM1", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_IMAG", "PRIM_EVEF", "PRIM_LABL", "PRIM_PHBN" ]
});

//# sourceURL=xsprdit1.js
