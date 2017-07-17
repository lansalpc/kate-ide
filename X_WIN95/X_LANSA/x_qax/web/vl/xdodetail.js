﻿LANSA.addComponent({id:"XDODETAIL",nm:"xDOEmployeeDetail",ot:"rp",tp:"Reusable Part",de:"Employee Detail Screen",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec(".75");var rc1=l.cB("xdoimg10.png");var rc2=l.cB("xdoimg09.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",
ia:["FE"]},F2:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F3:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F6:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F7:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,
lb:"Postal Code",h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F8:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",ia:["FE"]},F9:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",
dv:"",ia:["FE"]},F10:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]},F11:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F12:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",
h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F13:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],dv:0,ia:["FE","RB"]
},F14:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,rm:["dt"],
mt:{ShowEmployee:{ps:{"Employee":{pt:"i"}}},SaveEmployee:{},ValidateInput:{},ShowErrorMessage:{ps:{"Control":{pt:"i"},"ErrorText":{pt:"i"}}},ClearAllErrorMessages:{},ClearErrorMessage:{ps:{"Control":{pt:"i"}}},IsCreatingEmployee:{}},ev:{VerticalScrollChanged:{ps:{"ScrolledPixels":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDODETAIL",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");
var C4=this.cR("ROW3","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C8=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM9","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM10","PRIM_TBLO","Item");
var C15=this.cR("LAYOUTITEM12","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM15","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM16","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM14","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM17","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM18","PRIM_TBLO","Item");var C21=this.cF("XEMPLOYEEIDENTIFICATION",Fd.F1.VISUALEDIT);var C22=this.cF("XEMPLOYEESURNAME",Fd.F2.VISUALEDIT);var C23=this.cF("XEMPLOYEEGIVENNAMES",Fd.F3.VISUALEDIT);var C24=this.cF("XEMPLOYEESTREET",Fd.F4.VISUALEDIT);
var C25=this.cF("XEMPLOYEECITY",Fd.F5.VISUALEDIT);var C26=this.cF("XEMPLOYEESTATE",Fd.F6.VISUALEDIT);var C27=this.cF("XEMPLOYEEPOSTALCODE",Fd.F7.VISUALEDIT);var C28=this.cF("XEMPLOYEEHOMETELEPHONE",Fd.F8.VISUALEDIT);var C29=this.cF("XEMPLOYEEBUSINESSTELEPHONE",Fd.F9.VISUALEDIT);var C30=this.cF("XEMPLOYEESALARY",Fd.F10.VISUALEDIT);var C31=this.cF("XEMPLOYEESTARTDATE",Fd.F11.VISUALDATE);var C32=this.cF("XEMPLOYEETERMINATIONDATE",Fd.F12.VISUALDATE);var C33=this.cR("SPACER","PRIM_PANL");var C34=this.cR("DEPARTMENTSDROPDOWN","XDODEPTDD");
var C35=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C36=this.cR("FILEPICKER","PRIM_WEB","FilePicker");this.cD("CURRENTEMPLOYEE");var C38=this.cR("FIELDSWITHVALIDATIONRULES","PRIM_LCOL");var C39=this.cA("GAPPLICATION","XDOAPP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(400);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.iC();C4.setDisplayPosition(3);C4.setParent(C0);C4.setHeight(25);C4.setUnits("PIXELS");
C4.iC();C5.setAlignment("TOPLEFT");C5.setColumn(C1);C5.setFlow("DOWN");C5.setManage(C21);C5.setParent(C0);C5.setRow(C3);C5.setSizing("FITTOWIDTH");C5.setMarginBottom(5);C5.setMarginLeft(10);C5.setMarginRight(10);C5.setMarginTop(5);C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C1);C6.setFlow("DOWN");C6.setManage(C22);C6.setParent(C0);C6.setRow(C3);C6.setSizing("FITTOWIDTH");C6.setMarginBottom(5);C6.setMarginLeft(10);C6.setMarginRight(10);C6.setMarginTop(5);C6.iC();C7.setAlignment("TOPLEFT");C7.setColumn(C1);
C7.setFlow("DOWN");C7.setManage(C23);C7.setParent(C0);C7.setRow(C3);C7.setSizing("FITTOWIDTH");C7.setMarginBottom(5);C7.setMarginLeft(10);C7.setMarginRight(10);C7.setMarginTop(5);C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C1);C8.setFlow("DOWN");C8.setManage(C24);C8.setParent(C0);C8.setRow(C3);C8.setSizing("FITTOWIDTH");C8.setMarginBottom(5);C8.setMarginLeft(10);C8.setMarginRight(10);C8.setMarginTop(5);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C1);C9.setFlow("DOWN");C9.setManage(C25);C9.setParent(C0);
C9.setRow(C3);C9.setSizing("FITTOWIDTH");C9.setMarginBottom(5);C9.setMarginLeft(10);C9.setMarginRight(10);C9.setMarginTop(5);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C1);C10.setFlow("DOWN");C10.setManage(C26);C10.setParent(C0);C10.setRow(C3);C10.setSizing("FITTOWIDTH");C10.setMarginBottom(5);C10.setMarginLeft(10);C10.setMarginRight(10);C10.setMarginTop(5);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C1);C11.setFlow("DOWN");C11.setManage(C27);C11.setParent(C0);C11.setRow(C3);C11.setSizing("FITTOWIDTH");
C11.setMarginBottom(5);C11.setMarginLeft(10);C11.setMarginRight(10);C11.setMarginTop(5);C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C1);C12.setFlow("DOWN");C12.setManage(C28);C12.setParent(C0);C12.setRow(C3);C12.setSizing("FITTOWIDTH");C12.setMarginBottom(5);C12.setMarginLeft(10);C12.setMarginRight(10);C12.setMarginTop(5);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C1);C13.setFlow("DOWN");C13.setManage(C29);C13.setParent(C0);C13.setRow(C3);C13.setSizing("FITTOWIDTH");C13.setMarginBottom(5);
C13.setMarginLeft(10);C13.setMarginRight(10);C13.setMarginTop(5);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C1);C14.setFlow("DOWN");C14.setParent(C0);C14.setRow(C3);C14.setSizing("FITTOWIDTH");C14.setMarginBottom(5);C14.setMarginLeft(10);C14.setMarginRight(10);C14.setMarginTop(5);C14.setManage(C34);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C1);C15.setFlow("DOWN");C15.setManage(C30);C15.setParent(C0);C15.setRow(C3);C15.setSizing("FITTOWIDTH");C15.setMarginBottom(5);C15.setMarginLeft(10);
C15.setMarginRight(10);C15.setMarginTop(5);C15.iC();C16.setColumn(C1);C16.setManage(C31);C16.setParent(C0);C16.setRow(C3);C16.setSizing("FITTOWIDTH");C16.setAlignment("TOPLEFT");C16.setFlow("DOWN");C16.setMarginTop(5);C16.setMarginBottom(5);C16.setMarginLeft(10);C16.setMarginRight(10);C16.iC();C17.setColumn(C1);C17.setManage(C32);C17.setParent(C0);C17.setRow(C3);C17.setSizing("FITTOWIDTH");C17.setAlignment("TOPLEFT");C17.setFlow("DOWN");C17.setMarginTop(5);C17.setMarginBottom(25);C17.setMarginLeft(10);
C17.setMarginRight(10);C17.iC();C18.setColumn(C1);C18.setManage(C35);C18.setParent(C0);C18.setRow(C2);C18.iC();C19.setColumn(C1);C19.setManage(C36);C19.setParent(C0);C19.setRow(C2);C19.setSizing("NONE");C19.setAlignment("BOTTOMRIGHT");C19.setMarginRight(15);C19.iC();C20.setManage(C33);C20.setParent(C0);C20.setRow(C3);C20.setSizing("FITTOWIDTH");C20.setColumn(C1);C20.setFlow("DOWN");C20.setAlignment("TOPLEFT");C20.iC();C21.setDisplayPosition(3);C21.setHeight(70);C21.setParent(this);C21.setTabPosition(2);
C21.setWidth(462);C21.setLeft(10);C21.setTop(405);C21.setLabelPosition("TOP");C21.setMarginLeft(0);C21.setMarginTop(35);C21.setLabelVerAlignment("BOTTOM");C21.aD();C21.iC();C22.setDisplayPosition(4);C22.setParent(this);C22.setTabPosition(3);C22.setTop(485);C22.setWidth(462);C22.setLeft(10);C22.setHeight(70);C22.setLabelPosition("TOP");C22.setMarginLeft(0);C22.setMarginTop(35);C22.setLabelVerAlignment("BOTTOM");C22.aD();C22.iC();C23.setDisplayPosition(5);C23.setParent(this);C23.setTabPosition(4);C23.setTop(565);
C23.setWidth(462);C23.setLeft(10);C23.setHeight(70);C23.setLabelPosition("TOP");C23.setMarginLeft(0);C23.setMarginTop(35);C23.setLabelVerAlignment("BOTTOM");C23.aD();C23.iC();C24.setDisplayPosition(6);C24.setHeight(70);C24.setParent(this);C24.setTabPosition(5);C24.setTop(645);C24.setWidth(462);C24.setLeft(10);C24.setLabelPosition("TOP");C24.setMarginLeft(0);C24.setMarginTop(35);C24.setLabelVerAlignment("BOTTOM");C24.aD();C24.iC();C25.setComponentVersion(1);C25.setDisplayPosition(7);C25.setHeight(70);
C25.setParent(this);C25.setTabPosition(6);C25.setTop(725);C25.setWidth(462);C25.setLeft(10);C25.setLabelPosition("TOP");C25.setMarginLeft(0);C25.setMarginTop(35);C25.setLabelVerAlignment("BOTTOM");C25.aD();C25.iC();C26.setDisplayPosition(8);C26.setHeight(70);C26.setParent(this);C26.setTabPosition(7);C26.setTop(805);C26.setWidth(462);C26.setLeft(10);C26.setLabelPosition("TOP");C26.setMarginLeft(0);C26.setMarginTop(35);C26.setLabelVerAlignment("BOTTOM");C26.aD();C26.iC();C27.setDisplayPosition(9);C27.setHeight(70);
C27.setParent(this);C27.setTabPosition(8);C27.setTop(885);C27.setWidth(462);C27.setLeft(10);C27.setLabelPosition("TOP");C27.setMarginLeft(0);C27.setMarginTop(35);C27.setLabelVerAlignment("BOTTOM");C27.aD();C27.iC();C28.setDisplayPosition(10);C28.setHeight(70);C28.setParent(this);C28.setTabPosition(9);C28.setTop(965);C28.setWidth(462);C28.setLeft(10);C28.setLabelPosition("TOP");C28.setMarginLeft(0);C28.setMarginTop(35);C28.setLabelVerAlignment("BOTTOM");C28.aD();C28.iC();C29.setDisplayPosition(11);
C29.setHeight(70);C29.setParent(this);C29.setTabPosition(10);C29.setTop(1045);C29.setWidth(462);C29.setLeft(10);C29.setLabelPosition("TOP");C29.setMarginLeft(0);C29.setMarginTop(35);C29.setLabelVerAlignment("BOTTOM");C29.aD();C29.iC();C30.setDisplayPosition(13);C30.setHeight(70);C30.setParent(this);C30.setTabPosition(12);C30.setTop(1205);C30.setWidth(462);C30.setLeft(10);C30.setLabelPosition("TOP");C30.setMarginLeft(0);C30.setMarginTop(35);C30.setLabelVerAlignment("BOTTOM");C30.aD();C30.iC();C31.setDisplayPosition(14);
C31.setHeight(70);C31.setParent(this);C31.setTabPosition(13);C31.setWidth(462);C31.setTop(1285);C31.setLabelPosition("TOP");C31.setMarginLeft(0);C31.setMarginTop(35);C31.setLabelVerAlignment("BOTTOM");C31.setLeft(10);C31.setComponentTag("Started");C31.aD();C31.iC();C32.setDisplayPosition(15);C32.setHeight(70);C32.setParent(this);C32.setTabPosition(14);C32.setWidth(462);C32.setTop(1365);C32.setLabelPosition("TOP");C32.setMarginLeft(0);C32.setMarginTop(35);C32.setLabelVerAlignment("BOTTOM");C32.setLeft(10);
C32.setComponentTag("Ended");C32.aD();C32.iC();C33.setHeight(25);C33.setParent(this);C33.setDisplayPosition(16);C33.setTabPosition(16);C33.setTop(1460);C33.setLeft(0);C33.setWidth(482);C33.iC();C34.setDisplayPosition(12);C34.setParent(this);C34.setTabPosition(11);C34.setLeft(10);C34.setTop(1125);C34.setWidth(462);C34.setComponentTag("Department");C34.iC();C35.setDisplayPosition(2);C35.setLeft(0);C35.setParent(this);C35.setTabPosition(1);C35.setTop(0);C35.setImageSizing("CROPPED");C35.setWidth(482);
C35.setImage(rc1);C35.setHeight(400);C35.iC();C36.setDisplayPosition(1);C36.setLeft(417);C36.setParent(this);C36.setTabPosition(15);C36.setTabStop(false);C36.setTop(350);C36.setImage(rc2);C36.iC();C38.setCollects("PRIM_EVP");C38.iC();if((C39!=null)&&(C39.iI()==false)){C39.iC();}C36.aH("FILESELECTED",this,e8);C38.aH("CHANGED",this,e7);C39.aH("EMPLOYEEOPENED",this,e4);C39.aH("EMPLOYEECREATED",this,e5);C39.aH("SAVEEMPLOYEEDETAILS",this,e6);this.setHeight(1415);this.setLayoutManager(C0);this.setComponentTag("DETAIL");
this.setVerticalScroll(true);this.setWidth(500);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.aH("CREATEINSTANCE",this,e1);this.aH("INITIALIZE",this,e2);this.aH("SIZECHANGED",this,e2);this.aH("SCROLLCHANGED",this,e3);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.CreateInstance",60);r.ln=60;{r.ln=62;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEEIDENTIFICATION);r.ln=63;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEESURNAME);r.ln=64;
m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEEGIVENNAMES);r.ln=65;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEESTREET);r.ln=66;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEECITY);r.ln=67;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEESTATE);r.ln=68;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEEPOSTALCODE);r.ln=69;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEEHOMETELEPHONE);r.ln=70;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEESALARY);r.ln=71;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEESTARTDATE);
r.ln=72;m.FIELDSWITHVALIDATIONRULES.mthINSERT(m.XEMPLOYEETERMINATIONDATE);}r.ln=74;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Initialize #COM_OWNER.SizeChanged",76);r.ln=76;{r.ln=78;m.ROW1.setHeight(l.mul(this.getWidth(),c1));}r.ln=80;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.ScrollChanged",82);r.ln=82;{r.ln=84;{var eP=l.ePs();eP.cF("SCROLLEDPIXELS",Fd.F13.Dc);eP.r("SCROLLEDPIXELS").set(l.mul(m.EMPLOYEEIMAGE.getScrollTop(),-1));this.fE("VERTICALSCROLLCHANGED",eP);
eP.e();}}r.ln=86;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeOpened",88);r.ln=88;{r.ln=90;m.XEMPLOYEEIDENTIFICATION.setReadOnly(true);r.ln=92;cO.mthSHOWEMPLOYEE.call(this,m.GAPPLICATION.ref.getCURRENTEMPLOYEE());}r.ln=94;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gApplication.EmployeeCreated",96);r.ln=96;{r.ln=98;m.XEMPLOYEEIDENTIFICATION.setReadOnly(false);r.ln=100;cO.mthSHOWEMPLOYEE.call(this,m.GAPPLICATION.ref.getCURRENTEMPLOYEE());r.ln=102;
m.DEPARTMENTSDROPDOWN.mthSELECTFIRST();r.ln=104;m.XEMPLOYEESTARTDATE.set(l.d.Now(m.XEMPLOYEESTARTDATE.get()));}r.ln=106;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#gApplication.SaveEmployeeDetails",108);var P0=Ps.r("RESULT");r.ln=108;{r.ln=110;if(cO.mthVALIDATEINPUT.call(this)){r.ln=112;this.mthSAVEEMPLOYEE();r.ln=114;P0.set(true);}}r.ln=118;r.e();};function e7(SENDER,Ps){var r=l.eR(this,cO,"#FieldsWithValidationRules<>.Changed",120);r.ln=120;{r.ln=122;cO.mthCLEARERRORMESSAGE.call(this,SENDER);
}r.ln=124;r.e();};function e8(sender,Ps){var f=this.FLD.XDODETAIL,m=this.REF,r=l.eR(this,cO,"#FilePicker.FileSelected",126);var P0=Ps.r("FILE");r.ln=126;{r.ln=128;this.setVerticalScrollPos(0);r.ln=130;f.F14.set(P0.getBlob());m.EMPLOYEEIMAGE.setFileName(P0.getBlob());}r.ln=132;r.e();};function e9(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CurrentEmployee.ImageLoaded",134);r.ln=134;{r.ln=136;m.EMPLOYEEIMAGE.setImage(m.CURRENTEMPLOYEE.getIMAGE());}r.ln=138;r.e();};cO.mthSHOWEMPLOYEE=function(p0){var f=this.FLD.XDODETAIL,m=this.REF,r=l.mR(this,cO,"ShowEmployee",144);
var P0=r.cPD("EMPLOYEE");P0=p0;r.ln=144;{r.ln=148;this.srCURRENTEMPLOYEE(P0);r.ln=151;m.XEMPLOYEEIDENTIFICATION.set(m.CURRENTEMPLOYEE.getIDENTIFIER());r.ln=152;m.XEMPLOYEESURNAME.set(m.CURRENTEMPLOYEE.getSURNAME());r.ln=153;m.XEMPLOYEEGIVENNAMES.set(m.CURRENTEMPLOYEE.getGIVENNAME());r.ln=154;m.XEMPLOYEESTREET.set(m.CURRENTEMPLOYEE.getSTREET());r.ln=155;m.XEMPLOYEECITY.set(m.CURRENTEMPLOYEE.getCITY());r.ln=156;m.XEMPLOYEESTATE.set(m.CURRENTEMPLOYEE.getSTATE());r.ln=157;m.XEMPLOYEEPOSTALCODE.set(m.CURRENTEMPLOYEE.getPOSTALCODE());
r.ln=158;m.XEMPLOYEEHOMETELEPHONE.set(m.CURRENTEMPLOYEE.getHOMETELEPHONE());r.ln=159;m.XEMPLOYEEBUSINESSTELEPHONE.set(m.CURRENTEMPLOYEE.getBUSINESSTELEPHONE());r.ln=160;m.XEMPLOYEESALARY.set(m.CURRENTEMPLOYEE.getSALARY());r.ln=161;m.XEMPLOYEESTARTDATE.set(m.CURRENTEMPLOYEE.getSTARTDATE());r.ln=162;m.XEMPLOYEETERMINATIONDATE.set(m.CURRENTEMPLOYEE.getTERMINATIONDATE());r.ln=163;m.DEPARTMENTSDROPDOWN.setDEPARTMENTCODE(m.CURRENTEMPLOYEE.getDEPARTMENTCODE());r.ln=166;f.F14.set(l.SqlNull);r.ln=167;m.EMPLOYEEIMAGE.setImage(m.CURRENTEMPLOYEE.getIMAGE());
r.ln=170;this.setVerticalScrollPos(0);r.ln=173;m.EMPLOYEEIMAGE.mthSETFOCUS();r.ln=176;this.mthCLEARALLERRORMESSAGES();}r.ln=178;r.e();};cO.mthSAVEEMPLOYEE=function(){var f=this.FLD.XDODETAIL,m=this.REF,r=l.mR(this,cO,"SaveEmployee",180);r.ln=180;{r.ln=182;m.CURRENTEMPLOYEE.mthSAVE(m.XEMPLOYEEIDENTIFICATION.get(),m.XEMPLOYEESURNAME.get(),m.XEMPLOYEEGIVENNAMES.get(),m.XEMPLOYEESTREET.get(),m.XEMPLOYEECITY.get(),m.XEMPLOYEESTATE.get(),m.XEMPLOYEEPOSTALCODE.get(),m.XEMPLOYEEHOMETELEPHONE.get(),m.XEMPLOYEEBUSINESSTELEPHONE.get(),m.XEMPLOYEESALARY.get(),m.XEMPLOYEESTARTDATE.get(),m.XEMPLOYEETERMINATIONDATE.get(),m.DEPARTMENTSDROPDOWN.getDEPARTMENTCODE(),f.F14.get());
}r.ln=184;r.e();};cO.mthVALIDATEINPUT=function(){var m=this.REF,r=l.mR(this,cO,"ValidateInput",186);var P0=r.cP("VALID","PRIM_BOLN");r.ln=186;{r.ln=190;this.mthCLEARALLERRORMESSAGES();r.ln=192;P0.set(true);r.ln=195;if(l.s.eq(l.s.Trim(m.XEMPLOYEEIDENTIFICATION.get()),"")){r.ln=197;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEIDENTIFICATION,"cannot be blank");r.ln=199;P0.set(false);}else{r.ln=203;if(((l.not(l.s.IsNumber(l.s.Trim(m.XEMPLOYEEIDENTIFICATION.get())))||l.n.lt(l.s.AsNumber(l.s.Trim(m.XEMPLOYEEIDENTIFICATION.get())),1))||l.n.gt(l.s.AsNumber(l.s.Trim(m.XEMPLOYEEIDENTIFICATION.get())),999999)))
{r.ln=205;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEIDENTIFICATION,"must be in the range 1-999999");r.ln=207;P0.set(false);}}r.ln=213;if(l.s.eq(l.s.Trim(m.XEMPLOYEESURNAME.get()),"")){r.ln=215;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESURNAME,"cannot be blank");r.ln=217;P0.set(false);}r.ln=221;if(l.s.eq(l.s.Trim(m.XEMPLOYEEGIVENNAMES.get()),"")){r.ln=223;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEGIVENNAMES,"cannot be blank");r.ln=225;P0.set(false);}r.ln=229;if(l.s.eq(l.s.Trim(m.XEMPLOYEESTREET.get()),""))
{r.ln=231;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESTREET,"cannot be blank");r.ln=233;P0.set(false);}r.ln=237;if(l.s.eq(l.s.Trim(m.XEMPLOYEECITY.get()),"")){r.ln=239;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEECITY,"cannot be blank");r.ln=241;P0.set(false);}r.ln=245;if(l.s.eq(l.s.Trim(m.XEMPLOYEESTATE.get()),"")){r.ln=247;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESTATE,"cannot be blank");r.ln=249;P0.set(false);}r.ln=253;if(l.s.eq(l.s.Trim(m.XEMPLOYEEPOSTALCODE.get()),"")){r.ln=255;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEPOSTALCODE,"cannot be blank");
r.ln=257;P0.set(false);}else{r.ln=261;if(((l.not(l.s.IsNumber(l.s.Trim(m.XEMPLOYEEPOSTALCODE.get())))||l.n.lt(l.s.AsNumber(l.s.Trim(m.XEMPLOYEEPOSTALCODE.get())),1000))||l.n.gt(l.s.AsNumber(l.s.Trim(m.XEMPLOYEEPOSTALCODE.get())),99999))){r.ln=263;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEPOSTALCODE,"must be in the range 1000-99999");r.ln=265;P0.set(false);}}r.ln=271;if(l.s.eq(l.s.Trim(m.XEMPLOYEEHOMETELEPHONE.get()),"")){r.ln=273;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEEHOMETELEPHONE,"cannot be blank");
r.ln=275;P0.set(false);}r.ln=279;if(l.n.eq(m.XEMPLOYEESALARY.get(),0)){r.ln=281;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESALARY," must be entered");r.ln=283;P0.set(false);}r.ln=287;if(l.d.IsSqlNull(m.XEMPLOYEESTARTDATE.get())){r.ln=289;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESTARTDATE,"cannot be blank");r.ln=291;P0.set(false);}else{r.ln=295;if(l.tB((cO.mthISCREATINGEMPLOYEE.call(this)&&l.dt.lt(m.XEMPLOYEESTARTDATE.get(),l.d.Now(m.XEMPLOYEESTARTDATE.get()))))){r.ln=297;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEESTARTDATE,"must be today or later");
r.ln=299;P0.set(false);}}r.ln=305;if(l.tB((l.d.IsNotSqlNull(m.XEMPLOYEETERMINATIONDATE.get())&&l.dt.lt(m.XEMPLOYEETERMINATIONDATE.get(),m.XEMPLOYEESTARTDATE.get())))){r.ln=307;cO.mthSHOWERRORMESSAGE.call(this,m.XEMPLOYEETERMINATIONDATE,"must be after the Start Date");r.ln=309;P0.set(false);}}r.ln=313;return r.rV(P0.get());};cO.mthSHOWERRORMESSAGE=function(p0,p1){var r=l.mR(this,cO,"ShowErrorMessage",315);var P0=r.cPD("CONTROL");var P1=r.cP("ERRORTEXT","PRIM_ALPH");P0=p0;P1.set(p1);r.ln=315;{r.ln=319;
P0.setCaption(l.cat(l.cat(l.cat(P0.getLabelText()," "),P1.get()),"!"));r.ln=320;P0.setLabelType("CAPTION");r.ln=323;if(l.Io(P0,"PRIM_EVEF")){r.ln=325;l.cast(P0,"PRIM_EVEF").setLabelThemeDrawStyle("FieldLabelError");r.ln=326;l.cast(P0,"PRIM_EVEF").setEditThemeDrawStyle("FieldBorderError");}r.ln=331;if(l.Io(P0,"PRIM_EVDT")){r.ln=333;l.cast(P0,"PRIM_EVDT").setLabelThemeDrawStyle("FieldLabelError");r.ln=334;l.cast(P0,"PRIM_EVDT").setEditThemeDrawStyle("FieldBorderError");}}r.ln=338;r.e();};cO.mthCLEARALLERRORMESSAGES=function()
{var m=this.REF,r=l.mR(this,cO,"ClearAllErrorMessages",340);r.ln=340;{r.ln=342;{var l1=m.FIELDSWITHVALIDATIONRULES.cI();while(l1.step()){var FIELD=r.sR("FIELD",l1.item());r.ln=344;cO.mthCLEARERRORMESSAGE.call(this,FIELD);r.ln=346;}l1.end();r.dR("FIELD");}}r.ln=348;r.e();};cO.mthCLEARERRORMESSAGE=function(p0){var r=l.mR(this,cO,"ClearErrorMessage",350);var P0=r.cPD("CONTROL");P0=p0;r.ln=350;{r.ln=353;P0.setCaption("");r.ln=354;P0.setLabelType("DESCRIPTION");r.ln=357;if(l.Io(P0,"PRIM_EVEF")){r.ln=359;
l.cast(P0,"PRIM_EVEF").setLabelThemeDrawStyle("");r.ln=360;l.cast(P0,"PRIM_EVEF").setEditThemeDrawStyle("");}r.ln=365;if(l.Io(P0,"PRIM_EVDT")){r.ln=367;l.cast(P0,"PRIM_EVDT").setLabelThemeDrawStyle("");r.ln=368;l.cast(P0,"PRIM_EVDT").setEditThemeDrawStyle("");}}r.ln=372;r.e();};cO.mthISCREATINGEMPLOYEE=function(){var m=this.REF,r=l.mR(this,cO,"IsCreatingEmployee",374);var P0=r.cP("RESULT","PRIM_BOLN");r.ln=374;{r.ln=377;P0.set(l.not(m.XEMPLOYEEIDENTIFICATION.getReadOnly()));}r.ln=379;return r.rV(P0.get());
};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(209);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XEMPLOYID",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);
this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XGIVENAME"});Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F3.VISUALEDIT,an:"PRIM_EVEF",fn:"XGIVENAME",cn:"VisualEdit"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSTREET"});Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTREET",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XCITY"});Fd.F5.VISUALEDIT=function(){this.aN.call(this,new Fd.F5.Dc());this.setHeight(19);this.setUsePicklist(false);
this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F5.VISUALEDIT,an:"PRIM_EVEF",fn:"XCITY",cn:"VisualEdit"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"XSTATE"});Fd.F6.VISUALEDIT=function(){this.aN.call(this,new Fd.F6.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F6.VISUALEDIT,an:"PRIM_EVEF",fn:"XSTATE",cn:"VisualEdit"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XPOSTCODE"});
Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(286);this.setComponentVersion(1);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"XPOSTCODE",cn:"VisualEdit"});}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.cFC({co:Fd.F8.Dc,an:"PRIM_FLD",fn:"XPHONEHME"});Fd.F8.VISUALEDIT=function(){this.aN.call(this,new Fd.F8.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);};l.cFC({co:Fd.F8.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEHME",cn:"VisualEdit"});
}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.cFC({co:Fd.F9.Dc,an:"PRIM_FLD",fn:"XPHONEBUS"});Fd.F9.VISUALEDIT=function(){this.aN.call(this,new Fd.F9.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(324);this.setComponentVersion(1);this.setMarginLeft(188);};l.cFC({co:Fd.F9.VISUALEDIT,an:"PRIM_EVEF",fn:"XPHONEBUS",cn:"VisualEdit"});}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.cFC({co:Fd.F10.Dc,an:"PRIM_FLD",fn:"XSALARY"});Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());
this.setHeight(19);this.setUsePicklist(false);this.setWidth(293);this.setComponentVersion(1);};l.cFC({co:Fd.F10.VISUALEDIT,an:"PRIM_EVEF",fn:"XSALARY",cn:"VisualEdit"});}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.cFC({co:Fd.F11.Dc,an:"PRIM_FLD",fn:"XSTARTDTE"});Fd.F11.VISUALDATE=function(){this.aN.call(this,new Fd.F11.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F11.VISUALDATE,an:"PRIM_EVDT",fn:"XSTARTDTE",cn:"VisualDate"});
}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.cFC({co:Fd.F12.Dc,an:"PRIM_FLD",fn:"XTERMDATE"});Fd.F12.VISUALDATE=function(){this.aN.call(this,new Fd.F12.Dc());this.setHeight(19);this.setShowTime(false);this.setWidth(247);this.setComponentVersion(1);};l.cFC({co:Fd.F12.VISUALDATE,an:"PRIM_EVDT",fn:"XTERMDATE",cn:"VisualDate"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"STD_INT"});}cO.srCURRENTEMPLOYEE=function(rn){if(this.REF.CURRENTEMPLOYEE!=null)
{this.REF.CURRENTEMPLOYEE.rH("IMAGELOADED",this,e9);}this.sR("CURRENTEMPLOYEE",rn);if(this.REF.CURRENTEMPLOYEE!=null){this.REF.CURRENTEMPLOYEE.aH("IMAGELOADED",this,e9);}};},{rc:["XDODEPTDD","XDOAPP"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_EVEF","PRIM_EVDT","PRIM_IMAG","PRIM_WEB.FilePicker","PRIM_LCOL","PRIM_FLD","PRIM_DTIM"],dc:["XDOEMP"]});