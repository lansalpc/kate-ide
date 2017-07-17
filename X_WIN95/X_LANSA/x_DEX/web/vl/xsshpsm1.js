// -----------------------------
// -- Reusable Part: XSSHPSM1 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSHPSM1", 
   nm: "XSShoppingCartSummary", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Shopping Cart Summary", 
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
      XSACCEML:
      {
         nm: "XSACCEML",
         ft: "C",
         ln: 200,
         dc: 0,
         lb: "Email",
         h1: "Email",
         h2: " ",
         h3: " ",
         de: "Email",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSCRTQTY:
      {
         nm: "XSCRTQTY",
         ft: "S",
         ln: 7,
         dc: 0,
         lb: "Quantity",
         h1: "Quantity",
         h2: " ",
         h3: " ",
         de: "Number of items in cart",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTPRC:
      {
         nm: "XSCRTPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Ttl Price",
         h1: "Cart",
         h2: "Total",
         h3: "Price",
         de: "Cart Total Price",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSSTATUS:
      {
         nm: "XSSTATUS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: "Status",
         h1: "Status",
         h2: " ",
         h3: " ",
         de: "Status",
         dv: "",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PPNL", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddItemtoCart: 
         {
            ps: 
            {
               "ProductID":
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
         Continue: 
         {
         },

         CartUpdated: 
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XSSHPSM1", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(2)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LItemAddedItem1) Alignment(TopLeft) Column(#Column1) Manage(#LItemAdded) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Columnspan(2)
         //
         var LITEMADDEDITEM1 = this.createReference( "LITEMADDEDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LItemTotalItem1) Alignment(TopLeft) Column(#Column1) Manage(#LItemTotal) Parent(#TableLayout1) Row(#Row1) Sizing(None) Flow(Down) Columnspan(2)
         //
         var LITEMTOTALITEM1 = this.createReference( "LITEMTOTALITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LItemSummaryItem1) Alignment(TopLeft) Column(#Column1) Manage(#LItemSummary) Parent(#TableLayout1) Row(#Row1) Sizing(None) Flow(Down) Columnspan(2)
         //
         var LITEMSUMMARYITEM1 = this.createReference( "LITEMSUMMARYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ContinueButtonItem1) Alignment(TopCenter) Column(#Column1) Manage(#ContinueButton) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var CONTINUEBUTTONITEM1 = this.createReference( "CONTINUEBUTTONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ShoppingCartButtonItem1) Alignment(TopCenter) Column(#Column2) Manage(#ShoppingCartButton) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var SHOPPINGCARTBUTTONITEM1 = this.createReference( "SHOPPINGCARTBUTTONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LItemAdded) Caption('Item added to your cart') Displayposition(1) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(351) Left(0) Marginleft(20) Themedrawstyle('PanelHeader2')
         //
         var LITEMADDED = this.createReference( "LITEMADDED", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LItemSummary) Caption('You have 0 items in your cart') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(25) Verticalalignment(Center) Width(280) Style(#XSTheme01<Text10BoldAlmostBlack>) Marginleft(20)
         //
         var LITEMSUMMARY = this.createReference( "LITEMSUMMARY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LItemTotal) Caption('Total Cost : $0.00') Displayposition(3) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(50) Verticalalignment(Center) Width(280) Style(#XSTheme01<Text10BoldAlmostBlack>) Marginleft(20)
         //
         var LITEMTOTAL = this.createReference( "LITEMTOTAL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#ContinueButton) Caption('Continue') Displayposition(4) Left(13) Parent(#COM_OWNER) Tabposition(4) Top(90) Width(150) Style(#XSTheme01<ButtonGn3Wh>) Mouseoverstyle(#XSTheme01<ButtonGn2Wh>)
         //
         var CONTINUEBUTTON = this.createReference( "CONTINUEBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#ShoppingCartButton) Caption('Shopping Cart') Displayposition(5) Parent(#COM_OWNER) Tabposition(5) Top(90) Width(150) Left(188) Style(#XSTheme01<ButtonGn3Wh>) Mouseoverstyle(#XSTheme01<ButtonGn2Wh>)
         //
         var SHOPPINGCARTBUTTON = this.createReference( "SHOPPINGCARTBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#XSServer.GotoShoppingCart) Name(#GotoShoppingCart)
         //
         var GOTOSHOPPINGCART = this.createWebPageRequest( "GOTOSHOPPINGCART", "XSSERVER", "GOTOSHOPPINGCART" );

         //
         // DEFINE_COM Class(#XSCartID) Name(#Cartid)
         //
         var CARTID = this.createFieldReference( "CARTID", Fields.XSCRTID.DataClass );

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

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setHeight( 2 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ---------------------------------
         // -- Initialize #LITEMADDEDITEM1 --
         // ---------------------------------
         LITEMADDEDITEM1.setAlignment( "TOPLEFT" );
         LITEMADDEDITEM1.setColumn( COLUMN1 );
         LITEMADDEDITEM1.setManage( LITEMADDED );
         LITEMADDEDITEM1.setParent( TABLELAYOUT1 );
         LITEMADDEDITEM1.setRow( ROW1 );
         LITEMADDEDITEM1.setSizing( "FITTOWIDTH" );
         LITEMADDEDITEM1.setFlow( "DOWN" );
         LITEMADDEDITEM1.setColumnSpan( 2 );
         LITEMADDEDITEM1.initialize();

         // ---------------------------------
         // -- Initialize #LITEMTOTALITEM1 --
         // ---------------------------------
         LITEMTOTALITEM1.setAlignment( "TOPLEFT" );
         LITEMTOTALITEM1.setColumn( COLUMN1 );
         LITEMTOTALITEM1.setManage( LITEMTOTAL );
         LITEMTOTALITEM1.setParent( TABLELAYOUT1 );
         LITEMTOTALITEM1.setRow( ROW1 );
         LITEMTOTALITEM1.setSizing( "NONE" );
         LITEMTOTALITEM1.setFlow( "DOWN" );
         LITEMTOTALITEM1.setColumnSpan( 2 );
         LITEMTOTALITEM1.initialize();

         // -----------------------------------
         // -- Initialize #LITEMSUMMARYITEM1 --
         // -----------------------------------
         LITEMSUMMARYITEM1.setAlignment( "TOPLEFT" );
         LITEMSUMMARYITEM1.setColumn( COLUMN1 );
         LITEMSUMMARYITEM1.setManage( LITEMSUMMARY );
         LITEMSUMMARYITEM1.setParent( TABLELAYOUT1 );
         LITEMSUMMARYITEM1.setRow( ROW1 );
         LITEMSUMMARYITEM1.setSizing( "NONE" );
         LITEMSUMMARYITEM1.setFlow( "DOWN" );
         LITEMSUMMARYITEM1.setColumnSpan( 2 );
         LITEMSUMMARYITEM1.initialize();

         // -------------------------------------
         // -- Initialize #CONTINUEBUTTONITEM1 --
         // -------------------------------------
         CONTINUEBUTTONITEM1.setAlignment( "TOPCENTER" );
         CONTINUEBUTTONITEM1.setColumn( COLUMN1 );
         CONTINUEBUTTONITEM1.setManage( CONTINUEBUTTON );
         CONTINUEBUTTONITEM1.setParent( TABLELAYOUT1 );
         CONTINUEBUTTONITEM1.setRow( ROW2 );
         CONTINUEBUTTONITEM1.setSizing( "NONE" );
         CONTINUEBUTTONITEM1.initialize();

         // -----------------------------------------
         // -- Initialize #SHOPPINGCARTBUTTONITEM1 --
         // -----------------------------------------
         SHOPPINGCARTBUTTONITEM1.setAlignment( "TOPCENTER" );
         SHOPPINGCARTBUTTONITEM1.setColumn( COLUMN2 );
         SHOPPINGCARTBUTTONITEM1.setManage( SHOPPINGCARTBUTTON );
         SHOPPINGCARTBUTTONITEM1.setParent( TABLELAYOUT1 );
         SHOPPINGCARTBUTTONITEM1.setRow( ROW2 );
         SHOPPINGCARTBUTTONITEM1.setSizing( "NONE" );
         SHOPPINGCARTBUTTONITEM1.initialize();

         // ----------------------------
         // -- Initialize #LITEMADDED --
         // ----------------------------
         LITEMADDED.setCaption( "Item added to your cart" );
         LITEMADDED.setDisplayPosition( 1 );
         LITEMADDED.setEllipses( "WORD" );
         LITEMADDED.setHeight( 25 );
         LITEMADDED.setParent( this );
         LITEMADDED.setTabPosition( 1 );
         LITEMADDED.setTabStop( false );
         LITEMADDED.setTop( 0 );
         LITEMADDED.setVerticalAlignment( "CENTER" );
         LITEMADDED.setWidth( 351 );
         LITEMADDED.setLeft( 0 );
         LITEMADDED.setMarginLeft( 20 );
         LITEMADDED.setThemeDrawStyle( "PanelHeader2" );
         LITEMADDED.initialize();

         // ------------------------------
         // -- Initialize #LITEMSUMMARY --
         // ------------------------------
         LITEMSUMMARY.setCaption( "You have 0 items in your cart" );
         LITEMSUMMARY.setDisplayPosition( 2 );
         LITEMSUMMARY.setEllipses( "WORD" );
         LITEMSUMMARY.setHeight( 25 );
         LITEMSUMMARY.setLeft( 0 );
         LITEMSUMMARY.setParent( this );
         LITEMSUMMARY.setTabPosition( 2 );
         LITEMSUMMARY.setTabStop( false );
         LITEMSUMMARY.setTop( 25 );
         LITEMSUMMARY.setVerticalAlignment( "CENTER" );
         LITEMSUMMARY.setWidth( 280 );
         LITEMSUMMARY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LITEMSUMMARY.setMarginLeft( 20 );
         LITEMSUMMARY.initialize();

         // ----------------------------
         // -- Initialize #LITEMTOTAL --
         // ----------------------------
         LITEMTOTAL.setCaption( "Total Cost : $0.00" );
         LITEMTOTAL.setDisplayPosition( 3 );
         LITEMTOTAL.setEllipses( "WORD" );
         LITEMTOTAL.setHeight( 25 );
         LITEMTOTAL.setLeft( 0 );
         LITEMTOTAL.setParent( this );
         LITEMTOTAL.setTabPosition( 3 );
         LITEMTOTAL.setTabStop( false );
         LITEMTOTAL.setTop( 50 );
         LITEMTOTAL.setVerticalAlignment( "CENTER" );
         LITEMTOTAL.setWidth( 280 );
         LITEMTOTAL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LITEMTOTAL.setMarginLeft( 20 );
         LITEMTOTAL.initialize();

         // --------------------------------
         // -- Initialize #CONTINUEBUTTON --
         // --------------------------------
         CONTINUEBUTTON.setCaption( "Continue" );
         CONTINUEBUTTON.setDisplayPosition( 4 );
         CONTINUEBUTTON.setLeft( 13 );
         CONTINUEBUTTON.setParent( this );
         CONTINUEBUTTON.setTabPosition( 4 );
         CONTINUEBUTTON.setTop( 90 );
         CONTINUEBUTTON.setWidth( 150 );
         CONTINUEBUTTON.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BUTTONGN3WH" ) );
         CONTINUEBUTTON.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "BUTTONGN2WH" ) );
         CONTINUEBUTTON.initialize();

         // ------------------------------------
         // -- Initialize #SHOPPINGCARTBUTTON --
         // ------------------------------------
         SHOPPINGCARTBUTTON.setCaption( "Shopping Cart" );
         SHOPPINGCARTBUTTON.setDisplayPosition( 5 );
         SHOPPINGCARTBUTTON.setParent( this );
         SHOPPINGCARTBUTTON.setTabPosition( 5 );
         SHOPPINGCARTBUTTON.setTop( 90 );
         SHOPPINGCARTBUTTON.setWidth( 150 );
         SHOPPINGCARTBUTTON.setLeft( 188 );
         SHOPPINGCARTBUTTON.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BUTTONGN3WH" ) );
         SHOPPINGCARTBUTTON.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "BUTTONGN2WH" ) );
         SHOPPINGCARTBUTTON.initialize();

         // ----------------------------------
         // -- Initialize #GOTOSHOPPINGCART --
         // ----------------------------------
         GOTOSHOPPINGCART.initialize();

         // ------------------------
         // -- Initialize #CARTID --
         // ------------------------
         CARTID.applyDefault();
         CARTID.initialize();

         // --------------------------------------------
         // -- Add Event Handlers for #CONTINUEBUTTON --
         // --------------------------------------------
         CONTINUEBUTTON.addEventHandler( "CLICK", this, evtRoutine1 );

         // ------------------------------------------------
         // -- Add Event Handlers for #SHOPPINGCARTBUTTON --
         // ------------------------------------------------
         SHOPPINGCARTBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 137 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setWidth( 353 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDWHITE" ) );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #ContinueButton.Click
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ContinueButton.Click", 41 );

      //
      // EVTROUTINE Handling(#ContinueButton.Click)
      //
      rtn.Line( 41 );
      {

         //
         // SIGNAL Event(Continue)
         //
         rtn.Line( 43 );
         this.fireEvent( "CONTINUE" );

         //
         // #com_owner.ClosePopup
         //
         rtn.Line( 45 );
         this.mthCLOSEPOPUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 47 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ShoppingCartButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ShoppingCartButton.Click", 49 );

      //
      // EVTROUTINE Handling(#ShoppingCartButton.Click)
      //
      rtn.Line( 49 );
      {

         //
         // #GotoShoppingCart.execute
         //
         rtn.Line( 51 );
         ref.GOTOSHOPPINGCART.mthEXECUTE( {  }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 53 );
      rtn.end();
   };

   //
   // mthADDITEMTOCART - AddItemtoCart
   //
   COM_OWNER.mthADDITEMTOCART = function( parm_PRODUCTID )
   {
      var fld = this.FLD.XSSHPSM1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddItemtoCart", 55 );

      //
      // DEFINE_MAP For(*input) Class(#XSProductID) Name(#ProductID)
      //
      var PRODUCTID = rtn.createFieldParameter( "PRODUCTID", Fields.XSPRDID.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      PRODUCTID.set( parm_PRODUCTID );

      //
      // DEFINE_COM Class(#XSServer.AddToCart) Name(#AddtoCart)
      //
      var ADDTOCART = rtn.createDataRequest( "ADDTOCART", "XSSERVER", "ADDTOCART" );

      // ---------------------------
      // -- Initialize #ADDTOCART --
      // ---------------------------
      ADDTOCART.initialize();

      // ---------------------------------------
      // -- Add Event Handlers for #ADDTOCART --
      // ---------------------------------------
      ADDTOCART.addEventHandler( "COMPLETED", this, evtRoutine3 );

      //
      // MTHROUTINE Name(AddItemtoCart)
      //
      rtn.Line( 55 );
      {

         //
         // #XSAccountEmail := #MySession.RestoreLocalValue( Email )
         //
         rtn.Line( 60 );
         fld.XSACCEML.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "EMAIL" ) );

         //
         // #Cartid #XSCartID := #MySession.RestoreLocalValue( CartID )
         //
         rtn.Line( 62 );
         ref.CARTID.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "CARTID" ) );
         fld.XSCRTID.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "CARTID" ) );

         //
         // #AddtoCart.ExecuteAsync( #XSCartID #XSAccountEmail #ProductID #XSCartTotalQuantity #XSCartTotalPrice #XSstatus )
         //
         rtn.Line( 65 );
         ADDTOCART.mthEXECUTEASYNC( { FLD: { "XSCRTID": fld.XSCRTID.get(), "XSACCEML": fld.XSACCEML.get(), "XSPRDID": PRODUCTID.get() } }, { FLD: { "XSCRTID": fld.XSCRTID, "XSCRTQTY": fld.XSCRTQTY, "XSCRTPRC": fld.XSCRTPRC, "XSSTATUS": fld.XSSTATUS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 84 );
      rtn.end();

      //
      // evtRoutine3 - #AddtoCart.completed
      //
      function evtRoutine3( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddtoCart.completed", 67 );

         //
         // EVTROUTINE Handling(#AddtoCart.completed)
         //
         rtn.Line( 67 );
         {

            //
            // #LItemSummary := 'You have ' + #XSCartTotalQuantity.asstring + ' items in your cart'
            //
            rtn.Line( 69 );
            ref.LITEMSUMMARY.set( Lansa.cat( Lansa.cat( "You have ", Lansa.Number.AsString( fld.XSCRTQTY.get() ) ), " items in your cart" ) );

            //
            // #LItemTotal := 'Total Cost : $' + #XSCartTotalPrice.asstring
            //
            rtn.Line( 70 );
            ref.LITEMTOTAL.set( Lansa.cat( "Total Cost : $", Lansa.Number.AsString( fld.XSCRTPRC.get() ) ) );

            //
            // IF (#Cartid = *blank)
            //
            rtn.Line( 73 );
            if ( Lansa.String.eq( ref.CARTID.get(), "" ) )
            {

               //
               // #MySession.SaveLocalValue( CartID #XSCartID )
               //
               rtn.Line( 75 );
               ref.MYSESSION.ref.mthSAVELOCALVALUE( "CARTID", fld.XSCRTID.get() );

            //
            // ENDIF 
            //
            }

            //
            // #MySession.pCartQuantity := #XSCartTotalQuantity
            //
            rtn.Line( 79 );
            ref.MYSESSION.ref.setPCARTQUANTITY( fld.XSCRTQTY.get() );

            //
            // #MySession.pCartPrice := #XSCartTotalPrice
            //
            rtn.Line( 80 );
            ref.MYSESSION.ref.setPCARTPRICE( fld.XSCRTPRC.get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 82 );
         rtn.end();
      }
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ----------------------------
   // -- XSCRTID Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTID );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTID.DataClass, an: "PRIM_FLD", fn: "XSCRTID" } );
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
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PPNL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_PHBN", "PRIM_WEB.WebPageRequest", "PRIM_FLD", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xsshpsm1.js
