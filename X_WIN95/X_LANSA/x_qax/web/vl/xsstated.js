﻿LANSA.addComponent({id:"XSSTATED",nm:"XSStateDropDown",ot:"rp",tp:"Reusable Part",de:"State Dropdown",tl:14010001},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSSTATEID",ft:"C",ln:100,dc:0,lb:{"ENG":"State","FRA":"State","JPN":"?","LLL":"State"}[cL],h1:{"ENG":"State","FRA":"State","JPN":"?","LLL":"State"}[cL],h2:"",h3:"",de:{"ENG":"State","FRA":"State ID","JPN":"?","LLL":"State"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"LISTCOUNT",ft:"P",
ln:7,dc:0,ec:"J",lb:{"ENG":"Entries .......","FRA":"Entrées . . . .","JPN":"Entries .......","LLL":"Entries ......."}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"Number","LLL":"Number"}[cL],h2:{"ENG":"of Entrys","FRA":"d´Entrées","JPN":"of Entrys","LLL":"of Entrys"}[cL],h3:" ",de:{"ENG":"Number of entries in a browse list","FRA":"Liste, nombre d´entrées ds liste BROWSE","JPN":"Number of entries in a browse list","LLL":"Number of entries in a browse list"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"PRIM_PANL",fd:Fd,pt:{pCurrentValue:{da:"na"}},mt:{HighlightSelection:{}},ev:{StateUpdated:{ps:{"StateID":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XSSTATED",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("STATESITEM1","PRIM_TBLO","Item");var C4=this.cR("STATES","PRIM_LIST","DropDown");var C5=this.cR("DROPDOWNCOLUMN1","PRIM_LIST","String");var C6=this.cF("SELECTEDSTATE",Fd.F1.Dc);
var C7=this.cDR("LOADSTATES","XSSERVER","LOADSTATES");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setAlignment("TOPLEFT");C3.setColumn(C1);C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);C3.iC();C4.setColumnHeaderHeight(0);C4.setColumnLines(false);C4.setDisplayPosition(1);C4.setLeft(0);C4.setParent(this);C4.setRowLines(false);C4.setShowSelection(false);C4.setTabPosition(1);C4.setTop(0);C4.setDropDownStyle("DROPDOWN");C4.setWidth(489);
C4.setRowHeight(25);C4.setHeight(21);C4.iC();C5.setColumnResize(false);C5.setColumnUnits("PROPORTION");C5.setColumnWidth(1);C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F1);C5.iC();C6.aD();C6.iC();C7.iC();C4.aH("CHANGED",this,e3);C7.aH("COMPLETED",this,e2);this.setDisplayPosition(1);this.setHeight(21);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(489);this.setLayoutManager(C0);this.aH("INITIALIZE",this,e1);var li=this.aL("XSSTATED");li.STATELIST=l.cLT({"XSSTATEID":f.F1},f.F2);
}});cO.mthGETCURRENT=function(){var m=this.REF,r=l.pR(this,cO,"GetCurrent",23);var P0=r.cPF("VALUE",Fd.F1.Dc);r.ln=23;{r.ln=26;m.SELECTEDSTATE.set(m.STATES.getValue());P0.set(m.STATES.getValue());}r.ln=28;return r.rV(P0.get());};cO.mthSETCURRENT=function(p0){var m=this.REF,r=l.pR(this,cO,"SetCurrent",30);var P0=r.cPF("VALUE",Fd.F1.Dc);P0.set(p0);r.ln=30;{r.ln=33;m.SELECTEDSTATE.set(P0.get());m.STATES.setValue(P0.get());r.ln=35;this.mthHIGHLIGHTSELECTION();}r.ln=37;r.e();};function e1(sender,Ps){var li=this.LIST.XSSTATED,m=this.REF,r=l.eR(this,cO,"#Com_owner.Initialize",39);
r.ln=39;{r.ln=41;m.LOADSTATES.mthEXECUTEASYNC({},{LIST:{"STATELIST":li.STATELIST}});}r.ln=43;r.e();};function e2(sender,Ps){var li=this.LIST.XSSTATED,f=this.FLD.XSSTATED,m=this.REF,r=l.eR(this,cO,"#LoadStates.completed",45);r.ln=45;{r.ln=48;f.F1.set("");r.ln=49;m.STATES.addEntry();r.ln=51;for(var i1=1;i1<=li.STATELIST.entryCount();i1++){li.STATELIST.getEntry(i1);r.ln=53;m.STATES.addEntry();}r.ln=57;this.mthHIGHLIGHTSELECTION();}r.ln=59;r.e();};cO.mthHIGHLIGHTSELECTION=function(){var f=this.FLD.XSSTATED,m=this.REF,r=l.mR(this,cO,"HighlightSelection",61);
r.ln=61;{r.ln=63;for(var i1=1;i1<=m.STATES.entryCount();i1++){m.STATES.getEntry(i1);r.ln=65;if(l.s.ne(l.s.UpperCase(m.SELECTEDSTATE.get()),l.s.UpperCase(f.F1.get()))){continue;}r.ln=67;m.STATES.getCurrentItem().setSelected(true);r.ln=69;break;}r.ln=74;f.F1.set(m.SELECTEDSTATE.get());}r.ln=76;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#States.Changed",78);r.ln=78;{r.ln=81;if(l.n.eq(l.s.CurChars(m.STATES.getValue()),1)){r.ln=83;m.STATES.setValue(l.s.UpperCase(m.STATES.getValue()));
}r.ln=87;this.setPCURRENTVALUE(m.STATES.getValue());r.ln=89;{var eP=l.ePs();eP.cF("STATEID",Fd.F1.Dc);eP.r("STATEID").set(this.getPCURRENTVALUE());this.fE("STATEUPDATED",eP);eP.e();}}r.ln=91;r.e();};cO.getPCURRENTVALUE=function(){return this.mthGETCURRENT();};cO.setPCURRENTVALUE=function(v){this.mthSETCURRENT(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSSTATEID"});}},{rp:["PRIM_PANL","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST.DropDown","PRIM_LIST.String","PRIM_FLD","PRIM_WEB.DataRequest"]
});