﻿LANSA.addComponent({id:"VF_AC032O",ot:"rp",tp:"Reusable Part",de:"\OC=Ancestor for VLF-ONE Mtxt loader",tl:14011102},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",mt:{uLoadMtxtStrings:{}},co:function(){cO.aN.call(this);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}}});cO.mthULOADMTXTSTRINGS=function(){var r=l.mR(this,cO,"uLoadMtxtStrings",11);r.ln=11;{r.ln=13;l.WEB().mthALERT("VF_AC032O has been invoked directly as a multilingual text string loader. This is not correct usage. Create your own VL reusable part that starts with Begin_Com Role(*EXTENDS #VF_AC032O) then override the uLoadMtxtStrings method with your own version.");
}r.ln=15;r.e();};},{rc:["VF_SY001O","VF_SY001X"],rp:["PRIM_OBJT"]});