﻿LANSA.addComponent({id:"XDTOO_15",nm:"xDToolsSearchCategories",ot:"rp",tp:"Reusable Part",de:"Categories",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSPRDLNDS",an:"XSProductLineDescription",ft:"C",ln:100,dc:0,lb:{"ENG":"Last Name","FRA":"Desc lig prod","JPN":"製品ライン","LLL":"Last Name"}[cL],h1:{"ENG":"Last","FRA":"Description","JPN":"製品ライン","LLL":"Last"}[cL],h2:{"ENG":"Name","FRA":"Ligne","JPN":"説明","LLL":"Name"}[cL],
h3:{"ENG":" ","FRA":"Produit","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Line Description","FRA":"Description ligne produit","JPN":"製品ライン説明","LLL":"Product Line Description"}[cL],dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"XDTOOLSP",fd:Fd,mt:{AddProductLines:{},AddProductLine:{ps:{"ProductLine":{pt:"i"}}},AddEntry:{ps:{"Object":{pt:"i"},"Caption":{pt:"i"},"ParentItem":{pt:"i"}}},Search:{ps:{"Object":{pt:"i"}}},Update:{ps:{"Object":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDTOO_15",Fd);
var C0=this.cA("GSEARCHHANDLER","XDTOO_16");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("TABLELAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LISTITEM1","PRIM_TBLO","Item");var C6=this.cR("LIST","PRIM_LIST");var C7=this.cR("COLUMNXSPRDLNDS1","PRIM_LIST","String");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setBorderBottom(0);C1.setBorderLeft(0);C1.setBorderRight(0);C1.setBorderTop(0);C1.iC();C2.setSizing("CONTENTHEIGHT");
C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C3);C5.setManage(C6);C5.setParent(C2);C5.setRow(C4);C5.setAlignment("TOPCENTER");C5.setSizing("CONTENTHEIGHTFITTOWIDTH");C5.iC();C6.setDisplayPosition(1);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTop(0);C6.setWidth(500);C6.setHeight(75);C6.setColumnLines(false);C6.setRowLines(false);C6.setColumnHeaderHeight(0);C6.setStyle(C1);C6.setRowHeight(22);C6.iC();C7.setDisplayPosition(1);
C7.setParent(C6);C7.setSource(f.F1);C7.setColumnUnits("PROPORTION");C7.setSortPosition(1);C7.iC();C0.aH("SEARCHEDBYPRODUCTCATEGORY",this,e2);C0.aH("SEARCHEDBYPRODUCTLINE",this,e3);C0.aH("SEARCHEDBYVALUE",this,e4);C6.aH("ITEMCLICK",this,e5);this.REF.GDATAMODEL.ref.aH("PREPARED",this,e1);this.setLayoutManager(C2);this.setHeight(75);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gDataModel.Prepared",15);r.ln=15;{r.ln=17;this.mthADDPRODUCTLINES();}r.ln=19;r.e();};cO.mthADDPRODUCTLINES=function(){var r=l.mR(this,cO,"AddProductLines",21);
r.ln=21;{r.ln=23;{var l1=this.REF.GDATAMODEL.ref.getPRODUCTLINES().cI();while(l1.step()){var PRODUCTLINE=r.sR("PRODUCTLINE",l1.item());r.ln=25;cO.mthADDPRODUCTLINE.call(this,PRODUCTLINE);r.ln=27;}l1.end();r.dR("PRODUCTLINE");}}r.ln=29;r.e();};cO.mthADDPRODUCTLINE=function(p0){var r=l.mR(this,cO,"AddProductLine",31);var P0=r.cPD("PRODUCTLINE");var P1=r.cPD("RESULT");P0=p0;r.ln=31;{r.ln=35;P1=r.sR("P1",cO.mthADDENTRY.call(this,P0,P0.getDESCRIPTION()));r.ln=37;{var l1=P0.getCATEGORIES().cI();while(l1.step())
{var PRODUCTCATEGORY=r.sR("PRODUCTCATEGORY",l1.item());r.ln=39;cO.mthADDENTRY.call(this,PRODUCTCATEGORY,PRODUCTCATEGORY.getDESCRIPTION(),P1);r.ln=41;}l1.end();r.dR("PRODUCTCATEGORY");}}r.ln=43;return r.rR(P1);};cO.mthADDENTRY=function(p0,p1,p2){var f=this.FLD.XDTOO_15,m=this.REF,r=l.mR(this,cO,"AddEntry",45);var P0=r.cPD("OBJECT");var P1=r.cPF("CAPTION",Fd.F1.Dc);var P2=r.cPD("PARENTITEM");var P3=r.cPD("RESULT");P0=p0;P1.set(p1);P2=(p2===u)?(null):(p2);r.ln=45;{r.ln=51;f.F1.set(P1.get());r.ln=52;
m.LIST.addEntry();r.ln=54;m.LIST.getCurrentItem().setRelatedReference(P0);r.ln=55;m.LIST.getCurrentItem().setParentItem(P2);r.ln=57;P3=r.sR("P3",m.LIST.getCurrentItem());}r.ln=59;return r.rR(P3);};cO.mthSEARCH=function(p0){var m=this.REF,r=l.mR(this,cO,"Search",61);var P0=r.cPD("OBJECT");P0=p0;r.ln=61;{r.ln=64;if(l.Io(P0,"XDTOOL_8")){r.ln=66;l.WEB().getHistory().mthADD(l.s.Substitute("Page=&1",l.s.RemoveAll(l.cast(P0,"XDTOOL_8").getDESCRIPTION()," ")));r.ln=68;m.GSEARCHHANDLER.ref.mthSEARCHBYPRODUCTLINE(l.cast(P0,"XDTOOL_8"));
}r.ln=72;if(l.Io(P0,"XDTOOL_7")){r.ln=74;m.GSEARCHHANDLER.ref.mthSEARCHBYPRODUCTCATEGORY(l.cast(P0,"XDTOOL_7"));}}r.ln=78;r.e();};cO.mthUPDATE=function(p0){var m=this.REF,r=l.mR(this,cO,"Update",80);var P0=r.cPD("OBJECT");P0=p0;r.ln=80;{r.ln=83;this.setVisible(l.s.ne(this.REF.GAPPLICATION.ref.getACTIVEDESIGN(),"MOBILE"));r.ln=85;for(var l1=m.LIST.getItems().cI();l1.step();){l1.item().mthCOLLAPSE()};r.ln=87;m.LIST.mthFINDREFERENCE(P0).setFocus(true);r.ln=88;m.LIST.mthFINDREFERENCE(P0).mthEXPAND();
}r.ln=90;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#gSearchHandler.SearchedByProductCategory",92);var P0=Ps.r("PRODUCTCATEGORY");r.ln=92;{r.ln=94;cO.mthUPDATE.call(this,P0);}r.ln=96;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#gSearchHandler.SearchedByProductLine",98);var P0=Ps.r("PRODUCTLINE");r.ln=98;{r.ln=100;cO.mthUPDATE.call(this,P0);}r.ln=102;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#gSearchHandler.SearchedByValue",104);r.ln=104;{r.ln=106;this.setVisible(false);}r.ln=108;
r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#List.ItemClick",110);r.ln=110;{r.ln=112;cO.mthSEARCH.call(this,m.LIST.getCurrentItem().getRelatedReference());}r.ln=114;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSPRDLNDS"});}},{rc:["XDTOOLSP","XDTOO_16"],rp:["PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_FLD"]});