﻿LANSA.addComponent({id:"XDEMOTH_1",nm:"xDemoThemeTheme2",ot:"th",tp:"Theme",de:"Theme 2",tl:14020000},function(l,oI,u){var rc1=l.cB("ximagethe.png");var cO=l.rC(oI,{an:"PRIM_THM",co:function(){cO.aN.call(this);var C0=this.cR("LIGHTBRUSH","PRIM_VS","SolidBrush");var C1=this.cR("MEDIUMBRUSH","PRIM_VS","SolidBrush");var C2=this.cR("DARKBRUSH","PRIM_VS","LinearBrush");var C3=this.cR("DARKBRUSHCOLORS","PRIM_VS","BrushColors");var C4=this.cR("DARKBRUSHBRUSHCOLOR1","PRIM_VS","BrushColor");var C5=this.cR("DARKBRUSHBRUSHCOLOR2","PRIM_VS","BrushColor");
var C6=this.cR("DARKTEXTBRUSH","PRIM_VS","SolidBrush");var C7=this.cR("SELECTEDBRUSH","PRIM_VS","SolidBrush");var C8=this.cR("MOUSEOVERBRUSH","PRIM_VS","SolidBrush");var C9=this.cR("MOUSEOVERBUTTONBRUSH","PRIM_VS","SolidBrush");var C10=this.cR("PRESSEDBRUSH","PRIM_VS","SolidBrush");var C11=this.cR("WATERMARKBRUSH","PRIM_VS","ImageBrush");var C12=this.cR("LIGHTSTYLE","PRIM_VS","Style");var C13=this.cR("MEDIUMSTYLE","PRIM_VS","Style");var C14=this.cR("DARKSTYLE","PRIM_VS","Style");var C15=this.cR("SELECTEDSTYLE","PRIM_VS","Style");
var C16=this.cR("MOUSEOVERSTYLE","PRIM_VS","Style");var C17=this.cR("MOUSEOVERBUTTONSTYLE","PRIM_VS","Style");var C18=this.cR("PRESSEDSTYLE","PRIM_VS","Style");var C19=this.cR("CONTROLSTYLE","PRIM_VS","Style");var C20=this.cR("TITLESTYLE","PRIM_VS","Style");var C21=this.cR("TITLEBRUSH","PRIM_VS","SolidBrush");var C22=this.cR("SUBTITLESTYLE","PRIM_VS","Style");var C23=this.cR("HEADING1STYLE","PRIM_VS","Style");var C24=this.cR("HEADING2STYLE","PRIM_VS","Style");var C25=this.cR("HEADING3STYLE","PRIM_VS","Style");
var C26=this.cR("WATERMARKSTYLE","PRIM_VS","Style");var C27=this.cR("FOUNDSTYLE","PRIM_VS","Style");var C28=this.cR("BUTTON","PRIM_THM","DrawStyle");var C29=this.cR("LISTITEM","PRIM_THM","DrawStyle");var C30=this.cR("LISTCOLUMN","PRIM_THM","DrawStyle");var C31=this.cR("LIGHT","PRIM_THM","DrawStyle");var C32=this.cR("MEDIUM","PRIM_THM","DrawStyle");var C33=this.cR("DARK","PRIM_THM","DrawStyle");var C34=this.cR("TITLE","PRIM_THM","DrawStyle");var C35=this.cR("SUBTITLE","PRIM_THM","DrawStyle");var C36=this.cR("HEADING1","PRIM_THM","DrawStyle");
var C37=this.cR("HEADING2","PRIM_THM","DrawStyle");var C38=this.cR("HEADING3","PRIM_THM","DrawStyle");var C39=this.cR("WATERMARK","PRIM_THM","DrawStyle");C0.setColor("208:62:62");C0.iC();C1.setColor("194:1:1");C1.iC();C2.setColors(C3);C2.iC();C3.iC();C4.setColor("56:56:56");C4.setParent(C3);C4.iC();C5.setAt(100);C5.setColor("0:0:0");C5.setParent(C3);C5.iC();C6.setColor("WHITE");C6.iC();C7.setColor("208:62:62");C7.iC();C8.setColor("208:92:92");C8.iC();C9.setColor("194:1:1");C9.iC();C10.setColor("171:0:0");
C10.iC();C11.setImage(rc1);C11.setSizing("BESTFIT");C11.iC();C12.setBackgroundBrush(C0);C12.setForegroundBrush(C6);C12.setFontSize(11);C12.iC();C13.setBackgroundBrush(C1);C13.setForegroundBrush(C6);C13.iC();C14.setBackgroundBrush(C2);C14.setForegroundBrush(C6);C14.iC();C15.setBackgroundBrush(C7);C15.setForegroundBrush(C6);C15.iC();C16.setBackgroundBrush(C8);C16.setForegroundBrush(C6);C16.iC();C17.setBackgroundBrush(C9);C17.setForegroundBrush(C6);C17.iC();C18.setBackgroundBrush(C10);C18.setForegroundBrush(C6);
C18.iC();C19.setFontUnits("PIXEL");C19.setFontSize(11);C19.setFaceName("Tahoma");C19.iC();C20.setFontUnits("PIXEL");C20.setFontSize(36);C20.setForegroundBrush(C21);C20.setBackgroundBrush(C2);C20.iC();C21.setColor("255:255:255");C21.iC();C22.setFontUnits("PIXEL");C22.setFontSize(20);C22.iC();C23.setFontUnits("PIXEL");C23.setFontSize(16);C23.iC();C24.setFontUnits("PIXEL");C24.setFontSize(14);C24.iC();C25.setFontUnits("PIXEL");C25.setFontSize(12);C25.setItalic(true);C25.iC();C26.setBackgroundBrush(C11);
C26.iC();C27.setBackgroundBrush(C0);C27.setForegroundBrush(C6);C27.iC();C28.setMouseOverStyle(C17);C28.setFocusedStyle(C13);C28.setPressedStyle(C18);C28.iC();C29.setMouseOverStyle(C16);C29.setFocusedStyle(C12);C29.setSelectedStyle(C15);C29.setPressedStyle(C18);C29.iC();C30.setMouseOverStyle(C16);C30.setStyle(C13);C30.setPressedStyle(C18);C30.iC();C31.setStyle(C12);C31.iC();C32.setStyle(C13);C32.iC();C33.setStyle(C14);C33.iC();C34.setStyle(C20);C34.iC();C35.setStyle(C22);C35.iC();C36.setStyle(C23);
C36.iC();C37.setStyle(C24);C37.iC();C38.setStyle(C25);C38.iC();C39.setStyle(C26);C39.iC();this.setStyle(C19);}});},{rp:["PRIM_THM","PRIM_VS.SolidBrush","PRIM_VS.LinearBrush","PRIM_VS.BrushColors","PRIM_VS.BrushColor","PRIM_VS.ImageBrush","PRIM_VS.Style","PRIM_THM.DrawStyle"]});