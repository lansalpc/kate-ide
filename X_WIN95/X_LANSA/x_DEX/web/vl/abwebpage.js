// -------------------------
// -- Web Page: ABWEBPAGE --
// -------------------------
LANSA.addComponent(
{
   id: "ABWEBPAGE", 
   nm: "abwebpage", 
   ot: "wp", 
   tp: "Web Page", 
   de: "test page", 
   tl: 14010001
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // ---------------
   // -- Constants --
   // ---------------
   var 
      const1 = Lansa.createDecimal( "1.7" );

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "ximagec_9.png" );

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
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1) Width(185) Units(Pixels)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(1.7)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(50) Units(Pixels)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#FilePicker1Item1) Alignment(TopCenter) Column(#Column1) Manage(#FilePicker) Parent(#TableLayout1) Row(#Row1) Sizing(None) Margintop(6)
         //
         var FILEPICKER1ITEM1 = this.createReference( "FILEPICKER1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Image1Item1) Column(#Column2) Manage(#Image) Parent(#TableLayout1) Row(#Row1) Margintop(6) Marginright(6) Marginbottom(6) Marginleft(6)
         //
         var IMAGE1ITEM1 = this.createReference( "IMAGE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label1Item1) Alignment(BottomCenter) Column(#Column2) Manage(#Filename) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Marginbottom(12) Marginright(12) Marginleft(12)
         //
         var LABEL1ITEM1 = this.createReference( "LABEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_WEB.FilePicker) Name(#FilePicker) Displayposition(2) Ellipses(Word) Height(56) Left(8) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(6) Verticalalignment(Center) Width(169) Image(#xImageCamera32) Caption('Select an Image') Marginleft(8) Themedrawstyle('PushButton')
         //
         var FILEPICKER = this.createReference( "FILEPICKER", "PRIM_WEB", "FilePicker" );

         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image) Displayposition(3) Left(191) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(6) Height(738) Width(1003)
         //
         var IMAGE = this.createReference( "IMAGE", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Filename) Displayposition(1) Ellipses(Word) Height(55) Left(197) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(733) Verticalalignment(Center) Width(991) Alignment(Center) Themedrawstyle('Heading1')
         //
         var FILENAME = this.createReference( "FILENAME", "PRIM_LABL" );

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.setWidth( 185 );
         COLUMN1.setUnits( "PIXELS" );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.setWidth( const1 );
         COLUMN2.initialize();

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
         ROW2.setHeight( 50 );
         ROW2.setUnits( "PIXELS" );
         ROW2.initialize();

         // ----------------------------------
         // -- Initialize #FILEPICKER1ITEM1 --
         // ----------------------------------
         FILEPICKER1ITEM1.setAlignment( "TOPCENTER" );
         FILEPICKER1ITEM1.setColumn( COLUMN1 );
         FILEPICKER1ITEM1.setManage( FILEPICKER );
         FILEPICKER1ITEM1.setParent( TABLELAYOUT1 );
         FILEPICKER1ITEM1.setRow( ROW1 );
         FILEPICKER1ITEM1.setSizing( "NONE" );
         FILEPICKER1ITEM1.setMarginTop( 6 );
         FILEPICKER1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #IMAGE1ITEM1 --
         // -----------------------------
         IMAGE1ITEM1.setColumn( COLUMN2 );
         IMAGE1ITEM1.setManage( IMAGE );
         IMAGE1ITEM1.setParent( TABLELAYOUT1 );
         IMAGE1ITEM1.setRow( ROW1 );
         IMAGE1ITEM1.setMarginTop( 6 );
         IMAGE1ITEM1.setMarginRight( 6 );
         IMAGE1ITEM1.setMarginBottom( 6 );
         IMAGE1ITEM1.setMarginLeft( 6 );
         IMAGE1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LABEL1ITEM1 --
         // -----------------------------
         LABEL1ITEM1.setAlignment( "BOTTOMCENTER" );
         LABEL1ITEM1.setColumn( COLUMN2 );
         LABEL1ITEM1.setManage( FILENAME );
         LABEL1ITEM1.setParent( TABLELAYOUT1 );
         LABEL1ITEM1.setRow( ROW2 );
         LABEL1ITEM1.setSizing( "FITTOWIDTH" );
         LABEL1ITEM1.setMarginBottom( 12 );
         LABEL1ITEM1.setMarginRight( 12 );
         LABEL1ITEM1.setMarginLeft( 12 );
         LABEL1ITEM1.initialize();

         // ----------------------------
         // -- Initialize #FILEPICKER --
         // ----------------------------
         FILEPICKER.setDisplayPosition( 2 );
         FILEPICKER.setEllipses( "WORD" );
         FILEPICKER.setHeight( 56 );
         FILEPICKER.setLeft( 8 );
         FILEPICKER.setParent( this );
         FILEPICKER.setTabPosition( 1 );
         FILEPICKER.setTabStop( false );
         FILEPICKER.setTop( 6 );
         FILEPICKER.setVerticalAlignment( "CENTER" );
         FILEPICKER.setWidth( 169 );
         FILEPICKER.setImage( resource1 );
         FILEPICKER.setCaption( "Select an Image" );
         FILEPICKER.setMarginLeft( 8 );
         FILEPICKER.setThemeDrawStyle( "PushButton" );
         FILEPICKER.initialize();

         // -----------------------
         // -- Initialize #IMAGE --
         // -----------------------
         IMAGE.setDisplayPosition( 3 );
         IMAGE.setLeft( 191 );
         IMAGE.setParent( this );
         IMAGE.setTabPosition( 2 );
         IMAGE.setTabStop( false );
         IMAGE.setTop( 6 );
         IMAGE.setHeight( 738 );
         IMAGE.setWidth( 1003 );
         IMAGE.initialize();

         // --------------------------
         // -- Initialize #FILENAME --
         // --------------------------
         FILENAME.setDisplayPosition( 1 );
         FILENAME.setEllipses( "WORD" );
         FILENAME.setHeight( 55 );
         FILENAME.setLeft( 197 );
         FILENAME.setParent( this );
         FILENAME.setTabPosition( 3 );
         FILENAME.setTabStop( false );
         FILENAME.setTop( 733 );
         FILENAME.setVerticalAlignment( "CENTER" );
         FILENAME.setWidth( 991 );
         FILENAME.setAlignment( "CENTER" );
         FILENAME.setThemeDrawStyle( "Heading1" );
         FILENAME.initialize();

         // ----------------------------------------
         // -- Add Event Handlers for #FILEPICKER --
         // ----------------------------------------
         FILEPICKER.addEventHandler( "FILESELECTED", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( TABLELAYOUT1 );
         this.setTheme( Lansa.THEME().get( "2015DEEPORANGE" ) );

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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 16 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 16 );
      {

         //
         // #sys_web.alert( 'here' )
         //
         rtn.Line( 18 );
         Lansa.WEB().mthALERT( "here" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      rtn.end();
   };

   //
   // evtRoutine2 - #FilePicker.FileSelected
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#FilePicker.FileSelected", 22 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var FILE = parms.ref( "FILE" );

      //
      // DEFINE_COM Class(#aaservermod.saveimage) Name(#saveImage)
      //
      var SAVEIMAGE = rtn.createDataRequest( "SAVEIMAGE", "AASERVERM", "SAVEIMAGE" );

      // ---------------------------
      // -- Initialize #SAVEIMAGE --
      // ---------------------------
      SAVEIMAGE.initialize();

      //
      // EVTROUTINE Handling(#FilePicker.FileSelected) File(#File)
      //
      rtn.Line( 22 );
      {

         //
         // #Image.Image <= #sys_appln.Createbitmap( #File.blob )
         //
         rtn.Line( 27 );
         ref.IMAGE.setImage( Lansa.APPL().mthCREATEBITMAP( FILE.getBlob() ) );

         //
         // #Filename := #File.blob
         //
         rtn.Line( 29 );
         ref.FILENAME.set( FILE.getBlob() );

         //
         // #saveImage.ExecuteAsync( #File.Blob )
         //
         rtn.Line( 31 );
         SAVEIMAGE.mthEXECUTEASYNC( { FLD: { "XEMPIMG": FILE.getBlob() } }, {  } );

         //
         // #sys_web.alert( 'back again' )
         //
         rtn.Line( 33 );
         Lansa.WEB().mthALERT( "back again" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
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
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_WEB.FilePicker", "PRIM_IMAG", "PRIM_LABL", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=abwebpage.js
