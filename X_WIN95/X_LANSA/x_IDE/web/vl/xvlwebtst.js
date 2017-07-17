// -------------------------
// -- Web Page: XVLWEBTST --
// -------------------------
LANSA.addComponent(
{
   id: "XVLWEBTST", 
   nm: "XVLWebTest", 
   ot: "wp", 
   tp: "Web Page", 
   de: "VL Web Configuration Test", 
   tl: 14020000
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

   if ( ( Lansa.getCurrentLanguage() == "FRA" ) || ( Lansa.getCurrentLanguage() == "JPN" ) || ( Lansa.getCurrentLanguage() == "LLL" ) )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "xslansaic.png" );
   var resource2 = Lansa.createBitmap( "xvlimage1.png" );
   var resource3 = Lansa.createBitmap( "xvlansahd.bmp" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      PROGRAMLIBRARY:
      {
         nm: "PROGRAMLIBRARY",
         ft: "VC",
         ln: 10,
         dc: 0,
         lb: "ProgramLibrary",
         h1: "ProgramLibrary",
         h2: "",
         h3: "",
         de: "ProgramLibrary",
         dv: ""
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
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
         this.addFields( "XVLWEBTST", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Maxwidth(792) Minwidth(792) Width(792) Units(Pixels)
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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(89) Units(Pixels)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1) Height(300) Units(Pixels)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(4) Parent(#TableLayout1) Height(89) Units(Pixels)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(5) Parent(#TableLayout1)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image1Item1) Manage(#Image1) Parent(#TableLayout1) Row(#Row2) Sizing(None) Column(#Column2) Alignment(BottomLeft)
         //
         var IMAGE1ITEM1 = this.createReference( "IMAGE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FooterItem1) Parent(#TableLayout1) Row(#Row4) Column(#Column2)
         //
         var FOOTERITEM1 = this.createReference( "FOOTERITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column2) Manage(#Body) Parent(#TableLayout1) Row(#Row3)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Column(#Column2) Manage(#Footer) Parent(#TableLayout1) Row(#Row4) Sizing(None) Alignment(TopLeft)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#CopyrightItem1) Column(#Column4) Manage(#Copyright) Parent(#TableLayout2) Row(#Row6) Sizing(None)
         //
         var COPYRIGHTITEM1 = this.createReference( "COPYRIGHTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout3)
         //
         var TABLELAYOUT3 = this.createReference( "TABLELAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#TableLayout3)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(1) Parent(#TableLayout3)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(2) Parent(#TableLayout3)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#ResponseItem1) Manage(#Response) Parent(#TableLayout3) Row(#Row7) Sizing(None) Column(#Column5) Alignment(BottomCenter)
         //
         var RESPONSEITEM1 = this.createReference( "RESPONSEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#SendRequestItem1) Manage(#SendRequest) Parent(#TableLayout3) Row(#Row8) Sizing(None) Column(#Column5)
         //
         var SENDREQUESTITEM1 = this.createReference( "SENDREQUESTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#White) Color(White)
         //
         var WHITE = this.createReference( "WHITE", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Blue1) Color(1:76:144)
         //
         var BLUE1 = this.createReference( "BLUE1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Blue2) Color(0:61:118)
         //
         var BLUE2 = this.createReference( "BLUE2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundBlue1) Facename('Arial') Backgroundbrush(#Blue1) Foregroundbrush(#White) Fontsize(11)
         //
         var BACKGROUNDBLUE1 = this.createReference( "BACKGROUNDBLUE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundBlue2) Facename('Arial') Backgroundbrush(#Blue2) Foregroundbrush(#White) Fontsize(8)
         //
         var BACKGROUNDBLUE2 = this.createReference( "BACKGROUNDBLUE2", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonStyle) Borderbottom(1) Borderleft(1) Borderright(1) Bordertop(1) Borderbrush(#White) Foregroundbrush(#White) Fontsize(11) Facename('Arial') Backgroundbrush(#Blue1)
         //
         var PUSHBUTTONSTYLE = this.createReference( "PUSHBUTTONSTYLE", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#PushButtonMouseover) Borderbottom(1) Borderleft(1) Borderright(1) Bordertop(1) Borderbrush(#White) Foregroundbrush(#White) Fontsize(11) Facename('Arial') Backgroundbrush(#Blue2) Normbackcolor(Transparent)
         //
         var PUSHBUTTONMOUSEOVER = this.createReference( "PUSHBUTTONMOUSEOVER", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#BackgroundTiling) Backgroundbrush(#ImageBrush)
         //
         var BACKGROUNDTILING = this.createReference( "BACKGROUNDTILING", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.ImageBrush) Name(#ImageBrush) Image(#XVLImage1) Tile(Tile)
         //
         var IMAGEBRUSH = this.createReference( "IMAGEBRUSH", "PRIM_VS", "ImageBrush" );

         //
         // DEFINE_COM Class(#prim_web.MessageBox) Name(#MyMessageBox)
         //
         var MYMESSAGEBOX = this.createReference( "MYMESSAGEBOX", "PRIM_WEB", "MessageBox" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image1) Displayposition(1) Height(89) Image(#XVLANSAHeader) Left(204) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(161) Width(792)
         //
         var IMAGE1 = this.createReference( "IMAGE1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Body) Displayposition(2) Height(300) Left(204) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(250) Width(792) Layoutmanager(#TableLayout3) Style(#BackgroundBlue1)
         //
         var BODY = this.createReference( "BODY", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Response) Caption('<Response>') Displayposition(1) Ellipses(Word) Height(68) Left(100) Parent(#Body) Tabposition(1) Tabstop(False) Top(82) Verticalalignment(Center) Width(592) Alignment(Center)
         //
         var RESPONSE = this.createReference( "RESPONSE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#SendRequest) Caption('Send Request to Application Server') Displayposition(2) Left(232) Parent(#Body) Tabposition(2) Top(204) Width(328) Height(42) Style(#PushButtonStyle) Mouseoverstyle(#PushButtonMouseover) Pressedstyle(#PushButtonStyle) Focusedstyle(#PushButtonStyle)
         //
         var SENDREQUEST = this.createReference( "SENDREQUEST", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#Footer) Displayposition(3) Left(204) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(550) Height(89) Width(792) Layoutmanager(#TableLayout2) Style(#BackgroundBlue2)
         //
         var FOOTER = this.createReference( "FOOTER", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Copyright) Caption('© LANSA 2016. All rights reserved.') Displayposition(1) Ellipses(Word) Height(25) Left(0) Tabposition(1) Tabstop(False) Top(32) Verticalalignment(Center) Width(792) Alignment(Center) Parent(#Footer)
         //
         var COPYRIGHT = this.createReference( "COPYRIGHT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XVLWebTest2.GetResponse) Name(#WebServerRequest)
         //
         var WEBSERVERREQUEST = this.createDataRequest( "WEBSERVERREQUEST", "XVLWEBTS2", "GETRESPONSE" );

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
         COLUMN2.setMaxWidth( 792 );
         COLUMN2.setMinWidth( 792 );
         COLUMN2.setWidth( 792 );
         COLUMN2.setUnits( "PIXELS" );
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

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( 89 );
         ROW2.setUnits( "PIXELS" );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.setHeight( 300 );
         ROW3.setUnits( "PIXELS" );
         ROW3.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 4 );
         ROW4.setParent( TABLELAYOUT1 );
         ROW4.setHeight( 89 );
         ROW4.setUnits( "PIXELS" );
         ROW4.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 5 );
         ROW5.setParent( TABLELAYOUT1 );
         ROW5.initialize();

         // -----------------------------
         // -- Initialize #IMAGE1ITEM1 --
         // -----------------------------
         IMAGE1ITEM1.setManage( IMAGE1 );
         IMAGE1ITEM1.setParent( TABLELAYOUT1 );
         IMAGE1ITEM1.setRow( ROW2 );
         IMAGE1ITEM1.setSizing( "NONE" );
         IMAGE1ITEM1.setColumn( COLUMN2 );
         IMAGE1ITEM1.setAlignment( "BOTTOMLEFT" );
         IMAGE1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #FOOTERITEM1 --
         // -----------------------------
         FOOTERITEM1.setParent( TABLELAYOUT1 );
         FOOTERITEM1.setRow( ROW4 );
         FOOTERITEM1.setColumn( COLUMN2 );
         FOOTERITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setManage( BODY );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW3 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setColumn( COLUMN2 );
         LAYOUTITEM2.setManage( FOOTER );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW4 );
         LAYOUTITEM2.setSizing( "NONE" );
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 1 );
         COLUMN4.setParent( TABLELAYOUT2 );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 1 );
         ROW6.setParent( TABLELAYOUT2 );
         ROW6.initialize();

         // --------------------------------
         // -- Initialize #COPYRIGHTITEM1 --
         // --------------------------------
         COPYRIGHTITEM1.setColumn( COLUMN4 );
         COPYRIGHTITEM1.setManage( COPYRIGHT );
         COPYRIGHTITEM1.setParent( TABLELAYOUT2 );
         COPYRIGHTITEM1.setRow( ROW6 );
         COPYRIGHTITEM1.setSizing( "NONE" );
         COPYRIGHTITEM1.initialize();

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

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 1 );
         ROW7.setParent( TABLELAYOUT3 );
         ROW7.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 2 );
         ROW8.setParent( TABLELAYOUT3 );
         ROW8.initialize();

         // -------------------------------
         // -- Initialize #RESPONSEITEM1 --
         // -------------------------------
         RESPONSEITEM1.setManage( RESPONSE );
         RESPONSEITEM1.setParent( TABLELAYOUT3 );
         RESPONSEITEM1.setRow( ROW7 );
         RESPONSEITEM1.setSizing( "NONE" );
         RESPONSEITEM1.setColumn( COLUMN5 );
         RESPONSEITEM1.setAlignment( "BOTTOMCENTER" );
         RESPONSEITEM1.initialize();

         // ----------------------------------
         // -- Initialize #SENDREQUESTITEM1 --
         // ----------------------------------
         SENDREQUESTITEM1.setManage( SENDREQUEST );
         SENDREQUESTITEM1.setParent( TABLELAYOUT3 );
         SENDREQUESTITEM1.setRow( ROW8 );
         SENDREQUESTITEM1.setSizing( "NONE" );
         SENDREQUESTITEM1.setColumn( COLUMN5 );
         SENDREQUESTITEM1.initialize();

         // -----------------------
         // -- Initialize #WHITE --
         // -----------------------
         WHITE.setColor( "WHITE" );
         WHITE.initialize();

         // -----------------------
         // -- Initialize #BLUE1 --
         // -----------------------
         BLUE1.setColor( "1:76:144" );
         BLUE1.initialize();

         // -----------------------
         // -- Initialize #BLUE2 --
         // -----------------------
         BLUE2.setColor( "0:61:118" );
         BLUE2.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDBLUE1 --
         // ---------------------------------
         BACKGROUNDBLUE1.setFaceName( "Arial" );
         BACKGROUNDBLUE1.setBackgroundBrush( BLUE1 );
         BACKGROUNDBLUE1.setForegroundBrush( WHITE );
         BACKGROUNDBLUE1.setFontSize( 11 );
         BACKGROUNDBLUE1.initialize();

         // ---------------------------------
         // -- Initialize #BACKGROUNDBLUE2 --
         // ---------------------------------
         BACKGROUNDBLUE2.setFaceName( "Arial" );
         BACKGROUNDBLUE2.setBackgroundBrush( BLUE2 );
         BACKGROUNDBLUE2.setForegroundBrush( WHITE );
         BACKGROUNDBLUE2.setFontSize( 8 );
         BACKGROUNDBLUE2.initialize();

         // ---------------------------------
         // -- Initialize #PUSHBUTTONSTYLE --
         // ---------------------------------
         PUSHBUTTONSTYLE.setBorderBottom( 1 );
         PUSHBUTTONSTYLE.setBorderLeft( 1 );
         PUSHBUTTONSTYLE.setBorderRight( 1 );
         PUSHBUTTONSTYLE.setBorderTop( 1 );
         PUSHBUTTONSTYLE.setBorderBrush( WHITE );
         PUSHBUTTONSTYLE.setForegroundBrush( WHITE );
         PUSHBUTTONSTYLE.setFontSize( 11 );
         PUSHBUTTONSTYLE.setFaceName( "Arial" );
         PUSHBUTTONSTYLE.setBackgroundBrush( BLUE1 );
         PUSHBUTTONSTYLE.initialize();

         // -------------------------------------
         // -- Initialize #PUSHBUTTONMOUSEOVER --
         // -------------------------------------
         PUSHBUTTONMOUSEOVER.setBorderBottom( 1 );
         PUSHBUTTONMOUSEOVER.setBorderLeft( 1 );
         PUSHBUTTONMOUSEOVER.setBorderRight( 1 );
         PUSHBUTTONMOUSEOVER.setBorderTop( 1 );
         PUSHBUTTONMOUSEOVER.setBorderBrush( WHITE );
         PUSHBUTTONMOUSEOVER.setForegroundBrush( WHITE );
         PUSHBUTTONMOUSEOVER.setFontSize( 11 );
         PUSHBUTTONMOUSEOVER.setFaceName( "Arial" );
         PUSHBUTTONMOUSEOVER.setBackgroundBrush( BLUE2 );
         PUSHBUTTONMOUSEOVER.setNormBackColor( "TRANSPARENT" );
         PUSHBUTTONMOUSEOVER.initialize();

         // ----------------------------------
         // -- Initialize #BACKGROUNDTILING --
         // ----------------------------------
         BACKGROUNDTILING.setBackgroundBrush( IMAGEBRUSH );
         BACKGROUNDTILING.initialize();

         // ----------------------------
         // -- Initialize #IMAGEBRUSH --
         // ----------------------------
         IMAGEBRUSH.setImage( resource2 );
         IMAGEBRUSH.setTile( "TILE" );
         IMAGEBRUSH.initialize();

         // ------------------------------
         // -- Initialize #MYMESSAGEBOX --
         // ------------------------------
         MYMESSAGEBOX.initialize();

         // ------------------------
         // -- Initialize #IMAGE1 --
         // ------------------------
         IMAGE1.setDisplayPosition( 1 );
         IMAGE1.setHeight( 89 );
         IMAGE1.setImage( resource3 );
         IMAGE1.setLeft( 204 );
         IMAGE1.setParent( this );
         IMAGE1.setTabPosition( 1 );
         IMAGE1.setTabStop( false );
         IMAGE1.setTop( 161 );
         IMAGE1.setWidth( 792 );
         IMAGE1.initialize();

         // ----------------------
         // -- Initialize #BODY --
         // ----------------------
         BODY.setDisplayPosition( 2 );
         BODY.setHeight( 300 );
         BODY.setLeft( 204 );
         BODY.setParent( this );
         BODY.setTabPosition( 2 );
         BODY.setTabStop( false );
         BODY.setTop( 250 );
         BODY.setWidth( 792 );
         BODY.setLayoutManager( TABLELAYOUT3 );
         BODY.setStyle( BACKGROUNDBLUE1 );
         BODY.initialize();

         // --------------------------
         // -- Initialize #RESPONSE --
         // --------------------------
         RESPONSE.setCaption( "<Response>" );
         RESPONSE.setDisplayPosition( 1 );
         RESPONSE.setEllipses( "WORD" );
         RESPONSE.setHeight( 68 );
         RESPONSE.setLeft( 100 );
         RESPONSE.setParent( BODY );
         RESPONSE.setTabPosition( 1 );
         RESPONSE.setTabStop( false );
         RESPONSE.setTop( 82 );
         RESPONSE.setVerticalAlignment( "CENTER" );
         RESPONSE.setWidth( 592 );
         RESPONSE.setAlignment( "CENTER" );
         RESPONSE.initialize();

         // -----------------------------
         // -- Initialize #SENDREQUEST --
         // -----------------------------
         SENDREQUEST.setCaption( "Send Request to Application Server" );
         SENDREQUEST.setDisplayPosition( 2 );
         SENDREQUEST.setLeft( 232 );
         SENDREQUEST.setParent( BODY );
         SENDREQUEST.setTabPosition( 2 );
         SENDREQUEST.setTop( 204 );
         SENDREQUEST.setWidth( 328 );
         SENDREQUEST.setHeight( 42 );
         SENDREQUEST.setStyle( PUSHBUTTONSTYLE );
         SENDREQUEST.setMouseOverStyle( PUSHBUTTONMOUSEOVER );
         SENDREQUEST.setPressedStyle( PUSHBUTTONSTYLE );
         SENDREQUEST.setFocusedStyle( PUSHBUTTONSTYLE );
         SENDREQUEST.initialize();

         // ------------------------
         // -- Initialize #FOOTER --
         // ------------------------
         FOOTER.setDisplayPosition( 3 );
         FOOTER.setLeft( 204 );
         FOOTER.setParent( this );
         FOOTER.setTabPosition( 3 );
         FOOTER.setTabStop( false );
         FOOTER.setTop( 550 );
         FOOTER.setHeight( 89 );
         FOOTER.setWidth( 792 );
         FOOTER.setLayoutManager( TABLELAYOUT2 );
         FOOTER.setStyle( BACKGROUNDBLUE2 );
         FOOTER.initialize();

         // ---------------------------
         // -- Initialize #COPYRIGHT --
         // ---------------------------
         COPYRIGHT.setCaption( "© LANSA 2016. All rights reserved." );
         COPYRIGHT.setDisplayPosition( 1 );
         COPYRIGHT.setEllipses( "WORD" );
         COPYRIGHT.setHeight( 25 );
         COPYRIGHT.setLeft( 0 );
         COPYRIGHT.setTabPosition( 1 );
         COPYRIGHT.setTabStop( false );
         COPYRIGHT.setTop( 32 );
         COPYRIGHT.setVerticalAlignment( "CENTER" );
         COPYRIGHT.setWidth( 792 );
         COPYRIGHT.setAlignment( "CENTER" );
         COPYRIGHT.setParent( FOOTER );
         COPYRIGHT.initialize();

         // ----------------------------------
         // -- Initialize #WEBSERVERREQUEST --
         // ----------------------------------
         WEBSERVERREQUEST.initialize();

         // -----------------------------------------
         // -- Add Event Handlers for #SENDREQUEST --
         // -----------------------------------------
         SENDREQUEST.addEventHandler( "CLICK", this, evtRoutine2 );

         // ----------------------------------------------
         // -- Add Event Handlers for #WEBSERVERREQUEST --
         // ----------------------------------------------
         WEBSERVERREQUEST.addEventHandler( "COMPLETED", this, evtRoutine3 );
         WEBSERVERREQUEST.addEventHandler( "FAILED", this, evtRoutine4 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( BACKGROUNDTILING );
         this.setIcon( resource1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 58 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 58 );
      {

         //
         // #Response := 'The Web Server is running.  Press the button to test the Application Server.'
         //
         rtn.Line( 60 );
         ref.RESPONSE.set( "The Web Server is running.  Press the button to test the Application Server." );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 62 );
      rtn.end();
   };

   //
   // evtRoutine2 - #SendRequest.Click
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.XVLWEBTST, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SendRequest.Click", 64 );

      //
      // EVTROUTINE Handling(#SendRequest.Click)
      //
      rtn.Line( 64 );
      {

         //
         // #WebServerRequest.Execute( #ProgramLibrary )
         //
         rtn.Line( 68 );
         ref.WEBSERVERREQUEST.mthEXECUTE( {  }, { FLD: { "PROGRAMLIBRARY": fld.PROGRAMLIBRARY } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      rtn.end();
   };

   //
   // evtRoutine3 - #WebServerRequest.Completed
   //
   function evtRoutine3( sender, parms )
   {
      var fld = this.FLD.XVLWEBTST, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#WebServerRequest.Completed", 72 );

      //
      // EVTROUTINE Handling(#WebServerRequest.Completed)
      //
      rtn.Line( 72 );
      {

         //
         // #Response := 'The Application Server responded.  The current LANSA system program library is ' + #ProgramLibrary + '.'
         //
         rtn.Line( 74 );
         ref.RESPONSE.set( Lansa.cat( Lansa.cat( "The Application Server responded.  The current LANSA system program library is ", fld.PROGRAMLIBRARY.get() ), "." ) );

         //
         // #SendRequest.Visible := false
         //
         rtn.Line( 76 );
         ref.SENDREQUEST.setVisible( false );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 78 );
      rtn.end();
   };

   //
   // evtRoutine4 - #WebServerRequest.Failed
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#WebServerRequest.Failed", 80 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var REASON = parms.ref( "REASON" );

      //
      // EVTROUTINE Handling(#WebServerRequest.Failed) Reason(#reason)
      //
      rtn.Line( 80 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 84 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_VS.SolidBrush", "PRIM_VS.Style", "PRIM_VS.ImageBrush", "PRIM_WEB.MessageBox", "PRIM_IMAG", "PRIM_PANL", "PRIM_LABL", "PRIM_PHBN", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xvlwebtst.js
