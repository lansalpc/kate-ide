﻿LANSA.addComponent({id:"XD1MAIN",nm:"XD1Main",ot:"wp",tp:"Web Page",de:"Main Page",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("DESIGNMANAGER","PRIM_DESN");var C1=this.cR("MOBILEDESIGN","PRIM_DESN","Design");var C2=this.cR("TABLETDESIGN","PRIM_DESN","Design");var C3=this.cR("LAYOUT","PRIM_TBLO");var C4=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C5=this.cR("LAYOUTCOLUMN2","PRIM_TBLO","Column");var C6=this.cR("LAYOUTCOLUMN3","PRIM_TBLO","Column");
var C7=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C8=this.cR("LAYOUTROW2","PRIM_TBLO","Row");var C9=this.cR("LAYOUTROW3","PRIM_TBLO","Row");var C10=this.cR("LAYOUTHEADERITEM1","PRIM_TBLO","Item");var C11=this.cR("LAYOUTCONTENTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTFOOTERITEM1","PRIM_TBLO","Item");var C13=this.cR("HEADER","XD1HEAD");var C14=this.cR("HOME","XD1HOME");var C15=this.cR("FOOTER","XD1FOOT");var C16=this.cA("APPLICATION","XD1APP");C0.iC();C1.setDesignManager(C0);C1.setWidth(600);
C1.iC();C2.setDesignManager(C0);C2.setWidth(1000);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.setWidth(10);C5.setMinWidth(300);C5.setMaxWidth(1300);C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.iC();C7.setDisplayPosition(1);C7.setParent(C3);C7.setUnits("CONTENT");C7.setHeight(129);C7.iC();C8.setDisplayPosition(2);C8.setParent(C3);C8.iC();C9.setDisplayPosition(3);C9.setParent(C3);C9.setUnits("CONTENT");C9.setHeight(50);C9.iC();
C10.setManage(C13);C10.setParent(C3);C10.setRow(C7);C10.setColumn(C5);C10.setAlignment("TOPCENTER");C10.setSizing("FITTOWIDTH");C10.setFlow("DOWN");C10.iC();C11.setManage(C14);C11.setParent(C3);C11.setRow(C8);C11.setColumn(C5);C11.setAlignment("TOPCENTER");C11.setFlow("DOWN");C11.iC();C12.setManage(C15);C12.setParent(C3);C12.setRow(C9);C12.setColumn(C5);C12.setAlignment("BOTTOMCENTER");C12.setSizing("FITTOWIDTH");C12.setFlow("DOWN");C12.iC();C13.setParent(this);C13.setTabStop(false);C13.setWidth(1300);
C13.setLeft(178);C13.setHeight(129);C13.iC();C14.setParent(this);C14.setTabStop(false);C14.setWidth(1300);C14.setLeft(178);C14.setDisplayPosition(3);C14.setTop(129);C14.setTabPosition(2);C14.setHeight(400);C14.iC();C15.setDisplayPosition(2);C15.setParent(this);C15.setTabStop(false);C15.setTop(529);C15.setWidth(1300);C15.setTabPosition(3);C15.setLeft(178);C15.iC();if((C16!=null)&&(C16.iI()==false)){C16.iC();}C16.aH("DESKTOPVIEW",this,e3);C16.aH("TABLETVIEW",this,e4);C16.aH("MOBILEVIEW",this,e5);C16.aH("HIDECONTENT",this,e6);
C16.aH("SHOWCONTENT",this,e7);this.setTheme(l.gTh("XD1THEME"));this.setDesignManager(C0);this.setLayoutManager(C3);this.setThemeDrawStyle("Font");this.aH("INITIALIZE",this,e1);this.aH("DESIGNCHANGED",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",28);r.ln=28;{r.ln=30;m.APPLICATION.ref.mthSHOWLOGINDIALOG();}r.ln=32;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.DesignChanged",34);var P0=Ps.r("DESIGN");r.ln=34;{r.ln=36;m.APPLICATION.ref.mthDESIGNCHANGED(P0);
}r.ln=38;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",40);r.ln=40;{r.ln=42;m.LAYOUTCOLUMN1.setWidth(1);r.ln=43;m.LAYOUTCOLUMN3.setWidth(1);r.ln=45;this.setThemeDrawStyle("Font");}r.ln=47;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",49);r.ln=49;{r.ln=51;m.LAYOUTCOLUMN1.setWidth(0);r.ln=52;m.LAYOUTCOLUMN3.setWidth(0);r.ln=54;this.setThemeDrawStyle("Font");}r.ln=56;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",58);
r.ln=58;{r.ln=60;m.LAYOUTCOLUMN1.setWidth(0);r.ln=61;m.LAYOUTCOLUMN3.setWidth(0);r.ln=63;this.setThemeDrawStyle("FontMobile");}r.ln=65;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.HideContent",67);r.ln=67;{r.ln=69;if((m.LAYOUTCONTENTITEM1.getManage()!=null)){r.ln=71;m.LAYOUTCONTENTITEM1.getManage().setParent(null);r.ln=73;m.LAYOUTCONTENTITEM1.setManage(null);}}r.ln=77;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.ShowContent",79);var C0=r.cD("C0");
r.ln=79;{r.ln=82;C0=r.sR("C0",m.APPLICATION.ref.getACTIVECONTENTPANEL());r.ln=84;if((C0!=null)){r.ln=86;m.LAYOUTCONTENTITEM1.setManage(C0);r.ln=88;C0.setParent(this);}}r.ln=92;r.e();};},{rc:["XD1HEAD","XD1HOME","XD1FOOT","XD1APP","XD1THEME"],rp:["PRIM_WEB","PRIM_DESN","PRIM_DESN.Design","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item"],dp:["PRIM_PANL"]});