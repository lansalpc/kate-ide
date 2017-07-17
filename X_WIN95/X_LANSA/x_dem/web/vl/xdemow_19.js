﻿(function(l,u){var oI=l.cV({id:"XDEMOW_19",nm:"xDemoWebMaintenanceFrame",ot:"wp",tp:"Web Page",de:"Editing in a separate frame",tl:3});var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("0.77"),c2=l.cDec("1.23");var Fd={F1:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],
h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F2:{nm:"SURNAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Surname........","FRA":"Nom . . . . . .","JPN":"社員姓","LLL":"Surname........"}[cL],h1:{"ENG":"Surname","FRA":"Nom","JPN":"社員姓","LLL":"Surname"}[cL],h2:"",h3:"",de:{"ENG":"Employee Surname","FRA":"Nom de l´employé","JPN":"社員姓","LLL":"Employee Surname"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"GIVENAME",ft:"A",ln:20,dc:0,lb:{"ENG":"Given names....","FRA":"Prénom(s) . . .","JPN":"社員名.......","LLL":"Given names...."}[cL],
h1:{"ENG":"Given name(s)","FRA":"Prénom(s)","JPN":"社員名","LLL":"Given name(s)"}[cL],h2:"",h3:"",de:{"ENG":"Employee Given Name(s)","FRA":"Prénoms de l´employé","JPN":"社員名","LLL":"Employee Given Name(s)"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],
dv:l.SqlNull,ia:["ASQN","FE","LC"]},F5:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],
h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],
dv:"",ia:["FE","LC"]},F8:{nm:"POSTCODE",ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F9:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],
h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],dv:"",ia:["FE"]},F10:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],
h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F11:{nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Département . .","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"Dépt","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"","JPN":"コード","LLL":"  Code"}[cL],h3:"",
de:{"ENG":"Department Code","FRA":"Code du département","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F12:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:{"ENG":"Section........","FRA":"Section . . . .","JPN":"課コード","LLL":"Section........"}[cL],h1:{"ENG":"    Section","FRA":"Section","JPN":"課","LLL":"    Section"}[cL],h2:{"ENG":"     Code","FRA":"","JPN":"コード","LLL":"     Code"}[cL],h3:"",de:{"ENG":"Section Code","FRA":"Code section","JPN":"課コード","LLL":"Section Code"}[cL],dv:"",ia:["FE"]},F13:{nm:"SALARY",
ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],dv:0,ia:["FE","RB"]},F14:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Start date.....","FRA":"Date d´entrée .","JPN":"入社日付","LLL":"Start date....."}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"入社","LLL":"Start"}[cL],
h2:{"ENG":"Date","FRA":"d´entrée","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Start Date (DDMMYY)","FRA":"Date d´entrée, JJMMAA","JPN":"入社日付(DDMMYY)","LLL":"Start Date (DDMMYY)"}[cL],dv:0,ia:["FE","RB"]},F15:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Term. date.....","FRA":"Date de départ","JPN":"退職日付","LLL":"Term. date....."}[cL],h1:{"ENG":"Term.","FRA":"Date de","JPN":"退職","LLL":"Term."}[cL],h2:{"ENG":"Date","FRA":"départ","JPN":"日付","LLL":"Date"}[cL],h3:"",de:{"ENG":"Termination Date (DDMMYY)","FRA":"Date de départ, JJMMAA","JPN":"退職日付(DDMMYY)","LLL":"Termination Date (DDMMYY)"}[cL],
dv:0,ia:["FE","RB"]},F16:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,
{an:"PRIM_WEB",fd:Fd,mt:{Load:{},Open:{ps:{"EmployeeID":{pt:"i"}}},GetRootURL:{},GetUpdate:{ps:{"EmployeeNumber":{pt:"i"}}},Close:{}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_19",Fd);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("ROW_4","PRIM_TBLO","Row");var C5=this.cR("ROW_5","PRIM_TBLO","Row");var C6=this.cR("COLUMN","PRIM_TBLO","Column");var C7=this.cR("COLUMN_2","PRIM_TBLO","Column");
var C8=this.cR("COLUMN_3","PRIM_TBLO","Column");var C9=this.cR("COLUMN_4","PRIM_TBLO","Column");var C10=this.cR("COLUMN_5","PRIM_TBLO","Column");var C11=this.cR("LIST","PRIM_LIST");var C12=this.cR("LISTLAYOUT","PRIM_TBLO","Item");var C13=this.cR("EMPLOYEEIMAGE","PRIM_LIST","Image");var C14=this.cR("COLUMNEMPNO","PRIM_LIST","String");var C15=this.cR("COLUMNSURNAME","PRIM_LIST","String");var C16=this.cR("COLUMNGIVENAME","PRIM_LIST","String");var C17=this.cR("LABEL","PRIM_LABL");var C18=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");
var C19=this.cR("EDITORPAGE","PRIM_WEB","Page");var C20=this.cR("LAYOUTITEM_3","PRIM_TBLO","Item");var C21=this.cR("STYLE_2","PRIM_VS","Style");C0.setDividerStyle("GAP");C0.iC();C1.setDisplayPosition(2);C1.setParent(C0);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setDisplayPosition(4);C3.setParent(C0);C3.setHeight(c2);C3.iC();C4.setDisplayPosition(5);C4.setParent(C0);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setHeight(45);C5.setUnits("PIXELS");C5.iC();
C6.setDisplayPosition(1);C6.setParent(C0);C6.iC();C7.setDisplayPosition(2);C7.setParent(C0);C7.iC();C8.setDisplayPosition(3);C8.setParent(C0);C8.iC();C9.setDisplayPosition(4);C9.setParent(C0);C9.iC();C10.setDisplayPosition(5);C10.setParent(C0);C10.iC();C11.setDisplayPosition(1);C11.setHeight(751);C11.setLeft(2);C11.setParent(this);C11.setTabPosition(1);C11.setTop(47);C11.setWidth(1196);C11.setRowLines(false);C11.setColumnLines(false);C11.setStyle(C21);C11.iC();C12.setColumn(C6);C12.setManage(C11);
C12.setParent(C0);C12.setRow(C1);C12.setColumnSpan(5);C12.setRowSpan(4);C12.setMarginTop(2);C12.setMarginBottom(2);C12.setMarginLeft(2);C12.setMarginRight(2);C12.iC();C13.setColumnWidth(50);C13.setDisplayPosition(1);C13.setParent(C11);C13.setImageSizing("BESTFIT");C13.setCellMarginTop(2);C13.setCellMarginBottom(2);C13.setCellMarginLeft(2);C13.setCellMarginRight(2);C13.iC();C14.setDisplayPosition(2);C14.setParent(C11);C14.setSource(f.F1);C14.iC();C15.setDisplayPosition(4);C15.setParent(C11);C15.setSource(f.F2);
C15.setColumnWidth(205);C15.iC();C16.setDisplayPosition(3);C16.setParent(C11);C16.setSource(f.F3);C16.setColumnWidth(230);C16.iC();C17.setCaption("Employee Maintenance");C17.setDisplayPosition(2);C17.setEllipses("WORD");C17.setLeft(2);C17.setParent(this);C17.setTabPosition(2);C17.setTabStop(false);C17.setTop(2);C17.setVerticalAlignment("CENTER");C17.setHeight(41);C17.setWidth(1196);C17.setMarginLeft(2);C17.setThemeDrawStyle("Heading2+DarkTitle");C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C6);
C18.setFlow("DOWN");C18.setManage(C17);C18.setParent(C0);C18.setRow(C5);C18.setColumnSpan(5);C18.setMarginTop(2);C18.setMarginBottom(2);C18.setMarginLeft(2);C18.setMarginRight(2);C18.iC();C19.setDisplayPosition(3);C19.setParent(this);C19.setTabPosition(3);C19.setTabStop(false);C19.setTop(382);C19.setWidth(1196);C19.setHeight(416);C19.setVisible(false);C19.setLeft(2);C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C6);C20.setFlow("DOWN");C20.setManage(C19);C20.setParent(C0);C20.setRow(C3);C20.setColumnSpan(5);
C20.setRowSpan(2);C20.setMarginTop(2);C20.setMarginBottom(2);C20.setMarginLeft(2);C20.setMarginRight(2);C20.iC();C21.setBorderLeft(0);C21.setBorderRight(0);C21.setBorderBottom(0);C21.iC();l.WEB().aH("STORAGECHANGED",this,e4);C11.aH("ITEMCLICK",this,e3);this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_19");li.EMPLOYEES=l.cLT({"EMPNO":f.F1,"SURNAME":f.F2,"GIVENAME":f.F3,"EMPTHM":f.F4},null);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",42);
r.ln=42;{r.ln=44;this.mthLOAD();}r.ln=46;r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOW_19,f=this.FLD.XDEMOW_19,m=this.REF,r=l.mR(this,cO,"Load",48);var C0=r.cDR("GETEMPLOYEES","XDEMODATA","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=48;{r.ln=52;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=65;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",54);r.ln=54;{r.ln=56;for(var i1=1;i1<=li.EMPLOYEES.entryCount();i1++){li.EMPLOYEES.getEntry(i1);r.ln=58;
m.LIST.addEntry();r.ln=59;m.EMPLOYEEIMAGE.getCurrentItem().setImage(l.APPL().mthCREATEBITMAP(f.F4.get()));}}r.ln=63;r.e();}};function e3(sender,Ps){var f=this.FLD.XDEMOW_19,r=l.eR(this,cO,"#List.ItemClick",67);r.ln=67;{r.ln=69;cO.mthOPEN.call(this,f.F1.get());}r.ln=71;r.e();};cO.mthOPEN=function(p0){var m=this.REF,r=l.mR(this,cO,"Open",73);var P0=r.cPF("EMPLOYEEID",Fd.F1.Dc);P0.set(p0);r.ln=73;{r.ln=76;m.EDITORPAGE.setSource(l.cat(cO.mthGETROOTURL.call(this),l.s.Substitute("XDEMOW_20.html?Employee=&1",P0.get())));
r.ln=78;m.EDITORPAGE.setVisible(true);r.ln=79;m.LISTLAYOUT.setRowSpan(2);}r.ln=81;r.e();};cO.mthGETROOTURL=function(){var r=l.mR(this,cO,"GetRootURL",83);var P0=r.cP("RESULT","PRIM_ALPH");r.ln=83;{r.ln=86;P0.set(l.s.Substring(l.WEB().getURL(),1,l.s.LastPositionOf(l.WEB().getURL(),"/")));}r.ln=88;return r.rV(P0.get());};function e4(sender,Ps){var r=l.eR(this,cO,"#sys_web.StorageChanged",90);r.ln=90;{r.ln=92;if((l.WEB().getLocalStorage().get("UPDATEEMPLOYEE")!=null)){r.ln=94;cO.mthGETUPDATE.call(this,l.WEB().getLocalStorage().get("UPDATEEMPLOYEE").getValue());
}r.ln=98;if((l.WEB().getLocalStorage().get("CLOSEEMPLOYEE")!=null)){r.ln=100;this.mthCLOSE();}}r.ln=104;r.e();};cO.mthGETUPDATE=function(p0){var f=this.FLD.XDEMOW_19,m=this.REF,r=l.mR(this,cO,"GetUpdate",106);var P0=r.cPF("EMPLOYEENUMBER",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("GETEMPLOYEE","XDEMODATA","GETEMPLOYEE");C0.iC();C0.aH("COMPLETED",this,e5);r.ln=106;{r.ln=111;C0.mthEXECUTEASYNC({FLD:{"EMPNO":P0.get()}},{FLD:{"EMPNO":f.F1,"SURNAME":f.F2,"GIVENAME":f.F3,"ADDRESS1":f.F5,"ADDRESS2":f.F6,"ADDRESS3":f.F7,"POSTCODE":f.F8,"PHONEHME":f.F9,"PHONEBUS":f.F10,"DEPTMENT":f.F11,"SECTION":f.F12,"SALARY":f.F13,"STARTDTE":f.F14,"TERMDATE":f.F15,"EMPTHM":f.F4}});
}r.ln=127;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#GetEmployee.completed",113);r.ln=113;{r.ln=115;l.WEB().getLocalStorage().mthREMOVE("UPDATEEMPLOYEE");r.ln=117;f.F16.set(lIO=m.LIST.locateEntry(function(e){return l.s.eq(((e["EMPNO"]!==u)?e["EMPNO"]:f.F1.get()),((e["EMPLOYEENUMBER"]!==u)?e["EMPLOYEENUMBER"]:P0.get()))},null,true));r.ln=119;if(lIO=="OK"){r.ln=121;m.LIST.updateEntry();}}r.ln=125;r.e();}};cO.mthCLOSE=function(){var m=this.REF,r=l.mR(this,cO,"Close",129);r.ln=129;{r.ln=131;m.LISTLAYOUT.setRowSpan(4);
r.ln=132;m.EDITORPAGE.setVisible(false);r.ln=134;l.WEB().getLocalStorage().mthREMOVE("CLOSEEMPLOYEE");}r.ln=136;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.eC(Fd.F1.Dc,"PRIM_FLD");}}(window["LANSA"]));