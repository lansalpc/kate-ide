﻿LANSA.addComponent({id:"XDONAV",nm:"xDONavigationDrawer",ot:"rp",tp:"Reusable Part",de:"Navigation Drawer",tl:14010003},function(l,oI,u){var rc1=l.cB("xdoimg03.png");var rc2=l.cB("xdoimg16.png");var rc3=l.cB("xdoimg12.png");var rc4=l.cB("xdoimg04.png");var rc5=l.cB("xdoimg11.png");var cO=l.rC(oI,{an:"PRIM_PPNL",mt:{Open:{},Close:{}},co:function(){cO.aN.call(this);var C0=this.cA("GAPPLICATION","XDOAPP");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C3=this.cR("TABLELAYOUT1","PRIM_TBLO");
var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C12=this.cR("TABLELAYOUT2","PRIM_TBLO");var C13=this.cR("COLUMN2","PRIM_TBLO","Column");var C14=this.cR("ROW2","PRIM_TBLO","Row");
var C15=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C17=this.cR("NAVHEADER","PRIM_PANL");var C18=this.cR("REFRESHDATA","PRIM_LABL");var C19=this.cR("LABEL3","PRIM_LABL");var C20=this.cR("LABEL4","PRIM_LABL");var C21=this.cR("LABEL5","PRIM_LABL");var C22=this.cR("CLOSE","PRIM_LABL");var C23=this.cR("SEARCHDATA","PRIM_LABL");var C24=this.cR("IMAGE1","PRIM_IMAG");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setBackgroundBrush(C2);C1.iC();C2.setColor("0:0:0");
C2.setOpacity(50);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(1);C5.setParent(C3);C5.iC();C6.setColumn(C4);C6.setManage(C17);C6.setParent(C3);C6.setRow(C5);C6.setSizing("FITTOWIDTH");C6.setAlignment("TOPLEFT");C6.setFlow("DOWN");C6.iC();C7.setColumn(C4);C7.setManage(C18);C7.setParent(C3);C7.setRow(C5);C7.setSizing("FITTOWIDTH");C7.setAlignment("TOPLEFT");C7.setFlow("DOWN");C7.setMarginLeft(5);C7.setMarginRight(5);C7.iC();C8.setColumn(C4);C8.setManage(C19);
C8.setParent(C3);C8.setRow(C5);C8.setSizing("FITTOWIDTH");C8.setAlignment("TOPLEFT");C8.setFlow("DOWN");C8.setMarginLeft(5);C8.setMarginRight(5);C8.iC();C9.setColumn(C4);C9.setManage(C20);C9.setParent(C3);C9.setRow(C5);C9.setSizing("FITTOWIDTH");C9.setAlignment("TOPLEFT");C9.setFlow("DOWN");C9.setMarginLeft(5);C9.setMarginRight(5);C9.iC();C10.setColumn(C4);C10.setManage(C22);C10.setParent(C3);C10.setRow(C5);C10.setSizing("NONE");C10.setAlignment("TOPRIGHT");C10.setMarginTop(10);C10.setMarginRight(5);
C10.iC();C11.setColumn(C4);C11.setManage(C23);C11.setParent(C3);C11.setRow(C5);C11.setSizing("FITTOWIDTH");C11.setAlignment("TOPLEFT");C11.setFlow("DOWN");C11.setMarginLeft(5);C11.setMarginRight(5);C11.iC();C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.iC();C14.setDisplayPosition(1);C14.setParent(C12);C14.iC();C15.setAlignment("BOTTOMLEFT");C15.setColumn(C13);C15.setFlow("DOWN");C15.setManage(C21);C15.setParent(C12);C15.setRow(C14);C15.setMarginBottom(10);C15.setMarginLeft(5);C15.iC();
C16.setColumn(C13);C16.setManage(C24);C16.setParent(C12);C16.setRow(C14);C16.setSizing("NONE");C16.setAlignment("TOPLEFT");C16.iC();C17.setDisplayPosition(2);C17.setHeight(125);C17.setLeft(0);C17.setParent(this);C17.setTabPosition(1);C17.setTabStop(false);C17.setTop(0);C17.setWidth(271);C17.setThemeDrawStyle("MediumTitle");C17.setLayoutManager(C12);C17.iC();C18.setDisplayPosition(4);C18.setEllipses("WORD");C18.setHeight(60);C18.setLeft(5);C18.setParent(this);C18.setTabPosition(2);C18.setTabStop(false);
C18.setTop(185);C18.setVerticalAlignment("CENTER");C18.setWidth(261);C18.setThemeDrawStyle("navMenuItem");C18.setMarginBottom(20);C18.setMarginTop(20);C18.setImage(rc1);C18.setMarginLeft(-20);C18.setCaption("Refresh Data");C18.iC();C19.setCaption("Settings");C19.setDisplayPosition(5);C19.setEllipses("WORD");C19.setHeight(60);C19.setLeft(5);C19.setParent(this);C19.setTabPosition(3);C19.setTabStop(false);C19.setTop(245);C19.setVerticalAlignment("CENTER");C19.setWidth(261);C19.setThemeDrawStyle("navMenuItem");
C19.setImage(rc2);C19.setMarginTop(20);C19.setMarginBottom(20);C19.setMarginLeft(-20);C19.iC();C20.setCaption("Help & Feedback");C20.setDisplayPosition(6);C20.setEllipses("WORD");C20.setHeight(60);C20.setLeft(5);C20.setParent(this);C20.setTabPosition(4);C20.setTabStop(false);C20.setTop(305);C20.setVerticalAlignment("CENTER");C20.setWidth(261);C20.setThemeDrawStyle("navMenuItem");C20.setMarginBottom(20);C20.setMarginTop(20);C20.setImage(rc3);C20.setMarginLeft(-20);C20.iC();C21.setDisplayPosition(2);
C21.setEllipses("WORD");C21.setHeight(115);C21.setLeft(5);C21.setParent(C17);C21.setTabPosition(1);C21.setTabStop(false);C21.setTop(0);C21.setVerticalAlignment("BOTTOM");C21.setWidth(266);C21.setThemeDrawStyle("Heading1");C21.setCaption("LANSA Employee Demo");C21.iC();C22.setCaption("X");C22.setDisplayPosition(1);C22.setEllipses("WORD");C22.setHeight(20);C22.setLeft(246);C22.setParent(this);C22.setTabPosition(5);C22.setTabStop(false);C22.setVerticalAlignment("CENTER");C22.setWidth(20);C22.setThemeDrawStyle("Heading1");
C22.iC();C23.setCaption("Search");C23.setDisplayPosition(3);C23.setEllipses("WORD");C23.setHeight(60);C23.setLeft(5);C23.setParent(this);C23.setTabPosition(6);C23.setTabStop(false);C23.setTop(125);C23.setVerticalAlignment("CENTER");C23.setWidth(261);C23.setMarginBottom(20);C23.setMarginLeft(-20);C23.setMarginTop(20);C23.setThemeDrawStyle("navMenuItem");C23.setImage(rc4);C23.iC();C24.setDisplayPosition(1);C24.setHeight(80);C24.setImage(rc5);C24.setLeft(0);C24.setParent(C17);C24.setTabPosition(2);C24.setTabStop(false);
C24.setTop(0);C24.setWidth(80);C24.iC();C0.aH("MENUCLICKED",this,e1);C18.aH("CLICK",this,e3);C23.aH("CLICK",this,e4);this.setLeft(0);this.setHeight(505);this.setTop(0);this.setWidth(273);this.setLayoutManager(C3);this.setVerticalScroll(true);this.setShroudStyle(C1);this.setThemeDrawStyle("defaultBackGround");this.aH("CLICK",this,e2);}});function e1(sender,Ps){var r=l.eR(this,cO,"#gApplication.MenuClicked",39);r.ln=39;{r.ln=41;if(l.n.lt(l.APPL().getScreenWidth(),450)){r.ln=43;this.setWidth(l.sub(l.APPL().getScreenWidth(),100));
}else{r.ln=47;this.setWidth(400);}r.ln=51;this.setHeight(l.APPL().getScreenHeight());r.ln=53;this.mthSHOWPOPUP(0,0,"ABSOLUTE","SLIDEINLEFT",u);}r.ln=55;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.Click",57);r.ln=57;{r.ln=59;this.mthCLOSEPOPUP();}r.ln=61;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RefreshData.Click",63);r.ln=63;{r.ln=65;m.GAPPLICATION.ref.mthREFRESHDATA();}r.ln=67;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SearchData.Click",70);
r.ln=70;{r.ln=72;m.GAPPLICATION.ref.mthSHOWSEARCH();}r.ln=74;r.e();};cO.mthOPEN=function(){var r=l.mR(this,cO,"Open",80);r.ln=80;{r.ln=82;if(l.n.lt(l.APPL().getScreenWidth(),450)){r.ln=84;this.setWidth(l.sub(l.APPL().getScreenWidth(),100));}else{r.ln=88;this.setWidth(400);}r.ln=92;this.setHeight(l.APPL().getScreenHeight());r.ln=94;this.mthSHOWPOPUP(0,0,"ABSOLUTE","SLIDEINLEFT",u);}r.ln=96;r.e();};cO.mthCLOSE=function(){var r=l.mR(this,cO,"Close",98);r.ln=98;{r.ln=100;this.mthCLOSEPOPUP();}r.ln=102;
r.e();};},{rc:["XDOAPP"],rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PANL","PRIM_LABL","PRIM_IMAG"]});