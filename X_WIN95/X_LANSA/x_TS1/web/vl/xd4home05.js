﻿LANSA.addComponent({id:"XD4HOME05",nm:"XD4HomeCarousel",ot:"rp",tp:"Reusable Part",de:"Home Carousel",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var Fd={F1:{nm:"XHOMEID",an:"xHomeId",ft:"I",ln:4,dc:0,lb:"Home Identifier",h1:"Home",h2:"Identifier",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Identifier",dv:0,ia:["FE","RB"]},F2:{nm:"XHOMEADDR",an:"xHomeAddress",ft:"N",ln:256,dc:0,lb:"Home Address",
h1:"Home",h2:"Address",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Address",dv:"",ia:["FE","LC"]},F3:{nm:"XHOMECITY",an:"xHomeCity",ft:"N",ln:100,dc:0,lb:"Home City",h1:"Home",h2:"City",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home City",dv:"",ia:["FE","LC"]},F4:{nm:"XHOMEDESC",an:"xHomeDescription",ft:"N",ln:512,dc:0,lb:"Home Descriptio",h1:"Home",h2:"Description",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Description",dv:"",ia:["FE","LC"]},F5:{nm:"XHOMEIMG",
an:"xHomeImage",ft:"BL",ln:0,dc:0,lb:"Home Image",h1:"Home",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Load:{},ShowDetails:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XD4HOME05",Fd);var C0=this.cR("STYLEPANEL","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("STYLEIMAGE","PRIM_VS","Style");var C3=this.cR("STYLENAME","PRIM_VS","Style");
var C4=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C5=this.cR("STYLEDESC","PRIM_VS","Style");var C6=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C7=this.cR("LAYOUT","PRIM_TBLO");var C8=this.cR("COLUMN1","PRIM_TBLO","Column");var C9=this.cR("COLUMN2","PRIM_TBLO","Column");var C10=this.cR("COLUMN3","PRIM_TBLO","Column");var C11=this.cR("ROWDETAIL","PRIM_TBLO","Row");var C12=this.cR("ROWCAROUSEL","PRIM_TBLO","Row");var C13=this.cR("ROWSPACER","PRIM_TBLO","Row");var C14=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C15=this.cR("LAYOUTITEMDETAILS","PRIM_TBLO","Item");var C16=this.cR("LAYOUTDETAILSPANEL","PRIM_TBLO");var C17=this.cR("LAYOUTFOCUSPANELCOLUMN1","PRIM_TBLO","Column");var C18=this.cR("DETAILSROW1","PRIM_TBLO","Row");var C19=this.cR("DETAILSROW2","PRIM_TBLO","Row");var C20=this.cR("DETAILSROW3","PRIM_TBLO","Row");var C21=this.cR("DETAILSLAYOUTITEM1","PRIM_TBLO","Item");var C22=this.cR("DETAILSLAYOUTITEM2","PRIM_TBLO","Item");var C23=this.cR("DETAILSLAYOUTITEM3","PRIM_TBLO","Item");var C24=this.cR("CAROUSEL","PRIM_CARO");
var C25=this.cR("DETAILSPANEL","PRIM_PANL");var C26=this.cR("IMAGE","PRIM_IMAG");var C27=this.cR("TITLECAPTION","PRIM_LABL");var C28=this.cR("DESCRIPTIONCAPTION","PRIM_LABL");var C29=this.cA("APPLICATION","XD4APP");C0.setBackgroundBrush(C1);C0.setCornerBottomLeft(10);C0.setCornerBottomRight(10);C0.setCornerTopLeft(10);C0.setCornerTopRight(10);C0.iC();C1.setColor("245:245:245");C1.iC();C2.setCornerTopLeft(10);C2.setCornerTopRight(10);C2.iC();C3.setForegroundBrush(C4);C3.setFontSize(120);C3.setFontUnits("PERCENT");
C3.iC();C4.setColor("97:97:97");C4.iC();C5.setForegroundBrush(C6);C5.iC();C6.setColor("150:150:150");C6.iC();C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.iC();C9.setDisplayPosition(2);C9.setParent(C7);C9.setWidth(400);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.iC();C11.setDisplayPosition(1);C11.setParent(C7);C11.setHeight(12);C11.iC();C12.setDisplayPosition(2);C12.setParent(C7);C12.setHeight(180);C12.setUnits("PIXELS");C12.iC();C13.setDisplayPosition(3);
C13.setParent(C7);C13.iC();C14.setColumn(C8);C14.setManage(C24);C14.setParent(C7);C14.setRow(C12);C14.setFlow("DOWN");C14.setMarginLeft(5);C14.setMarginRight(5);C14.setColumnSpan(3);C14.setMarginBottom(10);C14.setMarginTop(10);C14.iC();C15.setColumn(C9);C15.setManage(C25);C15.setParent(C7);C15.setRow(C11);C15.setSizing("CONTENTHEIGHTFITTOWIDTH");C15.iC();C16.iC();C17.setDisplayPosition(1);C17.setParent(C16);C17.setMinWidth(80);C17.iC();C18.setDisplayPosition(1);C18.setParent(C16);C18.setHeight(57);
C18.setUnits("CONTENT");C18.iC();C19.setDisplayPosition(2);C19.setParent(C16);C19.iC();C20.setDisplayPosition(3);C20.setParent(C16);C20.setHeight(10);C20.setUnits("CONTENT");C20.iC();C21.setAlignment("TOPCENTER");C21.setColumn(C17);C21.setManage(C27);C21.setParent(C16);C21.setRow(C18);C21.setSizing("CONTENTHEIGHTFITTOWIDTH");C21.setColumnSpan(2);C21.setFlow("DOWN");C21.iC();C22.setColumn(C17);C22.setManage(C26);C22.setParent(C16);C22.setRow(C19);C22.setFlow("DOWN");C22.setAlignment("TOPCENTER");C22.setSizing("CONTENTHEIGHTFITTOWIDTH");
C22.iC();C23.setAlignment("TOPCENTER");C23.setColumn(C17);C23.setManage(C28);C23.setParent(C16);C23.setRow(C19);C23.setFlow("DOWN");C23.setSizing("CONTENTHEIGHTFITTOWIDTH");C23.setMarginBottom(5);C23.setMarginTop(10);C23.setColumnSpan(2);C23.iC();C24.setCarouselStyle("PAGE");C24.setDisplayPosition(2);C24.setLeft(5);C24.setParent(this);C24.setTabPosition(1);C24.setWidth(1263);C24.setPageSize(5);C24.setPageScroll(5);C24.setHeight(160);C24.setTop(767);C24.iC();C25.setDisplayPosition(1);C25.setLeft(437);
C25.setParent(this);C25.setTabPosition(2);C25.setTabStop(false);C25.setHeight(597);C25.setWidth(400);C25.setStyle(C0);C25.setLayoutManager(C16);C25.setTop(80);C25.iC();C26.setDisplayPosition(2);C26.setParent(C25);C26.setTabPosition(1);C26.setTabStop(false);C26.setHeight(400);C26.setWidth(400);C26.setTop(57);C26.setImage(rc1);C26.setLeft(0);C26.setImageSizing("BESTFIT");C26.iC();C27.setCaption("Title Caption");C27.setDisplayPosition(1);C27.setEllipses("WORD");C27.setParent(C25);C27.setTabPosition(3);
C27.setTabStop(false);C27.setVerticalAlignment("CENTER");C27.setWidth(400);C27.setAlignment("CENTER");C27.setThemeDrawStyle("Title");C27.setTop(0);C27.setLeft(0);C27.setMarginBottom(10);C27.setMarginLeft(10);C27.setMarginRight(10);C27.setMarginTop(10);C27.setHeight(57);C27.iC();C28.setCaption("Lorem ipsum dolor. Sit amet curabitur placerat amet lectus habitant amet purus convallis accumsan suspendisse rutrum accumsan adipiscing. Sit fugiat condimentum. Pulvinar pretium non. Dignissim taciti placerat. Mollis quam ullamcorper molestie urna at felis aenean amet. Conubia commodo porttitor quam nulla tellus. At pede ad. Vivamus cras voluptates nisl turpis.");
C28.setDisplayPosition(3);C28.setEllipses("WORD");C28.setParent(C25);C28.setTabPosition(2);C28.setTabStop(false);C28.setTop(467);C28.setStyle(C3);C28.setHeight(130);C28.setMarginBottom(10);C28.setLeft(0);C28.setWidth(400);C28.iC();if((C29!=null)&&(C29.iI()==false)){C29.iC();}C24.aH("ITEMGOTFOCUS",this,e6);C25.aH("SIZECHANGED",this,e2);C29.aH("DESKTOPVIEW",this,e3);C29.aH("TABLETVIEW",this,e4);C29.aH("MOBILEVIEW",this,e5);C24.aDS("XD4HOME06");C24.aLF({"XHOMEID":f.F1,"XHOMEADDR":f.F2,"XHOMECITY":f.F3,"XHOMEDESC":f.F4,"XHOMEIMG":f.F5});
this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setHeight(1000);this.setWidth(1273);this.setVerticalScroll(true);this.setLayoutManager(C7);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",45);r.ln=45;{r.ln=47;m.DETAILSPANEL.setVisible(false);}r.ln=49;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DetailsPanel.SizeChanged",51);r.ln=51;{r.ln=53;m.ROWDETAIL.setMinHeight(l.add(m.DETAILSPANEL.getHeight(),20));
}r.ln=55;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",57);r.ln=57;{r.ln=59;m.CAROUSEL.setPageSize(6);m.CAROUSEL.setPageScroll(6);r.ln=61;m.COLUMN1.setWidth(1);m.COLUMN3.setWidth(1);r.ln=62;m.COLUMN2.setUnits("PIXELS");r.ln=63;m.COLUMN2.setWidth(600);r.ln=65;m.ROWCAROUSEL.setHeight(200);r.ln=67;m.LAYOUTITEMDETAILS.setAlignment("CENTER");r.ln=68;m.LAYOUTDETAILSPANEL.setMarginLeft(40);m.LAYOUTDETAILSPANEL.setMarginRight(40);r.ln=70;m.ROWDETAIL.setDisplayPosition(1);
r.ln=71;m.ROWCAROUSEL.setDisplayPosition(2);}r.ln=73;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",75);r.ln=75;{r.ln=77;m.CAROUSEL.setPageSize(4);m.CAROUSEL.setPageScroll(4);r.ln=79;m.COLUMN1.setWidth(1);m.COLUMN3.setWidth(1);r.ln=80;m.COLUMN2.setUnits("PIXELS");r.ln=81;m.COLUMN2.setWidth(560);r.ln=83;m.ROWCAROUSEL.setHeight(160);r.ln=85;m.LAYOUTITEMDETAILS.setAlignment("CENTER");r.ln=86;m.LAYOUTDETAILSPANEL.setMarginLeft(30);m.LAYOUTDETAILSPANEL.setMarginRight(30);
r.ln=88;m.ROWDETAIL.setDisplayPosition(1);r.ln=89;m.ROWCAROUSEL.setDisplayPosition(2);}r.ln=91;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",93);r.ln=93;{r.ln=95;m.CAROUSEL.setPageSize(4);m.CAROUSEL.setPageScroll(4);r.ln=97;m.COLUMN1.setWidth(0);m.COLUMN3.setWidth(0);r.ln=98;m.COLUMN2.setUnits("PROPORTION");r.ln=99;m.COLUMN2.setWidth(1);r.ln=101;m.ROWCAROUSEL.setHeight(120);r.ln=103;m.LAYOUTITEMDETAILS.setAlignment("TOPCENTER");r.ln=104;m.LAYOUTDETAILSPANEL.setMarginLeft(5);
m.LAYOUTDETAILSPANEL.setMarginRight(5);r.ln=106;m.ROWCAROUSEL.setDisplayPosition(1);r.ln=107;m.ROWDETAIL.setDisplayPosition(2);}r.ln=109;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Carousel.ItemGotFocus",111);r.ln=111;{r.ln=113;cO.mthSHOWDETAILS.call(this,l.cast(m.CAROUSEL.getFocusItem().getDesign(),"XD4HOME06"));}r.ln=115;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",117);var C0=r.cDR("LOADHOMESFORSALE","XD4SERV","LOADHOMESFORSALE");C0.iC();C0.aH("COMPLETED",this,e7);
r.ln=117;{r.ln=121;if(l.n.eq(m.CAROUSEL.getItems().getItemCount(),0)){r.ln=123;C0.mthEXECUTEASYNC({},{LIST:{"XHOMESLIST":m.CAROUSEL}});r.ln=125;this.setImage(l.WEB().getLoadingImage());}}r.ln=135;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#LoadHomesForSale.Completed",129);r.ln=129;{r.ln=131;this.setImage(null);}r.ln=133;r.e();}};cO.mthSHOWDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowDetails",137);var P0=r.cPD("CAROUSELITEM");P0=p0;r.ln=137;{r.ln=140;m.TITLECAPTION.set(l.add(l.cat(P0.getADDRESS(),", "),P0.getCITY()));
r.ln=141;m.DESCRIPTIONCAPTION.set(P0.getDESCRIPTION());r.ln=143;m.IMAGE.setImage(P0.getHOMEIMAGE());r.ln=145;m.DETAILSPANEL.setVisible(true);}r.ln=147;r.e();};},{rc:["XD4APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_CARO","PRIM_IMAG","PRIM_LABL","PRIM_WEB.DataRequest"],dc:["XD4HOME06"]});