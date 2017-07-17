// ------------------------------
// -- Reusable Part: XSFTRDPRD --
// ------------------------------
LANSA.addComponent(
{
   id: "XSFTRDPRD", 
   nm: "XSFeaturedProducts", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Featured Products", 
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
      XSPRDLNID:
      {
         nm: "XSPRDLNID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Categor",
         h1: "Product",
         h2: "Category",
         h3: "ID",
         de: "Product Line ID",
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
      XSPRDMDL:
      {
         nm: "XSPRDMDL",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Model",
         h1: "Product",
         h2: "Model",
         h3: " ",
         de: "Product Model",
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
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

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
         var fld = this.addFields( "XSFTRDPRD", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(60) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label1Item1) Manage(#NewProducts) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column1) Alignment(TopLeft) Marginleft(3) Margintop(3) Marginright(3) Marginbottom(3) Flow(Down)
         //
         var LABEL1ITEM1 = this.createReference( "LABEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CarouselItem1) Alignment(TopLeft) Column(#Column1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down)
         //
         var CAROUSELITEM1 = this.createReference( "CAROUSELITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CarouselItem2) Alignment(TopLeft) Column(#Column1) Parent(#TableLayout1) Row(#Row3)
         //
         var CAROUSELITEM2 = this.createReference( "CAROUSELITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Alignment(TopLeft) Sizing(FitToWidth) Flow(Down) Marginbottom(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CarouselItem3) Column(#Column1) Manage(#Carousel) Parent(#TableLayout1) Row(#Row3)
         //
         var CAROUSELITEM3 = this.createReference( "CAROUSELITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#NewProductsItem1) Alignment(CenterLeft) Column(#Column2) Manage(#NewProducts) Parent(#TableLayout2) Row(#Row2) Sizing(FitToWidth) Marginleft(20)
         //
         var NEWPRODUCTSITEM1 = this.createReference( "NEWPRODUCTSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(0) Width(1170) Style(#XSTheme01<PanelBorders1>) Layoutmanager(#TableLayout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#NewProducts) Caption('FEATURED PRODUCTS') Displayposition(1) Ellipses(Word) Height(25) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(12) Verticalalignment(Center) Width(1148) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(20)
         //
         var NEWPRODUCTS = this.createReference( "NEWPRODUCTS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_CARO<#XSProductCarouselItem>) Name(#Carousel) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(1) Top(60) Width(1170) Height(365) Carouselstyle(Page)
         //
         var CAROUSEL = this.createReference( "CAROUSEL", "PRIM_CARO" );

         //
         // DEFINE_COM Class(#prim_acol<#XSProductData>) Name(#Products)
         //
         var PRODUCTS = this.createReference( "PRODUCTS", "PRIM_ACOL" );

         //
         // DEFINE_COM Class(#XSServer.LoadFeatureProducts) Name(#LoadFeatureProducts)
         //
         var LOADFEATUREPRODUCTS = this.createDataRequest( "LOADFEATUREPRODUCTS", "XSSERVER", "LOADFEATUREPRODUCTS" );

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
         ROW1.setHeight( 60 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 2 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.initialize();

         // -----------------------------
         // -- Initialize #LABEL1ITEM1 --
         // -----------------------------
         LABEL1ITEM1.setManage( NEWPRODUCTS );
         LABEL1ITEM1.setParent( TABLELAYOUT1 );
         LABEL1ITEM1.setRow( ROW1 );
         LABEL1ITEM1.setSizing( "FITTOWIDTH" );
         LABEL1ITEM1.setColumn( COLUMN1 );
         LABEL1ITEM1.setAlignment( "TOPLEFT" );
         LABEL1ITEM1.setMarginLeft( 3 );
         LABEL1ITEM1.setMarginTop( 3 );
         LABEL1ITEM1.setMarginRight( 3 );
         LABEL1ITEM1.setMarginBottom( 3 );
         LABEL1ITEM1.setFlow( "DOWN" );
         LABEL1ITEM1.initialize();

         // -------------------------------
         // -- Initialize #CAROUSELITEM1 --
         // -------------------------------
         CAROUSELITEM1.setAlignment( "TOPLEFT" );
         CAROUSELITEM1.setColumn( COLUMN1 );
         CAROUSELITEM1.setParent( TABLELAYOUT1 );
         CAROUSELITEM1.setRow( ROW1 );
         CAROUSELITEM1.setSizing( "FITTOWIDTH" );
         CAROUSELITEM1.setFlow( "DOWN" );
         CAROUSELITEM1.initialize();

         // -------------------------------
         // -- Initialize #CAROUSELITEM2 --
         // -------------------------------
         CAROUSELITEM2.setAlignment( "TOPLEFT" );
         CAROUSELITEM2.setColumn( COLUMN1 );
         CAROUSELITEM2.setParent( TABLELAYOUT1 );
         CAROUSELITEM2.setRow( ROW3 );
         CAROUSELITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( PANEL1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setMarginBottom( 10 );
         LAYOUTITEM1.initialize();

         // -------------------------------
         // -- Initialize #CAROUSELITEM3 --
         // -------------------------------
         CAROUSELITEM3.setColumn( COLUMN1 );
         CAROUSELITEM3.setManage( CAROUSEL );
         CAROUSELITEM3.setParent( TABLELAYOUT1 );
         CAROUSELITEM3.setRow( ROW3 );
         CAROUSELITEM3.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 1 );
         COLUMN2.setParent( TABLELAYOUT2 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( TABLELAYOUT2 );
         ROW2.initialize();

         // ----------------------------------
         // -- Initialize #NEWPRODUCTSITEM1 --
         // ----------------------------------
         NEWPRODUCTSITEM1.setAlignment( "CENTERLEFT" );
         NEWPRODUCTSITEM1.setColumn( COLUMN2 );
         NEWPRODUCTSITEM1.setManage( NEWPRODUCTS );
         NEWPRODUCTSITEM1.setParent( TABLELAYOUT2 );
         NEWPRODUCTSITEM1.setRow( ROW2 );
         NEWPRODUCTSITEM1.setSizing( "FITTOWIDTH" );
         NEWPRODUCTSITEM1.setMarginLeft( 20 );
         NEWPRODUCTSITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 2 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 0 );
         PANEL1.setWidth( 1170 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.initialize();

         // -----------------------------
         // -- Initialize #NEWPRODUCTS --
         // -----------------------------
         NEWPRODUCTS.setCaption( "FEATURED PRODUCTS" );
         NEWPRODUCTS.setDisplayPosition( 1 );
         NEWPRODUCTS.setEllipses( "WORD" );
         NEWPRODUCTS.setHeight( 25 );
         NEWPRODUCTS.setParent( PANEL1 );
         NEWPRODUCTS.setTabPosition( 1 );
         NEWPRODUCTS.setTabStop( false );
         NEWPRODUCTS.setTop( 12 );
         NEWPRODUCTS.setVerticalAlignment( "CENTER" );
         NEWPRODUCTS.setWidth( 1148 );
         NEWPRODUCTS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         NEWPRODUCTS.setLeft( 20 );
         NEWPRODUCTS.initialize();

         // --------------------------
         // -- Initialize #CAROUSEL --
         // --------------------------
         CAROUSEL.setDisplayPosition( 2 );
         CAROUSEL.setLeft( 0 );
         CAROUSEL.setParent( this );
         CAROUSEL.setTabPosition( 1 );
         CAROUSEL.setTop( 60 );
         CAROUSEL.setWidth( 1170 );
         CAROUSEL.setHeight( 365 );
         CAROUSEL.setCarouselStyle( "PAGE" );
         CAROUSEL.initialize();

         // --------------------------
         // -- Initialize #PRODUCTS --
         // --------------------------
         PRODUCTS.setCollects( "XSPRDDTA" );
         PRODUCTS.initialize();

         // -------------------------------------
         // -- Initialize #LOADFEATUREPRODUCTS --
         // -------------------------------------
         LOADFEATUREPRODUCTS.initialize();

         // -------------------------------------------------
         // -- Add Event Handlers for #LOADFEATUREPRODUCTS --
         // -------------------------------------------------
         LOADFEATUREPRODUCTS.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ----------------------------------------------
         // -- Define the UDC information for #CAROUSEL --
         // ----------------------------------------------
         CAROUSEL.addDesign( "XSPRDCIT" );
         CAROUSEL.addListFields( {  } );

         // ----------------------------------------------
         // -- Define the UDC information for #PRODUCTS --
         // ----------------------------------------------
         PRODUCTS.addListFields( { "XSPRDID": fld.XSPRDID, "XSPRDLNID": fld.XSPRDLNID, "XSPRDCTID": fld.XSPRDCTID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDMDL": fld.XSPRDMDL, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDPRC": fld.XSPRDPRC, "XSPRDDTL": fld.XSPRDDTL } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 425 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1170 );
         this.setLayoutManager( TABLELAYOUT1 );

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
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 29 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 29 );
      {

         //
         // #LoadFeatureProducts.ExecuteAsync( #Products )
         //
         rtn.Line( 31 );
         ref.LOADFEATUREPRODUCTS.mthEXECUTEASYNC( {  }, { LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 33 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadFeatureProducts.Completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadFeatureProducts.Completed", 35 );

      //
      // EVTROUTINE Handling(#LoadFeatureProducts.Completed)
      //
      rtn.Line( 35 );
      {

         //
         // FOR Each(#Product) In(#Products)
         //
         rtn.Line( 37 );
         {
            var i1 = ref.PRODUCTS.createIterator();

            while( i1.step() )
            {
               var PRODUCT = rtn.setref( "PRODUCT", i1.item() );

               //
               // ADD_ENTRY To_List(#Carousel)
               //
               rtn.Line( 39 );
               ref.CAROUSEL.addEntry();

               //
               // #Carousel.CurrentItem.RelatedReference <= #Product
               //
               rtn.Line( 41 );
               ref.CAROUSEL.getCurrentItem().setRelatedReference( PRODUCT );

            //
            // ENDFOR 
            //
            rtn.Line( 43 );
            }

            i1.end();
            rtn.deleteReference( "PRODUCT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 45 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_CARO", "PRIM_ACOL", "PRIM_WEB.DataRequest" ],
   dc: [ "XSPRDCIT" ]
});

//# sourceURL=xsftrdprd.js
