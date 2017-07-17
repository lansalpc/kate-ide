// -----------------------------
// -- Reusable Part: XSCTGSEL --
// -----------------------------
LANSA.addComponent(
{
   id: "XSCTGSEL", 
   nm: "XSCategorySelection", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Category Selection", 
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
      XSPRDCTDS:
      {
         nm: "XSPRDCTDS",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Last Name",
         h1: "Last",
         h2: "Name",
         h3: " ",
         de: "Product Category Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: "Entries .......",
         h1: "Number",
         h2: "of Entrys",
         h3: " ",
         de: "Number of entries in a browse list",
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

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         LineId: 
         {
            da: "rw"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         LoadCategories: 
         {
            ps: 
            {
               "LineID":
               {
                  pt: "i"
               },

               "CategoryID":
               {
                  pt: "i"
               }
            }
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         CategoryChanged: 
         {
            ps: 
            {
               "LineID":
               {
                  pt: "i"
               },

               "CategoryID":
               {
                  pt: "i"
               },

               "CategoryDesc":
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
         var fld = this.addFields( "XSCTGSEL", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LReturnItem1) Alignment(TopLeft) Column(#Column1) Manage(#LCategories) Parent(#TableLayout1) Row(#Row1) Flow(Down)
         //
         var LRETURNITEM1 = this.createReference( "LRETURNITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Categories) Parent(#TableLayout1) Row(#Row2) Alignment(TopCenter) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCategories) Caption('Categories') Displayposition(1) Ellipses(Word) Height(35) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(220) Marginleft(5) Themedrawstyle('PanelHeader1')
         //
         var LCATEGORIES = this.createReference( "LCATEGORIES", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LIST) Name(#Categories) Displayposition(2) Height(1125) Left(0) Parent(#COM_OWNER) Tabposition(2) Top(45) Width(220) Columnlines(False) Rowlines(False) Columnheaderheight(0) Style(#XSTheme01<PanelBorders1>) Mouseoverstyle(#XSTheme01<PanelBorders2>) Rowheight(22)
         //
         var CATEGORIES = this.createReference( "CATEGORIES", "PRIM_LIST" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnXSPRDCTDS1) Displayposition(1) Parent(#Categories) Source(#XSProductCategoryDescription) Columnunits(Proportion) Columnwidth(1) Cellmarginleft(5) Style(#XSTheme01<Text10AlmostBlack>) Mouseoverstyle(#XSTheme01<BackgroundGreen2>) Columnresize(False)
         //
         var COLUMNXSPRDCTDS1 = this.createReference( "COLUMNXSPRDCTDS1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnXSPRDLNID) Displayposition(2) Parent(#Categories) Source(#XSProductLineID) Columnwidth(1)
         //
         var COLUMNXSPRDLNID = this.createReference( "COLUMNXSPRDLNID", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnXSPRDCTID) Displayposition(3) Parent(#Categories) Source(#XSProductCategoryID) Columnwidth(1)
         //
         var COLUMNXSPRDCTID = this.createReference( "COLUMNXSPRDCTID", "PRIM_LIST", "String" );

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

         // ------------------------------
         // -- Initialize #LRETURNITEM1 --
         // ------------------------------
         LRETURNITEM1.setAlignment( "TOPLEFT" );
         LRETURNITEM1.setColumn( COLUMN1 );
         LRETURNITEM1.setManage( LCATEGORIES );
         LRETURNITEM1.setParent( TABLELAYOUT1 );
         LRETURNITEM1.setRow( ROW1 );
         LRETURNITEM1.setFlow( "DOWN" );
         LRETURNITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( CATEGORIES );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.setAlignment( "TOPCENTER" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setMarginTop( 10 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LCATEGORIES --
         // -----------------------------
         LCATEGORIES.setCaption( "Categories" );
         LCATEGORIES.setDisplayPosition( 1 );
         LCATEGORIES.setEllipses( "WORD" );
         LCATEGORIES.setHeight( 35 );
         LCATEGORIES.setLeft( 0 );
         LCATEGORIES.setParent( this );
         LCATEGORIES.setTabPosition( 1 );
         LCATEGORIES.setTabStop( false );
         LCATEGORIES.setTop( 0 );
         LCATEGORIES.setVerticalAlignment( "CENTER" );
         LCATEGORIES.setWidth( 220 );
         LCATEGORIES.setMarginLeft( 5 );
         LCATEGORIES.setThemeDrawStyle( "PanelHeader1" );
         LCATEGORIES.initialize();

         // ----------------------------
         // -- Initialize #CATEGORIES --
         // ----------------------------
         CATEGORIES.setDisplayPosition( 2 );
         CATEGORIES.setHeight( 1125 );
         CATEGORIES.setLeft( 0 );
         CATEGORIES.setParent( this );
         CATEGORIES.setTabPosition( 2 );
         CATEGORIES.setTop( 45 );
         CATEGORIES.setWidth( 220 );
         CATEGORIES.setColumnLines( false );
         CATEGORIES.setRowLines( false );
         CATEGORIES.setColumnHeaderHeight( 0 );
         CATEGORIES.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         CATEGORIES.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS2" ) );
         CATEGORIES.setRowHeight( 22 );
         CATEGORIES.initialize();

         // ----------------------------------
         // -- Initialize #COLUMNXSPRDCTDS1 --
         // ----------------------------------
         COLUMNXSPRDCTDS1.setDisplayPosition( 1 );
         COLUMNXSPRDCTDS1.setParent( CATEGORIES );
         COLUMNXSPRDCTDS1.setSource( fld.XSPRDCTDS );
         COLUMNXSPRDCTDS1.setColumnUnits( "PROPORTION" );
         COLUMNXSPRDCTDS1.setColumnWidth( 1 );
         COLUMNXSPRDCTDS1.setCellMarginLeft( 5 );
         COLUMNXSPRDCTDS1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         COLUMNXSPRDCTDS1.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREEN2" ) );
         COLUMNXSPRDCTDS1.setColumnResize( false );
         COLUMNXSPRDCTDS1.initialize();

         // ---------------------------------
         // -- Initialize #COLUMNXSPRDLNID --
         // ---------------------------------
         COLUMNXSPRDLNID.setDisplayPosition( 2 );
         COLUMNXSPRDLNID.setParent( CATEGORIES );
         COLUMNXSPRDLNID.setSource( fld.XSPRDLNID );
         COLUMNXSPRDLNID.setColumnWidth( 1 );
         COLUMNXSPRDLNID.initialize();

         // ---------------------------------
         // -- Initialize #COLUMNXSPRDCTID --
         // ---------------------------------
         COLUMNXSPRDCTID.setDisplayPosition( 3 );
         COLUMNXSPRDCTID.setParent( CATEGORIES );
         COLUMNXSPRDCTID.setSource( fld.XSPRDCTID );
         COLUMNXSPRDCTID.setColumnWidth( 1 );
         COLUMNXSPRDCTID.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #MYSESSION --
         // ---------------------------------------
         MYSESSION.addEventHandler( "RELOADPRODUCTS", this, evtRoutine2 );

         // ----------------------------------------
         // -- Add Event Handlers for #CATEGORIES --
         // ----------------------------------------
         CATEGORIES.addEventHandler( "INITIALIZE", this, evtRoutine1 );
         CATEGORIES.addEventHandler( "ITEMCLICK", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 1170 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 220 );
         this.setLayoutManager( TABLELAYOUT1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "XSCTGSEL" );

         //
         // DEF_LIST Name(#ProductCategoryList) Fields(#XSProductCategoryID #XSProductCategoryDescription #XSProductLineID) Counter(#listcount) Type(*Working) Entrys(*max)
         //
         list.PRODUCTCATEGORYLIST = Lansa.createList( { "XSPRDCTID": fld.XSPRDCTID, "XSPRDCTDS": fld.XSPRDCTDS, "XSPRDLNID": fld.XSPRDLNID }, fld.LISTCOUNT );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #Categories.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Categories.Initialize", 31 );

      //
      // EVTROUTINE Handling(#Categories.Initialize)
      //
      rtn.Line( 31 );
      {

         //
         // #com_owner.LoadCategories( #MySession.pProductLine ' ' )
         //
         rtn.Line( 33 );
         COM_OWNER.mthLOADCATEGORIES.call( this, ref.MYSESSION.ref.getPPRODUCTLINE(), " " );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MySession.ReloadProducts
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.ReloadProducts", 37 );

      //
      // EVTROUTINE Handling(#MySession.ReloadProducts)
      //
      rtn.Line( 37 );
      {

         //
         // #com_owner.LoadCategories( #MySession.pProductLine #MySession.pProductCategory )
         //
         rtn.Line( 39 );
         COM_OWNER.mthLOADCATEGORIES.call( this, ref.MYSESSION.ref.getPPRODUCTLINE(), ref.MYSESSION.ref.getPPRODUCTCATEGORY() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Categories.ItemClick
   //
   function evtRoutine3( sender, parms )
   {
      var fld = this.FLD.XSCTGSEL, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Categories.ItemClick", 43 );

      //
      // DEFINE_COM Class(#XSServer.GotoProducts) Name(#GotoProducts)
      //
      var GOTOPRODUCTS = rtn.createWebPageRequest( "GOTOPRODUCTS", "XSSERVER", "GOTOPRODUCTS" );

      // ------------------------------
      // -- Initialize #GOTOPRODUCTS --
      // ------------------------------
      GOTOPRODUCTS.initialize();

      //
      // EVTROUTINE Handling(#Categories.ItemClick)
      //
      rtn.Line( 43 );
      {

         //
         // #MySession.pProductSearch := ''
         //
         rtn.Line( 48 );
         ref.MYSESSION.ref.setPPRODUCTSEARCH( "" );

         //
         // #MySession.pProductCategory := #XSProductCategoryID
         //
         rtn.Line( 50 );
         ref.MYSESSION.ref.setPPRODUCTCATEGORY( fld.XSPRDCTID.get() );

         //
         // #MySession.pProductCategoryDescription := #XSProductCategoryDescription
         //
         rtn.Line( 51 );
         ref.MYSESSION.ref.setPPRODUCTCATEGORYDESCRIPTION( fld.XSPRDCTDS.get() );

         //
         // IF (#MySession.pProductLine <> #XSProductLineID)
         //
         rtn.Line( 53 );
         if ( Lansa.String.ne( ref.MYSESSION.ref.getPPRODUCTLINE(), fld.XSPRDLNID.get() ) )
         {

            //
            // #MySession.pProductLine := #XSProductLineID
            //
            rtn.Line( 55 );
            ref.MYSESSION.ref.setPPRODUCTLINE( fld.XSPRDLNID.get() );

         //
         // ENDIF 
         //
         }

         //
         // IF (#MySession.pCurrentPage = PRODUCT)
         //
         rtn.Line( 59 );
         if ( Lansa.String.eq( ref.MYSESSION.ref.getPCURRENTPAGE(), "PRODUCT" ) )
         {

            //
            // #MySession.ReloadProductPage( #MySession.pProductLine #MySession.pProductCategory )
            //
            rtn.Line( 61 );
            ref.MYSESSION.ref.mthRELOADPRODUCTPAGE( ref.MYSESSION.ref.getPPRODUCTLINE(), ref.MYSESSION.ref.getPPRODUCTCATEGORY() );

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
         // #GotoProducts.execute( #MySession.pProductLine #MySession.pProductCategory )
         //
         rtn.Line( 67 );
         GOTOPRODUCTS.mthEXECUTE( { FLD: { "XSPRDLNID": ref.MYSESSION.ref.getPPRODUCTLINE(), "XSPRDCTID": ref.MYSESSION.ref.getPPRODUCTCATEGORY() } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 69 );
      rtn.end();
   };

   //
   // mthLOADCATEGORIES - LoadCategories
   //
   COM_OWNER.mthLOADCATEGORIES = function( parm_LINEID, parm_CATEGORYID )
   {
      var list = this.LIST.XSCTGSEL, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "LoadCategories", 71 );

      //
      // DEFINE_MAP For(*input) Class(#XSProductLineID) Name(#LineID)
      //
      var LINEID = rtn.createFieldParameter( "LINEID", Fields.XSPRDLNID.DataClass );

      //
      // DEFINE_MAP For(*input) Class(#XSProductCategoryID) Name(#CategoryID)
      //
      var CATEGORYID = rtn.createFieldParameter( "CATEGORYID", Fields.XSPRDCTID.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      LINEID.set( parm_LINEID );
      CATEGORYID.set( parm_CATEGORYID );

      //
      // DEFINE_COM Class(#XSServer.LoadProductCategorys) Name(#LoadCategories)
      //
      var LOADCATEGORIES = rtn.createDataRequest( "LOADCATEGORIES", "XSSERVER", "LOADPRODUCTCATEGORYS" );

      // --------------------------------
      // -- Initialize #LOADCATEGORIES --
      // --------------------------------
      LOADCATEGORIES.initialize();

      // --------------------------------------------
      // -- Add Event Handlers for #LOADCATEGORIES --
      // --------------------------------------------
      LOADCATEGORIES.addEventHandler( "COMPLETED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(LoadCategories)
      //
      rtn.Line( 71 );
      {

         //
         // CLR_LIST Named(#Categories)
         //
         rtn.Line( 77 );
         ref.CATEGORIES.clearList();

         //
         // #LoadCategories.ExecuteAsync( #LineID #CategoryID #ProductCategoryList )
         //
         rtn.Line( 79 );
         LOADCATEGORIES.mthEXECUTEASYNC( { FLD: { "XSPRDLNID": LINEID.get(), "XSPRDCTID": CATEGORYID.get() } }, { LIST: { "PRODUCTCATEGORYLIST": list.PRODUCTCATEGORYLIST } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 91 );
      rtn.end();

      //
      // evtRoutine4 - #LoadCategories.completed
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadCategories.completed", 81 );

         //
         // EVTROUTINE Handling(#LoadCategories.completed)
         //
         rtn.Line( 81 );
         {

            //
            // SELECTLIST Named(#ProductCategoryList)
            //
            rtn.Line( 83 );
            for ( var i1 = 1; i1 <= list.PRODUCTCATEGORYLIST.entryCount(); i1++ )
            {
               list.PRODUCTCATEGORYLIST.getEntry( i1 );

               //
               // ADD_ENTRY To_List(#Categories)
               //
               rtn.Line( 85 );
               ref.CATEGORIES.addEntry();

            //
            // ENDSELECT 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 89 );
         rtn.end();
      }
   };

   //
   // DEFINE_PTY Name(LineId) Get(*auto #XSProductLineID) Set(*auto #XSProductLineID)
   //
   COM_OWNER.getLINEID = function()
   {
      return this.FLD.XSCTGSEL.XSPRDLNID.get();
   };

   COM_OWNER.setLINEID = function( value )
   {
      this.FLD.XSCTGSEL.XSPRDLNID.set( value );
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_LIST", "PRIM_LIST.String", "PRIM_WEB.WebPageRequest", "PRIM_FLD", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xsctgsel.js
