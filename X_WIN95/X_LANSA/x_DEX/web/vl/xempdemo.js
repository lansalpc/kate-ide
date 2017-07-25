﻿LANSA.addComponent({id:"XEMPDEMO",nm:"xEmployeeDemo",ot:"wp",tp:"Web Page",de:"Employee Demo",tl:14020000},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xedbm003.png");var Fd={F1:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:{"ENG":"Employee Id","FRA":"Id employé","JPN":"社員 ID","LLL":"Employee Id"}[cL],h1:{"ENG":"Employee","FRA":"Identification","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Identification","FRA":"Employé","JPN":"ID","LLL":"Identification"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Identification","FRA":"Identification","JPN":"身分証明","LLL":"Identification"}[cL],dv:"",ia:["FE"]},F2:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],h1:{"ENG":"Employee","FRA":"Titre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Title","FRA":"Employé","JPN":"役職","LLL":"Title"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Title","FRA":"Titre","JPN":"役職","LLL":"Title"}[cL],
dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],h1:{"ENG":"Employee","FRA":"Nom","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Surname","FRA":"Employé","JPN":"姓","LLL":"Surname"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Surname","FRA":"Nom","JPN":"姓","LLL":"Surname"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"A",ln:20,dc:0,lb:{"ENG":"Given Names","FRA":"Prénoms","JPN":"名前","LLL":"Given Names"}[cL],
h1:{"ENG":"Employee","FRA":"Prénoms","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Given","FRA":"Employé","JPN":"ファースト","LLL":"Given"}[cL],h3:{"ENG":"Names","FRA":" ","JPN":"ネーム","LLL":"Names"}[cL],de:{"ENG":"Given Names","FRA":"Prénoms","JPN":"ファーストネーム","LLL":"Given Names"}[cL],dv:"",ia:["FE","LC"]},F5:{nm:"XEMPDEPT",an:"xEmployeeDepartment",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Department Desc","FRA":"Descript. dept","JPN":"部門記述","LLL":"Department Desc"}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"部門記述","LLL":"Department"}[cL],
h2:{"ENG":"Description","FRA":"Département","JPN":"記述","LLL":"Description"}[cL],h3:{"ENG":"Description","FRA":"Employé","JPN":" ","LLL":"Description"}[cL],de:{"ENG":"Department Description","FRA":"Description du département","JPN":"部門記述","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F6:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image Employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image miniature employé","JPN":"社員サムネイル画像","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F7:{nm:"XSTREET",an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h1:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Street","FRA":"Rue","JPN":"番地","LLL":"Street"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h1:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"City","FRA":"Commune","JPN":"市区町村","LLL":"City"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"XSTATE",
an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"State","FRA":"Etat","JPN":"州","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],h1:{"ENG":"Postal","FRA":"Code","JPN":"郵便","LLL":"Postal"}[cL],
h2:{"ENG":"Code","FRA":"Postal","JPN":"番号","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Postal Code","FRA":"Code Postal","JPN":"郵便番号","LLL":"Postal Code"}[cL],dv:"",ia:["FE"]},F11:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h1:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Country","FRA":"Pays","JPN":"国","LLL":"Country"}[cL],
dv:"",ia:["FE","LC"]},F12:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]},F13:{nm:"XEMPDOB",
an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:{"ENG":"Date of Birth","FRA":"Date naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],h1:{"ENG":"Employee","FRA":"Date","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Birth Date","FRA":"Naissance","JPN":"誕生日","LLL":"Birth Date"}[cL],h3:{"ENG":" ","FRA":"Employé","JPN":" ","LLL":""}[cL],de:{"ENG":"Date of Birth","FRA":"Date de naissance","JPN":"誕生日","LLL":"Date of Birth"}[cL],dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F14:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",
ln:10,dc:0,lb:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],h1:{"ENG":"Employee","FRA":"Genre","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Gender","FRA":"Employé","JPN":"性別","LLL":"Gender"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Gender","FRA":"Genre","JPN":"性別","LLL":"Gender"}[cL],dv:"Male",ia:["FE","LC"]},F15:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Home Phone","FRA":"Téléphone perso","JPN":"自宅 電話","LLL":"Home Phone"}[cL],h1:{"ENG":"Home","FRA":"Téléphone","JPN":"自宅","LLL":"Home"}[cL],
h2:{"ENG":"Telephone","FRA":"Personnel","JPN":"電話","LLL":"Telephone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Home Telephone","FRA":"Téléphone personnel","JPN":"自宅 電話","LLL":"Home Telephone"}[cL],dv:"",ia:["FE"]},F16:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:{"ENG":"Business Phone","FRA":"Tél. travail","JPN":"会社 電話","LLL":"Business Phone"}[cL],h1:{"ENG":"Business","FRA":"Téléphone","JPN":"会社","LLL":"Business"}[cL],h2:{"ENG":"Telephone","FRA":"Travail","JPN":"電話","LLL":"Telephone"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Business Telephone","FRA":"Téléphone travail","JPN":"会社 電話","LLL":"Business Telephone"}[cL],dv:"",ia:["FE"]},F17:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:{"ENG":"Mobile Phone","FRA":"Téléphone mob.","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h1:{"ENG":"Employee","FRA":"Téléphone","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Mobile Phone","FRA":"Mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Mobile Phone","FRA":"Téléphone mobile","JPN":"携帯電話番号","LLL":"Mobile Phone"}[cL],dv:"",ia:["FE"]},F18:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],h1:{"ENG":"Annual","FRA":"Salaire","JPN":"年収","LLL":"Annual"}[cL],h2:{"ENG":"Salary","FRA":"Annuel","JPN":" ","LLL":"Salary"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Annual Salary","FRA":"Salaire annuel","JPN":"年収","LLL":"Annual Salary"}[cL],
dv:0,ia:["FE","RB"]},F19:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:{"ENG":"Start Date","FRA":"Date Embauche","JPN":"開始日","LLL":"Start Date"}[cL],h1:{"ENG":"Start","FRA":"Date","JPN":"開始","LLL":"Start"}[cL],h2:{"ENG":"Date","FRA":"Embauche","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Start Date","FRA":"Date d'Embauche","JPN":"開始日","LLL":"Start Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F20:{nm:"XTERMDATE",an:"xEmployeeTerminationDate",ft:"D",
ln:10,dc:0,lb:{"ENG":"Termination","FRA":"Date de départ","JPN":"終了日","LLL":"Termination"}[cL],h1:{"ENG":"Termination","FRA":"Date","JPN":"終了","LLL":"Termination"}[cL],h2:{"ENG":"Date","FRA":"Départ","JPN":"日付","LLL":"Date"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Termination Date","FRA":"Date de départ","JPN":"終了日","LLL":"Termination Date"}[cL],dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],
h1:{"ENG":"Department","FRA":"Code","JPN":"部門","LLL":"Department"}[cL],h2:{"ENG":"Code","FRA":"Département","JPN":"コード","LLL":"Code"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Department","FRA":"Département","JPN":"部門","LLL":"Department"}[cL],dv:"",ia:["FE"]},F22:{nm:"XEMPIMG",an:"xEmployeeImage",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":"employé","JPN":"画像","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image","FRA":"Image employé","JPN":"社員画像","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},UpdateEmployee:{ps:{"ID":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XEMPDEMO",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cR("LABEL1","PRIM_LABL");var C9=this.cR("LIST1","PRIM_LIST");var C10=this.cR("COLUMNXEMPLOYID1","PRIM_LIST","String");var C11=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C12=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C13=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C14=this.cR("COLUMNXEMPDEPT1","PRIM_LIST","String");
var C15=this.cR("COLUMNXEMPTHM1","PRIM_LIST","Image");var C16=this.cR("COLUMNXEMPADDR1","PRIM_LIST","Part");var C17=this.cR("IMAGE1","PRIM_IMAG");var C18=this.cR("XEMPLOYEEEDITOR","XEMPEDIT");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(64);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.iC();C4.setAlignment("TOPLEFT");C4.setColumn(C1);C4.setFlow("DOWN");C4.setManage(C8);C4.setParent(C0);C4.setRow(C2);C4.iC();
C5.setColumn(C1);C5.setManage(C9);C5.setParent(C0);C5.setRow(C3);C5.iC();C6.setColumn(C1);C6.setManage(C17);C6.setParent(C0);C6.setRow(C2);C6.setSizing("NONE");C6.setAlignment("CENTERRIGHT");C6.setMarginRight(4);C6.iC();C7.setColumn(C1);C7.setManage(C18);C7.setParent(C0);C7.setRow(C2);C7.setSizing("NONE");C7.iC();C8.setCaption("Employees");C8.setDisplayPosition(2);C8.setEllipses("WORD");C8.setHeight(64);C8.setLeft(0);C8.setParent(this);C8.setTabPosition(1);C8.setTabStop(false);C8.setTop(0);C8.setVerticalAlignment("CENTER");
C8.setWidth(1200);C8.setThemeDrawStyle("Title+DarkTitle");C8.setMarginLeft(4);C8.iC();C9.setDisplayPosition(4);C9.setHeight(736);C9.setLeft(0);C9.setParent(this);C9.setTabPosition(2);C9.setTop(64);C9.setWidth(1200);C9.setRowHeight(62);C9.setColumnLines(false);C9.iC();C10.setDisplayPosition(2);C10.setParent(C9);C10.setSource(f.F1);C10.setSortOnClick(true);C10.iC();C11.setDisplayPosition(3);C11.setParent(C9);C11.setSource(f.F2);C11.iC();C12.setDisplayPosition(4);C12.setParent(C9);C12.setSource(f.F3);
C12.setSortOnClick(true);C12.iC();C13.setDisplayPosition(5);C13.setParent(C9);C13.setSource(f.F4);C13.iC();C14.setDisplayPosition(6);C14.setParent(C9);C14.setSource(f.F5);C14.setSortOnClick(true);C14.iC();C15.setDisplayPosition(1);C15.setParent(C9);C15.setSource(f.F6);C15.setCellMarginBottom(2);C15.setCellMarginLeft(2);C15.setCellMarginRight(2);C15.setCellMarginTop(2);C15.setImageSizing("BESTFIT");C15.setColumnWidth(32);C15.iC();C16.setColumnWidth(204);C16.setDesign("XEDADRS");C16.setDisplayPosition(7);
C16.setParent(C9);C16.setColumnCaption("Address");C16.iC();C17.setDisplayPosition(1);C17.setHeight(48);C17.setImage(rc1);C17.setLeft(1148);C17.setParent(this);C17.setTabPosition(3);C17.setTabStop(false);C17.setTop(8);C17.setWidth(48);C17.iC();C18.setLeft(300);C18.setParent(this);C18.setTop(-232);C18.iC();C9.aH("ITEMDOUBLECLICK",this,e2);C18.aH("SAVED",this,e3);C16.aLF({"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F10,"XCOUNTRY":f.F11});this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015LIGHTBLUE"));
this.aH("INITIALIZE",this,e1);}});function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.Initialize",26);r.ln=26;{r.ln=27;this.mthLOAD();}r.ln=28;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",30);var C0=r.cDR("FINDALL","XEMPDATA","FINDALL");C0.iC();r.ln=30;{r.ln=32;C0.mthEXECUTEASYNC({},{LIST:{"XEMPLOYEELIST":m.LIST1}});}r.ln=33;r.e();};function e2(sender,Ps){var f=this.FLD.XEMPDEMO,m=this.REF,r=l.eR(this,cO,"#List1.ItemDoubleClick",35);r.ln=35;{r.ln=36;m.XEMPLOYEEEDITOR.mthLOADEMPLOYEE(f.F1.get());
}r.ln=37;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#xEmployeeEditor.Saved",39);var P0=Ps.r("ID");r.ln=39;{r.ln=40;cO.mthUPDATEEMPLOYEE.call(this,P0.get());}r.ln=41;r.e();};cO.mthUPDATEEMPLOYEE=function(p0){var f=this.FLD.XEMPDEMO,m=this.REF,r=l.mR(this,cO,"UpdateEmployee",43);var P0=r.cPF("ID",Fd.F1.Dc);P0.set(p0);var C0=r.cDR("FIND","XEMPDATA","FIND");C0.iC();C0.aH("COMPLETED",this,e4);r.ln=43;{r.ln=46;f.F12.set(lIO=m.LIST1.locateEntry(function(e){return l.s.eq(((e["XEMPLOYID"]!==u)?e["XEMPLOYID"]:f.F1.get()),((e["ID"]!==u)?e["ID"]:P0.get()))},null,true));
r.ln=47;C0.mthEXECUTE({FLD:{"XEMPLOYID":P0.get()}},{FLD:{"XEMPLOYID":f.F1,"XEMPTITLE":f.F2,"XSURNAME":f.F3,"XGIVENAME":f.F4,"XEMPDOB":f.F13,"XGENDER":f.F14,"XSTREET":f.F7,"XCITY":f.F8,"XSTATE":f.F9,"XPOSTCODE":f.F10,"XCOUNTRY":f.F11,"XPHONEHME":f.F15,"XPHONEBUS":f.F16,"XPHONEMOB":f.F17,"XSALARY":f.F18,"XSTARTDTE":f.F19,"XTERMDATE":f.F20,"XDEPTMENT":f.F21,"XEMPIMG":f.F22}});}r.ln=51;r.e();function e4(sender,Ps){var r=l.eR(this,cO,"#Find.Completed",48);r.ln=48;{r.ln=49;m.LIST1.updateEntry();}r.ln=50;
r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F2.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");
C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F2.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F14.Dc=function(){this.aN.call(this,Fd.F14);};l.cFC({co:Fd.F14.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F14.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");
var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F14.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XEMPEDIT"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Image","PRIM_LIST.Part","PRIM_IMAG","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"]
});