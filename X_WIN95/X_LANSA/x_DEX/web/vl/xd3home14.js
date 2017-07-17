﻿LANSA.addComponent({id:"XD3HOME14",nm:"XD3HomeResponsiveDetails",ot:"rp",tp:"Reusable Part",de:"Home Responsive Details",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagei_2.png");var rc2=l.cB("xd3img06.png");var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XSURNAME",ft:"A",ln:20,
dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",ft:"A",ln:20,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"A",ln:30,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",ft:"A",ln:20,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",ft:"A",ln:20,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"XEMPDEPT",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],
h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]},F9:{nm:"XEMPTITLE",ft:"A",ln:10,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"Mr",ia:["FE","LC"]},F10:{nm:"XEMPDOB",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F11:
{nm:"XGENDER",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]},F12:{nm:"XCOUNTRY",ft:"A",ln:20,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",
ia:["FE"]},F14:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Mobile Phone",dv:"",ia:["FE"]},F16:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",
dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XEMPIMG",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{LoadEmployee:{ps:{"ID":{pt:"i"}}},ShowCloseButton:{},HideCloseButton:{}},ev:{CloseClicked:{}},co:function(){cO.aN.call(this);this.aF("XD3HOME14",Fd);
var C0=this.cR("STYLEEDIT","PRIM_VS","Style");var C1=this.cR("STYLEEDITBACKBRUSH","PRIM_VS","SolidBrush");var C2=this.cR("STYLEEDITBORDERBRUSH","PRIM_VS","SolidBrush");var C3=this.cR("STYLELABEL","PRIM_VS","Style");var C4=this.cR("STYLELABELTEXTBRUSH","PRIM_VS","SolidBrush");var C5=this.cR("STYLEBUTTON","PRIM_VS","Style");var C6=this.cR("STYLEBUTTONTEXTBRUSH","PRIM_VS","SolidBrush");var C7=this.cR("STYLEBUTTONBACKBRUSH","PRIM_VS","SolidBrush");var C8=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C9=this.cR("LAYOUTDESKTOPCOLUMN1","PRIM_TBLO","Column");
var C10=this.cR("LAYOUTDESKTOPCOLUMN2","PRIM_TBLO","Column");var C11=this.cR("LAYOUTDESKTOPROW1","PRIM_TBLO","Row");var C12=this.cR("LAYOUTDESKTOPITEM1","PRIM_TBLO","Item");var C13=this.cR("LAYOUTDESKTOPITEM2","PRIM_TBLO","Item");var C14=this.cR("LAYOUTDESKTOPITEM3","PRIM_TBLO","Item");var C15=this.cR("LAYOUTDESKTOPITEM4","PRIM_TBLO","Item");var C16=this.cR("LAYOUTDESKTOPITEM5","PRIM_TBLO","Item");var C17=this.cR("LAYOUTDESKTOPITEM6","PRIM_TBLO","Item");var C18=this.cR("LAYOUTDESKTOPITEM7","PRIM_TBLO","Item");
var C19=this.cR("LAYOUTDESKTOPITEM8","PRIM_TBLO","Item");var C20=this.cR("LAYOUTDESKTOPITEM9","PRIM_TBLO","Item");var C21=this.cR("LAYOUTDESKTOPITEM10","PRIM_TBLO","Item");var C22=this.cR("LAYOUTTABLET","PRIM_TBLO");var C23=this.cR("LAYOUTTABLETCOLUMN1","PRIM_TBLO","Column");var C24=this.cR("LAYOUTTABLETROW1","PRIM_TBLO","Row");var C25=this.cR("LAYOUTTABLETITEM1","PRIM_TBLO","Item");var C26=this.cR("LAYOUTTABLETITEM2","PRIM_TBLO","Item");var C27=this.cR("LAYOUTTABLETITEM3","PRIM_TBLO","Item");var C28=this.cR("LAYOUTTABLETITEM4","PRIM_TBLO","Item");
var C29=this.cR("LAYOUTTABLETITEM5","PRIM_TBLO","Item");var C30=this.cR("LAYOUTTABLETITEM6","PRIM_TBLO","Item");var C31=this.cR("LAYOUTTABLETITEM7","PRIM_TBLO","Item");var C32=this.cR("LAYOUTTABLETITEM8","PRIM_TBLO","Item");var C33=this.cR("LAYOUTTABLETITEM9","PRIM_TBLO","Item");var C34=this.cR("LAYOUTTABLETITEM10","PRIM_TBLO","Item");var C35=this.cR("IMAGE","PRIM_IMAG");var C36=this.cR("CLOSE","PRIM_IMAG");var C37=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C38=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);
var C39=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C40=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);var C41=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C42=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C43=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C44=this.cF("XEMPLOYEEDEPARTMENT",Fd.F8.VISUALEDIT);var C45=this.cA("APPLICATION","XD3APP");C0.setBackgroundBrush(C2);C0.setBorderBottom(1);C0.setBorderLeft(0);C0.setBorderRight(0);C0.setBorderTop(0);C0.setBorderBrush(C1);C0.iC();C1.setColor("THEME500");
C1.iC();C2.setColor("TRANSPARENT");C2.iC();C3.setForegroundBrush(C4);C3.iC();C4.setColor("97:97:97");C4.iC();C5.setBackgroundBrush(C7);C5.setForegroundBrush(C6);C5.iC();C6.setColor("WHITE");C6.iC();C7.setColor("112:112:112");C7.iC();C8.iC();C9.setDisplayPosition(1);C9.setParent(C8);C9.iC();C10.setDisplayPosition(2);C10.setParent(C8);C10.iC();C11.setDisplayPosition(1);C11.setParent(C8);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C9);C12.setManage(C35);C12.setParent(C8);C12.setRow(C11);C12.setSizing("FITTOWIDTH");
C12.setMarginLeft(8);C12.setMarginRight(8);C12.setFlow("DOWN");C12.setMarginTop(8);C12.iC();C13.setAlignment("TOPRIGHT");C13.setColumn(C10);C13.setManage(C36);C13.setParent(C8);C13.setRow(C11);C13.setSizing("NONE");C13.setMarginRight(8);C13.setFlow("DOWN");C13.setMarginTop(8);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C9);C14.setManage(C37);C14.setParent(C8);C14.setRow(C11);C14.setSizing("FITTOWIDTH");C14.setMarginLeft(8);C14.setMarginRight(8);C14.setFlow("DOWN");C14.setMarginTop(15);C14.iC();
C15.setAlignment("TOPLEFT");C15.setColumn(C9);C15.setManage(C38);C15.setParent(C8);C15.setRow(C11);C15.setSizing("FITTOWIDTH");C15.setMarginLeft(8);C15.setMarginRight(8);C15.setFlow("DOWN");C15.setMarginTop(15);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C9);C16.setManage(C39);C16.setParent(C8);C16.setRow(C11);C16.setSizing("FITTOWIDTH");C16.setMarginLeft(8);C16.setMarginRight(8);C16.setFlow("DOWN");C16.setMarginTop(15);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C9);C17.setFlow("DOWN");
C17.setManage(C40);C17.setParent(C8);C17.setRow(C11);C17.setSizing("FITTOWIDTH");C17.setMarginTop(15);C17.setMarginLeft(8);C17.setMarginRight(8);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C9);C18.setFlow("DOWN");C18.setManage(C41);C18.setParent(C8);C18.setRow(C11);C18.setSizing("FITTOWIDTH");C18.setMarginTop(15);C18.setMarginLeft(8);C18.setMarginRight(8);C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C10);C19.setFlow("DOWN");C19.setManage(C42);C19.setParent(C8);C19.setRow(C11);C19.setSizing("FITTOWIDTH");
C19.setMarginTop(15);C19.setMarginLeft(8);C19.setMarginRight(8);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C10);C20.setFlow("DOWN");C20.setManage(C43);C20.setParent(C8);C20.setRow(C11);C20.setSizing("FITTOWIDTH");C20.setMarginTop(15);C20.setMarginLeft(8);C20.setMarginRight(8);C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C10);C21.setFlow("DOWN");C21.setManage(C44);C21.setParent(C8);C21.setRow(C11);C21.setSizing("FITTOWIDTH");C21.setMarginTop(15);C21.setMarginLeft(8);C21.setMarginRight(8);
C21.iC();C22.iC();C23.setDisplayPosition(1);C23.setParent(C22);C23.iC();C24.setDisplayPosition(1);C24.setParent(C22);C24.iC();C25.setColumn(C23);C25.setFlow("DOWN");C25.setManage(C35);C25.setParent(C22);C25.setRow(C24);C25.setSizing("FITTOWIDTH");C25.setAlignment("TOPLEFT");C25.setMarginTop(4);C25.setMarginLeft(4);C25.setMarginRight(4);C25.iC();C26.setColumn(C23);C26.setFlow("DOWN");C26.setManage(C36);C26.setParent(C22);C26.setRow(C24);C26.setSizing("NONE");C26.setAlignment("TOPRIGHT");C26.setMarginTop(4);
C26.setMarginRight(4);C26.iC();C27.setColumn(C23);C27.setFlow("DOWN");C27.setManage(C37);C27.setParent(C22);C27.setRow(C24);C27.setSizing("FITTOWIDTH");C27.setAlignment("TOPLEFT");C27.setMarginTop(15);C27.setMarginLeft(4);C27.setMarginRight(4);C27.iC();C28.setColumn(C23);C28.setFlow("DOWN");C28.setManage(C38);C28.setParent(C22);C28.setRow(C24);C28.setSizing("FITTOWIDTH");C28.setAlignment("TOPLEFT");C28.setMarginTop(15);C28.setMarginLeft(4);C28.setMarginRight(4);C28.iC();C29.setColumn(C23);C29.setFlow("DOWN");
C29.setManage(C39);C29.setParent(C22);C29.setRow(C24);C29.setSizing("FITTOWIDTH");C29.setAlignment("TOPLEFT");C29.setMarginTop(15);C29.setMarginLeft(4);C29.setMarginRight(4);C29.iC();C30.setColumn(C23);C30.setFlow("DOWN");C30.setManage(C40);C30.setParent(C22);C30.setRow(C24);C30.setSizing("FITTOWIDTH");C30.setAlignment("TOPLEFT");C30.setMarginTop(15);C30.setMarginLeft(4);C30.setMarginRight(4);C30.iC();C31.setColumn(C23);C31.setFlow("DOWN");C31.setManage(C41);C31.setParent(C22);C31.setRow(C24);C31.setSizing("FITTOWIDTH");
C31.setAlignment("TOPLEFT");C31.setMarginTop(15);C31.setMarginLeft(4);C31.setMarginRight(4);C31.iC();C32.setColumn(C23);C32.setFlow("DOWN");C32.setManage(C42);C32.setParent(C22);C32.setRow(C24);C32.setSizing("FITTOWIDTH");C32.setAlignment("TOPLEFT");C32.setMarginTop(15);C32.setMarginLeft(4);C32.setMarginRight(4);C32.iC();C33.setColumn(C23);C33.setFlow("DOWN");C33.setManage(C43);C33.setParent(C22);C33.setRow(C24);C33.setSizing("FITTOWIDTH");C33.setAlignment("TOPLEFT");C33.setMarginTop(15);C33.setMarginLeft(4);
C33.setMarginRight(4);C33.iC();C34.setColumn(C23);C34.setFlow("DOWN");C34.setManage(C44);C34.setParent(C22);C34.setRow(C24);C34.setSizing("FITTOWIDTH");C34.setAlignment("TOPLEFT");C34.setMarginTop(15);C34.setMarginLeft(4);C34.setMarginRight(4);C34.iC();C35.setDisplayPosition(2);C35.setParent(this);C35.setTabPosition(2);C35.setTabStop(false);C35.setTop(8);C35.setWidth(565);C35.setHeight(300);C35.setImage(rc1);C35.setLeft(8);C35.iC();C36.setDisplayPosition(1);C36.setHeight(24);C36.setImage(rc2);C36.setLeft(1129);
C36.setParent(this);C36.setTabPosition(1);C36.setTabStop(false);C36.setTop(8);C36.setWidth(24);C36.setThemeDrawStyle("ToolbarButton");C36.setStyle(C5);C36.iC();C37.setDisplayPosition(3);C37.setParent(this);C37.setTabPosition(3);C37.setWidth(565);C37.setTop(323);C37.setLeft(8);C37.setCaption("Employee Number");C37.setLabelType("CAPTION");C37.setHeight(50);C37.setLabelPosition("TOP");C37.setMarginLeft(0);C37.setMarginTop(21);C37.setEditStyle(C0);C37.setLabelStyle(C3);C37.setReadOnly(true);C37.aD();
C37.iC();C38.setDisplayPosition(4);C38.setParent(this);C38.setTabPosition(4);C38.setWidth(565);C38.setTop(388);C38.setLeft(8);C38.setCaption("Employee Surname");C38.setLabelType("CAPTION");C38.setHeight(50);C38.setLabelPosition("TOP");C38.setMarginLeft(0);C38.setMarginTop(21);C38.setEditStyle(C0);C38.setLabelStyle(C3);C38.setReadOnly(true);C38.aD();C38.iC();C39.setDisplayPosition(5);C39.setHeight(50);C39.setParent(this);C39.setTabPosition(5);C39.setWidth(565);C39.setTop(453);C39.setLeft(8);C39.setLabelType("CAPTION");
C39.setLabelPosition("TOP");C39.setMarginLeft(0);C39.setMarginTop(21);C39.setLabelStyle(C3);C39.setEditStyle(C0);C39.setCaption("Employee Given Name(s)");C39.setReadOnly(true);C39.aD();C39.iC();C40.setDisplayPosition(6);C40.setParent(this);C40.setTabPosition(6);C40.setTop(518);C40.setWidth(565);C40.setLeft(8);C40.setLabelType("CAPTION");C40.setHeight(50);C40.setLabelPosition("TOP");C40.setMarginLeft(0);C40.setMarginTop(21);C40.setLabelStyle(C3);C40.setEditStyle(C0);C40.setCaption("Street No and Name");
C40.setReadOnly(true);C40.aD();C40.iC();C41.setComponentVersion(1);C41.setDisplayPosition(7);C41.setHeight(50);C41.setParent(this);C41.setTabPosition(7);C41.setTop(583);C41.setWidth(565);C41.setLeft(8);C41.setLabelType("CAPTION");C41.setLabelPosition("TOP");C41.setMarginLeft(0);C41.setMarginTop(21);C41.setLabelStyle(C3);C41.setEditStyle(C0);C41.setCaption("Suburb or Town");C41.setReadOnly(true);C41.aD();C41.iC();C42.setDisplayPosition(8);C42.setParent(this);C42.setTabPosition(8);C42.setTop(15);C42.setWidth(564);
C42.setLeft(589);C42.setLabelType("CAPTION");C42.setHeight(50);C42.setLabelPosition("TOP");C42.setMarginLeft(0);C42.setMarginTop(21);C42.setLabelStyle(C3);C42.setEditStyle(C0);C42.setCaption("State and Country");C42.setReadOnly(true);C42.aD();C42.iC();C43.setDisplayPosition(9);C43.setHeight(50);C43.setParent(this);C43.setTabPosition(9);C43.setTop(80);C43.setWidth(564);C43.setLeft(589);C43.setLabelType("CAPTION");C43.setLabelPosition("TOP");C43.setMarginLeft(0);C43.setMarginTop(21);C43.setLabelStyle(C3);
C43.setEditStyle(C0);C43.setCaption("Post / Zip Code");C43.setReadOnly(true);C43.aD();C43.iC();C44.setDisplayPosition(10);C44.setParent(this);C44.setTabPosition(10);C44.setTop(145);C44.setWidth(564);C44.setLeft(589);C44.setLabelType("CAPTION");C44.setHeight(50);C44.setLabelPosition("TOP");C44.setMarginLeft(0);C44.setMarginTop(21);C44.setLabelStyle(C3);C44.setEditStyle(C0);C44.setCaption("Department");C44.setReadOnly(true);C44.aD();C44.iC();if((C45!=null)&&(C45.iI()==false)){C45.iC();}C36.aH("CLICK",this,e5);
C45.aH("DESKTOPVIEW",this,e1);C45.aH("MOBILEVIEW",this,e2);C45.aH("TABLETVIEW",this,e3);this.setHeight(849);this.setWidth(1161);this.setVerticalScroll(true);this.setLayoutManager(C8);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",65);r.ln=65;{r.ln=67;this.setLayoutManager(m.LAYOUTDESKTOP);}r.ln=69;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",71);
r.ln=71;{r.ln=73;this.setLayoutManager(m.LAYOUTTABLET);}r.ln=75;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",77);r.ln=77;{r.ln=79;this.setLayoutManager(m.LAYOUTTABLET);}r.ln=81;r.e();};cO.mthLOADEMPLOYEE=function(p0){var f=this.FLD.XD3HOME14,m=this.REF,r=l.mR(this,cO,"LoadEmployee",83);var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("LOADEMPLOYEE","XD3SERV","LOADEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e4);r.ln=83;{r.ln=90;m.IMAGE.setImage(null);r.ln=91;
m.XEMPLOYEEIDENTIFICATION.set(P0.get());r.ln=92;m.XEMPLOYEESURNAME.set("");r.ln=93;m.XEMPLOYEEGIVENNAMES.set("");r.ln=94;m.XEMPLOYEESTREET.set("");r.ln=96;C0.mthEXECUTEASYNC({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":m.XEMPLOYEEIDENTIFICATION,"XEMPTITLE":f.F9,"XSURNAME":m.XEMPLOYEESURNAME,"XGIVENAME":m.XEMPLOYEEGIVENNAMES,"XEMPDOB":f.F10,"XGENDER":f.F11,"XSTREET":m.XEMPLOYEESTREET,"XCITY":m.XEMPLOYEECITY,"XSTATE":m.XEMPLOYEESTATE,"XPOSTCODE":m.XEMPLOYEEPOSTALCODE,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XEMPDEPT":m.XEMPLOYEEDEPARTMENT,"XEMPIMG":f.F19}});
}r.ln=104;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#LoadEmployee.Completed",98);r.ln=98;{r.ln=100;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F19.get()));}r.ln=102;r.e();}};cO.mthSHOWCLOSEBUTTON=function(){var m=this.REF,r=l.mR(this,cO,"ShowCloseButton",106);r.ln=106;{r.ln=108;m.CLOSE.setVisible(true);}r.ln=110;r.e();};cO.mthHIDECLOSEBUTTON=function(){var m=this.REF,r=l.mR(this,cO,"HideCloseButton",112);r.ln=112;{r.ln=114;m.CLOSE.setVisible(false);}r.ln=116;r.e();};function e5(sender,Ps){
var r=l.eR(this,cO,"#Close.Click",118);r.ln=118;{r.ln=120;this.fE("CLOSECLICKED");}r.ln=122;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});
Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});
Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XEMPDEPT"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPDEPT",cn:"VisualEdit"});
}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F9.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);
C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F9.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F11.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");
C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F11.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XD3APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_IMAG","PRIM_EVEF","PRIM_FLD","PRIM_WEB.DataRequest","PRIM_PKLT"]
});