﻿LANSA.addComponent({id:"DF_T50ASO",ot:"rp",tp:"Reusable Part",de:"\OC=Example of Assistance snap in",tl:14011102},function(l,oI,u){var cL="ENG";if((l.gCL()=="FRA")||(l.gCL()=="JPN")){cL=l.gCL();}var Fd={F1:{nm:"VF_ELSYMN",ft:"A",ln:50,dc:0,lb:"Image Name",h1:"Image",h2:"Name",h3:"",de:"Image Name",dv:"",ia:["FE"]}};var cO=l.rC(oI,{an:"VF_AC031O",fd:Fd,mt:{uInitialize:{},uTerminate:{},uDisplayRequested:{ps:{"AdditionalRequestdetails":{pt:"i"}}}},co:function(){cO.aN.call(this);this.aF("DF_T50ASO",Fd);
var C0=this.cR("MAINATTACHMENTMANAGER","PRIM_ATLM");var C1=this.cR("ATTACHEXAMPLEMESSAGE","PRIM_ATLI");var C2=this.cR("ATTACHITEM1","PRIM_ATLI");var C3=this.cR("EXAMPLEMESSAGE","PRIM_LABL");var C4=this.cR("LABEL_ADDITIONAL_DETAILS","PRIM_LABL");var C5=this.cR("EXAMPLEMESSAGESTYLE","PRIM_VS","Style");C0.iC();C1.setManage(C3);C1.setParent(C0);C1.setAttachment("CENTER");C1.setMarginLeft(8);C1.setMarginTop(8);C1.setMarginBottom(8);C1.setMarginRight(8);C1.iC();C2.setManage(C4);C2.setParent(C0);C2.setAttachment("BOTTOM");
C2.iC();C3.setParent(this);C3.setCaption("This is an example of an optional snap in ‘Assistance’ pane. To make your own create a component with ancestor VF_AC031O and then enrol in your framework on the Web/RAMP details tab.");C3.setDisplayPosition(2);C3.setTabPosition(1);C3.setTabStop(false);C3.setLeft(8);C3.setTop(8);C3.setHeight(350);C3.setWidth(527);C3.setAlignment("CENTER");C3.setVerticalAlignment("CENTER");C3.setStyle(C5);C3.iC();C4.setCaption("Additional Details");C4.setDisplayPosition(1);
C4.setEllipses("WORD");C4.setHeight(73);C4.setLeft(0);C4.setParent(this);C4.setTabPosition(2);C4.setTabStop(false);C4.setTop(366);C4.setVerticalAlignment("CENTER");C4.setWidth(543);C4.iC();C5.setFontSize(12);C5.setTextColor("BLACK");C5.iC();this.setLayoutManager(C0);}});var cA=cO.aN.prototype;cO.mthGET_UHINT=function(){var r=l.pR(this,cO,"Get_uHint",34);var P0=r.cP("RETURNHINT","PRIM_DC","UnicodeString");r.ln=34;{r.ln=35;P0.set(this.getUHINT());}r.ln=36;return r.rV(P0.get());};cO.mthGET_UIMAGENAME=function()
{var r=l.pR(this,cO,"Get_uImageName",40);var P0=r.cPF("RETURNIMAGENAME",Fd.F1.Dc);r.ln=40;{r.ln=41;P0.set(this.getUIMAGENAME());}r.ln=42;return r.rV(P0.get());};cO.mthUINITIALIZE=function(){var r=l.mR(this,cO,"uInitialize",46);r.ln=46;{r.ln=47;cA.mthUINITIALIZE.call(this);}r.ln=48;r.e();};cO.mthUTERMINATE=function(){var r=l.mR(this,cO,"uTerminate",52);r.ln=52;{r.ln=53;cA.mthUTERMINATE.call(this);}r.ln=54;r.e();};cO.mthUDISPLAYREQUESTED=function(p0){var m=this.REF,r=l.mR(this,cO,"uDisplayRequested",58);
var P0=r.cPD("ADDITIONALREQUESTDETAILS");P0=p0;r.ln=58;{r.ln=61;cA.mthUDISPLAYREQUESTED.call(this,P0);r.ln=68;m.LABEL_ADDITIONAL_DETAILS.setCaption("");r.ln=69;if(l.Io(P0,"PRIM_ALPH")){r.ln=70;m.LABEL_ADDITIONAL_DETAILS.setCaption(l.cat("The additional details passed with the request to display were: ",l.cast(P0,"PRIM_ALPH").getValue()));}}r.ln=72;r.e();};{Fd.F1.Dc=function(){this.aN.call(this,Fd.F1);};l.cFC({co:Fd.F1.Dc,an:"PRIM_FLD",fn:"VF_ELSYMN"});}},{rc:["VF_AC031O"],rp:["PRIM_ATLM","PRIM_ATLI","PRIM_LABL","PRIM_VS.Style","PRIM_FLD"]
});