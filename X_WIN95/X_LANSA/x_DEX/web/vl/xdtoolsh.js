﻿LANSA.addComponent({id:"XDTOOLSH",nm:"xDToolsHeader",ot:"rp",tp:"Reusable Part",de:"Header Panel",tl:14020000},function(l,oI,u){var rc1=l.cB("xdtoolsla.png");var rc2=l.cB("xdtoolsme.png");var rc3=l.cB("xdtoolsim.png");var cO=l.rC(oI,{an:"XDTOOLSP",mt:{LayoutDesktop:{},LayoutTablet:{},LayoutMobile:{}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C4=this.cR("LAYOUTCARTSUMMARY","PRIM_TBLO","Item");var C5=this.cR("LAYOUTLOGIN","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("IMAGE","PRIM_IMAG");var C8=this.cR("CARTSUMMARY","XDTOO_23");var C9=this.cR("LOGIN","XDTOO_25");var C10=this.cR("SEARCH","XDTOOLSS");C0.setSizing("CONTENTHEIGHT");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setManage(C7);C3.setParent(C0);C3.setRow(C2);
C3.setSizing("CONTENTWIDTHANDHEIGHT");C3.setAlignment("TOPLEFT");C3.setMarginLeft(4);C3.iC();C4.setColumn(C1);C4.setManage(C8);C4.setParent(C0);C4.setRow(C2);C4.setSizing("CONTENTWIDTH");C4.setAlignment("TOPRIGHT");C4.setFlow("LEFT");C4.setMarginTop(20);C4.iC();C5.setColumn(C1);C5.setManage(C9);C5.setParent(C0);C5.setRow(C2);C5.setSizing("NONE");C5.setAlignment("BOTTOMRIGHT");C5.setFlow("LEFT");C5.setMarginRight(10);C5.iC();C6.setColumn(C1);C6.setManage(C10);C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");
C6.setAlignment("BOTTOMRIGHT");C6.setFlow("LEFT");C6.iC();C7.setDisplayPosition(2);C7.setHeight(90);C7.setImage(rc1);C7.setLeft(4);C7.setParent(this);C7.setTabPosition(2);C7.setTabStop(false);C7.setTop(0);C7.setWidth(300);C7.iC();C8.setDisplayPosition(3);C8.setLeft(822);C8.setParent(this);C8.setTabPosition(3);C8.setHeight(30);C8.setTop(20);C8.iC();C9.setDisplayPosition(4);C9.setLeft(314);C9.setParent(this);C9.setTabPosition(4);C9.setTop(60);C9.setWidth(345);C9.iC();C10.setLeft(669);C10.setParent(this);
C10.setTop(60);C10.iC();this.REF.GAPPLICATION.ref.aH("ACTIVATINGDESIGN",this,e1);this.setHeight(90);this.setWidth(969);this.setLayoutManager(C0);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.ActivatingDesign",16);var P0=Ps.r("DESIGN");r.ln=16;{r.ln=18;{var v1=P0.get();if(r.ln=20,l.s.eq(v1,"DESKTOP")){r.ln=22;this.mthLAYOUTDESKTOP();}else if(r.ln=24,l.s.eq(v1,"TABLET")){r.ln=26;this.mthLAYOUTTABLET();}else if(r.ln=28,l.s.eq(v1,"MOBILE")){r.ln=30;this.mthLAYOUTMOBILE();}r.ln=32;}}r.ln=34;
r.e();};cO.mthLAYOUTDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"LayoutDesktop",36);r.ln=36;{r.ln=38;m.IMAGE.setImage(rc1);r.ln=39;m.SEARCH.setVisible(true);r.ln=40;m.LAYOUTLOGIN.setAlignment("BOTTOMRIGHT");r.ln=41;m.LAYOUTCARTSUMMARY.setMarginTop(20);}r.ln=43;r.e();};cO.mthLAYOUTTABLET=function(){var m=this.REF,r=l.mR(this,cO,"LayoutTablet",45);r.ln=45;{r.ln=47;m.IMAGE.setImage(rc2);r.ln=48;m.LAYOUTLOGIN.setAlignment("TOPRIGHT");r.ln=49;m.LAYOUTCARTSUMMARY.setMarginTop(0);}r.ln=51;r.e();};cO.mthLAYOUTMOBILE=function()
{var m=this.REF,r=l.mR(this,cO,"LayoutMobile",53);r.ln=53;{r.ln=55;m.IMAGE.setImage(rc3);r.ln=56;m.SEARCH.setVisible(false);r.ln=57;m.LAYOUTLOGIN.setAlignment("TOPRIGHT");r.ln=58;m.LAYOUTCARTSUMMARY.setMarginTop(0);}r.ln=60;r.e();};},{rc:["XDTOOLSP","XDTOO_23","XDTOO_25","XDTOOLSS"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG"]});