﻿LANSA.addComponent({id:"XD1HOME07",nm:"XD1HomeDesktop",ot:"rp",tp:"Reusable Part",de:"Home Desktop",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xd1img09.png");var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XD1COLWIDTH",ft:"I",ln:4,dc:0,lb:"XD1ColWidth",h1:"XD1ColWidth",h2:"",h3:"",
de:"XD1ColWidth",dv:0},F3:{nm:"XD1ROWHEIGHT",ft:"I",ln:4,dc:0,lb:"XD1RowHeight",h1:"XD1RowHeight",h2:"",h3:"",de:"XD1RowHeight",dv:0},F4:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],
dv:0,ia:["FE","RB"]},F5:{nm:"XD1CURX",ft:"I",ln:4,dc:0,lb:"XD1CurX",h1:"XD1CurX",h2:"",h3:"",de:"XD1CurX",dv:0},F6:{nm:"XD1CURY",ft:"I",ln:4,dc:0,lb:"XD1CurY",h1:"XD1CurY",h2:"",h3:"",de:"XD1CurY",dv:0}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Load:{},ClearEmployees:{},ShowEmployee:{ps:{"ID":{pt:"i"},"Caption":{pt:"i"}}},UpdateTiling:{},LayoutItems:{},Layout6Items:{},Layout4Items:{},Layout2Items:{},Layout1Item:{}},co:function(){cO.aN.call(this);this.aF("XD1HOME07",Fd);var C0=this.cR("STYLEHEADER","PRIM_VS","Style");
var C1=this.cR("STYLELIGHTGRAY","PRIM_VS","Style");var C2=this.cR("STYLELIGHTGRAYBRUSH","PRIM_VS","SolidBrush");var C3=this.cR("STYLESHROUD","PRIM_VS","Style");var C4=this.cR("BRUSHSHROUD","PRIM_VS","SolidBrush");var C5=this.cR("STYLEMEDIUMGRAY","PRIM_VS","Style");var C6=this.cR("STYLEMEDIUMGRAYBRUSH","PRIM_VS","SolidBrush");var C7=this.cR("STYLEHEADERTEXT","PRIM_VS","Style");var C8=this.cR("STYLESEPARATOR","PRIM_VS","Style");var C9=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C10=this.cR("LAYOUDESKTOPCOLUMN1","PRIM_TBLO","Column");
var C11=this.cR("LAYOUDESKTOPROW1","PRIM_TBLO","Row");var C12=this.cR("LAYOUDESKTOPROW2","PRIM_TBLO","Row");var C13=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");var C14=this.cR("HEADERLAYOUT","PRIM_TBLO");var C15=this.cR("HEADERLAYOUTROW1","PRIM_TBLO","Row");var C16=this.cR("HEADERLAYOUTCOLUMN1","PRIM_TBLO","Column");var C17=this.cR("HEADERLAYOUTITEM1","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C20=this.cR("POPUPLAYOUT","PRIM_TBLO");
var C21=this.cR("POPUPLAYOUTROW1","PRIM_TBLO","Row");var C22=this.cR("POPUPLAYOUTCOLUMN1","PRIM_TBLO","Column");var C23=this.cR("POPUPLAYOUTITEM3","PRIM_TBLO","Item");var C24=this.cR("POPUPLAYOUTITEM4","PRIM_TBLO","Item");var C25=this.cR("EMPLOYEELIST","XD1HOME13");var C26=this.cR("EMPLOYEESPOPUP","XD1HOME08");var C27=this.cR("EMPLOYEEEDITORS","PRIM_KCOL");var C28=this.cR("EMPLOYEEPOPUPS","PRIM_KCOL");var C29=this.cR("MAGNIFYEDIT","XD1HOME09");var C30=this.cR("PANELHEADER","PRIM_PANL");var C31=this.cR("MAGNIFYPOPUP","PRIM_PPNL");
var C32=this.cR("CLEAR","PRIM_LABL");var C33=this.cR("LABEL10","PRIM_LABL");var C34=this.cR("SEPARATOR","PRIM_LABL");var C35=this.cA("APPLICATION","XD1APP");C0.setBorderBottom(1);C0.iC();C1.setBackgroundBrush(C2);C1.iC();C2.setColor("222:222:222");C2.iC();C3.setBackgroundBrush(C4);C3.iC();C4.setColor("0:0:0");C4.setOpacity(50);C4.iC();C5.setBackgroundBrush(C6);C5.iC();C6.setColor("196:196:196");C6.iC();C7.setTextColor("133:133:133");C7.iC();C8.setBorderRight(1);C8.iC();C9.iC();C10.setDisplayPosition(1);
C10.setParent(C9);C10.setMinWidth(800);C10.iC();C11.setDisplayPosition(1);C11.setParent(C9);C11.setUnits("PIXELS");C11.setHeight(90);C11.iC();C12.setDisplayPosition(2);C12.setParent(C9);C12.setMinHeight(750);C12.iC();C13.setColumn(C10);C13.setManage(C30);C13.setParent(C9);C13.setRow(C11);C13.setAlignment("TOPCENTER");C13.setColumnSpan(2);C13.iC();C14.iC();C15.setDisplayPosition(1);C15.setParent(C14);C15.iC();C16.setDisplayPosition(1);C16.setParent(C14);C16.iC();C17.setAlignment("BOTTOMLEFT");C17.setColumn(C16);
C17.setManage(C33);C17.setParent(C14);C17.setRow(C15);C17.setSizing("NONE");C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C16);C18.setManage(C32);C18.setParent(C14);C18.setRow(C15);C18.setSizing("NONE");C18.setMarginLeft(3);C18.setMarginTop(3);C18.setFlow("RIGHT");C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C16);C19.setManage(C34);C19.setParent(C14);C19.setRow(C15);C19.setSizing("NONE");C19.setFlow("RIGHT");C19.setMarginTop(10);C19.iC();C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);
C21.iC();C22.setDisplayPosition(1);C22.setParent(C20);C22.iC();C23.setColumn(C22);C23.setManage(C29);C23.setParent(C20);C23.setRow(C21);C23.setMarginTop(35);C23.iC();C24.setColumn(C22);C24.setManage(C25);C24.setParent(C20);C24.setRow(C21);C24.iC();C25.setHeight(450);C25.setTop(30);C25.setWidth(748);C25.setParent(C26);C25.iC();C26.setLeft(248);C26.setParent(this);C26.setTop(224);C26.setHeight(500);C26.setWidth(750);C26.setVerticalScroll(true);C26.setDisplayPosition(2);C26.setTabPosition(2);C26.setTouchMove("PARENT");
C26.setTouchSize("PARENT");C26.iC();C27.setCollects("XD1HOME09");C27.setKeyedBy(Fd.F1.Dc);C27.iC();C28.setCollects("XD1HOME08");C28.setKeyedBy(Fd.F1.Dc);C28.iC();C29.setParent(C31);C29.setHeight(433);C29.setWidth(748);C29.setTop(65);C29.iC();C30.setDisplayPosition(1);C30.setHeight(90);C30.setLeft(0);C30.setParent(this);C30.setTabPosition(1);C30.setTabStop(false);C30.setTop(0);C30.setWidth(1521);C30.setStyle(C0);C30.setLayoutManager(C14);C30.iC();C31.setCloseButton(true);C31.setLeft(773);C31.setParent(this);
C31.setTop(111);C31.setLayoutManager(C20);C31.setHeight(500);C31.setWidth(750);C31.setShroudStyle(C3);C31.setVerticalScroll(true);C31.setTitleBar(true);C31.iC();C32.setCaption("Close Employees");C32.setDisplayPosition(1);C32.setEllipses("WORD");C32.setHeight(69);C32.setLeft(3);C32.setParent(C30);C32.setTabPosition(2);C32.setTabStop(false);C32.setVerticalAlignment("CENTER");C32.setWidth(70);C32.setAlignment("CENTER");C32.setThemeDrawStyle("ToolbarButton");C32.setImage(rc1);C32.setImageHeight(24);C32.setImagePosition("ABOVECAPTION");
C32.setTop(3);C32.iC();C33.setCaption("Sheets");C33.setDisplayPosition(3);C33.setEllipses("WORD");C33.setHeight(20);C33.setLeft(0);C33.setParent(C30);C33.setTabPosition(3);C33.setTabStop(false);C33.setTop(69);C33.setVerticalAlignment("CENTER");C33.setWidth(73);C33.setAlignment("CENTER");C33.setStyle(C7);C33.iC();C34.setDisplayPosition(2);C34.setEllipses("WORD");C34.setHeight(58);C34.setLeft(73);C34.setParent(C30);C34.setTabPosition(1);C34.setTabStop(false);C34.setVerticalAlignment("CENTER");C34.setWidth(5);
C34.setAlignment("CENTER");C34.setThemeDrawStyle("ToolbarButton");C34.setImageHeight(32);C34.setImagePosition("ABOVECAPTION");C34.setStyle(C8);C34.iC();if((C35!=null)&&(C35.iI()==false)){C35.iC();}C25.aH("EMPLOYEESELECTED",this,e7);C28.aH("CLOSE",this,e8);C28.aH("MAGNIFY",this,e9);C32.aH("CLICK",this,e6);C35.aH("DESKTOPVIEW",this,e3);C35.aH("MOBILEVIEW",this,e4);C35.aH("TABLETVIEW",this,e5);this.setHeight(1041);this.setWidth(1521);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setLayoutManager(C9);this.aH("CREATEINSTANCE",this,e1);this.aH("SIZECHANGED",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",64);r.ln=64;{r.ln=66;m.EMPLOYEESPOPUP.setCONTENT(m.EMPLOYEELIST);r.ln=67;m.EMPLOYEESPOPUP.setTITLEBAR(false);}r.ln=69;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.SizeChanged",71);r.ln=71;{r.ln=73;this.mthUPDATETILING();}r.ln=75;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",77);
r.ln=77;{r.ln=79;this.setLayoutManager(m.LAYOUTDESKTOP);}r.ln=81;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",83);r.ln=83;{r.ln=85;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=87;this.mthUPDATETILING();}r.ln=89;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",91);r.ln=91;{r.ln=93;this.setLayoutManager(m.LAYOUTDESKTOP);}r.ln=95;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Clear.Click",97);r.ln=97;{r.ln=99;this.mthCLEAREMPLOYEES();
}r.ln=101;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#EmployeeList.EmployeeSelected",103);var P0=Ps.r("EMPLOYEEID");var P1=Ps.r("CAPTION");r.ln=103;{r.ln=105;cO.mthSHOWEMPLOYEE.call(this,P0.get(),P1.get());}r.ln=107;r.e();};function e8(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeePopups<>.Close",109);r.ln=109;{r.ln=111;m.EMPLOYEEEDITORS.mthREMOVE(l.cast(SENDER,"XD1HOME08").getID());r.ln=112;m.EMPLOYEEPOPUPS.mthREMOVE(l.cast(SENDER,"XD1HOME08").getID());r.ln=114;this.mthUPDATETILING();
}r.ln=116;r.e();};function e9(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeePopups<>.Magnify",118);r.ln=118;{r.ln=120;if(m.MAGNIFYPOPUP.getIsOpen()){r.ln=122;m.MAGNIFYPOPUP.mthCLOSEPOPUP();}else{r.ln=126;m.MAGNIFYEDIT.setFROZEN(true);r.ln=128;m.MAGNIFYEDIT.setFROZEN(true);r.ln=129;m.MAGNIFYEDIT.mthLOADEMPLOYEE(l.cast(SENDER,"XD1HOME08").getID());r.ln=131;m.MAGNIFYPOPUP.setHeight(l.sub(this.getHeight(),160));r.ln=132;m.MAGNIFYPOPUP.setCaption(l.cast(SENDER,"XD1HOME08").getCAPTION());r.ln=133;
m.MAGNIFYPOPUP.mthSHOWPOPUP(u,u,"CENTER",u,u);}}r.ln=137;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",139);r.ln=139;{r.ln=141;m.EMPLOYEELIST.mthLOADEMPLOYEES();}r.ln=143;r.e();};cO.mthCLEAREMPLOYEES=function(){var m=this.REF,r=l.mR(this,cO,"ClearEmployees",145);r.ln=145;{r.ln=147;m.EMPLOYEEPOPUPS.mthREMOVEALL();r.ln=148;m.EMPLOYEEEDITORS.mthREMOVEALL();r.ln=150;this.mthUPDATETILING();}r.ln=152;r.e();};cO.mthSHOWEMPLOYEE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"ShowEmployee",154);
var P0=r.cPF("ID",Fd.F1.Dc);var P1=r.cP("CAPTION","PRIM_ALPH");P0.set(p0);P1.set(p1);r.ln=154;{r.ln=158;m.EMPLOYEEPOPUPS.set(P0.get(),l.cC("XD1HOME08"));r.ln=159;m.EMPLOYEEEDITORS.set(P0.get(),l.cC("XD1HOME09"));r.ln=161;m.EMPLOYEEEDITORS.get(P0.get()).setFROZEN(true);r.ln=162;m.EMPLOYEEEDITORS.get(P0.get()).mthLOADEMPLOYEE(P0.get());r.ln=164;m.EMPLOYEEPOPUPS.get(P0.get()).setCAPTION(P1.get());r.ln=165;m.EMPLOYEEPOPUPS.get(P0.get()).setCONTENT(m.EMPLOYEEEDITORS.get(P0.get()));r.ln=166;m.EMPLOYEEPOPUPS.get(P0.get()).setID(P0.get());
r.ln=167;m.EMPLOYEEPOPUPS.get(P0.get()).setParent(this);r.ln=168;m.EMPLOYEEPOPUPS.get(P0.get()).setVisible(true);r.ln=170;this.mthUPDATETILING();}r.ln=172;r.e();};cO.mthUPDATETILING=function(){var m=this.REF,r=l.mR(this,cO,"UpdateTiling",174);var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cD("C3");r.ln=174;{r.ln=181;if(m.EMPLOYEESPOPUP.getVisible()){r.ln=183;m.EMPLOYEESPOPUP.setLeft(10);r.ln=184;m.EMPLOYEESPOPUP.setTop(100);r.ln=185;m.EMPLOYEESPOPUP.setWidth(l.sub(l.div(this.getWidth(),3),50));
r.ln=186;m.EMPLOYEESPOPUP.setHeight(l.sub(this.getHeight(),120));r.ln=188;if(l.n.lt(m.EMPLOYEESPOPUP.getWidth(),500)){r.ln=190;m.EMPLOYEESPOPUP.setWidth(500);}}else{r.ln=196;m.EMPLOYEESPOPUP.setLeft(10);r.ln=197;m.EMPLOYEESPOPUP.setTop(100);r.ln=198;m.EMPLOYEESPOPUP.setWidth(0);r.ln=199;m.EMPLOYEESPOPUP.setHeight(0);}r.ln=203;if(l.n.ge(m.EMPLOYEEPOPUPS.getItemCount(),7)){r.ln=205;this.mthLAYOUTITEMS();}else{r.ln=209;if(l.n.ge(m.EMPLOYEEPOPUPS.getItemCount(),5)){r.ln=211;this.mthLAYOUT6ITEMS();}else
{r.ln=216;if(l.n.ge(m.EMPLOYEEPOPUPS.getItemCount(),3)){r.ln=218;this.mthLAYOUT4ITEMS();}else{r.ln=222;if(l.n.ge(m.EMPLOYEEPOPUPS.getItemCount(),2)){r.ln=224;this.mthLAYOUT2ITEMS();}else{r.ln=228;this.mthLAYOUT1ITEM();}}}}}r.ln=238;r.e();};cO.mthLAYOUTITEMS=function(){var f=this.FLD.XD1HOME07,m=this.REF,r=l.mR(this,cO,"LayoutItems",240);r.ln=240;{r.ln=242;f.F2.set(l.div(l.sub(l.sub(this.getWidth(),30),l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10)),3));r.ln=243;f.F3.set(l.div(l.sub(this.getHeight(),140),3));
r.ln=245;f.F4.set(0);r.ln=247;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=248;f.F6.set(m.EMPLOYEESPOPUP.getTop());r.ln=250;{var i1=m.EMPLOYEEPOPUPS.cI();while(i1.step()){var POPUP=r.sR("POPUP",i1.item());r.ln=252;if((POPUP!=null)){r.ln=254;f.F4.set(l.add(f.F4.get(),1));r.ln=256;POPUP.setLeft(f.F5.get());r.ln=257;POPUP.setTop(f.F6.get());r.ln=258;POPUP.setWidth(f.F2.get());r.ln=259;POPUP.setHeight(f.F3.get());r.ln=261;f.F5.set(l.add(f.F5.get(),l.add(f.F2.get(),10)));
r.ln=263;if(l.n.eq(f.F4.get(),3)){r.ln=265;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=266;f.F6.set(l.add(f.F6.get(),l.add(f.F3.get(),10)));r.ln=268;f.F4.set(0);}}r.ln=274;}i1.end();r.dR("POPUP");}}r.ln=276;r.e();};cO.mthLAYOUT6ITEMS=function(){var f=this.FLD.XD1HOME07,m=this.REF,r=l.mR(this,cO,"Layout6Items",278);r.ln=278;{r.ln=280;f.F2.set(l.div(l.sub(l.sub(this.getWidth(),20),l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10)),2));
r.ln=281;f.F3.set(l.div(l.sub(this.getHeight(),140),3));r.ln=283;f.F4.set(0);r.ln=285;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=286;f.F6.set(m.EMPLOYEESPOPUP.getTop());r.ln=288;{var i1=m.EMPLOYEEPOPUPS.cI();while(i1.step()){var POPUP=r.sR("POPUP",i1.item());r.ln=290;if((POPUP!=null)){r.ln=292;f.F4.set(l.add(f.F4.get(),1));r.ln=294;POPUP.setLeft(f.F5.get());r.ln=295;POPUP.setTop(f.F6.get());r.ln=296;POPUP.setWidth(f.F2.get());r.ln=297;POPUP.setHeight(f.F3.get());
r.ln=299;f.F5.set(l.add(f.F5.get(),l.add(f.F2.get(),10)));r.ln=301;if(l.n.eq(f.F4.get(),2)){r.ln=303;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=304;f.F6.set(l.add(f.F6.get(),l.add(f.F3.get(),10)));r.ln=306;f.F4.set(0);}}r.ln=312;}i1.end();r.dR("POPUP");}}r.ln=314;r.e();};cO.mthLAYOUT4ITEMS=function(){var f=this.FLD.XD1HOME07,m=this.REF,r=l.mR(this,cO,"Layout4Items",316);r.ln=316;{r.ln=318;f.F2.set(l.div(l.sub(l.sub(this.getWidth(),20),l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10)),2));
r.ln=319;f.F3.set(l.div(l.sub(this.getHeight(),130),2));r.ln=321;f.F4.set(0);r.ln=323;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=324;f.F6.set(m.EMPLOYEESPOPUP.getTop());r.ln=326;{var i1=m.EMPLOYEEPOPUPS.cI();while(i1.step()){var POPUP=r.sR("POPUP",i1.item());r.ln=328;if((POPUP!=null)){r.ln=330;f.F4.set(l.add(f.F4.get(),1));r.ln=332;POPUP.setLeft(f.F5.get());r.ln=333;POPUP.setTop(f.F6.get());r.ln=334;POPUP.setWidth(f.F2.get());r.ln=335;POPUP.setHeight(f.F3.get());
r.ln=337;f.F5.set(l.add(f.F5.get(),l.add(f.F2.get(),10)));r.ln=339;if(l.n.eq(f.F4.get(),2)){r.ln=341;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=342;f.F6.set(l.add(f.F6.get(),l.add(f.F3.get(),10)));r.ln=344;f.F4.set(0);}}r.ln=350;}i1.end();r.dR("POPUP");}}r.ln=352;r.e();};cO.mthLAYOUT2ITEMS=function(){var f=this.FLD.XD1HOME07,m=this.REF,r=l.mR(this,cO,"Layout2Items",354);r.ln=354;{r.ln=356;f.F2.set(l.div(l.sub(l.sub(this.getWidth(),20),l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10)),2));
r.ln=357;f.F3.set(l.sub(this.getHeight(),120));r.ln=359;f.F4.set(0);r.ln=361;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));r.ln=362;f.F6.set(m.EMPLOYEESPOPUP.getTop());r.ln=364;{var i1=m.EMPLOYEEPOPUPS.cI();while(i1.step()){var POPUP=r.sR("POPUP",i1.item());r.ln=366;if((POPUP!=null)){r.ln=368;f.F4.set(l.add(f.F4.get(),1));r.ln=370;POPUP.setLeft(f.F5.get());r.ln=371;POPUP.setTop(f.F6.get());r.ln=372;POPUP.setWidth(f.F2.get());r.ln=373;POPUP.setHeight(f.F3.get());
r.ln=375;f.F5.set(l.add(f.F5.get(),l.add(f.F2.get(),10)));}r.ln=379;}i1.end();r.dR("POPUP");}}r.ln=381;r.e();};cO.mthLAYOUT1ITEM=function(){var f=this.FLD.XD1HOME07,m=this.REF,r=l.mR(this,cO,"Layout1Item",383);r.ln=383;{r.ln=385;f.F2.set(l.div(l.sub(l.sub(this.getWidth(),10),l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10)),1));r.ln=386;f.F3.set(l.sub(this.getHeight(),120));r.ln=388;f.F4.set(0);r.ln=390;f.F5.set(l.add(l.add(m.EMPLOYEESPOPUP.getLeft(),m.EMPLOYEESPOPUP.getWidth()),10));
r.ln=391;f.F6.set(m.EMPLOYEESPOPUP.getTop());r.ln=393;{var i1=m.EMPLOYEEPOPUPS.cI();while(i1.step()){var POPUP=r.sR("POPUP",i1.item());r.ln=395;if((POPUP!=null)){r.ln=397;f.F4.set(l.add(f.F4.get(),1));r.ln=399;POPUP.setLeft(f.F5.get());r.ln=400;POPUP.setTop(f.F6.get());r.ln=401;POPUP.setWidth(f.F2.get());r.ln=402;POPUP.setHeight(f.F3.get());r.ln=404;f.F5.set(l.add(f.F5.get(),l.add(f.F2.get(),10)));}r.ln=408;}i1.end();r.dR("POPUP");}}r.ln=410;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};
l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}},{rc:["XD1HOME13","XD1HOME08","XD1HOME09","XD1APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_KCOL","PRIM_PPNL","PRIM_LABL","PRIM_FLD"],dp:["PRIM_PANL"]});