// -----------------------------
// -- Reusable Part: XSSRHVW2 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSRHVW2", 
   nm: "XSSearchView2", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Search View 2", 
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
         SetProductSelection: 
         {
         },

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
         var fld = this.addFields( "XSSRHVW2", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(60) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#TileItem1) Manage(#Tile) Parent(#TableLayout1) Row(#Row2) Column(#Column1) Marginbottom(10) Alignment(TopLeft)
         //
         var TILEITEM1 = this.createReference( "TILEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Marginbottom(10) Alignment(TopLeft)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCurrentSelectionItem1) Manage(#LCurrentSelection) Parent(#TableLayout2) Row(#Row3) Column(#Column2) Alignment(CenterLeft)
         //
         var LCURRENTSELECTIONITEM1 = this.createReference( "LCURRENTSELECTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Width(1170) Style(#XSTheme01<PanelBorders1>) Layoutmanager(#TableLayout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentSelection) Caption('SEARCH :') Displayposition(1) Ellipses(Word) Height(48) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(1168) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(0) Marginleft(10)
         //
         var LCURRENTSELECTION = this.createReference( "LCURRENTSELECTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TILE<#XSProductTile2>) Name(#Tile) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(2) Top(60) Width(1170) Height(1100)
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
         ROW1.setHeight( 60 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ---------------------------
         // -- Initialize #TILEITEM1 --
         // ---------------------------
         TILEITEM1.setManage( TILE );
         TILEITEM1.setParent( TABLELAYOUT1 );
         TILEITEM1.setRow( ROW2 );
         TILEITEM1.setColumn( COLUMN1 );
         TILEITEM1.setMarginBottom( 10 );
         TILEITEM1.setAlignment( "TOPLEFT" );
         TILEITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( PANEL1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setMarginBottom( 10 );
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.initialize();

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
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT2 );
         ROW3.initialize();

         // ----------------------------------------
         // -- Initialize #LCURRENTSELECTIONITEM1 --
         // ----------------------------------------
         LCURRENTSELECTIONITEM1.setManage( LCURRENTSELECTION );
         LCURRENTSELECTIONITEM1.setParent( TABLELAYOUT2 );
         LCURRENTSELECTIONITEM1.setRow( ROW3 );
         LCURRENTSELECTIONITEM1.setColumn( COLUMN2 );
         LCURRENTSELECTIONITEM1.setAlignment( "CENTERLEFT" );
         LCURRENTSELECTIONITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 0 );
         PANEL1.setWidth( 1170 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.initialize();

         // -----------------------------------
         // -- Initialize #LCURRENTSELECTION --
         // -----------------------------------
         LCURRENTSELECTION.setCaption( "SEARCH :" );
         LCURRENTSELECTION.setDisplayPosition( 1 );
         LCURRENTSELECTION.setEllipses( "WORD" );
         LCURRENTSELECTION.setHeight( 48 );
         LCURRENTSELECTION.setParent( PANEL1 );
         LCURRENTSELECTION.setTabPosition( 1 );
         LCURRENTSELECTION.setTabStop( false );
         LCURRENTSELECTION.setTop( 0 );
         LCURRENTSELECTION.setVerticalAlignment( "CENTER" );
         LCURRENTSELECTION.setWidth( 1168 );
         LCURRENTSELECTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTSELECTION.setLeft( 0 );
         LCURRENTSELECTION.setMarginLeft( 10 );
         LCURRENTSELECTION.initialize();

         // ----------------------
         // -- Initialize #TILE --
         // ----------------------
         TILE.setDisplayPosition( 2 );
         TILE.setLeft( 0 );
         TILE.setParent( this );
         TILE.setTabPosition( 2 );
         TILE.setTop( 60 );
         TILE.setWidth( 1170 );
         TILE.setHeight( 1100 );
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
         this.setHeight( 1170 );
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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 33 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 33 );
      {

         //
         // #com_owner.SetProductSelection
         //
         rtn.Line( 35 );
         this.mthSETPRODUCTSELECTION();

         //
         // #com_owner.ProcessSearch( #MySession.pProductSearch )
         //
         rtn.Line( 37 );
         COM_OWNER.mthPROCESSSEARCH.call( this, ref.MYSESSION.ref.getPPRODUCTSEARCH() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
      rtn.end();
   };

   //
   // mthSETPRODUCTSELECTION - SetProductSelection
   //
   COM_OWNER.mthSETPRODUCTSELECTION = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetProductSelection", 41 );

      //
      // MTHROUTINE Name(SetProductSelection)
      //
      rtn.Line( 41 );
      {

         //
         // #LCurrentSelection := 'SEARCH : ' + #MySession.pProductSearch.uppercase
         //
         rtn.Line( 43 );
         ref.LCURRENTSELECTION.set( Lansa.cat( "SEARCH : ", Lansa.String.UpperCase( ref.MYSESSION.ref.getPPRODUCTSEARCH() ) ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 45 );
      rtn.end();
   };

   //
   // mthPROCESSSEARCH - ProcessSearch
   //
   COM_OWNER.mthPROCESSSEARCH = function( parm_SEARCH )
   {
      var fld = this.FLD.XSSRHVW2, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ProcessSearch", 47 );

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
      rtn.Line( 47 );
      {

         //
         // #LoadSearch.ExecuteAsync( #Search #Products #std_qsel )
         //
         rtn.Line( 50 );
         ref.LOADSEARCH.mthEXECUTEASYNC( { FLD: { "XSSRCHVL": SEARCH.get() } }, { FLD: { "STD_QSEL": fld.STD_QSEL }, LIST: { "PRODUCTLIST": ref.PRODUCTS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadSearch.completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadSearch.completed", 54 );

      //
      // EVTROUTINE Handling(#LoadSearch.completed)
      //
      rtn.Line( 54 );
      {

         //
         // CASE (#Products.ItemCount)
         //
         rtn.Line( 56 );
         {
            var value1 = ref.PRODUCTS.getItemCount();

            //
            // WHEN ('< 4')
            //
            if ( rtn.Line( 58 ), Lansa.Number.lt( value1, 4 ) )
            {

               //
               // #com_owner.height := 430
               //
               rtn.Line( 60 );
               this.setHeight( 430 );
            }

            //
            // WHEN ('< 8')
            //
            else if ( rtn.Line( 62 ), Lansa.Number.lt( value1, 8 ) )
            {

               //
               // #com_owner.height := 800
               //
               rtn.Line( 64 );
               this.setHeight( 800 );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #com_owner.height := 1170
               //
               rtn.Line( 68 );
               this.setHeight( 1170 );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 70 );
         }

         //
         // FOR Each(#Product) In(#Products)
         //
         rtn.Line( 72 );
         {
            var i1 = ref.PRODUCTS.createIterator();

            while( i1.step() )
            {
               var PRODUCT = rtn.setref( "PRODUCT", i1.item() );

               //
               // ADD_ENTRY To_List(#Tile)
               //
               rtn.Line( 74 );
               ref.TILE.addEntry();

               //
               // #Tile.CurrentItem.RelatedReference <= #Product
               //
               rtn.Line( 76 );
               ref.TILE.getCurrentItem().setRelatedReference( PRODUCT );

            //
            // ENDFOR 
            //
            rtn.Line( 78 );
            }

            i1.end();
            rtn.deleteReference( "PRODUCT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 80 );
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
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TILE", "PRIM_WEB.DataRequest", "PRIM_ACOL", "PRIM_FLD" ],
   dc: [ "XSPRDTIL2" ]
});

//# sourceURL=xssrhvw2.js
