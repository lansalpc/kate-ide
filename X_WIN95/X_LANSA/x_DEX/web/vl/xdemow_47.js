﻿LANSA.addComponent({id:"XDEMOW_47",nm:"xDemoWebDataEntryGrid",ot:"wp",tp:"Web Page",de:"Data Entry Grid",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("2.21");var Fd={F1:{nm:"SKILCODE",ft:"A",ln:10,dc:0,ks:"O",lb:{"ENG":"Skill code.....","FRA":"Code formation","JPN":"Skill code.....","LLL":"Skill code....."}[cL],h1:{"ENG":"Skill","FRA":"Code","JPN":"Skill","LLL":"Skill"}[cL],h2:{"ENG":"Code","FRA":"Formation","JPN":"Code","LLL":"Code"}[cL],
h3:" ",de:{"ENG":"Skill Code","FRA":"Code formation","JPN":"Skill Code","LLL":"Skill Code"}[cL],dv:"",ia:["FE"]},F2:{nm:"DATEACQR",ft:"S",ln:6,dc:0,ec:"Y",lb:{"ENG":"Acquire date...","FRA":"Date formation","JPN":"Acquire date...","LLL":"Acquire date..."}[cL],h1:{"ENG":"Acquire","FRA":"Date","JPN":"Acquire","LLL":"Acquire"}[cL],h2:{"ENG":"Date","FRA":"Formation","JPN":"Date","LLL":"Date"}[cL],h3:" ",de:{"ENG":"Date Skill Acquired (YYMMDD)","FRA":"Date de formation, AAMMJJ","JPN":"Date Skill Acquired (YYMMDD)","LLL":"Date Skill Acquired (YYMMDD)"}[cL],
dv:0,ia:["FE","RB"]},F3:{nm:"COMMENT",ft:"A",ln:20,dc:0,ks:"O",lb:{"ENG":"Comment........","FRA":"Commentaire . .","JPN":"Comment........","LLL":"Comment........"}[cL],h1:{"ENG":"Comment","FRA":"Commentaire","JPN":"Comment","LLL":"Comment"}[cL],h2:" ",h3:" ",de:{"ENG":"Comment on skills acquired","FRA":"Commentaire sur les formations suivies","JPN":"Comment on skills acquired","LLL":"Comment on skills acquired"}[cL],dv:"",ia:["FE","LC"]},F4:{nm:"GRADE",ft:"A",ln:1,dc:0,lb:{"ENG":"Grade..........","FRA":"Niveau  . . . .","JPN":"Grade..........","LLL":"Grade.........."}[cL],
h1:{"ENG":"Grade","FRA":"Niveau","JPN":"Grade","LLL":"Grade"}[cL],h2:" ",h3:" ",de:{"ENG":"Grade Obtained for Skill","FRA":"Niveau acquis pour chaque formation","JPN":"Grade Obtained for Skill","LLL":"Grade Obtained for Skill"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_47",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW3","PRIM_TBLO","Row");var C3=this.cR("LIST1ITEM2","PRIM_TBLO","Item");
var C4=this.cR("ENTRYLIST","PRIM_LIST");var C5=this.cR("COLUMNSKILCODE2","PRIM_LIST","String");var C6=this.cR("COLUMNDATEACQR2","PRIM_LIST","Number");var C7=this.cR("COLUMNCOMMENT2","PRIM_LIST","String");var C8=this.cR("COLUMNCHECKBOX2","PRIM_LIST","CheckBox");var C9=this.cR("COLUMNXDEMO1","PRIM_LIST","Part");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(c1);C2.iC();C3.setColumn(C1);C3.setManage(C4);C3.setParent(C0);C3.setRow(C2);
C3.iC();C4.setDisplayPosition(1);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(1);C4.setTop(0);C4.setHeight(704);C4.setWidth(1088);C4.iC();C5.setDisplayPosition(1);C5.setParent(C4);C5.setSource(f.F1);C5.setColumnWidth(119);C5.setColumnReadOnly(false);C5.iC();C6.setDisplayPosition(2);C6.setIncrement(1);C6.setParent(C4);C6.setSource(f.F2);C6.setWrap(false);C6.setColumnWidth(196);C6.setColumnReadOnly(false);C6.iC();C7.setDisplayPosition(3);C7.setParent(C4);C7.setSource(f.F3);C7.setColumnWidth(213);
C7.setColumnReadOnly(false);C7.iC();C8.setColumnWidth(50);C8.setDisplayPosition(4);C8.setParent(C4);C8.iC();C9.setColumnWidth(174);C9.setDesign("XDEMO_38");C9.setDisplayPosition(5);C9.setParent(C4);C9.setColumnReadOnly(false);C9.iC();C9.aLF({"GRADE":f.F4});this.setLayoutManager(C0);this.setHeight(704);this.setWidth(1088);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var f=this.FLD.XDEMOW_47,m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",16);r.ln=16;{r.ln=18;f.F4.set("P");r.ln=19;
m.ENTRYLIST.initList(10);}r.ln=21;r.e();};},{rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_LIST.Number","PRIM_LIST.CheckBox","PRIM_LIST.Part"]});