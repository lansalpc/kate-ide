// -----------------------------
// -- Reusable Part: XSSRHVW3 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSRHVW3", 
   nm: "XSSearchView3", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Search View 3", 
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
      },
      STD_QSEL:
      {
         nm: "STD_QSEL",
         ft: "A",
         ln: 256,
         dc: 0,
         ks: "O",
         lb: "Selection Made",
         h1: "Selection Expression",
         h2: " ",
         h3: " ",
         de: "Query Selection Expression",
         dv: "",
         ia: [ "FE", "LC" ]
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
         ProcessSearch: 
         {
            ps: 
            {
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
         var fld = this.addFields( "XSSRHVW3", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LProductInformationItem1) Alignment(TopCenter) Column(#Column1) Manage(#LProductInformation) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down)
         //
         var LPRODUCTINFORMATIONITEM1 = this.createReference( "LPRODUCTINFORMATIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#TileItem1) Alignment(TopCenter) Column(#Column1) Manage(#Tile) Parent(#TableLayout1) Row(#Row1) Flow(Down) Margintop(10)
         //
         var TILEITEM1 = this.createReference( "TILEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LProductInformation) Caption('Product Information') Displayposition(1) Ellipses(Word) Height(35) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Marginleft(20) Width(1000) Themedrawstyle('PanelHeader1')
         //
         var LPRODUCTINFORMATION = this.createReference( "LPRODUCTINFORMATION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TILE<#XSProductTile2>) Name(#Tile) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(1) Top(45) Width(1000) Height(990)
         //
         var TILE = this.createReference( "TILE", "PRIM_TILE" );

         //
         // DEFINE_COM Class(#XSServer.LoadProductsSearch) Name(#LoadSearch)
         //
         var LOADSEARCH = this.createDataRequest( "LOADSEARCH", "XSSERVER", "LOADPRODUCTSSEARCH" );

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
         ROW1.initialize();

         // ------------------------------------------
         // -- Initialize #LPRODUCTINFORMATIONITEM1 --
         // ------------------------------------------
         LPRODUCTINFORMATIONITEM1.setAlignment( "TOPCENTER" );
         LPRODUCTINFORMATIONITEM1.setColumn( COLUMN1 );
         LPRODUCTINFORMATIONITEM1.setManage( LPRODUCTINFORMATION );
         LPRODUCTINFORMATIONITEM1.setParent( TABLELAYOUT1 );
         LPRODUCTINFORMATIONITEM1.setRow( ROW1 );
         LPRODUCTINFORMATIONITEM1.setSizing( "FITTOWIDTH" );
         LPRODUCTINFORMATIONITEM1.setFlow( "DOWN" );
         LPRODUCTINFORMATIONITEM1.initialize();

         // ---------------------------
         // -- Initialize #TILEITEM1 --
         // ---------------------------
         TILEITEM1.setAlignment( "TOPCENTER" );
         TILEITEM1.setColumn( COLUMN1 );
         TILEITEM1.setManage( TILE );
         TILEITEM1.setParent( TABLELAYOUT1 );
         TILEITEM1.setRow( ROW1 );
         TILEITEM1.setFlow( "DOWN" );
         TILEITEM1.setMarginTop( 10 );
         TILEITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LPRODUCTINFORMATION --
         // -------------------------------------
         LPRODUCTINFORMATION.setCaption( "Product Information" );
         LPRODUCTINFORMATION.setDisplayPosition( 1 );
         LPRODUCTINFORMATION.setEllipses( "WORD" );
         LPRODUCTINFORMATION.setHeight( 35 );
         LPRODUCTINFORMATION.setLeft( 0 );
         LPRODUCTINFORMATION.setParent( this );
         LPRODUCTINFORMATION.setTabPosition( 2 );
         LPRODUCTINFORMATION.setTabStop( false );
         LPRODUCTINFORMATION.setTop( 0 );
         LPRODUCTINFORMATION.setVerticalAlignment( "CENTER" );
         LPRODUCTINFORMATION.setMarginLeft( 20 );
         LPRODUCTINFORMATION.setWidth( 1000 );
         LPRODUCTINFORMATION.setThemeDrawStyle( "PanelHeader1" );
         LPRODUCTINFORMATION.initialize();

         // ----------------------
         // -- Initialize #TILE --
         // ----------------------
         TILE.setDisplayPosition( 2 );
         TILE.setLeft( 0 );
         TILE.setParent( this );
         TILE.setTabPosition( 1 );
         TILE.setTop( 45 );
         TILE.setWidth( 1000 );
         TILE.setHeight( 990 );
         TILE.initialize();

         // ----------------------------
         // -- Initialize #LOADSEARCH --
         // ----------------------------
         LOADSEARCH.initialize();

         // --------------------------
         // -- Initialize #PRODUCTS --
         // --------------------------
         PRODUCTS.setCollects( "XSPRDDTA" );
         PRODUCTS.initialize();

         // ----------------------------------------
         // -- Add Event Handlers for #LOADSEARCH --
         // ----------------------------------------
         LOADSEARCH.addEventHandler( "COMPLETED", this, evtRoutine2 );

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
         this.setHeight( 1000 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1000 );
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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 23 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 23 );
      {

         //
         // #com_owner.ProcessSearch( #MySession.pProductSearch )
         //
         rtn.Line( 25 );
         COM_OWNER.mthPROCESSSEARCH.call( this, ref.MYSESSION.ref.getPPRODUCTSEARCH() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 27 );
      rtn.end();
   };

   //
   // mthPROCESSSEARCH - ProcessSearch
   //
   COM_OWNER.mthPROCESSSEARCH = function( parm_SEARCH )
   {
      var fld = this.FLD.XSSRHVW3, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ProcessSearch", 29 );

      //
      // DEFINE_MAP For(*input) Class(#XSSearchValue) Name(#Search)
      //
      var SEARCH = rtn.createFieldParameter( "SEARCH", Fields.XSSRCHVL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SEARCH.set( parm_SEARCH );

      //
      // MTHROUTINE Name(ProcessSearch)
      //
      rtn.Line( 29 );
      {

         //
         // #LoadSearch.ExecuteAsync( #Search #Products #std_qsel )
         //
         rtn.Line( 32 );
         ref.LOADSEARCH.mthEXECUTEASYNC( { FLD: { "XSSRCHVL": SEARCH.get() } }, { FLD: { "STD_QSEL": fld.STD_QSEL }, LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 34 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadSearch.completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadSearch.completed", 36 );

      //
      // EVTROUTINE Handling(#LoadSearch.completed)
      //
      rtn.Line( 36 );
      {

         //
         // FOR Each(#Product) In(#Products)
         //
         rtn.Line( 38 );
         {
            var i1 = ref.PRODUCTS.createIterator();

            while( i1.step() )
            {
               var PRODUCT = rtn.setref( "PRODUCT", i1.item() );

               //
               // ADD_ENTRY To_List(#Tile)
               //
               rtn.Line( 40 );
               ref.TILE.addEntry();

               //
               // #Tile.CurrentItem.RelatedReference <= #Product
               //
               rtn.Line( 42 );
               ref.TILE.getCurrentItem().setRelatedReference( PRODUCT );

            //
            // ENDFOR 
            //
            rtn.Line( 44 );
            }

            i1.end();
            rtn.deleteReference( "PRODUCT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 46 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TILE", "PRIM_WEB.DataRequest", "PRIM_ACOL", "PRIM_FLD" ],
   dc: [ "XSPRDTIL2" ]
});

//# sourceURL=xssrhvw3.js
