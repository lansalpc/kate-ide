﻿(function(l,u){var oI=l.cV({id:"XDEMO_27",nm:"xDemoWebUDCTreeBaseItem",ot:"rp",tp:"Reusable Part",de:"Tree Item Base Class",tl:3});var cO=l.rC(oI,{an:"PRIM_PANL",pt:{TreeItem:{da:"r"}},mt:{OnAdd:{ps:{"TreeItem":{pt:"i"}}},ExpandCollapse:{},OnDelete:{ps:{"TreeItem":{pt:"i"}}},UpdateName:{ps:{"Sort":{pt:"i"}}}},co:function(){cO.aN.call(this);this.cD("GTREEITEM");this.setWidth(321);this.setDisplayPosition(1);this.setTabPosition(1);this.setLeft(0);this.setTop(0);this.setThemeDrawStyle("ListItem");}});
cO.mthONADD=function(p0){var m=this.REF,r=l.mR(this,cO,"OnAdd",8);var P0=r.cPD("TREEITEM");P0=p0;r.ln=8;{r.ln=10;this.srGTREEITEM(P0);}r.ln=12;r.e();};cO.mthEXPANDCOLLAPSE=function(){var m=this.REF,r=l.mR(this,cO,"ExpandCollapse",15);r.ln=15;{r.ln=17;if(m.GTREEITEM.getExpanded()){r.ln=19;m.GTREEITEM.mthCOLLAPSE();}else{r.ln=23;m.GTREEITEM.mthEXPAND();}}r.ln=27;r.e();};cO.mthONDELETE=function(p0){var m=this.REF,r=l.mR(this,cO,"OnDelete",29);var P0=r.cPD("TREEITEM");P0=p0;r.ln=29;{r.ln=31;this.srGTREEITEM(null);
}r.ln=33;r.e();};cO.mthUPDATENAME=function(p0){var r=l.mR(this,cO,"UpdateName",35);var P0=r.cP("SORT","PRIM_ALPH");P0.set((p0===u)?("GIVENAME"):(p0));r.ln=35;{}r.ln=38;r.e();};cO.getTREEITEM=function(){return this.REF.GTREEITEM;};cO.srGTREEITEM=function(rn){this.sR("GTREEITEM",rn);};}(window["LANSA"]));