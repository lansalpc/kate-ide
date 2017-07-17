// -----------------------------
// -- Reusable Part: XSSTRMAP --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSTRMAP", 
   nm: "XSStoreMap", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Store Location Map", 
   tl: 14010003
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
      const1 = Lansa.createDecimal( "-33.838434" ), 
      const2 = Lansa.createDecimal( "151.209965" ), 
      const3 = Lansa.createDecimal( "43.687215" ), 
      const4 = Lansa.createDecimal( "-79.601531" ), 
      const5 = Lansa.createDecimal( "48.830308" ), 
      const6 = Lansa.createDecimal( "2.265576" ), 
      const7 = Lansa.createDecimal( "35.693206" ), 
      const8 = Lansa.createDecimal( "139.745166" ), 
      const9 = Lansa.createDecimal( "1.303095" ), 
      const10 = Lansa.createDecimal( "103.834338" ), 
      const11 = Lansa.createDecimal( "52.298633" ), 
      const12 = Lansa.createDecimal( "4.952724" ), 
      const13 = Lansa.createDecimal( "51.753453" ), 
      const14 = Lansa.createDecimal( "-0.333610" ), 
      const15 = Lansa.createDecimal( "41.831176" ), 
      const16 = Lansa.createDecimal( "-88.032878" );

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
         // DEFINE_COM Class(#XSSession) Name(#MySession) Scope(*Application)
         //
         var MYSESSION = this.createApplicationReference( "MYSESSION", "XSMYSSN" );

         //
         // DEFINE_COM Class(#prim_web.Geolocation) Name(#Geolocation)
         //
         var GEOLOCATION = this.createReference( "GEOLOCATION", "PRIM_WEB", "Geolocation" );

         //
         // DEFINE_COM Class(#PRIM_ATLM) Name(#AttachLayout1)
         //
         var ATTACHLAYOUT1 = this.createReference( "ATTACHLAYOUT1", "PRIM_ATLM" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem1) Attachment(Center) Manage(#GoogleMap) Parent(#AttachLayout1)
         //
         var ATTACHITEM1 = this.createReference( "ATTACHITEM1", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_ATLI) Name(#AttachItem3) Attachment(Top) Manage(#Information) Parent(#AttachLayout1)
         //
         var ATTACHITEM3 = this.createReference( "ATTACHITEM3", "PRIM_ATLI" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Information) Caption('Use the store locator above to find out your nearest store’s opening hours.') Displayposition(1) Ellipses(Word) Height(25) Left(0) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(0) Verticalalignment(Center) Width(500) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var INFORMATION = this.createReference( "INFORMATION", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSGoogleMap) Name(#GoogleMap) Tabstop(False) Parent(#COM_OWNER) Displayposition(2) Tabposition(1) Height(465) Width(500) Top(25) Left(0)
         //
         var GOOGLEMAP = this.createReference( "GOOGLEMAP", "XSGOOGLEM" );

         //
         // DEFINE_COM Class(#prim_alph) Name(#url)
         //
         var URL = this.createReference( "URL", "PRIM_ALPH" );

         // ---------------------------
         // -- Initialize #MYSESSION --
         // ---------------------------
         if ( ( MYSESSION != null ) && ( MYSESSION.isInitialized() == false ) )
         {
            MYSESSION.initialize();
         }

         // -----------------------------
         // -- Initialize #GEOLOCATION --
         // -----------------------------
         GEOLOCATION.initialize();

         // -------------------------------
         // -- Initialize #ATTACHLAYOUT1 --
         // -------------------------------
         ATTACHLAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM1 --
         // -----------------------------
         ATTACHITEM1.setAttachment( "CENTER" );
         ATTACHITEM1.setManage( GOOGLEMAP );
         ATTACHITEM1.setParent( ATTACHLAYOUT1 );
         ATTACHITEM1.initialize();

         // -----------------------------
         // -- Initialize #ATTACHITEM3 --
         // -----------------------------
         ATTACHITEM3.setAttachment( "TOP" );
         ATTACHITEM3.setManage( INFORMATION );
         ATTACHITEM3.setParent( ATTACHLAYOUT1 );
         ATTACHITEM3.initialize();

         // -----------------------------
         // -- Initialize #INFORMATION --
         // -----------------------------
         INFORMATION.setCaption( "Use the store locator above to find out your nearest store’s opening hours." );
         INFORMATION.setDisplayPosition( 1 );
         INFORMATION.setEllipses( "WORD" );
         INFORMATION.setHeight( 25 );
         INFORMATION.setLeft( 0 );
         INFORMATION.setParent( this );
         INFORMATION.setTabPosition( 2 );
         INFORMATION.setTabStop( false );
         INFORMATION.setTop( 0 );
         INFORMATION.setVerticalAlignment( "CENTER" );
         INFORMATION.setWidth( 500 );
         INFORMATION.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         INFORMATION.initialize();

         // ---------------------------
         // -- Initialize #GOOGLEMAP --
         // ---------------------------
         GOOGLEMAP.setTabStop( false );
         GOOGLEMAP.setParent( this );
         GOOGLEMAP.setDisplayPosition( 2 );
         GOOGLEMAP.setTabPosition( 1 );
         GOOGLEMAP.setHeight( 465 );
         GOOGLEMAP.setWidth( 500 );
         GOOGLEMAP.setTop( 25 );
         GOOGLEMAP.setLeft( 0 );
         GOOGLEMAP.initialize();

         // ---------------------
         // -- Initialize #URL --
         // ---------------------
         URL.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #MYSESSION --
         // ---------------------------------------
         MYSESSION.addEventHandler( "COUNTRYUPDATED", this, evtRoutine3 );

         // -----------------------------------------
         // -- Add Event Handlers for #GEOLOCATION --
         // -----------------------------------------
         GEOLOCATION.addEventHandler( "REFRESHED", this, evtRoutine2 );

         // ---------------------------------------
         // -- Add Event Handlers for #GOOGLEMAP --
         // ---------------------------------------
         GOOGLEMAP.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 490 );
         this.setWidth( 500 );
         this.setLayoutManager( ATTACHLAYOUT1 );
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLeft( 0 );
         this.setTop( 0 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #GoogleMap.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#GoogleMap.Initialize", 19 );

      //
      // EVTROUTINE Handling(#GoogleMap.Initialize)
      //
      rtn.Line( 19 );
      {

         //
         // #GoogleMap.zoom := 2
         //
         rtn.Line( 29 );
         ref.GOOGLEMAP.setZOOM( 2 );

         //
         // #Geolocation.Refresh
         //
         rtn.Line( 30 );
         ref.GEOLOCATION.mthREFRESH();

         //
         // #GoogleMap.AddMarker( -33.838434 151.209965 "122 Arthur Street North Sydney, NSW, 2060, Australia" )
         //
         rtn.Line( 32 );
         ref.GOOGLEMAP.mthADDMARKER( const1, const2, "122 Arthur Street North Sydney, NSW, 2060, Australia" );

         //
         // #GoogleMap.AddMarker( 43.687215 -79.601531 "2700 Matheson Blvd East, Mississauga, ON, L4W 4V9, Canada" )
         //
         rtn.Line( 33 );
         ref.GOOGLEMAP.mthADDMARKER( const3, const4, "2700 Matheson Blvd East, Mississauga, ON, L4W 4V9, Canada" );

         //
         // #GoogleMap.AddMarker( 48.830308 2.265576 "13, rue Camille Desmoulins, 92441, ISSY-LES-MOULINEAUX, Cedex, France" )
         //
         rtn.Line( 34 );
         ref.GOOGLEMAP.mthADDMARKER( const5, const6, "13, rue Camille Desmoulins, 92441, ISSY-LES-MOULINEAUX, Cedex, France" );

         //
         // #GoogleMap.AddMarker( 35.693206 139.745166 "2-3-10, Kudanminami, Chiyoda-ku, Tokyo, 102-0074, Japan" )
         //
         rtn.Line( 35 );
         ref.GOOGLEMAP.mthADDMARKER( const7, const8, "2-3-10, Kudanminami, Chiyoda-ku, Tokyo, 102-0074, Japan" );

         //
         // #GoogleMap.AddMarker( 1.303095 103.834338 "391B Orchard Road, #23-01 Ngee Ann City Tower B, 238874, Singapore" )
         //
         rtn.Line( 36 );
         ref.GOOGLEMAP.mthADDMARKER( const9, const10, "391B Orchard Road, #23-01 Ngee Ann City Tower B, 238874, Singapore" );

         //
         // #GoogleMap.AddMarker( 52.298633 4.952724 "Paasheuvelweg 15, 1105 BE Amsterdam, Netherlands" )
         //
         rtn.Line( 37 );
         ref.GOOGLEMAP.mthADDMARKER( const11, const12, "Paasheuvelweg 15, 1105 BE Amsterdam, Netherlands" );

         //
         // #GoogleMap.AddMarker( 51.753453 -0.333610 "26-30 Upper Marlborough Road, St. Albans, Hertfordshire, AL1 3UU, United Kingdom" )
         //
         rtn.Line( 38 );
         ref.GOOGLEMAP.mthADDMARKER( const13, const14, "26-30 Upper Marlborough Road, St. Albans, Hertfordshire, AL1 3UU, United Kingdom" );

         //
         // #GoogleMap.AddMarker( 41.831176 -88.032878 "2001 Butterfield Road, Downers Grove, IL, 60515, USA; and more" )
         //
         rtn.Line( 39 );
         ref.GOOGLEMAP.mthADDMARKER( const15, const16, "2001 Butterfield Road, Downers Grove, IL, 60515, USA; and more" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Geolocation.Refreshed
   //
   function evtRoutine2( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Geolocation.Refreshed", 43 );

      //
      // EVTROUTINE Handling(#Geolocation.Refreshed)
      //
      rtn.Line( 43 );
      {

         //
         // #GoogleMap.longitude := #Geolocation.Longitude
         //
         rtn.Line( 45 );
         ref.GOOGLEMAP.setLONGITUDE( ref.GEOLOCATION.getLongitude() );

         //
         // #GoogleMap.latitude := #Geolocation.Latitude
         //
         rtn.Line( 46 );
         ref.GOOGLEMAP.setLATITUDE( ref.GEOLOCATION.getLatitude() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 48 );
      rtn.end();
   };

   //
   // evtRoutine3 - #MySession.CountryUpdated
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#MySession.CountryUpdated", 50 );

      //
      // EVTROUTINE Handling(#MySession.CountryUpdated)
      //
      rtn.Line( 50 );
      {

         //
         // #GoogleMap.zoom := 14
         //
         rtn.Line( 52 );
         ref.GOOGLEMAP.setZOOM( 14 );

         //
         // CASE (#MySession.pCountry)
         //
         rtn.Line( 54 );
         {
            var value1 = ref.MYSESSION.ref.getPCOUNTRY();

            //
            // WHEN (= '')
            //
            if ( rtn.Line( 56 ), Lansa.String.eq( value1, "" ) )
            {

               //
               // #GoogleMap.zoom := 2
               //
               rtn.Line( 59 );
               ref.GOOGLEMAP.setZOOM( 2 );

               //
               // #GoogleMap.Latitude := 41.831176
               //
               rtn.Line( 60 );
               ref.GOOGLEMAP.setLATITUDE( const15 );

               //
               // #GoogleMap.longitude := -88.032878
               //
               rtn.Line( 61 );
               ref.GOOGLEMAP.setLONGITUDE( const16 );
            }

            //
            // WHEN (= 'Australia')
            //
            else if ( rtn.Line( 63 ), Lansa.String.eq( value1, "Australia" ) )
            {

               //
               // #GoogleMap.latitude := -33.838434
               //
               rtn.Line( 66 );
               ref.GOOGLEMAP.setLATITUDE( const1 );

               //
               // #GoogleMap.longitude := 151.209965
               //
               rtn.Line( 67 );
               ref.GOOGLEMAP.setLONGITUDE( const2 );
            }

            //
            // WHEN (= 'Canada')
            //
            else if ( rtn.Line( 69 ), Lansa.String.eq( value1, "Canada" ) )
            {

               //
               // #GoogleMap.latitude := 43.687215
               //
               rtn.Line( 72 );
               ref.GOOGLEMAP.setLATITUDE( const3 );

               //
               // #GoogleMap.Longitude := -79.601531
               //
               rtn.Line( 73 );
               ref.GOOGLEMAP.setLONGITUDE( const4 );
            }

            //
            // WHEN (= 'France')
            //
            else if ( rtn.Line( 75 ), Lansa.String.eq( value1, "France" ) )
            {

               //
               // #GoogleMap.Latitude := 48.830308
               //
               rtn.Line( 78 );
               ref.GOOGLEMAP.setLATITUDE( const5 );

               //
               // #GoogleMap.Longitude := 2.265576
               //
               rtn.Line( 79 );
               ref.GOOGLEMAP.setLONGITUDE( const6 );
            }

            //
            // WHEN (= 'Japan')
            //
            else if ( rtn.Line( 81 ), Lansa.String.eq( value1, "Japan" ) )
            {

               //
               // #GoogleMap.Latitude := 35.693206
               //
               rtn.Line( 84 );
               ref.GOOGLEMAP.setLATITUDE( const7 );

               //
               // #GoogleMap.Longitude := 139.745166
               //
               rtn.Line( 85 );
               ref.GOOGLEMAP.setLONGITUDE( const8 );
            }

            //
            // WHEN (= 'Singapore')
            //
            else if ( rtn.Line( 87 ), Lansa.String.eq( value1, "Singapore" ) )
            {

               //
               // #GoogleMap.Latitude := 1.303095
               //
               rtn.Line( 90 );
               ref.GOOGLEMAP.setLATITUDE( const9 );

               //
               // #GoogleMap.Longitude := 103.834338
               //
               rtn.Line( 91 );
               ref.GOOGLEMAP.setLONGITUDE( const10 );
            }

            //
            // WHEN (= 'Netherlands')
            //
            else if ( rtn.Line( 93 ), Lansa.String.eq( value1, "Netherlands" ) )
            {

               //
               // #GoogleMap.Latitude := 52.298633
               //
               rtn.Line( 96 );
               ref.GOOGLEMAP.setLATITUDE( const11 );

               //
               // #GoogleMap.Longitude := 4.952724
               //
               rtn.Line( 97 );
               ref.GOOGLEMAP.setLONGITUDE( const12 );
            }

            //
            // WHEN (= 'United Kingdom')
            //
            else if ( rtn.Line( 99 ), Lansa.String.eq( value1, "United Kingdom" ) )
            {

               //
               // #GoogleMap.Latitude := 51.753453
               //
               rtn.Line( 102 );
               ref.GOOGLEMAP.setLATITUDE( const13 );

               //
               // #GoogleMap.Longitude := -0.333610
               //
               rtn.Line( 103 );
               ref.GOOGLEMAP.setLONGITUDE( const14 );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #GoogleMap.Latitude := 41.831176
               //
               rtn.Line( 108 );
               ref.GOOGLEMAP.setLATITUDE( const15 );

               //
               // #GoogleMap.Longitude := -88.032878
               //
               rtn.Line( 109 );
               ref.GOOGLEMAP.setLONGITUDE( const16 );
            }

         //
         // ENDCASE 
         //
         rtn.Line( 111 );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 113 );
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
   rc: [ "XSMYSSN", "XSGOOGLEM", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_WEB.Geolocation", "PRIM_ATLM", "PRIM_ATLI", "PRIM_LABL", "PRIM_ALPH" ]
});

//# sourceURL=xsstrmap.js
