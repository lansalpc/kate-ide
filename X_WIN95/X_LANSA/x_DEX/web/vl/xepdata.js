﻿LANSA.addComponent({id:"XEPDATA",nm:"XEPData",ot:"rp",tp:"Reusable Part",de:"Employee Data Object",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var rc1=l.cB("xepbm003.png");var Fd={F1:{nm:"XEMPTHM",ft:"BL",ln:0,dc:0,lb:{"ENG":"Employee Image","FRA":"Image","JPN":"Employee Image","LLL":"Employee Image"}[cL],h1:{"ENG":"Employee","FRA":"Image","JPN":"Employee","LLL":"Employee"}[cL],h2:{"ENG":"Image","FRA":" ","JPN":"Image","LLL":"Image"}[cL],
h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Employee Image Thumbnail","FRA":"Image","JPN":"Employee Image Thumbnail","LLL":"Employee Image Thumbnail"}[cL],dv:l.SqlNull,ia:["ASQN","FE","LC"]},F2:{nm:"XEMPLOYID",ft:"A",ln:10,dc:0,lb:"Employee Id",h1:"Employee",h2:"Identification",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Identification",dv:"",ia:["FE"]},F3:{nm:"XEMPTITLE",ft:"A",ln:10,dc:0,lb:"Title",h1:"Employee",h2:"Title",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Title",
dv:"Mr",ia:["FE","LC"]},F4:{nm:"XSURNAME",ft:"A",ln:20,dc:0,lb:"Surname",h1:"Employee",h2:"Surname",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Surname",dv:"",ia:["FE","LC"]},F5:{nm:"XGIVENAME",ft:"A",ln:20,dc:0,lb:"Given Names",h1:"Employee",h2:"Given",h3:"Names",de:"Given Names",dv:"",ia:["FE","LC"]},F6:{nm:"XEMPDOB",ft:"D",ln:10,dc:0,lb:"Date of Birth",h1:"Employee",h2:"Birth Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Date of Birth",dv:l.SqlNull,ia:["ASQN","FE","ISO"]},F7:
{nm:"XGENDER",ft:"A",ln:10,dc:0,lb:"Gender",h1:"Employee",h2:"Gender",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Gender",dv:"Male",ia:["FE","LC"]},F8:{nm:"XSTREET",ft:"A",ln:30,dc:0,lb:"Street",h1:"Street",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Street",dv:"",ia:["FE","LC"]},F9:{nm:"XCITY",ft:"A",ln:20,dc:0,lb:"City",h1:"City",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"City",
dv:"",ia:["FE","LC"]},F10:{nm:"XSTATE",ft:"A",ln:20,dc:0,lb:"State",h1:"State",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"State",dv:"",ia:["FE","LC"]},F11:{nm:"XPOSTCODE",ft:"A",ln:10,dc:0,lb:"Postal Code",h1:"Postal",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Postal Code",dv:"",ia:["FE"]},F12:{nm:"XCOUNTRY",ft:"A",ln:20,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Country",dv:"",ia:["FE","LC"]},F13:{nm:"XPHONEHME",ft:"A",ln:15,dc:0,lb:"Home Phone",h1:"Home",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Home Telephone",dv:"",ia:["FE"]},F14:{nm:"XPHONEBUS",ft:"A",ln:15,dc:0,lb:"Business Phone",h1:"Business",h2:"Telephone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Business Telephone",dv:"",ia:["FE"]},F15:{nm:"XPHONEMOB",ft:"A",ln:15,dc:0,lb:"Mobile Phone",h1:"Employee",h2:"Mobile Phone",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Mobile Phone",dv:"",ia:["FE"]},F16:{nm:"XSALARY",ft:"P",ln:15,dc:2,ec:"1",lb:"Annual Salary",h1:"Annual",h2:"Salary",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Annual Salary",dv:0,ia:["FE","RB"]},F17:{nm:"XSTARTDTE",ft:"D",ln:10,dc:0,lb:"Start Date",h1:"Start",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Start Date",dv:l.SqlNull,ia:["FE","ASQN"]},F18:{nm:"XTERMDATE",ft:"D",ln:10,dc:0,lb:"Termination",h1:"Termination",h2:"Date",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Termination Date",dv:l.SqlNull,ia:["FE","ASQN"]},F19:{nm:"XDEPTMENT",ft:"A",ln:4,dc:0,lb:"Department",h1:"Department",h2:"Code",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Department",dv:"",ia:["FE"]},F20:{nm:"XEMPDEPT",ft:"A",ln:20,dc:0,ks:"O",lb:"Department Desc",h1:{"ENG":"Department","FRA":"Employee","JPN":"Department","LLL":"Department"}[cL],h2:{"ENG":"Description","FRA":"Department","JPN":"Description","LLL":"Description"}[cL],h3:"Description",de:"Department Description",dv:"",ia:["FE","LC"]
}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{Identifier:{da:"rw"},Title:{da:"rw"},Surname:{da:"rw"},GivenNames:{da:"rw"},DateOfBirth:{da:"rw"},Gender:{da:"rw"},Street:{da:"rw"},City:{da:"rw"},State:{da:"rw"},PostalCode:{da:"rw"},Country:{da:"rw"},HomeTelephone:{da:"rw"},BusinessTelephone:{da:"rw"},MobilePhone:{da:"rw"},Salary:{da:"rw"},StartDate:{da:"rw"},TerminationDate:{da:"rw"},DepartmentCode:{da:"rw"},DepartmentDescription:{da:"r"},Thumbnail:{da:"r"},ThumbnailImage:{da:"na"},DisplayName:{da:"na"
}},co:function(){cO.aN.call(this);var f=this.aF("XEPDATA",Fd);this.cD("THUMBNAILIMAGE");this.aLF({"XEMPLOYID":f.F2,"XEMPTITLE":f.F3,"XSURNAME":f.F4,"XGIVENAME":f.F5,"XEMPDOB":f.F6,"XGENDER":f.F7,"XSTREET":f.F8,"XCITY":f.F9,"XSTATE":f.F10,"XPOSTCODE":f.F11,"XCOUNTRY":f.F12,"XPHONEHME":f.F13,"XPHONEBUS":f.F14,"XPHONEMOB":f.F15,"XSALARY":f.F16,"XSTARTDTE":f.F17,"XTERMDATE":f.F18,"XDEPTMENT":f.F19,"XEMPDEPT":f.F20,"XEMPTHM":f.F1});}});cO.mthGETDISPLAYNAME=function(){var f=this.FLD.XEPDATA,r=l.pR(this,cO,"GetDisplayName",42);
var P0=r.cP("DISPLAYNAME","PRIM_ALPH");r.ln=42;{r.ln=45;P0.set(l.s.Substitute("&1, &2",f.F4.get(),f.F5.get()));}r.ln=47;return r.rV(P0.get());};cO.mthGETTHUMBNAILIMAGE=function(){var f=this.FLD.XEPDATA,m=this.REF,r=l.pR(this,cO,"GetThumbnailImage",49);var P0=r.cPD("OTHUMBNAILIMAGE");r.ln=49;{r.ln=52;if((m.THUMBNAILIMAGE==null)){r.ln=54;if(l.s.IsSqlNull(f.F1.get())){r.ln=56;this.srTHUMBNAILIMAGE(rc1);}else{r.ln=60;this.srTHUMBNAILIMAGE(l.APPL().mthCREATEBITMAP(f.F1.get()));}}r.ln=66;P0=r.sR("P0",m.THUMBNAILIMAGE);
}r.ln=68;return r.rR(P0);};cO.mthSETTHUMBNAIL=function(p0){var f=this.FLD.XEPDATA,m=this.REF,r=l.pR(this,cO,"SetThumbnail",70);var P0=r.cPF("ITHUMBNAIL",Fd.F1.Dc);P0.set(p0);r.ln=70;{r.ln=73;f.F1.set(P0.get());r.ln=75;this.srTHUMBNAILIMAGE(null);}r.ln=77;r.e();};cO.getIDENTIFIER=function(){return this.FLD.XEPDATA.F2.get();};cO.setIDENTIFIER=function(v){this.FLD.XEPDATA.F2.set(v);};cO.getTITLE=function(){return this.FLD.XEPDATA.F3.get();};cO.setTITLE=function(v){this.FLD.XEPDATA.F3.set(v);};cO.getSURNAME=function()
{return this.FLD.XEPDATA.F4.get();};cO.setSURNAME=function(v){this.FLD.XEPDATA.F4.set(v);};cO.getGIVENNAMES=function(){return this.FLD.XEPDATA.F5.get();};cO.setGIVENNAMES=function(v){this.FLD.XEPDATA.F5.set(v);};cO.getDATEOFBIRTH=function(){return this.FLD.XEPDATA.F6.get();};cO.setDATEOFBIRTH=function(v){this.FLD.XEPDATA.F6.set(v);};cO.getGENDER=function(){return this.FLD.XEPDATA.F7.get();};cO.setGENDER=function(v){this.FLD.XEPDATA.F7.set(v);};cO.getSTREET=function(){return this.FLD.XEPDATA.F8.get();
};cO.setSTREET=function(v){this.FLD.XEPDATA.F8.set(v);};cO.getCITY=function(){return this.FLD.XEPDATA.F9.get();};cO.setCITY=function(v){this.FLD.XEPDATA.F9.set(v);};cO.getSTATE=function(){return this.FLD.XEPDATA.F10.get();};cO.setSTATE=function(v){this.FLD.XEPDATA.F10.set(v);};cO.getPOSTALCODE=function(){return this.FLD.XEPDATA.F11.get();};cO.setPOSTALCODE=function(v){this.FLD.XEPDATA.F11.set(v);};cO.getCOUNTRY=function(){return this.FLD.XEPDATA.F12.get();};cO.setCOUNTRY=function(v){this.FLD.XEPDATA.F12.set(v);
};cO.getHOMETELEPHONE=function(){return this.FLD.XEPDATA.F13.get();};cO.setHOMETELEPHONE=function(v){this.FLD.XEPDATA.F13.set(v);};cO.getBUSINESSTELEPHONE=function(){return this.FLD.XEPDATA.F14.get();};cO.setBUSINESSTELEPHONE=function(v){this.FLD.XEPDATA.F14.set(v);};cO.getMOBILEPHONE=function(){return this.FLD.XEPDATA.F15.get();};cO.setMOBILEPHONE=function(v){this.FLD.XEPDATA.F15.set(v);};cO.getSALARY=function(){return this.FLD.XEPDATA.F16.get();};cO.setSALARY=function(v){this.FLD.XEPDATA.F16.set(v);
};cO.getSTARTDATE=function(){return this.FLD.XEPDATA.F17.get();};cO.setSTARTDATE=function(v){this.FLD.XEPDATA.F17.set(v);};cO.getTERMINATIONDATE=function(){return this.FLD.XEPDATA.F18.get();};cO.setTERMINATIONDATE=function(v){this.FLD.XEPDATA.F18.set(v);};cO.getDEPARTMENTCODE=function(){return this.FLD.XEPDATA.F19.get();};cO.setDEPARTMENTCODE=function(v){this.FLD.XEPDATA.F19.set(v);};cO.getDEPARTMENTDESCRIPTION=function(){return this.FLD.XEPDATA.F20.get();};cO.getTHUMBNAIL=function(){return this.FLD.XEPDATA.F1.get();
};cO.setTHUMBNAIL=function(v){this.mthSETTHUMBNAIL(v);};cO.getTHUMBNAILIMAGE=function(){return this.mthGETTHUMBNAILIMAGE();};cO.getDISPLAYNAME=function(){return this.mthGETDISPLAYNAME();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XEMPTHM"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XEMPTITLE"});Fd.F3.pl=function(){this.aN.call(this);var C0=this.cR("PKIT_1","PRIM_PKIT");var C1=this.cR("PKIT_2","PRIM_PKIT");var C2=this.cR("PKIT_3","PRIM_PKIT");
var C3=this.cR("PKIT_4","PRIM_PKIT");var C4=this.cR("PKIT_5","PRIM_PKIT");C0.setValue("Mr");C0.setCaption("Mr");C0.setParent(this);C0.iC();C1.setValue("Mrs");C1.setCaption("Mrs");C1.setParent(this);C1.iC();C2.setValue("Miss");C2.setCaption("Miss");C2.setParent(this);C2.iC();C3.setValue("Ms");C3.setCaption("Ms");C3.setParent(this);C3.iC();C4.setValue("Dr");C4.setCaption("Dr");C4.setParent(this);C4.iC();this.setNoMatchAction("SHOWVALUE");};l.cFC({co:Fd.F3.pl,an:"PRIM_PKLT",fn:"XEMPTITLE",cn:"Picklist"});
}{Fd.F7.Dc=function(){this.aN.call(this,Fd.F7);};l.cFC({co:Fd.F7.Dc,an:"PRIM_FLD",fn:"XGENDER"});Fd.F7.pl=function(){this.aN.call(this);var C0=this.cR("ITEM_1","PRIM_PKIT");var C1=this.cR("ITEM_2","PRIM_PKIT");var C2=this.cR("ITEM_3","PRIM_PKIT");C0.setCaption("Male");C0.setParent(this);C0.setValue("Male");C0.iC();C1.setCaption("Female");C1.setParent(this);C1.setValue("Female");C1.iC();C2.setCaption("Not Disclosed");C2.setParent(this);C2.setValue("NoDisclose");C2.iC();this.setNoMatchAction("SHOWVALUE");
};l.cFC({co:Fd.F7.pl,an:"PRIM_PKLT",fn:"XGENDER",cn:"Picklist"});}cO.srTHUMBNAILIMAGE=function(rn){this.sR("THUMBNAILIMAGE",rn);};},{rp:["PRIM_OBJT","PRIM_FLD","PRIM_PKLT"],dp:["PRIM_BMP"]});