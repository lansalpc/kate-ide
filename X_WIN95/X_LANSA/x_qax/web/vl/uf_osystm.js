﻿LANSA.addComponent({id:"UF_OSYSTM",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Imbedded Interface Point",tl:14011102},function(l,oI,u){var cO=l.rC(oI,{an:"VF_AC011O",mt:{uInitialize:{},uTerminate:{},avMAINWindowReady:{ps:{"Continue":{pt:"o"}}},avCloseMAINWindow:{ps:{"PossibletoCancel":{pt:"i"},"Continue":{pt:"o"}}}},co:function(){cO.aN.call(this);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",44);r.ln=44;{r.ln=47;cA.mthUINITIALIZE.call(this);r.ln=50;this.REF.MAXIMUMOPENFILTERANDHANDLERPANES.set(10);
r.ln=51;this.REF.MAXIUMQUICKSEARCHSIZE.set(200);r.ln=52;this.REF.SHAREDMESSAGESETINTABLETMODE.set(true);}r.ln=54;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",58);r.ln=58;{r.ln=65;cA.mthUTERMINATE.call(this);}r.ln=67;r.e();};cO.mthAVMAINWINDOWREADY=function(p0){var r=l.mR(this,cO,"avMAINWindowReady",70);var P0=r.cP("CONTINUE","PRIM_BOLN");r.ln=70;{r.ln=73;P0.set(true);p0.set(P0.get());}r.ln=75;r.e();};cO.mthAVCLOSEMAINWINDOW=function(p0,p1){var r=l.mR(this,cO,"avCloseMAINWindow",79);
var P0=r.cP("POSSIBLETOCANCEL","PRIM_BOLN");var P1=r.cP("CONTINUE","PRIM_BOLN");P0.set(p0);r.ln=79;{r.ln=85;P1.set(true);p1.set(P1.get());}r.ln=87;r.e();};},{rc:["VF_AC011O"]});