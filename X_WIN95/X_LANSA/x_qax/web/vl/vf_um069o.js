﻿LANSA.addComponent({id:"VF_UM069O",ot:"rp",tp:"Reusable Part",de:"\OC=Resign on dialog",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var m1={"ENG":"User Name","FRA":"Nom d'utilisateur","JPN":"ﾕｰｻﾞｰ ﾌﾟﾛﾌｧｲﾙ"}[cL],m2={"ENG":"Password","FRA":"Mot de passe","JPN":"ﾊﾟｽﾜｰﾄﾞ"}[cL],m3={"ENG":"Log On","FRA":"Ouverture de session","JPN":"ﾛｸﾞｵﾝ"}[cL],m4={"ENG":"Cancel","FRA":"Annuler","JPN":"取り消し"}[cL];var Fd={F1:{nm:"VF_ELUSR2",ft:"A",ln:32,dc:0,lb:{"ENG":"User profile","FRA":"Utilisateur","JPN":"????? ???????"}[cL],
h1:{"ENG":"User","FRA":"Profil","JPN":"ﾕｰｻﾞｰ ﾌﾟﾛﾌｧｲﾙ"}[cL],h2:{"ENG":"Profile","FRA":"Utilisateur","JPN":""}[cL],h3:"",de:{"ENG":"User profile","FRA":"Profil utilisateur","JPN":"ﾕｰｻﾞｰ ﾌﾟﾛﾌｧｲﾙ"}[cL],dv:"",ia:["FE","LC"]},F2:{nm:"VF_ELPASW",ft:"A",ln:32,dc:0,lb:{"ENG":"Password","FRA":"Mot de passe","JPN":"ﾊﾟｽﾜｰﾄﾞ"}[cL],h1:{"ENG":"Password","FRA":"Mot de","JPN":"ﾊﾟｽﾜｰﾄﾞ"}[cL],h2:{"ENG":"","FRA":"Passe","JPN":""}[cL],h3:"",de:{"ENG":"Password","FRA":"Mot de passe","JPN":"ﾊﾟｽﾜｰﾄﾞ"}[cL],dv:"",ia:["FE","LC","ND"]
},F3:{nm:"VF_ELINDX",ft:"I",ln:4,dc:0,ec:"3",lb:"Standard Binary",h1:"Standard",h2:"Binary",h3:"Index",de:"Standard Binary Index Field",dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,pt:{Showing:{da:"rw"}},mt:{uInitialize:{},uTerminate:{},uShow:{ps:{"CenteronControl":{pt:"i"},"AttemptedRequests":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("VF_UM069O",Fd);var C0=this.cA("USYSTEM","VF_SY001O");var C1=this.cA("USYSTEMCOMMON","VF_SY001X");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");
var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("PANEL_LOGON","PRIM_PANL");var C5=this.cF("INPUTPLATFORMUPROFILE",Fd.F1.VISUALEDIT);var C6=this.cF("INPUTPLATFORMP",Fd.F2.VISUALEDIT);var C7=this.cR("SHOWMESSAGETEXT","VF_UI029O");var C8=this.cR("PLATFORMUPROFILETEXT","PRIM_LABL");var C9=this.cR("PASSORDTEXT","PRIM_LABL");var C10=this.cR("LOGONBUTTON","PRIM_PHBN");var C11=this.cR("CANCELBUTTON","PRIM_PHBN");var C12=this.cR("LABEL_FRAMEWORKCAPTION","PRIM_LABL");var C13=this.cR("SIMPLEFORMSTYLE","PRIM_VS","Style");
var C14=this.cR("TITLETEXTSTYLE","PRIM_VS","Style");var C15=this.cR("MESSAGETEXTSTYLE","PRIM_VS","Style");var C16=this.cR("POPOVERMANAGER","VF_UI021O");var C17=this.cR("BORDERBOTTOMONLY","PRIM_VS","Style");var C18=this.cR("SHOWING","PRIM_BOLN");if((C0!=null)&&(C0.iI()==false)){C0.iC();}if((C1!=null)&&(C1.iI()==false)){C1.iC();}C2.iC();C3.setManage(C4);C3.setParent(C2);C3.setAttachment("CENTER");C3.iC();C4.setDisplayPosition(1);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(1);C4.setTabStop(false);
C4.setTop(0);C4.setHeight(157);C4.setWidth(329);C4.iC();C5.setParent(C4);C5.setDisplayPosition(5);C5.setTabPosition(1);C5.setLeft(12);C5.setHeight(22);C5.setWidth(165);C5.setTop(44);C5.setLabelPosition("NONE");C5.setMarginLeft(0);C5.setEnabled(false);C5.setReadOnly(true);C5.setUsePicklist(false);C5.aD();C5.iC();C6.setParent(C4);C6.setDisplayPosition(7);C6.setTabPosition(2);C6.setLeft(12);C6.setTop(88);C6.setHeight(22);C6.setWidth(165);C6.setLabelPosition("NONE");C6.setMarginLeft(0);C6.setUsePicklist(false);
C6.aD();C6.iC();C7.setDisplayPosition(8);C7.setParent(C4);C7.setTabPosition(6);C7.setTop(125);C7.setWidth(313);C7.setStyle(C15);C7.setLeft(8);C7.iC();C8.setParent(C4);C8.setCaption(m1);C8.setDisplayPosition(3);C8.setTabPosition(5);C8.setTabStop(false);C8.setWidth(156);C8.setHeight(17);C8.setLeft(5);C8.setTop(27);C8.iC();C9.setParent(C4);C9.setDisplayPosition(6);C9.setTabPosition(7);C9.setTabStop(false);C9.setCaption(m2);C9.setWidth(156);C9.setHeight(18);C9.setTop(72);C9.setLeft(5);C9.iC();C10.setParent(C4);
C10.setDisplayPosition(4);C10.setTabPosition(3);C10.setCaption(m3);C10.setLeft(188);C10.setWidth(133);C10.setHeight(22);C10.setTop(44);C10.setButtonDefault(true);C10.iC();C11.setParent(C4);C11.setDisplayPosition(2);C11.setTabPosition(4);C11.setCaption(m4);C11.setTop(88);C11.setLeft(188);C11.setWidth(133);C11.setHeight(22);C11.setButtonCancel(true);C11.iC();C12.setCaption("Label1");C12.setDisplayPosition(1);C12.setEllipses("WORD");C12.setHeight(22);C12.setLeft(8);C12.setParent(C4);C12.setTabPosition(8);
C12.setTabStop(false);C12.setVerticalAlignment("CENTER");C12.setWidth(313);C12.setTop(2);C12.setStyle(C14);C12.setAlignment("CENTER");C12.iC();C13.setBorderBottom(1);C13.setBorderTop(1);C13.setBorderLeft(1);C13.setBorderRight(1);C13.setBorderColor("214:214:214");C13.setNormBackColor("235:235:235");C13.iC();C14.setTextColor("BLUE");C14.iC();C15.setTextColor("BLUE");C15.setBold(true);C15.iC();C16.iC();C17.setBorderBottom(1);C17.setBorderLeft(0);C17.setBorderTop(0);C17.setBorderRight(0);C17.iC();C18.iC();
C6.aH("CHANGED",this,e3);C10.aH("CLICK",this,e1);C11.aH("CLICK",this,e2);this.setDisplayPosition(1);this.setHeight(157);this.setLeft(0);this.setTabPosition(1);this.setTop(0);this.setWidth(329);this.setLayoutManager(C2);}});cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",52);r.ln=52;{r.ln=54;m.SHOWING.set(false);r.ln=56;m.PLATFORMUPROFILETEXT.set(m.USYSTEM.ref.getUMTXTVALUES("USR_PROF"));r.ln=57;m.PASSORDTEXT.set(m.USYSTEM.ref.getUMTXTVALUES("PASSWORD"));r.ln=58;m.LOGONBUTTON.setCaption(m.USYSTEM.ref.getUMTXTVALUES("LOGON2"));
r.ln=59;m.CANCELBUTTON.setCaption(m.USYSTEM.ref.getUMTXTVALUES("CANCEL1"));r.ln=61;m.INPUTPLATFORMUPROFILE.getEditStyles().mthADD(m.BORDERBOTTOMONLY);r.ln=62;m.INPUTPLATFORMP.getEditStyles().mthADD(m.BORDERBOTTOMONLY);r.ln=64;m.POPOVERMANAGER.mthUINITIALIZE(this);r.ln=66;m.LABEL_FRAMEWORKCAPTION.setCaption(m.USYSTEM.ref.getUFRAMEWORK().getUCAPTION());r.ln=68;m.SHOWMESSAGETEXT.mthUINITIALIZE(false,1,false);}r.ln=70;r.e();};cO.mthUTERMINATE=function(){var m=this.REF,r=l.mR(this,cO,"uTerminate",73);
r.ln=73;{r.ln=75;m.SHOWING.set(false);r.ln=77;m.SHOWMESSAGETEXT.mthUTERMINATE();r.ln=79;m.POPOVERMANAGER.mthUTERMINATE();}r.ln=81;r.e();};cO.mthUSHOW=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"uShow",84);var P0=r.cPD("CENTERONCONTROL");var P1=r.cPF("ATTEMPTEDREQUESTS",Fd.F3.Dc);P0=p0;P1.set((p1===u)?(1):(p1));r.ln=84;{r.ln=88;m.LOGONBUTTON.setEnabled(false);r.ln=89;m.INPUTPLATFORMP.set("");r.ln=90;m.INPUTPLATFORMUPROFILE.set(m.USYSTEM.ref.getFRAMEWORKLOGGEDONVISIBLEUSERPROFILE());r.ln=92;m.USYSTEM.ref.mthSIGNALREQUESTHIDEMAINFORM();
r.ln=94;m.USYSTEM.ref.mthISSUETEXTMESSAGE(m.USYSTEM.ref.getUMTXTVALUES("SIGNONAGAIN"),u,1,u,true,u);r.ln=96;m.SHOWING.set(true);r.ln=98;m.POPOVERMANAGER.mthUSHOWPOPOVER(u,u,u,P0,"",false,true);r.ln=100;m.INPUTPLATFORMP.mthSETFOCUS();}r.ln=102;r.e();};function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#LogonButton.click",105);r.ln=105;{r.ln=107;if(l.ne(m.INPUTPLATFORMP.get(),m.USYSTEM.ref.getFRAMEWORKPLATFORMP())){r.ln=109;m.USYSTEM.ref.mthISSUETEXTMESSAGE(m.USYSTEM.ref.getUMTXTVALUES("WRONGPSW"),u,1,u,true,u);
r.ln=110;m.INPUTPLATFORMP.set("");}else{r.ln=114;m.USYSTEM.ref.mthCLEARALLMESSAGES(1,true);r.ln=116;m.SHOWING.set(false);r.ln=118;m.POPOVERMANAGER.mthUCLOSEPOPOVER();r.ln=120;m.USYSTEM.ref.mthSIGNALREQUESTSHOWMAINFORM();}}r.ln=124;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CancelButton.click",127);r.ln=127;{r.ln=129;m.SHOWING.set(false);r.ln=131;m.POPOVERMANAGER.mthUCLOSEPOPOVER();r.ln=133;m.USYSTEM.ref.mthISSUETEXTMESSAGE(m.USYSTEM.ref.getUMTXTVALUES("CANCELLED"),u,1,u,true,u);
r.ln=135;m.USYSTEM.ref.mthSIGNALREQUESTEXIT(false,false,u);}r.ln=137;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#InputPlatformP.Changed",140);r.ln=140;{r.ln=142;m.LOGONBUTTON.setEnabled(l.s.ne(l.s.Trim(m.INPUTPLATFORMP.get()),""));}r.ln=144;r.e();};cO.getSHOWING=function(){return this.REF.SHOWING.get();};cO.setSHOWING=function(v){this.REF.SHOWING.set(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELUSR2"});Fd.F1.VISUALEDIT=function()
{this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(298);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"VF_ELUSR2",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"VF_ELPASW"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());this.setHeight(19);this.setUsePicklist(false);this.setWidth(247);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"VF_ELPASW",cn:"VisualEdit"});
}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"VF_ELINDX"});}},{rc:["VF_SY001O","VF_SY001X","VF_UI029O","VF_UI021O"],rp:["PRIM_PANL","PRIM_ATLM","PRIM_ATLI","PRIM_EVEF","PRIM_LABL","PRIM_PHBN","PRIM_VS.Style","PRIM_BOLN","PRIM_FLD"]});