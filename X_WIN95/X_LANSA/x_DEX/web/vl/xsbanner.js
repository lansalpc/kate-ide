// -----------------------------
// -- Reusable Part: XSBANNER --
// -----------------------------
LANSA.addComponent(
{
   id: "XSBANNER", 
   nm: "XSBanner", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Banner", 
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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Backgroundbrush(#Brush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(237:27:36)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(30) Units(Pixels)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Minwidth(740) Maxwidth(1170)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1) Width(30) Units(Pixels)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column1) Flow(Down) Manage(#MoveLeft) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Alignment(CenterRight)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column3) Flow(Down) Manage(#MoveRight) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Alignment(CenterLeft)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Parent(#TableLayout1) Row(#Row1) Columnspan(3)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#BannerImagesItem1) Manage(#BannerImages) Parent(#TableLayout1) Row(#Row1) Column(#Column1) Columnspan(3)
         //
         var BANNERIMAGESITEM1 = this.createReference( "BANNERIMAGESITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#MoveLeft) Caption('<') Displayposition(1) Ellipses(Word) Height(30) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(143) Verticalalignment(Center) Width(30) Style(#XSTheme01<Text30BoldWh>) Alignment(Right)
         //
         var MOVELEFT = this.createReference( "MOVELEFT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#MoveRight) Caption('>') Displayposition(2) Ellipses(Word) Height(30) Left(1140) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(143) Verticalalignment(Center) Width(30) Style(#XSTheme01<Text30BoldWh>)
         //
         var MOVERIGHT = this.createReference( "MOVERIGHT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSBannerImages) Name(#BannerImages) Displayposition(3) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Height(316) Width(1170)
         //
         var BANNERIMAGES = this.createReference( "BANNERIMAGES", "XSBANNIM" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBackgroundBrush( BRUSH1 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "237:27:36" );
         BRUSH1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.setWidth( 30 );
         COLUMN1.setUnits( "PIXELS" );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setMinWidth( 740 );
         COLUMN2.setMaxWidth( 1170 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.setWidth( 30 );
         COLUMN3.setUnits( "PIXELS" );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( MOVELEFT );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setAlignment( "CENTERRIGHT" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN3 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( MOVERIGHT );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setAlignment( "CENTERLEFT" );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setColumnSpan( 3 );
         LAYOUTITEM1.initialize();

         // -----------------------------------
         // -- Initialize #BANNERIMAGESITEM1 --
         // -----------------------------------
         BANNERIMAGESITEM1.setManage( BANNERIMAGES );
         BANNERIMAGESITEM1.setParent( TABLELAYOUT1 );
         BANNERIMAGESITEM1.setRow( ROW1 );
         BANNERIMAGESITEM1.setColumn( COLUMN1 );
         BANNERIMAGESITEM1.setColumnSpan( 3 );
         BANNERIMAGESITEM1.initialize();

         // --------------------------
         // -- Initialize #MOVELEFT --
         // --------------------------
         MOVELEFT.setCaption( "<" );
         MOVELEFT.setDisplayPosition( 1 );
         MOVELEFT.setEllipses( "WORD" );
         MOVELEFT.setHeight( 30 );
         MOVELEFT.setLeft( 0 );
         MOVELEFT.setParent( this );
         MOVELEFT.setTabPosition( 1 );
         MOVELEFT.setTabStop( false );
         MOVELEFT.setTop( 143 );
         MOVELEFT.setVerticalAlignment( "CENTER" );
         MOVELEFT.setWidth( 30 );
         MOVELEFT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT30BOLDWH" ) );
         MOVELEFT.setAlignment( "RIGHT" );
         MOVELEFT.initialize();

         // ---------------------------
         // -- Initialize #MOVERIGHT --
         // ---------------------------
         MOVERIGHT.setCaption( ">" );
         MOVERIGHT.setDisplayPosition( 2 );
         MOVERIGHT.setEllipses( "WORD" );
         MOVERIGHT.setHeight( 30 );
         MOVERIGHT.setLeft( 1140 );
         MOVERIGHT.setParent( this );
         MOVERIGHT.setTabPosition( 3 );
         MOVERIGHT.setTabStop( false );
         MOVERIGHT.setTop( 143 );
         MOVERIGHT.setVerticalAlignment( "CENTER" );
         MOVERIGHT.setWidth( 30 );
         MOVERIGHT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT30BOLDWH" ) );
         MOVERIGHT.initialize();

         // ------------------------------
         // -- Initialize #BANNERIMAGES --
         // ------------------------------
         BANNERIMAGES.setDisplayPosition( 3 );
         BANNERIMAGES.setParent( this );
         BANNERIMAGES.setTabPosition( 2 );
         BANNERIMAGES.setTabStop( false );
         BANNERIMAGES.setHeight( 316 );
         BANNERIMAGES.setWidth( 1170 );
         BANNERIMAGES.initialize();

         // --------------------------------------
         // -- Add Event Handlers for #MOVELEFT --
         // --------------------------------------
         MOVELEFT.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------------------
         // -- Add Event Handlers for #MOVERIGHT --
         // ---------------------------------------
         MOVERIGHT.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 316 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1170 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( STYLE1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #MoveLeft.Click
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MoveLeft.Click", 27 );

      //
      // EVTROUTINE Handling(#MoveLeft.Click)
      //
      rtn.Line( 27 );
      {

         //
         // #BannerImages.ShowImagetoLeft
         //
         rtn.Line( 30 );
         ref.BANNERIMAGES.mthSHOWIMAGETOLEFT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      rtn.end();
   };

   //
   // evtRoutine2 - #MoveRight.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MoveRight.Click", 34 );

      //
      // EVTROUTINE Handling(#MoveRight.Click)
      //
      rtn.Line( 34 );
      {

         //
         // #BannerImages.ShowImagetoRight
         //
         rtn.Line( 37 );
         ref.BANNERIMAGES.mthSHOWIMAGETORIGHT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
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
   rc: [ "XSBANNIM", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL" ]
});

//# sourceURL=xsbanner.js
