﻿LANSA.addComponent({id:"VF_PC003O",ot:"rp",tp:"Reusable Part",de:"\OC=Virtual Clipboard Item",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELLANG",ft:"A",ln:4,dc:0,lb:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],h1:{"ENG":"Language","FRA":"Code","JPN":"言語"}[cL],h2:{"ENG":"Code","FRA":"langue","JPN":"コード"}[cL],h3:"",de:{"ENG":"Language Code","FRA":"Code langue","JPN":"言語コード"}[cL],dv:l.eSV("*LANGUAGE"),ia:["FE"]},F2:
{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{ID1:{da:"rw"},ID2:{da:"rw"},ID3:{da:"rw"},ID4:{da:"rw"},ID5:{da:"rw"},Language:{da:"rw"},Instance:{da:"rw"},ClipboardValue:{da:"rw"},ClipboardKey:{da:"rw"},Persistent:
{da:"rw"},Changed:{da:"rw"}},co:function(){cO.aN.call(this);this.aF("VF_PC003O",Fd);var C0=this.cR("ID1","PRIM_ALPH");var C1=this.cR("ID2","PRIM_ALPH");var C2=this.cR("ID3","PRIM_ALPH");var C3=this.cR("ID4","PRIM_ALPH");var C4=this.cR("ID5","PRIM_ALPH");var C5=this.cF("LANGUAGE",Fd.F1.Dc);var C6=this.cF("INSTANCE",Fd.F2.Dc);var C7=this.cR("CLIPBOARDVALUE","PRIM_DC","UnicodeString");var C8=this.cR("CLIPBOARDKEY","PRIM_DC","UnicodeString");var C9=this.cR("PERSISTENT","PRIM_BOLN");var C10=this.cR("CHANGED","PRIM_BOLN");
C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.aD();C5.iC();C6.aD();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();}});cO.getID1=function(){return this.REF.ID1.get();};cO.setID1=function(v){this.REF.ID1.set(v);};cO.getID2=function(){return this.REF.ID2.get();};cO.setID2=function(v){this.REF.ID2.set(v);};cO.getID3=function(){return this.REF.ID3.get();};cO.setID3=function(v){this.REF.ID3.set(v);};cO.getID4=function(){return this.REF.ID4.get();};cO.setID4=function(v){this.REF.ID4.set(v);};cO.getID5=function()
{return this.REF.ID5.get();};cO.setID5=function(v){this.REF.ID5.set(v);};cO.getLANGUAGE=function(){return this.REF.LANGUAGE.get();};cO.setLANGUAGE=function(v){this.REF.LANGUAGE.set(v);};cO.getINSTANCE=function(){return this.REF.INSTANCE.get();};cO.setINSTANCE=function(v){this.REF.INSTANCE.set(v);};cO.getCLIPBOARDVALUE=function(){return this.REF.CLIPBOARDVALUE.get();};cO.setCLIPBOARDVALUE=function(v){this.REF.CLIPBOARDVALUE.set(v);};cO.getCLIPBOARDKEY=function(){return this.REF.CLIPBOARDKEY.get();
};cO.setCLIPBOARDKEY=function(v){this.REF.CLIPBOARDKEY.set(v);};cO.getPERSISTENT=function(){return this.REF.PERSISTENT.get();};cO.setPERSISTENT=function(v){this.REF.PERSISTENT.set(v);};cO.getCHANGED=function(){return this.REF.CHANGED.get();};cO.setCHANGED=function(v){this.REF.CHANGED.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELLANG"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rp:["PRIM_OBJT","PRIM_ALPH","PRIM_FLD","PRIM_DC.UnicodeString","PRIM_BOLN"]
});