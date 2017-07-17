﻿LANSA.addComponent({id:"DF_T63H1O",ot:"rp",tp:"Reusable Part",de:"\OC=Enable and Disable Commands",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELIDN",ft:"A",ln:32,dc:0,lb:{"ENG":"Internal Identi","FRA":"Standard Identi","JPN":"Standard Identi"}[cL],h1:{"ENG":"Internal","FRA":"Standard","JPN":"Standard"}[cL],h2:"Identifier",h3:"",de:{"ENG":"Internal Identifier","FRA":"Standard Identifier","JPN":"Standard Identifier"}[cL],dv:"",ia:["FE"]
}};var cO=l.rC(oI,{an:"VF_AC010O",fd:Fd,mt:{uInitialize:{}},co:function(){cO.aN.call(this);this.aF("DF_T63H1O",Fd);var C0=this.cR("ATTACHITEMABOUT","PRIM_ATLI");var C1=this.cR("ATTACHBUTTONPANEL","PRIM_ATLI");var C2=this.cR("ABOUT","PRIM_LABL");var C3=this.cR("BUTTONPANEL","PRIM_PANL");var C4=this.cR("BUTTON_DISABLE_DASHBOARD","PRIM_PHBN");var C5=this.cR("BUTTON_ENABLE_DASHBOARD","PRIM_PHBN");var C6=this.cR("BUTTON_DISABLE_EXAMPLE1","PRIM_PHBN");var C7=this.cR("BUTTON_ENABLE_EXAMPLE1","PRIM_PHBN");
var C8=this.cR("BUTTON_DISABLE_EXAMPLE2","PRIM_PHBN");var C9=this.cR("BUTTON_ENABLE_EXAMPLE2","PRIM_PHBN");var C10=this.cR("BUTTON_DISABLE_SPOOLFILES","PRIM_PHBN");var C11=this.cR("BUTTON_ENABLE_SPOOLFILES","PRIM_PHBN");C0.setManage(C2);C0.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C0.setAttachment("TOP");C0.setMarginBottom(4);C0.setMarginLeft(4);C0.setMarginTop(4);C0.setMarginRight(4);C0.iC();C1.setManage(C3);C1.setParent(this.REF.MAINPANELATTACHMENTMANAGER);C1.setAttachment("CENTER");C1.setMarginBottom(4);
C1.setMarginLeft(4);C1.setMarginTop(4);C1.setMarginRight(4);C1.iC();C2.setParent(this);C2.setDisplayPosition(1);C2.setTabPosition(1);C2.setTabStop(false);C2.setLeft(4);C2.setTop(4);C2.setWidth(921);C2.setHeight(213);C2.iC();C3.setParent(this);C3.setDisplayPosition(2);C3.setTabPosition(2);C3.setHeight(188);C3.setLeft(4);C3.setTop(225);C3.setWidth(921);C3.iC();C4.setParent(C3);C4.setCaption("Disable the DashBoard command");C4.setDisplayPosition(4);C4.setTabPosition(4);C4.setLeft(280);C4.setTop(16);
C4.setWidth(249);C4.iC();C5.setParent(C3);C5.setCaption("Enable the DashBoard command");C5.setDisplayPosition(8);C5.setTabPosition(7);C5.setLeft(16);C5.setTop(16);C5.setWidth(249);C5.iC();C6.setParent(C3);C6.setCaption("Disable Example 1 command");C6.setDisplayPosition(2);C6.setTabPosition(2);C6.setLeft(280);C6.setTop(55);C6.setWidth(249);C6.iC();C7.setParent(C3);C7.setCaption("Enable Example 1 command");C7.setDisplayPosition(6);C7.setTabPosition(6);C7.setLeft(16);C7.setTop(55);C7.setWidth(249);C7.iC();
C8.setParent(C3);C8.setCaption("Disable Example 2 command");C8.setDisplayPosition(1);C8.setTabPosition(1);C8.setLeft(280);C8.setTop(93);C8.setWidth(249);C8.iC();C9.setParent(C3);C9.setCaption("Enable Example 2 command");C9.setDisplayPosition(5);C9.setTabPosition(5);C9.setLeft(16);C9.setTop(93);C9.setWidth(249);C9.iC();C10.setParent(C3);C10.setCaption("Disable the Spool Files command");C10.setDisplayPosition(3);C10.setTabPosition(3);C10.setLeft(280);C10.setTop(128);C10.setWidth(249);C10.iC();C11.setParent(C3);
C11.setCaption("Enable the Spool Files command");C11.setDisplayPosition(7);C11.setTabPosition(8);C11.setLeft(16);C11.setTop(128);C11.setWidth(249);C11.iC();C4.aH("CLICK",this,e1);C5.aH("CLICK",this,e1);C6.aH("CLICK",this,e2);C7.aH("CLICK",this,e2);C8.aH("CLICK",this,e3);C9.aH("CLICK",this,e3);C10.aH("CLICK",this,e4);C11.aH("CLICK",this,e4);this.setHeight(417);this.setWidth(929);}});var cA=cO.aN.prototype;cO.mthUINITIALIZE=function(){var m=this.REF,r=l.mR(this,cO,"uInitialize",51);var C0=r.cR("DOUBLECR","PRIM_ALPH");
C0.iC();r.ln=51;{r.ln=55;C0.set(l.cat(l.n.AsUnicodeString(10),l.n.AsUnicodeString(10)));r.ln=58;cA.mthUINITIALIZE.call(this);r.ln=62;m.ABOUT.set("This is example VL reusable part DF_T63H1O.");r.ln=64;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"The framework manager #avFrameworkManager contains a method named avChangeCommandState that allows you to programmatically enable or disable a command with the framework, and application or a business object.")));r.ln=66;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"For example, using #avFrameworkManager.avChangeCommandState Objectname(VLFONE_DEMONSTRATION) Commandname(COMMAND_DASHBOARD) Enabled(False) would disable execution of the example dashboard application.")));
r.ln=68;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"Attempting to programtically manage the enablement of commands in business objects that allow multiple instances to be concurrently opened is not recommended as it will probably not function as you expect or require. KISS is the recommended command enablement approach when multiple business objects are allowed to be opened.")));r.ln=70;m.ABOUT.set(l.cat(m.ABOUT.get(),l.cat(C0.get(),"Review the source code of DF_T63H1O for more examples of command enablement and disablement.")));
}r.ln=73;r.e();};function e1(BUTTON,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Enable_DashBoard.Click #Button_Disable_DashBoard.Click",77);var C0=r.cR("ENABLED","PRIM_BOLN");C0.iC();r.ln=77;{r.ln=81;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=83;C0.set((BUTTON===m.BUTTON_ENABLE_DASHBOARD));r.ln=85;this.REF.AVFRAMEWORKMANAGER.mthAVCHANGECOMMANDSTATE("VLFONE_DEMONSTRATION","COMMAND_DASHBOARD",C0.get(),u);}r.ln=87;r.e();};function e2(BUTTON,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Enable_Example1.Click #Button_Disable_Example1.Click",91);
var C0=r.cR("ENABLED","PRIM_BOLN");C0.iC();r.ln=91;{r.ln=95;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=97;C0.set((BUTTON===m.BUTTON_ENABLE_EXAMPLE1));r.ln=99;this.REF.AVFRAMEWORKMANAGER.mthAVCHANGECOMMANDSTATE("COMMAND_ENABLEMENT","COMMAND_EXAMPLE_1",C0.get(),u);}r.ln=101;r.e();};function e3(BUTTON,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Enable_Example2.Click #Button_Disable_Example2.Click",105);var C0=r.cR("ENABLED","PRIM_BOLN");C0.iC();r.ln=105;{r.ln=109;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);
r.ln=111;C0.set((BUTTON===m.BUTTON_ENABLE_EXAMPLE2));r.ln=113;this.REF.AVFRAMEWORKMANAGER.mthAVCHANGECOMMANDSTATE("COMMAND_ENABLEMENT","COMMAND_EXAMPLE_2",C0.get(),u);}r.ln=115;r.e();};function e4(BUTTON,Ps){var m=this.REF,r=l.eR(this,cO,"#Button_Enable_SpoolFiles.Click #Button_Disable_SpoolFiles.Click",120);var C0=r.cR("ENABLED","PRIM_BOLN");C0.iC();r.ln=120;{r.ln=124;this.REF.AVFRAMEWORKMANAGER.mthAVCLEARMESSAGES(this,u);r.ln=126;C0.set((BUTTON===m.BUTTON_ENABLE_SPOOLFILES));r.ln=128;this.REF.AVFRAMEWORKMANAGER.mthAVCHANGECOMMANDSTATE("VLFONE_demonstration","COMMAND_spoolfile",C0.get(),u);
}r.ln=130;r.e();};function e5(sender,Ps){var r=l.eR(this,cO,"#AVFRAMEWORKMANAGER.avCommandStateChanged",135);var P0=Ps.r("OBJECTNAME");var P1=Ps.r("COMMANDNAME");var P2=Ps.r("ENABLED");r.ln=135;{r.ln=137;this.REF.AVFRAMEWORKMANAGER.mthAVISSUEMESSAGE(l.cat(l.cat(l.cat(l.cat(l.cat(l.cat("avCommandStateChanged event signalled for ObjectName(",P0.get()),") CommandName("),P1.get()),") Enabled("),l.b.AsString(P2.get()))," )"),u,u,this,u,u,u);}r.ln=139;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);
};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELIDN"});}cO.srAVFRAMEWORKMANAGER=function(rn){if(this.REF.AVFRAMEWORKMANAGER!=null){this.REF.AVFRAMEWORKMANAGER.rH("AVCOMMANDSTATECHANGED",this,e5);}cA.srAVFRAMEWORKMANAGER.call(this,rn);if(this.REF.AVFRAMEWORKMANAGER!=null){this.REF.AVFRAMEWORKMANAGER.aH("AVCOMMANDSTATECHANGED",this,e5);}};},{rc:["VF_AC010O"],rp:["PRIM_ATLI","PRIM_LABL","PRIM_PANL","PRIM_PHBN","PRIM_FLD"],dp:["PRIM_ALPH","PRIM_BOLN"]});