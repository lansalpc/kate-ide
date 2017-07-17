// ----------------------------
// -- Reusable Part: XSLOGIN --
// ----------------------------
LANSA.addComponent(
{
   id: "XSLOGIN", 
   nm: "XSLogin", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Login", 
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
      XSCRTID:
      {
         nm: "XSCRTID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Shopping Cart I",
         h1: "Shopping",
         h2: "Cart",
         h3: "ID",
         de: "Shopping Cart ID",
         dv: "",
         ia: [ "FE" ]
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
      XSCRTQTY:
      {
         nm: "XSCRTQTY",
         ft: "S",
         ln: 7,
         dc: 0,
         lb: "Quantity",
         h1: "Quantity",
         h2: " ",
         h3: " ",
         de: "Number of items in cart",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTPRC:
      {
         nm: "XSCRTPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Ttl Price",
         h1: "Cart",
         h2: "Total",
         h3: "Price",
         de: "Cart Total Price",
         dv: 0,
         ia: [ "FE", "RB" ]
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
      WINRETCOD:
      {
         nm: "WINRETCOD",
         ft: "P",
         ln: 7,
         dc: 0,
         lb: "WinRetCod",
         h1: "WinRetCod",
         h2: "",
         h3: "",
         de: "WinRetCod",
         dv: 0
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
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PPNL", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         showMessage: 
         {
         },

         HideMessage: 
         {
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
         this.addFields( "XSLOGIN", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column4) Displayposition(4) Parent(#TableLayout1) Width(30) Units(Pixels)
         //
         var COLUMN4 = this.createReference( "COLUMN4", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginTextItem1) Alignment(TopLeft) Column(#Column1) Manage(#LoginHeader) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Columnspan(3)
         //
         var LOGINTEXTITEM1 = this.createReference( "LOGINTEXTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountEmailItem1) Alignment(TopLeft) Column(#Column1) Manage(#XSAccountEmail1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Marginright(20)
         //
         var XSACCOUNTEMAILITEM1 = this.createReference( "XSACCOUNTEMAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSPasswordItem1) Alignment(TopLeft) Column(#Column1) Manage(#XSPassword) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Marginright(20)
         //
         var XSPASSWORDITEM1 = this.createReference( "XSPASSWORDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSPasswordEmailItem1) Alignment(TopLeft) Column(#Column1) Manage(#XSPasswordEmail) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Marginright(20) Margintop(5)
         //
         var XSPASSWORDEMAILITEM1 = this.createReference( "XSPASSWORDEMAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(BottomLeft) Column(#Column1) Flow(Down) Manage(#LoginButton) Parent(#TableLayout1) Row(#Row1) Sizing(None) Marginleft(20) Margintop(30) Marginbottom(20)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem2) Alignment(TopLeft) Column(#Column1) Flow(Down) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var LAYOUTITEM2 = this.createReference( "LAYOUTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginTextItem2) Alignment(TopLeft) Column(#Column1) Manage(#LoginQ) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Margintop(30) Marginleft(20) Marginright(20)
         //
         var LOGINTEXTITEM2 = this.createReference( "LOGINTEXTITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem3) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#EmailLabel) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Margintop(15) Marginleft(20) Marginright(20)
         //
         var LAYOUTITEM3 = this.createReference( "LAYOUTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem4) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#XSPasswordLabel) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Margintop(10) Marginleft(20)
         //
         var LAYOUTITEM4 = this.createReference( "LAYOUTITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem1) Alignment(TopLeft) Column(#Column1) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Margintop(10) Marginright(10)
         //
         var MESSAGEITEM1 = this.createReference( "MESSAGEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem5) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#RegisterQ) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Margintop(50) Marginleft(10) Marginright(10)
         //
         var LAYOUTITEM5 = this.createReference( "LAYOUTITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem6) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#RegisterQ) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Marginleft(10) Marginright(10) Margintop(20)
         //
         var LAYOUTITEM6 = this.createReference( "LAYOUTITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem7) Alignment(BottomLeft) Column(#Column2) Flow(Down) Manage(#CreateAccountButton) Parent(#TableLayout1) Row(#Row1) Sizing(None) Marginleft(10) Margintop(20) Marginbottom(20)
         //
         var LAYOUTITEM7 = this.createReference( "LAYOUTITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#RegisterText2Item1) Alignment(TopLeft) Column(#Column2) Manage(#RegisterText) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(20) Margintop(15)
         //
         var REGISTERTEXT2ITEM1 = this.createReference( "REGISTERTEXT2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem8) Alignment(TopLeft) Column(#Column3) Flow(Down) Manage(#GuestQ) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Marginleft(10) Marginright(10) Margintop(50)
         //
         var LAYOUTITEM8 = this.createReference( "LAYOUTITEM8", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem9) Alignment(BottomLeft) Column(#Column3) Flow(Down) Manage(#GuestQ) Parent(#TableLayout1) Row(#Row1) Sizing(None) Marginleft(10) Margintop(20) Marginbottom(20)
         //
         var LAYOUTITEM9 = this.createReference( "LAYOUTITEM9", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Label2Item1) Alignment(TopLeft) Column(#Column3) Manage(#GuestText) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(10) Margintop(15)
         //
         var LABEL2ITEM1 = this.createReference( "LABEL2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#EmailLabel2Item1) Manage(#EmailLabel2) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Column(#Column3) Alignment(TopLeft) Flow(Down) Marginleft(10) Marginright(20) Margintop(15)
         //
         var EMAILLABEL2ITEM1 = this.createReference( "EMAILLABEL2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSAccountEmail2Item1) Column(#Column3) Manage(#XSAccountEmail2) Parent(#TableLayout1) Sizing(FitToWidth) Row(#Row1) Alignment(TopLeft) Flow(Down) Marginleft(10) Marginright(20)
         //
         var XSACCOUNTEMAIL2ITEM1 = this.createReference( "XSACCOUNTEMAIL2ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LoginTextItem3) Alignment(TopLeft) Column(#Column1) Manage(#LoginText) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20) Margintop(15) Marginright(20)
         //
         var LOGINTEXTITEM3 = this.createReference( "LOGINTEXTITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#SaveLoginItem1) Alignment(TopLeft) Column(#Column1) Manage(#SaveLogin) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Flow(Down) Marginleft(20)
         //
         var SAVELOGINITEM1 = this.createReference( "SAVELOGINITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem10) Alignment(TopLeft) Column(#Column1) Flow(Down) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Marginleft(20) Marginright(10)
         //
         var LAYOUTITEM10 = this.createReference( "LAYOUTITEM10", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem11) Alignment(TopLeft) Column(#Column3) Flow(Down) Manage(#Message1) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth) Margintop(10) Marginleft(10) Marginright(20)
         //
         var LAYOUTITEM11 = this.createReference( "LAYOUTITEM11", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem2) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var MESSAGEITEM2 = this.createReference( "MESSAGEITEM2", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem3) Column(#Column1) Manage(#Message) Parent(#TableLayout1) Sizing(None)
         //
         var MESSAGEITEM3 = this.createReference( "MESSAGEITEM3", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem4) Alignment(BottomLeft) Column(#Column1) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var MESSAGEITEM4 = this.createReference( "MESSAGEITEM4", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem5) Column(#Column1) Flow(Down) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var MESSAGEITEM5 = this.createReference( "MESSAGEITEM5", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem6) Manage(#Message) Parent(#TableLayout1) Row(#Row1) Sizing(None)
         //
         var MESSAGEITEM6 = this.createReference( "MESSAGEITEM6", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem7) Column(#Column1) Manage(#Message) Parent(#TableLayout1) Sizing(None)
         //
         var MESSAGEITEM7 = this.createReference( "MESSAGEITEM7", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#GuestButtonItem1) Alignment(BottomLeft) Column(#Column3) Manage(#GuestButton) Parent(#TableLayout1) Row(#Row1) Sizing(None) Marginbottom(20) Marginleft(10)
         //
         var GUESTBUTTONITEM1 = this.createReference( "GUESTBUTTONITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem12) Alignment(TopLeft) Column(#Column4) Flow(Down) Manage(#Close) Parent(#TableLayout1) Row(#Row1) Sizing(FitToWidth)
         //
         var LAYOUTITEM12 = this.createReference( "LAYOUTITEM12", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LoginHeader) Caption('Secure Login') Displayposition(1) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(0) Verticalalignment(Center) Width(871) Left(0) Marginleft(20) Themedrawstyle('PanelHeader2')
         //
         var LOGINHEADER = this.createReference( "LOGINHEADER", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Close) Caption('X') Displayposition(21) Ellipses(Word) Height(25) Left(871) Parent(#COM_OWNER) Tabposition(21) Tabstop(False) Top(0) Verticalalignment(Center) Width(30) Themedrawstyle('PanelHeader2') Alignment(Center)
         //
         var CLOSE = this.createReference( "CLOSE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LoginQ) Caption('Have an account?') Displayposition(2) Ellipses(Word) Height(25) Left(20) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(55) Verticalalignment(Center) Width(251) Style(#XSTheme01<Text12BoldAlmostBlack>)
         //
         var LOGINQ = this.createReference( "LOGINQ", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#LoginText) Caption('Login') Displayposition(3) Ellipses(Word) Height(30) Left(20) Parent(#COM_OWNER) Tabposition(3) Tabstop(False) Top(95) Width(251) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var LOGINTEXT = this.createReference( "LOGINTEXT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#EmailLabel) Caption('Email') Displayposition(4) Ellipses(Word) Height(25) Left(20) Parent(#COM_OWNER) Tabposition(4) Tabstop(False) Top(140) Verticalalignment(Center) Width(251) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var EMAILLABEL = this.createReference( "EMAILLABEL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountEmail.Visual) Name(#XSAccountEmail1) Displayposition(5) Tabposition(5) Marginleft(0) Width(251) Parent(#COM_OWNER) Labelposition(None) Top(165) Left(20)
         //
         var XSACCOUNTEMAIL1 = this.createFieldReference( "XSACCOUNTEMAIL1", Fields.XSACCEML.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#XSPasswordLabel) Caption('Password') Displayposition(6) Ellipses(Word) Height(25) Left(20) Parent(#COM_OWNER) Tabposition(6) Tabstop(False) Top(196) Verticalalignment(Center) Width(271) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var XSPASSWORDLABEL = this.createReference( "XSPASSWORDLABEL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSPassword.Visual) Name(#XSPassword) Displayposition(7) Tabposition(7) Width(251) Marginleft(0) Parent(#COM_OWNER) Labelposition(None) Top(221) Left(20)
         //
         var XSPASSWORD = this.createFieldReference( "XSPASSWORD", Fields.XSPASSWRD.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#LoginButton) Caption('Login') Displayposition(10) Left(20) Parent(#COM_OWNER) Tabposition(10) Top(348) Themedrawstyle('ButtonLook1') Height(30) Width(100)
         //
         var LOGINBUTTON = this.createReference( "LOGINBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_CKBX) Name(#SaveLogin) Displayposition(9) Left(20) Tabposition(9) Top(272) Caption('Remember me') Width(271) Parent(#COM_OWNER) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var SAVELOGIN = this.createReference( "SAVELOGIN", "PRIM_CKBX" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#XSPasswordEmail) Caption('Send me a password reminder') Displayposition(8) Ellipses(Word) Left(20) Tabposition(8) Tabstop(False) Top(247) Verticalalignment(Center) Width(251) Height(25) Style(#XSTheme01<Text10BoldBl3>) Parent(#COM_OWNER)
         //
         var XSPASSWORDEMAIL = this.createReference( "XSPASSWORDEMAIL", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#RegisterQ) Caption('New Customer?') Displayposition(11) Ellipses(Word) Height(25) Left(301) Parent(#COM_OWNER) Tabposition(11) Tabstop(False) Top(50) Verticalalignment(Center) Width(270) Style(#XSTheme01<Text12BoldAlmostBlack>)
         //
         var REGISTERQ = this.createReference( "REGISTERQ", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#RegisterText) Caption('Create an account to enjoy faster checkout, multiple payment options and qualify for a line of credit.') Displayposition(12) Ellipses(Word) Left(301) Parent(#COM_OWNER) Tabposition(12) Tabstop(False) Top(90) Width(260) Style(#XSTheme01<Text10BoldAlmostBlack>) Height(70)
         //
         var REGISTERTEXT = this.createReference( "REGISTERTEXT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#CreateAccountButton) Caption('Create an Account') Displayposition(13) Parent(#COM_OWNER) Tabposition(13) Top(348) Width(200) Left(301) Themedrawstyle('ButtonLook1') Height(30)
         //
         var CREATEACCOUNTBUTTON = this.createReference( "CREATEACCOUNTBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#GuestQ) Caption('Prefer not to register?') Displayposition(14) Ellipses(Word) Height(25) Left(591) Parent(#COM_OWNER) Tabposition(14) Tabstop(False) Top(50) Verticalalignment(Center) Width(270) Style(#XSTheme01<Text12BoldAlmostBlack>)
         //
         var GUESTQ = this.createReference( "GUESTQ", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#GuestText) Caption('Shop as a Guest') Displayposition(15) Ellipses(Word) Height(30) Left(591) Parent(#COM_OWNER) Tabposition(15) Tabstop(False) Top(90) Width(270) Style(#XSTheme01<Text10BoldAlmostBlack>)
         //
         var GUESTTEXT = this.createReference( "GUESTTEXT", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#EmailLabel2) Caption('Email') Displayposition(16) Ellipses(Word) Height(25) Left(591) Parent(#COM_OWNER) Tabposition(16) Tabstop(False) Top(135) Verticalalignment(Center) Width(260) Style(#XSTheme01<Text10AlmostBlack>)
         //
         var EMAILLABEL2 = this.createReference( "EMAILLABEL2", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSAccountEmail.Visual) Name(#XSAccountEmail2) Displayposition(17) Tabposition(17) Marginleft(0) Width(260) Parent(#COM_OWNER) Labelposition(None) Top(160) Left(591)
         //
         var XSACCOUNTEMAIL2 = this.createFieldReference( "XSACCOUNTEMAIL2", Fields.XSACCEML.VISUALEDIT );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#GuestButton) Caption('Shop as Guest') Displayposition(18) Left(591) Parent(#COM_OWNER) Tabposition(18) Top(348) Width(200) Height(30) Themedrawstyle('ButtonLook1')
         //
         var GUESTBUTTON = this.createReference( "GUESTBUTTON", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Message) Displayposition(19) Ellipses(Word) Height(30) Left(20) Parent(#COM_OWNER) Tabposition(19) Tabstop(False) Top(307) Verticalalignment(Center) Width(261) Style(#XSTheme01<Text10Red>)
         //
         var MESSAGE = this.createReference( "MESSAGE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Message1) Displayposition(20) Ellipses(Word) Height(40) Left(591) Parent(#COM_OWNER) Tabposition(20) Tabstop(False) Top(191) Verticalalignment(Center) Width(260) Style(#XSTheme01<Text10Red>)
         //
         var MESSAGE1 = this.createReference( "MESSAGE1", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_TIMR) Name(#Timer) Startup(Manual) Interval(7000)
         //
         var TIMER = this.createReference( "TIMER", "PRIM_TIMR" );

         //
         // DEFINE_COM Class(#XSServer.login) Name(#Login)
         //
         var LOGIN = this.createDataRequest( "LOGIN", "XSSERVER", "LOGIN" );

         //
         // DEFINE_COM Class(#XSServer.SendReminder) Name(#EmailPassword)
         //
         var EMAILPASSWORD = this.createDataRequest( "EMAILPASSWORD", "XSSERVER", "SENDREMINDER" );

         //
         // DEFINE_COM Class(#XSServer.SaveAccount) Name(#SaveAccount)
         //
         var SAVEACCOUNT = this.createDataRequest( "SAVEACCOUNT", "XSSERVER", "SAVEACCOUNT" );

         //
         // DEFINE_COM Class(#XSServer.GotoHome) Name(#GotoHome)
         //
         var GOTOHOME = this.createWebPageRequest( "GOTOHOME", "XSSERVER", "GOTOHOME" );

         //
         // DEFINE_COM Class(#XSServer.GotoMyAccount) Name(#GotoMyAccount)
         //
         var GOTOMYACCOUNT = this.createWebPageRequest( "GOTOMYACCOUNT", "XSSERVER", "GOTOMYACCOUNT" );

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

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.initialize();

         // -------------------------
         // -- Initialize #COLUMN4 --
         // -------------------------
         COLUMN4.setDisplayPosition( 4 );
         COLUMN4.setParent( TABLELAYOUT1 );
         COLUMN4.setWidth( 30 );
         COLUMN4.setUnits( "PIXELS" );
         COLUMN4.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // --------------------------------
         // -- Initialize #LOGINTEXTITEM1 --
         // --------------------------------
         LOGINTEXTITEM1.setAlignment( "TOPLEFT" );
         LOGINTEXTITEM1.setColumn( COLUMN1 );
         LOGINTEXTITEM1.setManage( LOGINHEADER );
         LOGINTEXTITEM1.setParent( TABLELAYOUT1 );
         LOGINTEXTITEM1.setRow( ROW1 );
         LOGINTEXTITEM1.setSizing( "FITTOWIDTH" );
         LOGINTEXTITEM1.setFlow( "DOWN" );
         LOGINTEXTITEM1.setColumnSpan( 3 );
         LOGINTEXTITEM1.initialize();

         // -------------------------------------
         // -- Initialize #XSACCOUNTEMAILITEM1 --
         // -------------------------------------
         XSACCOUNTEMAILITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTEMAILITEM1.setColumn( COLUMN1 );
         XSACCOUNTEMAILITEM1.setManage( XSACCOUNTEMAIL1 );
         XSACCOUNTEMAILITEM1.setParent( TABLELAYOUT1 );
         XSACCOUNTEMAILITEM1.setRow( ROW1 );
         XSACCOUNTEMAILITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTEMAILITEM1.setFlow( "DOWN" );
         XSACCOUNTEMAILITEM1.setMarginLeft( 20 );
         XSACCOUNTEMAILITEM1.setMarginRight( 20 );
         XSACCOUNTEMAILITEM1.initialize();

         // ---------------------------------
         // -- Initialize #XSPASSWORDITEM1 --
         // ---------------------------------
         XSPASSWORDITEM1.setAlignment( "TOPLEFT" );
         XSPASSWORDITEM1.setColumn( COLUMN1 );
         XSPASSWORDITEM1.setManage( XSPASSWORD );
         XSPASSWORDITEM1.setParent( TABLELAYOUT1 );
         XSPASSWORDITEM1.setRow( ROW1 );
         XSPASSWORDITEM1.setSizing( "FITTOWIDTH" );
         XSPASSWORDITEM1.setFlow( "DOWN" );
         XSPASSWORDITEM1.setMarginLeft( 20 );
         XSPASSWORDITEM1.setMarginRight( 20 );
         XSPASSWORDITEM1.initialize();

         // --------------------------------------
         // -- Initialize #XSPASSWORDEMAILITEM1 --
         // --------------------------------------
         XSPASSWORDEMAILITEM1.setAlignment( "TOPLEFT" );
         XSPASSWORDEMAILITEM1.setColumn( COLUMN1 );
         XSPASSWORDEMAILITEM1.setManage( XSPASSWORDEMAIL );
         XSPASSWORDEMAILITEM1.setParent( TABLELAYOUT1 );
         XSPASSWORDEMAILITEM1.setRow( ROW1 );
         XSPASSWORDEMAILITEM1.setSizing( "FITTOWIDTH" );
         XSPASSWORDEMAILITEM1.setFlow( "DOWN" );
         XSPASSWORDEMAILITEM1.setMarginLeft( 20 );
         XSPASSWORDEMAILITEM1.setMarginRight( 20 );
         XSPASSWORDEMAILITEM1.setMarginTop( 5 );
         XSPASSWORDEMAILITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "BOTTOMLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( LOGINBUTTON );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.setMarginLeft( 20 );
         LAYOUTITEM1.setMarginTop( 30 );
         LAYOUTITEM1.setMarginBottom( 20 );
         LAYOUTITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM2 --
         // -----------------------------
         LAYOUTITEM2.setAlignment( "TOPLEFT" );
         LAYOUTITEM2.setColumn( COLUMN1 );
         LAYOUTITEM2.setFlow( "DOWN" );
         LAYOUTITEM2.setParent( TABLELAYOUT1 );
         LAYOUTITEM2.setRow( ROW1 );
         LAYOUTITEM2.setSizing( "NONE" );
         LAYOUTITEM2.initialize();

         // --------------------------------
         // -- Initialize #LOGINTEXTITEM2 --
         // --------------------------------
         LOGINTEXTITEM2.setAlignment( "TOPLEFT" );
         LOGINTEXTITEM2.setColumn( COLUMN1 );
         LOGINTEXTITEM2.setManage( LOGINQ );
         LOGINTEXTITEM2.setParent( TABLELAYOUT1 );
         LOGINTEXTITEM2.setRow( ROW1 );
         LOGINTEXTITEM2.setSizing( "FITTOWIDTH" );
         LOGINTEXTITEM2.setFlow( "DOWN" );
         LOGINTEXTITEM2.setMarginTop( 30 );
         LOGINTEXTITEM2.setMarginLeft( 20 );
         LOGINTEXTITEM2.setMarginRight( 20 );
         LOGINTEXTITEM2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM3 --
         // -----------------------------
         LAYOUTITEM3.setAlignment( "TOPLEFT" );
         LAYOUTITEM3.setColumn( COLUMN1 );
         LAYOUTITEM3.setFlow( "DOWN" );
         LAYOUTITEM3.setManage( EMAILLABEL );
         LAYOUTITEM3.setParent( TABLELAYOUT1 );
         LAYOUTITEM3.setRow( ROW1 );
         LAYOUTITEM3.setSizing( "FITTOWIDTH" );
         LAYOUTITEM3.setMarginTop( 15 );
         LAYOUTITEM3.setMarginLeft( 20 );
         LAYOUTITEM3.setMarginRight( 20 );
         LAYOUTITEM3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM4 --
         // -----------------------------
         LAYOUTITEM4.setAlignment( "TOPLEFT" );
         LAYOUTITEM4.setColumn( COLUMN1 );
         LAYOUTITEM4.setFlow( "DOWN" );
         LAYOUTITEM4.setManage( XSPASSWORDLABEL );
         LAYOUTITEM4.setParent( TABLELAYOUT1 );
         LAYOUTITEM4.setRow( ROW1 );
         LAYOUTITEM4.setSizing( "FITTOWIDTH" );
         LAYOUTITEM4.setMarginTop( 10 );
         LAYOUTITEM4.setMarginLeft( 20 );
         LAYOUTITEM4.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM1 --
         // ------------------------------
         MESSAGEITEM1.setAlignment( "TOPLEFT" );
         MESSAGEITEM1.setColumn( COLUMN1 );
         MESSAGEITEM1.setManage( MESSAGE );
         MESSAGEITEM1.setParent( TABLELAYOUT1 );
         MESSAGEITEM1.setRow( ROW1 );
         MESSAGEITEM1.setSizing( "FITTOWIDTH" );
         MESSAGEITEM1.setFlow( "DOWN" );
         MESSAGEITEM1.setMarginLeft( 20 );
         MESSAGEITEM1.setMarginTop( 10 );
         MESSAGEITEM1.setMarginRight( 10 );
         MESSAGEITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM5 --
         // -----------------------------
         LAYOUTITEM5.setAlignment( "TOPLEFT" );
         LAYOUTITEM5.setColumn( COLUMN2 );
         LAYOUTITEM5.setFlow( "DOWN" );
         LAYOUTITEM5.setManage( REGISTERQ );
         LAYOUTITEM5.setParent( TABLELAYOUT1 );
         LAYOUTITEM5.setRow( ROW1 );
         LAYOUTITEM5.setSizing( "FITTOWIDTH" );
         LAYOUTITEM5.setMarginTop( 50 );
         LAYOUTITEM5.setMarginLeft( 10 );
         LAYOUTITEM5.setMarginRight( 10 );
         LAYOUTITEM5.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM6 --
         // -----------------------------
         LAYOUTITEM6.setAlignment( "TOPLEFT" );
         LAYOUTITEM6.setColumn( COLUMN2 );
         LAYOUTITEM6.setFlow( "DOWN" );
         LAYOUTITEM6.setManage( REGISTERQ );
         LAYOUTITEM6.setParent( TABLELAYOUT1 );
         LAYOUTITEM6.setRow( ROW1 );
         LAYOUTITEM6.setSizing( "FITTOWIDTH" );
         LAYOUTITEM6.setMarginLeft( 10 );
         LAYOUTITEM6.setMarginRight( 10 );
         LAYOUTITEM6.setMarginTop( 20 );
         LAYOUTITEM6.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM7 --
         // -----------------------------
         LAYOUTITEM7.setAlignment( "BOTTOMLEFT" );
         LAYOUTITEM7.setColumn( COLUMN2 );
         LAYOUTITEM7.setFlow( "DOWN" );
         LAYOUTITEM7.setManage( CREATEACCOUNTBUTTON );
         LAYOUTITEM7.setParent( TABLELAYOUT1 );
         LAYOUTITEM7.setRow( ROW1 );
         LAYOUTITEM7.setSizing( "NONE" );
         LAYOUTITEM7.setMarginLeft( 10 );
         LAYOUTITEM7.setMarginTop( 20 );
         LAYOUTITEM7.setMarginBottom( 20 );
         LAYOUTITEM7.initialize();

         // ------------------------------------
         // -- Initialize #REGISTERTEXT2ITEM1 --
         // ------------------------------------
         REGISTERTEXT2ITEM1.setAlignment( "TOPLEFT" );
         REGISTERTEXT2ITEM1.setColumn( COLUMN2 );
         REGISTERTEXT2ITEM1.setManage( REGISTERTEXT );
         REGISTERTEXT2ITEM1.setParent( TABLELAYOUT1 );
         REGISTERTEXT2ITEM1.setRow( ROW1 );
         REGISTERTEXT2ITEM1.setSizing( "FITTOWIDTH" );
         REGISTERTEXT2ITEM1.setFlow( "DOWN" );
         REGISTERTEXT2ITEM1.setMarginLeft( 10 );
         REGISTERTEXT2ITEM1.setMarginRight( 20 );
         REGISTERTEXT2ITEM1.setMarginTop( 15 );
         REGISTERTEXT2ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM8 --
         // -----------------------------
         LAYOUTITEM8.setAlignment( "TOPLEFT" );
         LAYOUTITEM8.setColumn( COLUMN3 );
         LAYOUTITEM8.setFlow( "DOWN" );
         LAYOUTITEM8.setManage( GUESTQ );
         LAYOUTITEM8.setParent( TABLELAYOUT1 );
         LAYOUTITEM8.setRow( ROW1 );
         LAYOUTITEM8.setSizing( "FITTOWIDTH" );
         LAYOUTITEM8.setMarginLeft( 10 );
         LAYOUTITEM8.setMarginRight( 10 );
         LAYOUTITEM8.setMarginTop( 50 );
         LAYOUTITEM8.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM9 --
         // -----------------------------
         LAYOUTITEM9.setAlignment( "BOTTOMLEFT" );
         LAYOUTITEM9.setColumn( COLUMN3 );
         LAYOUTITEM9.setFlow( "DOWN" );
         LAYOUTITEM9.setManage( GUESTQ );
         LAYOUTITEM9.setParent( TABLELAYOUT1 );
         LAYOUTITEM9.setRow( ROW1 );
         LAYOUTITEM9.setSizing( "NONE" );
         LAYOUTITEM9.setMarginLeft( 10 );
         LAYOUTITEM9.setMarginTop( 20 );
         LAYOUTITEM9.setMarginBottom( 20 );
         LAYOUTITEM9.initialize();

         // -----------------------------
         // -- Initialize #LABEL2ITEM1 --
         // -----------------------------
         LABEL2ITEM1.setAlignment( "TOPLEFT" );
         LABEL2ITEM1.setColumn( COLUMN3 );
         LABEL2ITEM1.setManage( GUESTTEXT );
         LABEL2ITEM1.setParent( TABLELAYOUT1 );
         LABEL2ITEM1.setRow( ROW1 );
         LABEL2ITEM1.setSizing( "FITTOWIDTH" );
         LABEL2ITEM1.setFlow( "DOWN" );
         LABEL2ITEM1.setMarginLeft( 10 );
         LABEL2ITEM1.setMarginRight( 10 );
         LABEL2ITEM1.setMarginTop( 15 );
         LABEL2ITEM1.initialize();

         // ----------------------------------
         // -- Initialize #EMAILLABEL2ITEM1 --
         // ----------------------------------
         EMAILLABEL2ITEM1.setManage( EMAILLABEL2 );
         EMAILLABEL2ITEM1.setParent( TABLELAYOUT1 );
         EMAILLABEL2ITEM1.setRow( ROW1 );
         EMAILLABEL2ITEM1.setSizing( "FITTOWIDTH" );
         EMAILLABEL2ITEM1.setColumn( COLUMN3 );
         EMAILLABEL2ITEM1.setAlignment( "TOPLEFT" );
         EMAILLABEL2ITEM1.setFlow( "DOWN" );
         EMAILLABEL2ITEM1.setMarginLeft( 10 );
         EMAILLABEL2ITEM1.setMarginRight( 20 );
         EMAILLABEL2ITEM1.setMarginTop( 15 );
         EMAILLABEL2ITEM1.initialize();

         // --------------------------------------
         // -- Initialize #XSACCOUNTEMAIL2ITEM1 --
         // --------------------------------------
         XSACCOUNTEMAIL2ITEM1.setColumn( COLUMN3 );
         XSACCOUNTEMAIL2ITEM1.setManage( XSACCOUNTEMAIL2 );
         XSACCOUNTEMAIL2ITEM1.setParent( TABLELAYOUT1 );
         XSACCOUNTEMAIL2ITEM1.setSizing( "FITTOWIDTH" );
         XSACCOUNTEMAIL2ITEM1.setRow( ROW1 );
         XSACCOUNTEMAIL2ITEM1.setAlignment( "TOPLEFT" );
         XSACCOUNTEMAIL2ITEM1.setFlow( "DOWN" );
         XSACCOUNTEMAIL2ITEM1.setMarginLeft( 10 );
         XSACCOUNTEMAIL2ITEM1.setMarginRight( 20 );
         XSACCOUNTEMAIL2ITEM1.initialize();

         // --------------------------------
         // -- Initialize #LOGINTEXTITEM3 --
         // --------------------------------
         LOGINTEXTITEM3.setAlignment( "TOPLEFT" );
         LOGINTEXTITEM3.setColumn( COLUMN1 );
         LOGINTEXTITEM3.setManage( LOGINTEXT );
         LOGINTEXTITEM3.setParent( TABLELAYOUT1 );
         LOGINTEXTITEM3.setRow( ROW1 );
         LOGINTEXTITEM3.setSizing( "FITTOWIDTH" );
         LOGINTEXTITEM3.setFlow( "DOWN" );
         LOGINTEXTITEM3.setMarginLeft( 20 );
         LOGINTEXTITEM3.setMarginTop( 15 );
         LOGINTEXTITEM3.setMarginRight( 20 );
         LOGINTEXTITEM3.initialize();

         // --------------------------------
         // -- Initialize #SAVELOGINITEM1 --
         // --------------------------------
         SAVELOGINITEM1.setAlignment( "TOPLEFT" );
         SAVELOGINITEM1.setColumn( COLUMN1 );
         SAVELOGINITEM1.setManage( SAVELOGIN );
         SAVELOGINITEM1.setParent( TABLELAYOUT1 );
         SAVELOGINITEM1.setRow( ROW1 );
         SAVELOGINITEM1.setSizing( "FITTOWIDTH" );
         SAVELOGINITEM1.setFlow( "DOWN" );
         SAVELOGINITEM1.setMarginLeft( 20 );
         SAVELOGINITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM10 --
         // ------------------------------
         LAYOUTITEM10.setAlignment( "TOPLEFT" );
         LAYOUTITEM10.setColumn( COLUMN1 );
         LAYOUTITEM10.setFlow( "DOWN" );
         LAYOUTITEM10.setManage( MESSAGE );
         LAYOUTITEM10.setParent( TABLELAYOUT1 );
         LAYOUTITEM10.setRow( ROW1 );
         LAYOUTITEM10.setSizing( "FITTOWIDTH" );
         LAYOUTITEM10.setMarginLeft( 20 );
         LAYOUTITEM10.setMarginRight( 10 );
         LAYOUTITEM10.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM11 --
         // ------------------------------
         LAYOUTITEM11.setAlignment( "TOPLEFT" );
         LAYOUTITEM11.setColumn( COLUMN3 );
         LAYOUTITEM11.setFlow( "DOWN" );
         LAYOUTITEM11.setManage( MESSAGE1 );
         LAYOUTITEM11.setParent( TABLELAYOUT1 );
         LAYOUTITEM11.setRow( ROW1 );
         LAYOUTITEM11.setSizing( "FITTOWIDTH" );
         LAYOUTITEM11.setMarginTop( 10 );
         LAYOUTITEM11.setMarginLeft( 10 );
         LAYOUTITEM11.setMarginRight( 20 );
         LAYOUTITEM11.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM2 --
         // ------------------------------
         MESSAGEITEM2.setManage( MESSAGE );
         MESSAGEITEM2.setParent( TABLELAYOUT1 );
         MESSAGEITEM2.setRow( ROW1 );
         MESSAGEITEM2.setSizing( "NONE" );
         MESSAGEITEM2.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM3 --
         // ------------------------------
         MESSAGEITEM3.setColumn( COLUMN1 );
         MESSAGEITEM3.setManage( MESSAGE );
         MESSAGEITEM3.setParent( TABLELAYOUT1 );
         MESSAGEITEM3.setSizing( "NONE" );
         MESSAGEITEM3.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM4 --
         // ------------------------------
         MESSAGEITEM4.setAlignment( "BOTTOMLEFT" );
         MESSAGEITEM4.setColumn( COLUMN1 );
         MESSAGEITEM4.setManage( MESSAGE );
         MESSAGEITEM4.setParent( TABLELAYOUT1 );
         MESSAGEITEM4.setRow( ROW1 );
         MESSAGEITEM4.setSizing( "NONE" );
         MESSAGEITEM4.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM5 --
         // ------------------------------
         MESSAGEITEM5.setColumn( COLUMN1 );
         MESSAGEITEM5.setFlow( "DOWN" );
         MESSAGEITEM5.setManage( MESSAGE );
         MESSAGEITEM5.setParent( TABLELAYOUT1 );
         MESSAGEITEM5.setRow( ROW1 );
         MESSAGEITEM5.setSizing( "NONE" );
         MESSAGEITEM5.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM6 --
         // ------------------------------
         MESSAGEITEM6.setManage( MESSAGE );
         MESSAGEITEM6.setParent( TABLELAYOUT1 );
         MESSAGEITEM6.setRow( ROW1 );
         MESSAGEITEM6.setSizing( "NONE" );
         MESSAGEITEM6.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM7 --
         // ------------------------------
         MESSAGEITEM7.setColumn( COLUMN1 );
         MESSAGEITEM7.setManage( MESSAGE );
         MESSAGEITEM7.setParent( TABLELAYOUT1 );
         MESSAGEITEM7.setSizing( "NONE" );
         MESSAGEITEM7.initialize();

         // ----------------------------------
         // -- Initialize #GUESTBUTTONITEM1 --
         // ----------------------------------
         GUESTBUTTONITEM1.setAlignment( "BOTTOMLEFT" );
         GUESTBUTTONITEM1.setColumn( COLUMN3 );
         GUESTBUTTONITEM1.setManage( GUESTBUTTON );
         GUESTBUTTONITEM1.setParent( TABLELAYOUT1 );
         GUESTBUTTONITEM1.setRow( ROW1 );
         GUESTBUTTONITEM1.setSizing( "NONE" );
         GUESTBUTTONITEM1.setMarginBottom( 20 );
         GUESTBUTTONITEM1.setMarginLeft( 10 );
         GUESTBUTTONITEM1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUTITEM12 --
         // ------------------------------
         LAYOUTITEM12.setAlignment( "TOPLEFT" );
         LAYOUTITEM12.setColumn( COLUMN4 );
         LAYOUTITEM12.setFlow( "DOWN" );
         LAYOUTITEM12.setManage( CLOSE );
         LAYOUTITEM12.setParent( TABLELAYOUT1 );
         LAYOUTITEM12.setRow( ROW1 );
         LAYOUTITEM12.setSizing( "FITTOWIDTH" );
         LAYOUTITEM12.initialize();

         // -----------------------------
         // -- Initialize #LOGINHEADER --
         // -----------------------------
         LOGINHEADER.setCaption( "Secure Login" );
         LOGINHEADER.setDisplayPosition( 1 );
         LOGINHEADER.setEllipses( "WORD" );
         LOGINHEADER.setHeight( 25 );
         LOGINHEADER.setParent( this );
         LOGINHEADER.setTabPosition( 1 );
         LOGINHEADER.setTabStop( false );
         LOGINHEADER.setTop( 0 );
         LOGINHEADER.setVerticalAlignment( "CENTER" );
         LOGINHEADER.setWidth( 871 );
         LOGINHEADER.setLeft( 0 );
         LOGINHEADER.setMarginLeft( 20 );
         LOGINHEADER.setThemeDrawStyle( "PanelHeader2" );
         LOGINHEADER.initialize();

         // -----------------------
         // -- Initialize #CLOSE --
         // -----------------------
         CLOSE.setCaption( "X" );
         CLOSE.setDisplayPosition( 21 );
         CLOSE.setEllipses( "WORD" );
         CLOSE.setHeight( 25 );
         CLOSE.setLeft( 871 );
         CLOSE.setParent( this );
         CLOSE.setTabPosition( 21 );
         CLOSE.setTabStop( false );
         CLOSE.setTop( 0 );
         CLOSE.setVerticalAlignment( "CENTER" );
         CLOSE.setWidth( 30 );
         CLOSE.setThemeDrawStyle( "PanelHeader2" );
         CLOSE.setAlignment( "CENTER" );
         CLOSE.initialize();

         // ------------------------
         // -- Initialize #LOGINQ --
         // ------------------------
         LOGINQ.setCaption( "Have an account?" );
         LOGINQ.setDisplayPosition( 2 );
         LOGINQ.setEllipses( "WORD" );
         LOGINQ.setHeight( 25 );
         LOGINQ.setLeft( 20 );
         LOGINQ.setParent( this );
         LOGINQ.setTabPosition( 2 );
         LOGINQ.setTabStop( false );
         LOGINQ.setTop( 55 );
         LOGINQ.setVerticalAlignment( "CENTER" );
         LOGINQ.setWidth( 251 );
         LOGINQ.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         LOGINQ.initialize();

         // ---------------------------
         // -- Initialize #LOGINTEXT --
         // ---------------------------
         LOGINTEXT.setCaption( "Login" );
         LOGINTEXT.setDisplayPosition( 3 );
         LOGINTEXT.setEllipses( "WORD" );
         LOGINTEXT.setHeight( 30 );
         LOGINTEXT.setLeft( 20 );
         LOGINTEXT.setParent( this );
         LOGINTEXT.setTabPosition( 3 );
         LOGINTEXT.setTabStop( false );
         LOGINTEXT.setTop( 95 );
         LOGINTEXT.setWidth( 251 );
         LOGINTEXT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         LOGINTEXT.initialize();

         // ----------------------------
         // -- Initialize #EMAILLABEL --
         // ----------------------------
         EMAILLABEL.setCaption( "Email" );
         EMAILLABEL.setDisplayPosition( 4 );
         EMAILLABEL.setEllipses( "WORD" );
         EMAILLABEL.setHeight( 25 );
         EMAILLABEL.setLeft( 20 );
         EMAILLABEL.setParent( this );
         EMAILLABEL.setTabPosition( 4 );
         EMAILLABEL.setTabStop( false );
         EMAILLABEL.setTop( 140 );
         EMAILLABEL.setVerticalAlignment( "CENTER" );
         EMAILLABEL.setWidth( 251 );
         EMAILLABEL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         EMAILLABEL.initialize();

         // ---------------------------------
         // -- Initialize #XSACCOUNTEMAIL1 --
         // ---------------------------------
         XSACCOUNTEMAIL1.setDisplayPosition( 5 );
         XSACCOUNTEMAIL1.setTabPosition( 5 );
         XSACCOUNTEMAIL1.setMarginLeft( 0 );
         XSACCOUNTEMAIL1.setWidth( 251 );
         XSACCOUNTEMAIL1.setParent( this );
         XSACCOUNTEMAIL1.setLabelPosition( "NONE" );
         XSACCOUNTEMAIL1.setTop( 165 );
         XSACCOUNTEMAIL1.setLeft( 20 );
         XSACCOUNTEMAIL1.applyDefault();
         XSACCOUNTEMAIL1.initialize();

         // ---------------------------------
         // -- Initialize #XSPASSWORDLABEL --
         // ---------------------------------
         XSPASSWORDLABEL.setCaption( "Password" );
         XSPASSWORDLABEL.setDisplayPosition( 6 );
         XSPASSWORDLABEL.setEllipses( "WORD" );
         XSPASSWORDLABEL.setHeight( 25 );
         XSPASSWORDLABEL.setLeft( 20 );
         XSPASSWORDLABEL.setParent( this );
         XSPASSWORDLABEL.setTabPosition( 6 );
         XSPASSWORDLABEL.setTabStop( false );
         XSPASSWORDLABEL.setTop( 196 );
         XSPASSWORDLABEL.setVerticalAlignment( "CENTER" );
         XSPASSWORDLABEL.setWidth( 271 );
         XSPASSWORDLABEL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         XSPASSWORDLABEL.initialize();

         // ----------------------------
         // -- Initialize #XSPASSWORD --
         // ----------------------------
         XSPASSWORD.setDisplayPosition( 7 );
         XSPASSWORD.setTabPosition( 7 );
         XSPASSWORD.setWidth( 251 );
         XSPASSWORD.setMarginLeft( 0 );
         XSPASSWORD.setParent( this );
         XSPASSWORD.setLabelPosition( "NONE" );
         XSPASSWORD.setTop( 221 );
         XSPASSWORD.setLeft( 20 );
         XSPASSWORD.applyDefault();
         XSPASSWORD.initialize();

         // -----------------------------
         // -- Initialize #LOGINBUTTON --
         // -----------------------------
         LOGINBUTTON.setCaption( "Login" );
         LOGINBUTTON.setDisplayPosition( 10 );
         LOGINBUTTON.setLeft( 20 );
         LOGINBUTTON.setParent( this );
         LOGINBUTTON.setTabPosition( 10 );
         LOGINBUTTON.setTop( 348 );
         LOGINBUTTON.setThemeDrawStyle( "ButtonLook1" );
         LOGINBUTTON.setHeight( 30 );
         LOGINBUTTON.setWidth( 100 );
         LOGINBUTTON.initialize();

         // ---------------------------
         // -- Initialize #SAVELOGIN --
         // ---------------------------
         SAVELOGIN.setDisplayPosition( 9 );
         SAVELOGIN.setLeft( 20 );
         SAVELOGIN.setTabPosition( 9 );
         SAVELOGIN.setTop( 272 );
         SAVELOGIN.setCaption( "Remember me" );
         SAVELOGIN.setWidth( 271 );
         SAVELOGIN.setParent( this );
         SAVELOGIN.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         SAVELOGIN.initialize();

         // ---------------------------------
         // -- Initialize #XSPASSWORDEMAIL --
         // ---------------------------------
         XSPASSWORDEMAIL.setCaption( "Send me a password reminder" );
         XSPASSWORDEMAIL.setDisplayPosition( 8 );
         XSPASSWORDEMAIL.setEllipses( "WORD" );
         XSPASSWORDEMAIL.setLeft( 20 );
         XSPASSWORDEMAIL.setTabPosition( 8 );
         XSPASSWORDEMAIL.setTabStop( false );
         XSPASSWORDEMAIL.setTop( 247 );
         XSPASSWORDEMAIL.setVerticalAlignment( "CENTER" );
         XSPASSWORDEMAIL.setWidth( 251 );
         XSPASSWORDEMAIL.setHeight( 25 );
         XSPASSWORDEMAIL.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDBL3" ) );
         XSPASSWORDEMAIL.setParent( this );
         XSPASSWORDEMAIL.initialize();

         // ---------------------------
         // -- Initialize #REGISTERQ --
         // ---------------------------
         REGISTERQ.setCaption( "New Customer?" );
         REGISTERQ.setDisplayPosition( 11 );
         REGISTERQ.setEllipses( "WORD" );
         REGISTERQ.setHeight( 25 );
         REGISTERQ.setLeft( 301 );
         REGISTERQ.setParent( this );
         REGISTERQ.setTabPosition( 11 );
         REGISTERQ.setTabStop( false );
         REGISTERQ.setTop( 50 );
         REGISTERQ.setVerticalAlignment( "CENTER" );
         REGISTERQ.setWidth( 270 );
         REGISTERQ.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         REGISTERQ.initialize();

         // ------------------------------
         // -- Initialize #REGISTERTEXT --
         // ------------------------------
         REGISTERTEXT.setCaption( "Create an account to enjoy faster checkout, multiple payment options and qualify for a line of credit." );
         REGISTERTEXT.setDisplayPosition( 12 );
         REGISTERTEXT.setEllipses( "WORD" );
         REGISTERTEXT.setLeft( 301 );
         REGISTERTEXT.setParent( this );
         REGISTERTEXT.setTabPosition( 12 );
         REGISTERTEXT.setTabStop( false );
         REGISTERTEXT.setTop( 90 );
         REGISTERTEXT.setWidth( 260 );
         REGISTERTEXT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         REGISTERTEXT.setHeight( 70 );
         REGISTERTEXT.initialize();

         // -------------------------------------
         // -- Initialize #CREATEACCOUNTBUTTON --
         // -------------------------------------
         CREATEACCOUNTBUTTON.setCaption( "Create an Account" );
         CREATEACCOUNTBUTTON.setDisplayPosition( 13 );
         CREATEACCOUNTBUTTON.setParent( this );
         CREATEACCOUNTBUTTON.setTabPosition( 13 );
         CREATEACCOUNTBUTTON.setTop( 348 );
         CREATEACCOUNTBUTTON.setWidth( 200 );
         CREATEACCOUNTBUTTON.setLeft( 301 );
         CREATEACCOUNTBUTTON.setThemeDrawStyle( "ButtonLook1" );
         CREATEACCOUNTBUTTON.setHeight( 30 );
         CREATEACCOUNTBUTTON.initialize();

         // ------------------------
         // -- Initialize #GUESTQ --
         // ------------------------
         GUESTQ.setCaption( "Prefer not to register?" );
         GUESTQ.setDisplayPosition( 14 );
         GUESTQ.setEllipses( "WORD" );
         GUESTQ.setHeight( 25 );
         GUESTQ.setLeft( 591 );
         GUESTQ.setParent( this );
         GUESTQ.setTabPosition( 14 );
         GUESTQ.setTabStop( false );
         GUESTQ.setTop( 50 );
         GUESTQ.setVerticalAlignment( "CENTER" );
         GUESTQ.setWidth( 270 );
         GUESTQ.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT12BOLDALMOSTBLACK" ) );
         GUESTQ.initialize();

         // ---------------------------
         // -- Initialize #GUESTTEXT --
         // ---------------------------
         GUESTTEXT.setCaption( "Shop as a Guest" );
         GUESTTEXT.setDisplayPosition( 15 );
         GUESTTEXT.setEllipses( "WORD" );
         GUESTTEXT.setHeight( 30 );
         GUESTTEXT.setLeft( 591 );
         GUESTTEXT.setParent( this );
         GUESTTEXT.setTabPosition( 15 );
         GUESTTEXT.setTabStop( false );
         GUESTTEXT.setTop( 90 );
         GUESTTEXT.setWidth( 270 );
         GUESTTEXT.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10BOLDALMOSTBLACK" ) );
         GUESTTEXT.initialize();

         // -----------------------------
         // -- Initialize #EMAILLABEL2 --
         // -----------------------------
         EMAILLABEL2.setCaption( "Email" );
         EMAILLABEL2.setDisplayPosition( 16 );
         EMAILLABEL2.setEllipses( "WORD" );
         EMAILLABEL2.setHeight( 25 );
         EMAILLABEL2.setLeft( 591 );
         EMAILLABEL2.setParent( this );
         EMAILLABEL2.setTabPosition( 16 );
         EMAILLABEL2.setTabStop( false );
         EMAILLABEL2.setTop( 135 );
         EMAILLABEL2.setVerticalAlignment( "CENTER" );
         EMAILLABEL2.setWidth( 260 );
         EMAILLABEL2.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10ALMOSTBLACK" ) );
         EMAILLABEL2.initialize();

         // ---------------------------------
         // -- Initialize #XSACCOUNTEMAIL2 --
         // ---------------------------------
         XSACCOUNTEMAIL2.setDisplayPosition( 17 );
         XSACCOUNTEMAIL2.setTabPosition( 17 );
         XSACCOUNTEMAIL2.setMarginLeft( 0 );
         XSACCOUNTEMAIL2.setWidth( 260 );
         XSACCOUNTEMAIL2.setParent( this );
         XSACCOUNTEMAIL2.setLabelPosition( "NONE" );
         XSACCOUNTEMAIL2.setTop( 160 );
         XSACCOUNTEMAIL2.setLeft( 591 );
         XSACCOUNTEMAIL2.applyDefault();
         XSACCOUNTEMAIL2.initialize();

         // -----------------------------
         // -- Initialize #GUESTBUTTON --
         // -----------------------------
         GUESTBUTTON.setCaption( "Shop as Guest" );
         GUESTBUTTON.setDisplayPosition( 18 );
         GUESTBUTTON.setLeft( 591 );
         GUESTBUTTON.setParent( this );
         GUESTBUTTON.setTabPosition( 18 );
         GUESTBUTTON.setTop( 348 );
         GUESTBUTTON.setWidth( 200 );
         GUESTBUTTON.setHeight( 30 );
         GUESTBUTTON.setThemeDrawStyle( "ButtonLook1" );
         GUESTBUTTON.initialize();

         // -------------------------
         // -- Initialize #MESSAGE --
         // -------------------------
         MESSAGE.setDisplayPosition( 19 );
         MESSAGE.setEllipses( "WORD" );
         MESSAGE.setHeight( 30 );
         MESSAGE.setLeft( 20 );
         MESSAGE.setParent( this );
         MESSAGE.setTabPosition( 19 );
         MESSAGE.setTabStop( false );
         MESSAGE.setTop( 307 );
         MESSAGE.setVerticalAlignment( "CENTER" );
         MESSAGE.setWidth( 261 );
         MESSAGE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10RED" ) );
         MESSAGE.initialize();

         // --------------------------
         // -- Initialize #MESSAGE1 --
         // --------------------------
         MESSAGE1.setDisplayPosition( 20 );
         MESSAGE1.setEllipses( "WORD" );
         MESSAGE1.setHeight( 40 );
         MESSAGE1.setLeft( 591 );
         MESSAGE1.setParent( this );
         MESSAGE1.setTabPosition( 20 );
         MESSAGE1.setTabStop( false );
         MESSAGE1.setTop( 191 );
         MESSAGE1.setVerticalAlignment( "CENTER" );
         MESSAGE1.setWidth( 260 );
         MESSAGE1.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10RED" ) );
         MESSAGE1.initialize();

         // -----------------------
         // -- Initialize #TIMER --
         // -----------------------
         TIMER.setStartup( "MANUAL" );
         TIMER.setInterval( 7000 );
         TIMER.initialize();

         // -----------------------
         // -- Initialize #LOGIN --
         // -----------------------
         LOGIN.initialize();

         // -------------------------------
         // -- Initialize #EMAILPASSWORD --
         // -------------------------------
         EMAILPASSWORD.initialize();

         // -----------------------------
         // -- Initialize #SAVEACCOUNT --
         // -----------------------------
         SAVEACCOUNT.initialize();

         // --------------------------
         // -- Initialize #GOTOHOME --
         // --------------------------
         GOTOHOME.initialize();

         // -------------------------------
         // -- Initialize #GOTOMYACCOUNT --
         // -------------------------------
         GOTOMYACCOUNT.initialize();

         // -----------------------------------
         // -- Add Event Handlers for #CLOSE --
         // -----------------------------------
         CLOSE.addEventHandler( "CLICK", this, evtRoutine8 );

         // -----------------------------------------
         // -- Add Event Handlers for #LOGINBUTTON --
         // -----------------------------------------
         LOGINBUTTON.addEventHandler( "CLICK", this, evtRoutine2 );

         // ---------------------------------------
         // -- Add Event Handlers for #SAVELOGIN --
         // ---------------------------------------
         SAVELOGIN.addEventHandler( "CLICK", this, evtRoutine3 );

         // ---------------------------------------------
         // -- Add Event Handlers for #XSPASSWORDEMAIL --
         // ---------------------------------------------
         XSPASSWORDEMAIL.addEventHandler( "CLICK", this, evtRoutine4 );

         // -------------------------------------------------
         // -- Add Event Handlers for #CREATEACCOUNTBUTTON --
         // -------------------------------------------------
         CREATEACCOUNTBUTTON.addEventHandler( "CLICK", this, evtRoutine5 );

         // -----------------------------------------
         // -- Add Event Handlers for #GUESTBUTTON --
         // -----------------------------------------
         GUESTBUTTON.addEventHandler( "CLICK", this, evtRoutine6 );

         // -----------------------------------
         // -- Add Event Handlers for #TIMER --
         // -----------------------------------
         TIMER.addEventHandler( "TICK", this, evtRoutine7 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHeight( 400 );
         this.setLeft( 0 );
         this.setTop( 0 );
         this.setWidth( 903 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDWHITE" ) );
         this.setAutoClose( false );
         this.setShroudStyle( Lansa.getTheme( "XSTHEME01" ).get( "BACKGROUNDGREY00_50" ) );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #com_owner.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.XSLOGIN, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#com_owner.CreateInstance", 99 );

      //
      // EVTROUTINE Handling(#com_owner.CreateInstance)
      //
      rtn.Line( 99 );
      {

         //
         // #XSAccountEmail := #MySession.RestoreLocalValue( Email )
         //
         rtn.Line( 102 );
         fld.XSACCEML.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "EMAIL" ) );

         //
         // #XSPassword := #MySession.RestoreLocalValue( Password )
         //
         rtn.Line( 104 );
         ref.XSPASSWORD.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "PASSWORD" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 106 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoginButton.Click
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.XSLOGIN, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoginButton.Click", 108 );

      //
      // DEFINE_COM Class(#XSCartID) Name(#LocalCartID)
      //
      var LOCALCARTID = rtn.createFieldReference( "LOCALCARTID", Fields.XSCRTID.DataClass );

      // -----------------------------
      // -- Initialize #LOCALCARTID --
      // -----------------------------
      LOCALCARTID.initialize();

      //
      // EVTROUTINE Handling(#LoginButton.Click)
      //
      rtn.Line( 108 );
      {

         //
         // #XSCartID := #MySession.RestoreLocalValue( CartId )
         //
         rtn.Line( 113 );
         fld.XSCRTID.set( ref.MYSESSION.ref.mthRESTORELOCALVALUE( "CARTID" ) );

         //
         // #XSAccountEmail := #XSAccountEmail1
         //
         rtn.Line( 114 );
         fld.XSACCEML.set( ref.XSACCOUNTEMAIL1.get() );

         //
         // #XSPasswordEncrypted := #XSPassword.Encrypt( #XSEncryptKey )
         //
         rtn.Line( 117 );
         fld.XSPASSWRE.set( Lansa.String.Encrypt( ref.XSPASSWORD.get(), fld.XSENCRYPT.get() ) );

         //
         // #Login.execute( #XSAccountEmail #XSPasswordEncrypted #XSAccountFirstname #XSCartID #XSCartTotalQuantity #XSCartTotalPrice #XSStatus )
         //
         rtn.Line( 119 );
         ref.LOGIN.mthEXECUTE( { FLD: { "XSACCEML": fld.XSACCEML.get(), "XSPASSWRD": fld.XSPASSWRE.get(), "XSCRTID": fld.XSCRTID.get() } }, { FLD: { "XSACC1STN": fld.XSACC1STN, "XSCRTID": fld.XSCRTID, "XSCRTQTY": fld.XSCRTQTY, "XSCRTPRC": fld.XSCRTPRC, "XSSTATUS": fld.XSSTATUS } } );

         //
         // CASE (#XSStatus)
         //
         rtn.Line( 121 );
         {
            var value1 = fld.XSSTATUS.get();

            //
            // WHEN ('= NR')
            //
            if ( rtn.Line( 123 ), Lansa.String.eq( value1, "NR" ) )
            {

               //
               // #Message := "This email is not registered.  Please register or try again."
               //
               rtn.Line( 125 );
               ref.MESSAGE.set( "This email is not registered.  Please register or try again." );
            }

            //
            // WHEN ('= PW')
            //
            else if ( rtn.Line( 127 ), Lansa.String.eq( value1, "PW" ) )
            {

               //
               // #Message := "The password you entered is incorrect.  Please try again."
               //
               rtn.Line( 129 );
               ref.MESSAGE.set( "The password you entered is incorrect.  Please try again." );
            }

            //
            // WHEN ('= ER')
            //
            else if ( rtn.Line( 131 ), Lansa.String.eq( value1, "ER" ) )
            {

               //
               // #Message := "Ensure you web server is running then try again."
               //
               rtn.Line( 133 );
               ref.MESSAGE.set( "Ensure you web server is running then try again." );
            }

            //
            // WHEN ('= OK')
            //
            else if ( rtn.Line( 135 ), Lansa.String.eq( value1, "OK" ) )
            {

               //
               // #com_owner.HideMessage
               //
               rtn.Line( 137 );
               this.mthHIDEMESSAGE();

               //
               // #MySession.SaveSessionValue( Email #XSAccountEmail )
               //
               rtn.Line( 139 );
               ref.MYSESSION.ref.mthSAVESESSIONVALUE( "EMAIL", fld.XSACCEML.get() );

               //
               // #MySession.SaveSessionValue( FirstName #XSAccountFirstname )
               //
               rtn.Line( 141 );
               ref.MYSESSION.ref.mthSAVESESSIONVALUE( "FIRSTNAME", fld.XSACC1STN.get() );

               //
               // IF (#XSCartID <> #LocalCartID)
               //
               rtn.Line( 143 );
               if ( Lansa.String.ne( fld.XSCRTID.get(), LOCALCARTID.get() ) )
               {

                  //
                  // #MySession.SaveLocalValue( CartID #XSCartID )
                  //
                  rtn.Line( 145 );
                  ref.MYSESSION.ref.mthSAVELOCALVALUE( "CARTID", fld.XSCRTID.get() );

                  //
                  // #MySession.pCartQuantity := #XSCartTotalQuantity
                  //
                  rtn.Line( 147 );
                  ref.MYSESSION.ref.setPCARTQUANTITY( fld.XSCRTQTY.get() );

                  //
                  // #MySession.pCartPrice := #XSCartTotalPrice
                  //
                  rtn.Line( 148 );
                  ref.MYSESSION.ref.setPCARTPRICE( fld.XSCRTPRC.get() );

               //
               // ENDIF 
               //
               }

               //
               // #GotoHome.execute
               //
               rtn.Line( 152 );
               ref.GOTOHOME.mthEXECUTE( {  }, {  } );

               //
               // RETURN 
               //
               rtn.end();
               return;
            }

         //
         // ENDCASE 
         //
         rtn.Line( 156 );
         }

         //
         // #com_owner.showMessage
         //
         rtn.Line( 158 );
         this.mthSHOWMESSAGE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 160 );
      rtn.end();
   };

   //
   // evtRoutine3 - #SaveLogin.Click
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#SaveLogin.Click", 162 );

      //
      // EVTROUTINE Handling(#SaveLogin.Click)
      //
      rtn.Line( 162 );
      {

         //
         // IF (#SaveLogin.ButtonState = checked)
         //
         rtn.Line( 164 );
         if ( Lansa.String.eq( ref.SAVELOGIN.getButtonState(), "CHECKED" ) )
         {

            //
            // #MySession.SaveLocalValue( Email #XSAccountEmail1 )
            //
            rtn.Line( 166 );
            ref.MYSESSION.ref.mthSAVELOCALVALUE( "EMAIL", ref.XSACCOUNTEMAIL1.get() );

            //
            // #MySession.SaveLocalValue( Password #XSPassword )
            //
            rtn.Line( 168 );
            ref.MYSESSION.ref.mthSAVELOCALVALUE( "PASSWORD", ref.XSPASSWORD.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 172 );
      rtn.end();
   };

   //
   // evtRoutine4 - #XSPasswordEmail.Click
   //
   function evtRoutine4( sender, parms )
   {
      var fld = this.FLD.XSLOGIN, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#XSPasswordEmail.Click", 174 );

      //
      // EVTROUTINE Handling(#XSPasswordEmail.Click)
      //
      rtn.Line( 174 );
      {

         //
         // IF (#XSAccountEmail1 = *blank)
         //
         rtn.Line( 178 );
         if ( Lansa.String.eq( ref.XSACCOUNTEMAIL1.get(), "" ) )
         {

            //
            // #Message := 'Enter your email then request password again'
            //
            rtn.Line( 180 );
            ref.MESSAGE.set( "Enter your email then request password again" );

            //
            // #com_owner.showMessage
            //
            rtn.Line( 182 );
            this.mthSHOWMESSAGE();

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
         // #EmailPassword.Execute( #XSAccountEmail1 #XSstatus #WinRetCod #XSPassword #XSEncryptKey )
         //
         rtn.Line( 188 );
         ref.EMAILPASSWORD.mthEXECUTE( { FLD: { "XSACCEML": ref.XSACCOUNTEMAIL1.get() } }, { FLD: { "XSSTATUS": fld.XSSTATUS, "WINRETCOD": fld.WINRETCOD, "XSPASSWRD": ref.XSPASSWORD, "XSENCRYPT": fld.XSENCRYPT } } );

         //
         // IF ((#XSstatus = OK) And (#WinRetCod = 0))
         //
         rtn.Line( 190 );
         if ( Lansa.and( Lansa.String.eq( fld.XSSTATUS.get(), "OK" ), Lansa.Number.eq( fld.WINRETCOD.get(), 0 ) ) )
         {

            //
            // #Message := 'Password request has been processed.'
            //
            rtn.Line( 192 );
            ref.MESSAGE.set( "Password request has been processed." );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #Message := 'Password request has failed.  Check your email address and try again.'
            //
            rtn.Line( 196 );
            ref.MESSAGE.set( "Password request has failed.  Check your email address and try again." );

         //
         // ENDIF 
         //
         }

         //
         // #com_owner.showMessage
         //
         rtn.Line( 200 );
         this.mthSHOWMESSAGE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 202 );
      rtn.end();
   };

   //
   // mthSHOWMESSAGE - showMessage
   //
   COM_OWNER.mthSHOWMESSAGE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "showMessage", 204 );

      //
      // MTHROUTINE Name(showMessage)
      //
      rtn.Line( 204 );
      {

         //
         // #Message.visible := true
         //
         rtn.Line( 206 );
         ref.MESSAGE.setVisible( true );

         //
         // #Message1.visible := true
         //
         rtn.Line( 207 );
         ref.MESSAGE1.setVisible( true );

         //
         // #Timer.start
         //
         rtn.Line( 208 );
         ref.TIMER.mthSTART();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 210 );
      rtn.end();
   };

   //
   // mthHIDEMESSAGE - HideMessage
   //
   COM_OWNER.mthHIDEMESSAGE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "HideMessage", 212 );

      //
      // MTHROUTINE Name(HideMessage)
      //
      rtn.Line( 212 );
      {

         //
         // #Message.visible := false
         //
         rtn.Line( 214 );
         ref.MESSAGE.setVisible( false );

         //
         // #Message1.visible := false
         //
         rtn.Line( 215 );
         ref.MESSAGE1.setVisible( false );

         //
         // #Message #Message1 := *blank
         //
         rtn.Line( 217 );
         ref.MESSAGE.set( "" );
         ref.MESSAGE1.set( "" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 219 );
      rtn.end();
   };

   //
   // evtRoutine5 - #CreateAccountButton.Click
   //
   function evtRoutine5( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#CreateAccountButton.Click", 221 );

      //
      // EVTROUTINE Handling(#CreateAccountButton.Click)
      //
      rtn.Line( 221 );
      {

         //
         // #GotoMyAccount.execute
         //
         rtn.Line( 223 );
         ref.GOTOMYACCOUNT.mthEXECUTE( {  }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 225 );
      rtn.end();
   };

   //
   // evtRoutine6 - #GuestButton.Click
   //
   function evtRoutine6( sender, parms )
   {
      var fld = this.FLD.XSLOGIN, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#GuestButton.Click", 227 );

      //
      // EVTROUTINE Handling(#GuestButton.Click)
      //
      rtn.Line( 227 );
      {

         //
         // IF (#XSAccountEmail2 = *blank)
         //
         rtn.Line( 229 );
         if ( Lansa.String.eq( ref.XSACCOUNTEMAIL2.get(), "" ) )
         {

            //
            // #Message1 := "An email must be provided to shop as a guest."
            //
            rtn.Line( 231 );
            ref.MESSAGE1.set( "An email must be provided to shop as a guest." );

            //
            // #com_owner.ShowMessage
            //
            rtn.Line( 233 );
            this.mthSHOWMESSAGE();

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
         // #XSAccountEmail := #XSAccountEmail2
         //
         rtn.Line( 239 );
         fld.XSACCEML.set( ref.XSACCOUNTEMAIL2.get() );

         //
         // #XSPassword := 'GuestAcct'
         //
         rtn.Line( 242 );
         ref.XSPASSWORD.set( "GuestAcct" );

         //
         // #XSPasswordEncrypted := #XSPassword.Encrypt( #XSEncryptKey )
         //
         rtn.Line( 243 );
         fld.XSPASSWRE.set( Lansa.String.Encrypt( ref.XSPASSWORD.get(), fld.XSENCRYPT.get() ) );

         //
         // #XSPassword := #XSPasswordEncrypted
         //
         rtn.Line( 244 );
         ref.XSPASSWORD.set( fld.XSPASSWRE.get() );

         //
         // #SaveAccount.Execute( #AccountDetail #XSStatus )
         //
         rtn.Line( 246 );
         ref.SAVEACCOUNT.mthEXECUTE( { FLD: { "XSACCID": fld.XSACCID.get(), "XSPASSWRD": ref.XSPASSWORD.get(), "XSACCSTS": fld.XSACCSTS.get(), "XSACCTTL": fld.XSACCTTL.get(), "XSACCLSTN": fld.XSACCLSTN.get(), "XSACC1STN": fld.XSACC1STN.get(), "XSBTHDTE": fld.XSBTHDTE.get(), "XSACCEML": fld.XSACCEML.get(), "XSPHNMBL": fld.XSPHNMBL.get(), "XSPHNWRK": fld.XSPHNWRK.get(), "XSPHNHME": fld.XSPHNHME.get(), "XSACCADR1": fld.XSACCADR1.get(), "XSACCADR2": fld.XSACCADR2.get(), "XSACCCITY": fld.XSACCCITY.get(), "XSACCSTT": fld.XSACCSTT.get(), "XSACCZIP": fld.XSACCZIP.get(), "XSACCCNTY": fld.XSACCCNTY.get(), "XSDLVADR1": fld.XSDLVADR1.get(), "XSDLVADR2": fld.XSDLVADR2.get(), "XSDLVCITY": fld.XSDLVCITY.get(), "XSDLVSTT": fld.XSDLVSTT.get(), "XSDLVZIP": fld.XSDLVZIP.get(), "XSDLVCNTY": fld.XSDLVCNTY.get(), "XSDLVINS": fld.XSDLVINS.get(), "XSNWLCNC": fld.XSNWLCNC.get(), "XSNWLSTS": fld.XSNWLSTS.get(), "XSNWLSBS": fld.XSNWLSBS.get() } }, { FLD: { "XSSTATUS": fld.XSSTATUS } } );

         //
         // IF (#XSstatus = OK)
         //
         rtn.Line( 249 );
         if ( Lansa.String.eq( fld.XSSTATUS.get(), "OK" ) )
         {

            //
            // #MySession.SaveSessionValue( Email #XSAccountEmail )
            //
            rtn.Line( 251 );
            ref.MYSESSION.ref.mthSAVESESSIONVALUE( "EMAIL", fld.XSACCEML.get() );

            //
            // #MySession.SaveSessionValue( FirstName #XSAccountEmail )
            //
            rtn.Line( 253 );
            ref.MYSESSION.ref.mthSAVESESSIONVALUE( "FIRSTNAME", fld.XSACCEML.get() );

            //
            // #GotoHome.execute
            //
            rtn.Line( 255 );
            ref.GOTOHOME.mthEXECUTE( {  }, {  } );

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
         // IF (#sys_msgq.messages.itemcount > 0)
         //
         rtn.Line( 261 );
         if ( Lansa.Number.gt( Lansa.MSGQ().getMessages().getItemCount(), 0 ) )
         {

            //
            // FOR Each(#Msg) In(#sys_msgq.Messages)
            //
            rtn.Line( 264 );
            {
               var i1 = Lansa.MSGQ().getMessages().createIterator();

               while( i1.step() )
               {
                  var MSG = rtn.setref( "MSG", i1.item() );

                  //
                  // #Message1 := #Msg.Text
                  //
                  rtn.Line( 266 );
                  ref.MESSAGE1.set( MSG.getText() );

                  //
                  // LEAVE 
                  //
                  rtn.Line( 268 );
                  break;

               //
               // ENDFOR 
               //
               rtn.Line( 270 );
               }

               i1.end();
               rtn.deleteReference( "MSG" );
            }

            //
            // #sys_msgq.ClearAll
            //
            rtn.Line( 272 );
            Lansa.MSGQ().mthCLEARALL();

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #Message1 := "Please verify the email and try again."
            //
            rtn.Line( 276 );
            ref.MESSAGE1.set( "Please verify the email and try again." );

         //
         // ENDIF 
         //
         }

         //
         // #com_owner.ShowMessage
         //
         rtn.Line( 280 );
         this.mthSHOWMESSAGE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 282 );
      rtn.end();
   };

   //
   // evtRoutine7 - #Timer.Tick
   //
   function evtRoutine7( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Timer.Tick", 284 );

      //
      // EVTROUTINE Handling(#Timer.Tick)
      //
      rtn.Line( 284 );
      {

         //
         // #Timer.stop
         //
         rtn.Line( 286 );
         ref.TIMER.mthSTOP();

         //
         // #com_owner.HideMessage
         //
         rtn.Line( 287 );
         this.mthHIDEMESSAGE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 289 );
      rtn.end();
   };

   //
   // evtRoutine8 - #Close.Click
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Close.Click", 291 );

      //
      // EVTROUTINE Handling(#Close.Click)
      //
      rtn.Line( 291 );
      {

         //
         // #com_owner.ClosePopup
         //
         rtn.Line( 294 );
         this.mthCLOSEPOPUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 296 );
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

   // ----------------------------
   // -- XSCRTID Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTID );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTID.DataClass, an: "PRIM_FLD", fn: "XSCRTID" } );
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
   rc: [ "XSMYSSN", "XSTHEME01" ],
   rp: [ "PRIM_PPNL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_EVEF", "PRIM_PHBN", "PRIM_CKBX", "PRIM_TIMR", "PRIM_WEB.DataRequest", "PRIM_WEB.WebPageRequest", "PRIM_FLD", "PRIM_PKLT", "PRIM_MSGQ" ]
});

//# sourceURL=xslogin.js
