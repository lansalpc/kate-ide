﻿(function(l,u){var oI=l.cV({id:"XSBANNER",nm:"XSBanner",ot:"rp",tp:"Reusable Part",de:"Banner",tl:3});var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT1","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");
var C8=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("BANNERIMAGESITEM1","PRIM_TBLO","Item");var C11=this.cR("MOVELEFT","PRIM_LABL");var C12=this.cR("MOVERIGHT","PRIM_LABL");var C13=this.cR("BANNERIMAGES","XSBANNIM");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("237:27:36");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setWidth(30);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setMinWidth(740);
C4.setMaxWidth(1170);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.setWidth(30);C5.setUnits("PIXELS");C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.iC();C7.setColumn(C3);C7.setFlow("DOWN");C7.setManage(C11);C7.setParent(C2);C7.setRow(C6);C7.setSizing("FITTOWIDTH");C7.setAlignment("CENTERRIGHT");C7.iC();C8.setColumn(C5);C8.setFlow("DOWN");C8.setManage(C12);C8.setParent(C2);C8.setRow(C6);C8.setSizing("FITTOWIDTH");C8.setAlignment("CENTERLEFT");C8.iC();C9.setColumn(C3);C9.setParent(C2);
C9.setRow(C6);C9.setColumnSpan(3);C9.iC();C10.setManage(C13);C10.setParent(C2);C10.setRow(C6);C10.setColumn(C3);C10.setColumnSpan(3);C10.iC();C11.setCaption("<");C11.setDisplayPosition(1);C11.setEllipses("WORD");C11.setHeight(30);C11.setLeft(0);C11.setParent(this);C11.setTabPosition(1);C11.setTabStop(false);C11.setTop(143);C11.setVerticalAlignment("CENTER");C11.setWidth(30);C11.setStyle(l.gTh("XSTHEME01").get("TEXT30BOLDWH"));C11.setAlignment("RIGHT");C11.iC();C12.setCaption(">");C12.setDisplayPosition(2);
C12.setEllipses("WORD");C12.setHeight(30);C12.setLeft(1140);C12.setParent(this);C12.setTabPosition(3);C12.setTabStop(false);C12.setTop(143);C12.setVerticalAlignment("CENTER");C12.setWidth(30);C12.setStyle(l.gTh("XSTHEME01").get("TEXT30BOLDWH"));C12.iC();C13.setDisplayPosition(3);C13.setParent(this);C13.setTabPosition(2);C13.setTabStop(false);C13.setHeight(316);C13.setWidth(1170);C13.iC();C11.aH("CLICK",this,e1);C12.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setHeight(316);this.setLeft(0);
this.setTabPosition(1);this.setTop(0);this.setWidth(1170);this.setLayoutManager(C2);this.setStyle(C0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MoveLeft.Click",27);r.ln=27;{r.ln=30;m.BANNERIMAGES.mthSHOWIMAGETOLEFT();}r.ln=32;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MoveRight.Click",34);r.ln=34;{r.ln=37;m.BANNERIMAGES.mthSHOWIMAGETORIGHT();}r.ln=39;r.e();};}(window["LANSA"]));