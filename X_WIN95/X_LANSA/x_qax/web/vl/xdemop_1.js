﻿LANSA.addComponent({id:"XDEMOP_1",nm:"xDemoPopup",ot:"rp",tp:"Reusable Part",de:"Popups",tl:14020000},function(l,oI,u){var rc1=l.cB("ximageglo.png");var cO=l.rC(oI,{an:"PRIM_PPNL",pt:{ImageCaption:{da:"na"}},co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("COLUMN","PRIM_TBLO","Column");var C3=this.cR("LABEL","PRIM_LABL");var C4=this.cR("LAYOUTITEM","PRIM_TBLO","Item");var C5=this.cR("IMAGE_2","PRIM_IMAG");var C6=this.cR("LAYOUTITEM_2","PRIM_TBLO","Item");
var C7=this.cR("STYLE_2","PRIM_VS","Style");var C8=this.cR("STYLE_3","PRIM_VS","Style");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setDisplayPosition(1);C3.setEllipses("WORD");C3.setLeft(0);C3.setParent(this);C3.setTabPosition(1);C3.setTabStop(false);C3.setTop(0);C3.setVerticalAlignment("CENTER");C3.setHeight(254);C3.setWidth(254);C3.setAlignment("CENTER");C3.setCaption("A hint can be anything you like");C3.setStyle(C7);C3.iC();C4.setColumn(C2);
C4.setFlow("DOWN");C4.setManage(C3);C4.setParent(C0);C4.setRow(C1);C4.setAlignment("TOPCENTER");C4.iC();C5.setDisplayPosition(2);C5.setLeft(0);C5.setParent(this);C5.setTabPosition(2);C5.setTabStop(false);C5.setTop(0);C5.setImage(rc1);C5.setHeight(254);C5.setWidth(254);C5.setImageSizing("FITBOTH");C5.iC();C6.setAlignment("TOPLEFT");C6.setColumn(C2);C6.setFlow("DOWN");C6.setManage(C5);C6.setParent(C0);C6.setRow(C1);C6.iC();C7.setFontSize(12);C7.setTextColor("WHITE");C7.iC();C8.setNormBackColor("TRANSPARENT");
C8.iC();this.setHeight(256);this.setLeft(0);this.setTop(0);this.setWidth(256);this.setLayoutManager(C0);this.setStyle(C8);}});cO.mthSETIMAGECAPTION=function(p0){var m=this.REF,r=l.pR(this,cO,"SetImageCaption",17);var P0=r.cP("PROPERTY","PRIM_ALPH");P0.set(p0);r.ln=17;{r.ln=20;m.LABEL.set(P0.get());}r.ln=22;r.e();};cO.setIMAGECAPTION=function(v){this.mthSETIMAGECAPTION(v);};},{rp:["PRIM_PPNL","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_LABL","PRIM_TBLO.Item","PRIM_IMAG","PRIM_VS.Style"]});
