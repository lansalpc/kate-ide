﻿LANSA.addComponent({id:"XDTOO_22",nm:"xDToolsShoppingCartListItem",ot:"rp",tp:"Reusable Part",de:"Shopping Cart List Item",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"XDTOOLSP",mt:{UpdateLayout:{},LayoutDesktop:{},LayoutMobile:{},OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}},Update:{}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");
var C4=this.cR("COLUMN4","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("LABEL1ITEM1","PRIM_TBLO","Item");var C8=this.cR("LABEL2ITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTIMAGE","PRIM_TBLO","Item");var C10=this.cR("LAYOUTQUANTITY","PRIM_TBLO","Item");var C11=this.cR("LAYOUTPRICE","PRIM_TBLO","Item");var C12=this.cR("LAYOUTBACKORDER","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C14=this.cR("LAYOUTMOBILE","PRIM_TBLO");
var C15=this.cR("COLUMN5","PRIM_TBLO","Column");var C16=this.cR("COLUMN6","PRIM_TBLO","Column");var C17=this.cR("COLUMN7","PRIM_TBLO","Column");var C18=this.cR("ROW3","PRIM_TBLO","Row");var C19=this.cR("ROW4","PRIM_TBLO","Row");var C20=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");
var C26=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C27=this.cR("IMAGE","PRIM_IMAG");var C28=this.cR("DESCRIPTION","PRIM_LABL");var C29=this.cR("DETAILS","PRIM_LABL");var C30=this.cR("QUANTITY","PRIM_SPDT");var C31=this.cR("PRICE","PRIM_LABL");var C32=this.cR("BACKORDER","PRIM_LABL");this.cD("GSHOPPINGCARTITEM");var C34=this.cR("EDITTIMER","XDTOOLSE");var C35=this.cR("REMOVE","PRIM_LABL");C0.setSizing("CONTENTHEIGHT");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setUnits("PIXELS");C1.setWidth(130);
C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setWidth(250);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(109);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.setWidth(145);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setMinHeight(65);C5.setHeight(65);C5.iC();C6.setDisplayPosition(2);C6.setParent(C0);C6.setMinHeight(65);C6.setHeight(65);C6.iC();C7.setColumn(C2);C7.setManage(C28);C7.setParent(C0);
C7.setRow(C5);C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.setFlow("DOWN");C7.setAlignment("TOPCENTER");C7.iC();C8.setColumn(C2);C8.setManage(C29);C8.setParent(C0);C8.setRow(C5);C8.setSizing("CONTENTHEIGHTFITTOWIDTH");C8.setFlow("DOWN");C8.setAlignment("TOPCENTER");C8.iC();C9.setColumn(C1);C9.setManage(C27);C9.setParent(C0);C9.setRow(C5);C9.setRowSpan(2);C9.setMarginBottom(2);C9.setMarginLeft(2);C9.setMarginRight(2);C9.setMarginTop(2);C9.setAlignment("TOPLEFT");C9.iC();C10.setColumn(C3);C10.setManage(C30);
C10.setParent(C0);C10.setRow(C5);C10.setSizing("FITTOWIDTH");C10.setRowSpan(2);C10.setMarginLeft(4);C10.setMarginRight(4);C10.iC();C11.setColumn(C4);C11.setManage(C31);C11.setParent(C0);C11.setRow(C5);C11.setSizing("NONE");C11.setMarginRight(4);C11.setMarginLeft(4);C11.setAlignment("CENTERLEFT");C11.setFlow("RIGHT");C11.setRowSpan(2);C11.iC();C12.setColumn(C4);C12.setManage(C32);C12.setParent(C0);C12.setRow(C6);C12.setSizing("FITTOWIDTH");C12.setAlignment("BOTTOMCENTER");C12.setMarginLeft(4);C12.iC();
C13.setColumn(C3);C13.setManage(C35);C13.setParent(C0);C13.setRow(C6);C13.setSizing("FITTOWIDTH");C13.setMarginLeft(4);C13.setMarginRight(4);C13.iC();C14.setSizing("CONTENTHEIGHT");C14.setMarginBottom(4);C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.setWidth(64);C15.setUnits("PIXELS");C15.iC();C16.setDisplayPosition(2);C16.setParent(C14);C16.setWidth(118);C16.setUnits("PIXELS");C16.iC();C17.setDisplayPosition(3);C17.setParent(C14);C17.iC();C18.setDisplayPosition(1);C18.setParent(C14);
C18.setHeight(42);C18.setUnits("CONTENT");C18.iC();C19.setDisplayPosition(2);C19.setParent(C14);C19.iC();C20.setColumn(C15);C20.setManage(C27);C20.setParent(C14);C20.setRow(C18);C20.setMarginBottom(2);C20.setMarginLeft(2);C20.setMarginRight(2);C20.setMarginTop(2);C20.setSizing("CONTENTHEIGHTFITTOWIDTH");C20.setAlignment("TOPCENTER");C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C16);C21.setManage(C28);C21.setParent(C14);C21.setRow(C18);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setFlow("DOWN");
C21.setColumnSpan(2);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C16);C22.setManage(C29);C22.setParent(C14);C22.setRow(C18);C22.setSizing("CONTENTHEIGHTFITTOWIDTH");C22.setFlow("DOWN");C22.setColumnSpan(2);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C16);C23.setManage(C31);C23.setParent(C14);C23.setRow(C19);C23.setSizing("FITTOWIDTH");C23.setFlow("DOWN");C23.setMarginLeft(3);C23.setMarginTop(3);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C16);C24.setManage(C30);C24.setParent(C14);
C24.setRow(C19);C24.setSizing("FITTOWIDTH");C24.setFlow("DOWN");C24.setMarginLeft(4);C24.setMarginTop(4);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C17);C25.setManage(C35);C25.setParent(C14);C25.setRow(C19);C25.setSizing("NONE");C25.setFlow("DOWN");C25.setMarginLeft(4);C25.setMarginTop(4);C25.iC();C26.setColumn(C17);C26.setManage(C32);C26.setParent(C14);C26.setRow(C19);C26.setSizing("CONTENTWIDTH");C26.setAlignment("TOPLEFT");C26.setFlow("DOWN");C26.setMarginLeft(3);C26.setMarginTop(3);C26.iC();
C27.setDisplayPosition(1);C27.setLeft(2);C27.setParent(this);C27.setTabPosition(1);C27.setTabStop(false);C27.setTop(0);C27.setHeight(10);C27.setWidth(60);C27.setMarginBottom(2);C27.setMarginLeft(2);C27.setMarginRight(2);C27.setMarginTop(2);C27.iC();C28.setCaption("Description");C28.setDisplayPosition(2);C28.setEllipses("WORD");C28.setHeight(25);C28.setLeft(64);C28.setParent(this);C28.setTabPosition(2);C28.setTabStop(false);C28.setTop(0);C28.setWidth(321);C28.setThemeDrawStyle("SearchItemTitle");C28.setMarginLeft(3);
C28.setMarginBottom(8);C28.iC();C29.setCaption("Details");C29.setDisplayPosition(4);C29.setEllipses("WORD");C29.setHeight(17);C29.setLeft(64);C29.setParent(this);C29.setTabPosition(3);C29.setTabStop(false);C29.setTop(25);C29.setWidth(321);C29.setMarginLeft(3);C29.iC();C30.setDisplayPosition(5);C30.setLeft(68);C30.setParent(this);C30.setShowSelection(false);C30.setShowSelectionHilight(false);C30.setTabPosition(4);C30.setTop(74);C30.setWidth(114);C30.setEditAlignment("RIGHT");C30.setDisplayAlignment("RIGHT");
C30.iC();C31.setCaption("Price");C31.setDisplayPosition(3);C31.setEllipses("WORD");C31.setHeight(25);C31.setLeft(67);C31.setParent(this);C31.setTabPosition(6);C31.setTabStop(false);C31.setTop(45);C31.setVerticalAlignment("CENTER");C31.setWidth(115);C31.iC();C32.setDisplayPosition(6);C32.setEllipses("WORD");C32.setHeight(25);C32.setLeft(185);C32.setParent(this);C32.setTabPosition(7);C32.setTabStop(false);C32.setTop(45);C32.setVerticalAlignment("CENTER");C32.setWidth(83);C32.setCaption("Back Order");
C32.setThemeDrawStyle("Error");C32.setVisible(false);C32.iC();C34.iC();C35.setCaption("Remove");C35.setDisplayPosition(7);C35.setEllipses("WORD");C35.setHeight(25);C35.setLeft(186);C35.setParent(this);C35.setTabPosition(5);C35.setTabStop(false);C35.setTop(74);C35.setVerticalAlignment("CENTER");C35.setWidth(80);C35.setThemeDrawStyle("PushButton+Clickable");C35.setAlignment("CENTER");C35.setVisible(false);C35.iC();C30.aH("CHANGED",this,e2);C34.aH("TICKED",this,e3);C35.aH("CLICK",this,e7);this.REF.GAPPLICATION.ref.aH("ACTIVATINGDESIGN",this,e1);
this.setHeight(103);this.setLayoutManager(C14);this.setWidth(385);this.setThemeDrawStyle("ListItem");this.aH("MOUSEENTER",this,e5);this.aH("MOUSELEAVE",this,e6);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.ActivatingDesign",45);var P0=Ps.r("DESIGN");r.ln=45;{r.ln=47;this.mthUPDATELAYOUT();}r.ln=49;r.e();};cO.mthUPDATELAYOUT=function(){var r=l.mR(this,cO,"UpdateLayout",51);r.ln=51;{r.ln=53;{var v1=this.REF.GAPPLICATION.ref.getACTIVEDESIGN();if(r.ln=55,l.s.eq(v1,"DESKTOP")){r.ln=57;
this.mthLAYOUTDESKTOP();}else if(r.ln=59,l.s.eq(v1,"TABLET")){r.ln=61;this.mthLAYOUTDESKTOP();}else if(r.ln=63,l.s.eq(v1,"MOBILE")){r.ln=65;this.mthLAYOUTMOBILE();}r.ln=67;}}r.ln=69;r.e();};cO.mthLAYOUTDESKTOP=function(){var m=this.REF,r=l.mR(this,cO,"LayoutDesktop",71);r.ln=71;{r.ln=73;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=74;m.REMOVE.setVisible(m.REMOVE.getMouseOver());}r.ln=76;r.e();};cO.mthLAYOUTMOBILE=function(){var m=this.REF,r=l.mR(this,cO,"LayoutMobile",78);r.ln=78;{r.ln=80;this.setLayoutManager(m.LAYOUTMOBILE);
r.ln=81;m.REMOVE.setVisible(true);}r.ln=83;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",85);var P0=r.cPD("TREEITEM");P0=p0;r.ln=85;{r.ln=87;this.srGSHOPPINGCARTITEM(l.cast(P0.getRelatedReference(),"XDTOO_11"));r.ln=89;this.mthUPDATELAYOUT();r.ln=91;this.mthUPDATE();}r.ln=93;r.e();};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",95);r.ln=95;{r.ln=97;m.DESCRIPTION.set(m.GSHOPPINGCARTITEM.getPRODUCT().getDESCRIPTION());r.ln=98;m.DETAILS.set(m.GSHOPPINGCARTITEM.getPRODUCT().getDETAIL());
r.ln=99;m.QUANTITY.set(m.GSHOPPINGCARTITEM.getQUANTITY());r.ln=100;m.IMAGE.setFileName(m.GSHOPPINGCARTITEM.getPRODUCT().getIMAGEPATH());r.ln=101;m.BACKORDER.setVisible(l.s.eq(m.GSHOPPINGCARTITEM.getPRODUCT().getSTOCKSTATUS(),"BACKORDER"));r.ln=102;m.PRICE.set(l.s.Substitute("$&1",l.n.AsString(l.mul(m.GSHOPPINGCARTITEM.getQUANTITY(),m.GSHOPPINGCARTITEM.getPRODUCT().getPRICE()))));}r.ln=104;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Quantity.Changed",106);r.ln=106;{r.ln=108;m.QUANTITY.set(l.n.Max(m.QUANTITY.getValue(),m.QUANTITY.get(),1));
r.ln=110;m.EDITTIMER.mthRESTART();}r.ln=112;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EditTimer.Ticked",114);r.ln=114;{r.ln=116;m.GSHOPPINGCARTITEM.setQUANTITY(m.QUANTITY.get());}r.ln=118;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#gShoppingCartItem.Changed",120);r.ln=120;{r.ln=122;this.mthUPDATE();}r.ln=124;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.MouseEnter",126);r.ln=126;{r.ln=128;if(l.s.ne(this.REF.GAPPLICATION.ref.getACTIVEDESIGN(),"MOBILE"))
{r.ln=130;m.REMOVE.setVisible(true);}}r.ln=134;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.MouseLeave",136);r.ln=136;{r.ln=138;if(l.s.ne(this.REF.GAPPLICATION.ref.getACTIVEDESIGN(),"MOBILE")){r.ln=140;m.REMOVE.setVisible(false);}}r.ln=144;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Remove.Click",146);r.ln=146;{r.ln=148;m.GSHOPPINGCARTITEM.mthDELETE();}r.ln=150;r.e();};cO.srGSHOPPINGCARTITEM=function(rn){if(this.REF.GSHOPPINGCARTITEM!=null){this.REF.GSHOPPINGCARTITEM.rH("CHANGED",this,e4);
}this.sR("GSHOPPINGCARTITEM",rn);if(this.REF.GSHOPPINGCARTITEM!=null){this.REF.GSHOPPINGCARTITEM.aH("CHANGED",this,e4);}};},{rc:["XDTOOLSP","XDTOOLSE"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_LABL","PRIM_SPDT"],dc:["XDTOO_11"]});