﻿LANSA.addComponent({id:"XDEMO_39",nm:"xDemoWebTileFieldsEmployeeItem",ot:"rp",tp:"Reusable Part",de:"Tile Employee Design",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.1"),c2=l.cDec("0.9");var Fd={F1:{nm:"FULLNAME",ft:"A",ln:41,dc:0,ks:"O",lb:{"ENG":"Employee name","FRA":"Nom employE","JPN":"社員姓名","LLL":"Employee name"}[cL],h1:{"ENG":"Employee name","FRA":"Nom de l´employE","JPN":"社員姓名","LLL":"Employee name"}[cL],
h2:{"ENG":"-------------","FRA":"----------------","JPN":" ","LLL":"-------------"}[cL],h3:" ",de:{"ENG":"Employee full name","FRA":"Nom complet de l´employE","JPN":"社員姓名","LLL":"Employee full name"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],
h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F3:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],
dv:"",ia:["FE"]},F4:{nm:"XDEMOALPH",ft:"A",ln:128,dc:0,lb:"Alpha 128",h1:"Alpha",h2:"128",h3:"",de:"Alpha 128",dv:"",ia:["FE","LC"]},F5:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],
dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F7:{nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Department.....","JPN":"部門コード...","LLL":"Department....."}[cL],
h1:{"ENG":"  Dept","FRA":"  Dept","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"  Code","JPN":"コード","LLL":"  Code"}[cL],h3:"",de:{"ENG":"Department Code","FRA":"Department Code","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F8:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],
h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F9:{nm:"SURNAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Surname........",h1:"Surname",h2:"",h3:"",de:"Employee Surname",dv:"",ia:["FE","LC"]},F10:{nm:"GIVENAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Given names....",h1:"Given name(s)",h2:"",h3:"",de:"Employee Given Name(s)",dv:"",ia:["FE","LC"]},F11:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F12:{nm:"POSTCODE",ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],
h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F13:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:"Section........",h1:"    Section",h2:"     Code",h3:"",de:"Section Code",dv:"",ia:["FE"]},F14:{nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],
dv:0,ia:["FE","RB"]},F15:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Start date.....",h1:"Start",h2:"Date",h3:"",de:"Start Date (DDMMYY)",dv:0,ia:["FE","RB"]},F16:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Term. date.....",h1:"Term.",h2:"Date",h3:"",de:"Termination Date (DDMMYY)",dv:0,ia:["FE","RB"]},F17:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],
h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{OnAdd:{ps:{"TileItem":{pt:"i"}}},OnFind:{ps:{"TileItem":{pt:"i"},"Key":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMO_39",Fd);var C0=this.cR("LAYOUT","PRIM_TBLO");var C1=this.cR("ROW1","PRIM_TBLO","Row");var C2=this.cR("ROW2","PRIM_TBLO","Row");var C3=this.cR("ROW3","PRIM_TBLO","Row");var C4=this.cR("ROW4","PRIM_TBLO","Row");
var C5=this.cR("COL1","PRIM_TBLO","Column");var C6=this.cR("COL2","PRIM_TBLO","Column");this.cD("GTILEITEM");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C12=this.cR("ROW_1","PRIM_TBLO","Row");var C13=this.cR("ROW_2","PRIM_TBLO","Row");var C14=this.cR("ROW_3","PRIM_TBLO","Row");var C15=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");
var C17=this.cR("LAYOUTITEM8","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C19=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");var C20=this.cR("TBLO_10","PRIM_TBLO","Item");var C21=this.cR("ROW_4","PRIM_TBLO","Row");var C22=this.cF("FULLNAME",Fd.F1.VISUALEDIT);var C23=this.cF("PHONEBUS",Fd.F2.VISUAL);var C24=this.cF("PHONEHME",Fd.F3.VISUAL);var C25=this.cF("EMAIL",Fd.F4.VISUALEDIT);var C26=this.cF("ADDRESS1",Fd.F5.VISUAL);var C27=this.cF("ADDRESS2",Fd.F6.VISUAL);var C28=this.cF("ADDRESSANDPOSTCODE",Fd.F4.VISUALEDIT);
var C29=this.cF("DEPTMENT",Fd.F7.VISUALEDIT);C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(3);C2.setParent(C0);C2.iC();C3.setDisplayPosition(4);C3.setParent(C0);C3.setHeight(c1);C3.iC();C4.setDisplayPosition(5);C4.setParent(C0);C4.setHeight(c2);C4.iC();C5.setDisplayPosition(1);C5.setParent(C0);C5.setUnits("PIXELS");C5.setWidth(50);C5.iC();C6.setDisplayPosition(2);C6.setParent(C0);C6.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C6);C8.setManage(C22);C8.setParent(C0);
C8.setRow(C1);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C6);C9.setManage(C23);C9.setParent(C0);C9.setRow(C2);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C6);C10.setManage(C24);C10.setParent(C0);C10.setRow(C3);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C6);C11.setManage(C25);C11.setParent(C0);C11.setRow(C4);C11.iC();C12.setDisplayPosition(6);C12.setParent(C0);C12.iC();C13.setDisplayPosition(7);C13.setParent(C0);C13.iC();C14.setDisplayPosition(8);C14.setParent(C0);C14.iC();C15.setAlignment("TOPLEFT");
C15.setColumn(C6);C15.setManage(C26);C15.setParent(C0);C15.setRow(C12);C15.iC();C16.setAlignment("TOPLEFT");C16.setColumn(C6);C16.setManage(C27);C16.setParent(C0);C16.setRow(C13);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C6);C17.setManage(C28);C17.setParent(C0);C17.setRow(C14);C17.iC();C18.setAlignment("TOPLEFT");C18.setColumn(C6);C18.setFlow("DOWN");C18.setManage(C29);C18.setParent(C0);C18.setRow(C21);C18.iC();C19.setDisplayPosition(1);C19.setParent(this);C19.setTabPosition(1);C19.setTop(2);
C19.setLeft(2);C19.setWidth(46);C19.setImageSizing("BESTFIT");C19.iC();C20.setAlignment("TOPLEFT");C20.setColumn(C5);C20.setFlow("DOWN");C20.setManage(C19);C20.setParent(C0);C20.setRow(C1);C20.setSizing("FITTOWIDTH");C20.setMarginTop(2);C20.setMarginBottom(2);C20.setMarginLeft(2);C20.setMarginRight(2);C20.iC();C21.setDisplayPosition(2);C21.setParent(C0);C21.iC();C22.setDisplayPosition(2);C22.setLeft(50);C22.setParent(this);C22.setTabPosition(2);C22.setHeight(26);C22.setWidth(419);C22.setCaption("Name");
C22.setLabelType("CAPTION");C22.setDisplayOnly(true);C22.aD();C22.iC();C23.setComponentVersion(1);C23.setDisplayPosition(3);C23.setHeight(26);C23.setLeft(50);C23.setParent(this);C23.setTabPosition(5);C23.setTop(52);C23.setUsePicklist(false);C23.setWidth(419);C23.setDisplayOnly(true);C23.setCaption("Work");C23.setLabelType("CAPTION");C23.aD();C23.iC();C24.setComponentVersion(1);C24.setDisplayPosition(4);C24.setHeight(29);C24.setLeft(50);C24.setParent(this);C24.setTabPosition(6);C24.setTop(78);C24.setUsePicklist(false);
C24.setWidth(419);C24.setDisplayOnly(true);C24.setCaption("Home");C24.setLabelType("CAPTION");C24.aD();C24.iC();C25.setDisplayPosition(5);C25.setLeft(50);C25.setParent(this);C25.setTabPosition(4);C25.setTop(107);C25.setCaption("Email");C25.setLabelType("CAPTION");C25.setHeight(22);C25.setWidth(419);C25.setDisplayOnly(true);C25.aD();C25.iC();C26.setDisplayPosition(6);C26.setLeft(50);C26.setParent(this);C26.setTabPosition(7);C26.setTop(129);C26.setHeight(25);C26.setWidth(419);C26.setDisplayOnly(true);
C26.setCaption("Address");C26.setLabelType("CAPTION");C26.setUsePicklist(false);C26.aD();C26.iC();C27.setComponentVersion(1);C27.setDisplayPosition(7);C27.setHeight(25);C27.setLeft(50);C27.setParent(this);C27.setTabPosition(8);C27.setTop(154);C27.setUsePicklist(false);C27.setWidth(419);C27.setDisplayOnly(true);C27.setLabelType("CAPTION");C27.aD();C27.iC();C28.setDisplayPosition(8);C28.setLeft(50);C28.setParent(this);C28.setTabPosition(3);C28.setTop(179);C28.setLabelType("CAPTION");C28.setHeight(25);
C28.setWidth(419);C28.setDisplayOnly(true);C28.aD();C28.iC();C29.setDisplayPosition(9);C29.setLeft(50);C29.setParent(this);C29.setTabPosition(9);C29.setTop(26);C29.setHeight(26);C29.setWidth(419);C29.setDisplayOnly(true);C29.aD();C29.iC();this.setHeight(204);this.setWidth(469);this.setLayoutManager(C0);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setThemeDrawStyle("ListItem");this.aLF({"EMPNO":f.F8,"SURNAME":f.F9,"GIVENAME":f.F10,"ADDRESS1":C26,"ADDRESS2":C27,"ADDRESS3":f.F11,"POSTCODE":f.F12,"PHONEHME":C24,"PHONEBUS":C23,"DEPTMENT":C29,"SECTION":f.F13,"SALARY":f.F14,"STARTDTE":f.F15,"TERMDATE":f.F16,"EMPTHM":f.F17});
}});cO.mthONADD=function(p0){var f=this.FLD.XDEMO_39,m=this.REF,r=l.mR(this,cO,"OnAdd",44);var P0=r.cPD("TILEITEM");P0=p0;r.ln=44;{r.ln=49;m.FULLNAME.set(l.s.Substitute("&1 &2 (&3)",f.F10.get(),f.F9.get(),f.F8.get()));r.ln=50;m.ADDRESSANDPOSTCODE.set(l.s.Substitute("&1, &2",f.F11.get(),l.n.AsString(f.F12.get())));r.ln=51;m.EMAIL.set(l.s.LowerCase(l.s.Substitute("&1.&2@acompany.com",f.F10.get(),f.F9.get())));r.ln=52;m.EMPLOYEEIMAGE.setFileName(f.F17.get());}r.ln=54;r.e();};cO.mthONFIND=function(p1,p2)
{var r=l.mR(this,cO,"OnFind",56);var P0=r.cPb("RESULT");var P1=r.cPD("TILEITEM");var P2=r.cP("KEY","*VARIANT");P1=p1;P2.set(p2);var C0=r.cR("SEARCH","PRIM_ALPH");C0.iC();r.ln=56;{r.ln=60;C0.set(P2.get());r.ln=63;{var i1=this.getComponentControls().cI();while(i1.step()){var CONTROL=r.sR("CONTROL",i1.item());r.ln=65;if(l.nIo(CONTROL,"PRIM_EVEF")){continue;}r.ln=67;l.cast(CONTROL,"PRIM_EVEF").setThemeDrawStyle("");r.ln=69;if(l.tB(l.s.eq(P2.get(),""))){continue;}r.ln=71;if(l.s.Contains(l.s.LowerCase(l.cast(CONTROL,"PRIM_EVEF").getText()),l.s.LowerCase(C0.get())))
{r.ln=74;l.cast(CONTROL,"PRIM_EVEF").setThemeDrawStyle("STRONG+EMPHASIS");r.ln=77;P0.set(true);}r.ln=81;}i1.end();r.dR("CONTROL");}}r.ln=83;return r.rV(P0.get());};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"FULLNAME"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(673);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"FULLNAME",cn:"VisualEdit"});}{Fd.F2.Dc=function()
{this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"PHONEBUS"});Fd.F2.VISUAL=function(){this.aN.call(this,new Fd.F2.Dc());};l.cFC({co:Fd.F2.VISUAL,an:"PRIM_EVEF",fn:"PHONEBUS",cn:"Visual"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"PHONEHME"});Fd.F3.VISUAL=function(){this.aN.call(this,new Fd.F3.Dc());};l.cFC({co:Fd.F3.VISUAL,an:"PRIM_EVEF",fn:"PHONEHME",cn:"Visual"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XDEMOALPH"});
Fd.F4.VISUALEDIT=function(){this.aN.call(this,new Fd.F4.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F4.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOALPH",cn:"VisualEdit"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"ADDRESS1"});Fd.F5.VISUAL=function(){this.aN.call(this,new Fd.F5.Dc());};l.cFC({co:Fd.F5.VISUAL,an:"PRIM_EVEF",fn:"ADDRESS1",cn:"Visual"});}{Fd.F6.Dc=function(){this.aN.call(this,Fd.F6);
};l.cFC({co:Fd.F6.Dc,an:"PRIM_FLD",fn:"ADDRESS2"});Fd.F6.VISUAL=function(){this.aN.call(this,new Fd.F6.Dc());};l.cFC({co:Fd.F6.VISUAL,an:"PRIM_EVEF",fn:"ADDRESS2",cn:"Visual"});}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"DEPTMENT"});Fd.F7.VISUALEDIT=function(){this.aN.call(this,new Fd.F7.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(225);};l.cFC({co:Fd.F7.VISUALEDIT,an:"PRIM_EVEF",fn:"DEPTMENT",cn:"VisualEdit"});
}cO.srGTILEITEM=function(rn){this.sR("GTILEITEM",rn);};},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_IMAG","PRIM_EVEF"],dp:["PRIM_TILE.TileItem","PRIM_ALPH"]});