﻿LANSA.addComponent({id:"XDEMOW_47",nm:"xDemoWebDataEntryList",ot:"wp",tp:"Web Page",de:"Data Entry List",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("2.21");var Fd={F1:{nm:"XEMPTITLE",an:"xEmployeeTitle",ft:"N",ln:40,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",dv:"",ia:["FE","LC"]},F2:{nm:"XGIVENAME",an:"xEmployeeGivenNames",ft:"N",ln:40,dc:0,lb:"Given Names",h1:"Employee",
h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",an:"xEmployeeSurname",ft:"N",ln:40,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F4:{nm:"XEMPDOB",an:"xEmployeeDateofBirth",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F5:{nm:"XGENDER",an:"xEmployeeGender",ft:"A",
ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_47",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW3","PRIM_TBLO","Row");var C3=this.cR("LIST1ITEM2","PRIM_TBLO","Item");var C4=this.cR("ENTRYLIST","PRIM_LIST");var C5=this.cR("COLUMNXEMPTITLE1","PRIM_LIST","String");
var C6=this.cR("COLUMNXGIVENAME1","PRIM_LIST","String");var C7=this.cR("COLUMNXSURNAME1","PRIM_LIST","String");var C8=this.cR("COLUMNGENDER","PRIM_LIST","Part");var C9=this.cR("COLUMNXEMPDOB1","PRIM_LIST","DateTime");var C10=this.cR("COLUMNCHECKBOX1","PRIM_LIST","CheckBox");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setColumn(C1);C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.iC();C4.setDisplayPosition(1);C4.setLeft(0);
C4.setParent(this);C4.setTabPosition(1);C4.setTop(0);C4.setHeight(704);C4.setWidth(1088);C4.setRowHeight(28);C4.iC();C5.setColumnWidth(102);C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F1);C5.setColumnReadOnly(false);C5.iC();C6.setDisplayPosition(2);C6.setParent(C4);C6.setSource(f.F2);C6.setColumnWidth(168);C6.setColumnReadOnly(false);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.setSource(f.F3);C7.setColumnWidth(162);C7.setColumnReadOnly(false);C7.iC();C8.setColumnWidth(136);C8.setDesign("XDEMO_38");
C8.setDisplayPosition(6);C8.setParent(C4);C8.iC();C9.setColumnWidth(98);C9.setDisplayPosition(4);C9.setParent(C4);C9.setShowTime(false);C9.setSource(f.F4);C9.setColumnReadOnly(false);C9.iC();C10.setColumnWidth(50);C10.setDisplayPosition(5);C10.setParent(C4);C10.iC();C8.aLF({"XGENDER":f.F5});this.setLayoutManager(C0);this.setHeight(704);this.setWidth(1088);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",16);r.ln=16;{r.ln=18;m.ENTRYLIST.initList(10);
}r.ln=20;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F1.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");
C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F1.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});}{Fd.F5.Dc=function(){this.aN.call(this,Fd.F5);};l.cFC({co:Fd.F5.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F5.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");
C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F5.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Part","PRIM_LIST.DateTime","PRIM_LIST.CheckBox","PRIM_PKLT"]
});