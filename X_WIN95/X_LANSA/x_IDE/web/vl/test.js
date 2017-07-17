// --------------------
// -- Web Page: TEST --
// --------------------
LANSA.addComponent(
{
   id: "TEST", 
   nm: "test", 
   ot: "wp", 
   tp: "Web Page", 
   de: "test", 
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
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Caption('Button1') Displayposition(1) Left(24) Parent(#COM_OWNER) Tabposition(1) Top(40) Height(87) Width(218)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_WEB.Page) Name(#Page1) Description('Web Page') Displayposition(2) Height(325) Left(120) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(328) Width(969)
         //
         var PAGE1 = this.createReference( "PAGE1", "PRIM_WEB", "Page" );

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setCaption( "Button1" );
         BUTTON1.setDisplayPosition( 1 );
         BUTTON1.setLeft( 24 );
         BUTTON1.setParent( this );
         BUTTON1.setTabPosition( 1 );
         BUTTON1.setTop( 40 );
         BUTTON1.setHeight( 87 );
         BUTTON1.setWidth( 218 );
         BUTTON1.initialize();

         // -----------------------
         // -- Initialize #PAGE1 --
         // -----------------------
         PAGE1.setDescription( "Web Page" );
         PAGE1.setDisplayPosition( 2 );
         PAGE1.setHeight( 325 );
         PAGE1.setLeft( 120 );
         PAGE1.setParent( this );
         PAGE1.setTabPosition( 2 );
         PAGE1.setTabStop( false );
         PAGE1.setTop( 328 );
         PAGE1.setWidth( 969 );
         PAGE1.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON1 --
         // -------------------------------------
         BUTTON1.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
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
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 6 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 6 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 12 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Button1.Click
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button1.Click", 14 );

      //
      // DEFINE_COM Class(#prim_alph) Name(#text)
      //
      var TEXT = rtn.createReference( "TEXT", "PRIM_ALPH" );

      // ----------------------
      // -- Initialize #TEXT --
      // ----------------------
      TEXT.initialize();

      //
      // EVTROUTINE Handling(#Button1.Click)
      //
      rtn.Line( 14 );
      {

         //
         // #Page1.Source := 'http://www.lansa.com'
         //
         rtn.Line( 39 );
         ref.PAGE1.setSource( "http://www.lansa.com" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
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
   rp: [ "PRIM_WEB", "PRIM_PHBN", "PRIM_WEB.Page" ],
   dp: [ "PRIM_ALPH" ]
});

//# sourceURL=test.js
