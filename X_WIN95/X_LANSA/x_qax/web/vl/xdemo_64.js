﻿LANSA.addComponent({id:"XDEMO_64",nm:"xDemoWebDatePickerYearView",ot:"rp",tp:"Reusable Part",de:"Date Picker Year View",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximageup1.png");var rc2=l.cB("ximaged_4.png");var Fd={F1:{nm:"XDEMONUMB",an:"xDemoNumber",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Number","FRA":"Nombre","JPN":"??","LLL":"Number"}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],h2:"",h3:"",
de:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,rm:["dt"],mt:{Update:{},CollectDateLabels:{}},co:function(){cO.aN.call(this);this.aF("XDEMO_64",Fd);var C0=this.cA("GCONTROLLER","XDEMO_60");var C1=this.cR("UTILITIES","XDEMO_17");var C2=this.cR("LAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("COLUMN4","PRIM_TBLO","Column");
var C7=this.cR("ROW1","PRIM_TBLO","Row");var C8=this.cR("ROW3","PRIM_TBLO","Row");var C9=this.cR("ROW4","PRIM_TBLO","Row");var C10=this.cR("ROW5","PRIM_TBLO","Row");var C11=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");
var C18=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM19","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM20","PRIM_TBLO","Item");var C27=this.cR("IMAGE1","PRIM_IMAG");var C28=this.cR("LDECADE","PRIM_LABL");
var C29=this.cR("LYEAR1","PRIM_LABL");var C30=this.cR("LYEAR2","PRIM_LABL");var C31=this.cR("LYEAR3","PRIM_LABL");var C32=this.cR("LYEAR4","PRIM_LABL");var C33=this.cR("LYEAR5","PRIM_LABL");var C34=this.cR("LYEAR6","PRIM_LABL");var C35=this.cR("LYEAR7","PRIM_LABL");var C36=this.cR("LYEAR8","PRIM_LABL");var C37=this.cR("LYEAR9","PRIM_LABL");var C38=this.cR("LYEAR10","PRIM_LABL");var C39=this.cR("LYEAR11","PRIM_LABL");var C40=this.cR("LYEAR12","PRIM_LABL");var C41=this.cR("PREVIOUSDECADE","PRIM_SPBN");
var C42=this.cR("NEXTDECADE","PRIM_SPBN");var C43=this.cR("UPARROW","PRIM_STPG");var C44=this.cR("DOWNARROW","PRIM_STPG");var C45=this.cR("GLABELS","PRIM_ACOL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.iC();C6.setDisplayPosition(4);C6.setParent(C2);C6.iC();C7.setDisplayPosition(1);C7.setParent(C2);C7.setHeight(40);C7.setUnits("PIXELS");C7.iC();
C8.setDisplayPosition(2);C8.setParent(C2);C8.iC();C9.setDisplayPosition(3);C9.setParent(C2);C9.iC();C10.setDisplayPosition(4);C10.setParent(C2);C10.iC();C11.setColumn(C3);C11.setManage(C27);C11.setParent(C2);C11.setRow(C7);C11.setMarginBottom(2);C11.setMarginLeft(2);C11.setMarginRight(2);C11.setMarginTop(2);C11.setColumnSpan(4);C11.iC();C12.setColumn(C3);C12.setManage(C28);C12.setParent(C2);C12.setRow(C7);C12.setMarginBottom(2);C12.setMarginLeft(2);C12.setMarginTop(2);C12.setSizing("CONTENTWIDTHFITTOHEIGHT");
C12.setAlignment("CENTERLEFT");C12.iC();C13.setColumn(C3);C13.setManage(C29);C13.setParent(C2);C13.setRow(C8);C13.setMarginBottom(2);C13.setMarginLeft(2);C13.setMarginRight(2);C13.setMarginTop(2);C13.iC();C14.setColumn(C4);C14.setManage(C30);C14.setParent(C2);C14.setRow(C8);C14.setMarginBottom(2);C14.setMarginLeft(2);C14.setMarginRight(2);C14.setMarginTop(2);C14.iC();C15.setColumn(C5);C15.setManage(C31);C15.setParent(C2);C15.setRow(C8);C15.setMarginBottom(2);C15.setMarginLeft(2);C15.setMarginRight(2);
C15.setMarginTop(2);C15.iC();C16.setColumn(C6);C16.setManage(C32);C16.setParent(C2);C16.setRow(C8);C16.setMarginBottom(2);C16.setMarginLeft(2);C16.setMarginRight(2);C16.setMarginTop(2);C16.iC();C17.setColumn(C3);C17.setManage(C33);C17.setParent(C2);C17.setRow(C9);C17.setMarginBottom(2);C17.setMarginLeft(2);C17.setMarginRight(2);C17.setMarginTop(2);C17.iC();C18.setColumn(C4);C18.setManage(C34);C18.setParent(C2);C18.setRow(C9);C18.setMarginBottom(2);C18.setMarginLeft(2);C18.setMarginRight(2);C18.setMarginTop(2);
C18.iC();C19.setColumn(C5);C19.setManage(C35);C19.setParent(C2);C19.setRow(C9);C19.setMarginBottom(2);C19.setMarginLeft(2);C19.setMarginRight(2);C19.setMarginTop(2);C19.iC();C20.setColumn(C6);C20.setManage(C36);C20.setParent(C2);C20.setRow(C9);C20.setMarginBottom(2);C20.setMarginLeft(2);C20.setMarginRight(2);C20.setMarginTop(2);C20.iC();C21.setColumn(C3);C21.setManage(C37);C21.setParent(C2);C21.setRow(C10);C21.setMarginBottom(2);C21.setMarginLeft(2);C21.setMarginRight(2);C21.setMarginTop(2);C21.iC();
C22.setColumn(C4);C22.setManage(C38);C22.setParent(C2);C22.setRow(C10);C22.setMarginBottom(2);C22.setMarginLeft(2);C22.setMarginRight(2);C22.setMarginTop(2);C22.iC();C23.setColumn(C5);C23.setManage(C39);C23.setParent(C2);C23.setRow(C10);C23.setMarginBottom(2);C23.setMarginLeft(2);C23.setMarginRight(2);C23.setMarginTop(2);C23.iC();C24.setColumn(C6);C24.setManage(C40);C24.setParent(C2);C24.setRow(C10);C24.setMarginBottom(2);C24.setMarginLeft(2);C24.setMarginRight(2);C24.setMarginTop(2);C24.iC();C25.setAlignment("CENTERRIGHT");
C25.setColumn(C6);C25.setManage(C41);C25.setParent(C2);C25.setRow(C7);C25.setSizing("FITTOHEIGHT");C25.setFlow("LEFT");C25.setMarginBottom(6);C25.setMarginRight(4);C25.setMarginTop(6);C25.iC();C26.setColumn(C6);C26.setFlow("LEFT");C26.setManage(C42);C26.setParent(C2);C26.setRow(C7);C26.setSizing("FITTOHEIGHT");C26.setAlignment("CENTERRIGHT");C26.setMarginBottom(6);C26.setMarginRight(4);C26.setMarginTop(6);C26.iC();C27.setDisplayPosition(4);C27.setLeft(2);C27.setParent(this);C27.setTabPosition(1);
C27.setTabStop(false);C27.setTop(2);C27.setHeight(36);C27.setWidth(613);C27.setThemeDrawStyle("MediumTitle");C27.iC();C28.setCaption("Decade");C28.setDisplayPosition(3);C28.setEllipses("WORD");C28.setHeight(36);C28.setLeft(2);C28.setParent(this);C28.setTabPosition(2);C28.setTabStop(false);C28.setTop(2);C28.setVerticalAlignment("CENTER");C28.setWidth(70);C28.setMarginLeft(8);C28.setMarginRight(8);C28.setThemeDrawStyle("Heading2+MediumTitle");C28.iC();C29.setCaption("Label1");C29.setDisplayPosition(5);
C29.setEllipses("WORD");C29.setHeight(98);C29.setLeft(2);C29.setParent(this);C29.setTabPosition(14);C29.setTabStop(false);C29.setTop(42);C29.setVerticalAlignment("CENTER");C29.setWidth(151);C29.setAlignment("CENTER");C29.setThemeDrawStyle("ToolbarButton+AlternateItem");C29.iC();C30.setCaption("Label2");C30.setDisplayPosition(6);C30.setEllipses("WORD");C30.setHeight(98);C30.setLeft(157);C30.setParent(this);C30.setTabPosition(13);C30.setTabStop(false);C30.setTop(42);C30.setVerticalAlignment("CENTER");
C30.setWidth(150);C30.setAlignment("CENTER");C30.setThemeDrawStyle("ToolbarButton+AlternateItem");C30.iC();C31.setCaption("Label3");C31.setDisplayPosition(7);C31.setEllipses("WORD");C31.setHeight(98);C31.setLeft(311);C31.setParent(this);C31.setTabPosition(12);C31.setTabStop(false);C31.setTop(42);C31.setVerticalAlignment("CENTER");C31.setWidth(150);C31.setAlignment("CENTER");C31.setThemeDrawStyle("ToolbarButton+AlternateItem");C31.iC();C32.setCaption("Label4");C32.setDisplayPosition(8);C32.setEllipses("WORD");
C32.setHeight(98);C32.setLeft(465);C32.setParent(this);C32.setTabPosition(11);C32.setTabStop(false);C32.setTop(42);C32.setVerticalAlignment("CENTER");C32.setWidth(150);C32.setAlignment("CENTER");C32.setThemeDrawStyle("ToolbarButton+AlternateItem");C32.iC();C33.setCaption("Label5");C33.setDisplayPosition(9);C33.setEllipses("WORD");C33.setHeight(98);C33.setLeft(2);C33.setParent(this);C33.setTabPosition(10);C33.setTabStop(false);C33.setTop(144);C33.setVerticalAlignment("CENTER");C33.setWidth(151);C33.setAlignment("CENTER");
C33.setThemeDrawStyle("ToolbarButton+AlternateItem");C33.iC();C34.setCaption("Label6");C34.setDisplayPosition(10);C34.setEllipses("WORD");C34.setHeight(98);C34.setLeft(157);C34.setParent(this);C34.setTabPosition(9);C34.setTabStop(false);C34.setTop(144);C34.setVerticalAlignment("CENTER");C34.setWidth(150);C34.setAlignment("CENTER");C34.setThemeDrawStyle("ToolbarButton+AlternateItem");C34.iC();C35.setCaption("Label7");C35.setDisplayPosition(11);C35.setEllipses("WORD");C35.setHeight(98);C35.setLeft(311);
C35.setParent(this);C35.setTabPosition(8);C35.setTabStop(false);C35.setTop(144);C35.setVerticalAlignment("CENTER");C35.setWidth(150);C35.setAlignment("CENTER");C35.setThemeDrawStyle("ToolbarButton+AlternateItem");C35.iC();C36.setCaption("Label8");C36.setDisplayPosition(12);C36.setEllipses("WORD");C36.setHeight(98);C36.setLeft(465);C36.setParent(this);C36.setTabPosition(7);C36.setTabStop(false);C36.setTop(144);C36.setVerticalAlignment("CENTER");C36.setWidth(150);C36.setAlignment("CENTER");C36.setThemeDrawStyle("ToolbarButton+AlternateItem");
C36.iC();C37.setCaption("Label9");C37.setDisplayPosition(13);C37.setEllipses("WORD");C37.setHeight(97);C37.setLeft(2);C37.setParent(this);C37.setTabPosition(6);C37.setTabStop(false);C37.setTop(246);C37.setVerticalAlignment("CENTER");C37.setWidth(151);C37.setAlignment("CENTER");C37.setThemeDrawStyle("ToolbarButton+AlternateItem");C37.iC();C38.setCaption("Label10");C38.setDisplayPosition(14);C38.setEllipses("WORD");C38.setHeight(97);C38.setLeft(157);C38.setParent(this);C38.setTabPosition(5);C38.setTabStop(false);
C38.setTop(246);C38.setVerticalAlignment("CENTER");C38.setWidth(150);C38.setAlignment("CENTER");C38.setThemeDrawStyle("ToolbarButton+AlternateItem");C38.iC();C39.setCaption("Label11");C39.setDisplayPosition(15);C39.setEllipses("WORD");C39.setHeight(97);C39.setLeft(311);C39.setParent(this);C39.setTabPosition(4);C39.setTabStop(false);C39.setTop(246);C39.setVerticalAlignment("CENTER");C39.setWidth(150);C39.setAlignment("CENTER");C39.setThemeDrawStyle("ToolbarButton+AlternateItem");C39.iC();C40.setCaption("Label12");
C40.setDisplayPosition(16);C40.setEllipses("WORD");C40.setHeight(97);C40.setLeft(465);C40.setParent(this);C40.setTabPosition(3);C40.setTabStop(false);C40.setTop(246);C40.setVerticalAlignment("CENTER");C40.setWidth(150);C40.setAlignment("CENTER");C40.setThemeDrawStyle("ToolbarButton+AlternateItem");C40.iC();C41.setAutoSize(false);C41.setButtonStyle("FLATBUTTON");C41.setComponentVersion(1);C41.setDisplayPosition(1);C41.setLeft(573);C41.setParent(this);C41.setTabPosition(15);C41.setTop(6);C41.setWidth(40);
C41.setImage(rc1);C41.iC();C42.setAutoSize(false);C42.setButtonStyle("FLATBUTTON");C42.setComponentVersion(1);C42.setDisplayPosition(2);C42.setLeft(529);C42.setParent(this);C42.setTabPosition(16);C42.setTop(6);C42.setWidth(40);C42.setImage(rc2);C42.iC();C43.setParent(this);C43.setShortCut("UP");C43.iC();C44.setParent(this);C44.setShortCut("DOWN");C44.iC();C45.setCollects("PRIM_LABL");C45.iC();C0.aH("ACTIVATINGDATE",this,e2);C41.aH("CLICK",this,e4);C42.aH("CLICK",this,e5);C43.aH("PRESSED",this,e4);
C44.aH("PRESSED",this,e5);C45.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setHeight(345);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(617);this.setLayoutManager(C2);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",58);r.ln=58;{r.ln=60;this.mthCOLLECTDATELABELS();}r.ln=62;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#gController.ActivatingDate",64);r.ln=64;{r.ln=66;this.mthUPDATE();}r.ln=68;r.e();};function e3(SENDER,Ps)
{var m=this.REF,r=l.eR(this,cO,"#gLabels<>.Click",70);r.ln=70;{r.ln=72;m.GCONTROLLER.ref.mthAPPLYYEAR(l.s.AsNumber(SENDER.getCaption()));r.ln=73;m.GCONTROLLER.ref.mthSHOWVIEW("MONTH");}r.ln=75;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#UpArrow.Pressed #PreviousDecade.Click",77);r.ln=77;{r.ln=79;m.GCONTROLLER.ref.mthADJUSTYEAR(-10);}r.ln=81;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#DownArrow.Pressed #NextDecade.Click",83);r.ln=83;{r.ln=85;m.GCONTROLLER.ref.mthADJUSTYEAR(10);
}r.ln=87;r.e();};cO.mthUPDATE=function(){var f=this.FLD.XDEMO_64,m=this.REF,r=l.mR(this,cO,"Update",89);r.ln=89;{r.ln=91;m.LDECADE.set(l.s.Substitute("&1 - &2",l.n.AsString(m.GCONTROLLER.ref.getDECADESTART()),l.n.AsString(l.add(m.GCONTROLLER.ref.getDECADESTART(),9))));r.ln=93;for(var l1=m.GLABELS.cI();l1.step();){l1.item().setThemeDrawStyle("TOOLBARBUTTON+ALTERNATEITEM")};r.ln=95;for(var i1=1,s1=1,t1=l.tI(12);f.F1.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=97;m.GLABELS.get(f.F1.get()).set(l.n.AsString(l.sub(l.add(m.GCONTROLLER.ref.getDECADESTART(),f.F1.get()),1)));
r.ln=99;if(l.n.eq(l.s.AsNumber(m.GLABELS.get(f.F1.get()).getCaption()),l.d.Year(m.GCONTROLLER.ref.getDATE()))){r.ln=101;m.GLABELS.get(f.F1.get()).setThemeDrawStyle("TOOLBARBUTTON+DARKTITLE");}}}r.ln=107;r.e();};cO.mthCOLLECTDATELABELS=function(){var m=this.REF,r=l.mR(this,cO,"CollectDateLabels",109);r.ln=109;{r.ln=111;{var l1=this.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());r.ln=113;if(l.s.ne(l.s.Substring(l.s.UpperCase(CONTROL.getName()),1,5),"LYEAR")){continue;
}r.ln=115;m.GLABELS.mthINSERT(l.cast(CONTROL,"PRIM_LABL"));r.ln=117;}l1.end();r.dR("CONTROL");}}r.ln=119;r.e();};},{rc:["XDEMO_60","XDEMO_17"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_LABL","PRIM_SPBN","PRIM_STPG","PRIM_ACOL","PRIM_DTIM"]});