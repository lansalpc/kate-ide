﻿LANSA.addComponent({id:"XDTOO_23",nm:"xDToolsShoppingCartSummary",ot:"rp",tp:"Reusable Part",de:"Shopping Cart Summary",tl:14010003},function(l,oI,u){var rc1=l.cB("xsshpct1.png");var cO=l.rC(oI,{an:"XDTOOLSP",mt:{Update:{},UpdateDesktop:{},UpdateTablet:{},UpdateMobile:{}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LABEL1ITEM1","PRIM_TBLO","Item");var C4=this.cR("LABEL2ITEM1","PRIM_TBLO","Item");
var C5=this.cR("LABEL3ITEM1","PRIM_TBLO","Item");var C6=this.cR("CART","PRIM_LABL");var C7=this.cR("TOTAL","PRIM_LABL");var C8=this.cR("ITEMS","PRIM_LABL");this.cD("GSHOPPINGCART");C0.setSizing("CONTENTWIDTH");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("CENTERLEFT");C3.setColumn(C1);C3.setManage(C6);C3.setParent(C0);C3.setRow(C2);C3.setSizing("CONTENTWIDTHANDHEIGHT");C3.setFlow("RIGHT");C3.iC();C4.setAlignment("CENTERLEFT");
C4.setColumn(C1);C4.setManage(C7);C4.setParent(C0);C4.setRow(C2);C4.setSizing("CONTENTWIDTHFITTOHEIGHT");C4.setFlow("RIGHT");C4.iC();C5.setAlignment("CENTERLEFT");C5.setColumn(C1);C5.setManage(C8);C5.setParent(C0);C5.setRow(C2);C5.setSizing("CONTENTWIDTHFITTOHEIGHT");C5.setFlow("RIGHT");C5.iC();C6.setCaption("Cart");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setHeight(24);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(4);C6.setVerticalAlignment("CENTER");
C6.setWidth(67);C6.setImage(rc1);C6.setMarginRight(10);C6.iC();C7.setCaption("Total");C7.setDisplayPosition(2);C7.setEllipses("WORD");C7.setHeight(32);C7.setLeft(67);C7.setParent(this);C7.setTabPosition(3);C7.setTabStop(false);C7.setTop(0);C7.setVerticalAlignment("CENTER");C7.setMarginRight(4);C7.setWidth(37);C7.iC();C8.setCaption("Items");C8.setDisplayPosition(3);C8.setEllipses("WORD");C8.setHeight(32);C8.setLeft(104);C8.setParent(this);C8.setTabPosition(2);C8.setTabStop(false);C8.setTop(0);C8.setVerticalAlignment("CENTER");
C8.setWidth(43);C8.setMarginRight(4);C8.iC();this.REF.GAPPLICATION.ref.aH("ACTIVATINGDESIGN",this,e1);this.REF.GDATAMODEL.ref.aH("PREPARED",this,e2);this.setHeight(32);this.setWidth(147);this.setLayoutManager(C0);this.setThemeDrawStyle("Clickable");this.aH("CLICK",this,e4);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.ActivatingDesign",15);var P0=Ps.r("DESIGN");r.ln=15;{r.ln=17;this.mthUPDATE();}r.ln=19;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gDatamodel.Prepared",21);
r.ln=21;{r.ln=23;this.srGSHOPPINGCART(this.REF.GDATAMODEL.ref.getSHOPPINGCART());r.ln=25;this.mthUPDATE();}r.ln=27;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#gShoppingCart.Changed #gShoppingCart.Loaded #gShoppingCart.Cleared",29);r.ln=29;{r.ln=31;this.mthUPDATE();}r.ln=33;r.e();};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",35);r.ln=35;{r.ln=37;if((m.GSHOPPINGCART!=null)){r.ln=39;{var v1=this.REF.GAPPLICATION.ref.getACTIVEDESIGN();if(r.ln=41,l.s.eq(v1,"DESKTOP")){r.ln=43;
this.mthUPDATEDESKTOP();}else if(r.ln=45,l.s.eq(v1,"TABLET")){r.ln=47;this.mthUPDATETABLET();}else if(r.ln=49,l.s.eq(v1,"MOBILE")){r.ln=51;this.mthUPDATEMOBILE();}r.ln=53;}}}r.ln=57;r.e();};cO.mthUPDATEDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"UpdateDesktop",59);r.ln=59;{r.ln=61;m.TOTAL.setVisible(true);r.ln=62;m.CART.set("Cart");r.ln=64;m.TOTAL.set(l.s.Substitute("$&1",l.n.AsDisplayString(m.GSHOPPINGCART.getTOTAL(),9,2)));r.ln=66;if(l.n.eq(m.GSHOPPINGCART.getQUANTITY(),1)){r.ln=68;m.ITEMS.set(l.s.Substitute("(&1 Item)",l.n.AsString(m.GSHOPPINGCART.getQUANTITY())));
}else{r.ln=72;m.ITEMS.set(l.s.Substitute("(&1 Items)",l.n.AsString(m.GSHOPPINGCART.getQUANTITY())));}}r.ln=76;r.e();};cO.mthUPDATETABLET=function(){var m=this.REF,r=l.mR(this,cO,"UpdateTablet",78);r.ln=78;{r.ln=80;m.TOTAL.setVisible(true);r.ln=81;m.CART.set("Cart");r.ln=83;m.TOTAL.set(l.s.Substitute("$&1",l.n.AsDisplayString(m.GSHOPPINGCART.getTOTAL(),9,2)));r.ln=85;m.ITEMS.set(l.s.Substitute("(&1)",l.n.AsString(m.GSHOPPINGCART.getQUANTITY())));}r.ln=87;r.e();};cO.mthUPDATEMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"UpdateMobile",89);
r.ln=89;{r.ln=91;m.CART.set("");r.ln=93;m.TOTAL.set(l.s.Substitute("$&1",l.n.AsDisplayString(m.GSHOPPINGCART.getTOTAL(),9,2)));r.ln=95;m.ITEMS.set(l.s.Substitute("(&1)",l.n.AsString(m.GSHOPPINGCART.getQUANTITY())));}r.ln=97;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Com_owner.Click",99);r.ln=99;{r.ln=101;this.REF.GAPPLICATION.ref.mthACTIVATESHOPPINGCARTPAGE();r.ln=103;l.WEB().getHistory().mthADD("Page=ShoppingCart");}r.ln=105;r.e();};cO.srGSHOPPINGCART=function(rn){if(this.REF.GSHOPPINGCART!=null)
{this.REF.GSHOPPINGCART.rH("CHANGED",this,e3);this.REF.GSHOPPINGCART.rH("LOADED",this,e3);this.REF.GSHOPPINGCART.rH("CLEARED",this,e3);}this.sR("GSHOPPINGCART",rn);if(this.REF.GSHOPPINGCART!=null){this.REF.GSHOPPINGCART.aH("CHANGED",this,e3);this.REF.GSHOPPINGCART.aH("LOADED",this,e3);this.REF.GSHOPPINGCART.aH("CLEARED",this,e3);}};},{rc:["XDTOOLSP"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL"],dc:["XDTOO_10"]});