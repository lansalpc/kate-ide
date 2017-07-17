﻿LANSA.addComponent({id:"XDEMOCAM",nm:"xDemoCameraControl",ot:"rp",tp:"Reusable Part",de:"Device Camera Control",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{pMegaPixels:{da:"rw"},pVideoQuality:{da:"rw"}},mt:{CapturePicture:{ps:{"SaveImageToGallery":{pt:"i"}}},CaptureVideo:{ps:{"SaveImageToGallery":{pt:"i"}}},SelectFromGallery:{},AnnotateImage:{ps:{"SaveImageToGallery":{pt:"i"}}},ActivateDeviceCamera:{ps:{"Source":{pt:"i"},"EnableImage":{pt:"i"},"EnableVideo":{pt:"i"},"EnableAnnotation":
{pt:"i"},"SaveToGallery":{pt:"i"}}},CalculateDimensions:{}},ev:{Failed:{},Completed:{ps:{"File":{pt:"i"},"Base64Data":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("CAMERACONTROL","XDEVICE04");var C1=this.cR("CAMERAINITIALISED","PRIM_BOLN");var C2=this.cR("MEGAPIXELS","PRIM_NMBR");var C3=this.cR("IMAGEHEIGHT","PRIM_NMBR");var C4=this.cR("IMAGEWIDTH","PRIM_NMBR");var C5=this.cR("VIDEOQUALITY","PRIM_ALPH");C0.iC();C1.iC();C2.setValue(2);C2.iC();C3.iC();C4.iC();C5.setValue("LOW");C5.iC();
C0.aH("INITIALIZE",this,e1);C0.aH("COMPLETED",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CameraControl.Initialize",30);r.ln=30;{r.ln=32;m.CAMERAINITIALISED.set(true);}r.ln=34;r.e();};function e2(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#CameraControl.Completed",36);r.ln=36;{r.ln=38;{var eP=l.ePs();eP.cR("FILE","PRIM_ALPH");eP.cR("BASE64DATA","PRIM_ALPH");eP.r("FILE").set(m.CAMERACONTROL.getOUTPUTFILE());eP.r("BASE64DATA").set(l.cat("data:image/png;base64,",m.CAMERACONTROL.getIMAGEASBASE64DATA()));
this.fE("COMPLETED",eP);eP.e();}}r.ln=40;r.e();};cO.mthCAPTUREPICTURE=function(p0){var r=l.mR(this,cO,"CapturePicture",46);var P0=r.cP("SAVEIMAGETOGALLERY","PRIM_BOLN");P0.set(p0);r.ln=46;{r.ln=49;cO.mthACTIVATEDEVICECAMERA.call(this,"CAM",true,false,false,P0.get());}r.ln=51;r.e();};cO.mthCAPTUREVIDEO=function(p0){var r=l.mR(this,cO,"CaptureVideo",53);var P0=r.cP("SAVEIMAGETOGALLERY","PRIM_BOLN");P0.set(p0);r.ln=53;{r.ln=56;cO.mthACTIVATEDEVICECAMERA.call(this,"CAM",false,true,false,P0.get());}r.ln=58;
r.e();};cO.mthSELECTFROMGALLERY=function(){var r=l.mR(this,cO,"SelectFromGallery",60);r.ln=60;{r.ln=62;cO.mthACTIVATEDEVICECAMERA.call(this,"LIB",true,true,false,false);}r.ln=64;r.e();};cO.mthANNOTATEIMAGE=function(p0){var r=l.mR(this,cO,"AnnotateImage",66);var P0=r.cP("SAVEIMAGETOGALLERY","PRIM_BOLN");P0.set(p0);r.ln=66;{r.ln=69;cO.mthACTIVATEDEVICECAMERA.call(this,"CAM",true,false,true,P0.get());}r.ln=71;r.e();};cO.mthACTIVATEDEVICECAMERA=function(p0,p1,p2,p3,p4){var m=this.REF,r=l.mR(this,cO,"ActivateDeviceCamera",77);
var P0=r.cP("SOURCE","PRIM_ALPH");var P1=r.cP("ENABLEIMAGE","PRIM_BOLN");var P2=r.cP("ENABLEVIDEO","PRIM_BOLN");var P3=r.cP("ENABLEANNOTATION","PRIM_BOLN");var P4=r.cP("SAVETOGALLERY","PRIM_BOLN");P0.set(p0);P1.set(p1);P2.set(p2);P3.set(p3);P4.set(p4);r.ln=77;{r.ln=84;m.CAMERACONTROL.setSOURCE(P0.get());m.CAMERACONTROL.setENABLEIMAGE(P1.get());m.CAMERACONTROL.setENABLEVIDEO(P2.get());m.CAMERACONTROL.setENABLEANNOTATION(P3.get());m.CAMERACONTROL.setSAVETOPHOTOGALLERY(P4.get());m.CAMERACONTROL.setRETURNFILE(true);
m.CAMERACONTROL.setRETURNBASE64STRING(true);r.ln=86;if(l.tB(P2.get())){r.ln=88;m.CAMERACONTROL.setVIDEOQUALITY(m.VIDEOQUALITY.get());}r.ln=92;if(l.tB(m.CAMERAINITIALISED.get())){r.ln=94;this.mthCALCULATEDIMENSIONS();r.ln=96;m.CAMERACONTROL.mthACTIVATECAMERA();}else{r.ln=100;this.fE("FAILED");}}r.ln=104;r.e();};cO.mthCALCULATEDIMENSIONS=function(){var m=this.REF,r=l.mR(this,cO,"CalculateDimensions",106);var C0=r.cR("TOTALPIXELS","PRIM_NMBR");C0.iC();r.ln=106;{r.ln=110;C0.set(l.n.Sqrt(l.n.AsFloat(l.div(l.mul(m.MEGAPIXELS.get(),1000000),12))));
r.ln=112;if(l.n.gt(l.WEB().getWebPage().getHeight(),l.WEB().getWebPage().getWidth())){r.ln=114;m.IMAGEHEIGHT.set(l.mul(C0.get(),4));r.ln=116;m.IMAGEWIDTH.set(l.mul(C0.get(),3));r.ln=118;m.CAMERACONTROL.mthSETIMAGESIZE("PORT",m.IMAGEWIDTH.get(),m.IMAGEHEIGHT.get());r.ln=120;m.CAMERACONTROL.mthSETBASE64IMAGESIZE("PORT",m.IMAGEWIDTH.get(),m.IMAGEHEIGHT.get());}else{r.ln=124;m.IMAGEWIDTH.set(l.mul(C0.get(),4));r.ln=126;m.IMAGEHEIGHT.set(l.mul(C0.get(),3));r.ln=128;m.CAMERACONTROL.mthSETIMAGESIZE("LAND",m.IMAGEWIDTH.get(),m.IMAGEHEIGHT.get());
r.ln=130;m.CAMERACONTROL.mthSETBASE64IMAGESIZE("LAND",m.IMAGEWIDTH.get(),m.IMAGEHEIGHT.get());}}r.ln=134;r.e();};cO.getPMEGAPIXELS=function(){return this.REF.MEGAPIXELS.get();};cO.setPMEGAPIXELS=function(v){this.REF.MEGAPIXELS.set(v);};cO.getPVIDEOQUALITY=function(){return this.REF.VIDEOQUALITY.get();};cO.setPVIDEOQUALITY=function(v){this.REF.VIDEOQUALITY.set(v);};},{rc:["XDEVICE04"],rp:["PRIM_OBJT","PRIM_BOLN","PRIM_NMBR","PRIM_ALPH"],dp:["PRIM_NMBR"]});