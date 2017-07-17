// -----------------------------
// -- Reusable Part: XSSRCLOC --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSRCLOC", 
   nm: "XSLocatorSearch", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Search for a Location", 
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
         // DEFINE_COM Class(#XSSession) Name(#MySession) Scope(*Application)
         //
         var MYSESSION = this.createApplicationReference( "MYSESSION", "XSMYSSN" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Minwidth(340)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(3) Parent(#TableLayout1) Width(300) Units(Pixels)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(2) Parent(#TableLayout1) Width(300) Units(Pixels)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel1Item1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row1) Column(#Column2) Margintop(25) Marginbottom(30) Marginright(40) Marginleft(40)
         //
         var PANEL1ITEM1 = this.createReference( "PANEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#lCountry) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column1) Flow(Down) Manage(#Label1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Alignment(TopLeft) Margintop(10) Marginleft(50)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Column(#Column1) Flow(Down) Manage(#Label2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Alignment(TopLeft) Marginleft(50)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column4) Flow(Down) Manage(#Hours1) Parent(#TableLayout1) Row(#Row1) Margintop(20) Marginleft(20) Marginright(20) Sizing(FitToWidth) Alignment(TopCenter)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Hours2Item1) Column(#Column4) Manage(#Hours2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Marginright(20) Margintop(5) Alignment(TopCenter)
         //
         var HOURS2ITEM1 = this.createReference( "HOURS2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Hours3Item1) Column(#Column4) Manage(#Hours3) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Marginright(20) Margintop(5) Alignment(TopCenter)
         //
         var HOURS3ITEM1 = this.createReference( "HOURS3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Column(#Column4) Manage(#Panel2) Parent(#TableLayout1) Row(#Row1)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#lCountryItem1) Alignment(TopRight) Column(#Column3) Manage(#lCountry) Parent(#TableLayout2) Row(#Row2) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(10) Margintop(10)
         //
         var LCOUNTRYITEM1 = this.createReference( "LCOUNTRYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryItem1) Alignment(TopLeft) Column(#Column3) Parent(#TableLayout2) Row(#Row2) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(10)
         //
         var XSCOUNTRYITEM1 = this.createReference( "XSCOUNTRYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FindButtonItem1) Alignment(TopRight) Column(#Column3) Manage(#FindButton) Parent(#TableLayout2) Row(#Row2) Sizing(None) Flow(Down) Marginbottom(20) Marginright(10) Margintop(5)
         //
         var FINDBUTTONITEM1 = this.createReference( "FINDBUTTONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryItem2) Alignment(TopLeft) Column(#Column3) Parent(#TableLayout2) Row(#Row2) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(10)
         //
         var XSCOUNTRYITEM2 = this.createReference( "XSCOUNTRYITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryItem3) Alignment(TopRight) Column(#Column3) Manage(#XSCountry) Parent(#TableLayout2) Row(#Row2) Sizing(FitToWidth) Flow(Down) Marginright(10) Marginleft(10)
         //
         var XSCOUNTRYITEM3 = this.createReference( "XSCOUNTRYITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout3)
         //
         var TABLELAYOUT3 = this.createReference( "TABLELAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#TableLayout3)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(2) Parent(#TableLayout3)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout3)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(2) Parent(#TableLayout3)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(3) Parent(#TableLayout3)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(4) Parent(#TableLayout3)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(5) Parent(#TableLayout3)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Hours1Item1) Manage(#Hours1) Parent(#TableLayout3) Row(#Row4) Sizing(FitToWidth) Column(#Column5) Alignment(CenterLeft) Marginleft(20)
         //
         var HOURS1ITEM1 = this.createReference( "HOURS1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Hours2Item2) Manage(#Hours2) Parent(#TableLayout3) Row(#Row5) Sizing(FitToWidth) Column(#Column5) Alignment(CenterLeft) Marginleft(20)
         //
         var HOURS2ITEM2 = this.createReference( "HOURS2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Hours3Item2) Manage(#Hours3) Parent(#TableLayout3) Row(#Row6) Sizing(FitToWidth) Column(#Column5) Alignment(CenterLeft) Marginleft(20)
         //
         var HOURS3ITEM2 = this.createReference( "HOURS3ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(CenterRight) Column(#Column6) Flow(Down) Manage(#Hours4) Parent(#TableLayout3) Row(#Row4) Sizing(FitToWidth) Marginright(30)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(CenterRight) Column(#Column6) Flow(Down) Manage(#Hours5) Parent(#TableLayout3) Row(#Row5) Sizing(FitToWidth) Marginright(30)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(CenterRight) Column(#Column6) Flow(Down) Manage(#Hours6) Parent(#TableLayout3) Row(#Row6) Sizing(FitToWidth) Marginright(30)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(740) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(25) Height(102) Width(220) Layoutmanager(#TableLayout2) Style(#XSTheme01<BackgroundGrey00BorderWh>)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#lCountry) Caption('Country') Displayposition(1) Ellipses(Word) Height(25) Parent(#Panel1) Tabposition(1) Tabstop(False) Verticalalignment(Center) Width(197) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var LCOUNTRY = this.createReference( "LCOUNTRY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSStoreCountryDropDown) Name(#XSCountry) Displayposition(2) Parent(#Panel1) Tabposition(3) Width(197) Top(35) Left(10)
         //
         var XSCOUNTRY = this.createReference( "XSCOUNTRY", "XSSTRCTYD" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#FindButton) Caption('Find') Displayposition(3) Parent(#Panel1) Tabposition(2) Top(65) Width(124) Left(83) Themedrawstyle('ButtonLook3')
         //
         var FINDBUTTON = this.createReference( "FINDBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Store Location') Displayposition(2) Ellipses(Word) Height(105) Left(50) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Verticalalignment(Bottom) Width(350) Style(#XSTheme01<Text30BoldWh>)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label2) Caption('& Opening Hours') Displayposition(3) Ellipses(Word) Height(25) Left(50) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(115) Verticalalignment(Center) Width(350) Style(#XSTheme01<Text14BoldWh>)
         //
         var LABEL2 = this.createReference( "LABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel2) Displayposition(4) Height(157) Left(400) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(0) Width(300) Layoutmanager(#TableLayout3)
         //
         var PANEL2 = this.createReference( "PANEL2", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours1) Displayposition(1) Ellipses(Word) Height(25) Left(20) Parent(#Panel2) Tabposition(1) Tabstop(False) Verticalalignment(Center) Width(130) Style(#XSTheme01<Text10BoldWh>) Caption('<text1>') Top(36)
         //
         var HOURS1 = this.createReference( "HOURS1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours2) Displayposition(2) Ellipses(Word) Height(25) Left(20) Parent(#Panel2) Tabposition(2) Tabstop(False) Top(67) Verticalalignment(Center) Width(130) Style(#XSTheme01<Text10BoldWh>) Caption('<text2>')
         //
         var HOURS2 = this.createReference( "HOURS2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours3) Displayposition(3) Ellipses(Word) Height(25) Left(20) Parent(#Panel2) Tabposition(3) Tabstop(False) Top(98) Verticalalignment(Center) Width(130) Style(#XSTheme01<Text10BoldWh>) Caption('<text3>')
         //
         var HOURS3 = this.createReference( "HOURS3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours4) Displayposition(4) Ellipses(Word) Height(25) Left(150) Parent(#Panel2) Tabposition(4) Tabstop(False) Top(36) Verticalalignment(Center) Width(120) Caption('<text4>') Style(#XSTheme01<Text10Wh>) Alignment(Right)
         //
         var HOURS4 = this.createReference( "HOURS4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours5) Displayposition(5) Ellipses(Word) Height(25) Left(150) Parent(#Panel2) Tabposition(5) Tabstop(False) Top(67) Verticalalignment(Center) Width(120) Caption('<text5>') Style(#XSTheme01<Text10Wh>) Alignment(Right)
         //
         var HOURS5 = this.createReference( "HOURS5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Hours6) Displayposition(6) Ellipses(Word) Height(25) Left(150) Parent(#Panel2) Tabposition(6) Tabstop(False) Top(98) Verticalalignment(Center) Width(120) Caption('<text6>') Style(#XSTheme01<Text10Wh>) Alignment(Right)
         //
         var HOURS6 = this.createReference( "HOURS6", "PRIM_LABL" );

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
         COLUMN1.setMinWidth( 340 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 3 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setWidth( 300 );
         COLUMN2.setUnits( "PIXELS" );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 2 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.setWidth( 300 );
         COLUMN4.setUnits( "PIXELS" );
         COLUMN4.initialize();

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
         PANEL1ITEM1.setColumn( COLUMN2 );
         PANEL1ITEM1.setMarginTop( 25 );
         PANEL1ITEM1.setMarginBottom( 30 );
         PANEL1ITEM1.setMarginRight( 40 );
         PANEL1ITEM1.setMarginLeft( 40 );
         PANEL1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( LCOUNTRY );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( LABEL1 );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setMarginTop( 10 );
         LAYOUTITEM3.setMarginLeft( 50 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setColumn( COLUMN1 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( LABEL2 );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW1 );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setMarginLeft( 50 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN4 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setManage( HOURS1 );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setMarginTop( 20 );
         LAYOUTITEM2.setMarginLeft( 20 );
         LAYOUTITEM2.setMarginRight( 20 );
         LAYOUTITEM2.setSizing( "FITTOWIDTH" );
         LAYOUTITEM2.setAlignment( "TOPCENTER" );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #HOURS2ITEM1 --
         // -----------------------------
         HOURS2ITEM1.setColumn( COLUMN4 );
         HOURS2ITEM1.setManage( HOURS2 );
         HOURS2ITEM1.setParent( TABLELAYOUT1 );
         HOURS2ITEM1.setRow( ROW1 );
         HOURS2ITEM1.setSizing( "FITTOWIDTH" );
         HOURS2ITEM1.setFlow( "DOWN" );
         HOURS2ITEM1.setMarginLeft( 20 );
         HOURS2ITEM1.setMarginRight( 20 );
         HOURS2ITEM1.setMarginTop( 5 );
         HOURS2ITEM1.setAlignment( "TOPCENTER" );
         HOURS2ITEM1.initialize();

         // -----------------------------
         // -- Initialize #HOURS3ITEM1 --
         // -----------------------------
         HOURS3ITEM1.setColumn( COLUMN4 );
         HOURS3ITEM1.setManage( HOURS3 );
         HOURS3ITEM1.setParent( TABLELAYOUT1 );
         HOURS3ITEM1.setRow( ROW1 );
         HOURS3ITEM1.setSizing( "FITTOWIDTH" );
         HOURS3ITEM1.setFlow( "DOWN" );
         HOURS3ITEM1.setMarginLeft( 20 );
         HOURS3ITEM1.setMarginRight( 20 );
         HOURS3ITEM1.setMarginTop( 5 );
         HOURS3ITEM1.setAlignment( "TOPCENTER" );
         HOURS3ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setColumn( COLUMN4 );
         LAYOUTITEM5.setManage( PANEL2 );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.initialize();

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
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( TABLELAYOUT2 );
         ROW2.initialize();

         // -------------------------------
         // -- Initialize #LCOUNTRYITEM1 --
         // -------------------------------
         LCOUNTRYITEM1.setAlignment( "TOPRIGHT" );
         LCOUNTRYITEM1.setColumn( COLUMN3 );
         LCOUNTRYITEM1.setManage( LCOUNTRY );
         LCOUNTRYITEM1.setParent( TABLELAYOUT2 );
         LCOUNTRYITEM1.setRow( ROW2 );
         LCOUNTRYITEM1.setSizing( "FITTOWIDTH" );
         LCOUNTRYITEM1.setFlow( "DOWN" );
         LCOUNTRYITEM1.setMarginLeft( 10 );
         LCOUNTRYITEM1.setMarginRight( 10 );
         LCOUNTRYITEM1.setMarginTop( 10 );
         LCOUNTRYITEM1.initialize();

         // --------------------------------
         // -- Initialize #XSCOUNTRYITEM1 --
         // --------------------------------
         XSCOUNTRYITEM1.setAlignment( "TOPLEFT" );
         XSCOUNTRYITEM1.setColumn( COLUMN3 );
         XSCOUNTRYITEM1.setParent( TABLELAYOUT2 );
         XSCOUNTRYITEM1.setRow( ROW2 );
         XSCOUNTRYITEM1.setSizing( "FITTOWIDTH" );
         XSCOUNTRYITEM1.setFlow( "DOWN" );
         XSCOUNTRYITEM1.setMarginLeft( 10 );
         XSCOUNTRYITEM1.setMarginRight( 10 );
         XSCOUNTRYITEM1.initialize();

         // ---------------------------------
         // -- Initialize #FINDBUTTONITEM1 --
         // ---------------------------------
         FINDBUTTONITEM1.setAlignment( "TOPRIGHT" );
         FINDBUTTONITEM1.setColumn( COLUMN3 );
         FINDBUTTONITEM1.setManage( FINDBUTTON );
         FINDBUTTONITEM1.setParent( TABLELAYOUT2 );
         FINDBUTTONITEM1.setRow( ROW2 );
         FINDBUTTONITEM1.setSizing( "NONE" );
         FINDBUTTONITEM1.setFlow( "DOWN" );
         FINDBUTTONITEM1.setMarginBottom( 20 );
         FINDBUTTONITEM1.setMarginRight( 10 );
         FINDBUTTONITEM1.setMarginTop( 5 );
         FINDBUTTONITEM1.initialize();

         // --------------------------------
         // -- Initialize #XSCOUNTRYITEM2 --
         // --------------------------------
         XSCOUNTRYITEM2.setAlignment( "TOPLEFT" );
         XSCOUNTRYITEM2.setColumn( COLUMN3 );
         XSCOUNTRYITEM2.setParent( TABLELAYOUT2 );
         XSCOUNTRYITEM2.setRow( ROW2 );
         XSCOUNTRYITEM2.setSizing( "FITTOWIDTH" );
         XSCOUNTRYITEM2.setFlow( "DOWN" );
         XSCOUNTRYITEM2.setMarginLeft( 10 );
         XSCOUNTRYITEM2.setMarginRight( 10 );
         XSCOUNTRYITEM2.initialize();

         // --------------------------------
         // -- Initialize #XSCOUNTRYITEM3 --
         // --------------------------------
         XSCOUNTRYITEM3.setAlignment( "TOPRIGHT" );
         XSCOUNTRYITEM3.setColumn( COLUMN3 );
         XSCOUNTRYITEM3.setManage( XSCOUNTRY );
         XSCOUNTRYITEM3.setParent( TABLELAYOUT2 );
         XSCOUNTRYITEM3.setRow( ROW2 );
         XSCOUNTRYITEM3.setSizing( "FITTOWIDTH" );
         XSCOUNTRYITEM3.setFlow( "DOWN" );
         XSCOUNTRYITEM3.setMarginRight( 10 );
         XSCOUNTRYITEM3.setMarginLeft( 10 );
         XSCOUNTRYITEM3.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT3 --
         // ------------------------------
         TABLELAYOUT3.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 1 );
         COLUMN5.setParent( TABLELAYOUT3 );
         COLUMN5.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 2 );
         COLUMN6.setParent( TABLELAYOUT3 );
         COLUMN6.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT3 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 2 );
         ROW4.setParent( TABLELAYOUT3 );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 3 );
         ROW5.setParent( TABLELAYOUT3 );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 4 );
         ROW6.setParent( TABLELAYOUT3 );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 5 );
         ROW7.setParent( TABLELAYOUT3 );
         ROW7.initialize();

         // -----------------------------
         // -- Initialize #HOURS1ITEM1 --
         // -----------------------------
         HOURS1ITEM1.setManage( HOURS1 );
         HOURS1ITEM1.setParent( TABLELAYOUT3 );
         HOURS1ITEM1.setRow( ROW4 );
         HOURS1ITEM1.setSizing( "FITTOWIDTH" );
         HOURS1ITEM1.setColumn( COLUMN5 );
         HOURS1ITEM1.setAlignment( "CENTERLEFT" );
         HOURS1ITEM1.setMarginLeft( 20 );
         HOURS1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #HOURS2ITEM2 --
         // -----------------------------
         HOURS2ITEM2.setManage( HOURS2 );
         HOURS2ITEM2.setParent( TABLELAYOUT3 );
         HOURS2ITEM2.setRow( ROW5 );
         HOURS2ITEM2.setSizing( "FITTOWIDTH" );
         HOURS2ITEM2.setColumn( COLUMN5 );
         HOURS2ITEM2.setAlignment( "CENTERLEFT" );
         HOURS2ITEM2.setMarginLeft( 20 );
         HOURS2ITEM2.initialize();

         // -----------------------------
         // -- Initialize #HOURS3ITEM2 --
         // -----------------------------
         HOURS3ITEM2.setManage( HOURS3 );
         HOURS3ITEM2.setParent( TABLELAYOUT3 );
         HOURS3ITEM2.setRow( ROW6 );
         HOURS3ITEM2.setSizing( "FITTOWIDTH" );
         HOURS3ITEM2.setColumn( COLUMN5 );
         HOURS3ITEM2.setAlignment( "CENTERLEFT" );
         HOURS3ITEM2.setMarginLeft( 20 );
         HOURS3ITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "CENTERRIGHT" );
         LAYOUTITEM6.setColumn( COLUMN6 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( HOURS4 );
         LAYOUTITEM6.setParent( TABLELAYOUT3 );
         LAYOUTITEM6.setRow( ROW4 );
         LAYOUTITEM6.setSizing( "FITTOWIDTH" );
         LAYOUTITEM6.setMarginRight( 30 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "CENTERRIGHT" );
         LAYOUTITEM7.setColumn( COLUMN6 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( HOURS5 );
         LAYOUTITEM7.setParent( TABLELAYOUT3 );
         LAYOUTITEM7.setRow( ROW5 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.setMarginRight( 30 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "CENTERRIGHT" );
         LAYOUTITEM8.setColumn( COLUMN6 );
         LAYOUTITEM8.setFlow( "DOWN" );
         LAYOUTITEM8.setManage( HOURS6 );
         LAYOUTITEM8.setParent( TABLELAYOUT3 );
         LAYOUTITEM8.setRow( ROW6 );
         LAYOUTITEM8.setSizing( "FITTOWIDTH" );
         LAYOUTITEM8.setMarginRight( 30 );
         LAYOUTITEM8.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 740 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 25 );
         PANEL1.setHeight( 102 );
         PANEL1.setWidth( 220 );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREY00BORDERWH" ) );
         PANEL1.initialize();

         // --------------------------
         // -- Initialize #LCOUNTRY --
         // --------------------------
         LCOUNTRY.setCaption( "Country" );
         LCOUNTRY.setDisplayPosition( 1 );
         LCOUNTRY.setEllipses( "WORD" );
         LCOUNTRY.setHeight( 25 );
         LCOUNTRY.setParent( PANEL1 );
         LCOUNTRY.setTabPosition( 1 );
         LCOUNTRY.setTabStop( false );
         LCOUNTRY.setVerticalAlignment( "CENTER" );
         LCOUNTRY.setWidth( 197 );
         LCOUNTRY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         LCOUNTRY.initialize();

         // ---------------------------
         // -- Initialize #XSCOUNTRY --
         // ---------------------------
         XSCOUNTRY.setDisplayPosition( 2 );
         XSCOUNTRY.setParent( PANEL1 );
         XSCOUNTRY.setTabPosition( 3 );
         XSCOUNTRY.setWidth( 197 );
         XSCOUNTRY.setTop( 35 );
         XSCOUNTRY.setLeft( 10 );
         XSCOUNTRY.initialize();

         // ----------------------------
         // -- Initialize #FINDBUTTON --
         // ----------------------------
         FINDBUTTON.setCaption( "Find" );
         FINDBUTTON.setDisplayPosition( 3 );
         FINDBUTTON.setParent( PANEL1 );
         FINDBUTTON.setTabPosition( 2 );
         FINDBUTTON.setTop( 65 );
         FINDBUTTON.setWidth( 124 );
         FINDBUTTON.setLeft( 83 );
         FINDBUTTON.setThemeDrawStyle( "ButtonLook3" );
         FINDBUTTON.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Store Location" );
         LABEL1.setDisplayPosition( 2 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 105 );
         LABEL1.setLeft( 50 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 2 );
         LABEL1.setTabStop( false );
         LABEL1.setVerticalAlignment( "BOTTOM" );
         LABEL1.setWidth( 350 );
         LABEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT30BOLDWH" ) );
         LABEL1.initialize();

         // ------------------------
         // -- Initialize #LABEL2 --
         // ------------------------
         LABEL2.setCaption( "& Opening Hours" );
         LABEL2.setDisplayPosition( 3 );
         LABEL2.setEllipses( "WORD" );
         LABEL2.setHeight( 25 );
         LABEL2.setLeft( 50 );
         LABEL2.setParent( this );
         LABEL2.setTabPosition( 3 );
         LABEL2.setTabStop( false );
         LABEL2.setTop( 115 );
         LABEL2.setVerticalAlignment( "CENTER" );
         LABEL2.setWidth( 350 );
         LABEL2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT14BOLDWH" ) );
         LABEL2.initialize();

         // ------------------------
         // -- Initialize #PANEL2 --
         // ------------------------
         PANEL2.setDisplayPosition( 4 );
         PANEL2.setHeight( 157 );
         PANEL2.setLeft( 400 );
         PANEL2.setParent( this );
         PANEL2.setTabPosition( 4 );
         PANEL2.setTabStop( false );
         PANEL2.setTop( 0 );
         PANEL2.setWidth( 300 );
         PANEL2.setLayoutManager( TABLELAYOUT3 );
         PANEL2.initialize();

         // ------------------------
         // -- Initialize #HOURS1 --
         // ------------------------
         HOURS1.setDisplayPosition( 1 );
         HOURS1.setEllipses( "WORD" );
         HOURS1.setHeight( 25 );
         HOURS1.setLeft( 20 );
         HOURS1.setParent( PANEL2 );
         HOURS1.setTabPosition( 1 );
         HOURS1.setTabStop( false );
         HOURS1.setVerticalAlignment( "CENTER" );
         HOURS1.setWidth( 130 );
         HOURS1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDWH" ) );
         HOURS1.setCaption( "<text1>" );
         HOURS1.setTop( 36 );
         HOURS1.initialize();

         // ------------------------
         // -- Initialize #HOURS2 --
         // ------------------------
         HOURS2.setDisplayPosition( 2 );
         HOURS2.setEllipses( "WORD" );
         HOURS2.setHeight( 25 );
         HOURS2.setLeft( 20 );
         HOURS2.setParent( PANEL2 );
         HOURS2.setTabPosition( 2 );
         HOURS2.setTabStop( false );
         HOURS2.setTop( 67 );
         HOURS2.setVerticalAlignment( "CENTER" );
         HOURS2.setWidth( 130 );
         HOURS2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDWH" ) );
         HOURS2.setCaption( "<text2>" );
         HOURS2.initialize();

         // ------------------------
         // -- Initialize #HOURS3 --
         // ------------------------
         HOURS3.setDisplayPosition( 3 );
         HOURS3.setEllipses( "WORD" );
         HOURS3.setHeight( 25 );
         HOURS3.setLeft( 20 );
         HOURS3.setParent( PANEL2 );
         HOURS3.setTabPosition( 3 );
         HOURS3.setTabStop( false );
         HOURS3.setTop( 98 );
         HOURS3.setVerticalAlignment( "CENTER" );
         HOURS3.setWidth( 130 );
         HOURS3.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDWH" ) );
         HOURS3.setCaption( "<text3>" );
         HOURS3.initialize();

         // ------------------------
         // -- Initialize #HOURS4 --
         // ------------------------
         HOURS4.setDisplayPosition( 4 );
         HOURS4.setEllipses( "WORD" );
         HOURS4.setHeight( 25 );
         HOURS4.setLeft( 150 );
         HOURS4.setParent( PANEL2 );
         HOURS4.setTabPosition( 4 );
         HOURS4.setTabStop( false );
         HOURS4.setTop( 36 );
         HOURS4.setVerticalAlignment( "CENTER" );
         HOURS4.setWidth( 120 );
         HOURS4.setCaption( "<text4>" );
         HOURS4.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10WH" ) );
         HOURS4.setAlignment( "RIGHT" );
         HOURS4.initialize();

         // ------------------------
         // -- Initialize #HOURS5 --
         // ------------------------
         HOURS5.setDisplayPosition( 5 );
         HOURS5.setEllipses( "WORD" );
         HOURS5.setHeight( 25 );
         HOURS5.setLeft( 150 );
         HOURS5.setParent( PANEL2 );
         HOURS5.setTabPosition( 5 );
         HOURS5.setTabStop( false );
         HOURS5.setTop( 67 );
         HOURS5.setVerticalAlignment( "CENTER" );
         HOURS5.setWidth( 120 );
         HOURS5.setCaption( "<text5>" );
         HOURS5.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10WH" ) );
         HOURS5.setAlignment( "RIGHT" );
         HOURS5.initialize();

         // ------------------------
         // -- Initialize #HOURS6 --
         // ------------------------
         HOURS6.setDisplayPosition( 6 );
         HOURS6.setEllipses( "WORD" );
         HOURS6.setHeight( 25 );
         HOURS6.setLeft( 150 );
         HOURS6.setParent( PANEL2 );
         HOURS6.setTabPosition( 6 );
         HOURS6.setTabStop( false );
         HOURS6.setTop( 98 );
         HOURS6.setVerticalAlignment( "CENTER" );
         HOURS6.setWidth( 120 );
         HOURS6.setCaption( "<text6>" );
         HOURS6.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10WH" ) );
         HOURS6.setAlignment( "RIGHT" );
         HOURS6.initialize();

         // ----------------------------------------
         // -- Add Event Handlers for #FINDBUTTON --
         // ----------------------------------------
         FINDBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 157 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1000 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREEN3" ) );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 63 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 63 );
      {

         //
         // #Hours1 #Hours2 #Hours3 #Hours4 #Hours5 #Hours6 := ''
         //
         rtn.Line( 66 );
         ref.HOURS1.set( "" );
         ref.HOURS2.set( "" );
         ref.HOURS3.set( "" );
         ref.HOURS4.set( "" );
         ref.HOURS5.set( "" );
         ref.HOURS6.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 68 );
      rtn.end();
   };

   //
   // evtRoutine2 - #FindButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FindButton.Click", 70 );

      //
      // EVTROUTINE Handling(#FindButton.Click)
      //
      rtn.Line( 70 );
      {

         //
         // #MySession.pCountry := #XSCountry.pCurrentValue
         //
         rtn.Line( 72 );
         ref.MYSESSION.ref.setPCOUNTRY( ref.XSCOUNTRY.getPCURRENTVALUE() );

         //
         // #Hours1 := 'Monday - Friday'
         //
         rtn.Line( 75 );
         ref.HOURS1.set( "Monday - Friday" );

         //
         // #Hours2 := 'Saturday'
         //
         rtn.Line( 76 );
         ref.HOURS2.set( "Saturday" );

         //
         // #Hours3 := 'Sunday'
         //
         rtn.Line( 77 );
         ref.HOURS3.set( "Sunday" );

         //
         // CASE (#MySession.pCountry)
         //
         rtn.Line( 79 );
         {
            var value1 = ref.MYSESSION.ref.getPCOUNTRY();

            //
            // WHEN (= '')
            //
            if ( rtn.Line( 81 ), Lansa.String.eq( value1, "" ) )
            {

               //
               // #Hours1 #Hours2 #Hours3 #Hours4 #Hours5 #Hours6 := ''
               //
               rtn.Line( 83 );
               ref.HOURS1.set( "" );
               ref.HOURS2.set( "" );
               ref.HOURS3.set( "" );
               ref.HOURS4.set( "" );
               ref.HOURS5.set( "" );
               ref.HOURS6.set( "" );
            }

            //
            // WHEN (= 'Australia' = 'Netherlands' = 'United Kingdom' = 'Japan')
            //
            else if ( rtn.Line( 85 ), Lansa.or( Lansa.or( Lansa.or( Lansa.String.eq( value1, "Australia" ), Lansa.String.eq( value1, "Netherlands" ) ), Lansa.String.eq( value1, "United Kingdom" ) ), Lansa.String.eq( value1, "Japan" ) ) )
            {

               //
               // #Hours4 := '9am - 5pm'
               //
               rtn.Line( 87 );
               ref.HOURS4.set( "9am - 5pm" );

               //
               // #Hours5 := '6am - 10pm'
               //
               rtn.Line( 88 );
               ref.HOURS5.set( "6am - 10pm" );

               //
               // #Hours6 := 'Closed'
               //
               rtn.Line( 89 );
               ref.HOURS6.set( "Closed" );
            }

            //
            // WHEN (= 'Canada' = 'USA' = 'France' = 'Singapore')
            //
            else if ( rtn.Line( 91 ), Lansa.or( Lansa.or( Lansa.or( Lansa.String.eq( value1, "Canada" ), Lansa.String.eq( value1, "USA" ) ), Lansa.String.eq( value1, "France" ) ), Lansa.String.eq( value1, "Singapore" ) ) )
            {

               //
               // #Hours4 := '9am - 5pm'
               //
               rtn.Line( 93 );
               ref.HOURS4.set( "9am - 5pm" );

               //
               // #Hours5 := '6am - 10pm'
               //
               rtn.Line( 94 );
               ref.HOURS5.set( "6am - 10pm" );

               //
               // #Hours6 := '7am - 9pm'
               //
               rtn.Line( 95 );
               ref.HOURS6.set( "7am - 9pm" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 97 );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 99 );
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
   rc: [ "XSMYSSN", "XSSTRCTYD", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_PHBN" ]
});

//# sourceURL=xssrcloc.js
