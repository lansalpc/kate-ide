﻿LANSA.addComponent({id:"XDEMOWEBT",nm:"xDemoWebTile",ot:"wp",tp:"Web Page",de:"Tiles",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.81");var Fd={F1:{nm:"XDEMOVALU",ft:"N",ln:256,dc:0,lb:"Generic Alphanu",h1:"Generic",h2:"Alphanumeric",h3:"Value",de:"Generic Alphanumeric Value",dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOWEBT",Fd);var C0=this.cA("GDATA","XDEMO_30");
var C1=this.cR("TILE","PRIM_TILE");var C2=this.cR("TABLELAYOUT","PRIM_TBLO");var C3=this.cR("ROW","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("ITEM","PRIM_TBLO","Item");var C6=this.cR("ROW_2","PRIM_TBLO","Row");var C7=this.cR("DIRECTION","XDEMO_25");var C8=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C9=this.cR("SHOWPARTIALITEMS","PRIM_CKBX");var C10=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.setDisplayPosition(2);C1.setLeft(0);
C1.setParent(this);C1.setTabPosition(2);C1.setTop(44);C1.setHeight(756);C1.setWidth(1200);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setHeight(44);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(1);C4.setParent(C2);C4.iC();C5.setColumn(C4);C5.setManage(C1);C5.setParent(C2);C5.setRow(C6);C5.iC();C6.setDisplayPosition(2);C6.setParent(C2);C6.setHeight(c1);C6.iC();C7.setParent(this);C7.setWidth(317);C7.setHeight(28);C7.setTop(8);C7.setLeft(4);C7.iC();C8.setColumn(C4);C8.setParent(C2);
C8.setRow(C3);C8.setAlignment("CENTERLEFT");C8.setSizing("NONE");C8.setMarginLeft(4);C8.setFlow("RIGHT");C8.setManage(C7);C8.iC();C9.setDisplayPosition(3);C9.setLeft(341);C9.setParent(this);C9.setTabPosition(3);C9.setWidth(200);C9.setCaption("Show Partial Items");C9.setHeight(27);C9.setTop(9);C9.iC();C10.setAlignment("CENTERLEFT");C10.setColumn(C4);C10.setFlow("RIGHT");C10.setManage(C9);C10.setParent(C2);C10.setRow(C3);C10.setSizing("NONE");C10.setMarginLeft(20);C10.iC();C0.aH("PREPARED",this,e3);
C7.aH("ITEMGOTFOCUS",this,e2);C9.aH("CLICK",this,e4);C1.aDS("XDEMOW_9");C1.aLF({});this.setLayoutManager(C2);this.setTheme(l.gTh("XDEMOTH_2"));this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_owner.CreateInstance",16);r.ln=16;{r.ln=18;m.DIRECTION.mthADD("LEFTTORIGHT","Left to Right");r.ln=19;m.DIRECTION.mthADD("RIGHTTOLEFT","Right to Left");r.ln=20;m.DIRECTION.mthADD("TOPTOBOTTOM","Top to Bottom");r.ln=21;m.DIRECTION.mthADD("BOTTOMTOTOP","Bottom to Top");
r.ln=23;m.DIRECTION.mthFIND(m.TILE.getDirection(),true);r.ln=25;if(m.TILE.getShowPartialItem()){r.ln=27;m.SHOWPARTIALITEMS.setButtonState("CHECKED");}}r.ln=31;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Direction.ItemGotFocus",33);var P0=Ps.r("VALUE");r.ln=33;{r.ln=35;m.TILE.setDirection(P0.get());}r.ln=37;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gData.Prepared",39);r.ln=39;{r.ln=41;{var i1=m.GDATA.ref.getEMPLOYEES().cI();while(i1.step()){var EMPLOYEE=r.sR("EMPLOYEE",i1.item());
r.ln=43;m.TILE.addEntry();r.ln=45;m.TILE.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=47;}i1.end();r.dR("EMPLOYEE");}}r.ln=49;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#ShowPartialItems.Click",51);r.ln=51;{r.ln=53;m.TILE.setShowPartialItem(l.s.eq(m.SHOWPARTIALITEMS.getButtonState(),"CHECKED"));}r.ln=55;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOVALU"});}},{rc:["XDEMO_30","XDEMO_25","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TILE","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_CKBX","PRIM_FLD"],
dc:["XDEMOW_9"]});