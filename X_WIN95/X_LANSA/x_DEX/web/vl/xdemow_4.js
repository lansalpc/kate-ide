﻿LANSA.addComponent({id:"XDEMOW_4",nm:"xDemoWebWeatherItem",ot:"rp",tp:"Reusable Part",de:"Location List Item",tl:14010003},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")||(l.gCL()=="LLL")){cL=l.gCL();}var c1=l.cDec("1.02"),c2=l.cDec("0.98"),c3=l.cDec("273.15"),c4=l.cDec("1.8");var Fd={F1:{nm:"XDEMOALPH",ft:"A",ln:128,dc:0,lb:"Alpha 128",h1:"Alpha",h2:"128",h3:"",de:"Alpha 128",dv:"",ia:["FE","LC"]},F2:{nm:"XDEMOAL_1",ft:"A",ln:256,dc:0,lb:{"ENG":"Alpha 256","FRA":"Alpha 128","JPN":"Alpha 128","LLL":"Alpha 256"}[cL],
h1:"Alpha",h2:{"ENG":"256","FRA":"128","JPN":"128","LLL":"256"}[cL],h3:"",de:{"ENG":"Alpha 256","FRA":"Alpha 128","JPN":"Alpha 128","LLL":"Alpha 256"}[cL],dv:"",ia:["FE","LC"]},F3:{nm:"DESCRIPTION",ft:"A",ln:50,dc:0,lb:"Description",h1:"Description",h2:"",h3:"",de:"Description",dv:""},F4:{nm:"ICONCODE",ft:"A",ln:10,dc:0,lb:"IconCode",h1:"IconCode",h2:"",h3:"",de:"IconCode",dv:""}};var cO=l.rC(oI,{an:"PRIM_PANL",fd:Fd,mt:{OnAdd:{ps:{"TreeItem":{pt:"i"}}},OnUpdate:{ps:{"TreeItem":{pt:"i"}}},UpdateItem:
{},GetWeather:{ps:{"Resource":{pt:"i"}}},UpdateForPending:{},Update:{ps:{"Weather":{pt:"i"}}},UpdateForFailure:{ps:{"Request":{pt:"i"}}},GetCelcius:{ps:{"Kelvin":{pt:"i"}}},GetFahrenheit:{ps:{"Kelvin":{pt:"i"}}}},co:function(){cO.aN.call(this);var f=this.aF("XDEMOW_4",Fd);var C0=this.cR("STYLE1","PRIM_VS","Style");var C1=this.cR("BRUSH1","PRIM_VS","SolidBrush");var C2=this.cR("TABLELAYOUT_1","PRIM_TBLO");var C3=this.cR("ROW_1","PRIM_TBLO","Row");var C4=this.cR("ROW_2","PRIM_TBLO","Row");var C5=this.cR("ROW_3","PRIM_TBLO","Row");
var C6=this.cR("ROW_4","PRIM_TBLO","Row");var C7=this.cR("COLUMN_1","PRIM_TBLO","Column");var C8=this.cR("COLUMN_2","PRIM_TBLO","Column");var C9=this.cR("COLUMN_3","PRIM_TBLO","Column");var C10=this.cR("TBLO_1","PRIM_TBLO","Item");var C11=this.cR("TBLO_2","PRIM_TBLO","Item");var C12=this.cR("TBLO_3","PRIM_TBLO","Item");var C13=this.cR("TBLO_4","PRIM_TBLO","Item");var C14=this.cR("TBLO_5","PRIM_TBLO","Item");var C15=this.cR("TBLO_6","PRIM_TBLO","Item");var C16=this.cR("LCITY","PRIM_LABL");var C17=this.cR("WEATHERNOWICON","PRIM_IMAG");
var C18=this.cR("WEATHERNOW","PRIM_LABL");var C19=this.cR("LMAXIMUM","PRIM_LABL");var C20=this.cR("LMINIMUM","PRIM_LABL");var C21=this.cR("LWINDSPEED","PRIM_LABL");var C22=this.cR("GEOLOCATION","PRIM_WEB","Geolocation");C0.setBackgroundBrush(C1);C0.iC();C1.setColor("THEME50");C1.setOpacity(50);C1.iC();C2.iC();C3.setDisplayPosition(1);C3.setParent(C2);C3.setHeight(32);C3.setUnits("PIXELS");C3.iC();C4.setDisplayPosition(2);C4.setParent(C2);C4.setHeight(c1);C4.iC();C5.setDisplayPosition(3);C5.setParent(C2);
C5.setHeight(c2);C5.iC();C6.setDisplayPosition(4);C6.setParent(C2);C6.iC();C7.setDisplayPosition(1);C7.setParent(C2);C7.setWidth(201);C7.setUnits("PIXELS");C7.iC();C8.setDisplayPosition(2);C8.setParent(C2);C8.setWidth(32);C8.setUnits("PIXELS");C8.iC();C9.setDisplayPosition(3);C9.setParent(C2);C9.iC();C10.setAlignment("TOPLEFT");C10.setColumn(C7);C10.setFlow("DOWN");C10.setManage(C16);C10.setParent(C2);C10.setRow(C3);C10.setRowSpan(2);C10.iC();C11.setAlignment("CENTERLEFT");C11.setColumn(C8);C11.setManage(C17);
C11.setParent(C2);C11.setRow(C3);C11.setFlow("RIGHT");C11.iC();C12.setAlignment("CENTERLEFT");C12.setColumn(C9);C12.setFlow("RIGHT");C12.setManage(C18);C12.setParent(C2);C12.setRow(C3);C12.iC();C13.setAlignment("TOPLEFT");C13.setColumn(C9);C13.setFlow("DOWN");C13.setManage(C19);C13.setParent(C2);C13.setRow(C4);C13.iC();C14.setAlignment("TOPLEFT");C14.setColumn(C9);C14.setFlow("DOWN");C14.setManage(C20);C14.setParent(C2);C14.setRow(C5);C14.iC();C15.setAlignment("TOPLEFT");C15.setColumn(C9);C15.setFlow("DOWN");
C15.setManage(C21);C15.setParent(C2);C15.setRow(C6);C15.iC();C16.setCaption("City - Unavailable");C16.setDisplayPosition(1);C16.setEllipses("WORD");C16.setLeft(0);C16.setParent(this);C16.setTabPosition(1);C16.setTabStop(false);C16.setTop(0);C16.setHeight(56);C16.setWidth(201);C16.setMarginLeft(4);C16.setThemeDrawStyle("Heading1");C16.iC();C17.setDisplayPosition(2);C17.setLeft(201);C17.setParent(this);C17.setTabPosition(2);C17.setTop(0);C17.setHeight(32);C17.setWidth(32);C17.iC();C18.setCaption("Today - Unavailable");
C18.setDisplayPosition(3);C18.setEllipses("WORD");C18.setLeft(233);C18.setParent(this);C18.setTabPosition(3);C18.setTabStop(false);C18.setTop(0);C18.setHeight(32);C18.setWidth(369);C18.setMarginLeft(4);C18.setThemeDrawStyle("Heading1");C18.iC();C19.setCaption("Maximum - Unavailable");C19.setDisplayPosition(4);C19.setEllipses("WORD");C19.setLeft(233);C19.setParent(this);C19.setTabPosition(4);C19.setTabStop(false);C19.setTop(32);C19.setHeight(24);C19.setWidth(369);C19.setMarginLeft(4);C19.iC();C20.setCaption("Minimum - Unavailable");
C20.setDisplayPosition(5);C20.setEllipses("WORD");C20.setLeft(233);C20.setParent(this);C20.setTabPosition(5);C20.setTabStop(false);C20.setTop(56);C20.setHeight(23);C20.setWidth(369);C20.setMarginLeft(4);C20.iC();C21.setCaption("Wind speed - Unavailable");C21.setDisplayPosition(6);C21.setEllipses("WORD");C21.setLeft(233);C21.setParent(this);C21.setTabPosition(6);C21.setTabStop(false);C21.setTop(79);C21.setHeight(23);C21.setWidth(369);C21.setMarginLeft(4);C21.iC();C22.iC();C22.aH("REFRESHED",this,e1);
this.setHeight(102);this.setWidth(602);this.setLayoutManager(C2);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setMouseOverStyle(C0);this.aLF({"XDEMOALPH":f.F1,"XDEMOAL_1":f.F2});}});cO.mthONADD=function(p0){var f=this.FLD.XDEMOW_4,m=this.REF,r=l.mR(this,cO,"OnAdd",35);var P0=r.cPD("TREEITEM");P0=p0;r.ln=35;{r.ln=37;if(l.s.eq(f.F1.get(),"CURRENTLOCATION")){r.ln=39;m.GEOLOCATION.mthREFRESH();}else{r.ln=43;cO.mthGETWEATHER.call(this,l.s.Substitute("/data/2.5/weather?q=&1&Appid=&2",f.F1.get(),f.F2.get()));
}}r.ln=47;r.e();};cO.mthONUPDATE=function(p0){var r=l.mR(this,cO,"OnUpdate",49);var P0=r.cPD("TREEITEM");P0=p0;r.ln=49;{r.ln=51;this.mthUPDATEITEM();}r.ln=53;r.e();};function e1(sender,Ps){var f=this.FLD.XDEMOW_4,m=this.REF,r=l.eR(this,cO,"#Geolocation.Refreshed",55);r.ln=55;{r.ln=57;cO.mthGETWEATHER.call(this,l.s.Substitute("/data/2.5/weather?lat=&1&lon=&2&Appid=&3",l.n.AsString(m.GEOLOCATION.getLatitude()),l.n.AsString(m.GEOLOCATION.getLongitude()),f.F2.get()));}r.ln=59;r.e();};cO.mthUPDATEITEM=function()
{var f=this.FLD.XDEMOW_4,m=this.REF,r=l.mR(this,cO,"UpdateItem",61);r.ln=61;{r.ln=63;if(l.s.eq(f.F1.get(),"CURRENTLOCATION")){r.ln=65;m.GEOLOCATION.mthREFRESH();}else{r.ln=69;cO.mthGETWEATHER.call(this,l.s.Substitute("/data/2.5/weather?q=&1&Appid=&2",f.F1.get(),f.F2.get()));}}r.ln=73;r.e();};cO.mthGETWEATHER=function(p0){var r=l.mR(this,cO,"GetWeather",75);var P0=r.cP("RESOURCE","PRIM_ALPH");P0.set(p0);var C0=r.cR("REQUEST","PRIM_WEB","HttpRequest");var C1=r.cR("JSON","PRIM_WEB","Json");C0.iC();C1.iC();
C0.aH("COMPLETED",this,e2);r.ln=75;{r.ln=81;C0.setUrl(l.cat("http://api.openweathermap.org",P0.get()));r.ln=83;this.mthUPDATEFORPENDING();r.ln=85;C0.mthEXECUTEASYNC();}r.ln=107;r.e();function e2(sender,Ps){var r=l.eR(this,cO,"#Request.Completed",87);r.ln=87;{r.ln=89;if((C0.getResponse()!=null)){r.ln=91;{var v1=C0.getResponse().getStatusCode();if(r.ln=92,l.n.eq(v1,200)){r.ln=94;C1.set(C0.getResponse().getContent().get());r.ln=95;cO.mthUPDATE.call(this,C1.getRootItem());}else{r.ln=99;cO.mthUPDATEFORFAILURE.call(this,C0);
}r.ln=101;}}}r.ln=105;r.e();}};cO.mthUPDATEFORPENDING=function(){var m=this.REF,r=l.mR(this,cO,"UpdateForPending",109);r.ln=109;{r.ln=111;m.LCITY.set("Obtaining Location");r.ln=113;m.WEATHERNOW.set("Contacting Server");r.ln=115;m.LMAXIMUM.set("");r.ln=116;m.LMINIMUM.set("");r.ln=117;m.LWINDSPEED.set("");}r.ln=119;r.e();};cO.mthUPDATE=function(p0){var f=this.FLD.XDEMOW_4,m=this.REF,r=l.mR(this,cO,"Update",121);var P0=r.cPD("WEATHER");P0=p0;r.ln=121;{r.ln=128;m.LCITY.set(l.s.Substitute("&1, &2",P0.get("name").mthASSTRING(),P0.get("sys").getItem("country").mthASSTRING()));
r.ln=131;f.F3.set(P0.getItem("weather").getItemAt(1).getItem("description").mthASSTRING());r.ln=134;m.WEATHERNOW.set(l.s.Substitute("&1°C (&2°F) &3",l.n.AsString(cO.mthGETCELCIUS.call(this,P0.getItem("main").getItem("temp").mthASNUMBER())),l.n.AsString(cO.mthGETFAHRENHEIT.call(this,P0.getItem("main").getItem("temp").mthASNUMBER())),f.F3.get()));r.ln=137;f.F4.set(P0.getItem("weather").getItemAt(1).getItem("icon").mthASSTRING());r.ln=139;m.WEATHERNOWICON.setImage(l.APPL().mthCREATEBITMAP(l.s.Substitute("http://openweathermap.org/img/w/&1.png",f.F4.get())));
r.ln=142;m.LMAXIMUM.set(l.s.Substitute("Maximum &1°C (&2°F)",l.n.AsString(cO.mthGETCELCIUS.call(this,P0.getItem("main").getItem("temp_max").mthASNUMBER())),l.n.AsString(cO.mthGETFAHRENHEIT.call(this,P0.getItem("main").getItem("temp_max").mthASNUMBER())),f.F3.get()));r.ln=143;m.LMINIMUM.set(l.s.Substitute("Minimum &1°C (&2°F)",l.n.AsString(cO.mthGETCELCIUS.call(this,P0.getItem("main").getItem("temp_min").mthASNUMBER())),l.n.AsString(cO.mthGETFAHRENHEIT.call(this,P0.getItem("main").getItem("temp_min").mthASNUMBER())),f.F3.get()));
r.ln=146;m.LWINDSPEED.set(l.s.Substitute("Wind Speed &1 m/s at &2 degrees",l.n.AsString(P0.getItem("wind").getItem("speed").mthASNUMBER()),l.n.AsString(P0.getItem("wind").getItem("speed").mthASNUMBER())));}r.ln=148;r.e();};cO.mthUPDATEFORFAILURE=function(p0){var m=this.REF,r=l.mR(this,cO,"UpdateForFailure",150);var P0=r.cPD("REQUEST");P0=p0;r.ln=150;{r.ln=153;m.LCITY.set("Unknown");r.ln=155;m.WEATHERNOW.set("Request to the server failed");r.ln=157;m.LMAXIMUM.set(l.s.Substitute("Response Code - &1",l.n.AsString(P0.getResponse().getStatusCode())));
r.ln=158;m.LMINIMUM.set(l.s.Substitute("Reason - &1",P0.getResponse().getStatusText()));r.ln=159;m.LWINDSPEED.set("");}r.ln=161;r.e();};cO.mthGETCELCIUS=function(p0){var r=l.mR(this,cO,"GetCelcius",163);var P0=r.cP("KELVIN","PRIM_NMBR");var P1=r.cP("RESULT","PRIM_NMBR");P0.set(p0);r.ln=163;{r.ln=167;P1.set(l.sub(P0.get(),c3));}r.ln=169;return r.rV(P1.get());};cO.mthGETFAHRENHEIT=function(p0){var r=l.mR(this,cO,"GetFahrenheit",171);var P0=r.cP("KELVIN","PRIM_NMBR");var P1=r.cP("RESULT","PRIM_NMBR");
P0.set(p0);r.ln=171;{r.ln=175;P1.set(l.add(l.mul(l.sub(P0.get(),c3),c4),32));}r.ln=177;return r.rV(P1.get());};},{rp:["PRIM_PANL","PRIM_VS.Style","PRIM_VS.SolidBrush","PRIM_TBLO","PRIM_TBLO.Row","PRIM_TBLO.Column","PRIM_TBLO.Item","PRIM_LABL","PRIM_IMAG","PRIM_WEB.Geolocation"],dp:["PRIM_WEB.HttpRequest","PRIM_WEB.Json"]});