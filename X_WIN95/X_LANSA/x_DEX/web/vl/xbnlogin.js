﻿LANSA.addComponent({id:"XBNLOGIN",nm:"XBNLogin",ot:"rp",tp:"Reusable Part",de:"Login Control",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",mt:{PerformLogin:{}},ev:{LoginFailed:{},LoginSucceeded:{ps:{"ClientName":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("COLUMN4","PRIM_TBLO","Column");
var C5=this.cR("COLUMN5","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("ROW2","PRIM_TBLO","Row");var C8=this.cR("ROW3","PRIM_TBLO","Row");var C9=this.cR("ROW4","PRIM_TBLO","Row");var C10=this.cR("ROW5","PRIM_TBLO","Row");var C11=this.cR("ROW6","PRIM_TBLO","Row");var C12=this.cR("ROW7","PRIM_TBLO","Row");var C13=this.cR("ROW8","PRIM_TBLO","Row");var C14=this.cR("ROW9","PRIM_TBLO","Row");var C15=this.cR("ROW10","PRIM_TBLO","Row");var C16=this.cR("ROW11","PRIM_TBLO","Row");
var C17=this.cR("ROW12","PRIM_TBLO","Row");var C18=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C27=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");
var C28=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C29=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C30=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C31=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C32=this.cR("LAYOUTITEM15","PRIM_TBLO","Item");var C33=this.cR("LAYOUTITEM16","PRIM_TBLO","Item");var C34=this.cR("ACCESSCODELABEL","PRIM_LABL");var C35=this.cR("ACCESSCODE","PRIM_EDIT");var C36=this.cR("CLIENTNUMBERLABEL","PRIM_LABL");var C37=this.cR("CLIENTNUMBER","PRIM_EDIT");var C38=this.cR("LOGINBUTTON1","PRIM_LABL");
var C39=this.cR("LOGINBUTTON2","PRIM_LABL");var C40=this.cR("LOGINBUTTON3","PRIM_LABL");var C41=this.cR("LOGINBUTTON4","PRIM_LABL");var C42=this.cR("LOGINBUTTON5","PRIM_LABL");var C43=this.cR("LOGINBUTTON6","PRIM_LABL");var C44=this.cR("LOGINBUTTON7","PRIM_LABL");var C45=this.cR("LOGINBUTTON8","PRIM_LABL");var C46=this.cR("LOGINBUTTON9","PRIM_LABL");var C47=this.cR("LOGINBUTTON_CLEAR","PRIM_LABL");var C48=this.cR("LOGINBUTTON0","PRIM_LABL");var C49=this.cR("LOGINBUTTONBUTTONS","PRIM_LCOL");var C50=this.cR("ENTER","PRIM_LABL");
C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(30);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setWidth(60);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(60);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(4);C4.setParent(C0);C4.setWidth(60);C4.setUnits("PIXELS");C4.iC();C5.setDisplayPosition(5);C5.setParent(C0);C5.iC();C6.setDisplayPosition(1);C6.setParent(C0);C6.setHeight(30);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(2);
C7.setParent(C0);C7.setHeight(30);C7.setUnits("PIXELS");C7.iC();C8.setDisplayPosition(3);C8.setParent(C0);C8.setHeight(5);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(4);C9.setParent(C0);C9.setHeight(30);C9.setUnits("PIXELS");C9.iC();C10.setDisplayPosition(5);C10.setParent(C0);C10.setHeight(30);C10.setUnits("PIXELS");C10.iC();C11.setDisplayPosition(6);C11.setParent(C0);C11.setHeight(44);C11.setUnits("PIXELS");C11.iC();C12.setDisplayPosition(7);C12.setParent(C0);C12.setHeight(44);C12.setUnits("PIXELS");
C12.iC();C13.setDisplayPosition(8);C13.setParent(C0);C13.setHeight(43);C13.setUnits("PIXELS");C13.iC();C14.setDisplayPosition(9);C14.setParent(C0);C14.setHeight(43);C14.setUnits("PIXELS");C14.iC();C15.setDisplayPosition(10);C15.setParent(C0);C15.setHeight(30);C15.setUnits("PIXELS");C15.iC();C16.setDisplayPosition(11);C16.setParent(C0);C16.setHeight(44);C16.setUnits("PIXELS");C16.iC();C17.setDisplayPosition(12);C17.setParent(C0);C17.iC();C18.setColumn(C2);C18.setManage(C38);C18.setParent(C0);C18.setRow(C11);
C18.setMarginTop(2);C18.setMarginLeft(2);C18.setMarginBottom(2);C18.setMarginRight(2);C18.iC();C19.setColumn(C3);C19.setManage(C39);C19.setParent(C0);C19.setRow(C11);C19.setMarginTop(2);C19.setMarginBottom(2);C19.setMarginLeft(2);C19.setMarginRight(2);C19.iC();C20.setColumn(C4);C20.setManage(C40);C20.setParent(C0);C20.setRow(C11);C20.setMarginTop(2);C20.setMarginBottom(2);C20.setMarginRight(2);C20.setMarginLeft(2);C20.iC();C21.setColumn(C2);C21.setManage(C41);C21.setParent(C0);C21.setRow(C12);C21.setMarginTop(2);
C21.setMarginBottom(2);C21.setMarginLeft(2);C21.setMarginRight(2);C21.iC();C22.setColumn(C3);C22.setManage(C42);C22.setParent(C0);C22.setRow(C12);C22.setMarginTop(2);C22.setMarginBottom(2);C22.setMarginLeft(2);C22.setMarginRight(2);C22.iC();C23.setColumn(C4);C23.setManage(C43);C23.setParent(C0);C23.setRow(C12);C23.setMarginTop(2);C23.setMarginBottom(2);C23.setMarginLeft(2);C23.setMarginRight(2);C23.iC();C24.setColumn(C2);C24.setManage(C44);C24.setParent(C0);C24.setRow(C13);C24.setMarginTop(2);C24.setMarginBottom(2);
C24.setMarginLeft(2);C24.setMarginRight(2);C24.iC();C25.setColumn(C3);C25.setManage(C45);C25.setParent(C0);C25.setRow(C13);C25.setMarginTop(2);C25.setMarginBottom(2);C25.setMarginLeft(2);C25.setMarginRight(2);C25.iC();C26.setColumn(C4);C26.setManage(C46);C26.setParent(C0);C26.setRow(C13);C26.setMarginTop(2);C26.setMarginBottom(2);C26.setMarginLeft(2);C26.setMarginRight(2);C26.iC();C27.setColumn(C2);C27.setManage(C48);C27.setParent(C0);C27.setRow(C14);C27.setMarginTop(2);C27.setMarginBottom(2);C27.setMarginLeft(2);
C27.setMarginRight(2);C27.iC();C28.setAlignment("TOPLEFT");C28.setColumn(C2);C28.setFlow("DOWN");C28.setManage(C35);C28.setParent(C0);C28.setRow(C10);C28.setColumnSpan(3);C28.setMarginLeft(3);C28.setMarginRight(3);C28.setMarginBottom(5);C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C2);C29.setFlow("DOWN");C29.setManage(C34);C29.setParent(C0);C29.setRow(C9);C29.setMarginLeft(3);C29.setColumnSpan(4);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C2);C30.setFlow("DOWN");C30.setManage(C36);C30.setParent(C0);
C30.setRow(C6);C30.setMarginLeft(3);C30.setColumnSpan(4);C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C2);C31.setFlow("DOWN");C31.setManage(C37);C31.setParent(C0);C31.setRow(C7);C31.setColumnSpan(3);C31.setMarginLeft(3);C31.setMarginRight(3);C31.setMarginBottom(5);C31.iC();C32.setColumn(C3);C32.setManage(C47);C32.setParent(C0);C32.setRow(C14);C32.setColumnSpan(2);C32.setMarginTop(2);C32.setMarginBottom(2);C32.setMarginLeft(2);C32.setMarginRight(2);C32.iC();C33.setColumn(C2);C33.setFlow("DOWN");
C33.setManage(C50);C33.setParent(C0);C33.setRow(C16);C33.setColumnSpan(3);C33.setMarginLeft(20);C33.setMarginRight(20);C33.iC();C34.setCaption("Access Code:");C34.setDisplayPosition(13);C34.setEllipses("WORD");C34.setHeight(30);C34.setLeft(33);C34.setParent(this);C34.setTabPosition(15);C34.setTabStop(false);C34.setTop(65);C34.setVerticalAlignment("CENTER");C34.setWidth(256);C34.iC();C35.setDisplayPosition(12);C35.setParent(this);C35.setShowSelection(false);C35.setShowSelectionHilight(false);C35.setTabPosition(14);
C35.setWidth(174);C35.setLeft(33);C35.setTop(95);C35.setPasswordChar("*");C35.setReadOnly(true);C35.setAutoSelect(false);C35.setEnabled(false);C35.iC();C36.setCaption("Client Number:");C36.setDisplayPosition(14);C36.setEllipses("WORD");C36.setHeight(30);C36.setLeft(33);C36.setParent(this);C36.setTabPosition(13);C36.setTabStop(false);C36.setTop(0);C36.setVerticalAlignment("CENTER");C36.setWidth(256);C36.iC();C37.setDisplayPosition(15);C37.setParent(this);C37.setShowSelection(false);C37.setShowSelectionHilight(false);
C37.setTabPosition(12);C37.setWidth(174);C37.setLeft(33);C37.setTop(30);C37.iC();C38.setDisplayPosition(10);C38.setEllipses("WORD");C38.setHeight(40);C38.setLeft(32);C38.setParent(this);C38.setTabPosition(11);C38.setTabStop(false);C38.setTop(127);C38.setVerticalAlignment("CENTER");C38.setWidth(56);C38.setAlignment("CENTER");C38.setCaption("1");C38.setThemeDrawStyle("LoginButton");C38.iC();C39.setDisplayPosition(9);C39.setEllipses("WORD");C39.setHeight(40);C39.setLeft(92);C39.setParent(this);C39.setTabPosition(10);
C39.setTabStop(false);C39.setTop(127);C39.setVerticalAlignment("CENTER");C39.setWidth(56);C39.setAlignment("CENTER");C39.setCaption("2");C39.setThemeDrawStyle("LoginButton");C39.iC();C40.setDisplayPosition(8);C40.setEllipses("WORD");C40.setHeight(40);C40.setLeft(152);C40.setParent(this);C40.setTabPosition(9);C40.setTabStop(false);C40.setTop(127);C40.setVerticalAlignment("CENTER");C40.setWidth(56);C40.setAlignment("CENTER");C40.setCaption("3");C40.setThemeDrawStyle("LoginButton");C40.iC();C41.setDisplayPosition(7);
C41.setEllipses("WORD");C41.setHeight(40);C41.setLeft(32);C41.setParent(this);C41.setTabPosition(8);C41.setTabStop(false);C41.setTop(171);C41.setVerticalAlignment("CENTER");C41.setWidth(56);C41.setAlignment("CENTER");C41.setCaption("4");C41.setThemeDrawStyle("LoginButton");C41.iC();C42.setDisplayPosition(6);C42.setEllipses("WORD");C42.setHeight(40);C42.setLeft(92);C42.setParent(this);C42.setTabPosition(7);C42.setTabStop(false);C42.setTop(171);C42.setVerticalAlignment("CENTER");C42.setWidth(56);C42.setAlignment("CENTER");
C42.setCaption("5");C42.setThemeDrawStyle("LoginButton");C42.iC();C43.setDisplayPosition(5);C43.setEllipses("WORD");C43.setHeight(40);C43.setLeft(152);C43.setParent(this);C43.setTabPosition(6);C43.setTabStop(false);C43.setTop(171);C43.setVerticalAlignment("CENTER");C43.setWidth(56);C43.setAlignment("CENTER");C43.setCaption("6");C43.setThemeDrawStyle("LoginButton");C43.iC();C44.setDisplayPosition(4);C44.setEllipses("WORD");C44.setHeight(39);C44.setLeft(32);C44.setParent(this);C44.setTabPosition(5);
C44.setTabStop(false);C44.setTop(215);C44.setVerticalAlignment("CENTER");C44.setWidth(56);C44.setAlignment("CENTER");C44.setCaption("7");C44.setThemeDrawStyle("LoginButton");C44.iC();C45.setDisplayPosition(3);C45.setEllipses("WORD");C45.setHeight(39);C45.setLeft(92);C45.setParent(this);C45.setTabPosition(4);C45.setTabStop(false);C45.setTop(215);C45.setVerticalAlignment("CENTER");C45.setWidth(56);C45.setAlignment("CENTER");C45.setCaption("8");C45.setThemeDrawStyle("LoginButton");C45.iC();C46.setDisplayPosition(2);
C46.setEllipses("WORD");C46.setHeight(39);C46.setLeft(152);C46.setParent(this);C46.setTabPosition(3);C46.setTabStop(false);C46.setTop(215);C46.setVerticalAlignment("CENTER");C46.setWidth(56);C46.setAlignment("CENTER");C46.setCaption("9");C46.setThemeDrawStyle("LoginButton");C46.iC();C47.setDisplayPosition(1);C47.setEllipses("WORD");C47.setHeight(39);C47.setLeft(92);C47.setParent(this);C47.setTabPosition(2);C47.setTabStop(false);C47.setTop(258);C47.setVerticalAlignment("CENTER");C47.setWidth(116);
C47.setAlignment("CENTER");C47.setCaption("Clear");C47.setThemeDrawStyle("LoginButton");C47.iC();C48.setDisplayPosition(11);C48.setEllipses("WORD");C48.setHeight(39);C48.setLeft(32);C48.setParent(this);C48.setTabPosition(1);C48.setTabStop(false);C48.setTop(258);C48.setVerticalAlignment("CENTER");C48.setWidth(56);C48.setAlignment("CENTER");C48.setCaption("0");C48.setThemeDrawStyle("LoginButton");C48.iC();C49.setCollects("PRIM_LABL");C49.iC();C50.setCaption("Enter");C50.setDisplayPosition(16);C50.setEllipses("WORD");
C50.setHeight(44);C50.setLeft(50);C50.setParent(this);C50.setTabPosition(16);C50.setTabStop(false);C50.setTop(329);C50.setVerticalAlignment("CENTER");C50.setWidth(140);C50.setThemeDrawStyle("LoginButton");C50.setAlignment("CENTER");C50.iC();C47.aH("CLICK",this,e3);C49.aH("CLICK",this,e2);C50.aH("CLICK",this,e4);this.setDisplayPosition(1);this.setHeight(409);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(289);this.setLayoutManager(C0);this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize",75);r.ln=75;{r.ln=78;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON0);r.ln=79;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON1);r.ln=80;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON2);r.ln=81;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON3);r.ln=82;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON4);r.ln=83;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON5);r.ln=84;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON6);r.ln=85;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON7);
r.ln=86;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON8);r.ln=87;m.LOGINBUTTONBUTTONS.mthINSERT(m.LOGINBUTTON9);}r.ln=89;r.e();};function e2(LOGINBUTTONKEY,Ps){var m=this.REF,r=l.eR(this,cO,"#LoginButtonButtons<>.Click",91);r.ln=91;{r.ln=94;m.ACCESSCODE.set(l.cat(m.ACCESSCODE.get(),LOGINBUTTONKEY.getCaption()));}r.ln=96;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LoginButton_Clear.Click",98);r.ln=98;{r.ln=101;m.ACCESSCODE.set("");}r.ln=103;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Enter.Click",105);
r.ln=105;{r.ln=107;this.mthPERFORMLOGIN();}r.ln=109;r.e();};cO.mthPERFORMLOGIN=function(){var m=this.REF,r=l.mR(this,cO,"PerformLogin",111);var C0=r.cR("LOGINRESULT","PRIM_ALPH");var C1=r.cR("CLIENTNAME","PRIM_ALPH");var C2=r.cDR("LOGINROUTINE","XBNSRVR","LOGIN");C0.iC();C1.iC();C2.iC();C2.aH("COMPLETED",this,e5);r.ln=111;{r.ln=120;C2.mthEXECUTEASYNC({FLD:{"ACCESSCODE":m.ACCESSCODE.get(),"CLIENTNUMBER":m.CLIENTNUMBER.get()}},{FLD:{"LOGINRESULT":C0,"CLIENTNAME":C1}});}r.ln=143;r.e();function e5(sender,Ps)
{var r=l.eR(this,cO,"#LoginRoutine.Completed",122);r.ln=122;{r.ln=124;{var v1=C0.get();if(r.ln=126,l.s.eq(v1,"OK")){r.ln=129;{var eP=l.ePs();eP.cR("CLIENTNAME","PRIM_ALPH");eP.r("CLIENTNAME").set(C1.get());this.fE("LOGINSUCCEEDED",eP);eP.e();}r.ln=132;m.ACCESSCODE.set("");}else{r.ln=137;this.fE("LOGINFAILED");}r.ln=139;}}r.ln=141;r.e();}};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_EDIT","PRIM_LCOL","PRIM_WEB.DataRequest"],dp:["PRIM_ALPH"]});
