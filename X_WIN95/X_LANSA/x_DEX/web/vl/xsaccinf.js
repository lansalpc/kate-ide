// -----------------------------
// -- Reusable Part: XSACCINF --
// -----------------------------
LANSA.addComponent(
{
   id: "XSACCINF", 
   nm: "XSAccountInformation", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Account Information", 
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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column1) Alignment(TopLeft) Flow(Down)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountInformation2Item1) Manage(#XSAccountInformation2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column1) Alignment(TopLeft) Flow(Down) Margintop(10)
         //
         var XSACCOUNTINFORMATION2ITEM1 = this.createReference( "XSACCOUNTINFORMATION2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Width(1000) Style(#XSTheme01<PanelBorders1>) Top(0)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCurrentSelection) Caption('MY ACCOUNT') Displayposition(1) Ellipses(Word) Height(48) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(998) Style(#XSTheme01<Text12BoldAlmostBlack>) Left(0) Marginleft(10)
         //
         var LCURRENTSELECTION = this.createReference( "LCURRENTSELECTION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountInformation2) Name(#XSAccountInformation2) Parent(#COM_OWNER) Tabstop(False) Top(60) Displayposition(2) Tabposition(2)
         //
         var XSACCOUNTINFORMATION2 = this.createReference( "XSACCOUNTINFORMATION2", "XSACCINF2" );

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

         // -----------------------------
         // -- Initialize #PANEL1ITEM1 --
         // -----------------------------
         PANEL1ITEM1.setManage( PANEL1 );
         PANEL1ITEM1.setParent( TABLELAYOUT1 );
         PANEL1ITEM1.setRow( ROW1 );
         PANEL1ITEM1.setSizing( "FITTOWIDTH" );
         PANEL1ITEM1.setColumn( COLUMN1 );
         PANEL1ITEM1.setAlignment( "TOPLEFT" );
         PANEL1ITEM1.setFlow( "DOWN" );
         PANEL1ITEM1.initialize();

         // --------------------------------------------
         // -- Initialize #XSACCOUNTINFORMATION2ITEM1 --
         // --------------------------------------------
         XSACCOUNTINFORMATION2ITEM1.setManage( XSACCOUNTINFORMATION2 );
         XSACCOUNTINFORMATION2ITEM1.setParent( TABLELAYOUT1 );
         XSACCOUNTINFORMATION2ITEM1.setRow( ROW1 );
         XSACCOUNTINFORMATION2ITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTINFORMATION2ITEM1.setColumn( COLUMN1 );
         XSACCOUNTINFORMATION2ITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTINFORMATION2ITEM1.setFlow( "DOWN" );
         XSACCOUNTINFORMATION2ITEM1.setMarginTop( 10 );
         XSACCOUNTINFORMATION2ITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setWidth( 1000 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "PANELBORDERS1" ) );
         PANEL1.setTop( 0 );
         PANEL1.initialize();

         // -----------------------------------
         // -- Initialize #LCURRENTSELECTION --
         // -----------------------------------
         LCURRENTSELECTION.setCaption( "MY ACCOUNT" );
         LCURRENTSELECTION.setDisplayPosition( 1 );
         LCURRENTSELECTION.setEllipses( "WORD" );
         LCURRENTSELECTION.setHeight( 48 );
         LCURRENTSELECTION.setParent( PANEL1 );
         LCURRENTSELECTION.setTabPosition( 1 );
         LCURRENTSELECTION.setTabStop( false );
         LCURRENTSELECTION.setTop( 0 );
         LCURRENTSELECTION.setVerticalAlignment( "CENTER" );
         LCURRENTSELECTION.setWidth( 998 );
         LCURRENTSELECTION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LCURRENTSELECTION.setLeft( 0 );
         LCURRENTSELECTION.setMarginLeft( 10 );
         LCURRENTSELECTION.initialize();

         // ---------------------------------------
         // -- Initialize #XSACCOUNTINFORMATION2 --
         // ---------------------------------------
         XSACCOUNTINFORMATION2.setParent( this );
         XSACCOUNTINFORMATION2.setTabStop( false );
         XSACCOUNTINFORMATION2.setTop( 60 );
         XSACCOUNTINFORMATION2.setDisplayPosition( 2 );
         XSACCOUNTINFORMATION2.setTabPosition( 2 );
         XSACCOUNTINFORMATION2.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 690 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1000 );
         this.setLayoutManager( TABLELAYOUT1 );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSACCINF2", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL" ]
});

//# sourceURL=xsaccinf.js
