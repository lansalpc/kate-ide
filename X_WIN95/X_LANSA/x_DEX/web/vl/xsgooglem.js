// ---------------------------
// -- Web Widget: XSGOOGLEM --
// ---------------------------
LANSA.addComponent(
{
   id: "XSGOOGLEM", 
   nm: "XSGoogleMap", 
   ot: "ww", 
   tp: "Widget", 
   de: "Google Map", 
   tl: 14000101, 
   cl: 14010003
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -------------------------------------
   // -- Helper functions to fire events --
   // -------------------------------------
   var fnEvents = function( PROTOTYPE )
   {
      PROTOTYPE.fireCenterChanged = function( parm_Parameter1 )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addStringParm( "PARAMETER1", parm_Parameter1 );

         Lansa.fireEvent( this, "CENTERCHANGED", evtParms );
      };

      PROTOTYPE.fireRightClick = function( parm_Latitude, parm_Longitude )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addDecimalParm( "LATITUDE", parm_Latitude );
         evtParms.addDecimalParm( "LONGITUDE", parm_Longitude );

         Lansa.fireEvent( this, "RIGHTCLICK", evtParms );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      
      //------------------------------------------------------
      // A SINGLE FUNCTION THAT DEFINES THE WIDGET'S PROTOTYPE
      //------------------------------------------------------
      
      function( PROTOTYPE, WIDGET )
      {  
        var iMO = 1;
        var iMM = 1;
      
        //------------------------------------------------------------------------
        // LOAD GOOGLE MAPS, ONLY WHEN THAT IS COMPLETED IS THE WIDGET READY TO GO
        //------------------------------------------------------------------------
        google.load( 'maps', '3', { other_params: 'sensor=false', callback: WIDGET.Finalize } );
      
        //--------------------------------------------------------
        // WIDGET-INTERFACE FUNCTIONS (CALLED FROM THE VL-RUNTIME)
        //--------------------------------------------------------
      
        //
        // 'onCreateInstance' - gets called when LANSA creates an instance of the widget.
        //
        PROTOTYPE.onCreateInstance = function()
        {
        }
      
        //
        // 'onRealizeControl' - gets called when LANSA creates a visual representation of the widget.
        //
        // Parameters:
        //
        // - parentDiv : the div that's been created as a container for this control. Its size and style are controlled by 
        //               RDMLX, its content by the JavaScript below.
        //
        PROTOTYPE.onRealizeControl = function( parentDiv )
        {
          // Create the map
          this.m_Map = new google.maps.Map( parentDiv,
          {
            center:                    new google.maps.LatLng( this.m_Latitude, this.m_Longitude ),
            zoom:                      this.m_Zoom,
            mapTypeId:                 this.m_MapType,
            mapTypeControl:            false,
      
            navigationControlOptions:  
            {
              style: google.maps.NavigationControlStyle.SMALL
            }
          });
      
          // Hook up event handlers
          var pThis = this;
      
          // EVENT: center_changed
          google.maps.event.addListener( this.m_Map, 'center_changed', function() 
          {
             var center = pThis.m_Map.getCenter();
      
             pThis.m_Latitude = center.lat();    
             pThis.m_Longitude = center.lng();
      
             pThis.fireCenterChanged();
          });
      
          // EVENT: rightclick
          google.maps.event.addListener( this.m_Map, 'rightclick', function( event ) 
          {
             pThis.fireRightClick( event.latLng.lat(), event.latLng.lng() );
          });
      
          // EVENT: mousemove
          google.maps.event.addListener( this.m_Map, 'mousemove', function( event ) 
          {
             console.log( "MouseMOve IN MAP: " + (iMM++).toString() );
          });
      
          // EVENT: mouseover
          google.maps.event.addListener( this.m_Map, 'mouseover', function( event ) 
          {
             console.log( "MouseOver IN MAP: " + (iMO++).toString() );
          });
        }
      
        //
        // 'onSizeChanged - gets called when the widget changes size.
        //
        PROTOTYPE.onSizeChanged = function()
        {
          var center = this.m_Map.getCenter();
      
          google.maps.event.trigger( this.m_Map, "resize" );
      
          this.m_Map.setCenter( center ); 
        }
      
        //------------------------
        // PROPERTY IMPLEMENTATION
        //------------------------
      
        //
        // MapType - Defines the maptype
        //
        // Type: Enumeration of HYBRID,ROADMAP,SATELLITE,TERRAIN
        //
        PROTOTYPE.getMapType = function()
        {
          if ( this.m_Map )
          {
            this.m_MapType = this.m_Map.getMapTypeId();
          }
        
          switch( this.m_MapType )
          {
            case google.maps.MapTypeId.ROADMAP:
            {
              return "ROADMAP";
            }
            case google.maps.MapTypeId.SATELLITE:
            {
              return "SATELLITE";
            }
            case google.maps.MapTypeId.HYBRID:
            {
              return "HYBRID";
            }
            case google.maps.MapTypeId.TERRAIN:
            {
              return "TERRAIN";
            }
          }
      
          // Unknown map-type... 
          throw ("invalid map-type" );
        }
      
        PROTOTYPE.setMapType = function( enumValue )
        {
          switch( enumValue )
          {
            case "ROADMAP":
            {
              this.m_MapType = google.maps.MapTypeId.ROADMAP;
              break;
            }
            case "SATELLITE":
            {
              this.m_MapType = google.maps.MapTypeId.SATELLITE;
              break;
            }
            case "HYBRID":
            {
              this.m_MapType = google.maps.MapTypeId.HYBRID;
              break;
            }
            case "TERRAIN":
            {
              this.m_MapType = google.maps.MapTypeId.TERRAIN;
              break;
            }
          }
      
          if ( this.m_Map )
          {
            this.m_Map.setMapTypeId( this.m_MapType );
          }
        }
      
        //
        // Zoom - Zoom level (0-19)
        //
        // Type: Integer
        //
        PROTOTYPE.getZoom = function()
        {
           if ( this.m_Map )
           {
             this.m_Zoom = this.m_Map.getZoom();
           }
      
           return this.m_Zoom;
        }
      
        PROTOTYPE.setZoom = function( iValue )
        {
           this.m_Zoom = iValue;
      
           if ( this.m_Map )
           {
             this.m_Map.setZoom( iValue );
           }
        }
      
        //
        // Longitude - Longitude
        //
        // Type: String
        //
        PROTOTYPE.getLongitude = function()
        {
           return this.m_Longitude;
        }
      
        PROTOTYPE.setLongitude = function( iValue )
        {
           this.m_Longitude = iValue;
      
           if ( this.m_Map )
           {
             var center = new google.maps.LatLng( this.m_Latitude, this.m_Longitude );
      
             this.m_Map.setCenter( center );
           }   
        }
      
        //
        // Latitude - Latitude
        //
        // Type: String
        //
        PROTOTYPE.getLatitude = function()
        {
          return this.m_Latitude;
        }
      
        PROTOTYPE.setLatitude = function( strValue )
        {
           this.m_Latitude = strValue;
      
           if ( this.m_Map )
           {
             var center = new google.maps.LatLng( this.m_Latitude, this.m_Longitude );
      
             this.m_Map.setCenter( center );
           }   
        }
      
        //----------------------
        // METHOD IMPLEMENTATION
        //----------------------
      
        //
        // AddMarker
        //
        // Parameters:
        // - Latitude: String
        // - Longitude: String
        // - Caption: String
        //
        PROTOTYPE.AddMarker = function( strLatitude, strLongitude, strCaption )
        {
          if ( this.m_Map )
          {
            var location = new google.maps.LatLng( strLatitude, strLongitude )
      
            var marker = new google.maps.Marker( 
            { 
              position:   location,
              map:        this.m_Map,
              title:      strCaption
            });
          }
        }
      
        // We're still loading (waiting for a callback)
        return WIDGET.Loading;
      }
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XSGOOGLEM", 
      js: [ "https://www.google.com/jsapi" ], 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Control", 

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
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setMAPTYPE( "SATELLITE" );
         this.setZOOM( 5 );
         this.setLONGITUDE( 0 );
         this.setLATITUDE( 0 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   COM_OWNER.getMAPTYPE = function()
   {
      return Lansa.toString( this.get( "MapType" ) ).toUpperCase();
   };

   COM_OWNER.setMAPTYPE = function( value )
   {
      this.set( "MapType", Lansa.toString( value ).toUpperCase() );
   };

   COM_OWNER.getZOOM = function()
   {
      return Lansa.toInt( this.get( "Zoom" ) );
   };

   COM_OWNER.setZOOM = function( value )
   {
      this.set( "Zoom", Lansa.toInt( value ) );
   };

   COM_OWNER.getLONGITUDE = function()
   {
      return Lansa.toDecimal( this.get( "Longitude" ) );
   };

   COM_OWNER.setLONGITUDE = function( value )
   {
      this.set( "Longitude", Lansa.toNumber( value ) );
   };

   COM_OWNER.getLATITUDE = function()
   {
      return Lansa.toDecimal( this.get( "Latitude" ) );
   };

   COM_OWNER.setLATITUDE = function( value )
   {
      this.set( "Latitude", Lansa.toNumber( value ) );
   };

   COM_OWNER.mthADDMARKER = function( Latitude, Longitude, Caption )
   {
      this.invoke( "AddMarker", [ Lansa.toNumber( Latitude ), Lansa.toNumber( Longitude ), Lansa.toString( Caption ) ] );
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Control" ]
});

//# sourceURL=xsgooglem.js
