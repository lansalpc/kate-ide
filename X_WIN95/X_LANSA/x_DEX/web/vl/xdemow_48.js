﻿LANSA.addComponent({id:"XDEMOW_48",nm:"xDemoWebTileFields",ot:"wp",tp:"Web Page",de:"Tile using fields",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.81");var Fd={F1:{nm:"XDEMOCAPT",ft:"N",ln:256,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC"]},F2:{nm:"XDEMOVALU",ft:"N",ln:256,dc:0,lb:"Generic Alphanu",h1:"Generic",h2:"Alphanumeric",h3:"Value",de:"Generic Alphanumeric Value",dv:"",ia:["FE","LC"]
},F3:{nm:"EMPNO",ft:"A",ln:5,dc:0,lb:{"ENG":"Employee no....","FRA":"No employé  . .","JPN":"Employee no....","LLL":"Employee no...."}[cL],h1:{"ENG":"  Employ","FRA":"Salarié","JPN":"  Employ","LLL":"  Employ"}[cL],h2:{"ENG":"  Number","FRA":" ","JPN":"  Number","LLL":"  Number"}[cL],h3:" ",de:{"ENG":"Employee Number","FRA":"Numéro d´employé","JPN":"Employee Number","LLL":"Employee Number"}[cL],dv:"",ia:["FE"]},F4:{nm:"SURNAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Surname........",h1:"Surname",h2:"",h3:"",
de:"Employee Surname",dv:"",ia:["FE","LC"]},F5:{nm:"GIVENAME",ft:"A",ln:20,dc:0,ks:"O",lb:"Given names....",h1:"Given name(s)",h2:"",h3:"",de:"Employee Given Name(s)",dv:"",ia:["FE","LC"]},F6:{nm:"ADDRESS1",ft:"A",ln:25,dc:0,lb:{"ENG":"Address 1......","FRA":"Adresse 1 . . .","JPN":"Address 1......","LLL":"Address 1......"}[cL],h1:{"ENG":"Address line 1","FRA":"Adresse ligne 1","JPN":"Address line 1","LLL":"Address line 1"}[cL],h2:" ",h3:" ",de:{"ENG":"Street No and Name","FRA":"Adresse ligne 1","JPN":"Street No and Name","LLL":"Street No and Name"}[cL],
dv:"",ia:["FE","LC"]},F7:{nm:"ADDRESS2",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Address 2......","FRA":"Adresse 2 . . .","JPN":"Address 2......","LLL":"Address 2......"}[cL],h1:{"ENG":"Address line 2","FRA":"Adresse ligne 2","JPN":"Address line 2","LLL":"Address line 2"}[cL],h2:" ",h3:" ",de:{"ENG":"Suburb or Town","FRA":"Adresse ligne 2","JPN":"Suburb or Town","LLL":"Suburb or Town"}[cL],dv:"",ia:["FE","LC"]},F8:{nm:"ADDRESS3",ft:"A",ln:25,dc:0,ks:"O",lb:{"ENG":"Country","FRA":"Adresse 3 . . .","JPN":"Country","LLL":"Country"}[cL],
h1:{"ENG":"Country","FRA":"Adresse ligne 3","JPN":"Country","LLL":"Country"}[cL],h2:" ",h3:" ",de:{"ENG":"State and Country","FRA":"Adresse ligne 3","JPN":"State and Country","LLL":"State and Country"}[cL],dv:"",ia:["FE","LC"]},F9:{nm:"POSTCODE",ft:"S",ln:6,dc:0,ec:"3",lb:{"ENG":"Post/zip code..","FRA":"Code postal . .","JPN":"Post/zip code..","LLL":"Post/zip code.."}[cL],h1:{"ENG":"Post/zip","FRA":"Code","JPN":"Post/zip","LLL":"Post/zip"}[cL],h2:{"ENG":"Code","FRA":"Postal","JPN":"Code","LLL":"Code"}[cL],
h3:" ",de:{"ENG":"Post / Zip Code","FRA":"Code postal","JPN":"Post / Zip Code","LLL":"Post / Zip Code"}[cL],dv:0,ia:["FE"]},F10:{nm:"PHONEHME",ft:"A",ln:15,dc:0,lb:{"ENG":"Home phone.....","FRA":"Tél. personnel","JPN":"Home phone.....","LLL":"Home phone....."}[cL],h1:{"ENG":"Home phone","FRA":"Téléphone","JPN":"Home phone","LLL":"Home phone"}[cL],h2:{"ENG":"Number","FRA":"Personnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Home Phone Number","FRA":"Numéro de téléphone personnel","JPN":"Home Phone Number","LLL":"Home Phone Number"}[cL],
dv:"",ia:["FE"]},F11:{nm:"PHONEBUS",ft:"A",ln:15,dc:0,lb:{"ENG":"Business ph....","FRA":"Tél. prof.  . .","JPN":"Business ph....","LLL":"Business ph...."}[cL],h1:{"ENG":"Business Phone","FRA":"Téléphone","JPN":"Business Phone","LLL":"Business Phone"}[cL],h2:{"ENG":"Number","FRA":"professionnel","JPN":"Number","LLL":"Number"}[cL],h3:" ",de:{"ENG":"Business Phone Number","FRA":"Numéro de téléphone professionnel","JPN":"Business Phone Number","LLL":"Business Phone Number"}[cL],dv:"",ia:["FE"]},F12:{
nm:"DEPTMENT",ft:"A",ln:4,dc:0,lb:{"ENG":"Department.....","FRA":"Department.....","JPN":"部門コード...","LLL":"Department....."}[cL],h1:{"ENG":"  Dept","FRA":"  Dept","JPN":"部門","LLL":"  Dept"}[cL],h2:{"ENG":"  Code","FRA":"  Code","JPN":"コード","LLL":"  Code"}[cL],h3:"",de:{"ENG":"Department Code","FRA":"Department Code","JPN":"部門コード","LLL":"Department Code"}[cL],dv:"",ia:["FE"]},F13:{nm:"SECTION",ft:"A",ln:2,dc:0,lb:"Section........",h1:"    Section",h2:"     Code",h3:"",de:"Section Code",dv:"",ia:["FE"]
},F14:{nm:"SALARY",ft:"P",ln:11,dc:2,ec:"1",lb:{"ENG":"Salary.........","FRA":"Salaire . . . .","JPN":"Salary.........","LLL":"Salary........."}[cL],h1:{"ENG":"Salary","FRA":"Salaire","JPN":"Salary","LLL":"Salary"}[cL],h2:" ",h3:" ",de:{"ENG":"Employee Salary","FRA":"Salaire de l´employé","JPN":"Employee Salary","LLL":"Employee Salary"}[cL],dv:0,ia:["FE","RB"]},F15:{nm:"STARTDTE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Start date.....",h1:"Start",h2:"Date",h3:"",de:"Start Date (DDMMYY)",dv:0,ia:["FE","RB"]},
F16:{nm:"TERMDATE",ft:"S",ln:6,dc:0,ec:"Y",lb:"Term. date.....",h1:"Term.",h2:"Date",h3:"",de:"Termination Date (DDMMYY)",dv:0,ia:["FE","RB"]},F17:{nm:"EMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"???????","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":" ","LLL":"Image"}[cL],h3:" ",de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"社員ｲﾒｰｼﾞ","LLL":"Employee Image"}[cL],dv:l.SqlNull,
ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},Find:{}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_48",Fd);var C0=this.cR("TILE","PRIM_TILE");var C1=this.cR("TABLELAYOUT","PRIM_TBLO");var C2=this.cR("ROW","PRIM_TBLO","Row");var C3=this.cR("COLUMN","PRIM_TBLO","Column");var C4=this.cR("ITEM","PRIM_TBLO","Item");var C5=this.cR("ROW_2","PRIM_TBLO","Row");var C6=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");var C8=this.cR("DIRECTION","XDEMO_25");
var C9=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C10=this.cR("SHOWPARTIALITEMS","PRIM_CKBX");var C11=this.cF("FIND",Fd.F1.VISUAL);C0.setDisplayPosition(2);C0.setLeft(0);C0.setParent(this);C0.setTabPosition(2);C0.setTop(44);C0.setHeight(756);C0.setWidth(1200);C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setHeight(44);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(1);C3.setParent(C1);C3.iC();C4.setColumn(C3);C4.setManage(C0);C4.setParent(C1);C4.setRow(C5);C4.iC();C5.setDisplayPosition(2);
C5.setParent(C1);C5.setHeight(c1);C5.iC();C6.setAlignment("CENTERRIGHT");C6.setColumn(C3);C6.setFlow("DOWN");C6.setManage(C11);C6.setParent(C1);C6.setRow(C2);C6.setSizing("NONE");C6.setMarginRight(4);C6.iC();C7.setAlignment("CENTERLEFT");C7.setColumn(C3);C7.setFlow("RIGHT");C7.setManage(C10);C7.setParent(C1);C7.setRow(C2);C7.setSizing("NONE");C7.setMarginLeft(20);C7.iC();C8.setParent(this);C8.setWidth(317);C8.setHeight(25);C8.setTop(10);C8.setLeft(4);C8.iC();C9.setColumn(C3);C9.setParent(C1);C9.setRow(C2);
C9.setAlignment("CENTERLEFT");C9.setSizing("NONE");C9.setMarginLeft(4);C9.setFlow("RIGHT");C9.setManage(C8);C9.iC();C10.setDisplayPosition(3);C10.setLeft(341);C10.setParent(this);C10.setTabPosition(3);C10.setWidth(200);C10.setCaption("Show Partial Items");C10.setHeight(27);C10.setTop(9);C10.iC();C11.setComponentVersion(1);C11.setDisplayPosition(4);C11.setHeight(25);C11.setParent(this);C11.setTabPosition(4);C11.setUsePicklist(false);C11.setWidth(380);C11.setLeft(816);C11.setTop(10);C11.setCaption("Find");
C11.setLabelType("CAPTION");C11.setMarginLeft(80);C11.setPlaceholder("Enter a value and press enter");C11.setLabelSelectable(false);C11.aD();C11.iC();C8.aH("ITEMGOTFOCUS",this,e2);C10.aH("CLICK",this,e4);C11.aH("ENTER",this,e5);C0.aDS("XDEMO_39");C0.aLF({"EMPNO":f.F3,"SURNAME":f.F4,"GIVENAME":f.F5,"ADDRESS1":f.F6,"ADDRESS2":f.F7,"ADDRESS3":f.F8,"POSTCODE":f.F9,"PHONEHME":f.F10,"PHONEBUS":f.F11,"DEPTMENT":f.F12,"SECTION":f.F13,"SALARY":f.F14,"STARTDTE":f.F15,"TERMDATE":f.F16,"EMPTHM":f.F17});this.setLayoutManager(C1);
this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_48");li.EMPLOYEES=l.cLT({"EMPNO":f.F3,"SURNAME":f.F4,"GIVENAME":f.F5,"ADDRESS1":f.F6,"ADDRESS2":f.F7,"ADDRESS3":f.F8,"POSTCODE":f.F9,"PHONEHME":f.F10,"PHONEBUS":f.F11,"DEPTMENT":f.F12,"SECTION":f.F13,"SALARY":f.F14,"STARTDTE":f.F15,"TERMDATE":f.F16,"EMPTHM":f.F17},null);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",19);r.ln=19;{r.ln=21;this.mthLOAD();r.ln=23;m.DIRECTION.mthADD("LEFTTORIGHT","Left to Right");
r.ln=24;m.DIRECTION.mthADD("RIGHTTOLEFT","Right to Left");r.ln=25;m.DIRECTION.mthADD("TOPTOBOTTOM","Top to Bottom");r.ln=26;m.DIRECTION.mthADD("BOTTOMTOTOP","Bottom to Top");r.ln=28;m.DIRECTION.mthFIND(m.TILE.getDirection(),true);r.ln=30;if(m.TILE.getShowPartialItem()){r.ln=32;m.SHOWPARTIALITEMS.setButtonState("CHECKED");}}r.ln=36;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Direction.ItemGotFocus",38);var P0=Ps.r("VALUE");r.ln=38;{r.ln=40;m.TILE.setDirection(P0.get());}r.ln=42;
r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOW_48,m=this.REF,r=l.mR(this,cO,"Load",44);var C0=r.cDR("GETEMPLOYEES","XDEMODATA","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e3);r.ln=44;{r.ln=48;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=60;r.e();function e3(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",50);r.ln=50;{r.ln=52;for(var i1=1;i1<=li.EMPLOYEES.entryCount();i1++){li.EMPLOYEES.getEntry(i1);r.ln=54;m.TILE.addEntry();}}r.ln=58;r.e();}};function e4(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#ShowPartialItems.Click",62);r.ln=62;{r.ln=64;m.TILE.setShowPartialItem(l.s.eq(m.SHOWPARTIALITEMS.getButtonState(),"CHECKED"));}r.ln=66;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#Find.Enter",68);r.ln=68;{r.ln=70;this.mthFIND();}r.ln=72;r.e();};cO.mthFIND=function(){var m=this.REF,r=l.mR(this,cO,"Find",74);var C0=r.cD("C0");r.ln=74;{r.ln=79;for(var i1=m.TILE.getItems().cI();i1.step();){i1.item().setVisible(l.s.eq(m.FIND.get(),""))};r.ln=81;for(var i1=1,s1=1,t1=9999999;(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=84;C0=r.sR("C0",m.TILE.mthFINDITEM(m.FIND.get(),C0));r.ln=86;if((C0==null)){break;}r.ln=88;C0.setVisible(true);}}r.ln=92;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOCAPT"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"XDEMOCAPT",cn:"Visual"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOVALU"});}},{rc:["XDEMO_25","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TILE","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_CKBX","PRIM_EVEF","PRIM_FLD","PRIM_WEB.DataRequest"],
dc:["XDEMO_39"],dp:["PRIM_TILE.TileItem"]});