﻿LANSA.addComponent({id:"XDOTOAST",nm:"xDOToaster",ot:"rp",tp:"Reusable Part",de:"Toaster Popup",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",mt:{Show:{ps:{"Text":{pt:"i"},"Delay":{pt:"i"},"DisplayInterval":{pt:"i"}}},ShowMessage:{}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("TOASTTEXT","PRIM_LABL");var C5=this.cR("ISDISPLAYING","PRIM_BOLN");
var C6=this.cR("TOASTMESSAGES","PRIM_ACOL");var C7=this.cR("DELAYINTERVAL","PRIM_TIMR");var C8=this.cR("TOASTINTERVAL","PRIM_TIMR");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("CENTERLEFT");C3.setColumn(C1);C3.setFlow("DOWN");C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.setMarginTop(10);C3.setMarginBottom(10);C3.setMarginLeft(10);C3.setMarginRight(10);C3.iC();C4.setCaption("This is a toast");C4.setDisplayPosition(1);
C4.setEllipses("WORD");C4.setHeight(78);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setVerticalAlignment("CENTER");C4.setWidth(378);C4.setAlignment("CENTER");C4.iC();C5.iC();C6.setCollects("PRIM_ALPH");C6.iC();C7.setStartup("MANUAL");C7.iC();C8.setInterval(2500);C8.setStartup("MANUAL");C8.iC();C7.aH("TICK",this,e1);C8.aH("TICK",this,e2);this.setLeft(0);this.setHeight(100);this.setWidth(400);this.setTop(0);this.setLayoutManager(C0);this.setThemeDrawStyle("toast");this.setAutoClose(false);
}});cO.mthSHOW=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"Show",21);var P0=r.cP("TEXT","PRIM_ALPH");var P1=r.cP("DELAY","PRIM_NMBR");var P2=r.cP("DISPLAYINTERVAL","PRIM_NMBR");P0.set(p0);P1.set((p1===u)?(1):(p1));P2.set((p2===u)?(2500):(p2));r.ln=21;{r.ln=26;this.setWidth(l.sub(l.WEB().getWebPage().getWidth(),100));r.ln=28;m.TOASTMESSAGES.mthINSERTLAST(P0);r.ln=30;m.DELAYINTERVAL.setInterval(P1.get());r.ln=31;m.TOASTINTERVAL.setInterval(P2.get());r.ln=33;if(l.tB(l.not(m.ISDISPLAYING.get())))
{r.ln=35;m.ISDISPLAYING.set(true);r.ln=36;m.DELAYINTERVAL.mthSTART();}}r.ln=40;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DelayInterval.Tick",43);r.ln=43;{r.ln=45;m.DELAYINTERVAL.mthSTOP();r.ln=47;this.mthSHOWMESSAGE();r.ln=50;this.mthSHOWPOPUP(50,l.sub(l.WEB().getWebPage().getHeight(),150),u,"FADEINANDSCALE",u);r.ln=53;m.TOASTINTERVAL.mthSTART();}r.ln=55;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ToastInterval.Tick",58);r.ln=58;{r.ln=60;m.TOASTMESSAGES.mthREMOVEFIRST();
r.ln=62;if(l.n.eq(m.TOASTMESSAGES.getItemCount(),0)){r.ln=64;m.TOASTINTERVAL.mthSTOP();r.ln=66;m.ISDISPLAYING.set(false);r.ln=68;this.mthCLOSEPOPUP();}else{r.ln=72;this.mthSHOWMESSAGE();}}r.ln=76;r.e();};cO.mthSHOWMESSAGE=function(){var m=this.REF,r=l.mR(this,cO,"ShowMessage",78);r.ln=78;{r.ln=80;m.TOASTTEXT.set(m.TOASTMESSAGES.get(1).get());}r.ln=82;r.e();};},{rp:["PRIM_PPNL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_BOLN","PRIM_ACOL","PRIM_TIMR"]});