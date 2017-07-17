// -----------------------------
// -- Reusable Part: XSSHPVW3 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSHPVW3", 
   nm: "XSShoppingCartView3", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Shopping Cart Contents", 
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
         var fld = this.addFields( "XSSHPVW3", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(25) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LShoppingCartItem1) Alignment(TopLeft) Column(#Column1) Manage(#LShoppingCart) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down)
         //
         var LSHOPPINGCARTITEM1 = this.createReference( "LSHOPPINGCARTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ShoppingCartTreeItem2) Alignment(TopLeft) Column(#Column1) Manage(#ShoppingCartTree) Parent(#TableLayout1) Row(#Row2) Flow(Down)
         //
         var SHOPPINGCARTTREEITEM2 = this.createReference( "SHOPPINGCARTTREEITEM2", "PRIM_TBLO", "Item" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ShoppingCartTreeItem1) Alignment(TopCenter) Column(#Column2) Manage(#ShoppingCartTree) Parent(#TableLayout2) Row(#Row3)
         //
         var SHOPPINGCARTTREEITEM1 = this.createReference( "SHOPPINGCARTTREEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LShoppingCart) Caption('Items') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Marginleft(20) Width(526) Themedrawstyle('PanelHeader1')
         //
         var LSHOPPINGCART = this.createReference( "LSHOPPINGCART", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TREE<#XSShoppingCartTreeItem>) Name(#ShoppingCartTree) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(2) Top(25) Width(526) Height(768)
         //
         var SHOPPINGCARTTREE = this.createReference( "SHOPPINGCARTTREE", "PRIM_TREE" );

         //
         // DEFINE_COM Class(#XSServer.LoadShoppingCart) Name(#LoadShoppingCart)
         //
         var LOADSHOPPINGCART = this.createDataRequest( "LOADSHOPPINGCART", "XSSERVER", "LOADSHOPPINGCART" );

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
         ROW1.setHeight( 25 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ------------------------------------
         // -- Initialize #LSHOPPINGCARTITEM1 --
         // ------------------------------------
         LSHOPPINGCARTITEM1.setAlignment( "TOPLEFT" );
         LSHOPPINGCARTITEM1.setColumn( COLUMN1 );
         LSHOPPINGCARTITEM1.setManage( LSHOPPINGCART );
         LSHOPPINGCARTITEM1.setParent( TABLELAYOUT1 );
         LSHOPPINGCARTITEM1.setRow( ROW1 );
         LSHOPPINGCARTITEM1.setSizing( "FITTOWIDTH" );
         LSHOPPINGCARTITEM1.setFlow( "DOWN" );
         LSHOPPINGCARTITEM1.initialize();

         // ---------------------------------------
         // -- Initialize #SHOPPINGCARTTREEITEM2 --
         // ---------------------------------------
         SHOPPINGCARTTREEITEM2.setAlignment( "TOPLEFT" );
         SHOPPINGCARTTREEITEM2.setColumn( COLUMN1 );
         SHOPPINGCARTTREEITEM2.setManage( SHOPPINGCARTTREE );
         SHOPPINGCARTTREEITEM2.setParent( TABLELAYOUT1 );
         SHOPPINGCARTTREEITEM2.setRow( ROW2 );
         SHOPPINGCARTTREEITEM2.setFlow( "DOWN" );
         SHOPPINGCARTTREEITEM2.initialize();

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

         // ---------------------------------------
         // -- Initialize #SHOPPINGCARTTREEITEM1 --
         // ---------------------------------------
         SHOPPINGCARTTREEITEM1.setAlignment( "TOPCENTER" );
         SHOPPINGCARTTREEITEM1.setColumn( COLUMN2 );
         SHOPPINGCARTTREEITEM1.setManage( SHOPPINGCARTTREE );
         SHOPPINGCARTTREEITEM1.setParent( TABLELAYOUT2 );
         SHOPPINGCARTTREEITEM1.setRow( ROW3 );
         SHOPPINGCARTTREEITEM1.initialize();

         // -------------------------------
         // -- Initialize #LSHOPPINGCART --
         // -------------------------------
         LSHOPPINGCART.setCaption( "Items" );
         LSHOPPINGCART.setDisplayPosition( 1 );
         LSHOPPINGCART.setEllipses( "WORD" );
         LSHOPPINGCART.setHeight( 25 );
         LSHOPPINGCART.setLeft( 0 );
         LSHOPPINGCART.setParent( this );
         LSHOPPINGCART.setTabPosition( 1 );
         LSHOPPINGCART.setTabStop( false );
         LSHOPPINGCART.setTop( 0 );
         LSHOPPINGCART.setVerticalAlignment( "CENTER" );
         LSHOPPINGCART.setMarginLeft( 20 );
         LSHOPPINGCART.setWidth( 526 );
         LSHOPPINGCART.setThemeDrawStyle( "PanelHeader1" );
         LSHOPPINGCART.initialize();

         // ----------------------------------
         // -- Initialize #SHOPPINGCARTTREE --
         // ----------------------------------
         SHOPPINGCARTTREE.setDisplayPosition( 2 );
         SHOPPINGCARTTREE.setLeft( 0 );
         SHOPPINGCARTTREE.setParent( this );
         SHOPPINGCARTTREE.setTabPosition( 2 );
         SHOPPINGCARTTREE.setTop( 25 );
         SHOPPINGCARTTREE.setWidth( 526 );
         SHOPPINGCARTTREE.setHeight( 768 );
         SHOPPINGCARTTREE.initialize();

         // ----------------------------------
         // -- Initialize #LOADSHOPPINGCART --
         // ----------------------------------
         LOADSHOPPINGCART.initialize();

         // ----------------------------------------------
         // -- Add Event Handlers for #LOADSHOPPINGCART --
         // ----------------------------------------------
         LOADSHOPPINGCART.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ------------------------------------------------------
         // -- Define the UDC information for #SHOPPINGCARTTREE --
         // ------------------------------------------------------
         SHOPPINGCARTTREE.addDesign( "XSSHPIT1" );
         SHOPPINGCARTTREE.addListFields( { "XSCRTID": fld.XSCRTID, "XSPRDID": fld.XSPRDID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDDTL": fld.XSPRDDTL, "XSPRDPRC": fld.XSPRDPRC, "XSQTY": fld.XSQTY, "XSITMPRC": fld.XSITMPRC } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setWidth( 528 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setHeight( 795 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );

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
      var fld = this.FLD.XSSHPVW3, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 25 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 25 );
      {

         //
         // #XSCartID := #MySession.RestoreLocalValue( CartID )
         //
         rtn.Line( 27 );
         fld.XSCRTID.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "CARTID" ) );

         //
         // #LoadShoppingCart.ExecuteAsync( #XSCartID #ShoppingCartTree )
         //
         rtn.Line( 30 );
         ref.LOADSHOPPINGCART.mthEXECUTEASYNC( { FLD: { "XSCRTID": fld.XSCRTID.get() } }, { LIST: { "SHOPPINGCARTLIST": ref.SHOPPINGCARTTREE } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadShoppingCart.completed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadShoppingCart.completed", 34 );

      //
      // EVTROUTINE Handling(#LoadShoppingCart.completed)
      //
      rtn.Line( 34 );
      {

         //
         // IF (#ShoppingCartTree.Items.ItemCount = 0)
         //
         rtn.Line( 36 );
         if ( Lansa.Number.eq( ref.SHOPPINGCARTTREE.getItems().getItemCount(), 0 ) )
         {

            //
            // #MySession.AddMessage( 'Your shopping cart is empty' )
            //
            rtn.Line( 38 );
            ref.MYSESSION.ref.mthADDMESSAGE( "Your shopping cart is empty" );

            //
            // #MySession.ShowMessageBox
            //
            rtn.Line( 39 );
            ref.MYSESSION.ref.mthSHOWMESSAGEBOX();

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
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
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TREE", "PRIM_WEB.DataRequest" ],
   dc: [ "XSSHPIT1" ]
});

//# sourceURL=xsshpvw3.js
