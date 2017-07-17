// -----------------------------
// -- Reusable Part: XSFOOTER --
// -----------------------------
LANSA.addComponent(
{
   id: "XSFOOTER", 
   nm: "XSFooter", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Footer", 
   tl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "xsimage03.png" );
   var resource2 = Lansa.createBitmap( "xsfacebk.png" );
   var resource3 = Lansa.createBitmap( "xstwitter.png" );
   var resource4 = Lansa.createBitmap( "xsgooglep.png" );
   var resource5 = Lansa.createBitmap( "xslinkdin.png" );
   var resource6 = Lansa.createBitmap( "xsyoutube.png" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(4) Parent(#TableLayout1)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(5) Parent(#TableLayout1) Minwidth(200)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(7) Parent(#TableLayout1) Units(Pixels) Height(50)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(3) Parent(#TableLayout1)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(4) Parent(#TableLayout1)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(5) Parent(#TableLayout1)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(6) Parent(#TableLayout1) Height(3)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column1) Flow(Right) Manage(#ProductInformation) Parent(#TableLayout1) Row(#Row2) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column1) Flow(Right) Manage(#ToolHire) Parent(#TableLayout1) Row(#Row5) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#Column1) Flow(Right) Manage(#DIYSchedule) Parent(#TableLayout1) Row(#Row6) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column1) Flow(Right) Manage(#Label4) Parent(#TableLayout1) Row(#Row8) Sizing(None) Marginleft(10)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#MyAccount) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#Label6) Parent(#TableLayout1) Row(#Row5) Sizing(None)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#Label7) Parent(#TableLayout1) Row(#Row6) Sizing(None)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#Column2) Flow(Right) Manage(#Label7) Parent(#TableLayout1) Row(#Row8) Sizing(None)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#Label9) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#Label10) Parent(#TableLayout1) Row(#Row5) Sizing(None)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#Label11) Parent(#TableLayout1) Row(#Row6) Sizing(None)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem13) Alignment(TopLeft) Column(#Column4) Flow(Right) Manage(#AboutUs) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem14) Alignment(TopLeft) Column(#Column4) Flow(Right) Manage(#PhoneUs) Parent(#TableLayout1) Row(#Row6) Sizing(None)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem15) Alignment(TopLeft) Column(#Column4) Flow(Right) Manage(#EmailUs) Parent(#TableLayout1) Row(#Row8) Sizing(None)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem16) Alignment(TopLeft) Column(#Column1) Flow(Right) Manage(#Heading1) Parent(#TableLayout1) Row(#Row1) Sizing(None) Marginleft(10) Margintop(5)
         //
         var LAYOUTITEM16 = this.createReference( "LAYOUTITEM16", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem17) Alignment(TopLeft) Column(#Column2) Flow(Down) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var LAYOUTITEM17 = this.createReference( "LAYOUTITEM17", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem18) Alignment(TopLeft) Column(#Column3) Flow(Right) Manage(#Heading3) Parent(#TableLayout1) Row(#Row1) Sizing(None) Margintop(5)
         //
         var LAYOUTITEM18 = this.createReference( "LAYOUTITEM18", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem19) Alignment(TopLeft) Column(#Column5) Flow(Right) Manage(#Heading5) Parent(#TableLayout1) Row(#Row1) Sizing(None) Margintop(5)
         //
         var LAYOUTITEM19 = this.createReference( "LAYOUTITEM19", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Heading2Item1) Manage(#Heading2) Parent(#TableLayout1) Row(#Row1) Sizing(None) Column(#Column2) Alignment(TopLeft) Flow(Right) Margintop(5)
         //
         var HEADING2ITEM1 = this.createReference( "HEADING2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Heading4Item1) Manage(#Heading4) Parent(#TableLayout1) Row(#Row1) Sizing(None) Column(#Column4) Alignment(TopLeft) Margintop(5) Flow(Right)
         //
         var HEADING4ITEM1 = this.createReference( "HEADING4ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FindAStoreItem1) Manage(#FindAStore) Parent(#TableLayout1) Row(#Row5) Sizing(None) Column(#Column4) Alignment(TopLeft) Flow(Right)
         //
         var FINDASTOREITEM1 = this.createReference( "FINDASTOREITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Column(#Column1) Manage(#Panel1) Parent(#TableLayout1) Row(#Row7) Columnspan(5)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CopyrightItem2) Manage(#Copyright) Parent(#TableLayout1) Row(#Row9) Sizing(FitToWidth) Column(#Column1) Columnspan(5) Flow(Down)
         //
         var COPYRIGHTITEM2 = this.createReference( "COPYRIGHTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem21) Column(#Column5) Manage(#Panel2) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Alignment(TopLeft) Flow(Down) Margintop(10)
         //
         var LAYOUTITEM21 = this.createReference( "LAYOUTITEM21", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem27) Alignment(TopLeft) Column(#Column1) Flow(Right) Parent(#TableLayout1) Row(#Row2) Sizing(None)
         //
         var LAYOUTITEM27 = this.createReference( "LAYOUTITEM27", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow2Item1) Parent(#TableLayout1) Row(#Row5) Sizing(None) Column(#Column1) Flow(Right) Alignment(TopLeft)
         //
         var ARROW2ITEM1 = this.createReference( "ARROW2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow3Item1) Manage(#Arrow3) Parent(#TableLayout1) Row(#Row6) Sizing(None) Column(#Column1) Alignment(TopLeft) Flow(Right)
         //
         var ARROW3ITEM1 = this.createReference( "ARROW3ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow4Item1) Manage(#Arrow4) Parent(#TableLayout1) Row(#Row8) Sizing(None) Column(#Column1) Alignment(TopLeft) Flow(Right)
         //
         var ARROW4ITEM1 = this.createReference( "ARROW4ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow5Item1) Manage(#Arrow5) Parent(#TableLayout1) Row(#Row2) Sizing(None) Column(#Column2) Alignment(TopLeft) Flow(Right)
         //
         var ARROW5ITEM1 = this.createReference( "ARROW5ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow6Item1) Manage(#Arrow6) Parent(#TableLayout1) Row(#Row5) Sizing(None) Column(#Column2) Flow(Right) Alignment(TopLeft)
         //
         var ARROW6ITEM1 = this.createReference( "ARROW6ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow7Item1) Manage(#Arrow7) Parent(#TableLayout1) Row(#Row6) Sizing(None) Column(#Column2) Alignment(TopLeft) Flow(Right)
         //
         var ARROW7ITEM1 = this.createReference( "ARROW7ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow8Item1) Manage(#Arrow8) Parent(#TableLayout1) Row(#Row8) Sizing(None) Column(#Column2) Alignment(TopLeft) Flow(Right)
         //
         var ARROW8ITEM1 = this.createReference( "ARROW8ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow9Item1) Manage(#Arrow9) Parent(#TableLayout1) Row(#Row2) Sizing(None) Column(#Column3) Alignment(TopLeft) Flow(Right)
         //
         var ARROW9ITEM1 = this.createReference( "ARROW9ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow10Item1) Manage(#Arrow10) Parent(#TableLayout1) Row(#Row5) Sizing(None) Column(#Column3) Alignment(TopLeft) Flow(Right)
         //
         var ARROW10ITEM1 = this.createReference( "ARROW10ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow11Item1) Manage(#Arrow11) Parent(#TableLayout1) Row(#Row6) Sizing(None) Column(#Column3) Alignment(TopLeft) Flow(Right)
         //
         var ARROW11ITEM1 = this.createReference( "ARROW11ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow12Item1) Manage(#Arrow12) Parent(#TableLayout1) Row(#Row2) Sizing(None) Column(#Column4) Alignment(TopLeft) Flow(Right)
         //
         var ARROW12ITEM1 = this.createReference( "ARROW12ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow13Item1) Manage(#Arrow13) Parent(#TableLayout1) Row(#Row5) Sizing(None) Column(#Column4) Alignment(TopLeft) Flow(Right)
         //
         var ARROW13ITEM1 = this.createReference( "ARROW13ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow14Item1) Manage(#Arrow14) Parent(#TableLayout1) Row(#Row6) Sizing(None) Column(#Column4) Alignment(TopLeft) Flow(Right)
         //
         var ARROW14ITEM1 = this.createReference( "ARROW14ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow15Item1) Manage(#Arrow15) Parent(#TableLayout1) Row(#Row8) Sizing(None) Column(#Column4) Alignment(TopLeft) Flow(Right)
         //
         var ARROW15ITEM1 = this.createReference( "ARROW15ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label8Item1) Manage(#Label8) Parent(#TableLayout1) Row(#Row8) Sizing(None) Column(#Column2) Flow(Right) Alignment(TopLeft)
         //
         var LABEL8ITEM1 = this.createReference( "LABEL8ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow1Item1) Alignment(TopLeft) Column(#Column1) Manage(#Arrow1) Parent(#TableLayout1) Row(#Row2) Sizing(None) Flow(Right)
         //
         var ARROW1ITEM1 = this.createReference( "ARROW1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Arrow2Item2) Alignment(TopLeft) Column(#Column1) Manage(#Arrow2) Parent(#TableLayout1) Row(#Row5) Sizing(None) Flow(Right)
         //
         var ARROW2ITEM2 = this.createReference( "ARROW2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#AcknowledgementItem1) Manage(#Acknowledgement) Parent(#TableLayout1) Row(#Row9) Sizing(FitToWidth) Column(#Column1) Flow(Down) Columnspan(5)
         //
         var ACKNOWLEDGEMENTITEM1 = this.createReference( "ACKNOWLEDGEMENTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CopyrightItem1) Column(#Column6) Manage(#Copyright) Parent(#TableLayout2) Row(#Row3) Sizing(FitToWidth) Flow(Down) Alignment(BottomCenter)
         //
         var COPYRIGHTITEM1 = this.createReference( "COPYRIGHTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem20) Column(#Column6) Flow(Down) Manage(#Guide) Parent(#TableLayout2) Row(#Row3) Sizing(FitToWidth) Alignment(TopCenter) Margintop(5)
         //
         var LAYOUTITEM20 = this.createReference( "LAYOUTITEM20", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout3)
         //
         var TABLELAYOUT3 = this.createReference( "TABLELAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) Displayposition(1) Parent(#TableLayout3) Width(40) Units(Pixels)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) Displayposition(2) Parent(#TableLayout3) Width(40) Units(Pixels)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) Displayposition(3) Parent(#TableLayout3) Width(40) Units(Pixels)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column10) Displayposition(4) Parent(#TableLayout3) Width(40) Units(Pixels)
         //
         var COLUMN10 = this.createReference( "COLUMN10", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column11) Displayposition(5) Parent(#TableLayout3)
         //
         var COLUMN11 = this.createReference( "COLUMN11", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(1) Parent(#TableLayout3)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem22) Column(#Column7) Manage(#FaceBook) Parent(#TableLayout3) Row(#Row4) Sizing(None) Alignment(CenterLeft)
         //
         var LAYOUTITEM22 = this.createReference( "LAYOUTITEM22", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem23) Column(#Column8) Manage(#Twitter) Parent(#TableLayout3) Row(#Row4) Sizing(None) Alignment(CenterLeft)
         //
         var LAYOUTITEM23 = this.createReference( "LAYOUTITEM23", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem24) Column(#Column9) Manage(#GooglePlus) Parent(#TableLayout3) Row(#Row4) Sizing(None) Alignment(CenterLeft)
         //
         var LAYOUTITEM24 = this.createReference( "LAYOUTITEM24", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem25) Column(#Column10) Manage(#LinkedIn) Parent(#TableLayout3) Row(#Row4) Sizing(None) Alignment(CenterLeft)
         //
         var LAYOUTITEM25 = this.createReference( "LAYOUTITEM25", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem26) Column(#Column11) Manage(#YoutTUbe) Parent(#TableLayout3) Row(#Row4) Sizing(None) Alignment(CenterLeft)
         //
         var LAYOUTITEM26 = this.createReference( "LAYOUTITEM26", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Heading1) Caption('INFORMATION') Displayposition(1) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(5) Verticalalignment(Center) Width(190) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var HEADING1 = this.createReference( "HEADING1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Arrow1) Displayposition(2) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(25) Width(20) Image(#XSImage03) Imagealignment(CenterRight)
         //
         var ARROW1 = this.createReference( "ARROW1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#ProductInformation) Caption('Products') Displayposition(4) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Mouseoverstyle(#XSTheme01<Href08AlmostBlack>) Top(25) Left(30)
         //
         var PRODUCTINFORMATION = this.createReference( "PRODUCTINFORMATION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Arrow2) Displayposition(3) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(50) Width(20) Image(#XSImage03) Imagealignment(CenterRight)
         //
         var ARROW2 = this.createReference( "ARROW2", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#ToolHire) Caption('Tool Hire') Displayposition(5) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(50) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Mouseoverstyle(#XSTheme01<Href08AlmostBlack>) Left(30)
         //
         var TOOLHIRE = this.createReference( "TOOLHIRE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Arrow3) Displayposition(6) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(75) Width(20) Image(#XSImage03) Imagealignment(CenterRight)
         //
         var ARROW3 = this.createReference( "ARROW3", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#DIYSchedule) Caption('DIY Schedule') Displayposition(7) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(7) Tabstop(False) Top(75) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Mouseoverstyle(#XSTheme01<Href08AlmostBlack>) Left(30)
         //
         var DIYSCHEDULE = this.createReference( "DIYSCHEDULE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Arrow4) Displayposition(8) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(8) Tabstop(False) Top(100) Width(20) Image(#XSImage03) Imagealignment(CenterRight)
         //
         var ARROW4 = this.createReference( "ARROW4", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label4) Caption('Gift Cards') Displayposition(9) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(9) Tabstop(False) Top(100) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available') Left(30)
         //
         var LABEL4 = this.createReference( "LABEL4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Heading2) Caption('MY ACCOUNT') Displayposition(10) Ellipses(Word) Height(25) Left(234) Parent(#COM_OWNER) Tabposition(10) Tabstop(False) Top(5) Verticalalignment(Center) Width(200) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var HEADING2 = this.createReference( "HEADING2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow5) Image(#XSImage03) Displayposition(11) Ellipses(Word) Height(25) Left(234) Parent(#COM_OWNER) Tabposition(11) Tabstop(False) Top(25) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW5 = this.createReference( "ARROW5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#MyAccount) Caption('My Account') Displayposition(12) Ellipses(Word) Height(25) Left(254) Parent(#COM_OWNER) Tabposition(12) Tabstop(False) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Mouseoverstyle(#XSTheme01<Href08AlmostBlack>) Top(25)
         //
         var MYACCOUNT = this.createReference( "MYACCOUNT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow6) Image(#XSImage03) Displayposition(13) Ellipses(Word) Height(25) Left(234) Parent(#COM_OWNER) Tabposition(13) Tabstop(False) Top(50) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW6 = this.createReference( "ARROW6", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label6) Caption('Order History') Displayposition(14) Ellipses(Word) Height(25) Left(254) Parent(#COM_OWNER) Tabposition(14) Tabstop(False) Top(50) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var LABEL6 = this.createReference( "LABEL6", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow7) Image(#XSImage03) Displayposition(15) Ellipses(Word) Height(25) Left(234) Parent(#COM_OWNER) Tabposition(15) Tabstop(False) Top(75) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW7 = this.createReference( "ARROW7", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label7) Caption('Wish List') Displayposition(16) Ellipses(Word) Height(25) Left(254) Parent(#COM_OWNER) Tabposition(16) Tabstop(False) Top(75) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var LABEL7 = this.createReference( "LABEL7", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow8) Image(#XSImage03) Displayposition(17) Ellipses(Word) Height(25) Left(234) Parent(#COM_OWNER) Tabposition(17) Tabstop(False) Top(100) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW8 = this.createReference( "ARROW8", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label8) Caption('Track Deliveries') Displayposition(18) Ellipses(Word) Height(25) Left(254) Parent(#COM_OWNER) Tabposition(18) Tabstop(False) Top(100) Verticalalignment(Center) Width(150) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var LABEL8 = this.createReference( "LABEL8", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Heading3) Caption('CUSTOMER SERVICE') Displayposition(19) Ellipses(Word) Height(25) Left(468) Parent(#COM_OWNER) Tabposition(19) Tabstop(False) Top(5) Verticalalignment(Center) Width(200) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var HEADING3 = this.createReference( "HEADING3", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow9) Image(#XSImage03) Displayposition(20) Ellipses(Word) Height(25) Left(468) Parent(#COM_OWNER) Tabposition(20) Tabstop(False) Top(25) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW9 = this.createReference( "ARROW9", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label9) Caption('Returns') Displayposition(21) Ellipses(Word) Height(25) Left(488) Parent(#COM_OWNER) Tabposition(21) Tabstop(False) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available') Top(25)
         //
         var LABEL9 = this.createReference( "LABEL9", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow10) Image(#XSImage03) Displayposition(22) Ellipses(Word) Height(25) Left(468) Parent(#COM_OWNER) Tabposition(22) Tabstop(False) Top(50) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW10 = this.createReference( "ARROW10", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label10) Caption('Payments') Displayposition(23) Ellipses(Word) Height(25) Left(488) Parent(#COM_OWNER) Tabposition(23) Tabstop(False) Top(50) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var LABEL10 = this.createReference( "LABEL10", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow11) Image(#XSImage03) Displayposition(24) Ellipses(Word) Height(25) Left(468) Parent(#COM_OWNER) Tabposition(24) Tabstop(False) Top(75) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW11 = this.createReference( "ARROW11", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label11) Caption('Terms and Conditions') Displayposition(25) Ellipses(Word) Height(25) Left(488) Parent(#COM_OWNER) Tabposition(25) Tabstop(False) Top(75) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var LABEL11 = this.createReference( "LABEL11", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Heading4) Caption('ABOUT US') Displayposition(26) Ellipses(Word) Height(25) Left(702) Parent(#COM_OWNER) Tabposition(26) Tabstop(False) Top(5) Verticalalignment(Center) Width(200) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var HEADING4 = this.createReference( "HEADING4", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow12) Image(#XSImage03) Displayposition(27) Ellipses(Word) Height(25) Left(702) Parent(#COM_OWNER) Tabposition(27) Tabstop(False) Top(25) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW12 = this.createReference( "ARROW12", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#AboutUs) Caption('About Us') Displayposition(28) Ellipses(Word) Height(25) Left(722) Parent(#COM_OWNER) Tabposition(28) Tabstop(False) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>) Top(25) Hint('Not available')
         //
         var ABOUTUS = this.createReference( "ABOUTUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow13) Image(#XSImage03) Displayposition(29) Ellipses(Word) Height(25) Left(702) Parent(#COM_OWNER) Tabposition(29) Tabstop(False) Top(50) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW13 = this.createReference( "ARROW13", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#FindAStore) Caption('Find a Store') Displayposition(30) Ellipses(Word) Height(25) Left(722) Parent(#COM_OWNER) Tabposition(30) Tabstop(False) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>) Mouseoverstyle(#XSTheme01<Href08AlmostBlack>) Top(50)
         //
         var FINDASTORE = this.createReference( "FINDASTORE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow14) Image(#XSImage03) Displayposition(31) Ellipses(Word) Height(25) Left(702) Parent(#COM_OWNER) Tabposition(31) Tabstop(False) Top(75) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW14 = this.createReference( "ARROW14", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#PhoneUs) Caption('Call now 415-4757-4543') Displayposition(32) Ellipses(Word) Height(25) Left(722) Parent(#COM_OWNER) Tabposition(32) Tabstop(False) Top(75) Verticalalignment(Center) Width(170) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var PHONEUS = this.createReference( "PHONEUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Arrow15) Image(#XSImage03) Displayposition(33) Ellipses(Word) Height(25) Left(702) Parent(#COM_OWNER) Tabposition(33) Tabstop(False) Top(100) Verticalalignment(Center) Width(20) Style(#XSTheme01<Text10BoldBl3>)
         //
         var ARROW15 = this.createReference( "ARROW15", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#EmailUs) Caption('Email sales@lansatools.com') Displayposition(34) Ellipses(Word) Height(25) Left(722) Parent(#COM_OWNER) Tabposition(34) Tabstop(False) Top(100) Verticalalignment(Center) Width(180) Style(#XSTheme01<Text08AlmostBlack>) Hint('Not available')
         //
         var EMAILUS = this.createReference( "EMAILUS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Copyright) Caption('© LANSA 2015. All rights reserved.') Displayposition(35) Ellipses(Word) Height(20) Left(0) Parent(#COM_OWNER) Tabposition(35) Tabstop(False) Top(152) Verticalalignment(Center) Width(1170) Style(#XSTheme01<Text08BoldAlmostBlack>) Alignment(Center)
         //
         var COPYRIGHT = this.createReference( "COPYRIGHT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Acknowledgement) Caption('Images used under license from Shutterstock.com.') Displayposition(36) Ellipses(Word) Height(20) Left(0) Parent(#COM_OWNER) Tabposition(36) Tabstop(False) Top(172) Verticalalignment(Center) Width(1170) Style(#XSTheme01<Text08AlmostBlack>) Alignment(Center)
         //
         var ACKNOWLEDGEMENT = this.createReference( "ACKNOWLEDGEMENT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Heading5) Caption('FOLLOW US') Displayposition(37) Ellipses(Word) Height(25) Left(936) Parent(#COM_OWNER) Tabposition(37) Tabstop(False) Top(5) Verticalalignment(Center) Width(200) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var HEADING5 = this.createReference( "HEADING5", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel2) Displayposition(38) Left(936) Parent(#COM_OWNER) Tabposition(38) Tabstop(False) Top(35) Width(234) Layoutmanager(#TableLayout3)
         //
         var PANEL2 = this.createReference( "PANEL2", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#FaceBook) Displayposition(1) Height(30) Image(#XSFacebook) Left(0) Parent(#Panel2) Tabposition(1) Tabstop(False) Width(30)
         //
         var FACEBOOK = this.createReference( "FACEBOOK", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Twitter) Displayposition(2) Height(30) Image(#XSTwitter) Left(40) Parent(#Panel2) Tabposition(2) Tabstop(False) Width(30)
         //
         var TWITTER = this.createReference( "TWITTER", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#GooglePlus) Displayposition(3) Height(30) Image(#XSGooglePlus) Left(80) Parent(#Panel2) Tabposition(3) Tabstop(False) Width(30)
         //
         var GOOGLEPLUS = this.createReference( "GOOGLEPLUS", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#LinkedIn) Displayposition(4) Height(30) Image(#XSLinkedIn) Left(120) Parent(#Panel2) Tabposition(4) Tabstop(False) Width(30)
         //
         var LINKEDIN = this.createReference( "LINKEDIN", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#YoutTUbe) Displayposition(5) Height(30) Image(#XSYouTube) Left(160) Parent(#Panel2) Tabposition(5) Tabstop(False) Width(30)
         //
         var YOUTTUBE = this.createReference( "YOUTTUBE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Panel1) Displayposition(39) Left(0) Parent(#COM_OWNER) Tabposition(39) Tabstop(False) Top(199) Width(1170) Style(#XSTheme01<BackgroundWhite>) Layoutmanager(#TableLayout2)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Guide) Caption('Want to learn how to build a web application like this?') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#Panel1) Tabposition(1) Tabstop(False) Top(5) Verticalalignment(Center) Width(1170) Alignment(Center) Style(#XSTheme01<Href10Green3>)
         //
         var GUIDE = this.createReference( "GUIDE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSServer.GotoStoreLocator) Name(#GotoStoreLocator) Target(New)
         //
         var GOTOSTORELOCATOR = this.createWebPageRequest( "GOTOSTORELOCATOR", "XSSERVER", "GOTOSTORELOCATOR" );

         //
         // DEFINE_COM Class(#XSServer.GotoProducts) Name(#Products)
         //
         var PRODUCTS = this.createWebPageRequest( "PRODUCTS", "XSSERVER", "GOTOPRODUCTS" );

         //
         // DEFINE_COM Class(#XSServer.GotoMyAccount) Name(#GotoMyAccount)
         //
         var GOTOMYACCOUNT = this.createWebPageRequest( "GOTOMYACCOUNT", "XSSERVER", "GOTOMYACCOUNT" );

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

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 4 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 5 );
         COLUMN5.setParent( TABLELAYOUT1 );
         COLUMN5.setMinWidth( 200 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 7 );
         ROW7.setParent( TABLELAYOUT1 );
         ROW7.setUnits( "PIXELS" );
         ROW7.setHeight( 50 );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 3 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 4 );
         ROW6.setParent( TABLELAYOUT1 );
         ROW6.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 5 );
         ROW8.setParent( TABLELAYOUT1 );
         ROW8.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 6 );
         ROW9.setParent( TABLELAYOUT1 );
         ROW9.setHeight( 3 );
         ROW9.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setFlow( "RIGHT" );
         LAYOUTITEM1.setManage( PRODUCTINFORMATION );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.setMarginLeft( 10 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "RIGHT" );
         LAYOUTITEM2.setManage( TOOLHIRE );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW5 );
         LAYOUTITEM2.setSizing( "NONE" );
         LAYOUTITEM2.setMarginLeft( 10 );
         LAYOUTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setFlow( "RIGHT" );
         LAYOUTITEM3.setManage( DIYSCHEDULE );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW6 );
         LAYOUTITEM3.setSizing( "NONE" );
         LAYOUTITEM3.setMarginLeft( 10 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN1 );
         LAYOUTITEM4.setFlow( "RIGHT" );
         LAYOUTITEM4.setManage( LABEL4 );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW8 );
         LAYOUTITEM4.setSizing( "NONE" );
         LAYOUTITEM4.setMarginLeft( 10 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setFlow( "RIGHT" );
         LAYOUTITEM5.setManage( MYACCOUNT );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW2 );
         LAYOUTITEM5.setSizing( "NONE" );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN2 );
         LAYOUTITEM6.setFlow( "RIGHT" );
         LAYOUTITEM6.setManage( LABEL6 );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW5 );
         LAYOUTITEM6.setSizing( "NONE" );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setColumn( COLUMN2 );
         LAYOUTITEM7.setFlow( "RIGHT" );
         LAYOUTITEM7.setManage( LABEL7 );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW6 );
         LAYOUTITEM7.setSizing( "NONE" );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( COLUMN2 );
         LAYOUTITEM8.setFlow( "RIGHT" );
         LAYOUTITEM8.setManage( LABEL7 );
         LAYOUTITEM8.setParent( TABLELAYOUT1 );
         LAYOUTITEM8.setRow( ROW8 );
         LAYOUTITEM8.setSizing( "NONE" );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "TOPLEFT" );
         LAYOUTITEM9.setColumn( COLUMN3 );
         LAYOUTITEM9.setFlow( "RIGHT" );
         LAYOUTITEM9.setManage( LABEL9 );
         LAYOUTITEM9.setParent( TABLELAYOUT1 );
         LAYOUTITEM9.setRow( ROW2 );
         LAYOUTITEM9.setSizing( "NONE" );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setAlignment( "TOPLEFT" );
         LAYOUTITEM10.setColumn( COLUMN3 );
         LAYOUTITEM10.setFlow( "RIGHT" );
         LAYOUTITEM10.setManage( LABEL10 );
         LAYOUTITEM10.setParent( TABLELAYOUT1 );
         LAYOUTITEM10.setRow( ROW5 );
         LAYOUTITEM10.setSizing( "NONE" );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setAlignment( "TOPLEFT" );
         LAYOUTITEM11.setColumn( COLUMN3 );
         LAYOUTITEM11.setFlow( "RIGHT" );
         LAYOUTITEM11.setManage( LABEL11 );
         LAYOUTITEM11.setParent( TABLELAYOUT1 );
         LAYOUTITEM11.setRow( ROW6 );
         LAYOUTITEM11.setSizing( "NONE" );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setAlignment( "TOPLEFT" );
         LAYOUTITEM13.setColumn( COLUMN4 );
         LAYOUTITEM13.setFlow( "RIGHT" );
         LAYOUTITEM13.setManage( ABOUTUS );
         LAYOUTITEM13.setParent( TABLELAYOUT1 );
         LAYOUTITEM13.setRow( ROW2 );
         LAYOUTITEM13.setSizing( "NONE" );
         LAYOUTITEM13.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setAlignment( "TOPLEFT" );
         LAYOUTITEM14.setColumn( COLUMN4 );
         LAYOUTITEM14.setFlow( "RIGHT" );
         LAYOUTITEM14.setManage( PHONEUS );
         LAYOUTITEM14.setParent( TABLELAYOUT1 );
         LAYOUTITEM14.setRow( ROW6 );
         LAYOUTITEM14.setSizing( "NONE" );
         LAYOUTITEM14.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setAlignment( "TOPLEFT" );
         LAYOUTITEM15.setColumn( COLUMN4 );
         LAYOUTITEM15.setFlow( "RIGHT" );
         LAYOUTITEM15.setManage( EMAILUS );
         LAYOUTITEM15.setParent( TABLELAYOUT1 );
         LAYOUTITEM15.setRow( ROW8 );
         LAYOUTITEM15.setSizing( "NONE" );
         LAYOUTITEM15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM16 --
         // ------------------------------
         LAYOUTITEM16.setAlignment( "TOPLEFT" );
         LAYOUTITEM16.setColumn( COLUMN1 );
         LAYOUTITEM16.setFlow( "RIGHT" );
         LAYOUTITEM16.setManage( HEADING1 );
         LAYOUTITEM16.setParent( TABLELAYOUT1 );
         LAYOUTITEM16.setRow( ROW1 );
         LAYOUTITEM16.setSizing( "NONE" );
         LAYOUTITEM16.setMarginLeft( 10 );
         LAYOUTITEM16.setMarginTop( 5 );
         LAYOUTITEM16.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM17 --
         // ------------------------------
         LAYOUTITEM17.setAlignment( "TOPLEFT" );
         LAYOUTITEM17.setColumn( COLUMN2 );
         LAYOUTITEM17.setFlow( "DOWN" );
         LAYOUTITEM17.setParent( TABLELAYOUT1 );
         LAYOUTITEM17.setRow( ROW1 );
         LAYOUTITEM17.setSizing( "NONE" );
         LAYOUTITEM17.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM18 --
         // ------------------------------
         LAYOUTITEM18.setAlignment( "TOPLEFT" );
         LAYOUTITEM18.setColumn( COLUMN3 );
         LAYOUTITEM18.setFlow( "RIGHT" );
         LAYOUTITEM18.setManage( HEADING3 );
         LAYOUTITEM18.setParent( TABLELAYOUT1 );
         LAYOUTITEM18.setRow( ROW1 );
         LAYOUTITEM18.setSizing( "NONE" );
         LAYOUTITEM18.setMarginTop( 5 );
         LAYOUTITEM18.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM19 --
         // ------------------------------
         LAYOUTITEM19.setAlignment( "TOPLEFT" );
         LAYOUTITEM19.setColumn( COLUMN5 );
         LAYOUTITEM19.setFlow( "RIGHT" );
         LAYOUTITEM19.setManage( HEADING5 );
         LAYOUTITEM19.setParent( TABLELAYOUT1 );
         LAYOUTITEM19.setRow( ROW1 );
         LAYOUTITEM19.setSizing( "NONE" );
         LAYOUTITEM19.setMarginTop( 5 );
         LAYOUTITEM19.initialize();

         // -------------------------------
         // -- Initialize #HEADING2ITEM1 --
         // -------------------------------
         HEADING2ITEM1.setManage( HEADING2 );
         HEADING2ITEM1.setParent( TABLELAYOUT1 );
         HEADING2ITEM1.setRow( ROW1 );
         HEADING2ITEM1.setSizing( "NONE" );
         HEADING2ITEM1.setColumn( COLUMN2 );
         HEADING2ITEM1.setAlignment( "TOPLEFT" );
         HEADING2ITEM1.setFlow( "RIGHT" );
         HEADING2ITEM1.setMarginTop( 5 );
         HEADING2ITEM1.initialize();

         // -------------------------------
         // -- Initialize #HEADING4ITEM1 --
         // -------------------------------
         HEADING4ITEM1.setManage( HEADING4 );
         HEADING4ITEM1.setParent( TABLELAYOUT1 );
         HEADING4ITEM1.setRow( ROW1 );
         HEADING4ITEM1.setSizing( "NONE" );
         HEADING4ITEM1.setColumn( COLUMN4 );
         HEADING4ITEM1.setAlignment( "TOPLEFT" );
         HEADING4ITEM1.setMarginTop( 5 );
         HEADING4ITEM1.setFlow( "RIGHT" );
         HEADING4ITEM1.initialize();

         // ---------------------------------
         // -- Initialize #FINDASTOREITEM1 --
         // ---------------------------------
         FINDASTOREITEM1.setManage( FINDASTORE );
         FINDASTOREITEM1.setParent( TABLELAYOUT1 );
         FINDASTOREITEM1.setRow( ROW5 );
         FINDASTOREITEM1.setSizing( "NONE" );
         FINDASTOREITEM1.setColumn( COLUMN4 );
         FINDASTOREITEM1.setAlignment( "TOPLEFT" );
         FINDASTOREITEM1.setFlow( "RIGHT" );
         FINDASTOREITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setColumn( COLUMN1 );
         LAYOUTITEM12.setManage( PANEL1 );
         LAYOUTITEM12.setParent( TABLELAYOUT1 );
         LAYOUTITEM12.setRow( ROW7 );
         LAYOUTITEM12.setColumnSpan( 5 );
         LAYOUTITEM12.initialize();

         // --------------------------------
         // -- Initialize #COPYRIGHTITEM2 --
         // --------------------------------
         COPYRIGHTITEM2.setManage( COPYRIGHT );
         COPYRIGHTITEM2.setParent( TABLELAYOUT1 );
         COPYRIGHTITEM2.setRow( ROW9 );
         COPYRIGHTITEM2.setSizing( "FITTOWIDTH" );
         COPYRIGHTITEM2.setColumn( COLUMN1 );
         COPYRIGHTITEM2.setColumnSpan( 5 );
         COPYRIGHTITEM2.setFlow( "DOWN" );
         COPYRIGHTITEM2.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM21 --
         // ------------------------------
         LAYOUTITEM21.setColumn( COLUMN5 );
         LAYOUTITEM21.setManage( PANEL2 );
         LAYOUTITEM21.setParent( TABLELAYOUT1 );
         LAYOUTITEM21.setRow( ROW2 );
         LAYOUTITEM21.setSizing( "FITTOWIDTH" );
         LAYOUTITEM21.setAlignment( "TOPLEFT" );
         LAYOUTITEM21.setFlow( "DOWN" );
         LAYOUTITEM21.setMarginTop( 10 );
         LAYOUTITEM21.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM27 --
         // ------------------------------
         LAYOUTITEM27.setAlignment( "TOPLEFT" );
         LAYOUTITEM27.setColumn( COLUMN1 );
         LAYOUTITEM27.setFlow( "RIGHT" );
         LAYOUTITEM27.setParent( TABLELAYOUT1 );
         LAYOUTITEM27.setRow( ROW2 );
         LAYOUTITEM27.setSizing( "NONE" );
         LAYOUTITEM27.initialize();

         // -----------------------------
         // -- Initialize #ARROW2ITEM1 --
         // -----------------------------
         ARROW2ITEM1.setParent( TABLELAYOUT1 );
         ARROW2ITEM1.setRow( ROW5 );
         ARROW2ITEM1.setSizing( "NONE" );
         ARROW2ITEM1.setColumn( COLUMN1 );
         ARROW2ITEM1.setFlow( "RIGHT" );
         ARROW2ITEM1.setAlignment( "TOPLEFT" );
         ARROW2ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW3ITEM1 --
         // -----------------------------
         ARROW3ITEM1.setManage( ARROW3 );
         ARROW3ITEM1.setParent( TABLELAYOUT1 );
         ARROW3ITEM1.setRow( ROW6 );
         ARROW3ITEM1.setSizing( "NONE" );
         ARROW3ITEM1.setColumn( COLUMN1 );
         ARROW3ITEM1.setAlignment( "TOPLEFT" );
         ARROW3ITEM1.setFlow( "RIGHT" );
         ARROW3ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW4ITEM1 --
         // -----------------------------
         ARROW4ITEM1.setManage( ARROW4 );
         ARROW4ITEM1.setParent( TABLELAYOUT1 );
         ARROW4ITEM1.setRow( ROW8 );
         ARROW4ITEM1.setSizing( "NONE" );
         ARROW4ITEM1.setColumn( COLUMN1 );
         ARROW4ITEM1.setAlignment( "TOPLEFT" );
         ARROW4ITEM1.setFlow( "RIGHT" );
         ARROW4ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW5ITEM1 --
         // -----------------------------
         ARROW5ITEM1.setManage( ARROW5 );
         ARROW5ITEM1.setParent( TABLELAYOUT1 );
         ARROW5ITEM1.setRow( ROW2 );
         ARROW5ITEM1.setSizing( "NONE" );
         ARROW5ITEM1.setColumn( COLUMN2 );
         ARROW5ITEM1.setAlignment( "TOPLEFT" );
         ARROW5ITEM1.setFlow( "RIGHT" );
         ARROW5ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW6ITEM1 --
         // -----------------------------
         ARROW6ITEM1.setManage( ARROW6 );
         ARROW6ITEM1.setParent( TABLELAYOUT1 );
         ARROW6ITEM1.setRow( ROW5 );
         ARROW6ITEM1.setSizing( "NONE" );
         ARROW6ITEM1.setColumn( COLUMN2 );
         ARROW6ITEM1.setFlow( "RIGHT" );
         ARROW6ITEM1.setAlignment( "TOPLEFT" );
         ARROW6ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW7ITEM1 --
         // -----------------------------
         ARROW7ITEM1.setManage( ARROW7 );
         ARROW7ITEM1.setParent( TABLELAYOUT1 );
         ARROW7ITEM1.setRow( ROW6 );
         ARROW7ITEM1.setSizing( "NONE" );
         ARROW7ITEM1.setColumn( COLUMN2 );
         ARROW7ITEM1.setAlignment( "TOPLEFT" );
         ARROW7ITEM1.setFlow( "RIGHT" );
         ARROW7ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW8ITEM1 --
         // -----------------------------
         ARROW8ITEM1.setManage( ARROW8 );
         ARROW8ITEM1.setParent( TABLELAYOUT1 );
         ARROW8ITEM1.setRow( ROW8 );
         ARROW8ITEM1.setSizing( "NONE" );
         ARROW8ITEM1.setColumn( COLUMN2 );
         ARROW8ITEM1.setAlignment( "TOPLEFT" );
         ARROW8ITEM1.setFlow( "RIGHT" );
         ARROW8ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW9ITEM1 --
         // -----------------------------
         ARROW9ITEM1.setManage( ARROW9 );
         ARROW9ITEM1.setParent( TABLELAYOUT1 );
         ARROW9ITEM1.setRow( ROW2 );
         ARROW9ITEM1.setSizing( "NONE" );
         ARROW9ITEM1.setColumn( COLUMN3 );
         ARROW9ITEM1.setAlignment( "TOPLEFT" );
         ARROW9ITEM1.setFlow( "RIGHT" );
         ARROW9ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW10ITEM1 --
         // ------------------------------
         ARROW10ITEM1.setManage( ARROW10 );
         ARROW10ITEM1.setParent( TABLELAYOUT1 );
         ARROW10ITEM1.setRow( ROW5 );
         ARROW10ITEM1.setSizing( "NONE" );
         ARROW10ITEM1.setColumn( COLUMN3 );
         ARROW10ITEM1.setAlignment( "TOPLEFT" );
         ARROW10ITEM1.setFlow( "RIGHT" );
         ARROW10ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW11ITEM1 --
         // ------------------------------
         ARROW11ITEM1.setManage( ARROW11 );
         ARROW11ITEM1.setParent( TABLELAYOUT1 );
         ARROW11ITEM1.setRow( ROW6 );
         ARROW11ITEM1.setSizing( "NONE" );
         ARROW11ITEM1.setColumn( COLUMN3 );
         ARROW11ITEM1.setAlignment( "TOPLEFT" );
         ARROW11ITEM1.setFlow( "RIGHT" );
         ARROW11ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW12ITEM1 --
         // ------------------------------
         ARROW12ITEM1.setManage( ARROW12 );
         ARROW12ITEM1.setParent( TABLELAYOUT1 );
         ARROW12ITEM1.setRow( ROW2 );
         ARROW12ITEM1.setSizing( "NONE" );
         ARROW12ITEM1.setColumn( COLUMN4 );
         ARROW12ITEM1.setAlignment( "TOPLEFT" );
         ARROW12ITEM1.setFlow( "RIGHT" );
         ARROW12ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW13ITEM1 --
         // ------------------------------
         ARROW13ITEM1.setManage( ARROW13 );
         ARROW13ITEM1.setParent( TABLELAYOUT1 );
         ARROW13ITEM1.setRow( ROW5 );
         ARROW13ITEM1.setSizing( "NONE" );
         ARROW13ITEM1.setColumn( COLUMN4 );
         ARROW13ITEM1.setAlignment( "TOPLEFT" );
         ARROW13ITEM1.setFlow( "RIGHT" );
         ARROW13ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW14ITEM1 --
         // ------------------------------
         ARROW14ITEM1.setManage( ARROW14 );
         ARROW14ITEM1.setParent( TABLELAYOUT1 );
         ARROW14ITEM1.setRow( ROW6 );
         ARROW14ITEM1.setSizing( "NONE" );
         ARROW14ITEM1.setColumn( COLUMN4 );
         ARROW14ITEM1.setAlignment( "TOPLEFT" );
         ARROW14ITEM1.setFlow( "RIGHT" );
         ARROW14ITEM1.initialize();

         // ------------------------------
         // -- Initialize #ARROW15ITEM1 --
         // ------------------------------
         ARROW15ITEM1.setManage( ARROW15 );
         ARROW15ITEM1.setParent( TABLELAYOUT1 );
         ARROW15ITEM1.setRow( ROW8 );
         ARROW15ITEM1.setSizing( "NONE" );
         ARROW15ITEM1.setColumn( COLUMN4 );
         ARROW15ITEM1.setAlignment( "TOPLEFT" );
         ARROW15ITEM1.setFlow( "RIGHT" );
         ARROW15ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LABEL8ITEM1 --
         // -----------------------------
         LABEL8ITEM1.setManage( LABEL8 );
         LABEL8ITEM1.setParent( TABLELAYOUT1 );
         LABEL8ITEM1.setRow( ROW8 );
         LABEL8ITEM1.setSizing( "NONE" );
         LABEL8ITEM1.setColumn( COLUMN2 );
         LABEL8ITEM1.setFlow( "RIGHT" );
         LABEL8ITEM1.setAlignment( "TOPLEFT" );
         LABEL8ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW1ITEM1 --
         // -----------------------------
         ARROW1ITEM1.setAlignment( "TOPLEFT" );
         ARROW1ITEM1.setColumn( COLUMN1 );
         ARROW1ITEM1.setManage( ARROW1 );
         ARROW1ITEM1.setParent( TABLELAYOUT1 );
         ARROW1ITEM1.setRow( ROW2 );
         ARROW1ITEM1.setSizing( "NONE" );
         ARROW1ITEM1.setFlow( "RIGHT" );
         ARROW1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #ARROW2ITEM2 --
         // -----------------------------
         ARROW2ITEM2.setAlignment( "TOPLEFT" );
         ARROW2ITEM2.setColumn( COLUMN1 );
         ARROW2ITEM2.setManage( ARROW2 );
         ARROW2ITEM2.setParent( TABLELAYOUT1 );
         ARROW2ITEM2.setRow( ROW5 );
         ARROW2ITEM2.setSizing( "NONE" );
         ARROW2ITEM2.setFlow( "RIGHT" );
         ARROW2ITEM2.initialize();

         // --------------------------------------
         // -- Initialize #ACKNOWLEDGEMENTITEM1 --
         // --------------------------------------
         ACKNOWLEDGEMENTITEM1.setManage( ACKNOWLEDGEMENT );
         ACKNOWLEDGEMENTITEM1.setParent( TABLELAYOUT1 );
         ACKNOWLEDGEMENTITEM1.setRow( ROW9 );
         ACKNOWLEDGEMENTITEM1.setSizing( "FITTOWIDTH" );
         ACKNOWLEDGEMENTITEM1.setColumn( COLUMN1 );
         ACKNOWLEDGEMENTITEM1.setFlow( "DOWN" );
         ACKNOWLEDGEMENTITEM1.setColumnSpan( 5 );
         ACKNOWLEDGEMENTITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 1 );
         COLUMN6.setParent( TABLELAYOUT2 );
         COLUMN6.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT2 );
         ROW3.initialize();

         // --------------------------------
         // -- Initialize #COPYRIGHTITEM1 --
         // --------------------------------
         COPYRIGHTITEM1.setColumn( COLUMN6 );
         COPYRIGHTITEM1.setManage( COPYRIGHT );
         COPYRIGHTITEM1.setParent( TABLELAYOUT2 );
         COPYRIGHTITEM1.setRow( ROW3 );
         COPYRIGHTITEM1.setSizing( "FITTOWIDTH" );
         COPYRIGHTITEM1.setFlow( "DOWN" );
         COPYRIGHTITEM1.setAlignment( "BOTTOMCENTER" );
         COPYRIGHTITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM20 --
         // ------------------------------
         LAYOUTITEM20.setColumn( COLUMN6 );
         LAYOUTITEM20.setFlow( "DOWN" );
         LAYOUTITEM20.setManage( GUIDE );
         LAYOUTITEM20.setParent( TABLELAYOUT2 );
         LAYOUTITEM20.setRow( ROW3 );
         LAYOUTITEM20.setSizing( "FITTOWIDTH" );
         LAYOUTITEM20.setAlignment( "TOPCENTER" );
         LAYOUTITEM20.setMarginTop( 5 );
         LAYOUTITEM20.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT3 --
         // ------------------------------
         TABLELAYOUT3.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 1 );
         COLUMN7.setParent( TABLELAYOUT3 );
         COLUMN7.setWidth( 40 );
         COLUMN7.setUnits( "PIXELS" );
         COLUMN7.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 2 );
         COLUMN8.setParent( TABLELAYOUT3 );
         COLUMN8.setWidth( 40 );
         COLUMN8.setUnits( "PIXELS" );
         COLUMN8.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 3 );
         COLUMN9.setParent( TABLELAYOUT3 );
         COLUMN9.setWidth( 40 );
         COLUMN9.setUnits( "PIXELS" );
         COLUMN9.initialize();

         // --------------------------
         // -- Initialize #COLUMN10 --
         // --------------------------
         COLUMN10.setDisplayPosition( 4 );
         COLUMN10.setParent( TABLELAYOUT3 );
         COLUMN10.setWidth( 40 );
         COLUMN10.setUnits( "PIXELS" );
         COLUMN10.initialize();

         // --------------------------
         // -- Initialize #COLUMN11 --
         // --------------------------
         COLUMN11.setDisplayPosition( 5 );
         COLUMN11.setParent( TABLELAYOUT3 );
         COLUMN11.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 1 );
         ROW4.setParent( TABLELAYOUT3 );
         ROW4.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM22 --
         // ------------------------------
         LAYOUTITEM22.setColumn( COLUMN7 );
         LAYOUTITEM22.setManage( FACEBOOK );
         LAYOUTITEM22.setParent( TABLELAYOUT3 );
         LAYOUTITEM22.setRow( ROW4 );
         LAYOUTITEM22.setSizing( "NONE" );
         LAYOUTITEM22.setAlignment( "CENTERLEFT" );
         LAYOUTITEM22.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM23 --
         // ------------------------------
         LAYOUTITEM23.setColumn( COLUMN8 );
         LAYOUTITEM23.setManage( TWITTER );
         LAYOUTITEM23.setParent( TABLELAYOUT3 );
         LAYOUTITEM23.setRow( ROW4 );
         LAYOUTITEM23.setSizing( "NONE" );
         LAYOUTITEM23.setAlignment( "CENTERLEFT" );
         LAYOUTITEM23.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM24 --
         // ------------------------------
         LAYOUTITEM24.setColumn( COLUMN9 );
         LAYOUTITEM24.setManage( GOOGLEPLUS );
         LAYOUTITEM24.setParent( TABLELAYOUT3 );
         LAYOUTITEM24.setRow( ROW4 );
         LAYOUTITEM24.setSizing( "NONE" );
         LAYOUTITEM24.setAlignment( "CENTERLEFT" );
         LAYOUTITEM24.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM25 --
         // ------------------------------
         LAYOUTITEM25.setColumn( COLUMN10 );
         LAYOUTITEM25.setManage( LINKEDIN );
         LAYOUTITEM25.setParent( TABLELAYOUT3 );
         LAYOUTITEM25.setRow( ROW4 );
         LAYOUTITEM25.setSizing( "NONE" );
         LAYOUTITEM25.setAlignment( "CENTERLEFT" );
         LAYOUTITEM25.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM26 --
         // ------------------------------
         LAYOUTITEM26.setColumn( COLUMN11 );
         LAYOUTITEM26.setManage( YOUTTUBE );
         LAYOUTITEM26.setParent( TABLELAYOUT3 );
         LAYOUTITEM26.setRow( ROW4 );
         LAYOUTITEM26.setSizing( "NONE" );
         LAYOUTITEM26.setAlignment( "CENTERLEFT" );
         LAYOUTITEM26.initialize();

         // --------------------------
         // -- Initialize #HEADING1 --
         // --------------------------
         HEADING1.setCaption( "INFORMATION" );
         HEADING1.setDisplayPosition( 1 );
         HEADING1.setEllipses( "WORD" );
         HEADING1.setHeight( 25 );
         HEADING1.setParent( this );
         HEADING1.setTabPosition( 1 );
         HEADING1.setTabStop( false );
         HEADING1.setTop( 5 );
         HEADING1.setVerticalAlignment( "CENTER" );
         HEADING1.setWidth( 190 );
         HEADING1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         HEADING1.initialize();

         // ------------------------
         // -- Initialize #ARROW1 --
         // ------------------------
         ARROW1.setDisplayPosition( 2 );
         ARROW1.setHeight( 25 );
         ARROW1.setLeft( 0 );
         ARROW1.setParent( this );
         ARROW1.setTabPosition( 2 );
         ARROW1.setTabStop( false );
         ARROW1.setTop( 25 );
         ARROW1.setWidth( 20 );
         ARROW1.setImage( resource1 );
         ARROW1.setImageAlignment( "CENTERRIGHT" );
         ARROW1.initialize();

         // ------------------------------------
         // -- Initialize #PRODUCTINFORMATION --
         // ------------------------------------
         PRODUCTINFORMATION.setCaption( "Products" );
         PRODUCTINFORMATION.setDisplayPosition( 4 );
         PRODUCTINFORMATION.setEllipses( "WORD" );
         PRODUCTINFORMATION.setHeight( 25 );
         PRODUCTINFORMATION.setParent( this );
         PRODUCTINFORMATION.setTabPosition( 4 );
         PRODUCTINFORMATION.setTabStop( false );
         PRODUCTINFORMATION.setVerticalAlignment( "CENTER" );
         PRODUCTINFORMATION.setWidth( 150 );
         PRODUCTINFORMATION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         PRODUCTINFORMATION.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF08ALMOSTBLACK" ) );
         PRODUCTINFORMATION.setTop( 25 );
         PRODUCTINFORMATION.setLeft( 30 );
         PRODUCTINFORMATION.initialize();

         // ------------------------
         // -- Initialize #ARROW2 --
         // ------------------------
         ARROW2.setDisplayPosition( 3 );
         ARROW2.setHeight( 25 );
         ARROW2.setLeft( 0 );
         ARROW2.setParent( this );
         ARROW2.setTabPosition( 3 );
         ARROW2.setTabStop( false );
         ARROW2.setTop( 50 );
         ARROW2.setWidth( 20 );
         ARROW2.setImage( resource1 );
         ARROW2.setImageAlignment( "CENTERRIGHT" );
         ARROW2.initialize();

         // --------------------------
         // -- Initialize #TOOLHIRE --
         // --------------------------
         TOOLHIRE.setCaption( "Tool Hire" );
         TOOLHIRE.setDisplayPosition( 5 );
         TOOLHIRE.setEllipses( "WORD" );
         TOOLHIRE.setHeight( 25 );
         TOOLHIRE.setParent( this );
         TOOLHIRE.setTabPosition( 5 );
         TOOLHIRE.setTabStop( false );
         TOOLHIRE.setTop( 50 );
         TOOLHIRE.setVerticalAlignment( "CENTER" );
         TOOLHIRE.setWidth( 150 );
         TOOLHIRE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         TOOLHIRE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF08ALMOSTBLACK" ) );
         TOOLHIRE.setLeft( 30 );
         TOOLHIRE.initialize();

         // ------------------------
         // -- Initialize #ARROW3 --
         // ------------------------
         ARROW3.setDisplayPosition( 6 );
         ARROW3.setHeight( 25 );
         ARROW3.setLeft( 0 );
         ARROW3.setParent( this );
         ARROW3.setTabPosition( 6 );
         ARROW3.setTabStop( false );
         ARROW3.setTop( 75 );
         ARROW3.setWidth( 20 );
         ARROW3.setImage( resource1 );
         ARROW3.setImageAlignment( "CENTERRIGHT" );
         ARROW3.initialize();

         // -----------------------------
         // -- Initialize #DIYSCHEDULE --
         // -----------------------------
         DIYSCHEDULE.setCaption( "DIY Schedule" );
         DIYSCHEDULE.setDisplayPosition( 7 );
         DIYSCHEDULE.setEllipses( "WORD" );
         DIYSCHEDULE.setHeight( 25 );
         DIYSCHEDULE.setParent( this );
         DIYSCHEDULE.setTabPosition( 7 );
         DIYSCHEDULE.setTabStop( false );
         DIYSCHEDULE.setTop( 75 );
         DIYSCHEDULE.setVerticalAlignment( "CENTER" );
         DIYSCHEDULE.setWidth( 150 );
         DIYSCHEDULE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         DIYSCHEDULE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF08ALMOSTBLACK" ) );
         DIYSCHEDULE.setLeft( 30 );
         DIYSCHEDULE.initialize();

         // ------------------------
         // -- Initialize #ARROW4 --
         // ------------------------
         ARROW4.setDisplayPosition( 8 );
         ARROW4.setHeight( 25 );
         ARROW4.setLeft( 0 );
         ARROW4.setParent( this );
         ARROW4.setTabPosition( 8 );
         ARROW4.setTabStop( false );
         ARROW4.setTop( 100 );
         ARROW4.setWidth( 20 );
         ARROW4.setImage( resource1 );
         ARROW4.setImageAlignment( "CENTERRIGHT" );
         ARROW4.initialize();

         // ------------------------
         // -- Initialize #LABEL4 --
         // ------------------------
         LABEL4.setCaption( "Gift Cards" );
         LABEL4.setDisplayPosition( 9 );
         LABEL4.setEllipses( "WORD" );
         LABEL4.setHeight( 25 );
         LABEL4.setParent( this );
         LABEL4.setTabPosition( 9 );
         LABEL4.setTabStop( false );
         LABEL4.setTop( 100 );
         LABEL4.setVerticalAlignment( "CENTER" );
         LABEL4.setWidth( 150 );
         LABEL4.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL4.setHint( "Not available" );
         LABEL4.setLeft( 30 );
         LABEL4.initialize();

         // --------------------------
         // -- Initialize #HEADING2 --
         // --------------------------
         HEADING2.setCaption( "MY ACCOUNT" );
         HEADING2.setDisplayPosition( 10 );
         HEADING2.setEllipses( "WORD" );
         HEADING2.setHeight( 25 );
         HEADING2.setLeft( 234 );
         HEADING2.setParent( this );
         HEADING2.setTabPosition( 10 );
         HEADING2.setTabStop( false );
         HEADING2.setTop( 5 );
         HEADING2.setVerticalAlignment( "CENTER" );
         HEADING2.setWidth( 200 );
         HEADING2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         HEADING2.initialize();

         // ------------------------
         // -- Initialize #ARROW5 --
         // ------------------------
         ARROW5.setImage( resource1 );
         ARROW5.setDisplayPosition( 11 );
         ARROW5.setEllipses( "WORD" );
         ARROW5.setHeight( 25 );
         ARROW5.setLeft( 234 );
         ARROW5.setParent( this );
         ARROW5.setTabPosition( 11 );
         ARROW5.setTabStop( false );
         ARROW5.setTop( 25 );
         ARROW5.setVerticalAlignment( "CENTER" );
         ARROW5.setWidth( 20 );
         ARROW5.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW5.initialize();

         // ---------------------------
         // -- Initialize #MYACCOUNT --
         // ---------------------------
         MYACCOUNT.setCaption( "My Account" );
         MYACCOUNT.setDisplayPosition( 12 );
         MYACCOUNT.setEllipses( "WORD" );
         MYACCOUNT.setHeight( 25 );
         MYACCOUNT.setLeft( 254 );
         MYACCOUNT.setParent( this );
         MYACCOUNT.setTabPosition( 12 );
         MYACCOUNT.setTabStop( false );
         MYACCOUNT.setVerticalAlignment( "CENTER" );
         MYACCOUNT.setWidth( 150 );
         MYACCOUNT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         MYACCOUNT.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF08ALMOSTBLACK" ) );
         MYACCOUNT.setTop( 25 );
         MYACCOUNT.initialize();

         // ------------------------
         // -- Initialize #ARROW6 --
         // ------------------------
         ARROW6.setImage( resource1 );
         ARROW6.setDisplayPosition( 13 );
         ARROW6.setEllipses( "WORD" );
         ARROW6.setHeight( 25 );
         ARROW6.setLeft( 234 );
         ARROW6.setParent( this );
         ARROW6.setTabPosition( 13 );
         ARROW6.setTabStop( false );
         ARROW6.setTop( 50 );
         ARROW6.setVerticalAlignment( "CENTER" );
         ARROW6.setWidth( 20 );
         ARROW6.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW6.initialize();

         // ------------------------
         // -- Initialize #LABEL6 --
         // ------------------------
         LABEL6.setCaption( "Order History" );
         LABEL6.setDisplayPosition( 14 );
         LABEL6.setEllipses( "WORD" );
         LABEL6.setHeight( 25 );
         LABEL6.setLeft( 254 );
         LABEL6.setParent( this );
         LABEL6.setTabPosition( 14 );
         LABEL6.setTabStop( false );
         LABEL6.setTop( 50 );
         LABEL6.setVerticalAlignment( "CENTER" );
         LABEL6.setWidth( 150 );
         LABEL6.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL6.setHint( "Not available" );
         LABEL6.initialize();

         // ------------------------
         // -- Initialize #ARROW7 --
         // ------------------------
         ARROW7.setImage( resource1 );
         ARROW7.setDisplayPosition( 15 );
         ARROW7.setEllipses( "WORD" );
         ARROW7.setHeight( 25 );
         ARROW7.setLeft( 234 );
         ARROW7.setParent( this );
         ARROW7.setTabPosition( 15 );
         ARROW7.setTabStop( false );
         ARROW7.setTop( 75 );
         ARROW7.setVerticalAlignment( "CENTER" );
         ARROW7.setWidth( 20 );
         ARROW7.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW7.initialize();

         // ------------------------
         // -- Initialize #LABEL7 --
         // ------------------------
         LABEL7.setCaption( "Wish List" );
         LABEL7.setDisplayPosition( 16 );
         LABEL7.setEllipses( "WORD" );
         LABEL7.setHeight( 25 );
         LABEL7.setLeft( 254 );
         LABEL7.setParent( this );
         LABEL7.setTabPosition( 16 );
         LABEL7.setTabStop( false );
         LABEL7.setTop( 75 );
         LABEL7.setVerticalAlignment( "CENTER" );
         LABEL7.setWidth( 150 );
         LABEL7.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL7.setHint( "Not available" );
         LABEL7.initialize();

         // ------------------------
         // -- Initialize #ARROW8 --
         // ------------------------
         ARROW8.setImage( resource1 );
         ARROW8.setDisplayPosition( 17 );
         ARROW8.setEllipses( "WORD" );
         ARROW8.setHeight( 25 );
         ARROW8.setLeft( 234 );
         ARROW8.setParent( this );
         ARROW8.setTabPosition( 17 );
         ARROW8.setTabStop( false );
         ARROW8.setTop( 100 );
         ARROW8.setVerticalAlignment( "CENTER" );
         ARROW8.setWidth( 20 );
         ARROW8.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW8.initialize();

         // ------------------------
         // -- Initialize #LABEL8 --
         // ------------------------
         LABEL8.setCaption( "Track Deliveries" );
         LABEL8.setDisplayPosition( 18 );
         LABEL8.setEllipses( "WORD" );
         LABEL8.setHeight( 25 );
         LABEL8.setLeft( 254 );
         LABEL8.setParent( this );
         LABEL8.setTabPosition( 18 );
         LABEL8.setTabStop( false );
         LABEL8.setTop( 100 );
         LABEL8.setVerticalAlignment( "CENTER" );
         LABEL8.setWidth( 150 );
         LABEL8.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL8.setHint( "Not available" );
         LABEL8.initialize();

         // --------------------------
         // -- Initialize #HEADING3 --
         // --------------------------
         HEADING3.setCaption( "CUSTOMER SERVICE" );
         HEADING3.setDisplayPosition( 19 );
         HEADING3.setEllipses( "WORD" );
         HEADING3.setHeight( 25 );
         HEADING3.setLeft( 468 );
         HEADING3.setParent( this );
         HEADING3.setTabPosition( 19 );
         HEADING3.setTabStop( false );
         HEADING3.setTop( 5 );
         HEADING3.setVerticalAlignment( "CENTER" );
         HEADING3.setWidth( 200 );
         HEADING3.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         HEADING3.initialize();

         // ------------------------
         // -- Initialize #ARROW9 --
         // ------------------------
         ARROW9.setImage( resource1 );
         ARROW9.setDisplayPosition( 20 );
         ARROW9.setEllipses( "WORD" );
         ARROW9.setHeight( 25 );
         ARROW9.setLeft( 468 );
         ARROW9.setParent( this );
         ARROW9.setTabPosition( 20 );
         ARROW9.setTabStop( false );
         ARROW9.setTop( 25 );
         ARROW9.setVerticalAlignment( "CENTER" );
         ARROW9.setWidth( 20 );
         ARROW9.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW9.initialize();

         // ------------------------
         // -- Initialize #LABEL9 --
         // ------------------------
         LABEL9.setCaption( "Returns" );
         LABEL9.setDisplayPosition( 21 );
         LABEL9.setEllipses( "WORD" );
         LABEL9.setHeight( 25 );
         LABEL9.setLeft( 488 );
         LABEL9.setParent( this );
         LABEL9.setTabPosition( 21 );
         LABEL9.setTabStop( false );
         LABEL9.setVerticalAlignment( "CENTER" );
         LABEL9.setWidth( 170 );
         LABEL9.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL9.setHint( "Not available" );
         LABEL9.setTop( 25 );
         LABEL9.initialize();

         // -------------------------
         // -- Initialize #ARROW10 --
         // -------------------------
         ARROW10.setImage( resource1 );
         ARROW10.setDisplayPosition( 22 );
         ARROW10.setEllipses( "WORD" );
         ARROW10.setHeight( 25 );
         ARROW10.setLeft( 468 );
         ARROW10.setParent( this );
         ARROW10.setTabPosition( 22 );
         ARROW10.setTabStop( false );
         ARROW10.setTop( 50 );
         ARROW10.setVerticalAlignment( "CENTER" );
         ARROW10.setWidth( 20 );
         ARROW10.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW10.initialize();

         // -------------------------
         // -- Initialize #LABEL10 --
         // -------------------------
         LABEL10.setCaption( "Payments" );
         LABEL10.setDisplayPosition( 23 );
         LABEL10.setEllipses( "WORD" );
         LABEL10.setHeight( 25 );
         LABEL10.setLeft( 488 );
         LABEL10.setParent( this );
         LABEL10.setTabPosition( 23 );
         LABEL10.setTabStop( false );
         LABEL10.setTop( 50 );
         LABEL10.setVerticalAlignment( "CENTER" );
         LABEL10.setWidth( 170 );
         LABEL10.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL10.setHint( "Not available" );
         LABEL10.initialize();

         // -------------------------
         // -- Initialize #ARROW11 --
         // -------------------------
         ARROW11.setImage( resource1 );
         ARROW11.setDisplayPosition( 24 );
         ARROW11.setEllipses( "WORD" );
         ARROW11.setHeight( 25 );
         ARROW11.setLeft( 468 );
         ARROW11.setParent( this );
         ARROW11.setTabPosition( 24 );
         ARROW11.setTabStop( false );
         ARROW11.setTop( 75 );
         ARROW11.setVerticalAlignment( "CENTER" );
         ARROW11.setWidth( 20 );
         ARROW11.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW11.initialize();

         // -------------------------
         // -- Initialize #LABEL11 --
         // -------------------------
         LABEL11.setCaption( "Terms and Conditions" );
         LABEL11.setDisplayPosition( 25 );
         LABEL11.setEllipses( "WORD" );
         LABEL11.setHeight( 25 );
         LABEL11.setLeft( 488 );
         LABEL11.setParent( this );
         LABEL11.setTabPosition( 25 );
         LABEL11.setTabStop( false );
         LABEL11.setTop( 75 );
         LABEL11.setVerticalAlignment( "CENTER" );
         LABEL11.setWidth( 170 );
         LABEL11.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LABEL11.setHint( "Not available" );
         LABEL11.initialize();

         // --------------------------
         // -- Initialize #HEADING4 --
         // --------------------------
         HEADING4.setCaption( "ABOUT US" );
         HEADING4.setDisplayPosition( 26 );
         HEADING4.setEllipses( "WORD" );
         HEADING4.setHeight( 25 );
         HEADING4.setLeft( 702 );
         HEADING4.setParent( this );
         HEADING4.setTabPosition( 26 );
         HEADING4.setTabStop( false );
         HEADING4.setTop( 5 );
         HEADING4.setVerticalAlignment( "CENTER" );
         HEADING4.setWidth( 200 );
         HEADING4.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         HEADING4.initialize();

         // -------------------------
         // -- Initialize #ARROW12 --
         // -------------------------
         ARROW12.setImage( resource1 );
         ARROW12.setDisplayPosition( 27 );
         ARROW12.setEllipses( "WORD" );
         ARROW12.setHeight( 25 );
         ARROW12.setLeft( 702 );
         ARROW12.setParent( this );
         ARROW12.setTabPosition( 27 );
         ARROW12.setTabStop( false );
         ARROW12.setTop( 25 );
         ARROW12.setVerticalAlignment( "CENTER" );
         ARROW12.setWidth( 20 );
         ARROW12.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW12.initialize();

         // -------------------------
         // -- Initialize #ABOUTUS --
         // -------------------------
         ABOUTUS.setCaption( "About Us" );
         ABOUTUS.setDisplayPosition( 28 );
         ABOUTUS.setEllipses( "WORD" );
         ABOUTUS.setHeight( 25 );
         ABOUTUS.setLeft( 722 );
         ABOUTUS.setParent( this );
         ABOUTUS.setTabPosition( 28 );
         ABOUTUS.setTabStop( false );
         ABOUTUS.setVerticalAlignment( "CENTER" );
         ABOUTUS.setWidth( 170 );
         ABOUTUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         ABOUTUS.setTop( 25 );
         ABOUTUS.setHint( "Not available" );
         ABOUTUS.initialize();

         // -------------------------
         // -- Initialize #ARROW13 --
         // -------------------------
         ARROW13.setImage( resource1 );
         ARROW13.setDisplayPosition( 29 );
         ARROW13.setEllipses( "WORD" );
         ARROW13.setHeight( 25 );
         ARROW13.setLeft( 702 );
         ARROW13.setParent( this );
         ARROW13.setTabPosition( 29 );
         ARROW13.setTabStop( false );
         ARROW13.setTop( 50 );
         ARROW13.setVerticalAlignment( "CENTER" );
         ARROW13.setWidth( 20 );
         ARROW13.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW13.initialize();

         // ----------------------------
         // -- Initialize #FINDASTORE --
         // ----------------------------
         FINDASTORE.setCaption( "Find a Store" );
         FINDASTORE.setDisplayPosition( 30 );
         FINDASTORE.setEllipses( "WORD" );
         FINDASTORE.setHeight( 25 );
         FINDASTORE.setLeft( 722 );
         FINDASTORE.setParent( this );
         FINDASTORE.setTabPosition( 30 );
         FINDASTORE.setTabStop( false );
         FINDASTORE.setVerticalAlignment( "CENTER" );
         FINDASTORE.setWidth( 170 );
         FINDASTORE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         FINDASTORE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF08ALMOSTBLACK" ) );
         FINDASTORE.setTop( 50 );
         FINDASTORE.initialize();

         // -------------------------
         // -- Initialize #ARROW14 --
         // -------------------------
         ARROW14.setImage( resource1 );
         ARROW14.setDisplayPosition( 31 );
         ARROW14.setEllipses( "WORD" );
         ARROW14.setHeight( 25 );
         ARROW14.setLeft( 702 );
         ARROW14.setParent( this );
         ARROW14.setTabPosition( 31 );
         ARROW14.setTabStop( false );
         ARROW14.setTop( 75 );
         ARROW14.setVerticalAlignment( "CENTER" );
         ARROW14.setWidth( 20 );
         ARROW14.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW14.initialize();

         // -------------------------
         // -- Initialize #PHONEUS --
         // -------------------------
         PHONEUS.setCaption( "Call now 415-4757-4543" );
         PHONEUS.setDisplayPosition( 32 );
         PHONEUS.setEllipses( "WORD" );
         PHONEUS.setHeight( 25 );
         PHONEUS.setLeft( 722 );
         PHONEUS.setParent( this );
         PHONEUS.setTabPosition( 32 );
         PHONEUS.setTabStop( false );
         PHONEUS.setTop( 75 );
         PHONEUS.setVerticalAlignment( "CENTER" );
         PHONEUS.setWidth( 170 );
         PHONEUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         PHONEUS.initialize();

         // -------------------------
         // -- Initialize #ARROW15 --
         // -------------------------
         ARROW15.setImage( resource1 );
         ARROW15.setDisplayPosition( 33 );
         ARROW15.setEllipses( "WORD" );
         ARROW15.setHeight( 25 );
         ARROW15.setLeft( 702 );
         ARROW15.setParent( this );
         ARROW15.setTabPosition( 33 );
         ARROW15.setTabStop( false );
         ARROW15.setTop( 100 );
         ARROW15.setVerticalAlignment( "CENTER" );
         ARROW15.setWidth( 20 );
         ARROW15.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         ARROW15.initialize();

         // -------------------------
         // -- Initialize #EMAILUS --
         // -------------------------
         EMAILUS.setCaption( "Email sales@lansatools.com" );
         EMAILUS.setDisplayPosition( 34 );
         EMAILUS.setEllipses( "WORD" );
         EMAILUS.setHeight( 25 );
         EMAILUS.setLeft( 722 );
         EMAILUS.setParent( this );
         EMAILUS.setTabPosition( 34 );
         EMAILUS.setTabStop( false );
         EMAILUS.setTop( 100 );
         EMAILUS.setVerticalAlignment( "CENTER" );
         EMAILUS.setWidth( 180 );
         EMAILUS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         EMAILUS.setHint( "Not available" );
         EMAILUS.initialize();

         // ---------------------------
         // -- Initialize #COPYRIGHT --
         // ---------------------------
         COPYRIGHT.setCaption( "© LANSA 2015. All rights reserved." );
         COPYRIGHT.setDisplayPosition( 35 );
         COPYRIGHT.setEllipses( "WORD" );
         COPYRIGHT.setHeight( 20 );
         COPYRIGHT.setLeft( 0 );
         COPYRIGHT.setParent( this );
         COPYRIGHT.setTabPosition( 35 );
         COPYRIGHT.setTabStop( false );
         COPYRIGHT.setTop( 152 );
         COPYRIGHT.setVerticalAlignment( "CENTER" );
         COPYRIGHT.setWidth( 1170 );
         COPYRIGHT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08BOLDALMOSTBLACK" ) );
         COPYRIGHT.setAlignment( "CENTER" );
         COPYRIGHT.initialize();

         // ---------------------------------
         // -- Initialize #ACKNOWLEDGEMENT --
         // ---------------------------------
         ACKNOWLEDGEMENT.setCaption( "Images used under license from Shutterstock.com." );
         ACKNOWLEDGEMENT.setDisplayPosition( 36 );
         ACKNOWLEDGEMENT.setEllipses( "WORD" );
         ACKNOWLEDGEMENT.setHeight( 20 );
         ACKNOWLEDGEMENT.setLeft( 0 );
         ACKNOWLEDGEMENT.setParent( this );
         ACKNOWLEDGEMENT.setTabPosition( 36 );
         ACKNOWLEDGEMENT.setTabStop( false );
         ACKNOWLEDGEMENT.setTop( 172 );
         ACKNOWLEDGEMENT.setVerticalAlignment( "CENTER" );
         ACKNOWLEDGEMENT.setWidth( 1170 );
         ACKNOWLEDGEMENT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         ACKNOWLEDGEMENT.setAlignment( "CENTER" );
         ACKNOWLEDGEMENT.initialize();

         // --------------------------
         // -- Initialize #HEADING5 --
         // --------------------------
         HEADING5.setCaption( "FOLLOW US" );
         HEADING5.setDisplayPosition( 37 );
         HEADING5.setEllipses( "WORD" );
         HEADING5.setHeight( 25 );
         HEADING5.setLeft( 936 );
         HEADING5.setParent( this );
         HEADING5.setTabPosition( 37 );
         HEADING5.setTabStop( false );
         HEADING5.setTop( 5 );
         HEADING5.setVerticalAlignment( "CENTER" );
         HEADING5.setWidth( 200 );
         HEADING5.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         HEADING5.initialize();

         // ------------------------
         // -- Initialize #PANEL2 --
         // ------------------------
         PANEL2.setDisplayPosition( 38 );
         PANEL2.setLeft( 936 );
         PANEL2.setParent( this );
         PANEL2.setTabPosition( 38 );
         PANEL2.setTabStop( false );
         PANEL2.setTop( 35 );
         PANEL2.setWidth( 234 );
         PANEL2.setLayoutManager( TABLELAYOUT3 );
         PANEL2.initialize();

         // --------------------------
         // -- Initialize #FACEBOOK --
         // --------------------------
         FACEBOOK.setDisplayPosition( 1 );
         FACEBOOK.setHeight( 30 );
         FACEBOOK.setImage( resource2 );
         FACEBOOK.setLeft( 0 );
         FACEBOOK.setParent( PANEL2 );
         FACEBOOK.setTabPosition( 1 );
         FACEBOOK.setTabStop( false );
         FACEBOOK.setWidth( 30 );
         FACEBOOK.initialize();

         // -------------------------
         // -- Initialize #TWITTER --
         // -------------------------
         TWITTER.setDisplayPosition( 2 );
         TWITTER.setHeight( 30 );
         TWITTER.setImage( resource3 );
         TWITTER.setLeft( 40 );
         TWITTER.setParent( PANEL2 );
         TWITTER.setTabPosition( 2 );
         TWITTER.setTabStop( false );
         TWITTER.setWidth( 30 );
         TWITTER.initialize();

         // ----------------------------
         // -- Initialize #GOOGLEPLUS --
         // ----------------------------
         GOOGLEPLUS.setDisplayPosition( 3 );
         GOOGLEPLUS.setHeight( 30 );
         GOOGLEPLUS.setImage( resource4 );
         GOOGLEPLUS.setLeft( 80 );
         GOOGLEPLUS.setParent( PANEL2 );
         GOOGLEPLUS.setTabPosition( 3 );
         GOOGLEPLUS.setTabStop( false );
         GOOGLEPLUS.setWidth( 30 );
         GOOGLEPLUS.initialize();

         // --------------------------
         // -- Initialize #LINKEDIN --
         // --------------------------
         LINKEDIN.setDisplayPosition( 4 );
         LINKEDIN.setHeight( 30 );
         LINKEDIN.setImage( resource5 );
         LINKEDIN.setLeft( 120 );
         LINKEDIN.setParent( PANEL2 );
         LINKEDIN.setTabPosition( 4 );
         LINKEDIN.setTabStop( false );
         LINKEDIN.setWidth( 30 );
         LINKEDIN.initialize();

         // --------------------------
         // -- Initialize #YOUTTUBE --
         // --------------------------
         YOUTTUBE.setDisplayPosition( 5 );
         YOUTTUBE.setHeight( 30 );
         YOUTTUBE.setImage( resource6 );
         YOUTTUBE.setLeft( 160 );
         YOUTTUBE.setParent( PANEL2 );
         YOUTTUBE.setTabPosition( 5 );
         YOUTTUBE.setTabStop( false );
         YOUTTUBE.setWidth( 30 );
         YOUTTUBE.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setDisplayPosition( 39 );
         PANEL1.setLeft( 0 );
         PANEL1.setParent( this );
         PANEL1.setTabPosition( 39 );
         PANEL1.setTabStop( false );
         PANEL1.setTop( 199 );
         PANEL1.setWidth( 1170 );
         PANEL1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDWHITE" ) );
         PANEL1.setLayoutManager( TABLELAYOUT2 );
         PANEL1.initialize();

         // -----------------------
         // -- Initialize #GUIDE --
         // -----------------------
         GUIDE.setCaption( "Want to learn how to build a web application like this?" );
         GUIDE.setDisplayPosition( 1 );
         GUIDE.setEllipses( "WORD" );
         GUIDE.setHeight( 25 );
         GUIDE.setLeft( 0 );
         GUIDE.setParent( PANEL1 );
         GUIDE.setTabPosition( 1 );
         GUIDE.setTabStop( false );
         GUIDE.setTop( 5 );
         GUIDE.setVerticalAlignment( "CENTER" );
         GUIDE.setWidth( 1170 );
         GUIDE.setAlignment( "CENTER" );
         GUIDE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "HREF10GREEN3" ) );
         GUIDE.initialize();

         // ----------------------------------
         // -- Initialize #GOTOSTORELOCATOR --
         // ----------------------------------
         GOTOSTORELOCATOR.setTarget( "NEW" );
         GOTOSTORELOCATOR.initialize();

         // --------------------------
         // -- Initialize #PRODUCTS --
         // --------------------------
         PRODUCTS.initialize();

         // -------------------------------
         // -- Initialize #GOTOMYACCOUNT --
         // -------------------------------
         GOTOMYACCOUNT.initialize();

         // ------------------------------------------------
         // -- Add Event Handlers for #PRODUCTINFORMATION --
         // ------------------------------------------------
         PRODUCTINFORMATION.addEventHandler( "CLICK", this, evtRoutine5 );

         // --------------------------------------
         // -- Add Event Handlers for #TOOLHIRE --
         // --------------------------------------
         TOOLHIRE.addEventHandler( "CLICK", this, evtRoutine2 );

         // -----------------------------------------
         // -- Add Event Handlers for #DIYSCHEDULE --
         // -----------------------------------------
         DIYSCHEDULE.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------------------
         // -- Add Event Handlers for #MYACCOUNT --
         // ---------------------------------------
         MYACCOUNT.addEventHandler( "CLICK", this, evtRoutine4 );

         // ----------------------------------------
         // -- Add Event Handlers for #FINDASTORE --
         // ----------------------------------------
         FINDASTORE.addEventHandler( "CLICK", this, evtRoutine3 );

         // --------------------------------------
         // -- Add Event Handlers for #FACEBOOK --
         // --------------------------------------
         FACEBOOK.addEventHandler( "CLICK", this, evtRoutine7 );

         // -------------------------------------
         // -- Add Event Handlers for #TWITTER --
         // -------------------------------------
         TWITTER.addEventHandler( "CLICK", this, evtRoutine8 );

         // ----------------------------------------
         // -- Add Event Handlers for #GOOGLEPLUS --
         // ----------------------------------------
         GOOGLEPLUS.addEventHandler( "CLICK", this, evtRoutine9 );

         // --------------------------------------
         // -- Add Event Handlers for #LINKEDIN --
         // --------------------------------------
         LINKEDIN.addEventHandler( "CLICK", this, evtRoutine10 );

         // --------------------------------------
         // -- Add Event Handlers for #YOUTTUBE --
         // --------------------------------------
         YOUTTUBE.addEventHandler( "CLICK", this, evtRoutine11 );

         // -----------------------------------
         // -- Add Event Handlers for #GUIDE --
         // -----------------------------------
         GUIDE.addEventHandler( "CLICK", this, evtRoutine6 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 249 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1170 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREY00" ) );
         this.setLayoutManager( TABLELAYOUT1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #DIYSchedule.Click
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#DIYSchedule.Click", 149 );

      //
      // EVTROUTINE Handling(#DIYSchedule.Click)
      //
      rtn.Line( 149 );
      {

         //
         // #sys_web.Navigate( "/images/lansatools/DIY-Workshops-Schedule.pdf" New )
         //
         rtn.Line( 152 );
         Lansa.WEB().mthNAVIGATE( "/images/lansatools/DIY-Workshops-Schedule.pdf", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 154 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ToolHire.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ToolHire.Click", 156 );

      //
      // EVTROUTINE Handling(#ToolHire.Click)
      //
      rtn.Line( 156 );
      {

         //
         // #sys_web.Navigate( "/images/lansatools/Tool-Hire.pdf" New )
         //
         rtn.Line( 159 );
         Lansa.WEB().mthNAVIGATE( "/images/lansatools/Tool-Hire.pdf", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 161 );
      rtn.end();
   };

   //
   // evtRoutine3 - #FindAStore.click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FindAStore.click", 163 );

      //
      // EVTROUTINE Handling(#FindAStore.click)
      //
      rtn.Line( 163 );
      {

         //
         // #GotoStoreLocator.execute
         //
         rtn.Line( 166 );
         ref.GOTOSTORELOCATOR.mthEXECUTE( {  }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 168 );
      rtn.end();
   };

   //
   // evtRoutine4 - #MyAccount.Click
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MyAccount.Click", 170 );

      //
      // EVTROUTINE Handling(#MyAccount.Click)
      //
      rtn.Line( 170 );
      {

         //
         // #GotoMyAccount.execute
         //
         rtn.Line( 173 );
         ref.GOTOMYACCOUNT.mthEXECUTE( {  }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 175 );
      rtn.end();
   };

   //
   // evtRoutine5 - #ProductInformation.Click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#ProductInformation.Click", 177 );

      //
      // EVTROUTINE Handling(#ProductInformation.Click)
      //
      rtn.Line( 177 );
      {

         //
         // #Products.execute( '3' )
         //
         rtn.Line( 180 );
         ref.PRODUCTS.mthEXECUTE( { FLD: { "XSPRDLNID": "3" } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 182 );
      rtn.end();
   };

   //
   // evtRoutine6 - #Guide.Click
   //
   function evtRoutine6( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Guide.Click", 184 );

      //
      // EVTROUTINE Handling(#Guide.Click)
      //
      rtn.Line( 184 );
      {

         //
         // #sys_web.Navigate( "http://docs.lansa.com" New )
         //
         rtn.Line( 187 );
         Lansa.WEB().mthNAVIGATE( "http://docs.lansa.com", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 189 );
      rtn.end();
   };

   //
   // evtRoutine7 - #FaceBook.Click
   //
   function evtRoutine7( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#FaceBook.Click", 191 );

      //
      // EVTROUTINE Handling(#FaceBook.Click)
      //
      rtn.Line( 191 );
      {

         //
         // #sys_web.Navigate( "https://www.facebook.com/lansasoftware" New )
         //
         rtn.Line( 194 );
         Lansa.WEB().mthNAVIGATE( "https://www.facebook.com/lansasoftware", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 196 );
      rtn.end();
   };

   //
   // evtRoutine8 - #Twitter.Click
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Twitter.Click", 198 );

      //
      // EVTROUTINE Handling(#Twitter.Click)
      //
      rtn.Line( 198 );
      {

         //
         // #sys_web.Navigate( "http://twitter.com/lansa" New )
         //
         rtn.Line( 201 );
         Lansa.WEB().mthNAVIGATE( "http://twitter.com/lansa", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 203 );
      rtn.end();
   };

   //
   // evtRoutine9 - #GooglePlus.Click
   //
   function evtRoutine9( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GooglePlus.Click", 205 );

      //
      // EVTROUTINE Handling(#GooglePlus.Click)
      //
      rtn.Line( 205 );
      {

         //
         // #sys_web.Navigate( "https://plus.google.com/+LANSASoftware" New )
         //
         rtn.Line( 208 );
         Lansa.WEB().mthNAVIGATE( "https://plus.google.com/+LANSASoftware", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 210 );
      rtn.end();
   };

   //
   // evtRoutine10 - #LinkedIn.Click
   //
   function evtRoutine10( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LinkedIn.Click", 212 );

      //
      // EVTROUTINE Handling(#LinkedIn.Click)
      //
      rtn.Line( 212 );
      {

         //
         // #sys_web.Navigate( "http://www.linkedin.com/company/lansa" New )
         //
         rtn.Line( 215 );
         Lansa.WEB().mthNAVIGATE( "http://www.linkedin.com/company/lansa", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 217 );
      rtn.end();
   };

   //
   // evtRoutine11 - #YoutTUbe.Click
   //
   function evtRoutine11( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#YoutTUbe.Click", 219 );

      //
      // EVTROUTINE Handling(#YoutTUbe.Click)
      //
      rtn.Line( 219 );
      {

         //
         // #sys_web.Navigate( "http://www.youtube.com/user/lansachannel" New )
         //
         rtn.Line( 222 );
         Lansa.WEB().mthNAVIGATE( "http://www.youtube.com/user/lansachannel", "NEW" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 224 );
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
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_IMAG", "PRIM_WEB.WebPageRequest", "PRIM_HINT" ]
});

//# sourceURL=xsfooter.js
