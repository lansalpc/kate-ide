﻿LANSA.addComponent({id:"DF_OCUSTM",ot:"rp",tp:"Reusable Part",de:"\OC=avCustomManager for shipped demo",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"VF_AC036O",fd:Fd,pt:{PeopleController:{da:"r"},NextOrderNumber:{da:"r"},SomeSharedText:{da:"r"}},mt:{uInitialize:{},uTerminate:{},ChangedSharedText:{ps:{"to":{pt:"i"},"ChangedbyCommandhandler":{pt:"i"}}},SignalDF_T58NNExamplesClose:{}},ev:{NextOrderNumberChanged:{},SomeSharedTextChanged:{ps:{"ByCommandHandler":{pt:"i"}}},DF_T58NNExamplesClose:{}},co:function(){cO.aN.call(this);this.aF("DF_OCUSTM",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");var C1=this.cF("NEXTORDERNUMBER",Fd.F1.Dc);
var C2=this.cR("SOMESHAREDTEXT","PRIM_ALPH");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.aD();C1.iC();C2.iC();}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",72);r.ln=72;{r.ln=74;cA.mthUINITIALIZE.call(this);}r.ln=75;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",80);r.ln=80;{r.ln=82;cA.mthUTERMINATE.call(this);}r.ln=83;r.e();};cO.mthSET_NEXTORDERNUMBER=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_NextOrderNumber",91);var P0=r.cPF("TO",Fd.F1.Dc);
P0.set(p0);r.ln=91;{r.ln=94;m.NEXTORDERNUMBER.set(P0.get());r.ln=96;this.fE("NEXTORDERNUMBERCHANGED");}r.ln=97;r.e();};cO.mthCHANGEDSHAREDTEXT=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"ChangedSharedText",101);var P0=r.cP("TO","PRIM_DC","UnicodeString");var P1=r.cPD("CHANGEDBYCOMMANDHANDLER");P0.set(p0);P1=p1;r.ln=101;{r.ln=105;m.SOMESHAREDTEXT.set(P0.get());r.ln=107;{var eP=l.ePs();eP.cD("BYCOMMANDHANDLER");eP.sR("BYCOMMANDHANDLER",P1);this.fE("SOMESHAREDTEXTCHANGED",eP);eP.e();}}r.ln=108;r.e();
};cO.mthSIGNALDF_T58NNEXAMPLESCLOSE=function(){var r=l.mR(this,cO,"SignalDF_T58NNExamplesClose",113);r.ln=113;{r.ln=114;this.fE("DF_T58NNEXAMPLESCLOSE");}r.ln=115;r.e();};cO.getPEOPLECONTROLLER=function(){return this.REF.PEOPLECONTROLLER.ref;};cO.getNEXTORDERNUMBER=function(){return this.REF.NEXTORDERNUMBER.get();};cO.setNEXTORDERNUMBER=function(v){this.mthSET_NEXTORDERNUMBER(v);};cO.getSOMESHAREDTEXT=function(){return this.REF.SOMESHAREDTEXT.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_AC036O","DF_EMCTLO"],rp:["PRIM_FLD","PRIM_ALPH"]});