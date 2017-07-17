// ----------------------------
// -- Reusable Part: HL9232B --
// ----------------------------
LANSA.addComponent(
{
   id: "HL9232B", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "?", 
   tl: 14020000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   if ( ( Lansa.getCurrentLanguage() == "FRA" ) || ( Lansa.getCurrentLanguage() == "JPN" ) )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

   // ---------------
   // -- Resources --
   // ---------------
   var resource1 = Lansa.createBitmap( "exbminf.png" );
   var resource2 = Lansa.createBitmap( "exbmar2r.png" );
   var resource3 = Lansa.createBitmap( "exbmsrch.png" );
   var resource4 = Lansa.createBitmap( "exbmarwl.png" );

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      STD_TEXT:
      {
         nm: "STD_TEXT",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: { "ENG": "Text", "FRA": "Texte", "JPN": "Text" }[ curLanguage ],
         h1: { "ENG": "Text", "FRA": "Texte", "JPN": "Text" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard TEXT", "FRA": "Texte Standard", "JPN": "Standard TEXT" }[ curLanguage ],
         dv: "",
         ia: [ "LC" ],
         vr: 
         [
            {
               wt: "E",
               wf: "N",
               vi: "Y",
               vu: "Y",
               vd: "N",
               rd: rule1,
               mt: { "ENG": "Text must be specified", "FRA": "Texte must be specified", "JPN": " Textを指定してください。" }[ curLanguage ]
            }
         ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "VF_AC010O", 
      fd: Fields, 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // -------------------
         // -- Create Fields --
         // -------------------
         var fld = this.addFields( "HL9232B", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_IMAG) Name(#Image1) Displayposition(1) Height(25) Image(#EXBMINF) Left(311) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Width(25) Imagesizing(BestFit)
         //
         var IMAGE1 = this.createReference( "IMAGE1", "PRIM_IMAG" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Displayposition(2) Left(18) Parent(#COM_OWNER) Tabposition(2) Top(48) Image(#EXBMAR2R)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LIST) Name(#List1) Displayposition(3) Left(88) Parent(#COM_OWNER) Tabposition(3) Top(120)
         //
         var LIST1 = this.createReference( "LIST1", "PRIM_LIST" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnAC8941) Columnwidth(199) Displayposition(1) Parent(#List1) Source(#STD_TEXT) Columnimage(#EXBMSRCH) Columnpopupimage(#EXBMARWL)
         //
         var COLUMNAC8941 = this.createReference( "COLUMNAC8941", "PRIM_LIST", "String" );

         // ------------------------
         // -- Initialize #IMAGE1 --
         // ------------------------
         IMAGE1.setDisplayPosition( 1 );
         IMAGE1.setHeight( 25 );
         IMAGE1.setImage( resource1 );
         IMAGE1.setLeft( 311 );
         IMAGE1.setParent( this );
         IMAGE1.setTabPosition( 1 );
         IMAGE1.setTabStop( false );
         IMAGE1.setTop( 0 );
         IMAGE1.setWidth( 25 );
         IMAGE1.setImageSizing( "BESTFIT" );
         IMAGE1.initialize();

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setDisplayPosition( 2 );
         BUTTON1.setLeft( 18 );
         BUTTON1.setParent( this );
         BUTTON1.setTabPosition( 2 );
         BUTTON1.setTop( 48 );
         BUTTON1.setImage( resource2 );
         BUTTON1.initialize();

         // -----------------------
         // -- Initialize #LIST1 --
         // -----------------------
         LIST1.setDisplayPosition( 3 );
         LIST1.setLeft( 88 );
         LIST1.setParent( this );
         LIST1.setTabPosition( 3 );
         LIST1.setTop( 120 );
         LIST1.initialize();

         // ------------------------------
         // -- Initialize #COLUMNAC8941 --
         // ------------------------------
         COLUMNAC8941.setColumnWidth( 199 );
         COLUMNAC8941.setDisplayPosition( 1 );
         COLUMNAC8941.setParent( LIST1 );
         COLUMNAC8941.setSource( fld.STD_TEXT );
         COLUMNAC8941.setColumnImage( resource3 );
         COLUMNAC8941.setColumnPopupImage( resource4 );
         COLUMNAC8941.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 281 );
         this.setWidth( 625 );
      }
   });

   // ----------------------
   // -- Validation rules --
   // ----------------------

   //
   // STD_TEXT - Must not be Blank
   //
   function rule1( STD_TEXT )
   {
      var value = STD_TEXT.get();

      return (

         //
         // *BLANK
         //
         Lansa.String.eq( value, "" )

      );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "VF_AC010O" ],
   rp: [ "PRIM_IMAG", "PRIM_PHBN", "PRIM_LIST", "PRIM_LIST.String" ]
});

//# sourceURL=hl9232b.js
