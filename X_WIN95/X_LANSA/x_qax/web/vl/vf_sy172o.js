﻿LANSA.addComponent({id:"VF_SY172O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Message Item",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{FirstLevelText:{da:"rw"},SecondLevelText:{da:"rw"},HasSecondLevelText:{da:"na"},Severity:{da:"rw"},CollectionIndex:{da:"rw"},AutoClear:{da:"rw"}},co:function(){cO.aN.call(this);this.aF("VF_SY172O",Fd);var C0=this.cR("FIRSTLEVELTEXT","PRIM_DC","UnicodeString");var C1=this.cR("SECONDLEVELTEXT","PRIM_DC","UnicodeString");var C2=this.cF("SEVERITY",Fd.F1.Dc);
var C3=this.cF("COLLECTIONINDEX",Fd.F2.Dc);var C4=this.cR("AUTOCLEAR","PRIM_BOLN");C0.iC();C1.iC();C2.aD();C2.iC();C3.aD();C3.iC();C4.iC();}});cO.mthGET_HASSECONDLEVELTEXT=function(){var m=this.REF,r=l.pR(this,cO,"Get_HasSecondLevelText",23);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=23;{r.ln=26;P0.set(l.s.ne(m.SECONDLEVELTEXT.get(),""));}r.ln=28;return r.rV(P0.get());};cO.getFIRSTLEVELTEXT=function(){return this.REF.FIRSTLEVELTEXT.get();};cO.setFIRSTLEVELTEXT=function(v){this.REF.FIRSTLEVELTEXT.set(v);
};cO.getSECONDLEVELTEXT=function(){return this.REF.SECONDLEVELTEXT.get();};cO.setSECONDLEVELTEXT=function(v){this.REF.SECONDLEVELTEXT.set(v);};cO.getHASSECONDLEVELTEXT=function(){return this.mthGET_HASSECONDLEVELTEXT();};cO.getSEVERITY=function(){return this.REF.SEVERITY.get();};cO.setSEVERITY=function(v){this.REF.SEVERITY.set(v);};cO.getCOLLECTIONINDEX=function(){return this.REF.COLLECTIONINDEX.get();};cO.setCOLLECTIONINDEX=function(v){this.REF.COLLECTIONINDEX.set(v);};cO.getAUTOCLEAR=function()
{return this.REF.AUTOCLEAR.get();};cO.setAUTOCLEAR=function(v){this.REF.AUTOCLEAR.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rp:["PRIM_OBJT","PRIM_DC.UnicodeString","PRIM_FLD","PRIM_BOLN"]});