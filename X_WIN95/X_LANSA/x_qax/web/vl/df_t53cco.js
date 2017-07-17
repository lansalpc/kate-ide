﻿LANSA.addComponent({id:"DF_T53CCO",ot:"rp",tp:"Reusable Part",de:"\OC=Business Object 103 Client Ctrler",tl:14011102},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],
dv:0,ia:["FE","RB"]},F2:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:" ",de:"Identification",dv:"",ia:["FE"]},F3:{nm:"VF_ELRETC",ft:"A",ln:2,dc:0,lb:"Return Code",h1:"Return",h2:"Code",h3:"",de:"Return Code",dv:"",ia:["FE"]},F4:{nm:"XSURNAME",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:" ",de:"Surname",dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]
},F6:{nm:"XSTREET",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:" ",h3:" ",de:"Street",dv:"",ia:["FE","LC"]},F7:{nm:"XCITY",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:" ",h3:" ",de:"City",dv:"",ia:["FE","LC"]},F8:{nm:"XSTATE",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:" ",h3:" ",de:"State",dv:"",ia:["FE","LC"]},F9:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:" ",de:"Postal Code",dv:"",ia:["FE"]},F10:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",
h3:" ",de:"Home Telephone",dv:"",ia:["FE"]},F11:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:" ",de:"Business Telephone",dv:"",ia:["FE"]},F12:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:" ",de:"Department",dv:"",ia:["FE"]},F13:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:" ",de:"Annual Salary",dv:0,ia:["FE","RB"]},F14:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",
h3:" ",de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F15:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:" ",de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F16:{nm:"XEMPIMG",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]
},F17:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{CurrentEmployeeChangeCount:{da:"r"}},mt:{FindEmployees:{ps:{"SearchType":{pt:"i"},"ReturnImages":
{pt:"i"},"SearchString":{pt:"i"},"UsingListmanager":{pt:"i"},"ClearList":{pt:"i"},"TotalFound":{pt:"o"}}},LoadAsCurrentEmployee:{ps:{"xEmployeeIdentification":{pt:"i"}}},UpdateCurrentEmployeeDetails:{ps:{"pxEmployeeIdentification":{pt:"i"},"pSurname":{pt:"i"},"pGivename":{pt:"i"},"pAddress1":{pt:"i"},"pAddress2":{pt:"i"},"pAddress3":{pt:"i"},"pPostcode":{pt:"i"}}},GetCurrentEmployeeDetails:{ps:{"pxEmployeeIdentification":{pt:"o"},"pSurname":{pt:"o"},"pGivename":{pt:"o"},"pAddress1":{pt:"o"},"pAddress2":
{pt:"o"},"pAddress3":{pt:"o"},"pPostcode":{pt:"o"},"pPhonehme":{pt:"o"},"Pphonebus":{pt:"o"},"pDeptment":{pt:"o"},"pSalary":{pt:"o"},"pStartdte":{pt:"o"},"pTermdate":{pt:"o"}}},SaveCurrentEmployee:{ps:{"ForCommandHandler":{pt:"i"},"DataItem":{pt:"i"},"ReturnCode":{pt:"o"}}}},ev:{InstanceListShowOptionChanged:{},SetasCurrentEmployee:{ps:{"xEmployeeIdentification":{pt:"i"}}},NotSetasCurrentEmployee:{ps:{"xEmployeeIdentification":{pt:"i"}}},CurrentEmployeeChanged:{ps:{"xEmployeeIdentification":{pt:"i"
}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_T53CCO",Fd);var C0=this.cF("CURRENTEMPLOYEECHANGECOUNT",Fd.F1.Dc);C0.aD();C0.iC();var li=this.aL("DF_T53CCO");li.CURRENTEMPLOYEEDETAILS=l.cLT({"XEMPLOYID":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XSTREET":f.F6,"XCITY":f.F7,"XSTATE":f.F8,"XPOSTCODE":f.F9,"XPHONEHME":f.F10,"XPHONEBUS":f.F11,"XDEPTMENT":f.F12,"XSALARY":f.F13,"XSTARTDTE":f.F14,"XTERMDATE":f.F15},null);li.FINDEMPLOYEES1_RESULTLIST=l.cLT({"XEMPLOYID":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XSTREET":f.F6,"XCITY":f.F7,"XSTATE":f.F8,"XPOSTCODE":f.F9,"XPHONEHME":f.F10,"XPHONEBUS":f.F11,"XDEPTMENT":f.F12,"XSALARY":f.F13,"XSTARTDTE":f.F14,"XTERMDATE":f.F15,"XEMPIMG":f.F16},null);
}});cO.mthFINDEMPLOYEES=function(p0,p1,p2,p3,p4,p5){var li=this.LIST.DF_T53CCO,f=this.FLD.DF_T53CCO,r=l.mR(this,cO,"FindEmployees",52);var P0=r.cPF("SEARCHTYPE",Fd.F1.Dc);var P1=r.cP("RETURNIMAGES","PRIM_BOLN");var P2=r.cP("SEARCHSTRING","PRIM_ALPH");var P3=r.cPD("USINGLISTMANAGER");var P4=r.cP("CLEARLIST","PRIM_BOLN");var P5=r.cPF("TOTALFOUND",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3=p3;P4.set(p4);var C0=r.cDR("FINDEMPLOYEES","DF_T53DSO","FINDEMPLOYEES");var C1=r.cD("C1");C0.iC();r.ln=52;{r.ln=67;
if(l.tB(P4.get())){r.ln=68;P3.mthCLEARLIST(u);}r.ln=72;C0.mthEXECUTE({FLD:{"FINDEMPLOYEES_SEARCHSTRING":P2.get(),"FINDEMPLOYEES_SEARCHTYPE":P0.get(),"FINDEMPLOYEES_RETURNIMAGE":P1.get()}},{LIST:{"FINDEMPLOYEES_RESULTLIST":li.FINDEMPLOYEES1_RESULTLIST}});r.ln=75;{var l1=li.FINDEMPLOYEES1_RESULTLIST.selectList();while(l1.step()){r.ln=77;P5.set(l.add(P5.get(),1));r.ln=80;if(l.s.IsNotSqlNull(f.F16.get())){r.ln=81;C1=r.sR("C1",l.APPL().mthCREATEBITMAP(f.F16.get(),u));}else{r.ln=83;C1=r.sR("C1",null);}
r.ln=87;P3.mthADDTOLIST(f.F2.get(),l.add(l.cat(f.F5.get()," "),f.F4.get()),f.F2.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C1,u,f.F6.get(),f.F7.get(),f.F8.get(),f.F4.get(),f.F5.get(),f.F10.get(),f.F11.get(),f.F9.get(),u,u,u,f.F13.get(),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u);r.ln=89;}l1.end();}r.ln=92;li.FINDEMPLOYEES1_RESULTLIST.clearList();p5.set(P5.get());}r.ln=94;r.e();};cO.mthLOADASCURRENTEMPLOYEE=function(p0){var li=this.LIST.DF_T53CCO,f=this.FLD.DF_T53CCO,m=this.REF,r=l.mR(this,cO,"LoadAsCurrentEmployee",97);
var P0=r.cPF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);P0.set(p0);var C0=r.cDR("GETCURRENTEMPLOYEE","DF_T53DSO","GETCURRENTEMPLOYEE");var C1=r.cF("RETURNCODE",Fd.F3.Dc);C0.iC();C1.iC();r.ln=97;{r.ln=103;li.CURRENTEMPLOYEEDETAILS.clearList();r.ln=105;C0.mthEXECUTE({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":f.F2,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XSTREET":f.F6,"XCITY":f.F7,"XSTATE":f.F8,"XPOSTCODE":f.F9,"XPHONEHME":f.F10,"XPHONEBUS":f.F11,"XDEPTMENT":f.F12,"XSALARY":f.F13,"XSTARTDTE":f.F14,"XTERMDATE":f.F15,"RETURNCODE":C1}});
r.ln=107;f.F17.set(lIO=li.CURRENTEMPLOYEEDETAILS.getEntry(1));r.ln=109;m.CURRENTEMPLOYEECHANGECOUNT.set(0);r.ln=112;if(l.s.ne(C1.get(),"OK")){r.ln=113;{var eP=l.ePs();eP.cF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);eP.r("XEMPLOYEEIDENTIFICATION").set(P0.get());this.fE("SETASCURRENTEMPLOYEE",eP);eP.e();}}else{r.ln=115;{var eP=l.ePs();eP.cF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);eP.r("XEMPLOYEEIDENTIFICATION").set(P0.get());this.fE("NOTSETASCURRENTEMPLOYEE",eP);eP.e();}}}r.ln=118;r.e();};cO.mthUPDATECURRENTEMPLOYEEDETAILS=function(p0,p1,p2,p3,p4,p5,p6)
{var li=this.LIST.DF_T53CCO,f=this.FLD.DF_T53CCO,m=this.REF,r=l.mR(this,cO,"UpdateCurrentEmployeeDetails",122);var P0=r.cPF("PXEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cPF("PSURNAME",Fd.F4.Dc);var P2=r.cPF("PGIVENAME",Fd.F5.Dc);var P3=r.cPF("PADDRESS1",Fd.F6.Dc);var P4=r.cPF("PADDRESS2",Fd.F7.Dc);var P5=r.cPF("PADDRESS3",Fd.F8.Dc);var P6=r.cPF("PPOSTCODE",Fd.F9.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);r.ln=122;{r.ln=132;f.F17.set(lIO=li.CURRENTEMPLOYEEDETAILS.getEntry(1));
r.ln=135;f.F2.set(P0.get());r.ln=136;f.F4.set(P1.get());r.ln=137;f.F5.set(P2.get());r.ln=138;f.F6.set(P3.get());r.ln=139;f.F7.set(P4.get());r.ln=140;f.F8.set(P5.get());r.ln=141;f.F9.set(P6.get());r.ln=143;li.CURRENTEMPLOYEEDETAILS.updateEntry();r.ln=145;m.CURRENTEMPLOYEECHANGECOUNT.set(l.add(m.CURRENTEMPLOYEECHANGECOUNT.get(),1));r.ln=147;{var eP=l.ePs();eP.cF("XEMPLOYEEIDENTIFICATION",Fd.F2.Dc);eP.r("XEMPLOYEEIDENTIFICATION").set(f.F2.get());this.fE("CURRENTEMPLOYEECHANGED",eP);eP.e();}}r.ln=149;
r.e();};cO.mthGETCURRENTEMPLOYEEDETAILS=function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12){var li=this.LIST.DF_T53CCO,f=this.FLD.DF_T53CCO,r=l.mR(this,cO,"GetCurrentEmployeeDetails",152);var P0=r.cPF("PXEMPLOYEEIDENTIFICATION",Fd.F2.Dc);var P1=r.cPF("PSURNAME",Fd.F4.Dc);var P2=r.cPF("PGIVENAME",Fd.F5.Dc);var P3=r.cPF("PADDRESS1",Fd.F6.Dc);var P4=r.cPF("PADDRESS2",Fd.F7.Dc);var P5=r.cPF("PADDRESS3",Fd.F8.Dc);var P6=r.cPF("PPOSTCODE",Fd.F9.Dc);var P7=r.cPF("PPHONEHME",Fd.F10.Dc);var P8=r.cPF("PPHONEBUS",Fd.F11.Dc);
var P9=r.cPF("PDEPTMENT",Fd.F12.Dc);var P10=r.cPF("PSALARY",Fd.F13.Dc);var P11=r.cPF("PSTARTDTE",Fd.F14.Dc);var P12=r.cPF("PTERMDATE",Fd.F15.Dc);r.ln=152;{r.ln=167;f.F17.set(lIO=li.CURRENTEMPLOYEEDETAILS.getEntry(1));r.ln=169;P0.set(f.F2.get());r.ln=170;P1.set(f.F4.get());r.ln=171;P2.set(f.F5.get());r.ln=172;P3.set(f.F6.get());r.ln=173;P4.set(f.F7.get());r.ln=174;P5.set(f.F8.get());r.ln=175;P6.set(f.F9.get());r.ln=176;P7.set(f.F10.get());r.ln=177;P8.set(f.F11.get());r.ln=178;P9.set(f.F12.get());r.ln=179;
P10.set(f.F13.get());r.ln=180;P11.set(f.F14.get());r.ln=181;P12.set(f.F15.get());p0.set(P0.get());p1.set(P1.get());p2.set(P2.get());p3.set(P3.get());p4.set(P4.get());p5.set(P5.get());p6.set(P6.get());p7.set(P7.get());p8.set(P8.get());p9.set(P9.get());p10.set(P10.get());p11.set(P11.get());p12.set(P12.get());}r.ln=183;r.e();};cO.mthSAVECURRENTEMPLOYEE=function(p0,p1,p2){var li=this.LIST.DF_T53CCO,f=this.FLD.DF_T53CCO,m=this.REF,r=l.mR(this,cO,"SaveCurrentEmployee",187);var P0=r.cPD("FORCOMMANDHANDLER");
var P1=r.cPD("DATAITEM");var P2=r.cPF("RETURNCODE",Fd.F3.Dc);P0=p0;P1=p1;var C0=r.cDR("SAVECURRENTEMPLOYEE","DF_T53DSO","SAVECURRENTEMPLOYEE");C0.iC();r.ln=187;{r.ln=198;P0.getAVFRAMEWORKMANAGER().mthAVCLEARMESSAGES(P0,u);r.ln=201;f.F17.set(lIO=li.CURRENTEMPLOYEEDETAILS.getEntry(1));r.ln=204;C0.mthEXECUTE({FLD:{"XEMPLOYID":f.F2.get(),"XSURNAME":f.F4.get(),"XGIVENAME":f.F5.get(),"XSTREET":f.F6.get(),"XCITY":f.F7.get(),"XSTATE":f.F8.get(),"XPOSTCODE":f.F9.get()}},{FLD:{"RETURNCODE":P2}});r.ln=207;P0.getAVFRAMEWORKMANAGER().mthAVRECEIVESYSTEMMESSAGEQUEUE(P0,u);
r.ln=209;if(l.and(l.s.eq(P2.get(),"OK"),(P1!=null))){r.ln=213;m.CURRENTEMPLOYEECHANGECOUNT.set(0);r.ln=215;P1.getAVVISUALID2().set(l.add(l.cat(f.F5.get()," "),f.F4.get()));r.ln=216;P1.getAVACOLUMN1().set(f.F6.get());r.ln=217;P1.getAVACOLUMN2().set(f.F7.get());r.ln=218;P1.getAVACOLUMN3().set(f.F8.get());r.ln=219;P1.getAVACOLUMN4().set(f.F4.get());r.ln=220;P1.getAVACOLUMN5().set(f.F5.get());r.ln=221;P1.getAVACOLUMN6().set(f.F10.get());r.ln=222;P1.getAVACOLUMN7().set(f.F11.get());r.ln=223;P1.getAVACOLUMN8().set(f.F9.get());
r.ln=224;P1.getAVNCOLUMN2().set(f.F13.get());r.ln=226;P1.mthAVUPDATEDISPLAY();}p2.set(P2.get());}r.ln=230;r.e();};cO.getCURRENTEMPLOYEECHANGECOUNT=function(){return this.REF.CURRENTEMPLOYEECHANGECOUNT.get();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELRETC"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSURNAME"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTREET"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XCITY"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XSTATE"});}{Fd.F9.Dc=function()
{this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XSALARY"});}{Fd.F14.Dc=function()
{this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});}},{rp:["PRIM_OBJT","PRIM_FLD","PRIM_WEB.DataRequest"],dp:["PRIM_BMP"]});