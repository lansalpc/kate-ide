// -----------------------------
// -- Reusable Part: XSPRDVW2 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSPRDVW2", 
   nm: "XSProductsView2", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Products View 2", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         SetProductSelection: 
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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Minwidth(200)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(810) Units(Pixels) Minwidth(810)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(45) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Column(#Column1) Alignment(CenterLeft) Columnspan(2)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCategorySelectionItem1) Manage(#XSCategorySelection) Parent(#TableLayout1) Row(#Row2) Column(#Column1) Margintop(10)
         //
         var XSCATEGORYSELECTIONITEM1 = this.createReference( "XSCATEGORYSELECTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSProductsView3Item1) Manage(#XSProductsView3) Parent(#TableLayout1) Row(#Row2) Column(#Column2) Margintop(10) Marginleft(10)
         //
         var XSPRODUCTSVIEW3ITEM1 = this.createReference( "XSPRODUCTSVIEW3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCurrentSelectionItem1) Alignment(CenterLeft) Column(#Column3) Manage(#LCurrentSelection) Parent(#TableLayout2) Row(#Row3) Flow(Right) Sizing(None) Columnspan(2)
         //
         var LCURRENTSELECTIONITEM1 = this.createReference( "LCURRENTSELECTIONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCurrentLineItem1) Alignment(CenterLeft) Column(#Column3) Manage(#LCurrentLine) Parent(#TableLayout2) Row(#Row3) Sizing(None) Flow(Right) Columnspan(2)
         //
         var LCURRENTLINEITEM1 = this.createReference( "LCURRENTLINEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCurrentCategoryItem1) Alignment(CenterLeft) Column(#Column3) Manage(#LCurrentCategory) Parent(#TableLayout2) Row(#Row3) Sizing(None) Flow(Right) Columnspan(2)
         //
         var LCURRENTCATEGORYITEM1 = this.createReference( "LCURRENTCATEGORYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(3) Height(45) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(0) Width(1170) Style(#XSTheme01<PanelBorders1>) Layoutmanager(#TableLayout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentSelection) Caption('PRODUCTS :') Displayposition(1) Ellipses(Word) Height(43) Parent(#Panel1) Tabposition(3) Tabstop(False) Top(0) Verticalalignment(Center) Width(120) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(0) Marginleft(10)
         //
         var LCURRENTSELECTION = this.createReference( "LCURRENTSELECTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentLine) Caption('<Line>') Displayposition(2) Ellipses(Word) Height(43) Parent(#Panel1) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Width(180) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(120) Marginleft(10)
         //
         var LCURRENTLINE = this.createReference( "LCURRENTLINE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentCategory) Caption('<Category>') Displayposition(3) Ellipses(Word) Height(43) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(465) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(300) Marginleft(10)
         //
         var LCURRENTCATEGORY = this.createReference( "LCURRENTCATEGORY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSCategorySelection) Name(#XSCategorySelection) Height(1190) Parent(#COM_OWNER) Tabstop(False) Displayposition(2) Tabposition(2) Top(55) Width(360)
         //
         var XSCATEGORYSELECTION = this.createReference( "XSCATEGORYSELECTION", "XSCTGSEL" );

         //
         // DEFINE_COM Class(#XSProductsView3) Name(#XSProductsView3) Tabstop(False) Parent(#COM_OWNER) Left(370) Top(55)
         //
         var XSPRODUCTSVIEW3 = this.createReference( "XSPRODUCTSVIEW3", "XSPRDVW3" );

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
         COLUMN1.setMinWidth( 200 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setWidth( 810 );
         COLUMN2.setUnits( "PIXELS" );
         COLUMN2.setMinWidth( 810 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setHeight( 45 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // -----------------------------
         // -- Initialize #PANEL1ITEM1 --
         // -----------------------------
         PANEL1ITEM1.setManage( PANEL1 );
         PANEL1ITEM1.setParent( TABLELAYOUT1 );
         PANEL1ITEM1.setRow( ROW1 );
         PANEL1ITEM1.setColumn( COLUMN1 );
         PANEL1ITEM1.setAlignment( "CENTERLEFT" );
         PANEL1ITEM1.setColumnSpan( 2 );
         PANEL1ITEM1.initialize();

         // ------------------------------------------
         // -- Initialize #XSCATEGORYSELECTIONITEM1 --
         // ------------------------------------------
         XSCATEGORYSELECTIONITEM1.setManage( XSCATEGORYSELECTION );
         XSCATEGORYSELECTIONITEM1.setParent( TABLELAYOUT1 );
         XSCATEGORYSELECTIONITEM1.setRow( ROW2 );
         XSCATEGORYSELECTIONITEM1.setColumn( COLUMN1 );
         XSCATEGORYSELECTIONITEM1.setMarginTop( 10 );
         XSCATEGORYSELECTIONITEM1.initialize();

         // --------------------------------------
         // -- Initialize #XSPRODUCTSVIEW3ITEM1 --
         // --------------------------------------
         XSPRODUCTSVIEW3ITEM1.setManage( XSPRODUCTSVIEW3 );
         XSPRODUCTSVIEW3ITEM1.setParent( TABLELAYOUT1 );
         XSPRODUCTSVIEW3ITEM1.setRow( ROW2 );
         XSPRODUCTSVIEW3ITEM1.setColumn( COLUMN2 );
         XSPRODUCTSVIEW3ITEM1.setMarginTop( 10 );
         XSPRODUCTSVIEW3ITEM1.setMarginLeft( 10 );
         XSPRODUCTSVIEW3ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 1 );
         COLUMN3.setParent( TABLELAYOUT2 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT2 );
         ROW3.initialize();

         // ----------------------------------------
         // -- Initialize #LCURRENTSELECTIONITEM1 --
         // ----------------------------------------
         LCURRENTSELECTIONITEM1.setAlignment( "CENTERLEFT" );
         LCURRENTSELECTIONITEM1.setColumn( COLUMN3 );
         LCURRENTSELECTIONITEM1.setManage( LCURRENTSELECTION );
         LCURRENTSELECTIONITEM1.setParent( TABLELAYOUT2 );
         LCURRENTSELECTIONITEM1.setRow( ROW3 );
         LCURRENTSELECTIONITEM1.setFlow( "RIGHT" );
         LCURRENTSELECTIONITEM1.setSizing( "NONE" );
         LCURRENTSELECTIONITEM1.setColumnSpan( 2 );
         LCURRENTSELECTIONITEM1.initialize();

         // -----------------------------------
         // -- Initialize #LCURRENTLINEITEM1 --
         // -----------------------------------
         LCURRENTLINEITEM1.setAlignment( "CENTERLEFT" );
         LCURRENTLINEITEM1.setColumn( COLUMN3 );
         LCURRENTLINEITEM1.setManage( LCURRENTLINE );
         LCURRENTLINEITEM1.setParent( TABLELAYOUT2 );
         LCURRENTLINEITEM1.setRow( ROW3 );
         LCURRENTLINEITEM1.setSizing( "NONE" );
         LCURRENTLINEITEM1.setFlow( "RIGHT" );
         LCURRENTLINEITEM1.setColumnSpan( 2 );
         LCURRENTLINEITEM1.initialize();

         // ---------------------------------------
         // -- Initialize #LCURRENTCATEGORYITEM1 --
         // ---------------------------------------
         LCURRENTCATEGORYITEM1.setAlignment( "CENTERLEFT" );
         LCURRENTCATEGORYITEM1.setColumn( COLUMN3 );
         LCURRENTCATEGORYITEM1.setManage( LCURRENTCATEGORY );
         LCURRENTCATEGORYITEM1.setParent( TABLELAYOUT2 );
         LCURRENTCATEGORYITEM1.setRow( ROW3 );
         LCURRENTCATEGORYITEM1.setSizing( "NONE" );
         LCURRENTCATEGORYITEM1.setFlow( "RIGHT" );
         LCURRENTCATEGORYITEM1.setColumnSpan( 2 );
         LCURRENTCATEGORYITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 3 );
         PANEL1.setHeight( 45 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 3 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 0 );
         PANEL1.setWidth( 1170 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.initialize();

         // -----------------------------------
         // -- Initialize #LCURRENTSELECTION --
         // -----------------------------------
         LCURRENTSELECTION.setCaption( "PRODUCTS :" );
         LCURRENTSELECTION.setDisplayPosition( 1 );
         LCURRENTSELECTION.setEllipses( "WORD" );
         LCURRENTSELECTION.setHeight( 43 );
         LCURRENTSELECTION.setParent( PANEL1 );
         LCURRENTSELECTION.setTabPosition( 3 );
         LCURRENTSELECTION.setTabStop( false );
         LCURRENTSELECTION.setTop( 0 );
         LCURRENTSELECTION.setVerticalAlignment( "CENTER" );
         LCURRENTSELECTION.setWidth( 120 );
         LCURRENTSELECTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTSELECTION.setLeft( 0 );
         LCURRENTSELECTION.setMarginLeft( 10 );
         LCURRENTSELECTION.initialize();

         // ------------------------------
         // -- Initialize #LCURRENTLINE --
         // ------------------------------
         LCURRENTLINE.setCaption( "<Line>" );
         LCURRENTLINE.setDisplayPosition( 2 );
         LCURRENTLINE.setEllipses( "WORD" );
         LCURRENTLINE.setHeight( 43 );
         LCURRENTLINE.setParent( PANEL1 );
         LCURRENTLINE.setTabPosition( 2 );
         LCURRENTLINE.setTabStop( false );
         LCURRENTLINE.setTop( 0 );
         LCURRENTLINE.setVerticalAlignment( "CENTER" );
         LCURRENTLINE.setWidth( 180 );
         LCURRENTLINE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTLINE.setLeft( 120 );
         LCURRENTLINE.setMarginLeft( 10 );
         LCURRENTLINE.initialize();

         // ----------------------------------
         // -- Initialize #LCURRENTCATEGORY --
         // ----------------------------------
         LCURRENTCATEGORY.setCaption( "<Category>" );
         LCURRENTCATEGORY.setDisplayPosition( 3 );
         LCURRENTCATEGORY.setEllipses( "WORD" );
         LCURRENTCATEGORY.setHeight( 43 );
         LCURRENTCATEGORY.setParent( PANEL1 );
         LCURRENTCATEGORY.setTabPosition( 1 );
         LCURRENTCATEGORY.setTabStop( false );
         LCURRENTCATEGORY.setTop( 0 );
         LCURRENTCATEGORY.setVerticalAlignment( "CENTER" );
         LCURRENTCATEGORY.setWidth( 465 );
         LCURRENTCATEGORY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTCATEGORY.setLeft( 300 );
         LCURRENTCATEGORY.setMarginLeft( 10 );
         LCURRENTCATEGORY.initialize();

         // -------------------------------------
         // -- Initialize #XSCATEGORYSELECTION --
         // -------------------------------------
         XSCATEGORYSELECTION.setHeight( 1190 );
         XSCATEGORYSELECTION.setParent( this );
         XSCATEGORYSELECTION.setTabStop( false );
         XSCATEGORYSELECTION.setDisplayPosition( 2 );
         XSCATEGORYSELECTION.setTabPosition( 2 );
         XSCATEGORYSELECTION.setTop( 55 );
         XSCATEGORYSELECTION.setWidth( 360 );
         XSCATEGORYSELECTION.initialize();

         // ---------------------------------
         // -- Initialize #XSPRODUCTSVIEW3 --
         // ---------------------------------
         XSPRODUCTSVIEW3.setTabStop( false );
         XSPRODUCTSVIEW3.setParent( this );
         XSPRODUCTSVIEW3.setLeft( 370 );
         XSPRODUCTSVIEW3.setTop( 55 );
         XSPRODUCTSVIEW3.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #MYSESSION --
         // ---------------------------------------
         MYSESSION.addEventHandler( "RELOADPRODUCTS", this, evtRoutine2 );

         // ------------------------------------------
         // -- Add Event Handlers for #LCURRENTLINE --
         // ------------------------------------------
         LCURRENTLINE.addEventHandler( "CLICK", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 1245 );
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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 32 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 32 );
      {

         //
         // #com_owner.SetProductSelection
         //
         rtn.Line( 34 );
         this.mthSETPRODUCTSELECTION();

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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.ReloadProducts", 38 );

      //
      // EVTROUTINE Handling(#MySession.ReloadProducts)
      //
      rtn.Line( 38 );
      {

         //
         // #com_owner.SetProductSelection
         //
         rtn.Line( 40 );
         this.mthSETPRODUCTSELECTION();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // mthSETPRODUCTSELECTION - SetProductSelection
   //
   COM_OWNER.mthSETPRODUCTSELECTION = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetProductSelection", 44 );

      //
      // MTHROUTINE Name(SetProductSelection)
      //
      rtn.Line( 44 );
      {

         //
         // IF (#MySession.pProductLine = *blank)
         //
         rtn.Line( 46 );
         if ( Lansa.String.eq( ref.MYSESSION.ref.getPPRODUCTLINE(), "" ) )
         {

            //
            // #LCurrentSelection #LCurrentLine #LCurrentCategory := *blank
            //
            rtn.Line( 48 );
            ref.LCURRENTSELECTION.set( "" );
            ref.LCURRENTLINE.set( "" );
            ref.LCURRENTCATEGORY.set( "" );

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
         // #LCurrentSelection := 'PRODUCTS : '
         //
         rtn.Line( 54 );
         ref.LCURRENTSELECTION.set( "PRODUCTS : " );

         //
         // #LCurrentLine := #MySession.pProductLineDescription.uppercase
         //
         rtn.Line( 55 );
         ref.LCURRENTLINE.set( Lansa.String.UpperCase( ref.MYSESSION.ref.getPPRODUCTLINEDESCRIPTION() ) );

         //
         // #LCurrentCategory := *blank
         //
         rtn.Line( 56 );
         ref.LCURRENTCATEGORY.set( "" );

         //
         // IF (#MySession.pProductCategory <> *blank)
         //
         rtn.Line( 58 );
         if ( Lansa.String.ne( ref.MYSESSION.ref.getPPRODUCTCATEGORY(), "" ) )
         {

            //
            // #LCurrentCategory := ' > ' + #MySession.pProductCategoryDescription.uppercase
            //
            rtn.Line( 60 );
            ref.LCURRENTCATEGORY.set( Lansa.cat( " > ", Lansa.String.UpperCase( ref.MYSESSION.ref.getPPRODUCTCATEGORYDESCRIPTION() ) ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 64 );
      rtn.end();
   };

   //
   // evtRoutine3 - #LCurrentLine.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LCurrentLine.Click", 66 );

      //
      // EVTROUTINE Handling(#LCurrentLine.Click)
      //
      rtn.Line( 66 );
      {

         //
         // #MySession.ReloadProductPage( #MySession.pProductLine '' )
         //
         rtn.Line( 69 );
         ref.MYSESSION.ref.mthRELOADPRODUCTPAGE( ref.MYSESSION.ref.getPPRODUCTLINE(), "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 71 );
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
   rc: [ "XSMYSSN", "XSCTGSEL", "XSPRDVW3", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL" ]
});

//# sourceURL=xsprdvw2.js
