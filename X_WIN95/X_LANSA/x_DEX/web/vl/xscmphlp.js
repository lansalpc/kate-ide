// -----------------------------
// -- Reusable Part: XSCMPHLP --
// -----------------------------
LANSA.addComponent(
{
   id: "XSCMPHLP", 
   nm: "XSComponentHelp", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Component Information", 
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
      STD_TEXTL:
      {
         nm: "STD_TEXTL",
         ft: "A",
         ln: 75,
         dc: 0,
         lb: "Text",
         h1: "Text",
         h2: " ",
         h3: " ",
         de: "Standard TEXT, LONG",
         dv: "",
         ia: [ "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         p_TopComponent: 
         {
            da: "rw"
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
         this.addFields( "XSCMPHLP", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#StyleBlack) Foregroundbrush(#Brush2) Bold(True) Fontsize(16) Backgroundbrush(#Brush1) Cursor(Hand)
         //
         var STYLEBLACK = this.createReference( "STYLEBLACK", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(255:255:255)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(0:0:0)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label1Item1) Column(#Column1) Manage(#ComponentInfo) Parent(#TableLayout1) Row(#Row1) Alignment(TopCenter)
         //
         var LABEL1ITEM1 = this.createReference( "LABEL1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#ComponentInfo) Caption('?') Displayposition(1) Ellipses(Word) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Alignment(Center) Style(#StyleBlack) Height(40) Width(40)
         //
         var COMPONENTINFO = this.createReference( "COMPONENTINFO", "PRIM_LABL" );

         // ----------------------------
         // -- Initialize #STYLEBLACK --
         // ----------------------------
         STYLEBLACK.setForegroundBrush( BRUSH2 );
         STYLEBLACK.setBold( true );
         STYLEBLACK.setFontSize( 16 );
         STYLEBLACK.setBackgroundBrush( BRUSH1 );
         STYLEBLACK.setCursor( "HAND" );
         STYLEBLACK.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "255:255:255" );
         BRUSH1.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "0:0:0" );
         BRUSH2.initialize();

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
         // -- Initialize #LABEL1ITEM1 --
         // -----------------------------
         LABEL1ITEM1.setColumn( COLUMN1 );
         LABEL1ITEM1.setManage( COMPONENTINFO );
         LABEL1ITEM1.setParent( TABLELAYOUT1 );
         LABEL1ITEM1.setRow( ROW1 );
         LABEL1ITEM1.setAlignment( "TOPCENTER" );
         LABEL1ITEM1.initialize();

         // -------------------------------
         // -- Initialize #COMPONENTINFO --
         // -------------------------------
         COMPONENTINFO.setCaption( "?" );
         COMPONENTINFO.setDisplayPosition( 1 );
         COMPONENTINFO.setEllipses( "WORD" );
         COMPONENTINFO.setLeft( 0 );
         COMPONENTINFO.setParent( this );
         COMPONENTINFO.setTabPosition( 1 );
         COMPONENTINFO.setTabStop( false );
         COMPONENTINFO.setTop( 0 );
         COMPONENTINFO.setVerticalAlignment( "CENTER" );
         COMPONENTINFO.setAlignment( "CENTER" );
         COMPONENTINFO.setStyle( STYLEBLACK );
         COMPONENTINFO.setHeight( 40 );
         COMPONENTINFO.setWidth( 40 );
         COMPONENTINFO.initialize();

         // -------------------------------------------
         // -- Add Event Handlers for #COMPONENTINFO --
         // -------------------------------------------
         COMPONENTINFO.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setWidth( 40 );
         this.setHeight( 40 );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 17 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 17 );
      {

         //
         // #ComponentInfo.hint := #com_owner.p_TopComponent
         //
         rtn.Line( 19 );
         ref.COMPONENTINFO.setHint( this.getP_TOPCOMPONENT() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 21 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ComponentInfo.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ComponentInfo.Click", 23 );

      //
      // EVTROUTINE Handling(#ComponentInfo.Click)
      //
      rtn.Line( 23 );
      {

         //
         // CASE (#com_owner.p_TopComponent)
         //
         rtn.Line( 25 );
         {
            var value1 = this.getP_TOPCOMPONENT();

            //
            // WHEN ('= XSBANNER')
            //
            if ( rtn.Line( 27 ), Lansa.String.eq( value1, "XSBANNER" ) )
            {

               //
               // #sys_web.Navigate( ("/images/LANSATools/LANSATools explained 1.pdf#6 Creating A Menu") New )
               //
               rtn.Line( 29 );
               Lansa.WEB().mthNAVIGATE( "/images/LANSATools/LANSATools explained 1.pdf#6 Creating A Menu", "NEW" );
            }

            //
            // WHEN ('= XSMENU')
            //
            else if ( rtn.Line( 31 ), Lansa.String.eq( value1, "XSMENU" ) )
            {

               //
               // #sys_web.Navigate( ("/images/LANSATools/LANSATools explained 1.pdf#7 Creating A Banner") New )
               //
               rtn.Line( 33 );
               Lansa.WEB().mthNAVIGATE( "/images/LANSATools/LANSATools explained 1.pdf#7 Creating A Banner", "NEW" );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #sys_web.Navigate( ("/images/LANSATools/LANSATools explained 1.pdf") New )
               //
               rtn.Line( 38 );
               Lansa.WEB().mthNAVIGATE( "/images/LANSATools/LANSATools explained 1.pdf", "NEW" );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 40 );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(p_TopComponent) Get(*auto #std_textl) Set(*auto #std_textl)
   //
   COM_OWNER.getP_TOPCOMPONENT = function()
   {
      return this.FLD.XSCMPHLP.STD_TEXTL.get();
   };

   COM_OWNER.setP_TOPCOMPONENT = function( value )
   {
      this.FLD.XSCMPHLP.STD_TEXTL.set( value );
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_HINT" ]
});

//# sourceURL=xscmphlp.js
