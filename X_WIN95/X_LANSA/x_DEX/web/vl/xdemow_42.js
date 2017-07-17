﻿LANSA.addComponent({id:"XDEMOW_42",nm:"xDemoWebTreeOnDemand",ot:"wp",tp:"Web Page",de:"Tree Loading On Demand",tl:14010003},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cRc("Loading.gif");var Fd={F1:{nm:"XDEMOAL_1",ft:"A",ln:256,dc:0,lb:{"ENG":"Alpha 256","FRA":"Alpha 128","JPN":"Alpha 128","LLL":"Alpha 256"}[cL],h1:"Alpha",h2:{"ENG":"256","FRA":"128","JPN":"128","LLL":"256"}[cL],h3:"",de:{"ENG":"Alpha 256","FRA":"Alpha 128","JPN":"Alpha 128","LLL":"Alpha 256"}[cL],
dv:"",ia:["FE","LC"]},F2:{nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Department.....","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"  Dept","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"  Code","JPN":"コード","LLL":"  Code"}[cL],h3:"",de:{"ENG":"Department Code","FRA":"Department Code","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F3:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:"Section........",h1:"    Section",h2:"     Code",h3:"",de:"Section Code",
dv:"",ia:["FE"]},F4:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F5:{nm:"SURNAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Surname........",h1:"Surname",
h2:"",h3:"",de:"Employee Surname",dv:"",ia:["FE","LC"]},F6:{nm:"GIVENAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Given names....",h1:"Given name(s)",h2:"",h3:"",de:"Employee Given Name(s)",dv:"",ia:["FE","LC"]},F7:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],
dv:"",ia:["FE","LC"]},F8:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F10:{nm:"POSTCODE",ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],
h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F11:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],
dv:"",ia:["FE"]},F12:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F13:{
nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],dv:0,ia:["FE","RB"]},F14:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Start date.....",h1:"Start",h2:"Date",h3:"",de:"Start Date (DDMMYY)",dv:0,ia:["FE","RB"]},F15:{nm:"TERMDATE",
ft:"S",ln:6,dc:0,ec:"Y",lb:"Term. date.....",h1:"Term.",h2:"Date",h3:"",de:"Termination Date (DDMMYY)",dv:0,ia:["FE","RB"]},F16:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]
},F17:{nm:"DEPTDESC",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Description....","FRA":"Description . .","JPN":"Description....","LLL":"Description...."}[cL],h1:{"ENG":"Department","FRA":"Description","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Département","JPN":"Description","LLL":"Description"}[cL],h3:" ",de:{"ENG":"Department Description","FRA":"Département","JPN":"Department Description","LLL":"Department Description"}[cL],dv:"",ia:["FE","LC"]},F18:{nm:"SECDESC",ft:"A",
ln:20,dc:0,ks:"O",lb:{"ENG":"Description ...","FRA":"Description . .","JPN":"Description ...","LLL":"Description ..."}[cL],h1:{"ENG":"Section","FRA":"Description","JPN":"Section","LLL":"Section"}[cL],h2:{"ENG":"Description","FRA":"section","JPN":"Description","LLL":"Description"}[cL],h3:" ",de:{"ENG":"Section Full Description","FRA":"Description de la section","JPN":"Section Full Description","LLL":"Section Full Description"}[cL],dv:"",ia:["FE","LC"]},F19:{nm:"SKILCODE",ft:"A",ln:10,dc:0,ks:"O",lb:{"ENG":"Skill code.....","FRA":"Code formation","JPN":"Skill code.....","LLL":"Skill code....."}[cL],
h1:{"ENG":"Skill","FRA":"Code","JPN":"Skill","LLL":"Skill"}[cL],h2:{"ENG":"Code","FRA":"Formation","JPN":"Code","LLL":"Code"}[cL],h3:" ",de:{"ENG":"Skill Code","FRA":"Code formation","JPN":"Skill Code","LLL":"Skill Code"}[cL],dv:"",ia:["FE"]},F20:{nm:"SKILDESC",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Skill desc.....","FRA":"Formation . . .","JPN":"Skill desc.....","LLL":"Skill desc....."}[cL],h1:{"ENG":"Skill","FRA":"Description","JPN":"Skill","LLL":"Skill"}[cL],h2:{"ENG":"Description","FRA":"formation","JPN":"Description","LLL":"Description"}[cL],
h3:" ",de:{"ENG":"Skill Full Description","FRA":"Description de la formation","JPN":"Skill Full Description","LLL":"Skill Full Description"}[cL],dv:"",ia:["FE","LC"]},F21:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ....","LLL":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O","LLL":"I/O"}[cL],h2:{"ENG":"Status","FRA":"I/O","JPN":"Status","LLL":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code","LLL":"Data base I/O operation status code"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{AddDepartments:{},AddSections:{ps:{"ParentItem":{pt:"i"}}},AddEmployees:{ps:{"ParentItem":{pt:"i"}}},AddSkills:{ps:{"ParentItem":{pt:"i"}}},AddEntry:{ps:{"Caption":{pt:"i"},"Parentitem":{pt:"i"},"Department":{pt:"i"},"SectionCode":{pt:"i"},"EmployeeID":{pt:"i"}}},ExpandCollapse:{ps:{"Item":{pt:"i"}}},ItemLoading:{ps:{"LoadingItem":{pt:"i"}}},ItemLoadingComplete:{ps:{"LoadingItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_42",Fd);
var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMN2","PRIM_TBLO","Column");var C3=this.cR("COLUMN3","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LIST","PRIM_LIST");var C8=this.cR("COLUMNXDEMOAL_11","PRIM_LIST","String");var C9=this.cR("COLUMNDEPTMENT1","PRIM_LIST","String");var C10=this.cR("COLUMNSECTION1","PRIM_LIST","String");
var C11=this.cR("COLUMNEMPNO1","PRIM_LIST","String");var C12=this.cR("LOADIMAGE","PRIM_IMAG");var C13=this.cR("LOADINGITEMS","PRIM_DCOL");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setWidth(250);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.setWidth(250);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setColumn(C2);C5.setManage(C7);C5.setParent(C0);C5.setRow(C4);C5.iC();C6.setColumn(C2);
C6.setManage(C12);C6.setParent(C0);C6.setRow(C4);C6.setSizing("NONE");C6.iC();C7.setDisplayPosition(2);C7.setHeight(800);C7.setLeft(250);C7.setParent(this);C7.setTabPosition(1);C7.setTop(0);C7.setWidth(700);C7.setColumnLines(false);C7.setRowLines(false);C7.setRowHeight(22);C7.iC();C8.setDisplayPosition(1);C8.setParent(C7);C8.setSource(f.F1);C8.setColumnWidth(233);C8.setColumnUnits("PROPORTION");C8.setColumnCaption("Personnel Details");C8.setColumnCaptionType("CAPTION");C8.iC();C9.setDisplayPosition(2);
C9.setParent(C7);C9.setSource(f.F2);C9.setColumnVisible(false);C9.iC();C10.setDisplayPosition(3);C10.setParent(C7);C10.setSource(f.F3);C10.setColumnVisible(false);C10.iC();C11.setDisplayPosition(4);C11.setParent(C7);C11.setSource(f.F4);C11.setColumnVisible(false);C11.iC();C12.setDisplayPosition(1);C12.setLeft(525);C12.setParent(this);C12.setTabPosition(2);C12.setTabStop(false);C12.setTop(325);C12.setHeight(150);C12.setWidth(150);C12.setImageSizing("BESTFIT");C12.iC();C13.setCollects("PRIM_ALPH");
C13.setKeyedBy("PRIM_LIST.ListItem");C13.iC();C7.aH("ITEMEXPANDING",this,e6);this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("INITIALIZE",this,e1);var li=this.aL("XDEMOW_42");li.EMPLOYEES=l.cLT({"EMPNO":f.F4,"SURNAME":f.F5,"GIVENAME":f.F6,"ADDRESS1":f.F7,"ADDRESS2":f.F8,"ADDRESS3":f.F9,"POSTCODE":f.F10,"PHONEHME":f.F11,"PHONEBUS":f.F12,"DEPTMENT":f.F2,"SECTION":f.F3,"SALARY":f.F13,"STARTDTE":f.F14,"TERMDATE":f.F15,"EMPTHM":f.F16},null);li.DEPARTMENTS=l.cLT({"DEPTMENT":f.F2,"DEPTDESC":f.F17},null);
li.SECTIONS=l.cLT({"DEPTMENT":f.F2,"SECTION":f.F3,"SECDESC":f.F18},null);li.SKILLS=l.cLT({"EMPNO":f.F4,"SKILCODE":f.F19,"SKILDESC":f.F20},null);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.initialize",25);r.ln=25;{r.ln=27;m.LOADIMAGE.setFileName(rc1.get());r.ln=28;this.mthADDDEPARTMENTS();}r.ln=30;r.e();};cO.mthADDDEPARTMENTS=function(){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"AddDepartments",32);var C0=r.cDR("GETDEPARTMENTS","XDEMODATA","GETDEPARTMENTS");
C0.iC();C0.aH("COMPLETED",this,e2);r.ln=32;{r.ln=36;C0.mthEXECUTEASYNC({},{LIST:{"DEPARTMENTS":li.DEPARTMENTS}});}r.ln=50;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetDepartments.Completed",38);r.ln=38;{r.ln=40;for(var i1=1;i1<=li.DEPARTMENTS.entryCount();i1++){li.DEPARTMENTS.getEntry(i1);r.ln=42;cO.mthADDENTRY.call(this,f.F17.get(),null,f.F2.get());}r.ln=46;m.LOADIMAGE.setVisible(false);}r.ln=48;r.e();}};cO.mthADDSECTIONS=function(p0){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,r=l.mR(this,cO,"AddSections",52);
var P0=r.cPD("PARENTITEM");P0=p0;var C0=r.cDR("GETSECTIONS","XDEMODATA","GETDEPTSECTIONS");C0.iC();C0.aH("COMPLETED",this,e3);r.ln=52;{r.ln=57;cO.mthITEMLOADING.call(this,P0);r.ln=59;C0.mthEXECUTEASYNC({FLD:{"DEPTMENT":f.F2.get()}},{LIST:{"SECTIONS":li.SECTIONS}});}r.ln=73;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetSections.Completed",61);r.ln=61;{r.ln=63;for(var i1=1;i1<=li.SECTIONS.entryCount();i1++){li.SECTIONS.getEntry(i1);r.ln=65;cO.mthADDENTRY.call(this,f.F18.get(),P0,f.F2.get(),f.F3.get());
}r.ln=69;cO.mthITEMLOADINGCOMPLETE.call(this,P0);}r.ln=71;r.e();}};cO.mthADDEMPLOYEES=function(p0){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,r=l.mR(this,cO,"AddEmployees",75);var P0=r.cPD("PARENTITEM");P0=p0;var C0=r.cDR("GETEMPLOYEES","XDEMODATA","GETDEPTSECTEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e4);r.ln=75;{r.ln=80;cO.mthITEMLOADING.call(this,P0);r.ln=82;C0.mthEXECUTEASYNC({FLD:{"DEPTMENT":f.F2.get(),"SECTION":f.F3.get()}},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=96;r.e();function e4(sender,Ps)
{var r=l.eR(this,cO,"#GetEmployees.Completed",84);r.ln=84;{r.ln=86;for(var i1=1;i1<=li.EMPLOYEES.entryCount();i1++){li.EMPLOYEES.getEntry(i1);r.ln=88;cO.mthADDENTRY.call(this,l.s.Substitute("&1 &2",f.F6.get(),f.F5.get()),P0,f.F2.get(),f.F3.get(),f.F4.get());}r.ln=92;cO.mthITEMLOADINGCOMPLETE.call(this,P0);}r.ln=94;r.e();}};cO.mthADDSKILLS=function(p0){var li=this.LIST.XDEMOW_42,f=this.FLD.XDEMOW_42,r=l.mR(this,cO,"AddSkills",98);var P0=r.cPD("PARENTITEM");P0=p0;var C0=r.cDR("GETSKILLS","XDEMODATA","GETEMPLOYEESKILLS");
C0.iC();C0.aH("COMPLETED",this,e5);r.ln=98;{r.ln=103;cO.mthITEMLOADING.call(this,P0);r.ln=105;C0.mthEXECUTEASYNC({FLD:{"EMPNO":f.F4.get()}},{LIST:{"SKILLS":li.SKILLS}});}r.ln=119;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#GetSkills.Completed",107);r.ln=107;{r.ln=109;for(var i1=1;i1<=li.SKILLS.entryCount();i1++){li.SKILLS.getEntry(i1);r.ln=111;cO.mthADDENTRY.call(this,f.F20.get(),P0,"","",f.F4.get());}r.ln=115;cO.mthITEMLOADINGCOMPLETE.call(this,P0);}r.ln=117;r.e();}};cO.mthADDENTRY=function(p0,p1,p2,p3,p4)
{var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"AddEntry",121);var P0=r.cP("CAPTION","PRIM_ALPH");var P1=r.cPD("PARENTITEM");var P2=r.cP("DEPARTMENT","PRIM_ALPH");var P3=r.cP("SECTIONCODE","PRIM_ALPH");var P4=r.cP("EMPLOYEEID","PRIM_ALPH");var P5=r.cPD("RESULT");P0.set(p0);P1=p1;P2.set((p2===u)?(""):(p2));P3.set((p3===u)?(""):(p3));P4.set((p4===u)?(""):(p4));r.ln=121;{r.ln=129;f.F1.set(P0.get());r.ln=130;f.F2.set(P2.get());r.ln=131;f.F3.set(P3.get());r.ln=132;f.F4.set(P4.get());r.ln=134;m.LIST.addEntry();
r.ln=136;P5=r.sR("P5",m.LIST.getCurrentItem());r.ln=138;m.LIST.getCurrentItem().setParentItem(P1);r.ln=140;if(l.n.lt(m.LIST.getCurrentItem().getLevel(),4)){r.ln=142;m.LIST.getCurrentItem().setHasChildren("UNKNOWN");}}r.ln=146;return r.rR(P5);};function e6(sender,Ps){var r=l.eR(this,cO,"#List.ItemExpanding",148);var P0=Ps.r("ITEM");r.ln=148;{r.ln=150;cO.mthEXPANDCOLLAPSE.call(this,P0);}r.ln=152;r.e();};cO.mthEXPANDCOLLAPSE=function(p0){var r=l.mR(this,cO,"ExpandCollapse",154);var P0=r.cPD("ITEM");
P0=p0;r.ln=154;{r.ln=157;if(l.n.eq(P0.getItemCount(),0)){r.ln=159;{var v1=P0.getLevel();if(r.ln=161,l.n.eq(v1,1)){r.ln=163;cO.mthADDSECTIONS.call(this,P0);}else if(r.ln=165,l.n.eq(v1,2)){r.ln=167;cO.mthADDEMPLOYEES.call(this,P0);}else if(r.ln=169,l.n.eq(v1,3)){r.ln=171;cO.mthADDSKILLS.call(this,P0);}r.ln=173;}}}r.ln=177;r.e();};cO.mthITEMLOADING=function(p0){var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"ItemLoading",179);var P0=r.cPD("LOADINGITEM");P0=p0;r.ln=179;{r.ln=182;f.F21.set(lIO=m.LIST.getEntry(P0.getEntry()));
r.ln=185;m.LOADINGITEMS.mthINSERT(l.cC("PRIM_ALPH"),P0);r.ln=186;m.LOADINGITEMS.get(P0).set(f.F1.get());r.ln=188;f.F1.set("Loading...");r.ln=189;m.LIST.updateEntry();r.ln=191;P0.setThemeDrawStyle("EMPHASIS");}r.ln=193;r.e();};cO.mthITEMLOADINGCOMPLETE=function(p0){var f=this.FLD.XDEMOW_42,m=this.REF,r=l.mR(this,cO,"ItemLoadingComplete",195);var P0=r.cPD("LOADINGITEM");P0=p0;r.ln=195;{r.ln=198;f.F21.set(lIO=m.LIST.getEntry(P0.getEntry()));r.ln=201;f.F1.set(m.LOADINGITEMS.get(P0).get());r.ln=202;m.LIST.updateEntry();
r.ln=204;m.LOADINGITEMS.mthREMOVE(P0);r.ln=206;P0.setThemeDrawStyle("");}r.ln=208;r.e();};},{rc:["XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_IMAG","PRIM_DCOL","PRIM_WEB.DataRequest"]});