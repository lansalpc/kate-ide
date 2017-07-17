// --------------------------
// -- Reusable Part: TEST3 --
// --------------------------
LANSA.addComponent(
{
   id: "TEST3", 
   nm: "test3", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "ru test", 
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
         // DEFINE_COM Class(#PRIM_WEB.HtmlContainer) Name(#Html1) Description('Html Container') Displayposition(1) Height(200) Left(69) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(74) Width(150)
         //
         var HTML1 = this.createReference( "HTML1", "PRIM_WEB", "HtmlContainer" );

         // -----------------------
         // -- Initialize #HTML1 --
         // -----------------------
         HTML1.setDescription( "Html Container" );
         HTML1.setDisplayPosition( 1 );
         HTML1.setHeight( 200 );
         HTML1.setLeft( 69 );
         HTML1.setParent( this );
         HTML1.setTabPosition( 1 );
         HTML1.setTabStop( false );
         HTML1.setTop( 74 );
         HTML1.setWidth( 150 );
         HTML1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 270 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 500 );

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 5 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 5 );
      {

         //
         // #Html1.html := '<h2>my html added in here</h2>'
         //
         rtn.Line( 6 );
         ref.HTML1.setHtml( "<h2>my html added in here</h2>" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 7 );
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
   rp: [ "PRIM_PANL", "PRIM_WEB.HtmlContainer" ]
});

//# sourceURL=test3.js
