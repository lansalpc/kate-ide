﻿LANSA.addComponent({id:"XD4HOME15",nm:"XD4HomeMobileDetails",ot:"rp",tp:"Reusable Part",de:"Home Mobile Details",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var rc2=l.cB("xd4img06.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",
an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",
dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:"Postal Code",
h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]},F9:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:"Title",h1:"Employee",
h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"",ia:["FE","LC"]},F10:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F11:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]},F12:{nm:"XCOUNTRY",
an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",ia:["FE"]},F14:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Mobile Phone",dv:"",ia:["FE"]},F16:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",
an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{LoadEmployee:{ps:{"ID":{pt:"i"}}}},ev:{CloseClicked:{}},co:function(){cO.aN.call(this);this.aF("XD4HOME15",Fd);var C0=this.cR("STYLEEDIT","PRIM_VS","Style");
var C1=this.cR("STYLEEDITBACKBRUSH","PRIM_VS","SolidBrush");var C2=this.cR("STYLEEDITBORDERBRUSH","PRIM_VS","SolidBrush");var C3=this.cR("STYLELABEL","PRIM_VS","Style");var C4=this.cR("STYLELABELTEXTBRUSH","PRIM_VS","SolidBrush");var C5=this.cR("STYLEBUTTON","PRIM_VS","Style");var C6=this.cR("STYLEBUTTONTEXTBRUSH","PRIM_VS","SolidBrush");var C7=this.cR("STYLEBUTTONBACKBRUSH","PRIM_VS","SolidBrush");var C8=this.cR("LAYOUT","PRIM_TBLO");var C9=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C10=this.cR("LAYOUTROW1","PRIM_TBLO","Row");
var C11=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");
var C21=this.cR("IMAGE","PRIM_IMAG");var C22=this.cR("CLOSE","PRIM_IMAG");var C23=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C24=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C25=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C26=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C27=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C28=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C29=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C30=this.cF("XEMPLOYEEDEPARTMENT",Fd.F8.VISUALEDIT);
C0.setBackgroundBrush(C2);C0.setBorderBottom(1);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setBorderBrush(C1);C0.iC();C1.setColor("THEME500");C1.iC();C2.setColor("TRANSPARENT");C2.iC();C3.setForegroundBrush(C4);C3.iC();C4.setColor("97:97:97");C4.iC();C5.setBackgroundBrush(C7);C5.setForegroundBrush(C6);C5.iC();C6.setColor("WHITE");C6.iC();C7.setColor("112:112:112");C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);C10.iC();
C11.setColumn(C9);C11.setFlow("DOWN");C11.setManage(C21);C11.setParent(C8);C11.setRow(C10);C11.setSizing("FITTOWIDTH");C11.setAlignment("TOPLEFT");C11.setMarginTop(4);C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setColumn(C9);C12.setFlow("DOWN");C12.setManage(C22);C12.setParent(C8);C12.setRow(C10);C12.setSizing("NONE");C12.setAlignment("TOPRIGHT");C12.setMarginTop(4);C12.setMarginRight(4);C12.iC();C13.setColumn(C9);C13.setFlow("DOWN");C13.setManage(C23);C13.setParent(C8);C13.setRow(C10);
C13.setSizing("FITTOWIDTH");C13.setAlignment("TOPLEFT");C13.setMarginTop(15);C13.setMarginLeft(4);C13.setMarginRight(4);C13.iC();C14.setColumn(C9);C14.setFlow("DOWN");C14.setManage(C24);C14.setParent(C8);C14.setRow(C10);C14.setSizing("FITTOWIDTH");C14.setAlignment("TOPLEFT");C14.setMarginTop(15);C14.setMarginLeft(4);C14.setMarginRight(4);C14.iC();C15.setColumn(C9);C15.setFlow("DOWN");C15.setManage(C25);C15.setParent(C8);C15.setRow(C10);C15.setSizing("FITTOWIDTH");C15.setAlignment("TOPLEFT");C15.setMarginTop(15);
C15.setMarginLeft(4);C15.setMarginRight(4);C15.iC();C16.setColumn(C9);C16.setFlow("DOWN");C16.setManage(C26);C16.setParent(C8);C16.setRow(C10);C16.setSizing("FITTOWIDTH");C16.setAlignment("TOPLEFT");C16.setMarginTop(15);C16.setMarginLeft(4);C16.setMarginRight(4);C16.iC();C17.setColumn(C9);C17.setFlow("DOWN");C17.setManage(C27);C17.setParent(C8);C17.setRow(C10);C17.setSizing("FITTOWIDTH");C17.setAlignment("TOPLEFT");C17.setMarginTop(15);C17.setMarginLeft(4);C17.setMarginRight(4);C17.iC();C18.setColumn(C9);
C18.setFlow("DOWN");C18.setManage(C28);C18.setParent(C8);C18.setRow(C10);C18.setSizing("FITTOWIDTH");C18.setAlignment("TOPLEFT");C18.setMarginTop(15);C18.setMarginLeft(4);C18.setMarginRight(4);C18.iC();C19.setColumn(C9);C19.setFlow("DOWN");C19.setManage(C29);C19.setParent(C8);C19.setRow(C10);C19.setSizing("FITTOWIDTH");C19.setAlignment("TOPLEFT");C19.setMarginTop(15);C19.setMarginLeft(4);C19.setMarginRight(4);C19.iC();C20.setColumn(C9);C20.setFlow("DOWN");C20.setManage(C30);C20.setParent(C8);C20.setRow(C10);
C20.setSizing("FITTOWIDTH");C20.setAlignment("TOPLEFT");C20.setMarginTop(15);C20.setMarginLeft(4);C20.setMarginRight(4);C20.iC();C21.setDisplayPosition(2);C21.setParent(this);C21.setTabPosition(2);C21.setTabStop(false);C21.setTop(4);C21.setWidth(592);C21.setHeight(300);C21.setImage(rc1);C21.setLeft(4);C21.iC();C22.setDisplayPosition(1);C22.setHeight(24);C22.setImage(rc2);C22.setLeft(572);C22.setParent(this);C22.setTabPosition(1);C22.setTabStop(false);C22.setTop(4);C22.setWidth(24);C22.setThemeDrawStyle("ToolbarButton");
C22.setStyle(C5);C22.iC();C23.setDisplayPosition(3);C23.setParent(this);C23.setTabPosition(3);C23.setWidth(592);C23.setTop(319);C23.setLeft(4);C23.setCaption("Employee Number");C23.setLabelType("CAPTION");C23.setHeight(50);C23.setLabelPosition("TOP");C23.setMarginLeft(0);C23.setMarginTop(21);C23.setEditStyle(C0);C23.setLabelStyle(C3);C23.setReadOnly(true);C23.aD();C23.iC();C24.setDisplayPosition(4);C24.setParent(this);C24.setTabPosition(4);C24.setWidth(592);C24.setTop(384);C24.setLeft(4);C24.setCaption("Employee Surname");
C24.setLabelType("CAPTION");C24.setHeight(50);C24.setLabelPosition("TOP");C24.setMarginLeft(0);C24.setMarginTop(21);C24.setEditStyle(C0);C24.setLabelStyle(C3);C24.setReadOnly(true);C24.aD();C24.iC();C25.setDisplayPosition(5);C25.setHeight(50);C25.setParent(this);C25.setTabPosition(5);C25.setWidth(592);C25.setTop(449);C25.setLeft(4);C25.setLabelType("CAPTION");C25.setLabelPosition("TOP");C25.setMarginLeft(0);C25.setMarginTop(21);C25.setLabelStyle(C3);C25.setEditStyle(C0);C25.setCaption("Employee Given Name(s)");
C25.setReadOnly(true);C25.aD();C25.iC();C26.setDisplayPosition(6);C26.setParent(this);C26.setTabPosition(6);C26.setTop(514);C26.setWidth(592);C26.setLeft(4);C26.setLabelType("CAPTION");C26.setHeight(50);C26.setLabelPosition("TOP");C26.setMarginLeft(0);C26.setMarginTop(21);C26.setLabelStyle(C3);C26.setEditStyle(C0);C26.setCaption("Street No and Name");C26.setReadOnly(true);C26.aD();C26.iC();C27.setComponentVersion(1);C27.setDisplayPosition(7);C27.setHeight(50);C27.setParent(this);C27.setTabPosition(7);
C27.setTop(579);C27.setWidth(592);C27.setLeft(4);C27.setLabelType("CAPTION");C27.setLabelPosition("TOP");C27.setMarginLeft(0);C27.setMarginTop(21);C27.setLabelStyle(C3);C27.setEditStyle(C0);C27.setCaption("Suburb or Town");C27.setReadOnly(true);C27.aD();C27.iC();C28.setDisplayPosition(8);C28.setParent(this);C28.setTabPosition(8);C28.setTop(644);C28.setWidth(592);C28.setLeft(4);C28.setLabelType("CAPTION");C28.setHeight(50);C28.setLabelPosition("TOP");C28.setMarginLeft(0);C28.setMarginTop(21);C28.setLabelStyle(C3);
C28.setEditStyle(C0);C28.setCaption("State and Country");C28.setReadOnly(true);C28.aD();C28.iC();C29.setDisplayPosition(9);C29.setHeight(50);C29.setParent(this);C29.setTabPosition(9);C29.setTop(709);C29.setWidth(592);C29.setLeft(4);C29.setLabelType("CAPTION");C29.setLabelPosition("TOP");C29.setMarginLeft(0);C29.setMarginTop(21);C29.setLabelStyle(C3);C29.setEditStyle(C0);C29.setCaption("Post / Zip Code");C29.setReadOnly(true);C29.aD();C29.iC();C30.setDisplayPosition(10);C30.setParent(this);C30.setTabPosition(10);
C30.setTop(774);C30.setWidth(592);C30.setLeft(4);C30.setLabelType("CAPTION");C30.setHeight(50);C30.setLabelPosition("TOP");C30.setMarginLeft(0);C30.setMarginTop(21);C30.setLabelStyle(C3);C30.setEditStyle(C0);C30.setCaption("Department");C30.setReadOnly(true);C30.aD();C30.iC();C22.aH("CLICK",this,e2);this.setHeight(1000);this.setWidth(600);this.setVerticalScroll(true);this.setLayoutManager(C8);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);}});cO.mthLOADEMPLOYEE=function(p0)
{var f=this.FLD.XD4HOME15,m=this.REF,r=l.mR(this,cO,"LoadEmployee",47);var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("LOADEMPLOYEE","XD4SERV","LOADEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=47;{r.ln=54;m.IMAGE.setImage(null);r.ln=55;m.XEMPLOYEEIDENTIFICATION.set(P0.get());r.ln=56;m.XEMPLOYEESURNAME.set("");r.ln=57;m.XEMPLOYEEGIVENNAMES.set("");r.ln=58;m.XEMPLOYEESTREET.set("");r.ln=60;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":f.F9,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":f.F10,"XGENDER":f.F11,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XEMPDEPT":m.XEMPLOYEEDEPARTMENT,"XEMPIMG":f.F19}});
}r.ln=68;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#LoadEmployee.Completed",62);r.ln=62;{r.ln=64;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F19.get()));}r.ln=66;r.e();}};function e2(sender,Ps){var r=l.eR(this,cO,"#Close.Click",70);r.ln=70;{r.ln=72;this.fE("CLOSECLICKED");}r.ln=74;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};
l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);
this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});
Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});
}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XEMPDEPT"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPDEPT",cn:"VisualEdit"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F9.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");
var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");
};l.cFC({co:Fd.F9.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F11.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);
C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F11.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_EVEF","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_PKLT"]});