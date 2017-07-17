﻿(function(l,u){var oI=l.cV({id:"XDEMOW_20",nm:"xDemoWebMaintenanceFrameEditor",ot:"wp",tp:"Web Page",de:"Editing in a Frame Editor",tl:3});var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.59"),c2=l.cDec("0.94");var Fd={F1:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],
h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F2:{nm:"SURNAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Surname........","FRA":"Nom . . . . . .","JPN":"社員姓","LLL":"Surname........"}[cL],h1:{"ENG":"Surname","FRA":"Nom","JPN":"社員姓","LLL":"Surname"}[cL],h2:"",h3:"",de:{"ENG":"Employee Surname","FRA":"Nom de l´employé","JPN":"社員姓","LLL":"Employee Surname"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"GIVENAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Given names....","FRA":"Prénom(s) . . .","JPN":"社員名.......","LLL":"Given names...."}[cL],
h1:{"ENG":"Given name(s)","FRA":"Prénom(s)","JPN":"社員名","LLL":"Given name(s)"}[cL],h2:"",h3:"",de:{"ENG":"Employee Given Name(s)","FRA":"Prénoms de l´employé","JPN":"社員名","LLL":"Employee Given Name(s)"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],
dv:"",ia:["FE","LC"]},F5:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"POSTCODE",ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],
h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F8:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],
dv:"",ia:["FE"]},F9:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F10:{nm:"DEPTMENT",
ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Département . .","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"Dépt","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"","JPN":"コード","LLL":"  Code"}[cL],h3:"",de:{"ENG":"Department Code","FRA":"Code du département","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F11:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:{"ENG":"Section........","FRA":"Section . . . .","JPN":"課コード","LLL":"Section........"}[cL],h1:{"ENG":"    Section","FRA":"Section","JPN":"課","LLL":"    Section"}[cL],
h2:{"ENG":"     Code","FRA":"","JPN":"コード","LLL":"     Code"}[cL],h3:"",de:{"ENG":"Section Code","FRA":"Code section","JPN":"課コード","LLL":"Section Code"}[cL],dv:"",ia:["FE"]},F12:{nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],
dv:0,ia:["FE","RB"]},F13:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Start date.....","FRA":"Date d´entrée .","JPN":"入社日付","LLL":"Start date....."}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"入社","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"d´entrée","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Start Date (DDMMYY)","FRA":"Date d´entrée, JJMMAA","JPN":"入社日付(DDMMYY)","LLL":"Start Date (DDMMYY)"}[cL],dv:0,ia:["FE","RB"]},F14:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Term. date.....","FRA":"Date de départ","JPN":"退職日付","LLL":"Term. date....."}[cL],
h1:{"ENG":"Term.","FRA":"Date de","JPN":"退職","LLL":"Term."}[cL],h2:{"ENG":"Date","FRA":"départ","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Termination Date (DDMMYY)","FRA":"Date de départ, JJMMAA","JPN":"退職日付(DDMMYY)","LLL":"Termination Date (DDMMYY)"}[cL],dv:0,ia:["FE","RB"]},F15:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],
h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F16:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{LoadEmployee:{ps:{"EmployeeNumber":{pt:"i"}}},Update:{},Save:{}},co:function(){cO.aN.call(this);this.aF("XDEMOW_20",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("ROW_2","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("MESSAGESITEM1","PRIM_TBLO","Item");var C6=this.cR("IMAGE","PRIM_IMAG");var C7=this.cR("LAYOUTITEM","PRIM_TBLO","Item");
var C8=this.cR("STYLE_2","PRIM_VS","Style");var C9=this.cR("BRUSH","PRIM_VS","SolidBrush");var C10=this.cF("EMPNO",Fd.F1.VISUAL);var C11=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C12=this.cF("SURNAME",Fd.F2.VISUALEDIT);var C13=this.cR("LAYOUTITEM_4","PRIM_TBLO","Item");var C14=this.cF("GIVENAME",Fd.F3.VISUALEDIT);var C15=this.cR("LAYOUTITEM_5","PRIM_TBLO","Item");var C16=this.cF("ADDRESS1",Fd.F4.VISUAL);var C17=this.cR("LAYOUTITEM_6","PRIM_TBLO","Item");var C18=this.cF("ADDRESS2",Fd.F5.VISUAL);
var C19=this.cR("LAYOUTITEM_7","PRIM_TBLO","Item");var C20=this.cF("ADDRESS3",Fd.F6.VISUAL);var C21=this.cR("LAYOUTITEM_8","PRIM_TBLO","Item");var C22=this.cF("POSTCODE",Fd.F7.VISUAL);var C23=this.cR("LAYOUTITEM_9","PRIM_TBLO","Item");var C24=this.cF("PHONEHME",Fd.F8.VISUAL);var C25=this.cR("LAYOUTITEM_10","PRIM_TBLO","Item");var C26=this.cF("PHONEBUS",Fd.F9.VISUAL);var C27=this.cR("LAYOUTITEM_11","PRIM_TBLO","Item");var C28=this.cF("DEPTMENT",Fd.F10.VISUALEDIT);var C29=this.cR("LAYOUTITEM_12","PRIM_TBLO","Item");
var C30=this.cF("SECTION",Fd.F11.VISUALEDIT);var C31=this.cR("LAYOUTITEM_13","PRIM_TBLO","Item");var C32=this.cF("SALARY",Fd.F12.VISUAL);var C33=this.cR("LAYOUTITEM_14","PRIM_TBLO","Item");var C34=this.cF("STARTDTE",Fd.F13.VISUALEDIT);var C35=this.cR("LAYOUTITEM_15","PRIM_TBLO","Item");var C36=this.cF("TERMDATE",Fd.F14.VISUALEDIT);var C37=this.cR("LAYOUTITEM_16","PRIM_TBLO","Item");var C38=this.cR("COLUMNDIVIDER","PRIM_TBLO","ColumnDivider");var C39=this.cR("TITLE","PRIM_LABL");var C40=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");
var C41=this.cR("COLUMN_5","PRIM_TBLO","Column");var C42=this.cR("SAVE","PRIM_SPBN");var C43=this.cR("LAYOUTITEM_17","PRIM_TBLO","Item");var C44=this.cR("CLOSE","PRIM_SPBN");var C45=this.cR("LAYOUTITEM_18","PRIM_TBLO","Item");var C46=this.cR("MESSAGES","XDEMO_23");C0.setCursor("HAND");C0.iC();C1.setDividerStyle("GAP");C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(45);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(1);
C4.setParent(C1);C4.setWidth(c2);C4.iC();C5.setColumn(C4);C5.setManage(C46);C5.setParent(C1);C5.setRow(C2);C5.setSizing("NONE");C5.setColumnSpan(3);C5.setRowSpan(2);C5.iC();C6.setDisplayPosition(1);C6.setLeft(742);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setHeight(751);C6.setWidth(456);C6.setTop(47);C6.setImageSizing("BESTFIT");C6.iC();C7.setColumn(C41);C7.setManage(C6);C7.setParent(C1);C7.setRow(C3);C7.setRowSpan(3);C7.setMarginTop(2);C7.setMarginBottom(2);C7.setMarginLeft(2);
C7.setMarginRight(2);C7.iC();C8.setCornerTopLeft(8);C8.setCornerBottomLeft(8);C8.setCornerTopRight(8);C8.setCornerBottomRight(8);C8.setBackgroundBrush(C9);C8.iC();C9.setColor("242:242:242");C9.iC();C10.setComponentVersion(1);C10.setDisplayPosition(4);C10.setHeight(22);C10.setLeft(4);C10.setParent(this);C10.setTabPosition(16);C10.setUsePicklist(false);C10.setWidth(251);C10.setTop(47);C10.setMarginLeft(170);C10.setReadOnly(true);C10.setLabelSelectable(false);C10.aD();C10.iC();C11.setAlignment("TOPLEFT");
C11.setColumn(C4);C11.setFlow("DOWN");C11.setManage(C10);C11.setParent(C1);C11.setRow(C3);C11.setSizing("NONE");C11.setMarginLeft(4);C11.setMarginTop(2);C11.setMarginBottom(2);C11.iC();C12.setDisplayPosition(5);C12.setLeft(4);C12.setParent(this);C12.setTabPosition(2);C12.setTop(73);C12.setHeight(22);C12.setMarginLeft(170);C12.setWidth(734);C12.setLabelSelectable(false);C12.aD();C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C4);C13.setFlow("DOWN");C13.setManage(C12);C13.setParent(C1);C13.setRow(C3);
C13.setSizing("FITTOWIDTH");C13.setMarginLeft(4);C13.setMarginTop(2);C13.setMarginBottom(2);C13.setColumnSpan(2);C13.setMarginRight(2);C13.iC();C14.setDisplayPosition(6);C14.setLeft(4);C14.setParent(this);C14.setTabPosition(3);C14.setTop(99);C14.setHeight(22);C14.setMarginLeft(170);C14.setWidth(734);C14.setLabelSelectable(false);C14.aD();C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C4);C15.setFlow("DOWN");C15.setManage(C14);C15.setParent(C1);C15.setRow(C3);C15.setSizing("FITTOWIDTH");C15.setMarginLeft(4);
C15.setMarginTop(2);C15.setMarginBottom(2);C15.setColumnSpan(2);C15.setMarginRight(2);C15.iC();C16.setDisplayPosition(7);C16.setHeight(22);C16.setLeft(4);C16.setParent(this);C16.setTabPosition(4);C16.setTop(125);C16.setWidth(734);C16.setMarginLeft(170);C16.setUsePicklist(false);C16.setLabelSelectable(false);C16.aD();C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C4);C17.setFlow("DOWN");C17.setManage(C16);C17.setParent(C1);C17.setRow(C3);C17.setSizing("FITTOWIDTH");C17.setMarginLeft(4);C17.setMarginTop(2);
C17.setMarginBottom(2);C17.setColumnSpan(2);C17.setMarginRight(2);C17.iC();C18.setComponentVersion(1);C18.setDisplayPosition(8);C18.setHeight(22);C18.setLeft(4);C18.setParent(this);C18.setTabPosition(5);C18.setTop(151);C18.setUsePicklist(false);C18.setWidth(734);C18.setMarginLeft(170);C18.setLabelSelectable(false);C18.aD();C18.iC();C19.setAlignment("TOPLEFT");C19.setColumn(C4);C19.setFlow("DOWN");C19.setManage(C18);C19.setParent(C1);C19.setRow(C3);C19.setSizing("FITTOWIDTH");C19.setMarginLeft(4);
C19.setMarginTop(2);C19.setMarginBottom(2);C19.setColumnSpan(2);C19.setMarginRight(2);C19.iC();C20.setComponentVersion(1);C20.setDisplayPosition(9);C20.setHeight(22);C20.setLeft(4);C20.setParent(this);C20.setTabPosition(6);C20.setTop(177);C20.setUsePicklist(false);C20.setWidth(734);C20.setMarginLeft(170);C20.setLabelSelectable(false);C20.aD();C20.iC();C21.setAlignment("TOPLEFT");C21.setColumn(C4);C21.setFlow("DOWN");C21.setManage(C20);C21.setParent(C1);C21.setRow(C3);C21.setSizing("FITTOWIDTH");C21.setMarginLeft(4);
C21.setMarginTop(2);C21.setMarginBottom(2);C21.setColumnSpan(2);C21.setMarginRight(2);C21.iC();C22.setComponentVersion(1);C22.setDisplayPosition(10);C22.setHeight(22);C22.setLeft(4);C22.setParent(this);C22.setTabPosition(7);C22.setTop(203);C22.setUsePicklist(false);C22.setWidth(341);C22.setMarginLeft(170);C22.setLabelSelectable(false);C22.aD();C22.iC();C23.setAlignment("TOPLEFT");C23.setColumn(C4);C23.setFlow("DOWN");C23.setManage(C22);C23.setParent(C1);C23.setRow(C3);C23.setSizing("NONE");C23.setMarginLeft(4);
C23.setMarginTop(2);C23.setMarginBottom(2);C23.iC();C24.setComponentVersion(1);C24.setDisplayPosition(12);C24.setHeight(22);C24.setLeft(4);C24.setParent(this);C24.setTabPosition(8);C24.setTop(255);C24.setUsePicklist(false);C24.setWidth(341);C24.setMarginLeft(170);C24.setLabelSelectable(false);C24.aD();C24.iC();C25.setAlignment("TOPLEFT");C25.setColumn(C4);C25.setFlow("DOWN");C25.setManage(C24);C25.setParent(C1);C25.setRow(C3);C25.setSizing("NONE");C25.setMarginLeft(4);C25.setMarginTop(2);C25.setMarginBottom(2);
C25.iC();C26.setComponentVersion(1);C26.setDisplayPosition(11);C26.setHeight(22);C26.setLeft(4);C26.setParent(this);C26.setTabPosition(9);C26.setTop(229);C26.setUsePicklist(false);C26.setWidth(341);C26.setMarginLeft(170);C26.setLabelSelectable(false);C26.aD();C26.iC();C27.setAlignment("TOPLEFT");C27.setColumn(C4);C27.setFlow("DOWN");C27.setManage(C26);C27.setParent(C1);C27.setRow(C3);C27.setSizing("NONE");C27.setMarginLeft(4);C27.setMarginTop(2);C27.setMarginBottom(2);C27.iC();C28.setDisplayPosition(13);
C28.setLeft(4);C28.setParent(this);C28.setTabPosition(10);C28.setTop(281);C28.setHeight(22);C28.setMarginLeft(170);C28.setLabelSelectable(false);C28.aD();C28.iC();C29.setAlignment("TOPLEFT");C29.setColumn(C4);C29.setFlow("DOWN");C29.setManage(C28);C29.setParent(C1);C29.setRow(C3);C29.setSizing("NONE");C29.setMarginLeft(4);C29.setMarginTop(2);C29.setMarginBottom(2);C29.iC();C30.setDisplayPosition(14);C30.setLeft(4);C30.setParent(this);C30.setTabPosition(11);C30.setTop(307);C30.setHeight(22);C30.setMarginLeft(170);
C30.setLabelSelectable(false);C30.aD();C30.iC();C31.setAlignment("TOPLEFT");C31.setColumn(C4);C31.setFlow("DOWN");C31.setManage(C30);C31.setParent(C1);C31.setRow(C3);C31.setSizing("NONE");C31.setMarginLeft(4);C31.setMarginTop(2);C31.setMarginBottom(2);C31.iC();C32.setComponentVersion(1);C32.setDisplayPosition(15);C32.setHeight(22);C32.setLeft(4);C32.setParent(this);C32.setTabPosition(12);C32.setTop(333);C32.setUsePicklist(false);C32.setWidth(341);C32.setMarginLeft(170);C32.setLabelSelectable(false);
C32.aD();C32.iC();C33.setAlignment("TOPLEFT");C33.setColumn(C4);C33.setFlow("DOWN");C33.setManage(C32);C33.setParent(C1);C33.setRow(C3);C33.setSizing("NONE");C33.setMarginLeft(4);C33.setMarginTop(2);C33.setMarginBottom(2);C33.iC();C34.setDisplayPosition(16);C34.setLeft(4);C34.setParent(this);C34.setTabPosition(13);C34.setTop(359);C34.setHeight(22);C34.setMarginLeft(170);C34.setLabelSelectable(false);C34.aD();C34.iC();C35.setAlignment("TOPLEFT");C35.setColumn(C4);C35.setFlow("DOWN");C35.setManage(C34);
C35.setParent(C1);C35.setRow(C3);C35.setSizing("NONE");C35.setMarginLeft(4);C35.setMarginTop(2);C35.setMarginBottom(2);C35.iC();C36.setDisplayPosition(17);C36.setLeft(4);C36.setParent(this);C36.setTabPosition(14);C36.setTop(385);C36.setHeight(22);C36.setMarginLeft(170);C36.setLabelSelectable(false);C36.aD();C36.iC();C37.setAlignment("TOPLEFT");C37.setColumn(C4);C37.setFlow("DOWN");C37.setManage(C36);C37.setParent(C1);C37.setRow(C3);C37.setSizing("NONE");C37.setMarginLeft(4);C37.setMarginTop(2);C37.setMarginBottom(2);
C37.iC();C38.setDisplayPosition(2);C38.setParent(C1);C38.setWidth(4);C38.setStartRow(C3);C38.iC();C39.setCaption("Loading...");C39.setDisplayPosition(19);C39.setEllipses("WORD");C39.setLeft(2);C39.setParent(this);C39.setTabPosition(15);C39.setTabStop(false);C39.setTop(2);C39.setVerticalAlignment("CENTER");C39.setHeight(41);C39.setWidth(1196);C39.setMarginLeft(2);C39.setThemeDrawStyle("Heading2+DarkTitle");C39.iC();C40.setAlignment("TOPLEFT");C40.setColumn(C4);C40.setFlow("DOWN");C40.setManage(C39);
C40.setParent(C1);C40.setRow(C2);C40.setMarginTop(2);C40.setMarginBottom(2);C40.setMarginLeft(2);C40.setColumnSpan(6);C40.setMarginRight(2);C40.iC();C41.setDisplayPosition(3);C41.setParent(C1);C41.setWidth(460);C41.setUnits("PIXELS");C41.iC();C42.setCaption("Save");C42.setDisplayPosition(3);C42.setEllipses("WORD");C42.setLeft(1016);C42.setParent(this);C42.setTabPosition(17);C42.setTabStop(false);C42.setTop(2);C42.setWidth(92);C42.setHeight(41);C42.setThemeDrawStyle("DarkTitle");C42.setStyle(C0);C42.iC();
C43.setAlignment("CENTERRIGHT");C43.setColumn(C41);C43.setFlow("LEFT");C43.setManage(C42);C43.setParent(C1);C43.setRow(C2);C43.setSizing("FITTOHEIGHT");C43.setMarginBottom(2);C43.setMarginTop(2);C43.iC();C44.setCaption("Close");C44.setDisplayPosition(2);C44.setEllipses("WORD");C44.setLeft(1108);C44.setParent(this);C44.setTabPosition(18);C44.setTabStop(false);C44.setTop(2);C44.setWidth(92);C44.setHeight(41);C44.setThemeDrawStyle("DarkTitle");C44.setStyle(C0);C44.iC();C45.setAlignment("CENTERRIGHT");
C45.setColumn(C41);C45.setFlow("LEFT");C45.setManage(C44);C45.setParent(C1);C45.setRow(C2);C45.setSizing("FITTOHEIGHT");C45.setMarginBottom(2);C45.setMarginTop(2);C45.iC();C46.setParent(this);C46.setLeft(388);C46.setTop(268);C46.iC();l.WEB().aH("URLCHANGED",this,e1);C12.aH("CHANGED",this,e4);C14.aH("CHANGED",this,e5);C42.aH("CLICK",this,e6);C44.aH("CLICK",this,e7);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#sys_web.urlchanged",68);r.ln=68;
{r.ln=70;{var i1=l.WEB().getURLParameters().cI();while(i1.step()){var PARAMETER=r.sR("PARAMETER",i1.item());r.ln=72;if(l.s.ne(l.s.UpperCase(PARAMETER.getName()),"EMPLOYEE")){continue;}r.ln=74;cO.mthLOADEMPLOYEE.call(this,PARAMETER.getValue());r.ln=76;break;r.ln=78;}i1.end();r.dR("PARAMETER");}}r.ln=80;r.e();};cO.mthLOADEMPLOYEE=function(p0){var f=this.FLD.XDEMOW_20,m=this.REF,r=l.mR(this,cO,"LoadEmployee",82);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMODATA","GETEMPLOYEE");
var C1=r.cDR("GETEMPLOYEEIMAGE","XDEMODATA","GETEMPLOYEEIMAGE");C0.iC();C1.iC();C0.aH("COMPLETED",this,e2);C1.aH("COMPLETED",this,e3);r.ln=82;{r.ln=88;C0.mthEXECUTEASYNC({FLD:{"EMPNO":P0.get()}},{FLD:{"EMPNO":m.EMPNO,"SURNAME":m.SURNAME,"GIVENAME":m.GIVENAME,"ADDRESS1":m.ADDRESS1,"ADDRESS2":m.ADDRESS2,"ADDRESS3":m.ADDRESS3,"POSTCODE":m.POSTCODE,"PHONEHME":m.PHONEHME,"PHONEBUS":m.PHONEBUS,"DEPTMENT":m.DEPTMENT,"SECTION":m.SECTION,"SALARY":m.SALARY,"STARTDTE":m.STARTDTE,"TERMDATE":m.TERMDATE,"EMPTHM":f.F15}});
r.ln=89;C1.mthEXECUTEASYNC({FLD:{"EMPNO":P0.get()}},{FLD:{"EMPIMG":f.F15}});}r.ln=103;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.Completed",91);r.ln=91;{r.ln=93;this.mthUPDATE();}r.ln=95;r.e();}function e3(sender,Ps){var r=l.eR(this,cO,"#GetEmployeeImage.Completed",97);r.ln=97;{r.ln=99;m.IMAGE.setFileName(f.F15.get());}r.ln=101;r.e();}};cO.mthUPDATE=function(){var m=this.REF,r=l.mR(this,cO,"Update",105);r.ln=105;{r.ln=107;this.setCaption(l.s.Substitute("&1 &2 (&3)",m.GIVENAME.get(),m.SURNAME.get(),m.EMPNO.get()));
m.TITLE.set(l.s.Substitute("&1 &2 (&3)",m.GIVENAME.get(),m.SURNAME.get(),m.EMPNO.get()));}r.ln=109;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Surname.Changed",111);r.ln=111;{r.ln=113;this.mthUPDATE();}r.ln=115;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Givename.Changed",117);r.ln=117;{r.ln=119;this.mthUPDATE();}r.ln=121;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#Save.Click",123);r.ln=123;{r.ln=125;this.mthSAVE();}r.ln=127;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Close.Click",129);
r.ln=129;{r.ln=131;l.WEB().getLocalStorage().mthADD("CLOSEEMPLOYEE",m.EMPNO.get());}r.ln=133;r.e();};cO.mthSAVE=function(){var f=this.FLD.XDEMOW_20,m=this.REF,r=l.mR(this,cO,"Save",135);var C0=r.cDR("SAVEEMPLOYEE","XDEMODATA","SAVEEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e8);r.ln=135;{r.ln=139;l.MSGQ().mthCLEARALL();r.ln=141;C0.mthEXECUTEASYNC({FLD:{"EMPNO":m.EMPNO.get(),"SURNAME":m.SURNAME.get(),"GIVENAME":m.GIVENAME.get(),"ADDRESS1":m.ADDRESS1.get(),"ADDRESS2":m.ADDRESS2.get(),"ADDRESS3":m.ADDRESS3.get(),"POSTCODE":m.POSTCODE.get(),"PHONEHME":m.PHONEHME.get(),"PHONEBUS":m.PHONEBUS.get(),"DEPTMENT":m.DEPTMENT.get(),"SECTION":m.SECTION.get(),"SALARY":m.SALARY.get(),"STARTDTE":m.STARTDTE.get(),"TERMDATE":m.TERMDATE.get(),"EMPTHM":f.F15.get()}},{FLD:{"IO$STS":f.F16}});
}r.ln=157;r.e();function e8(sender,Ps){var r=l.eR(this,cO,"#SaveEmployee.Completed",143);r.ln=143;{r.ln=145;if(l.s.eq(f.F16.get(),"OK")){r.ln=147;l.WEB().getLocalStorage().mthADD("UPDATEEMPLOYEE",m.EMPNO.get());}else{r.ln=151;m.MESSAGES.mthSHOW();}}r.ln=155;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.eC(Fd.F1.Dc,"PRIM_FLD");Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.eC(Fd.F1.VISUAL,"PRIM_EVEF");}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.eC(Fd.F2.Dc,"PRIM_FLD");
Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(419);};l.eC(Fd.F2.VISUALEDIT,"PRIM_EVEF");}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.eC(Fd.F3.Dc,"PRIM_FLD");Fd.F3.VISUALEDIT=function(){this.aN.call(this,new Fd.F3.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(419);};l.eC(Fd.F3.VISUALEDIT,"PRIM_EVEF");}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);
};l.eC(Fd.F4.Dc,"PRIM_FLD");Fd.F4.VISUAL=function(){this.aN.call(this,new Fd.F4.Dc());};l.eC(Fd.F4.VISUAL,"PRIM_EVEF");}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.eC(Fd.F5.Dc,"PRIM_FLD");Fd.F5.VISUAL=function(){this.aN.call(this,new Fd.F5.Dc());};l.eC(Fd.F5.VISUAL,"PRIM_EVEF");}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);};l.eC(Fd.F6.Dc,"PRIM_FLD");Fd.F6.VISUAL=function(){this.aN.call(this,new Fd.F6.Dc());};l.eC(Fd.F6.VISUAL,"PRIM_EVEF");}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.eC(Fd.F7.Dc,"PRIM_FLD");
Fd.F7.VISUAL=function(){this.aN.call(this,new Fd.F7.Dc());};l.eC(Fd.F7.VISUAL,"PRIM_EVEF");}{Fd.F8.Dc=function(){this.aN.call(this,Fd.F8);};l.eC(Fd.F8.Dc,"PRIM_FLD");Fd.F8.VISUAL=function(){this.aN.call(this,new Fd.F8.Dc());};l.eC(Fd.F8.VISUAL,"PRIM_EVEF");}{Fd.F9.Dc=function(){this.aN.call(this,Fd.F9);};l.eC(Fd.F9.Dc,"PRIM_FLD");Fd.F9.VISUAL=function(){this.aN.call(this,new Fd.F9.Dc());};l.eC(Fd.F9.VISUAL,"PRIM_EVEF");}{Fd.F10.Dc=function(){this.aN.call(this,Fd.F10);};l.eC(Fd.F10.Dc,"PRIM_FLD");
Fd.F10.VISUALEDIT=function(){this.aN.call(this,new Fd.F10.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(225);};l.eC(Fd.F10.VISUALEDIT,"PRIM_EVEF");}{Fd.F11.Dc=function(){this.aN.call(this,Fd.F11);};l.eC(Fd.F11.Dc,"PRIM_FLD");Fd.F11.VISUALEDIT=function(){this.aN.call(this,new Fd.F11.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(201);};l.eC(Fd.F11.VISUALEDIT,"PRIM_EVEF");}{Fd.F12.Dc=function(){this.aN.call(this,Fd.F12);
};l.eC(Fd.F12.Dc,"PRIM_FLD");Fd.F12.VISUAL=function(){this.aN.call(this,new Fd.F12.Dc());};l.eC(Fd.F12.VISUAL,"PRIM_EVEF");}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.eC(Fd.F13.Dc,"PRIM_FLD");Fd.F13.VISUALEDIT=function(){this.aN.call(this,new Fd.F13.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(249);};l.eC(Fd.F13.VISUALEDIT,"PRIM_EVEF");}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.eC(Fd.F14.Dc,"PRIM_FLD");Fd.F14.VISUALEDIT=function()
{this.aN.call(this,new Fd.F14.Dc());this.setComponentVersion(1);this.setHeight(21);this.setMarginLeft(178);this.setUsePicklist(false);this.setWidth(279);};l.eC(Fd.F14.VISUALEDIT,"PRIM_EVEF");}}(window["LANSA"]));