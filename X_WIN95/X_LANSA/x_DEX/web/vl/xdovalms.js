﻿LANSA.addComponent({id:"XDOVALMS",nm:"xDOValidationMessages",ot:"rp",tp:"Reusable Part",de:"Validation Messages Handler",tl:14010001},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",mt:{Add:{ps:{"Field":{pt:"i"},"Message":{pt:"i"}}},MessageListForField:{ps:{"Field":{pt:"i"}}},IsEmpty:{}},co:function(){cO.aN.call(this);var C0=this.cR("MESSAGELIST","PRIM_LCOL");C0.setCollects("XDOVALM");C0.iC();}});cO.mthADD=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Add",6);var P0=r.cP("FIELD","PRIM_ALPH");var P1=r.cP("MESSAGE","PRIM_ALPH");
P0.set(p0);P1.set(p1);r.ln=6;{r.ln=10;m.MESSAGELIST.mthINSERT(l.cC("XDOVALM"));r.ln=12;m.MESSAGELIST.getLast().setIDENTIFIER(P0.get());r.ln=13;m.MESSAGELIST.getLast().setMESSAGE(P1.get());}r.ln=15;r.e();};cO.mthMESSAGELISTFORFIELD=function(p0){var m=this.REF,r=l.mR(this,cO,"MessageListForField",17);var P0=r.cP("FIELD","PRIM_ALPH");var P1=r.cPD("RESULT");P0.set(p0);r.ln=17;{r.ln=21;P1=r.sR("P1",l.cC("PRIM_LCOL").tB([ti1]));r.ln=23;{var i1=m.MESSAGELIST.cI();while(i1.step()){var MESSAGE=r.sR("MESSAGE",i1.item());
r.ln=25;if(l.tB(l.s.eq(MESSAGE.getIDENTIFIER(),P0.get()))){r.ln=27;P1.mthINSERT(MESSAGE);}r.ln=31;}i1.end();r.dR("MESSAGE");}}r.ln=33;return r.rR(P1);};cO.mthISEMPTY=function(){var m=this.REF,r=l.mR(this,cO,"IsEmpty",35);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=35;{r.ln=38;P0.set(m.MESSAGELIST.getIsEmpty());}r.ln=40;return r.rV(P0.get());};var ti1={p:"XDOVALM"};},{rp:["PRIM_OBJT","PRIM_LCOL"]});