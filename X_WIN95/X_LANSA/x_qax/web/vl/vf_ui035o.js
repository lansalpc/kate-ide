﻿LANSA.addComponent({id:"VF_UI035O",ot:"rp",tp:"Reusable Part",de:"\OC=Reorder Inst List Columns",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]
},F2:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{ID_By_Position:{da:"r"}},mt:{uInitialize:{ps:{"UseWidth":{pt:"i"}}},uTerminate:{},AddItem:{ps:{"uCaption":{pt:"i"},"uIdentifier":{pt:"i"},"uEnabled":
{pt:"i"}}},MoveHighlight:{ps:{"ToItem":{pt:"i"}}},GetAbsolutePosition:{ps:{"Of":{pt:"i"},"VerOffset":{pt:"o"},"HorOffset":{pt:"o"}}},uShow:{}},ev:{ItemMoved:{}},co:function(){cO.aN.call(this);this.aF("VF_UI035O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("POPUPMENU","PRIM_PPNL");var C3=this.cR("SORTEDITEMS","PRIM_ACOL");var C4=this.cR("SORTEDITEMSTOPPOSITIONS","PRIM_ACOL");var C5=this.cR("DIVIDERS","PRIM_ACOL");var C6=this.cR("ID_BY_POSITION","PRIM_ACOL");
var C7=this.cR("DIVIDERSTYLE","PRIM_VS","Style");var C8=this.cR("BORDERALLROUND","PRIM_VS","Style");var C9=this.cR("YELLOWBRUSH","PRIM_VS","SolidBrush");var C10=this.cR("BEINGDRAGGEDSTYLE","PRIM_VS","Style");var C11=this.cF("POPUP_WIDTH",Fd.F1.Dc);var C12=this.cF("POPUP_ITEMHEIGHT",Fd.F1.Dc);var C13=this.cF("POPUP_NEXTTOP",Fd.F1.Dc);this.cD("REMOVEBEINGDRAGGEDSTYLE");this.cD("DRAGGINGITEM");var C16=this.cR("DRAGGINGITEMORIGINALCAPTION","PRIM_DC","UnicodeString");var C17=this.cR("UNICODERIGHTARROW","PRIM_DC","UnicodeString");
var C18=this.cR("UNICODELEFTARROW","PRIM_DC","UnicodeString");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.setHeight(66);C2.setWidth(150);C2.iC();C3.setCollects("PRIM_LABL");C3.iC();C4.setCollects("STD_INT");C4.iC();C5.setCollects("PRIM_LABL");C5.iC();C6.setCollects("VF_ELIDN");C6.iC();C7.setBorderBottom(1);C7.iC();C8.setBorderTop(1);C8.setBorderBottom(1);C8.setBorderLeft(1);C8.setBorderRight(1);C8.iC();C9.setColor("255:255:165");C9.iC();C10.setBackgroundBrush(C9);
C10.setBold(true);C10.iC();C11.aD();C11.iC();C12.aD();C12.iC();C13.aD();C13.iC();C16.iC();C17.iC();C18.iC();C0.aH("CURRENTTHEMEALTERED",this,e5);C2.aH("CLOSING",this,e1);C2.aH("STARTDRAG",this,e2);C2.aH("ENDDRAG",this,e3);C2.aH("DRAGOVER",this,e4);}});cO.mthUINITIALIZE=function(p0){var m=this.REF,r=l.mR(this,cO,"uInitialize",48);var P0=r.cPF("USEWIDTH",Fd.F1.Dc);P0.set((p0===u)?(0):(p0));r.ln=48;{r.ln=51;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"Reorder Popup.uInitialize",u,u,true);r.ln=53;m.USYSTEM.ref.mthAPPLYAPPROPRIATEEFFECTS(m.POPUPMENU);
r.ln=55;if(l.n.gt(P0.get(),0)){r.ln=56;m.POPUPMENU.setWidth(P0.get());}r.ln=59;m.UNICODERIGHTARROW.set(l.n.AsUnicodeString(8680));r.ln=60;m.UNICODELEFTARROW.set(l.n.AsUnicodeString(8678));r.ln=62;m.POPUP_NEXTTOP.set(0);r.ln=63;m.POPUP_WIDTH.set(m.POPUPMENU.getWidth());r.ln=64;m.POPUP_ITEMHEIGHT.set(20);}r.ln=66;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",69);r.ln=69;{r.ln=71;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"Reorder Popup.uTerminate",u,u,true);r.ln=74;m.DIVIDERS.mthREMOVEALL();
r.ln=75;m.SORTEDITEMS.mthREMOVEALL();r.ln=76;m.SORTEDITEMSTOPPOSITIONS.mthREMOVEALL();r.ln=77;m.ID_BY_POSITION.mthREMOVEALL();r.ln=79;this.srREMOVEBEINGDRAGGEDSTYLE(null);r.ln=80;this.srDRAGGINGITEM(null);}r.ln=84;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PopUpMenu.Closing",87);r.ln=87;{r.ln=88;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"Reorder Popup.uClosing",u,u,true);r.ln=89;this.mthUTERMINATE();}r.ln=91;r.e();};cO.mthADDITEM=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"AddItem",94);
var P0=r.cP("UCAPTION","PRIM_DC","UnicodeString");var P1=r.cP("UIDENTIFIER","PRIM_ALPH");var P2=r.cP("UENABLED","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");var C3=r.cF("ITEMNUMBERTAG",Fd.F1.Dc);C3.iC();r.ln=94;{r.ln=105;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"Reorder Popup.AddItem",u,u,true);r.ln=108;C0=r.sR("C0",l.cC("PRIM_LABL"));r.ln=109;m.SORTEDITEMS.mthINSERT(C0);r.ln=110;C3.set(m.SORTEDITEMS.getItemCount());r.ln=113;if(l.n.gt(C3.get(),1))
{r.ln=115;C1=r.sR("C1",l.cC("PRIM_LABL"));r.ln=116;m.DIVIDERS.mthINSERT(C1);r.ln=118;C1.setParent(m.POPUPMENU);C1.setTop(m.POPUP_NEXTTOP.get());C1.setLeft(0);C1.setHeight(1);C1.setWidth(m.POPUP_WIDTH.get());C1.setStyle(m.DIVIDERSTYLE);r.ln=120;m.POPUP_NEXTTOP.set(l.add(m.POPUP_NEXTTOP.get(),1));}r.ln=124;C2=r.sR("C2",new Fd.F1.Dc());r.ln=125;C2.set(m.POPUP_NEXTTOP.get());r.ln=126;m.SORTEDITEMSTOPPOSITIONS.mthINSERT(C2);r.ln=129;C0.setParent(m.POPUPMENU);C0.setCaption(P0.get());C0.setDisplayPosition(C3.get());
C0.setTabPosition(C3.get());C0.setTabStop(false);C0.setTop(C2.get());C0.setLeft(2);C0.setHeight(m.POPUP_ITEMHEIGHT.get());C0.setWidth(l.sub(m.POPUP_WIDTH.get(),4));C0.setComponentTag(P1.get());C0.setDragStyle("AUTOMATIC");C0.setThemeDrawStyle("LISTITEM");C0.setVerticalAlignment("CENTER");C0.setAlignment("LEFT");C0.setEnabled(P2.get());r.ln=131;if(l.b.Not(P2.get())){r.ln=132;C0.setOpacity(50);}r.ln=135;m.POPUP_NEXTTOP.set(l.add(m.POPUP_NEXTTOP.get(),m.POPUP_ITEMHEIGHT.get()));r.ln=137;m.POPUPMENU.setWidth(m.POPUP_WIDTH.get());
m.POPUPMENU.setHeight(l.add(m.POPUP_NEXTTOP.get(),1));}r.ln=139;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PopUpMenu.StartDrag",146);var P0=Ps.r("SOURCE");var P1=Ps.r("CONTINUE");r.ln=146;{r.ln=148;this.srDRAGGINGITEM(l.cast(P0,"PRIM_LABL"));r.ln=150;m.DRAGGINGITEMORIGINALCAPTION.set(m.DRAGGINGITEM.getCaption());r.ln=152;m.DRAGGINGITEM.setCaption(l.add(l.cat(l.add(l.cat(m.UNICODERIGHTARROW.get()," "),m.DRAGGINGITEMORIGINALCAPTION.get())," "),m.UNICODELEFTARROW.get()));r.ln=154;
this.mthMOVEHIGHLIGHT(m.DRAGGINGITEM);r.ln=156;P1.set(true);}r.ln=158;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PopUpMenu.EndDrag",161);var P0=Ps.r("SOURCE");var C0=r.cD("C0");r.ln=161;{r.ln=164;this.mthMOVEHIGHLIGHT(null);r.ln=166;m.DRAGGINGITEM.setCaption(m.DRAGGINGITEMORIGINALCAPTION.get());r.ln=168;this.srDRAGGINGITEM(null);r.ln=170;m.ID_BY_POSITION.mthREMOVEALL();r.ln=172;{var l1=m.SORTEDITEMS.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var INDEX=r.sR("INDEX",l1.key());
r.ln=174;C0=r.sR("C0",new Fd.F2.Dc());r.ln=175;C0.set(ITEM.getComponentTag());r.ln=176;m.ID_BY_POSITION.mthINSERT(C0);r.ln=177;}l1.end();r.dR("ITEM");r.dR("INDEX");}r.ln=179;this.fE("ITEMMOVED");}r.ln=181;r.e();};cO.mthMOVEHIGHLIGHT=function(p0){var m=this.REF,r=l.mR(this,cO,"MoveHighlight",185);var P0=r.cPD("TOITEM");P0=p0;r.ln=185;{r.ln=188;if((m.REMOVEBEINGDRAGGEDSTYLE!=null)){r.ln=189;m.REMOVEBEINGDRAGGEDSTYLE.getStyles().mthREMOVE(m.BEINGDRAGGEDSTYLE);r.ln=190;m.REMOVEBEINGDRAGGEDSTYLE.setThemeDrawStyle("LISTITEM");
r.ln=191;this.srREMOVEBEINGDRAGGEDSTYLE(null);}r.ln=194;if((P0!=null)){r.ln=195;this.srREMOVEBEINGDRAGGEDSTYLE(P0);r.ln=196;m.REMOVEBEINGDRAGGEDSTYLE.getStyles().mthADD(m.BEINGDRAGGEDSTYLE);r.ln=197;m.REMOVEBEINGDRAGGEDSTYLE.setThemeDrawStyle("");}}r.ln=200;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#PopUpMenu.DragOver",203);var P0=Ps.r("HANDLED");var P1=Ps.r("DRAGSTATE");var P2=Ps.r("ACCEPTDROP");var C0=r.cD("C0");var C1=r.cF("DRAGGINGITEMINDEX",Fd.F1.Dc);var C2=r.cF("TARGETITEMINDEX",Fd.F1.Dc);
var C3=r.cD("C3");var C4=r.cF("MOUSEYPOS",Fd.F1.Dc);var C5=r.cF("POPUPABSOLUTETOP",Fd.F1.Dc);var C6=r.cF("POPUPABSOLUTELEFT",Fd.F1.Dc);var C7=r.cF("LABELABSOLUTETOP",Fd.F1.Dc);var C8=r.cF("LABELABSOLUTEBOTTOM",Fd.F1.Dc);C1.iC();C2.iC();C4.iC();C5.iC();C6.iC();C7.iC();C8.iC();r.ln=203;{r.ln=216;P0.set(true);r.ln=217;P2.set(true);r.ln=219;this.mthGETABSOLUTEPOSITION(m.POPUPMENU,C5,C6);r.ln=220;C4.set(l.MOUSE().getVerPosition());r.ln=222;{var l1=m.SORTEDITEMSTOPPOSITIONS.cI();while(l1.step()){var THISTOP=r.sR("THISTOP",l1.item());
var INDEX=r.sR("INDEX",l1.key());r.ln=224;C7.set(l.add(THISTOP.get(),C5.get()));r.ln=225;C8.set(l.add(C7.get(),m.POPUP_ITEMHEIGHT.get()));r.ln=227;if(l.and(l.n.ge(C4.get(),C7.get()),l.n.lt(C4.get(),C8.get()))){r.ln=228;C3=r.sR("C3",m.SORTEDITEMS.get(INDEX.get()));r.ln=229;C2.set(INDEX.get());r.ln=230;break;}r.ln=232;}l1.end();r.dR("THISTOP");r.dR("INDEX");}r.ln=234;if(l.and((C3!=null),(m.DRAGGINGITEM!==C3))){r.ln=236;{var l1=m.SORTEDITEMS.cI();while(l1.step()){var ITEM=r.sR("ITEM",l1.item());var INDEX=r.sR("INDEX",l1.key());
r.ln=237;if((ITEM===m.DRAGGINGITEM)){r.ln=238;C1.set(INDEX.get());}r.ln=240;}l1.end();r.dR("ITEM");r.dR("INDEX");}r.ln=242;m.SORTEDITEMS.set(C2.get(),m.DRAGGINGITEM);r.ln=243;m.DRAGGINGITEM.setTop(m.SORTEDITEMSTOPPOSITIONS.get(C2.get()).get());r.ln=245;m.SORTEDITEMS.set(C1.get(),C3);r.ln=246;C3.setTop(m.SORTEDITEMSTOPPOSITIONS.get(C1.get()).get());}}r.ln=250;r.e();};cO.mthGETABSOLUTEPOSITION=function(p0,p1,p2){var r=l.mR(this,cO,"GetAbsolutePosition",253);var P0=r.cPD("OF");var P1=r.cPF("VEROFFSET",Fd.F1.Dc);
var P2=r.cPF("HOROFFSET",Fd.F1.Dc);P0=p0;r.ln=253;{r.ln=258;P1.set(P0.getScreenTop());r.ln=259;P2.set(P0.getScreenLeft());p1.set(P1.get());p2.set(P2.get());}r.ln=261;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#USystem.CurrentThemeAltered",264);r.ln=264;{r.ln=266;m.USYSTEM.ref.mthAPPLYAPPROPRIATEEFFECTS(m.POPUPMENU);}r.ln=268;r.e();};cO.mthUSHOW=function(){var m=this.REF,r=l.mR(this,cO,"uShow",271);r.ln=271;{r.ln=272;m.USYSTEMCOMMON.ref.mthTRACEEVENT(this,u,"Reorder Popup.uShow",u,u,true);
r.ln=274;m.POPUPMENU.mthSHOWPOPUP(u,u,u,u,u);}r.ln=276;r.e();};cO.getID_BY_POSITION=function(){return this.REF.ID_BY_POSITION;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srREMOVEBEINGDRAGGEDSTYLE=function(rn){this.sR("REMOVEBEINGDRAGGEDSTYLE",rn);};cO.srDRAGGINGITEM=function(rn){this.sR("DRAGGINGITEM",rn);};},{rc:["VF_SY001O","VF_SY001X"],rp:["PRIM_OBJT","PRIM_PPNL","PRIM_ACOL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_FLD","PRIM_DC.UnicodeString"],
dp:["PRIM_LABL"]});