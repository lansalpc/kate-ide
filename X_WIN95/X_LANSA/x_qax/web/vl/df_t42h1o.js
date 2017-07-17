﻿LANSA.addComponent({id:"DF_T42H1O",ot:"rp",tp:"Reusable Part",de:"\OC=Business Object 101 Command Handler",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",
h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:" ",h3:" ",de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:" ",h3:" ",de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:" ",h3:" ",de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:" ",de:"Postal Code",dv:"",ia:["FE"]},
F8:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]},F9:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:" ",de:"Home Telephone",dv:"",ia:["FE"]},F10:{nm:"XPHONEBUS",
ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:" ",de:"Business Telephone",dv:"",ia:["FE"]},F11:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:" ",de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F12:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:" ",de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F13:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:" ",de:"Department",dv:"",ia:["FE"]
},F14:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:" ",de:"Annual Salary",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},GetDataFromServer:{},SaveEmployee:{},uQueryCanClose:{ps:{"CanBeCancelled":{pt:"i"},"TimeOutinProgress":{pt:"i"}}},CheckForUnsavedChanges:{ps:{"TimeOutinProgress":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T42H1O",Fd);
var C0=this.cR("LABEL_HOW_IT_WORKS","PRIM_LABL");var C1=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C2=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C3=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C4=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C5=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C6=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C7=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C8=this.cR("BUTTON_SAVE","PRIM_PHBN");var C9=this.cR("ENTER","PRIM_STPG");this.cD("DISPLAYEDEMPLOYEEDATAITEM");
var C11=this.cR("PANELFIELDS","PRIM_ACOL");C0.setCaption("See component DF_T42H1O for details of this COMMAND HANDLER");C0.setDisplayPosition(1);C0.setHeight(41);C0.setLeft(24);C0.setParent(this);C0.setTabPosition(1);C0.setTabStop(false);C0.setTop(8);C0.setWidth(473);C0.setVerticalAlignment("CENTER");C0.iC();C1.setDisplayPosition(2);C1.setHeight(21);C1.setLeft(23);C1.setParent(this);C1.setTabPosition(2);C1.setTop(90);C1.setWidth(237);C1.setReadOnly(true);C1.aD();C1.iC();C2.setDisplayPosition(3);C2.setLeft(23);
C2.setParent(this);C2.setTabPosition(3);C2.setTop(112);C2.aD();C2.iC();C3.setDisplayPosition(4);C3.setLeft(23);C3.setParent(this);C3.setTabPosition(4);C3.setTop(134);C3.aD();C3.iC();C4.setDisplayPosition(5);C4.setHeight(21);C4.setLeft(23);C4.setParent(this);C4.setTabPosition(5);C4.setTop(156);C4.setWidth(479);C4.aD();C4.iC();C5.setDisplayPosition(6);C5.setHeight(21);C5.setLeft(23);C5.setParent(this);C5.setTabPosition(6);C5.setTop(178);C5.setWidth(479);C5.aD();C5.iC();C6.setDisplayPosition(7);C6.setHeight(21);
C6.setLeft(23);C6.setParent(this);C6.setTabPosition(7);C6.setTop(200);C6.setWidth(479);C6.aD();C6.iC();C7.setDisplayPosition(8);C7.setHeight(21);C7.setLeft(23);C7.setParent(this);C7.setTabPosition(8);C7.setTop(222);C7.setWidth(249);C7.aD();C7.iC();C8.setCaption("Save");C8.setDisplayPosition(9);C8.setLeft(24);C8.setParent(this);C8.setTabPosition(9);C8.setTop(56);C8.setWidth(129);C8.setEnabled(false);C8.iC();C9.setShortCut("ENTER");C9.setParent(this);C9.iC();C11.setCollects("PRIM_EVP");C11.iC();C8.aH("CLICK",this,e2);
C9.aH("PRESSED",this,e2);C11.aH("CHANGED",this,e4);this.setHeight(281);this.setWidth(513);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",48);var C0=r.cD("C0");r.ln=48;{r.ln=52;{var l1=this.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());r.ln=53;if(l.Io(CONTROL,"PRIM_EVP")){r.ln=54;C0=r.sR("C0",l.cast(CONTROL,"PRIM_EVP"));r.ln=55;m.PANELFIELDS.mthINSERT(C0);}r.ln=57;}l1.end();r.dR("CONTROL");}}r.ln=59;r.e();};cO.mthUTERMINATE=function()
{var m=this.REF,r=l.mR(this,cO,"uTerminate",63);r.ln=63;{r.ln=66;this.srDISPLAYEDEMPLOYEEDATAITEM(null);r.ln=69;m.PANELFIELDS.mthREMOVEALL();r.ln=72;cA.mthUTERMINATE.call(this);}r.ln=74;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",78);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=78;{r.ln=81;cA.mthUEXECUTE.call(this,P0,P1);r.ln=85;if(cO.mthCHECKFORUNSAVEDCHANGES.call(this,false)){r.ln=87;this.srDISPLAYEDEMPLOYEEDATAITEM(this.REF.AVLISTMANAGER.getCURRENTINSTANCE());
r.ln=89;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=91;this.mthGETDATAFROMSERVER();r.ln=93;P0.set(false);}p0.set(P0.get());}r.ln=96;r.e();};cO.mthGETDATAFROMSERVER=function(){var f=this.FLD.DF_T42H1O,m=this.REF,r=l.mR(this,cO,"GetDataFromServer",100);var C0=r.cF("IOSTATUSRETURNCODE",Fd.F8.Dc);var C1=r.cDR("FIND","DF_T42DSO","FIND");C0.iC();C1.iC();C1.aH("COMPLETED",this,e1);r.ln=100;{r.ln=110;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=115;m.XEMPLOYEEIDENTIFICATION.set(m.DISPLAYEDEMPLOYEEDATAITEM.getAVAKEY1().get());
r.ln=117;C1.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get()}},{FLD:{"IO$STS":C0,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XPHONEHME":f.F9,"XPHONEBUS":f.F10,"XSTARTDTE":f.F11,"XTERMDATE":f.F12,"XDEPTMENT":f.F13,"XSALARY":f.F14}});}r.ln=132;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",120);r.ln=120;{r.ln=121;if(l.s.eq(C0.get(),"OK"))
{}else{r.ln=124;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Data not found on the Server",u,u,this,u,u,u);}r.ln=127;m.BUTTON_SAVE.setEnabled(false);r.ln=129;this.mthAVGOTOFREESTATE();}r.ln=130;r.e();}};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Save.Click #Enter.Pressed",136);r.ln=136;{r.ln=137;if(m.BUTTON_SAVE.getEnabled()){r.ln=138;this.mthSAVEEMPLOYEE();}}r.ln=140;r.e();};cO.mthSAVEEMPLOYEE=function(){var f=this.FLD.DF_T42H1O,m=this.REF,r=l.mR(this,cO,"SaveEmployee",143);
var C0=r.cF("IOSTATUSRETURNCODE",Fd.F8.Dc);var C1=r.cDR("SAVE","DF_T42DSO","SAVE");C0.iC();C1.iC();C1.aH("COMPLETED",this,e3);r.ln=143;{r.ln=152;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=154;this.mthAVGOTOBUSYSTATE("Saving",false,u);r.ln=157;C1.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get(),"XSURNAME":m.XEMPLOYEESURNAME.get(),"XGIVENAME":m.XEMPLOYEEGIVENNAMES.get(),"XSTREET":m.XEMPLOYEESTREET.get(),"XCITY":m.XEMPLOYEECITY.get(),"XSTATE":m.XEMPLOYEESTATE.get(),"XPOSTCODE":m.XEMPLOYEEPOSTALCODE.get(),"XPHONEHME":f.F9.get(),"XPHONEBUS":f.F10.get(),"XSTARTDTE":f.F11.get(),"XTERMDATE":f.F12.get(),"XDEPTMENT":f.F13.get(),"XSALARY":f.F14.get()}},{FLD:{"IO$STS":C0}});
}r.ln=182;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#Save.Completed",160);r.ln=160;{r.ln=162;this.REF.AVFRAMEWORKMANAGER.mthAVRECEIVESYSTEMMESSAGEQUEUE(this,u);r.ln=164;if(l.s.eq(C0.get(),"OK")){r.ln=166;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Save was successful",u,u,this,u,u,u);r.ln=168;if((m.DISPLAYEDEMPLOYEEDATAITEM.getAVVISUALID2()!=null)){r.ln=169;m.DISPLAYEDEMPLOYEEDATAITEM.getAVVISUALID2().set(l.add(l.cat(m.XEMPLOYEESURNAME.get(),", "),m.XEMPLOYEEGIVENNAMES.get()));r.ln=170;
m.DISPLAYEDEMPLOYEEDATAITEM.mthAVUPDATEDISPLAY();}r.ln=173;m.BUTTON_SAVE.setEnabled(false);}else{r.ln=175;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE("Save was NOT successful",u,"WARN",this,u,u,u);}r.ln=178;this.mthAVGOTOFREESTATE();}r.ln=180;r.e();}};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PanelFields<>.Changed",186);r.ln=186;{r.ln=188;m.BUTTON_SAVE.setEnabled(true);}r.ln=190;r.e();};cO.mthUQUERYCANCLOSE=function(p0,p2){var r=l.mR(this,cO,"uQueryCanClose",194);var P0=r.cP("CANBECANCELLED","PRIM_BOLN");
var P1=r.cP("ALLOW","PRIM_BOLN");var P2=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");P0.set(p0);P2.set(p2);r.ln=194;{r.ln=196;P1.set(this.mthCHECKFORUNSAVEDCHANGES(P2.get()));}r.ln=198;return r.rV(P1.get());};cO.mthCHECKFORUNSAVEDCHANGES=function(p0){var m=this.REF,r=l.mR(this,cO,"CheckForUnsavedChanges",202);var P0=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");var P1=r.cP("ALLOWTOPROCEED","PRIM_BOLN");P0.set(p0);r.ln=202;{r.ln=207;if(l.and(m.BUTTON_SAVE.getEnabled(),l.b.Not(P0.get()))){r.ln=208;P1.set(l.s.eq(l.WEB().mthCONFIRM(l.cat(l.add(l.cat(l.add("Changed details of ",m.XEMPLOYEEGIVENNAMES.get())," "),m.XEMPLOYEESURNAME.get())," have not been saved. Do you want to save them first?")),"CANCEL"));
}else{r.ln=210;P1.set(true);}}r.ln=213;return r.rV(P1.get());};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function()
{this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);
};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"IOdSTS"});}cO.srDISPLAYEDEMPLOYEEDATAITEM=function(rn){this.sR("DISPLAYEDEMPLOYEEDATAITEM",rn);};cO.srAVLISTMANAGER=function(rn){cA.srAVLISTMANAGER.call(this,rn);
};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O"],rp:["PRIM_LABL","PRIM_EVEF","PRIM_PHBN","PRIM_STPG","PRIM_ACOL","PRIM_FLD","PRIM_WEB.DataRequest"],dc:["VF_LM003O"],dp:["PRIM_EVP"]});