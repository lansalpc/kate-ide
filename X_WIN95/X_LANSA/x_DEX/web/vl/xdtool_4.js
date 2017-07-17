﻿LANSA.addComponent({id:"XDTOOL_4",nm:"xDToolsDataModel",ot:"rp",tp:"Reusable Part",de:"Data Model",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var Fd={F1:{nm:"XSCNTRYNM",ft:"C",ln:100,dc:0,lb:"Country",h1:"Country",h2:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Country",dv:"",ia:["FE"]},F2:{nm:"XSPRDID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product ID","FRA":"Product Categor","JPN":"Product ID","LLL":"Product ID"}[cL],
h1:"Product",h2:{"ENG":"ID","FRA":"Category","JPN":"ID","LLL":"ID"}[cL],h3:{"ENG":" ","FRA":"ID","JPN":" ","LLL":""}[cL],de:"Product ID",dv:"",ia:["FE"]},F3:{nm:"XSPRDLNID",ft:"A",ln:10,dc:0,lb:"Product Categor",h1:"Product",h2:"Category",h3:"ID",de:{"ENG":"Product Line ID","FRA":"Product Category ID","JPN":"Product Line ID","LLL":"Product Line ID"}[cL],dv:"",ia:["FE"]},F4:{nm:"XSPRDCTID",ft:"A",ln:10,dc:0,lb:{"ENG":"Product Categry","FRA":"Product Categor","JPN":"Product Categry","LLL":"Product Categry"}[cL],
h1:"Product",h2:"Category",h3:"ID",de:"Product Category ID",dv:"",ia:["FE"]},F5:{nm:"XSPRDDSC",ft:"C",ln:100,dc:0,lb:{"ENG":"Product Desc","FRA":"Last Name","JPN":"Product Desc","LLL":"Product Desc"}[cL],h1:{"ENG":"Product","FRA":"Last","JPN":"Product","LLL":"Product"}[cL],h2:{"ENG":"Description","FRA":"Name","JPN":"Description","LLL":"Description"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Product Description",dv:"",ia:["FE","LC"]},F6:{nm:"XSPRDMDL",ft:"C",ln:100,dc:0,lb:{"ENG":"Product Model","FRA":"Product Detail","JPN":"Product Model","LLL":"Product Model"}[cL],
h1:"Product",h2:{"ENG":"Model","FRA":"Detail","JPN":"Model","LLL":"Model"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Model","FRA":"Product Detail","JPN":"Product Model","LLL":"Product Model"}[cL],dv:"",ia:["FE"]},F7:{nm:"XSPRDPRC",ft:"S",ln:9,dc:2,ec:"3",lb:"Product Price",h1:"Product",h2:"Price",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Product Price",dv:0,ia:["FE","RB"]},F8:{nm:"XSPRDDTL",ft:"C",ln:100,dc:0,lb:"Product Detail",h1:"Product",h2:"Detail",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],
de:"Product Detail",dv:"",ia:["FE"]},F9:{nm:"XSPRDSHP",ft:"S",ln:9,dc:2,ec:"3",lb:"Product Price",h1:"Product",h2:"Price",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Shipping Cost","FRA":"Product Price","JPN":"Product Shipping Cost","LLL":"Product Shipping Cost"}[cL],dv:0,ia:["FE","RB"]},F10:{nm:"XSPRDSTS",ft:"A",ln:10,dc:0,lb:"Product Stock S",h1:"Product",h2:"Stock",h3:"Status",de:"Product Stock Status",dv:"",ia:["FE"]},F11:{nm:"XSPRDTAX",ft:"S",ln:5,dc:2,lb:{"ENG":"Product Tax %","FRA":"Discount Percen","JPN":"Product Tax %","LLL":"Product Tax %"}[cL],
h1:{"ENG":"Product","FRA":"Discount","JPN":"Product","LLL":"Product"}[cL],h2:{"ENG":"Tax %","FRA":"Percentage","JPN":"Tax %","LLL":"Tax %"}[cL],h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Tax %","FRA":"Discount Percentage","JPN":"Product Tax %","LLL":"Product Tax %"}[cL],dv:0,ia:["FE","RB"]},F12:{nm:"XSPRODIMG",ft:"BL",ln:0,dc:0,lb:"Product Image",h1:"Product",h2:"Image",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:"Product Image",dv:l.SqlNull,ia:["ASQN","FE","LC"]},F13:
{nm:"XSPRDCTDS",ft:"C",ln:100,dc:0,lb:"Last Name",h1:"Last",h2:"Name",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Category Description","FRA":"Product Description","JPN":"Product Category Description","LLL":"Product Category Description"}[cL],dv:"",ia:["FE","LC"]},F14:{nm:"XSPRDLNDS",ft:"C",ln:100,dc:0,lb:"Last Name",h1:"Last",h2:"Name",h3:{"ENG":" ","FRA":" ","JPN":" ","LLL":""}[cL],de:{"ENG":"Product Line Description","FRA":"Product Description","JPN":"Product Line Description","LLL":"Product Line Description"}[cL],
dv:"",ia:["FE","LC"]}};var cO=l.rC(oI,{an:"PRIM_OBJT",fd:Fd,pt:{isPrepared:{da:"r"},Countries:{da:"r"},Products:{da:"r"},ProductCategories:{da:"r"},ProductLines:{da:"r"},ShoppingCart:{da:"r"}},mt:{Prepare:{},FindCountry:{ps:{"CountryName":{pt:"i"}}},FindProduct:{ps:{"ID":{pt:"i"}}},FindProductLine:{ps:{"ID":{pt:"i"}}},FindProductCategory:{ps:{"ID":{pt:"i"}}}},ev:{Prepared:{}},co:function(){cO.aN.call(this);var f=this.aF("XDTOOL_4",Fd);var C0=this.cR("GPRODUCTS","PRIM_ACOL");var C1=this.cR("GPRODUCTCATEGORIES","PRIM_ACOL");
var C2=this.cR("GPRODUCTLINES","PRIM_ACOL");var C3=this.cR("GCOUNTRIES","PRIM_ACOL");var C4=this.cR("GSHOPPINGCART","XDTOO_10");var C5=this.cR("GPREPARED","PRIM_BOLN");C0.setCollects("XDTOOL_6");C0.iC();C1.setCollects("XDTOOL_7");C1.iC();C2.setCollects("XDTOOL_8");C2.iC();C3.setCollects("XDTOO_24");C3.iC();C4.iC();C5.iC();C0.aLF({"XSPRDID":f.F2,"XSPRDCTID":f.F4,"XSPRDLNID":f.F3,"XSPRDDSC":f.F5,"XSPRDMDL":f.F6,"XSPRDPRC":f.F7,"XSPRDDTL":f.F8,"XSPRDSHP":f.F9,"XSPRDSTS":f.F10,"XSPRDTAX":f.F11,"XSPRODIMG":f.F12});
C1.aLF({"XSPRDCTID":f.F4,"XSPRDCTDS":f.F13,"XSPRDLNID":f.F3});C2.aLF({"XSPRDLNID":f.F3,"XSPRDLNDS":f.F14});C3.aLF({"XSCNTRYNM":f.F1});}});cO.mthPREPARE=function(){var m=this.REF,r=l.mR(this,cO,"Prepare",21);var C0=r.cDR("LOADSTARTUPDATA","XDTOOLSER","LOADSTARTUPDATA");C0.iC();C0.aH("COMPLETED",this,e1);r.ln=21;{r.ln=25;C0.mthEXECUTEASYNC({},{LIST:{"PRODUCTCATEGORYS":m.GPRODUCTCATEGORIES,"PRODUCTLINES":m.GPRODUCTLINES,"PRODUCTS":m.GPRODUCTS,"COUNTRIES":m.GCOUNTRIES}});}r.ln=34;r.e();function e1(sender,Ps)
{var r=l.eR(this,cO,"#LoadStartUpData.Completed",27);r.ln=27;{r.ln=29;m.GPREPARED.set(true);r.ln=30;this.fE("PREPARED");}r.ln=32;r.e();}};cO.mthFINDCOUNTRY=function(p0){var m=this.REF,r=l.mR(this,cO,"FindCountry",36);var P0=r.cPF("COUNTRYNAME",Fd.F1.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=36;{r.ln=40;{var i1=m.GCOUNTRIES.cI();while(i1.step()){var COUNTRY=r.sR("COUNTRY",i1.item());r.ln=42;if(l.s.ne(l.s.UpperCase(COUNTRY.getCOUNTRYNAME()),l.s.UpperCase(P0.get()))){continue;}r.ln=44;P1=r.sR("P1",COUNTRY);
r.ln=46;break;r.ln=48;}i1.end();r.dR("COUNTRY");}}r.ln=50;return r.rR(P1);};cO.mthFINDPRODUCT=function(p0){var m=this.REF,r=l.mR(this,cO,"FindProduct",52);var P0=r.cPF("ID",Fd.F2.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=52;{r.ln=56;{var i1=m.GPRODUCTS.cI();while(i1.step()){var PRODUCT=r.sR("PRODUCT",i1.item());r.ln=58;if(l.s.ne(PRODUCT.getID(),P0.get())){continue;}r.ln=60;P1=r.sR("P1",PRODUCT);r.ln=62;break;r.ln=64;}i1.end();r.dR("PRODUCT");}}r.ln=66;return r.rR(P1);};cO.mthFINDPRODUCTLINE=function(p0)
{var m=this.REF,r=l.mR(this,cO,"FindProductLine",68);var P0=r.cPF("ID",Fd.F3.Dc);var P1=r.cPD("RESULT");P0.set(p0);r.ln=68;{r.ln=72;{var i1=m.GPRODUCTLINES.cI();while(i1.step()){var PRODUCTLINE=r.sR("PRODUCTLINE",i1.item());r.ln=74;if(l.s.ne(PRODUCTLINE.getID(),P0.get())){continue;}r.ln=76;P1=r.sR("P1",PRODUCTLINE);r.ln=78;break;r.ln=80;}i1.end();r.dR("PRODUCTLINE");}}r.ln=82;return r.rR(P1);};cO.mthFINDPRODUCTCATEGORY=function(p0){var m=this.REF,r=l.mR(this,cO,"FindProductCategory",84);var P0=r.cPF("ID",Fd.F4.Dc);
var P1=r.cPD("RESULT");P0.set(p0);r.ln=84;{r.ln=88;{var i1=m.GPRODUCTCATEGORIES.cI();while(i1.step()){var PRODUCTCATEGORY=r.sR("PRODUCTCATEGORY",i1.item());r.ln=90;if(l.s.ne(PRODUCTCATEGORY.getID(),P0.get())){continue;}r.ln=92;P1=r.sR("P1",PRODUCTCATEGORY);r.ln=94;break;r.ln=96;}i1.end();r.dR("PRODUCTCATEGORY");}}r.ln=98;return r.rR(P1);};cO.getISPREPARED=function(){return this.REF.GPREPARED.get();};cO.getCOUNTRIES=function(){return this.REF.GCOUNTRIES;};cO.getPRODUCTS=function(){return this.REF.GPRODUCTS;
};cO.getPRODUCTCATEGORIES=function(){return this.REF.GPRODUCTCATEGORIES;};cO.getPRODUCTLINES=function(){return this.REF.GPRODUCTLINES;};cO.getSHOPPINGCART=function(){return this.REF.GSHOPPINGCART;};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"XSCNTRYNM"});}{Fd.F2.Dc=function(){this.aN.call(this,Fd.F2);};l.cFC({co:Fd.F2.Dc,an:"PRIM_FLD",fn:"XSPRDID"});}{Fd.F3.Dc=function(){this.aN.call(this,Fd.F3);};l.cFC({co:Fd.F3.Dc,an:"PRIM_FLD",fn:"XSPRDLNID"});}{Fd.F4.Dc=function()
{this.aN.call(this,Fd.F4);};l.cFC({co:Fd.F4.Dc,an:"PRIM_FLD",fn:"XSPRDCTID"});}},{rc:["XDTOO_10"],rp:["PRIM_OBJT","PRIM_ACOL","PRIM_BOLN","PRIM_WEB.DataRequest","PRIM_FLD"]});