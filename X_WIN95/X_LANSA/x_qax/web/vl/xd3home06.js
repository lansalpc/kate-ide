﻿LANSA.addComponent({id:"XD3HOME06",nm:"XD3HomeCarouselItem",ot:"rp",tp:"Reusable Part",de:"Home Carousel Item",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var Fd={F1:{nm:"XHOMEID",an:"xHomeId",ft:"I",ln:4,dc:0,lb:"Home Identifier",h1:"Home",h2:"Identifier",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Identifier",dv:0,ia:["FE","RB"]},F2:{nm:"XHOMEADDR",an:"xHomeAddress",ft:"N",ln:256,dc:0,
lb:"Home Address",h1:"Home",h2:"Address",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Address",dv:"",ia:["FE","LC"]},F3:{nm:"XHOMECITY",an:"xHomeCity",ft:"N",ln:100,dc:0,lb:"Home City",h1:"Home",h2:"City",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home City",dv:"",ia:["FE","LC"]},F4:{nm:"XHOMEDESC",an:"xHomeDescription",ft:"N",ln:512,dc:0,lb:"Home Descriptio",h1:"Home",h2:"Description",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Description",dv:"",ia:["FE","LC"]},
F5:{nm:"XHOMEIMG",an:"xHomeImage",ft:"BL",ln:0,dc:0,lb:"Home Image",h1:"Home",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",im:["PRIM_CARO.ICarouselDesign"],fd:Fd,pt:{Address:{da:"r"},City:{da:"r"},Description:{da:"r"},HomeImage:{da:"na"}},mt:{OnAdd:{ps:{"CarouselItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XD3HOME06",Fd);var C0=this.cR("STYLEITEM","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");
var C2=this.cR("STYLEITEMMOUSEOVER","PRIM_VS","Style");var C3=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C4=this.cR("STYLEIMAGE","PRIM_VS","Style");var C5=this.cR("STYLENAME","PRIM_VS","Style");var C6=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C7=this.cR("STYLEDESC","PRIM_VS","Style");var C8=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C9=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C10=this.cR("LAYOUTITEM1","PRIM_ATLI");var C11=this.cR("LAYOUTITEM2","PRIM_ATLI");var C12=this.cR("LAYOUTITEM3","PRIM_ATLI");
var C13=this.cR("IMAGE","PRIM_IMAG");var C14=this.cR("LABELADDRESS","PRIM_LABL");var C15=this.cR("LABELCITY","PRIM_LABL");var C16=this.cA("APPLICATION","XD3APP");C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.setBorderBrush(C1);C0.iC();C1.setColor("TRANSPARENT");C1.iC();C2.setBorderBottom(1);C2.setBorderBrush(C3);C2.setBorderLeft(1);C2.setBorderRight(1);C2.setBorderTop(1);C2.iC();C3.setColor("THEME200");C3.iC();C4.setCornerTopLeft(10);C4.setCornerTopRight(10);
C4.iC();C5.setForegroundBrush(C6);C5.setFontSize(120);C5.setFontUnits("PERCENT");C5.iC();C6.setColor("97:97:97");C6.iC();C7.setForegroundBrush(C8);C7.iC();C8.setColor("150:150:150");C8.iC();C9.iC();C10.setAttachment("BOTTOM");C10.setManage(C14);C10.setParent(C9);C10.iC();C11.setAttachment("BOTTOM");C11.setManage(C15);C11.setParent(C9);C11.iC();C12.setAttachment("CENTER");C12.setManage(C13);C12.setParent(C9);C12.setMarginLeft(5);C12.setMarginRight(5);C12.setMarginTop(2);C12.iC();C13.setDisplayPosition(1);
C13.setLeft(5);C13.setParent(this);C13.setTabPosition(1);C13.setTabStop(false);C13.setTop(2);C13.setHeight(167);C13.setWidth(221);C13.setImage(rc1);C13.iC();C14.setCaption("Address");C14.setDisplayPosition(2);C14.setEllipses("WORD");C14.setLeft(0);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(169);C14.setWidth(231);C14.setStyle(C5);C14.setAlignment("CENTER");C14.setHeight(42);C14.setVerticalAlignment("CENTER");C14.iC();C15.setCaption("City");C15.setDisplayPosition(3);
C15.setEllipses("WORD");C15.setHeight(36);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(2);C15.setTabStop(false);C15.setTop(211);C15.setWidth(231);C15.setStyle(C7);C15.setAlignment("CENTER");C15.iC();if((C16!=null)&&(C16.iI()==false)){C16.iC();}C16.aH("MOBILEVIEW",this,e1);C16.aH("TABLETVIEW",this,e1);C16.aH("DESKTOPVIEW",this,e2);this.setHeight(249);this.setWidth(233);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setStyle(C0);this.setMouseOverStyle(C2);
this.setLayoutManager(C9);this.setTabStop(false);this.aLF({"XHOMEID":f.F1,"XHOMEADDR":f.F2,"XHOMECITY":f.F3,"XHOMEDESC":f.F4,"XHOMEIMG":f.F5});}});cO.mthGETHOMEIMAGE=function(){var m=this.REF,r=l.pR(this,cO,"GetHomeImage",39);var P0=r.cPD("PIMAGE");r.ln=39;{r.ln=42;P0=r.sR("P0",m.IMAGE.getImage());}r.ln=44;return r.rR(P0);};cO.mthONADD=function(p0){var f=this.FLD.XD3HOME06,m=this.REF,r=l.mR(this,cO,"OnAdd",46);var P0=r.cPD("CAROUSELITEM");P0=p0;r.ln=46;{r.ln=48;m.LABELADDRESS.setCaption(f.F2.get());
r.ln=49;m.LABELCITY.setCaption(f.F3.get());r.ln=51;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F5.get()));r.ln=53;m.LABELADDRESS.setVisible(l.s.eq(m.APPLICATION.ref.getACTIVEVIEW(),"DESKTOP"));}r.ln=55;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView #Application.TabletView",57);r.ln=57;{r.ln=59;m.LABELADDRESS.setVisible(false);}r.ln=61;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",63);r.ln=63;{r.ln=65;m.LABELADDRESS.setVisible(true);
}r.ln=67;r.e();};cO.getADDRESS=function(){var f=this.FLD.XD3HOME06;return f.F2.get();};cO.getCITY=function(){var f=this.FLD.XD3HOME06;return f.F3.get();};cO.getDESCRIPTION=function(){var f=this.FLD.XD3HOME06;return f.F4.get();};cO.getHOMEIMAGE=function(){return this.mthGETHOMEIMAGE();};},{rc:["XD3APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_ATLM","PRIM_ATLI","PRIM_IMAG","PRIM_LABL"]});