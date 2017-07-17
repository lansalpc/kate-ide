﻿LANSA.addComponent({id:"XD3APP",nm:"XD3Application",ot:"rp",tp:"Reusable Part",de:"Application Object",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{ActiveContentPanel:{da:"na"},ActiveView:{da:"r"},ActiveUser:{da:"r"}},mt:{DesignChanged:{ps:{"Design":{pt:"i"}}},ActivateMobileView:{},ActivateTabletView:{},ActivateDesktopView:{},ShowLoginDialog:{},Show_HOME:{},Show_ABOUT:{},Show_CONTACT:{},Show:{ps:{"Content":{pt:"i"}}},Login:{ps:{"User":{pt:"i"},"Password":{pt:"i"}}},Logout:{}},
ev:{MobileView:{},TabletView:{},DesktopView:{},HideContent:{},ShowContent:{},ShowHome:{},ShowAbout:{},ShowContact:{},LoggedIn:{},LoggedOut:{},InvalidLogin:{},SessionTimeOut:{}},co:function(){cO.aN.call(this);var C0=this.cR("LOGINDIALOG","XD3LOGIN");var C1=this.cR("CONTENT_HOME","XD3HOME");var C2=this.cR("CONTENT_ABOUT","XD3ABOUT");var C3=this.cR("CONTENT_CONTACT","XD3CONT");var C4=this.cR("ACTIVEVIEW","PRIM_ALPH");var C5=this.cR("ACTIVECONTENT","PRIM_ALPH");this.cD("ACTIVEDESIGN");var C7=this.cR("ACTIVEUSER","PRIM_ALPH");
C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.setValue("HOME");C5.iC();C7.iC();l.WEB().aH("REQUESTFAILED",this,e3);}});cO.mthGETACTIVECONTENTPANEL=function(){var m=this.REF,r=l.pR(this,cO,"GetActiveContentPanel",43);var P0=r.cPD("RESULT");r.ln=43;{r.ln=46;{var v1=m.ACTIVECONTENT.get();if(r.ln=48,l.s.eq(v1,"HOME")){r.ln=50;P0=r.sR("P0",m.CONTENT_HOME);}else if(r.ln=52,l.s.eq(v1,"ABOUT")){r.ln=54;P0=r.sR("P0",m.CONTENT_ABOUT);}else if(r.ln=56,l.s.eq(v1,"CONTACT")){r.ln=58;P0=r.sR("P0",m.CONTENT_CONTACT);
}r.ln=60;}r.ln=62;if((P0==null)){r.ln=64;l.WEB().mthALERT("Unknown application view");}}r.ln=68;return r.rR(P0);};cO.mthDESIGNCHANGED=function(p0){var m=this.REF,r=l.mR(this,cO,"DesignChanged",70);var P0=r.cPD("DESIGN");P0=p0;r.ln=70;{r.ln=73;this.srACTIVEDESIGN(P0);r.ln=75;if((P0==null)){r.ln=77;this.mthACTIVATEDESKTOPVIEW();}else{r.ln=81;if(l.s.eq(P0.getName(),"MOBILEDESIGN")){r.ln=83;this.mthACTIVATEMOBILEVIEW();}else{r.ln=87;this.mthACTIVATETABLETVIEW();}}}r.ln=93;r.e();};cO.mthACTIVATEMOBILEVIEW=function()
{var m=this.REF,r=l.mR(this,cO,"ActivateMobileView",95);r.ln=95;{r.ln=97;if(l.tB(l.s.ne(m.ACTIVEVIEW.get(),"MOBILE"))){r.ln=99;m.ACTIVEVIEW.set("MOBILE");r.ln=101;this.fE("MOBILEVIEW");}}r.ln=105;r.e();};cO.mthACTIVATETABLETVIEW=function(){var m=this.REF,r=l.mR(this,cO,"ActivateTabletView",107);r.ln=107;{r.ln=109;if(l.tB(l.s.ne(m.ACTIVEVIEW.get(),"TABLET"))){r.ln=111;m.ACTIVEVIEW.set("TABLET");r.ln=113;this.fE("TABLETVIEW");}}r.ln=117;r.e();};cO.mthACTIVATEDESKTOPVIEW=function(){var m=this.REF,r=l.mR(this,cO,"ActivateDesktopView",119);
r.ln=119;{r.ln=121;if(l.tB(l.s.ne(m.ACTIVEVIEW.get(),"DESKTOP"))){r.ln=123;m.ACTIVEVIEW.set("DESKTOP");r.ln=125;this.fE("DESKTOPVIEW");}}r.ln=129;r.e();};cO.mthSHOWLOGINDIALOG=function(){var m=this.REF,r=l.mR(this,cO,"ShowLoginDialog",131);r.ln=131;{r.ln=133;m.LOGINDIALOG.mthSHOWPOPUP(u,u,"CENTER",u,u);}r.ln=135;r.e();};cO.mthSHOW_HOME=function(){var r=l.mR(this,cO,"Show_HOME",137);r.ln=137;{r.ln=139;cO.mthSHOW.call(this,"HOME");r.ln=141;this.fE("SHOWHOME");}r.ln=143;r.e();};cO.mthSHOW_ABOUT=function()
{var r=l.mR(this,cO,"Show_ABOUT",145);r.ln=145;{r.ln=147;cO.mthSHOW.call(this,"ABOUT");r.ln=149;this.fE("SHOWABOUT");}r.ln=151;r.e();};cO.mthSHOW_CONTACT=function(){var r=l.mR(this,cO,"Show_CONTACT",153);r.ln=153;{r.ln=155;cO.mthSHOW.call(this,"CONTACT");r.ln=157;this.fE("SHOWCONTACT");}r.ln=159;r.e();};cO.mthSHOW=function(p0){var m=this.REF,r=l.mR(this,cO,"Show",161);var P0=r.cP("CONTENT","PRIM_ALPH");P0.set(p0);r.ln=161;{r.ln=164;this.fE("HIDECONTENT");r.ln=166;m.ACTIVECONTENT.set(P0.get());r.ln=168;
this.fE("SHOWCONTENT");}r.ln=170;r.e();};cO.mthLOGIN=function(p0,p1){var m=this.REF,r=l.mR(this,cO,"Login",172);var P0=r.cP("USER","PRIM_ALPH");var P1=r.cP("PASSWORD","PRIM_ALPH");P0.set(p0);P1.set(p1);var C0=r.cDR("LOGINSERVICE","XD3SERV","LOGIN");var C1=r.cR("RETURNCODE","PRIM_ALPH");C0.iC();C1.iC();C0.aH("COMPLETED",this,e1);r.ln=172;{r.ln=179;C0.mthEXECUTEASYNC({FLD:{"XAL4USER":P0.get(),"XAL4PASSWORD":P1.get()}},{FLD:{"XAL4STATUS":C1}});}r.ln=197;r.e();function e1(sender,Ps){var r=l.eR(this,cO,"#LoginService.Completed",181);
r.ln=181;{r.ln=183;if(l.tB(l.s.eq(C1.get(),"OK"))){r.ln=185;m.ACTIVEUSER.set(P0.get());r.ln=187;this.fE("LOGGEDIN");}else{r.ln=191;this.fE("INVALIDLOGIN");}}r.ln=195;r.e();}};cO.mthLOGOUT=function(){var m=this.REF,r=l.mR(this,cO,"Logout",199);var C0=r.cDR("LOGOUTSERVICE","XD3SERV","LOGOUT");C0.iC();C0.aH("COMPLETED",this,e2);r.ln=199;{r.ln=203;C0.mthEXECUTEASYNC({},{});}r.ln=213;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#LogoutService.Completed",205);r.ln=205;{r.ln=207;m.ACTIVEUSER.set("");
r.ln=209;this.fE("LOGGEDOUT");}r.ln=211;r.e();}};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#SYS_WEB.RequestFailed",215);var P0=Ps.r("HANDLED");var P1=Ps.r("REASON");var P2=Ps.r("REQUEST");r.ln=215;{r.ln=217;{var v1=P1.get();if(r.ln=219,l.s.eq(v1,"SESSIONINVALID")){r.ln=221;this.fE("SESSIONTIMEOUT");r.ln=223;m.ACTIVEUSER.set("");r.ln=225;this.fE("LOGGEDOUT");r.ln=227;this.mthSHOWLOGINDIALOG();r.ln=229;P0.set(true);}r.ln=231;}}r.ln=233;r.e();};cO.getACTIVECONTENTPANEL=function(){return this.mthGETACTIVECONTENTPANEL();
};cO.getACTIVEVIEW=function(){return this.REF.ACTIVEVIEW.get();};cO.getACTIVEUSER=function(){return this.REF.ACTIVEUSER.get();};cO.srACTIVEDESIGN=function(rn){this.sR("ACTIVEDESIGN",rn);};},{rc:["XD3LOGIN","XD3HOME","XD3ABOUT","XD3CONT"],rp:["PRIM_OBJT","PRIM_ALPH","PRIM_WEB.DataRequest"],dp:["PRIM_DESN.Design","PRIM_ALPH"]});