﻿LANSA.addComponent({id:"XDOMAIN",nm:"xDOMain",ot:"wp",tp:"Web Page",de:"Offline Mobile Application",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xdoimg07.png");var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{ShowLoginScreen:{},ShowEmployeeListScreen:{ps:{"TransitionType":{pt:"i"}}},ShowDetailScreen:{},ActivateScreen:{ps:{"Screen":{pt:"i"},"TransitionType":{pt:"i"}}},ActivateActionBar:{ps:{"ActionBar":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDOMAIN",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");
var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C10=this.cR("LOGINACTIONBAR","XDOBARLO");var C11=this.cR("EMPLOYEELISTDEFAULTACTIONBAR","XDOBARMN");var C12=this.cR("EMPLOYEELISTSEARCHACTIONBAR","XDOSEARCH");
var C13=this.cR("EMPLOYEEDETAILACTIONBAR","XDOBARDT");this.cD("CURRENTACTIONBAR");var C15=this.cR("LOGINSCREEN","XDOLOGIN");var C16=this.cR("EMPLOYEELISTSCREEN","XDOMAINS");var C17=this.cR("EMPLOYEEDETAILSCREEN","XDODETAIL");this.cD("CURRENTSCREEN");var C19=this.cR("NAVIGATIONDRAWER","XDONAV");var C20=this.cR("TOAST","XDOTOAST");var C21=this.cA("GAPPLICATION","XDOAPP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setParent(C0);
C3.setRow(C2);C3.setAlignment("TOPCENTER");C3.setSizing("FITTOWIDTH");C3.setManage(C10);C3.iC();C4.setColumn(C1);C4.setManage(C12);C4.setParent(C0);C4.setRow(C2);C4.setAlignment("TOPCENTER");C4.setSizing("FITTOWIDTH");C4.iC();C5.setColumn(C1);C5.setManage(C13);C5.setParent(C0);C5.setRow(C2);C5.setAlignment("TOPCENTER");C5.setSizing("FITTOWIDTH");C5.iC();C6.setColumn(C1);C6.setManage(C11);C6.setParent(C0);C6.setRow(C2);C6.setAlignment("TOPCENTER");C6.setSizing("FITTOWIDTH");C6.iC();C7.setColumn(C1);
C7.setManage(C15);C7.setParent(C0);C7.setRow(C2);C7.setMarginTop(55);C7.iC();C8.setColumn(C1);C8.setManage(C16);C8.setParent(C0);C8.setRow(C2);C8.setMarginTop(55);C8.iC();C9.setColumn(C1);C9.setManage(C17);C9.setParent(C0);C9.setRow(C2);C9.iC();C10.setParent(this);C10.setWidth(649);C10.setLeft(0);C10.setTop(0);C10.setTabPosition(2);C10.iC();C11.setParent(this);C11.setDisplayPosition(2);C11.setWidth(649);C11.setVisible(false);C11.iC();C12.setParent(this);C12.setVisible(false);C12.setDisplayPosition(3);
C12.setWidth(649);C12.setTabPosition(4);C12.iC();C13.setParent(this);C13.setVisible(false);C13.setDisplayPosition(4);C13.setTabPosition(3);C13.setWidth(649);C13.iC();C15.setParent(this);C15.setTabPosition(5);C15.setHeight(545);C15.setTop(55);C15.setWidth(649);C15.setDisplayPosition(5);C15.iC();C16.setParent(this);C16.setHeight(545);C16.setTop(55);C16.setDisplayPosition(7);C16.setTabPosition(7);C16.setOpacity(0);C16.setWidth(649);C16.iC();C17.setParent(this);C17.setHeight(600);C17.setDisplayPosition(6);
C17.setTabPosition(6);C17.setOpacity(0);C17.setWidth(649);C17.iC();C19.iC();C20.iC();if((C21!=null)&&(C21.iI()==false)){C21.iC();}l.WEB().aH("URLCHANGED",this,e2);C17.aH("VERTICALSCROLLCHANGED",this,e16);C21.aH("LOADINGFAILED",this,e3);C21.aH("REFRESHFAILED",this,e4);C21.aH("LOGINCOMPLETED",this,e5);C21.aH("EMPLOYEESAVED",this,e6);C21.aH("EMPLOYEEDELETED",this,e7);C21.aH("EMPLOYEESAVEFAILED",this,e8);C21.aH("EMPLOYEEOPENED",this,e9);C21.aH("EMPLOYEECREATED",this,e10);C21.aH("SEARCHSHOWING",this,e11);
C21.aH("SEARCHHIDING",this,e12);C21.aH("EMPLOYEESYNCCOMPLETED",this,e13);C21.aH("EMPLOYEESYNCFAILED",this,e14);this.setLayoutManager(C0);this.setTheme(l.gTh("XDOTHEME"));this.setIcon(rc1);this.setCaption("Mobile App with Offline Support");this.setWidth(649);this.setThemeDrawStyle("defaultBackGround");this.setHeight(600);this.aH("CREATEINSTANCE",this,e1);this.aH("ANIMATIONENDED",this,e15);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",41);r.ln=41;{r.ln=43;this.srCURRENTSCREEN(m.LOGINSCREEN);
r.ln=44;this.srCURRENTACTIONBAR(m.LOGINACTIONBAR);}r.ln=46;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.URLChanged",48);r.ln=48;{r.ln=50;if(l.not(m.GAPPLICATION.ref.getLOGGEDIN())){r.ln=52;this.mthSHOWLOGINSCREEN();r.e();return;}r.ln=58;if((l.WEB().getURLParameters().get("SCREEN")!=null)){r.ln=60;{var v1=l.s.UpperCase(l.WEB().getURLParameters().get("SCREEN").getValue());if(r.ln=62,l.s.eq(v1,"NEW")){r.ln=64;m.GAPPLICATION.ref.mthCREATEEMPLOYEE();r.e();return;}else if(r.ln=68,l.s.eq(v1,"DETAIL"))
{r.ln=70;if((l.WEB().getURLParameters().get("EMPLOYEE")!=null)){r.ln=72;m.GAPPLICATION.ref.mthOPENEMPLOYEE(l.WEB().getURLParameters().get("EMPLOYEE").getValue());r.e();return;}}r.ln=78;}}r.ln=82;cO.mthSHOWEMPLOYEELISTSCREEN.call(this,"FADEFROMTOP");}r.ln=84;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.LoadingFailed",86);r.ln=86;{r.ln=88;m.TOAST.mthSHOW("Unable connect to the server. Please try again later.",u,u);r.ln=90;this.mthSHOWLOGINSCREEN();}r.ln=92;r.e();};function e4(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#gApplication.RefreshFailed",94);r.ln=94;{r.ln=96;m.TOAST.mthSHOW("Unable to connect to the server.",u,u);}r.ln=98;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#gApplication.LoginCompleted",100);r.ln=100;{r.ln=102;cO.mthSHOWEMPLOYEELISTSCREEN.call(this,"FADE");}r.ln=104;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeSaved",106);r.ln=106;{r.ln=108;m.TOAST.mthSHOW(l.cat(m.GAPPLICATION.ref.getCURRENTEMPLOYEE().getFULLNAME()," saved."),u,u);
r.ln=110;l.WEB().getHistory().mthGOBACK(u);}r.ln=112;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeDeleted",114);r.ln=114;{r.ln=116;m.TOAST.mthSHOW(l.cat(m.GAPPLICATION.ref.getCURRENTEMPLOYEE().getFULLNAME()," deleted."),u,u);r.ln=118;l.WEB().getHistory().mthGOBACK(u);}r.ln=120;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeSaveFailed",122);r.ln=122;{r.ln=124;m.TOAST.mthSHOW("Save failed, please correct the errors.",u,u);}
r.ln=126;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeOpened",128);r.ln=128;{r.ln=130;this.setCaption(m.GAPPLICATION.ref.getCURRENTEMPLOYEE().getFULLNAME());r.ln=132;this.mthSHOWDETAILSCREEN();}r.ln=134;r.e();};function e10(sender,Ps){var r=l.eR(this,cO,"#gApplication.EmployeeCreated",136);r.ln=136;{r.ln=138;this.setCaption("New Employee");r.ln=140;this.mthSHOWDETAILSCREEN();}r.ln=142;r.e();};function e11(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.SearchShowing",144);
r.ln=144;{r.ln=146;cO.mthACTIVATEACTIONBAR.call(this,m.EMPLOYEELISTSEARCHACTIONBAR);}r.ln=148;r.e();};function e12(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.SearchHiding",150);r.ln=150;{r.ln=152;cO.mthACTIVATEACTIONBAR.call(this,m.EMPLOYEELISTDEFAULTACTIONBAR);r.ln=154;m.EMPLOYEELISTDEFAULTACTIONBAR.mthANIMATEMENU();}r.ln=156;r.e();};function e13(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeSyncCompleted",158);var P0=Ps.r("EMPLOYEE");r.ln=158;{r.ln=160;m.TOAST.mthSHOW(l.cat(P0.getFULLNAME()," has been synced with the server."),u,u);
}r.ln=162;r.e();};function e14(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeSyncFailed",164);var P0=Ps.r("EMPLOYEE");r.ln=164;{r.ln=166;m.TOAST.mthSHOW(l.cat(P0.getFULLNAME()," has failed to sync with the server."),u,u);}r.ln=168;r.e();};function e15(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.AnimationEnded",170);r.ln=170;{r.ln=172;m.CURRENTACTIONBAR.setDisplayPosition(1);}r.ln=174;r.e();};function e16(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeDetailScreen.VerticalScrollChanged",176);
var P0=Ps.r("SCROLLEDPIXELS");r.ln=176;{r.ln=178;m.EMPLOYEEDETAILACTIONBAR.mthADJUSTOPACITY(P0.get());}r.ln=180;r.e();};cO.mthSHOWLOGINSCREEN=function(){var m=this.REF,r=l.mR(this,cO,"ShowLoginScreen",186);r.ln=186;{r.ln=188;cO.mthACTIVATESCREEN.call(this,m.LOGINSCREEN,"FADEFROMTOP");r.ln=190;cO.mthACTIVATEACTIONBAR.call(this,m.LOGINACTIONBAR);}r.ln=192;r.e();};cO.mthSHOWEMPLOYEELISTSCREEN=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowEmployeeListScreen",194);var P0=r.cP("TRANSITIONTYPE","PRIM_ALPH");
P0.set(p0);r.ln=194;{r.ln=197;this.setCaption("Mobile App with Offline Support");r.ln=199;cO.mthACTIVATESCREEN.call(this,m.EMPLOYEELISTSCREEN,P0.get());r.ln=201;if(m.GAPPLICATION.ref.getISSEARCHING()){r.ln=203;cO.mthACTIVATEACTIONBAR.call(this,m.EMPLOYEELISTSEARCHACTIONBAR);}else{r.ln=207;cO.mthACTIVATEACTIONBAR.call(this,m.EMPLOYEELISTDEFAULTACTIONBAR);r.ln=209;m.EMPLOYEELISTDEFAULTACTIONBAR.mthANIMATEMENU();}}r.ln=213;r.e();};cO.mthSHOWDETAILSCREEN=function(){var m=this.REF,r=l.mR(this,cO,"ShowDetailScreen",215);
r.ln=215;{r.ln=217;cO.mthACTIVATESCREEN.call(this,m.EMPLOYEEDETAILSCREEN,"FADEFROMBOTTOM");r.ln=219;cO.mthACTIVATEACTIONBAR.call(this,m.EMPLOYEEDETAILACTIONBAR);}r.ln=221;r.e();};cO.mthACTIVATESCREEN=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"ActivateScreen",223);var P0=r.cPD("SCREEN");var P1=r.cP("TRANSITIONTYPE","PRIM_ALPH");P0=p0;P1.set(p1);r.ln=223;{r.ln=227;if((m.CURRENTSCREEN!==P0)){r.ln=229;this.mthTRANSITION(m.CURRENTSCREEN,P0,P1.get(),200,u);r.ln=231;this.srCURRENTSCREEN(P0);}}r.ln=235;
r.e();};cO.mthACTIVATEACTIONBAR=function(p0){var m=this.REF,r=l.mR(this,cO,"ActivateActionBar",237);var P0=r.cPD("ACTIONBAR");P0=p0;r.ln=237;{r.ln=240;if((m.CURRENTACTIONBAR!==P0)){r.ln=242;m.CURRENTACTIONBAR.setVisible(false);r.ln=244;this.srCURRENTACTIONBAR(P0);r.ln=246;m.CURRENTACTIONBAR.setVisible(true);}}r.ln=250;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srCURRENTACTIONBAR=function(rn){this.sR("CURRENTACTIONBAR",rn);};cO.srCURRENTSCREEN=function(rn)
{this.sR("CURRENTSCREEN",rn);};},{rc:["XDOBARLO","XDOBARMN","XDOSEARCH","XDOBARDT","XDOLOGIN","XDOMAINS","XDODETAIL","XDONAV","XDOTOAST","XDOAPP","XDOTHEME"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_FLD"],dp:["PRIM_PANL","PRIM_ANIM"]});