// -----------------------------
// -- Reusable Part: XSSRVCE1 --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSRVCE1", 
   nm: "XSServices", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Services", 
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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#XSInstore) Parent(#TableLayout1) Row(#Row1) Marginright(7)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#XSEmail) Parent(#TableLayout1) Row(#Row1) Marginleft(3) Marginright(3)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column3) Manage(#XSNewsletter) Parent(#TableLayout1) Row(#Row1) Marginleft(7)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#XSInstore) Name(#XSInstore) Parent(#COM_OWNER) Tabstop(False) Width(260)
         //
         var XSINSTORE = this.createReference( "XSINSTORE", "XSINSTR" );

         //
         // DEFINE_COM Class(#XSEmail) Name(#XSEmail) Displayposition(2) Left(270) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Width(261)
         //
         var XSEMAIL = this.createReference( "XSEMAIL", "XSEMAIL" );

         //
         // DEFINE_COM Class(#XSNewsletter) Name(#XSNewsletter) Displayposition(3) Left(541) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Width(259)
         //
         var XSNEWSLETTER = this.createReference( "XSNEWSLETTER", "XSNWSLTR" );

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

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( XSINSTORE );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setMarginRight( 7 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( XSEMAIL );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setMarginLeft( 3 );
         LAYOUTITEM2.setMarginRight( 3 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN3 );
         LAYOUTITEM3.setManage( XSNEWSLETTER );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setMarginLeft( 7 );
         LAYOUTITEM3.initialize();

         // ---------------------------
         // -- Initialize #XSINSTORE --
         // ---------------------------
         XSINSTORE.setParent( this );
         XSINSTORE.setTabStop( false );
         XSINSTORE.setWidth( 260 );
         XSINSTORE.initialize();

         // -------------------------
         // -- Initialize #XSEMAIL --
         // -------------------------
         XSEMAIL.setDisplayPosition( 2 );
         XSEMAIL.setLeft( 270 );
         XSEMAIL.setParent( this );
         XSEMAIL.setTabPosition( 2 );
         XSEMAIL.setTabStop( false );
         XSEMAIL.setWidth( 261 );
         XSEMAIL.initialize();

         // ------------------------------
         // -- Initialize #XSNEWSLETTER --
         // ------------------------------
         XSNEWSLETTER.setDisplayPosition( 3 );
         XSNEWSLETTER.setLeft( 541 );
         XSNEWSLETTER.setParent( this );
         XSNEWSLETTER.setTabPosition( 3 );
         XSNEWSLETTER.setTabStop( false );
         XSNEWSLETTER.setWidth( 259 );
         XSNEWSLETTER.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 250 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 800 );
         this.setLayoutManager( TABLELAYOUT1 );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSINSTR", "XSEMAIL", "XSNWSLTR" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item" ]
});

//# sourceURL=xssrvce1.js
