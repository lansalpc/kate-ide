// ----------------------
// -- Theme: XSTHEME01 --
// ----------------------
LANSA.addComponent(
{
   id: "XSTHEME01", 
   nm: "XSTheme01", 
   ot: "th", 
   tp: "Theme", 
   de: "Theme", 
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
      an: "PRIM_THM", 

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
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#White) Color(255:255:255)
         //
         var WHITE = this.createReference( "WHITE", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#AlmostBlack) Color(34:34:34)
         //
         var ALMOSTBLACK = this.createReference( "ALMOSTBLACK", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Grey00) Color(233:233:233)
         //
         var GREY00 = this.createReference( "GREY00", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Grey00_50) Color(233:233:233) Opacity(50)
         //
         var GREY00_50 = this.createReference( "GREY00_50", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Blue3) Color(19:177:236)
         //
         var BLUE3 = this.createReference( "BLUE3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Blue2) Color(92:203:244)
         //
         var BLUE2 = this.createReference( "BLUE2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Green3) Color(110:195:13)
         //
         var GREEN3 = this.createReference( "GREEN3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Green2) Color(122:215:15)
         //
         var GREEN2 = this.createReference( "GREEN2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Green2_50) Color(122:215:15) Opacity(50)
         //
         var GREEN2_50 = this.createReference( "GREEN2_50", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Orange3) Color(255:100:13)
         //
         var ORANGE3 = this.createReference( "ORANGE3", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Orange2) Color(255:119:1)
         //
         var ORANGE2 = this.createReference( "ORANGE2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_vs.SolidBrush) Name(#Red) Color(217:11:11)
         //
         var RED = this.createReference( "RED", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGrey00) Backgroundbrush(#Grey00)
         //
         var BACKGROUNDGREY00 = this.createReference( "BACKGROUNDGREY00", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGrey00BorderWh) Backgroundbrush(#Grey00) Borderbrush(#White) Borderleft(1) Borderright(2) Bordertop(1) Borderbottom(1)
         //
         var BACKGROUNDGREY00BORDERWH = this.createReference( "BACKGROUNDGREY00BORDERWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundBlue3) Backgroundbrush(#Blue3)
         //
         var BACKGROUNDBLUE3 = this.createReference( "BACKGROUNDBLUE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundBlue2) Backgroundbrush(#Blue2)
         //
         var BACKGROUNDBLUE2 = this.createReference( "BACKGROUNDBLUE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGreen3) Backgroundbrush(#Green3)
         //
         var BACKGROUNDGREEN3 = this.createReference( "BACKGROUNDGREEN3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGreen2) Backgroundbrush(#Green2)
         //
         var BACKGROUNDGREEN2 = this.createReference( "BACKGROUNDGREEN2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundOrange3) Backgroundbrush(#Orange3)
         //
         var BACKGROUNDORANGE3 = this.createReference( "BACKGROUNDORANGE3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundOrange2) Backgroundbrush(#Orange2)
         //
         var BACKGROUNDORANGE2 = this.createReference( "BACKGROUNDORANGE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundWhite) Backgroundbrush(#White)
         //
         var BACKGROUNDWHITE = this.createReference( "BACKGROUNDWHITE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGrey00_50) Backgroundbrush(#Grey00_50)
         //
         var BACKGROUNDGREY00_50 = this.createReference( "BACKGROUNDGREY00_50", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundGreen2_50) Backgroundbrush(#Green2_50)
         //
         var BACKGROUNDGREEN2_50 = this.createReference( "BACKGROUNDGREEN2_50", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PanelBorders1) Bordertop(1) Borderbottom(1) Borderleft(1) Borderright(1) Borderbrush(#Grey00) Backgroundbrush(#White)
         //
         var PANELBORDERS1 = this.createReference( "PANELBORDERS1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PanelBorders2) Bordertop(1) Borderbottom(1) Borderleft(1) Borderright(1) Borderbrush(#Green3) Backgroundbrush(#White)
         //
         var PANELBORDERS2 = this.createReference( "PANELBORDERS2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PanelBorders3) Bordertop(1) Borderbottom(1) Borderleft(1) Borderright(1) Borderbrush(#Blue3) Backgroundbrush(#White)
         //
         var PANELBORDERS3 = this.createReference( "PANELBORDERS3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PanelBorders1Bottom) Borderbottom(1) Borderbrush(#Grey00) Backgroundbrush(#White)
         //
         var PANELBORDERS1BOTTOM = this.createReference( "PANELBORDERS1BOTTOM", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PanelBorders2Bottom) Borderbottom(1) Borderbrush(#Green3) Backgroundbrush(#White)
         //
         var PANELBORDERS2BOTTOM = this.createReference( "PANELBORDERS2BOTTOM", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#RightWhBorder) Borderright(1) Borderbottom(0) Bordercolor(White) Borderleft(0) Bordertop(0)
         //
         var RIGHTWHBORDER = this.createReference( "RIGHTWHBORDER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10AlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(10) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT10ALMOSTBLACK = this.createReference( "TEXT10ALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10Red) Foregroundbrush(#Red) Fontsize(10) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT10RED = this.createReference( "TEXT10RED", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10Wh) Foregroundbrush(#White) Fontsize(10) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT10WH = this.createReference( "TEXT10WH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10BoldAlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(10) Bold(True) Facename('Verdana, Geneva, sans-serif') Borderbottom(0) Borderleft(0) Borderright(0) Bordertop(0)
         //
         var TEXT10BOLDALMOSTBLACK = this.createReference( "TEXT10BOLDALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10BoldBl3) Foregroundbrush(#Blue3) Fontsize(10) Bold(True) Facename('Verdana, Geneva, sans-serif') Cursor(Hand)
         //
         var TEXT10BOLDBL3 = this.createReference( "TEXT10BOLDBL3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text10BoldWh) Foregroundbrush(#White) Fontsize(10) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT10BOLDWH = this.createReference( "TEXT10BOLDWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text08BoldAlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(8) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT08BOLDALMOSTBLACK = this.createReference( "TEXT08BOLDALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text08AlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(8) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT08ALMOSTBLACK = this.createReference( "TEXT08ALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text11BoldAlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(11) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT11BOLDALMOSTBLACK = this.createReference( "TEXT11BOLDALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text11BoldGn2) Foregroundbrush(#Green2) Fontsize(11) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT11BOLDGN2 = this.createReference( "TEXT11BOLDGN2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text11BoldBl3) Foregroundbrush(#Blue3) Fontsize(11) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT11BOLDBL3 = this.createReference( "TEXT11BOLDBL3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text11BoldWh) Foregroundbrush(#White) Fontsize(11) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT11BOLDWH = this.createReference( "TEXT11BOLDWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Text11BoldAlmostBlackBackgroundGy00) Fontsize(11) Foregroundbrush(#AlmostBlack) Backgroundbrush(#Grey00) Facename('Verdana, Geneva, sans-serif') Bold(True)
         //
         var TEXT11BOLDALMOSTBLACKBACKGROUNDGY00 = this.createReference( "TEXT11BOLDALMOSTBLACKBACKGROUNDGY00", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Text11BoldWhiteBackgroundBl3) Fontsize(11) Textcolor(White) Backgroundbrush(#Blue3) Facename('Verdana, Geneva, sans-serif') Bold(True)
         //
         var TEXT11BOLDWHITEBACKGROUNDBL3 = this.createReference( "TEXT11BOLDWHITEBACKGROUNDBL3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Text11AlmostBlackBackgroundWh) Fontsize(11) Backgroundbrush(#White) Facename('Verdana, Geneva, sans-serif') Foregroundbrush(#AlmostBlack)
         //
         var TEXT11ALMOSTBLACKBACKGROUNDWH = this.createReference( "TEXT11ALMOSTBLACKBACKGROUNDWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text12Wh) Textcolor(White) Fontsize(12) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT12WH = this.createReference( "TEXT12WH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text12BoldOr3) Foregroundbrush(#Orange3) Fontsize(12) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT12BOLDOR3 = this.createReference( "TEXT12BOLDOR3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text12BoldGn2) Foregroundbrush(#Green2) Fontsize(12) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT12BOLDGN2 = this.createReference( "TEXT12BOLDGN2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text12BoldAlmostBlack) Foregroundbrush(#AlmostBlack) Fontsize(12) Bold(True) Facename('Verdana, Geneva, sans-serif') Fontunits(Point)
         //
         var TEXT12BOLDALMOSTBLACK = this.createReference( "TEXT12BOLDALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text14BoldWh) Foregroundbrush(#White) Fontsize(14) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT14BOLDWH = this.createReference( "TEXT14BOLDWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#prim_vs.style) Name(#Text30BoldWh) Foregroundbrush(#White) Fontsize(30) Bold(True) Facename('Verdana, Geneva, sans-serif')
         //
         var TEXT30BOLDWH = this.createReference( "TEXT30BOLDWH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Href08AlmostBlack) Underline(True) Bold(True) Fontsize(8) Facename('Verdana, Geneva, sans-serif') Foregroundbrush(#AlmostBlack) Cursor(Hand)
         //
         var HREF08ALMOSTBLACK = this.createReference( "HREF08ALMOSTBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Href10Green3) Underline(True) Bold(True) Fontsize(10) Facename('Verdana, Geneva, sans-serif') Foregroundbrush(#Green3) Cursor(Hand)
         //
         var HREF10GREEN3 = this.createReference( "HREF10GREEN3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonWhBl3) Fontsize(12) Backgroundbrush(#White) Facename('Verdana, Geneva, sans-serif') Cursor(Hand) Foregroundbrush(#Blue3) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Bold(True) Borderbrush(#Blue3)
         //
         var BUTTONWHBL3 = this.createReference( "BUTTONWHBL3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonWhBl2) Fontsize(12) Backgroundbrush(#White) Facename('Verdana, Geneva, sans-serif') Cursor(Hand) Foregroundbrush(#Blue2) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Bold(True) Borderbrush(#Blue2)
         //
         var BUTTONWHBL2 = this.createReference( "BUTTONWHBL2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonWhGn3) Fontsize(12) Backgroundbrush(#White) Facename('Verdana, Geneva, sans-serif') Cursor(Hand) Foregroundbrush(#Green3) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Bold(True) Borderbrush(#Green3)
         //
         var BUTTONWHGN3 = this.createReference( "BUTTONWHGN3", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonWhGn2) Fontsize(12) Backgroundbrush(#White) Facename('Verdana, Geneva, sans-serif') Cursor(Hand) Foregroundbrush(#Green2) Borderbottom(2) Borderleft(2) Borderright(2) Bordertop(2) Bold(True) Borderbrush(#Green2)
         //
         var BUTTONWHGN2 = this.createReference( "BUTTONWHGN2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonGn3Wh) Fontsize(12) Textcolor(White) Backgroundbrush(#Green3) Facename('Verdana, Geneva, sans-serif') Cursor(Hand)
         //
         var BUTTONGN3WH = this.createReference( "BUTTONGN3WH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonGn3Gy00) Fontsize(12) Backgroundbrush(#Green3) Facename('Verdana, Geneva, sans-serif') Foregroundbrush(#Grey00)
         //
         var BUTTONGN3GY00 = this.createReference( "BUTTONGN3GY00", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#ButtonGn2Wh) Fontsize(12) Textcolor(White) Backgroundbrush(#Green2) Facename('Verdana, Geneva, sans-serif')
         //
         var BUTTONGN2WH = this.createReference( "BUTTONGN2WH", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#ButtonLook1) Style(#ButtonGn3Wh) Mouseoverstyle(#ButtonGn2Wh) Pressedstyle(#ButtonGn3Gy00) Focusedstyle(#ButtonGn3Gy00)
         //
         var BUTTONLOOK1 = this.createReference( "BUTTONLOOK1", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#ButtonLook2) Style(#ButtonWhBl3) Mouseoverstyle(#ButtonWhBl2) Focusedstyle(#ButtonWhBl3)
         //
         var BUTTONLOOK2 = this.createReference( "BUTTONLOOK2", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#ButtonLook3) Style(#ButtonWhGn3) Mouseoverstyle(#ButtonWhGn2) Focusedstyle(#ButtonWhGn3)
         //
         var BUTTONLOOK3 = this.createReference( "BUTTONLOOK3", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#HeaderOptions) Style(#Text11BoldAlmostBlack) Mouseoverstyle(#Text11BoldGn2) Pressedstyle(#Text11BoldAlmostBlack)
         //
         var HEADEROPTIONS = this.createReference( "HEADEROPTIONS", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#MenuOptions) Style(#Text11BoldWh) Mouseoverstyle(#Text11BoldGn2) Pressedstyle(#Text11BoldAlmostBlack)
         //
         var MENUOPTIONS = this.createReference( "MENUOPTIONS", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#Panel1) Style(#PanelBorders1) Mouseoverstyle(#PanelBorders3)
         //
         var PANEL1 = this.createReference( "PANEL1", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#PanelHeader1) Style(#Text11BoldAlmostBlackBackgroundGy00) Mouseoverstyle(#Text11BoldAlmostBlackBackgroundGy00)
         //
         var PANELHEADER1 = this.createReference( "PANELHEADER1", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#PanelHeader2) Style(#Text11BoldWhiteBackgroundBl3) Mouseoverstyle(#Text11BoldWhiteBackgroundBl3)
         //
         var PANELHEADER2 = this.createReference( "PANELHEADER2", "PRIM_THM", "DrawStyle" );

         //
         // DEFINE_COM Class(#Prim_thm.DrawStyle) Name(#DropDown) Style(#Text11AlmostBlackBackgroundWh) Mouseoverstyle(#Text11AlmostBlackBackgroundWh) Focusedstyle(#BackgroundBlue3) Selectedstyle(#BackgroundBlue2) Selectedinactivestyle(#BackgroundOrange2) Pressedstyle(#BackgroundOrange3) Focusedinactivestyle(#BackgroundGrey00)
         //
         var DROPDOWN = this.createReference( "DROPDOWN", "PRIM_THM", "DrawStyle" );

         // -----------------------
         // -- Initialize #WHITE --
         // -----------------------
         WHITE.setColor( "255:255:255" );
         WHITE.initialize();

         // -----------------------------
         // -- Initialize #ALMOSTBLACK --
         // -----------------------------
         ALMOSTBLACK.setColor( "34:34:34" );
         ALMOSTBLACK.initialize();

         // ------------------------
         // -- Initialize #GREY00 --
         // ------------------------
         GREY00.setColor( "233:233:233" );
         GREY00.initialize();

         // ---------------------------
         // -- Initialize #GREY00_50 --
         // ---------------------------
         GREY00_50.setColor( "233:233:233" );
         GREY00_50.setOpacity( 50 );
         GREY00_50.initialize();

         // -----------------------
         // -- Initialize #BLUE3 --
         // -----------------------
         BLUE3.setColor( "19:177:236" );
         BLUE3.initialize();

         // -----------------------
         // -- Initialize #BLUE2 --
         // -----------------------
         BLUE2.setColor( "92:203:244" );
         BLUE2.initialize();

         // ------------------------
         // -- Initialize #GREEN3 --
         // ------------------------
         GREEN3.setColor( "110:195:13" );
         GREEN3.initialize();

         // ------------------------
         // -- Initialize #GREEN2 --
         // ------------------------
         GREEN2.setColor( "122:215:15" );
         GREEN2.initialize();

         // ---------------------------
         // -- Initialize #GREEN2_50 --
         // ---------------------------
         GREEN2_50.setColor( "122:215:15" );
         GREEN2_50.setOpacity( 50 );
         GREEN2_50.initialize();

         // -------------------------
         // -- Initialize #ORANGE3 --
         // -------------------------
         ORANGE3.setColor( "255:100:13" );
         ORANGE3.initialize();

         // -------------------------
         // -- Initialize #ORANGE2 --
         // -------------------------
         ORANGE2.setColor( "255:119:1" );
         ORANGE2.initialize();

         // ---------------------
         // -- Initialize #RED --
         // ---------------------
         RED.setColor( "217:11:11" );
         RED.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDGREY00 --
         // ----------------------------------
         BACKGROUNDGREY00.setBackgroundBrush( GREY00 );
         BACKGROUNDGREY00.initialize();

         // ------------------------------------------
         // -- Initialize #BACKGROUNDGREY00BORDERWH --
         // ------------------------------------------
         BACKGROUNDGREY00BORDERWH.setBackgroundBrush( GREY00 );
         BACKGROUNDGREY00BORDERWH.setBorderBrush( WHITE );
         BACKGROUNDGREY00BORDERWH.setBorderLeft( 1 );
         BACKGROUNDGREY00BORDERWH.setBorderRight( 2 );
         BACKGROUNDGREY00BORDERWH.setBorderTop( 1 );
         BACKGROUNDGREY00BORDERWH.setBorderBottom( 1 );
         BACKGROUNDGREY00BORDERWH.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDBLUE3 --
         // ---------------------------------
         BACKGROUNDBLUE3.setBackgroundBrush( BLUE3 );
         BACKGROUNDBLUE3.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDBLUE2 --
         // ---------------------------------
         BACKGROUNDBLUE2.setBackgroundBrush( BLUE2 );
         BACKGROUNDBLUE2.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDGREEN3 --
         // ----------------------------------
         BACKGROUNDGREEN3.setBackgroundBrush( GREEN3 );
         BACKGROUNDGREEN3.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDGREEN2 --
         // ----------------------------------
         BACKGROUNDGREEN2.setBackgroundBrush( GREEN2 );
         BACKGROUNDGREEN2.initialize();

         // -----------------------------------
         // -- Initialize #BACKGROUNDORANGE3 --
         // -----------------------------------
         BACKGROUNDORANGE3.setBackgroundBrush( ORANGE3 );
         BACKGROUNDORANGE3.initialize();

         // -----------------------------------
         // -- Initialize #BACKGROUNDORANGE2 --
         // -----------------------------------
         BACKGROUNDORANGE2.setBackgroundBrush( ORANGE2 );
         BACKGROUNDORANGE2.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDWHITE --
         // ---------------------------------
         BACKGROUNDWHITE.setBackgroundBrush( WHITE );
         BACKGROUNDWHITE.initialize();

         // -------------------------------------
         // -- Initialize #BACKGROUNDGREY00_50 --
         // -------------------------------------
         BACKGROUNDGREY00_50.setBackgroundBrush( GREY00_50 );
         BACKGROUNDGREY00_50.initialize();

         // -------------------------------------
         // -- Initialize #BACKGROUNDGREEN2_50 --
         // -------------------------------------
         BACKGROUNDGREEN2_50.setBackgroundBrush( GREEN2_50 );
         BACKGROUNDGREEN2_50.initialize();

         // -------------------------------
         // -- Initialize #PANELBORDERS1 --
         // -------------------------------
         PANELBORDERS1.setBorderTop( 1 );
         PANELBORDERS1.setBorderBottom( 1 );
         PANELBORDERS1.setBorderLeft( 1 );
         PANELBORDERS1.setBorderRight( 1 );
         PANELBORDERS1.setBorderBrush( GREY00 );
         PANELBORDERS1.setBackgroundBrush( WHITE );
         PANELBORDERS1.initialize();

         // -------------------------------
         // -- Initialize #PANELBORDERS2 --
         // -------------------------------
         PANELBORDERS2.setBorderTop( 1 );
         PANELBORDERS2.setBorderBottom( 1 );
         PANELBORDERS2.setBorderLeft( 1 );
         PANELBORDERS2.setBorderRight( 1 );
         PANELBORDERS2.setBorderBrush( GREEN3 );
         PANELBORDERS2.setBackgroundBrush( WHITE );
         PANELBORDERS2.initialize();

         // -------------------------------
         // -- Initialize #PANELBORDERS3 --
         // -------------------------------
         PANELBORDERS3.setBorderTop( 1 );
         PANELBORDERS3.setBorderBottom( 1 );
         PANELBORDERS3.setBorderLeft( 1 );
         PANELBORDERS3.setBorderRight( 1 );
         PANELBORDERS3.setBorderBrush( BLUE3 );
         PANELBORDERS3.setBackgroundBrush( WHITE );
         PANELBORDERS3.initialize();

         // -------------------------------------
         // -- Initialize #PANELBORDERS1BOTTOM --
         // -------------------------------------
         PANELBORDERS1BOTTOM.setBorderBottom( 1 );
         PANELBORDERS1BOTTOM.setBorderBrush( GREY00 );
         PANELBORDERS1BOTTOM.setBackgroundBrush( WHITE );
         PANELBORDERS1BOTTOM.initialize();

         // -------------------------------------
         // -- Initialize #PANELBORDERS2BOTTOM --
         // -------------------------------------
         PANELBORDERS2BOTTOM.setBorderBottom( 1 );
         PANELBORDERS2BOTTOM.setBorderBrush( GREEN3 );
         PANELBORDERS2BOTTOM.setBackgroundBrush( WHITE );
         PANELBORDERS2BOTTOM.initialize();

         // -------------------------------
         // -- Initialize #RIGHTWHBORDER --
         // -------------------------------
         RIGHTWHBORDER.setBorderRight( 1 );
         RIGHTWHBORDER.setBorderBottom( 0 );
         RIGHTWHBORDER.setBorderColor( "WHITE" );
         RIGHTWHBORDER.setBorderLeft( 0 );
         RIGHTWHBORDER.setBorderTop( 0 );
         RIGHTWHBORDER.initialize();

         // -----------------------------------
         // -- Initialize #TEXT10ALMOSTBLACK --
         // -----------------------------------
         TEXT10ALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT10ALMOSTBLACK.setFontSize( 10 );
         TEXT10ALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10ALMOSTBLACK.initialize();

         // ---------------------------
         // -- Initialize #TEXT10RED --
         // ---------------------------
         TEXT10RED.setForegroundBrush( RED );
         TEXT10RED.setFontSize( 10 );
         TEXT10RED.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10RED.initialize();

         // --------------------------
         // -- Initialize #TEXT10WH --
         // --------------------------
         TEXT10WH.setForegroundBrush( WHITE );
         TEXT10WH.setFontSize( 10 );
         TEXT10WH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10WH.initialize();

         // ---------------------------------------
         // -- Initialize #TEXT10BOLDALMOSTBLACK --
         // ---------------------------------------
         TEXT10BOLDALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT10BOLDALMOSTBLACK.setFontSize( 10 );
         TEXT10BOLDALMOSTBLACK.setBold( true );
         TEXT10BOLDALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10BOLDALMOSTBLACK.setBorderBottom( 0 );
         TEXT10BOLDALMOSTBLACK.setBorderLeft( 0 );
         TEXT10BOLDALMOSTBLACK.setBorderRight( 0 );
         TEXT10BOLDALMOSTBLACK.setBorderTop( 0 );
         TEXT10BOLDALMOSTBLACK.initialize();

         // -------------------------------
         // -- Initialize #TEXT10BOLDBL3 --
         // -------------------------------
         TEXT10BOLDBL3.setForegroundBrush( BLUE3 );
         TEXT10BOLDBL3.setFontSize( 10 );
         TEXT10BOLDBL3.setBold( true );
         TEXT10BOLDBL3.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10BOLDBL3.setCursor( "HAND" );
         TEXT10BOLDBL3.initialize();

         // ------------------------------
         // -- Initialize #TEXT10BOLDWH --
         // ------------------------------
         TEXT10BOLDWH.setForegroundBrush( WHITE );
         TEXT10BOLDWH.setFontSize( 10 );
         TEXT10BOLDWH.setBold( true );
         TEXT10BOLDWH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT10BOLDWH.initialize();

         // ---------------------------------------
         // -- Initialize #TEXT08BOLDALMOSTBLACK --
         // ---------------------------------------
         TEXT08BOLDALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT08BOLDALMOSTBLACK.setFontSize( 8 );
         TEXT08BOLDALMOSTBLACK.setBold( true );
         TEXT08BOLDALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT08BOLDALMOSTBLACK.initialize();

         // -----------------------------------
         // -- Initialize #TEXT08ALMOSTBLACK --
         // -----------------------------------
         TEXT08ALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT08ALMOSTBLACK.setFontSize( 8 );
         TEXT08ALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT08ALMOSTBLACK.initialize();

         // ---------------------------------------
         // -- Initialize #TEXT11BOLDALMOSTBLACK --
         // ---------------------------------------
         TEXT11BOLDALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT11BOLDALMOSTBLACK.setFontSize( 11 );
         TEXT11BOLDALMOSTBLACK.setBold( true );
         TEXT11BOLDALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDALMOSTBLACK.initialize();

         // -------------------------------
         // -- Initialize #TEXT11BOLDGN2 --
         // -------------------------------
         TEXT11BOLDGN2.setForegroundBrush( GREEN2 );
         TEXT11BOLDGN2.setFontSize( 11 );
         TEXT11BOLDGN2.setBold( true );
         TEXT11BOLDGN2.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDGN2.initialize();

         // -------------------------------
         // -- Initialize #TEXT11BOLDBL3 --
         // -------------------------------
         TEXT11BOLDBL3.setForegroundBrush( BLUE3 );
         TEXT11BOLDBL3.setFontSize( 11 );
         TEXT11BOLDBL3.setBold( true );
         TEXT11BOLDBL3.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDBL3.initialize();

         // ------------------------------
         // -- Initialize #TEXT11BOLDWH --
         // ------------------------------
         TEXT11BOLDWH.setForegroundBrush( WHITE );
         TEXT11BOLDWH.setFontSize( 11 );
         TEXT11BOLDWH.setBold( true );
         TEXT11BOLDWH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDWH.initialize();

         // -----------------------------------------------------
         // -- Initialize #TEXT11BOLDALMOSTBLACKBACKGROUNDGY00 --
         // -----------------------------------------------------
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.setFontSize( 11 );
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.setForegroundBrush( ALMOSTBLACK );
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.setBackgroundBrush( GREY00 );
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.setBold( true );
         TEXT11BOLDALMOSTBLACKBACKGROUNDGY00.initialize();

         // ----------------------------------------------
         // -- Initialize #TEXT11BOLDWHITEBACKGROUNDBL3 --
         // ----------------------------------------------
         TEXT11BOLDWHITEBACKGROUNDBL3.setFontSize( 11 );
         TEXT11BOLDWHITEBACKGROUNDBL3.setTextColor( "WHITE" );
         TEXT11BOLDWHITEBACKGROUNDBL3.setBackgroundBrush( BLUE3 );
         TEXT11BOLDWHITEBACKGROUNDBL3.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11BOLDWHITEBACKGROUNDBL3.setBold( true );
         TEXT11BOLDWHITEBACKGROUNDBL3.initialize();

         // -----------------------------------------------
         // -- Initialize #TEXT11ALMOSTBLACKBACKGROUNDWH --
         // -----------------------------------------------
         TEXT11ALMOSTBLACKBACKGROUNDWH.setFontSize( 11 );
         TEXT11ALMOSTBLACKBACKGROUNDWH.setBackgroundBrush( WHITE );
         TEXT11ALMOSTBLACKBACKGROUNDWH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT11ALMOSTBLACKBACKGROUNDWH.setForegroundBrush( ALMOSTBLACK );
         TEXT11ALMOSTBLACKBACKGROUNDWH.initialize();

         // --------------------------
         // -- Initialize #TEXT12WH --
         // --------------------------
         TEXT12WH.setTextColor( "WHITE" );
         TEXT12WH.setFontSize( 12 );
         TEXT12WH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT12WH.initialize();

         // -------------------------------
         // -- Initialize #TEXT12BOLDOR3 --
         // -------------------------------
         TEXT12BOLDOR3.setForegroundBrush( ORANGE3 );
         TEXT12BOLDOR3.setFontSize( 12 );
         TEXT12BOLDOR3.setBold( true );
         TEXT12BOLDOR3.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT12BOLDOR3.initialize();

         // -------------------------------
         // -- Initialize #TEXT12BOLDGN2 --
         // -------------------------------
         TEXT12BOLDGN2.setForegroundBrush( GREEN2 );
         TEXT12BOLDGN2.setFontSize( 12 );
         TEXT12BOLDGN2.setBold( true );
         TEXT12BOLDGN2.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT12BOLDGN2.initialize();

         // ---------------------------------------
         // -- Initialize #TEXT12BOLDALMOSTBLACK --
         // ---------------------------------------
         TEXT12BOLDALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         TEXT12BOLDALMOSTBLACK.setFontSize( 12 );
         TEXT12BOLDALMOSTBLACK.setBold( true );
         TEXT12BOLDALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT12BOLDALMOSTBLACK.setFontUnits( "POINT" );
         TEXT12BOLDALMOSTBLACK.initialize();

         // ------------------------------
         // -- Initialize #TEXT14BOLDWH --
         // ------------------------------
         TEXT14BOLDWH.setForegroundBrush( WHITE );
         TEXT14BOLDWH.setFontSize( 14 );
         TEXT14BOLDWH.setBold( true );
         TEXT14BOLDWH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT14BOLDWH.initialize();

         // ------------------------------
         // -- Initialize #TEXT30BOLDWH --
         // ------------------------------
         TEXT30BOLDWH.setForegroundBrush( WHITE );
         TEXT30BOLDWH.setFontSize( 30 );
         TEXT30BOLDWH.setBold( true );
         TEXT30BOLDWH.setFaceName( "Verdana, Geneva, sans-serif" );
         TEXT30BOLDWH.initialize();

         // -----------------------------------
         // -- Initialize #HREF08ALMOSTBLACK --
         // -----------------------------------
         HREF08ALMOSTBLACK.setUnderline( true );
         HREF08ALMOSTBLACK.setBold( true );
         HREF08ALMOSTBLACK.setFontSize( 8 );
         HREF08ALMOSTBLACK.setFaceName( "Verdana, Geneva, sans-serif" );
         HREF08ALMOSTBLACK.setForegroundBrush( ALMOSTBLACK );
         HREF08ALMOSTBLACK.setCursor( "HAND" );
         HREF08ALMOSTBLACK.initialize();

         // ------------------------------
         // -- Initialize #HREF10GREEN3 --
         // ------------------------------
         HREF10GREEN3.setUnderline( true );
         HREF10GREEN3.setBold( true );
         HREF10GREEN3.setFontSize( 10 );
         HREF10GREEN3.setFaceName( "Verdana, Geneva, sans-serif" );
         HREF10GREEN3.setForegroundBrush( GREEN3 );
         HREF10GREEN3.setCursor( "HAND" );
         HREF10GREEN3.initialize();

         // -----------------------------
         // -- Initialize #BUTTONWHBL3 --
         // -----------------------------
         BUTTONWHBL3.setFontSize( 12 );
         BUTTONWHBL3.setBackgroundBrush( WHITE );
         BUTTONWHBL3.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONWHBL3.setCursor( "HAND" );
         BUTTONWHBL3.setForegroundBrush( BLUE3 );
         BUTTONWHBL3.setBorderBottom( 2 );
         BUTTONWHBL3.setBorderLeft( 2 );
         BUTTONWHBL3.setBorderRight( 2 );
         BUTTONWHBL3.setBorderTop( 2 );
         BUTTONWHBL3.setBold( true );
         BUTTONWHBL3.setBorderBrush( BLUE3 );
         BUTTONWHBL3.initialize();

         // -----------------------------
         // -- Initialize #BUTTONWHBL2 --
         // -----------------------------
         BUTTONWHBL2.setFontSize( 12 );
         BUTTONWHBL2.setBackgroundBrush( WHITE );
         BUTTONWHBL2.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONWHBL2.setCursor( "HAND" );
         BUTTONWHBL2.setForegroundBrush( BLUE2 );
         BUTTONWHBL2.setBorderBottom( 2 );
         BUTTONWHBL2.setBorderLeft( 2 );
         BUTTONWHBL2.setBorderRight( 2 );
         BUTTONWHBL2.setBorderTop( 2 );
         BUTTONWHBL2.setBold( true );
         BUTTONWHBL2.setBorderBrush( BLUE2 );
         BUTTONWHBL2.initialize();

         // -----------------------------
         // -- Initialize #BUTTONWHGN3 --
         // -----------------------------
         BUTTONWHGN3.setFontSize( 12 );
         BUTTONWHGN3.setBackgroundBrush( WHITE );
         BUTTONWHGN3.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONWHGN3.setCursor( "HAND" );
         BUTTONWHGN3.setForegroundBrush( GREEN3 );
         BUTTONWHGN3.setBorderBottom( 2 );
         BUTTONWHGN3.setBorderLeft( 2 );
         BUTTONWHGN3.setBorderRight( 2 );
         BUTTONWHGN3.setBorderTop( 2 );
         BUTTONWHGN3.setBold( true );
         BUTTONWHGN3.setBorderBrush( GREEN3 );
         BUTTONWHGN3.initialize();

         // -----------------------------
         // -- Initialize #BUTTONWHGN2 --
         // -----------------------------
         BUTTONWHGN2.setFontSize( 12 );
         BUTTONWHGN2.setBackgroundBrush( WHITE );
         BUTTONWHGN2.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONWHGN2.setCursor( "HAND" );
         BUTTONWHGN2.setForegroundBrush( GREEN2 );
         BUTTONWHGN2.setBorderBottom( 2 );
         BUTTONWHGN2.setBorderLeft( 2 );
         BUTTONWHGN2.setBorderRight( 2 );
         BUTTONWHGN2.setBorderTop( 2 );
         BUTTONWHGN2.setBold( true );
         BUTTONWHGN2.setBorderBrush( GREEN2 );
         BUTTONWHGN2.initialize();

         // -----------------------------
         // -- Initialize #BUTTONGN3WH --
         // -----------------------------
         BUTTONGN3WH.setFontSize( 12 );
         BUTTONGN3WH.setTextColor( "WHITE" );
         BUTTONGN3WH.setBackgroundBrush( GREEN3 );
         BUTTONGN3WH.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONGN3WH.setCursor( "HAND" );
         BUTTONGN3WH.initialize();

         // -------------------------------
         // -- Initialize #BUTTONGN3GY00 --
         // -------------------------------
         BUTTONGN3GY00.setFontSize( 12 );
         BUTTONGN3GY00.setBackgroundBrush( GREEN3 );
         BUTTONGN3GY00.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONGN3GY00.setForegroundBrush( GREY00 );
         BUTTONGN3GY00.initialize();

         // -----------------------------
         // -- Initialize #BUTTONGN2WH --
         // -----------------------------
         BUTTONGN2WH.setFontSize( 12 );
         BUTTONGN2WH.setTextColor( "WHITE" );
         BUTTONGN2WH.setBackgroundBrush( GREEN2 );
         BUTTONGN2WH.setFaceName( "Verdana, Geneva, sans-serif" );
         BUTTONGN2WH.initialize();

         // -----------------------------
         // -- Initialize #BUTTONLOOK1 --
         // -----------------------------
         BUTTONLOOK1.setStyle( BUTTONGN3WH );
         BUTTONLOOK1.setMouseOverStyle( BUTTONGN2WH );
         BUTTONLOOK1.setPressedStyle( BUTTONGN3GY00 );
         BUTTONLOOK1.setFocusedStyle( BUTTONGN3GY00 );
         BUTTONLOOK1.initialize();

         // -----------------------------
         // -- Initialize #BUTTONLOOK2 --
         // -----------------------------
         BUTTONLOOK2.setStyle( BUTTONWHBL3 );
         BUTTONLOOK2.setMouseOverStyle( BUTTONWHBL2 );
         BUTTONLOOK2.setFocusedStyle( BUTTONWHBL3 );
         BUTTONLOOK2.initialize();

         // -----------------------------
         // -- Initialize #BUTTONLOOK3 --
         // -----------------------------
         BUTTONLOOK3.setStyle( BUTTONWHGN3 );
         BUTTONLOOK3.setMouseOverStyle( BUTTONWHGN2 );
         BUTTONLOOK3.setFocusedStyle( BUTTONWHGN3 );
         BUTTONLOOK3.initialize();

         // -------------------------------
         // -- Initialize #HEADEROPTIONS --
         // -------------------------------
         HEADEROPTIONS.setStyle( TEXT11BOLDALMOSTBLACK );
         HEADEROPTIONS.setMouseOverStyle( TEXT11BOLDGN2 );
         HEADEROPTIONS.setPressedStyle( TEXT11BOLDALMOSTBLACK );
         HEADEROPTIONS.initialize();

         // -----------------------------
         // -- Initialize #MENUOPTIONS --
         // -----------------------------
         MENUOPTIONS.setStyle( TEXT11BOLDWH );
         MENUOPTIONS.setMouseOverStyle( TEXT11BOLDGN2 );
         MENUOPTIONS.setPressedStyle( TEXT11BOLDALMOSTBLACK );
         MENUOPTIONS.initialize();

         // ------------------------
         // -- Initialize #PANEL1 --
         // ------------------------
         PANEL1.setStyle( PANELBORDERS1 );
         PANEL1.setMouseOverStyle( PANELBORDERS3 );
         PANEL1.initialize();

         // ------------------------------
         // -- Initialize #PANELHEADER1 --
         // ------------------------------
         PANELHEADER1.setStyle( TEXT11BOLDALMOSTBLACKBACKGROUNDGY00 );
         PANELHEADER1.setMouseOverStyle( TEXT11BOLDALMOSTBLACKBACKGROUNDGY00 );
         PANELHEADER1.initialize();

         // ------------------------------
         // -- Initialize #PANELHEADER2 --
         // ------------------------------
         PANELHEADER2.setStyle( TEXT11BOLDWHITEBACKGROUNDBL3 );
         PANELHEADER2.setMouseOverStyle( TEXT11BOLDWHITEBACKGROUNDBL3 );
         PANELHEADER2.initialize();

         // --------------------------
         // -- Initialize #DROPDOWN --
         // --------------------------
         DROPDOWN.setStyle( TEXT11ALMOSTBLACKBACKGROUNDWH );
         DROPDOWN.setMouseOverStyle( TEXT11ALMOSTBLACKBACKGROUNDWH );
         DROPDOWN.setFocusedStyle( BACKGROUNDBLUE3 );
         DROPDOWN.setSelectedStyle( BACKGROUNDBLUE2 );
         DROPDOWN.setSelectedInactiveStyle( BACKGROUNDORANGE2 );
         DROPDOWN.setPressedStyle( BACKGROUNDORANGE3 );
         DROPDOWN.setFocusedInactiveStyle( BACKGROUNDGREY00 );
         DROPDOWN.initialize();
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_THM", "PRIM_VS.SolidBrush", "PRIM_VS.Style", "PRIM_THM.DrawStyle" ]
});

//# sourceURL=xstheme01.js
