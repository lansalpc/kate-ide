﻿LANSA.addComponent({id:"XD4SIDE",nm:"XD4Sidebar",ot:"rp",tp:"Reusable Part",de:"Sidebar",tl:14020000},function(l,oI,u){var rc1=l.cB("xd4img02.png");var cO=l.rC(oI,{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cR("STYLEBLUE","PRIM_VS","Style");var C1=this.cR("BRUSHBLUE","PRIM_VS","SolidBrush");var C2=this.cR("STYLERED","PRIM_VS","Style");var C3=this.cR("BRUSHRED","PRIM_VS","SolidBrush");var C4=this.cR("STYLEDEEPORANGE","PRIM_VS","Style");var C5=this.cR("BRUSHDEEPORANGE","PRIM_VS","SolidBrush");
var C6=this.cR("STYLEINDIGO","PRIM_VS","Style");var C7=this.cR("BRUSHINDIGO","PRIM_VS","SolidBrush");var C8=this.cR("STYLEGREEN","PRIM_VS","Style");var C9=this.cR("BRUSHGREEN","PRIM_VS","SolidBrush");var C10=this.cR("STYLECURSOR","PRIM_VS","Style");var C11=this.cR("LAYOUT1","PRIM_TBLO");var C12=this.cR("COLUMN1","PRIM_TBLO","Column");var C13=this.cR("ROW1","PRIM_TBLO","Row");var C14=this.cR("HOMEITEM1","PRIM_TBLO","Item");var C15=this.cR("ABOUTITEM1","PRIM_TBLO","Item");var C16=this.cR("CONTACTITEM1","PRIM_TBLO","Item");
var C17=this.cR("HOME","PRIM_LABL");var C18=this.cR("ABOUT","PRIM_LABL");var C19=this.cR("CONTACT","PRIM_LABL");var C20=this.cA("APPLICATION","XD4APP");C0.setBackgroundBrush(C1);C0.setCornerBottomLeft(5);C0.setCornerBottomRight(5);C0.setCornerTopLeft(5);C0.setCornerTopRight(5);C0.setTextColor("WHITE");C0.iC();C1.setColor("33:150:243");C1.iC();C2.setBackgroundBrush(C3);C2.setCornerBottomLeft(5);C2.setCornerBottomRight(5);C2.setCornerTopLeft(5);C2.setCornerTopRight(5);C2.setTextColor("WHITE");C2.iC();
C3.setColor("244:67:54");C3.iC();C4.setBackgroundBrush(C5);C4.setCornerBottomLeft(5);C4.setCornerBottomRight(5);C4.setCornerTopLeft(5);C4.setCornerTopRight(5);C4.setTextColor("WHITE");C4.iC();C5.setColor("255:87:34");C5.iC();C6.setBackgroundBrush(C7);C6.setCornerBottomLeft(5);C6.setCornerBottomRight(5);C6.setCornerTopLeft(5);C6.setCornerTopRight(5);C6.setTextColor("WHITE");C6.iC();C7.setColor("63:81:181");C7.iC();C8.setBackgroundBrush(C9);C8.setCornerBottomLeft(5);C8.setCornerBottomRight(5);C8.setCornerTopLeft(5);
C8.setCornerTopRight(5);C8.setTextColor("WHITE");C8.iC();C9.setColor("76:175:80");C9.iC();C10.setCursor("HAND");C10.iC();C11.iC();C12.setDisplayPosition(1);C12.setParent(C11);C12.iC();C13.setDisplayPosition(1);C13.setParent(C11);C13.iC();C14.setManage(C17);C14.setParent(C11);C14.setRow(C13);C14.setSizing("NONE");C14.setColumn(C12);C14.setAlignment("TOPCENTER");C14.setFlow("DOWN");C14.setMarginTop(5);C14.setMarginBottom(5);C14.iC();C15.setManage(C18);C15.setParent(C11);C15.setRow(C13);C15.setSizing("NONE");
C15.setColumn(C12);C15.setAlignment("TOPCENTER");C15.setFlow("DOWN");C15.setMarginTop(5);C15.setMarginBottom(5);C15.iC();C16.setManage(C19);C16.setParent(C11);C16.setRow(C13);C16.setSizing("NONE");C16.setColumn(C12);C16.setAlignment("TOPCENTER");C16.setFlow("DOWN");C16.setMarginTop(5);C16.setMarginBottom(5);C16.iC();C17.setCaption("Home");C17.setDisplayPosition(1);C17.setTabPosition(3);C17.setTabStop(false);C17.setWidth(100);C17.setVerticalAlignment("CENTER");C17.setHeight(100);C17.setImage(rc1);
C17.setImageHeight(50);C17.setImagePosition("ABOVECAPTION");C17.setAlignment("CENTER");C17.setThemeDrawStyle("ToolbarButton");C17.setStyle(C0);C17.setParent(this);C17.setTop(5);C17.iC();C18.setCaption("About");C18.setDisplayPosition(3);C18.setTabPosition(4);C18.setTabStop(false);C18.setWidth(100);C18.setVerticalAlignment("CENTER");C18.setHeight(100);C18.setImage(rc1);C18.setImageHeight(50);C18.setImagePosition("ABOVECAPTION");C18.setAlignment("CENTER");C18.setThemeDrawStyle("ToolbarButton");C18.setStyle(C8);
C18.setTop(225);C18.setParent(this);C18.iC();C19.setCaption("Contact");C19.setDisplayPosition(4);C19.setTabPosition(1);C19.setTabStop(false);C19.setWidth(100);C19.setVerticalAlignment("CENTER");C19.setHeight(100);C19.setImage(rc1);C19.setImageHeight(50);C19.setImagePosition("ABOVECAPTION");C19.setAlignment("CENTER");C19.setThemeDrawStyle("ToolbarButton");C19.setStyle(C2);C19.setTop(445);C19.setParent(this);C19.iC();if((C20!=null)&&(C20.iI()==false)){C20.iC();}C17.aH("CLICK",this,e1);C18.aH("CLICK",this,e2);
C19.aH("CLICK",this,e3);this.setHeight(881);this.setDisplayPosition(1);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(121);this.setLayoutManager(C11);this.setThemeDrawStyle("LightTitle");}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Home.Click",42);r.ln=42;{r.ln=44;m.APPLICATION.ref.mthSHOW_HOME();}r.ln=46;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#About.Click",48);r.ln=48;{r.ln=50;m.APPLICATION.ref.mthSHOW_ABOUT();}r.ln=52;r.e();};function e3(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#Contact.Click",54);r.ln=54;{r.ln=56;m.APPLICATION.ref.mthSHOW_CONTACT();}r.ln=58;r.e();};},{rc:["XD4APP"],rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_LABL"]});