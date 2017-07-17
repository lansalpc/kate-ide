// -------------------------
// -- Web Page: XSTEMPLAT --
// -------------------------
LANSA.addComponent(
{
   id: "XSTEMPLAT", 
   nm: "XSTemplates", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Web Site Templates", 
   tl: 14010000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "xstmpl1a.png" );
   var resource2 = Lansa.createBitmap( "xstmpl1b.png" );
   var resource3 = Lansa.createBitmap( "xstmpl2a.png" );
   var resource4 = Lansa.createBitmap( "xstmpl2b.png" );

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 

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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Bold(True) Fontsize(28) Foregroundbrush(#Brush1)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(Theme500)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style2) Fontsize(24)
         //
         var STYLE2 = this.createReference( "STYLE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(2) Maxwidth(585) Minwidth(400)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1) Width(2) Maxwidth(585) Minwidth(400)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(4) Parent(#TableLayout1)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Units(Pixels) Height(100)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(300) Units(Pixels)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1) Units(Pixels) Height(80)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(4) Parent(#TableLayout1) Height(300) Units(Pixels)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(5) Parent(#TableLayout1) Height(80) Units(Pixels)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(6) Parent(#TableLayout1)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Column(#Column2) Manage(#Panel1) Parent(#TableLayout1) Row(#Row2)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column3) Manage(#Panel2) Parent(#TableLayout1) Row(#Row2)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#DetailSite1) Parent(#TableLayout1) Row(#Row3) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#RunSite1) Parent(#TableLayout1) Row(#Row3) Sizing(None) Marginleft(50)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#DetailSite2) Parent(#TableLayout1) Row(#Row3) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#RunSite2) Parent(#TableLayout1) Row(#Row3) Sizing(None) Marginleft(50)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Column(#Column2) Flow(Down) Manage(#Label1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Columnspan(2)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Column(#Column2) Manage(#Panel3) Parent(#TableLayout1) Row(#Row3)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Column(#Column3) Manage(#Panel4) Parent(#TableLayout1) Row(#Row3)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Column(#Column1) Manage(#Panel5) Parent(#TableLayout1) Row(#Row2) Rowspan(2) Columnspan(4)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image1Item1) Column(#Column5) Manage(#Image1) Parent(#TableLayout2) Row(#Row4) Margintop(10) Marginbottom(10) Marginleft(10) Marginright(10)
         //
         var IMAGE1ITEM1 = this.createReference( "IMAGE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image2Item1) Column(#Column5) Manage(#Image2) Parent(#TableLayout2) Row(#Row4) Margintop(15) Marginbottom(15) Marginleft(15) Marginright(15)
         //
         var IMAGE2ITEM1 = this.createReference( "IMAGE2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout3)
         //
         var TABLELAYOUT3 = this.createReference( "TABLELAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(1) Parent(#TableLayout3)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(1) Parent(#TableLayout3)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image3Item1) Alignment(TopCenter) Column(#Column6) Manage(#Image3) Parent(#TableLayout3) Row(#Row5) Margintop(10) Marginbottom(10) Marginleft(10) Marginright(10)
         //
         var IMAGE3ITEM1 = this.createReference( "IMAGE3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image4Item1) Alignment(TopCenter) Column(#Column6) Manage(#Image4) Parent(#TableLayout3) Row(#Row5) Margintop(15) Marginbottom(15) Marginleft(15) Marginright(15)
         //
         var IMAGE4ITEM1 = this.createReference( "IMAGE4ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout4)
         //
         var TABLELAYOUT4 = this.createReference( "TABLELAYOUT4", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) Displayposition(1) Parent(#TableLayout4)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) Displayposition(2) Parent(#TableLayout4)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(1) Parent(#TableLayout4)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DetailSite1Item1) Alignment(TopLeft) Column(#Column8) Manage(#DetailSite1) Parent(#TableLayout4) Row(#Row9) Sizing(None) Marginleft(5)
         //
         var DETAILSITE1ITEM1 = this.createReference( "DETAILSITE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#RunSite1Item1) Alignment(TopRight) Column(#Column7) Manage(#RunSite1) Parent(#TableLayout4) Row(#Row9) Sizing(None) Marginright(5)
         //
         var RUNSITE1ITEM1 = this.createReference( "RUNSITE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout5)
         //
         var TABLELAYOUT5 = this.createReference( "TABLELAYOUT5", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) Displayposition(1) Parent(#TableLayout5)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column10) Displayposition(2) Parent(#TableLayout5)
         //
         var COLUMN10 = this.createReference( "COLUMN10", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row10) Displayposition(1) Parent(#TableLayout5)
         //
         var ROW10 = this.createReference( "ROW10", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DetailSite2Item1) Column(#Column10) Manage(#DetailSite2) Parent(#TableLayout5) Sizing(None) Alignment(TopLeft) Marginleft(5) Row(#Row10)
         //
         var DETAILSITE2ITEM1 = this.createReference( "DETAILSITE2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#RunSite2Item1) Column(#Column9) Manage(#RunSite2) Parent(#TableLayout5) Sizing(None) Alignment(TopRight) Marginright(5) Row(#Row10)
         //
         var RUNSITE2ITEM1 = this.createReference( "RUNSITE2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(1) Left(200) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Height(300) Width(400) Layoutmanager(#TableLayout2) Top(100)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image1) Displayposition(2) Image(#XSTemplate1a) Parent(#Panel1) Tabposition(1) Tabstop(False) Height(280) Width(380)
         //
         var IMAGE1 = this.createReference( "IMAGE1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image2) Displayposition(1) Image(#XSTemplate1b) Parent(#Panel1) Tabposition(2) Tabstop(False) Visible(False) Height(270) Left(15) Top(15) Width(370)
         //
         var IMAGE2 = this.createReference( "IMAGE2", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel2) Displayposition(2) Height(300) Left(600) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Width(400) Layoutmanager(#TableLayout3) Top(100)
         //
         var PANEL2 = this.createReference( "PANEL2", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image3) Displayposition(2) Image(#XSTemplate2a) Parent(#Panel2) Tabposition(1) Tabstop(False) Height(280) Width(380)
         //
         var IMAGE3 = this.createReference( "IMAGE3", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image4) Displayposition(1) Image(#XSTemplate2b) Parent(#Panel2) Tabposition(2) Tabstop(False) Visible(False) Height(270) Left(15) Top(15) Width(370)
         //
         var IMAGE4 = this.createReference( "IMAGE4", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Check out these sites made with LANSA VL-Web') Displayposition(4) Ellipses(Word) Left(200) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(25) Verticalalignment(Center) Width(800) Alignment(Center) Style(#Style2)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel3) Displayposition(3) Left(200) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(400) Height(80) Width(400) Layoutmanager(#TableLayout4)
         //
         var PANEL3 = this.createReference( "PANEL3", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#DetailSite1) Caption('More Detail') Displayposition(1) Left(205) Parent(#Panel3) Tabposition(1) Top(0) Width(120)
         //
         var DETAILSITE1 = this.createReference( "DETAILSITE1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#RunSite1) Caption('Visit the site') Displayposition(2) Left(75) Parent(#Panel3) Tabposition(2) Top(0) Width(120)
         //
         var RUNSITE1 = this.createReference( "RUNSITE1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel4) Displayposition(5) Left(600) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(400) Height(80) Width(400) Layoutmanager(#TableLayout5)
         //
         var PANEL4 = this.createReference( "PANEL4", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#DetailSite2) Caption('More Detail') Displayposition(1) Left(205) Parent(#Panel4) Tabposition(1) Top(0) Width(120)
         //
         var DETAILSITE2 = this.createReference( "DETAILSITE2", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#RunSite2) Caption('Visit the Site') Displayposition(2) Left(75) Parent(#Panel4) Tabposition(2) Top(0) Width(120)
         //
         var RUNSITE2 = this.createReference( "RUNSITE2", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel5) Displayposition(6) Height(380) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(100) Width(1200) Style(#XSTheme01<BackgroundGrey00>) Opacity(20)
         //
         var PANEL5 = this.createReference( "PANEL5", "PRIM_PANL" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBold( true );
         STYLE1.setFontSize( 28 );
         STYLE1.setForegroundBrush( BRUSH1 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEME500" );
         BRUSH1.initialize();

         // ------------------------
         // -- Initialize #STYLE2 --
         // ------------------------
         STYLE2.setFontSize( 24 );
         STYLE2.initialize();

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
         COLUMN2.setWidth( 2 );
         COLUMN2.setMaxWidth( 585 );
         COLUMN2.setMinWidth( 400 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.setWidth( 2 );
         COLUMN3.setMaxWidth( 585 );
         COLUMN3.setMinWidth( 400 );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 4 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.setUnits( "PIXELS" );
         ROW1.setHeight( 100 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( 300 );
         ROW2.setUnits( "PIXELS" );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.setUnits( "PIXELS" );
         ROW3.setHeight( 80 );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 4 );
         ROW6.setParent( TABLELAYOUT1 );
         ROW6.setHeight( 300 );
         ROW6.setUnits( "PIXELS" );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 5 );
         ROW7.setParent( TABLELAYOUT1 );
         ROW7.setHeight( 80 );
         ROW7.setUnits( "PIXELS" );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 6 );
         ROW8.setParent( TABLELAYOUT1 );
         ROW8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setColumn( COLUMN2 );
         LAYOUTITEM3.setManage( PANEL1 );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW2 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN3 );
         LAYOUTITEM1.setManage( PANEL2 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setFlow( "RIGHT" );
         LAYOUTITEM2.setManage( DETAILSITE1 );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW3 );
         LAYOUTITEM2.setSizing( "NONE" );
         LAYOUTITEM2.setMarginLeft( 10 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN2 );
         LAYOUTITEM4.setFlow( "RIGHT" );
         LAYOUTITEM4.setManage( RUNSITE1 );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW3 );
         LAYOUTITEM4.setSizing( "NONE" );
         LAYOUTITEM4.setMarginLeft( 50 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN3 );
         LAYOUTITEM5.setFlow( "RIGHT" );
         LAYOUTITEM5.setManage( DETAILSITE2 );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW3 );
         LAYOUTITEM5.setSizing( "NONE" );
         LAYOUTITEM5.setMarginLeft( 10 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN3 );
         LAYOUTITEM6.setFlow( "RIGHT" );
         LAYOUTITEM6.setManage( RUNSITE2 );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW3 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.setMarginLeft( 50 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setColumn( COLUMN2 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( LABEL1 );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW1 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.setColumnSpan( 2 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setColumn( COLUMN2 );
         LAYOUTITEM8.setManage( PANEL3 );
         LAYOUTITEM8.setParent( TABLELAYOUT1 );
         LAYOUTITEM8.setRow( ROW3 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setColumn( COLUMN3 );
         LAYOUTITEM9.setManage( PANEL4 );
         LAYOUTITEM9.setParent( TABLELAYOUT1 );
         LAYOUTITEM9.setRow( ROW3 );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setColumn( COLUMN1 );
         LAYOUTITEM10.setManage( PANEL5 );
         LAYOUTITEM10.setParent( TABLELAYOUT1 );
         LAYOUTITEM10.setRow( ROW2 );
         LAYOUTITEM10.setRowSpan( 2 );
         LAYOUTITEM10.setColumnSpan( 4 );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 1 );
         COLUMN5.setParent( TABLELAYOUT2 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 1 );
         ROW4.setParent( TABLELAYOUT2 );
         ROW4.initialize();

         // -----------------------------
         // -- Initialize #IMAGE1ITEM1 --
         // -----------------------------
         IMAGE1ITEM1.setColumn( COLUMN5 );
         IMAGE1ITEM1.setManage( IMAGE1 );
         IMAGE1ITEM1.setParent( TABLELAYOUT2 );
         IMAGE1ITEM1.setRow( ROW4 );
         IMAGE1ITEM1.setMarginTop( 10 );
         IMAGE1ITEM1.setMarginBottom( 10 );
         IMAGE1ITEM1.setMarginLeft( 10 );
         IMAGE1ITEM1.setMarginRight( 10 );
         IMAGE1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #IMAGE2ITEM1 --
         // -----------------------------
         IMAGE2ITEM1.setColumn( COLUMN5 );
         IMAGE2ITEM1.setManage( IMAGE2 );
         IMAGE2ITEM1.setParent( TABLELAYOUT2 );
         IMAGE2ITEM1.setRow( ROW4 );
         IMAGE2ITEM1.setMarginTop( 15 );
         IMAGE2ITEM1.setMarginBottom( 15 );
         IMAGE2ITEM1.setMarginLeft( 15 );
         IMAGE2ITEM1.setMarginRight( 15 );
         IMAGE2ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT3 --
         // ------------------------------
         TABLELAYOUT3.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 1 );
         COLUMN6.setParent( TABLELAYOUT3 );
         COLUMN6.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 1 );
         ROW5.setParent( TABLELAYOUT3 );
         ROW5.initialize();

         // -----------------------------
         // -- Initialize #IMAGE3ITEM1 --
         // -----------------------------
         IMAGE3ITEM1.setAlignment( "TOPCENTER" );
         IMAGE3ITEM1.setColumn( COLUMN6 );
         IMAGE3ITEM1.setManage( IMAGE3 );
         IMAGE3ITEM1.setParent( TABLELAYOUT3 );
         IMAGE3ITEM1.setRow( ROW5 );
         IMAGE3ITEM1.setMarginTop( 10 );
         IMAGE3ITEM1.setMarginBottom( 10 );
         IMAGE3ITEM1.setMarginLeft( 10 );
         IMAGE3ITEM1.setMarginRight( 10 );
         IMAGE3ITEM1.initialize();

         // -----------------------------
         // -- Initialize #IMAGE4ITEM1 --
         // -----------------------------
         IMAGE4ITEM1.setAlignment( "TOPCENTER" );
         IMAGE4ITEM1.setColumn( COLUMN6 );
         IMAGE4ITEM1.setManage( IMAGE4 );
         IMAGE4ITEM1.setParent( TABLELAYOUT3 );
         IMAGE4ITEM1.setRow( ROW5 );
         IMAGE4ITEM1.setMarginTop( 15 );
         IMAGE4ITEM1.setMarginBottom( 15 );
         IMAGE4ITEM1.setMarginLeft( 15 );
         IMAGE4ITEM1.setMarginRight( 15 );
         IMAGE4ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT4 --
         // ------------------------------
         TABLELAYOUT4.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 1 );
         COLUMN7.setParent( TABLELAYOUT4 );
         COLUMN7.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 2 );
         COLUMN8.setParent( TABLELAYOUT4 );
         COLUMN8.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 1 );
         ROW9.setParent( TABLELAYOUT4 );
         ROW9.initialize();

         // ----------------------------------
         // -- Initialize #DETAILSITE1ITEM1 --
         // ----------------------------------
         DETAILSITE1ITEM1.setAlignment( "TOPLEFT" );
         DETAILSITE1ITEM1.setColumn( COLUMN8 );
         DETAILSITE1ITEM1.setManage( DETAILSITE1 );
         DETAILSITE1ITEM1.setParent( TABLELAYOUT4 );
         DETAILSITE1ITEM1.setRow( ROW9 );
         DETAILSITE1ITEM1.setSizing( "NONE" );
         DETAILSITE1ITEM1.setMarginLeft( 5 );
         DETAILSITE1ITEM1.initialize();

         // -------------------------------
         // -- Initialize #RUNSITE1ITEM1 --
         // -------------------------------
         RUNSITE1ITEM1.setAlignment( "TOPRIGHT" );
         RUNSITE1ITEM1.setColumn( COLUMN7 );
         RUNSITE1ITEM1.setManage( RUNSITE1 );
         RUNSITE1ITEM1.setParent( TABLELAYOUT4 );
         RUNSITE1ITEM1.setRow( ROW9 );
         RUNSITE1ITEM1.setSizing( "NONE" );
         RUNSITE1ITEM1.setMarginRight( 5 );
         RUNSITE1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT5 --
         // ------------------------------
         TABLELAYOUT5.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 1 );
         COLUMN9.setParent( TABLELAYOUT5 );
         COLUMN9.initialize();

         // --------------------------
         // -- Initialize #COLUMN10 --
         // --------------------------
         COLUMN10.setDisplayPosition( 2 );
         COLUMN10.setParent( TABLELAYOUT5 );
         COLUMN10.initialize();

         // -----------------------
         // -- Initialize #ROW10 --
         // -----------------------
         ROW10.setDisplayPosition( 1 );
         ROW10.setParent( TABLELAYOUT5 );
         ROW10.initialize();

         // ----------------------------------
         // -- Initialize #DETAILSITE2ITEM1 --
         // ----------------------------------
         DETAILSITE2ITEM1.setColumn( COLUMN10 );
         DETAILSITE2ITEM1.setManage( DETAILSITE2 );
         DETAILSITE2ITEM1.setParent( TABLELAYOUT5 );
         DETAILSITE2ITEM1.setSizing( "NONE" );
         DETAILSITE2ITEM1.setAlignment( "TOPLEFT" );
         DETAILSITE2ITEM1.setMarginLeft( 5 );
         DETAILSITE2ITEM1.setRow( ROW10 );
         DETAILSITE2ITEM1.initialize();

         // -------------------------------
         // -- Initialize #RUNSITE2ITEM1 --
         // -------------------------------
         RUNSITE2ITEM1.setColumn( COLUMN9 );
         RUNSITE2ITEM1.setManage( RUNSITE2 );
         RUNSITE2ITEM1.setParent( TABLELAYOUT5 );
         RUNSITE2ITEM1.setSizing( "NONE" );
         RUNSITE2ITEM1.setAlignment( "TOPRIGHT" );
         RUNSITE2ITEM1.setMarginRight( 5 );
         RUNSITE2ITEM1.setRow( ROW10 );
         RUNSITE2ITEM1.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 1 );
         PANEL1.setLeft( 200 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 1 );
         PANEL1.setTabStop( false );
         PANEL1.setHeight( 300 );
         PANEL1.setWidth( 400 );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.setTop( 100 );
         PANEL1.initialize();

         // ------------------------
         // -- Initialize #IMAGE1 --
         // ------------------------
         IMAGE1.setDisplayPosition( 2 );
         IMAGE1.setImage( resource1 );
         IMAGE1.setParent( PANEL1 );
         IMAGE1.setTabPosition( 1 );
         IMAGE1.setTabStop( false );
         IMAGE1.setHeight( 280 );
         IMAGE1.setWidth( 380 );
         IMAGE1.initialize();

         // ------------------------
         // -- Initialize #IMAGE2 --
         // ------------------------
         IMAGE2.setDisplayPosition( 1 );
         IMAGE2.setImage( resource2 );
         IMAGE2.setParent( PANEL1 );
         IMAGE2.setTabPosition( 2 );
         IMAGE2.setTabStop( false );
         IMAGE2.setVisible( false );
         IMAGE2.setHeight( 270 );
         IMAGE2.setLeft( 15 );
         IMAGE2.setTop( 15 );
         IMAGE2.setWidth( 370 );
         IMAGE2.initialize();

         // ------------------------
         // -- Initialize #PANEL2 --
         // ------------------------
         PANEL2.setDisplayPosition( 2 );
         PANEL2.setHeight( 300 );
         PANEL2.setLeft( 600 );
         PANEL2.setParent( this );
         PANEL2.setTabPosition( 2 );
         PANEL2.setTabStop( false );
         PANEL2.setWidth( 400 );
         PANEL2.setLayoutManager( TABLELAYOUT3 );
         PANEL2.setTop( 100 );
         PANEL2.initialize();

         // ------------------------
         // -- Initialize #IMAGE3 --
         // ------------------------
         IMAGE3.setDisplayPosition( 2 );
         IMAGE3.setImage( resource3 );
         IMAGE3.setParent( PANEL2 );
         IMAGE3.setTabPosition( 1 );
         IMAGE3.setTabStop( false );
         IMAGE3.setHeight( 280 );
         IMAGE3.setWidth( 380 );
         IMAGE3.initialize();

         // ------------------------
         // -- Initialize #IMAGE4 --
         // ------------------------
         IMAGE4.setDisplayPosition( 1 );
         IMAGE4.setImage( resource4 );
         IMAGE4.setParent( PANEL2 );
         IMAGE4.setTabPosition( 2 );
         IMAGE4.setTabStop( false );
         IMAGE4.setVisible( false );
         IMAGE4.setHeight( 270 );
         IMAGE4.setLeft( 15 );
         IMAGE4.setTop( 15 );
         IMAGE4.setWidth( 370 );
         IMAGE4.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Check out these sites made with LANSA VL-Web" );
         LABEL1.setDisplayPosition( 4 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setLeft( 200 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 4 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 25 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 800 );
         LABEL1.setAlignment( "CENTER" );
         LABEL1.setStyle( STYLE2 );
         LABEL1.initialize();

         // ------------------------
         // -- Initialize #PANEL3 --
         // ------------------------
         PANEL3.setDisplayPosition( 3 );
         PANEL3.setLeft( 200 );
         PANEL3.setParent( this );
         PANEL3.setTabPosition( 3 );
         PANEL3.setTabStop( false );
         PANEL3.setTop( 400 );
         PANEL3.setHeight( 80 );
         PANEL3.setWidth( 400 );
         PANEL3.setLayoutManager( TABLELAYOUT4 );
         PANEL3.initialize();

         // -----------------------------
         // -- Initialize #DETAILSITE1 --
         // -----------------------------
         DETAILSITE1.setCaption( "More Detail" );
         DETAILSITE1.setDisplayPosition( 1 );
         DETAILSITE1.setLeft( 205 );
         DETAILSITE1.setParent( PANEL3 );
         DETAILSITE1.setTabPosition( 1 );
         DETAILSITE1.setTop( 0 );
         DETAILSITE1.setWidth( 120 );
         DETAILSITE1.initialize();

         // --------------------------
         // -- Initialize #RUNSITE1 --
         // --------------------------
         RUNSITE1.setCaption( "Visit the site" );
         RUNSITE1.setDisplayPosition( 2 );
         RUNSITE1.setLeft( 75 );
         RUNSITE1.setParent( PANEL3 );
         RUNSITE1.setTabPosition( 2 );
         RUNSITE1.setTop( 0 );
         RUNSITE1.setWidth( 120 );
         RUNSITE1.initialize();

         // ------------------------
         // -- Initialize #PANEL4 --
         // ------------------------
         PANEL4.setDisplayPosition( 5 );
         PANEL4.setLeft( 600 );
         PANEL4.setParent( this );
         PANEL4.setTabPosition( 5 );
         PANEL4.setTabStop( false );
         PANEL4.setTop( 400 );
         PANEL4.setHeight( 80 );
         PANEL4.setWidth( 400 );
         PANEL4.setLayoutManager( TABLELAYOUT5 );
         PANEL4.initialize();

         // -----------------------------
         // -- Initialize #DETAILSITE2 --
         // -----------------------------
         DETAILSITE2.setCaption( "More Detail" );
         DETAILSITE2.setDisplayPosition( 1 );
         DETAILSITE2.setLeft( 205 );
         DETAILSITE2.setParent( PANEL4 );
         DETAILSITE2.setTabPosition( 1 );
         DETAILSITE2.setTop( 0 );
         DETAILSITE2.setWidth( 120 );
         DETAILSITE2.initialize();

         // --------------------------
         // -- Initialize #RUNSITE2 --
         // --------------------------
         RUNSITE2.setCaption( "Visit the Site" );
         RUNSITE2.setDisplayPosition( 2 );
         RUNSITE2.setLeft( 75 );
         RUNSITE2.setParent( PANEL4 );
         RUNSITE2.setTabPosition( 2 );
         RUNSITE2.setTop( 0 );
         RUNSITE2.setWidth( 120 );
         RUNSITE2.initialize();

         // ------------------------
         // -- Initialize #PANEL5 --
         // ------------------------
         PANEL5.setDisplayPosition( 6 );
         PANEL5.setHeight( 380 );
         PANEL5.setLeft( 0 );
         PANEL5.setParent( this );
         PANEL5.setTabPosition( 6 );
         PANEL5.setTabStop( false );
         PANEL5.setTop( 100 );
         PANEL5.setWidth( 1200 );
         PANEL5.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREY00" ) );
         PANEL5.setOpacity( 20 );
         PANEL5.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #PANEL1 --
         // ------------------------------------
         PANEL1.addEventHandler( "MOUSEENTER", this, evtRoutine2 );
         PANEL1.addEventHandler( "MOUSELEAVE", this, evtRoutine3 );

         // ------------------------------------
         // -- Add Event Handlers for #PANEL2 --
         // ------------------------------------
         PANEL2.addEventHandler( "MOUSEENTER", this, evtRoutine4 );
         PANEL2.addEventHandler( "MOUSELEAVE", this, evtRoutine5 );

         // -----------------------------------------
         // -- Add Event Handlers for #DETAILSITE1 --
         // -----------------------------------------
         DETAILSITE1.addEventHandler( "CLICK", this, evtRoutine7 );

         // --------------------------------------
         // -- Add Event Handlers for #RUNSITE1 --
         // --------------------------------------
         RUNSITE1.addEventHandler( "CLICK", this, evtRoutine6 );

         // -----------------------------------------
         // -- Add Event Handlers for #DETAILSITE2 --
         // -----------------------------------------
         DETAILSITE2.addEventHandler( "CLICK", this, evtRoutine9 );

         // --------------------------------------
         // -- Add Event Handlers for #RUNSITE2 --
         // --------------------------------------
         RUNSITE2.addEventHandler( "CLICK", this, evtRoutine8 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( TABLELAYOUT1 );
         this.setTheme( Lansa.getTheme( "XSTHEME01" ) );

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
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 79 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 79 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 81 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Panel1.MouseEnter
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Panel1.MouseEnter", 83 );

      //
      // EVTROUTINE Handling(#Panel1.MouseEnter)
      //
      rtn.Line( 83 );
      {

         //
         // #Image1.visible := false
         //
         rtn.Line( 85 );
         ref.IMAGE1.setVisible( false );

         //
         // #Image2.visible := true
         //
         rtn.Line( 86 );
         ref.IMAGE2.setVisible( true );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 88 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Panel1.MouseLeave
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Panel1.MouseLeave", 90 );

      //
      // EVTROUTINE Handling(#Panel1.MouseLeave)
      //
      rtn.Line( 90 );
      {

         //
         // #Image1.visible := true
         //
         rtn.Line( 92 );
         ref.IMAGE1.setVisible( true );

         //
         // #Image2.visible := false
         //
         rtn.Line( 93 );
         ref.IMAGE2.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Panel2.MouseEnter
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Panel2.MouseEnter", 97 );

      //
      // EVTROUTINE Handling(#Panel2.MouseEnter)
      //
      rtn.Line( 97 );
      {

         //
         // #Image3.visible := false
         //
         rtn.Line( 99 );
         ref.IMAGE3.setVisible( false );

         //
         // #Image4.visible := true
         //
         rtn.Line( 100 );
         ref.IMAGE4.setVisible( true );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 102 );
      rtn.end();
   };

   //
   // evtRoutine5 - #Panel2.MouseLeave
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Panel2.MouseLeave", 104 );

      //
      // EVTROUTINE Handling(#Panel2.MouseLeave)
      //
      rtn.Line( 104 );
      {

         //
         // #Image3.visible := true
         //
         rtn.Line( 106 );
         ref.IMAGE3.setVisible( true );

         //
         // #Image4.visible := false
         //
         rtn.Line( 107 );
         ref.IMAGE4.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 109 );
      rtn.end();
   };

   //
   // evtRoutine6 - #RunSite1.Click
   //
   function evtRoutine6( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#RunSite1.Click", 111 );

      //
      // EVTROUTINE Handling(#RunSite1.Click)
      //
      rtn.Line( 111 );
      {

         //
         // #sys_web.Navigate( "http://katew7:2013/tipalone/qax/xshome.html?lang=eng&cache=yes" New )
         //
         rtn.Line( 113 );
         Lansa.WEB().mthNAVIGATE( "http://katew7:2013/tipalone/qax/xshome.html?lang=eng&cache=yes", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 115 );
      rtn.end();
   };

   //
   // evtRoutine7 - #DetailSite1.Click
   //
   function evtRoutine7( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DetailSite1.Click", 117 );

      //
      // EVTROUTINE Handling(#DetailSite1.Click)
      //
      rtn.Line( 117 );
      {

         //
         // #sys_web.Navigate( "http://katew7:2013/tipalone/qax/xstestiho.html?lang=eng&cache=yes" New )
         //
         rtn.Line( 119 );
         Lansa.WEB().mthNAVIGATE( "http://katew7:2013/tipalone/qax/xstestiho.html?lang=eng&cache=yes", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 121 );
      rtn.end();
   };

   //
   // evtRoutine8 - #RunSite2.Click
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#RunSite2.Click", 123 );

      //
      // EVTROUTINE Handling(#RunSite2.Click)
      //
      rtn.Line( 123 );
      {

         //
         // #sys_web.Navigate( "http://katew7:2013/tipalone/qax/wptheme06.html?lang=eng&cache=yes" New )
         //
         rtn.Line( 125 );
         Lansa.WEB().mthNAVIGATE( "http://katew7:2013/tipalone/qax/wptheme06.html?lang=eng&cache=yes", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 127 );
      rtn.end();
   };

   //
   // evtRoutine9 - #DetailSite2.Click
   //
   function evtRoutine9( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DetailSite2.Click", 129 );

      //
      // EVTROUTINE Handling(#DetailSite2.Click)
      //
      rtn.Line( 129 );
      {

         //
         // #sys_web.Navigate( "http://katew7:2013/tipalone/qax/xstestiho.html?lang=eng&cache=yes" New )
         //
         rtn.Line( 131 );
         Lansa.WEB().mthNAVIGATE( "http://katew7:2013/tipalone/qax/xstestiho.html?lang=eng&cache=yes", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 133 );
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
   rc: [ "XSTHEME01" ],
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_PANL", "PRIM_IMAG", "PRIM_LABL", "PRIM_PHBN" ]
});

//# sourceURL=xstemplat.js
