﻿LANSA.addComponent({id:"XD3THEME",nm:"XD3Theme",ot:"th",tp:"Theme",de:"Theme",tl:14020000},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_THM",co:function(){cO.aN.call(this);var C0=this.cR("STYLE_THEME","PRIM_VS","Style");var C1=this.cR("STYLE_STOCKIMAGE","PRIM_VS","Style");var C2=this.cR("STYLE_TITLETEXT","PRIM_VS","Style");var C3=this.cR("STYLE_TEXTCOLOR","PRIM_VS","Style");var C4=this.cR("STYLE_TEXTCOLORWHITE","PRIM_VS","Style");var C5=this.cR("STOCKIMAGE","PRIM_THM","DrawStyle");var C6=this.cR("TITLETEXT","PRIM_THM","DrawStyle");
var C7=this.cR("TEXT","PRIM_THM","DrawStyle");var C8=this.cR("TEXTWHITE","PRIM_THM","DrawStyle");var C9=this.cR("STYLE_FOOTER","PRIM_VS","Style");var C10=this.cR("STYLE_MENUSELECTED","PRIM_VS","Style");var C11=this.cR("FOOTER","PRIM_THM","DrawStyle");var C12=this.cR("MENUSELECTED","PRIM_THM","DrawStyle");var C13=this.cR("MENUBAR","PRIM_THM","DrawStyle");var C14=this.cR("MENUBARSTYLE","PRIM_VS","Style");var C15=this.cR("MENUBARBACKGROUNDBRUSH","PRIM_VS","SolidBrush");var C16=this.cR("MENUITEM","PRIM_THM","DrawStyle");
var C17=this.cR("MENUITEMMOUSEOVER","PRIM_VS","Style");var C18=this.cR("MENUITEMMOUSEBACKGROUND","PRIM_VS","SolidBrush");var C19=this.cR("POPUPMENU","PRIM_THM","DrawStyle");var C20=this.cR("POPUPMENUSTYLE","PRIM_VS","Style");var C21=this.cR("POPUPMENUBORDER","PRIM_VS","SolidBrush");var C22=this.cR("POPUPMENUBACKGROUND","PRIM_VS","SolidBrush");var C23=this.cR("POPUPMENUDROPSHADOW","PRIM_VS","DropShadow");var C24=this.cR("POPUP","PRIM_THM","DrawStyle");var C25=this.cR("POPUPSTYLE","PRIM_VS","Style");
var C26=this.cR("POPUPBORDER","PRIM_VS","SolidBrush");var C27=this.cR("POPUPBACKGROUND","PRIM_VS","SolidBrush");var C28=this.cR("POPUPDROPSHADOW","PRIM_VS","DropShadow");var C29=this.cR("DROPDOWN","PRIM_THM","DrawStyle");var C30=this.cR("DROPDOWNSTYLE","PRIM_VS","Style");var C31=this.cR("DROPDOWNBORDER","PRIM_VS","SolidBrush");var C32=this.cR("DROPDOWNBACKGROUND","PRIM_VS","SolidBrush");var C33=this.cR("DROPDOWNDROPSHADOW","PRIM_VS","DropShadow");var C34=this.cR("EDIT","PRIM_THM","DrawStyle");var C35=this.cR("LIST","PRIM_THM","DrawStyle");
var C36=this.cR("LISTCOLUMN","PRIM_THM","DrawStyle");var C37=this.cR("LISTCOLUMNSTYLE","PRIM_VS","Style");var C38=this.cR("LISTCOLUMNBORDER","PRIM_VS","SolidBrush");var C39=this.cR("LISTCOLUMNBACKGROUND","PRIM_VS","SolidBrush");var C40=this.cR("LISTITEM","PRIM_THM","DrawStyle");var C41=this.cR("LISTITEMFOCUSEDINACTIVESTYLE","PRIM_VS","Style");var C42=this.cR("LISTITEMFOCUSEDINACTIVEBORDER","PRIM_VS","SolidBrush");var C43=this.cR("LISTITEMSELECTEDINACTIVESTYLE","PRIM_VS","Style");var C44=this.cR("LISTITEMSELECTEDINACTIVEBORDER","PRIM_VS","SolidBrush");
var C45=this.cR("LISTITEMSELECTEDINACTIVEBACKGROUND","PRIM_VS","SolidBrush");var C46=this.cR("LISTITEMFOCUSSTYLE","PRIM_VS","Style");var C47=this.cR("LISTITEMFOCUSBORDER","PRIM_VS","SolidBrush");var C48=this.cR("LISTITEMFOCUSBACKGROUND","PRIM_VS","SolidBrush");var C49=this.cR("LISTITEMSELECTEDSTYLE","PRIM_VS","Style");var C50=this.cR("LISTITEMSELECTEDBORDER","PRIM_VS","SolidBrush");var C51=this.cR("LISTITEMSELECTEDBACKGROUND","PRIM_VS","SolidBrush");var C52=this.cR("LISTITEMMOUSEOVERSTYLE","PRIM_VS","Style");
var C53=this.cR("LISTITEMMOUSEOVERBORDER","PRIM_VS","SolidBrush");var C54=this.cR("LISTITEMMOUSEOVERBACKGROUND","PRIM_VS","SolidBrush");var C55=this.cR("PUSHBUTTON","PRIM_THM","DrawStyle");var C56=this.cR("PUSHBUTTONSTYLE","PRIM_VS","Style");var C57=this.cR("PUSHBUTTONBACKGROUND","PRIM_VS","SolidBrush");var C58=this.cR("PUSHBUTTONBORDER","PRIM_VS","SolidBrush");var C59=this.cR("PUSHBUTTONMOUSEOVER","PRIM_VS","Style");var C60=this.cR("PUSHBUTTONMOUSEOVERBACKGROUND","PRIM_VS","SolidBrush");var C61=this.cR("PUSHBUTTONFOCUSED","PRIM_VS","Style");
var C62=this.cR("PUSHBUTTONFOCUSBACKGROUND","PRIM_VS","SolidBrush");var C63=this.cR("PUSHBUTTONFOCUSBORDER","PRIM_VS","SolidBrush");var C64=this.cR("PUSHBUTTONPRESSED","PRIM_VS","Style");var C65=this.cR("PUSHBUTTONPRESSEDBACKGROUND","PRIM_VS","SolidBrush");var C66=this.cR("TOOLBARBUTTON","PRIM_THM","DrawStyle");var C67=this.cR("TOOLBARBUTTONMOUSEOVER","PRIM_VS","Style");var C68=this.cR("TOOLBARBUTTONMOUSEOVERBACKGROUND","PRIM_VS","SolidBrush");var C69=this.cR("TOOLBARBUTTONFOCUSED","PRIM_VS","Style");
var C70=this.cR("TOOLBARBUTTONFOCUSBACKGROUND","PRIM_VS","SolidBrush");var C71=this.cR("TOOLBARBUTTONFOCUSBORDER","PRIM_VS","SolidBrush");var C72=this.cR("TOOLBARBUTTONPRESSED","PRIM_VS","Style");var C73=this.cR("TOOLBARBUTTONPRESSEDBACKGROUND","PRIM_VS","SolidBrush");var C74=this.cR("FONT","PRIM_THM","DrawStyle");var C75=this.cR("FONTSTYLE","PRIM_VS","Style");var C76=this.cR("FONTMOBILE","PRIM_THM","DrawStyle");var C77=this.cR("FONTMOBILESTYLE","PRIM_VS","Style");var C78=this.cR("TITLE","PRIM_THM","DrawStyle");
var C79=this.cR("TITLESTYLE","PRIM_VS","Style");var C80=this.cR("TITLESTYLEFOREGROUND","PRIM_VS","SolidBrush");var C81=this.cR("HEADING1","PRIM_THM","DrawStyle");var C82=this.cR("HEADING1STYLE","PRIM_VS","Style");var C83=this.cR("HEADING1FOREGROUND","PRIM_VS","SolidBrush");var C84=this.cR("HEADING2","PRIM_THM","DrawStyle");var C85=this.cR("HEADING2STYLE","PRIM_VS","Style");var C86=this.cR("HEADING2FOREGROUND","PRIM_VS","SolidBrush");var C87=this.cR("HEADING3","PRIM_THM","DrawStyle");var C88=this.cR("HEADING3STYLE","PRIM_VS","Style");
var C89=this.cR("HEADING3FOREGROUND","PRIM_VS","SolidBrush");var C90=this.cR("STRONG","PRIM_THM","DrawStyle");var C91=this.cR("STRONGSTYLE","PRIM_VS","Style");var C92=this.cR("EMPHASIS","PRIM_THM","DrawStyle");var C93=this.cR("EMPHASISSTYLE","PRIM_VS","Style");var C94=this.cR("LIGHTTITLE","PRIM_THM","DrawStyle");var C95=this.cR("LIGHTTITLESTYLE","PRIM_VS","Style");var C96=this.cR("LIGHTTITLEBACKGROUND","PRIM_VS","SolidBrush");var C97=this.cR("LIGHTTITLEFOREGROUND","PRIM_VS","SolidBrush");var C98=this.cR("MEDIUMTITLE","PRIM_THM","DrawStyle");
var C99=this.cR("MEDIUMTITLESTYLE","PRIM_VS","Style");var C100=this.cR("MEDIUMTITLEBACKGROUND","PRIM_VS","SolidBrush");var C101=this.cR("MEDIUMTITLEFOREGROUND","PRIM_VS","SolidBrush");var C102=this.cR("DARKTITLE","PRIM_THM","DrawStyle");var C103=this.cR("DARKTITLESTYLE","PRIM_VS","Style");var C104=this.cR("DARKTITLEFOREGROUND","PRIM_VS","SolidBrush");var C105=this.cR("DARKTITLEBACKGROUND","PRIM_VS","SolidBrush");C0.setTextColor("48:48:48");C0.setFaceName("Verdana");C0.setFontSize(12);C0.setFontUnits("PIXEL");
C0.iC();C1.setNormBackColor("THEME100");C1.iC();C2.setTextColor("THEME700");C2.iC();C3.setTextColor("48:48:48");C3.iC();C4.setTextColor("WHITE");C4.iC();C5.setStyle(C1);C5.iC();C6.setStyle(C2);C6.iC();C7.setStyle(C3);C7.iC();C8.setStyle(C4);C8.iC();C9.setNormBackColor("THEME500");C9.setTextColor("255:255:255");C9.iC();C10.setNormBackColor("THEME500");C10.setTextColor("255:255:255");C10.iC();C11.setStyle(C9);C11.iC();C12.setStyle(C10);C12.setMouseOverStyle(C10);C12.iC();C13.setStyle(C14);C13.iC();
C14.setBackgroundBrush(C15);C14.iC();C15.setColor("THEME300");C15.iC();C16.setMouseOverStyle(C17);C16.iC();C17.setBackgroundBrush(C18);C17.iC();C18.setColor("THEME200");C18.iC();C19.setStyle(C20);C19.iC();C20.setBackgroundBrush(C22);C20.setBorderBottom(1);C20.setBorderRight(1);C20.setBorderLeft(1);C20.setBorderTop(1);C20.setCornerBottomLeft(0);C20.setCornerBottomRight(0);C20.setCornerTopLeft(0);C20.setCornerTopRight(0);C20.setBorderBrush(C21);C20.setEffect(C23);C20.iC();C21.setColor("THEMEBORDER");
C21.iC();C22.setColor("WHITE");C22.iC();C23.iC();C24.setStyle(C25);C24.iC();C25.setBackgroundBrush(C27);C25.setBorderBottom(1);C25.setBorderRight(1);C25.setBorderLeft(1);C25.setBorderTop(1);C25.setCornerBottomLeft(0);C25.setCornerBottomRight(0);C25.setCornerTopLeft(0);C25.setCornerTopRight(0);C25.setBorderBrush(C26);C25.setEffect(C28);C25.iC();C26.setColor("THEMEBORDER");C26.iC();C27.setColor("WHITE");C27.iC();C28.iC();C29.setStyle(C30);C29.iC();C30.setBackgroundBrush(C32);C30.setBorderBottom(1);
C30.setBorderRight(1);C30.setBorderLeft(1);C30.setBorderTop(1);C30.setCornerBottomLeft(0);C30.setCornerBottomRight(0);C30.setCornerTopLeft(0);C30.setCornerTopRight(0);C30.setBorderBrush(C31);C30.setEffect(C33);C30.iC();C31.setColor("THEMEBORDER");C31.iC();C32.setColor("WHITE");C32.iC();C33.iC();C34.iC();C35.iC();C36.setStyle(C37);C36.iC();C37.setBackgroundBrush(C39);C37.setBorderBottom(1);C37.setBorderRight(1);C37.setBorderBrush(C38);C37.iC();C38.setColor("THEMEBORDER");C38.iC();C39.setColor("WHITE");
C39.iC();C40.setFocusedInactiveStyle(C41);C40.setSelectedInactiveStyle(C43);C40.setFocusedStyle(C46);C40.setMouseOverStyle(C52);C40.setSelectedStyle(C49);C40.iC();C41.setBorderBrush(C42);C41.iC();C42.setColor("THEMEINACTIVE");C42.iC();C43.setBackgroundBrush(C45);C43.setBorderBrush(C44);C43.iC();C44.setColor("THEMEINACTIVE");C44.iC();C45.setColor("THEMEINACTIVE");C45.iC();C46.setBackgroundBrush(C48);C46.setBorderBrush(C47);C46.iC();C47.setColor("THEME100");C47.iC();C48.setColor("THEME100");C48.iC();
C49.setBackgroundBrush(C51);C49.setBorderBrush(C50);C49.iC();C50.setColor("THEME200");C50.iC();C51.setColor("THEME200");C51.iC();C52.setBackgroundBrush(C54);C52.setBorderBrush(C53);C52.iC();C53.setColor("THEME50");C53.iC();C54.setColor("THEME50");C54.iC();C55.setStyle(C56);C55.setMouseOverStyle(C59);C55.setFocusedStyle(C61);C55.setPressedStyle(C64);C55.iC();C56.setBackgroundBrush(C57);C56.setBorderBottom(1);C56.setBorderLeft(1);C56.setBorderRight(1);C56.setBorderTop(1);C56.setBorderBrush(C58);C56.setCornerBottomLeft(0);
C56.setCornerBottomRight(0);C56.setCornerTopLeft(0);C56.setCornerTopRight(0);C56.iC();C57.setColor("234:234:234");C57.iC();C58.setColor("SILVER");C58.iC();C59.setBackgroundBrush(C60);C59.iC();C60.setColor("THEME200");C60.iC();C61.setBackgroundBrush(C62);C61.setBorderBrush(C63);C61.iC();C62.setColor("THEME200");C62.iC();C63.setColor("THEME300");C63.iC();C64.setBackgroundBrush(C65);C64.iC();C65.setColor("THEME300");C65.iC();C66.setMouseOverStyle(C67);C66.setFocusedStyle(C69);C66.setPressedStyle(C72);
C66.iC();C67.setBackgroundBrush(C68);C67.iC();C68.setColor("THEME200");C68.iC();C69.setBackgroundBrush(C70);C69.setBorderBrush(C71);C69.iC();C70.setColor("THEME200");C70.iC();C71.setColor("THEME300");C71.iC();C72.setBackgroundBrush(C73);C72.iC();C73.setColor("THEME300");C73.iC();C74.setStyle(C75);C74.iC();C75.setFontSize(100);C75.setFontUnits("PERCENT");C75.iC();C76.setStyle(C77);C76.iC();C77.setFontSize(120);C77.setFontUnits("PERCENT");C77.iC();C78.setStyle(C79);C78.iC();C79.setForegroundBrush(C80);
C79.setFontSize(250);C79.setFontUnits("PERCENT");C79.iC();C80.setColor("THEME900");C80.iC();C81.setStyle(C82);C81.iC();C82.setForegroundBrush(C83);C82.setFontSize(160);C82.setFontUnits("PERCENT");C82.iC();C83.setColor("THEME900");C83.iC();C84.setStyle(C85);C84.iC();C85.setForegroundBrush(C86);C85.setFontSize(140);C85.setFontUnits("PERCENT");C85.iC();C86.setColor("THEME900");C86.iC();C87.setStyle(C88);C87.iC();C88.setForegroundBrush(C89);C88.setFontSize(120);C88.setFontUnits("PERCENT");C88.iC();C89.setColor("THEME900");
C89.iC();C90.setStyle(C91);C90.iC();C91.setBold(true);C91.iC();C92.setStyle(C93);C92.iC();C93.setItalic(true);C93.iC();C94.setStyle(C95);C94.iC();C95.setBackgroundBrush(C96);C95.setForegroundBrush(C97);C95.iC();C96.setColor("THEME300");C96.iC();C97.setColor("THEME700");C97.iC();C98.setStyle(C99);C98.iC();C99.setForegroundBrush(C101);C99.setBackgroundBrush(C100);C99.iC();C100.setColor("THEME500");C100.iC();C101.setColor("WHITE");C101.iC();C102.setStyle(C103);C102.iC();C103.setBackgroundBrush(C105);
C103.setForegroundBrush(C104);C103.iC();C104.setColor("WHITE");C104.iC();C105.setColor("THEME700");C105.iC();this.setBaseTheme("2015BLUE");this.setStyle(C0);}});},{rp:["PRIM_THM","PRIM_VS.Style","PRIM_THM.DrawStyle","PRIM_VS.SolidBrush","PRIM_VS.DropShadow"]});