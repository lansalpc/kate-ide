﻿LANSA.addComponent({id:"XETMSGS",nm:"XETMessages",ot:"rp",tp:"Reusable Part",de:"Employee Messages Popup",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",ev:{OkClicked:{},CancelClicked:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLESHROUD","PRIM_VS","Style");var C1=this.cR("BRUSHSHROUD","PRIM_VS","SolidBrush");var C2=this.cR("STYLE1","PRIM_VS","Style");var C3=this.cR("TABLELAYOUT","PRIM_TBLO");var C4=this.cR("COLUMN1","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");
var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("BUTTONOK","PRIM_PHBN");var C12=this.cR("LIST1","PRIM_LIST");var C13=this.cR("COLUMNSTRING","PRIM_LIST","String");var C14=this.cR("LABEL1","PRIM_LABL");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME200");C1.setOpacity(5);C1.iC();C2.setBorderBottom(0);
C2.setBorderLeft(0);C2.setBorderRight(0);C2.setBorderTop(0);C2.iC();C3.iC();C4.setDisplayPosition(1);C4.setParent(C3);C4.iC();C5.setDisplayPosition(2);C5.setParent(C3);C5.iC();C6.setDisplayPosition(3);C6.setParent(C3);C6.setHeight(56);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(1);C7.setParent(C3);C7.setHeight(48);C7.setUnits("PIXELS");C7.iC();C8.setColumn(C4);C8.setFlow("RIGHT");C8.setManage(C11);C8.setParent(C3);C8.setRow(C6);C8.setAlignment("CENTERRIGHT");C8.setMarginTop(3);C8.setMarginBottom(3);
C8.setMarginLeft(3);C8.setMarginRight(3);C8.iC();C9.setColumn(C4);C9.setManage(C12);C9.setParent(C3);C9.setRow(C5);C9.setMarginTop(10);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C4);C10.setFlow("DOWN");C10.setManage(C14);C10.setParent(C3);C10.setRow(C7);C10.iC();C11.setCaption("OK");C11.setDisplayPosition(1);C11.setParent(this);C11.setTabPosition(1);C11.setTop(265);C11.setHeight(50);C11.setWidth(304);C11.setLeft(3);C11.iC();C12.setDisplayPosition(2);C12.setHeight(204);C12.setParent(this);C12.setTabPosition(2);
C12.setTop(58);C12.setWidth(310);C12.setColumnHeaderHeight(0);C12.setRowHeight(40);C12.setStyle(C2);C12.setColumnLines(false);C12.setRowLines(false);C12.setLeft(0);C12.iC();C13.setDisplayPosition(1);C13.setParent(C12);C13.setCellMarginLeft(10);C13.iC();C14.setDisplayPosition(3);C14.setEllipses("WORD");C14.setHeight(48);C14.setLeft(0);C14.setParent(this);C14.setTabPosition(3);C14.setTabStop(false);C14.setTop(0);C14.setVerticalAlignment("CENTER");C14.setWidth(310);C14.setThemeDrawStyle("MediumTitle");
C14.setCaption("Save Failed");C14.setMarginLeft(20);C14.iC();C11.aH("CLICK",this,e1);this.setLeft(0);this.setHeight(320);this.setTop(0);this.setWidth(312);this.setLayoutManager(C3);this.setShroudStyle(C0);this.setAutoClose(false);this.aH("CLOSED",this,e2);this.aH("PREPARE",this,e3);}});function e1(sender,Ps){var r=l.eR(this,cO,"#ButtonOk.Click",38);r.ln=38;{r.ln=40;this.mthCLOSEPOPUP();r.ln=42;this.fE("OKCLICKED");}r.ln=44;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Closed",46);
r.ln=46;{r.ln=48;m.LIST1.clearList();r.ln=50;l.MSGQ().mthCLEARALL();}r.ln=52;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#COM_OWNER.Prepare",54);r.ln=54;{r.ln=56;{var i1=l.MSGQ().getMessages().cI();while(i1.step()){var MESSAGE=r.sR("MESSAGE",i1.item());r.ln=58;m.LIST1.addEntry();r.ln=60;m.COLUMNSTRING.getCurrentItem().setValue(MESSAGE.getText());r.ln=62;}i1.end();r.dR("MESSAGE");}r.ln=64;m.COLUMNSTRING.mthSIZETOCONTENTS();r.ln=66;if(l.n.lt(m.COLUMNSTRING.getColumnWidth(),l.sub(m.LIST1.getWidth(),3)))
{r.ln=68;m.COLUMNSTRING.setColumnWidth(l.sub(m.LIST1.getWidth(),3));}}r.ln=72;r.e();};},{rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PHBN","PRIM_LIST","PRIM_LIST.String","PRIM_LABL","PRIM_MSGQ"]});