﻿LANSA.addComponent({id:"XDEMOMATE",nm:"xDemoMaterialIconsFont",ot:"wp",tp:"Web Page",de:"Using the Material Icons font",tl:14020000},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XDEMONUMB",an:"xDemoNumber",ft:"P",ln:7,dc:0,ec:"J",lb:{"ENG":"Number","FRA":"Nombre","JPN":"??","LLL":"Number"}[cL],h1:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],h2:"",h3:"",de:{"ENG":"Number","FRA":"Nombre","JPN":"番号","LLL":"Number"}[cL],
dv:0,ia:["FE","RB"]}};var cO=l.rC(oI,{an:"PRIM_WEB",fd:Fd,co:function(){cO.aN.call(this);this.aF("XDEMOMATE",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("LABEL1","XDEMOMAT");var C2=this.cR("LABEL2","XDEMOMAT");var C3=this.cR("LABEL3","XDEMOMAT");var C4=this.cR("LABEL4","XDEMOMAT");var C5=this.cF("FONTSIZE",Fd.F1.SPINEDIT);var C6=this.cF("RED",Fd.F1.SPINEDIT);var C7=this.cF("GREEN",Fd.F1.SPINEDIT);var C8=this.cF("BLUE",Fd.F1.SPINEDIT);C0.setFontSize(10);C0.iC();C1.setCaption("xDemoMaterialDesignIconLabel");
C1.setEllipses("WORD");C1.setLeft(8);C1.setParent(this);C1.setTop(8);C1.setVerticalAlignment("CENTER");C1.setHeight(68);C1.setWidth(68);C1.setAlignment("CENTER");C1.setStyle(C0);C1.setTabPosition(5);C1.iC();C2.setCaption("xDemoMaterialDesignIconLabel1");C2.setDisplayPosition(2);C2.setEllipses("WORD");C2.setLeft(8);C2.setParent(this);C2.setTabPosition(6);C2.setTop(84);C2.setVerticalAlignment("CENTER");C2.setHeight(68);C2.setWidth(68);C2.setAlignment("CENTER");C2.setStyle(C0);C2.iC();C3.setCaption("xDemoMaterialDesignIconLabel2");
C3.setDisplayPosition(3);C3.setEllipses("WORD");C3.setLeft(8);C3.setParent(this);C3.setTabPosition(8);C3.setTop(160);C3.setVerticalAlignment("CENTER");C3.setHeight(68);C3.setWidth(68);C3.setAlignment("CENTER");C3.setStyle(C0);C3.iC();C4.setCaption("xDemoMaterialDesignIconLabel3");C4.setDisplayPosition(4);C4.setEllipses("WORD");C4.setLeft(8);C4.setParent(this);C4.setTabPosition(7);C4.setTop(236);C4.setVerticalAlignment("CENTER");C4.setHeight(68);C4.setWidth(68);C4.setAlignment("CENTER");C4.setStyle(C0);
C4.iC();C5.setDisplayPosition(8);C5.setParent(this);C5.setTabPosition(1);C5.setTop(24);C5.setLeft(184);C5.setHeight(25);C5.setCaption("Fontsize");C5.setMarginLeft(80);C5.setLabelType("CAPTION");C5.setDisplayAlignment("RIGHT");C5.setEditAlignment("RIGHT");C5.setWidth(177);C5.aD();C5.iC();C6.setDisplayPosition(7);C6.setParent(this);C6.setTabPosition(2);C6.setTop(64);C6.setLeft(184);C6.setHeight(25);C6.setCaption("Color (RGB)");C6.setMarginLeft(80);C6.setLabelType("CAPTION");C6.setDisplayAlignment("RIGHT");
C6.setEditAlignment("RIGHT");C6.setWidth(137);C6.aD();C6.iC();C7.setDisplayPosition(6);C7.setParent(this);C7.setTabPosition(3);C7.setTop(64);C7.setLeft(320);C7.setHeight(25);C7.setCaption("Color (RGB)");C7.setMarginLeft(0);C7.setLabelType("CAPTION");C7.setDisplayAlignment("RIGHT");C7.setEditAlignment("RIGHT");C7.setWidth(57);C7.aD();C7.iC();C8.setDisplayPosition(5);C8.setParent(this);C8.setTabPosition(4);C8.setTop(64);C8.setLeft(376);C8.setHeight(25);C8.setCaption("Color (RGB)");C8.setMarginLeft(0);
C8.setLabelType("CAPTION");C8.setDisplayAlignment("RIGHT");C8.setEditAlignment("RIGHT");C8.setWidth(57);C8.aD();C8.iC();C5.aH("CHANGED",this,e2);C6.aH("CHANGED",this,e3);C7.aH("CHANGED",this,e3);C8.aH("CHANGED",this,e3);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",15);r.ln=15;{r.ln=17;m.FONTSIZE.set(10);r.ln=20;m.LABEL1.setHEX("E1AB");r.ln=21;m.LABEL2.setHEX("E25E");r.ln=22;m.LABEL3.setHEX("E5D1");r.ln=23;m.LABEL4.setHEX("E7EF");
}r.ln=25;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Fontsize.Changed",27);r.ln=27;{r.ln=29;m.FONTSIZE.set(l.n.Bound(m.FONTSIZE.get(),8,64));r.ln=30;m.STYLE1.setFontSize(m.FONTSIZE.get());}r.ln=32;r.e();};function e3(SENDER,Ps){var m=this.REF,r=l.eR(this,cO,"#Red.Changed #Green.Changed #Blue.Changed",34);r.ln=34;{r.ln=36;SENDER.set(l.n.Bound(SENDER.get(),0,255));r.ln=38;m.STYLE1.setTextColor(l.s.Substitute("&1:&2:&3",l.n.AsString(m.RED.get()),l.n.AsString(m.GREEN.get()),l.n.AsString(m.BLUE.get())));
}r.ln=40;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XDEMONUMB"});Fd.F1.SPINEDIT=function(){this.aN.call(this,new Fd.F1.Dc());this.setComponentVersion(1);this.setHeight(20);this.setUsePicklist(false);this.setWidth(261);};l.cFC({co:Fd.F1.SPINEDIT,an:"PRIM_EVSE",fn:"XDEMONUMB",cn:"SpinEdit"});}},{rc:["XDEMOMAT"],rp:["PRIM_WEB","PRIM_VS.Style","PRIM_EVSE"]});