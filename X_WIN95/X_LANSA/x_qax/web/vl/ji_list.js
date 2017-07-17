// ----------------------------
// -- Reusable Part: JI_LIST --
// ----------------------------
LANSA.addComponent(
{
   id: "JI_LIST", 
   nm: "JI_list", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "List cell", 
   tl: 14010003
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

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      EMPNO:
      {
         nm: "EMPNO",
         ft: "A",
         ln: 5,
         dc: 0,
         lb: { "ENG": "Employee no....", "FRA": "No employé  . .", "JPN": "Employee no...." }[ curLanguage ],
         h1: { "ENG": "  Employ", "FRA": "Salarié", "JPN": "  Employ" }[ curLanguage ],
         h2: { "ENG": "  Number", "FRA": " ", "JPN": "  Number" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Employee Number", "FRA": "Numéro d´employé", "JPN": "Employee Number" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
      SURNAME:
      {
         nm: "SURNAME",
         ft: "A",
         ln: 20,
         dc: 0,
         ks: "O",
         lb: "Surname........",
         h1: "Surname",
         h2: " ",
         h3: " ",
         de: "Employee Surname",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      GIVENAME:
      {
         nm: "GIVENAME",
         ft: "A",
         ln: 20,
         dc: 0,
         ks: "O",
         lb: "Given names....",
         h1: "Given name(s)",
         h2: " ",
         h3: " ",
         de: "Employee Given Name(s)",
         dv: "",
         ia: [ "FE", "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_OBJT", 
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
         var fld = this.addFields( "JI_LIST", Fields );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "EMPNO": fld.EMPNO, "SURNAME": fld.SURNAME, "GIVENAME": fld.GIVENAME } );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=ji_list.js
