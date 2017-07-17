// -----------------------
// -- Web Page: KMTIMER --
// -----------------------
LANSA.addComponent(
{
   id: "KMTIMER", 
   nm: "kmtimer", 
   ot: "wp", 
   tp: "Web Page", 
   de: "timer test", 
   tl: 14020000
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
         // DEFINE_COM Class(#PRIM_VS.Style) Name(#Style1) Backgroundbrush(#Brush1) Foregroundbrush(#Brush2)
         //
         var STYLE1 = this.createReference( "STYLE1", "PRIM_VS", "Style" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush2) Color(Theme50)
         //
         var BRUSH2 = this.createReference( "BRUSH2", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#PRIM_VS.SolidBrush) Name(#Brush1) Color(Theme500)
         //
         var BRUSH1 = this.createReference( "BRUSH1", "PRIM_VS", "SolidBrush" );

         //
         // DEFINE_COM Class(#prim_timr) Name(#Timer) Startup(Manual)
         //
         var TIMER = this.createReference( "TIMER", "PRIM_TIMR" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#StartStop) Caption('Start') Displayposition(1) Left(24) Parent(#COM_OWNER) Tabposition(1) Top(32) Width(169)
         //
         var STARTSTOP = this.createReference( "STARTSTOP", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_SPDT) Name(#Interval) Displayposition(2) Left(96) Parent(#COM_OWNER) Showselection(False) Showselectionhilight(False) Tabposition(2) Top(96) Width(96)
         //
         var INTERVAL = this.createReference( "INTERVAL", "PRIM_SPDT" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Interval') Displayposition(3) Ellipses(Word) Height(25) Left(24) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(96) Verticalalignment(Center) Width(57)
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Ticking) Displayposition(4) Ellipses(Word) Height(90) Left(208) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(31) Verticalalignment(Center) Width(242) Alignment(Center) Style(#Style1) Caption('Ticking') Visible(False)
         //
         var TICKING = this.createReference( "TICKING", "PRIM_LABL" );

         // ------------------------
         // -- Initialize #STYLE1 --
         // ------------------------
         STYLE1.setBackgroundBrush( BRUSH1 );
         STYLE1.setForegroundBrush( BRUSH2 );
         STYLE1.initialize();

         // ------------------------
         // -- Initialize #BRUSH2 --
         // ------------------------
         BRUSH2.setColor( "THEME50" );
         BRUSH2.initialize();

         // ------------------------
         // -- Initialize #BRUSH1 --
         // ------------------------
         BRUSH1.setColor( "THEME500" );
         BRUSH1.initialize();

         // -----------------------
         // -- Initialize #TIMER --
         // -----------------------
         TIMER.setStartup( "MANUAL" );
         TIMER.initialize();

         // ---------------------------
         // -- Initialize #STARTSTOP --
         // ---------------------------
         STARTSTOP.setCaption( "Start" );
         STARTSTOP.setDisplayPosition( 1 );
         STARTSTOP.setLeft( 24 );
         STARTSTOP.setParent( this );
         STARTSTOP.setTabPosition( 1 );
         STARTSTOP.setTop( 32 );
         STARTSTOP.setWidth( 169 );
         STARTSTOP.initialize();

         // --------------------------
         // -- Initialize #INTERVAL --
         // --------------------------
         INTERVAL.setDisplayPosition( 2 );
         INTERVAL.setLeft( 96 );
         INTERVAL.setParent( this );
         INTERVAL.setShowSelection( false );
         INTERVAL.setShowSelectionHilight( false );
         INTERVAL.setTabPosition( 2 );
         INTERVAL.setTop( 96 );
         INTERVAL.setWidth( 96 );
         INTERVAL.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Interval" );
         LABEL1.setDisplayPosition( 3 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 24 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 3 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 96 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 57 );
         LABEL1.initialize();

         // -------------------------
         // -- Initialize #TICKING --
         // -------------------------
         TICKING.setDisplayPosition( 4 );
         TICKING.setEllipses( "WORD" );
         TICKING.setHeight( 90 );
         TICKING.setLeft( 208 );
         TICKING.setParent( this );
         TICKING.setTabPosition( 4 );
         TICKING.setTabStop( false );
         TICKING.setTop( 31 );
         TICKING.setVerticalAlignment( "CENTER" );
         TICKING.setWidth( 242 );
         TICKING.setAlignment( "CENTER" );
         TICKING.setStyle( STYLE1 );
         TICKING.setCaption( "Ticking" );
         TICKING.setVisible( false );
         TICKING.initialize();

         // -----------------------------------
         // -- Add Event Handlers for #TIMER --
         // -----------------------------------
         TIMER.addEventHandler( "TICK", this, evtRoutine4 );

         // ---------------------------------------
         // -- Add Event Handlers for #STARTSTOP --
         // ---------------------------------------
         STARTSTOP.addEventHandler( "CLICK", this, evtRoutine3 );

         // --------------------------------------
         // -- Add Event Handlers for #INTERVAL --
         // --------------------------------------
         INTERVAL.addEventHandler( "CHANGED", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 457 );
         this.setWidth( 1169 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #Com_owner.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.CreateInstance", 14 );

      //
      // EVTROUTINE Handling(#Com_owner.CreateInstance)
      //
      rtn.Line( 14 );
      {

         //
         // #Interval := #Timer.Interval
         //
         rtn.Line( 16 );
         ref.INTERVAL.set( ref.TIMER.getInterval() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 18 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Interval.Changed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Interval.Changed", 20 );

      //
      // EVTROUTINE Handling(#Interval.Changed)
      //
      rtn.Line( 20 );
      {

         //
         // #Interval := #Interval.Value.Max( 1 #Interval.Value )
         //
         rtn.Line( 22 );
         ref.INTERVAL.set( Lansa.Number.Max( ref.INTERVAL.getValue(), 1, ref.INTERVAL.getValue() ) );

         //
         // #Timer.Interval := #Interval
         //
         rtn.Line( 23 );
         ref.TIMER.setInterval( ref.INTERVAL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 25 );
      rtn.end();
   };

   //
   // evtRoutine3 - #StartStop.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#StartStop.Click", 27 );

      //
      // EVTROUTINE Handling(#StartStop.Click)
      //
      rtn.Line( 27 );
      {

         //
         // IF (#Timer.IsStarted)
         //
         rtn.Line( 29 );
         if ( ref.TIMER.getIsStarted() )
         {

            //
            // #Timer.Stop
            //
            rtn.Line( 31 );
            ref.TIMER.mthSTOP();

            //
            // #StartStop.Caption := "Start"
            //
            rtn.Line( 32 );
            ref.STARTSTOP.setCaption( "Start" );

            //
            // #Ticking.visible := False
            //
            rtn.Line( 33 );
            ref.TICKING.setVisible( false );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #Timer.Start
            //
            rtn.Line( 37 );
            ref.TIMER.mthSTART();

            //
            // #StartStop.Caption := "Stop"
            //
            rtn.Line( 38 );
            ref.STARTSTOP.setCaption( "Stop" );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Timer.Tick
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Timer.Tick", 44 );

      //
      // EVTROUTINE Handling(#Timer.Tick)
      //
      rtn.Line( 44 );
      {

         //
         // #Ticking.visible := *Not #Ticking.Visible
         //
         rtn.Line( 46 );
         ref.TICKING.setVisible( Lansa.not( ref.TICKING.getVisible() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 48 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_VS.Style", "PRIM_VS.SolidBrush", "PRIM_TIMR", "PRIM_PHBN", "PRIM_SPDT", "PRIM_LABL" ]
});

//# sourceURL=kmtimer.js
