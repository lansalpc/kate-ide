﻿LANSA.addComponent({id:"XD3HOME02",nm:"XD3HomeResponsive",ot:"rp",tp:"Reusable Part",de:"Home Responsive",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Load:{},ShowEmployee:{ps:{"EmployeeId":{pt:"i"}}}},co:function()
{cO.aN.call(this);this.aF("XD3HOME02",Fd);var C0=this.cR("LAYOUTDESKTOP","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("COLUMNDIVIDER1","PRIM_TBLO","ColumnDivider");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C7=this.cR("LAYOUTMOBILE","PRIM_ATLM");var C8=this.cR("ATTACHITEM1","PRIM_ATLI");var C9=this.cR("ATTACHITEM2","PRIM_ATLI");
var C10=this.cR("EMPLOYEELIST","XD3HOME11");var C11=this.cR("EMPLOYEEDETAILS","XD3HOME14");var C12=this.cA("APPLICATION","XD3APP");C0.setDividerStyle("GAP");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.setWidth(4);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setColumn(C1);C5.setManage(C10);C5.setParent(C0);C5.setRow(C4);C5.setMarginTop(5);C5.setAlignment("TOPCENTER");C5.iC();
C6.setColumn(C3);C6.setManage(C11);C6.setParent(C0);C6.setRow(C4);C6.iC();C7.iC();C8.setAttachment("CENTER");C8.setManage(C10);C8.setParent(C7);C8.iC();C9.setAttachment("CENTER");C9.setManage(C11);C9.setParent(C7);C9.iC();C10.setHeight(708);C10.setParent(this);C10.setTop(5);C10.setWidth(411);C10.iC();C11.setHeight(713);C11.setParent(this);C11.setTabStop(false);C11.setWidth(410);C11.setDisplayPosition(2);C11.setTabPosition(2);C11.setLeft(415);C11.iC();if((C12!=null)&&(C12.iI()==false)){C12.iC();}C10.aH("EMPLOYEESELECTED",this,e5);
C11.aH("CLOSECLICKED",this,e4);C12.aH("DESKTOPVIEW",this,e1);C12.aH("TABLETVIEW",this,e2);C12.aH("MOBILEVIEW",this,e3);this.setLayoutManager(C0);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setHeight(713);this.setWidth(825);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",23);r.ln=23;{r.ln=25;m.EMPLOYEEDETAILS.setVisible(true);r.ln=26;m.EMPLOYEELIST.setVisible(true);r.ln=28;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=30;m.EMPLOYEEDETAILS.mthHIDECLOSEBUTTON();
}r.ln=32;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",34);r.ln=34;{r.ln=36;m.EMPLOYEEDETAILS.setVisible(true);r.ln=37;m.EMPLOYEELIST.setVisible(true);r.ln=39;this.setLayoutManager(m.LAYOUTDESKTOP);r.ln=41;m.EMPLOYEEDETAILS.mthHIDECLOSEBUTTON();}r.ln=43;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",45);r.ln=45;{r.ln=47;m.EMPLOYEEDETAILS.setVisible(false);r.ln=49;this.setLayoutManager(m.LAYOUTMOBILE);r.ln=51;m.EMPLOYEEDETAILS.mthSHOWCLOSEBUTTON();
}r.ln=53;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeDetails.CloseClicked",55);r.ln=55;{r.ln=57;if(l.s.eq(m.APPLICATION.ref.getACTIVEVIEW(),"MOBILE")){r.ln=59;cO.mthTRANSITION.call(this,m.EMPLOYEEDETAILS,m.EMPLOYEELIST,"FOLDRIGHTFROMLEFT");}}r.ln=63;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#EmployeeList.EmployeeSelected",65);var P0=Ps.r("EMPLOYEEID");r.ln=65;{r.ln=67;cO.mthSHOWEMPLOYEE.call(this,P0.get());}r.ln=69;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",71);
r.ln=71;{r.ln=73;m.EMPLOYEELIST.mthLOADEMPLOYEES();}r.ln=75;r.e();};cO.mthSHOWEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowEmployee",77);var P0=r.cPF("EMPLOYEEID",Fd.F1.Dc);P0.set(p0);r.ln=77;{r.ln=80;m.EMPLOYEEDETAILS.mthLOADEMPLOYEE(P0.get());r.ln=82;if(l.s.eq(m.APPLICATION.ref.getACTIVEVIEW(),"MOBILE")){r.ln=84;cO.mthTRANSITION.call(this,m.EMPLOYEELIST,m.EMPLOYEEDETAILS,"FOLDLEFTFROMRIGHT");}}r.ln=88;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});
}},{rc:["XD3HOME11","XD3HOME14","XD3APP"],rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.ColumnDivider","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_ATLM","PRIM_ATLI","PRIM_FLD"],dp:["PRIM_ANIM"]});