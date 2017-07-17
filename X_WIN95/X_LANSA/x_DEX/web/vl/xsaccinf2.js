// ------------------------------
// -- Reusable Part: XSACCINF2 --
// ------------------------------
LANSA.addComponent(
{
   id: "XSACCINF2", 
   nm: "XSAccountInformation2", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Account Information 2", 
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

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XSACCEML:
      {
         nm: "XSACCEML",
         ft: "C",
         ln: 200,
         dc: 0,
         lb: "Email",
         h1: "Email",
         h2: " ",
         h3: " ",
         de: "Email",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPASSWRD:
      {
         nm: "XSPASSWRD",
         ft: "VC",
         ln: 40,
         dc: 0,
         lb: "Password",
         h1: "Password",
         h2: " ",
         h3: " ",
         de: "Password",
         dv: "",
         ia: [ "FE", "ND" ]
      },
      XSACC1STN:
      {
         nm: "XSACC1STN",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "First Name",
         h1: "First",
         h2: "Name",
         h3: " ",
         de: "First Name",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSACCLSTN:
      {
         nm: "XSACCLSTN",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Last Name",
         h1: "Last",
         h2: "Name",
         h3: " ",
         de: "Last Name",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSBTHDTE:
      {
         nm: "XSBTHDTE",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: "Birth Date",
         h1: "Birth",
         h2: "Date",
         h3: " ",
         de: "Birth Date",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO" ]
      },
      XSPHNHME:
      {
         nm: "XSPHNHME",
         ft: "C",
         ln: 20,
         dc: 0,
         lb: "Home Phone",
         h1: "Home",
         h2: "Phone",
         h3: " ",
         de: "Home Phone",
         dv: "",
         ia: [ "FE" ]
      },
      XSPHNMBL:
      {
         nm: "XSPHNMBL",
         ft: "C",
         ln: 20,
         dc: 0,
         lb: "Mobile phone",
         h1: "Mobile",
         h2: "phone",
         h3: " ",
         de: "Mobile phone",
         dv: "",
         ia: [ "FE" ]
      },
      XSACCADR1:
      {
         nm: "XSACCADR1",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Address 1",
         h1: "Address",
         h2: "1",
         h3: " ",
         de: "Address 1",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSACCADR2:
      {
         nm: "XSACCADR2",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Address 2",
         h1: "Address",
         h2: "2",
         h3: " ",
         de: "Address 2",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSACCCITY:
      {
         nm: "XSACCCITY",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "City",
         h1: "City",
         h2: " ",
         h3: " ",
         de: "City",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSACCZIP:
      {
         nm: "XSACCZIP",
         ft: "C",
         ln: 50,
         dc: 0,
         lb: "Postcode",
         h1: "Postcode",
         h2: " ",
         h3: " ",
         de: "Postcode",
         dv: "",
         ia: [ "FE" ]
      },
      XSDLVADR1:
      {
         nm: "XSDLVADR1",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Address 1",
         h1: "Address",
         h2: "1",
         h3: " ",
         de: "Delivery Address 1",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSDLVADR2:
      {
         nm: "XSDLVADR2",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Address 2",
         h1: "Address",
         h2: "2",
         h3: " ",
         de: "Delivery Address 2",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSDLVCITY:
      {
         nm: "XSDLVCITY",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "City",
         h1: "City",
         h2: " ",
         h3: " ",
         de: "Delivery City",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSDLVZIP:
      {
         nm: "XSDLVZIP",
         ft: "C",
         ln: 50,
         dc: 0,
         lb: "Postcode",
         h1: "Postcode",
         h2: " ",
         h3: " ",
         de: "Delivery Postcode",
         dv: "",
         ia: [ "FE" ]
      },
      STD_QSEL:
      {
         nm: "STD_QSEL",
         ft: "A",
         ln: 256,
         dc: 0,
         ks: "O",
         lb: "Selection Made",
         h1: "Selection Expression",
         h2: " ",
         h3: " ",
         de: "Query Selection Expression",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSACCCNTY:
      {
         nm: "XSACCCNTY",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Country",
         h1: "Country",
         h2: " ",
         h3: " ",
         de: "Country",
         dv: "",
         ia: [ "FE" ]
      },
      XSACCSTT:
      {
         nm: "XSACCSTT",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "State",
         h1: "State",
         h2: " ",
         h3: " ",
         de: "State",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSDLVSTT:
      {
         nm: "XSDLVSTT",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "State",
         h1: "State",
         h2: " ",
         h3: " ",
         de: "Delivery State",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSDLVCNTY:
      {
         nm: "XSDLVCNTY",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Country",
         h1: "Country",
         h2: " ",
         h3: " ",
         de: "Delivery Country",
         dv: "",
         ia: [ "FE" ]
      },
      XSACCID:
      {
         nm: "XSACCID",
         ft: "I",
         ln: 4,
         dc: 0,
         lb: "Account Id",
         h1: "Account",
         h2: "Id",
         h3: " ",
         de: "Account Id",
         dv: 0,
         ia: [ "FE" ]
      },
      XSACCSTS:
      {
         nm: "XSACCSTS",
         ft: "C",
         ln: 20,
         dc: 0,
         lb: "Account Status",
         h1: "Account",
         h2: "Status",
         h3: " ",
         de: "Account Status",
         dv: "ACTIVE",
         ia: [ "FE" ]
      },
      XSACCTTL:
      {
         nm: "XSACCTTL",
         ft: "C",
         ln: 10,
         dc: 0,
         lb: "Account Title",
         h1: "Account",
         h2: "Title",
         h3: " ",
         de: "Account Title",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPHNWRK:
      {
         nm: "XSPHNWRK",
         ft: "C",
         ln: 20,
         dc: 0,
         lb: "Work Phone",
         h1: "Work",
         h2: "Phone",
         h3: " ",
         de: "Work Phone",
         dv: "",
         ia: [ "FE" ]
      },
      XSDLVINS:
      {
         nm: "XSDLVINS",
         ft: "NV",
         ln: 512,
         dc: 0,
         lb: "Delivery Instru",
         h1: "Delivery",
         h2: "Instructions",
         h3: " ",
         de: "Delivery Instructions",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSNWLCNC:
      {
         nm: "XSNWLCNC",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: "Birth Date",
         h1: "Birth",
         h2: "Date",
         h3: " ",
         de: "Newsletter Cancel Date",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO" ]
      },
      XSNWLSTS:
      {
         nm: "XSNWLSTS",
         ft: "C",
         ln: 20,
         dc: 0,
         lb: "Newsletter Sts",
         h1: "Newsletter",
         h2: "Status",
         h3: " ",
         de: "Newsletter Status",
         dv: "",
         ia: [ "FE" ]
      },
      XSNWLSBS:
      {
         nm: "XSNWLSBS",
         ft: "D",
         ln: 10,
         dc: 0,
         lb: "Birth Date",
         h1: "Birth",
         h2: "Date",
         h3: " ",
         de: "Newsletter Subscribe Date",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO" ]
      },
      XSSTATUS:
      {
         nm: "XSSTATUS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: "Status",
         h1: "Status",
         h2: " ",
         h3: " ",
         de: "Status",
         dv: "",
         ia: [ "FE" ]
      },
      XSPASSWRE:
      {
         nm: "XSPASSWRE",
         ft: "VC",
         ln: 40,
         dc: 0,
         lb: "Password",
         h1: "Password",
         h2: " ",
         h3: " ",
         de: "Encrypted Password",
         dv: "",
         ia: [ "FE", "ND" ]
      },
      XSENCRYPT:
      {
         nm: "XSENCRYPT",
         ft: "VC",
         ln: 24,
         dc: 0,
         lb: "Encryption Key",
         h1: "Encryption",
         h2: "Key",
         h3: " ",
         de: "Encryption Key",
         dv: "12345678ABCD",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         LoadAccount: 
         {
         },

         SaveAccount: 
         {
         },

         PreSaveValidate: 
         {
         },

         ShowMessageBox: 
         {
            ps: 
            {
               "title":
               {
                  pt: "i"
               }
            }
         }
      },

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
         this.addFields( "XSACCINF2", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XSSession) Name(#MySession) Scope(*Application)
         //
         var MYSESSION = this.createApplicationReference( "MYSESSION", "XSMYSSN" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column13) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN13 = this.createReference( "COLUMN13", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row9) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW9 = this.createReference( "ROW9", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row11) Parent(#TableLayout1) Displayposition(2) Height(50) Units(Pixels)
         //
         var ROW11 = this.createReference( "ROW11", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#PDeliveryItem1) Column(#Column13) Manage(#PDelivery) Parent(#TableLayout1) Row(#Row9) Alignment(TopCenter) Flow(Down) Marginleft(7)
         //
         var PDELIVERYITEM1 = this.createReference( "PDELIVERYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#PAddressItem1) Column(#Column2) Manage(#PAddress) Parent(#TableLayout1) Row(#Row9) Alignment(TopCenter) Flow(Down) Marginleft(3) Marginright(3)
         //
         var PADDRESSITEM1 = this.createReference( "PADDRESSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#PPersonalItem1) Alignment(TopCenter) Column(#Column1) Manage(#PPersonal) Parent(#TableLayout1) Row(#Row9) Flow(Down) Marginright(7)
         //
         var PPERSONALITEM1 = this.createReference( "PPERSONALITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#SaveAccountItem1) Manage(#SaveAccount2) Parent(#TableLayout1) Row(#Row11) Sizing(None) Column(#Column2) Marginright(5)
         //
         var SAVEACCOUNTITEM1 = this.createReference( "SAVEACCOUNTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout2)
         //
         var TABLELAYOUT2 = this.createReference( "TABLELAYOUT2", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(1) Parent(#TableLayout2)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(1) Parent(#TableLayout2)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout3)
         //
         var TABLELAYOUT3 = this.createReference( "TABLELAYOUT3", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(1) Parent(#TableLayout3)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(1) Parent(#TableLayout3)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout4)
         //
         var TABLELAYOUT4 = this.createReference( "TABLELAYOUT4", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column5) Displayposition(1) Parent(#TableLayout4)
         //
         var COLUMN5 = this.createReference( "COLUMN5", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row4) Displayposition(1) Parent(#TableLayout4)
         //
         var ROW4 = this.createReference( "ROW4", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout5)
         //
         var TABLELAYOUT5 = this.createReference( "TABLELAYOUT5", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column6) Displayposition(1) Parent(#TableLayout5)
         //
         var COLUMN6 = this.createReference( "COLUMN6", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row5) Displayposition(1) Parent(#TableLayout5)
         //
         var ROW5 = this.createReference( "ROW5", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel5Item1) Alignment(TopLeft) Column(#Column6) Manage(#PPersonal) Parent(#TableLayout5) Row(#Row5) Sizing(None) Flow(Down) Margintop(5) Marginleft(5)
         //
         var PANEL5ITEM1 = this.createReference( "PANEL5ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel6Item1) Alignment(TopLeft) Column(#Column6) Manage(#PAddress) Parent(#TableLayout5) Row(#Row5) Sizing(None) Flow(Down) Margintop(5) Marginleft(5)
         //
         var PANEL6ITEM1 = this.createReference( "PANEL6ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Panel7Item1) Alignment(TopLeft) Column(#Column6) Manage(#PDelivery) Parent(#TableLayout5) Row(#Row5) Sizing(None) Flow(Down) Margintop(5) Marginleft(5)
         //
         var PANEL7ITEM1 = this.createReference( "PANEL7ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout6)
         //
         var TABLELAYOUT6 = this.createReference( "TABLELAYOUT6", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column7) Displayposition(1) Parent(#TableLayout6)
         //
         var COLUMN7 = this.createReference( "COLUMN7", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column8) Displayposition(2) Parent(#TableLayout6)
         //
         var COLUMN8 = this.createReference( "COLUMN8", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row6) Displayposition(1) Parent(#TableLayout6)
         //
         var ROW6 = this.createReference( "ROW6", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LPersonalDetails) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Margintop(5)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LEmail) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSAccountEmail) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LPassword) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSPassword) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LTitle) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSAccountTitleDropDown) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LFirstName) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem13) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSAccountFirstname) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM13 = this.createReference( "LAYOUTITEM13", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem14) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LLastName) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM14 = this.createReference( "LAYOUTITEM14", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem15) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSAccountLastname) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM15 = this.createReference( "LAYOUTITEM15", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem16) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LBirthDate) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM16 = this.createReference( "LAYOUTITEM16", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem17) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSBirthDate) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM17 = this.createReference( "LAYOUTITEM17", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem18) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LHomePhone) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM18 = this.createReference( "LAYOUTITEM18", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem19) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSPhoneHome) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM19 = this.createReference( "LAYOUTITEM19", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem22) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#LMobilePhone) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2) Margintop(10)
         //
         var LAYOUTITEM22 = this.createReference( "LAYOUTITEM22", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem23) Alignment(TopLeft) Column(#Column7) Flow(Down) Manage(#XSPhoneMobile) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Marginright(10) Columnspan(2)
         //
         var LAYOUTITEM23 = this.createReference( "LAYOUTITEM23", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountTitleDropDownItem1) Alignment(TopLeft) Column(#Column7) Manage(#XSAccountTitleDropDown) Parent(#TableLayout6) Row(#Row6) Sizing(FitToWidth) Flow(Down) Marginleft(5) Marginright(5)
         //
         var XSACCOUNTTITLEDROPDOWNITEM1 = this.createReference( "XSACCOUNTTITLEDROPDOWNITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout7)
         //
         var TABLELAYOUT7 = this.createReference( "TABLELAYOUT7", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column9) Displayposition(1) Parent(#TableLayout7)
         //
         var COLUMN9 = this.createReference( "COLUMN9", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column10) Displayposition(2) Parent(#TableLayout7)
         //
         var COLUMN10 = this.createReference( "COLUMN10", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row7) Displayposition(1) Parent(#TableLayout7)
         //
         var ROW7 = this.createReference( "ROW7", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem24) Alignment(TopLeft) Column(#Column9) Flow(Down) Manage(#LAddress) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Margintop(5)
         //
         var LAYOUTITEM24 = this.createReference( "LAYOUTITEM24", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column9) Manage(#XSStateDropdown1) Parent(#TableLayout7) Row(#Row7) Columnspan(2) Alignment(TopLeft) Sizing(FitToWidth) Flow(Down) Marginright(10)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LStreetItem1) Alignment(TopLeft) Column(#Column9) Manage(#LStreet) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LSTREETITEM1 = this.createReference( "LSTREETITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountAddress1Item1) Alignment(TopLeft) Column(#Column9) Manage(#XSAccountAddress1) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10)
         //
         var XSACCOUNTADDRESS1ITEM1 = this.createReference( "XSACCOUNTADDRESS1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LAddressLine2Item1) Alignment(TopLeft) Column(#Column9) Manage(#LAddressLine2) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LADDRESSLINE2ITEM1 = this.createReference( "LADDRESSLINE2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountAddress2Item1) Alignment(TopLeft) Column(#Column9) Manage(#XSAccountAddress2) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10)
         //
         var XSACCOUNTADDRESS2ITEM1 = this.createReference( "XSACCOUNTADDRESS2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCityItem1) Alignment(TopLeft) Column(#Column9) Manage(#LCity) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LCITYITEM1 = this.createReference( "LCITYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountCityItem1) Alignment(TopLeft) Column(#Column9) Manage(#XSAccountCity) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10)
         //
         var XSACCOUNTCITYITEM1 = this.createReference( "XSACCOUNTCITYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LStateItem1) Alignment(TopLeft) Column(#Column9) Manage(#LState) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LSTATEITEM1 = this.createReference( "LSTATEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LZipItem1) Alignment(TopLeft) Column(#Column9) Manage(#LZip) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LZIPITEM1 = this.createReference( "LZIPITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountZipItem1) Alignment(TopLeft) Column(#Column9) Manage(#XSAccountZip) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10)
         //
         var XSACCOUNTZIPITEM1 = this.createReference( "XSACCOUNTZIPITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LCountryItem1) Alignment(TopLeft) Column(#Column9) Manage(#LCountry) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(10) Margintop(10)
         //
         var LCOUNTRYITEM1 = this.createReference( "LCOUNTRYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryDropDown1Item1) Alignment(TopLeft) Column(#Column9) Manage(#XSCountryDropDown1) Parent(#TableLayout7) Row(#Row7) Sizing(FitToWidth) Marginright(10) Columnspan(2) Flow(Down)
         //
         var XSCOUNTRYDROPDOWN1ITEM1 = this.createReference( "XSCOUNTRYDROPDOWN1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout8)
         //
         var TABLELAYOUT8 = this.createReference( "TABLELAYOUT8", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column11) Displayposition(1) Parent(#TableLayout8)
         //
         var COLUMN11 = this.createReference( "COLUMN11", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column12) Displayposition(2) Parent(#TableLayout8)
         //
         var COLUMN12 = this.createReference( "COLUMN12", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row8) Displayposition(1) Parent(#TableLayout8)
         //
         var ROW8 = this.createReference( "ROW8", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LDeliveryAddressItem1) Alignment(TopLeft) Column(#Column11) Manage(#LDeliveryAddress) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Flow(Down) Margintop(5)
         //
         var LDELIVERYADDRESSITEM1 = this.createReference( "LDELIVERYADDRESSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem26) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LStreet) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM26 = this.createReference( "LAYOUTITEM26", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem27) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSAccountAddress1) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM27 = this.createReference( "LAYOUTITEM27", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem28) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LAddressLine2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM28 = this.createReference( "LAYOUTITEM28", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem29) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSAccountAddress2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM29 = this.createReference( "LAYOUTITEM29", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem30) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LCity) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM30 = this.createReference( "LAYOUTITEM30", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem31) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSAccountCity) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM31 = this.createReference( "LAYOUTITEM31", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem32) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LState) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM32 = this.createReference( "LAYOUTITEM32", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem34) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LZip) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM34 = this.createReference( "LAYOUTITEM34", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem35) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSAccountZip) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM35 = this.createReference( "LAYOUTITEM35", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem36) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LCountry) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Marginleft(5) Marginright(5) Columnspan(2)
         //
         var LAYOUTITEM36 = this.createReference( "LAYOUTITEM36", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem38) Alignment(TopRight) Column(#Column12) Flow(Down) Manage(#UseSameAddress) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Margintop(5) Marginright(5)
         //
         var LAYOUTITEM38 = this.createReference( "LAYOUTITEM38", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem40) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryStreet) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM40 = this.createReference( "LAYOUTITEM40", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem41) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSDeliveryAddress1) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5)
         //
         var LAYOUTITEM41 = this.createReference( "LAYOUTITEM41", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem42) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryAddressLine2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM42 = this.createReference( "LAYOUTITEM42", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem43) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSDeliveryAddress2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5)
         //
         var LAYOUTITEM43 = this.createReference( "LAYOUTITEM43", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem44) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryCity) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM44 = this.createReference( "LAYOUTITEM44", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem45) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSDeliveryCity) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5)
         //
         var LAYOUTITEM45 = this.createReference( "LAYOUTITEM45", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem46) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LState) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginleft(5) Marginright(5)
         //
         var LAYOUTITEM46 = this.createReference( "LAYOUTITEM46", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem47) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSStateDropDown2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5)
         //
         var LAYOUTITEM47 = this.createReference( "LAYOUTITEM47", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem48) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryZip) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM48 = this.createReference( "LAYOUTITEM48", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem49) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#XSDeliveryZip) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5)
         //
         var LAYOUTITEM49 = this.createReference( "LAYOUTITEM49", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem50) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryCountry) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM50 = this.createReference( "LAYOUTITEM50", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem51) Alignment(TopLeft) Column(#Column11) Flow(Down) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginleft(5) Marginright(5)
         //
         var LAYOUTITEM51 = this.createReference( "LAYOUTITEM51", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem52) Alignment(TopLeft) Column(#Column11) Flow(Down) Manage(#LDeliveryInstructions) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Columnspan(2) Marginright(5) Margintop(10)
         //
         var LAYOUTITEM52 = this.createReference( "LAYOUTITEM52", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem54) Alignment(TopLeft) Column(#Column11) Flow(Down) Parent(#TableLayout8) Row(#Row8) Sizing(None)
         //
         var LAYOUTITEM54 = this.createReference( "LAYOUTITEM54", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DeliveryInstructionsItem1) Column(#Column11) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Alignment(TopLeft) Flow(Down) Columnspan(2) Marginleft(5) Marginright(5)
         //
         var DELIVERYINSTRUCTIONSITEM1 = this.createReference( "DELIVERYINSTRUCTIONSITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LDeliveryStateItem1) Alignment(TopLeft) Column(#Column11) Manage(#LDeliveryState) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Flow(Down) Marginright(5) Margintop(10)
         //
         var LDELIVERYSTATEITEM1 = this.createReference( "LDELIVERYSTATEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DeliveryInstructionsItem2) Alignment(TopLeft) Column(#Column11) Manage(#DeliveryInstructions) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginright(5)
         //
         var DELIVERYINSTRUCTIONSITEM2 = this.createReference( "DELIVERYINSTRUCTIONSITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#DeliveryStateDropDownItem1) Manage(#XSStateDropDown2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Column(#Column11) Alignment(TopLeft) Flow(Down) Columnspan(2) Marginleft(5) Marginright(5)
         //
         var DELIVERYSTATEDROPDOWNITEM1 = this.createReference( "DELIVERYSTATEDROPDOWNITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryDropDown2Item1) Alignment(TopLeft) Column(#Column11) Manage(#XSCountryDropDown1) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Flow(Down) Columnspan(2) Marginleft(5) Marginright(5)
         //
         var XSCOUNTRYDROPDOWN2ITEM1 = this.createReference( "XSCOUNTRYDROPDOWN2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSCountryDropDown2Item2) Alignment(TopLeft) Column(#Column11) Manage(#XSCountryDropDown2) Parent(#TableLayout8) Row(#Row8) Sizing(FitToWidth) Flow(Down) Marginright(5) Columnspan(2)
         //
         var XSCOUNTRYDROPDOWN2ITEM2 = this.createReference( "XSCOUNTRYDROPDOWN2ITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PPersonal) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Width(327) Height(580) Layoutmanager(#TableLayout6)
         //
         var PPERSONAL = this.createReference( "PPERSONAL", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PAddress) Displayposition(3) Left(337) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(0) Width(327) Height(580) Layoutmanager(#TableLayout7)
         //
         var PADDRESS = this.createReference( "PADDRESS", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_PANL) Name(#PDelivery) Displayposition(4) Left(674) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(0) Width(326) Height(580) Layoutmanager(#TableLayout8)
         //
         var PDELIVERY = this.createReference( "PDELIVERY", "PRIM_PANL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LPersonalDetails) Caption('PERSONAL DETAILS') Displayposition(1) Ellipses(Word) Height(30) Left(0) Parent(#PPersonal) Tabposition(1) Tabstop(False) Top(5) Verticalalignment(Center) Width(164) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LPERSONALDETAILS = this.createReference( "LPERSONALDETAILS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LEmail) Caption('Email *') Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(2) Tabstop(False) Top(45) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LEMAIL = this.createReference( "LEMAIL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountEmail.Visual) Name(#XSAccountEmail) Displayposition(3) Parent(#PPersonal) Tabposition(3) Top(70) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSACCOUNTEMAIL = this.createFieldReference( "XSACCOUNTEMAIL", Fields.XSACCEML.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LPassword) Caption('Password *') Displayposition(4) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(4) Tabstop(False) Top(110) Verticalalignment(Center) Width(317) Mouseoverstyle(#XSTheme01<Text08AlmostBlack>) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LPASSWORD = this.createReference( "LPASSWORD", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSPassword.Visual) Name(#XSPassword) Displayposition(5) Parent(#PPersonal) Tabposition(5) Top(135) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSPASSWORD = this.createFieldReference( "XSPASSWORD", Fields.XSPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LTitle) Caption('Title') Displayposition(6) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(6) Tabstop(False) Top(175) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LTITLE = this.createReference( "LTITLE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountTitleDropDown) Name(#XSAccountTitleDropDown) Tabstop(False) Displayposition(7) Parent(#PPersonal) Tabposition(7) Width(317) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Top(200) Height(30)
         //
         var XSACCOUNTTITLEDROPDOWN = this.createReference( "XSACCOUNTTITLEDROPDOWN", "XSACCTTLD" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LFirstName) Caption('First Name *') Displayposition(8) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(8) Tabstop(False) Top(240) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LFIRSTNAME = this.createReference( "LFIRSTNAME", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountFirstname.Visual) Name(#XSAccountFirstname) Displayposition(9) Parent(#PPersonal) Tabposition(9) Top(265) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSACCOUNTFIRSTNAME = this.createFieldReference( "XSACCOUNTFIRSTNAME", Fields.XSACC1STN.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LLastName) Caption('Last Name * ') Displayposition(10) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(10) Tabstop(False) Top(305) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LLASTNAME = this.createReference( "LLASTNAME", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountLastname.Visual) Name(#XSAccountLastname) Displayposition(11) Parent(#PPersonal) Tabposition(11) Top(330) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSACCOUNTLASTNAME = this.createFieldReference( "XSACCOUNTLASTNAME", Fields.XSACCLSTN.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LBirthDate) Caption('Date of Birth') Displayposition(12) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(12) Tabstop(False) Top(370) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LBIRTHDATE = this.createReference( "LBIRTHDATE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSBirthDate.Visual) Name(#XSBirthDate) Displayposition(13) Parent(#PPersonal) Tabposition(13) Top(395) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSBIRTHDATE = this.createFieldReference( "XSBIRTHDATE", Fields.XSBTHDTE.VISUALDATE );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LHomePhone) Caption('Phone *') Displayposition(14) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(14) Tabstop(False) Top(435) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LHOMEPHONE = this.createReference( "LHOMEPHONE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSPhoneHome.Visual) Name(#XSPhoneHome) Displayposition(15) Parent(#PPersonal) Tabposition(15) Top(460) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSPHONEHOME = this.createFieldReference( "XSPHONEHOME", Fields.XSPHNHME.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LMobilePhone) Caption('Mobile *') Displayposition(16) Ellipses(Word) Height(25) Left(0) Parent(#PPersonal) Tabposition(16) Tabstop(False) Top(500) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LMOBILEPHONE = this.createReference( "LMOBILEPHONE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSPhoneMobile.Visual) Name(#XSPhoneMobile) Displayposition(17) Parent(#PPersonal) Tabposition(17) Top(525) Width(317) Labelposition(None) Marginleft(0) Mouseoverstyle(#XSTheme01<Text10AlmostBlack>) Height(30)
         //
         var XSPHONEMOBILE = this.createFieldReference( "XSPHONEMOBILE", Fields.XSPHNMBL.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LAddress) Caption('ADDRESS') Displayposition(1) Ellipses(Word) Height(30) Left(0) Parent(#PAddress) Tabposition(1) Tabstop(False) Top(5) Verticalalignment(Center) Width(164) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LADDRESS = this.createReference( "LADDRESS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#SaveAccount2) Caption('Save Account') Displayposition(1) Left(405) Parent(#COM_OWNER) Tabposition(2) Top(580) Width(180) Themedrawstyle('ButtonLook1') Height(50)
         //
         var SAVEACCOUNT2 = this.createReference( "SAVEACCOUNT2", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LStreet) Displayposition(2) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(2) Tabstop(False) Top(45) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>) Caption('Street *')
         //
         var LSTREET = this.createReference( "LSTREET", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountAddress1.Visual) Name(#XSAccountAddress1) Displayposition(3) Parent(#PAddress) Tabposition(3) Width(317) Labelposition(None) Marginleft(0) Top(70) Height(30)
         //
         var XSACCOUNTADDRESS1 = this.createFieldReference( "XSACCOUNTADDRESS1", Fields.XSACCADR1.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LAddressLine2) Caption('Address line 2') Displayposition(4) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(4) Tabstop(False) Top(110) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LADDRESSLINE2 = this.createReference( "LADDRESSLINE2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountAddress2.Visual) Name(#XSAccountAddress2) Displayposition(5) Parent(#PAddress) Tabposition(5) Width(317) Labelposition(None) Marginleft(0) Top(135) Height(30)
         //
         var XSACCOUNTADDRESS2 = this.createFieldReference( "XSACCOUNTADDRESS2", Fields.XSACCADR2.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCity) Caption('City *') Displayposition(6) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(6) Tabstop(False) Top(175) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LCITY = this.createReference( "LCITY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountCity.Visual) Name(#XSAccountCity) Displayposition(7) Parent(#PAddress) Tabposition(7) Width(317) Labelposition(None) Marginleft(0) Top(200) Height(30)
         //
         var XSACCOUNTCITY = this.createFieldReference( "XSACCOUNTCITY", Fields.XSACCCITY.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LState) Caption('State/Province *') Displayposition(8) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(8) Tabstop(False) Top(240) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LSTATE = this.createReference( "LSTATE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSStateDropDown) Name(#XSStateDropdown1) Displayposition(9) Parent(#PAddress) Tabposition(9) Tabstop(False) Width(317) Top(265) Height(30)
         //
         var XSSTATEDROPDOWN1 = this.createReference( "XSSTATEDROPDOWN1", "XSSTATED" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LZip) Caption('Zip/Postal Code *') Displayposition(10) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(10) Tabstop(False) Top(305) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LZIP = this.createReference( "LZIP", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountZip.Visual) Name(#XSAccountZip) Displayposition(11) Parent(#PAddress) Tabposition(11) Width(317) Labelposition(None) Marginleft(0) Top(330) Height(30)
         //
         var XSACCOUNTZIP = this.createFieldReference( "XSACCOUNTZIP", Fields.XSACCZIP.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LCountry) Caption('Country *') Displayposition(12) Ellipses(Word) Height(25) Left(0) Parent(#PAddress) Tabposition(12) Tabstop(False) Top(370) Verticalalignment(Center) Width(317) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LCOUNTRY = this.createReference( "LCOUNTRY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSCountryDropDown) Name(#XSCountryDropDown1) Tabstop(False) Displayposition(13) Parent(#PAddress) Tabposition(13) Width(317) Top(395) Height(30)
         //
         var XSCOUNTRYDROPDOWN1 = this.createReference( "XSCOUNTRYDROPDOWN1", "XSCNTRYD" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryAddress) Caption('DELIVERY ADDRESS') Displayposition(1) Ellipses(Word) Height(30) Left(0) Parent(#PDelivery) Tabposition(1) Tabstop(False) Top(5) Verticalalignment(Center) Width(163) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LDELIVERYADDRESS = this.createReference( "LDELIVERYADDRESS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_CKBX) Name(#UseSameAddress) Caption('Same as Address') Displayposition(2) Left(163) Marginleft(2) Parent(#PDelivery) Tabposition(2) Style(#XSTheme01<Text08AlmostBlack>) Width(158) Top(5) Alignment(Right)
         //
         var USESAMEADDRESS = this.createReference( "USESAMEADDRESS", "PRIM_CKBX" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryStreet) Caption('Street *') Displayposition(3) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(3) Tabstop(False) Top(45) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYSTREET = this.createReference( "LDELIVERYSTREET", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSDeliveryAddress1.Visual) Name(#XSDeliveryAddress1) Displayposition(4) Parent(#PDelivery) Tabposition(4) Top(70) Width(321) Labelposition(None) Marginleft(0) Height(30)
         //
         var XSDELIVERYADDRESS1 = this.createFieldReference( "XSDELIVERYADDRESS1", Fields.XSDLVADR1.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryAddressLine2) Caption('Address Line 2') Displayposition(5) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(5) Tabstop(False) Top(110) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYADDRESSLINE2 = this.createReference( "LDELIVERYADDRESSLINE2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSDeliveryAddress2.Visual) Name(#XSDeliveryAddress2) Displayposition(6) Parent(#PDelivery) Tabposition(6) Top(135) Width(321) Labelposition(None) Marginleft(0) Height(30)
         //
         var XSDELIVERYADDRESS2 = this.createFieldReference( "XSDELIVERYADDRESS2", Fields.XSDLVADR2.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryCity) Caption('City *') Displayposition(7) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(7) Tabstop(False) Top(175) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYCITY = this.createReference( "LDELIVERYCITY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSDeliveryCity.Visual) Name(#XSDeliveryCity) Displayposition(8) Parent(#PDelivery) Tabposition(8) Top(200) Width(321) Labelposition(None) Marginleft(0) Height(30)
         //
         var XSDELIVERYCITY = this.createFieldReference( "XSDELIVERYCITY", Fields.XSDLVCITY.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryState) Caption('State/Province *') Displayposition(9) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(9) Tabstop(False) Top(240) Verticalalignment(Center) Width(158) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYSTATE = this.createReference( "LDELIVERYSTATE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSStateDropDown) Name(#XSStateDropDown2) Tabstop(False) Displayposition(10) Parent(#PDelivery) Tabposition(10) Width(321) Top(265) Height(30)
         //
         var XSSTATEDROPDOWN2 = this.createReference( "XSSTATEDROPDOWN2", "XSSTATED" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryZip) Caption('Zip/Postal Code *') Displayposition(11) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(11) Tabstop(False) Top(305) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYZIP = this.createReference( "LDELIVERYZIP", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSDeliveryZip.Visual) Name(#XSDeliveryZip) Displayposition(12) Parent(#PDelivery) Tabposition(12) Top(330) Width(321) Labelposition(None) Marginleft(0) Height(30)
         //
         var XSDELIVERYZIP = this.createFieldReference( "XSDELIVERYZIP", Fields.XSDLVZIP.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryCountry) Caption('Country *') Displayposition(13) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(13) Tabstop(False) Top(370) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYCOUNTRY = this.createReference( "LDELIVERYCOUNTRY", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSCountryDropDown) Name(#XSCountryDropDown2) Tabstop(False) Displayposition(14) Parent(#PDelivery) Tabposition(14) Width(321) Top(395) Height(30)
         //
         var XSCOUNTRYDROPDOWN2 = this.createReference( "XSCOUNTRYDROPDOWN2", "XSCNTRYD" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LDeliveryInstructions) Caption('Delivery Instructions') Displayposition(15) Ellipses(Word) Height(25) Left(0) Parent(#PDelivery) Tabposition(15) Tabstop(False) Top(435) Verticalalignment(Center) Width(321) Style(#XSTheme01<Text08AlmostBlack>)
         //
         var LDELIVERYINSTRUCTIONS = this.createReference( "LDELIVERYINSTRUCTIONS", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#Prim_text) Name(#DeliveryInstructions) Displayposition(16) Height(100) Parent(#PDelivery) Tabposition(16) Top(460) Width(321) Left(0)
         //
         var DELIVERYINSTRUCTIONS = this.createReference( "DELIVERYINSTRUCTIONS", "PRIM_TEXT" );

         //
         // DEFINE_COM Class(#PRIM_WEB.MessageBox) Name(#MessageBox) Title('Messages')
         //
         var MESSAGEBOX = this.createReference( "MESSAGEBOX", "PRIM_WEB", "MessageBox" );

         //
         // DEFINE_COM Class(#XSPassword) Name(#SavePassword)
         //
         var SAVEPASSWORD = this.createFieldReference( "SAVEPASSWORD", Fields.XSPASSWRD.DataClass );

         // ---------------------------
         // -- Initialize #MYSESSION --
         // ---------------------------
         if ( ( MYSESSION != null ) && ( MYSESSION.isInitialized() == false ) )
         {
            MYSESSION.initialize();
         }

         // ------------------------------
         // -- Initialize #TABLELAYOUT1 --
         // ------------------------------
         TABLELAYOUT1.initialize();

         // -------------------------
         // -- Initialize #COLUMN1 --
         // -------------------------
         COLUMN1.setDisplayPosition( 1 );
         COLUMN1.setParent( TABLELAYOUT1 );
         COLUMN1.initialize();

         // -------------------------
         // -- Initialize #COLUMN2 --
         // -------------------------
         COLUMN2.setDisplayPosition( 2 );
         COLUMN2.setParent( TABLELAYOUT1 );
         COLUMN2.initialize();

         // --------------------------
         // -- Initialize #COLUMN13 --
         // --------------------------
         COLUMN13.setDisplayPosition( 3 );
         COLUMN13.setParent( TABLELAYOUT1 );
         COLUMN13.initialize();

         // ----------------------
         // -- Initialize #ROW9 --
         // ----------------------
         ROW9.setDisplayPosition( 1 );
         ROW9.setParent( TABLELAYOUT1 );
         ROW9.initialize();

         // -----------------------
         // -- Initialize #ROW11 --
         // -----------------------
         ROW11.setParent( TABLELAYOUT1 );
         ROW11.setDisplayPosition( 2 );
         ROW11.setHeight( 50 );
         ROW11.setUnits( "PIXELS" );
         ROW11.initialize();

         // --------------------------------
         // -- Initialize #PDELIVERYITEM1 --
         // --------------------------------
         PDELIVERYITEM1.setColumn( COLUMN13 );
         PDELIVERYITEM1.setManage( PDELIVERY );
         PDELIVERYITEM1.setParent( TABLELAYOUT1 );
         PDELIVERYITEM1.setRow( ROW9 );
         PDELIVERYITEM1.setAlignment( "TOPCENTER" );
         PDELIVERYITEM1.setFlow( "DOWN" );
         PDELIVERYITEM1.setMarginLeft( 7 );
         PDELIVERYITEM1.initialize();

         // -------------------------------
         // -- Initialize #PADDRESSITEM1 --
         // -------------------------------
         PADDRESSITEM1.setColumn( COLUMN2 );
         PADDRESSITEM1.setManage( PADDRESS );
         PADDRESSITEM1.setParent( TABLELAYOUT1 );
         PADDRESSITEM1.setRow( ROW9 );
         PADDRESSITEM1.setAlignment( "TOPCENTER" );
         PADDRESSITEM1.setFlow( "DOWN" );
         PADDRESSITEM1.setMarginLeft( 3 );
         PADDRESSITEM1.setMarginRight( 3 );
         PADDRESSITEM1.initialize();

         // --------------------------------
         // -- Initialize #PPERSONALITEM1 --
         // --------------------------------
         PPERSONALITEM1.setAlignment( "TOPCENTER" );
         PPERSONALITEM1.setColumn( COLUMN1 );
         PPERSONALITEM1.setManage( PPERSONAL );
         PPERSONALITEM1.setParent( TABLELAYOUT1 );
         PPERSONALITEM1.setRow( ROW9 );
         PPERSONALITEM1.setFlow( "DOWN" );
         PPERSONALITEM1.setMarginRight( 7 );
         PPERSONALITEM1.initialize();

         // ----------------------------------
         // -- Initialize #SAVEACCOUNTITEM1 --
         // ----------------------------------
         SAVEACCOUNTITEM1.setManage( SAVEACCOUNT2 );
         SAVEACCOUNTITEM1.setParent( TABLELAYOUT1 );
         SAVEACCOUNTITEM1.setRow( ROW11 );
         SAVEACCOUNTITEM1.setSizing( "NONE" );
         SAVEACCOUNTITEM1.setColumn( COLUMN2 );
         SAVEACCOUNTITEM1.setMarginRight( 5 );
         SAVEACCOUNTITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT2 --
         // ------------------------------
         TABLELAYOUT2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 1 );
         COLUMN3.setParent( TABLELAYOUT2 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 1 );
         ROW2.setParent( TABLELAYOUT2 );
         ROW2.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT3 --
         // ------------------------------
         TABLELAYOUT3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 1 );
         COLUMN4.setParent( TABLELAYOUT3 );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 1 );
         ROW3.setParent( TABLELAYOUT3 );
         ROW3.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT4 --
         // ------------------------------
         TABLELAYOUT4.initialize();

         // -------------------------
         // -- Initialize #COLUMN5 --
         // -------------------------
         COLUMN5.setDisplayPosition( 1 );
         COLUMN5.setParent( TABLELAYOUT4 );
         COLUMN5.initialize();

         // ----------------------
         // -- Initialize #ROW4 --
         // ----------------------
         ROW4.setDisplayPosition( 1 );
         ROW4.setParent( TABLELAYOUT4 );
         ROW4.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT5 --
         // ------------------------------
         TABLELAYOUT5.initialize();

         // -------------------------
         // -- Initialize #COLUMN6 --
         // -------------------------
         COLUMN6.setDisplayPosition( 1 );
         COLUMN6.setParent( TABLELAYOUT5 );
         COLUMN6.initialize();

         // ----------------------
         // -- Initialize #ROW5 --
         // ----------------------
         ROW5.setDisplayPosition( 1 );
         ROW5.setParent( TABLELAYOUT5 );
         ROW5.initialize();

         // -----------------------------
         // -- Initialize #PANEL5ITEM1 --
         // -----------------------------
         PANEL5ITEM1.setAlignment( "TOPLEFT" );
         PANEL5ITEM1.setColumn( COLUMN6 );
         PANEL5ITEM1.setManage( PPERSONAL );
         PANEL5ITEM1.setParent( TABLELAYOUT5 );
         PANEL5ITEM1.setRow( ROW5 );
         PANEL5ITEM1.setSizing( "NONE" );
         PANEL5ITEM1.setFlow( "DOWN" );
         PANEL5ITEM1.setMarginTop( 5 );
         PANEL5ITEM1.setMarginLeft( 5 );
         PANEL5ITEM1.initialize();

         // -----------------------------
         // -- Initialize #PANEL6ITEM1 --
         // -----------------------------
         PANEL6ITEM1.setAlignment( "TOPLEFT" );
         PANEL6ITEM1.setColumn( COLUMN6 );
         PANEL6ITEM1.setManage( PADDRESS );
         PANEL6ITEM1.setParent( TABLELAYOUT5 );
         PANEL6ITEM1.setRow( ROW5 );
         PANEL6ITEM1.setSizing( "NONE" );
         PANEL6ITEM1.setFlow( "DOWN" );
         PANEL6ITEM1.setMarginTop( 5 );
         PANEL6ITEM1.setMarginLeft( 5 );
         PANEL6ITEM1.initialize();

         // -----------------------------
         // -- Initialize #PANEL7ITEM1 --
         // -----------------------------
         PANEL7ITEM1.setAlignment( "TOPLEFT" );
         PANEL7ITEM1.setColumn( COLUMN6 );
         PANEL7ITEM1.setManage( PDELIVERY );
         PANEL7ITEM1.setParent( TABLELAYOUT5 );
         PANEL7ITEM1.setRow( ROW5 );
         PANEL7ITEM1.setSizing( "NONE" );
         PANEL7ITEM1.setFlow( "DOWN" );
         PANEL7ITEM1.setMarginTop( 5 );
         PANEL7ITEM1.setMarginLeft( 5 );
         PANEL7ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT6 --
         // ------------------------------
         TABLELAYOUT6.initialize();

         // -------------------------
         // -- Initialize #COLUMN7 --
         // -------------------------
         COLUMN7.setDisplayPosition( 1 );
         COLUMN7.setParent( TABLELAYOUT6 );
         COLUMN7.initialize();

         // -------------------------
         // -- Initialize #COLUMN8 --
         // -------------------------
         COLUMN8.setDisplayPosition( 2 );
         COLUMN8.setParent( TABLELAYOUT6 );
         COLUMN8.initialize();

         // ----------------------
         // -- Initialize #ROW6 --
         // ----------------------
         ROW6.setDisplayPosition( 1 );
         ROW6.setParent( TABLELAYOUT6 );
         ROW6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN7 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( LPERSONALDETAILS );
         LAYOUTITEM4.setParent( TABLELAYOUT6 );
         LAYOUTITEM4.setRow( ROW6 );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.setMarginTop( 5 );
         LAYOUTITEM4.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN7 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( LEMAIL );
         LAYOUTITEM6.setParent( TABLELAYOUT6 );
         LAYOUTITEM6.setRow( ROW6 );
         LAYOUTITEM6.setSizing( "FITTOWIDTH" );
         LAYOUTITEM6.setMarginRight( 10 );
         LAYOUTITEM6.setColumnSpan( 2 );
         LAYOUTITEM6.setMarginTop( 10 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "TOPLEFT" );
         LAYOUTITEM7.setColumn( COLUMN7 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( XSACCOUNTEMAIL );
         LAYOUTITEM7.setParent( TABLELAYOUT6 );
         LAYOUTITEM7.setRow( ROW6 );
         LAYOUTITEM7.setSizing( "FITTOWIDTH" );
         LAYOUTITEM7.setMarginRight( 10 );
         LAYOUTITEM7.setColumnSpan( 2 );
         LAYOUTITEM7.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( COLUMN7 );
         LAYOUTITEM8.setFlow( "DOWN" );
         LAYOUTITEM8.setManage( LPASSWORD );
         LAYOUTITEM8.setParent( TABLELAYOUT6 );
         LAYOUTITEM8.setRow( ROW6 );
         LAYOUTITEM8.setSizing( "FITTOWIDTH" );
         LAYOUTITEM8.setMarginRight( 10 );
         LAYOUTITEM8.setColumnSpan( 2 );
         LAYOUTITEM8.setMarginTop( 10 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "TOPLEFT" );
         LAYOUTITEM9.setColumn( COLUMN7 );
         LAYOUTITEM9.setFlow( "DOWN" );
         LAYOUTITEM9.setManage( XSPASSWORD );
         LAYOUTITEM9.setParent( TABLELAYOUT6 );
         LAYOUTITEM9.setRow( ROW6 );
         LAYOUTITEM9.setSizing( "FITTOWIDTH" );
         LAYOUTITEM9.setMarginRight( 10 );
         LAYOUTITEM9.setColumnSpan( 2 );
         LAYOUTITEM9.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setAlignment( "TOPLEFT" );
         LAYOUTITEM10.setColumn( COLUMN7 );
         LAYOUTITEM10.setFlow( "DOWN" );
         LAYOUTITEM10.setManage( LTITLE );
         LAYOUTITEM10.setParent( TABLELAYOUT6 );
         LAYOUTITEM10.setRow( ROW6 );
         LAYOUTITEM10.setSizing( "FITTOWIDTH" );
         LAYOUTITEM10.setMarginRight( 10 );
         LAYOUTITEM10.setColumnSpan( 2 );
         LAYOUTITEM10.setMarginTop( 10 );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setAlignment( "TOPLEFT" );
         LAYOUTITEM11.setColumn( COLUMN7 );
         LAYOUTITEM11.setFlow( "DOWN" );
         LAYOUTITEM11.setManage( XSACCOUNTTITLEDROPDOWN );
         LAYOUTITEM11.setParent( TABLELAYOUT6 );
         LAYOUTITEM11.setRow( ROW6 );
         LAYOUTITEM11.setSizing( "FITTOWIDTH" );
         LAYOUTITEM11.setMarginRight( 10 );
         LAYOUTITEM11.setColumnSpan( 2 );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setAlignment( "TOPLEFT" );
         LAYOUTITEM12.setColumn( COLUMN7 );
         LAYOUTITEM12.setFlow( "DOWN" );
         LAYOUTITEM12.setManage( LFIRSTNAME );
         LAYOUTITEM12.setParent( TABLELAYOUT6 );
         LAYOUTITEM12.setRow( ROW6 );
         LAYOUTITEM12.setSizing( "FITTOWIDTH" );
         LAYOUTITEM12.setMarginRight( 10 );
         LAYOUTITEM12.setColumnSpan( 2 );
         LAYOUTITEM12.setMarginTop( 10 );
         LAYOUTITEM12.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM13 --
         // ------------------------------
         LAYOUTITEM13.setAlignment( "TOPLEFT" );
         LAYOUTITEM13.setColumn( COLUMN7 );
         LAYOUTITEM13.setFlow( "DOWN" );
         LAYOUTITEM13.setManage( XSACCOUNTFIRSTNAME );
         LAYOUTITEM13.setParent( TABLELAYOUT6 );
         LAYOUTITEM13.setRow( ROW6 );
         LAYOUTITEM13.setSizing( "FITTOWIDTH" );
         LAYOUTITEM13.setMarginRight( 10 );
         LAYOUTITEM13.setColumnSpan( 2 );
         LAYOUTITEM13.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM14 --
         // ------------------------------
         LAYOUTITEM14.setAlignment( "TOPLEFT" );
         LAYOUTITEM14.setColumn( COLUMN7 );
         LAYOUTITEM14.setFlow( "DOWN" );
         LAYOUTITEM14.setManage( LLASTNAME );
         LAYOUTITEM14.setParent( TABLELAYOUT6 );
         LAYOUTITEM14.setRow( ROW6 );
         LAYOUTITEM14.setSizing( "FITTOWIDTH" );
         LAYOUTITEM14.setMarginRight( 10 );
         LAYOUTITEM14.setColumnSpan( 2 );
         LAYOUTITEM14.setMarginTop( 10 );
         LAYOUTITEM14.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM15 --
         // ------------------------------
         LAYOUTITEM15.setAlignment( "TOPLEFT" );
         LAYOUTITEM15.setColumn( COLUMN7 );
         LAYOUTITEM15.setFlow( "DOWN" );
         LAYOUTITEM15.setManage( XSACCOUNTLASTNAME );
         LAYOUTITEM15.setParent( TABLELAYOUT6 );
         LAYOUTITEM15.setRow( ROW6 );
         LAYOUTITEM15.setSizing( "FITTOWIDTH" );
         LAYOUTITEM15.setMarginRight( 10 );
         LAYOUTITEM15.setColumnSpan( 2 );
         LAYOUTITEM15.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM16 --
         // ------------------------------
         LAYOUTITEM16.setAlignment( "TOPLEFT" );
         LAYOUTITEM16.setColumn( COLUMN7 );
         LAYOUTITEM16.setFlow( "DOWN" );
         LAYOUTITEM16.setManage( LBIRTHDATE );
         LAYOUTITEM16.setParent( TABLELAYOUT6 );
         LAYOUTITEM16.setRow( ROW6 );
         LAYOUTITEM16.setSizing( "FITTOWIDTH" );
         LAYOUTITEM16.setMarginRight( 10 );
         LAYOUTITEM16.setColumnSpan( 2 );
         LAYOUTITEM16.setMarginTop( 10 );
         LAYOUTITEM16.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM17 --
         // ------------------------------
         LAYOUTITEM17.setAlignment( "TOPLEFT" );
         LAYOUTITEM17.setColumn( COLUMN7 );
         LAYOUTITEM17.setFlow( "DOWN" );
         LAYOUTITEM17.setManage( XSBIRTHDATE );
         LAYOUTITEM17.setParent( TABLELAYOUT6 );
         LAYOUTITEM17.setRow( ROW6 );
         LAYOUTITEM17.setSizing( "FITTOWIDTH" );
         LAYOUTITEM17.setMarginRight( 10 );
         LAYOUTITEM17.setColumnSpan( 2 );
         LAYOUTITEM17.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM18 --
         // ------------------------------
         LAYOUTITEM18.setAlignment( "TOPLEFT" );
         LAYOUTITEM18.setColumn( COLUMN7 );
         LAYOUTITEM18.setFlow( "DOWN" );
         LAYOUTITEM18.setManage( LHOMEPHONE );
         LAYOUTITEM18.setParent( TABLELAYOUT6 );
         LAYOUTITEM18.setRow( ROW6 );
         LAYOUTITEM18.setSizing( "FITTOWIDTH" );
         LAYOUTITEM18.setMarginRight( 10 );
         LAYOUTITEM18.setColumnSpan( 2 );
         LAYOUTITEM18.setMarginTop( 10 );
         LAYOUTITEM18.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM19 --
         // ------------------------------
         LAYOUTITEM19.setAlignment( "TOPLEFT" );
         LAYOUTITEM19.setColumn( COLUMN7 );
         LAYOUTITEM19.setFlow( "DOWN" );
         LAYOUTITEM19.setManage( XSPHONEHOME );
         LAYOUTITEM19.setParent( TABLELAYOUT6 );
         LAYOUTITEM19.setRow( ROW6 );
         LAYOUTITEM19.setSizing( "FITTOWIDTH" );
         LAYOUTITEM19.setMarginRight( 10 );
         LAYOUTITEM19.setColumnSpan( 2 );
         LAYOUTITEM19.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM22 --
         // ------------------------------
         LAYOUTITEM22.setAlignment( "TOPLEFT" );
         LAYOUTITEM22.setColumn( COLUMN7 );
         LAYOUTITEM22.setFlow( "DOWN" );
         LAYOUTITEM22.setManage( LMOBILEPHONE );
         LAYOUTITEM22.setParent( TABLELAYOUT6 );
         LAYOUTITEM22.setRow( ROW6 );
         LAYOUTITEM22.setSizing( "FITTOWIDTH" );
         LAYOUTITEM22.setMarginRight( 10 );
         LAYOUTITEM22.setColumnSpan( 2 );
         LAYOUTITEM22.setMarginTop( 10 );
         LAYOUTITEM22.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM23 --
         // ------------------------------
         LAYOUTITEM23.setAlignment( "TOPLEFT" );
         LAYOUTITEM23.setColumn( COLUMN7 );
         LAYOUTITEM23.setFlow( "DOWN" );
         LAYOUTITEM23.setManage( XSPHONEMOBILE );
         LAYOUTITEM23.setParent( TABLELAYOUT6 );
         LAYOUTITEM23.setRow( ROW6 );
         LAYOUTITEM23.setSizing( "FITTOWIDTH" );
         LAYOUTITEM23.setMarginRight( 10 );
         LAYOUTITEM23.setColumnSpan( 2 );
         LAYOUTITEM23.initialize();

         // ---------------------------------------------
         // -- Initialize #XSACCOUNTTITLEDROPDOWNITEM1 --
         // ---------------------------------------------
         XSACCOUNTTITLEDROPDOWNITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTTITLEDROPDOWNITEM1.setColumn( COLUMN7 );
         XSACCOUNTTITLEDROPDOWNITEM1.setManage( XSACCOUNTTITLEDROPDOWN );
         XSACCOUNTTITLEDROPDOWNITEM1.setParent( TABLELAYOUT6 );
         XSACCOUNTTITLEDROPDOWNITEM1.setRow( ROW6 );
         XSACCOUNTTITLEDROPDOWNITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTTITLEDROPDOWNITEM1.setFlow( "DOWN" );
         XSACCOUNTTITLEDROPDOWNITEM1.setMarginLeft( 5 );
         XSACCOUNTTITLEDROPDOWNITEM1.setMarginRight( 5 );
         XSACCOUNTTITLEDROPDOWNITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT7 --
         // ------------------------------
         TABLELAYOUT7.initialize();

         // -------------------------
         // -- Initialize #COLUMN9 --
         // -------------------------
         COLUMN9.setDisplayPosition( 1 );
         COLUMN9.setParent( TABLELAYOUT7 );
         COLUMN9.initialize();

         // --------------------------
         // -- Initialize #COLUMN10 --
         // --------------------------
         COLUMN10.setDisplayPosition( 2 );
         COLUMN10.setParent( TABLELAYOUT7 );
         COLUMN10.initialize();

         // ----------------------
         // -- Initialize #ROW7 --
         // ----------------------
         ROW7.setDisplayPosition( 1 );
         ROW7.setParent( TABLELAYOUT7 );
         ROW7.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM24 --
         // ------------------------------
         LAYOUTITEM24.setAlignment( "TOPLEFT" );
         LAYOUTITEM24.setColumn( COLUMN9 );
         LAYOUTITEM24.setFlow( "DOWN" );
         LAYOUTITEM24.setManage( LADDRESS );
         LAYOUTITEM24.setParent( TABLELAYOUT7 );
         LAYOUTITEM24.setRow( ROW7 );
         LAYOUTITEM24.setSizing( "FITTOWIDTH" );
         LAYOUTITEM24.setMarginTop( 5 );
         LAYOUTITEM24.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN9 );
         LAYOUTITEM1.setManage( XSSTATEDROPDOWN1 );
         LAYOUTITEM1.setParent( TABLELAYOUT7 );
         LAYOUTITEM1.setRow( ROW7 );
         LAYOUTITEM1.setColumnSpan( 2 );
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setSizing( "FITTOWIDTH" );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setMarginRight( 10 );
         LAYOUTITEM1.initialize();

         // ------------------------------
         // -- Initialize #LSTREETITEM1 --
         // ------------------------------
         LSTREETITEM1.setAlignment( "TOPLEFT" );
         LSTREETITEM1.setColumn( COLUMN9 );
         LSTREETITEM1.setManage( LSTREET );
         LSTREETITEM1.setParent( TABLELAYOUT7 );
         LSTREETITEM1.setRow( ROW7 );
         LSTREETITEM1.setSizing( "FITTOWIDTH" );
         LSTREETITEM1.setFlow( "DOWN" );
         LSTREETITEM1.setColumnSpan( 2 );
         LSTREETITEM1.setMarginRight( 10 );
         LSTREETITEM1.setMarginTop( 10 );
         LSTREETITEM1.initialize();

         // ----------------------------------------
         // -- Initialize #XSACCOUNTADDRESS1ITEM1 --
         // ----------------------------------------
         XSACCOUNTADDRESS1ITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTADDRESS1ITEM1.setColumn( COLUMN9 );
         XSACCOUNTADDRESS1ITEM1.setManage( XSACCOUNTADDRESS1 );
         XSACCOUNTADDRESS1ITEM1.setParent( TABLELAYOUT7 );
         XSACCOUNTADDRESS1ITEM1.setRow( ROW7 );
         XSACCOUNTADDRESS1ITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTADDRESS1ITEM1.setFlow( "DOWN" );
         XSACCOUNTADDRESS1ITEM1.setColumnSpan( 2 );
         XSACCOUNTADDRESS1ITEM1.setMarginRight( 10 );
         XSACCOUNTADDRESS1ITEM1.initialize();

         // ------------------------------------
         // -- Initialize #LADDRESSLINE2ITEM1 --
         // ------------------------------------
         LADDRESSLINE2ITEM1.setAlignment( "TOPLEFT" );
         LADDRESSLINE2ITEM1.setColumn( COLUMN9 );
         LADDRESSLINE2ITEM1.setManage( LADDRESSLINE2 );
         LADDRESSLINE2ITEM1.setParent( TABLELAYOUT7 );
         LADDRESSLINE2ITEM1.setRow( ROW7 );
         LADDRESSLINE2ITEM1.setSizing( "FITTOWIDTH" );
         LADDRESSLINE2ITEM1.setFlow( "DOWN" );
         LADDRESSLINE2ITEM1.setColumnSpan( 2 );
         LADDRESSLINE2ITEM1.setMarginRight( 10 );
         LADDRESSLINE2ITEM1.setMarginTop( 10 );
         LADDRESSLINE2ITEM1.initialize();

         // ----------------------------------------
         // -- Initialize #XSACCOUNTADDRESS2ITEM1 --
         // ----------------------------------------
         XSACCOUNTADDRESS2ITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTADDRESS2ITEM1.setColumn( COLUMN9 );
         XSACCOUNTADDRESS2ITEM1.setManage( XSACCOUNTADDRESS2 );
         XSACCOUNTADDRESS2ITEM1.setParent( TABLELAYOUT7 );
         XSACCOUNTADDRESS2ITEM1.setRow( ROW7 );
         XSACCOUNTADDRESS2ITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTADDRESS2ITEM1.setFlow( "DOWN" );
         XSACCOUNTADDRESS2ITEM1.setColumnSpan( 2 );
         XSACCOUNTADDRESS2ITEM1.setMarginRight( 10 );
         XSACCOUNTADDRESS2ITEM1.initialize();

         // ----------------------------
         // -- Initialize #LCITYITEM1 --
         // ----------------------------
         LCITYITEM1.setAlignment( "TOPLEFT" );
         LCITYITEM1.setColumn( COLUMN9 );
         LCITYITEM1.setManage( LCITY );
         LCITYITEM1.setParent( TABLELAYOUT7 );
         LCITYITEM1.setRow( ROW7 );
         LCITYITEM1.setSizing( "FITTOWIDTH" );
         LCITYITEM1.setFlow( "DOWN" );
         LCITYITEM1.setColumnSpan( 2 );
         LCITYITEM1.setMarginRight( 10 );
         LCITYITEM1.setMarginTop( 10 );
         LCITYITEM1.initialize();

         // ------------------------------------
         // -- Initialize #XSACCOUNTCITYITEM1 --
         // ------------------------------------
         XSACCOUNTCITYITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTCITYITEM1.setColumn( COLUMN9 );
         XSACCOUNTCITYITEM1.setManage( XSACCOUNTCITY );
         XSACCOUNTCITYITEM1.setParent( TABLELAYOUT7 );
         XSACCOUNTCITYITEM1.setRow( ROW7 );
         XSACCOUNTCITYITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTCITYITEM1.setFlow( "DOWN" );
         XSACCOUNTCITYITEM1.setColumnSpan( 2 );
         XSACCOUNTCITYITEM1.setMarginRight( 10 );
         XSACCOUNTCITYITEM1.initialize();

         // -----------------------------
         // -- Initialize #LSTATEITEM1 --
         // -----------------------------
         LSTATEITEM1.setAlignment( "TOPLEFT" );
         LSTATEITEM1.setColumn( COLUMN9 );
         LSTATEITEM1.setManage( LSTATE );
         LSTATEITEM1.setParent( TABLELAYOUT7 );
         LSTATEITEM1.setRow( ROW7 );
         LSTATEITEM1.setSizing( "FITTOWIDTH" );
         LSTATEITEM1.setFlow( "DOWN" );
         LSTATEITEM1.setColumnSpan( 2 );
         LSTATEITEM1.setMarginRight( 10 );
         LSTATEITEM1.setMarginTop( 10 );
         LSTATEITEM1.initialize();

         // ---------------------------
         // -- Initialize #LZIPITEM1 --
         // ---------------------------
         LZIPITEM1.setAlignment( "TOPLEFT" );
         LZIPITEM1.setColumn( COLUMN9 );
         LZIPITEM1.setManage( LZIP );
         LZIPITEM1.setParent( TABLELAYOUT7 );
         LZIPITEM1.setRow( ROW7 );
         LZIPITEM1.setSizing( "FITTOWIDTH" );
         LZIPITEM1.setFlow( "DOWN" );
         LZIPITEM1.setColumnSpan( 2 );
         LZIPITEM1.setMarginRight( 10 );
         LZIPITEM1.setMarginTop( 10 );
         LZIPITEM1.initialize();

         // -----------------------------------
         // -- Initialize #XSACCOUNTZIPITEM1 --
         // -----------------------------------
         XSACCOUNTZIPITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTZIPITEM1.setColumn( COLUMN9 );
         XSACCOUNTZIPITEM1.setManage( XSACCOUNTZIP );
         XSACCOUNTZIPITEM1.setParent( TABLELAYOUT7 );
         XSACCOUNTZIPITEM1.setRow( ROW7 );
         XSACCOUNTZIPITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTZIPITEM1.setFlow( "DOWN" );
         XSACCOUNTZIPITEM1.setColumnSpan( 2 );
         XSACCOUNTZIPITEM1.setMarginRight( 10 );
         XSACCOUNTZIPITEM1.initialize();

         // -------------------------------
         // -- Initialize #LCOUNTRYITEM1 --
         // -------------------------------
         LCOUNTRYITEM1.setAlignment( "TOPLEFT" );
         LCOUNTRYITEM1.setColumn( COLUMN9 );
         LCOUNTRYITEM1.setManage( LCOUNTRY );
         LCOUNTRYITEM1.setParent( TABLELAYOUT7 );
         LCOUNTRYITEM1.setRow( ROW7 );
         LCOUNTRYITEM1.setSizing( "FITTOWIDTH" );
         LCOUNTRYITEM1.setFlow( "DOWN" );
         LCOUNTRYITEM1.setColumnSpan( 2 );
         LCOUNTRYITEM1.setMarginRight( 10 );
         LCOUNTRYITEM1.setMarginTop( 10 );
         LCOUNTRYITEM1.initialize();

         // -----------------------------------------
         // -- Initialize #XSCOUNTRYDROPDOWN1ITEM1 --
         // -----------------------------------------
         XSCOUNTRYDROPDOWN1ITEM1.setAlignment( "TOPLEFT" );
         XSCOUNTRYDROPDOWN1ITEM1.setColumn( COLUMN9 );
         XSCOUNTRYDROPDOWN1ITEM1.setManage( XSCOUNTRYDROPDOWN1 );
         XSCOUNTRYDROPDOWN1ITEM1.setParent( TABLELAYOUT7 );
         XSCOUNTRYDROPDOWN1ITEM1.setRow( ROW7 );
         XSCOUNTRYDROPDOWN1ITEM1.setSizing( "FITTOWIDTH" );
         XSCOUNTRYDROPDOWN1ITEM1.setMarginRight( 10 );
         XSCOUNTRYDROPDOWN1ITEM1.setColumnSpan( 2 );
         XSCOUNTRYDROPDOWN1ITEM1.setFlow( "DOWN" );
         XSCOUNTRYDROPDOWN1ITEM1.initialize();

         // ------------------------------
         // -- Initialize #TABLELAYOUT8 --
         // ------------------------------
         TABLELAYOUT8.initialize();

         // --------------------------
         // -- Initialize #COLUMN11 --
         // --------------------------
         COLUMN11.setDisplayPosition( 1 );
         COLUMN11.setParent( TABLELAYOUT8 );
         COLUMN11.initialize();

         // --------------------------
         // -- Initialize #COLUMN12 --
         // --------------------------
         COLUMN12.setDisplayPosition( 2 );
         COLUMN12.setParent( TABLELAYOUT8 );
         COLUMN12.initialize();

         // ----------------------
         // -- Initialize #ROW8 --
         // ----------------------
         ROW8.setDisplayPosition( 1 );
         ROW8.setParent( TABLELAYOUT8 );
         ROW8.initialize();

         // ---------------------------------------
         // -- Initialize #LDELIVERYADDRESSITEM1 --
         // ---------------------------------------
         LDELIVERYADDRESSITEM1.setAlignment( "TOPLEFT" );
         LDELIVERYADDRESSITEM1.setColumn( COLUMN11 );
         LDELIVERYADDRESSITEM1.setManage( LDELIVERYADDRESS );
         LDELIVERYADDRESSITEM1.setParent( TABLELAYOUT8 );
         LDELIVERYADDRESSITEM1.setRow( ROW8 );
         LDELIVERYADDRESSITEM1.setSizing( "FITTOWIDTH" );
         LDELIVERYADDRESSITEM1.setFlow( "DOWN" );
         LDELIVERYADDRESSITEM1.setMarginTop( 5 );
         LDELIVERYADDRESSITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM26 --
         // ------------------------------
         LAYOUTITEM26.setAlignment( "TOPLEFT" );
         LAYOUTITEM26.setColumn( COLUMN11 );
         LAYOUTITEM26.setFlow( "DOWN" );
         LAYOUTITEM26.setManage( LSTREET );
         LAYOUTITEM26.setParent( TABLELAYOUT8 );
         LAYOUTITEM26.setRow( ROW8 );
         LAYOUTITEM26.setSizing( "FITTOWIDTH" );
         LAYOUTITEM26.setMarginLeft( 5 );
         LAYOUTITEM26.setMarginRight( 5 );
         LAYOUTITEM26.setColumnSpan( 2 );
         LAYOUTITEM26.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM27 --
         // ------------------------------
         LAYOUTITEM27.setAlignment( "TOPLEFT" );
         LAYOUTITEM27.setColumn( COLUMN11 );
         LAYOUTITEM27.setFlow( "DOWN" );
         LAYOUTITEM27.setManage( XSACCOUNTADDRESS1 );
         LAYOUTITEM27.setParent( TABLELAYOUT8 );
         LAYOUTITEM27.setRow( ROW8 );
         LAYOUTITEM27.setSizing( "FITTOWIDTH" );
         LAYOUTITEM27.setMarginLeft( 5 );
         LAYOUTITEM27.setMarginRight( 5 );
         LAYOUTITEM27.setColumnSpan( 2 );
         LAYOUTITEM27.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM28 --
         // ------------------------------
         LAYOUTITEM28.setAlignment( "TOPLEFT" );
         LAYOUTITEM28.setColumn( COLUMN11 );
         LAYOUTITEM28.setFlow( "DOWN" );
         LAYOUTITEM28.setManage( LADDRESSLINE2 );
         LAYOUTITEM28.setParent( TABLELAYOUT8 );
         LAYOUTITEM28.setRow( ROW8 );
         LAYOUTITEM28.setSizing( "FITTOWIDTH" );
         LAYOUTITEM28.setMarginLeft( 5 );
         LAYOUTITEM28.setMarginRight( 5 );
         LAYOUTITEM28.setColumnSpan( 2 );
         LAYOUTITEM28.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM29 --
         // ------------------------------
         LAYOUTITEM29.setAlignment( "TOPLEFT" );
         LAYOUTITEM29.setColumn( COLUMN11 );
         LAYOUTITEM29.setFlow( "DOWN" );
         LAYOUTITEM29.setManage( XSACCOUNTADDRESS2 );
         LAYOUTITEM29.setParent( TABLELAYOUT8 );
         LAYOUTITEM29.setRow( ROW8 );
         LAYOUTITEM29.setSizing( "FITTOWIDTH" );
         LAYOUTITEM29.setMarginLeft( 5 );
         LAYOUTITEM29.setMarginRight( 5 );
         LAYOUTITEM29.setColumnSpan( 2 );
         LAYOUTITEM29.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM30 --
         // ------------------------------
         LAYOUTITEM30.setAlignment( "TOPLEFT" );
         LAYOUTITEM30.setColumn( COLUMN11 );
         LAYOUTITEM30.setFlow( "DOWN" );
         LAYOUTITEM30.setManage( LCITY );
         LAYOUTITEM30.setParent( TABLELAYOUT8 );
         LAYOUTITEM30.setRow( ROW8 );
         LAYOUTITEM30.setSizing( "FITTOWIDTH" );
         LAYOUTITEM30.setMarginLeft( 5 );
         LAYOUTITEM30.setMarginRight( 5 );
         LAYOUTITEM30.setColumnSpan( 2 );
         LAYOUTITEM30.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM31 --
         // ------------------------------
         LAYOUTITEM31.setAlignment( "TOPLEFT" );
         LAYOUTITEM31.setColumn( COLUMN11 );
         LAYOUTITEM31.setFlow( "DOWN" );
         LAYOUTITEM31.setManage( XSACCOUNTCITY );
         LAYOUTITEM31.setParent( TABLELAYOUT8 );
         LAYOUTITEM31.setRow( ROW8 );
         LAYOUTITEM31.setSizing( "FITTOWIDTH" );
         LAYOUTITEM31.setMarginLeft( 5 );
         LAYOUTITEM31.setMarginRight( 5 );
         LAYOUTITEM31.setColumnSpan( 2 );
         LAYOUTITEM31.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM32 --
         // ------------------------------
         LAYOUTITEM32.setAlignment( "TOPLEFT" );
         LAYOUTITEM32.setColumn( COLUMN11 );
         LAYOUTITEM32.setFlow( "DOWN" );
         LAYOUTITEM32.setManage( LSTATE );
         LAYOUTITEM32.setParent( TABLELAYOUT8 );
         LAYOUTITEM32.setRow( ROW8 );
         LAYOUTITEM32.setSizing( "FITTOWIDTH" );
         LAYOUTITEM32.setMarginLeft( 5 );
         LAYOUTITEM32.setMarginRight( 5 );
         LAYOUTITEM32.setColumnSpan( 2 );
         LAYOUTITEM32.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM34 --
         // ------------------------------
         LAYOUTITEM34.setAlignment( "TOPLEFT" );
         LAYOUTITEM34.setColumn( COLUMN11 );
         LAYOUTITEM34.setFlow( "DOWN" );
         LAYOUTITEM34.setManage( LZIP );
         LAYOUTITEM34.setParent( TABLELAYOUT8 );
         LAYOUTITEM34.setRow( ROW8 );
         LAYOUTITEM34.setSizing( "FITTOWIDTH" );
         LAYOUTITEM34.setMarginLeft( 5 );
         LAYOUTITEM34.setMarginRight( 5 );
         LAYOUTITEM34.setColumnSpan( 2 );
         LAYOUTITEM34.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM35 --
         // ------------------------------
         LAYOUTITEM35.setAlignment( "TOPLEFT" );
         LAYOUTITEM35.setColumn( COLUMN11 );
         LAYOUTITEM35.setFlow( "DOWN" );
         LAYOUTITEM35.setManage( XSACCOUNTZIP );
         LAYOUTITEM35.setParent( TABLELAYOUT8 );
         LAYOUTITEM35.setRow( ROW8 );
         LAYOUTITEM35.setSizing( "FITTOWIDTH" );
         LAYOUTITEM35.setMarginLeft( 5 );
         LAYOUTITEM35.setMarginRight( 5 );
         LAYOUTITEM35.setColumnSpan( 2 );
         LAYOUTITEM35.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM36 --
         // ------------------------------
         LAYOUTITEM36.setAlignment( "TOPLEFT" );
         LAYOUTITEM36.setColumn( COLUMN11 );
         LAYOUTITEM36.setFlow( "DOWN" );
         LAYOUTITEM36.setManage( LCOUNTRY );
         LAYOUTITEM36.setParent( TABLELAYOUT8 );
         LAYOUTITEM36.setRow( ROW8 );
         LAYOUTITEM36.setSizing( "FITTOWIDTH" );
         LAYOUTITEM36.setMarginLeft( 5 );
         LAYOUTITEM36.setMarginRight( 5 );
         LAYOUTITEM36.setColumnSpan( 2 );
         LAYOUTITEM36.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM38 --
         // ------------------------------
         LAYOUTITEM38.setAlignment( "TOPRIGHT" );
         LAYOUTITEM38.setColumn( COLUMN12 );
         LAYOUTITEM38.setFlow( "DOWN" );
         LAYOUTITEM38.setManage( USESAMEADDRESS );
         LAYOUTITEM38.setParent( TABLELAYOUT8 );
         LAYOUTITEM38.setRow( ROW8 );
         LAYOUTITEM38.setSizing( "FITTOWIDTH" );
         LAYOUTITEM38.setMarginTop( 5 );
         LAYOUTITEM38.setMarginRight( 5 );
         LAYOUTITEM38.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM40 --
         // ------------------------------
         LAYOUTITEM40.setAlignment( "TOPLEFT" );
         LAYOUTITEM40.setColumn( COLUMN11 );
         LAYOUTITEM40.setFlow( "DOWN" );
         LAYOUTITEM40.setManage( LDELIVERYSTREET );
         LAYOUTITEM40.setParent( TABLELAYOUT8 );
         LAYOUTITEM40.setRow( ROW8 );
         LAYOUTITEM40.setSizing( "FITTOWIDTH" );
         LAYOUTITEM40.setColumnSpan( 2 );
         LAYOUTITEM40.setMarginRight( 5 );
         LAYOUTITEM40.setMarginTop( 10 );
         LAYOUTITEM40.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM41 --
         // ------------------------------
         LAYOUTITEM41.setAlignment( "TOPLEFT" );
         LAYOUTITEM41.setColumn( COLUMN11 );
         LAYOUTITEM41.setFlow( "DOWN" );
         LAYOUTITEM41.setManage( XSDELIVERYADDRESS1 );
         LAYOUTITEM41.setParent( TABLELAYOUT8 );
         LAYOUTITEM41.setRow( ROW8 );
         LAYOUTITEM41.setSizing( "FITTOWIDTH" );
         LAYOUTITEM41.setColumnSpan( 2 );
         LAYOUTITEM41.setMarginRight( 5 );
         LAYOUTITEM41.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM42 --
         // ------------------------------
         LAYOUTITEM42.setAlignment( "TOPLEFT" );
         LAYOUTITEM42.setColumn( COLUMN11 );
         LAYOUTITEM42.setFlow( "DOWN" );
         LAYOUTITEM42.setManage( LDELIVERYADDRESSLINE2 );
         LAYOUTITEM42.setParent( TABLELAYOUT8 );
         LAYOUTITEM42.setRow( ROW8 );
         LAYOUTITEM42.setSizing( "FITTOWIDTH" );
         LAYOUTITEM42.setColumnSpan( 2 );
         LAYOUTITEM42.setMarginRight( 5 );
         LAYOUTITEM42.setMarginTop( 10 );
         LAYOUTITEM42.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM43 --
         // ------------------------------
         LAYOUTITEM43.setAlignment( "TOPLEFT" );
         LAYOUTITEM43.setColumn( COLUMN11 );
         LAYOUTITEM43.setFlow( "DOWN" );
         LAYOUTITEM43.setManage( XSDELIVERYADDRESS2 );
         LAYOUTITEM43.setParent( TABLELAYOUT8 );
         LAYOUTITEM43.setRow( ROW8 );
         LAYOUTITEM43.setSizing( "FITTOWIDTH" );
         LAYOUTITEM43.setColumnSpan( 2 );
         LAYOUTITEM43.setMarginRight( 5 );
         LAYOUTITEM43.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM44 --
         // ------------------------------
         LAYOUTITEM44.setAlignment( "TOPLEFT" );
         LAYOUTITEM44.setColumn( COLUMN11 );
         LAYOUTITEM44.setFlow( "DOWN" );
         LAYOUTITEM44.setManage( LDELIVERYCITY );
         LAYOUTITEM44.setParent( TABLELAYOUT8 );
         LAYOUTITEM44.setRow( ROW8 );
         LAYOUTITEM44.setSizing( "FITTOWIDTH" );
         LAYOUTITEM44.setColumnSpan( 2 );
         LAYOUTITEM44.setMarginRight( 5 );
         LAYOUTITEM44.setMarginTop( 10 );
         LAYOUTITEM44.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM45 --
         // ------------------------------
         LAYOUTITEM45.setAlignment( "TOPLEFT" );
         LAYOUTITEM45.setColumn( COLUMN11 );
         LAYOUTITEM45.setFlow( "DOWN" );
         LAYOUTITEM45.setManage( XSDELIVERYCITY );
         LAYOUTITEM45.setParent( TABLELAYOUT8 );
         LAYOUTITEM45.setRow( ROW8 );
         LAYOUTITEM45.setSizing( "FITTOWIDTH" );
         LAYOUTITEM45.setColumnSpan( 2 );
         LAYOUTITEM45.setMarginRight( 5 );
         LAYOUTITEM45.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM46 --
         // ------------------------------
         LAYOUTITEM46.setAlignment( "TOPLEFT" );
         LAYOUTITEM46.setColumn( COLUMN11 );
         LAYOUTITEM46.setFlow( "DOWN" );
         LAYOUTITEM46.setManage( LSTATE );
         LAYOUTITEM46.setParent( TABLELAYOUT8 );
         LAYOUTITEM46.setRow( ROW8 );
         LAYOUTITEM46.setSizing( "FITTOWIDTH" );
         LAYOUTITEM46.setColumnSpan( 2 );
         LAYOUTITEM46.setMarginLeft( 5 );
         LAYOUTITEM46.setMarginRight( 5 );
         LAYOUTITEM46.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM47 --
         // ------------------------------
         LAYOUTITEM47.setAlignment( "TOPLEFT" );
         LAYOUTITEM47.setColumn( COLUMN11 );
         LAYOUTITEM47.setFlow( "DOWN" );
         LAYOUTITEM47.setManage( XSSTATEDROPDOWN2 );
         LAYOUTITEM47.setParent( TABLELAYOUT8 );
         LAYOUTITEM47.setRow( ROW8 );
         LAYOUTITEM47.setSizing( "FITTOWIDTH" );
         LAYOUTITEM47.setColumnSpan( 2 );
         LAYOUTITEM47.setMarginRight( 5 );
         LAYOUTITEM47.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM48 --
         // ------------------------------
         LAYOUTITEM48.setAlignment( "TOPLEFT" );
         LAYOUTITEM48.setColumn( COLUMN11 );
         LAYOUTITEM48.setFlow( "DOWN" );
         LAYOUTITEM48.setManage( LDELIVERYZIP );
         LAYOUTITEM48.setParent( TABLELAYOUT8 );
         LAYOUTITEM48.setRow( ROW8 );
         LAYOUTITEM48.setSizing( "FITTOWIDTH" );
         LAYOUTITEM48.setColumnSpan( 2 );
         LAYOUTITEM48.setMarginRight( 5 );
         LAYOUTITEM48.setMarginTop( 10 );
         LAYOUTITEM48.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM49 --
         // ------------------------------
         LAYOUTITEM49.setAlignment( "TOPLEFT" );
         LAYOUTITEM49.setColumn( COLUMN11 );
         LAYOUTITEM49.setFlow( "DOWN" );
         LAYOUTITEM49.setManage( XSDELIVERYZIP );
         LAYOUTITEM49.setParent( TABLELAYOUT8 );
         LAYOUTITEM49.setRow( ROW8 );
         LAYOUTITEM49.setSizing( "FITTOWIDTH" );
         LAYOUTITEM49.setColumnSpan( 2 );
         LAYOUTITEM49.setMarginRight( 5 );
         LAYOUTITEM49.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM50 --
         // ------------------------------
         LAYOUTITEM50.setAlignment( "TOPLEFT" );
         LAYOUTITEM50.setColumn( COLUMN11 );
         LAYOUTITEM50.setFlow( "DOWN" );
         LAYOUTITEM50.setManage( LDELIVERYCOUNTRY );
         LAYOUTITEM50.setParent( TABLELAYOUT8 );
         LAYOUTITEM50.setRow( ROW8 );
         LAYOUTITEM50.setSizing( "FITTOWIDTH" );
         LAYOUTITEM50.setColumnSpan( 2 );
         LAYOUTITEM50.setMarginRight( 5 );
         LAYOUTITEM50.setMarginTop( 10 );
         LAYOUTITEM50.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM51 --
         // ------------------------------
         LAYOUTITEM51.setAlignment( "TOPLEFT" );
         LAYOUTITEM51.setColumn( COLUMN11 );
         LAYOUTITEM51.setFlow( "DOWN" );
         LAYOUTITEM51.setParent( TABLELAYOUT8 );
         LAYOUTITEM51.setRow( ROW8 );
         LAYOUTITEM51.setSizing( "FITTOWIDTH" );
         LAYOUTITEM51.setColumnSpan( 2 );
         LAYOUTITEM51.setMarginLeft( 5 );
         LAYOUTITEM51.setMarginRight( 5 );
         LAYOUTITEM51.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM52 --
         // ------------------------------
         LAYOUTITEM52.setAlignment( "TOPLEFT" );
         LAYOUTITEM52.setColumn( COLUMN11 );
         LAYOUTITEM52.setFlow( "DOWN" );
         LAYOUTITEM52.setManage( LDELIVERYINSTRUCTIONS );
         LAYOUTITEM52.setParent( TABLELAYOUT8 );
         LAYOUTITEM52.setRow( ROW8 );
         LAYOUTITEM52.setSizing( "FITTOWIDTH" );
         LAYOUTITEM52.setColumnSpan( 2 );
         LAYOUTITEM52.setMarginRight( 5 );
         LAYOUTITEM52.setMarginTop( 10 );
         LAYOUTITEM52.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM54 --
         // ------------------------------
         LAYOUTITEM54.setAlignment( "TOPLEFT" );
         LAYOUTITEM54.setColumn( COLUMN11 );
         LAYOUTITEM54.setFlow( "DOWN" );
         LAYOUTITEM54.setParent( TABLELAYOUT8 );
         LAYOUTITEM54.setRow( ROW8 );
         LAYOUTITEM54.setSizing( "NONE" );
         LAYOUTITEM54.initialize();

         // -------------------------------------------
         // -- Initialize #DELIVERYINSTRUCTIONSITEM1 --
         // -------------------------------------------
         DELIVERYINSTRUCTIONSITEM1.setColumn( COLUMN11 );
         DELIVERYINSTRUCTIONSITEM1.setParent( TABLELAYOUT8 );
         DELIVERYINSTRUCTIONSITEM1.setRow( ROW8 );
         DELIVERYINSTRUCTIONSITEM1.setSizing( "FITTOWIDTH" );
         DELIVERYINSTRUCTIONSITEM1.setAlignment( "TOPLEFT" );
         DELIVERYINSTRUCTIONSITEM1.setFlow( "DOWN" );
         DELIVERYINSTRUCTIONSITEM1.setColumnSpan( 2 );
         DELIVERYINSTRUCTIONSITEM1.setMarginLeft( 5 );
         DELIVERYINSTRUCTIONSITEM1.setMarginRight( 5 );
         DELIVERYINSTRUCTIONSITEM1.initialize();

         // -------------------------------------
         // -- Initialize #LDELIVERYSTATEITEM1 --
         // -------------------------------------
         LDELIVERYSTATEITEM1.setAlignment( "TOPLEFT" );
         LDELIVERYSTATEITEM1.setColumn( COLUMN11 );
         LDELIVERYSTATEITEM1.setManage( LDELIVERYSTATE );
         LDELIVERYSTATEITEM1.setParent( TABLELAYOUT8 );
         LDELIVERYSTATEITEM1.setRow( ROW8 );
         LDELIVERYSTATEITEM1.setSizing( "FITTOWIDTH" );
         LDELIVERYSTATEITEM1.setFlow( "DOWN" );
         LDELIVERYSTATEITEM1.setMarginRight( 5 );
         LDELIVERYSTATEITEM1.setMarginTop( 10 );
         LDELIVERYSTATEITEM1.initialize();

         // -------------------------------------------
         // -- Initialize #DELIVERYINSTRUCTIONSITEM2 --
         // -------------------------------------------
         DELIVERYINSTRUCTIONSITEM2.setAlignment( "TOPLEFT" );
         DELIVERYINSTRUCTIONSITEM2.setColumn( COLUMN11 );
         DELIVERYINSTRUCTIONSITEM2.setManage( DELIVERYINSTRUCTIONS );
         DELIVERYINSTRUCTIONSITEM2.setParent( TABLELAYOUT8 );
         DELIVERYINSTRUCTIONSITEM2.setRow( ROW8 );
         DELIVERYINSTRUCTIONSITEM2.setSizing( "FITTOWIDTH" );
         DELIVERYINSTRUCTIONSITEM2.setFlow( "DOWN" );
         DELIVERYINSTRUCTIONSITEM2.setColumnSpan( 2 );
         DELIVERYINSTRUCTIONSITEM2.setMarginRight( 5 );
         DELIVERYINSTRUCTIONSITEM2.initialize();

         // --------------------------------------------
         // -- Initialize #DELIVERYSTATEDROPDOWNITEM1 --
         // --------------------------------------------
         DELIVERYSTATEDROPDOWNITEM1.setManage( XSSTATEDROPDOWN2 );
         DELIVERYSTATEDROPDOWNITEM1.setParent( TABLELAYOUT8 );
         DELIVERYSTATEDROPDOWNITEM1.setRow( ROW8 );
         DELIVERYSTATEDROPDOWNITEM1.setSizing( "FITTOWIDTH" );
         DELIVERYSTATEDROPDOWNITEM1.setColumn( COLUMN11 );
         DELIVERYSTATEDROPDOWNITEM1.setAlignment( "TOPLEFT" );
         DELIVERYSTATEDROPDOWNITEM1.setFlow( "DOWN" );
         DELIVERYSTATEDROPDOWNITEM1.setColumnSpan( 2 );
         DELIVERYSTATEDROPDOWNITEM1.setMarginLeft( 5 );
         DELIVERYSTATEDROPDOWNITEM1.setMarginRight( 5 );
         DELIVERYSTATEDROPDOWNITEM1.initialize();

         // -----------------------------------------
         // -- Initialize #XSCOUNTRYDROPDOWN2ITEM1 --
         // -----------------------------------------
         XSCOUNTRYDROPDOWN2ITEM1.setAlignment( "TOPLEFT" );
         XSCOUNTRYDROPDOWN2ITEM1.setColumn( COLUMN11 );
         XSCOUNTRYDROPDOWN2ITEM1.setManage( XSCOUNTRYDROPDOWN1 );
         XSCOUNTRYDROPDOWN2ITEM1.setParent( TABLELAYOUT8 );
         XSCOUNTRYDROPDOWN2ITEM1.setRow( ROW8 );
         XSCOUNTRYDROPDOWN2ITEM1.setSizing( "FITTOWIDTH" );
         XSCOUNTRYDROPDOWN2ITEM1.setFlow( "DOWN" );
         XSCOUNTRYDROPDOWN2ITEM1.setColumnSpan( 2 );
         XSCOUNTRYDROPDOWN2ITEM1.setMarginLeft( 5 );
         XSCOUNTRYDROPDOWN2ITEM1.setMarginRight( 5 );
         XSCOUNTRYDROPDOWN2ITEM1.initialize();

         // -----------------------------------------
         // -- Initialize #XSCOUNTRYDROPDOWN2ITEM2 --
         // -----------------------------------------
         XSCOUNTRYDROPDOWN2ITEM2.setAlignment( "TOPLEFT" );
         XSCOUNTRYDROPDOWN2ITEM2.setColumn( COLUMN11 );
         XSCOUNTRYDROPDOWN2ITEM2.setManage( XSCOUNTRYDROPDOWN2 );
         XSCOUNTRYDROPDOWN2ITEM2.setParent( TABLELAYOUT8 );
         XSCOUNTRYDROPDOWN2ITEM2.setRow( ROW8 );
         XSCOUNTRYDROPDOWN2ITEM2.setSizing( "FITTOWIDTH" );
         XSCOUNTRYDROPDOWN2ITEM2.setFlow( "DOWN" );
         XSCOUNTRYDROPDOWN2ITEM2.setMarginRight( 5 );
         XSCOUNTRYDROPDOWN2ITEM2.setColumnSpan( 2 );
         XSCOUNTRYDROPDOWN2ITEM2.initialize();

         // ---------------------------
         // -- Initialize #PPERSONAL --
         // ---------------------------
         PPERSONAL.setDisplayPosition( 2 );
         PPERSONAL.setLeft( 0 );
         PPERSONAL.setParent( this );
         PPERSONAL.setTabPosition( 1 );
         PPERSONAL.setTabStop( false );
         PPERSONAL.setTop( 0 );
         PPERSONAL.setWidth( 327 );
         PPERSONAL.setHeight( 580 );
         PPERSONAL.setLayoutManager( TABLELAYOUT6 );
         PPERSONAL.initialize();

         // --------------------------
         // -- Initialize #PADDRESS --
         // --------------------------
         PADDRESS.setDisplayPosition( 3 );
         PADDRESS.setLeft( 337 );
         PADDRESS.setParent( this );
         PADDRESS.setTabPosition( 3 );
         PADDRESS.setTabStop( false );
         PADDRESS.setTop( 0 );
         PADDRESS.setWidth( 327 );
         PADDRESS.setHeight( 580 );
         PADDRESS.setLayoutManager( TABLELAYOUT7 );
         PADDRESS.initialize();

         // ---------------------------
         // -- Initialize #PDELIVERY --
         // ---------------------------
         PDELIVERY.setDisplayPosition( 4 );
         PDELIVERY.setLeft( 674 );
         PDELIVERY.setParent( this );
         PDELIVERY.setTabPosition( 4 );
         PDELIVERY.setTabStop( false );
         PDELIVERY.setTop( 0 );
         PDELIVERY.setWidth( 326 );
         PDELIVERY.setHeight( 580 );
         PDELIVERY.setLayoutManager( TABLELAYOUT8 );
         PDELIVERY.initialize();

         // ----------------------------------
         // -- Initialize #LPERSONALDETAILS --
         // ----------------------------------
         LPERSONALDETAILS.setCaption( "PERSONAL DETAILS" );
         LPERSONALDETAILS.setDisplayPosition( 1 );
         LPERSONALDETAILS.setEllipses( "WORD" );
         LPERSONALDETAILS.setHeight( 30 );
         LPERSONALDETAILS.setLeft( 0 );
         LPERSONALDETAILS.setParent( PPERSONAL );
         LPERSONALDETAILS.setTabPosition( 1 );
         LPERSONALDETAILS.setTabStop( false );
         LPERSONALDETAILS.setTop( 5 );
         LPERSONALDETAILS.setVerticalAlignment( "CENTER" );
         LPERSONALDETAILS.setWidth( 164 );
         LPERSONALDETAILS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LPERSONALDETAILS.initialize();

         // ------------------------
         // -- Initialize #LEMAIL --
         // ------------------------
         LEMAIL.setCaption( "Email *" );
         LEMAIL.setDisplayPosition( 2 );
         LEMAIL.setEllipses( "WORD" );
         LEMAIL.setHeight( 25 );
         LEMAIL.setLeft( 0 );
         LEMAIL.setParent( PPERSONAL );
         LEMAIL.setTabPosition( 2 );
         LEMAIL.setTabStop( false );
         LEMAIL.setTop( 45 );
         LEMAIL.setVerticalAlignment( "CENTER" );
         LEMAIL.setWidth( 317 );
         LEMAIL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LEMAIL.initialize();

         // --------------------------------
         // -- Initialize #XSACCOUNTEMAIL --
         // --------------------------------
         XSACCOUNTEMAIL.setDisplayPosition( 3 );
         XSACCOUNTEMAIL.setParent( PPERSONAL );
         XSACCOUNTEMAIL.setTabPosition( 3 );
         XSACCOUNTEMAIL.setTop( 70 );
         XSACCOUNTEMAIL.setWidth( 317 );
         XSACCOUNTEMAIL.setLabelPosition( "NONE" );
         XSACCOUNTEMAIL.setMarginLeft( 0 );
         XSACCOUNTEMAIL.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSACCOUNTEMAIL.setHeight( 30 );
         XSACCOUNTEMAIL.applyDefault();
         XSACCOUNTEMAIL.initialize();

         // ---------------------------
         // -- Initialize #LPASSWORD --
         // ---------------------------
         LPASSWORD.setCaption( "Password *" );
         LPASSWORD.setDisplayPosition( 4 );
         LPASSWORD.setEllipses( "WORD" );
         LPASSWORD.setHeight( 25 );
         LPASSWORD.setLeft( 0 );
         LPASSWORD.setParent( PPERSONAL );
         LPASSWORD.setTabPosition( 4 );
         LPASSWORD.setTabStop( false );
         LPASSWORD.setTop( 110 );
         LPASSWORD.setVerticalAlignment( "CENTER" );
         LPASSWORD.setWidth( 317 );
         LPASSWORD.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LPASSWORD.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LPASSWORD.initialize();

         // ----------------------------
         // -- Initialize #XSPASSWORD --
         // ----------------------------
         XSPASSWORD.setDisplayPosition( 5 );
         XSPASSWORD.setParent( PPERSONAL );
         XSPASSWORD.setTabPosition( 5 );
         XSPASSWORD.setTop( 135 );
         XSPASSWORD.setWidth( 317 );
         XSPASSWORD.setLabelPosition( "NONE" );
         XSPASSWORD.setMarginLeft( 0 );
         XSPASSWORD.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPASSWORD.setHeight( 30 );
         XSPASSWORD.applyDefault();
         XSPASSWORD.initialize();

         // ------------------------
         // -- Initialize #LTITLE --
         // ------------------------
         LTITLE.setCaption( "Title" );
         LTITLE.setDisplayPosition( 6 );
         LTITLE.setEllipses( "WORD" );
         LTITLE.setHeight( 25 );
         LTITLE.setLeft( 0 );
         LTITLE.setParent( PPERSONAL );
         LTITLE.setTabPosition( 6 );
         LTITLE.setTabStop( false );
         LTITLE.setTop( 175 );
         LTITLE.setVerticalAlignment( "CENTER" );
         LTITLE.setWidth( 317 );
         LTITLE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LTITLE.initialize();

         // ----------------------------------------
         // -- Initialize #XSACCOUNTTITLEDROPDOWN --
         // ----------------------------------------
         XSACCOUNTTITLEDROPDOWN.setTabStop( false );
         XSACCOUNTTITLEDROPDOWN.setDisplayPosition( 7 );
         XSACCOUNTTITLEDROPDOWN.setParent( PPERSONAL );
         XSACCOUNTTITLEDROPDOWN.setTabPosition( 7 );
         XSACCOUNTTITLEDROPDOWN.setWidth( 317 );
         XSACCOUNTTITLEDROPDOWN.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSACCOUNTTITLEDROPDOWN.setTop( 200 );
         XSACCOUNTTITLEDROPDOWN.setHeight( 30 );
         XSACCOUNTTITLEDROPDOWN.initialize();

         // ----------------------------
         // -- Initialize #LFIRSTNAME --
         // ----------------------------
         LFIRSTNAME.setCaption( "First Name *" );
         LFIRSTNAME.setDisplayPosition( 8 );
         LFIRSTNAME.setEllipses( "WORD" );
         LFIRSTNAME.setHeight( 25 );
         LFIRSTNAME.setLeft( 0 );
         LFIRSTNAME.setParent( PPERSONAL );
         LFIRSTNAME.setTabPosition( 8 );
         LFIRSTNAME.setTabStop( false );
         LFIRSTNAME.setTop( 240 );
         LFIRSTNAME.setVerticalAlignment( "CENTER" );
         LFIRSTNAME.setWidth( 317 );
         LFIRSTNAME.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LFIRSTNAME.initialize();

         // ------------------------------------
         // -- Initialize #XSACCOUNTFIRSTNAME --
         // ------------------------------------
         XSACCOUNTFIRSTNAME.setDisplayPosition( 9 );
         XSACCOUNTFIRSTNAME.setParent( PPERSONAL );
         XSACCOUNTFIRSTNAME.setTabPosition( 9 );
         XSACCOUNTFIRSTNAME.setTop( 265 );
         XSACCOUNTFIRSTNAME.setWidth( 317 );
         XSACCOUNTFIRSTNAME.setLabelPosition( "NONE" );
         XSACCOUNTFIRSTNAME.setMarginLeft( 0 );
         XSACCOUNTFIRSTNAME.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSACCOUNTFIRSTNAME.setHeight( 30 );
         XSACCOUNTFIRSTNAME.applyDefault();
         XSACCOUNTFIRSTNAME.initialize();

         // ---------------------------
         // -- Initialize #LLASTNAME --
         // ---------------------------
         LLASTNAME.setCaption( "Last Name * " );
         LLASTNAME.setDisplayPosition( 10 );
         LLASTNAME.setEllipses( "WORD" );
         LLASTNAME.setHeight( 25 );
         LLASTNAME.setLeft( 0 );
         LLASTNAME.setParent( PPERSONAL );
         LLASTNAME.setTabPosition( 10 );
         LLASTNAME.setTabStop( false );
         LLASTNAME.setTop( 305 );
         LLASTNAME.setVerticalAlignment( "CENTER" );
         LLASTNAME.setWidth( 317 );
         LLASTNAME.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LLASTNAME.initialize();

         // -----------------------------------
         // -- Initialize #XSACCOUNTLASTNAME --
         // -----------------------------------
         XSACCOUNTLASTNAME.setDisplayPosition( 11 );
         XSACCOUNTLASTNAME.setParent( PPERSONAL );
         XSACCOUNTLASTNAME.setTabPosition( 11 );
         XSACCOUNTLASTNAME.setTop( 330 );
         XSACCOUNTLASTNAME.setWidth( 317 );
         XSACCOUNTLASTNAME.setLabelPosition( "NONE" );
         XSACCOUNTLASTNAME.setMarginLeft( 0 );
         XSACCOUNTLASTNAME.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSACCOUNTLASTNAME.setHeight( 30 );
         XSACCOUNTLASTNAME.applyDefault();
         XSACCOUNTLASTNAME.initialize();

         // ----------------------------
         // -- Initialize #LBIRTHDATE --
         // ----------------------------
         LBIRTHDATE.setCaption( "Date of Birth" );
         LBIRTHDATE.setDisplayPosition( 12 );
         LBIRTHDATE.setEllipses( "WORD" );
         LBIRTHDATE.setHeight( 25 );
         LBIRTHDATE.setLeft( 0 );
         LBIRTHDATE.setParent( PPERSONAL );
         LBIRTHDATE.setTabPosition( 12 );
         LBIRTHDATE.setTabStop( false );
         LBIRTHDATE.setTop( 370 );
         LBIRTHDATE.setVerticalAlignment( "CENTER" );
         LBIRTHDATE.setWidth( 317 );
         LBIRTHDATE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LBIRTHDATE.initialize();

         // -----------------------------
         // -- Initialize #XSBIRTHDATE --
         // -----------------------------
         XSBIRTHDATE.setDisplayPosition( 13 );
         XSBIRTHDATE.setParent( PPERSONAL );
         XSBIRTHDATE.setTabPosition( 13 );
         XSBIRTHDATE.setTop( 395 );
         XSBIRTHDATE.setWidth( 317 );
         XSBIRTHDATE.setLabelPosition( "NONE" );
         XSBIRTHDATE.setMarginLeft( 0 );
         XSBIRTHDATE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSBIRTHDATE.setHeight( 30 );
         XSBIRTHDATE.applyDefault();
         XSBIRTHDATE.initialize();

         // ----------------------------
         // -- Initialize #LHOMEPHONE --
         // ----------------------------
         LHOMEPHONE.setCaption( "Phone *" );
         LHOMEPHONE.setDisplayPosition( 14 );
         LHOMEPHONE.setEllipses( "WORD" );
         LHOMEPHONE.setHeight( 25 );
         LHOMEPHONE.setLeft( 0 );
         LHOMEPHONE.setParent( PPERSONAL );
         LHOMEPHONE.setTabPosition( 14 );
         LHOMEPHONE.setTabStop( false );
         LHOMEPHONE.setTop( 435 );
         LHOMEPHONE.setVerticalAlignment( "CENTER" );
         LHOMEPHONE.setWidth( 317 );
         LHOMEPHONE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LHOMEPHONE.initialize();

         // -----------------------------
         // -- Initialize #XSPHONEHOME --
         // -----------------------------
         XSPHONEHOME.setDisplayPosition( 15 );
         XSPHONEHOME.setParent( PPERSONAL );
         XSPHONEHOME.setTabPosition( 15 );
         XSPHONEHOME.setTop( 460 );
         XSPHONEHOME.setWidth( 317 );
         XSPHONEHOME.setLabelPosition( "NONE" );
         XSPHONEHOME.setMarginLeft( 0 );
         XSPHONEHOME.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPHONEHOME.setHeight( 30 );
         XSPHONEHOME.applyDefault();
         XSPHONEHOME.initialize();

         // ------------------------------
         // -- Initialize #LMOBILEPHONE --
         // ------------------------------
         LMOBILEPHONE.setCaption( "Mobile *" );
         LMOBILEPHONE.setDisplayPosition( 16 );
         LMOBILEPHONE.setEllipses( "WORD" );
         LMOBILEPHONE.setHeight( 25 );
         LMOBILEPHONE.setLeft( 0 );
         LMOBILEPHONE.setParent( PPERSONAL );
         LMOBILEPHONE.setTabPosition( 16 );
         LMOBILEPHONE.setTabStop( false );
         LMOBILEPHONE.setTop( 500 );
         LMOBILEPHONE.setVerticalAlignment( "CENTER" );
         LMOBILEPHONE.setWidth( 317 );
         LMOBILEPHONE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LMOBILEPHONE.initialize();

         // -------------------------------
         // -- Initialize #XSPHONEMOBILE --
         // -------------------------------
         XSPHONEMOBILE.setDisplayPosition( 17 );
         XSPHONEMOBILE.setParent( PPERSONAL );
         XSPHONEMOBILE.setTabPosition( 17 );
         XSPHONEMOBILE.setTop( 525 );
         XSPHONEMOBILE.setWidth( 317 );
         XSPHONEMOBILE.setLabelPosition( "NONE" );
         XSPHONEMOBILE.setMarginLeft( 0 );
         XSPHONEMOBILE.setMouseOverStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPHONEMOBILE.setHeight( 30 );
         XSPHONEMOBILE.applyDefault();
         XSPHONEMOBILE.initialize();

         // --------------------------
         // -- Initialize #LADDRESS --
         // --------------------------
         LADDRESS.setCaption( "ADDRESS" );
         LADDRESS.setDisplayPosition( 1 );
         LADDRESS.setEllipses( "WORD" );
         LADDRESS.setHeight( 30 );
         LADDRESS.setLeft( 0 );
         LADDRESS.setParent( PADDRESS );
         LADDRESS.setTabPosition( 1 );
         LADDRESS.setTabStop( false );
         LADDRESS.setTop( 5 );
         LADDRESS.setVerticalAlignment( "CENTER" );
         LADDRESS.setWidth( 164 );
         LADDRESS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LADDRESS.initialize();

         // ------------------------------
         // -- Initialize #SAVEACCOUNT2 --
         // ------------------------------
         SAVEACCOUNT2.setCaption( "Save Account" );
         SAVEACCOUNT2.setDisplayPosition( 1 );
         SAVEACCOUNT2.setLeft( 405 );
         SAVEACCOUNT2.setParent( this );
         SAVEACCOUNT2.setTabPosition( 2 );
         SAVEACCOUNT2.setTop( 580 );
         SAVEACCOUNT2.setWidth( 180 );
         SAVEACCOUNT2.setThemeDrawStyle( "ButtonLook1" );
         SAVEACCOUNT2.setHeight( 50 );
         SAVEACCOUNT2.initialize();

         // -------------------------
         // -- Initialize #LSTREET --
         // -------------------------
         LSTREET.setDisplayPosition( 2 );
         LSTREET.setEllipses( "WORD" );
         LSTREET.setHeight( 25 );
         LSTREET.setLeft( 0 );
         LSTREET.setParent( PADDRESS );
         LSTREET.setTabPosition( 2 );
         LSTREET.setTabStop( false );
         LSTREET.setTop( 45 );
         LSTREET.setVerticalAlignment( "CENTER" );
         LSTREET.setWidth( 317 );
         LSTREET.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LSTREET.setCaption( "Street *" );
         LSTREET.initialize();

         // -----------------------------------
         // -- Initialize #XSACCOUNTADDRESS1 --
         // -----------------------------------
         XSACCOUNTADDRESS1.setDisplayPosition( 3 );
         XSACCOUNTADDRESS1.setParent( PADDRESS );
         XSACCOUNTADDRESS1.setTabPosition( 3 );
         XSACCOUNTADDRESS1.setWidth( 317 );
         XSACCOUNTADDRESS1.setLabelPosition( "NONE" );
         XSACCOUNTADDRESS1.setMarginLeft( 0 );
         XSACCOUNTADDRESS1.setTop( 70 );
         XSACCOUNTADDRESS1.setHeight( 30 );
         XSACCOUNTADDRESS1.applyDefault();
         XSACCOUNTADDRESS1.initialize();

         // -------------------------------
         // -- Initialize #LADDRESSLINE2 --
         // -------------------------------
         LADDRESSLINE2.setCaption( "Address line 2" );
         LADDRESSLINE2.setDisplayPosition( 4 );
         LADDRESSLINE2.setEllipses( "WORD" );
         LADDRESSLINE2.setHeight( 25 );
         LADDRESSLINE2.setLeft( 0 );
         LADDRESSLINE2.setParent( PADDRESS );
         LADDRESSLINE2.setTabPosition( 4 );
         LADDRESSLINE2.setTabStop( false );
         LADDRESSLINE2.setTop( 110 );
         LADDRESSLINE2.setVerticalAlignment( "CENTER" );
         LADDRESSLINE2.setWidth( 317 );
         LADDRESSLINE2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LADDRESSLINE2.initialize();

         // -----------------------------------
         // -- Initialize #XSACCOUNTADDRESS2 --
         // -----------------------------------
         XSACCOUNTADDRESS2.setDisplayPosition( 5 );
         XSACCOUNTADDRESS2.setParent( PADDRESS );
         XSACCOUNTADDRESS2.setTabPosition( 5 );
         XSACCOUNTADDRESS2.setWidth( 317 );
         XSACCOUNTADDRESS2.setLabelPosition( "NONE" );
         XSACCOUNTADDRESS2.setMarginLeft( 0 );
         XSACCOUNTADDRESS2.setTop( 135 );
         XSACCOUNTADDRESS2.setHeight( 30 );
         XSACCOUNTADDRESS2.applyDefault();
         XSACCOUNTADDRESS2.initialize();

         // -----------------------
         // -- Initialize #LCITY --
         // -----------------------
         LCITY.setCaption( "City *" );
         LCITY.setDisplayPosition( 6 );
         LCITY.setEllipses( "WORD" );
         LCITY.setHeight( 25 );
         LCITY.setLeft( 0 );
         LCITY.setParent( PADDRESS );
         LCITY.setTabPosition( 6 );
         LCITY.setTabStop( false );
         LCITY.setTop( 175 );
         LCITY.setVerticalAlignment( "CENTER" );
         LCITY.setWidth( 317 );
         LCITY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LCITY.initialize();

         // -------------------------------
         // -- Initialize #XSACCOUNTCITY --
         // -------------------------------
         XSACCOUNTCITY.setDisplayPosition( 7 );
         XSACCOUNTCITY.setParent( PADDRESS );
         XSACCOUNTCITY.setTabPosition( 7 );
         XSACCOUNTCITY.setWidth( 317 );
         XSACCOUNTCITY.setLabelPosition( "NONE" );
         XSACCOUNTCITY.setMarginLeft( 0 );
         XSACCOUNTCITY.setTop( 200 );
         XSACCOUNTCITY.setHeight( 30 );
         XSACCOUNTCITY.applyDefault();
         XSACCOUNTCITY.initialize();

         // ------------------------
         // -- Initialize #LSTATE --
         // ------------------------
         LSTATE.setCaption( "State/Province *" );
         LSTATE.setDisplayPosition( 8 );
         LSTATE.setEllipses( "WORD" );
         LSTATE.setHeight( 25 );
         LSTATE.setLeft( 0 );
         LSTATE.setParent( PADDRESS );
         LSTATE.setTabPosition( 8 );
         LSTATE.setTabStop( false );
         LSTATE.setTop( 240 );
         LSTATE.setVerticalAlignment( "CENTER" );
         LSTATE.setWidth( 317 );
         LSTATE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LSTATE.initialize();

         // ----------------------------------
         // -- Initialize #XSSTATEDROPDOWN1 --
         // ----------------------------------
         XSSTATEDROPDOWN1.setDisplayPosition( 9 );
         XSSTATEDROPDOWN1.setParent( PADDRESS );
         XSSTATEDROPDOWN1.setTabPosition( 9 );
         XSSTATEDROPDOWN1.setTabStop( false );
         XSSTATEDROPDOWN1.setWidth( 317 );
         XSSTATEDROPDOWN1.setTop( 265 );
         XSSTATEDROPDOWN1.setHeight( 30 );
         XSSTATEDROPDOWN1.initialize();

         // ----------------------
         // -- Initialize #LZIP --
         // ----------------------
         LZIP.setCaption( "Zip/Postal Code *" );
         LZIP.setDisplayPosition( 10 );
         LZIP.setEllipses( "WORD" );
         LZIP.setHeight( 25 );
         LZIP.setLeft( 0 );
         LZIP.setParent( PADDRESS );
         LZIP.setTabPosition( 10 );
         LZIP.setTabStop( false );
         LZIP.setTop( 305 );
         LZIP.setVerticalAlignment( "CENTER" );
         LZIP.setWidth( 317 );
         LZIP.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LZIP.initialize();

         // ------------------------------
         // -- Initialize #XSACCOUNTZIP --
         // ------------------------------
         XSACCOUNTZIP.setDisplayPosition( 11 );
         XSACCOUNTZIP.setParent( PADDRESS );
         XSACCOUNTZIP.setTabPosition( 11 );
         XSACCOUNTZIP.setWidth( 317 );
         XSACCOUNTZIP.setLabelPosition( "NONE" );
         XSACCOUNTZIP.setMarginLeft( 0 );
         XSACCOUNTZIP.setTop( 330 );
         XSACCOUNTZIP.setHeight( 30 );
         XSACCOUNTZIP.applyDefault();
         XSACCOUNTZIP.initialize();

         // --------------------------
         // -- Initialize #LCOUNTRY --
         // --------------------------
         LCOUNTRY.setCaption( "Country *" );
         LCOUNTRY.setDisplayPosition( 12 );
         LCOUNTRY.setEllipses( "WORD" );
         LCOUNTRY.setHeight( 25 );
         LCOUNTRY.setLeft( 0 );
         LCOUNTRY.setParent( PADDRESS );
         LCOUNTRY.setTabPosition( 12 );
         LCOUNTRY.setTabStop( false );
         LCOUNTRY.setTop( 370 );
         LCOUNTRY.setVerticalAlignment( "CENTER" );
         LCOUNTRY.setWidth( 317 );
         LCOUNTRY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LCOUNTRY.initialize();

         // ------------------------------------
         // -- Initialize #XSCOUNTRYDROPDOWN1 --
         // ------------------------------------
         XSCOUNTRYDROPDOWN1.setTabStop( false );
         XSCOUNTRYDROPDOWN1.setDisplayPosition( 13 );
         XSCOUNTRYDROPDOWN1.setParent( PADDRESS );
         XSCOUNTRYDROPDOWN1.setTabPosition( 13 );
         XSCOUNTRYDROPDOWN1.setWidth( 317 );
         XSCOUNTRYDROPDOWN1.setTop( 395 );
         XSCOUNTRYDROPDOWN1.setHeight( 30 );
         XSCOUNTRYDROPDOWN1.initialize();

         // ----------------------------------
         // -- Initialize #LDELIVERYADDRESS --
         // ----------------------------------
         LDELIVERYADDRESS.setCaption( "DELIVERY ADDRESS" );
         LDELIVERYADDRESS.setDisplayPosition( 1 );
         LDELIVERYADDRESS.setEllipses( "WORD" );
         LDELIVERYADDRESS.setHeight( 30 );
         LDELIVERYADDRESS.setLeft( 0 );
         LDELIVERYADDRESS.setParent( PDELIVERY );
         LDELIVERYADDRESS.setTabPosition( 1 );
         LDELIVERYADDRESS.setTabStop( false );
         LDELIVERYADDRESS.setTop( 5 );
         LDELIVERYADDRESS.setVerticalAlignment( "CENTER" );
         LDELIVERYADDRESS.setWidth( 163 );
         LDELIVERYADDRESS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LDELIVERYADDRESS.initialize();

         // --------------------------------
         // -- Initialize #USESAMEADDRESS --
         // --------------------------------
         USESAMEADDRESS.setCaption( "Same as Address" );
         USESAMEADDRESS.setDisplayPosition( 2 );
         USESAMEADDRESS.setLeft( 163 );
         USESAMEADDRESS.setMarginLeft( 2 );
         USESAMEADDRESS.setParent( PDELIVERY );
         USESAMEADDRESS.setTabPosition( 2 );
         USESAMEADDRESS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         USESAMEADDRESS.setWidth( 158 );
         USESAMEADDRESS.setTop( 5 );
         USESAMEADDRESS.setAlignment( "RIGHT" );
         USESAMEADDRESS.initialize();

         // ---------------------------------
         // -- Initialize #LDELIVERYSTREET --
         // ---------------------------------
         LDELIVERYSTREET.setCaption( "Street *" );
         LDELIVERYSTREET.setDisplayPosition( 3 );
         LDELIVERYSTREET.setEllipses( "WORD" );
         LDELIVERYSTREET.setHeight( 25 );
         LDELIVERYSTREET.setLeft( 0 );
         LDELIVERYSTREET.setParent( PDELIVERY );
         LDELIVERYSTREET.setTabPosition( 3 );
         LDELIVERYSTREET.setTabStop( false );
         LDELIVERYSTREET.setTop( 45 );
         LDELIVERYSTREET.setVerticalAlignment( "CENTER" );
         LDELIVERYSTREET.setWidth( 321 );
         LDELIVERYSTREET.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYSTREET.initialize();

         // ------------------------------------
         // -- Initialize #XSDELIVERYADDRESS1 --
         // ------------------------------------
         XSDELIVERYADDRESS1.setDisplayPosition( 4 );
         XSDELIVERYADDRESS1.setParent( PDELIVERY );
         XSDELIVERYADDRESS1.setTabPosition( 4 );
         XSDELIVERYADDRESS1.setTop( 70 );
         XSDELIVERYADDRESS1.setWidth( 321 );
         XSDELIVERYADDRESS1.setLabelPosition( "NONE" );
         XSDELIVERYADDRESS1.setMarginLeft( 0 );
         XSDELIVERYADDRESS1.setHeight( 30 );
         XSDELIVERYADDRESS1.applyDefault();
         XSDELIVERYADDRESS1.initialize();

         // ---------------------------------------
         // -- Initialize #LDELIVERYADDRESSLINE2 --
         // ---------------------------------------
         LDELIVERYADDRESSLINE2.setCaption( "Address Line 2" );
         LDELIVERYADDRESSLINE2.setDisplayPosition( 5 );
         LDELIVERYADDRESSLINE2.setEllipses( "WORD" );
         LDELIVERYADDRESSLINE2.setHeight( 25 );
         LDELIVERYADDRESSLINE2.setLeft( 0 );
         LDELIVERYADDRESSLINE2.setParent( PDELIVERY );
         LDELIVERYADDRESSLINE2.setTabPosition( 5 );
         LDELIVERYADDRESSLINE2.setTabStop( false );
         LDELIVERYADDRESSLINE2.setTop( 110 );
         LDELIVERYADDRESSLINE2.setVerticalAlignment( "CENTER" );
         LDELIVERYADDRESSLINE2.setWidth( 321 );
         LDELIVERYADDRESSLINE2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYADDRESSLINE2.initialize();

         // ------------------------------------
         // -- Initialize #XSDELIVERYADDRESS2 --
         // ------------------------------------
         XSDELIVERYADDRESS2.setDisplayPosition( 6 );
         XSDELIVERYADDRESS2.setParent( PDELIVERY );
         XSDELIVERYADDRESS2.setTabPosition( 6 );
         XSDELIVERYADDRESS2.setTop( 135 );
         XSDELIVERYADDRESS2.setWidth( 321 );
         XSDELIVERYADDRESS2.setLabelPosition( "NONE" );
         XSDELIVERYADDRESS2.setMarginLeft( 0 );
         XSDELIVERYADDRESS2.setHeight( 30 );
         XSDELIVERYADDRESS2.applyDefault();
         XSDELIVERYADDRESS2.initialize();

         // -------------------------------
         // -- Initialize #LDELIVERYCITY --
         // -------------------------------
         LDELIVERYCITY.setCaption( "City *" );
         LDELIVERYCITY.setDisplayPosition( 7 );
         LDELIVERYCITY.setEllipses( "WORD" );
         LDELIVERYCITY.setHeight( 25 );
         LDELIVERYCITY.setLeft( 0 );
         LDELIVERYCITY.setParent( PDELIVERY );
         LDELIVERYCITY.setTabPosition( 7 );
         LDELIVERYCITY.setTabStop( false );
         LDELIVERYCITY.setTop( 175 );
         LDELIVERYCITY.setVerticalAlignment( "CENTER" );
         LDELIVERYCITY.setWidth( 321 );
         LDELIVERYCITY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYCITY.initialize();

         // --------------------------------
         // -- Initialize #XSDELIVERYCITY --
         // --------------------------------
         XSDELIVERYCITY.setDisplayPosition( 8 );
         XSDELIVERYCITY.setParent( PDELIVERY );
         XSDELIVERYCITY.setTabPosition( 8 );
         XSDELIVERYCITY.setTop( 200 );
         XSDELIVERYCITY.setWidth( 321 );
         XSDELIVERYCITY.setLabelPosition( "NONE" );
         XSDELIVERYCITY.setMarginLeft( 0 );
         XSDELIVERYCITY.setHeight( 30 );
         XSDELIVERYCITY.applyDefault();
         XSDELIVERYCITY.initialize();

         // --------------------------------
         // -- Initialize #LDELIVERYSTATE --
         // --------------------------------
         LDELIVERYSTATE.setCaption( "State/Province *" );
         LDELIVERYSTATE.setDisplayPosition( 9 );
         LDELIVERYSTATE.setEllipses( "WORD" );
         LDELIVERYSTATE.setHeight( 25 );
         LDELIVERYSTATE.setLeft( 0 );
         LDELIVERYSTATE.setParent( PDELIVERY );
         LDELIVERYSTATE.setTabPosition( 9 );
         LDELIVERYSTATE.setTabStop( false );
         LDELIVERYSTATE.setTop( 240 );
         LDELIVERYSTATE.setVerticalAlignment( "CENTER" );
         LDELIVERYSTATE.setWidth( 158 );
         LDELIVERYSTATE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYSTATE.initialize();

         // ----------------------------------
         // -- Initialize #XSSTATEDROPDOWN2 --
         // ----------------------------------
         XSSTATEDROPDOWN2.setTabStop( false );
         XSSTATEDROPDOWN2.setDisplayPosition( 10 );
         XSSTATEDROPDOWN2.setParent( PDELIVERY );
         XSSTATEDROPDOWN2.setTabPosition( 10 );
         XSSTATEDROPDOWN2.setWidth( 321 );
         XSSTATEDROPDOWN2.setTop( 265 );
         XSSTATEDROPDOWN2.setHeight( 30 );
         XSSTATEDROPDOWN2.initialize();

         // ------------------------------
         // -- Initialize #LDELIVERYZIP --
         // ------------------------------
         LDELIVERYZIP.setCaption( "Zip/Postal Code *" );
         LDELIVERYZIP.setDisplayPosition( 11 );
         LDELIVERYZIP.setEllipses( "WORD" );
         LDELIVERYZIP.setHeight( 25 );
         LDELIVERYZIP.setLeft( 0 );
         LDELIVERYZIP.setParent( PDELIVERY );
         LDELIVERYZIP.setTabPosition( 11 );
         LDELIVERYZIP.setTabStop( false );
         LDELIVERYZIP.setTop( 305 );
         LDELIVERYZIP.setVerticalAlignment( "CENTER" );
         LDELIVERYZIP.setWidth( 321 );
         LDELIVERYZIP.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYZIP.initialize();

         // -------------------------------
         // -- Initialize #XSDELIVERYZIP --
         // -------------------------------
         XSDELIVERYZIP.setDisplayPosition( 12 );
         XSDELIVERYZIP.setParent( PDELIVERY );
         XSDELIVERYZIP.setTabPosition( 12 );
         XSDELIVERYZIP.setTop( 330 );
         XSDELIVERYZIP.setWidth( 321 );
         XSDELIVERYZIP.setLabelPosition( "NONE" );
         XSDELIVERYZIP.setMarginLeft( 0 );
         XSDELIVERYZIP.setHeight( 30 );
         XSDELIVERYZIP.applyDefault();
         XSDELIVERYZIP.initialize();

         // ----------------------------------
         // -- Initialize #LDELIVERYCOUNTRY --
         // ----------------------------------
         LDELIVERYCOUNTRY.setCaption( "Country *" );
         LDELIVERYCOUNTRY.setDisplayPosition( 13 );
         LDELIVERYCOUNTRY.setEllipses( "WORD" );
         LDELIVERYCOUNTRY.setHeight( 25 );
         LDELIVERYCOUNTRY.setLeft( 0 );
         LDELIVERYCOUNTRY.setParent( PDELIVERY );
         LDELIVERYCOUNTRY.setTabPosition( 13 );
         LDELIVERYCOUNTRY.setTabStop( false );
         LDELIVERYCOUNTRY.setTop( 370 );
         LDELIVERYCOUNTRY.setVerticalAlignment( "CENTER" );
         LDELIVERYCOUNTRY.setWidth( 321 );
         LDELIVERYCOUNTRY.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYCOUNTRY.initialize();

         // ------------------------------------
         // -- Initialize #XSCOUNTRYDROPDOWN2 --
         // ------------------------------------
         XSCOUNTRYDROPDOWN2.setTabStop( false );
         XSCOUNTRYDROPDOWN2.setDisplayPosition( 14 );
         XSCOUNTRYDROPDOWN2.setParent( PDELIVERY );
         XSCOUNTRYDROPDOWN2.setTabPosition( 14 );
         XSCOUNTRYDROPDOWN2.setWidth( 321 );
         XSCOUNTRYDROPDOWN2.setTop( 395 );
         XSCOUNTRYDROPDOWN2.setHeight( 30 );
         XSCOUNTRYDROPDOWN2.initialize();

         // ---------------------------------------
         // -- Initialize #LDELIVERYINSTRUCTIONS --
         // ---------------------------------------
         LDELIVERYINSTRUCTIONS.setCaption( "Delivery Instructions" );
         LDELIVERYINSTRUCTIONS.setDisplayPosition( 15 );
         LDELIVERYINSTRUCTIONS.setEllipses( "WORD" );
         LDELIVERYINSTRUCTIONS.setHeight( 25 );
         LDELIVERYINSTRUCTIONS.setLeft( 0 );
         LDELIVERYINSTRUCTIONS.setParent( PDELIVERY );
         LDELIVERYINSTRUCTIONS.setTabPosition( 15 );
         LDELIVERYINSTRUCTIONS.setTabStop( false );
         LDELIVERYINSTRUCTIONS.setTop( 435 );
         LDELIVERYINSTRUCTIONS.setVerticalAlignment( "CENTER" );
         LDELIVERYINSTRUCTIONS.setWidth( 321 );
         LDELIVERYINSTRUCTIONS.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT08ALMOSTBLACK" ) );
         LDELIVERYINSTRUCTIONS.initialize();

         // --------------------------------------
         // -- Initialize #DELIVERYINSTRUCTIONS --
         // --------------------------------------
         DELIVERYINSTRUCTIONS.setDisplayPosition( 16 );
         DELIVERYINSTRUCTIONS.setHeight( 100 );
         DELIVERYINSTRUCTIONS.setParent( PDELIVERY );
         DELIVERYINSTRUCTIONS.setTabPosition( 16 );
         DELIVERYINSTRUCTIONS.setTop( 460 );
         DELIVERYINSTRUCTIONS.setWidth( 321 );
         DELIVERYINSTRUCTIONS.setLeft( 0 );
         DELIVERYINSTRUCTIONS.initialize();

         // ----------------------------
         // -- Initialize #MESSAGEBOX --
         // ----------------------------
         MESSAGEBOX.setTitle( "Messages" );
         MESSAGEBOX.initialize();

         // ------------------------------
         // -- Initialize #SAVEPASSWORD --
         // ------------------------------
         SAVEPASSWORD.applyDefault();
         SAVEPASSWORD.initialize();

         // ------------------------------------------
         // -- Add Event Handlers for #SAVEACCOUNT2 --
         // ------------------------------------------
         SAVEACCOUNT2.addEventHandler( "CLICK", this, evtRoutine2 );

         // -----------------------------------------------
         // -- Add Event Handlers for #XSACCOUNTADDRESS1 --
         // -----------------------------------------------
         XSACCOUNTADDRESS1.addEventHandler( "CHANGED", this, evtRoutine4 );

         // -----------------------------------------------
         // -- Add Event Handlers for #XSACCOUNTADDRESS2 --
         // -----------------------------------------------
         XSACCOUNTADDRESS2.addEventHandler( "CHANGED", this, evtRoutine5 );

         // -------------------------------------------
         // -- Add Event Handlers for #XSACCOUNTCITY --
         // -------------------------------------------
         XSACCOUNTCITY.addEventHandler( "CHANGED", this, evtRoutine6 );

         // ----------------------------------------------
         // -- Add Event Handlers for #XSSTATEDROPDOWN1 --
         // ----------------------------------------------
         XSSTATEDROPDOWN1.addEventHandler( "STATEUPDATED", this, evtRoutine8 );

         // ------------------------------------------
         // -- Add Event Handlers for #XSACCOUNTZIP --
         // ------------------------------------------
         XSACCOUNTZIP.addEventHandler( "CHANGED", this, evtRoutine7 );

         // ------------------------------------------------
         // -- Add Event Handlers for #XSCOUNTRYDROPDOWN1 --
         // ------------------------------------------------
         XSCOUNTRYDROPDOWN1.addEventHandler( "COUNTRYUPDATED", this, evtRoutine9 );

         // --------------------------------------------
         // -- Add Event Handlers for #USESAMEADDRESS --
         // --------------------------------------------
         USESAMEADDRESS.addEventHandler( "CLICK", this, evtRoutine3 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 630 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1000 );
         this.setLayoutManager( TABLELAYOUT1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.Initialize", 190 );

      //
      // EVTROUTINE Handling(#com_owner.Initialize)
      //
      rtn.Line( 190 );
      {

         //
         // #com_owner.LoadAccount
         //
         rtn.Line( 192 );
         this.mthLOADACCOUNT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 194 );
      rtn.end();
   };

   //
   // evtRoutine2 - #SaveAccount2.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#SaveAccount2.Click", 196 );

      //
      // EVTROUTINE Handling(#SaveAccount2.Click)
      //
      rtn.Line( 196 );
      {

         //
         // #Com_owner.SaveAccount
         //
         rtn.Line( 198 );
         this.mthSAVEACCOUNT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 200 );
      rtn.end();
   };

   //
   // evtRoutine3 - #UseSameAddress.Click
   //
   function evtRoutine3( sender, parms )
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#UseSameAddress.Click", 202 );

      //
      // EVTROUTINE Handling(#UseSameAddress.Click)
      //
      rtn.Line( 202 );
      {

         //
         // IF (#UseSameAddress.ButtonState = checked)
         //
         rtn.Line( 204 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSDeliveryAddress1 := #XSAccountAddress1
            //
            rtn.Line( 206 );
            ref.XSDELIVERYADDRESS1.set( ref.XSACCOUNTADDRESS1.get() );

            //
            // #XSDeliveryAddress2 := #XSAccountAddress2
            //
            rtn.Line( 207 );
            ref.XSDELIVERYADDRESS2.set( ref.XSACCOUNTADDRESS2.get() );

            //
            // #XSDeliveryCity := #XSAccountCity
            //
            rtn.Line( 208 );
            ref.XSDELIVERYCITY.set( ref.XSACCOUNTCITY.get() );

            //
            // #XSCountryDropDown2.pCurrentValue := #XSAccountCountry
            //
            rtn.Line( 209 );
            ref.XSCOUNTRYDROPDOWN2.setPCURRENTVALUE( fld.XSACCCNTY.get() );

            //
            // #XSDeliveryZip := #XSAccountZip
            //
            rtn.Line( 210 );
            ref.XSDELIVERYZIP.set( ref.XSACCOUNTZIP.get() );

            //
            // #XSStateDropDown2.pCurrentValue := #XSAccountState
            //
            rtn.Line( 211 );
            ref.XSSTATEDROPDOWN2.setPCURRENTVALUE( fld.XSACCSTT.get() );

            //
            // RETURN 
            //
            rtn.end();
            return;

         //
         // ENDIF 
         //
         }

         //
         // #XSDeliveryAddress1 := *blank
         //
         rtn.Line( 218 );
         ref.XSDELIVERYADDRESS1.set( "" );

         //
         // #XSDeliveryAddress2 := *blank
         //
         rtn.Line( 219 );
         ref.XSDELIVERYADDRESS2.set( "" );

         //
         // #XSDeliveryCity := *blank
         //
         rtn.Line( 220 );
         ref.XSDELIVERYCITY.set( "" );

         //
         // #XSCountryDropDown2.pCurrentValue := *blank
         //
         rtn.Line( 221 );
         ref.XSCOUNTRYDROPDOWN2.setPCURRENTVALUE( "" );

         //
         // #XSDeliveryZip := *blank
         //
         rtn.Line( 222 );
         ref.XSDELIVERYZIP.set( "" );

         //
         // #XSStateDropDown2.pCurrentValue := *blank
         //
         rtn.Line( 223 );
         ref.XSSTATEDROPDOWN2.setPCURRENTVALUE( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 225 );
      rtn.end();
   };

   //
   // evtRoutine4 - #XSAccountAddress1.Changed
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSAccountAddress1.Changed", 227 );

      //
      // EVTROUTINE Handling(#XSAccountAddress1.Changed)
      //
      rtn.Line( 227 );
      {

         //
         // IF (#UseSameAddress.ButtonState = checked)
         //
         rtn.Line( 229 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSDeliveryAddress1 := #XSAccountAddress1
            //
            rtn.Line( 231 );
            ref.XSDELIVERYADDRESS1.set( ref.XSACCOUNTADDRESS1.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 235 );
      rtn.end();
   };

   //
   // evtRoutine5 - #XSAccountAddress2.Changed
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSAccountAddress2.Changed", 237 );

      //
      // EVTROUTINE Handling(#XSAccountAddress2.Changed)
      //
      rtn.Line( 237 );
      {

         //
         // IF (#UseSameAddress.ButtonState = checked)
         //
         rtn.Line( 239 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSDeliveryAddress2 := #XSAccountAddress2
            //
            rtn.Line( 241 );
            ref.XSDELIVERYADDRESS2.set( ref.XSACCOUNTADDRESS2.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 245 );
      rtn.end();
   };

   //
   // evtRoutine6 - #XSAccountCity.changed
   //
   function evtRoutine6( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSAccountCity.changed", 247 );

      //
      // EVTROUTINE Handling(#XSAccountCity.changed)
      //
      rtn.Line( 247 );
      {

         //
         // IF (#UseSameAddress.ButtonState = checked)
         //
         rtn.Line( 249 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSDeliveryCity := #XSAccountCity
            //
            rtn.Line( 251 );
            ref.XSDELIVERYCITY.set( ref.XSACCOUNTCITY.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 255 );
      rtn.end();
   };

   //
   // evtRoutine7 - #XSAccountZip.changed
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSAccountZip.changed", 257 );

      //
      // EVTROUTINE Handling(#XSAccountZip.changed)
      //
      rtn.Line( 257 );
      {

         //
         // IF (#UseSameAddress.ButtonState = checked)
         //
         rtn.Line( 259 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSDeliveryZip := #XSAccountZip
            //
            rtn.Line( 261 );
            ref.XSDELIVERYZIP.set( ref.XSACCOUNTZIP.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 265 );
      rtn.end();
   };

   //
   // evtRoutine8 - #XSStateDropdown1.StateUpdated
   //
   function evtRoutine8( sender, parms )
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSStateDropdown1.StateUpdated", 267 );

      //
      // EVTROUTINE Handling(#XSStateDropdown1.StateUpdated)
      //
      rtn.Line( 267 );
      {

         //
         // IF (#UseSameAddress.ButtonState = CHECKED)
         //
         rtn.Line( 269 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSStateDropDown2.pCurrentValue #XSDeliveryState := #XSStateDropdown1.pCurrentValue
            //
            rtn.Line( 271 );
            ref.XSSTATEDROPDOWN2.setPCURRENTVALUE( ref.XSSTATEDROPDOWN1.getPCURRENTVALUE() );
            fld.XSDLVSTT.set( ref.XSSTATEDROPDOWN1.getPCURRENTVALUE() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 275 );
      rtn.end();
   };

   //
   // evtRoutine9 - #XSCountryDropDown1.CountryUpdated
   //
   function evtRoutine9( sender, parms )
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSCountryDropDown1.CountryUpdated", 277 );

      //
      // EVTROUTINE Handling(#XSCountryDropDown1.CountryUpdated)
      //
      rtn.Line( 277 );
      {

         //
         // IF (#UseSameAddress.ButtonState = CHECKED)
         //
         rtn.Line( 279 );
         if ( Lansa.String.eq( ref.USESAMEADDRESS.getButtonState(), "CHECKED" ) )
         {

            //
            // #XSCountryDropDown2.pCurrentValue #XSDeliveryCountry := #XSCountryDropDown1.pCurrentValue
            //
            rtn.Line( 281 );
            ref.XSCOUNTRYDROPDOWN2.setPCURRENTVALUE( ref.XSCOUNTRYDROPDOWN1.getPCURRENTVALUE() );
            fld.XSDLVCNTY.set( ref.XSCOUNTRYDROPDOWN1.getPCURRENTVALUE() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 285 );
      rtn.end();
   };

   //
   // mthLOADACCOUNT - LoadAccount
   //
   COM_OWNER.mthLOADACCOUNT = function()
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "LoadAccount", 287 );

      //
      // DEFINE_COM Class(#xsServer.LoadAccount) Name(#LoadAccount)
      //
      var LOADACCOUNT = rtn.createDataRequest( "LOADACCOUNT", "XSSERVER", "LOADACCOUNT" );

      // -----------------------------
      // -- Initialize #LOADACCOUNT --
      // -----------------------------
      LOADACCOUNT.initialize();

      // -----------------------------------------
      // -- Add Event Handlers for #LOADACCOUNT --
      // -----------------------------------------
      LOADACCOUNT.addEventHandler( "COMPLETED", this, evtRoutine10 );

      //
      // MTHROUTINE Name(LoadAccount)
      //
      rtn.Line( 287 );
      {

         //
         // IF (#Sys_Web.SessionStorage<Email> *IsNot *null)
         //
         rtn.Line( 291 );
         if ( ( Lansa.WEB().getSessionStorage().get( "EMAIL" ) != null ) )
         {

            //
            // #XSAccountEmail := #Sys_Web.SessionStorage<Email>
            //
            rtn.Line( 293 );
            ref.XSACCOUNTEMAIL.set( Lansa.WEB().getSessionStorage().get( "EMAIL" ).get() );

         //
         // ENDIF 
         //
         }

         //
         // IF (#XSAccountEmail = *blank)
         //
         rtn.Line( 297 );
         if ( Lansa.String.eq( ref.XSACCOUNTEMAIL.get(), "" ) )
         {

            //
            // RETURN 
            //
            rtn.end();
            return;

         //
         // ENDIF 
         //
         }

         //
         // #LoadAccount.ExecuteAsync( #AccountDetail #xsstatus )
         //
         rtn.Line( 303 );
         LOADACCOUNT.mthEXECUTEASYNC( {  }, { FLD: { "XSACCID": fld.XSACCID, "XSPASSWRD": ref.XSPASSWORD, "XSACCSTS": fld.XSACCSTS, "XSACCTTL": fld.XSACCTTL, "XSACCLSTN": ref.XSACCOUNTLASTNAME, "XSACC1STN": ref.XSACCOUNTFIRSTNAME, "XSBTHDTE": ref.XSBIRTHDATE, "XSACCEML": ref.XSACCOUNTEMAIL, "XSPHNMBL": ref.XSPHONEMOBILE, "XSPHNWRK": fld.XSPHNWRK, "XSPHNHME": ref.XSPHONEHOME, "XSACCADR1": ref.XSACCOUNTADDRESS1, "XSACCADR2": ref.XSACCOUNTADDRESS2, "XSACCCITY": ref.XSACCOUNTCITY, "XSACCSTT": fld.XSACCSTT, "XSACCZIP": ref.XSACCOUNTZIP, "XSACCCNTY": fld.XSACCCNTY, "XSDLVADR1": ref.XSDELIVERYADDRESS1, "XSDLVADR2": ref.XSDELIVERYADDRESS2, "XSDLVCITY": ref.XSDELIVERYCITY, "XSDLVSTT": fld.XSDLVSTT, "XSDLVZIP": ref.XSDELIVERYZIP, "XSDLVCNTY": fld.XSDLVCNTY, "XSDLVINS": fld.XSDLVINS, "XSNWLCNC": fld.XSNWLCNC, "XSNWLSTS": fld.XSNWLSTS, "XSNWLSBS": fld.XSNWLSBS, "XSSTATUS": fld.XSSTATUS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 321 );
      rtn.end();

      //
      // evtRoutine10 - #LoadAccount.completed
      //
      function evtRoutine10( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadAccount.completed", 305 );

         //
         // EVTROUTINE Handling(#LoadAccount.completed)
         //
         rtn.Line( 305 );
         {

            //
            // #DeliveryInstructions := #XSDeliveryInstructions
            //
            rtn.Line( 307 );
            ref.DELIVERYINSTRUCTIONS.set( fld.XSDLVINS.get() );

            //
            // #XSAccountTitleDropDown.pCurrentValue := #XSAccountTitle
            //
            rtn.Line( 310 );
            ref.XSACCOUNTTITLEDROPDOWN.setPCURRENTVALUE( fld.XSACCTTL.get() );

            //
            // #XSStateDropdown1.pCurrentValue := #XSAccountState
            //
            rtn.Line( 311 );
            ref.XSSTATEDROPDOWN1.setPCURRENTVALUE( fld.XSACCSTT.get() );

            //
            // #XSStateDropDown2.pCurrentValue := #XSDeliveryState
            //
            rtn.Line( 312 );
            ref.XSSTATEDROPDOWN2.setPCURRENTVALUE( fld.XSDLVSTT.get() );

            //
            // #XSCountryDropDown1.pCurrentValue := #XSAccountCountry
            //
            rtn.Line( 313 );
            ref.XSCOUNTRYDROPDOWN1.setPCURRENTVALUE( fld.XSACCCNTY.get() );

            //
            // #XSCountryDropDown2.pCurrentValue := #XSDeliveryCountry
            //
            rtn.Line( 314 );
            ref.XSCOUNTRYDROPDOWN2.setPCURRENTVALUE( fld.XSDLVCNTY.get() );

            //
            // #XSPasswordEncrypted := #XSPassword
            //
            rtn.Line( 317 );
            fld.XSPASSWRE.set( ref.XSPASSWORD.get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 319 );
         rtn.end();
      }
   };

   //
   // mthSAVEACCOUNT - SaveAccount
   //
   COM_OWNER.mthSAVEACCOUNT = function()
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SaveAccount", 323 );

      //
      // DEFINE_COM Class(#xsServer.SaveAccount) Name(#SaveAccount)
      //
      var SAVEACCOUNT = rtn.createDataRequest( "SAVEACCOUNT", "XSSERVER", "SAVEACCOUNT" );

      // -----------------------------
      // -- Initialize #SAVEACCOUNT --
      // -----------------------------
      SAVEACCOUNT.initialize();

      // -----------------------------------------
      // -- Add Event Handlers for #SAVEACCOUNT --
      // -----------------------------------------
      SAVEACCOUNT.addEventHandler( "COMPLETED", this, evtRoutine11 );

      //
      // MTHROUTINE Name(SaveAccount)
      //
      rtn.Line( 323 );
      {

         //
         // IF (*Not #Com_owner.PreSaveValidate)
         //
         rtn.Line( 327 );
         if ( Lansa.not( COM_OWNER.mthPRESAVEVALIDATE.call( this ) ) )
         {

            //
            // RETURN 
            //
            rtn.end();
            return;

         //
         // ENDIF 
         //
         }

         //
         // IF (#XSPasswordEncrypted <> #XSPassword)
         //
         rtn.Line( 334 );
         if ( Lansa.String.ne( fld.XSPASSWRE.get(), ref.XSPASSWORD.get() ) )
         {

            //
            // #SavePassword := #XSPassword
            //
            rtn.Line( 337 );
            ref.SAVEPASSWORD.set( ref.XSPASSWORD.get() );

            //
            // #XSPassword := #XSPassword.Encrypt( #XSEncryptKey )
            //
            rtn.Line( 339 );
            ref.XSPASSWORD.set( Lansa.String.Encrypt( ref.XSPASSWORD.get(), fld.XSENCRYPT.get() ) );

         //
         // ENDIF 
         //
         }

         //
         // #SaveAccount.ExecuteAsync( #AccountDetail #XSStatus )
         //
         rtn.Line( 343 );
         SAVEACCOUNT.mthEXECUTEASYNC( { FLD: { "XSACCID": fld.XSACCID.get(), "XSPASSWRD": ref.XSPASSWORD.get(), "XSACCSTS": fld.XSACCSTS.get(), "XSACCTTL": fld.XSACCTTL.get(), "XSACCLSTN": ref.XSACCOUNTLASTNAME.get(), "XSACC1STN": ref.XSACCOUNTFIRSTNAME.get(), "XSBTHDTE": ref.XSBIRTHDATE.get(), "XSACCEML": ref.XSACCOUNTEMAIL.get(), "XSPHNMBL": ref.XSPHONEMOBILE.get(), "XSPHNWRK": fld.XSPHNWRK.get(), "XSPHNHME": ref.XSPHONEHOME.get(), "XSACCADR1": ref.XSACCOUNTADDRESS1.get(), "XSACCADR2": ref.XSACCOUNTADDRESS2.get(), "XSACCCITY": ref.XSACCOUNTCITY.get(), "XSACCSTT": fld.XSACCSTT.get(), "XSACCZIP": ref.XSACCOUNTZIP.get(), "XSACCCNTY": fld.XSACCCNTY.get(), "XSDLVADR1": ref.XSDELIVERYADDRESS1.get(), "XSDLVADR2": ref.XSDELIVERYADDRESS2.get(), "XSDLVCITY": ref.XSDELIVERYCITY.get(), "XSDLVSTT": fld.XSDLVSTT.get(), "XSDLVZIP": ref.XSDELIVERYZIP.get(), "XSDLVCNTY": fld.XSDLVCNTY.get(), "XSDLVINS": fld.XSDLVINS.get(), "XSNWLCNC": fld.XSNWLCNC.get(), "XSNWLSTS": fld.XSNWLSTS.get(), "XSNWLSBS": fld.XSNWLSBS.get() } }, { FLD: { "XSSTATUS": fld.XSSTATUS } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 373 );
      rtn.end();

      //
      // evtRoutine11 - #SaveAccount.completed
      //
      function evtRoutine11( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#SaveAccount.completed", 345 );

         //
         // EVTROUTINE Handling(#SaveAccount.completed)
         //
         rtn.Line( 345 );
         {

            //
            // IF ((#sys_msgq.messages.itemcount = 0))
            //
            rtn.Line( 348 );
            if ( Lansa.Number.eq( Lansa.MSGQ().getMessages().getItemCount(), 0 ) )
            {

               //
               // IF (#XSstatus = OK)
               //
               rtn.Line( 350 );
               if ( Lansa.String.eq( fld.XSSTATUS.get(), "OK" ) )
               {

                  //
                  // #MySession.AddMessage( 'Account details have been saved' )
                  //
                  rtn.Line( 352 );
                  ref.MYSESSION.ref.mthADDMESSAGE( "Account details have been saved" );

               //
               // ELSE 
               //
               }
               else
               {

                  //
                  // #MySession.AddMessage( 'Account details failed to save' )
                  //
                  rtn.Line( 356 );
                  ref.MYSESSION.ref.mthADDMESSAGE( "Account details failed to save" );

                  //
                  // IF (#SavePassword <> '')
                  //
                  rtn.Line( 359 );
                  if ( Lansa.String.ne( ref.SAVEPASSWORD.get(), "" ) )
                  {

                     //
                     // #XSPassword := #SavePassword
                     //
                     rtn.Line( 361 );
                     ref.XSPASSWORD.set( ref.SAVEPASSWORD.get() );

                  //
                  // ENDIF 
                  //
                  }

               //
               // ENDIF 
               //
               }

            //
            // ENDIF 
            //
            }

            //
            // #Com_owner.ShowMessageBox( 'Account Information' )
            //
            rtn.Line( 369 );
            COM_OWNER.mthSHOWMESSAGEBOX.call( this, "Account Information" );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 371 );
         rtn.end();
      }
   };

   //
   // mthPRESAVEVALIDATE - PreSaveValidate
   //
   COM_OWNER.mthPRESAVEVALIDATE = function()
   {
      var fld = this.FLD.XSACCINF2, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "PreSaveValidate", 375 );

      //
      // DEFINE_MAP For(*result) Class(#prim_boln) Name(#Continue) Mandatory(true)
      //
      var CONTINUE = rtn.createParameter( "CONTINUE", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      CONTINUE.set( true );

      //
      // DEFINE_COM Class(#prim_nmbr) Name(#Counter)
      //
      var COUNTER = rtn.createReference( "COUNTER", "PRIM_NMBR" );

      // -------------------------
      // -- Initialize #COUNTER --
      // -------------------------
      COUNTER.initialize();

      //
      // MTHROUTINE Name(PreSaveValidate)
      //
      rtn.Line( 375 );
      {

         //
         // #Counter := 0
         //
         rtn.Line( 380 );
         COUNTER.set( 0 );

         //
         // #XSAccountTitle := #XSAccountTitleDropDown.pCurrentValue
         //
         rtn.Line( 383 );
         fld.XSACCTTL.set( ref.XSACCOUNTTITLEDROPDOWN.getPCURRENTVALUE() );

         //
         // #XSAccountState := #XSStateDropdown1.pCurrentValue
         //
         rtn.Line( 384 );
         fld.XSACCSTT.set( ref.XSSTATEDROPDOWN1.getPCURRENTVALUE() );

         //
         // #XSDeliveryState := #XSStateDropDown2.pCurrentValue
         //
         rtn.Line( 385 );
         fld.XSDLVSTT.set( ref.XSSTATEDROPDOWN2.getPCURRENTVALUE() );

         //
         // #XSAccountCountry := #XSCountryDropDown1.pCurrentValue
         //
         rtn.Line( 386 );
         fld.XSACCCNTY.set( ref.XSCOUNTRYDROPDOWN1.getPCURRENTVALUE() );

         //
         // #XSDeliveryCountry := #XSCountryDropDown2.pCurrentValue
         //
         rtn.Line( 387 );
         fld.XSDLVCNTY.set( ref.XSCOUNTRYDROPDOWN2.getPCURRENTVALUE() );

         //
         // #XSDeliveryInstructions := #DeliveryInstructions
         //
         rtn.Line( 389 );
         fld.XSDLVINS.set( ref.DELIVERYINSTRUCTIONS.get() );

         //
         // IF ((#XSAccountEmail = *blank))
         //
         rtn.Line( 391 );
         if ( Lansa.String.eq( ref.XSACCOUNTEMAIL.get(), "" ) )
         {

            //
            // #MySession.AddMessage( 'Email must be entered' )
            //
            rtn.Line( 393 );
            ref.MYSESSION.ref.mthADDMESSAGE( "Email must be entered" );

            //
            // #Counter += 1
            //
            rtn.Line( 395 );
            COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

         //
         // ENDIF 
         //
         }

         //
         // IF ((#XSPasswordEncrypted <> #XSPassword) *Or (#XSPassword = *blank))
         //
         rtn.Line( 400 );
         if ( Lansa.or( Lansa.String.ne( fld.XSPASSWRE.get(), ref.XSPASSWORD.get() ), Lansa.String.eq( ref.XSPASSWORD.get(), "" ) ) )
         {

            //
            // IF ((#XSPassword.curchars < 8) *Or (#XSPassword.curchars > 10))
            //
            rtn.Line( 402 );
            if ( Lansa.or( Lansa.Number.lt( Lansa.String.CurChars( ref.XSPASSWORD.get() ), 8 ), Lansa.Number.gt( Lansa.String.CurChars( ref.XSPASSWORD.get() ), 10 ) ) )
            {

               //
               // #MySession.AddMessage( 'Password must be more than 8 and less than 10 characters in length' )
               //
               rtn.Line( 404 );
               ref.MYSESSION.ref.mthADDMESSAGE( "Password must be more than 8 and less than 10 characters in length" );

               //
               // #Counter += 1
               //
               rtn.Line( 406 );
               COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF ((#XSAccountFirstname = *blank) *Or (#XSAccountLastname = *blank))
         //
         rtn.Line( 412 );
         if ( Lansa.or( Lansa.String.eq( ref.XSACCOUNTFIRSTNAME.get(), "" ), Lansa.String.eq( ref.XSACCOUNTLASTNAME.get(), "" ) ) )
         {

            //
            // #MySession.AddMessage( 'First and Last Name must be entered' )
            //
            rtn.Line( 414 );
            ref.MYSESSION.ref.mthADDMESSAGE( "First and Last Name must be entered" );

            //
            // #Counter += 1
            //
            rtn.Line( 416 );
            COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

         //
         // ENDIF 
         //
         }

         //
         // IF ((#XSPhoneHome = *blank) *And (#XSPhoneMobile = *blank) *And (#XSPhoneWork = *blank))
         //
         rtn.Line( 421 );
         if ( Lansa.and( Lansa.and( Lansa.String.eq( ref.XSPHONEHOME.get(), "" ), Lansa.String.eq( ref.XSPHONEMOBILE.get(), "" ) ), Lansa.String.eq( fld.XSPHNWRK.get(), "" ) ) )
         {

            //
            // #MySession.AddMessage( 'Enter at least one phone contact' )
            //
            rtn.Line( 423 );
            ref.MYSESSION.ref.mthADDMESSAGE( "Enter at least one phone contact" );

            //
            // #Counter += 1
            //
            rtn.Line( 425 );
            COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

         //
         // ENDIF 
         //
         }

         //
         // IF ((#XSAccountAddress1 = *blank) *Or (#XSAccountCity = *blank) *Or (#XSAccountCountry = *blank) *Or (#XSAccountZip = *blank) *Or (#XSAccountState = *blank))
         //
         rtn.Line( 429 );
         if ( Lansa.or( Lansa.or( Lansa.or( Lansa.or( Lansa.String.eq( ref.XSACCOUNTADDRESS1.get(), "" ), Lansa.String.eq( ref.XSACCOUNTCITY.get(), "" ) ), Lansa.String.eq( fld.XSACCCNTY.get(), "" ) ), Lansa.String.eq( ref.XSACCOUNTZIP.get(), "" ) ), Lansa.String.eq( fld.XSACCSTT.get(), "" ) ) )
         {

            //
            // #MySession.AddMessage( 'Address details must be supplied' )
            //
            rtn.Line( 431 );
            ref.MYSESSION.ref.mthADDMESSAGE( "Address details must be supplied" );

            //
            // #Counter += 1
            //
            rtn.Line( 433 );
            COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

         //
         // ENDIF 
         //
         }

         //
         // IF ((#XSDeliveryAddress1 = *blank) *Or (#XSDeliveryCity = *blank) *Or (#XSDeliveryCountry = *blank) *Or (#XSDeliveryZip = *blank) *Or (#XSDeliveryState = *blank))
         //
         rtn.Line( 437 );
         if ( Lansa.or( Lansa.or( Lansa.or( Lansa.or( Lansa.String.eq( ref.XSDELIVERYADDRESS1.get(), "" ), Lansa.String.eq( ref.XSDELIVERYCITY.get(), "" ) ), Lansa.String.eq( fld.XSDLVCNTY.get(), "" ) ), Lansa.String.eq( ref.XSDELIVERYZIP.get(), "" ) ), Lansa.String.eq( fld.XSDLVSTT.get(), "" ) ) )
         {

            //
            // #MySession.AddMessage( 'Delivery address details must be supplied' )
            //
            rtn.Line( 439 );
            ref.MYSESSION.ref.mthADDMESSAGE( "Delivery address details must be supplied" );

            //
            // #Counter += 1
            //
            rtn.Line( 441 );
            COUNTER.set( Lansa.add( COUNTER.get(), 1 ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#Counter > 0)
         //
         rtn.Line( 446 );
         if ( Lansa.toBool( Lansa.Number.gt( COUNTER.get(), 0 ) ) )
         {

            //
            // #Com_owner.ShowMessageBox( 'Account Information' )
            //
            rtn.Line( 448 );
            COM_OWNER.mthSHOWMESSAGEBOX.call( this, "Account Information" );

            //
            // #Continue := false
            //
            rtn.Line( 450 );
            CONTINUE.set( false );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 454 );
      return rtn.retVal( CONTINUE.get() );
   };

   //
   // mthSHOWMESSAGEBOX - ShowMessageBox
   //
   COM_OWNER.mthSHOWMESSAGEBOX = function( parm_TITLE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowMessageBox", 456 );

      //
      // DEFINE_MAP For(*input) Class(#std_qsel) Name(#title)
      //
      var TITLE = rtn.createFieldParameter( "TITLE", Fields.STD_QSEL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TITLE.set( parm_TITLE );

      //
      // MTHROUTINE Name(ShowMessageBox)
      //
      rtn.Line( 456 );
      {

         //
         // #MySession.SetMessageBoxTitle( #title )
         //
         rtn.Line( 459 );
         ref.MYSESSION.ref.mthSETMESSAGEBOXTITLE( TITLE.get() );

         //
         // #MySession.AddSysMessages
         //
         rtn.Line( 461 );
         ref.MYSESSION.ref.mthADDSYSMESSAGES();

         //
         // #MySession.ShowMessageBox
         //
         rtn.Line( 463 );
         ref.MYSESSION.ref.mthSHOWMESSAGEBOX();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 465 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // -----------------------------
   // -- XSACCEML Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCEML.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCEML );
      };

      Lansa.createFieldClass( { co: Fields.XSACCEML.DataClass, an: "PRIM_FLD", fn: "XSACCEML" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCEML.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCEML.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCEML.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCEML", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSPASSWRD Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPASSWRD.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPASSWRD );
      };

      Lansa.createFieldClass( { co: Fields.XSPASSWRD.DataClass, an: "PRIM_FLD", fn: "XSPASSWRD" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPASSWRD.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPASSWRD.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 661 );
      };

      Lansa.createFieldClass( { co: Fields.XSPASSWRD.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPASSWRD", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSACC1STN Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACC1STN.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACC1STN );
      };

      Lansa.createFieldClass( { co: Fields.XSACC1STN.DataClass, an: "PRIM_FLD", fn: "XSACC1STN" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACC1STN.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACC1STN.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 419 );
      };

      Lansa.createFieldClass( { co: Fields.XSACC1STN.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACC1STN", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSACCLSTN Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCLSTN.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCLSTN );
      };

      Lansa.createFieldClass( { co: Fields.XSACCLSTN.DataClass, an: "PRIM_FLD", fn: "XSACCLSTN" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCLSTN.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCLSTN.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCLSTN.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCLSTN", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSBTHDTE Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSBTHDTE.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSBTHDTE );
      };

      Lansa.createFieldClass( { co: Fields.XSBTHDTE.DataClass, an: "PRIM_FLD", fn: "XSBTHDTE" } );

      // ----------------
      // -- VISUALDATE --
      // ----------------
      Fields.XSBTHDTE.VISUALDATE = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSBTHDTE.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setShowTime( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSBTHDTE.VISUALDATE, an: "PRIM_EVDT", fn: "XSBTHDTE", cn: "VisualDate" } );
   }

   // -----------------------------
   // -- XSPHNHME Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPHNHME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPHNHME );
      };

      Lansa.createFieldClass( { co: Fields.XSPHNHME.DataClass, an: "PRIM_FLD", fn: "XSPHNHME" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPHNHME.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPHNHME.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 419 );
      };

      Lansa.createFieldClass( { co: Fields.XSPHNHME.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPHNHME", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSPHNMBL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPHNMBL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPHNMBL );
      };

      Lansa.createFieldClass( { co: Fields.XSPHNMBL.DataClass, an: "PRIM_FLD", fn: "XSPHNMBL" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSPHNMBL.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSPHNMBL.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 419 );
      };

      Lansa.createFieldClass( { co: Fields.XSPHNMBL.VISUALEDIT, an: "PRIM_EVEF", fn: "XSPHNMBL", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSACCADR1 Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCADR1.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCADR1 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCADR1.DataClass, an: "PRIM_FLD", fn: "XSACCADR1" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCADR1.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCADR1.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCADR1.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCADR1", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSACCADR2 Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCADR2.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCADR2 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCADR2.DataClass, an: "PRIM_FLD", fn: "XSACCADR2" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCADR2.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCADR2.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCADR2.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCADR2", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSACCCITY Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCCITY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCCITY );
      };

      Lansa.createFieldClass( { co: Fields.XSACCCITY.DataClass, an: "PRIM_FLD", fn: "XSACCCITY" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCCITY.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCCITY.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCCITY.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCCITY", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSACCZIP Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCZIP.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCZIP );
      };

      Lansa.createFieldClass( { co: Fields.XSACCZIP.DataClass, an: "PRIM_FLD", fn: "XSACCZIP" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSACCZIP.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSACCZIP.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSACCZIP.VISUALEDIT, an: "PRIM_EVEF", fn: "XSACCZIP", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSDLVADR1 Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSDLVADR1.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSDLVADR1 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVADR1.DataClass, an: "PRIM_FLD", fn: "XSDLVADR1" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSDLVADR1.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSDLVADR1.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVADR1.VISUALEDIT, an: "PRIM_EVEF", fn: "XSDLVADR1", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSDLVADR2 Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSDLVADR2.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSDLVADR2 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVADR2.DataClass, an: "PRIM_FLD", fn: "XSDLVADR2" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSDLVADR2.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSDLVADR2.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVADR2.VISUALEDIT, an: "PRIM_EVEF", fn: "XSDLVADR2", cn: "VisualEdit" } );
   }

   // ------------------------------
   // -- XSDLVCITY Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSDLVCITY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSDLVCITY );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVCITY.DataClass, an: "PRIM_FLD", fn: "XSDLVCITY" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSDLVCITY.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSDLVCITY.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 782 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVCITY.VISUALEDIT, an: "PRIM_EVEF", fn: "XSDLVCITY", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- XSDLVZIP Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSDLVZIP.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSDLVZIP );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVZIP.DataClass, an: "PRIM_FLD", fn: "XSDLVZIP" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.XSDLVZIP.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSDLVZIP.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setUsePicklist( false );
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setWidth( 298 );
      };

      Lansa.createFieldClass( { co: Fields.XSDLVZIP.VISUALEDIT, an: "PRIM_EVEF", fn: "XSDLVZIP", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- STD_QSEL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_QSEL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_QSEL );
      };

      Lansa.createFieldClass( { co: Fields.STD_QSEL.DataClass, an: "PRIM_FLD", fn: "STD_QSEL" } );
   }

   // -----------------------------
   // -- XSACCTTL Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSACCTTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSACCTTL );
      };

      Lansa.createFieldClass( { co: Fields.XSACCTTL.DataClass, an: "PRIM_FLD", fn: "XSACCTTL" } );

      // --------------
      // -- PICKLIST --
      // --------------
      Fields.XSACCTTL.pl = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_1) Value(1) Caption(' ') Parent(#Picklist) Default(True)
         //
         var PKIT_1 = this.createReference( "PKIT_1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT_2) Value('Mr') Caption('Mr') Parent(#Picklist)
         //
         var PKIT_2 = this.createReference( "PKIT_2", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT1) Parent(#Picklist) Caption('Mrs') Value('Mrs')
         //
         var PKIT1 = this.createReference( "PKIT1", "PRIM_PKIT" );

         //
         // Define_Com Class(#PRIM_PKIT) Name(#PKIT2) Parent(#Picklist) Caption('Ms') Value('Ms')
         //
         var PKIT2 = this.createReference( "PKIT2", "PRIM_PKIT" );

         // ------------------------
         // -- Initialize #PKIT_1 --
         // ------------------------
         PKIT_1.setValue( "1" );
         PKIT_1.setCaption( " " );
         PKIT_1.setParent( this );
         PKIT_1.setDefault( true );
         PKIT_1.initialize();

         // ------------------------
         // -- Initialize #PKIT_2 --
         // ------------------------
         PKIT_2.setValue( "Mr" );
         PKIT_2.setCaption( "Mr" );
         PKIT_2.setParent( this );
         PKIT_2.initialize();

         // -----------------------
         // -- Initialize #PKIT1 --
         // -----------------------
         PKIT1.setParent( this );
         PKIT1.setCaption( "Mrs" );
         PKIT1.setValue( "Mrs" );
         PKIT1.initialize();

         // -----------------------
         // -- Initialize #PKIT2 --
         // -----------------------
         PKIT2.setParent( this );
         PKIT2.setCaption( "Ms" );
         PKIT2.setValue( "Ms" );
         PKIT2.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setNoMatchAction( "BLANKS" );
      };

      Lansa.createFieldClass( { co: Fields.XSACCTTL.pl, an: "PRIM_PKLT", fn: "XSACCTTL", cn: "Picklist" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSMYSSN", "XSACCTTLD", "XSSTATED", "XSCNTRYD", "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EVEF", "PRIM_EVDT", "PRIM_PHBN", "PRIM_CKBX", "PRIM_TEXT", "PRIM_WEB.MessageBox", "PRIM_FLD", "PRIM_WEB.DataRequest", "PRIM_PKLT", "PRIM_MSGQ" ],
   dp: [ "PRIM_NMBR" ]
});

//# sourceURL=xsaccinf2.js
