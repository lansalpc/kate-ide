﻿LANSA.addComponent({id:"XDTOOLSD",nm:"xDToolsDataEntityFeature",ot:"rp",tp:"Reusable Part",de:"Entity Feature",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"XDTOOL_5",mt:{Changing:{ps:{"Property":{pt:"i"},"Reason":{pt:"i"},"Part":{pt:"i"},"Origin":{pt:"i"}}}},ev:{Changed:{ps:{"Event":{pt:"i"}}}},co:function(){cO.aN.call(this);}});cO.mthCHANGING=function(p0,p1,p2,p3){var r=l.mR(this,cO,"Changing",6);var P0=r.cP("PROPERTY","PRIM_ALPH");var P1=r.cP("REASON","PRIM_ALPH");var P2=r.cPD("PART");var P3=r.cPD("ORIGIN");
P0.set(p0);P1.set(p1);P2=p2;P3=(p3===u)?(null):(p3);r.ln=6;{r.ln=12;{var eP=l.ePs();eP.cD("EVENT");eP.sR("EVENT",l.cAs("XDTOOL_3",u,"mthCONSTRUCTOR",[P0.get(),P1.get(),P2,P3]));this.fE("CHANGED",eP);eP.e();}}r.ln=14;r.e();};},{rc:["XDTOOL_5"]});