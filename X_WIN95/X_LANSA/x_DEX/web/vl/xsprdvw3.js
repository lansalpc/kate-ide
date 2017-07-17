// -----------------------------
// -- Reusable Part: XSPRDVW3 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSPRDVW3", 
   nm: "XSProductsView3", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Products View 3", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- IO STATUS --
   // ---------------
   var lastIoStatus = "";

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
      XSSRCHVL:
      {
         nm: "XSSRCHVL",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: "Text",
         h1: "Text",
         h2: " ",
         h3: " ",
         de: "Search Value",
         dv: "",
         ia: [ "LC" ]
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
      },
      XSMORE:
      {
         nm: "XSMORE",
         ft: "B",
         ln: 1,
         dc: 0,
         lb: "More entries",
         h1: "More",
         h2: "entries",
         h3: " ",
         de: "More entries",
         dv: false
      },
      IOdSTS:
      {
         nm: "IO$STS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: "I/O status ....",
         h1: "I/O",
         h2: "Status",
         h3: " ",
         de: "Data base I/O operation status code",
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
         LoadProducts: 
         {
            ps: 
            {
               "ID":
               {
                  pt: "i"
               },

               "LineID":
               {
                  pt: "i"
               },

               "CategoryID":
               {
                  pt: "i"
               },

               "Search":
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
         var fld = this.addFields( "XSPRDVW3", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(35) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1) Height(35) Units(Pixels)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LProductInformationItem1) Manage(#LProductInformation) Parent(#TableLayout1) Row(#Row1) Column(#Column1) Alignment(CenterLeft)
         //
         var LPRODUCTINFORMATIONITEM1 = this.createReference( "LPRODUCTINFORMATIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#TileItem1) Manage(#Tile) Parent(#TableLayout1) Row(#Row2) Column(#Column1) Margintop(10)
         //
         var TILEITEM1 = this.createReference( "TILEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LPreviousItem1) Manage(#LPrevious) Parent(#TableLayout1) Row(#Row3) Sizing(None) Column(#Column1) Alignment(CenterRight) Flow(Left) Marginright(20)
         //
         var LPREVIOUSITEM1 = this.createReference( "LPREVIOUSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LNextItem1) Alignment(CenterRight) Column(#Column1) Manage(#LNext) Parent(#TableLayout1) Row(#Row3) Sizing(None) Flow(Left)
         //
         var LNEXTITEM1 = this.createReference( "LNEXTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LProductInformation) Caption('Product Information') Displayposition(2) Ellipses(Word) Height(35) Left(0) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(0) Verticalalignment(Center) Marginleft(20) Width(800) Themedrawstyle('PanelHeader1')
         //
         var LPRODUCTINFORMATION = this.createReference( "LPRODUCTINFORMATION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TILE<#XSProductTile2>) Name(#Tile) Displayposition(4) Left(0) Parent(#COM_OWNER) Tabposition(3) Top(45) Width(800) Height(1110)
         //
         var TILE = this.createReference( "TILE", "PRIM_TILE" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LPrevious) Caption('< Previous') Displayposition(3) Ellipses(Word) Height(25) Left(560) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(1160) Verticalalignment(Center) Width(110) Themedrawstyle('ButtonLook2') Alignment(Center)
         //
         var LPREVIOUS = this.createReference( "LPREVIOUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LNext) Caption('Next >') Displayposition(1) Ellipses(Word) Height(25) Left(690) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(1160) Verticalalignment(Center) Width(110) Themedrawstyle('ButtonLook2') Alignment(Center)
         //
         var LNEXT = this.createReference( "LNEXT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSServer.LoadProductsNext) Name(#LoadNext)
         //
         var LOADNEXT = this.createDataRequest( "LOADNEXT", "XSSERVER", "LOADPRODUCTSNEXT" );

         //
         // DEFINE_COM Class(#XSServer.LoadProductsPrevious) Name(#LoadPrevious)
         //
         var LOADPREVIOUS = this.createDataRequest( "LOADPREVIOUS", "XSSERVER", "LOADPRODUCTSPREVIOUS" );

         //
         // DEFINE_COM Class(#prim_acol<#XSProductData>) Name(#Products)
         //
         var PRODUCTS = this.createReference( "PRODUCTS", "PRIM_ACOL" );

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
         COLUMN1.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setHeight( 35 );
         ROW1.setUnits( "PIXELS" );
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
         ROW3.setHeight( 35 );
         ROW3.setUnits( "PIXELS" );
         ROW3.initialize();

         // ------------------------------------------
         // -- Initialize #LPRODUCTINFORMATIONITEM1 --
         // ------------------------------------------
         LPRODUCTINFORMATIONITEM1.setManage( LPRODUCTINFORMATION );
         LPRODUCTINFORMATIONITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTINFORMATIONITEM1.setRow( ROW1 );
         LPRODUCTINFORMATIONITEM1.setColumn( COLUMN1 );
         LPRODUCTINFORMATIONITEM1.setAlignment( "CENTERLEFT" );
         LPRODUCTINFORMATIONITEM1.initialize();

         // ---------------------------
         // -- Initialize #TILEITEM1 --
         // ---------------------------
         TILEITEM1.setManage( TILE );
         TILEITEM1.setParent( TABLELAYOUT1 );
         TILEITEM1.setRow( ROW2 );
         TILEITEM1.setColumn( COLUMN1 );
         TILEITEM1.setMarginTop( 10 );
         TILEITEM1.initialize();

         // --------------------------------
         // -- Initialize #LPREVIOUSITEM1 --
         // --------------------------------
         LPREVIOUSITEM1.setManage( LPREVIOUS );
         LPREVIOUSITEM1.setParent( TABLELAYOUT1 );
         LPREVIOUSITEM1.setRow( ROW3 );
         LPREVIOUSITEM1.setSizing( "NONE" );
         LPREVIOUSITEM1.setColumn( COLUMN1 );
         LPREVIOUSITEM1.setAlignment( "CENTERRIGHT" );
         LPREVIOUSITEM1.setFlow( "LEFT" );
         LPREVIOUSITEM1.setMarginRight( 20 );
         LPREVIOUSITEM1.initialize();

         // ----------------------------
         // -- Initialize #LNEXTITEM1 --
         // ----------------------------
         LNEXTITEM1.setAlignment( "CENTERRIGHT" );
         LNEXTITEM1.setColumn( COLUMN1 );
         LNEXTITEM1.setManage( LNEXT );
         LNEXTITEM1.setParent( TABLELAYOUT1 );
         LNEXTITEM1.setRow( ROW3 );
         LNEXTITEM1.setSizing( "NONE" );
         LNEXTITEM1.setFlow( "LEFT" );
         LNEXTITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTINFORMATION --
         // -------------------------------------
         LPRODUCTINFORMATION.setCaption( "Product Information" );
         LPRODUCTINFORMATION.setDisplayPosition( 2 );
         LPRODUCTINFORMATION.setEllipses( "WORD" );
         LPRODUCTINFORMATION.setHeight( 35 );
         LPRODUCTINFORMATION.setLeft( 0 );
         LPRODUCTINFORMATION.setParent( this );
         LPRODUCTINFORMATION.setTabPosition( 4 );
         LPRODUCTINFORMATION.setTabStop( false );
         LPRODUCTINFORMATION.setTop( 0 );
         LPRODUCTINFORMATION.setVerticalAlignment( "CENTER" );
         LPRODUCTINFORMATION.setMarginLeft( 20 );
         LPRODUCTINFORMATION.setWidth( 800 );
         LPRODUCTINFORMATION.setThemeDrawStyle( "PanelHeader1" );
         LPRODUCTINFORMATION.initialize();

         // ----------------------
         // -- Initialize #TILE --
         // ----------------------
         TILE.setDisplayPosition( 4 );
         TILE.setLeft( 0 );
         TILE.setParent( this );
         TILE.setTabPosition( 3 );
         TILE.setTop( 45 );
         TILE.setWidth( 800 );
         TILE.setHeight( 1110 );
         TILE.initialize();

         // ---------------------------
         // -- Initialize #LPREVIOUS --
         // ---------------------------
         LPREVIOUS.setCaption( "< Previous" );
         LPREVIOUS.setDisplayPosition( 3 );
         LPREVIOUS.setEllipses( "WORD" );
         LPREVIOUS.setHeight( 25 );
         LPREVIOUS.setLeft( 560 );
         LPREVIOUS.setParent( this );
         LPREVIOUS.setTabPosition( 1 );
         LPREVIOUS.setTabStop( false );
         LPREVIOUS.setTop( 1160 );
         LPREVIOUS.setVerticalAlignment( "CENTER" );
         LPREVIOUS.setWidth( 110 );
         LPREVIOUS.setThemeDrawStyle( "ButtonLook2" );
         LPREVIOUS.setAlignment( "CENTER" );
         LPREVIOUS.initialize();

         // -----------------------
         // -- Initialize #LNEXT --
         // -----------------------
         LNEXT.setCaption( "Next >" );
         LNEXT.setDisplayPosition( 1 );
         LNEXT.setEllipses( "WORD" );
         LNEXT.setHeight( 25 );
         LNEXT.setLeft( 690 );
         LNEXT.setParent( this );
         LNEXT.setTabPosition( 2 );
         LNEXT.setTabStop( false );
         LNEXT.setTop( 1160 );
         LNEXT.setVerticalAlignment( "CENTER" );
         LNEXT.setWidth( 110 );
         LNEXT.setThemeDrawStyle( "ButtonLook2" );
         LNEXT.setAlignment( "CENTER" );
         LNEXT.initialize();

         // --------------------------
         // -- Initialize #LOADNEXT --
         // --------------------------
         LOADNEXT.initialize();

         // ------------------------------
         // -- Initialize #LOADPREVIOUS --
         // ------------------------------
         LOADPREVIOUS.initialize();

         // --------------------------
         // -- Initialize #PRODUCTS --
         // --------------------------
         PRODUCTS.setCollects( "XSPRDDTA" );
         PRODUCTS.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #MYSESSION --
         // ---------------------------------------
         MYSESSION.addEventHandler( "RELOADPRODUCTS", this, evtRoutine2 );

         // ---------------------------------------
         // -- Add Event Handlers for #LPREVIOUS --
         // ---------------------------------------
         LPREVIOUS.addEventHandler( "CLICK", this, evtRoutine5 );

         // -----------------------------------
         // -- Add Event Handlers for #LNEXT --
         // -----------------------------------
         LNEXT.addEventHandler( "CLICK", this, evtRoutine6 );

         // --------------------------------------
         // -- Add Event Handlers for #LOADNEXT --
         // --------------------------------------
         LOADNEXT.addEventHandler( "COMPLETED", this, evtRoutine4 );

         // ------------------------------------------
         // -- Add Event Handlers for #LOADPREVIOUS --
         // ------------------------------------------
         LOADPREVIOUS.addEventHandler( "COMPLETED", this, evtRoutine3 );

         // ------------------------------------------
         // -- Define the UDC information for #TILE --
         // ------------------------------------------
         TILE.addDesign( "XSPRDTIL2" );
         TILE.addListFields( {  } );

         // ----------------------------------------------
         // -- Define the UDC information for #PRODUCTS --
         // ----------------------------------------------
         PRODUCTS.addListFields( { "XSPRDID": fld.XSPRDID, "XSPRDLNID": fld.XSPRDLNID, "XSPRDCTID": fld.XSPRDCTID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDMDL": fld.XSPRDMDL, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDPRC": fld.XSPRDPRC, "XSPRDDTL": fld.XSPRDDTL } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 1190 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 800 );
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
   // evtRoutine1 - #com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 32 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 32 );
      {

         //
         // #com_owner.LoadProducts( ' ' #MySession.pProductLine #MySession.pProductCategory #MySession.pProductSearch )
         //
         rtn.Line( 34 );
         COM_OWNER.mthLOADPRODUCTS.call( this, " ", ref.MYSESSION.ref.getPPRODUCTLINE(), ref.MYSESSION.ref.getPPRODUCTCATEGORY(), ref.MYSESSION.ref.getPPRODUCTSEARCH() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 36 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MySession.ReloadProducts
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.ReloadProducts", 38 );

      //
      // EVTROUTINE Handling(#MySession.ReloadProducts)
      //
      rtn.Line( 38 );
      {

         //
         // #com_owner.LoadProducts( ' ' #MySession.pProductLine #MySession.pProductCategory #MySession.pProductSearch )
         //
         rtn.Line( 40 );
         COM_OWNER.mthLOADPRODUCTS.call( this, " ", ref.MYSESSION.ref.getPPRODUCTLINE(), ref.MYSESSION.ref.getPPRODUCTCATEGORY(), ref.MYSESSION.ref.getPPRODUCTSEARCH() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // evtRoutine3 - #LoadPrevious.Completed
   //
   function evtRoutine3( sender, parms )
   {
      var fld = this.FLD.XSPRDVW3, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadPrevious.Completed", 44 );

      //
      // EVTROUTINE Handling(#LoadPrevious.Completed)
      //
      rtn.Line( 44 );
      {

         //
         // IF (*Not #XSMoreEntries)
         //
         rtn.Line( 46 );
         if ( Lansa.not( fld.XSMORE.get() ) )
         {

            //
            // #LPrevious.visible := false
            //
            rtn.Line( 48 );
            ref.LPREVIOUS.setVisible( false );

         //
         // ENDIF 
         //
         }

         //
         // CLR_LIST Named(#Tile)
         //
         rtn.Line( 52 );
         ref.TILE.clearList();

         //
         // FOR Each(#Product) In(#Products)
         //
         rtn.Line( 54 );
         {
            var i1 = ref.PRODUCTS.createIterator();

            while( i1.step() )
            {
               var PRODUCT = rtn.setref( "PRODUCT", i1.item() );

               //
               // ADD_ENTRY To_List(#Tile)
               //
               rtn.Line( 56 );
               ref.TILE.addEntry();

               //
               // #Tile.CurrentItem.RelatedReference <= #Product
               //
               rtn.Line( 58 );
               ref.TILE.getCurrentItem().setRelatedReference( PRODUCT );

            //
            // ENDFOR 
            //
            rtn.Line( 60 );
            }

            i1.end();
            rtn.deleteReference( "PRODUCT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 62 );
      rtn.end();
   };

   //
   // evtRoutine4 - #LoadNext.Completed
   //
   function evtRoutine4( sender, parms )
   {
      var fld = this.FLD.XSPRDVW3, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadNext.Completed", 64 );

      //
      // EVTROUTINE Handling(#LoadNext.Completed)
      //
      rtn.Line( 64 );
      {

         //
         // IF (*Not #XSMoreEntries)
         //
         rtn.Line( 66 );
         if ( Lansa.not( fld.XSMORE.get() ) )
         {

            //
            // #LNext.visible := false
            //
            rtn.Line( 68 );
            ref.LNEXT.setVisible( false );

         //
         // ENDIF 
         //
         }

         //
         // CLR_LIST Named(#Tile)
         //
         rtn.Line( 72 );
         ref.TILE.clearList();

         //
         // FOR Each(#Product) In(#Products)
         //
         rtn.Line( 74 );
         {
            var i1 = ref.PRODUCTS.createIterator();

            while( i1.step() )
            {
               var PRODUCT = rtn.setref( "PRODUCT", i1.item() );

               //
               // ADD_ENTRY To_List(#Tile)
               //
               rtn.Line( 76 );
               ref.TILE.addEntry();

               //
               // #Tile.CurrentItem.RelatedReference <= #Product
               //
               rtn.Line( 78 );
               ref.TILE.getCurrentItem().setRelatedReference( PRODUCT );

            //
            // ENDFOR 
            //
            rtn.Line( 80 );
            }

            i1.end();
            rtn.deleteReference( "PRODUCT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 82 );
      rtn.end();
   };

   //
   // evtRoutine5 - #LPrevious.Click
   //
   function evtRoutine5( sender, parms )
   {
      var fld = this.FLD.XSPRDVW3, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LPrevious.Click", 84 );

      //
      // EVTROUTINE Handling(#LPrevious.Click)
      //
      rtn.Line( 84 );
      {

         //
         // #LNext.visible #LPrevious.visible := true
         //
         rtn.Line( 88 );
         ref.LNEXT.setVisible( true );
         ref.LPREVIOUS.setVisible( true );

         //
         // GET_ENTRY Number(1) From_List(#Tile)
         //
         rtn.Line( 90 );
         fld.IOdSTS.set( lastIoStatus = ref.TILE.getEntry( 1 ) );

         //
         // #LoadPrevious.ExecuteAsync( #XSProductID #MySession.pProductLine #XSProductCategoryID #MySession.pCategorySelected #Products #XSMoreEntries )
         //
         rtn.Line( 93 );
         ref.LOADPREVIOUS.mthEXECUTEASYNC( { FLD: { "XSPRDID": fld.XSPRDID.get(), "XSPRDLNID": ref.MYSESSION.ref.getPPRODUCTLINE(), "XSPRDCTID": fld.XSPRDCTID.get(), "XSCATSEL": ref.MYSESSION.ref.getPCATEGORYSELECTED() } }, { FLD: { "XSMORE": fld.XSMORE }, LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      rtn.end();
   };

   //
   // evtRoutine6 - #LNext.Click
   //
   function evtRoutine6( sender, parms )
   {
      var fld = this.FLD.XSPRDVW3, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LNext.Click", 97 );

      //
      // DEFINE_COM Class(#XSProductData) Name(#gProduct) Reference(*Dynamic)
      //
      var GPRODUCT = rtn.createDynamicReference( "GPRODUCT" );

      //
      // EVTROUTINE Handling(#LNext.Click)
      //
      rtn.Line( 97 );
      {

         //
         // #LNext.visible #LPrevious.visible := true
         //
         rtn.Line( 102 );
         ref.LNEXT.setVisible( true );
         ref.LPREVIOUS.setVisible( true );

         //
         // GET_ENTRY Number(#Tile.items.itemcount) From_List(#Tile)
         //
         rtn.Line( 104 );
         fld.IOdSTS.set( lastIoStatus = ref.TILE.getEntry( ref.TILE.getItems().getItemCount() ) );

         //
         // #XSProductID := (#Tile.CurrentItem.RelatedReference *As #XSProductData).ID
         //
         rtn.Line( 106 );
         fld.XSPRDID.set( Lansa.cast( ref.TILE.getCurrentItem().getRelatedReference(), "XSPRDDTA" ).getID() );

         //
         // #XSProductCategoryID := (#Tile.CurrentItem.RelatedReference *As #XSProductData).Category
         //
         rtn.Line( 107 );
         fld.XSPRDCTID.set( Lansa.cast( ref.TILE.getCurrentItem().getRelatedReference(), "XSPRDDTA" ).getCATEGORY() );

         //
         // #LoadNext.ExecuteAsync( #XSProductID #MySession.pProductLine #XSProductCategoryID #MySession.pCategorySelected #Products #XSMoreEntries )
         //
         rtn.Line( 110 );
         ref.LOADNEXT.mthEXECUTEASYNC( { FLD: { "XSPRDID": fld.XSPRDID.get(), "XSPRDLNID": ref.MYSESSION.ref.getPPRODUCTLINE(), "XSPRDCTID": fld.XSPRDCTID.get(), "XSCATSEL": ref.MYSESSION.ref.getPCATEGORYSELECTED() } }, { FLD: { "XSMORE": fld.XSMORE }, LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 112 );
      rtn.end();
   };

   //
   // mthLOADPRODUCTS - LoadProducts
   //
   COM_OWNER.mthLOADPRODUCTS = function( parm_ID, parm_LINEID, parm_CATEGORYID, parm_SEARCH )
   {
      var fld = this.FLD.XSPRDVW3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "LoadProducts", 114 );

      //
      // DEFINE_MAP For(*input) Class(#XSProductID) Name(#ID)
      //
      var ID = rtn.createFieldParameter( "ID", Fields.XSPRDID.DataClass );

      //
      // DEFINE_MAP For(*input) Class(#XSProductLineID) Name(#LineID)
      //
      var LINEID = rtn.createFieldParameter( "LINEID", Fields.XSPRDLNID.DataClass );

      //
      // DEFINE_MAP For(*input) Class(#XSProductCategoryID) Name(#CategoryID)
      //
      var CATEGORYID = rtn.createFieldParameter( "CATEGORYID", Fields.XSPRDCTID.DataClass );

      //
      // DEFINE_MAP For(*input) Class(#XSSearchValue) Name(#Search)
      //
      var SEARCH = rtn.createFieldParameter( "SEARCH", Fields.XSSRCHVL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ID.set( parm_ID );
      LINEID.set( parm_LINEID );
      CATEGORYID.set( parm_CATEGORYID );
      SEARCH.set( parm_SEARCH );

      //
      // MTHROUTINE Name(LoadProducts)
      //
      rtn.Line( 114 );
      {

         //
         // #LPrevious.visible := false
         //
         rtn.Line( 121 );
         ref.LPREVIOUS.setVisible( false );

         //
         // #LNext.visible := true
         //
         rtn.Line( 122 );
         ref.LNEXT.setVisible( true );

         //
         // #LoadNext.ExecuteAsync( #ID #LineID #CategoryID #MySession.pCategorySelected #Products #XSMoreEntries )
         //
         rtn.Line( 125 );
         ref.LOADNEXT.mthEXECUTEASYNC( { FLD: { "XSPRDID": ID.get(), "XSPRDLNID": LINEID.get(), "XSPRDCTID": CATEGORYID.get(), "XSCATSEL": ref.MYSESSION.ref.getPCATEGORYSELECTED() } }, { FLD: { "XSMORE": fld.XSMORE }, LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 127 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

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
   }

   // ------------------------------
   // -- XSPRDLNID Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDLNID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDLNID );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDLNID.DataClass, an: "PRIM_FLD", fn: "XSPRDLNID" } );
   }

   // ------------------------------
   // -- XSPRDCTID Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDCTID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDCTID );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDCTID.DataClass, an: "PRIM_FLD", fn: "XSPRDCTID" } );
   }

   // -----------------------------
   // -- XSSRCHVL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSSRCHVL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSSRCHVL );
      };

      Lansa.createFieldClass( { co: Fields.XSSRCHVL.DataClass, an: "PRIM_FLD", fn: "XSSRCHVL" } );
   }

   // ---------------------------
   // -- XSMORE Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSMORE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSMORE );
      };

      Lansa.createFieldClass( { co: Fields.XSMORE.DataClass, an: "PRIM_FLD", fn: "XSMORE" } );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.XSMORE.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#False) Caption('False') Default(True) Parent(#Picklist) Value('False')
         //
         var FALSE = this.createReference( "FALSE", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#True) Caption('True') Parent(#Picklist) Value('True')
         //
         var TRUE = this.createReference( "TRUE", "PRIM_PKIT" );

         // -----------------------
         // -- Initialize #FALSE --
         // -----------------------
         FALSE.setCaption( "False" );
         FALSE.setDefault( true );
         FALSE.setParent( this );
         FALSE.setValue( "False" );
         FALSE.initialize();

         // ----------------------
         // -- Initialize #TRUE --
         // ----------------------
         TRUE.setCaption( "True" );
         TRUE.setParent( this );
         TRUE.setValue( "True" );
         TRUE.initialize();
      };

      Lansa.createFieldClass( { co: Fields.XSMORE.pl, an: "PRIM_PKLT", fn: "XSMORE", cn: "Picklist" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TILE", "PRIM_WEB.DataRequest", "PRIM_ACOL", "PRIM_FLD", "PRIM_PKLT" ],
   dc: [ "XSPRDDTA", "XSPRDTIL2" ]
});

//# sourceURL=xsprdvw3.js
