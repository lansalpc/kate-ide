LANSA.addComponent({id:"XDEMOWEBG",nm:"xDemoWebGoogleMapping",ot:"ww",tp:"Widget",de:"Google Maps",tl:14000101,cl:14010001},function(l,oI,u){var fF=function(wP){wP.fireCenterChanged=function(pParameter1){var eP=l.ePs();eP.aS("PARAMETER1",pParameter1);l.fE(this,"CENTERCHANGED",eP);};wP.fireRightClick=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"RIGHTCLICK",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var iMO = 1;
var iMM = 1;
google.load( 'maps', '3', { other_params: 'sensor=false', callback: WIDGET.Finalize } );
PROTOTYPE.onCreateInstance = function()
{
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
google.maps.event.addListener( this.m_Map, 'center_changed', function()
{
var center = pThis.m_Map.getCenter();
pThis.m_Latitude = center.lat();
pThis.m_Longitude = center.lng();
pThis.fireCenterChanged();
});
google.maps.event.addListener( this.m_Map, 'rightclick', function( event )
{
pThis.fireRightClick( event.latLng.lat(), event.latLng.lng() );
});
google.maps.event.addListener( this.m_Map, 'mousemove', function( event )
{
console.log( "MouseMOve IN MAP: " + (iMM++).toString() );
});
google.maps.event.addListener( this.m_Map, 'mouseover', function( event )
{
console.log( "MouseOver IN MAP: " + (iMO++).toString() );
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
return WIDGET.Loading;
}
;
l.rWg({nm:"XDEMOWEBG",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setMAPTYPE("SATELLITE");this.setZOOM(5);this.setLONGITUDE(0);this.setLATITUDE(0);}});cO.getMAPTYPE=function(){return l.tS(this.get("MapType")).toUpperCase();};cO.setMAPTYPE=function(v){this.set("MapType",l.tS(v).toUpperCase());};cO.getZOOM=function(){return l.tI(this.get("Zoom"));};cO.setZOOM=function(v){this.set("Zoom",l.tI(v));};cO.getLONGITUDE=function()
{return l.tD(this.get("Longitude"));};cO.setLONGITUDE=function(v){this.set("Longitude",l.tN(v));};cO.getLATITUDE=function(){return l.tD(this.get("Latitude"));};cO.setLATITUDE=function(v){this.set("Latitude",l.tN(v));};cO.mthADDMARKER=function(P0,P1,P2){this.invoke("AddMarker",[l.tN(P0),l.tN(P1),l.tS(P2)]);};},{rp:["PRIM_WDGT.Control"]});