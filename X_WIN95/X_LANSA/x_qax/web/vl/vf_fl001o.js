﻿LANSA.addComponent({id:"VF_FL001O",ot:"rp",tp:"Reusable Part",de:"\OC=VLF-ONE Filter Default RAD-PAD",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_NUM",ft:"P",ln:7,dc:0,ec:"A",lb:{"ENG":"Number","FRA":"Nombre","JPN":"Number"}[cL],h1:{"ENG":"Standard","FRA":"Nombre","JPN":"Standard"}[cL],h2:{"ENG":"Number","FRA":" ","JPN":"Number"}[cL],h3:" ",de:{"ENG":"Standard Number","FRA":"Nombre Standard","JPN":"Standard Number"}[cL],dv:0,ia:["FE","RB"]
}};var cO=l.rC(oI,{an:"VF_AC007O",fd:Fd,mt:{SetInitialFocus:{},uBringToFront:{},uInitialize:{},uTerminate:{}},co:function(){cO.aN.call(this);this.aF("VF_FL001O",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");var C3=this.cR("ATTACHLAYOUT2","PRIM_ATLM");var C4=this.cR("ATTACHITEM3","PRIM_ATLI");var C5=this.cR("ATTACHITEM4","PRIM_ATLI");var C6=this.cR("RADPANEL","VF_UI031O");var C7=this.cR("SEARCHPANEL","PRIM_PANL");
var C8=this.cR("SEARCH","PRIM_PHBN");var C9=this.cF("LIMIT",Fd.F1.VISUAL);C0.iC();C1.setManage(C6);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setManage(C7);C2.setParent(C0);C2.setAttachment("BOTTOM");C2.iC();C3.iC();C4.setManage(C9);C4.setParent(C3);C4.setAttachment("LEFT");C4.setMarginLeft(6);C4.setMarginTop(4);C4.setMarginBottom(4);C4.iC();C5.setManage(C8);C5.setParent(C3);C5.setAttachment("LEFT");C5.setMarginLeft(6);C5.setMarginTop(4);C5.setMarginBottom(4);C5.iC();C6.setParent(this);
C6.setHeight(217);C6.setWidth(220);C6.iC();C7.setParent(this);C7.setDisplayPosition(2);C7.setTabPosition(2);C7.setLeft(0);C7.setWidth(220);C7.setHeight(30);C7.setTop(217);C7.setLayoutManager(C3);C7.iC();C8.setCaption("Search for xxxxxxxxxx");C8.setDisplayPosition(2);C8.setTabPosition(2);C8.setTop(4);C8.setWidth(136);C8.setHeight(22);C8.setParent(C7);C8.setLeft(81);C8.iC();C9.setDisplayPosition(1);C9.setHeight(22);C9.setLabelType("CAPTION");C9.setMarginLeft(40);C9.setTabPosition(1);C9.setUsePicklist(false);
C9.setWidth(69);C9.setCaption("Limit");C9.setParent(C7);C9.setLeft(6);C9.setTop(4);C9.aD();C9.iC();C8.aH("CLICK",this,e1);C9.aH("ENTER",this,e1);C9.aH("CHANGED",this,e3);this.REF.AVLOCALTIMER.aH("TICK",this,e2);this.setWidth(220);this.setLayoutManager(C0);this.setHeight(247);}});var cA=cO.aN.prototype;cO.mthSETINITIALFOCUS=function(){var m=this.REF,r=l.mR(this,cO,"SetInitialFocus",30);r.ln=30;{r.ln=32;m.SEARCH.mthSETFOCUS();}r.ln=34;r.e();};cO.mthUBRINGTOFRONT=function(){var r=l.mR(this,cO,"uBringToFront",37);
r.ln=37;{r.ln=39;this.mthSETINITIALFOCUS();}r.ln=41;r.e();};cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",44);var C0=r.cR("SEARCHCAPTION","PRIM_ALPH");C0.iC();r.ln=44;{r.ln=49;cA.mthUINITIALIZE.call(this);r.ln=52;C0.set(this.REF.USYSTEM.ref.getUMTXTVALUES("SEARCHFOR"));r.ln=53;C0.set(l.s.Substitute(C0.get(),this.getASSOCIATEDVF_FR003O().getUCAPTION()));r.ln=54;m.SEARCH.setCaption(C0.get());r.ln=55;this.setAVTITLEBARCAPTION(C0.get());r.ln=57;m.LIMIT.setCaption(this.REF.USYSTEM.ref.getUMTXTVALUES("LIMIT"));
r.ln=58;m.LIMIT.set(10);r.ln=62;this.setAVALLOWLOCATIONCHANGE(true);r.ln=66;if(this.getASSOCIATEDFILTERDEFINITIONREFERENCE().getURADPADFILEEXISTS()){r.ln=68;m.RADPANEL.setVisible(true);r.ln=69;m.RADPANEL.mthUINITIALIZE(this);r.ln=70;this.setAVFILTERLOCATION("LEFT");}else{r.ln=75;m.RADPANEL.setVisible(false);r.ln=76;this.setHeight(m.SEARCHPANEL.getHeight());r.ln=77;this.setAVFILTERLOCATION("TOP");}r.ln=81;this.mthSETINITIALFOCUS();}r.ln=84;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",87);
r.ln=87;{r.ln=89;m.RADPANEL.mthUTERMINATE();r.ln=91;cA.mthUTERMINATE.call(this);}r.ln=93;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#SEARCH.Click #Limit.Enter",96);r.ln=96;{r.ln=98;this.mthAVGOTOBUSYSTATE(this.REF.USYSTEM.ref.getUMTXTVALUES("SEARCHING"),false,u);r.ln=100;this.REF.AVLOCALTIMER.setInterval(5);}r.ln=102;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#AVLOCALTIMER.Tick",105);r.ln=105;{r.ln=107;this.REF.AVLOCALTIMER.setInterval(0);r.ln=109;this.REF.USYSTEM.ref.mthEMULATEINSTANCELISTSEARCH(m.LIMIT.get(),this.REF.ASSOCIATEDVF_FR003O,"",u,u);
r.ln=111;this.mthAVGOTOFREESTATE();}r.ln=113;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Limit.Changed",116);r.ln=116;{r.ln=118;if(l.n.lt(m.LIMIT.get(),1)){r.ln=119;m.LIMIT.set(1);}r.ln=122;if(l.n.gt(m.LIMIT.get(),200)){r.ln=123;m.LIMIT.set(200);}}r.ln=126;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_NUM"});Fd.F1.VISUAL=function(){this.aN.call(this,new Fd.F1.Dc());};l.cFC({co:Fd.F1.VISUAL,an:"PRIM_EVEF",fn:"STD_NUM",cn:"Visual"});
}cO.srASSOCIATEDVF_FR003O=function(rn){cA.srASSOCIATEDVF_FR003O.call(this,rn);};},{rc:["VF_AC007O","VF_UI031O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_PANL","PRIM_PHBN","PRIM_EVEF"],dp:["PRIM_ALPH"]});