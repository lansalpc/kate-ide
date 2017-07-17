﻿(function(l,u){var oI=l.cV({id:"XSSTRMAP",nm:"XSStoreMap",ot:"rp",tp:"Reusable Part",de:"Store Location Map",tl:3});var c1=l.cDec("-33.838434"),c2=l.cDec("151.209965"),c3=l.cDec("43.687215"),c4=l.cDec("-79.601531"),c5=l.cDec("48.830308"),c6=l.cDec("2.265576"),c7=l.cDec("35.693206"),c8=l.cDec("139.745166"),c9=l.cDec("1.303095"),c10=l.cDec("103.834338"),c11=l.cDec("52.298633"),c12=l.cDec("4.952724"),c13=l.cDec("51.753453"),c14=l.cDec("-0.333610"),c15=l.cDec("41.831176"),c16=l.cDec("-88.032878");var cO=l.rC(oI,
{an:"PRIM_PANL",co:function(){cO.aN.call(this);var C0=this.cA("MYSESSION","XSMYSSN");var C1=this.cR("GEOLOCATION","PRIM_WEB","Geolocation");var C2=this.cR("ATTACHLAYOUT1","PRIM_ATLM");var C3=this.cR("ATTACHITEM1","PRIM_ATLI");var C4=this.cR("ATTACHITEM3","PRIM_ATLI");var C5=this.cR("INFORMATION","PRIM_LABL");var C6=this.cR("GOOGLEMAP","XSGOOGLEM");var C7=this.cR("URL","PRIM_ALPH");if((C0!=null)&&(C0.iI()==false)){C0.iC();}C1.iC();C2.iC();C3.setAttachment("CENTER");C3.setManage(C6);C3.setParent(C2);
C3.iC();C4.setAttachment("TOP");C4.setManage(C5);C4.setParent(C2);C4.iC();C5.setCaption("Use the store locator above to find out your nearest store’s opening hours.");C5.setDisplayPosition(1);C5.setEllipses("WORD");C5.setHeight(25);C5.setLeft(0);C5.setParent(this);C5.setTabPosition(2);C5.setTabStop(false);C5.setTop(0);C5.setVerticalAlignment("CENTER");C5.setWidth(500);C5.setStyle(l.gTh("XSTHEME01").get("TEXT10ALMOSTBLACK"));C5.iC();C6.setTabStop(false);C6.setParent(this);C6.setDisplayPosition(2);
C6.setTabPosition(1);C6.setHeight(465);C6.setWidth(500);C6.setTop(25);C6.setLeft(0);C6.iC();C7.iC();C0.aH("COUNTRYUPDATED",this,e3);C1.aH("REFRESHED",this,e2);C6.aH("INITIALIZE",this,e1);this.setHeight(490);this.setWidth(500);this.setLayoutManager(C2);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#GoogleMap.Initialize",19);r.ln=19;{r.ln=29;m.GOOGLEMAP.setZOOM(2);r.ln=30;m.GEOLOCATION.mthREFRESH();r.ln=32;
m.GOOGLEMAP.mthADDMARKER(c1,c2,"122 Arthur Street North Sydney, NSW, 2060, Australia");r.ln=33;m.GOOGLEMAP.mthADDMARKER(c3,c4,"2700 Matheson Blvd East, Mississauga, ON, L4W 4V9, Canada");r.ln=34;m.GOOGLEMAP.mthADDMARKER(c5,c6,"13, rue Camille Desmoulins, 92441, ISSY-LES-MOULINEAUX, Cedex, France");r.ln=35;m.GOOGLEMAP.mthADDMARKER(c7,c8,"2-3-10, Kudanminami, Chiyoda-ku, Tokyo, 102-0074, Japan");r.ln=36;m.GOOGLEMAP.mthADDMARKER(c9,c10,"391B Orchard Road, #23-01 Ngee Ann City Tower B, 238874, Singapore");
r.ln=37;m.GOOGLEMAP.mthADDMARKER(c11,c12,"Paasheuvelweg 15, 1105 BE Amsterdam, Netherlands");r.ln=38;m.GOOGLEMAP.mthADDMARKER(c13,c14,"26-30 Upper Marlborough Road, St. Albans, Hertfordshire, AL1 3UU, United Kingdom");r.ln=39;m.GOOGLEMAP.mthADDMARKER(c15,c16,"2001 Butterfield Road, Downers Grove, IL, 60515, USA; and more");}r.ln=41;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#Geolocation.Refreshed",43);r.ln=43;{r.ln=45;m.GOOGLEMAP.setLONGITUDE(m.GEOLOCATION.getLongitude());r.ln=46;
m.GOOGLEMAP.setLATITUDE(m.GEOLOCATION.getLatitude());}r.ln=48;r.e();};function e3(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#MySession.CountryUpdated",50);r.ln=50;{r.ln=52;m.GOOGLEMAP.setZOOM(14);r.ln=54;{var v1=m.MYSESSION.ref.getPCOUNTRY();if(r.ln=56,l.s.eq(v1,"")){r.ln=59;m.GOOGLEMAP.setZOOM(2);r.ln=60;m.GOOGLEMAP.setLATITUDE(c15);r.ln=61;m.GOOGLEMAP.setLONGITUDE(c16);}else if(r.ln=63,l.s.eq(v1,"Australia")){r.ln=66;m.GOOGLEMAP.setLATITUDE(c1);r.ln=67;m.GOOGLEMAP.setLONGITUDE(c2);}else if(r.ln=69,l.s.eq(v1,"Canada"))
{r.ln=72;m.GOOGLEMAP.setLATITUDE(c3);r.ln=73;m.GOOGLEMAP.setLONGITUDE(c4);}else if(r.ln=75,l.s.eq(v1,"France")){r.ln=78;m.GOOGLEMAP.setLATITUDE(c5);r.ln=79;m.GOOGLEMAP.setLONGITUDE(c6);}else if(r.ln=81,l.s.eq(v1,"Japan")){r.ln=84;m.GOOGLEMAP.setLATITUDE(c7);r.ln=85;m.GOOGLEMAP.setLONGITUDE(c8);}else if(r.ln=87,l.s.eq(v1,"Singapore")){r.ln=90;m.GOOGLEMAP.setLATITUDE(c9);r.ln=91;m.GOOGLEMAP.setLONGITUDE(c10);}else if(r.ln=93,l.s.eq(v1,"Netherlands")){r.ln=96;m.GOOGLEMAP.setLATITUDE(c11);r.ln=97;m.GOOGLEMAP.setLONGITUDE(c12);
}else if(r.ln=99,l.s.eq(v1,"United Kingdom")){r.ln=102;m.GOOGLEMAP.setLATITUDE(c13);r.ln=103;m.GOOGLEMAP.setLONGITUDE(c14);}else{r.ln=108;m.GOOGLEMAP.setLATITUDE(c15);r.ln=109;m.GOOGLEMAP.setLONGITUDE(c16);}r.ln=111;}}r.ln=113;r.e();};}(window["LANSA"]));