﻿LANSA.addComponent({id:"XDOVALM",nm:"xDOValidationMessage",ot:"rp",tp:"Reusable Part",de:"Validation Message",tl:14010001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{Identifier:{da:"rw"},Message:{da:"rw"}},co:function(){cO.aN.call(this);var C0=this.cR("GINDENTIFIER","PRIM_ALPH");var C1=this.cR("GMESSAGE","PRIM_ALPH");C0.iC();C1.iC();}});cO.getIDENTIFIER=function(){return this.REF.GINDENTIFIER.get();};cO.setIDENTIFIER=function(v){this.REF.GINDENTIFIER.set(v);};cO.getMESSAGE=function(){return this.REF.GMESSAGE.get();
};cO.setMESSAGE=function(v){this.REF.GMESSAGE.set(v);};},{rp:["PRIM_OBJT","PRIM_ALPH"]});