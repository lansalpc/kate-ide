﻿LANSA.addComponent({id:"XDEMOMAT",nm:"xDemoMaterialDesignIconLabel",ot:"rp",tp:"Reusable Part",de:"Material Design Icon Label (google)",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"STD_INT",ft:"I",ln:4,dc:0,ec:"J",lb:{"ENG":"Std Integer","FRA":"?","JPN":"?","LLL":"Std Integer"}[cL],h1:{"ENG":"Standard","FRA":"?","JPN":"?","LLL":"Standard"}[cL],h2:{"ENG":"Integer","FRA":"?","JPN":"?","LLL":"Integer"}[cL],h3:{"ENG":"Field","FRA":"?","JPN":"?","LLL":"Field"}[cL],
de:{"ENG":"Standard Integer field","FRA":"?","JPN":"?","LLL":"Standard Integer field"}[cL],dv:0,ia:["FE","RB"]},F2:{nm:"I",ft:"I",ln:4,dc:0,lb:"i",h1:"i",h2:"",h3:"",de:"i",dv:0}};var cO=l.rC(oI,{an:"PRIM_LABL",fd:Fd,pt:{Hex:{da:"r"}},mt:{ConvertHexToInteger:{ps:{"Hex":{pt:"i"}}},GetHexCharacterValue:{ps:{"HexCharacter":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("XDEMOMAT",Fd);var C0=this.cR("GHEX","PRIM_ALPH");var C1=this.cR("STYLE","PRIM_VS","Style");C0.iC();C1.setFaceName("material icons");
C1.iC();this.setDisplayPosition(1);this.setTabPosition(1);this.setTabStop(false);this.setHeight(55);this.setWidth(119);this.aH("CREATEINSTANCE",this,e1);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Com_Owner.CreateInstance",13);r.ln=13;{r.ln=16;this.getStyles().mthADD(m.STYLE);}r.ln=18;r.e();};cO.mthSETHEX=function(p0){var m=this.REF,r=l.pR(this,cO,"SetHex",20);var P0=r.cP("PROPERTY","PRIM_ALPH");P0.set(p0);r.ln=20;{r.ln=23;m.GHEX.set(P0.get());r.ln=25;this.setCaption(l.n.AsUnicodeString(cO.mthCONVERTHEXTOINTEGER.call(this,m.GHEX.get())));
}r.ln=27;r.e();};cO.mthCONVERTHEXTOINTEGER=function(p0){var f=this.FLD.XDEMOMAT,r=l.mR(this,cO,"ConvertHexToInteger",29);var P0=r.cP("HEX","PRIM_ALPH");var P1=r.cPF("RESULT",Fd.F1.Dc);P0.set(p0);r.ln=29;{r.ln=35;for(var i1=1,s1=1,t1=l.tI(l.s.CurChars(P0.get()));f.F2.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=37;P1.set(l.add(P1.get(),l.mul(cO.mthGETHEXCHARACTERVALUE.call(this,l.s.Substring(l.s.UpperCase(P0.get()),f.F2.get(),1)),l.n.Power(l.n.AsFloat(16),l.sub(l.s.CurChars(P0.get()),f.F2.get())))));
}}r.ln=41;return r.rV(P1.get());};cO.mthGETHEXCHARACTERVALUE=function(p0){var r=l.mR(this,cO,"GetHexCharacterValue",43);var P0=r.cP("HEXCHARACTER","PRIM_ALPH");var P1=r.cP("RESULT","PRIM_NMBR");P0.set(p0);r.ln=43;{r.ln=47;if(l.s.IsNumber(P0.get())){r.ln=49;P1.set(l.s.AsNumber(P0.get()));}else{r.ln=53;{var v1=P0.get();if(r.ln=55,l.s.eq(v1,"A")){r.ln=56;P1.set(10);}else if(r.ln=58,l.s.eq(v1,"B")){r.ln=59;P1.set(11);}else if(r.ln=61,l.s.eq(v1,"C")){r.ln=62;P1.set(12);}else if(r.ln=64,l.s.eq(v1,"D"))
{r.ln=65;P1.set(13);}else if(r.ln=67,l.s.eq(v1,"E")){r.ln=68;P1.set(14);}else if(r.ln=70,l.s.eq(v1,"F")){r.ln=71;P1.set(15);}r.ln=73;}}}r.ln=77;return r.rV(P1.get());};cO.getHEX=function(){return this.REF.GHEX.get();};cO.setHEX=function(v){this.mthSETHEX(v);};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"STD_INT"});}},{rp:["PRIM_LABL","PRIM_ALPH","PRIM_VS.Style","PRIM_FLD"]});