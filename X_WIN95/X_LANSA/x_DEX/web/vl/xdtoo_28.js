﻿LANSA.addComponent({id:"XDTOO_28",nm:"xDToolsSearchProductsTreeItem",ot:"rp",tp:"Reusable Part",de:"Products Tree Item",tl:14010003},function(l,oI,u){var c1=l.cDec("1.51"),c2=l.cDec("0.53"),c3=l.cDec("1.47");var rc1=l.cB("xsshpct2.png");var cO=l.rC(oI,{an:"XDTOOLSP",mt:{OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("LAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");
var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("ROW2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("STOCKSTATUSITEM1","PRIM_TBLO","Item");var C9=this.cR("PRICEITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C12=this.cR("ADDTOCART","PRIM_LABL");var C13=this.cR("PRODUCTDESCRIPTION","PRIM_LABL");var C14=this.cR("PRODUCTDETAIL","PRIM_LABL");
var C15=this.cR("STOCKSTATUS","PRIM_LABL");var C16=this.cR("PRICE","PRIM_LABL");var C17=this.cR("PRODUCTIMAGE","PRIM_IMAG");this.cD("GPRODUCT");C0.setSizing("CONTENTHEIGHT");C0.setMarginBottom(10);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(84);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setWidth(c1);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.setHeight(c2);C4.iC();C5.setDisplayPosition(2);
C5.setParent(C0);C5.setHeight(c3);C5.iC();C6.setColumn(C1);C6.setManage(C17);C6.setParent(C0);C6.setRow(C4);C6.setSizing("FITTOWIDTH");C6.setAlignment("TOPLEFT");C6.setMarginLeft(4);C6.setMarginTop(4);C6.iC();C7.setColumn(C2);C7.setManage(C13);C7.setParent(C0);C7.setRow(C4);C7.setSizing("CONTENTHEIGHTFITTOWIDTH");C7.setAlignment("TOPCENTER");C7.setFlow("DOWN");C7.iC();C8.setManage(C15);C8.setParent(C0);C8.setRow(C4);C8.setSizing("NONE");C8.setColumn(C3);C8.setFlow("DOWN");C8.setAlignment("TOPRIGHT");
C8.iC();C9.setManage(C16);C9.setParent(C0);C9.setRow(C4);C9.setSizing("NONE");C9.setColumn(C3);C9.setFlow("DOWN");C9.setAlignment("TOPRIGHT");C9.iC();C10.setAlignment("TOPRIGHT");C10.setColumn(C3);C10.setManage(C12);C10.setParent(C0);C10.setRow(C4);C10.setSizing("NONE");C10.setMarginBottom(4);C10.setMarginRight(4);C10.setFlow("DOWN");C10.iC();C11.setColumn(C2);C11.setManage(C14);C11.setParent(C0);C11.setRow(C4);C11.setFlow("DOWN");C11.setAlignment("TOPCENTER");C11.setRowSpan(2);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");
C11.iC();C12.setCaption("Add");C12.setDisplayPosition(6);C12.setEllipses("WORD");C12.setHeight(32);C12.setLeft(264);C12.setParent(this);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(64);C12.setVerticalAlignment("CENTER");C12.setWidth(85);C12.setAlignment("CENTER");C12.setThemeDrawStyle("ProductItemAddtoCart+Clickable");C12.setImage(rc1);C12.iC();C13.setCaption("Description");C13.setDisplayPosition(2);C13.setEllipses("WORD");C13.setHeight(16);C13.setLeft(84);C13.setParent(this);C13.setTabPosition(2);
C13.setTabStop(false);C13.setTop(0);C13.setWidth(162);C13.setMarginLeft(4);C13.setMarginRight(4);C13.setThemeDrawStyle("SearchItemTitle");C13.iC();C14.setCaption("Product Detail");C14.setDisplayPosition(3);C14.setEllipses("WORD");C14.setHeight(20);C14.setLeft(84);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(16);C14.setWidth(162);C14.setMarginRight(2);C14.setMarginLeft(4);C14.setMarginTop(4);C14.iC();C15.setCaption("Stock Status");C15.setDisplayPosition(4);C15.setEllipses("WORD");
C15.setHeight(32);C15.setLeft(220);C15.setParent(this);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(0);C15.setVerticalAlignment("CENTER");C15.setWidth(133);C15.setAlignment("RIGHT");C15.setMarginRight(4);C15.iC();C16.setCaption("$ 999.99");C16.setDisplayPosition(5);C16.setEllipses("WORD");C16.setHeight(32);C16.setLeft(234);C16.setParent(this);C16.setTabPosition(5);C16.setTabStop(false);C16.setTop(32);C16.setVerticalAlignment("CENTER");C16.setWidth(119);C16.setThemeDrawStyle("Strong");C16.setAlignment("RIGHT");
C16.setMarginRight(4);C16.iC();C17.setDisplayPosition(1);C17.setLeft(4);C17.setParent(this);C17.setTabPosition(6);C17.setTabStop(false);C17.setTop(4);C17.setHeight(80);C17.setWidth(80);C17.setImageSizing("BESTFIT");C17.iC();C12.aH("CLICK",this,e1);this.setHeight(106);this.setWidth(353);this.setLayoutManager(C0);}});cO.mthONITEMGOTREFERENCE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnItemGotReference",27);var P0=r.cPD("TREEITEM");P0=p0;r.ln=27;{r.ln=29;this.srGPRODUCT(l.cast(P0.getRelatedReference(),"XDTOOL_6"));
r.ln=31;m.PRODUCTIMAGE.setFileName(m.GPRODUCT.getIMAGEPATH());r.ln=32;m.PRODUCTDESCRIPTION.set(m.GPRODUCT.getDESCRIPTION());r.ln=33;m.PRODUCTDETAIL.set(m.GPRODUCT.getDETAIL());r.ln=34;m.STOCKSTATUS.set(m.GPRODUCT.getSTOCKSTATUS());r.ln=35;m.PRICE.set(l.s.Substitute("$&1",l.n.AsDisplayString(m.GPRODUCT.getPRICE(),9,2)));}r.ln=37;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AddToCart.Click",39);r.ln=39;{r.ln=41;this.REF.GDATAMODEL.ref.getSHOPPINGCART().mthADD(m.GPRODUCT.getID());}
r.ln=43;r.e();};cO.srGPRODUCT=function(rn){this.sR("GPRODUCT",rn);};},{rc:["XDTOOLSP"],rp:["PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG"],dc:["XDTOOL_6"]});