﻿LANSA.addComponent({id:"XD2HOME03",nm:"XD2HomeMobile",ot:"rp",tp:"Reusable Part",de:"Home Mobile",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{Load:{},ShowEmployee:{ps:{"EmployeeId":{pt:"i"}}}},co:function(){cO.aN.call(this);
this.aF("XD2HOME03",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");var C2=this.cR("LAYOUTITEM2","PRIM_ATLI");var C3=this.cR("EMPLOYEELIST","XD2HOME12");var C4=this.cR("EMPLOYEEDETAILS","XD2HOME15");C0.iC();C1.setAttachment("CENTER");C1.setParent(C0);C1.setManage(C3);C1.iC();C2.setAttachment("CENTER");C2.setManage(C4);C2.setParent(C0);C2.iC();C3.setParent(this);C3.setHeight(713);C3.setWidth(825);C3.iC();C4.setHeight(713);C4.setParent(this);C4.setTabStop(false);
C4.setWidth(825);C4.setVisible(false);C4.setDisplayPosition(2);C4.setTabPosition(2);C4.iC();C3.aH("EMPLOYEESELECTED",this,e2);C4.aH("CLOSECLICKED",this,e1);this.setLayoutManager(C0);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setHeight(713);this.setWidth(825);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#EmployeeDetails.CloseClicked",12);r.ln=12;{r.ln=14;cO.mthTRANSITION.call(this,m.EMPLOYEEDETAILS,m.EMPLOYEELIST,"FOLDRIGHTFROMLEFT");}r.ln=16;
r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#EmployeeList.EmployeeSelected",18);var P0=Ps.r("EMPLOYEEID");r.ln=18;{r.ln=20;cO.mthSHOWEMPLOYEE.call(this,P0.get());}r.ln=22;r.e();};cO.mthLOAD=function(){var m=this.REF,r=l.mR(this,cO,"Load",24);r.ln=24;{r.ln=26;m.EMPLOYEELIST.mthLOADEMPLOYEES();}r.ln=28;r.e();};cO.mthSHOWEMPLOYEE=function(p0){var m=this.REF,r=l.mR(this,cO,"ShowEmployee",30);var P0=r.cPF("EMPLOYEEID",Fd.F1.Dc);P0.set(p0);r.ln=30;{r.ln=33;m.EMPLOYEEDETAILS.mthLOADEMPLOYEE(P0.get());
r.ln=35;cO.mthTRANSITION.call(this,m.EMPLOYEELIST,m.EMPLOYEEDETAILS,"FOLDLEFTFROMRIGHT");}r.ln=37;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}},{rc:["XD2HOME12","XD2HOME15"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_FLD"],dp:["PRIM_ANIM"]});