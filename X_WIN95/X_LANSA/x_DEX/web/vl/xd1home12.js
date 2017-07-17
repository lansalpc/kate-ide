﻿LANSA.addComponent({id:"XD1HOME12",nm:"XD1HomeMobileList",ot:"rp",tp:"Reusable Part",de:"Home Mobile List",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F2:{nm:"XGIVENAME",ft:"A",ln:20,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",
dv:"",ia:["FE","LC"]},F3:{nm:"XSURNAME",ft:"A",ln:20,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F4:{nm:"XSTREET",ft:"A",ln:30,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F5:{nm:"XSTATE",ft:"A",ln:20,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"State",dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDEPT",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]},F7:{nm:"XEMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],
h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{LoadEmployees:{}},ev:{EmployeeSelected:{ps:{"EmployeeId":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XD1HOME12",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("LAYOUTITEM1","PRIM_ATLI");
var C2=this.cR("EMPLOYEELIST","PRIM_TREE");C0.iC();C1.setAttachment("CENTER");C1.setManage(C2);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setHeight(713);C2.setLeft(0);C2.setParent(this);C2.setTabPosition(1);C2.setTop(0);C2.setWidth(825);C2.iC();C2.aH("ITEMCLICK",this,e1);C2.aDS("XD1HOME04");C2.aLF({"XEMPLOYID":f.F1,"XGIVENAME":f.F2,"XSURNAME":f.F3,"XSTREET":f.F4,"XSTATE":f.F5,"XEMPDEPT":f.F6,"XEMPTHM":f.F7});this.setLayoutManager(C0);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);
this.setTop(0);this.setHeight(400);this.setWidth(800);this.setTabStop(false);}});function e1(sender,Ps){var f=this.FLD.XD1HOME12,r=l.eR(this,cO,"#EmployeeList.ItemClick",14);r.ln=14;{r.ln=16;{var eP=l.ePs();eP.cF("EMPLOYEEID",Fd.F1.Dc);eP.r("EMPLOYEEID").set(f.F1.get());this.fE("EMPLOYEESELECTED",eP);eP.e();}}r.ln=18;r.e();};cO.mthLOADEMPLOYEES=function(){var m=this.REF,r=l.mR(this,cO,"LoadEmployees",20);var C0=r.cDR("LOADEMPLOYEEDATA","XD1SERV","LOADEMPLOYEEDATA");C0.iC();C0.aH("COMPLETED",this,e2);
r.ln=20;{r.ln=24;if(l.n.eq(m.EMPLOYEELIST.getItems().getItemCount(),0)){r.ln=26;C0.mthEXECUTEASYNC({},{LIST:{"XEMPLOYEELIST":m.EMPLOYEELIST}});r.ln=28;this.setImage(l.WEB().getLoadingImage());}}r.ln=38;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#LoadEmployeeData.Completed",32);r.ln=32;{r.ln=34;this.setImage(null);}r.ln=36;r.e();}};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPLOYID"});}},{rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_TREE","PRIM_WEB.DataRequest","PRIM_FLD"],
dc:["XD1HOME04"]});