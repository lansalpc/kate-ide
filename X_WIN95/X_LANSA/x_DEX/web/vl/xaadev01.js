﻿LANSA.addComponent({id:"XAADEV01",nm:"xDeviceBarcodeScanControl",ot:"rp",tp:"Reusable Part",de:"xDeviceBarcodeScanControl",tl:14010003},function(l,oI,u){var cO=l.rC(oI,{an:"PRIM_OBJT",pt:{pContinuousScan:{da:"rw"},pAllowDuplicates:{da:"rw"}},mt:{ScanCODE128:{},ScanCODE39:{},ScanITF14:{},ScanUPCA:{},ScanQRCode:{},AllTypes:{},BeginScan:{ps:{"BarcodeType":{pt:"i"}}}},ev:{Failed:{},Complete:{ps:{"Result":{pt:"i"},"Index":{pt:"i"}}}},co:function(){cO.aN.call(this);var C0=this.cR("BARCODESCANNER","XDEVICE03");
var C1=this.cR("CONTINUOUSSCAN","PRIM_BOLN");var C2=this.cR("ALLOWDUPLICATES","PRIM_BOLN");var C3=this.cR("BARCODERESULT","PRIM_ALPH");var C4=this.cR("BARCODEINDEX","PRIM_NMBR");var C5=this.cR("BARCODESCANNERINITIALIZED","PRIM_BOLN");C0.iC();C1.iC();C2.iC();C3.iC();C4.iC();C5.iC();C0.aH("INITIALIZE",this,e1);C0.aH("COMPLETED",this,e2);}});function e1(sender,Ps){var m=this.REF,r=l.eR(this,cO,"#BarcodeScanner.Initialize",30);r.ln=30;{r.ln=32;m.BARCODESCANNERINITIALIZED.set(true);}r.ln=34;r.e();};function e2(sender,Ps)
{var m=this.REF,r=l.eR(this,cO,"#BarcodeScanner.Completed",36);var P0=Ps.r("STATUS");var P1=Ps.r("MESSAGE");var P2=Ps.r("BARCODECOUNT");r.ln=36;{r.ln=38;if(l.s.eq(P0.get(),"OK")){r.ln=40;for(var i1=0,s1=1,t1=l.tI(l.sub(P2.get(),1));m.BARCODEINDEX.set(i1),(((s1>=0)&&(i1<=t1))||((s1<0)&&(i1>=t1)));i1+=s1){r.ln=42;m.BARCODERESULT.set(m.BARCODESCANNER.mthGETSCANNEDVALUE(m.BARCODEINDEX.get()));r.ln=44;{var eP=l.ePs();eP.cR("RESULT","PRIM_ALPH");eP.cR("INDEX","PRIM_NMBR");eP.r("RESULT").set(m.BARCODERESULT.get());
eP.r("INDEX").set(m.BARCODEINDEX.get());this.fE("COMPLETE",eP);eP.e();}}r.ln=48;m.BARCODESCANNER.mthCLEARBARCODETYPES();}}r.ln=52;r.e();};cO.mthSCANCODE128=function(){var r=l.mR(this,cO,"ScanCODE128",58);r.ln=58;{r.ln=60;cO.mthBEGINSCAN.call(this,"CODE128");}r.ln=62;r.e();};cO.mthSCANCODE39=function(){var r=l.mR(this,cO,"ScanCODE39",64);r.ln=64;{r.ln=66;cO.mthBEGINSCAN.call(this,"CODE39");}r.ln=68;r.e();};cO.mthSCANITF14=function(){var r=l.mR(this,cO,"ScanITF14",70);r.ln=70;{r.ln=72;cO.mthBEGINSCAN.call(this,"ITF14");
}r.ln=74;r.e();};cO.mthSCANUPCA=function(){var r=l.mR(this,cO,"ScanUPCA",76);r.ln=76;{r.ln=78;cO.mthBEGINSCAN.call(this,"UPCA");}r.ln=80;r.e();};cO.mthSCANQRCODE=function(){var r=l.mR(this,cO,"ScanQRCode",82);r.ln=82;{r.ln=84;cO.mthBEGINSCAN.call(this,"QRCODE");}r.ln=86;r.e();};cO.mthALLTYPES=function(){var r=l.mR(this,cO,"AllTypes",88);r.ln=88;{r.ln=90;cO.mthBEGINSCAN.call(this,"ALL");}r.ln=92;r.e();};cO.mthBEGINSCAN=function(p0){var m=this.REF,r=l.mR(this,cO,"BeginScan",98);var P0=r.cP("BARCODETYPE","PRIM_ALPH");
P0.set(p0);r.ln=98;{r.ln=101;if(l.tB(m.BARCODESCANNERINITIALIZED.get())){r.ln=103;if(l.tB(l.s.eq(P0.get(),"ALL"))){r.ln=105;m.BARCODESCANNER.mthADDBARCODETYPE("CODE128");r.ln=107;m.BARCODESCANNER.mthADDBARCODETYPE("CODE39");r.ln=109;m.BARCODESCANNER.mthADDBARCODETYPE("ITF14");r.ln=111;m.BARCODESCANNER.mthADDBARCODETYPE("QRCODE");r.ln=113;m.BARCODESCANNER.mthADDBARCODETYPE("UPCA");}else{r.ln=117;m.BARCODESCANNER.mthADDBARCODETYPE(P0.get());}r.ln=121;m.BARCODESCANNER.setSCANMULTIPLE(m.CONTINUOUSSCAN.get());
r.ln=123;m.BARCODESCANNER.setALLOWDUPLICATES(m.ALLOWDUPLICATES.get());r.ln=125;m.BARCODESCANNER.mthACTIVATESCANNER();}else{r.ln=129;this.fE("FAILED");}}r.ln=133;r.e();};cO.getPCONTINUOUSSCAN=function(){return this.REF.CONTINUOUSSCAN.get();};cO.setPCONTINUOUSSCAN=function(v){this.REF.CONTINUOUSSCAN.set(v);};cO.getPALLOWDUPLICATES=function(){return this.REF.ALLOWDUPLICATES.get();};cO.setPALLOWDUPLICATES=function(v){this.REF.ALLOWDUPLICATES.set(v);};},{rc:["XDEVICE03"],rp:["PRIM_OBJT","PRIM_BOLN","PRIM_ALPH","PRIM_NMBR"]
});