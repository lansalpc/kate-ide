﻿(function(l,u){var oI=l.cV({id:"XDEMOTRE",nm:"xDemoTreeDesign",ot:"rp",tp:"Reusable Part",de:"Sample Tree Design",tl:3});var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xdemotre-ximageima.png");var Fd={F1:{nm:"STD_TEXT",ft:"A",ln:50,dc:0,lb:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h1:{"ENG":"Text","FRA":"Texte","JPN":"Text","LLL":"Text"}[cL],h2:" ",h3:" ",de:{"ENG":"Standard TEXT","FRA":"Texte Standard","JPN":"Standard TEXT","LLL":"Standard TEXT"}[cL],
dv:"",ia:["LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{OnAdd:{ps:{"TreeItem":{pt:"i"}}},OnDelete:{ps:{"TreeItem":{pt:"i"}}},OnFind:{ps:{"TreeItem":{pt:"i"},"Key":{pt:"i"}}},OnItemCollapsed:{ps:{"TreeItem":{pt:"i"}}},OnItemExpanding:{ps:{"TreeItem":{pt:"i"}}},OnItemGotFocus:{ps:{"TreeItem":{pt:"i"}}},OnItemGotParent:{ps:{"TreeItem":{pt:"i"}}},OnItemGotReference:{ps:{"TreeItem":{pt:"i"}}},OnItemGotSelection:{ps:{"TreeItem":{pt:"i"}}},OnItemImageChanged:{ps:{"TreeItem":{pt:"i"}}},OnItemLostFocus:
{ps:{"TreeItem":{pt:"i"}}},OnItemLostSelection:{ps:{"TreeItem":{pt:"i"}}},OnItemRealizing:{ps:{"TreeItem":{pt:"i"}}},OnSort:{ps:{"TreeItem":{pt:"i"},"CompareTo":{pt:"i"},"Key":{pt:"i"}}},OnUpdate:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOTRE",Fd);var C0=this.cR("IMAGEPANEL","PRIM_PANL");var C1=this.cR("TITLE","PRIM_LABL");var C2=this.cR("CAPTION","PRIM_LABL");var C3=this.cR("TABLE","PRIM_TBLO");var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("COLUMN2","PRIM_TBLO","Column");
var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("ROW2","PRIM_TBLO","Row");var C8=this.cR("ITEM1","PRIM_TBLO","Item");var C9=this.cR("ITEM2","PRIM_TBLO","Item");var C10=this.cR("ITEM3","PRIM_TBLO","Item");C0.setDisplayPosition(1);C0.setImage(rc1);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(0);C0.setWidth(48);C0.setHeight(52);C0.iC();C1.setCaption("Title");C1.setDisplayPosition(2);C1.setEllipses("WORD");C1.setHeight(20);C1.setLeft(48);C1.setMarginLeft(2);
C1.setParent(this);C1.setTabPosition(2);C1.setTabStop(false);C1.setTop(0);C1.setVerticalAlignment("CENTER");C1.setWidth(253);C1.setThemeDrawStyle("Strong+Heading2");C1.iC();C2.setCaption("Caption");C2.setDisplayPosition(3);C2.setEllipses("WORD");C2.setHeight(32);C2.setLeft(48);C2.setMarginLeft(2);C2.setParent(this);C2.setTabPosition(3);C2.setTabStop(false);C2.setTop(20);C2.setWidth(253);C2.iC();C3.iC();C4.setParent(C3);C4.setUnits("PIXELS");C4.setWidth(48);C4.setDisplayPosition(1);C4.iC();C5.setParent(C3);
C5.setDisplayPosition(2);C5.iC();C6.setHeight(20);C6.setParent(C3);C6.setUnits("PIXELS");C6.setDisplayPosition(1);C6.iC();C7.setParent(C3);C7.setDisplayPosition(2);C7.iC();C8.setColumn(C4);C8.setManage(C0);C8.setParent(C3);C8.setRow(C6);C8.setRowSpan(2);C8.iC();C9.setColumn(C5);C9.setManage(C1);C9.setParent(C3);C9.setRow(C6);C9.iC();C10.setColumn(C5);C10.setManage(C2);C10.setParent(C3);C10.setRow(C7);C10.iC();this.setDisplayPosition(1);this.setHeight(52);this.setLayoutManager(C3);this.setLeft(0);
this.setTabPosition(1);this.setTop(0);this.setWidth(301);this.setThemeDrawStyle("ListItem");this.aLF({"STD_TEXT":f.F1});}});cO.mthONADD=function(p0){var r=l.mR(this,cO,"OnAdd",25);var P0=r.cPD("TREEITEM");P0=p0;r.ln=25;{}r.ln=27;r.e();};cO.mthONDELETE=function(p0){var r=l.mR(this,cO,"OnDelete",29);var P0=r.cPD("TREEITEM");P0=p0;r.ln=29;{}r.ln=31;r.e();};cO.mthONFIND=function(p1,p2){var r=l.mR(this,cO,"OnFind",33);var P0=r.cPb("RESULT");var P1=r.cPD("TREEITEM");var P2=r.cP("KEY","*VARIANT");P1=p1;
P2.set(p2);r.ln=33;{}r.ln=35;return r.rV(P0.get());};cO.mthONITEMCOLLAPSED=function(p0){var r=l.mR(this,cO,"OnItemCollapsed",37);var P0=r.cPD("TREEITEM");P0=p0;r.ln=37;{}r.ln=39;r.e();};cO.mthONITEMEXPANDING=function(p0){var r=l.mR(this,cO,"OnItemExpanding",41);var P0=r.cPD("TREEITEM");P0=p0;r.ln=41;{}r.ln=43;r.e();};cO.mthONITEMGOTFOCUS=function(p0){var r=l.mR(this,cO,"OnItemGotFocus",45);var P0=r.cPD("TREEITEM");P0=p0;r.ln=45;{}r.ln=47;r.e();};cO.mthONITEMGOTPARENT=function(p0){var r=l.mR(this,cO,"OnItemGotParent",49);
var P0=r.cPD("TREEITEM");P0=p0;r.ln=49;{}r.ln=51;r.e();};cO.mthONITEMGOTREFERENCE=function(p0){var r=l.mR(this,cO,"OnItemGotReference",53);var P0=r.cPD("TREEITEM");P0=p0;r.ln=53;{}r.ln=55;r.e();};cO.mthONITEMGOTSELECTION=function(p0){var r=l.mR(this,cO,"OnItemGotSelection",57);var P0=r.cPD("TREEITEM");P0=p0;r.ln=57;{}r.ln=59;r.e();};cO.mthONITEMIMAGECHANGED=function(p0){var r=l.mR(this,cO,"OnItemImageChanged",61);var P0=r.cPD("TREEITEM");P0=p0;r.ln=61;{}r.ln=63;r.e();};cO.mthONITEMLOSTFOCUS=function(p0)
{var r=l.mR(this,cO,"OnItemLostFocus",65);var P0=r.cPD("TREEITEM");P0=p0;r.ln=65;{}r.ln=67;r.e();};cO.mthONITEMLOSTSELECTION=function(p0){var r=l.mR(this,cO,"OnItemLostSelection",69);var P0=r.cPD("TREEITEM");P0=p0;r.ln=69;{}r.ln=71;r.e();};cO.mthONITEMREALIZING=function(p0){var r=l.mR(this,cO,"OnItemRealizing",73);var P0=r.cPD("TREEITEM");P0=p0;r.ln=73;{}r.ln=75;r.e();};cO.mthONSORT=function(p1,p2,p3){var r=l.mR(this,cO,"OnSort",77);var P0=r.cPe("RESULT");var P1=r.cPD("TREEITEM");var P2=r.cPD("COMPARETO");
var P3=r.cP("KEY","*VARIANT");P1=p1;P2=p2;P3.set(p3);r.ln=77;{}r.ln=79;return r.rV(P0.get());};cO.mthONUPDATE=function(p0){var r=l.mR(this,cO,"OnUpdate",81);var P0=r.cPD("TREEITEM");P0=p0;r.ln=81;{}r.ln=83;r.e();};}(window["LANSA"]));