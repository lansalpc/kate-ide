﻿LANSA.addComponent({id:"XD3MSGS",nm:"XD3Msgs",ot:"rp",tp:"Reusable Part",de:"Messages",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"STD_STRNG",ft:"VC",ln:512,dc:0,lb:{"ENG":"Std string fld","FRA":"?","JPN":"?","LLL":"Std string fld"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"String","FRA":"?","JPN":"?","LLL":"String"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],de:{"ENG":"Standard string field","FRA":"?","JPN":"?","LLL":"Standard string field"}[cL],
dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PPNL",fd:Fd,mt:{Show:{}},co:function(){cO.aN.call(this);var f=this.aF("XD3MSGS",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("LAYOUT","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("ROW1","PRIM_TBLO","Row");var C5=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C6=this.cR("LIST","PRIM_LIST");var C7=this.cR("LISTCOLUMN1","PRIM_LIST","String");C0.setBackgroundBrush(C1);
C0.iC();C1.setColor("0:0:0");C1.setOpacity(20);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C3);C5.setManage(C6);C5.setParent(C2);C5.setRow(C4);C5.iC();C6.setDisplayPosition(1);C6.setHeight(225);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTop(30);C6.setWidth(495);C6.setColumnHeaderHeight(0);C6.setColumnLines(false);C6.setRowLines(false);C6.iC();C7.setDisplayPosition(1);C7.setParent(C6);C7.setSource(f.F1);
C7.setColumnUnits("PROPORTION");C7.setColumnWidth(1);C7.iC();this.setHeight(257);this.setLeft(0);this.setTop(0);this.setWidth(497);this.setShroudStyle(C0);this.setCloseButton(true);this.setLayoutManager(C2);this.setTitleBar(true);this.setCaption("Messages");}});cO.mthSHOW=function(){var f=this.FLD.XD3MSGS,m=this.REF,r=l.mR(this,cO,"Show",19);r.ln=19;{r.ln=21;if(l.n.gt(l.MSGQ().getMessages().getItemCount(),0)){r.ln=23;m.LIST.clearList();r.ln=25;{var i1=l.MSGQ().getMessages().cI();while(i1.step()){
var MESSAGE=r.sR("MESSAGE",i1.item());r.ln=27;f.F1.set(MESSAGE.getText());r.ln=29;m.LIST.addEntry();r.ln=31;}i1.end();r.dR("MESSAGE");}r.ln=33;this.mthSHOWPOPUP(u,u,"CENTER",u,u);}}r.ln=37;r.e();};},{rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LIST","PRIM_LIST.String","PRIM_MSGQ"]});