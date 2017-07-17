LANSA.addComponent({id:"XGOOGLE03",nm:"xGoogleMap",ot:"ww",tp:"Widget",de:"Google Map",tl:14010000},function(l,oI,u){var fF=function(wP){wP.fireRightClick=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"RIGHTCLICK",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
google.load( 'maps', '3', { other_params: 'sensor=false', callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
this.m_Latitude = 0;
this.m_Longitude = 0;
}
PROTOTYPE.onRealizeControl = function( parentDiv )
{
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
var pThis = this;
google.maps.event.addListener( this.m_Map, 'rightclick', function( event )
{
pThis.fireRightClick( event.latLng.lat(), event.latLng.lng() );
});
}
PROTOTYPE.onSizeChanged = function()
{
var center = this.m_Map.getCenter();
google.maps.event.trigger( this.m_Map, "resize" );
this.m_Map.setCenter( center );
}
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
PROTOTYPE.Center = function( decLatitude, decLongitude )
{
this.m_Latitude = decLatitude,
this.m_Longitude = decLongitude
if ( this.m_Map )
{
var center = new google.maps.LatLng( this.m_Latitude, this.m_Longitude );
this.m_Map.setCenter( center );
}
}
return WIDGET.Loading;
}
;
l.rWg({nm:"XGOOGLE03",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setMAPTYPE("ROADMAP");this.setZOOM(1);}});cO.getMAPTYPE=function(){return l.tS(this.get("MapType")).toUpperCase();};cO.setMAPTYPE=function(v){this.set("MapType",l.tS(v).toUpperCase());};cO.getZOOM=function(){return l.tI(this.get("Zoom"));};cO.setZOOM=function(v){this.set("Zoom",l.tI(v));};cO.mthADDMARKER=function(P0,P1,P2){this.invoke("AddMarker",[l.tN(P0),l.tN(P1),l.tS(P2)]);
};cO.mthCENTER=function(P0,P1){this.invoke("Center",[l.tN(P0),l.tN(P1)]);};},{rp:["PRIM_WDGT.Control"]});