﻿LANSA.addComponent({id:"XD4HEAD",nm:"XD4Header",ot:"rp",tp:"Reusable Part",de:"Header",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xd4img02.png");var rc2=l.cB("xd4img04.png");var rc3=l.cB("xd4img05.png");var Fd={F1:{nm:"XD4ALLOWAPPSELECTION",ft:"B",ln:1,dc:0,lb:"XD4AllowAppSelection",h1:"XD4AllowAppSelection",h2:"",h3:"",de:"XD4AllowAppSelection",dv:true}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{AllowAppSelection:{
da:"na"}},co:function(){cO.aN.call(this);this.aF("XD4HEAD",Fd);var C0=this.cR("STYLEBLUE","PRIM_VS","Style");var C1=this.cR("BRUSHBLUE","PRIM_VS","SolidBrush");var C2=this.cR("STYLERED","PRIM_VS","Style");var C3=this.cR("BRUSHRED","PRIM_VS","SolidBrush");var C4=this.cR("STYLEGREEN","PRIM_VS","Style");var C5=this.cR("BRUSHGREEN","PRIM_VS","SolidBrush");var C6=this.cR("STYLEHAND","PRIM_VS","Style");var C7=this.cR("STYLE1","PRIM_VS","Style");var C8=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C9=this.cR("MAINLAYOUT","PRIM_TBLO");
var C10=this.cR("COLUMN1","PRIM_TBLO","Column");var C11=this.cR("COLUMN2","PRIM_TBLO","Column");var C12=this.cR("ROW1","PRIM_TBLO","Row");var C13=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM_USER","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM_LOGOUT","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM_LOGIN","PRIM_TBLO","Item");var C18=this.cR("POPUPLAYOUT","PRIM_TBLO");var C19=this.cR("POPUPCOLUMN1","PRIM_TBLO","Column");var C20=this.cR("POPUPROW1","PRIM_TBLO","Row");
var C21=this.cR("HOMEITEM","PRIM_TBLO","Item");var C22=this.cR("ABOUTITEM","PRIM_TBLO","Item");var C23=this.cR("CONTACTITEM","PRIM_TBLO","Item");var C24=this.cR("APPSELECTOR","PRIM_IMAG");var C25=this.cR("ACTIVEAPP","PRIM_LABL");var C26=this.cR("POPUP","PRIM_PPNL");var C27=this.cR("HOME","PRIM_LABL");var C28=this.cR("ABOUT","PRIM_LABL");var C29=this.cR("CONTACT","PRIM_LABL");var C30=this.cR("LABEL_USER","PRIM_LABL");var C31=this.cR("LABEL_LOGIN","PRIM_LABL");var C32=this.cR("LABEL_LOGOUT","PRIM_LABL");
var C33=this.cA("APPLICATION","XD4APP");C0.setBackgroundBrush(C1);C0.setCornerBottomLeft(5);C0.setCornerBottomRight(5);C0.setCornerTopLeft(5);C0.setCornerTopRight(5);C0.setTextColor("WHITE");C0.iC();C1.setColor("33:150:243");C1.iC();C2.setBackgroundBrush(C3);C2.setCornerBottomLeft(5);C2.setCornerBottomRight(5);C2.setCornerTopLeft(5);C2.setCornerTopRight(5);C2.setTextColor("WHITE");C2.iC();C3.setColor("244:67:54");C3.iC();C4.setBackgroundBrush(C5);C4.setCornerBottomLeft(5);C4.setCornerBottomRight(5);
C4.setCornerTopLeft(5);C4.setCornerTopRight(5);C4.setTextColor("WHITE");C4.iC();C5.setColor("76:175:80");C5.iC();C6.setCursor("HAND");C6.iC();C7.setBorderBottom(5);C7.setBorderRight(5);C7.setBorderBrush(C8);C7.setBorderLeft(5);C7.setBorderTop(5);C7.iC();C8.setColor("255:255:255");C8.iC();C9.iC();C10.setDisplayPosition(1);C10.setParent(C9);C10.setUnits("CONTENT");C10.setWidth(137);C10.iC();C11.setDisplayPosition(2);C11.setParent(C9);C11.iC();C12.setDisplayPosition(1);C12.setParent(C9);C12.iC();C13.setColumn(C10);
C13.setManage(C24);C13.setParent(C9);C13.setRow(C12);C13.setAlignment("CENTERLEFT");C13.setSizing("FITTOHEIGHT");C13.setFlow("RIGHT");C13.iC();C14.setColumn(C10);C14.setManage(C25);C14.setParent(C9);C14.setRow(C12);C14.setSizing("CONTENTWIDTHFITTOHEIGHT");C14.setAlignment("CENTERLEFT");C14.setFlow("RIGHT");C14.iC();C15.setColumn(C11);C15.setManage(C30);C15.setParent(C9);C15.setRow(C12);C15.setFlow("LEFT");C15.setAlignment("BOTTOMRIGHT");C15.setSizing("CONTENTWIDTHANDHEIGHT");C15.iC();C16.setAlignment("BOTTOMRIGHT");
C16.setColumn(C11);C16.setManage(C32);C16.setParent(C9);C16.setRow(C12);C16.setSizing("CONTENTWIDTHANDHEIGHT");C16.setFlow("LEFT");C16.iC();C17.setAlignment("BOTTOMRIGHT");C17.setColumn(C11);C17.setManage(C31);C17.setParent(C9);C17.setRow(C12);C17.setSizing("CONTENTWIDTHANDHEIGHT");C17.setFlow("LEFT");C17.iC();C18.setSizing("CONTENTWIDTHANDHEIGHT");C18.iC();C19.setDisplayPosition(1);C19.setParent(C18);C19.iC();C20.setDisplayPosition(1);C20.setParent(C18);C20.iC();C21.setManage(C27);C21.setParent(C18);
C21.setRow(C20);C21.setSizing("NONE");C21.setColumn(C19);C21.setAlignment("TOPLEFT");C21.setFlow("RIGHT");C21.setMarginLeft(5);C21.setMarginRight(5);C21.setMarginTop(5);C21.setMarginBottom(5);C21.iC();C22.setManage(C28);C22.setParent(C18);C22.setRow(C20);C22.setSizing("NONE");C22.setColumn(C19);C22.setAlignment("TOPLEFT");C22.setFlow("RIGHT");C22.setMarginLeft(5);C22.setMarginRight(5);C22.setMarginTop(5);C22.setMarginBottom(5);C22.iC();C23.setManage(C29);C23.setParent(C18);C23.setRow(C20);C23.setSizing("NONE");
C23.setColumn(C19);C23.setAlignment("TOPLEFT");C23.setFlow("RIGHT");C23.setMarginLeft(5);C23.setMarginRight(5);C23.setMarginTop(5);C23.setMarginBottom(5);C23.iC();C24.setDisplayPosition(1);C24.setLeft(0);C24.setParent(this);C24.setTabPosition(3);C24.setTabStop(false);C24.setTop(0);C24.setImage(rc1);C24.setMarginLeft(10);C24.setThemeDrawStyle("ToolbarButton");C24.setWidth(60);C24.setMarginRight(10);C24.setStyle(C6);C24.setHeight(60);C24.iC();C25.setCaption("Home");C25.setDisplayPosition(5);C25.setEllipses("WORD");
C25.setLeft(60);C25.setParent(this);C25.setTabPosition(1);C25.setTabStop(false);C25.setTop(0);C25.setVerticalAlignment("CENTER");C25.setMarginLeft(10);C25.setWidth(77);C25.setThemeDrawStyle("Heading1+MediumTitle");C25.setMarginRight(10);C25.setHeight(60);C25.iC();C26.setLeft(16);C26.setTop(96);C26.setHeight(52);C26.setWidth(52);C26.setCloseOnClick(true);C26.setLayoutManager(C18);C26.setStyle(C7);C26.iC();C27.setCaption("Home");C27.setDisplayPosition(1);C27.setParent(C26);C27.setTabPosition(2);C27.setTabStop(false);
C27.setWidth(150);C27.setLeft(5);C27.setVerticalAlignment("CENTER");C27.setHeight(150);C27.setImage(rc1);C27.setImageHeight(50);C27.setImagePosition("ABOVECAPTION");C27.setAlignment("CENTER");C27.setThemeDrawStyle("ToolbarButton");C27.setTop(0);C27.setStyle(C0);C27.iC();C28.setCaption("About");C28.setDisplayPosition(2);C28.setParent(C26);C28.setTabPosition(3);C28.setTabStop(false);C28.setWidth(150);C28.setLeft(165);C28.setVerticalAlignment("CENTER");C28.setHeight(150);C28.setImage(rc1);C28.setImageHeight(50);
C28.setImagePosition("ABOVECAPTION");C28.setAlignment("CENTER");C28.setThemeDrawStyle("ToolbarButton");C28.setStyle(C4);C28.setTop(0);C28.iC();C29.setCaption("Contact");C29.setDisplayPosition(3);C29.setLeft(325);C29.setParent(C26);C29.setTabPosition(1);C29.setTabStop(false);C29.setWidth(150);C29.setVerticalAlignment("CENTER");C29.setHeight(150);C29.setImage(rc1);C29.setImageHeight(50);C29.setImagePosition("ABOVECAPTION");C29.setAlignment("CENTER");C29.setThemeDrawStyle("ToolbarButton");C29.setStyle(C2);
C29.setTop(0);C29.iC();C30.setCaption("User1 logged in.");C30.setDisplayPosition(4);C30.setEllipses("WORD");C30.setLeft(1125);C30.setParent(this);C30.setTabPosition(2);C30.setTabStop(false);C30.setWidth(140);C30.setMarginLeft(10);C30.setHeight(36);C30.setMarginBottom(10);C30.setAlignment("RIGHT");C30.setMarginTop(10);C30.setImage(rc2);C30.setWordWrap(false);C30.setVisible(false);C30.setTop(24);C30.setMarginRight(10);C30.setVerticalAlignment("CENTER");C30.iC();C31.setCaption("Login");C31.setDisplayPosition(2);
C31.setEllipses("WORD");C31.setHeight(36);C31.setLeft(1324);C31.setParent(this);C31.setTabPosition(5);C31.setTabStop(false);C31.setTop(24);C31.setVerticalAlignment("CENTER");C31.setMarginRight(10);C31.setMarginBottom(10);C31.setMarginTop(10);C31.setMarginLeft(5);C31.setMouseOverStyle(C6);C31.setWidth(69);C31.setImage(rc3);C31.iC();C32.setCaption("Log Out");C32.setDisplayPosition(3);C32.setEllipses("WORD");C32.setHeight(35);C32.setLeft(1265);C32.setParent(this);C32.setTabPosition(4);C32.setTabStop(false);
C32.setTop(25);C32.setVerticalAlignment("CENTER");C32.setMarginRight(10);C32.setMarginBottom(10);C32.setMarginTop(10);C32.setMouseOverStyle(C6);C32.setWidth(59);C32.setVisible(false);C32.iC();if((C33!=null)&&(C33.iI()==false)){C33.iC();}C24.aH("CLICK",this,e14);C25.aH("CLICK",this,e15);C27.aH("CLICK",this,e7);C28.aH("CLICK",this,e8);C29.aH("CLICK",this,e9);C31.aH("CLICK",this,e10);C32.aH("CLICK",this,e11);C33.aH("DESKTOPVIEW",this,e1);C33.aH("TABLETVIEW",this,e2);C33.aH("MOBILEVIEW",this,e3);C33.aH("SHOWHOME",this,e4);
C33.aH("SHOWABOUT",this,e5);C33.aH("SHOWCONTACT",this,e6);C33.aH("LOGGEDIN",this,e12);C33.aH("LOGGEDOUT",this,e13);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(1393);this.setLayoutManager(C9);this.setThemeDrawStyle("MediumTitle");this.setHeight(60);}});cO.mthSETALLOWAPPSELECTION=function(p0){var f=this.FLD.XD4HEAD,m=this.REF,r=l.pR(this,cO,"SetAllowAppSelection",53);var P0=r.cP("ALLOW","PRIM_BOLN");P0.set(p0);r.ln=53;{r.ln=56;f.F1.set(P0.get());r.ln=58;
if(f.F1.get()){r.ln=60;m.APPSELECTOR.setStyle(m.STYLEHAND);r.ln=61;m.APPSELECTOR.setThemeDrawStyle("ToolbarButton");}else{r.ln=65;m.APPSELECTOR.setStyle(null);r.ln=66;m.APPSELECTOR.setThemeDrawStyle("");}}r.ln=70;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",72);r.ln=72;{r.ln=74;m.HOMEITEM.setFlow("RIGHT");r.ln=75;m.ABOUTITEM.setFlow("RIGHT");r.ln=76;m.CONTACTITEM.setFlow("RIGHT");r.ln=78;m.LAYOUTITEM_USER.setAlignment("BOTTOMRIGHT");r.ln=79;m.LAYOUTITEM_USER.setSizing("CONTENTWIDTHANDHEIGHT");
}r.ln=81;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",83);r.ln=83;{r.ln=85;m.HOMEITEM.setFlow("DOWN");r.ln=86;m.ABOUTITEM.setFlow("DOWN");r.ln=87;m.CONTACTITEM.setFlow("DOWN");r.ln=89;m.LAYOUTITEM_USER.setAlignment("BOTTOMRIGHT");r.ln=90;m.LAYOUTITEM_USER.setSizing("CONTENTWIDTHANDHEIGHT");}r.ln=92;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",94);r.ln=94;{r.ln=96;m.HOMEITEM.setFlow("DOWN");r.ln=97;m.ABOUTITEM.setFlow("DOWN");
r.ln=98;m.CONTACTITEM.setFlow("DOWN");r.ln=100;m.LAYOUTITEM_USER.setAlignment("TOPCENTER");r.ln=101;m.LAYOUTITEM_USER.setSizing("CONTENTHEIGHTFITTOWIDTH");}r.ln=103;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.ShowHome",105);r.ln=105;{r.ln=108;m.ACTIVEAPP.set("Home");r.ln=109;l.gTh("XD4THEME").setBaseTheme("2015BLUE");}r.ln=111;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.ShowAbout",113);r.ln=113;{r.ln=115;m.ACTIVEAPP.set("About");r.ln=116;
l.gTh("XD4THEME").setBaseTheme("2015GREEN");}r.ln=118;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.ShowContact",120);r.ln=120;{r.ln=122;m.ACTIVEAPP.set("Contact");r.ln=123;l.gTh("XD4THEME").setBaseTheme("2015RED");}r.ln=125;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Home.Click",127);r.ln=127;{r.ln=129;m.APPLICATION.ref.mthSHOW_HOME();}r.ln=131;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#About.Click",133);r.ln=133;{r.ln=135;m.APPLICATION.ref.mthSHOW_ABOUT();
}r.ln=137;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Contact.Click",139);r.ln=139;{r.ln=141;m.APPLICATION.ref.mthSHOW_CONTACT();}r.ln=143;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Label_Login.Click",145);r.ln=145;{r.ln=147;m.APPLICATION.ref.mthSHOWLOGINDIALOG();}r.ln=149;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Label_Logout.Click",151);r.ln=151;{r.ln=153;m.APPLICATION.ref.mthLOGOUT();}r.ln=155;r.e();};function e12(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.LoggedIn",157);
r.ln=157;{r.ln=159;m.LABEL_LOGIN.setVisible(false);r.ln=160;m.LABEL_USER.setVisible(true);m.LABEL_LOGOUT.setVisible(true);r.ln=161;m.LABEL_USER.setCaption(l.cat(m.APPLICATION.ref.getACTIVEUSER()," logged in."));}r.ln=163;r.e();};function e13(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.LoggedOut",165);r.ln=165;{r.ln=167;m.LABEL_LOGIN.setVisible(true);r.ln=168;m.LABEL_USER.setVisible(false);m.LABEL_LOGOUT.setVisible(false);}r.ln=170;r.e();};function e14(sender,Ps){var f=this.FLD.XD4HEAD,m=this.REF,r=l.eR(this,cO,"#AppSelector.Click",172);
r.ln=172;{r.ln=174;if(f.F1.get()){r.ln=176;m.POPUP.mthSHOWPOPUP(m.APPSELECTOR.getLeft(),l.add(m.APPSELECTOR.getScreenTop(),l.div(m.APPSELECTOR.getHeight(),2)),u,u,u);}}r.ln=180;r.e();};function e15(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ActiveApp.Click",182);r.ln=182;{r.ln=184;if(l.s.eq(m.ACTIVEAPP.get(),"Home")){r.ln=186;m.APPLICATION.ref.mthSHOW_HOME();}}r.ln=190;r.e();};cO.setALLOWAPPSELECTION=function(v){this.mthSETALLOWAPPSELECTION(v);};},{rc:["XD4APP","XD4THEME"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_LABL","PRIM_PPNL"]
});