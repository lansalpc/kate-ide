﻿LANSA.addComponent({id:"XDEMOW_78",nm:"xDemoWebHighlightListCells",ot:"wp",tp:"Web Page",de:"Highlighting List Cells",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.79");var rc1=l.cB("ximagesea.png");var rc2=l.cB("ximageup1.png");var rc3=l.cB("ximaged_4.png");var Fd={F1:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",
dv:"",ia:["FE","LC"]},F2:{nm:"XDEMOUNIC",an:"xDemoUnicode128",ft:"N",ln:128,dc:0,lb:"Unicode 128",h1:"Unicode",h2:"128",h3:"",de:"Unicode 128",dv:"",ia:["FE","LC"]},F3:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"",ia:["FE","LC"]},F4:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F5:{nm:"XSTREET",
an:"xEmployeeStreet",ft:"N",ln:40,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F6:{nm:"XCITY",an:"xEmployeeCity",ft:"N",ln:40,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",dv:"",ia:["FE","LC"]},F7:{nm:"XSTATE",an:"xEmployeeState",ft:"N",ln:40,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F8:{nm:"XPOSTCODE",an:"xEmployeePostalCode",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F9:{nm:"XEMPTHM",an:"xEmployeeImageThumbnail",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F10:{nm:"LISTCOUNT",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],
h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]},F11:{nm:"XEMPLOYID",an:"xEmployeeIdentification",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F12:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",
h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F13:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]},F14:{nm:"XCOUNTRY",an:"xEmployeeCountry",ft:"N",ln:40,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",
ia:["FE","LC"]},F15:{nm:"XPHONEHME",an:"xEmployeeHomeTelephone",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",ia:["FE"]},F16:{nm:"XPHONEBUS",an:"xEmployeeBusinessTelephone",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F17:{nm:"XPHONEMOB",an:"xEmployeeMobilePhone",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",
h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Mobile Phone",dv:"",ia:["FE"]},F18:{nm:"XSALARY",an:"xEmployeeSalary",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]},F19:{nm:"XSTARTDTE",an:"xEmployeeStartDate",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F20:{nm:"XTERMDATE",
an:"xEmployeeTerminationDate",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F21:{nm:"XDEPTMENT",an:"xDepartmentCode",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Department",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Load:{},Filter:{},PositionTo:{ps:{"Item":{pt:"i"}}},GetCellValue:{ps:{"Column":{pt:"i"
}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_78",Fd);var C0=this.cR("LAYOUT","PRIM_TBLO");var C1=this.cR("ROW_1","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("COLUMN_1","PRIM_TBLO","Column");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C7=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C8=this.cF("FILTER",Fd.F1.VISUALEDIT);var C9=this.cR("TBLO_1","PRIM_TBLO","Item");
var C10=this.cR("LIST","PRIM_LIST");var C11=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");var C12=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C13=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C14=this.cR("COLUMNXSTREET1","PRIM_LIST","String");var C15=this.cR("COLUMNXCITY1","PRIM_LIST","String");var C16=this.cR("COLUMNXSTATE1","PRIM_LIST","String");var C17=this.cR("COLUMNXPOSTCODE1","PRIM_LIST","String");var C18=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C19=this.cR("COLUMNIMAGE","PRIM_LIST","Image");
var C20=this.cR("PREVIOUS","PRIM_SPBN");var C21=this.cR("NEXT","PRIM_SPBN");var C22=this.cR("NOWSHOWING","PRIM_LABL");var C23=this.cR("LABEL1","PRIM_LABL");var C24=this.cR("TIMER","XDEMOEDI");var C25=this.cR("MATCHINGITEMS","PRIM_ACOL");var C26=this.cR("ACTIVEITEM","PRIM_NMBR");var C27=this.cR("CTRL_F","PRIM_STPG");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.setHeight(32);C1.setUnits("PIXELS");C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setDisplayPosition(1);
C3.setParent(C0);C3.iC();C4.setColumn(C3);C4.setFlow("LEFT");C4.setManage(C21);C4.setParent(C0);C4.setRow(C1);C4.setSizing("FITTOHEIGHT");C4.setAlignment("CENTERRIGHT");C4.setMarginBottom(2);C4.setMarginTop(2);C4.iC();C5.setColumn(C3);C5.setFlow("LEFT");C5.setManage(C20);C5.setParent(C0);C5.setRow(C1);C5.setSizing("FITTOHEIGHT");C5.setAlignment("CENTERRIGHT");C5.setMarginBottom(2);C5.setMarginTop(2);C5.iC();C6.setColumn(C3);C6.setFlow("LEFT");C6.setManage(C22);C6.setParent(C0);C6.setRow(C1);C6.setSizing("CONTENTWIDTHFITTOHEIGHT");
C6.setAlignment("CENTERRIGHT");C6.setMarginBottom(2);C6.setMarginTop(2);C6.setMarginRight(2);C6.setMarginLeft(2);C6.iC();C7.setColumn(C3);C7.setManage(C23);C7.setParent(C0);C7.setRow(C1);C7.iC();C8.setDisplayPosition(5);C8.setParent(this);C8.setTabPosition(1);C8.setWidth(344);C8.setLabelType("CAPTION");C8.setTop(2);C8.setLeft(515);C8.setHeight(28);C8.setCaption("Find ");C8.setMarginLeft(0);C8.setPlaceholder("Search");C8.setPrompterTabStop(false);C8.setPrompterImage(rc1);C8.setShowPrompter(true);C8.aD();
C8.iC();C9.setAlignment("CENTERRIGHT");C9.setColumn(C3);C9.setManage(C8);C9.setParent(C0);C9.setRow(C1);C9.setMarginTop(2);C9.setMarginBottom(2);C9.setMarginLeft(2);C9.setSizing("FITTOHEIGHT");C9.setMarginRight(2);C9.setFlow("LEFT");C9.iC();C10.setDisplayPosition(2);C10.setHeight(712);C10.setLeft(0);C10.setParent(this);C10.setTabPosition(2);C10.setTop(32);C10.setWidth(1000);C10.setColumnLines(false);C10.setRowLines(false);C10.iC();C11.setColumnWidth(157);C11.setDisplayPosition(2);C11.setParent(C10);
C11.setSource(f.F3);C11.iC();C12.setColumnWidth(231);C12.setDisplayPosition(3);C12.setParent(C10);C12.setSource(f.F1);C12.iC();C13.setColumnWidth(207);C13.setDisplayPosition(4);C13.setParent(C10);C13.setSource(f.F4);C13.iC();C14.setColumnWidth(307);C14.setDisplayPosition(5);C14.setParent(C10);C14.setSource(f.F5);C14.iC();C15.setColumnWidth(307);C15.setDisplayPosition(6);C15.setParent(C10);C15.setSource(f.F6);C15.iC();C16.setColumnWidth(307);C16.setDisplayPosition(7);C16.setParent(C10);C16.setSource(f.F7);
C16.iC();C17.setColumnWidth(96);C17.setDisplayPosition(8);C17.setParent(C10);C17.setSource(f.F8);C17.iC();C18.setColumn(C3);C18.setManage(C10);C18.setParent(C0);C18.setRow(C2);C18.iC();C19.setColumnWidth(50);C19.setDisplayPosition(1);C19.setParent(C10);C19.setImageSizing("BESTFIT");C19.setCellMarginBottom(2);C19.setCellMarginTop(2);C19.setSource(f.F9);C19.iC();C20.setAutoSize(false);C20.setButtonStyle("FLATBUTTON");C20.setComponentVersion(1);C20.setDisplayPosition(4);C20.setLeft(861);C20.setParent(this);
C20.setTabPosition(3);C20.setTop(2);C20.setImage(rc2);C20.setEnabled(false);C20.iC();C21.setAutoSize(false);C21.setButtonStyle("FLATBUTTON");C21.setComponentVersion(1);C21.setDisplayPosition(3);C21.setLeft(889);C21.setParent(this);C21.setTabPosition(4);C21.setTop(2);C21.setImage(rc3);C21.setEnabled(false);C21.iC();C22.setCaption("Now Showing");C22.setDisplayPosition(1);C22.setEllipses("WORD");C22.setHeight(28);C22.setLeft(919);C22.setParent(this);C22.setTabPosition(5);C22.setTabStop(false);C22.setTop(2);
C22.setVerticalAlignment("CENTER");C22.setWidth(79);C22.setVisible(false);C22.setMarginRight(4);C22.setThemeDrawStyle("DarkTitle");C22.iC();C23.setCaption("Enter a search value. Matching cells will be highlighted");C23.setDisplayPosition(6);C23.setEllipses("WORD");C23.setHeight(32);C23.setLeft(0);C23.setParent(this);C23.setTabPosition(6);C23.setTabStop(false);C23.setTop(0);C23.setVerticalAlignment("CENTER");C23.setWidth(1000);C23.setThemeDrawStyle("Heading1+DarkTitle");C23.setMarginLeft(4);C23.iC();
C24.iC();C25.setCollects("PRIM_LIST.ListItem");C25.iC();C26.iC();C27.setParent(this);C27.setShortCut("CTRL+F");C27.iC();C8.aH("CHANGED",this,e3);C20.aH("CLICK",this,e6);C21.aH("CLICK",this,e5);C24.aH("TICKED",this,e4);C27.aH("PRESSED",this,e7);this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));this.setHeight(744);this.setWidth(1000);this.aH("CREATEINSTANCE",this,e1);var li=this.aL("XDEMOW_78");li.EMPLOYEES=l.cLT({"XEMPLOYID":f.F11,"XEMPTITLE":f.F3,"XSURNAME":f.F1,"XGIVENAME":f.F4,"XEMPDOB":f.F12,"XGENDER":f.F13,"XSTREET":f.F5,"XCITY":f.F6,"XSTATE":f.F7,"XPOSTCODE":f.F8,"XCOUNTRY":f.F14,"XPHONEHME":f.F15,"XPHONEBUS":f.F16,"XPHONEMOB":f.F17,"XSALARY":f.F18,"XSTARTDTE":f.F19,"XTERMDATE":f.F20,"XDEPTMENT":f.F21,"XEMPTHM":f.F9},f.F10);
}});function e1(sender,Ps){var r=l.eR(this,cO,"#com_owner.CreateInstance",44);r.ln=44;{r.ln=46;this.mthLOAD();r.ln=48;this.setCaption("Filter data in a list");}r.ln=50;r.e();};cO.mthLOAD=function(){var li=this.LIST.XDEMOW_78,m=this.REF,r=l.mR(this,cO,"Load",52);var C0=r.cDR("GETEMPLOYEES","XDEMOW_84","GETEMPLOYEES");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=52;{r.ln=57;C0.mthEXECUTEASYNC({},{LIST:{"EMPLOYEES":li.EMPLOYEES}});}r.ln=71;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#GetEmployees.Completed",60);
r.ln=60;{r.ln=63;{var l1=li.EMPLOYEES.selectList();while(l1.step()){r.ln=65;m.LIST.addEntry();r.ln=67;}l1.end();}}r.ln=69;r.e();}};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Filter.Changed",73);r.ln=73;{r.ln=77;m.TIMER.mthRESTART();}r.ln=79;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#Timer.Ticked",81);r.ln=81;{r.ln=83;this.mthFILTER();}r.ln=85;r.e();};cO.mthFILTER=function(){var m=this.REF,r=l.mR(this,cO,"Filter",87);var C0=r.cF("CELL",Fd.F2.Dc);C0.iC();r.ln=87;{r.ln=91;m.ACTIVEITEM.set(0);
r.ln=92;m.MATCHINGITEMS.mthREMOVEALL();r.ln=95;{var l1=m.LIST.selectList();while(l1.step()){r.ln=98;{var l2=m.LIST.getColumns().cI();while(l2.step()){var COLUMN=r.sR("COLUMN",l2.item());r.ln=101;COLUMN.getCurrentItem().setThemeDrawStyle("");r.ln=103;C0.set(cO.mthGETCELLVALUE.call(this,COLUMN));r.ln=106;if(l.s.eq(m.FILTER.get(),"")){continue;}r.ln=107;if(l.not(l.s.Contains(l.s.LowerCase(C0.get()),l.s.LowerCase(m.FILTER.get())))){continue;}r.ln=109;COLUMN.getCurrentItem().setThemeDrawStyle("HIGHLIGHTTEXT");
r.ln=111;if(l.not(m.MATCHINGITEMS.mthCONTAINS(m.LIST.getCurrentItem()))){r.ln=113;m.MATCHINGITEMS.mthINSERT(m.LIST.getCurrentItem());}r.ln=117;break;r.ln=119;}l2.end();r.dR("COLUMN");}r.ln=121;}l1.end();}r.ln=123;m.NOWSHOWING.setVisible(l.n.gt(m.MATCHINGITEMS.getItemCount(),0));m.NEXT.setEnabled(l.n.gt(m.MATCHINGITEMS.getItemCount(),0));m.PREVIOUS.setEnabled(l.n.gt(m.MATCHINGITEMS.getItemCount(),0));r.ln=125;cO.mthPOSITIONTO.call(this,1);}r.ln=127;r.e();};cO.mthPOSITIONTO=function(p0){var m=this.REF,r=l.mR(this,cO,"PositionTo",129);
var P0=r.cP("ITEM","PRIM_NMBR");P0.set(p0);r.ln=129;{r.ln=132;if(l.n.gt(m.MATCHINGITEMS.getItemCount(),0)){r.ln=134;m.NOWSHOWING.set(l.s.Substitute("Showing &1 of &2",l.n.AsString(P0.get()),l.n.AsString(m.MATCHINGITEMS.getItemCount())));r.ln=136;m.ACTIVEITEM.set(P0.get());r.ln=138;if(l.or(l.n.lt(m.MATCHINGITEMS.get(P0.get()).getScrollTop(),0),l.n.gt(m.MATCHINGITEMS.get(P0.get()).getScrollTop(),m.LIST.getVerticalScrollPos()))){r.ln=140;m.LIST.mthVERTICALSCROLLTO(m.MATCHINGITEMS.get(P0.get()),"TOP");
}r.ln=144;m.MATCHINGITEMS.get(P0.get()).setFocus(true);}}r.ln=148;r.e();};cO.mthGETCELLVALUE=function(p0){var r=l.mR(this,cO,"GetCellValue",150);var P0=r.cPD("COLUMN");var P1=r.cPF("RESULT",Fd.F2.Dc);P0=p0;r.ln=150;{r.ln=155;if(l.Io(P0,"PRIM_LIST.String")){r.ln=157;P1.set(l.cast(P0,"PRIM_LIST.String").getCurrentItem().getValue());}r.ln=161;if(l.Io(P0,"PRIM_LIST.Number")){r.ln=163;P1.set(l.n.AsString(l.cast(P0,"PRIM_LIST.Number").getCurrentItem().getValue()));}}r.ln=167;return r.rV(P1.get());};function e5(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Next.Click",169);r.ln=169;{r.ln=171;if(l.tB(l.n.eq(m.ACTIVEITEM.get(),m.MATCHINGITEMS.getItemCount()))){r.ln=173;cO.mthPOSITIONTO.call(this,1);}else{r.ln=177;cO.mthPOSITIONTO.call(this,l.add(m.ACTIVEITEM.get(),1));}}r.ln=181;r.e();};function e6(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Previous.Click",183);r.ln=183;{r.ln=185;if(l.tB(l.n.eq(m.ACTIVEITEM.get(),1))){r.ln=187;cO.mthPOSITIONTO.call(this,m.MATCHINGITEMS.getItemCount());}else{r.ln=191;cO.mthPOSITIONTO.call(this,l.sub(m.ACTIVEITEM.get(),1));
}}r.ln=195;r.e();};function e7(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Ctrl_F.Pressed",197);r.ln=197;{r.ln=199;m.FILTER.set("");r.ln=200;m.FILTER.mthSETFOCUS();}r.ln=202;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSURNAME"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(555);this.setComponentVersion(1);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XSURNAME",cn:"VisualEdit"});
}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOUNIC"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F3.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");
C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F3.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F13.Dc=function(){this.aN.call(this,Fd.F13);};l.cFC({co:Fd.F13.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F13.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");
var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F13.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rc:["XDEMOEDI","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_EVEF","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Image","PRIM_SPBN","PRIM_LABL","PRIM_ACOL","PRIM_NMBR","PRIM_STPG","PRIM_WEB.DataRequest","PRIM_FLD","PRIM_PKLT"]
});