﻿LANSA.addComponent({id:"XD2HOME10",nm:"XD2HomeGalleryItem",ot:"rp",tp:"Reusable Part",de:"Home Gallery Item",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var Fd={F1:{nm:"XDESTID",ft:"I",ln:4,dc:0,lb:"Identification",h1:"Identification",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Identification",dv:0,ia:["FE","RB"]},F2:{nm:"XDESTNAME",
ft:"N",ln:50,dc:0,lb:"Name",h1:"Name",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Name",dv:"",ia:["FE","LC"]},F3:{nm:"XDESTDESC",ft:"N",ln:256,dc:0,lb:"Description",h1:"Description",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Description",dv:"",ia:["FE","LC"]},F4:{nm:"XDESTIMG",ft:"BL",ln:0,dc:0,lb:"Image",h1:"Destination",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Destination Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{DestinationImage:{da:"na"}},co:function(){cO.aN.call(this);var f=this.aF("XD2HOME10",Fd);var C0=this.cR("STYLEPANEL","PRIM_VS","Style");var C1=this.cR("STYLEPANELMOUSE","PRIM_VS","Style");var C2=this.cR("STYLENAME","PRIM_VS","Style");var C3=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C4=this.cR("STYLEDESC","PRIM_VS","Style");var C5=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C6=this.cR("LAYOUT1","PRIM_TBLO");
var C7=this.cR("COLUMN1","PRIM_TBLO","Column");var C8=this.cR("ROW1","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C12=this.cR("IMAGECONTROL","PRIM_IMAG");var C13=this.cR("LABELTITLE","PRIM_LABL");var C14=this.cR("LABELDESCRIPTION","PRIM_LABL");C0.setNormBackColor("245:245:245");C0.setCornerBottomLeft(10);C0.setCornerBottomRight(10);C0.setCornerTopLeft(10);C0.setCornerTopRight(10);
C0.setBorderBottom(1);C0.setBorderLeft(1);C0.setBorderRight(1);C0.setBorderTop(1);C0.setBorderColor("TRANSPARENT");C0.setCursor("HAND");C0.iC();C1.setBorderColor("THEME200");C1.iC();C2.setForegroundBrush(C3);C2.setFontSize(120);C2.setFontUnits("PERCENT");C2.iC();C3.setColor("97:97:97");C3.iC();C4.setForegroundBrush(C5);C4.iC();C5.setColor("150:150:150");C5.iC();C6.setSizing("CONTENTHEIGHT");C6.setMarginBottom(20);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.iC();C8.setDisplayPosition(1);C8.setParent(C6);
C8.iC();C9.setColumn(C7);C9.setFlow("DOWN");C9.setManage(C12);C9.setParent(C6);C9.setRow(C8);C9.setSizing("CONTENTHEIGHTFITTOWIDTH");C9.setAlignment("TOPCENTER");C9.iC();C10.setColumn(C7);C10.setFlow("DOWN");C10.setManage(C13);C10.setParent(C6);C10.setRow(C8);C10.setSizing("CONTENTHEIGHTFITTOWIDTH");C10.setAlignment("TOPCENTER");C10.setMarginTop(10);C10.setMarginLeft(5);C10.setMarginRight(5);C10.setMarginBottom(5);C10.iC();C11.setColumn(C7);C11.setFlow("DOWN");C11.setManage(C14);C11.setParent(C6);
C11.setRow(C8);C11.setSizing("CONTENTHEIGHTFITTOWIDTH");C11.setAlignment("TOPCENTER");C11.setMarginLeft(5);C11.setMarginRight(5);C11.setMarginTop(5);C11.iC();C12.setDisplayPosition(1);C12.setLeft(0);C12.setParent(this);C12.setTabPosition(1);C12.setTabStop(false);C12.setTop(0);C12.setHeight(311);C12.setWidth(311);C12.setImageSizing("BESTFIT");C12.setImage(rc1);C12.iC();C13.setCaption("Title");C13.setDisplayPosition(2);C13.setEllipses("WORD");C13.setHeight(16);C13.setLeft(5);C13.setParent(this);C13.setTabPosition(2);
C13.setTabStop(false);C13.setTop(321);C13.setVerticalAlignment("CENTER");C13.setWidth(301);C13.setStyle(C2);C13.iC();C14.setCaption("Lorem ipsum dolor. Sit amet curabitur placerat amet lectus habitant amet purus convallis accumsan suspendisse rutrum accumsan adipiscing. Sit fugiat condimentum. Pulvinar pretium non. Dignissim taciti placerat. Mollis quam ullamcorper molestie urna at felis aenean amet. Conubia commodo porttitor quam nulla tellus. At pede ad. Vivamus cras voluptates nisl turpis.");C14.setDisplayPosition(3);
C14.setEllipses("WORD");C14.setHeight(126);C14.setLeft(5);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(347);C14.setVerticalAlignment("CENTER");C14.setWidth(301);C14.setStyle(C4);C14.iC();this.setDisplayPosition(1);this.setHeight(495);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(313);this.setStyle(C0);this.setMouseOverStyle(C1);this.setLayoutManager(C6);this.aH("INITIALIZE",this,e1);this.aLF({"XDESTID":f.F1,"XDESTNAME":f.F2,"XDESTDESC":f.F3,"XDESTIMG":f.F4});
}});cO.mthGETDESTINATIONIMAGE=function(){var m=this.REF,r=l.pR(this,cO,"GetDestinationImage",31);var P0=r.cPD("IMAGE");r.ln=31;{r.ln=34;P0=r.sR("P0",m.IMAGECONTROL.getImage());}r.ln=36;return r.rR(P0);};function e1(sender,Ps){var f=this.FLD.XD2HOME10,m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",38);r.ln=38;{r.ln=40;m.LABELTITLE.set(f.F2.get());r.ln=41;m.LABELDESCRIPTION.set(f.F3.get());r.ln=42;m.IMAGECONTROL.setImage(l.APPL().mthCREATEBITMAP(f.F4.get()));}r.ln=44;r.e();};cO.getDESTINATIONIMAGE=function()
{return this.mthGETDESTINATIONIMAGE();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_LABL"]});