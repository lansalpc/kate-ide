﻿LANSA.addComponent({id:"XD3HOME11",nm:"XD3HomeResponsiveList",ot:"rp",tp:"Reusable Part",de:"Home Responsive List",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F3:{nm:"XGIVENAME",ft:"A",ln:20,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F4:{nm:"XSURNAME",ft:"A",ln:20,dc:0,lb:"Surname",
h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F5:{nm:"XSTATE",ft:"A",ln:20,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F6:{nm:"STD_STRNG",ft:"VC",ln:512,dc:0,lb:{"ENG":"Std string fld","FRA":"?","JPN":"?","LLL":"Std string fld"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"String","FRA":"?","JPN":"?","LLL":"String"}[cL],
h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard string field","FRA":"?","JPN":"?","LLL":"Standard string field"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{LoadEmployees:{}},ev:{EmployeeSelected:{ps:{"EmployeeId":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XD3HOME11",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");var C2=this.cR("EMPLOYEELIST","PRIM_LIST");var C3=this.cR("LISTCOLUMN1","PRIM_LIST","Image");
var C4=this.cR("LISTCOLUMN2","PRIM_LIST","String");var C5=this.cR("LISTCOLUMN3","PRIM_LIST","String");var C6=this.cR("LISTCOLUMN4","PRIM_LIST","String");var C7=this.cR("LISTCOLUMN5","PRIM_LIST","String");var C8=this.cR("LISTCOLUMN6","PRIM_LIST","String");var C9=this.cA("APPLICATION","XD3APP");C0.iC();C1.setAttachment("CENTER");C1.setManage(C2);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setHeight(713);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTop(0);C2.setWidth(825);C2.setRowLines(false);
C2.setColumnLines(false);C2.setRowHeight(32);C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setSource(f.F1);C3.setColumnWidth(50);C3.setSortPosition(2);C3.setImageSizing("BESTFIT");C3.setCellMarginBottom(2);C3.setCellMarginLeft(2);C3.setCellMarginRight(2);C3.setCellMarginTop(2);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setSource(f.F2);C4.setColumnCaption("Employee No");C4.setColumnCaptionType("CAPTION");C4.setColumnWidth(99);C4.setSortOnClick(true);C4.setSortPosition(1);C4.iC();C5.setDisplayPosition(3);
C5.setParent(C2);C5.setSource(f.F3);C5.setColumnCaption("Given Names");C5.setColumnCaptionType("CAPTION");C5.setColumnWidth(192);C5.setSortOnClick(true);C5.iC();C6.setDisplayPosition(4);C6.setParent(C2);C6.setSource(f.F4);C6.setColumnCaption("Surname");C6.setColumnCaptionType("CAPTION");C6.setColumnWidth(192);C6.setSortOnClick(true);C6.iC();C7.setDisplayPosition(5);C7.setParent(C2);C7.setSource(f.F5);C7.setColumnCaption("State");C7.setColumnCaptionType("CAPTION");C7.setColumnWidth(227);C7.setSortOnClick(true);
C7.iC();C8.setDisplayPosition(6);C8.setParent(C2);C8.setSource(f.F6);C8.setColumnUnits("PROPORTION");C8.setColumnVisible(false);C8.setSortOnClick(true);C8.iC();if((C9!=null)&&(C9.iI()==false)){C9.iC();}C2.aH("ITEMCLICK",this,e4);C9.aH("DESKTOPVIEW",this,e1);C9.aH("TABLETVIEW",this,e2);C9.aH("MOBILEVIEW",this,e3);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setHeight(400);this.setWidth(800);this.setTabStop(false);this.setLayoutManager(C0);}});function e1(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",23);r.ln=23;{r.ln=25;m.EMPLOYEELIST.setVisible(true);r.ln=27;m.LISTCOLUMN1.setColumnVisible(true);r.ln=28;m.LISTCOLUMN2.setColumnVisible(true);r.ln=29;m.LISTCOLUMN3.setColumnVisible(true);r.ln=30;m.LISTCOLUMN4.setColumnVisible(true);r.ln=31;m.LISTCOLUMN5.setColumnVisible(true);r.ln=33;m.LISTCOLUMN6.setColumnVisible(false);r.ln=35;m.LISTCOLUMN2.setSortPosition(1);r.ln=36;m.EMPLOYEELIST.setColumnHeaderHeight(25);}r.ln=38;r.e();};function e2(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",40);r.ln=40;{r.ln=42;m.EMPLOYEELIST.setVisible(true);r.ln=44;m.LISTCOLUMN1.setColumnVisible(true);r.ln=45;m.LISTCOLUMN2.setColumnVisible(false);r.ln=46;m.LISTCOLUMN3.setColumnVisible(false);r.ln=47;m.LISTCOLUMN4.setColumnVisible(false);r.ln=48;m.LISTCOLUMN5.setColumnVisible(false);r.ln=50;m.LISTCOLUMN6.setColumnVisible(true);r.ln=51;m.LISTCOLUMN2.setSortPosition(1);r.ln=53;m.EMPLOYEELIST.setColumnHeaderHeight(0);}r.ln=55;r.e();};function e3(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",57);r.ln=57;{r.ln=59;m.LISTCOLUMN1.setColumnVisible(true);r.ln=60;m.LISTCOLUMN2.setColumnVisible(false);r.ln=61;m.LISTCOLUMN3.setColumnVisible(false);r.ln=62;m.LISTCOLUMN4.setColumnVisible(false);r.ln=63;m.LISTCOLUMN5.setColumnVisible(false);r.ln=65;m.LISTCOLUMN6.setColumnVisible(true);r.ln=66;m.LISTCOLUMN2.setSortPosition(1);r.ln=68;m.EMPLOYEELIST.setColumnHeaderHeight(0);}r.ln=70;r.e();};function e4(sender,Ps){var f=this.FLD.XD3HOME11,r=l.eR(this,cO,"#EmployeeList.ItemClick",72);
r.ln=72;{r.ln=74;{var eP=l.ePs();eP.cF("EMPLOYEEID",Fd.F2.Dc);eP.r("EMPLOYEEID").set(f.F2.get());this.fE("EMPLOYEESELECTED",eP);eP.e();}}r.ln=76;r.e();};cO.mthLOADEMPLOYEES=function(){var f=this.FLD.XD3HOME11,m=this.REF,r=l.mR(this,cO,"LoadEmployees",78);var C0=r.cDR("LOADEMPLOYEEDATA","XD3SERV","LOADEMPLOYEEDATA");C0.iC();C0.aH("COMPLETED",this,e5);r.ln=78;{r.ln=82;if(l.n.eq(m.EMPLOYEELIST.getItems().getItemCount(),0)){r.ln=84;C0.mthEXECUTEASYNC({},{LIST:{"XEMPLOYEELIST":m.EMPLOYEELIST}});r.ln=86;
this.setImage(l.WEB().getLoadingImage());}}r.ln=104;r.e();function e5(sender,Ps){var r=l.eR(this,cO,"#LoadEmployeeData.Completed",90);r.ln=90;{r.ln=92;for(var i1=1;i1<=m.EMPLOYEELIST.entryCount();i1++){m.EMPLOYEELIST.getEntry(i1);r.ln=94;f.F6.set(l.s.Substitute("&1 &2, &3 (&4)",f.F3.get(),f.F4.get(),f.F5.get(),f.F2.get()));r.ln=96;m.EMPLOYEELIST.updateEntry();}r.ln=100;this.setImage(null);}r.ln=102;r.e();}};{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});
}},{rc:["XD3APP"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LIST","PRIM_LIST.Image","PRIM_LIST.String","PRIM_WEB.DataRequest","PRIM_FLD"]});