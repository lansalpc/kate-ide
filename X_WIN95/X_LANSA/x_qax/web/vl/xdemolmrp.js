﻿LANSA.addComponent({id:"XDEMOLMRP",nm:"xDemoLANSAMobileRecordPlayback",ot:"wp",tp:"Web Page",de:"LANSA Mobile Record & Playback",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("ximagerec.png");var rc2=l.cB("ximages_7.png");var rc3=l.cB("ximagepla.png");var Fd={F1:{nm:"DATETIMEX",ft:"DT",ln:26,dc:0,lb:{"ENG":"Date / time","FRA":"?","JPN":"?","LLL":"Date / time"}[cL],h1:{"ENG":"Date / time","FRA":"?","JPN":"?","LLL":"Date / time"}[cL],
h2:{"ENG":"-----------","FRA":"?","JPN":"?","LLL":"-----------"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Current date and time (RDMLX)","FRA":"?","JPN":"?","LLL":"Current date and time (RDMLX)"}[cL],dv:l.n.AsDateTime(l.eSV("*DATETIME"),"CCYYMMDDHHMMSS"),ia:["ASQN","FE","ISO","SUTC"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,rm:["dt"],mt:{RecordAndPlayback:{ps:{"control":{pt:"i"}}},EnableRecordPlay:{},FileName:{}},co:function(){cO.aN.call(this);this.aF("XDEMOLMRP",Fd);var C0=this.cR("RECORDPLAYBACKCONTROL","XDEMOREC");
var C1=this.cR("TABLELAYOUT1","PRIM_TBLO");var C2=this.cR("COLUMN1","PRIM_TBLO","Column");var C3=this.cR("COLUMN2","PRIM_TBLO","Column");var C4=this.cR("COLUMN3","PRIM_TBLO","Column");var C5=this.cR("ROW1","PRIM_TBLO","Row");var C6=this.cR("ROW2","PRIM_TBLO","Row");var C7=this.cR("ROW3","PRIM_TBLO","Row");var C8=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C9=this.cR("LAYOUTITEM2","PRIM_TBLO","Item");var C10=this.cR("LAYOUTITEM3","PRIM_TBLO","Item");var C11=this.cR("LAYOUTITEM4","PRIM_TBLO","Item");
var C12=this.cR("LAYOUTITEM5","PRIM_TBLO","Item");var C13=this.cR("RECORD","PRIM_PHBN");var C14=this.cR("STOP","PRIM_PHBN");var C15=this.cR("PLAY","PRIM_PHBN");var C16=this.cR("AUDIOFILE","PRIM_EDIT");var C17=this.cR("STATUS","PRIM_LABL");C0.iC();C1.iC();C2.setDisplayPosition(1);C2.setParent(C1);C2.setUnits("PIXELS");C2.setWidth(10);C2.iC();C3.setDisplayPosition(2);C3.setParent(C1);C3.iC();C4.setDisplayPosition(3);C4.setParent(C1);C4.setUnits("PIXELS");C4.setWidth(10);C4.iC();C5.setDisplayPosition(1);
C5.setParent(C1);C5.setUnits("PIXELS");C5.setHeight(10);C5.iC();C6.setDisplayPosition(2);C6.setParent(C1);C6.iC();C7.setDisplayPosition(3);C7.setParent(C1);C7.setUnits("PIXELS");C7.setHeight(10);C7.iC();C8.setColumn(C3);C8.setFlow("DOWN");C8.setManage(C13);C8.setParent(C1);C8.setRow(C6);C8.setSizing("FITTOWIDTH");C8.setMarginTop(8);C8.setAlignment("TOPLEFT");C8.iC();C9.setColumn(C3);C9.setFlow("DOWN");C9.setManage(C14);C9.setParent(C1);C9.setRow(C6);C9.setSizing("FITTOWIDTH");C9.setMarginTop(8);C9.setAlignment("TOPLEFT");
C9.iC();C10.setColumn(C3);C10.setFlow("DOWN");C10.setManage(C15);C10.setParent(C1);C10.setRow(C6);C10.setSizing("FITTOWIDTH");C10.setMarginTop(8);C10.setAlignment("TOPLEFT");C10.iC();C11.setAlignment("TOPLEFT");C11.setColumn(C3);C11.setFlow("DOWN");C11.setManage(C16);C11.setParent(C1);C11.setRow(C6);C11.setSizing("FITTOWIDTH");C11.setMarginTop(11);C11.iC();C12.setAlignment("BOTTOMCENTER");C12.setColumn(C3);C12.setFlow("DOWN");C12.setManage(C17);C12.setParent(C1);C12.setRow(C6);C12.setSizing("FITTOWIDTH");
C12.iC();C13.setCaption("Record");C13.setDisplayPosition(1);C13.setParent(this);C13.setTabPosition(1);C13.setTop(18);C13.setWidth(269);C13.setHeight(60);C13.setImage(rc1);C13.setImageHeight(25);C13.setImagePosition("ABOVECAPTION");C13.iC();C14.setCaption("Stop");C14.setDisplayPosition(2);C14.setParent(this);C14.setTabPosition(2);C14.setTop(86);C14.setWidth(269);C14.setHeight(60);C14.setImagePosition("ABOVECAPTION");C14.setImage(rc2);C14.setImageHeight(25);C14.iC();C15.setCaption("Play");C15.setDisplayPosition(3);
C15.setParent(this);C15.setTabPosition(3);C15.setTop(154);C15.setWidth(269);C15.setHeight(60);C15.setImagePosition("ABOVECAPTION");C15.setImageHeight(25);C15.setImage(rc3);C15.iC();C16.setDisplayPosition(4);C16.setParent(this);C16.setShowSelection(false);C16.setShowSelectionHilight(false);C16.setTabPosition(4);C16.setTop(225);C16.setWidth(269);C16.setDisplayOnly(true);C16.setHeight(34);C16.iC();C17.setDisplayPosition(5);C17.setEllipses("WORD");C17.setHeight(130);C17.setParent(this);C17.setTabPosition(5);
C17.setTabStop(false);C17.setTop(357);C17.setVerticalAlignment("CENTER");C17.setWidth(269);C17.setAlignment("CENTER");C17.iC();C0.aH("RECORDINGCOMPLETED",this,e4);C0.aH("PLAYBACKCOMPLETED",this,e5);C0.aH("FAILED",this,e6);C13.aH("CLICK",this,e1);C14.aH("CLICK",this,e2);C15.aH("CLICK",this,e3);this.setWidth(289);this.setHeight(497);this.setLayoutManager(C1);this.setTheme(l.gTh("XDEMOLMTH"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#Record.Click",31);r.ln=31;{r.ln=33;this.mthRECORDANDPLAYBACK("Recording");
}r.ln=35;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Stop.Click",37);r.ln=37;{r.ln=39;m.RECORDPLAYBACKCONTROL.mthSTOP();}r.ln=41;r.e();};function e3(sender,Ps){var r=l.eR(this,cO,"#Play.Click",43);r.ln=43;{r.ln=45;this.mthRECORDANDPLAYBACK("Playback");}r.ln=47;r.e();};function e4(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#RecordPlaybackControl.RecordingCompleted",49);var P0=Ps.r("AUDIOFILEOUTPUTPATH");r.ln=49;{r.ln=51;m.AUDIOFILE.set(P0.get());r.ln=53;this.mthENABLERECORDPLAY();
}r.ln=55;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#RecordPlaybackControl.PlaybackCompleted",57);r.ln=57;{r.ln=59;this.mthENABLERECORDPLAY();}r.ln=61;r.e();};function e6(sender,Ps){var r=l.eR(this,cO,"#RecordPlaybackControl.Failed",63);r.ln=63;{r.ln=65;l.WEB().mthALERT("Cannot access device recording and playback feature. Please verify this application is being run in LANSA Mobile.");}r.ln=67;r.e();};cO.mthRECORDANDPLAYBACK=function(p0){var m=this.REF,r=l.mR(this,cO,"RecordAndPlayback",73);
var P0=r.cP("CONTROL","PRIM_ALPH");P0.set(p0);r.ln=73;{r.ln=76;m.PLAY.setEnabled(false);m.RECORD.setEnabled(false);r.ln=78;m.STATUS.set(l.cat(P0.get()," in progres..."));r.ln=80;if(l.tB(l.s.eq(P0.get(),"Recording"))){r.ln=82;m.RECORDPLAYBACKCONTROL.mthRECORD(cO.mthFILENAME.call(this));}r.ln=86;if(l.tB(l.s.eq(P0.get(),"Playback"))){r.ln=88;m.RECORDPLAYBACKCONTROL.mthPLAYBACK(m.AUDIOFILE.get());}}r.ln=92;r.e();};cO.mthENABLERECORDPLAY=function(){var m=this.REF,r=l.mR(this,cO,"EnableRecordPlay",94);
r.ln=94;{r.ln=96;m.STATUS.set("");r.ln=98;m.RECORD.setEnabled(true);r.ln=100;if(l.s.ne(m.AUDIOFILE.get(),"")){r.ln=102;m.PLAY.setEnabled(true);}}r.ln=106;r.e();};cO.mthFILENAME=function(){var f=this.FLD.XDEMOLMRP,r=l.mR(this,cO,"FileName",108);var P0=r.cP("NAME","PRIM_ALPH");r.ln=108;{r.ln=111;P0.set(l.cat(l.cat("Aud_",l.s.ReplaceAll(l.s.ReplaceAll(l.dt.AsString(l.dt.Now(f.F1.get()))," ","_"),":","-")),".m4a"));}r.ln=113;return r.rV(P0.get());};},{rc:["XDEMOREC","XDEMOLMTH"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_PHBN","PRIM_EDIT","PRIM_LABL","PRIM_DTIM"]
});