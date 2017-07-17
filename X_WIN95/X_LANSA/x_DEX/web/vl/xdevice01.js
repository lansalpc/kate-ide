LANSA.addComponent({id:"XDEVICE01",nm:"xDeviceAudioRecord",ot:"ww",tp:"Widget",de:"Control audio recording on mobile device",tl:14000101,cl:14010003},function(l,oI,u){var fF=function(wP){wP.fireStarted=function(pStatus){var eP=l.ePs();eP.aE("STATUS",pStatus);l.fE(this,"STARTED",eP);};wP.fireCompleted=function(pStatus,pMessage){var eP=l.ePs();eP.aE("STATUS",pStatus);eP.aS("MESSAGE",pMessage);l.fE(this,"COMPLETED",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
var
widgetStatus = WIDGET.Completed;
if ( !window.LONGRANGE )
{
widgetStatus = WIDGET.Loading;
var
previousOnLongRangeReady = window.onLongRangeReady;
window.onLongRangeReady = function()
{
WIDGET.Finalize();
if ( previousOnLongRangeReady )
{
previousOnLongRangeReady();
}
}
}
PROTOTYPE.onCreateInstance = function()
{
this.m_File = '';
this.m_SampleRate = 44100;
this.m_Channels = 2;
}
PROTOTYPE.getFile = function()
{
return this.m_File;
}
PROTOTYPE.setFile = function( value )
{
this.m_File = value;
}
PROTOTYPE.getSampleRate = function()
{
return this.m_SampleRate;
}
PROTOTYPE.setSampleRate = function( value )
{
this.m_SampleRate = value;
}
PROTOTYPE.getChannels = function()
{
return this.m_Channels;
}
PROTOTYPE.setChannels = function( value )
{
this.m_Channels = value;
}
PROTOTYPE.Record = function()
{
var pThis = this;
var options = { };
options.writeToFilePath = this.m_File;
options.sampleRate = this.m_SampleRate;
options.channels = this.m_Channels;
options.onCompleted = function( result )
{
pThis.fireStarted( LongRangeToVLStatusCodes( result.status ) );
};
LONGRANGE.Audio.record(options);
return "OK";
}
PROTOTYPE.Stop = function()
{
var pThis = this;
var options = { };
options.onCompleted = function( result )
{
var message = "";
if ( result.message )
{
message = result.message;
}
pThis.fireCompleted( LongRangeToVLStatusCodes( result.status ), message );
}
LONGRANGE.Audio.stop(options);
}
function LongRangeToVLStatusCodes( lrStatus )
{
var
vlStatus = "";
if ( lrStatus == LONGRANGE.Status.Ok )
{
vlStatus = "OK";
}
else if ( lrStatus == LONGRANGE.Status.Cancelled )
{
vlStatus = "CAN";
}
else if ( lrStatus == LONGRANGE.Status.Error )
{
vlStatus = "ER";
}
else
{
vlStatus = "UNK";
}
return vlStatus;
}
return widgetStatus
}
;
l.rWg({nm:"XDEVICE01",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Object",co:function(){cO.aN.call(this);this.setFILE("");this.setSAMPLERATE(44100);this.setCHANNELS(2);}});cO.getFILE=function(){return l.tS(this.get("File"));};cO.setFILE=function(v){this.set("File",l.tS(v));};cO.getSAMPLERATE=function(){return l.tI(this.get("SampleRate"));};cO.setSAMPLERATE=function(v){this.set("SampleRate",l.tI(v));};cO.getCHANNELS=function(){return l.tI(this.get("Channels"));};cO.setCHANNELS=function(v){this.set("Channels",l.tI(v));
};cO.mthRECORD=function(){return l.tS(this.invoke("Record"));};cO.mthSTOP=function(){this.invoke("Stop");};},{rp:["PRIM_WDGT.Object"]});