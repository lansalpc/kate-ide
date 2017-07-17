﻿LANSA.addComponent({id:"XD1HOME04",nm:"XD1HomeMobileItem",ot:"rp",tp:"Reusable Part",de:"Home Mobile Item",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.02"),c2=l.cDec("0.97"),c3=l.cDec("1.01");var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XGIVENAME",ft:"A",ln:20,dc:0,lb:"Given Names",
h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",ft:"A",ln:20,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"A",ln:30,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XSTATE",ft:"A",ln:20,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDEPT",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]},F7:{nm:"XEMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],
h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{OnAdd:{ps:{"TreeItem":{pt:"i"}}},OnItemRealizing:{ps:{"TreeItem":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XD1HOME04",Fd);
var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("STYLE2","PRIM_VS","Style");var C2=this.cR("STYLE3","PRIM_VS","Style");var C3=this.cR("LAYOUT1","PRIM_TBLO");var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("COLUMN2","PRIM_TBLO","Column");var C6=this.cR("COLUMN4","PRIM_TBLO","Column");var C7=this.cR("COLUMN5","PRIM_TBLO","Column");var C8=this.cR("COLUMN6","PRIM_TBLO","Column");var C9=this.cR("COLUMN7","PRIM_TBLO","Column");var C10=this.cR("ROW1","PRIM_TBLO","Row");var C11=this.cR("ROW2","PRIM_TBLO","Row");
var C12=this.cR("ROW3","PRIM_TBLO","Row");var C13=this.cR("ROW4","PRIM_TBLO","Row");var C14=this.cR("ROW5","PRIM_TBLO","Row");var C15=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C16=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C17=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C18=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C19=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C20=this.cR("LAYOUTITEM7","PRIM_TBLO","Item");var C21=this.cR("TITLELABEL","PRIM_LABL");var C22=this.cR("ADDRESSLABEL","PRIM_LABL");
var C23=this.cR("STATELABEL","PRIM_LABL");var C24=this.cR("EMPLOYEEIDLABEL","PRIM_LABL");var C25=this.cR("DEPARTMENTLABEL","PRIM_LABL");var C26=this.cR("EMPLOYEEIMAGE","PRIM_IMAG");C0.setBorderBottom(1);C0.iC();C1.setBold(true);C1.iC();C2.setCornerBottomLeft(40);C2.setCornerBottomRight(40);C2.setCornerTopLeft(40);C2.setCornerTopRight(40);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.setUnits("PIXELS");C4.setWidth(10);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.setUnits("PIXELS");
C5.setWidth(65);C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.iC();C7.setDisplayPosition(4);C7.setParent(C3);C7.iC();C8.setDisplayPosition(5);C8.setParent(C3);C8.iC();C9.setDisplayPosition(6);C9.setParent(C3);C9.setUnits("PIXELS");C9.setWidth(10);C9.iC();C10.setDisplayPosition(1);C10.setParent(C3);C10.setUnits("PIXELS");C10.setHeight(10);C10.iC();C11.setDisplayPosition(2);C11.setParent(C3);C11.setHeight(c1);C11.iC();C12.setDisplayPosition(3);C12.setParent(C3);C12.setHeight(c2);C12.iC();C13.setDisplayPosition(4);
C13.setParent(C3);C13.setHeight(c3);C13.iC();C14.setDisplayPosition(5);C14.setParent(C3);C14.setUnits("PIXELS");C14.setHeight(10);C14.iC();C15.setAlignment("CENTERLEFT");C15.setColumn(C6);C15.setFlow("DOWN");C15.setManage(C21);C15.setParent(C3);C15.setRow(C11);C15.setColumnSpan(2);C15.iC();C16.setAlignment("CENTERLEFT");C16.setColumn(C6);C16.setFlow("DOWN");C16.setManage(C22);C16.setParent(C3);C16.setRow(C12);C16.setColumnSpan(2);C16.iC();C17.setAlignment("TOPLEFT");C17.setColumn(C6);C17.setFlow("DOWN");
C17.setManage(C23);C17.setParent(C3);C17.setRow(C13);C17.setColumnSpan(2);C17.iC();C18.setAlignment("CENTERRIGHT");C18.setColumn(C8);C18.setFlow("DOWN");C18.setManage(C24);C18.setParent(C3);C18.setRow(C11);C18.setMarginLeft(10);C18.iC();C19.setAlignment("CENTERRIGHT");C19.setColumn(C8);C19.setFlow("DOWN");C19.setManage(C25);C19.setParent(C3);C19.setRow(C12);C19.setMarginLeft(10);C19.setRowSpan(2);C19.iC();C20.setAlignment("TOPCENTER");C20.setColumn(C5);C20.setManage(C26);C20.setParent(C3);C20.setRow(C11);
C20.setMarginBottom(20);C20.setMarginRight(15);C20.setFlow("DOWN");C20.setRowSpan(3);C20.iC();C21.setDisplayPosition(2);C21.setEllipses("WORD");C21.setHeight(24);C21.setLeft(75);C21.setParent(this);C21.setTabPosition(1);C21.setTabStop(false);C21.setVerticalAlignment("CENTER");C21.setWidth(493);C21.setWordWrap(false);C21.setStyle(C1);C21.setCaption("Employee Name");C21.iC();C22.setDisplayPosition(3);C22.setEllipses("WORD");C22.setHeight(22);C22.setLeft(75);C22.setParent(this);C22.setTabPosition(2);
C22.setTabStop(false);C22.setTop(34);C22.setVerticalAlignment("CENTER");C22.setWidth(493);C22.setWordWrap(false);C22.setCaption("Address");C22.iC();C23.setDisplayPosition(4);C23.setEllipses("WORD");C23.setHeight(23);C23.setLeft(75);C23.setParent(this);C23.setTabPosition(3);C23.setTabStop(false);C23.setTop(56);C23.setVerticalAlignment("CENTER");C23.setWidth(493);C23.setWordWrap(false);C23.setCaption("State");C23.iC();C24.setDisplayPosition(5);C24.setEllipses("WORD");C24.setHeight(24);C24.setLeft(578);
C24.setParent(this);C24.setTabPosition(4);C24.setTabStop(false);C24.setVerticalAlignment("CENTER");C24.setWidth(236);C24.setAlignment("RIGHT");C24.setWordWrap(false);C24.setCaption("Employee ID");C24.iC();C25.setDisplayPosition(6);C25.setEllipses("WORD");C25.setHeight(45);C25.setLeft(578);C25.setParent(this);C25.setTabPosition(5);C25.setTabStop(false);C25.setTop(34);C25.setWidth(236);C25.setAlignment("RIGHT");C25.setCaption("Department ");C25.iC();C26.setDisplayPosition(1);C26.setParent(this);C26.setTabPosition(6);
C26.setTabStop(false);C26.setImageSizing("CROPPED");C26.setHeight(49);C26.setStyle(C2);C26.iC();this.setHeight(90);this.setWidth(824);this.setLayoutManager(C3);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setStyle(C0);this.aLF({"XEMPLOYID":f.F1,"XGIVENAME":f.F2,"XSURNAME":f.F3,"XSTREET":f.F4,"XSTATE":f.F5,"XEMPDEPT":f.F6,"XEMPTHM":f.F7});}});cO.mthONADD=function(p0){var f=this.FLD.XD1HOME04,m=this.REF,r=l.mR(this,cO,"OnAdd",40);var P0=r.cPD("TREEITEM");P0=p0;
r.ln=40;{r.ln=43;m.TITLELABEL.setCaption(l.cat(l.cat(f.F2.get()," "),f.F3.get()));r.ln=44;m.ADDRESSLABEL.setCaption(f.F4.get());r.ln=45;m.STATELABEL.setCaption(f.F5.get());r.ln=48;m.EMPLOYEEIDLABEL.set(f.F1.get());r.ln=49;m.DEPARTMENTLABEL.set(f.F6.get());}r.ln=51;r.e();};cO.mthONITEMREALIZING=function(p0){var f=this.FLD.XD1HOME04,m=this.REF,r=l.mR(this,cO,"OnItemRealizing",53);var P0=r.cPD("TREEITEM");P0=p0;r.ln=53;{r.ln=55;m.EMPLOYEEIMAGE.setImage(l.APPL().mthCREATEBITMAP(f.F7.get()));}r.ln=57;
r.e();};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG"]});