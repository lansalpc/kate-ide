﻿(function(l,u){var oI=l.cV({id:"XDEMOW_40",nm:"xDemoWebAnimationTable",ot:"wp",tp:"Web Page",de:"Table Animations",tl:3});var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT","PRIM_TBLO");var C1=this.cR("ROW","PRIM_TBLO","Row");var C2=this.cR("ROW_2","PRIM_TBLO","Row");var C3=this.cR("ROW_3","PRIM_TBLO","Row");var C4=this.cR("COLUMN","PRIM_TBLO","Column");var C5=this.cR("COLUMN_2","PRIM_TBLO","Column");var C6=this.cR("COLUMN_3","PRIM_TBLO","Column");var C7=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");
var C8=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C9=this.cR("PANEL1","PRIM_PANL");var C10=this.cR("PANEL2","PRIM_PANL");var C11=this.cR("ANIMATION","PRIM_ANIM");var C12=this.cR("ITEM1","PRIM_ANIM","TableLayoutItem");var C13=this.cR("ITEM2","PRIM_ANIM","TableLayoutItem");var C14=this.cR("ITEM5","PRIM_ANIM","Opacity");var C15=this.cR("ITEM6","PRIM_ANIM","Opacity");var C16=this.cR("ITEM7","PRIM_ANIM","Opacity");var C17=this.cR("ITEM8","PRIM_ANIM","Opacity");var C18=this.cR("ANIMATION2","PRIM_ANIM");
var C19=this.cR("ITEM3","PRIM_ANIM","TableLayoutItem");var C20=this.cR("ITEM4","PRIM_ANIM","TableLayoutItem");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(2);C2.setParent(C0);C2.iC();C3.setDisplayPosition(3);C3.setParent(C0);C3.iC();C4.setDisplayPosition(1);C4.setParent(C0);C4.iC();C5.setDisplayPosition(2);C5.setParent(C0);C5.iC();C6.setDisplayPosition(3);C6.setParent(C0);C6.iC();C7.setColumn(C4);C7.setManage(C9);C7.setParent(C0);C7.setRow(C1);C7.iC();C8.setColumn(C5);
C8.setManage(C10);C8.setParent(C0);C8.setRow(C2);C8.setColumnSpan(2);C8.setRowSpan(2);C8.iC();C9.setDisplayPosition(1);C9.setHeight(267);C9.setLeft(0);C9.setParent(this);C9.setTabPosition(1);C9.setTabStop(false);C9.setTop(0);C9.setWidth(400);C9.setThemeDrawStyle("LightTitle");C9.iC();C10.setDisplayPosition(2);C10.setHeight(533);C10.setLeft(400);C10.setParent(this);C10.setTabPosition(2);C10.setTabStop(false);C10.setTop(267);C10.setWidth(800);C10.setThemeDrawStyle("DarkTitle");C10.iC();C11.iC();C12.setColumn(C5);
C12.setRow(C2);C12.setRowSpan(2);C12.setColumnSpan(2);C12.setParent(C11);C12.setManage(C7);C12.iC();C13.setColumn(C4);C13.setRow(C1);C13.setRowSpan(1);C13.setColumnSpan(1);C13.setParent(C11);C13.setManage(C8);C13.iC();C14.setParent(C11);C14.setManage(C9);C14.setDuration(500);C14.iC();C15.setParent(C11);C15.setManage(C10);C15.setDuration(500);C15.iC();C16.setParent(C11);C16.setManage(C9);C16.setDuration(500);C16.setStartTime(500);C16.setOpacity(100);C16.iC();C17.setParent(C11);C17.setManage(C10);C17.setDuration(500);
C17.setStartTime(500);C17.setOpacity(100);C17.iC();C18.iC();C19.setColumn(C4);C19.setRow(C1);C19.setRowSpan(1);C19.setColumnSpan(1);C19.setParent(C18);C19.setManage(C7);C19.iC();C20.setColumn(C5);C20.setRow(C2);C20.setRowSpan(2);C20.setColumnSpan(2);C20.setParent(C18);C20.setManage(C8);C20.iC();C9.aH("CLICK",this,e1);C10.aH("CLICK",this,e1);this.setLayoutManager(C0);this.setTheme(l.THEME().get("2015ORANGE"));}});function e1(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#Panel1.Click #Panel2.Click",28);
r.ln=28;{r.ln=30;SENDER.setDisplayPosition(1);r.ln=32;if(l.and(l.not(m.ANIMATION.getIsAnimating()),l.not(m.ANIMATION2.getIsAnimating()))){r.ln=34;if((m.LAYOUTITEM1.getRow()===m.ROW)){r.ln=36;m.ANIMATION.mthSTART();}else{r.ln=40;m.ANIMATION2.mthSTART();}}}r.ln=46;r.e();};}(window["LANSA"]));