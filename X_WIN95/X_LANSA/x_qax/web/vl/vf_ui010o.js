﻿LANSA.addComponent({id:"VF_UI010O",ot:"rp",tp:"Reusable Part",de:"\OC=Minimized Business Object Bar",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"Automatic Tiling","FRA":"Automatic Tiling","JPN":"Automatic Tiling"}[cL];var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"VF_ELSYMN",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]},F3:{nm:"VF_ELSTAT",ft:"A",ln:1,dc:0,lb:"Standard Char 1",h1:"Standard",h2:"Char",h3:"1",de:"Standard Char 1 State Flag",dv:"",ia:["FE"]},F4:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],
h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{NominatedWidthorHeight:{da:"r"},IsAutoTilingOn:{da:"na"},FullScreenTitle:{da:"na"}},mt:{AdjustIconsandLayout:{ps:{"MainPanelItemCount":{pt:"i"}}},uInitialize:{ps:{"UseWidthorHeight":{pt:"i"},"UseAssociatedVF_FP002O":{pt:"i"}}},uTerminate:{},RemoveVisualizedasIconObject:{ps:{"AggregatingReference":{pt:"i"},"AssociatedReference":
{pt:"i"}}},ResetCurrentHint:{ps:{"AggregatingReference":{pt:"i"}}},SetHint:{ps:{"AggregatingReference":{pt:"i"},"AssociatedReference":{pt:"i"},"To":{pt:"i"}}},AddObjectVisualizedasIcon:{ps:{"UseImageName":{pt:"i"},"UseImageSource":{pt:"i"},"Hint":{pt:"i"},"UseBackGroundColor":{pt:"i"},"AggregatingReference":{pt:"i"},"AssociatedReference":{pt:"i"}}},AddExternallyManagedItem:{ps:{"Control":{pt:"i"},"AttachTo":{pt:"i"}}},RestoreAll:{ps:{"ForAggregatingReference":{pt:"i"}}},CheckCurrentImageSizing:{ps:
{"AggregatingReference":{pt:"i"}}},Dock:{ps:{"To":{pt:"i"}}}},ev:{OtherObjectSelected:{ps:{"Reference":{pt:"i"}}},MinimizeRequested:{ps:{"Reference":{pt:"i"}}},RestoreRequested:{ps:{"Reference":{pt:"i"}}},ArrangeVerticallyRequested:{},ArrangeHorizontallyRequested:{},ArrangeAsColumns:{},ArrangeAsRows:{},RestoreAllRequested:{},ArrangeAsTiles:{},AutoTilingChanged:{},FullScreenGoFowardRequested:{},FullScreenGoBackRequested:{},FullScreenCloseRequested:{}},co:function(){cO.aN.call(this);this.aF("VF_UI010O",Fd);
var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cR("MAINATTACHMENTMANAGER","PRIM_ATLM");var C2=this.cR("SETTINGATTACHMENTITEM","PRIM_ATLI");var C3=this.cR("AUTOTILECHECKBOXATTACHITEM","PRIM_ATLI");var C4=this.cR("MENUATTACHMENTITEM","PRIM_ATLI");var C5=this.cR("GOBACKATTACHMENTITEM","PRIM_ATLI");var C6=this.cR("GOFORWARDATTACHMENTITEM","PRIM_ATLI");var C7=this.cR("CLOSEATTACHMENTITEM","PRIM_ATLI");var C8=this.cR("FULLTITLEATTACHMENTITEM","PRIM_ATLI");var C9=this.cR("SETTINGS","VF_UI005O");var C10=this.cR("MAINMENU","VF_UI005O");
var C11=this.cR("GOBACK","VF_UI005O");var C12=this.cR("GOFORWARD","VF_UI005O");var C13=this.cR("CLOSE","VF_UI005O");var C14=this.cR("FULLSCREENTITLE","PRIM_LABL");var C15=this.cR("SETTINGSPOPUPMENU","VF_UI008O");var C16=this.cR("AUTOTILECHECKBOX","PRIM_CKBX");var C17=this.cR("COLLECTVF_UI032OIMAGES","PRIM_DCOL");var C18=this.cR("COLLECTOTHERATTACHMENTS","PRIM_ACOL");var C19=this.cF("NOMINATEDWIDTHORHEIGHT",Fd.F1.Dc);this.cD("ASSOCIATEDVF_FP002O");var C21=this.cR("CARRIAGERETURN","PRIM_ALPH");if((C0!=null)&&(C0.iI()==false))
{C0.iC();}C1.iC();C2.setManage(C9);C2.setParent(C1);C2.setAttachment("RIGHT");C2.setMarginLeft(6);C2.iC();C3.setManage(C16);C3.setParent(C1);C3.setAttachment("RIGHT");C3.iC();C4.setManage(C10);C4.setParent(C1);C4.setAttachment("LEFT");C4.setMarginRight(6);C4.iC();C5.setParent(C1);C5.setAttachment("RIGHT");C5.setMarginLeft(6);C5.setManage(C11);C5.iC();C6.setParent(C1);C6.setAttachment("RIGHT");C6.setMarginLeft(6);C6.setManage(C12);C6.iC();C7.setParent(C1);C7.setAttachment("RIGHT");C7.setMarginLeft(6);
C7.setManage(C13);C7.iC();C8.setParent(C1);C8.setAttachment("CENTER");C8.setMarginLeft(6);C8.setMarginRight(6);C8.setManage(C14);C8.iC();C9.setParent(this);C9.setLeft(150);C9.setHeight(32);C9.setDisplayPosition(2);C9.setTabPosition(4);C9.iC();C10.setParent(this);C10.setHeight(32);C10.setDisplayPosition(7);C10.setTabPosition(6);C10.iC();C11.setParent(this);C11.setHeight(32);C11.setDisplayPosition(3);C11.setLeft(172);C11.setTabPosition(2);C11.iC();C12.setParent(this);C12.setHeight(32);C12.setDisplayPosition(4);
C12.setLeft(194);C12.setTabPosition(3);C12.iC();C13.setParent(this);C13.setHeight(32);C13.setDisplayPosition(5);C13.setLeft(216);C13.setWidth(284);C13.iC();C14.setParent(this);C14.setHeight(32);C14.setDisplayPosition(6);C14.setLeft(28);C14.setWidth(0);C14.setTabPosition(7);C14.setTabStop(false);C14.setTop(0);C14.setAlignment("CENTER");C14.setVerticalAlignment("CENTER");C14.iC();C15.iC();C16.setParent(this);C16.setDisplayPosition(1);C16.setTabPosition(5);C16.setHeight(32);C16.setLeft(23);C16.setTop(0);
C16.setCaption(m1);C16.setWidth(121);C16.iC();C17.setCollects("VF_UI032O");C17.setKeyedBy("PRIM_OBJT");C17.iC();C18.setCollects("PRIM_ATLI");C18.iC();C19.aD();C19.iC();C21.iC();C0.aH("CURRENTTHEMEALTERED",this,e1);C9.aH("WASCLICKED",this,e3);C10.aH("WASCLICKED",this,e5);C11.aH("WASCLICKED",this,e6);C12.aH("WASCLICKED",this,e7);C13.aH("WASCLICKED",this,e8);C15.aH("ITEMSELECTED",this,e4);C16.aH("CLICK",this,e9);C17.aH("WASCLICKED",this,e2);this.setDisplayPosition(1);this.setHeight(32);this.setLeft(0);
this.setTabPosition(1);this.setTop(0);this.setWidth(500);this.setLayoutManager(C1);}});cO.mthGET_ISAUTOTILINGON=function(){var m=this.REF,r=l.pR(this,cO,"Get_IsAutoTilingOn",79);var P0=r.cP("VALUE","PRIM_BOLN");r.ln=79;{r.ln=82;if(m.USYSTEM.ref.getINTABLETMODE()){r.ln=83;P0.set(false);}else{r.ln=85;P0.set(l.s.eq(m.AUTOTILECHECKBOX.getButtonState(),"CHECKED"));}}r.ln=88;return r.rV(P0.get());};cO.mthSET_ISAUTOTILINGON=function(p0){var m=this.REF,r=l.pR(this,cO,"Set_IsAutoTilingOn",91);var P0=r.cP("VALUE","PRIM_BOLN");
P0.set(p0);r.ln=91;{r.ln=95;if(l.tB(P0.get())){r.ln=96;m.AUTOTILECHECKBOX.setButtonState("CHECKED");}else{r.ln=98;m.AUTOTILECHECKBOX.setButtonState("UNCHECKED");}}r.ln=101;r.e();};cO.mthADJUSTICONSANDLAYOUT=function(p0){var m=this.REF,r=l.mR(this,cO,"AdjustIconsandLayout",104);var P0=r.cPF("MAINPANELITEMCOUNT",Fd.F1.Dc);P0.set(p0);r.ln=104;{r.ln=107;if(m.USYSTEM.ref.getINTABLETMODE()){r.ln=109;m.CLOSE.setVisible(l.n.gt(P0.get(),0));r.ln=111;m.GOBACK.setVisible(l.n.gt(P0.get(),1));m.GOFORWARD.setVisible(l.n.gt(P0.get(),1));
}else{r.ln=115;m.SETTINGS.setVisible(l.n.gt(P0.get(),0));m.AUTOTILECHECKBOX.setVisible(l.n.gt(P0.get(),0));}}r.ln=119;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Usystem.CurrentThemeAltered",123);r.ln=123;{r.ln=125;m.SETTINGS.setUSEREVERSELIGHTANDDARK(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());m.MAINMENU.setUSEREVERSELIGHTANDDARK(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());m.GOBACK.setUSEREVERSELIGHTANDDARK(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());m.GOFORWARD.setUSEREVERSELIGHTANDDARK(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());
m.CLOSE.setUSEREVERSELIGHTANDDARK(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());}r.ln=127;r.e();};cO.mthUINITIALIZE=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uInitialize",130);var P0=r.cPF("USEWIDTHORHEIGHT",Fd.F1.Dc);var P1=r.cPD("USEASSOCIATEDVF_FP002O");P0.set(p0);P1=p1;var C0=r.cR("REVERSELIGHTANDDARK","PRIM_BOLN");var C1=r.cD("C1");C0.iC();r.ln=130;{r.ln=138;C0.set(m.USYSTEM.ref.getCURRENTTHEME().getISDARKTHEME());r.ln=140;m.CARRIAGERETURN.set(l.n.AsUnicodeString(10));r.ln=142;this.srASSOCIATEDVF_FP002O(P1);
r.ln=144;m.NOMINATEDWIDTHORHEIGHT.set(P0.get());r.ln=146;this.setHeight(m.NOMINATEDWIDTHORHEIGHT.get());r.ln=148;if(m.USYSTEM.ref.getINTABLETMODE()){r.ln=150;m.SETTINGS.setVisible(false);m.AUTOTILECHECKBOX.setVisible(false);r.ln=152;m.FULLSCREENTITLE.setVisible(true);}else{r.ln=156;m.FULLSCREENTITLE.setVisible(false);r.ln=158;m.SETTINGS.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("SETTINGS"),"T",m.USYSTEM.ref.getUMTXTVALUES("SETTINGS"),u,C0.get(),u,u);r.ln=160;m.SETTINGSPOPUPMENU.mthUINITIALIZE(u);
r.ln=162;m.SETTINGSPOPUPMENU.mthADDMENUITEM(m.USYSTEM.ref.getUMTXTVALUES("RESTOREALL"),"RESTOREALL",m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("RESTORE"),"T",u,u);r.ln=164;C1=r.sR("C1",m.SETTINGSPOPUPMENU.mthADDMENUITEM(m.USYSTEM.ref.getUMTXTVALUES("ARRANGE_TILE"),"TILE",m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("ARRANGE"),"T",u,u));r.ln=166;C1=r.sR("C1",m.SETTINGSPOPUPMENU.mthADDMENUITEM(m.USYSTEM.ref.getUMTXTVALUES("ARRANGE_VERT"),"VERTICAL",m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("HEIGHT"),"T",u,u));
r.ln=168;C1=r.sR("C1",m.SETTINGSPOPUPMENU.mthADDMENUITEM(m.USYSTEM.ref.getUMTXTVALUES("ARRANGE_HORZ"),"HORIZONTAL",m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("WIDTH"),"T",u,u));r.ln=170;m.AUTOTILECHECKBOX.setCaption(m.USYSTEM.ref.getUMTXTVALUES("AUTO_TILE"));}r.ln=174;if((m.ASSOCIATEDVF_FP002O==null)){r.ln=175;m.MAINMENU.setVisible(false);}else{r.ln=177;m.MAINMENU.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("ARRANGE"),"T",m.USYSTEM.ref.getUMTXTVALUES("SELECTAPPL"),u,C0.get(),u,u);
}r.ln=180;if(m.USYSTEM.ref.getINTABLETMODE()){r.ln=182;m.GOBACK.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("LEFTCIRCLED"),"T",m.USYSTEM.ref.getUMTXTVALUES("GOBACK"),u,C0.get(),u,u);r.ln=184;m.GOFORWARD.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("RIGHTCIRCLED"),"T",m.USYSTEM.ref.getUMTXTVALUES("GOFORWARD"),u,C0.get(),u,u);r.ln=186;m.CLOSE.mthUINTIALIZEIMAGE(m.USYSTEM.ref.getCURRENTTHEME().mthGETIMAGENAME("CLOSE"),"T",m.USYSTEM.ref.getUMTXTVALUES("CLOSE"),u,C0.get(),u,u);
}r.ln=190;m.GOBACK.setVisible(false);m.GOFORWARD.setVisible(false);m.CLOSE.setVisible(false);m.SETTINGS.setVisible(false);m.AUTOTILECHECKBOX.setVisible(false);}r.ln=192;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",195);r.ln=195;{r.ln=197;this.srASSOCIATEDVF_FP002O(null);r.ln=198;this.setLayoutManager(null);r.ln=199;m.COLLECTOTHERATTACHMENTS.mthREMOVEALL();r.ln=201;{var l1=m.COLLECTVF_UI032OIMAGES.cI();while(l1.step()){var VF_UI032OITEM=r.sR("VF_UI032OITEM",l1.item());
r.ln=202;VF_UI032OITEM.setATTACHMENTITEM(null);r.ln=203;VF_UI032OITEM.getVF_UI033OITEMS().mthREMOVEALL();r.ln=204;}l1.end();r.dR("VF_UI032OITEM");}r.ln=206;m.COLLECTVF_UI032OIMAGES.mthREMOVEALL();}r.ln=208;r.e();};cO.mthREMOVEVISUALIZEDASICONOBJECT=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"RemoveVisualizedasIconObject",211);var P0=r.cPD("AGGREGATINGREFERENCE");var P1=r.cPD("ASSOCIATEDREFERENCE");P0=p0;P1=p1;var C0=r.cD("C0");r.ln=211;{r.ln=217;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P0));r.ln=219;
if((C0!=null)){r.ln=221;C0.getVF_UI033OITEMS().mthREMOVE(P1);r.ln=224;if(l.n.eq(C0.getVF_UI033OITEMS().getItemCount(),0)){r.ln=226;C0.setATTACHMENTITEM(null);r.ln=228;m.COLLECTVF_UI032OIMAGES.mthREMOVE(P0);}else{r.ln=232;this.mthRESETCURRENTHINT(P0);}}}r.ln=238;r.e();};cO.mthRESETCURRENTHINT=function(p0){var m=this.REF,r=l.mR(this,cO,"ResetCurrentHint",241);var P0=r.cPD("AGGREGATINGREFERENCE");P0=p0;var C0=r.cD("C0");var C1=r.cR("SUPERHINT","PRIM_DC","UnicodeString");var C2=r.cR("LEADINSTRING","PRIM_DC","UnicodeString");
C1.iC();C2.iC();r.ln=241;{r.ln=250;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P0));r.ln=252;if((C0!=null)){r.ln=254;C2.set(m.CARRIAGERETURN.get());r.ln=256;{var l1=C0.getVF_UI033OITEMS().cI();while(l1.step()){var VF_UI033OITEM=r.sR("VF_UI033OITEM",l1.item());r.ln=257;C1.set(l.add(C1.get(),l.cat(l.add(l.cat(C2.get(),"   "),VF_UI033OITEM.getHINT()),"   ")));r.ln=258;C2.set(l.cat(m.CARRIAGERETURN.get(),m.CARRIAGERETURN.get()));r.ln=259;}l1.end();r.dR("VF_UI033OITEM");}r.ln=261;C1.set(l.cat(C1.get(),l.cat(m.CARRIAGERETURN.get()," ")));
r.ln=263;C0.setUSEHINT(C1.get());}}r.ln=267;r.e();};cO.mthSETHINT=function(p0,p1,p2){var m=this.REF,r=l.mR(this,cO,"SetHint",270);var P0=r.cPD("AGGREGATINGREFERENCE");var P1=r.cPD("ASSOCIATEDREFERENCE");var P2=r.cP("TO","PRIM_DC","UnicodeString");P0=p0;P1=p1;P2.set(p2);var C0=r.cD("C0");var C1=r.cD("C1");r.ln=270;{r.ln=279;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P0));r.ln=281;if((C0!=null)){r.ln=283;C1=r.sR("C1",C0.getVF_UI033OITEMS().get(P1));r.ln=285;if((C1!=null)){r.ln=287;C1.setHINT(P2.get());
r.ln=289;this.mthRESETCURRENTHINT(P0);}}}r.ln=295;r.e();};cO.mthADDOBJECTVISUALIZEDASICON=function(p0,p1,p2,p3,p4,p5){var m=this.REF,r=l.mR(this,cO,"AddObjectVisualizedasIcon",298);var P0=r.cPF("USEIMAGENAME",Fd.F2.Dc);var P1=r.cPF("USEIMAGESOURCE",Fd.F3.Dc);var P2=r.cPD("HINT");var P3=r.cP("USEBACKGROUNDCOLOR","PRIM_ALPH");var P4=r.cPD("AGGREGATINGREFERENCE");var P5=r.cPD("ASSOCIATEDREFERENCE");P0.set(p0);P1.set(p1);P2=p2;P3.set(p3);P4=p4;P5=p5;var C0=r.cD("C0");var C1=r.cD("C1");var C2=r.cD("C2");
var C3=r.cR("SUPERHINT","PRIM_DC","UnicodeString");C3.iC();r.ln=298;{r.ln=314;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P4));r.ln=316;if((C0==null)){r.ln=318;C2=r.sR("C2",l.cAs("PRIM_ATLI"));r.ln=320;C0=r.sR("C0",l.cAs("VF_UI032O"));r.ln=322;m.COLLECTVF_UI032OIMAGES.mthINSERT(C0,P4);r.ln=324;C0.setParent(this);C0.setDisplayPosition(9999);C0.setATTACHMENTITEM(C2);r.ln=326;C2.setParent(m.MAINATTACHMENTMANAGER);C2.setManage(C0);C2.setAttachment("LEFT");C2.setMarginRight(6);C2.setMarginBottom(6);r.ln=328;
C0.mthUINTIALIZEIMAGE(P0.get(),P1.get(),"",u,l.s.ne(P3.get(),""),u,P3.get());}r.ln=333;C1=r.sR("C1",l.cC("VF_UI033O"));r.ln=335;C0.getVF_UI033OITEMS().mthINSERT(C1,P5);r.ln=337;this.mthSETHINT(P4,P5,P2.get());}r.ln=339;r.e();};cO.mthADDEXTERNALLYMANAGEDITEM=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"AddExternallyManagedItem",342);var P0=r.cPD("CONTROL");var P1=r.cP("ATTACHTO","PRIM_ALPH");P0=p0;P1.set(p1);var C0=r.cD("C0");r.ln=342;{r.ln=348;P0.setParent(this);r.ln=350;C0=r.sR("C0",l.cAs("PRIM_ATLI"));
r.ln=351;m.COLLECTOTHERATTACHMENTS.mthINSERT(C0);r.ln=353;C0.setParent(m.MAINATTACHMENTMANAGER);C0.setManage(P0);C0.setAttachment(P1.get());}r.ln=355;r.e();};function e2(SENDERVF_UI032OITEM,Ps){var m=this.REF,r=l.eR(this,cO,"#CollectVF_UI032OImages<>.wasClicked",359);var C0=r.cR("CURRENTLYMINIMIZED","PRIM_BOLN");var C1=r.cR("HASITEMLOGICALLYATFRONT","PRIM_BOLN");C0.iC();C1.iC();r.ln=359;{r.ln=364;if(m.USYSTEM.ref.getINTABLETMODE()){r.ln=366;{var l1=SENDERVF_UI032OITEM.getVF_UI033OITEMS().cI();while(l1.step())
{var VISIBLEIMAGESUBITEM=r.sR("VISIBLEIMAGESUBITEM",l1.item());var ASSOCIATEDREFERENCE=r.sR("ASSOCIATEDREFERENCE",l1.key());r.ln=367;{var eP=l.ePs();eP.cD("REFERENCE");eP.sR("REFERENCE",ASSOCIATEDREFERENCE);this.fE("RESTOREREQUESTED",eP);eP.e();}r.ln=368;break;r.ln=369;}l1.end();r.dR("VISIBLEIMAGESUBITEM");r.dR("ASSOCIATEDREFERENCE");}}else{r.ln=373;C0.set(l.n.ne(SENDERVF_UI032OITEM.getScaleHeight(),100));r.ln=376;if(l.tB(l.b.eq(C0.get(),false))){r.ln=377;{var l1=SENDERVF_UI032OITEM.getVF_UI033OITEMS().cI();
while(l1.step()){var VF_UI033OSUBITEM=r.sR("VF_UI033OSUBITEM",l1.item());var ASSOCIATEDVF_AC005O=r.sR("ASSOCIATEDVF_AC005O",l1.key());r.ln=378;if(l.Io(ASSOCIATEDVF_AC005O,"VF_AC005O")){r.ln=379;if(l.and(l.cast(ASSOCIATEDVF_AC005O,"VF_AC005O").getISATFRONT(),l.s.ne(l.cast(ASSOCIATEDVF_AC005O,"VF_AC005O").getCURRENTSTATE(),"MINIMUM"))){r.ln=380;C1.set(true);r.ln=381;break;}}r.ln=384;}l1.end();r.dR("VF_UI033OSUBITEM");r.dR("ASSOCIATEDVF_AC005O");}}r.ln=387;{var l1=SENDERVF_UI032OITEM.getVF_UI033OITEMS().cI();
while(l1.step()){var VISIBLEIMAGESUBITEM=r.sR("VISIBLEIMAGESUBITEM",l1.item());var ASSOCIATEDREFERENCE=r.sR("ASSOCIATEDREFERENCE",l1.key());r.ln=389;if(l.tB(l.or(C0.get(),l.b.eq(C1.get(),false)))){r.ln=390;{var eP=l.ePs();eP.cD("REFERENCE");eP.sR("REFERENCE",ASSOCIATEDREFERENCE);this.fE("RESTOREREQUESTED",eP);eP.e();}}else{r.ln=392;{var eP=l.ePs();eP.cD("REFERENCE");eP.sR("REFERENCE",ASSOCIATEDREFERENCE);this.fE("MINIMIZEREQUESTED",eP);eP.e();}}r.ln=395;}l1.end();r.dR("VISIBLEIMAGESUBITEM");r.dR("ASSOCIATEDREFERENCE");
}}}r.ln=399;r.e();};cO.mthRESTOREALL=function(p0){var m=this.REF,r=l.mR(this,cO,"RestoreAll",402);var P0=r.cPD("FORAGGREGATINGREFERENCE");P0=p0;var C0=r.cD("C0");r.ln=402;{r.ln=407;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P0));r.ln=409;if((C0!=null)){r.ln=411;{var l1=C0.getVF_UI033OITEMS().cI();while(l1.step()){var VISIBLEIMAGESUBITEM=r.sR("VISIBLEIMAGESUBITEM",l1.item());var ASSOCIATEDREFERENCE=r.sR("ASSOCIATEDREFERENCE",l1.key());r.ln=413;{var eP=l.ePs();eP.cD("REFERENCE");eP.sR("REFERENCE",ASSOCIATEDREFERENCE);
this.fE("RESTOREREQUESTED",eP);eP.e();}r.ln=415;}l1.end();r.dR("VISIBLEIMAGESUBITEM");r.dR("ASSOCIATEDREFERENCE");}}}r.ln=419;r.e();};cO.mthCHECKCURRENTIMAGESIZING=function(p0){var m=this.REF,r=l.mR(this,cO,"CheckCurrentImageSizing",427);var P0=r.cPD("AGGREGATINGREFERENCE");P0=p0;var C0=r.cD("C0");r.ln=427;{r.ln=432;C0=r.sR("C0",m.COLLECTVF_UI032OIMAGES.get(P0));r.ln=434;if((C0!=null)){r.ln=438;{var l1=C0.getVF_UI033OITEMS().cI();while(l1.step()){var VF_UI033OSUBITEM=r.sR("VF_UI033OSUBITEM",l1.item());
var ASSOCIATEDVF_AC005O=r.sR("ASSOCIATEDVF_AC005O",l1.key());r.ln=440;if(l.Io(ASSOCIATEDVF_AC005O,"VF_AC005O")){r.ln=441;if(l.s.ne(l.cast(ASSOCIATEDVF_AC005O,"VF_AC005O").getCURRENTSTATE(),"MINIMUM")){r.ln=443;C0.mthSCALE(100,100,u,u);l1.end();r.e();return;}}r.ln=449;}l1.end();r.dR("VF_UI033OSUBITEM");r.dR("ASSOCIATEDVF_AC005O");}r.ln=452;C0.mthSCALE(70,70,u,u);}}r.ln=456;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Settings.wasClicked",459);r.ln=459;{r.ln=461;m.SETTINGSPOPUPMENU.mthUSHOW();
}r.ln=463;r.e();};function e4(sender,Ps){var r=l.eR(this,cO,"#SettingsPopUpMenu.ItemSelected",467);var P0=Ps.r("EVENTNAME");r.ln=467;{r.ln=469;this.mthDOCK(P0.get());}r.ln=471;r.e();};function e5(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MainMenu.WasClicked",474);r.ln=474;{r.ln=476;m.USYSTEM.ref.mthSIGNALDISPLAYBUSINESSOBJECTSELECTIONMENU(m.ASSOCIATEDVF_FP002O,null);}r.ln=478;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#GoBack.WasClicked",482);r.ln=482;{r.ln=484;this.fE("FULLSCREENGOBACKREQUESTED");
}r.ln=486;r.e();};function e7(sender,Ps){var r=l.eR(this,cO,"#GoForward.WasClicked",490);r.ln=490;{r.ln=492;this.fE("FULLSCREENGOFOWARDREQUESTED");}r.ln=494;r.e();};function e8(sender,Ps){var r=l.eR(this,cO,"#Close.WasClicked",497);r.ln=497;{r.ln=499;this.fE("FULLSCREENCLOSEREQUESTED");}r.ln=501;r.e();};function e9(sender,Ps){var r=l.eR(this,cO,"#AutoTileCheckBox.Click",505);var P0=Ps.r("HANDLED");r.ln=505;{r.ln=507;this.fE("AUTOTILINGCHANGED");r.ln=509;P0.set(true);}r.ln=511;r.e();};cO.mthDOCK=function(p0)
{var r=l.mR(this,cO,"Dock",514);var P0=r.cP("TO","PRIM_ALPH");P0.set(p0);r.ln=514;{r.ln=517;{var v1=P0.get();if(r.ln=519,l.s.eq(v1,"TILE")){r.ln=520;this.fE("ARRANGEASTILES");}else if(r.ln=522,l.s.eq(v1,"VERTICAL")){r.ln=523;this.fE("ARRANGEVERTICALLYREQUESTED");}else if(r.ln=525,l.s.eq(v1,"HORIZONTAL")){r.ln=526;this.fE("ARRANGEHORIZONTALLYREQUESTED");}else if(r.ln=528,l.s.eq(v1,"ROWS")){r.ln=529;this.fE("ARRANGEASROWS");}else if(r.ln=531,l.s.eq(v1,"COLUMNS")){r.ln=532;this.fE("ARRANGEASCOLUMNS");
}else if(r.ln=534,l.s.eq(v1,"RESTOREALL")){r.ln=535;this.fE("RESTOREALLREQUESTED");}r.ln=537;}}r.ln=539;r.e();};cO.getNOMINATEDWIDTHORHEIGHT=function(){return this.REF.NOMINATEDWIDTHORHEIGHT.get();};cO.getISAUTOTILINGON=function(){return this.mthGET_ISAUTOTILINGON();};cO.setISAUTOTILINGON=function(v){this.mthSET_ISAUTOTILINGON(v);};cO.setFULLSCREENTITLE=function(v){this.REF.FULLSCREENTITLE.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}{Fd.F2.Dc=function()
{this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELSTAT"});}{Fd.F4.Dc=function(){this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srASSOCIATEDVF_FP002O=function(rn){this.sR("ASSOCIATEDVF_FP002O",rn);};},{rc:["VF_SY001O","VF_UI005O","VF_UI008O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_CKBX","PRIM_DCOL","PRIM_ACOL","PRIM_FLD","PRIM_ALPH"],
dc:["VF_FP002O","VF_UI032O","VF_UI033O"],dp:["PRIM_BOLN","PRIM_PPNL.MenuItem","PRIM_DC.UnicodeString","PRIM_ATLI","PRIM_ANIM"]});