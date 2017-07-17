﻿(function(l,u){var oI=l.cV({id:"XDEMOW_8",nm:"xDemoWebEmployeeDetails",ot:"rp",tp:"Reusable Part",de:"Employee Details",tl:3});var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("0.82"),c2=l.cDec("1.18");var rc1=l.cB("xdemow_8-ximagee_2.png");var rc2=l.cB("xdemow_8-ximaged_1.png");var Fd={F1:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],
h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F2:{nm:"SURNAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Surname........","FRA":"Nom . . . . . .","JPN":"社員姓","LLL":"Surname........"}[cL],h1:{"ENG":"Surname","FRA":"Nom","JPN":"社員姓","LLL":"Surname"}[cL],h2:"",h3:"",de:{"ENG":"Employee Surname","FRA":"Nom de l´employé","JPN":"社員姓","LLL":"Employee Surname"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"GIVENAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Given names....","FRA":"Prénom(s) . . .","JPN":"社員名.......","LLL":"Given names...."}[cL],h1:{"ENG":"Given name(s)","FRA":"Prénom(s)","JPN":"社員名","LLL":"Given name(s)"}[cL],h2:"",h3:"",de:{"ENG":"Employee Given Name(s)","FRA":"Prénoms de l´employé","JPN":"社員名","LLL":"Employee Given Name(s)"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],
h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",
h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"POSTCODE",ft:"S",
ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F8:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],
h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],dv:"",ia:["FE"]},F9:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],
h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F10:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:{"ENG":"Section........","FRA":"Section . . . .","JPN":"課コード","LLL":"Section........"}[cL],h1:{"ENG":"    Section","FRA":"Section","JPN":"課","LLL":"    Section"}[cL],h2:{"ENG":"     Code","FRA":"","JPN":"コード","LLL":"     Code"}[cL],
h3:"",de:{"ENG":"Section Code","FRA":"Code section","JPN":"課コード","LLL":"Section Code"}[cL],dv:"",ia:["FE"]},F11:{nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],dv:0,ia:["FE","RB"]},F12:{nm:"STARTDTE",ft:"S",ln:6,
dc:0,ec:"Y",lb:{"ENG":"Start date.....","FRA":"Date d´entrée .","JPN":"入社日付","LLL":"Start date....."}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"入社","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"d´entrée","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Start Date (DDMMYY)","FRA":"Date d´entrée, JJMMAA","JPN":"入社日付(DDMMYY)","LLL":"Start Date (DDMMYY)"}[cL],dv:0,ia:["FE","RB"]},F13:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Term. date.....","FRA":"Date de départ","JPN":"退職日付","LLL":"Term. date....."}[cL],
h1:{"ENG":"Term.","FRA":"Date de","JPN":"退職","LLL":"Term."}[cL],h2:{"ENG":"Date","FRA":"départ","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Termination Date (DDMMYY)","FRA":"Date de départ, JJMMAA","JPN":"退職日付(DDMMYY)","LLL":"Termination Date (DDMMYY)"}[cL],dv:0,ia:["FE","RB"]},F14:{nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Département . .","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"Dépt","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"","JPN":"コード","LLL":"  Code"}[cL],
h3:"",de:{"ENG":"Department Code","FRA":"Code du département","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F15:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]
},F16:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]},F17:{nm:"EMPIMG",ft:"BL",ln:0,dc:0,
lb:{"ENG":"Employee Image","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{ShowEmployee:{ps:{"EmployeeNumber":{pt:"i"}}},GetEmployeeDetails:{ps:{"EmployeeNumber":{pt:"i"}}},GetEmployeeImage:{
ps:{"EmployeeNumber":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_8",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cR("IMAGE","PRIM_IMAG");var C5=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C6=this.cF("EMPNO",Fd.F1.VISUAL);var C7=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C8=this.cF("SURNAME",Fd.F2.VISUALEDIT);var C9=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");
var C10=this.cF("GIVENAME",Fd.F3.VISUALEDIT);var C11=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");var C12=this.cF("ADDRESS1",Fd.F4.VISUAL);var C13=this.cR("LAYOUTITEM_5","PRIM_TBLO","Item");var C14=this.cF("ADDRESS2",Fd.F5.VISUAL);var C15=this.cR("LAYOUTITEM_6","PRIM_TBLO","Item");var C16=this.cF("ADDRESS3",Fd.F6.VISUAL);var C17=this.cR("LAYOUTITEM_7","PRIM_TBLO","Item");var C18=this.cF("POSTCODE",Fd.F7.VISUAL);var C19=this.cR("LAYOUTITEM_8","PRIM_TBLO","Item");var C20=this.cF("PHONEHME",Fd.F8.VISUAL);
var C21=this.cR("LAYOUTITEM_9","PRIM_TBLO","Item");var C22=this.cF("PHONEBUS",Fd.F9.VISUAL);var C23=this.cR("LAYOUTITEM_10","PRIM_TBLO","Item");var C24=this.cF("SECTION",Fd.F10.VISUALEDIT);var C25=this.cR("LAYOUTITEM_12","PRIM_TBLO","Item");var C26=this.cF("SALARY",Fd.F11.VISUAL);var C27=this.cR("LAYOUTITEM_13","PRIM_TBLO","Item");var C28=this.cF("STARTDTE",Fd.F12.VISUALEDIT);var C29=this.cR("LAYOUTITEM_14","PRIM_TBLO","Item");var C30=this.cF("TERMDATE",Fd.F13.VISUALEDIT);var C31=this.cR("DELETE","PRIM_IMAG");
var C32=this.cR("LAYOUTITEM_15","PRIM_TBLO","Item");var C33=this.cR("ROW_2","PRIM_TBLO","Row");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setHeight(c1);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C2);C3.setManage(C31);C3.setParent(C0);C3.setSizing("NONE");C3.setAlignment("TOPRIGHT");C3.setFlow("LEFT");C3.setRow(C1);C3.setMarginTop(4);C3.setMarginRight(4);C3.iC();C4.setDisplayPosition(2);C4.setLeft(2);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);
C4.setTop(2);C4.setHeight(243);C4.setWidth(501);C4.setImageSizing("BESTFIT");C4.setImage(rc1);C4.iC();C5.setColumn(C2);C5.setFlow("DOWN");C5.setManage(C4);C5.setParent(C0);C5.setRow(C1);C5.setMarginTop(2);C5.setMarginBottom(2);C5.setMarginLeft(2);C5.setMarginRight(2);C5.iC();C6.setComponentVersion(1);C6.setDisplayPosition(3);C6.setHeight(21);C6.setParent(this);C6.setTabPosition(2);C6.setTop(249);C6.setUsePicklist(false);C6.setWidth(251);C6.setReadOnly(true);C6.setLeft(2);C6.aD();C6.iC();C7.setAlignment("TOPLEFT");
C7.setColumn(C2);C7.setFlow("DOWN");C7.setManage(C6);C7.setParent(C0);C7.setRow(C33);C7.setSizing("NONE");C7.setMarginTop(2);C7.setMarginBottom(2);C7.setMarginLeft(2);C7.iC();C8.setDisplayPosition(4);C8.setParent(this);C8.setTabPosition(3);C8.setTop(274);C8.setLeft(2);C8.setWidth(501);C8.setReadOnly(true);C8.aD();C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C2);C9.setFlow("DOWN");C9.setManage(C8);C9.setParent(C0);C9.setRow(C33);C9.setSizing("FITTOWIDTH");C9.setMarginTop(2);C9.setMarginBottom(2);
C9.setMarginLeft(2);C9.setMarginRight(2);C9.iC();C10.setDisplayPosition(5);C10.setParent(this);C10.setTabPosition(4);C10.setTop(299);C10.setLeft(2);C10.setWidth(501);C10.setReadOnly(true);C10.aD();C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C2);C11.setFlow("DOWN");C11.setManage(C10);C11.setParent(C0);C11.setRow(C33);C11.setSizing("FITTOWIDTH");C11.setMarginTop(2);C11.setMarginBottom(2);C11.setMarginLeft(2);C11.setMarginRight(2);C11.iC();C12.setComponentVersion(1);C12.setDisplayPosition(6);
C12.setHeight(21);C12.setParent(this);C12.setTabPosition(5);C12.setTop(324);C12.setUsePicklist(false);C12.setWidth(501);C12.setLeft(2);C12.setReadOnly(true);C12.aD();C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C2);C13.setFlow("DOWN");C13.setManage(C12);C13.setParent(C0);C13.setRow(C33);C13.setSizing("FITTOWIDTH");C13.setMarginTop(2);C13.setMarginBottom(2);C13.setMarginLeft(2);C13.setMarginRight(2);C13.iC();C14.setComponentVersion(1);C14.setDisplayPosition(7);C14.setHeight(21);C14.setParent(this);
C14.setTabPosition(6);C14.setTop(349);C14.setUsePicklist(false);C14.setWidth(501);C14.setLeft(2);C14.setReadOnly(true);C14.aD();C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C2);C15.setFlow("DOWN");C15.setManage(C14);C15.setParent(C0);C15.setRow(C33);C15.setSizing("FITTOWIDTH");C15.setMarginTop(2);C15.setMarginBottom(2);C15.setMarginLeft(2);C15.setMarginRight(2);C15.iC();C16.setComponentVersion(1);C16.setDisplayPosition(8);C16.setHeight(21);C16.setParent(this);C16.setTabPosition(7);C16.setTop(374);
C16.setUsePicklist(false);C16.setWidth(501);C16.setLeft(2);C16.setReadOnly(true);C16.aD();C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C2);C17.setFlow("DOWN");C17.setManage(C16);C17.setParent(C0);C17.setRow(C33);C17.setSizing("FITTOWIDTH");C17.setMarginTop(2);C17.setMarginBottom(2);C17.setMarginLeft(2);C17.setMarginRight(2);C17.iC();C18.setComponentVersion(1);C18.setDisplayPosition(9);C18.setHeight(21);C18.setParent(this);C18.setTabPosition(8);C18.setTop(399);C18.setUsePicklist(false);C18.setWidth(266);
C18.setReadOnly(true);C18.setLeft(2);C18.aD();C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C2);C19.setFlow("DOWN");C19.setManage(C18);C19.setParent(C0);C19.setRow(C33);C19.setSizing("NONE");C19.setMarginTop(2);C19.setMarginBottom(2);C19.setMarginLeft(2);C19.iC();C20.setComponentVersion(1);C20.setDisplayPosition(10);C20.setHeight(21);C20.setParent(this);C20.setTabPosition(9);C20.setTop(424);C20.setUsePicklist(false);C20.setWidth(394);C20.setReadOnly(true);C20.setLeft(2);C20.aD();C20.iC();C21.setAlignment("TOPLEFT");
C21.setColumn(C2);C21.setFlow("DOWN");C21.setManage(C20);C21.setParent(C0);C21.setRow(C33);C21.setSizing("NONE");C21.setMarginTop(2);C21.setMarginBottom(2);C21.setMarginLeft(2);C21.iC();C22.setComponentVersion(1);C22.setDisplayPosition(11);C22.setHeight(21);C22.setParent(this);C22.setTabPosition(10);C22.setTop(449);C22.setUsePicklist(false);C22.setWidth(394);C22.setReadOnly(true);C22.setLeft(2);C22.aD();C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C2);C23.setFlow("DOWN");C23.setManage(C22);
C23.setParent(C0);C23.setRow(C33);C23.setSizing("NONE");C23.setMarginTop(2);C23.setMarginBottom(2);C23.setMarginLeft(2);C23.iC();C24.setDisplayPosition(12);C24.setParent(this);C24.setTabPosition(11);C24.setTop(474);C24.setReadOnly(true);C24.setLeft(2);C24.aD();C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C2);C25.setFlow("DOWN");C25.setManage(C24);C25.setParent(C0);C25.setRow(C33);C25.setSizing("NONE");C25.setMarginTop(2);C25.setMarginBottom(2);C25.setMarginLeft(2);C25.iC();C26.setComponentVersion(1);
C26.setDisplayPosition(13);C26.setHeight(21);C26.setParent(this);C26.setTabPosition(12);C26.setTop(499);C26.setUsePicklist(false);C26.setWidth(255);C26.setReadOnly(true);C26.setLeft(2);C26.aD();C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C2);C27.setFlow("DOWN");C27.setManage(C26);C27.setParent(C0);C27.setRow(C33);C27.setSizing("NONE");C27.setMarginTop(2);C27.setMarginBottom(2);C27.setMarginLeft(2);C27.iC();C28.setDisplayPosition(14);C28.setParent(this);C28.setTabPosition(13);C28.setTop(524);
C28.setReadOnly(true);C28.setLeft(2);C28.aD();C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C2);C29.setFlow("DOWN");C29.setManage(C28);C29.setParent(C0);C29.setRow(C33);C29.setSizing("NONE");C29.setMarginTop(2);C29.setMarginBottom(2);C29.setMarginLeft(2);C29.iC();C30.setDisplayPosition(15);C30.setParent(this);C30.setTabPosition(14);C30.setTop(549);C30.setMarginLeft(150);C30.setCaption("Term. Date (DDMMYY)");C30.setLabelType("CAPTION");C30.setReadOnly(true);C30.setLeft(2);C30.aD();C30.iC();C31.setDisplayPosition(1);
C31.setLeft(485);C31.setParent(this);C31.setTabPosition(15);C31.setTabStop(false);C31.setTop(4);C31.setImage(rc2);C31.setHeight(16);C31.setWidth(16);C31.iC();C32.setAlignment("TOPLEFT");C32.setColumn(C2);C32.setFlow("DOWN");C32.setManage(C30);C32.setParent(C0);C32.setRow(C33);C32.setSizing("NONE");C32.setMarginTop(2);C32.setMarginBottom(2);C32.setMarginLeft(2);C32.iC();C33.setDisplayPosition(2);C33.setParent(C0);C33.setHeight(c2);C33.iC();C31.aH("CLICK",this,e3);this.setDisplayPosition(1);this.setHeight(601);
this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(505);this.setLayoutManager(C0);var li=this.aL("XDEMOW_8");li.EMPLOYEE=l.cLT({"EMPNO":C6,"SURNAME":C8,"GIVENAME":C10,"ADDRESS1":C12,"ADDRESS2":C14,"ADDRESS3":C16,"POSTCODE":C18,"PHONEHME":C20,"PHONEBUS":C22,"DEPTMENT":f.F14,"SECTION":C24,"SALARY":C26,"STARTDTE":C28,"TERMDATE":C30,"EMPTHM":f.F15},null);}});cO.mthSHOWEMPLOYEE=function(p0){var r=l.mR(this,cO,"ShowEmployee",46);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);r.ln=46;
{r.ln=50;cO.mthGETEMPLOYEEDETAILS.call(this,P0.get());r.ln=51;cO.mthGETEMPLOYEEIMAGE.call(this,P0.get());}r.ln=53;r.e();};cO.mthGETEMPLOYEEDETAILS=function(p0){var li=this.LIST.XDEMOW_8,f=this.FLD.XDEMOW_8,m=this.REF,r=l.mR(this,cO,"GetEmployeeDetails",55);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMODATA","GETEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=55;{r.ln=63;C0.mthEXECUTEASYNC({FLD:{"EMPNO":P0.get()}},{FLD:{"EMPNO":m.EMPNO,"SURNAME":m.SURNAME,"GIVENAME":m.GIVENAME,"ADDRESS1":m.ADDRESS1,"ADDRESS2":m.ADDRESS2,"ADDRESS3":m.ADDRESS3,"POSTCODE":m.POSTCODE,"PHONEHME":m.PHONEHME,"PHONEBUS":m.PHONEBUS,"DEPTMENT":f.F14,"SECTION":m.SECTION,"SALARY":m.SALARY,"STARTDTE":m.STARTDTE,"TERMDATE":m.TERMDATE,"EMPTHM":f.F15}});
}r.ln=72;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.Completed",66);r.ln=66;{r.ln=68;f.F16.set(lIO=li.EMPLOYEE.getEntry(1));}r.ln=70;r.e();}};cO.mthGETEMPLOYEEIMAGE=function(p0){var f=this.FLD.XDEMOW_8,m=this.REF,r=l.mR(this,cO,"GetEmployeeImage",74);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEEIMAGE","XDEMODATA","GETEMPLOYEEIMAGE");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=74;{r.ln=80;C0.mthEXECUTEASYNC({FLD:{"EMPNO":P0.get()}},{FLD:{"EMPIMG":f.F17}});
}r.ln=90;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployeeImage.Completed",83);r.ln=83;{r.ln=86;m.IMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F17.get()));}r.ln=88;r.e();}};function e3(sender,Ps){var f=this.FLD.XDEMOW_8,m=this.REF,r=l.eR(this,cO,"#Delete.Click",92);r.ln=92;{r.ln=94;m.IMAGE.setImage(null);r.ln=95;f.F17.set("");}r.ln=97;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.eC(Fd.F1.Dc,"PRIM_FLD");Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.eC(Fd.F1.VISUAL,"PRIM_EVEF");
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.eC(Fd.F2.Dc,"PRIM_FLD");Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(419);};l.eC(Fd.F2.VISUALEDIT,"PRIM_EVEF");}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.eC(Fd.F3.Dc,"PRIM_FLD");Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(419);};l.eC(Fd.F3.VISUALEDIT,"PRIM_EVEF");
}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.eC(Fd.F4.Dc,"PRIM_FLD");Fd.F4.VISUAL=function(){this.aN.call(this,new Fd.F4.Dc());};l.eC(Fd.F4.VISUAL,"PRIM_EVEF");}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.eC(Fd.F5.Dc,"PRIM_FLD");Fd.F5.VISUAL=function(){this.aN.call(this,new Fd.F5.Dc());};l.eC(Fd.F5.VISUAL,"PRIM_EVEF");}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.eC(Fd.F6.Dc,"PRIM_FLD");Fd.F6.VISUAL=function(){this.aN.call(this,new Fd.F6.Dc());};l.eC(Fd.F6.VISUAL,"PRIM_EVEF");}{Fd.F7.Dc=function()
{this.aN.call(this,Fd.F7);};l.eC(Fd.F7.Dc,"PRIM_FLD");Fd.F7.VISUAL=function(){this.aN.call(this,new Fd.F7.Dc());};l.eC(Fd.F7.VISUAL,"PRIM_EVEF");}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.eC(Fd.F8.Dc,"PRIM_FLD");Fd.F8.VISUAL=function(){this.aN.call(this,new Fd.F8.Dc());};l.eC(Fd.F8.VISUAL,"PRIM_EVEF");}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.eC(Fd.F9.Dc,"PRIM_FLD");Fd.F9.VISUAL=function(){this.aN.call(this,new Fd.F9.Dc());};l.eC(Fd.F9.VISUAL,"PRIM_EVEF");}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);
};l.eC(Fd.F10.Dc,"PRIM_FLD");Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(201);};l.eC(Fd.F10.VISUALEDIT,"PRIM_EVEF");}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.eC(Fd.F11.Dc,"PRIM_FLD");Fd.F11.VISUAL=function(){this.aN.call(this,new Fd.F11.Dc());};l.eC(Fd.F11.VISUAL,"PRIM_EVEF");}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);};l.eC(Fd.F12.Dc,"PRIM_FLD");Fd.F12.VISUALEDIT=function()
{this.aN.call(this,new Fd.F12.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(249);};l.eC(Fd.F12.VISUALEDIT,"PRIM_EVEF");}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.eC(Fd.F13.Dc,"PRIM_FLD");Fd.F13.VISUALEDIT=function(){this.aN.call(this,new Fd.F13.Dc());this.setComponentVersion(1);this.setHeight(21);this.setMarginLeft(178);this.setUsePicklist(false);this.setWidth(279);};l.eC(Fd.F13.VISUALEDIT,"PRIM_EVEF");}}(window["LANSA"]));