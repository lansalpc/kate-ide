﻿LANSA.addComponent({id:"DF_DET33O",ot:"rp",tp:"Reusable Part",de:"\OC=Employee Details",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",
h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:" ",h3:" ",de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:" ",h3:" ",de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:" ",h3:" ",de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:" ",de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"XPHONEHME",
ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:" ",de:"Home Telephone",dv:"",ia:["FE"]},F9:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:" ",de:"Business Telephone",dv:"",ia:["FE"]},F10:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:" ",de:"Annual Salary",dv:0,ia:["FE","RB"]},F11:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:" ",de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F12:
{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:" ",de:"Department",dv:"",ia:["FE"]},F13:{nm:"XDEPTDESC",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"Description"}[cL],h3:" ",de:{"ENG":"Department Description","FRA":"Département","JPN":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F14:
{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F15:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:" ",de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F16:{nm:"XEMPIMG",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{ResumeFocus:{},uBringToFront:{},uSendtoBack:{},uQueryCanClose:{ps:{"CanBeCancelled":{pt:"i"},"TimeOutinProgress":{pt:"i"}}},uInitialize:{},uTerminate:{},uExecute:{ps:{"GotoFreeState":{pt:"io"},"SwitchCallerReference":{pt:"i"}}},LoadEmployee:{},LoadEmployeeImage:{ps:{"EmployeeIdentification":{pt:"i"}}},SaveEmployee:{},CheckForUnsavedChanges:{}},co:function(){cO.aN.call(this);this.aF("DF_DET33O",Fd);var C0=this.cA("PEOPLECONTROLLER","DF_EMCTLO");
this.cD("SPECIFICEMPLOYEECONTROLLER");var C2=this.cR("ATTACHITEM_LEFTPANEL","PRIM_ATLI");var C3=this.cR("ATTACHITEM_RIGHTPANEL","PRIM_ATLI");var C4=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C5=this.cR("ATTACHITEM1","PRIM_ATLI");var C6=this.cR("ATTACHITEM2","PRIM_ATLI");var C7=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C8=this.cR("ATTACHITEM3","PRIM_ATLI");var C9=this.cR("ATTACHITEM4","PRIM_ATLI");var C10=this.cR("ATTACHITEM5","PRIM_ATLI");var C11=this.cR("ATTACHITEM6","PRIM_ATLI");var C12=this.cR("ATTACHITEM7","PRIM_ATLI");
var C13=this.cR("LEFTBOTTOMPANEL","PRIM_PANL");var C14=this.cR("LEFT_PANEL","PRIM_PANL");var C15=this.cR("RIGHT_PANEL","PRIM_PANL");var C16=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C17=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C18=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C19=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C20=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C21=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C22=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);
var C23=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F8.VISUALEDIT);var C24=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F9.VISUALEDIT);var C25=this.cF("XEMPLOYEESALARY",Fd.F10.VISUALEDIT);var C26=this.cR("SAVE_PHBN","PRIM_PHBN");var C27=this.cF("XEMPLOYEESTARTDATE",Fd.F11.VISUALDATE);var C28=this.cR("DEPARTMENTDROPDOWN","DF_T40DDO");var C29=this.cR("GPBX_DEPARTMENT","VF_UI036O");var C30=this.cR("GPBX_BASIC","VF_UI036O");var C31=this.cR("GPBX_ADDRESS","VF_UI036O");var C32=this.cR("GPBX_CONTACT","VF_UI036O");var C33=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");
var C34=this.cR("NOEMPLOYEEIMAGEMESSAGE","PRIM_LABL");var C35=this.cR("PANELFIELDS","PRIM_ACOL");this.cD("LASTFOCUSCONTROL");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C2.setManage(C14);C2.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C2.setAttachment("LEFT");C2.iC();C3.setManage(C15);C3.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C3.setAttachment("CENTER");C3.iC();C4.iC();C5.setManage(C33);C5.setParent(C4);C5.setAttachment("CENTER");C5.iC();C6.setManage(C34);C6.setParent(C4);C6.setAttachment("CENTER");
C6.iC();C7.iC();C8.setManage(C31);C8.setParent(C7);C8.setAttachment("TOP");C8.setMarginBottom(4);C8.setMarginLeft(4);C8.setMarginRight(4);C8.iC();C9.setManage(C30);C9.setParent(C7);C9.setAttachment("TOP");C9.setMarginBottom(4);C9.setMarginLeft(4);C9.setMarginRight(4);C9.setMarginTop(4);C9.iC();C10.setManage(C32);C10.setParent(C7);C10.setAttachment("TOP");C10.setMarginBottom(4);C10.setMarginLeft(4);C10.setMarginRight(4);C10.iC();C11.setManage(C29);C11.setParent(C7);C11.setAttachment("TOP");C11.setMarginBottom(4);
C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setManage(C13);C12.setParent(C7);C12.setAttachment("BOTTOM");C12.setMarginBottom(4);C12.setMarginLeft(4);C12.setMarginRight(4);C12.iC();C13.setParent(C14);C13.setDisplayPosition(5);C13.setTabPosition(5);C13.setLeft(4);C13.setTop(437);C13.setWidth(392);C13.setHeight(24);C13.iC();C14.setParent(this);C14.setDisplayPosition(1);C14.setTabPosition(1);C14.setHeight(465);C14.setLeft(0);C14.setTop(0);C14.setWidth(400);C14.setLayoutManager(C7);C14.iC();
C15.setParent(this);C15.setDisplayPosition(2);C15.setTabPosition(2);C15.setHeight(465);C15.setLeft(400);C15.setTop(0);C15.setWidth(582);C15.setLayoutManager(C4);C15.iC();C16.setDisplayPosition(4);C16.setLeft(8);C16.setMarginLeft(170);C16.setParent(C30);C16.setTabPosition(3);C16.setTabStop(false);C16.setTop(19);C16.setWidth(225);C16.setDisplayOnly(true);C16.aD();C16.iC();C17.setDisplayPosition(6);C17.setLeft(8);C17.setMarginLeft(170);C17.setParent(C30);C17.setTabPosition(4);C17.setTop(39);C17.setWidth(377);
C17.aD();C17.iC();C18.setDisplayPosition(5);C18.setLeft(8);C18.setMarginLeft(170);C18.setParent(C30);C18.setTabPosition(6);C18.setTop(63);C18.setWidth(377);C18.aD();C18.iC();C19.setDisplayPosition(3);C19.setLeft(8);C19.setMarginLeft(170);C19.setParent(C31);C19.setTabPosition(3);C19.setTop(19);C19.setWidth(377);C19.aD();C19.iC();C20.setDisplayPosition(5);C20.setLeft(8);C20.setMarginLeft(170);C20.setParent(C31);C20.setTabPosition(4);C20.setTop(43);C20.setWidth(377);C20.aD();C20.iC();C21.setDisplayPosition(4);
C21.setLeft(8);C21.setMarginLeft(170);C21.setParent(C31);C21.setTabPosition(5);C21.setTop(67);C21.setWidth(377);C21.aD();C21.iC();C22.setDisplayPosition(1);C22.setLeft(8);C22.setMarginLeft(170);C22.setParent(C31);C22.setTabPosition(1);C22.setTop(91);C22.setWidth(377);C22.aD();C22.iC();C23.setDisplayPosition(3);C23.setLeft(8);C23.setMarginLeft(170);C23.setParent(C32);C23.setTabPosition(3);C23.setTop(43);C23.setWidth(377);C23.aD();C23.iC();C24.setDisplayPosition(1);C24.setLeft(8);C24.setMarginLeft(170);
C24.setParent(C32);C24.setTabPosition(1);C24.setTop(19);C24.setWidth(377);C24.aD();C24.iC();C25.setDisplayPosition(3);C25.setLeft(8);C25.setMarginLeft(170);C25.setParent(C30);C25.setTabPosition(5);C25.setTop(111);C25.setWidth(377);C25.aD();C25.iC();C26.setCaption("Save Changed Details");C26.setDisplayPosition(1);C26.setLeft(2);C26.setParent(C13);C26.setTabPosition(1);C26.setTop(2);C26.setHeight(22);C26.setWidth(135);C26.setEnabled(false);C26.iC();C27.setCaption("Start Date");C27.setDisplayPosition(1);
C27.setLabelType("CAPTION");C27.setLeft(8);C27.setMarginLeft(170);C27.setParent(C30);C27.setTabPosition(1);C27.setTop(87);C27.setWidth(377);C27.aD();C27.iC();C28.setHeight(19);C28.setLeft(8);C28.setParent(C29);C28.setTop(23);C28.setWidth(377);C28.iC();C29.setDisplayPosition(4);C29.setHeight(55);C29.setParent(C14);C29.setTabPosition(4);C29.setTabStop(false);C29.setTop(349);C29.setWidth(392);C29.setLeft(4);C29.iC();C30.setHeight(145);C30.setParent(C14);C30.setTabStop(false);C30.setWidth(392);C30.setLeft(4);
C30.setTop(4);C30.iC();C31.setDisplayPosition(2);C31.setHeight(118);C31.setParent(C14);C31.setTabPosition(2);C31.setTabStop(false);C31.setWidth(392);C31.setTop(153);C31.setLeft(4);C31.iC();C32.setDisplayPosition(3);C32.setHeight(70);C32.setParent(C14);C32.setTabPosition(3);C32.setTabStop(false);C32.setTop(275);C32.setWidth(392);C32.setLeft(4);C32.iC();C33.setDisplayPosition(2);C33.setTabPosition(2);C33.setHeight(465);C33.setLeft(0);C33.setTop(0);C33.setWidth(582);C33.setImageSizing("BESTFIT");C33.setParent(C15);
C33.setImageAlignment("TOPCENTER");C33.iC();C34.setDisplayPosition(1);C34.setTabPosition(1);C34.setCaption("No image exists for this employee");C34.setAlignment("CENTER");C34.setVerticalAlignment("CENTER");C34.setTabStop(false);C34.setHeight(465);C34.setLeft(0);C34.setTop(0);C34.setWidth(582);C34.setParent(C15);C34.iC();C35.setCollects("PRIM_EVP");C35.iC();C0.aH("FOUNDDEPARTMENTTABLEITEM",this,e1);C26.aH("CLICK",this,e5);C28.aH("ITEMGOTFOCUS",this,e3);C35.aH("CHANGED",this,e3);this.REF.AVLOCALTIMER.aH("TICK",this,e2);
this.setHeight(465);this.setWidth(982);}});var cA=cO.aN.prototype;cO.mthRESUMEFOCUS=function(){var m=this.REF,r=l.mR(this,cO,"ResumeFocus",85);r.ln=85;{r.ln=87;if((m.LASTFOCUSCONTROL==null)){r.ln=88;m.XEMPLOYEESURNAME.mthSETFOCUS();}else{r.ln=90;m.LASTFOCUSCONTROL.mthSETFOCUS();}}r.ln=93;r.e();};cO.mthUBRINGTOFRONT=function(){var r=l.mR(this,cO,"uBringToFront",96);r.ln=96;{r.ln=97;this.mthRESUMEFOCUS();}r.ln=98;r.e();};cO.mthUSENDTOBACK=function(){var m=this.REF,r=l.mR(this,cO,"uSendtoBack",101);
r.ln=101;{r.ln=102;this.srLASTFOCUSCONTROL(this.REF.AVFRAMEWORKMANAGER.mthAVGETFOCUSCONTROL(this));}r.ln=103;r.e();};cO.mthUQUERYCANCLOSE=function(p0,p2){var r=l.mR(this,cO,"uQueryCanClose",107);var P0=r.cP("CANBECANCELLED","PRIM_BOLN");var P1=r.cP("ALLOW","PRIM_BOLN");var P2=r.cP("TIMEOUTINPROGRESS","PRIM_BOLN");P0.set(p0);P2.set(p2);r.ln=107;{r.ln=109;P1.set(this.mthCHECKFORUNSAVEDCHANGES());}r.ln=111;return r.rV(P1.get());};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",115);
var C0=r.cD("C0");r.ln=115;{r.ln=119;cA.mthUINITIALIZE.call(this);r.ln=122;m.GPBX_BASIC.setCAPTION(" Basic Details");r.ln=123;m.GPBX_ADDRESS.setCAPTION(" Address");r.ln=124;m.GPBX_CONTACT.setCAPTION(" Contact Details");r.ln=125;m.GPBX_DEPARTMENT.setCAPTION(" Current Assignment");r.ln=130;{var l1=m.GPBX_BASIC.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());r.ln=131;if(l.Io(CONTROL,"PRIM_EVP")){r.ln=132;C0=r.sR("C0",CONTROL);r.ln=133;m.PANELFIELDS.mthINSERT(C0);}r.ln=135;
}l1.end();r.dR("CONTROL");}r.ln=137;{var l1=m.GPBX_ADDRESS.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());r.ln=138;if(l.Io(CONTROL,"PRIM_EVP")){r.ln=139;C0=r.sR("C0",CONTROL);r.ln=140;m.PANELFIELDS.mthINSERT(C0);}r.ln=142;}l1.end();r.dR("CONTROL");}r.ln=144;{var l1=m.GPBX_CONTACT.getComponentControls().cI();while(l1.step()){var CONTROL=r.sR("CONTROL",l1.item());r.ln=145;if(l.Io(CONTROL,"PRIM_EVP")){r.ln=146;C0=r.sR("C0",CONTROL);r.ln=147;m.PANELFIELDS.mthINSERT(C0);
}r.ln=149;}l1.end();r.dR("CONTROL");}r.ln=152;m.PEOPLECONTROLLER.ref.mthENUMERATEDEPARTMENTS(this);}r.ln=154;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PeopleController.FoundDepartmentTableItem",157);var P0=Ps.r("REQUESTER");var P1=Ps.r("DEPARTMENTCODE");var P2=Ps.r("DEPARTMENTDESCRIPTION");r.ln=157;{r.ln=159;if((P0===this)){r.ln=160;m.DEPARTMENTDROPDOWN.mthADD(P1.get(),u,P2.get(),u);}}r.ln=163;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",166);
r.ln=166;{r.ln=168;this.srSPECIFICEMPLOYEECONTROLLER(null);r.ln=170;this.srLASTFOCUSCONTROL(null);r.ln=172;cA.mthUTERMINATE.call(this);}r.ln=174;r.e();};cO.mthUEXECUTE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uExecute",178);var P0=r.cP("GOTOFREESTATE","PRIM_BOLN");var P1=r.cPD("SWITCHCALLERREFERENCE");P0.set(p0.get());P1=p1;r.ln=178;{r.ln=180;if(cO.mthCHECKFORUNSAVEDCHANGES.call(this)){r.ln=182;P0.set(false);r.ln=183;this.srLASTFOCUSCONTROL(null);r.ln=184;this.mthRESUMEFOCUS();r.ln=186;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);
r.ln=187;this.REF.AVLOCALTIMERREQUEST.set("LOADEMPLOYEE");r.ln=188;this.REF.AVLOCALTIMER.setInterval(1);}p0.set(P0.get());}r.ln=192;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#AVLOCALTIMER.Tick",195);r.ln=195;{r.ln=197;this.REF.AVLOCALTIMER.setInterval(0);r.ln=199;{var v1=this.REF.AVLOCALTIMERREQUEST.get();if(r.ln=201,l.s.eq(v1,"LOADEMPLOYEE")){r.ln=202;this.mthLOADEMPLOYEE();}else if(r.ln=204,l.s.eq(v1,"SAVEEMPLOYEE")){r.ln=205;this.mthSAVEEMPLOYEE();}r.ln=207;}r.ln=209;this.mthAVGOTOFREESTATE();
}r.ln=211;r.e();};cO.mthLOADEMPLOYEE=function(){var f=this.FLD.DF_DET33O,m=this.REF,r=l.mR(this,cO,"LoadEmployee",215);r.ln=215;{r.ln=218;m.XEMPLOYEEIDENTIFICATION.set(this.getAVASSOCIATEDINSTANCE().getAVVISUALID1().get());r.ln=221;this.srSPECIFICEMPLOYEECONTROLLER(m.PEOPLECONTROLLER.ref.mthLOADEMPLOYEE(m.XEMPLOYEEIDENTIFICATION.get()));r.ln=224;m.SPECIFICEMPLOYEECONTROLLER.mthGETEMPLOYEEDETAILS(m.XEMPLOYEEIDENTIFICATION,m.XEMPLOYEESURNAME,m.XEMPLOYEEGIVENNAMES,m.XEMPLOYEESTREET,m.XEMPLOYEECITY,m.XEMPLOYEESTATE,m.XEMPLOYEEPOSTALCODE,m.XEMPLOYEEHOMETELEPHONE,m.XEMPLOYEEBUSINESSTELEPHONE,f.F12,m.XEMPLOYEESALARY,m.XEMPLOYEESTARTDATE,f.F15);
r.ln=228;this.mthLOADEMPLOYEEIMAGE(m.XEMPLOYEEIDENTIFICATION.get());r.ln=231;m.DEPARTMENTDROPDOWN.mthFIND(f.F12.get(),u,u);r.ln=234;m.SAVE_PHBN.setEnabled(false);r.ln=237;this.setAVHANDLERCAPTION(l.add(l.cat(l.add("Details of ",m.XEMPLOYEEGIVENNAMES.get())," "),m.XEMPLOYEESURNAME.get()));}r.ln=239;r.e();};cO.mthLOADEMPLOYEEIMAGE=function(p0){var f=this.FLD.DF_DET33O,m=this.REF,r=l.mR(this,cO,"LoadEmployeeImage",242);var P0=r.cPF("EMPLOYEEIDENTIFICATION",Fd.F1.Dc);P0.set(p0);var C0=r.cF("RETURNCODE",Fd.F14.Dc);
var C1=r.cDR("GETEMPLOYEEIMAGE","DF_EMDSO","GETEMPLOYEEIMAGE");C0.iC();C1.iC();r.ln=242;{r.ln=250;C1.mthEXECUTE({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPIMG":f.F16,"RETURNCODE":C0}});r.ln=252;if(l.s.eq(C0.get(),"OK")){r.ln=253;m.NOEMPLOYEEIMAGEMESSAGE.setVisible(false);r.ln=254;m.EMPLOYEEIMAGE.setVisible(true);m.EMPLOYEEIMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F16.get()));r.ln=255;m.EMPLOYEEIMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F16.get()));}else{r.ln=257;m.NOEMPLOYEEIMAGEMESSAGE.setVisible(true);
r.ln=258;m.EMPLOYEEIMAGE.setVisible(false);m.EMPLOYEEIMAGE.setImage(null);}}r.ln=261;r.e();};function e3(sender,Ps){var f=this.FLD.DF_DET33O,m=this.REF,r=l.eR(this,cO,"#PanelFields<>.Changed #DepartmentDropDown.ItemGotFocus",265);r.ln=265;{r.ln=267;f.F12.set(m.DEPARTMENTDROPDOWN.getCURRENTVALUE());r.ln=269;m.SPECIFICEMPLOYEECONTROLLER.mthUPDATEEMPLOYEEDETAILS(m.XEMPLOYEEIDENTIFICATION.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESTREET.get(),m.XEMPLOYEECITY.get(),m.XEMPLOYEESTATE.get(),m.XEMPLOYEEPOSTALCODE.get(),m.XEMPLOYEEHOMETELEPHONE.get(),m.XEMPLOYEEBUSINESSTELEPHONE.get(),f.F12.get(),m.XEMPLOYEESALARY.get(),m.XEMPLOYEESTARTDATE.get(),f.F15.get());
}r.ln=271;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SpecificEmployeeController.EmployeeChanged",275);r.ln=275;{r.ln=277;m.SAVE_PHBN.setEnabled(true);}r.ln=279;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#SAVE_PHBN.Click",283);r.ln=283;{r.ln=285;this.mthAVGOTOBUSYSTATE("Saving Employee Details",false,u);r.ln=286;this.REF.AVLOCALTIMERREQUEST.set("SAVEEMPLOYEE");r.ln=287;this.REF.AVLOCALTIMER.setInterval(1);}r.ln=289;r.e();};cO.mthSAVEEMPLOYEE=function(){var m=this.REF,r=l.mR(this,cO,"SaveEmployee",292);
var C0=r.cF("RETURNCODE",Fd.F14.Dc);C0.iC();r.ln=292;{r.ln=296;m.SPECIFICEMPLOYEECONTROLLER.mthSAVEEMPLOYEE(this,this.getAVASSOCIATEDINSTANCE(),C0);r.ln=298;if(l.s.eq(C0.get(),"OK")){r.ln=299;m.SAVE_PHBN.setEnabled(false);}r.ln=302;this.setAVHANDLERCAPTION(l.cat(l.add(l.cat(l.add("Details of ",m.XEMPLOYEEGIVENNAMES.get())," "),m.XEMPLOYEESURNAME.get())," were saved."));}r.ln=304;r.e();};cO.mthCHECKFORUNSAVEDCHANGES=function(){var m=this.REF,r=l.mR(this,cO,"CheckForUnsavedChanges",310);var P0=r.cP("ALLOWTOPROCEED","PRIM_BOLN");
r.ln=310;{r.ln=313;if(m.SAVE_PHBN.getEnabled()){r.ln=315;P0.set(l.s.eq(l.WEB().mthCONFIRM(l.cat(l.add(l.cat(l.add("Changed details of ",m.XEMPLOYEEGIVENNAMES.get())," "),m.XEMPLOYEESURNAME.get())," have not been saved. Do you want to save them first?")),"CANCEL"));}else{r.ln=319;P0.set(true);}}r.ln=323;return r.rV(P0.get());};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function()
{this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});
Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});
}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEHME",cn:"VisualEdit"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F9.VISUALEDIT=function(){this.aN.call(this,new Fd.F9.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);this.setMarginLeft(188);};l.cFC({co:Fd.F9.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEBUS",cn:"VisualEdit"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(293);this.setComponentVersion(1);};l.cFC({co:Fd.F10.VISUALEDIT,an:"PRIM_EVEF",fn:"XSALARY",cn:"VisualEdit"});
}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});Fd.F11.VISUALDATE=function(){this.aN.call(this,new Fd.F11.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F11.VISUALDATE,an:"PRIM_EVDT",fn:"XSTARTDTE",cn:"VisualDate"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XDEPTDESC"});
}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});}cO.srSPECIFICEMPLOYEECONTROLLER=function(rn){if(this.REF.SPECIFICEMPLOYEECONTROLLER!=null){this.REF.SPECIFICEMPLOYEECONTROLLER.rH("EMPLOYEECHANGED",this,e4);}this.sR("SPECIFICEMPLOYEECONTROLLER",rn);if(this.REF.SPECIFICEMPLOYEECONTROLLER!=null){this.REF.SPECIFICEMPLOYEECONTROLLER.aH("EMPLOYEECHANGED",this,e4);}};cO.srLASTFOCUSCONTROL=function(rn){this.sR("LASTFOCUSCONTROL",rn);};cO.srAVFRAMEWORKMANAGER=function(rn)
{cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC010O","DF_EMCTLO","DF_T40DDO","VF_UI036O"],rp:["PRIM_ATLI","PRIM_ATLM","PRIM_PANL","PRIM_EVEF","PRIM_PHBN","PRIM_EVDT","PRIM_IMAG","PRIM_LABL","PRIM_ACOL","PRIM_FLD","PRIM_WEB.DataRequest"],dc:["DF_EMCTEO"],dp:["PRIM_CTRL","PRIM_EVP"]});