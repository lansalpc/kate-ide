﻿LANSA.addComponent({id:"VF_UI022O",ot:"rp",tp:"Reusable Part",de:"\OC=Main Panel Title Bar",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:
{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{uInitialize:{},uTerminate:{},StartClickHereBanner:{},KillClickHereBanner:{},SetBasicStyle:{ps:{"Reference":{pt:"i"}}},MakeSystemMenu:{},uShowBusinessObjectSelectionMenu:
{ps:{"ForApplication":{pt:"i"}}},ShowSettingsDetails:{ps:{"AdditionalRequestdetails":{pt:"i"}}},ShowAssistanceDetails:{ps:{"AdditionalRequestdetails":{pt:"i"}}},AddBreadCrumb:{ps:{"Item":{pt:"i"}}},SetGoFowardGoBackIcons:{},GotoBreadCrumb:{},ResetMainTitle:{}},co:function(){cO.aN.call(this);this.aF("VF_UI022O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("UFRAMEWORK","VF_FP001O");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM3","PRIM_ATLI");this.cD("CURRENTAPPLICATION");
var C5=this.cR("MAINLAYOUTPANEL","PRIM_PANL");var C6=this.cR("MAINLAYOUTMANAGER","PRIM_ATLM");var C7=this.cR("ATTACHITEM1","PRIM_ATLI");var C8=this.cR("ATTACHITEM2","PRIM_ATLI");var C9=this.cR("ATTACHITEM4","PRIM_ATLI");var C10=this.cR("ATTACHITEMGOBACK","PRIM_ATLI");var C11=this.cR("ATTACHITEMCLICKHERELEFT","PRIM_ATLI");var C12=this.cR("ATTACHITEMCLICKHERERIGHT","PRIM_ATLI");var C13=this.cR("ATTACHITEMGOFORWARD","PRIM_ATLI");var C14=this.cR("ATTACHITEM5","PRIM_ATLI");var C15=this.cR("ATTACHSEARCHPANEL","PRIM_ATLI");
var C16=this.cR("MAINMENUICON","VF_UI005O");var C17=this.cR("GOBACKICON","VF_UI005O");var C18=this.cR("GOFORWARDICON","VF_UI005O");var C19=this.cR("CLICKHERELEFTICON","VF_UI005O");var C20=this.cR("CLICKHERERIGHTICON","VF_UI005O");var C21=this.cR("APPLICATIONIDENTIFIER","PRIM_LABL");var C22=this.cR("SETTINGSICON","VF_UI005O");var C23=this.cR("ASSISTANCEICON","VF_UI005O");var C24=this.cR("SEARCHPANEL","VF_UI026O");var C25=this.cR("CURRENTTITLESUFFIX","PRIM_DC","UnicodeString");var C26=this.cR("CURRENTTITLEPREFIX","PRIM_DC","UnicodeString");
var C27=this.cR("BREADCRUMBTRAIL","PRIM_ACOL");var C28=this.cF("BREADCRUMBTRAILPOSITION",Fd.F1.Dc);var C29=this.cR("BREADCRUMBRECORDINGENABLED","PRIM_BOLN");var C30=this.cR("MAINSYSTEMPANEL","VF_UI023O");var C31=this.cR("MAINSYSTEMPANELPOPOVER","VF_UI021O");this.cD("SETTINGSPANELCONTENT");var C33=this.cR("SETTINGSPANELPOPOVER","VF_UI021O");this.cD("ASSISTANCEPANELCONTENT");var C35=this.cR("ASSISTANCEPANELPOPOVER","VF_UI021O");var C36=this.cR("COLLECTBUSINESSOBJECTPANELS","PRIM_ACOL");var C37=this.cR("COLLECTBUSINESSOBJECTPANELPOPOVERS","PRIM_KCOL");
var C38=this.cR("BACKGROUNDANDFONTCOLORS","PRIM_VS","Style");this.cD("CURRENTSTYLEREFERENCEOBJECT");var C40=this.cR("CLICKHERELEFTTIMER","PRIM_TIMR");var C41=this.cR("CLICKHERERIGHTTIMER","PRIM_TIMR");var C42=this.cF("CLICKHERETIMERLONGINTERVAL",Fd.F1.Dc);var C43=this.cF("CLICKHERETIMERSHORTINTERVAL",Fd.F1.Dc);var C44=this.cF("CLICKHERESTARTEDCOUNT",Fd.F1.Dc);var C45=this.cR("CLICKHERESAVEDIDENTIFIER","PRIM_DC","UnicodeString");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false))
{C1.iC();}C2.iC();C3.setManage(C5);C3.setParent(C2);C3.setAttachment("CENTER");C3.iC();C5.setLayoutManager(C6);C5.setDisplayPosition(1);C5.setParent(this);C5.setTabPosition(1);C5.setHeight(32);C5.setLeft(0);C5.setTop(0);C5.setWidth(756);C5.iC();C6.iC();C7.setManage(C21);C7.setParent(C6);C7.setAttachment("CENTER");C7.iC();C8.setManage(C23);C8.setParent(C6);C8.setAttachment("RIGHT");C8.iC();C9.setParent(C6);C9.setAttachment("LEFT");C9.setManage(C16);C9.iC();C10.setParent(C6);C10.setAttachment("LEFT");
C10.setManage(C17);C10.iC();C11.setParent(C6);C11.setAttachment("LEFT");C11.setManage(C19);C11.iC();C12.setParent(C6);C12.setAttachment("RIGHT");C12.setManage(C20);C12.iC();C13.setParent(C6);C13.setAttachment("LEFT");C13.setManage(C18);C13.iC();C14.setManage(C22);C14.setParent(C6);C14.setAttachment("RIGHT");C14.iC();C15.setParent(C6);C15.setManage(C24);C15.setAttachment("RIGHT");C15.iC();C16.setWidth(32);C16.setParent(C5);C16.setTabStop(false);C16.setHeight(32);C16.setTabPosition(9);C16.iC();C17.setWidth(32);
C17.setParent(C5);C17.setTabStop(false);C17.setLeft(64);C17.setHeight(32);C17.setTabPosition(8);C17.setDisplayPosition(4);C17.iC();C18.setWidth(32);C18.setParent(C5);C18.setTabStop(false);C18.setLeft(96);C18.setHeight(32);C18.setTabPosition(5);C18.setDisplayPosition(5);C18.iC();C19.setWidth(32);C19.setParent(C5);C19.setTabStop(false);C19.setLeft(32);C19.setHeight(32);C19.setTabPosition(7);C19.setDisplayPosition(3);C19.iC();C20.setWidth(32);C20.setParent(C5);C20.setTabStop(false);C20.setLeft(535);
C20.setHeight(32);C20.setTabPosition(6);C20.setDisplayPosition(2);C20.iC();C21.setDisplayPosition(8);C21.setTabStop(false);C21.setParent(C5);C21.setTabPosition(4);C21.setLeft(128);C21.setTop(0);C21.setWidth(407);C21.setVerticalAlignment("CENTER");C21.setHeight(32);C21.iC();C22.setWidth(32);C22.setParent(C5);C22.setTabStop(false);C22.setLeft(692);C22.setHeight(32);C22.setDisplayPosition(7);C22.setTabPosition(2);C22.iC();C23.setWidth(32);C23.setParent(C5);C23.setTabStop(false);C23.setLeft(724);C23.setHeight(32);
C23.setDisplayPosition(9);C23.iC();C24.setParent(C5);C24.setTabPosition(3);C24.setLeft(567);C24.setWidth(125);C24.setDisplayPosition(6);C24.setHeight(32);C24.iC();C25.iC();C26.iC();C27.setCollects("VF_AC001O");C27.iC();C28.aD();C28.iC();C29.iC();C30.iC();C31.iC();C33.iC();C35.iC();C36.setCollects("VF_UI023O");C36.iC();C37.setStyle("COLLECTION");C37.setCollects("VF_UI021O");C37.setKeyedBy(Fd.F2.Dc);C37.iC();C38.setNormBackColor("BLUE");C38.setTextColor("RED");C38.iC();C40.setInterval(0);C40.iC();C41.setInterval(0);
C41.iC();C42.aD();C42.iC();C43.aD();C43.iC();C44.aD();C44.iC();C45.iC();C0.aH("CURRENTTHEMEALTERED",this,e3);C0.aH("REQUESTAPPLICATIONTABDISPLAY",this,e4);C0.aH("REQUESTFRAMEWORKTABDISPLAY",this,e5);C0.aH("REQUESTDISPLAYAPPLICATIONSELECTIONMENU",this,e6);C0.aH("REQUESTDISPLAYBUSINESSOBJECTSELECTIONMENU",this,e9);C0.aH("REQUESTSETTINGSICONCLICKED",this,e14);C0.aH("REQUESTASSISTANCEICONCLICKED",this,e16);C0.aH("REQUESTALTERMAINWINDOWSUFFIX",this,e19);C16.aH("WASCLICKED",this,e7);C17.aH("WASCLICKED",this,e17);
C18.aH("WASCLICKED",this,e18);C21.aH("CLICK",this,e8);C22.aH("WASCLICKED",this,e13);C23.aH("WASCLICKED",this,e15);C30.aH("UOBJECTSELECTED",this,e10);C30.aH("UOPENPANESELECTED",this,e12);C36.aH("UOBJECTSELECTED",this,e11);C36.aH("UOPENPANESELECTED",this,e12);C40.aH("TICK",this,e1);C41.aH("TICK",this,e2);this.setDisplayPosition(1);this.setHeight(32);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(756);this.setTabStop(false);this.setLayoutManager(C2);this.setThemeDrawStyle("MediumTitle");
}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",98);var C0=r.cF("PADDINGTOP",Fd.F1.Dc);C0.iC();r.ln=98;{r.ln=104;this.mthSETBASICSTYLE(m.UFRAMEWORK.ref);r.ln=105;this.setHeight(m.USYSTEM.ref.getCURRENTTHEME().getMAINTITLEBARHEIGHT());r.ln=106;m.MAINLAYOUTPANEL.setStyle(m.BACKGROUNDANDFONTCOLORS);r.ln=110;C0.set(l.div(l.sub(this.getHeight(),24),2));r.ln=112;if(l.n.lt(C0.get(),0)){r.ln=113;C0.set(0);}r.ln=116;m.ATTACHITEM2.setMarginTop(C0.get());m.ATTACHITEM2.setMarginLeft(4);
m.ATTACHITEM2.setMarginRight(6);m.ATTACHITEM4.setMarginTop(C0.get());m.ATTACHITEM4.setMarginLeft(4);m.ATTACHITEM4.setMarginRight(6);m.ATTACHITEMGOBACK.setMarginTop(C0.get());m.ATTACHITEMGOBACK.setMarginLeft(4);m.ATTACHITEMGOBACK.setMarginRight(6);m.ATTACHITEMGOFORWARD.setMarginTop(C0.get());m.ATTACHITEMGOFORWARD.setMarginLeft(4);m.ATTACHITEMGOFORWARD.setMarginRight(6);m.ATTACHITEM5.setMarginTop(C0.get());m.ATTACHITEM5.setMarginLeft(4);m.ATTACHITEM5.setMarginRight(6);m.ATTACHSEARCHPANEL.setMarginTop(C0.get());
m.ATTACHSEARCHPANEL.setMarginLeft(4);m.ATTACHSEARCHPANEL.setMarginRight(6);m.ATTACHITEMCLICKHERELEFT.setMarginTop(C0.get());m.ATTACHITEMCLICKHERELEFT.setMarginLeft(4);m.ATTACHITEMCLICKHERELEFT.setMarginRight(6);m.ATTACHITEMCLICKHERERIGHT.setMarginTop(C0.get());m.ATTACHITEMCLICKHERERIGHT.setMarginLeft(4);m.ATTACHITEMCLICKHERERIGHT.setMarginRight(6);r.ln=118;m.ATTACHSEARCHPANEL.setMarginBottom(C0.get());r.ln=120;m.SEARCHPANEL.setWidth(m.UFRAMEWORK.ref.getUMRUWIDTH());r.ln=122;m.ATTACHITEM5.setMarginRight(6);
r.ln=124;m.MAINMENUICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("ARRANGE"),"T",m.USYSTEM.ref.getUMTXTVALUES("SELECTAPPL"),"MEDIUM",true,u,u);r.ln=126;m.GOBACKICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("LEFT"),"T",m.UFRAMEWORK.ref.getUHINT(),"MEDIUM",true,u,u);r.ln=128;m.CLICKHERELEFTICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("LEFTCIRCLED"),"T","","MEDIUM",true,u,u);r.ln=130;m.CLICKHERELEFTICON.setVisible(false);r.ln=132;
m.CLICKHERERIGHTICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("RIGHTCIRCLED"),"T","","MEDIUM",true,u,u);r.ln=134;m.CLICKHERERIGHTICON.setVisible(false);r.ln=136;m.GOFORWARDICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("RIGHT"),"T",m.UFRAMEWORK.ref.getUHINT(),"MEDIUM",true,u,u);r.ln=138;if(l.n.gt(m.UFRAMEWORK.ref.getUMRUWIDTH(),0)){r.ln=140;m.SEARCHPANEL.mthUINITIALIZE(m.USYSTEM.ref.getUMTXTVALUES("START_SEARCH"),this);}else{r.ln=144;m.SEARCHPANEL.setVisible(false);
}r.ln=149;m.CURRENTTITLEPREFIX.set(m.UFRAMEWORK.ref.getUCAPTION());r.ln=150;this.mthRESETMAINTITLE();r.ln=153;this.mthMAKESYSTEMMENU();r.ln=156;if(l.s.ne(m.UFRAMEWORK.ref.getUSETTINGSPANE(),"")){r.ln=158;m.SETTINGSICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("SETTINGS"),"T",m.USYSTEM.ref.getUMTXTVALUES("SETTINGS2"),"MEDIUM",true,u,u);}else{r.ln=162;m.SETTINGSICON.setVisible(false);}r.ln=168;if(l.s.ne(m.UFRAMEWORK.ref.getUASSISTANCEPANE(),"")){r.ln=170;m.ASSISTANCEICON.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("HELP"),"T",m.USYSTEM.ref.getUMTXTVALUES("ASSISTANCE"),"MEDIUM",true,u,u);
}else{r.ln=174;m.ASSISTANCEICON.setVisible(false);}r.ln=179;m.BREADCRUMBRECORDINGENABLED.set(true);r.ln=180;this.mthADDBREADCRUMB(m.UFRAMEWORK.ref);}r.ln=182;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",185);r.ln=185;{r.ln=187;m.CLICKHERELEFTTIMER.setInterval(0);m.CLICKHERERIGHTTIMER.setInterval(0);r.ln=189;m.BREADCRUMBTRAIL.mthREMOVEALL();r.ln=191;if((m.SETTINGSPANELCONTENT!=null)){r.ln=192;m.SETTINGSPANELCONTENT.mthUTERMINATE();r.ln=193;m.SETTINGSPANELCONTENT.setAVFRAMEWORKMANAGER(null);
r.ln=194;this.srSETTINGSPANELCONTENT(null);}r.ln=197;if((m.ASSISTANCEPANELCONTENT!=null)){r.ln=198;m.ASSISTANCEPANELCONTENT.mthUTERMINATE();r.ln=199;m.ASSISTANCEPANELCONTENT.setAVFRAMEWORKMANAGER(null);r.ln=200;this.srASSISTANCEPANELCONTENT(null);}r.ln=203;if(m.SEARCHPANEL.getVisible()){r.ln=204;m.SEARCHPANEL.mthUTERMINATE();}r.ln=207;this.srCURRENTAPPLICATION(null);r.ln=209;this.srCURRENTSTYLEREFERENCEOBJECT(null);r.ln=210;for(var l1=m.COLLECTBUSINESSOBJECTPANELS.cI();l1.step();){l1.item().mthUTERMINATE()};
r.ln=211;for(var l1=m.COLLECTBUSINESSOBJECTPANELPOPOVERS.cI();l1.step();){l1.item().mthUTERMINATE()};r.ln=212;m.MAINSYSTEMPANEL.mthUTERMINATE();r.ln=213;m.MAINSYSTEMPANELPOPOVER.mthUTERMINATE();r.ln=214;m.SETTINGSPANELPOPOVER.mthUTERMINATE();r.ln=215;m.ASSISTANCEPANELPOPOVER.mthUTERMINATE();}r.ln=217;r.e();};cO.mthSTARTCLICKHEREBANNER=function(){var m=this.REF,r=l.mR(this,cO,"StartClickHereBanner",220);r.ln=220;{r.ln=222;m.CLICKHERETIMERLONGINTERVAL.set(4000);r.ln=223;m.CLICKHERETIMERSHORTINTERVAL.set(2000);
r.ln=224;m.CLICKHERELEFTTIMER.setInterval(m.CLICKHERETIMERLONGINTERVAL.get());}r.ln=226;r.e();};cO.mthKILLCLICKHEREBANNER=function(){var m=this.REF,r=l.mR(this,cO,"KillClickHereBanner",229);r.ln=229;{r.ln=231;m.CLICKHERELEFTTIMER.setInterval(0);m.CLICKHERERIGHTTIMER.setInterval(0);r.ln=233;if(m.CLICKHERELEFTICON.getVisible()){r.ln=234;m.CLICKHERELEFTICON.setVisible(false);r.ln=235;m.CURRENTTITLEPREFIX.set(m.CLICKHERESAVEDIDENTIFIER.get());r.ln=236;this.mthRESETMAINTITLE();}r.ln=239;if(m.CLICKHERERIGHTICON.getVisible())
{r.ln=240;m.CLICKHERERIGHTICON.setVisible(false);r.ln=241;m.CURRENTTITLEPREFIX.set(m.CLICKHERESAVEDIDENTIFIER.get());r.ln=242;this.mthRESETMAINTITLE();}r.ln=245;m.APPLICATIONIDENTIFIER.setAlignment("LEFT");}r.ln=247;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ClickHereLeftTimer.Tick",251);r.ln=251;{r.ln=253;m.CLICKHERELEFTTIMER.setInterval(0);r.ln=257;if(l.n.gt(m.CLICKHERESTARTEDCOUNT.get(),10)){r.ln=258;this.mthKILLCLICKHEREBANNER();r.e();return;}r.ln=264;if(l.b.eq(m.CLICKHERELEFTICON.getVisible(),true))
{r.ln=267;m.ATTACHITEMCLICKHERELEFT.setMarginLeft(l.sub(m.ATTACHITEMCLICKHERELEFT.getMarginLeft(),1));r.ln=271;if(l.n.le(m.ATTACHITEMCLICKHERELEFT.getMarginLeft(),4)){r.ln=273;m.CLICKHERELEFTICON.setVisible(false);r.ln=275;m.CURRENTTITLEPREFIX.set(m.CLICKHERESAVEDIDENTIFIER.get());r.ln=276;this.mthRESETMAINTITLE();r.ln=278;m.CLICKHERERIGHTTIMER.setInterval(m.CLICKHERETIMERSHORTINTERVAL.get());}else{r.ln=283;m.CLICKHERELEFTTIMER.setInterval(50);}}else{r.ln=291;m.CLICKHERELEFTICON.setVisible(true);
r.ln=293;m.CLICKHERESAVEDIDENTIFIER.set(m.APPLICATIONIDENTIFIER.get());r.ln=295;m.CURRENTTITLEPREFIX.set(m.USYSTEM.ref.getUMTXTVALUES("CLICKTOSTART"));r.ln=296;this.mthRESETMAINTITLE();r.ln=297;m.APPLICATIONIDENTIFIER.setAlignment("LEFT");r.ln=299;m.CLICKHERESTARTEDCOUNT.set(l.add(m.CLICKHERESTARTEDCOUNT.get(),1));r.ln=300;m.ATTACHITEMCLICKHERELEFT.setMarginLeft(100);r.ln=301;m.CLICKHERELEFTTIMER.setInterval(50);}}r.ln=306;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ClickHereRightTimer.Tick",310);
r.ln=310;{r.ln=312;m.CLICKHERERIGHTTIMER.setInterval(0);r.ln=316;if(l.n.gt(m.CLICKHERESTARTEDCOUNT.get(),10)){r.ln=317;this.mthKILLCLICKHEREBANNER();r.e();return;}r.ln=323;if(l.b.eq(m.CLICKHERERIGHTICON.getVisible(),true)){r.ln=326;m.ATTACHITEMCLICKHERERIGHT.setMarginRight(l.sub(m.ATTACHITEMCLICKHERERIGHT.getMarginRight(),1));r.ln=329;if(l.n.le(m.ATTACHITEMCLICKHERERIGHT.getMarginRight(),4)){r.ln=331;m.CLICKHERERIGHTICON.setVisible(false);r.ln=332;m.CURRENTTITLEPREFIX.set(m.CLICKHERESAVEDIDENTIFIER.get());
r.ln=333;this.mthRESETMAINTITLE();r.ln=334;m.APPLICATIONIDENTIFIER.setAlignment("LEFT");r.ln=336;m.CLICKHERELEFTTIMER.setInterval(m.CLICKHERETIMERSHORTINTERVAL.get());}else{r.ln=342;m.CLICKHERERIGHTTIMER.setInterval(50);}}else{r.ln=350;m.CLICKHERERIGHTICON.setVisible(true);r.ln=351;m.CLICKHERESAVEDIDENTIFIER.set(m.APPLICATIONIDENTIFIER.get());r.ln=353;m.CURRENTTITLEPREFIX.set(m.USYSTEM.ref.getUMTXTVALUES("TYPETOSTART"));r.ln=354;this.mthRESETMAINTITLE();r.ln=356;m.APPLICATIONIDENTIFIER.setAlignment("RIGHT");
r.ln=358;m.CLICKHERESTARTEDCOUNT.set(l.add(m.CLICKHERESTARTEDCOUNT.get(),1));r.ln=359;m.ATTACHITEMCLICKHERERIGHT.setMarginRight(100);r.ln=360;m.CLICKHERERIGHTTIMER.setInterval(50);}}r.ln=365;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.CurrentThemeAltered",370);r.ln=370;{r.ln=371;this.mthSETBASICSTYLE(m.CURRENTSTYLEREFERENCEOBJECT);}r.ln=372;r.e();};cO.mthSETBASICSTYLE=function(p0){var m=this.REF,r=l.mR(this,cO,"SetBasicStyle",375);var P0=r.cPD("REFERENCE");P0=p0;r.ln=375;
{r.ln=378;if((P0!=null)){r.ln=380;m.BACKGROUNDANDFONTCOLORS.setNormBackColor(P0.getUCURRENTTHEMECOLOR());r.ln=382;m.BACKGROUNDANDFONTCOLORS.setFontSize(m.USYSTEM.ref.getCURRENTTHEME().getMAINTITLEFONTSTYLE().getFontSize());r.ln=383;m.BACKGROUNDANDFONTCOLORS.setTextColor(m.USYSTEM.ref.getCURRENTTHEME().getMAINTITLEFONTSTYLE().getTextColor());r.ln=385;this.srCURRENTSTYLEREFERENCEOBJECT(P0);}}r.ln=388;r.e();};cO.mthMAKESYSTEMMENU=function(){var m=this.REF,r=l.mR(this,cO,"MakeSystemMenu",391);var C0=r.cD("C0");
var C1=r.cD("C1");var C2=r.cF("VIEWCOUNT",Fd.F1.Dc);C2.iC();r.ln=391;{r.ln=398;m.MAINSYSTEMPANEL.mthUINITIALIZE(m.MAINSYSTEMPANELPOPOVER);r.ln=400;m.MAINSYSTEMPANEL.mthUADDTABSHEET(m.UFRAMEWORK.ref.getUCAPTION(),m.UFRAMEWORK.ref.getUHINT(),m.UFRAMEWORK.ref.getUVLFONEIMAGE(),m.UFRAMEWORK.ref.getUIMAGESOURCE());r.ln=403;{var l1=m.UFRAMEWORK.ref.getUCHILDAPPLICATIONS().cI();while(l1.step()){var APPLICATION=r.sR("APPLICATION",l1.item());r.ln=406;m.MAINSYSTEMPANEL.mthUADDITEM(APPLICATION);r.ln=410;C0=r.sR("C0",l.cAs("VF_UI023O"));
r.ln=411;m.COLLECTBUSINESSOBJECTPANELS.mthINSERT(C0);r.ln=413;C1=r.sR("C1",l.cAs("VF_UI021O"));r.ln=414;m.COLLECTBUSINESSOBJECTPANELPOPOVERS.set(APPLICATION.getUIDENTIFIER(),C1);r.ln=416;C0.mthUINITIALIZE(C1);r.ln=418;C2.set(0);r.ln=419;{var l2=APPLICATION.getCHILDVF_FP018O().cI();while(l2.step()){var OBJVF_FP018=r.sR("OBJVF_FP018",l2.item());r.ln=420;if(OBJVF_FP018.getHASMENUSELECTABLECHILD()){r.ln=422;C2.set(l.add(C2.get(),1));r.ln=424;C0.mthUADDTABSHEET(OBJVF_FP018.getUCAPTION(),OBJVF_FP018.getUHINT(),OBJVF_FP018.getUVLFONEIMAGE(),OBJVF_FP018.getUIMAGESOURCE());
r.ln=426;{var l3=OBJVF_FP018.getCHILDVF_FR003O().cI();while(l3.step()){var OBJVF_FR003O=r.sR("OBJVF_FR003O",l3.item());r.ln=427;if(OBJVF_FR003O.getUMENUSELECT()){r.ln=428;C0.mthUADDITEM(OBJVF_FR003O);}r.ln=430;}l3.end();r.dR("OBJVF_FR003O");}r.ln=433;if(l.n.eq(C2.get(),1)){r.ln=434;{var l3=m.UFRAMEWORK.ref.getUCHILDAPPLICATIONS().cI();while(l3.step()){var APPLICATION2=r.sR("APPLICATION2",l3.item());r.ln=435;if((APPLICATION2!==APPLICATION)){r.ln=436;C0.mthUADDBOTTOMTEXTITEM(APPLICATION2);}r.ln=438;
}l3.end();r.dR("APPLICATION2");}r.ln=439;C0.mthUADDBOTTOMTEXTITEM(m.UFRAMEWORK.ref);}}r.ln=444;}l2.end();r.dR("OBJVF_FP018");}r.ln=446;C0.mthUFINALIZELAYOUT();r.ln=448;C1.mthUINITIALIZE(C0);r.ln=450;}l1.end();r.dR("APPLICATION");}r.ln=454;m.MAINSYSTEMPANEL.mthUADDITEM(m.UFRAMEWORK.ref);r.ln=456;m.MAINSYSTEMPANEL.mthUFINALIZELAYOUT();r.ln=459;m.MAINSYSTEMPANELPOPOVER.mthUINITIALIZE(m.MAINSYSTEMPANEL);}r.ln=461;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestApplicationTabDisplay",464);
var P0=Ps.r("VF_FP002OREFERENCE");r.ln=464;{r.ln=466;m.CURRENTTITLEPREFIX.set(P0.getUCAPTION());r.ln=467;this.mthRESETMAINTITLE();r.ln=469;this.mthSETBASICSTYLE(P0);r.ln=471;this.srCURRENTAPPLICATION(P0);r.ln=473;this.mthADDBREADCRUMB(P0);}r.ln=475;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestFrameworkTabDisplay",478);r.ln=478;{r.ln=480;m.CURRENTTITLEPREFIX.set(m.UFRAMEWORK.ref.getUCAPTION());r.ln=481;this.mthRESETMAINTITLE();r.ln=483;this.mthSETBASICSTYLE(m.UFRAMEWORK.ref);
r.ln=485;this.srCURRENTAPPLICATION(null);r.ln=487;this.mthADDBREADCRUMB(m.UFRAMEWORK.ref);}r.ln=489;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestDisplayApplicationSelectionMenu",492);r.ln=492;{r.ln=494;this.mthKILLCLICKHEREBANNER();r.ln=496;if(m.MAINSYSTEMPANEL.getHASUSABLECONTENT()){r.ln=497;m.MAINSYSTEMPANEL.mthGETREADYTODISPLAY();r.ln=498;m.MAINSYSTEMPANELPOPOVER.mthUSHOWPOPOVER(u,u,u,u,"",false,u);}}r.ln=501;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MainMenuIcon.WasClicked",504);
r.ln=504;{r.ln=506;this.mthKILLCLICKHEREBANNER();r.ln=508;if(m.MAINSYSTEMPANEL.getHASUSABLECONTENT()){r.ln=509;m.MAINSYSTEMPANELPOPOVER.mthUSHOWPOPOVER(u,u,u,u,"",false,u);}}r.ln=512;r.e();};function e8(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ApplicationIdentifier.Click",515);r.ln=515;{r.ln=517;this.mthKILLCLICKHEREBANNER();r.ln=519;if((m.CURRENTAPPLICATION==null)){r.ln=521;if(m.MAINSYSTEMPANEL.getHASUSABLECONTENT()){r.ln=522;m.MAINSYSTEMPANELPOPOVER.mthUSHOWPOPOVER(u,u,u,u,"",false,u);}}else{
r.ln=527;this.mthUSHOWBUSINESSOBJECTSELECTIONMENU(m.CURRENTAPPLICATION);}}r.ln=531;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#USystem.RequestDisplayBusinessObjectSelectionMenu",534);var P0=Ps.r("VF_FP002OREFERENCE");r.ln=534;{r.ln=536;this.mthKILLCLICKHEREBANNER();r.ln=538;this.mthUSHOWBUSINESSOBJECTSELECTIONMENU(P0);}r.ln=540;r.e();};cO.mthUSHOWBUSINESSOBJECTSELECTIONMENU=function(p0){var m=this.REF,r=l.mR(this,cO,"uShowBusinessObjectSelectionMenu",544);var P0=r.cPD("FORAPPLICATION");P0=p0;
var C0=r.cD("C0");r.ln=544;{r.ln=549;if((P0!=null)){r.ln=551;this.mthKILLCLICKHEREBANNER();r.ln=553;C0=r.sR("C0",m.COLLECTBUSINESSOBJECTPANELPOPOVERS.get(P0.getUIDENTIFIER()));r.ln=555;if((C0!=null)){r.ln=557;if(l.cast(C0.getCURRENTCONTENT(),"VF_UI023O").getHASUSABLECONTENT()){r.ln=559;l.cast(C0.getCURRENTCONTENT(),"VF_UI023O").mthGETREADYTODISPLAY();r.ln=561;C0.mthUSHOWPOPOVER(u,u,u,u,"",false,u);}}}}r.ln=569;r.e();};function e10(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MainSystemPanel.uObjectSelected",572);
var P0=Ps.r("WITHREFERENCE");r.ln=572;{r.ln=574;this.mthKILLCLICKHEREBANNER();r.ln=576;m.MAINSYSTEMPANELPOPOVER.mthUCLOSEPOPOVER();r.ln=578;if(l.Ko(P0,"VF_FP001O")){r.ln=579;m.USYSTEM.ref.mthDISPLAYFRAMEWORKTAB();r.e();return;}r.ln=583;if(l.Ko(P0,"VF_FP002O")){r.ln=584;m.USYSTEM.ref.mthDISPLAYAPPLICATIONTAB(l.cast(P0,"VF_FP002O"),"VF_UI022O");r.ln=585;if(l.n.eq(l.cast(P0,"VF_FP002O").getVF_UI002TABSHEETMANAGER().getVF_AC005OVISIBLEPANECOUNT(),0)){r.ln=586;this.mthUSHOWBUSINESSOBJECTSELECTIONMENU(l.cast(P0,"VF_FP002O"));
}r.e();return;}}r.ln=591;r.e();};function e11(BUSINESSOBJECTPANEL,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectBusinessObjectPanels<>.uObjectSelected",595);var P0=Ps.r("WITHREFERENCE");r.ln=595;{r.ln=599;{var l1=m.COLLECTBUSINESSOBJECTPANELPOPOVERS.cI();while(l1.step()){var POPOVER=r.sR("POPOVER",l1.item());var INDEX=r.sR("INDEX",l1.key());r.ln=600;if((POPOVER.getCURRENTCONTENT()===BUSINESSOBJECTPANEL)){r.ln=601;POPOVER.mthUCLOSEPOPOVER();r.ln=602;break;}r.ln=604;}l1.end();r.dR("POPOVER");r.dR("INDEX");
}r.ln=608;if(l.Io(P0,"VF_FR003O")){r.ln=609;m.USYSTEM.ref.mthSELECTBUSINESSOBJECTINSTANCE(l.cast(P0,"VF_FR003O"),"VF_UI022O",true);r.e();return;}r.ln=613;if(l.Io(P0,"VF_FP002O")){r.ln=614;m.USYSTEM.ref.mthDISPLAYAPPLICATIONTAB(l.cast(P0,"VF_FP002O"),"VF_UI022O");r.e();return;}r.ln=618;if(l.Io(P0,"VF_FP001O")){r.ln=619;m.USYSTEM.ref.mthDISPLAYFRAMEWORKTAB();r.e();return;}}r.ln=623;r.e();};function e12(VF_UI023OREFERENCE,Ps){var m=this.REF,r=l.eR(this,cO,"#MainSystemPanel.uOpenPaneSelected #CollectBusinessObjectPanels<>.uOpenPaneSelected",626);
var P0=Ps.r("WITHREFERENCE");var C0=r.cD("C0");var C1=r.cD("C1");r.ln=626;{r.ln=631;VF_UI023OREFERENCE.getPOPOVERMANAGER().mthUCLOSEPOPOVER();r.ln=633;C1=r.sR("C1",P0.getNOMINALVF_AC009OOWNER());r.ln=635;if(l.Io(C1,"VF_FP002O")){r.ln=636;C0=r.sR("C0",l.cast(C1,"VF_FP002O"));}r.ln=639;if(l.Io(C1,"VF_FR003O")){r.ln=640;C0=r.sR("C0",C1.getOWNERVF_FP002OBJECT());}r.ln=646;if((C0==null)){r.ln=647;m.USYSTEM.ref.mthDISPLAYFRAMEWORKTAB();}else{r.ln=649;m.USYSTEM.ref.mthDISPLAYAPPLICATIONTAB(C0,"VF_UI022O.2");
}r.ln=653;P0.mthURESTORE(P0.getDEFAULTTABLETMODETRANSITION(),true);}r.ln=656;r.e();};cO.mthSHOWSETTINGSDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowSettingsDetails",660);var P0=r.cPD("ADDITIONALREQUESTDETAILS");P0=p0;r.ln=660;{r.ln=663;this.mthKILLCLICKHEREBANNER();r.ln=665;if((m.SETTINGSPANELCONTENT==null)){r.ln=667;this.srSETTINGSPANELCONTENT(l.cFrN(m.UFRAMEWORK.ref.getUSETTINGSPANE(),"VF_AC030O"));r.ln=669;if((m.SETTINGSPANELCONTENT!=null)){r.ln=671;m.SETTINGSPANELCONTENT.setAVFRAMEWORKMANAGER(m.USYSTEM.ref.getUFRAMEWORKMANAGER());
r.ln=673;m.SETTINGSPANELCONTENT.mthUINITIALIZE();r.ln=675;m.SETTINGSPANELPOPOVER.mthUINITIALIZE(m.SETTINGSPANELCONTENT);r.ln=677;m.USYSTEM.ref.mthUPDATEMAJORTRACKEDOBJECTDETAILS(m.SETTINGSPANELCONTENT.getASSOCIATEDVF_SY185OTRACKINGITEM(),m.SETTINGSPANELCONTENT.getComponentPatternName(),"Settings Pane");}else{r.ln=681;l.WEB().mthALERT(l.cat(l.cat("VF_UI022O: Attempt to load settings panel with component Id ",m.UFRAMEWORK.ref.getUSETTINGSPANE())," failed. Check that a component with that Id exists, noting that an Id is not the same as the name. Check that it has ancestor VF_AC030O."));
r.e();return;}}r.ln=689;m.SETTINGSPANELCONTENT.mthUDISPLAYREQUESTED(P0);r.ln=691;m.SETTINGSPANELPOPOVER.mthUSHOWPOPOVER(m.SETTINGSICON,u,u,u,m.SETTINGSPANELCONTENT.getUTRANSITION(),false,u);}r.ln=693;r.e();};function e13(SENDER,Ps){var r=l.eR(this,cO,"#SettingsIcon.WasClicked",697);r.ln=697;{r.ln=699;this.mthSHOWSETTINGSDETAILS(null);}r.ln=701;r.e();};function e14(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestSettingsIconClicked",704);var P0=Ps.r("ADDITIONALREQUESTDETAILS");r.ln=704;{
r.ln=706;if(m.SETTINGSICON.getVisible()){r.ln=708;this.mthSHOWSETTINGSDETAILS(P0);}}r.ln=712;r.e();};cO.mthSHOWASSISTANCEDETAILS=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowAssistanceDetails",716);var P0=r.cPD("ADDITIONALREQUESTDETAILS");P0=p0;r.ln=716;{r.ln=719;this.mthKILLCLICKHEREBANNER();r.ln=721;if((m.ASSISTANCEPANELCONTENT==null)){r.ln=723;this.srASSISTANCEPANELCONTENT(l.cFrN(m.UFRAMEWORK.ref.getUASSISTANCEPANE(),"VF_AC031O"));r.ln=725;if((m.ASSISTANCEPANELCONTENT!=null)){r.ln=727;m.ASSISTANCEPANELCONTENT.setAVFRAMEWORKMANAGER(m.USYSTEM.ref.getUFRAMEWORKMANAGER());
r.ln=729;m.ASSISTANCEPANELCONTENT.mthUINITIALIZE();r.ln=731;m.ASSISTANCEPANELPOPOVER.mthUINITIALIZE(m.ASSISTANCEPANELCONTENT);r.ln=733;m.USYSTEM.ref.mthUPDATEMAJORTRACKEDOBJECTDETAILS(m.ASSISTANCEPANELCONTENT.getASSOCIATEDVF_SY185OTRACKINGITEM(),m.ASSISTANCEPANELCONTENT.getComponentPatternName(),"Assistance Pane");}else{r.ln=738;l.WEB().mthALERT(l.cat(l.cat("VF_UI022O: Attempt to load assistance panel with component Id ",m.UFRAMEWORK.ref.getUASSISTANCEPANE())," failed. Check that a component with that Id exists, noting that an Id is not the same as the name. Check that it has ancestor VF_AC031O."));
r.e();return;}}r.ln=747;m.ASSISTANCEPANELCONTENT.mthUDISPLAYREQUESTED(P0);r.ln=749;m.ASSISTANCEPANELPOPOVER.mthUSHOWPOPOVER(m.ASSISTANCEICON,u,u,u,m.ASSISTANCEPANELCONTENT.getUTRANSITION(),false,u);}r.ln=751;r.e();};function e15(SENDER,Ps){var r=l.eR(this,cO,"#AssistanceIcon.WasClicked",755);r.ln=755;{r.ln=757;this.mthSHOWASSISTANCEDETAILS(null);}r.ln=759;r.e();};function e16(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestAssistanceIconClicked",762);var P0=Ps.r("ADDITIONALREQUESTDETAILS");
r.ln=762;{r.ln=764;if(m.ASSISTANCEICON.getVisible()){r.ln=766;this.mthSHOWASSISTANCEDETAILS(P0);}}r.ln=770;r.e();};cO.mthADDBREADCRUMB=function(p0){var m=this.REF,r=l.mR(this,cO,"AddBreadCrumb",773);var P0=r.cPD("ITEM");P0=p0;r.ln=773;{r.ln=776;if(l.tB(m.BREADCRUMBRECORDINGENABLED.get())){r.ln=778;if(l.n.eq(m.BREADCRUMBTRAIL.getItemCount(),0)){r.ln=779;m.BREADCRUMBTRAIL.mthINSERT(P0);r.ln=780;m.BREADCRUMBTRAILPOSITION.set(m.BREADCRUMBTRAIL.getItemCount());}else{r.ln=782;if((P0!==m.BREADCRUMBTRAIL.get(m.BREADCRUMBTRAIL.getItemCount())))
{r.ln=783;m.BREADCRUMBTRAIL.mthINSERT(P0);r.ln=784;m.BREADCRUMBTRAILPOSITION.set(m.BREADCRUMBTRAIL.getItemCount());}}}r.ln=790;this.mthSETGOFOWARDGOBACKICONS();}r.ln=792;r.e();};cO.mthSETGOFOWARDGOBACKICONS=function(){var m=this.REF,r=l.mR(this,cO,"SetGoFowardGoBackIcons",795);var C0=r.cD("C0");r.ln=795;{r.ln=799;m.GOBACKICON.setVisible(l.n.gt(m.BREADCRUMBTRAILPOSITION.get(),1));r.ln=801;if(m.GOBACKICON.getVisible()){r.ln=802;C0=r.sR("C0",m.BREADCRUMBTRAIL.get(l.sub(m.BREADCRUMBTRAILPOSITION.get(),1)));
r.ln=803;m.GOBACKICON.setUSEHINT(C0.getUCAPTION());}r.ln=806;m.GOFORWARDICON.setVisible(l.n.lt(m.BREADCRUMBTRAILPOSITION.get(),m.BREADCRUMBTRAIL.getItemCount()));r.ln=808;if(m.GOFORWARDICON.getVisible()){r.ln=809;C0=r.sR("C0",m.BREADCRUMBTRAIL.get(l.add(m.BREADCRUMBTRAILPOSITION.get(),1)));r.ln=810;m.GOFORWARDICON.setUSEHINT(C0.getUCAPTION());}}r.ln=813;r.e();};cO.mthGOTOBREADCRUMB=function(){var m=this.REF,r=l.mR(this,cO,"GotoBreadCrumb",816);var C0=r.cD("C0");r.ln=816;{r.ln=820;if(l.n.le(m.BREADCRUMBTRAILPOSITION.get(),0))
{r.ln=821;m.BREADCRUMBTRAILPOSITION.set(0);r.e();return;}r.ln=825;if(l.n.gt(m.BREADCRUMBTRAILPOSITION.get(),m.BREADCRUMBTRAIL.getItemCount())){r.ln=826;m.BREADCRUMBTRAILPOSITION.set(m.BREADCRUMBTRAIL.getItemCount());}r.ln=829;C0=r.sR("C0",m.BREADCRUMBTRAIL.get(m.BREADCRUMBTRAILPOSITION.get()));r.ln=831;m.BREADCRUMBRECORDINGENABLED.set(false);r.ln=833;if(l.Io(C0,"VF_FP001O")){r.ln=834;m.USYSTEM.ref.mthDISPLAYFRAMEWORKTAB();}else{r.ln=836;if(l.Io(C0,"VF_FP002O")){r.ln=837;m.USYSTEM.ref.mthDISPLAYAPPLICATIONTAB(l.cast(C0,"VF_FP002O"),"VF_UI022O");
}}r.ln=841;m.BREADCRUMBRECORDINGENABLED.set(true);r.ln=843;this.mthSETGOFOWARDGOBACKICONS();}r.ln=845;r.e();};function e17(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#GoBackIcon.WasClicked",849);r.ln=849;{r.ln=851;this.mthKILLCLICKHEREBANNER();r.ln=853;m.BREADCRUMBTRAILPOSITION.set(l.sub(m.BREADCRUMBTRAILPOSITION.get(),1));r.ln=855;this.mthGOTOBREADCRUMB();}r.ln=857;r.e();};function e18(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#GoForwardIcon.WasClicked",861);r.ln=861;{r.ln=863;this.mthKILLCLICKHEREBANNER();
r.ln=865;m.BREADCRUMBTRAILPOSITION.set(l.add(m.BREADCRUMBTRAILPOSITION.get(),1));r.ln=867;this.mthGOTOBREADCRUMB();}r.ln=869;r.e();};function e19(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.RequestAlterMainWindowSuffix",872);var P0=Ps.r("TO");r.ln=872;{r.ln=874;m.CURRENTTITLESUFFIX.set(P0.get());r.ln=876;this.mthRESETMAINTITLE();}r.ln=878;r.e();};cO.mthRESETMAINTITLE=function(){var m=this.REF,r=l.mR(this,cO,"ResetMainTitle",881);r.ln=881;{r.ln=883;m.APPLICATIONIDENTIFIER.setCaption(l.add(l.cat(m.CURRENTTITLEPREFIX.get()," "),m.CURRENTTITLESUFFIX.get()));
}r.ln=885;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srCURRENTAPPLICATION=function(rn){this.sR("CURRENTAPPLICATION",rn);};cO.srSETTINGSPANELCONTENT=function(rn){this.sR("SETTINGSPANELCONTENT",rn);};cO.srASSISTANCEPANELCONTENT=function(rn){this.sR("ASSISTANCEPANELCONTENT",rn);};cO.srCURRENTSTYLEREFERENCEOBJECT=function(rn){this.sR("CURRENTSTYLEREFERENCEOBJECT",rn);
};},{rc:["VF_SY001O","VF_FP001O","VF_UI005O","VF_UI026O","VF_UI023O","VF_UI021O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_DC.UnicodeString","PRIM_ACOL","PRIM_FLD","PRIM_BOLN","PRIM_KCOL","PRIM_VS.Style","PRIM_TIMR"],dc:["VF_FP002O","VF_AC030O","VF_AC031O","VF_AC009O","VF_UI023O","VF_UI021O","VF_AC001O"]});