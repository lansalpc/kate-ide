﻿LANSA.addComponent({id:"XDEMOWEBC",nm:"xDemoWebContextualMessages",ot:"wp",tp:"Web Page",de:"Contextual Messages",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMOPASS",an:"xDemoPassword",ft:"A",ln:128,dc:0,lb:"Password",h1:"Password",h2:"",h3:"",de:"Password",dv:"",ia:["FE","ND","LC"]},F2:{nm:"XDEMOALPH",an:"xDemoAlpha128",ft:"A",ln:128,dc:0,lb:"Alpha 128",h1:"Alpha",h2:"128",h3:"",de:"Alpha 128",dv:"",ia:["FE","LC"]
}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,mt:{Validate:{}},co:function(){cO.aN.call(this);this.aF("XDEMOWEBC",Fd);var C0=this.cR("TABLELAYOUT1","PRIM_TBLO");var C1=this.cR("COLUMN1","PRIM_TBLO","Column");var C2=this.cR("ROW1","PRIM_TBLO","Row");var C3=this.cR("LAYOUTITEM1","PRIM_TBLO","Item");var C4=this.cF("GPASSWORD",Fd.F1.VISUALEDIT);var C5=this.cF("GUSERID",Fd.F2.VISUALEDIT);var C6=this.cR("OK","PRIM_PHBN");var C7=this.cR("MESSAGES","XDEMO_23");C0.iC();C1.setDisplayPosition(1);C1.setParent(C0);C1.iC();
C2.setDisplayPosition(1);C2.setParent(C0);C2.iC();C3.setColumn(C1);C3.setManage(C7);C3.setParent(C0);C3.setRow(C2);C3.setSizing("NONE");C3.iC();C4.setDisplayPosition(1);C4.setLeft(8);C4.setParent(this);C4.setTabPosition(2);C4.setTop(40);C4.setWidth(385);C4.setHeight(25);C4.aD();C4.iC();C5.setDisplayPosition(2);C5.setLeft(8);C5.setParent(this);C5.setTabPosition(1);C5.setTop(8);C5.setWidth(385);C5.setHeight(25);C5.setCaption("UserID");C5.setLabelType("CAPTION");C5.aD();C5.iC();C6.setDisplayPosition(4);
C6.setLeft(312);C6.setParent(this);C6.setTabPosition(4);C6.setTop(80);C6.setCaption("OK");C6.setButtonDefault(true);C6.iC();C7.setHeight(248);C7.setParent(this);C7.setWidth(393);C7.setLeft(164);C7.setTop(100);C7.setAutoClose(true);C7.iC();C6.aH("CLICK",this,e1);this.setHeight(448);this.setWidth(721);this.setTheme(l.THEME().get("2015LIGHTGREEN"));}});function e1(sender,Ps){var r=l.eR(this,cO,"#OK.Click",13);r.ln=13;{r.ln=15;this.mthVALIDATE();}r.ln=17;r.e();};cO.mthVALIDATE=function(){var m=this.REF,r=l.mR(this,cO,"Validate",19);
r.ln=19;{r.ln=21;l.MSGQ().mthCLEARALL();r.ln=23;if(l.s.ne(l.s.UpperCase(m.GUSERID.get()),"USER")){r.ln=25;l.MSGQ().mthADD("Username is invalid",m.GUSERID);}r.ln=29;if(l.s.eq(m.GPASSWORD.get(),"")){r.ln=31;l.MSGQ().mthADD("Password cannot be blank",m.GPASSWORD);}r.ln=35;if(l.s.ne(l.s.UpperCase(m.GPASSWORD.get()),"PASSWORD")){r.ln=37;l.MSGQ().mthADD(l.s.Substitute("Password is invalid for user &1",m.GUSERID.get()),m.GPASSWORD);}r.ln=41;if(l.not(l.MSGQ().getMessages().getIsEmpty())){r.ln=43;m.MESSAGES.mthSHOW();
}}r.ln=47;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMOPASS"});Fd.F1.VISUALEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setUsePicklist(false);this.setComponentVersion(1);this.setHeight(21);this.setWidth(895);};l.cFC({co:Fd.F1.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOPASS",cn:"VisualEdit"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XDEMOALPH"});Fd.F2.VISUALEDIT=function(){this.aN.call(this,new Fd.F2.Dc());
this.setComponentVersion(1);this.setHeight(21);this.setUsePicklist(false);this.setWidth(782);};l.cFC({co:Fd.F2.VISUALEDIT,an:"PRIM_EVEF",fn:"XDEMOALPH",cn:"VisualEdit"});}},{rc:["XDEMO_23"],rp:["PRIM_WEB","PRIM_TBLO","PRIM_TBLO.Column","PRIM_TBLO.Row","PRIM_TBLO.Item","PRIM_EVEF","PRIM_PHBN","PRIM_MSGQ"]});