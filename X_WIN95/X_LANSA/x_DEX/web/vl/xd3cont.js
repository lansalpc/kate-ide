﻿LANSA.addComponent({id:"XD3CONT",nm:"XD3Contact",ot:"rp",tp:"Reusable Part",de:"Contact",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLETITLE","PRIM_VS","Style");var C1=this.cR("STYLEMAP","PRIM_VS","Style");var C2=this.cR("LAYOUT","PRIM_TBLO");var C3=this.cR("COLUMN1","PRIM_TBLO","Column");var C4=this.cR("COLUMN2","PRIM_TBLO","Column");var C5=this.cR("COLUMN3","PRIM_TBLO","Column");var C6=this.cR("ROW1","PRIM_TBLO","Row");var C7=this.cR("ROW2","PRIM_TBLO","Row");
var C8=this.cR("ROW3","PRIM_TBLO","Row");var C9=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C12=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");var C13=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C14=this.cR("LAYOUTITEM6","PRIM_TBLO","Item");var C15=this.cR("LAYOUTITEMMAP","PRIM_TBLO","Item");var C16=this.cR("LABEL1","PRIM_LABL");var C17=this.cR("LABEL2","PRIM_LABL");var C18=this.cR("LABEL3","PRIM_LABL");
var C19=this.cR("LABEL4","PRIM_LABL");var C20=this.cR("LABEL5","PRIM_LABL");var C21=this.cR("LABEL6","PRIM_LABL");var C22=this.cR("MAP","PRIM_WEB","Page");var C23=this.cA("APPLICATION","XD3APP");C0.setBorderBottom(1);C0.iC();C1.setBorderBottom(10);C1.setBorderColor("TRANSPARENT");C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setMinWidth(10);C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setMaxWidth(1200);C4.setWidth(4);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);C5.setMinWidth(10);
C5.iC();C6.setDisplayPosition(1);C6.setParent(C2);C6.setHeight(60);C6.setUnits("PIXELS");C6.iC();C7.setDisplayPosition(2);C7.setParent(C2);C7.setUnits("PIXELS");C7.setHeight(155);C7.iC();C8.setDisplayPosition(3);C8.setParent(C2);C8.setHeight(600);C8.setUnits("PIXELS");C8.iC();C9.setAlignment("TOPLEFT");C9.setColumn(C3);C9.setFlow("DOWN");C9.setManage(C16);C9.setParent(C2);C9.setRow(C6);C9.setColumnSpan(3);C9.setMarginLeft(10);C9.setMarginRight(10);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C4);
C10.setFlow("DOWN");C10.setManage(C17);C10.setParent(C2);C10.setRow(C7);C10.setSizing("FITTOWIDTH");C10.setMarginTop(10);C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C4);C11.setFlow("DOWN");C11.setManage(C18);C11.setParent(C2);C11.setRow(C7);C11.setSizing("FITTOWIDTH");C11.iC();C12.setAlignment("TOPLEFT");C12.setColumn(C4);C12.setFlow("DOWN");C12.setManage(C19);C12.setParent(C2);C12.setRow(C7);C12.setSizing("FITTOWIDTH");C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C4);C13.setFlow("DOWN");
C13.setManage(C20);C13.setParent(C2);C13.setRow(C7);C13.setSizing("FITTOWIDTH");C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C4);C14.setFlow("DOWN");C14.setManage(C21);C14.setParent(C2);C14.setRow(C7);C14.setSizing("FITTOWIDTH");C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C4);C15.setFlow("DOWN");C15.setManage(C22);C15.setParent(C2);C15.setRow(C8);C15.setSizing("NONE");C15.iC();C16.setCaption("Contact Us");C16.setDisplayPosition(2);C16.setEllipses("WORD");C16.setHeight(60);C16.setParent(this);
C16.setTabPosition(2);C16.setTabStop(false);C16.setTop(0);C16.setVerticalAlignment("CENTER");C16.setWidth(980);C16.setStyle(C0);C16.setThemeDrawStyle("Heading1+Text");C16.iC();C17.setCaption("LANSA Pty Ltd");C17.setDisplayPosition(3);C17.setEllipses("WORD");C17.setHeight(25);C17.setLeft(167);C17.setParent(this);C17.setTabPosition(7);C17.setTabStop(false);C17.setTop(70);C17.setVerticalAlignment("CENTER");C17.setWidth(667);C17.iC();C18.setCaption("122 Arthur Street");C18.setDisplayPosition(4);C18.setEllipses("WORD");
C18.setHeight(25);C18.setLeft(167);C18.setParent(this);C18.setTabPosition(6);C18.setTabStop(false);C18.setTop(95);C18.setVerticalAlignment("CENTER");C18.setWidth(667);C18.iC();C19.setCaption("North Sydney, NSW 2060, Australia ");C19.setDisplayPosition(5);C19.setEllipses("WORD");C19.setHeight(25);C19.setLeft(167);C19.setParent(this);C19.setTabPosition(5);C19.setTabStop(false);C19.setTop(120);C19.setVerticalAlignment("CENTER");C19.setWidth(667);C19.iC();C20.setCaption("Tel: +61 2 8907 0200");C20.setDisplayPosition(6);
C20.setEllipses("WORD");C20.setHeight(25);C20.setLeft(167);C20.setParent(this);C20.setTabPosition(4);C20.setTabStop(false);C20.setTop(145);C20.setVerticalAlignment("CENTER");C20.setWidth(667);C20.iC();C21.setCaption("E-mail: LANSA Asia Pacific");C21.setDisplayPosition(7);C21.setEllipses("WORD");C21.setHeight(25);C21.setLeft(167);C21.setParent(this);C21.setTabPosition(3);C21.setTabStop(false);C21.setTop(170);C21.setVerticalAlignment("CENTER");C21.setWidth(667);C21.iC();C22.setDescription("Embedded Google Map Showing 122 Arthur Street");
C22.setDisplayPosition(1);C22.setHeight(267);C22.setParent(this);C22.setTabPosition(1);C22.setTabStop(false);C22.setTop(215);C22.setLeft(167);C22.setStyle(C1);C22.setSource("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.756026298233!2d151.21710777282718!3d-33.84125641082809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef2ac332673%3A0x5084547ab78a9e4d!2s122+Arthur+St%2C+North+Sydney+NSW+2060%2C+Australia!5e0!3m2!1sen!2sau!4v1467852578394");C22.setWidth(389);C22.iC();if((C23!=null)&&(C23.iI()==false))
{C23.iC();}C23.aH("DESKTOPVIEW",this,e1);C23.aH("TABLETVIEW",this,e2);C23.aH("MOBILEVIEW",this,e3);this.setHeight(815);this.setWidth(1000);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setLayoutManager(C2);this.setVerticalScroll(true);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.DesktopView",39);r.ln=39;{r.ln=41;m.COLUMN1.setWidth(1);r.ln=42;m.COLUMN3.setWidth(1);r.ln=44;m.MAP.setHeight(500);m.MAP.setWidth(600);r.ln=46;m.LAYOUTITEMMAP.setSizing("NONE");
}r.ln=48;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.TabletView",50);r.ln=50;{r.ln=52;m.COLUMN1.setWidth(1);r.ln=53;m.COLUMN3.setWidth(0);r.ln=55;m.MAP.setHeight(400);m.MAP.setWidth(500);r.ln=57;m.LAYOUTITEMMAP.setSizing("NONE");}r.ln=59;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Application.MobileView",61);r.ln=61;{r.ln=63;m.COLUMN1.setWidth(0);r.ln=64;m.COLUMN3.setWidth(0);r.ln=66;m.MAP.setHeight(400);r.ln=68;m.LAYOUTITEMMAP.setSizing("FITTOWIDTH");
}r.ln=70;r.e();};},{rc:["XD3APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL","PRIM_WEB.Page"]});