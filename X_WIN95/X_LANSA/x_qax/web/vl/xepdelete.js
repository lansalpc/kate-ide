﻿LANSA.addComponent({id:"XEPDELETE",nm:"XEPDelete",ot:"rp",tp:"Reusable Part",de:"Employee Delete Confirmation Popup",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PPNL",ev:{OkClicked:{},CancelClicked:{}},co:function(){cO.aN.call(this);var C0=this.cR("STYLESHROUD","PRIM_VS","Style");var C1=this.cR("BRUSHSHROUD","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");
var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C12=this.cR("LABEL","PRIM_LABL");var C13=this.cR("BUTTONCANCEL","PRIM_PHBN");var C14=this.cR("BUTTONOK","PRIM_PHBN");var C15=this.cR("LABEL1","PRIM_LABL");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME200");C1.setOpacity(5);
C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.iC();C5.setDisplayPosition(2);C5.setParent(C2);C5.iC();C6.setDisplayPosition(3);C6.setParent(C2);C6.setHeight(56);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(1);C7.setParent(C2);C7.setHeight(48);C7.setUnits("PIXELS");C7.iC();C8.setAlignment("TOPLEFT");C8.setColumn(C3);C8.setFlow("RIGHT");C8.setManage(C13);C8.setParent(C2);C8.setRow(C6);C8.setMarginTop(3);C8.setMarginBottom(3);C8.setMarginLeft(3);
C8.setMarginRight(2);C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C3);C9.setFlow("RIGHT");C9.setManage(C14);C9.setParent(C2);C9.setRow(C6);C9.setMarginTop(3);C9.setMarginBottom(3);C9.setMarginLeft(2);C9.setMarginRight(3);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C3);C10.setFlow("DOWN");C10.setManage(C12);C10.setParent(C2);C10.setRow(C5);C10.setColumnSpan(2);C10.setMarginLeft(20);C10.setMarginRight(20);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C3);C11.setFlow("DOWN");C11.setManage(C15);
C11.setParent(C2);C11.setRow(C7);C11.setColumnSpan(3);C11.iC();C12.setCaption("Are you sure you want to delete this Employee?");C12.setDisplayPosition(3);C12.setEllipses("WORD");C12.setHeight(64);C12.setParent(this);C12.setTabPosition(3);C12.setTabStop(false);C12.setTop(48);C12.setWidth(270);C12.setLeft(20);C12.setVerticalAlignment("CENTER");C12.iC();C13.setCaption("CANCEL");C13.setDisplayPosition(1);C13.setLeft(3);C13.setParent(this);C13.setTabPosition(2);C13.setTop(115);C13.setHeight(50);C13.setWidth(150);
C13.setButtonCancel(true);C13.iC();C14.setCaption("OK");C14.setDisplayPosition(2);C14.setLeft(157);C14.setParent(this);C14.setTabPosition(1);C14.setTop(115);C14.setHeight(50);C14.setWidth(150);C14.iC();C15.setCaption("Delete Employee");C15.setDisplayPosition(4);C15.setEllipses("WORD");C15.setHeight(48);C15.setLeft(0);C15.setParent(this);C15.setTabPosition(4);C15.setTabStop(false);C15.setTop(0);C15.setVerticalAlignment("CENTER");C15.setWidth(310);C15.setThemeDrawStyle("MediumTitle");C15.setMarginLeft(20);
C15.iC();C13.aH("CLICK",this,e1);C14.aH("CLICK",this,e2);this.setLeft(0);this.setHeight(170);this.setTop(0);this.setWidth(312);this.setLayoutManager(C2);this.setShroudStyle(C0);this.setAutoClose(false);}});function e1(sender,Ps){var r=l.eR(this,cO,"#ButtonCancel.Click",38);r.ln=38;{r.ln=40;this.mthCLOSEPOPUP();r.ln=42;this.fE("CANCELCLICKED");}r.ln=44;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#ButtonOk.Click",46);r.ln=46;{r.ln=48;this.mthCLOSEPOPUP();r.ln=50;this.fE("OKCLICKED");}r.ln=52;
r.e();};},{rp:["PRIM_PPNL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_PHBN"]});