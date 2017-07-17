﻿LANSA.addComponent({id:"DF_T2601O",ot:"rp",tp:"Reusable Part",de:"\OC=Filter for Child Objects",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h1:{"ENG":"Standard","FRA":"Nombre","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":" ","JPN":"Number"}[cL],h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard","JPN":"Standard Number"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T2601O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("SEARCH","PRIM_PHBN");var C3=this.cF("LIMIT",Fd.F1.VISUAL);var C4=this.cR("GPBX_1","PRIM_GPBX");var C5=this.cR("LABL_1","PRIM_LABL");var C6=this.cR("GPBX_2","PRIM_GPBX");var C7=this.cR("LABEL_ABOUT","PRIM_LABL");var C8=this.cR("ATLM_1","PRIM_ATLM");var C9=this.cR("ATLI_1","PRIM_ATLI");
var C10=this.cR("ATLM_2","PRIM_ATLM");var C11=this.cR("ATLI_2","PRIM_ATLI");var C12=this.cR("ATLI_3","PRIM_ATLI");var C13=this.cR("PANL_1","PRIM_PANL");var C14=this.cR("ATLI_4","PRIM_ATLI");C0.iC();C1.setManage(C7);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setCaption("Create Now");C2.setDisplayPosition(1);C2.setLeft(236);C2.setParent(C4);C2.setTabPosition(1);C2.setTop(21);C2.setWidth(86);C2.iC();C3.setCaption("Limit to");C3.setDisplayPosition(2);C3.setHeight(19);C3.setLabelType("CAPTION");
C3.setLeft(17);C3.setMarginLeft(50);C3.setParent(C4);C3.setTabPosition(2);C3.setTop(23);C3.setUsePicklist(false);C3.setWidth(97);C3.aD();C3.iC();C4.setCaption("Create Instance List");C4.setDisplayPosition(1);C4.setLeft(4);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);C4.setTop(459);C4.setWidth(353);C4.setHeight(58);C4.iC();C5.setCaption("business objects");C5.setDisplayPosition(3);C5.setHeight(23);C5.setLeft(121);C5.setParent(C4);C5.setTabPosition(3);C5.setTabStop(false);C5.setTop(23);
C5.setWidth(120);C5.iC();C6.setCaption("About this example");C6.setDisplayPosition(2);C6.setHeight(455);C6.setLayoutManager(C8);C6.setLeft(4);C6.setParent(this);C6.setTabPosition(2);C6.setTabStop(false);C6.setTop(4);C6.setWidth(353);C6.iC();C7.setCaption("<text>");C7.setDisplayPosition(1);C7.setHeight(428);C7.setLeft(0);C7.setParent(C13);C7.setTabPosition(1);C7.setTabStop(false);C7.setTop(0);C7.setWidth(337);C7.iC();C8.setMarginBottom(4);C8.setMarginLeft(4);C8.setMarginRight(4);C8.setMarginTop(4);
C8.iC();C9.setAttachment("CENTER");C9.setManage(C7);C9.setParent(C8);C9.iC();C10.setMarginBottom(4);C10.setMarginLeft(4);C10.setMarginRight(4);C10.setMarginTop(4);C10.iC();C11.setAttachment("BOTTOM");C11.setManage(C4);C11.setParent(C10);C11.iC();C12.setAttachment("CENTER");C12.setManage(C6);C12.setParent(C10);C12.iC();C13.setDisplayPosition(1);C13.setHeight(428);C13.setLeft(8);C13.setParent(C6);C13.setTabPosition(1);C13.setTabStop(false);C13.setTop(19);C13.setWidth(337);C13.setLayoutManager(C0);C13.iC();
C14.setAttachment("CENTER");C14.setManage(C13);C14.setParent(C8);C14.iC();C2.aH("CLICK",this,e1);C3.aH("CHANGED",this,e3);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.setHeight(521);this.setLayoutManager(C10);this.setWidth(361);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",41);var C0=r.cR("CR","PRIM_ALPH");C0.iC();r.ln=41;{r.ln=47;cA.mthUINITIALIZE.call(this);r.ln=51;m.LIMIT.set(10);r.ln=53;C0.set(l.n.AsUnicodeString(10));r.ln=55;m.LABEL_ABOUT.setCaption("Until now you have probably only created instance lists containing a single type of business object (eg: instance lists of Products, Customers, Orders, etc). However business object instance lists may be set up to contain different types of related business objects.");
r.ln=57;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),C0.get()));r.ln=58;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"This example uses an instance list that contains four different business objects.")));r.ln=60;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"They are named PRODUCT, ORDER, SHIPMENT and SUPPLIER.")));r.ln=61;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"They are also related:")));r.ln=62;
m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"     -> a PRODUCT may have child SUPPLIER(s) associated with it.")));r.ln=63;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"     -> a PRODUCT may have child ORDER(s) associated with it.")));r.ln=64;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"     -> an ORDER may have child SHIPMENT(s) associated with it.")));r.ln=66;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),C0.get()));
r.ln=67;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"These instance list relationships are set up as business object properties.")));r.ln=68;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"You should also review the online documentation before attempting to use this feature.")));r.ln=70;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),C0.get()));r.ln=71;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"To continue with this example use the Create Instance List options below to create an emulated instance list of PRODUCTs, ORDERs, SHIPMENTs and SUPPLIERs")));
r.ln=73;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),C0.get()));r.ln=74;m.LABEL_ABOUT.setCaption(l.cat(m.LABEL_ABOUT.getCaption(),l.cat(C0.get(),"You may need to use the right mouse button and the Position menu option to (re)arrange the framework form layout to better display the instance list details.")));}r.ln=77;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#SEARCH.Click",83);r.ln=83;{r.ln=85;this.mthAVGOTOBUSYSTATE("Please wait",false,u);r.ln=87;this.REF.AVLOCALTIMER.setInterval(1);
}r.ln=89;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",96);r.ln=96;{r.ln=98;this.REF.AVLOCALTIMER.setInterval(0);r.ln=100;this.REF.AVFRAMEWORKMANAGER.mthAVEMULATEINSTANCELISTSEARCH(m.LIMIT.get(),this.REF.ASSOCIATEDVF_FR003O,"");r.ln=103;this.mthAVGOTOFREESTATE();}r.ln=105;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Limit.Changed",113);r.ln=113;{r.ln=115;if(l.n.lt(m.LIMIT.get(),1)){r.ln=116;m.LIMIT.set(1);}r.ln=119;if(l.n.gt(m.LIMIT.get(),100))
{r.ln=120;m.LIMIT.set(100);}}r.ln=123;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_NUM"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"STD_NUM",cn:"Visual"});}cO.srASSOCIATEDVF_FR003O=function(rn){cA.srASSOCIATEDVF_FR003O.call(this,rn);};cO.srAVFRAMEWORKMANAGER=function(rn){cA.srAVFRAMEWORKMANAGER.call(this,rn);};},{rc:["VF_AC007O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PHBN","PRIM_EVEF","PRIM_GPBX","PRIM_LABL","PRIM_PANL"],
dp:["PRIM_ALPH"]});