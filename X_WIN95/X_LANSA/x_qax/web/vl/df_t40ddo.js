﻿LANSA.addComponent({id:"DF_T40DDO",ot:"rp",tp:"Reusable Part",de:"\OC=Reusable Drop Down",tl:14011102},function(l,oI,u){var lIO="";var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"DF_ELKEY1",ft:"A",ln:32,dc:0,lb:"DFDOCS Key",h1:"DFDOCS",h2:"Key",h3:"",de:"DFDOCS Key",dv:"",ia:["FE"]},F3:{nm:"DF_ELKEY2",ft:"A",ln:32,dc:0,lb:"DFDOCS Key",h1:"DFDOCS",h2:"Key",h3:"",de:"DFDOCS Key",dv:"",ia:["FE"]},F4:{nm:"VF_ELCA_1",ft:"N",ln:40,dc:0,lb:"Caption",h1:"Caption",h2:"",h3:"",de:"Caption",dv:"",ia:["FE","LC","ASQN"],oa:["ASQN"]},F5:{nm:"IO$STS",ft:"A",ln:2,dc:0,lb:{"ENG":"I/O status ....","FRA":"Statut I/O  . .","JPN":"I/O status ...."}[cL],h1:{"ENG":"I/O","FRA":"Statut","JPN":"I/O"}[cL],
h2:{"ENG":"Status","FRA":"I/O","JPN":"Status"}[cL],h3:" ",de:{"ENG":"Data base I/O operation status code","FRA":"Code statut opération I/O","JPN":"Data base I/O operation status code"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{DropDown:{da:"r"},CurrentItem:{da:"na"},CurrentValue:{da:"r"},CurrentValue2:{da:"r"},CurrentCaption:{da:"r"},IsEnabled:{da:"na"},FocusItem:{da:"na"},EmbeddedinList:{da:"na"}},mt:{SetLabel:{ps:{"Value":{pt:"i"},"Width":{pt:"i"}}},Add:{ps:{"Value":{pt:"i"
},"Value2":{pt:"i"},"Caption":{pt:"i"},"Reference":{pt:"i"}}},Clear:{},Find:{ps:{"Value":{pt:"i"},"Value2":{pt:"i"},"Focus":{pt:"i"}}},FindReference:{ps:{"Reference":{pt:"i"},"Focus":{pt:"i"}}},FindFirst:{ps:{"Focus":{pt:"i"}}}},ev:{ItemGotFocus:{ps:{"Value":{pt:"i"},"Value2":{pt:"i"},"Caption":{pt:"i"},"Item":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("DF_T40DDO",Fd);var C0=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C1=this.cR("ATTACHITEM1","PRIM_ATLI");var C2=this.cR("ATTACHITEM2","PRIM_ATLI");
var C3=this.cR("DROPDOWNLABEL","PRIM_LABL");var C4=this.cR("DROPDOWN","PRIM_LIST","DropDown");var C5=this.cR("COLUMNVALUE1","PRIM_LIST","String");var C6=this.cR("COLUMNVALUE2","PRIM_LIST","String");var C7=this.cR("COLUMNXDEMOCAPT","PRIM_LIST","String");var C8=this.cR("NOBORDERS","PRIM_VS","Style");C0.iC();C1.setManage(C4);C1.setParent(C0);C1.setAttachment("CENTER");C1.iC();C2.setManage(C3);C2.setParent(C0);C2.setAttachment("LEFT");C2.iC();C3.setTabStop(false);C3.setParent(this);C3.setDisplayPosition(2);
C3.setTabPosition(2);C3.setHeight(22);C3.setLeft(0);C3.setTop(0);C3.setVisible(false);C3.iC();C4.setDisplayPosition(1);C4.setHeight(22);C4.setLeft(50);C4.setParent(this);C4.setShowSelection(false);C4.setTabPosition(1);C4.setTop(0);C4.setWidth(127);C4.setColumnLines(false);C4.setRowLines(false);C4.setColumnHeaderHeight(0);C4.iC();C5.setDisplayPosition(2);C5.setParent(C4);C5.setSource(f.F2);C5.setColumnVisible(false);C5.setColumnUnits("PROPORTION");C5.setColumnWidth(1);C5.iC();C6.setDisplayPosition(3);
C6.setParent(C4);C6.setSource(f.F3);C6.setColumnVisible(false);C6.setColumnUnits("PROPORTION");C6.setColumnWidth(1);C6.iC();C7.setDisplayPosition(1);C7.setParent(C4);C7.setSource(f.F4);C7.setColumnUnits("PROPORTION");C7.iC();C8.setBorderBottom(0);C8.setBorderLeft(0);C8.setBorderRight(0);C8.setBorderTop(0);C8.setNormBackColor("TRANSPARENT");C8.iC();C4.aH("ITEMGOTFOCUS",this,e1);this.setDisplayPosition(1);this.setHeight(22);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(177);this.setTabStop(false);
this.setLayoutManager(C0);}});cO.mthSET_ISENABLED=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_isEnabled",58);var P0=r.cP("VALUE","PRIM_BOLN");P0.set(p0);r.ln=58;{r.ln=61;m.DROPDOWN.setEnabled(P0.get());}r.ln=63;r.e();};cO.mthGETCURRENTITEM=function(){var m=this.REF,r=l.pR(this,cO,"GetCurrentItem",66);var P0=r.cPD("PROPERTY");r.ln=66;{r.ln=69;P0=r.sR("P0",m.DROPDOWN.getCurrentItem());}r.ln=71;return r.rR(P0);};cO.mthGETFOCUSITEM=function(){var m=this.REF,r=l.pR(this,cO,"GetFocusItem",74);var P0=r.cPD("PROPERTY");
r.ln=74;{r.ln=77;P0=r.sR("P0",m.DROPDOWN.getFocusItem());}r.ln=79;return r.rR(P0);};cO.mthSETEMBEDDEDINLIST=function(p0){var m=this.REF,r=l.pR(this,cO,"SetEmbeddedinList",82);var P0=r.cP("PROPERTY","PRIM_BOLN");P0.set(p0);r.ln=82;{r.ln=85;if(l.tB(P0.get())){r.ln=86;m.DROPDOWN.setStyle(m.NOBORDERS);}else{r.ln=88;m.DROPDOWN.setStyle(null);}}r.ln=91;r.e();};cO.mthSETLABEL=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"SetLabel",94);var P0=r.cP("VALUE","PRIM_DC","UnicodeString");var P1=r.cPF("WIDTH",Fd.F1.Dc);
P0.set(p0);P1.set(p1);r.ln=94;{r.ln=98;if(l.n.eq(P1.get(),0)){r.ln=99;m.DROPDOWNLABEL.setVisible(false);}else{r.ln=101;m.DROPDOWNLABEL.setVisible(true);m.DROPDOWNLABEL.setWidth(P1.get());m.DROPDOWNLABEL.setCaption(P0.get());}}r.ln=104;r.e();};cO.mthADD=function(p0,p1,p2,p3){var f=this.FLD.DF_T40DDO,m=this.REF,r=l.mR(this,cO,"Add",108);var P0=r.cPF("VALUE",Fd.F2.Dc);var P1=r.cPF("VALUE2",Fd.F3.Dc);var P2=r.cP("CAPTION","PRIM_DC","UnicodeString");var P3=r.cPD("REFERENCE");var P4=r.cPD("RESULT");P0.set(p0);
P1.set((p1===u)?(" "):(p1));P2.set(p2);P3=(p3===u)?(null):(p3);r.ln=108;{r.ln=116;f.F2.set(P0.get());r.ln=117;f.F3.set(P1.get());r.ln=118;f.F4.set(P2.get());r.ln=120;m.DROPDOWN.addEntry();r.ln=123;m.DROPDOWN.getCurrentItem().setRelatedReference(P3);r.ln=125;P4=r.sR("P4",m.DROPDOWN.getCurrentItem());}r.ln=127;return r.rR(P4);};cO.mthCLEAR=function(){var m=this.REF,r=l.mR(this,cO,"Clear",130);r.ln=130;{r.ln=132;m.DROPDOWN.clearList();}r.ln=134;r.e();};cO.mthFIND=function(p0,p1,p2){var f=this.FLD.DF_T40DDO,m=this.REF,r=l.mR(this,cO,"Find",137);
var P0=r.cPF("VALUE",Fd.F2.Dc);var P1=r.cPF("VALUE2",Fd.F3.Dc);var P2=r.cP("FOCUS","PRIM_BOLN");var P3=r.cPD("RESULT");P0.set(p0);P1.set((p1===u)?(" "):(p1));P2.set((p2===u)?(true):(p2));r.ln=137;{r.ln=144;{var l1=m.DROPDOWN.selectList();while(l1.step()){r.ln=145;if(l.or(l.s.ne(f.F2.get(),P0.get()),l.s.ne(f.F3.get(),P1.get()))){continue;}r.ln=147;P3=r.sR("P3",m.DROPDOWN.getCurrentItem());r.ln=149;if(l.tB(P2.get())){r.ln=151;m.DROPDOWN.getCurrentItem().setFocus(true);}r.ln=155;break;r.ln=156;}l1.end();
}}r.ln=158;return r.rR(P3);};cO.mthFINDREFERENCE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"FindReference",161);var P0=r.cPD("REFERENCE");var P1=r.cP("FOCUS","PRIM_BOLN");var P2=r.cPD("RESULT");P0=p0;P1.set((p1===u)?(true):(p1));r.ln=161;{r.ln=167;P2=r.sR("P2",m.DROPDOWN.mthFINDREFERENCE(P0));r.ln=169;if(l.tB((P1.get()&&(P2!=null)))){r.ln=171;P2.setFocus(true);}}r.ln=175;return r.rR(P2);};cO.mthFINDFIRST=function(p0){var m=this.REF,r=l.mR(this,cO,"FindFirst",178);var P0=r.cP("FOCUS","PRIM_BOLN");
var P1=r.cPD("RESULT");P0.set((p0===u)?(true):(p0));r.ln=178;{r.ln=182;{var l1=m.DROPDOWN.selectList();while(l1.step()){r.ln=183;P1=r.sR("P1",m.DROPDOWN.getCurrentItem());r.ln=184;if(l.tB(P0.get())){r.ln=185;m.DROPDOWN.getCurrentItem().setFocus(true);}r.ln=187;break;r.ln=188;}l1.end();}}r.ln=190;return r.rR(P1);};function e1(sender,Ps){var f=this.FLD.DF_T40DDO,m=this.REF,r=l.eR(this,cO,"#DropDown.ItemGotFocus",194);r.ln=194;{r.ln=196;f.F5.set(lIO=m.DROPDOWN.getEntry(m.DROPDOWN.getCurrentItem().getEntry()));
r.ln=198;{var eP=l.ePs();eP.cF("VALUE",Fd.F2.Dc);eP.cF("VALUE2",Fd.F3.Dc);eP.cF("CAPTION",Fd.F4.Dc);eP.cD("ITEM");eP.r("VALUE").set(f.F2.get());eP.r("VALUE2").set(f.F3.get());eP.r("CAPTION").set(f.F4.get());eP.sR("ITEM",m.DROPDOWN.getCurrentItem());this.fE("ITEMGOTFOCUS",eP);eP.e();}}r.ln=200;r.e();};cO.getDROPDOWN=function(){return this.REF.DROPDOWN;};cO.getCURRENTITEM=function(){return this.mthGETCURRENTITEM();};cO.getCURRENTVALUE=function(){return this.FLD.DF_T40DDO.F2.get();};cO.getCURRENTVALUE2=function()
{return this.FLD.DF_T40DDO.F3.get();};cO.getCURRENTCAPTION=function(){return this.FLD.DF_T40DDO.F4.get();};cO.setISENABLED=function(v){this.mthSET_ISENABLED(v);};cO.getFOCUSITEM=function(){return this.mthGETFOCUSITEM();};cO.setEMBEDDEDINLIST=function(v){this.mthSETEMBEDDEDINLIST(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"DF_ELKEY1"});}{Fd.F3.Dc=function()
{this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"DF_ELKEY2"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELCA_1"});}},{rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_VS.Style","PRIM_FLD"]});