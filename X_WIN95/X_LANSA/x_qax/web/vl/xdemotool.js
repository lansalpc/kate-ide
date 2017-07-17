// -------------------------
// -- Web Page: XDEMOTOOL --
// -------------------------
LANSA.addComponent(
{
   id: "XDEMOTOOL", 
   nm: "xDemoTools", 
   ot: "wp", 
   tp: "Web Page", 
   de: "LANSA Tools", 
   tl: 14010000
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
         // DEFINE_COM Class(#PRIM_DESN) Name(#Designs)
         //
         var DESIGNS = this.createReference( "DESIGNS", "PRIM_DESN" );

         //
         // DEFINE_COM Class(#PRIM_DESN.Design) Name(#Mobile) Designmanager(#Designs) Width(640)
         //
         var MOBILE = this.createReference( "MOBILE", "PRIM_DESN", "Design" );

         //
         // DEFINE_COM Class(#PRIM_DESN.Design) Name(#Tablet) Designmanager(#Designs) Width(1024)
         //
         var TABLET = this.createReference( "TABLET", "PRIM_DESN", "Design" );

         //
         // DEFINE_COM Class(#xDemoToolsApplication) Name(#gApplication) Scope(*Application)
         //
         var GAPPLICATION = this.createApplicationReference( "GAPPLICATION", "XDEMO_48" );

         //
         // DEFINE_COM Class(#PRIM_ATLM) Name(#AttachLayout1) Margintop(8) Marginright(8) Marginleft(8)
         //
         var ATTACHLAYOUT1 = this.createReference( "ATTACHLAYOUT1", "PRIM_ATLM" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem1) Attachment(Top) Manage(#Header) Parent(#AttachLayout1)
         //
         var ATTACHITEM1 = this.createReference( "ATTACHITEM1", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem2) Attachment(Top) Manage(#Menu) Parent(#AttachLayout1) Margintop(8)
         //
         var ATTACHITEM2 = this.createReference( "ATTACHITEM2", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem4) Attachment(Top) Manage(#Footer) Parent(#AttachLayout1) Margintop(8)
         //
         var ATTACHITEM4 = this.createReference( "ATTACHITEM4", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem3) Attachment(Top) Manage(#Body) Parent(#AttachLayout1) Margintop(8)
         //
         var ATTACHITEM3 = this.createReference( "ATTACHITEM3", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#xDemoToolsHeader) Name(#Header) Parent(#COM_OWNER) Tabstop(False) Width(1136) Top(8) Left(8)
         //
         var HEADER = this.createReference( "HEADER", "XDEMO_50" );

         //
         // DEFINE_COM Class(#xDemoToolsMenu) Name(#Menu) Displayposition(2) Left(8) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(106) Width(1136)
         //
         var MENU = this.createReference( "MENU", "XDEMO_54" );

         //
         // DEFINE_COM Class(#xDemoToolsFooter) Name(#Footer) Displayposition(4) Height(184) Left(8) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(874) Width(1136)
         //
         var FOOTER = this.createReference( "FOOTER", "XDEMO_58" );

         //
         // DEFINE_COM Class(#xDemoToolsBody) Name(#Body) Displayposition(3) Left(8) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(147) Width(1136) Height(719)
         //
         var BODY = this.createReference( "BODY", "XDEMO_56" );

         // -------------------------
         // -- Initialize #DESIGNS --
         // -------------------------
         DESIGNS.initialize();

         // ------------------------
         // -- Initialize #MOBILE --
         // ------------------------
         MOBILE.setDesignManager( DESIGNS );
         MOBILE.setWidth( 640 );
         MOBILE.initialize();

         // ------------------------
         // -- Initialize #TABLET --
         // ------------------------
         TABLET.setDesignManager( DESIGNS );
         TABLET.setWidth( 1024 );
         TABLET.initialize();

         // ------------------------------
         // -- Initialize #GAPPLICATION --
         // ------------------------------
         if ( ( GAPPLICATION != null ) && ( GAPPLICATION.isInitialized() == false ) )
         {
            GAPPLICATION.initialize();
         }

         // -------------------------------
         // -- Initialize #ATTACHLAYOUT1 --
         // -------------------------------
         ATTACHLAYOUT1.setMarginTop( 8 );
         ATTACHLAYOUT1.setMarginRight( 8 );
         ATTACHLAYOUT1.setMarginLeft( 8 );
         ATTACHLAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM1 --
         // -----------------------------
         ATTACHITEM1.setAttachment( "TOP" );
         ATTACHITEM1.setManage( HEADER );
         ATTACHITEM1.setParent( ATTACHLAYOUT1 );
         ATTACHITEM1.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM2 --
         // -----------------------------
         ATTACHITEM2.setAttachment( "TOP" );
         ATTACHITEM2.setManage( MENU );
         ATTACHITEM2.setParent( ATTACHLAYOUT1 );
         ATTACHITEM2.setMarginTop( 8 );
         ATTACHITEM2.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM4 --
         // -----------------------------
         ATTACHITEM4.setAttachment( "TOP" );
         ATTACHITEM4.setManage( FOOTER );
         ATTACHITEM4.setParent( ATTACHLAYOUT1 );
         ATTACHITEM4.setMarginTop( 8 );
         ATTACHITEM4.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM3 --
         // -----------------------------
         ATTACHITEM3.setAttachment( "TOP" );
         ATTACHITEM3.setManage( BODY );
         ATTACHITEM3.setParent( ATTACHLAYOUT1 );
         ATTACHITEM3.setMarginTop( 8 );
         ATTACHITEM3.initialize();

         // ------------------------
         // -- Initialize #HEADER --
         // ------------------------
         HEADER.setParent( this );
         HEADER.setTabStop( false );
         HEADER.setWidth( 1136 );
         HEADER.setTop( 8 );
         HEADER.setLeft( 8 );
         HEADER.initialize();

         // ----------------------
         // -- Initialize #MENU --
         // ----------------------
         MENU.setDisplayPosition( 2 );
         MENU.setLeft( 8 );
         MENU.setParent( this );
         MENU.setTabPosition( 2 );
         MENU.setTabStop( false );
         MENU.setTop( 106 );
         MENU.setWidth( 1136 );
         MENU.initialize();

         // ------------------------
         // -- Initialize #FOOTER --
         // ------------------------
         FOOTER.setDisplayPosition( 4 );
         FOOTER.setHeight( 184 );
         FOOTER.setLeft( 8 );
         FOOTER.setParent( this );
         FOOTER.setTabPosition( 3 );
         FOOTER.setTabStop( false );
         FOOTER.setTop( 874 );
         FOOTER.setWidth( 1136 );
         FOOTER.initialize();

         // ----------------------
         // -- Initialize #BODY --
         // ----------------------
         BODY.setDisplayPosition( 3 );
         BODY.setLeft( 8 );
         BODY.setParent( this );
         BODY.setTabPosition( 4 );
         BODY.setTabStop( false );
         BODY.setTop( 147 );
         BODY.setWidth( 1136 );
         BODY.setHeight( 719 );
         BODY.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDesignManager( DESIGNS );
         this.setTheme( Lansa.getTheme( "XDEMOTO_1" ) );
         this.setLayoutManager( ATTACHLAYOUT1 );
         this.setHeight( 744 );
         this.setWidth( 1170 );

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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 21 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 21 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 23 );
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
   rc: [ "XDEMO_48", "XDEMO_50", "XDEMO_54", "XDEMO_58", "XDEMO_56", "XDEMOTO_1" ],
   rp: [ "PRIM_WEB", "PRIM_DESN", "PRIM_DESN.Design", "PRIM_ATLM", "PRIM_ATLI" ]
});

//# sourceURL=xdemotool.js
