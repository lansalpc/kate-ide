﻿LANSA.addComponent({id:"XD3HOME09",nm:"XD3HomeDesktopDetails",ot:"rp",tp:"Reusable Part",de:"Home Desktop Details",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",an:"xEmployeeSurname",
ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]
},F5:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]},F9:{nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],
h1:{"ENG":"Standard","FRA":"Nombre","JPN":"Standard","LLL":"Standard"}[cL],h2:{"ENG":"Number","FRA":" ","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard","JPN":"Standard Number","LLL":"Standard Number"}[cL],dv:0,ia:["FE","RB"]},F10:{nm:"XD3ID",ft:"I",ln:4,dc:0,lb:"XD3Id",h1:"XD3Id",h2:"",h3:"",de:"XD3Id",dv:4},F11:{nm:"XD3FROZEN",ft:"B",ln:1,dc:0,lb:"XD3Frozen",h1:"XD3Frozen",h2:"",h3:"",de:"XD3Frozen",dv:false},F12:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",
ln:40,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"",ia:["FE","LC"]},F13:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F14:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",
ia:["FE","LC"]},F15:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",ia:["FE","LC"]},F16:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",ia:["FE"]},F17:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:"Business Phone",
h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F18:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Mobile Phone",dv:"",ia:["FE"]},F19:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]
},F20:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F22:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{Id:{da:"na"},Frozen:{da:"na"}},mt:{View1:{},View2:{},View3:{},LoadEmployee:{ps:{"ID":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XD3HOME09",Fd);
var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C2=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C3=this.cR("STYLE2","PRIM_VS","Style");var C4=this.cR("BRUSH3","PRIM_VS","SolidBrush");var C5=this.cR("STYLE3","PRIM_VS","Style");var C6=this.cR("BRUSH5","PRIM_VS","SolidBrush");var C7=this.cR("BRUSH4","PRIM_VS","SolidBrush");var C8=this.cR("LAYOUTVIEW1","PRIM_TBLO");var C9=this.cR("LAYOUTVIEW1COLUMN1","PRIM_TBLO","Column");var C10=this.cR("LAYOUTVIEW1ROW1","PRIM_TBLO","Row");
var C11=this.cR("LAYOUTVIEW1ITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTVIEW1ITEM2","PRIM_TBLO","Item");var C13=this.cR("LAYOUTVIEW1ITEM3","PRIM_TBLO","Item");var C14=this.cR("LAYOUTVIEW1ITEM4","PRIM_TBLO","Item");var C15=this.cR("LAYOUTVIEW1ITEM5","PRIM_TBLO","Item");var C16=this.cR("LAYOUTVIEW1ITEM6","PRIM_TBLO","Item");var C17=this.cR("LAYOUTVIEW1ITEM7","PRIM_TBLO","Item");var C18=this.cR("LAYOUTVIEW1ITEM8","PRIM_TBLO","Item");var C19=this.cR("LAYOUTVIEW1ITEM9","PRIM_TBLO","Item");var C20=this.cR("LAYOUTVIEW2","PRIM_TBLO");
var C21=this.cR("LAYOUTVIEW2COLUMN1","PRIM_TBLO","Column");var C22=this.cR("LAYOUTVIEW2COLUMN2","PRIM_TBLO","Column");var C23=this.cR("LAYOUTVIEW2ROW1","PRIM_TBLO","Row");var C24=this.cR("LAYOUTVIEW2ITEM1","PRIM_TBLO","Item");var C25=this.cR("LAYOUTVIEW2ITEM2","PRIM_TBLO","Item");var C26=this.cR("LAYOUTVIEW2ITEM3","PRIM_TBLO","Item");var C27=this.cR("LAYOUTVIEW2ITEM4","PRIM_TBLO","Item");var C28=this.cR("LAYOUTVIEW2ITEM5","PRIM_TBLO","Item");var C29=this.cR("LAYOUTVIEW2ITEM6","PRIM_TBLO","Item");
var C30=this.cR("LAYOUTVIEW2ITEM7","PRIM_TBLO","Item");var C31=this.cR("LAYOUTVIEW2ITEM8","PRIM_TBLO","Item");var C32=this.cR("LAYOUTVIEW2ITEM9","PRIM_TBLO","Item");var C33=this.cR("IMAGE","PRIM_IMAG");var C34=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C35=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C36=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C37=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C38=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C39=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);
var C40=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C41=this.cF("XEMPLOYEEDEPARTMENT",Fd.F8.VISUALEDIT);var C42=this.cA("APPLICATION","XD3APP");C0.setBackgroundBrush(C2);C0.setBorderBottom(1);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setBorderBrush(C1);C0.iC();C1.setColor("THEME500");C1.iC();C2.setColor("TRANSPARENT");C2.iC();C3.setForegroundBrush(C4);C3.iC();C4.setColor("97:97:97");C4.iC();C5.setBackgroundBrush(C7);C5.setForegroundBrush(C6);C5.iC();C6.setColor("WHITE");
C6.iC();C7.setColor("112:112:112");C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(1);C10.setParent(C8);C10.iC();C11.setColumn(C9);C11.setFlow("DOWN");C11.setManage(C33);C11.setParent(C8);C11.setRow(C10);C11.setSizing("FITTOWIDTH");C11.setAlignment("TOPLEFT");C11.setMarginTop(4);C11.setMarginLeft(4);C11.setMarginRight(4);C11.iC();C12.setColumn(C9);C12.setFlow("DOWN");C12.setManage(C34);C12.setParent(C8);C12.setRow(C10);C12.setSizing("FITTOWIDTH");C12.setAlignment("TOPLEFT");
C12.setMarginTop(10);C12.setMarginLeft(4);C12.setMarginRight(4);C12.iC();C13.setColumn(C9);C13.setFlow("DOWN");C13.setManage(C35);C13.setParent(C8);C13.setRow(C10);C13.setSizing("FITTOWIDTH");C13.setAlignment("TOPLEFT");C13.setMarginTop(10);C13.setMarginLeft(4);C13.setMarginRight(4);C13.iC();C14.setColumn(C9);C14.setFlow("DOWN");C14.setManage(C36);C14.setParent(C8);C14.setRow(C10);C14.setSizing("FITTOWIDTH");C14.setAlignment("TOPLEFT");C14.setMarginTop(10);C14.setMarginLeft(4);C14.setMarginRight(4);
C14.iC();C15.setColumn(C9);C15.setFlow("DOWN");C15.setManage(C37);C15.setParent(C8);C15.setRow(C10);C15.setSizing("FITTOWIDTH");C15.setAlignment("TOPLEFT");C15.setMarginTop(10);C15.setMarginLeft(4);C15.setMarginRight(4);C15.iC();C16.setColumn(C9);C16.setFlow("DOWN");C16.setManage(C38);C16.setParent(C8);C16.setRow(C10);C16.setSizing("FITTOWIDTH");C16.setAlignment("TOPLEFT");C16.setMarginTop(10);C16.setMarginLeft(4);C16.setMarginRight(4);C16.iC();C17.setColumn(C9);C17.setFlow("DOWN");C17.setManage(C39);
C17.setParent(C8);C17.setRow(C10);C17.setSizing("FITTOWIDTH");C17.setAlignment("TOPLEFT");C17.setMarginTop(10);C17.setMarginLeft(4);C17.setMarginRight(4);C17.iC();C18.setColumn(C9);C18.setFlow("DOWN");C18.setManage(C40);C18.setParent(C8);C18.setRow(C10);C18.setSizing("FITTOWIDTH");C18.setAlignment("TOPLEFT");C18.setMarginTop(10);C18.setMarginLeft(4);C18.setMarginRight(4);C18.iC();C19.setColumn(C9);C19.setFlow("DOWN");C19.setManage(C41);C19.setParent(C8);C19.setRow(C10);C19.setSizing("FITTOWIDTH");
C19.setAlignment("TOPLEFT");C19.setMarginTop(10);C19.setMarginLeft(4);C19.setMarginRight(4);C19.iC();C20.iC();C21.setDisplayPosition(1);C21.setParent(C20);C21.setMinWidth(100);C21.iC();C22.setDisplayPosition(2);C22.setParent(C20);C22.setWidth(2);C22.iC();C23.setDisplayPosition(1);C23.setParent(C20);C23.iC();C24.setAlignment("TOPLEFT");C24.setColumn(C21);C24.setManage(C33);C24.setParent(C20);C24.setRow(C23);C24.setSizing("FITTOWIDTH");C24.setMarginLeft(8);C24.setMarginRight(8);C24.setFlow("DOWN");
C24.setMarginTop(8);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C22);C25.setManage(C34);C25.setParent(C20);C25.setRow(C23);C25.setSizing("FITTOWIDTH");C25.setMarginLeft(8);C25.setMarginRight(8);C25.setFlow("DOWN");C25.setMarginTop(10);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C22);C26.setManage(C35);C26.setParent(C20);C26.setRow(C23);C26.setSizing("FITTOWIDTH");C26.setMarginLeft(8);C26.setMarginRight(8);C26.setFlow("DOWN");C26.setMarginTop(10);C26.iC();C27.setAlignment("TOPLEFT");
C27.setColumn(C22);C27.setManage(C36);C27.setParent(C20);C27.setRow(C23);C27.setSizing("FITTOWIDTH");C27.setMarginLeft(8);C27.setMarginRight(8);C27.setFlow("DOWN");C27.setMarginTop(10);C27.iC();C28.setAlignment("TOPLEFT");C28.setColumn(C22);C28.setFlow("DOWN");C28.setManage(C37);C28.setParent(C20);C28.setRow(C23);C28.setSizing("FITTOWIDTH");C28.setMarginTop(10);C28.setMarginLeft(8);C28.setMarginRight(8);C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C22);C29.setFlow("DOWN");C29.setManage(C38);
C29.setParent(C20);C29.setRow(C23);C29.setSizing("FITTOWIDTH");C29.setMarginTop(10);C29.setMarginLeft(8);C29.setMarginRight(8);C29.iC();C30.setAlignment("TOPLEFT");C30.setColumn(C22);C30.setFlow("DOWN");C30.setManage(C39);C30.setParent(C20);C30.setRow(C23);C30.setSizing("FITTOWIDTH");C30.setMarginTop(10);C30.setMarginLeft(8);C30.setMarginRight(8);C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C22);C31.setFlow("DOWN");C31.setManage(C40);C31.setParent(C20);C31.setRow(C23);C31.setSizing("FITTOWIDTH");
C31.setMarginTop(10);C31.setMarginLeft(8);C31.setMarginRight(8);C31.iC();C32.setAlignment("TOPLEFT");C32.setColumn(C22);C32.setFlow("DOWN");C32.setManage(C41);C32.setParent(C20);C32.setRow(C23);C32.setSizing("FITTOWIDTH");C32.setMarginTop(10);C32.setMarginLeft(8);C32.setMarginRight(8);C32.iC();C33.setDisplayPosition(2);C33.setParent(this);C33.setTabPosition(1);C33.setTabStop(false);C33.setTop(41);C33.setWidth(371);C33.setHeight(300);C33.setImage(rc1);C33.setLeft(8);C33.iC();C34.setDisplayPosition(3);
C34.setParent(this);C34.setTabPosition(3);C34.setWidth(758);C34.setTop(10);C34.setLeft(395);C34.setCaption("Employee Number");C34.setLabelType("CAPTION");C34.setHeight(40);C34.setLabelPosition("TOP");C34.setMarginLeft(0);C34.setMarginTop(21);C34.setEditStyle(C0);C34.setLabelStyle(C3);C34.setUsePicklist(false);C34.setReadOnly(true);C34.aD();C34.iC();C35.setDisplayPosition(4);C35.setParent(this);C35.setTabPosition(4);C35.setWidth(758);C35.setTop(60);C35.setLeft(395);C35.setCaption("Employee Surname");
C35.setLabelType("CAPTION");C35.setHeight(40);C35.setLabelPosition("TOP");C35.setMarginLeft(0);C35.setMarginTop(21);C35.setEditStyle(C0);C35.setLabelStyle(C3);C35.setReadOnly(true);C35.aD();C35.iC();C36.setComponentVersion(1);C36.setDisplayPosition(5);C36.setHeight(40);C36.setParent(this);C36.setTabPosition(5);C36.setUsePicklist(false);C36.setWidth(758);C36.setTop(110);C36.setLeft(395);C36.setLabelType("CAPTION");C36.setLabelPosition("TOP");C36.setMarginLeft(0);C36.setMarginTop(21);C36.setLabelStyle(C3);
C36.setEditStyle(C0);C36.setCaption("Employee Given Name(s)");C36.setReadOnly(true);C36.aD();C36.iC();C37.setDisplayPosition(6);C37.setParent(this);C37.setTabPosition(6);C37.setTop(160);C37.setWidth(758);C37.setLeft(395);C37.setLabelType("CAPTION");C37.setHeight(40);C37.setLabelPosition("TOP");C37.setMarginLeft(0);C37.setMarginTop(21);C37.setLabelStyle(C3);C37.setEditStyle(C0);C37.setCaption("Street No and Name");C37.setReadOnly(true);C37.aD();C37.iC();C38.setComponentVersion(1);C38.setDisplayPosition(7);
C38.setHeight(40);C38.setParent(this);C38.setTabPosition(7);C38.setTop(210);C38.setUsePicklist(false);C38.setWidth(758);C38.setLeft(395);C38.setLabelType("CAPTION");C38.setLabelPosition("TOP");C38.setMarginLeft(0);C38.setMarginTop(21);C38.setLabelStyle(C3);C38.setEditStyle(C0);C38.setCaption("Suburb or Town");C38.setReadOnly(true);C38.aD();C38.iC();C39.setDisplayPosition(8);C39.setParent(this);C39.setTabPosition(8);C39.setTop(260);C39.setWidth(758);C39.setLeft(395);C39.setLabelType("CAPTION");C39.setHeight(40);
C39.setLabelPosition("TOP");C39.setMarginLeft(0);C39.setMarginTop(21);C39.setLabelStyle(C3);C39.setEditStyle(C0);C39.setCaption("State and Country");C39.setReadOnly(true);C39.aD();C39.iC();C40.setComponentVersion(1);C40.setDisplayPosition(9);C40.setHeight(40);C40.setParent(this);C40.setTabPosition(9);C40.setTop(310);C40.setUsePicklist(false);C40.setWidth(758);C40.setLeft(395);C40.setLabelType("CAPTION");C40.setLabelPosition("TOP");C40.setMarginLeft(0);C40.setMarginTop(21);C40.setLabelStyle(C3);C40.setEditStyle(C0);
C40.setCaption("Post / Zip Code");C40.setReadOnly(true);C40.aD();C40.iC();C41.setDisplayPosition(10);C41.setParent(this);C41.setTabPosition(10);C41.setTop(360);C41.setWidth(758);C41.setLeft(395);C41.setLabelType("CAPTION");C41.setHeight(40);C41.setLabelPosition("TOP");C41.setMarginLeft(0);C41.setMarginTop(21);C41.setLabelStyle(C3);C41.setEditStyle(C0);C41.setCaption("Department");C41.setReadOnly(true);C41.aD();C41.iC();if((C42!=null)&&(C42.iI()==false)){C42.iC();}this.setHeight(921);this.setWidth(1161);
this.setVerticalScroll(true);this.setLayoutManager(C20);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.aH("SIZECHANGED",this,e2);}});cO.mthGETID=function(){var f=this.FLD.XD3HOME09,r=l.pR(this,cO,"GetId",65);var P0=r.cPF("ID",Fd.F9.Dc);r.ln=65;{r.ln=68;P0.set(f.F10.get());}r.ln=70;return r.rV(P0.get());};cO.mthSETFROZEN=function(p0){var f=this.FLD.XD3HOME09,r=l.pR(this,cO,"SetFrozen",72);var P0=r.cP("FROZEN","PRIM_BOLN");P0.set(p0);r.ln=72;{r.ln=75;f.F11.set(P0.get());
}r.ln=77;r.e();};cO.mthVIEW1=function(){var m=this.REF,r=l.mR(this,cO,"View1",79);r.ln=79;{r.ln=81;this.setLayoutManager(m.LAYOUTVIEW1);}r.ln=83;r.e();};cO.mthVIEW2=function(){var m=this.REF,r=l.mR(this,cO,"View2",85);r.ln=85;{r.ln=87;this.setLayoutManager(m.LAYOUTVIEW2);r.ln=89;m.LAYOUTVIEW2COLUMN2.setWidth(2);r.ln=90;m.IMAGE.setHeight(300);r.ln=92;m.XEMPLOYEEIDENTIFICATION.setLabelPosition("TOP");m.XEMPLOYEESURNAME.setLabelPosition("TOP");m.XEMPLOYEEGIVENNAMES.setLabelPosition("TOP");m.XEMPLOYEESTREET.setLabelPosition("TOP");
m.XEMPLOYEECITY.setLabelPosition("TOP");m.XEMPLOYEESTATE.setLabelPosition("TOP");m.XEMPLOYEEPOSTALCODE.setLabelPosition("TOP");m.XEMPLOYEEDEPARTMENT.setLabelPosition("TOP");r.ln=93;m.XEMPLOYEEIDENTIFICATION.setMarginLeft(0);m.XEMPLOYEESURNAME.setMarginLeft(0);m.XEMPLOYEEGIVENNAMES.setMarginLeft(0);m.XEMPLOYEESTREET.setMarginLeft(0);m.XEMPLOYEECITY.setMarginLeft(0);m.XEMPLOYEESTATE.setMarginLeft(0);m.XEMPLOYEEPOSTALCODE.setMarginLeft(0);m.XEMPLOYEEDEPARTMENT.setMarginLeft(0);r.ln=94;m.XEMPLOYEEIDENTIFICATION.setMarginTop(21);
m.XEMPLOYEESURNAME.setMarginTop(21);m.XEMPLOYEEGIVENNAMES.setMarginTop(21);m.XEMPLOYEESTREET.setMarginTop(21);m.XEMPLOYEECITY.setMarginTop(21);m.XEMPLOYEESTATE.setMarginTop(21);m.XEMPLOYEEPOSTALCODE.setMarginTop(21);m.XEMPLOYEEDEPARTMENT.setMarginTop(21);r.ln=95;m.XEMPLOYEEIDENTIFICATION.setHeight(40);m.XEMPLOYEESURNAME.setHeight(40);m.XEMPLOYEEGIVENNAMES.setHeight(40);m.XEMPLOYEESTREET.setHeight(40);m.XEMPLOYEECITY.setHeight(40);m.XEMPLOYEESTATE.setHeight(40);m.XEMPLOYEEPOSTALCODE.setHeight(40);
m.XEMPLOYEEDEPARTMENT.setHeight(40);}r.ln=97;r.e();};cO.mthVIEW3=function(){var m=this.REF,r=l.mR(this,cO,"View3",99);r.ln=99;{r.ln=101;this.setLayoutManager(m.LAYOUTVIEW2);r.ln=103;m.LAYOUTVIEW2COLUMN2.setWidth(4);r.ln=104;m.IMAGE.setHeight(150);r.ln=106;m.XEMPLOYEEIDENTIFICATION.setLabelPosition("LEFT");m.XEMPLOYEESURNAME.setLabelPosition("LEFT");m.XEMPLOYEEGIVENNAMES.setLabelPosition("LEFT");m.XEMPLOYEESTREET.setLabelPosition("LEFT");m.XEMPLOYEECITY.setLabelPosition("LEFT");m.XEMPLOYEESTATE.setLabelPosition("LEFT");
m.XEMPLOYEEPOSTALCODE.setLabelPosition("LEFT");m.XEMPLOYEEDEPARTMENT.setLabelPosition("LEFT");r.ln=107;m.XEMPLOYEEIDENTIFICATION.setMarginLeft(150);m.XEMPLOYEESURNAME.setMarginLeft(150);m.XEMPLOYEEGIVENNAMES.setMarginLeft(150);m.XEMPLOYEESTREET.setMarginLeft(150);m.XEMPLOYEECITY.setMarginLeft(150);m.XEMPLOYEESTATE.setMarginLeft(150);m.XEMPLOYEEPOSTALCODE.setMarginLeft(150);m.XEMPLOYEEDEPARTMENT.setMarginLeft(150);r.ln=108;m.XEMPLOYEEIDENTIFICATION.setMarginTop(0);m.XEMPLOYEESURNAME.setMarginTop(0);
m.XEMPLOYEEGIVENNAMES.setMarginTop(0);m.XEMPLOYEESTREET.setMarginTop(0);m.XEMPLOYEECITY.setMarginTop(0);m.XEMPLOYEESTATE.setMarginTop(0);m.XEMPLOYEEPOSTALCODE.setMarginTop(0);m.XEMPLOYEEDEPARTMENT.setMarginTop(0);r.ln=109;m.XEMPLOYEEIDENTIFICATION.setHeight(20);m.XEMPLOYEESURNAME.setHeight(20);m.XEMPLOYEEGIVENNAMES.setHeight(20);m.XEMPLOYEESTREET.setHeight(20);m.XEMPLOYEECITY.setHeight(20);m.XEMPLOYEESTATE.setHeight(20);m.XEMPLOYEEPOSTALCODE.setHeight(20);m.XEMPLOYEEDEPARTMENT.setHeight(20);}r.ln=111;
r.e();};cO.mthLOADEMPLOYEE=function(p0){var f=this.FLD.XD3HOME09,m=this.REF,r=l.mR(this,cO,"LoadEmployee",113);var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("LOADEMPLOYEE","XD3SERV","LOADEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=113;{r.ln=120;m.IMAGE.setImage(null);r.ln=122;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":f.F12,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":f.F13,"XGENDER":f.F14,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":f.F15,"XPHONEHME":f.F16,"XPHONEBUS":f.F17,"XPHONEMOB":f.F18,"XSALARY":f.F19,"XSTARTDTE":f.F20,"XTERMDATE":f.F21,"XEMPDEPT":m.XEMPLOYEEDEPARTMENT,"XEMPIMG":f.F22}});
}r.ln=130;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#LoadEmployee.Completed",124);r.ln=124;{r.ln=126;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F22.get()));}r.ln=128;r.e();}};function e2(sender,Ps){var r=l.eR(this,cO,"#COM_OWNER.SizeChanged",132);r.ln=132;{r.ln=134;if(l.n.gt(this.getHeight(),650)){r.ln=136;this.mthVIEW1();}else{r.ln=140;if(l.n.lt(this.getHeight(),350)){r.ln=142;this.mthVIEW3();}else{r.ln=146;if(l.n.lt(this.getWidth(),300)){r.ln=148;this.mthVIEW3();}else{r.ln=152;this.mthVIEW2();
}}}}r.ln=160;r.e();};cO.getID=function(){return this.mthGETID();};cO.setFROZEN=function(v){this.mthSETFROZEN(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});
Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);
};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XEMPDEPT"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);
this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPDEPT",cn:"VisualEdit"});}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"STD_NUM"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F12.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");
C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F12.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XGENDER"});
Fd.F14.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F14.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XD3APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_EVEF","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_PKLT"]
});