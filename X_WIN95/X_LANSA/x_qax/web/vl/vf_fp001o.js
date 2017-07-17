﻿LANSA.addComponent({id:"VF_FP001O",ot:"rp",tp:"Reusable Part",de:"\OC=Framework Object (VLF-ONE)",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELUSET",ft:"A",ln:10,dc:0,lb:"User Set",h1:"User",h2:"Set",h3:"",de:"User Set",dv:"",ia:["FE"]},F2:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F3:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]},F4:{nm:"VF_ELOBJ",ft:"A",ln:10,dc:0,lb:"LANSA Object Na",h1:"LANSA",h2:"Object",h3:"Name",de:"LANSA Object Name",dv:"",ia:["FE"]},F5:{nm:"VF_ELNCHR",ft:"N",ln:512,dc:0,lb:"NCHAR field",h1:"NCHAR",h2:"field",h3:"",de:"NCHAR field",dv:"",ia:["FE","LC"]},F6:{nm:"VF_ELPORT",
ft:"A",ln:6,dc:0,lb:"Telnet Port",h1:"Telnet",h2:"Port",h3:"",de:"Telnet Port",dv:""},F7:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC009O",fd:Fd,pt:{uChildApplications:{da:"r"},uChildCommands:{da:"r"},uChildToolBarItems:
{da:"r"},uUserPropertySet:{da:"r"},uVLFONEBackPanel:{da:"r"},uVLFONETopSlider:{da:"r"},uVLFONEBottomSlider:{da:"r"},uVLFONELeftSlider:{da:"r"},uVLFONERightSlider:{da:"r"},uSettingsPane:{da:"r"},uAssistancePane:{da:"r"},uMRUWidth:{da:"r"},uMRULimit:{da:"r"},uTS2Language:{da:"r"},UsingFrameworkAuthority:{da:"rw"},uVersionP1:{da:"r"},uVersionP2:{da:"r"},uVersionP3:{da:"r"},uVersionP4:{da:"r"},uVersionAutoInc:{da:"r"},uVersionAbout:{da:"r"},uActivityCountOff:{da:"r"},uActivityCountOn:{da:"r"},uTechSupport:
{da:"r"},uABoutImageURL_Light:{da:"r"},uABoutImageURL_Dark:{da:"r"},uCenterAboutPanel:{da:"r"},uRAMPStamp:{da:"r"},uAboutLine:{da:"na"},uAboutLineMax:{da:"r"},uSignOffTimeOut:{da:"r"},uSignOnTimeOut:{da:"r"},uMTXTLoader:{da:"r"},uMaxWebPwdLen:{da:"r"},uErrorEmailAddress:{da:"r"},uApplyExtendedValidation:{da:"r"},uIssueWarning:{da:"rw"},uVLFONEUsrValFunc:{da:"r"},uUserIIPVLFONE:{da:"r"},uRAMPTS2:{da:"r"},uRTSIPAddress:{da:"na"},uRTSPortNumber:{da:"na"},uRTSLoadPath:{da:"na"},uRTSPrivateSet:{da:"na"
},uRTSHTTPSExec:{da:"na"},uRTSUsePrivateShared:{da:"na"},uIBMIServerName:{da:"r"},uIBMIPort:{da:"r"},uMonitorDescriptions:{da:"r"},uMonitorWidths:{da:"r"},uMonitorHeights:{da:"r"},IsShippedDemo:{da:"r"}},mt:{uEnrollChild:{ps:{"uReference":{pt:"i"}}},Get_MonitorDescription:{ps:{"MonitorInstance":{pt:"i"},"MonitorDesc":{pt:"o"}}},Get_MonitorHeight:{ps:{"MonitorInstance":{pt:"i"},"MonitorH":{pt:"o"}}},Get_MonitorWidth:{ps:{"MonitorInstance":{pt:"i"},"MonitorW":{pt:"o"}}},SetProperty:{ps:{"P":{pt:"i"
}}},SignalUserDeleted:{ps:{"UserIdentifier":{pt:"i"}}},SignalUserCreatedorChanged:{ps:{"UserIdentifier":{pt:"i"},"UserName":{pt:"i"},"UserCaption":{pt:"i"},"IsAdminstrator":{pt:"i"},"IsDisabled":{pt:"i"}}}},ev:{UserDeleted:{ps:{"UserIdentifier":{pt:"i"}}},UserCreatedorChanged:{ps:{"UserIdentifier":{pt:"i"},"UserName":{pt:"i"},"UserCaption":{pt:"i"},"IsAdminstrator":{pt:"i"},"IsDisabled":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_FP001O",Fd);var C0=this.cA("UCONFIGURATION","VF_FP501O");
var C1=this.cR("UCHILDAPPLICATIONS","PRIM_ACOL");var C2=this.cR("UCHILDCOMMANDS","PRIM_ACOL");var C3=this.cR("UCHILDTOOLBARITEMS","PRIM_ACOL");var C4=this.cF("UUSERPROPERTYSET",Fd.F1.Dc);var C5=this.cR("UVLFONEBACKPANEL","PRIM_ALPH");var C6=this.cR("UVLFONETOPSLIDER","PRIM_ALPH");var C7=this.cR("UVLFONEBOTTOMSLIDER","PRIM_ALPH");var C8=this.cR("UVLFONELEFTSLIDER","PRIM_ALPH");var C9=this.cR("UVLFONERIGHTSLIDER","PRIM_ALPH");var C10=this.cR("USETTINGSPANE","PRIM_ALPH");var C11=this.cR("UASSISTANCEPANE","PRIM_ALPH");
var C12=this.cF("UMRUWIDTH",Fd.F2.Dc);var C13=this.cF("UMRULIMIT",Fd.F2.Dc);var C14=this.cR("UTS2LANGUAGE","PRIM_ALPH");var C15=this.cR("USINGFRAMEWORKAUTHORITY","PRIM_BOLN");var C16=this.cF("UVERSIONP1",Fd.F3.Dc);var C17=this.cF("UVERSIONP2",Fd.F3.Dc);var C18=this.cF("UVERSIONP3",Fd.F3.Dc);var C19=this.cF("UVERSIONP4",Fd.F3.Dc);var C20=this.cR("UVERSIONAUTOINC","PRIM_BOLN");var C21=this.cR("UVERSIONABOUT","PRIM_BOLN");var C22=this.cF("UACTCOUNTOFF",Fd.F3.Dc);var C23=this.cF("UACTCOUNTON",Fd.F3.Dc);
var C24=this.cR("UTECHSUPPORT","PRIM_DC","UnicodeString");var C25=this.cR("UABOUTIMAGEURL_LIGHT","PRIM_DC","UnicodeString");var C26=this.cR("UABOUTIMAGEURL_DARK","PRIM_DC","UnicodeString");var C27=this.cR("UCENTERABOUTPANEL","PRIM_BOLN");var C28=this.cR("URAMPSTAMP","PRIM_ALPH");var C29=this.cR("ABOUTLINE","PRIM_KCOL");var C30=this.cF("UABOUTLINEMAX",Fd.F3.Dc);var C31=this.cF("USIGNOFFTIMEOUT",Fd.F3.Dc);var C32=this.cF("USIGNONTIMEOUT",Fd.F3.Dc);var C33=this.cF("UMTXTLOADER",Fd.F4.Dc);var C34=this.cF("UMAXWEBPWDLEN",Fd.F3.Dc);
var C35=this.cF("UERROREMAILADDRESS",Fd.F5.Dc);var C36=this.cR("UAPPLYEXTENDEDVALIDATION","PRIM_BOLN");var C37=this.cF("UISSUEWARNING",Fd.F3.Dc);var C38=this.cF("UVLFONEUSRVALFUNC",Fd.F4.Dc);var C39=this.cF("UUSERIIPVLFONE",Fd.F4.Dc);var C40=this.cR("URAMPTS2","PRIM_BOLN");var C41=this.cR("URTSIPADDRESS","PRIM_ALPH");var C42=this.cR("URTSPORTNUMBER","PRIM_ALPH");var C43=this.cR("URTSLOADPATH","PRIM_ALPH");var C44=this.cR("URTSPRIVATESET","PRIM_ALPH");var C45=this.cR("URTSHTTPSEXEC","PRIM_BOLN");var C46=this.cR("URTSUSEPRIVATESHARED","PRIM_BOLN");
var C47=this.cR("UIBMISERVERNAME","PRIM_ALPH");var C48=this.cF("UIBMIPORT",Fd.F6.Dc);this.cD("MONITORDESCRIPTION");this.cD("MONITORHEIGHT");this.cD("MONITORWIDTH");var C52=this.cR("UMONITORDESC","PRIM_ACOL");var C53=this.cR("UMONITORWIDTH","PRIM_ACOL");var C54=this.cR("UMONITORHEIGHT","PRIM_ACOL");var C55=this.cR("ISSHIPPEDDEMO","PRIM_BOLN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setCollects("VF_FP002O");C1.iC();C2.setCollects("VF_FP009O");C2.iC();C3.setCollects("VF_FP012O");C3.iC();C4.aD();
C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();C9.iC();C10.iC();C11.iC();C12.aD();C12.iC();C13.aD();C13.iC();C14.iC();C15.iC();C16.aD();C16.iC();C17.aD();C17.iC();C18.aD();C18.iC();C19.aD();C19.iC();C20.iC();C21.iC();C22.aD();C22.iC();C23.aD();C23.iC();C24.iC();C25.iC();C26.iC();C27.iC();C28.iC();C29.setStyle("COLLECTION");C29.setCollects("PRIM_DC.UnicodeString");C29.setKeyedBy(Fd.F3.Dc);C29.iC();C30.aD();C30.iC();C31.aD();C31.iC();C32.aD();C32.iC();C33.aD();C33.iC();C34.aD();C34.iC();C35.aD();C35.iC();
C36.iC();C37.aD();C37.iC();C38.aD();C38.iC();C39.aD();C39.iC();C40.iC();C41.iC();C42.iC();C43.iC();C44.iC();C45.iC();C46.iC();C47.iC();C48.aD();C48.iC();C52.setCollects("PRIM_ALPH");C52.iC();C53.setCollects("VF_ELINDX");C53.iC();C54.setCollects("VF_ELINDX");C54.iC();C55.iC();this.aH("CREATEINSTANCE",this,e1);}});var cA=cO.aN.prototype;function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",191);r.ln=191;{r.ln=193;m.UMAXWEBPWDLEN.set(10);r.ln=194;m.UMTXTLOADER.set("UFU0003");
r.ln=195;m.UISSUEWARNING.set(10);r.ln=196;m.UVLFONEUSRVALFUNC.set("UF_OLOGON");r.ln=197;m.UUSERIIPVLFONE.set("UF_OSYSTM");r.ln=198;m.UCENTERABOUTPANEL.set(true);r.ln=199;m.UUSERPROPERTYSET.set("SYSTEM");}r.ln=201;r.e();};cO.mthGET_UABOUTLINE=function(p1){var m=this.REF,r=l.pR(this,cO,"Get_uAboutLine",205);var P0=r.cPD("LINE");var P1=r.cPF("LINENUMBER",Fd.F3.Dc);P1.set(p1);r.ln=205;{r.ln=210;P0=r.sR("P0",m.ABOUTLINE.get(P1.get()));}r.ln=211;return r.rR(P0);};cO.mthGET_URTSIPADDRESS=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSIPAddress",214);
var P0=r.cP("RETURNVALUE","PRIM_ALPH");r.ln=214;{r.ln=217;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSIPADDRESS(),"")){r.ln=218;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSIPADDRESS());}else{r.ln=220;P0.set(m.URTSIPADDRESS.get());}}r.ln=223;return r.rV(P0.get());};cO.mthGET_URTSPORTNUMBER=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSPortNumber",226);var P0=r.cP("RETURNVALUE","PRIM_ALPH");r.ln=226;{r.ln=229;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSPORTNUMBER(),"")){r.ln=230;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSPORTNUMBER());
}else{r.ln=232;P0.set(m.URTSPORTNUMBER.get());}}r.ln=235;return r.rV(P0.get());};cO.mthGET_URTSLOADPATH=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSLoadPath",238);var P0=r.cP("RETURNVALUE","PRIM_ALPH");r.ln=238;{r.ln=241;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSLOADPATH(),"")){r.ln=242;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSLOADPATH());}else{r.ln=244;P0.set(m.URTSLOADPATH.get());}}r.ln=247;return r.rV(P0.get());};cO.mthGET_URTSPRIVATESET=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSPrivateSet",250);
var P0=r.cP("RETURNVALUE","PRIM_ALPH");r.ln=250;{r.ln=253;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSPRIVATESET(),"")){r.ln=254;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSPRIVATESET());}else{r.ln=256;P0.set(m.URTSPRIVATESET.get());}}r.ln=259;return r.rV(P0.get());};cO.mthGET_URTSHTTPSEXEC=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSHTTPSExec",262);var P0=r.cP("RETURNVALUE","PRIM_BOLN");r.ln=262;{r.ln=266;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSIPADDRESS(),"")){r.ln=267;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSHTTPSEXEC());
}else{r.ln=269;P0.set(m.URTSHTTPSEXEC.get());}}r.ln=272;return r.rV(P0.get());};cO.mthGET_URTSUSEPRIVATESHARED=function(){var m=this.REF,r=l.pR(this,cO,"Get_uRTSUsePrivateShared",275);var P0=r.cP("RETURNVALUE","PRIM_BOLN");r.ln=275;{r.ln=279;if(l.s.ne(m.UCONFIGURATION.ref.getOVERRIDERTSIPADDRESS(),"")){r.ln=280;P0.set(m.UCONFIGURATION.ref.getOVERRIDERTSUSEPRIVATESHARED());}else{r.ln=282;P0.set(m.URTSUSEPRIVATESHARED.get());}}r.ln=285;return r.rV(P0.get());};cO.mthUENROLLCHILD=function(p0){var m=this.REF,r=l.mR(this,cO,"uEnrollChild",288);
var P0=r.cPD("UREFERENCE");P0=p0;r.ln=288;{r.ln=291;cA.mthUENROLLCHILD.call(this,P0);r.ln=294;if(l.Ko(P0,"VF_FP002O")){r.ln=295;m.UCHILDAPPLICATIONS.mthINSERT(l.cast(P0,"VF_FP002O"));r.e();return;}r.ln=300;if(l.Ko(P0,"VF_FP009O")){r.ln=301;m.UCHILDCOMMANDS.mthINSERT(l.cast(P0,"VF_FP009O"));r.e();return;}r.ln=306;if(l.Ko(P0,"VF_FP012O")){r.ln=307;m.UCHILDTOOLBARITEMS.mthINSERT(l.cast(P0,"VF_FP012O"));r.e();return;}r.ln=312;if(l.Ko(P0,"VF_FP026O")){r.e();return;}r.ln=318;if(l.Ko(P0,"VF_FP027O")){r.e();
return;}}r.ln=324;r.e();};cO.mthGET_MONITORDESCRIPTION=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Get_MonitorDescription",326);var P0=r.cPF("MONITORINSTANCE",Fd.F3.Dc);var P1=r.cPD("MONITORDESC");P0.set(p0);r.ln=326;{r.ln=331;P1=r.sR("P1",m.UMONITORDESC.get(P0.get()));p1.set(P1);}r.ln=333;r.e();};cO.mthGET_MONITORHEIGHT=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Get_MonitorHeight",336);var P0=r.cPF("MONITORINSTANCE",Fd.F3.Dc);var P1=r.cPD("MONITORH");P0.set(p0);r.ln=336;{r.ln=341;this.srMONITORHEIGHT(m.UMONITORHEIGHT.get(P0.get()));
p1.set(P1);}r.ln=343;r.e();};cO.mthGET_MONITORWIDTH=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Get_MonitorWidth",345);var P0=r.cPF("MONITORINSTANCE",Fd.F3.Dc);var P1=r.cPD("MONITORW");P0.set(p0);r.ln=345;{r.ln=350;this.srMONITORWIDTH(m.UMONITORWIDTH.get(P0.get()));p1.set(P1);}r.ln=352;r.e();};cO.mthSETPROPERTY=function(p0){var m=this.REF,r=l.mR(this,cO,"SetProperty",355);var P0=r.cPD("P");P0=p0;var C0=r.cD("C0");r.ln=355;{r.ln=361;if(l.n.le(P0.getPROPERTYNUMBER(),200)){r.ln=362;cA.mthSETPROPERTY.call(this,P0);
r.e();return;}r.ln=368;{var v1=P0.getPROPERTYNUMBER();if(r.ln=370,l.n.eq(v1,202)){r.ln=371;m.UMTXTLOADER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=372,l.n.eq(v1,203)){r.ln=373;if(l.s.IsNumber(P0.getVALUE())){r.ln=374;m.USIGNONTIMEOUT.set(l.s.AsNumber(P0.getVALUE()));}}else if(r.ln=376,l.n.eq(v1,204)){r.ln=377;if(l.s.IsNumber(P0.getVALUE())){r.ln=378;m.USIGNOFFTIMEOUT.set(l.s.AsNumber(P0.getVALUE()));}}else if(r.ln=380,l.n.eq(v1,208)){r.ln=381;if(l.s.IsNumber(P0.getVALUE())){r.ln=382;m.UMAXWEBPWDLEN.set(l.s.AsNumber(P0.getVALUE()));
}}else if(r.ln=384,l.n.eq(v1,211)){r.ln=385;m.UVLFONETOPSLIDER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=386,l.n.eq(v1,212)){r.ln=387;m.UVLFONEBOTTOMSLIDER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=388,l.n.eq(v1,213)){r.ln=389;m.UVLFONELEFTSLIDER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=390,l.n.eq(v1,214)){r.ln=391;m.UVLFONERIGHTSLIDER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=392,l.n.eq(v1,215)){r.ln=393;m.USETTINGSPANE.set(l.s.AsNativeString(P0.getVALUE()));
}else if(r.ln=394,l.n.eq(v1,216)){r.ln=395;m.UASSISTANCEPANE.set(P0.getVALUE());}else if(r.ln=396,l.n.eq(v1,217)){r.ln=397;if(l.s.IsNumber(P0.getVALUE())){r.ln=398;m.UMRULIMIT.set(l.s.AsNumber(P0.getVALUE()));}}else if(r.ln=400,l.n.eq(v1,218)){r.ln=401;if(l.s.IsNumber(P0.getVALUE())){r.ln=402;m.UMRUWIDTH.set(l.s.AsNumber(P0.getVALUE()));}}else if(r.ln=404,l.n.eq(v1,220)){r.ln=405;m.UUSERIIPVLFONE.set(P0.getVALUE());}else if(r.ln=407,l.n.eq(v1,222)){r.ln=408;m.ABOUTLINE.set(P0.getINSTANCE(),l.cAs("PRIM_DC","UnicodeString"));
r.ln=409;m.ABOUTLINE.get(P0.getINSTANCE()).set(P0.getVALUE());r.ln=410;m.UABOUTLINEMAX.set(P0.getINSTANCE());}else if(r.ln=412,l.n.eq(v1,223)){r.ln=413;m.UABOUTIMAGEURL_LIGHT.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=414,l.n.eq(v1,224)){r.ln=415;m.UTECHSUPPORT.set(P0.getVALUE());}else if(r.ln=417,l.n.eq(v1,231)){r.ln=418;m.UCENTERABOUTPANEL.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=419,l.n.eq(v1,232)){r.ln=420;m.UABOUTIMAGEURL_DARK.set(l.s.AsNativeString(P0.getVALUE()));
}else if(r.ln=421,l.n.eq(v1,233)){r.ln=422;m.UERROREMAILADDRESS.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=425,l.n.eq(v1,234)){r.ln=426;m.URAMPTS2.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=428,l.n.eq(v1,235)){r.ln=429;m.URTSIPADDRESS.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=431,l.n.eq(v1,236)){r.ln=432;m.URTSPORTNUMBER.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=434,l.n.eq(v1,237)){r.ln=435;m.URTSLOADPATH.set(l.s.AsNativeString(P0.getVALUE()));}
else if(r.ln=437,l.n.eq(v1,238)){r.ln=438;m.URTSPRIVATESET.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=440,l.n.eq(v1,239)){r.ln=441;m.URTSHTTPSEXEC.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=443,l.n.eq(v1,240)){r.ln=444;m.URTSUSEPRIVATESHARED.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=446,l.n.eq(v1,241)){r.ln=447;m.URAMPSTAMP.set(P0.getVALUE());}else if(r.ln=449,l.n.eq(v1,242)){r.ln=450;m.UVLFONEBACKPANEL.set(l.s.AsNativeString(P0.getVALUE()));}else if(r.ln=452,l.n.eq(v1,243))
{r.ln=454;this.srMONITORDESCRIPTION(l.cC("PRIM_ALPH"));r.ln=455;m.MONITORDESCRIPTION.set(P0.getVALUE());r.ln=456;m.UMONITORDESC.mthINSERT(m.MONITORDESCRIPTION);}else if(r.ln=458,l.n.eq(v1,244)){r.ln=460;this.srMONITORHEIGHT(new Fd.F3.Dc());r.ln=461;m.MONITORHEIGHT.set(l.s.AsNumber(P0.getVALUE()));r.ln=462;m.UMONITORHEIGHT.mthINSERT(m.MONITORHEIGHT);}else if(r.ln=464,l.n.eq(v1,245)){r.ln=466;this.srMONITORWIDTH(new Fd.F3.Dc());r.ln=467;m.MONITORWIDTH.set(l.s.AsNumber(P0.getVALUE()));r.ln=468;m.UMONITORWIDTH.mthINSERT(m.MONITORWIDTH);
}else if(r.ln=470,l.n.eq(v1,246)){r.ln=471;m.ISSHIPPEDDEMO.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=473,l.n.eq(v1,247)){r.ln=474;m.UTS2LANGUAGE.set(l.s.Trim(P0.getVALUE()));}else if(r.ln=477,l.n.eq(v1,701)){r.ln=478;m.UVLFONEUSRVALFUNC.set(P0.getVALUE());}else if(r.ln=479,l.n.eq(v1,702)){r.ln=480;this.REF.UUSEROBJECTTYPE.set(P0.getVALUE());}else if(r.ln=481,l.n.eq(v1,703)){r.ln=482;if(l.s.IsNumber(P0.getVALUE())){r.ln=483;m.UISSUEWARNING.set(l.s.AsNumber(P0.getVALUE()));}}else if(r.ln=485,l.n.eq(v1,704))
{r.ln=486;m.UAPPLYEXTENDEDVALIDATION.set(l.s.eq(l.s.UpperCase(P0.getVALUE()),"TRUE"));}else if(r.ln=487,l.n.eq(v1,705)){r.ln=488;m.UUSERPROPERTYSET.set(P0.getVALUE());}else if(r.ln=489,l.n.eq(v1,706)){r.ln=490;m.UIBMISERVERNAME.set(P0.getVALUE());}else if(r.ln=491,l.n.eq(v1,707)){r.ln=492;m.UIBMISERVERNAME.set(P0.getVALUE());}r.ln=494;}}r.ln=496;r.e();};cO.mthSIGNALUSERDELETED=function(p0){var r=l.mR(this,cO,"SignalUserDeleted",500);var P0=r.cPF("USERIDENTIFIER",Fd.F7.Dc);P0.set(p0);r.ln=500;{r.ln=503;
{var eP=l.ePs();eP.cF("USERIDENTIFIER",Fd.F7.Dc);eP.r("USERIDENTIFIER").set(P0.get());this.fE("USERDELETED",eP);eP.e();}}r.ln=505;r.e();};cO.mthSIGNALUSERCREATEDORCHANGED=function(p0,p1,p2,p3,p4){var r=l.mR(this,cO,"SignalUserCreatedorChanged",508);var P0=r.cPF("USERIDENTIFIER",Fd.F7.Dc);var P1=r.cP("USERNAME","PRIM_ALPH");var P2=r.cP("USERCAPTION","PRIM_DC","UnicodeString");var P3=r.cP("ISADMINSTRATOR","PRIM_BOLN");var P4=r.cP("ISDISABLED","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);
P4.set(p4);r.ln=508;{r.ln=515;{var eP=l.ePs();eP.cF("USERIDENTIFIER",Fd.F7.Dc);eP.cR("USERNAME","PRIM_ALPH");eP.cR("USERCAPTION","PRIM_DC","UnicodeString");eP.cR("ISADMINSTRATOR","PRIM_BOLN");eP.cR("ISDISABLED","PRIM_BOLN");eP.r("USERIDENTIFIER").set(P0.get());eP.r("USERNAME").set(P1.get());eP.r("USERCAPTION").set(P2.get());eP.r("ISADMINSTRATOR").set(P3.get());eP.r("ISDISABLED").set(P4.get());this.fE("USERCREATEDORCHANGED",eP);eP.e();}}r.ln=517;r.e();};cO.getUCHILDAPPLICATIONS=function(){return this.REF.UCHILDAPPLICATIONS;
};cO.getUCHILDCOMMANDS=function(){return this.REF.UCHILDCOMMANDS;};cO.getUCHILDTOOLBARITEMS=function(){return this.REF.UCHILDTOOLBARITEMS;};cO.getUUSERPROPERTYSET=function(){return this.REF.UUSERPROPERTYSET.get();};cO.getUVLFONEBACKPANEL=function(){return this.REF.UVLFONEBACKPANEL.get();};cO.getUVLFONETOPSLIDER=function(){return this.REF.UVLFONETOPSLIDER.get();};cO.getUVLFONEBOTTOMSLIDER=function(){return this.REF.UVLFONEBOTTOMSLIDER.get();};cO.getUVLFONELEFTSLIDER=function(){return this.REF.UVLFONELEFTSLIDER.get();
};cO.getUVLFONERIGHTSLIDER=function(){return this.REF.UVLFONERIGHTSLIDER.get();};cO.getUSETTINGSPANE=function(){return this.REF.USETTINGSPANE.get();};cO.getUASSISTANCEPANE=function(){return this.REF.UASSISTANCEPANE.get();};cO.getUMRUWIDTH=function(){return this.REF.UMRUWIDTH.get();};cO.getUMRULIMIT=function(){return this.REF.UMRULIMIT.get();};cO.getUTS2LANGUAGE=function(){return this.REF.UTS2LANGUAGE.get();};cO.getUSINGFRAMEWORKAUTHORITY=function(){return this.REF.USINGFRAMEWORKAUTHORITY.get();};
cO.setUSINGFRAMEWORKAUTHORITY=function(v){this.REF.USINGFRAMEWORKAUTHORITY.set(v);};cO.getUVERSIONP1=function(){return this.REF.UVERSIONP1.get();};cO.getUVERSIONP2=function(){return this.REF.UVERSIONP2.get();};cO.getUVERSIONP3=function(){return this.REF.UVERSIONP3.get();};cO.getUVERSIONP4=function(){return this.REF.UVERSIONP4.get();};cO.getUVERSIONAUTOINC=function(){return this.REF.UVERSIONAUTOINC.get();};cO.getUVERSIONABOUT=function(){return this.REF.UVERSIONABOUT.get();};cO.getUACTIVITYCOUNTOFF=function()
{return this.REF.UACTCOUNTOFF.get();};cO.getUACTIVITYCOUNTON=function(){return this.REF.UACTCOUNTON.get();};cO.getUTECHSUPPORT=function(){return this.REF.UTECHSUPPORT.get();};cO.getUABOUTIMAGEURL_LIGHT=function(){return this.REF.UABOUTIMAGEURL_LIGHT.get();};cO.getUABOUTIMAGEURL_DARK=function(){return this.REF.UABOUTIMAGEURL_DARK.get();};cO.getUCENTERABOUTPANEL=function(){return this.REF.UCENTERABOUTPANEL.get();};cO.getURAMPSTAMP=function(){return this.REF.URAMPSTAMP.get();};cO.getUABOUTLINE=function(KEY_1)
{return this.mthGET_UABOUTLINE(KEY_1);};cO.getUABOUTLINEMAX=function(){return this.REF.UABOUTLINEMAX.get();};cO.getUSIGNOFFTIMEOUT=function(){return this.REF.USIGNOFFTIMEOUT.get();};cO.getUSIGNONTIMEOUT=function(){return this.REF.USIGNONTIMEOUT.get();};cO.getUMTXTLOADER=function(){return this.REF.UMTXTLOADER.get();};cO.getUMAXWEBPWDLEN=function(){return this.REF.UMAXWEBPWDLEN.get();};cO.getUERROREMAILADDRESS=function(){return this.REF.UERROREMAILADDRESS.get();};cO.getUAPPLYEXTENDEDVALIDATION=function()
{return this.REF.UAPPLYEXTENDEDVALIDATION.get();};cO.getUISSUEWARNING=function(){return this.REF.UISSUEWARNING.get();};cO.setUISSUEWARNING=function(v){this.REF.UISSUEWARNING.set(v);};cO.getUVLFONEUSRVALFUNC=function(){return this.REF.UVLFONEUSRVALFUNC.get();};cO.getUUSERIIPVLFONE=function(){return this.REF.UUSERIIPVLFONE.get();};cO.getURAMPTS2=function(){return this.REF.URAMPTS2.get();};cO.getURTSIPADDRESS=function(){return this.mthGET_URTSIPADDRESS();};cO.getURTSPORTNUMBER=function(){return this.mthGET_URTSPORTNUMBER();
};cO.getURTSLOADPATH=function(){return this.mthGET_URTSLOADPATH();};cO.getURTSPRIVATESET=function(){return this.mthGET_URTSPRIVATESET();};cO.getURTSHTTPSEXEC=function(){return this.mthGET_URTSHTTPSEXEC();};cO.getURTSUSEPRIVATESHARED=function(){return this.mthGET_URTSUSEPRIVATESHARED();};cO.getUIBMISERVERNAME=function(){return this.REF.UIBMISERVERNAME.get();};cO.getUIBMIPORT=function(){return this.REF.UIBMIPORT.get();};cO.getUMONITORDESCRIPTIONS=function(){return this.REF.UMONITORDESC;};cO.getUMONITORWIDTHS=function()
{return this.REF.UMONITORWIDTH;};cO.getUMONITORHEIGHTS=function(){return this.REF.UMONITORHEIGHT;};cO.getISSHIPPEDDEMO=function(){return this.REF.ISSHIPPEDDEMO.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELUSET"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);
};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELOBJ"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"VF_ELNCHR"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"VF_ELPORT"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srMONITORDESCRIPTION=function(rn){this.sR("MONITORDESCRIPTION",rn);};cO.srMONITORHEIGHT=function(rn){this.sR("MONITORHEIGHT",rn);};cO.srMONITORWIDTH=function(rn)
{this.sR("MONITORWIDTH",rn);};},{rc:["VF_AC009O","VF_FP501O"],rp:["PRIM_ACOL","PRIM_FLD","PRIM_ALPH","PRIM_BOLN","PRIM_DC.UnicodeString","PRIM_KCOL"],dc:["VF_AC001O"],dp:["PRIM_ALPH"]});