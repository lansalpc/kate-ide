﻿LANSA.addComponent({id:"XDEMOW_65",nm:"xDemoWebCarousel",ot:"wp",tp:"Web Page",de:"Carousel",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_WEB",co:function(){cO.aN.call(this);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("ROW2","PRIM_TBLO","Row");var C4=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C5=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C6=this.cR("LABEL1","PRIM_LABL");var C7=this.cR("CAROUSEL","PRIM_CARO");
var C8=this.cA("GDATA","XDEMO_30");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();C2.setDisplayPosition(1);C2.setParent(C0);C2.setHeight(64);C2.setUnits("PIXELS");C2.iC();C3.setDisplayPosition(2);C3.setParent(C0);C3.setHeight(443);C3.iC();C4.setAlignment("TOPLEFT");C4.setColumn(C1);C4.setFlow("DOWN");C4.setManage(C6);C4.setParent(C0);C4.setRow(C2);C4.iC();C5.setColumn(C1);C5.setManage(C7);C5.setParent(C0);C5.setRow(C3);C5.setMarginTop(10);C5.setSizing("NONE");C5.setAlignment("TOPCENTER");
C5.iC();C6.setCaption("Employees");C6.setDisplayPosition(1);C6.setEllipses("WORD");C6.setHeight(64);C6.setLeft(0);C6.setParent(this);C6.setTabPosition(1);C6.setTabStop(false);C6.setTop(0);C6.setVerticalAlignment("CENTER");C6.setWidth(1200);C6.setThemeDrawStyle("Title+DarkTitle");C6.setMarginLeft(4);C6.iC();C7.setCarouselStyle("PAGE");C7.setDisplayPosition(2);C7.setLeft(150);C7.setParent(this);C7.setTabPosition(2);C7.setTop(74);C7.setWidth(900);C7.iC();if((C8!=null)&&(C8.iI()==false)){C8.iC();}C8.aH("PREPARED",this,e1);
C7.aDS("XDEMO_42");C7.aLF({});this.setLayoutManager(C0);this.setTheme(l.gTh("XDEMOTH_2"));}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#gData.Prepared",15);r.ln=15;{r.ln=17;{var i1=m.GDATA.ref.getEMPLOYEES().cI();while(i1.step()){var EMPLOYEE=r.sR("EMPLOYEE",i1.item());r.ln=19;m.CAROUSEL.addEntry();r.ln=20;m.CAROUSEL.getCurrentItem().setRelatedReference(EMPLOYEE);r.ln=22;}i1.end();r.dR("EMPLOYEE");}}r.ln=24;r.e();};},{rc:["XDEMO_30","XDEMOTH_2"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_CARO"],
dc:["XDEMO_42"]});