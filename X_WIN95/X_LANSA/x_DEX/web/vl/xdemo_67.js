﻿LANSA.addComponent({id:"XDEMO_67",nm:"xDemoWebSliderBar",ot:"rp",tp:"Reusable Part",de:"Slider Bar",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",pt:{Percentage:{da:"r"}},ev:{Changed:{ps:{"Percentage":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("GPERCENTAGE","PRIM_NMBR");var C1=this.cR("STYLE1","PRIM_VS","Style");var C2=this.cR("BRUSH2","PRIM_VS","SolidBrush");var C3=this.cR("STYLE2","PRIM_VS","Style");var C4=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C5=this.cR("LAYOUT","PRIM_TBLO");
var C6=this.cR("LAYOUTROW1","PRIM_TBLO","Row");var C7=this.cR("LAYOUTCOLUMN1","PRIM_TBLO","Column");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("SLIDER","PRIM_PANL");var C11=this.cR("LPERCENTAGE","PRIM_LABL");var C12=this.cR("LEFT","PRIM_STPG");var C13=this.cR("RIGHT","PRIM_STPG");C0.iC();C1.setBorderBottom(2);C1.setBorderBrush(C2);C1.iC();C2.setColor("THEME500");C2.iC();C3.setBackgroundBrush(C4);C3.iC();C4.setColor("THEME500");
C4.setOpacity(50);C4.iC();C5.iC();C6.setDisplayPosition(1);C6.setParent(C5);C6.iC();C7.setDisplayPosition(1);C7.setParent(C5);C7.iC();C8.setManage(C10);C8.setParent(C5);C8.setRow(C6);C8.setSizing("FITTOHEIGHT");C8.setAlignment("BOTTOMCENTER");C8.iC();C9.setColumn(C7);C9.setManage(C11);C9.setParent(C5);C9.setRow(C6);C9.setSizing("FITTOHEIGHT");C9.iC();C10.setDisplayPosition(1);C10.setLeft(0);C10.setParent(this);C10.setTabPosition(1);C10.setTop(0);C10.setWidth(21);C10.setStyle(C3);C10.setHeight(47);
C10.setTouchMove("HORIZONTAL");C10.iC();C11.setCaption("%");C11.setDisplayPosition(2);C11.setEllipses("WORD");C11.setHeight(47);C11.setLeft(211);C11.setParent(this);C11.setTabPosition(2);C11.setTabStop(false);C11.setTop(0);C11.setVerticalAlignment("CENTER");C11.setWidth(78);C11.setAlignment("CENTER");C11.iC();C12.setShortCut("LEFT");C12.setParent(C10);C12.iC();C13.setShortCut("LEFT");C13.setParent(C10);C13.iC();C10.aH("TOUCHCHANGE",this,e2);this.setDisplayPosition(1);this.setHeight(49);this.setLeft(0);
this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setStyle(C1);this.setLayoutManager(C5);this.aH("CREATEINSTANCE",this,e1);}});cO.mthSETPERCENTAGE=function(p0){var m=this.REF,r=l.pR(this,cO,"SetPercentage",29);var P0=r.cP("PROPERTY","PRIM_NMBR");P0.set(p0);r.ln=29;{r.ln=32;m.GPERCENTAGE.set(l.n.Bound(P0.get(),0,100));r.ln=34;m.SLIDER.setLeft(l.div(l.mul(l.sub(this.getWidth(),m.SLIDER.getWidth()),m.GPERCENTAGE.get()),100));r.ln=36;m.LPERCENTAGE.set(l.cat(l.n.AsString(m.GPERCENTAGE.get()),"%"));
}r.ln=38;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Com_owner.CreateInstance",40);r.ln=40;{r.ln=42;this.setPERCENTAGE(0);}r.ln=44;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Slider.TouchChange",46);r.ln=46;{r.ln=49;m.SLIDER.setLeft(l.n.Bound(m.SLIDER.getLeft(),0,l.sub(this.getWidth(),m.SLIDER.getWidth())));r.ln=51;m.GPERCENTAGE.set(l.mul(l.div(m.SLIDER.getLeft(),l.sub(this.getWidth(),m.SLIDER.getWidth())),100));r.ln=53;m.LPERCENTAGE.set(l.cat(l.n.AsString(m.GPERCENTAGE.get()),"%"));
r.ln=55;{var eP=l.ePs();eP.cR("PERCENTAGE","PRIM_NMBR");eP.r("PERCENTAGE").set(m.GPERCENTAGE.get());this.fE("CHANGED",eP);eP.e();}}r.ln=57;r.e();};cO.getPERCENTAGE=function(){return this.REF.GPERCENTAGE.get();};cO.setPERCENTAGE=function(v){this.mthSETPERCENTAGE(v);};},{rp:["PRIM_PANL","PRIM_NMBR","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_STPG"]});