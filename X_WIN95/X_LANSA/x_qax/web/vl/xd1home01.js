﻿LANSA.addComponent({id:"XD1HOME01",nm:"XD1HomeGallery",ot:"rp",tp:"Reusable Part",de:"Home Gallery",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xd1img09.png");var Fd={F1:{nm:"XDESTID",an:"xDestinationId",ft:"I",ln:4,dc:0,lb:"Identification",h1:"Identification",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Identification",dv:0,ia:["FE","RB"]},F2:{nm:"XDESTNAME",
an:"xDestinationName",ft:"N",ln:50,dc:0,lb:"Name",h1:"Name",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Name",dv:"",ia:["FE","LC"]},F3:{nm:"XDESTDESC",an:"xDestinationDescription",ft:"N",ln:256,dc:0,lb:"Description",h1:"Description",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Description",dv:"",ia:["FE","LC"]},F4:{nm:"XDESTIMG",an:"xDestinationImage",ft:"BL",ln:0,
dc:0,lb:"Image",h1:"Destination",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Destination Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Load:{},AssignColumns:{}},co:function(){cO.aN.call(this);var f=this.aF("XD1HOME01",Fd);var C0=this.cR("STYLESHROUD","PRIM_VS","Style");var C1=this.cR("BRUSHSHROUD","PRIM_VS","SolidBrush");var C2=this.cR("STYLEPOPUP","PRIM_VS","Style");var C3=this.cR("BRUSHPOPUP","PRIM_VS","SolidBrush");var C4=this.cR("PAGELAYOUT","PRIM_TBLO");
var C5=this.cR("COLUMN1","PRIM_TBLO","Column");var C6=this.cR("COLUMN2","PRIM_TBLO","Column");var C7=this.cR("COLUMN3","PRIM_TBLO","Column");var C8=this.cR("COLUMN4","PRIM_TBLO","Column");var C9=this.cR("COLUMN5","PRIM_TBLO","Column");var C10=this.cR("COLUMN6","PRIM_TBLO","Column");var C11=this.cR("COLUMN7","PRIM_TBLO","Column");var C12=this.cR("ROW1","PRIM_TBLO","Row");var C13=this.cR("POPUPLAYOUT","PRIM_TBLO");var C14=this.cR("POPUPLAYOUTROW1","PRIM_TBLO","Row");var C15=this.cR("POPUPLAYOUTCOLUMN1","PRIM_TBLO","Column");
var C16=this.cR("POPUPLAYOUTITEM2","PRIM_TBLO","Item");var C17=this.cR("POPUPLAYOUTITEM3","PRIM_TBLO","Item");var C18=this.cR("POPUP","PRIM_PPNL");var C19=this.cR("POPUPCLOSEIMAGE","PRIM_IMAG");var C20=this.cR("POPUPIMAGE","PRIM_IMAG");var C21=this.cA("APPLICATION","XD1APP");var C22=this.cR("DISPLAYCOLUMNS","PRIM_LCOL");var C23=this.cR("MAXCOLUMNSFORDESIGN","PRIM_NMBR");var C24=this.cR("GALLERYITEMS","PRIM_LCOL");var C25=this.cR("LAYOUTITEMS","PRIM_DCOL");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("0:0:0");
C1.setOpacity(80);C1.iC();C2.setBackgroundBrush(C3);C2.setEffect(null);C2.iC();C3.setColor("WHITE");C3.iC();C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.iC();C8.setDisplayPosition(4);C8.setParent(C4);C8.iC();C9.setDisplayPosition(5);C9.setParent(C4);C9.iC();C10.setDisplayPosition(6);C10.setParent(C4);C10.iC();C11.setDisplayPosition(7);C11.setParent(C4);C11.iC();C12.setDisplayPosition(1);C12.setParent(C4);
C12.iC();C13.iC();C14.setDisplayPosition(1);C14.setParent(C13);C14.iC();C15.setDisplayPosition(1);C15.setParent(C13);C15.iC();C16.setAlignment("TOPRIGHT");C16.setColumn(C15);C16.setManage(C19);C16.setParent(C13);C16.setRow(C14);C16.setSizing("NONE");C16.setMarginRight(5);C16.setMarginTop(5);C16.iC();C17.setColumn(C15);C17.setManage(C20);C17.setParent(C13);C17.setRow(C14);C17.setMarginBottom(30);C17.setMarginLeft(30);C17.setMarginRight(30);C17.setMarginTop(30);C17.iC();C18.setCloseButton(true);C18.setLeft(69);
C18.setParent(this);C18.setTop(100);C18.setHeight(450);C18.setWidth(700);C18.setLayoutManager(C13);C18.setShroudStyle(C0);C18.setStyle(C2);C18.iC();C19.setDisplayPosition(1);C19.setHeight(25);C19.setImage(rc1);C19.setLeft(665);C19.setParent(C18);C19.setTabPosition(1);C19.setTabStop(false);C19.setTop(5);C19.setWidth(28);C19.setThemeDrawStyle("ToolbarButton");C19.iC();C20.setDisplayPosition(2);C20.setLeft(30);C20.setParent(C18);C20.setTabPosition(2);C20.setTabStop(false);C20.setTop(30);C20.setHeight(388);
C20.setWidth(638);C20.setImageSizing("CROPPED");C20.iC();if((C21!=null)&&(C21.iI()==false)){C21.iC();}C22.setCollects("PRIM_TBLO.Column");C22.iC();C23.setValue(5);C23.iC();C24.setCollects("XD1HOME10");C24.iC();C25.setCollects("PRIM_TBLO.Item");C25.setKeyedBy("XD1HOME10");C25.iC();C19.aH("CLICK",this,e6);C21.aH("DESKTOPVIEW",this,e2);C21.aH("TABLETVIEW",this,e3);C21.aH("MOBILEVIEW",this,e4);C24.aH("CLICK",this,e5);C24.aLF({"XDESTID":f.F1,"XDESTNAME":f.F2,"XDESTDESC":f.F3,"XDESTIMG":f.F4});this.setDisplayPosition(1);
this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setHeight(1000);this.setWidth(1600);this.setLayoutManager(C4);this.setVerticalScroll(true);this.setHorizontalScroll(true);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",49);r.ln=49;{r.ln=51;m.DISPLAYCOLUMNS.mthINSERT(m.COLUMN2);r.ln=52;m.DISPLAYCOLUMNS.mthINSERT(m.COLUMN3);r.ln=53;m.DISPLAYCOLUMNS.mthINSERT(m.COLUMN4);r.ln=54;m.DISPLAYCOLUMNS.mthINSERT(m.COLUMN5);r.ln=55;
m.DISPLAYCOLUMNS.mthINSERT(m.COLUMN6);}r.ln=57;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",59);r.ln=59;{r.ln=61;m.POPUP.setWidth(700);r.ln=62;m.POPUP.setHeight(450);r.ln=64;m.MAXCOLUMNSFORDESIGN.set(5);r.ln=66;this.mthASSIGNCOLUMNS();}r.ln=68;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",70);r.ln=70;{r.ln=72;m.POPUP.setWidth(500);r.ln=73;m.POPUP.setHeight(450);r.ln=75;m.MAXCOLUMNSFORDESIGN.set(3);r.ln=77;this.mthASSIGNCOLUMNS();
}r.ln=79;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",81);r.ln=81;{r.ln=83;m.POPUP.setWidth(250);r.ln=84;m.POPUP.setHeight(250);r.ln=86;m.MAXCOLUMNSFORDESIGN.set(1);r.ln=88;this.mthASSIGNCOLUMNS();}r.ln=90;r.e();};function e5(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#GalleryItems<>.Click",92);r.ln=92;{r.ln=94;m.POPUPIMAGE.setImage(SENDER.getDESTINATIONIMAGE());r.ln=96;m.POPUP.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=98;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PopupCloseImage.Click",100);
r.ln=100;{r.ln=102;m.POPUP.mthCLOSEPOPUP();}r.ln=104;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",106);var C0=r.cDR("LOADDESTINATIONS","XD1SERV","LOADDESTINATIONS");C0.iC();C0.aH("COMPLETED",this,e7);r.ln=106;{r.ln=110;if(l.n.eq(m.GALLERYITEMS.getItemCount(),0)){r.ln=112;C0.mthEXECUTEASYNC({},{LIST:{"XDESTINATIONLIST":m.GALLERYITEMS}});r.ln=114;this.setImage(l.WEB().getLoadingImage());}}r.ln=126;r.e();function e7(sender,Ps){var r=l.eR(this,cO,"#LoadDestinations.Completed",118);
r.ln=118;{r.ln=120;this.mthASSIGNCOLUMNS();r.ln=122;this.setImage(null);}r.ln=124;r.e();}};cO.mthASSIGNCOLUMNS=function(){var m=this.REF,r=l.mR(this,cO,"AssignColumns",128);var C0=r.cR("COLUMNINDEX","PRIM_NMBR");C0.setValue(1);C0.iC();r.ln=128;{r.ln=132;for(var i1=1,s1=1,t1=l.tI(m.DISPLAYCOLUMNS.getItemCount());C0.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=134;if(l.tB(l.n.le(C0.get(),m.MAXCOLUMNSFORDESIGN.get()))){r.ln=136;m.DISPLAYCOLUMNS.get(C0.get()).setWidth(10);}else{r.ln=140;
m.DISPLAYCOLUMNS.get(C0.get()).setWidth(0);}}r.ln=146;C0.set(1);r.ln=148;{var l1=m.GALLERYITEMS.cI();while(l1.step()){var GALLERYITEM=r.sR("GALLERYITEM",l1.item());var ITEMINDEX=r.sR("ITEMINDEX",l1.key());r.ln=150;if((m.LAYOUTITEMS.get(GALLERYITEM)==null)){r.ln=153;m.LAYOUTITEMS.set(GALLERYITEM,l.cC("PRIM_TBLO","Item"));r.ln=155;m.LAYOUTITEMS.get(GALLERYITEM).setManage(GALLERYITEM);m.LAYOUTITEMS.get(GALLERYITEM).setMarginTop(5);m.LAYOUTITEMS.get(GALLERYITEM).setMarginBottom(5);m.LAYOUTITEMS.get(GALLERYITEM).setMarginLeft(5);
m.LAYOUTITEMS.get(GALLERYITEM).setMarginRight(5);m.LAYOUTITEMS.get(GALLERYITEM).setAlignment("TOPCENTER");m.LAYOUTITEMS.get(GALLERYITEM).setFlow("DOWN");m.LAYOUTITEMS.get(GALLERYITEM).setSizing("CONTENTHEIGHTFITTOWIDTH");m.LAYOUTITEMS.get(GALLERYITEM).setRow(m.ROW1);m.LAYOUTITEMS.get(GALLERYITEM).setParent(m.PAGELAYOUT);}r.ln=160;m.LAYOUTITEMS.get(GALLERYITEM).setColumn(m.DISPLAYCOLUMNS.get(C0.get()));r.ln=162;if((GALLERYITEM.getParent()==null)){r.ln=165;GALLERYITEM.setParent(this);GALLERYITEM.setDisplayPosition(ITEMINDEX.get());
}r.ln=170;C0.set(l.add(C0.get(),1));r.ln=172;if(l.tB(l.n.gt(C0.get(),m.MAXCOLUMNSFORDESIGN.get()))){r.ln=174;C0.set(1);}r.ln=178;}l1.end();r.dR("GALLERYITEM");r.dR("ITEMINDEX");}}r.ln=180;r.e();};},{rc:["XD1APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PPNL","PRIM_IMAG","PRIM_LCOL","PRIM_NMBR","PRIM_DCOL","PRIM_WEB.DataRequest"],dp:["PRIM_NMBR"]});