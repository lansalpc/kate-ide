﻿LANSA.addComponent({id:"VF_UI038O",ot:"rp",tp:"Reusable Part",de:"\OC=Pagination Control",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,
{an:"PRIM_PANL",fd:Fd,mt:{uInitialize:{},uTerminate:{},SetUpPageButton:{ps:{"InLabel":{pt:"i"},"Caption":{pt:"i"},"IsCurrentPage":{pt:"i"}}},uDisplay:{ps:{"FirstItem":{pt:"i"},"FirstItemCaption":{pt:"i"},"LastItem":{pt:"i"},"LastItemCaption":{pt:"i"},"TotalItems":{pt:"i"},"GenericItemCaption":{pt:"i"},"PageSize":{pt:"i"},"CurrentPage":{pt:"i"},"TotalPages":{pt:"i"}}}},ev:{ShowFirst:{},ShowLast:{},ShowNext:{},ShowPrevious:{},ShowPage:{ps:{"Number":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UI038O",Fd);
var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cR("ATTACHLAYOUT_MAIN","PRIM_ATLM");var C2=this.cR("ATTACHITEM_BOTTOM_PANEL","PRIM_ATLI");var C3=this.cR("ATTACHITEMTOP_LABEL","PRIM_ATLI");var C4=this.cR("ATTACHLAYOUT_BOTTOMPANEL","PRIM_ATLM");var C5=this.cR("ATTACHITEM1","PRIM_ATLI");var C6=this.cR("ATTACHITEM2","PRIM_ATLI");var C7=this.cR("ATTACHITEM3","PRIM_ATLI");var C8=this.cR("ATTACHITEM4","PRIM_ATLI");var C9=this.cR("ATTACHITEM5","PRIM_ATLI");var C10=this.cR("ATTACHITEM6","PRIM_ATLI");var C11=this.cR("ATTACHITEM7","PRIM_ATLI");
var C12=this.cR("ATTACHITEM8","PRIM_ATLI");var C13=this.cR("ATTACHITEM9","PRIM_ATLI");var C14=this.cR("ATTACHITEM10","PRIM_ATLI");var C15=this.cR("ATTACHITEM11","PRIM_ATLI");var C16=this.cR("ATTACHITEM12","PRIM_ATLI");var C17=this.cR("ATTACHITEM12A","PRIM_ATLI");var C18=this.cR("ATTACHITEM12B","PRIM_ATLI");var C19=this.cR("ATTACHITEM12C","PRIM_ATLI");var C20=this.cR("TOP_LABEL","PRIM_LABL");var C21=this.cR("BOTTOM_PANEL","PRIM_PANL");var C22=this.cR("PREVIOUS","PRIM_LABL");var C23=this.cR("NEXT","PRIM_LABL");
var C24=this.cR("PAGEITEM1","PRIM_LABL");var C25=this.cR("PAGEITEM2","PRIM_LABL");var C26=this.cR("PAGEITEM3","PRIM_LABL");var C27=this.cR("PAGEITEM4","PRIM_LABL");var C28=this.cR("PAGEITEM5","PRIM_LABL");var C29=this.cR("PAGEITEM6","PRIM_LABL");var C30=this.cR("PAGEITEM7","PRIM_LABL");var C31=this.cR("PAGEITEM8","PRIM_LABL");var C32=this.cR("PAGEITEM9","PRIM_LABL");var C33=this.cR("PAGEITEM10","PRIM_LABL");var C34=this.cR("ANDSOON","PRIM_LABL");var C35=this.cR("FIRST","PRIM_LABL");var C36=this.cR("LAST","PRIM_LABL");
var C37=this.cR("LOGICALPAGES","PRIM_ACOL");var C38=this.cR("BOTTOMLINE","PRIM_VS","Style");var C39=this.cR("BOLDANDBORDERED","PRIM_VS","Style");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.setManage(C21);C2.setParent(C1);C2.setAttachment("CENTER");C2.setMarginLeft(4);C2.setMarginRight(4);C2.iC();C3.setManage(C20);C3.setParent(C1);C3.setAttachment("TOP");C3.setMarginLeft(4);C3.setMarginRight(4);C3.iC();C4.iC();C5.setManage(C23);C5.setParent(C4);C5.setAttachment("RIGHT");C5.iC();C6.setManage(C24);
C6.setParent(C4);C6.setAttachment("RIGHT");C6.iC();C7.setManage(C33);C7.setParent(C4);C7.setAttachment("RIGHT");C7.iC();C8.setManage(C25);C8.setParent(C4);C8.setAttachment("RIGHT");C8.iC();C9.setManage(C26);C9.setParent(C4);C9.setAttachment("RIGHT");C9.iC();C10.setManage(C27);C10.setParent(C4);C10.setAttachment("RIGHT");C10.iC();C11.setManage(C28);C11.setParent(C4);C11.setAttachment("RIGHT");C11.iC();C12.setManage(C29);C12.setParent(C4);C12.setAttachment("RIGHT");C12.iC();C13.setManage(C30);C13.setParent(C4);
C13.setAttachment("RIGHT");C13.iC();C14.setManage(C31);C14.setParent(C4);C14.setAttachment("RIGHT");C14.iC();C15.setManage(C32);C15.setParent(C4);C15.setAttachment("RIGHT");C15.iC();C16.setManage(C22);C16.setParent(C4);C16.setAttachment("RIGHT");C16.iC();C17.setManage(C34);C17.setParent(C4);C17.setAttachment("RIGHT");C17.iC();C18.setManage(C35);C18.setParent(C4);C18.setAttachment("RIGHT");C18.iC();C19.setManage(C36);C19.setParent(C4);C19.setAttachment("RIGHT");C19.iC();C20.setParent(this);C20.setDisplayPosition(1);
C20.setTabPosition(1);C20.setTabStop(false);C20.setLeft(4);C20.setTop(0);C20.setWidth(713);C20.setHeight(25);C20.setAlignment("RIGHT");C20.setVerticalAlignment("CENTER");C20.setCaption("nn - nnn of nnn");C20.setStyle(C38);C20.iC();C21.setParent(this);C21.setDisplayPosition(2);C21.setTabPosition(2);C21.setLeft(4);C21.setTop(25);C21.setWidth(713);C21.setLayoutManager(C4);C21.setHeight(25);C21.iC();C22.setTabStop(false);C22.setParent(C21);C22.setDisplayPosition(2);C22.setTabPosition(4);C22.setCaption("Previous");
C22.setLeft(276);C22.setTop(0);C22.setHeight(25);C22.setAlignment("CENTER");C22.setVerticalAlignment("CENTER");C22.setThemeDrawStyle("LISTITEM");C22.setWidth(54);C22.iC();C23.setTabStop(false);C23.setParent(C21);C23.setDisplayPosition(14);C23.setTabPosition(2);C23.setCaption("Next");C23.setTop(0);C23.setLeft(605);C23.setHeight(25);C23.setAlignment("CENTER");C23.setVerticalAlignment("CENTER");C23.setThemeDrawStyle("LISTITEM");C23.setWidth(54);C23.iC();C24.setParent(C21);C24.setDisplayPosition(3);C24.setTabPosition(15);
C24.setTabStop(false);C24.setCaption("111");C24.setLeft(330);C24.setTop(0);C24.setAlignment("CENTER");C24.setVerticalAlignment("CENTER");C24.setHeight(25);C24.setWidth(25);C24.setThemeDrawStyle("LISTITEM");C24.iC();C25.setParent(C21);C25.setDisplayPosition(4);C25.setTabPosition(14);C25.setTabStop(false);C25.setCaption("222");C25.setLeft(355);C25.setTop(0);C25.setHeight(25);C25.setAlignment("CENTER");C25.setVerticalAlignment("CENTER");C25.setWidth(25);C25.setThemeDrawStyle("LISTITEM");C25.iC();C26.setParent(C21);
C26.setDisplayPosition(5);C26.setTabPosition(13);C26.setTabStop(false);C26.setCaption("333");C26.setLeft(380);C26.setTop(0);C26.setHeight(25);C26.setAlignment("CENTER");C26.setVerticalAlignment("CENTER");C26.setWidth(25);C26.setThemeDrawStyle("LISTITEM");C26.iC();C27.setParent(C21);C27.setDisplayPosition(6);C27.setTabPosition(12);C27.setTabStop(false);C27.setCaption("444");C27.setLeft(405);C27.setTop(0);C27.setHeight(25);C27.setAlignment("CENTER");C27.setVerticalAlignment("CENTER");C27.setWidth(25);
C27.iC();C28.setParent(C21);C28.setDisplayPosition(7);C28.setTabPosition(11);C28.setTabStop(false);C28.setCaption("555");C28.setLeft(430);C28.setTop(0);C28.setHeight(25);C28.setAlignment("CENTER");C28.setVerticalAlignment("CENTER");C28.setWidth(25);C28.setThemeDrawStyle("LISTITEM");C28.iC();C29.setParent(C21);C29.setDisplayPosition(8);C29.setTabPosition(10);C29.setTabStop(false);C29.setCaption("666");C29.setLeft(455);C29.setTop(0);C29.setHeight(25);C29.setAlignment("CENTER");C29.setVerticalAlignment("CENTER");
C29.setWidth(25);C29.setThemeDrawStyle("LISTITEM");C29.iC();C30.setParent(C21);C30.setDisplayPosition(9);C30.setTabPosition(9);C30.setTabStop(false);C30.setCaption("777");C30.setLeft(480);C30.setTop(0);C30.setHeight(25);C30.setAlignment("CENTER");C30.setVerticalAlignment("CENTER");C30.setWidth(25);C30.setThemeDrawStyle("LISTITEM");C30.iC();C31.setParent(C21);C31.setDisplayPosition(10);C31.setTabPosition(8);C31.setTabStop(false);C31.setCaption("888");C31.setLeft(505);C31.setTop(0);C31.setHeight(25);
C31.setAlignment("CENTER");C31.setVerticalAlignment("CENTER");C31.setWidth(25);C31.setThemeDrawStyle("LISTITEM");C31.iC();C32.setParent(C21);C32.setDisplayPosition(12);C32.setTabPosition(7);C32.setTabStop(false);C32.setCaption("999");C32.setTop(0);C32.setHeight(25);C32.setLeft(555);C32.setAlignment("CENTER");C32.setVerticalAlignment("CENTER");C32.setWidth(25);C32.setThemeDrawStyle("LISTITEM");C32.iC();C33.setParent(C21);C33.setDisplayPosition(13);C33.setTabPosition(6);C33.setTabStop(false);C33.setCaption("1010");
C33.setTop(0);C33.setLeft(580);C33.setHeight(25);C33.setAlignment("CENTER");C33.setVerticalAlignment("CENTER");C33.setWidth(25);C33.setThemeDrawStyle("LISTITEM");C33.iC();C34.setParent(C21);C34.setDisplayPosition(11);C34.setTabPosition(5);C34.setTabStop(false);C34.setCaption("...");C34.setTop(0);C34.setLeft(530);C34.setHeight(25);C34.setAlignment("CENTER");C34.setVerticalAlignment("CENTER");C34.setWidth(25);C34.setThemeDrawStyle("LISTITEM");C34.iC();C35.setTabStop(false);C35.setParent(C21);C35.setDisplayPosition(1);
C35.setTabPosition(3);C35.setCaption("First");C35.setLeft(222);C35.setTop(0);C35.setHeight(25);C35.setAlignment("CENTER");C35.setVerticalAlignment("CENTER");C35.setThemeDrawStyle("LISTITEM");C35.setWidth(54);C35.iC();C36.setTabStop(false);C36.setParent(C21);C36.setDisplayPosition(15);C36.setTabPosition(1);C36.setCaption("Last");C36.setTop(0);C36.setLeft(659);C36.setHeight(25);C36.setAlignment("CENTER");C36.setVerticalAlignment("CENTER");C36.setThemeDrawStyle("LISTITEM");C36.setWidth(54);C36.iC();
C37.setCollects("PRIM_LABL");C37.iC();C38.setBorderBottom(1);C38.iC();C39.setBold(true);C39.setBorderLeft(1);C39.setBorderRight(1);C39.iC();C22.aH("CLICK",this,e1);C23.aH("CLICK",this,e2);C35.aH("CLICK",this,e4);C36.aH("CLICK",this,e3);C37.aH("CLICK",this,e5);this.setDisplayPosition(1);this.setTabPosition(1);this.setLayoutManager(C1);this.setLeft(0);this.setTop(0);this.setWidth(721);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",95);r.ln=95;{r.ln=97;m.NEXT.set(l.cat(m.USYSTEM.ref.getUMTXTVALUES("NEXT1"),l.n.AsUnicodeString(187)));
r.ln=99;m.PREVIOUS.set(l.add(l.n.AsUnicodeString(171),m.USYSTEM.ref.getUMTXTVALUES("PREVIOUS1")));r.ln=101;m.FIRST.set(m.USYSTEM.ref.getUMTXTVALUES("FIRST"));r.ln=103;m.LAST.set(m.USYSTEM.ref.getUMTXTVALUES("LAST"));r.ln=105;m.LOGICALPAGES.mthINSERT(m.PAGEITEM1);r.ln=106;m.LOGICALPAGES.mthINSERT(m.PAGEITEM2);r.ln=107;m.LOGICALPAGES.mthINSERT(m.PAGEITEM3);r.ln=108;m.LOGICALPAGES.mthINSERT(m.PAGEITEM4);r.ln=109;m.LOGICALPAGES.mthINSERT(m.PAGEITEM5);r.ln=110;m.LOGICALPAGES.mthINSERT(m.PAGEITEM6);r.ln=111;
m.LOGICALPAGES.mthINSERT(m.PAGEITEM7);r.ln=112;m.LOGICALPAGES.mthINSERT(m.PAGEITEM8);r.ln=113;m.LOGICALPAGES.mthINSERT(m.PAGEITEM9);r.ln=114;m.LOGICALPAGES.mthINSERT(m.PAGEITEM10);r.ln=116;for(var l1=m.LOGICALPAGES.cI();l1.step();){l1.item().setWidth(30);}r.ln=118;m.BOTTOMLINE.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());r.ln=119;m.BOLDANDBORDERED.setBorderBrush(m.USYSTEM.ref.getCURRENTTHEME().getLIGHTBORDERBRUSH());}r.ln=121;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",124);
r.ln=124;{r.ln=126;m.LOGICALPAGES.mthREMOVEALL();}r.ln=128;r.e();};cO.mthSETUPPAGEBUTTON=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"SetUpPageButton",132);var P0=r.cPD("INLABEL");var P1=r.cP("CAPTION","PRIM_DC","UnicodeString");var P2=r.cP("ISCURRENTPAGE","PRIM_BOLN");P0=p0;P1.set(p1);P2.set(p2);r.ln=132;{r.ln=137;P0.setEnabled(true);P0.setCaption(P1.get());P0.setComponentTag(P1.get());P0.setVisible(true);r.ln=139;if(l.tB(P2.get())){r.ln=140;P0.getStyles().mthADD(m.BOLDANDBORDERED);}else{r.ln=142;
P0.getStyles().mthREMOVE(m.BOLDANDBORDERED);}}r.ln=145;r.e();};cO.mthUDISPLAY=function(p0,p1,p2,p3,p4,p5,p6,p7,p8){var m=this.REF,r=l.mR(this,cO,"uDisplay",148);var P0=r.cPF("FIRSTITEM",Fd.F1.Dc);var P1=r.cP("FIRSTITEMCAPTION","PRIM_DC","UnicodeString");var P2=r.cPF("LASTITEM",Fd.F1.Dc);var P3=r.cP("LASTITEMCAPTION","PRIM_DC","UnicodeString");var P4=r.cPF("TOTALITEMS",Fd.F1.Dc);var P5=r.cP("GENERICITEMCAPTION","PRIM_DC","UnicodeString");var P6=r.cPF("PAGESIZE",Fd.F1.Dc);var P7=r.cPF("CURRENTPAGE",Fd.F1.Dc);
var P8=r.cPF("TOTALPAGES",Fd.F1.Dc);P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);P5.set(p5);P6.set(p6);P7.set(p7);P8.set(p8);var C0=r.cF("LASTPAGE",Fd.F1.Dc);var C1=r.cF("PAGEINDEX",Fd.F1.Dc);var C2=r.cF("COLLECTIONINDEX",Fd.F1.Dc);C0.iC();C1.iC();C2.iC();r.ln=148;{r.ln=163;if(l.n.le(P4.get(),0)){r.ln=165;m.TOP_LABEL.setVisible(false);m.BOTTOM_PANEL.setVisible(false);}else{r.ln=169;m.TOP_LABEL.setVisible(true);m.BOTTOM_PANEL.setVisible(true);r.ln=173;m.TOP_LABEL.set(l.s.Substitute(m.USYSTEM.ref.getUMTXTVALUES("PAGINATION"),l.n.AsString(P7.get()),l.n.AsString(P0.get()),P1.get(),l.n.AsString(P2.get()),P3.get(),l.n.AsString(P4.get()),P5.get()));
r.ln=175;m.FIRST.setEnabled(l.n.ne(P7.get(),1));r.ln=177;m.LAST.setEnabled(l.n.ne(P7.get(),P8.get()));r.ln=179;m.NEXT.setEnabled(l.n.lt(P7.get(),P8.get()));r.ln=181;m.PREVIOUS.setEnabled(l.n.gt(P7.get(),1));r.ln=183;for(var l1=m.LOGICALPAGES.cI();l1.step();){l1.item().setVisible(false)};r.ln=185;if(l.n.ge(l.add(P7.get(),9),P8.get())){r.ln=187;m.ANDSOON.setVisible(false);r.ln=189;C1.set(l.sub(P8.get(),9));r.ln=191;if(l.n.lt(C1.get(),1)){r.ln=192;C1.set(1);}r.ln=195;for(var i1=1,s1=1,t1=10;C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1)
{r.ln=196;this.mthSETUPPAGEBUTTON(m.LOGICALPAGES.get(C2.get()),l.n.AsString(C1.get()),l.n.eq(C1.get(),P7.get()));r.ln=197;C1.set(l.add(C1.get(),1));r.ln=198;if(l.n.gt(C1.get(),P8.get())){break;}}}else{r.ln=203;m.ANDSOON.setVisible(true);r.ln=205;if(l.n.le(P7.get(),2)){r.ln=206;C1.set(1);}else{r.ln=208;C1.set(l.sub(P7.get(),2));}r.ln=211;for(var i1=1,s1=1,t1=8;C2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=212;this.mthSETUPPAGEBUTTON(m.LOGICALPAGES.get(C2.get()),l.n.AsString(C1.get()),l.n.eq(C1.get(),P7.get()));
r.ln=213;C1.set(l.add(C1.get(),1));}r.ln=216;this.mthSETUPPAGEBUTTON(m.LOGICALPAGES.get(9),l.n.AsString(l.sub(P8.get(),1)),l.n.eq(C1.get(),P7.get()));r.ln=218;this.mthSETUPPAGEBUTTON(m.LOGICALPAGES.get(10),l.n.AsString(P8.get()),l.n.eq(C1.get(),P7.get()));}}}r.ln=225;r.e();};function e1(sender,Ps){var r=l.eR(this,cO,"#Previous.Click",228);r.ln=228;{r.ln=229;this.fE("SHOWPREVIOUS");}r.ln=230;r.e();};function e2(sender,Ps){var r=l.eR(this,cO,"#Next.Click",232);r.ln=232;{r.ln=233;this.fE("SHOWNEXT");
}r.ln=234;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Last.Click",236);r.ln=236;{r.ln=237;this.fE("SHOWLAST");}r.ln=238;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#First.Click",240);r.ln=240;{r.ln=241;this.fE("SHOWFIRST");}r.ln=242;r.e();};function e5(SENDER,Ps){var r=l.eR(this,cO,"#LogicalPages<>.Click",245);r.ln=245;{r.ln=247;{var eP=l.ePs();eP.cF("NUMBER",Fd.F1.Dc);eP.r("NUMBER").set(l.s.AsNumber(SENDER.getComponentTag()));this.fE("SHOWPAGE",eP);eP.e();}}r.ln=249;r.e();};{Fd.F1.Dc=function()
{this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rc:["VF_SY001O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_ACOL","PRIM_VS.Style","PRIM_FLD"]});