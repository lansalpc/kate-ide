﻿LANSA.addComponent({id:"XDEMOW_18",nm:"xDemoWebMaintenanceMultiplePageEditor",ot:"wp",tp:"Web Page",de:"Multipage - Employee Editor",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.59"),c2=l.cDec("1.82"),c3=l.cDec(".94"),c4=l.cDec(".92");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",
dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",
dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F6:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F8:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",
an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",ia:["FE","LC"]},F12:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Home Telephone",dv:"",ia:["FE"]},F13:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F14:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Mobile Phone",dv:"",ia:["FE"]},F15:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",
lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]},F16:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F17:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",
dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Department",dv:"",ia:["FE"]},F19:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F20:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F21:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{LoadEmployee:{ps:{"EmployeeNumber":{pt:"i"}}},Update:{},Save:{}},co:function(){cO.aN.call(this);this.aF("XDEMOW_18",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("ROW_3","PRIM_TBLO","Row");var C5=this.cR("ROW_4","PRIM_TBLO","Row");var C6=this.cR("ROW_5","PRIM_TBLO","Row");var C7=this.cR("COLUMN","PRIM_TBLO","Column");
var C8=this.cR("COLUMN_2","PRIM_TBLO","Column");var C9=this.cR("COLUMN_3","PRIM_TBLO","Column");var C10=this.cR("COLUMN_4","PRIM_TBLO","Column");var C11=this.cR("MESSAGESITEM1","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");
var C19=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C21=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");var C22=this.cR("LAYOUTITEM11","PRIM_TBLO","Item");var C23=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C24=this.cR("LAYOUTITEM13","PRIM_TBLO","Item");var C25=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C26=this.cR("LAYOUTITEM15","PRIM_TBLO","Item");var C27=this.cR("LAYOUTITEM16","PRIM_TBLO","Item");var C28=this.cR("LAYOUTITEM17","PRIM_TBLO","Item");
var C29=this.cR("LAYOUTITEM18","PRIM_TBLO","Item");var C30=this.cR("IMAGE","PRIM_IMAG");var C31=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C32=this.cR("STYLE_2","PRIM_VS","Style");var C33=this.cR("BRUSH","PRIM_VS","SolidBrush");var C34=this.cR("COLUMNDIVIDER","PRIM_TBLO","ColumnDivider");var C35=this.cR("TITLE","PRIM_LABL");var C36=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C37=this.cR("SAVE","PRIM_SPBN");var C38=this.cR("LAYOUTITEM_17","PRIM_TBLO","Item");var C39=this.cR("COLUMN_5","PRIM_TBLO","Column");
var C40=this.cR("MESSAGES","XDEMO_23");var C41=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C42=this.cF("XEMPLOYEETITLE",Fd.F2.VISUALPICKLIST);var C43=this.cF("XEMPLOYEESURNAME",Fd.F3.VISUALEDIT);var C44=this.cF("XEMPLOYEEGIVENNAMES",Fd.F4.VISUALEDIT);var C45=this.cF("XEMPLOYEEDATEOFBIRTH",Fd.F5.VISUALDATE);var C46=this.cF("XEMPLOYEEGENDER",Fd.F6.VISUALPICKLIST);var C47=this.cF("XEMPLOYEESTREET",Fd.F7.VISUALEDIT);var C48=this.cF("XEMPLOYEECITY",Fd.F8.VISUALEDIT);var C49=this.cF("XEMPLOYEESTATE",Fd.F9.VISUALEDIT);
var C50=this.cF("XEMPLOYEEPOSTALCODE",Fd.F10.VISUALEDIT);var C51=this.cF("XEMPLOYEECOUNTRY",Fd.F11.VISUALEDIT);var C52=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F12.VISUALEDIT);var C53=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F13.VISUALEDIT);var C54=this.cF("XEMPLOYEEMOBILEPHONE",Fd.F14.VISUALEDIT);var C55=this.cF("XEMPLOYEESALARY",Fd.F15.VISUALEDIT);var C56=this.cF("XEMPLOYEESTARTDATE",Fd.F16.VISUALDATE);var C57=this.cF("XEMPLOYEETERMINATIONDATE",Fd.F17.VISUALDATE);var C58=this.cF("XDEPARTMENTCODE",Fd.F18.VISUALEDIT);
C0.setCursor("HAND");C0.iC();C1.setDividerStyle("GAP");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(45);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.iC();C5.setDisplayPosition(4);C5.setParent(C1);C5.iC();C6.setDisplayPosition(5);C6.setParent(C1);C6.iC();C7.setDisplayPosition(1);C7.setParent(C1);C7.iC();C8.setDisplayPosition(2);C8.setParent(C1);C8.setWidth(c2);C8.iC();C9.setDisplayPosition(4);
C9.setParent(C1);C9.setWidth(c3);C9.iC();C10.setDisplayPosition(5);C10.setParent(C1);C10.setWidth(c4);C10.iC();C11.setColumn(C7);C11.setManage(C40);C11.setParent(C1);C11.setRow(C2);C11.setSizing("NONE");C11.setRowSpan(6);C11.setColumnSpan(6);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C7);C12.setManage(C41);C12.setParent(C1);C12.setRow(C3);C12.setSizing("NONE");C12.setFlow("DOWN");C12.setMarginLeft(4);C12.setMarginTop(4);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C7);C13.setManage(C42);
C13.setParent(C1);C13.setRow(C3);C13.setSizing("NONE");C13.setFlow("DOWN");C13.setMarginLeft(4);C13.setMarginTop(4);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C7);C14.setManage(C43);C14.setParent(C1);C14.setRow(C3);C14.setSizing("NONE");C14.setFlow("DOWN");C14.setMarginLeft(4);C14.setMarginTop(4);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C7);C15.setManage(C44);C15.setParent(C1);C15.setRow(C3);C15.setSizing("NONE");C15.setFlow("DOWN");C15.setMarginLeft(4);C15.setMarginTop(4);C15.iC();
C16.setAlignment("TOPLEFT");C16.setColumn(C7);C16.setManage(C45);C16.setParent(C1);C16.setRow(C3);C16.setSizing("NONE");C16.setFlow("DOWN");C16.setMarginLeft(4);C16.setMarginTop(4);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C7);C17.setManage(C46);C17.setParent(C1);C17.setRow(C3);C17.setSizing("NONE");C17.setFlow("DOWN");C17.setMarginLeft(4);C17.setMarginTop(4);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C7);C18.setManage(C47);C18.setParent(C1);C18.setRow(C3);C18.setSizing("NONE");C18.setFlow("DOWN");
C18.setMarginLeft(4);C18.setMarginTop(4);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C7);C19.setManage(C48);C19.setParent(C1);C19.setRow(C3);C19.setSizing("NONE");C19.setFlow("DOWN");C19.setMarginLeft(4);C19.setMarginTop(4);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C7);C20.setManage(C49);C20.setParent(C1);C20.setRow(C3);C20.setSizing("NONE");C20.setFlow("DOWN");C20.setMarginLeft(4);C20.setMarginTop(4);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C7);C21.setManage(C50);C21.setParent(C1);
C21.setRow(C3);C21.setSizing("NONE");C21.setFlow("DOWN");C21.setMarginLeft(4);C21.setMarginTop(4);C21.iC();C22.setAlignment("TOPLEFT");C22.setColumn(C7);C22.setManage(C51);C22.setParent(C1);C22.setRow(C3);C22.setSizing("NONE");C22.setFlow("DOWN");C22.setMarginLeft(4);C22.setMarginTop(4);C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C7);C23.setManage(C52);C23.setParent(C1);C23.setRow(C3);C23.setSizing("NONE");C23.setFlow("DOWN");C23.setMarginLeft(4);C23.setMarginTop(4);C23.iC();C24.setAlignment("TOPLEFT");
C24.setColumn(C7);C24.setManage(C53);C24.setParent(C1);C24.setRow(C3);C24.setSizing("NONE");C24.setFlow("DOWN");C24.setMarginLeft(4);C24.setMarginTop(4);C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C7);C25.setManage(C54);C25.setParent(C1);C25.setRow(C3);C25.setSizing("NONE");C25.setFlow("DOWN");C25.setMarginLeft(4);C25.setMarginTop(4);C25.iC();C26.setAlignment("TOPLEFT");C26.setColumn(C7);C26.setManage(C55);C26.setParent(C1);C26.setRow(C3);C26.setSizing("NONE");C26.setFlow("DOWN");C26.setMarginLeft(4);
C26.setMarginTop(4);C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C7);C27.setManage(C56);C27.setParent(C1);C27.setRow(C3);C27.setSizing("NONE");C27.setFlow("DOWN");C27.setMarginLeft(4);C27.setMarginTop(4);C27.iC();C28.setAlignment("TOPLEFT");C28.setColumn(C7);C28.setManage(C57);C28.setParent(C1);C28.setRow(C3);C28.setSizing("NONE");C28.setFlow("DOWN");C28.setMarginLeft(4);C28.setMarginTop(4);C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C7);C29.setManage(C58);C29.setParent(C1);C29.setRow(C3);
C29.setSizing("NONE");C29.setFlow("DOWN");C29.setMarginLeft(4);C29.setMarginTop(4);C29.iC();C30.setDisplayPosition(1);C30.setLeft(685);C30.setParent(this);C30.setTabPosition(1);C30.setTabStop(false);C30.setHeight(587);C30.setWidth(513);C30.setTop(47);C30.setImageSizing("BESTFIT");C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C9);C31.setFlow("DOWN");C31.setManage(C30);C31.setParent(C1);C31.setRow(C3);C31.setColumnSpan(3);C31.setRowSpan(3);C31.setMarginTop(2);C31.setMarginBottom(2);C31.setMarginLeft(2);
C31.setMarginRight(2);C31.iC();C32.setCornerTopLeft(8);C32.setCornerBottomLeft(8);C32.setCornerTopRight(8);C32.setCornerBottomRight(8);C32.setBackgroundBrush(C33);C32.iC();C33.setColor("242:242:242");C33.iC();C34.setDisplayPosition(3);C34.setParent(C1);C34.setWidth(4);C34.setStartRow(C3);C34.iC();C35.setCaption("Loading...");C35.setDisplayPosition(4);C35.setEllipses("WORD");C35.setLeft(2);C35.setParent(this);C35.setTabPosition(2);C35.setTabStop(false);C35.setTop(2);C35.setVerticalAlignment("CENTER");
C35.setHeight(41);C35.setWidth(1198);C35.setMarginLeft(2);C35.setThemeDrawStyle("DarkTitle+Heading1+DarkTitle");C35.iC();C36.setAlignment("TOPLEFT");C36.setColumn(C7);C36.setFlow("DOWN");C36.setManage(C35);C36.setParent(C1);C36.setRow(C2);C36.setMarginTop(2);C36.setMarginBottom(2);C36.setMarginLeft(2);C36.setColumnSpan(6);C36.iC();C37.setCaption("Save");C37.setDisplayPosition(2);C37.setEllipses("WORD");C37.setLeft(1130);C37.setParent(this);C37.setTabPosition(3);C37.setTabStop(false);C37.setTop(2);
C37.setHeight(41);C37.setWidth(68);C37.setThemeDrawStyle("DarkTitle");C37.iC();C38.setAlignment("CENTERRIGHT");C38.setColumn(C39);C38.setFlow("LEFT");C38.setManage(C37);C38.setParent(C1);C38.setRow(C2);C38.setMarginTop(2);C38.setMarginBottom(2);C38.setMarginRight(2);C38.setSizing("FITTOHEIGHT");C38.iC();C39.setDisplayPosition(6);C39.setParent(C1);C39.setWidth(70);C39.setUnits("PIXELS");C39.iC();C40.setParent(this);C40.setLeft(388);C40.setTop(268);C40.iC();C41.setDisplayPosition(5);C41.setParent(this);
C41.setTabPosition(5);C41.setTop(49);C41.setLeft(4);C41.setHeight(22);C41.setWidth(253);C41.aD();C41.iC();C42.setDisplayPosition(6);C42.setParent(this);C42.setTabPosition(6);C42.setTop(75);C42.setLeft(4);C42.setHeight(22);C42.setWidth(253);C42.aD();C42.iC();C43.setDisplayPosition(7);C43.setParent(this);C43.setTabPosition(7);C43.setTop(101);C43.setLeft(4);C43.setHeight(22);C43.aD();C43.iC();C44.setDisplayPosition(8);C44.setParent(this);C44.setTabPosition(8);C44.setTop(127);C44.setLeft(4);C44.setHeight(22);
C44.aD();C44.iC();C45.setDisplayPosition(9);C45.setParent(this);C45.setTabPosition(9);C45.setTop(153);C45.setLeft(4);C45.setHeight(22);C45.setWidth(253);C45.aD();C45.iC();C46.setDisplayPosition(10);C46.setParent(this);C46.setTabPosition(10);C46.setTop(179);C46.setLeft(4);C46.setMarginLeft(150);C46.setHeight(22);C46.setWidth(253);C46.aD();C46.iC();C47.setDisplayPosition(11);C47.setParent(this);C47.setTabPosition(11);C47.setTop(205);C47.setLeft(4);C47.setHeight(22);C47.aD();C47.iC();C48.setDisplayPosition(12);
C48.setParent(this);C48.setTabPosition(12);C48.setTop(231);C48.setLeft(4);C48.setHeight(22);C48.aD();C48.iC();C49.setDisplayPosition(13);C49.setParent(this);C49.setTabPosition(13);C49.setTop(257);C49.setLeft(4);C49.setHeight(22);C49.aD();C49.iC();C50.setDisplayPosition(14);C50.setParent(this);C50.setTabPosition(14);C50.setTop(283);C50.setLeft(4);C50.setHeight(22);C50.setWidth(325);C50.aD();C50.iC();C51.setDisplayPosition(15);C51.setParent(this);C51.setTabPosition(15);C51.setTop(309);C51.setLeft(4);
C51.setHeight(22);C51.aD();C51.iC();C52.setDisplayPosition(16);C52.setParent(this);C52.setTabPosition(16);C52.setTop(335);C52.setLeft(4);C52.setHeight(22);C52.aD();C52.iC();C53.setDisplayPosition(17);C53.setParent(this);C53.setTabPosition(17);C53.setTop(361);C53.setLeft(4);C53.setMarginLeft(150);C53.setHeight(22);C53.aD();C53.iC();C54.setDisplayPosition(18);C54.setParent(this);C54.setTabPosition(18);C54.setTop(387);C54.setLeft(4);C54.setHeight(22);C54.aD();C54.iC();C55.setDisplayPosition(19);C55.setParent(this);
C55.setTabPosition(19);C55.setTop(413);C55.setLeft(4);C55.setHeight(22);C55.setWidth(325);C55.aD();C55.iC();C56.setDisplayPosition(20);C56.setParent(this);C56.setTabPosition(20);C56.setTop(439);C56.setLeft(4);C56.setHeight(22);C56.setWidth(261);C56.aD();C56.iC();C57.setDisplayPosition(21);C57.setParent(this);C57.setTabPosition(21);C57.setTop(465);C57.setLeft(4);C57.setHeight(22);C57.setWidth(261);C57.aD();C57.iC();C58.setDisplayPosition(22);C58.setParent(this);C58.setTabPosition(22);C58.setTop(491);
C58.setLeft(4);C58.setHeight(22);C58.setWidth(261);C58.aD();C58.iC();l.WEB().aH("URLCHANGED",this,e1);C37.aH("CLICK",this,e5);C43.aH("CHANGED",this,e3);C44.aH("CHANGED",this,e4);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#sys_web.URLChanged",80);r.ln=80;{r.ln=82;{var l1=l.WEB().getURLParameters().cI();while(l1.step()){var PARAMETER=r.sR("PARAMETER",l1.item());r.ln=84;if(l.s.ne(l.s.UpperCase(PARAMETER.getName()),"EMPLOYEE")){continue;
}r.ln=86;cO.mthLOADEMPLOYEE.call(this,PARAMETER.getValue());r.ln=88;break;r.ln=90;}l1.end();r.dR("PARAMETER");}}r.ln=92;r.e();};cO.mthLOADEMPLOYEE=function(p0){var f=this.FLD.XDEMOW_18,m=this.REF,r=l.mR(this,cO,"LoadEmployee",94);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMOW_84","GETEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=94;{r.ln=99;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":m.XEMPLOYEETITLE,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH,"XGENDER":m.XEMPLOYEEGENDER,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":m.XEMPLOYEECOUNTRY,"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE,"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE,"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE,"XSALARY":m.XEMPLOYEESALARY,"XSTARTDTE":m.XEMPLOYEESTARTDATE,"XTERMDATE":m.XEMPLOYEETERMINATIONDATE,"XDEPTMENT":m.XDEPARTMENTCODE,"XEMPTHM":f.F19,"XEMPIMG":f.F20}});
r.ln=101;m.XEMPLOYEEIDENTIFICATION.set(P0.get());}r.ln=110;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.Completed",103);r.ln=103;{r.ln=105;this.mthUPDATE();r.ln=106;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F20.get()));}r.ln=108;r.e();}};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",112);r.ln=112;{r.ln=114;this.setCaption(l.s.Substitute("&1 &2 (&3)",m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEIDENTIFICATION.get()));m.TITLE.set(l.s.Substitute("&1 &2 (&3)",m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEIDENTIFICATION.get()));
}r.ln=116;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#xEmployeeSurname.Changed",118);r.ln=118;{r.ln=120;this.mthUPDATE();}r.ln=122;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#xEmployeeGivenNames.Changed",124);r.ln=124;{r.ln=126;this.mthUPDATE();}r.ln=128;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Save.Click",130);r.ln=130;{r.ln=132;this.mthSAVE();}r.ln=134;r.e();};cO.mthSAVE=function(){var f=this.FLD.XDEMOW_18,m=this.REF,r=l.mR(this,cO,"Save",136);var C0=r.cDR("SAVEEMPLOYEE","XDEMOW_84","SAVEEMPLOYEE");
C0.iC();C0.aH("COMPLETED",this,e6);r.ln=136;{r.ln=140;l.MSGQ().mthCLEARALL();r.ln=142;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION.get(),"XEMPTITLE":m.XEMPLOYEETITLE.get(),"XSURNAME":m.XEMPLOYEESURNAME.get(),"XGIVENAME":m.XEMPLOYEEGIVENNAMES.get(),"XEMPDOB":m.XEMPLOYEEDATEOFBIRTH.get(),"XGENDER":m.XEMPLOYEEGENDER.get(),"XSTREET":m.XEMPLOYEESTREET.get(),"XCITY":m.XEMPLOYEECITY.get(),"XSTATE":m.XEMPLOYEESTATE.get(),"XPOSTCODE":m.XEMPLOYEEPOSTALCODE.get(),"XCOUNTRY":m.XEMPLOYEECOUNTRY.get(),"XPHONEHME":m.XEMPLOYEEHOMETELEPHONE.get(),"XPHONEBUS":m.XEMPLOYEEBUSINESSTELEPHONE.get(),"XPHONEMOB":m.XEMPLOYEEMOBILEPHONE.get(),"XSALARY":m.XEMPLOYEESALARY.get(),"XSTARTDTE":m.XEMPLOYEESTARTDATE.get(),"XTERMDATE":m.XEMPLOYEETERMINATIONDATE.get(),"XDEPTMENT":m.XDEPARTMENTCODE.get(),"XEMPTHM":f.F19.get(),"XEMPIMG":f.F20.get()},sm:"M"},{FLD:{"IO$STS":f.F21}});
}r.ln=158;r.e();function e6(sender,Ps){var r=l.eR(this,cO,"#SaveEmployee.Completed",144);r.ln=144;{r.ln=146;if(l.s.eq(f.F21.get(),"OK")){r.ln=148;l.WEB().getLocalStorage().mthADD("UPDATEEMPLOYEE",m.XEMPLOYEEIDENTIFICATION.get());}else{r.ln=152;m.MESSAGES.mthSHOW();}}r.ln=156;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);
this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");
C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});Fd.F2.VISUALPICKLIST=function(){this.aN.call(this,new Fd.F2.Dc());this.setAppearance("DROPDOWNLIST");this.setHeight(19);this.setComponentVersion(1);this.setWidth(251);
this.setFixedHeight(false);};l.cFC({co:Fd.F2.VISUALPICKLIST,an:"PRIM_EVPL",fn:"XEMPTITLE",cn:"VisualPicklist"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});
Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XEMPDOB"});Fd.F5.VISUALDATE=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALDATE,an:"PRIM_EVDT",fn:"XEMPDOB",cn:"VisualDate"});
}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F6.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");
};l.cFC({co:Fd.F6.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});Fd.F6.VISUALPICKLIST=function(){this.aN.call(this,new Fd.F6.Dc());this.setAppearance("DROPDOWNLIST");this.setComponentVersion(1);this.setFixedHeight(false);this.setHeight(20);this.setMarginLeft(120);this.setWidth(237);};l.cFC({co:Fd.F6.VISUALPICKLIST,an:"PRIM_EVPL",fn:"XGENDER",cn:"VisualPicklist"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());
this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F9.Dc=function()
{this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F9.VISUALEDIT=function(){this.aN.call(this,new Fd.F9.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F9.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F10.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XCOUNTRY"});Fd.F11.VISUALEDIT=function(){this.aN.call(this,new Fd.F11.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F11.VISUALEDIT,an:"PRIM_EVEF",fn:"XCOUNTRY",cn:"VisualEdit"});}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);
};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F12.VISUALEDIT=function(){this.aN.call(this,new Fd.F12.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F12.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEHME",cn:"VisualEdit"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F13.VISUALEDIT=function(){this.aN.call(this,new Fd.F13.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);
this.setComponentVersion(1);this.setMarginLeft(188);};l.cFC({co:Fd.F13.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEBUS",cn:"VisualEdit"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XPHONEMOB"});Fd.F14.VISUALEDIT=function(){this.aN.call(this,new Fd.F14.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F14.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEMOB",cn:"VisualEdit"});}{Fd.F15.Dc=function(){this.aN.call(this,Fd.F15);
};l.cFC({co:Fd.F15.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F15.VISUALEDIT=function(){this.aN.call(this,new Fd.F15.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(293);this.setComponentVersion(1);};l.cFC({co:Fd.F15.VISUALEDIT,an:"PRIM_EVEF",fn:"XSALARY",cn:"VisualEdit"});}{Fd.F16.Dc=function(){this.aN.call(this,Fd.F16);};l.cFC({co:Fd.F16.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});Fd.F16.VISUALDATE=function(){this.aN.call(this,new Fd.F16.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);
this.setComponentVersion(1);};l.cFC({co:Fd.F16.VISUALDATE,an:"PRIM_EVDT",fn:"XSTARTDTE",cn:"VisualDate"});}{Fd.F17.Dc=function(){this.aN.call(this,Fd.F17);};l.cFC({co:Fd.F17.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});Fd.F17.VISUALDATE=function(){this.aN.call(this,new Fd.F17.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F17.VISUALDATE,an:"PRIM_EVDT",fn:"XTERMDATE",cn:"VisualDate"});}{Fd.F18.Dc=function(){this.aN.call(this,Fd.F18);};l.cFC({co:Fd.F18.Dc,an:"PRIM_FLD",fn:"XDEPTMENT"});
Fd.F18.VISUALEDIT=function(){this.aN.call(this,new Fd.F18.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(201);this.setComponentVersion(1);};l.cFC({co:Fd.F18.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEPTMENT",cn:"VisualEdit"});}},{rc:["XDEMO_23","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_IMAG","PRIM_VS.SolidBrush","PRIM_TBLO.ColumnDivider","PRIM_LABL","PRIM_SPBN","PRIM_EVEF","PRIM_PKLT","PRIM_EVPL","PRIM_EVDT","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_MSGQ"]
});