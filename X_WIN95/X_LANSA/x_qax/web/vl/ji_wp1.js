// ----------------------
// -- Web Page: JI_WP1 --
// ----------------------
LANSA.addComponent(
{
   id: "JI_WP1", 
   ot: "wp", 
   tp: "Web Page", 
   de: "Webpage John Ivory", 
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
      IOdSTS:
      {
         nm: "IO$STS",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: { "ENG": "I/O status ....", "FRA": "Statut I/O  . .", "JPN": "I/O status ...." }[ curLanguage ],
         h1: { "ENG": "I/O", "FRA": "Statut", "JPN": "I/O" }[ curLanguage ],
         h2: { "ENG": "Status", "FRA": "I/O", "JPN": "Status" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Data base I/O operation status code", "FRA": "Code statut opération I/O", "JPN": "Data base I/O operation status code" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
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
      },
      ADDRESS1:
      {
         nm: "ADDRESS1",
         ft: "A",
         ln: 25,
         dc: 0,
         lb: { "ENG": "Address 1......", "FRA": "Adresse 1 . . .", "JPN": "Address 1......" }[ curLanguage ],
         h1: { "ENG": "Address line 1", "FRA": "Adresse ligne 1", "JPN": "Address line 1" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Street No and Name", "FRA": "Adresse ligne 1", "JPN": "Street No and Name" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      ADDRESS2:
      {
         nm: "ADDRESS2",
         ft: "A",
         ln: 25,
         dc: 0,
         ks: "O",
         lb: { "ENG": "Address 2......", "FRA": "Adresse 2 . . .", "JPN": "Address 2......" }[ curLanguage ],
         h1: { "ENG": "Address line 2", "FRA": "Adresse ligne 2", "JPN": "Address line 2" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Suburb or Town", "FRA": "Adresse ligne 2", "JPN": "Suburb or Town" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: { "ENG": "Entries .......", "FRA": "Entrées . . . .", "JPN": "Entries ......." }[ curLanguage ],
         h1: { "ENG": "Number", "FRA": "Nombre", "JPN": "Number" }[ curLanguage ],
         h2: { "ENG": "of Entrys", "FRA": "d´Entrées", "JPN": "of Entrys" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Number of entries in a browse list", "FRA": "Liste, nombre d´entrées ds liste BROWSE", "JPN": "Number of entries in a browse list" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      ADDRESS3:
      {
         nm: "ADDRESS3",
         ft: "A",
         ln: 25,
         dc: 0,
         ks: "O",
         lb: { "ENG": "Country", "FRA": "Adresse 3 . . .", "JPN": "Country" }[ curLanguage ],
         h1: { "ENG": "Country", "FRA": "Adresse ligne 3", "JPN": "Country" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "State and Country", "FRA": "Adresse ligne 3", "JPN": "State and Country" }[ curLanguage ],
         dv: "",
         ia: [ "FE", "LC" ]
      },
      POSTCODE:
      {
         nm: "POSTCODE",
         ft: "S",
         ln: 6,
         dc: 0,
         ec: "3",
         lb: { "ENG": "Post/zip code..", "FRA": "Code postal . .", "JPN": "Post/zip code.." }[ curLanguage ],
         h1: { "ENG": "Post/zip", "FRA": "Code", "JPN": "Post/zip" }[ curLanguage ],
         h2: { "ENG": "Code", "FRA": "Postal", "JPN": "Code" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Post / Zip Code", "FRA": "Code postal", "JPN": "Post / Zip Code" }[ curLanguage ],
         dv: 0,
         ia: [ "FE" ]
      },
      PHONEHME:
      {
         nm: "PHONEHME",
         ft: "A",
         ln: 15,
         dc: 0,
         lb: { "ENG": "Home phone.....", "FRA": "Tél. personnel", "JPN": "Home phone....." }[ curLanguage ],
         h1: { "ENG": "Home phone", "FRA": "Téléphone", "JPN": "Home phone" }[ curLanguage ],
         h2: { "ENG": "Number", "FRA": "Personnel", "JPN": "Number" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Home Phone Number", "FRA": "Numéro de téléphone personnel", "JPN": "Home Phone Number" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
      PHONEBUS:
      {
         nm: "PHONEBUS",
         ft: "A",
         ln: 15,
         dc: 0,
         lb: { "ENG": "Business ph....", "FRA": "Tél. prof.  . .", "JPN": "Business ph...." }[ curLanguage ],
         h1: { "ENG": "Business Phone", "FRA": "Téléphone", "JPN": "Business Phone" }[ curLanguage ],
         h2: { "ENG": "Number", "FRA": "professionnel", "JPN": "Number" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Business Phone Number", "FRA": "Numéro de téléphone professionnel", "JPN": "Business Phone Number" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
      DEPTMENT:
      {
         nm: "DEPTMENT",
         ft: "A",
         ln: 4,
         dc: 0,
         lb: { "ENG": "Department.....", "FRA": "Department.....", "JPN": "部門コード..." }[ curLanguage ],
         h1: { "ENG": "  Dept", "FRA": "  Dept", "JPN": "部門" }[ curLanguage ],
         h2: { "ENG": "  Code", "FRA": "  Code", "JPN": "コード" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Department Code", "FRA": "Department Code", "JPN": "部門コード" }[ curLanguage ],
         dv: "",
         ia: [ "FE" ]
      },
      SECTION:
      {
         nm: "SECTION",
         ft: "A",
         ln: 2,
         dc: 0,
         lb: "Section........",
         h1: "    Section",
         h2: "     Code",
         h3: " ",
         de: "Section Code",
         dv: "",
         ia: [ "FE" ]
      },
      SALARY:
      {
         nm: "SALARY",
         ft: "P",
         ln: 11,
         dc: 2,
         ec: "1",
         lb: { "ENG": "Salary.........", "FRA": "Salaire . . . .", "JPN": "Salary........." }[ curLanguage ],
         h1: { "ENG": "Salary", "FRA": "Salaire", "JPN": "Salary" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Employee Salary", "FRA": "Salaire de l´employé", "JPN": "Employee Salary" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      STD_COUNT:
      {
         nm: "STD_COUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         lb: { "ENG": "Standard count", "FRA": "Nombre standard", "JPN": "Standard count" }[ curLanguage ],
         h1: { "ENG": "Standard", "FRA": "Nomnre", "JPN": "Standard" }[ curLanguage ],
         h2: { "ENG": "count", "FRA": "Standard", "JPN": "count" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Standard count", "FRA": "Dénombrement standard", "JPN": "Standard count" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WEB", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         GetEmployee: 
         {
         },

         AddEmployee: 
         {
         },

         UpdateEmployee: 
         {
         },

         GetEmployees: 
         {
         },

         GetEmployees2: 
         {
         },

         GetImage: 
         {
         },

         Goto: 
         {
         },

         Test: 
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
         var fld = this.addFields( "JI_WP1", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Caption('Get') Displayposition(1) Left(16) Parent(#COM_OWNER) Tabposition(1) Top(24) Height(41) Width(137)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button2) Caption('Get List') Displayposition(5) Left(16) Parent(#COM_OWNER) Tabposition(5) Top(88) Height(41) Width(137)
         //
         var BUTTON2 = this.createReference( "BUTTON2", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button3) Caption('Get Image') Displayposition(4) Left(16) Parent(#COM_OWNER) Tabposition(4) Top(152) Height(41) Width(137)
         //
         var BUTTON3 = this.createReference( "BUTTON3", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button4) Caption('Add') Displayposition(3) Left(16) Parent(#COM_OWNER) Tabposition(3) Top(216) Height(41) Width(137)
         //
         var BUTTON4 = this.createReference( "BUTTON4", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button5) Caption('Update') Displayposition(2) Left(16) Parent(#COM_OWNER) Tabposition(2) Top(280) Height(41) Width(137)
         //
         var BUTTON5 = this.createReference( "BUTTON5", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#io$sts.Visual) Name(#io$sts) Componentversion(1) Displayposition(11) Height(21) Left(266) Parent(#COM_OWNER) Tabposition(11) Top(31) Usepicklist(False) Width(251) Displayonly(True) Caption('Status') Labeltype(Caption)
         //
         var IOdSTS = this.createFieldReference( "IO$STS", Fields.IOdSTS.VISUAL );

         //
         // DEFINE_COM Class(#EMPNO.Visual) Name(#EMPNO) Componentversion(1) Displayposition(10) Height(21) Left(266) Parent(#COM_OWNER) Tabposition(10) Top(61) Usepicklist(False) Width(251) Caption('ID') Labeltype(Caption)
         //
         var EMPNO = this.createFieldReference( "EMPNO", Fields.EMPNO.VISUAL );

         //
         // DEFINE_COM Class(#surname.Visual) Name(#surname) Displayposition(9) Left(266) Parent(#COM_OWNER) Tabposition(9) Top(91) Width(500) Caption('Surname') Labeltype(Caption)
         //
         var SURNAME = this.createFieldReference( "SURNAME", Fields.SURNAME.VISUALEDIT );

         //
         // DEFINE_COM Class(#givename.Visual) Name(#givename) Displayposition(8) Left(266) Parent(#COM_OWNER) Tabposition(8) Top(120) Width(500) Labeltype(Caption) Caption('First name')
         //
         var GIVENAME = this.createFieldReference( "GIVENAME", Fields.GIVENAME.VISUALEDIT );

         //
         // DEFINE_COM Class(#address1.Visual) Name(#address1) Displayposition(7) Left(266) Parent(#COM_OWNER) Tabposition(7) Top(151) Width(500) Height(21) Usepicklist(False) Caption('Address1') Labeltype(Caption)
         //
         var ADDRESS1 = this.createFieldReference( "ADDRESS1", Fields.ADDRESS1.VISUAL );

         //
         // DEFINE_COM Class(#address2.Visual) Name(#address2) Displayposition(6) Left(266) Parent(#COM_OWNER) Tabposition(6) Top(181) Width(500) Height(21) Usepicklist(False) Caption('Address2') Labeltype(Caption)
         //
         var ADDRESS2 = this.createFieldReference( "ADDRESS2", Fields.ADDRESS2.VISUAL );

         //
         // DEFINE_COM Class(#Prim_acol<#JI_list>) Name(#EmployeeList2)
         //
         var EMPLOYEELIST2 = this.createReference( "EMPLOYEELIST2", "PRIM_ACOL" );

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setCaption( "Get" );
         BUTTON1.setDisplayPosition( 1 );
         BUTTON1.setLeft( 16 );
         BUTTON1.setParent( this );
         BUTTON1.setTabPosition( 1 );
         BUTTON1.setTop( 24 );
         BUTTON1.setHeight( 41 );
         BUTTON1.setWidth( 137 );
         BUTTON1.initialize();

         // -------------------------
         // -- Initialize #BUTTON2 --
         // -------------------------
         BUTTON2.setCaption( "Get List" );
         BUTTON2.setDisplayPosition( 5 );
         BUTTON2.setLeft( 16 );
         BUTTON2.setParent( this );
         BUTTON2.setTabPosition( 5 );
         BUTTON2.setTop( 88 );
         BUTTON2.setHeight( 41 );
         BUTTON2.setWidth( 137 );
         BUTTON2.initialize();

         // -------------------------
         // -- Initialize #BUTTON3 --
         // -------------------------
         BUTTON3.setCaption( "Get Image" );
         BUTTON3.setDisplayPosition( 4 );
         BUTTON3.setLeft( 16 );
         BUTTON3.setParent( this );
         BUTTON3.setTabPosition( 4 );
         BUTTON3.setTop( 152 );
         BUTTON3.setHeight( 41 );
         BUTTON3.setWidth( 137 );
         BUTTON3.initialize();

         // -------------------------
         // -- Initialize #BUTTON4 --
         // -------------------------
         BUTTON4.setCaption( "Add" );
         BUTTON4.setDisplayPosition( 3 );
         BUTTON4.setLeft( 16 );
         BUTTON4.setParent( this );
         BUTTON4.setTabPosition( 3 );
         BUTTON4.setTop( 216 );
         BUTTON4.setHeight( 41 );
         BUTTON4.setWidth( 137 );
         BUTTON4.initialize();

         // -------------------------
         // -- Initialize #BUTTON5 --
         // -------------------------
         BUTTON5.setCaption( "Update" );
         BUTTON5.setDisplayPosition( 2 );
         BUTTON5.setLeft( 16 );
         BUTTON5.setParent( this );
         BUTTON5.setTabPosition( 2 );
         BUTTON5.setTop( 280 );
         BUTTON5.setHeight( 41 );
         BUTTON5.setWidth( 137 );
         BUTTON5.initialize();

         // ------------------------
         // -- Initialize #IO$STS --
         // ------------------------
         IOdSTS.setComponentVersion( 1 );
         IOdSTS.setDisplayPosition( 11 );
         IOdSTS.setHeight( 21 );
         IOdSTS.setLeft( 266 );
         IOdSTS.setParent( this );
         IOdSTS.setTabPosition( 11 );
         IOdSTS.setTop( 31 );
         IOdSTS.setUsePicklist( false );
         IOdSTS.setWidth( 251 );
         IOdSTS.setDisplayOnly( true );
         IOdSTS.setCaption( "Status" );
         IOdSTS.setLabelType( "CAPTION" );
         IOdSTS.applyDefault();
         IOdSTS.initialize();

         // -----------------------
         // -- Initialize #EMPNO --
         // -----------------------
         EMPNO.setComponentVersion( 1 );
         EMPNO.setDisplayPosition( 10 );
         EMPNO.setHeight( 21 );
         EMPNO.setLeft( 266 );
         EMPNO.setParent( this );
         EMPNO.setTabPosition( 10 );
         EMPNO.setTop( 61 );
         EMPNO.setUsePicklist( false );
         EMPNO.setWidth( 251 );
         EMPNO.setCaption( "ID" );
         EMPNO.setLabelType( "CAPTION" );
         EMPNO.applyDefault();
         EMPNO.initialize();

         // -------------------------
         // -- Initialize #SURNAME --
         // -------------------------
         SURNAME.setDisplayPosition( 9 );
         SURNAME.setLeft( 266 );
         SURNAME.setParent( this );
         SURNAME.setTabPosition( 9 );
         SURNAME.setTop( 91 );
         SURNAME.setWidth( 500 );
         SURNAME.setCaption( "Surname" );
         SURNAME.setLabelType( "CAPTION" );
         SURNAME.applyDefault();
         SURNAME.initialize();

         // --------------------------
         // -- Initialize #GIVENAME --
         // --------------------------
         GIVENAME.setDisplayPosition( 8 );
         GIVENAME.setLeft( 266 );
         GIVENAME.setParent( this );
         GIVENAME.setTabPosition( 8 );
         GIVENAME.setTop( 120 );
         GIVENAME.setWidth( 500 );
         GIVENAME.setLabelType( "CAPTION" );
         GIVENAME.setCaption( "First name" );
         GIVENAME.applyDefault();
         GIVENAME.initialize();

         // --------------------------
         // -- Initialize #ADDRESS1 --
         // --------------------------
         ADDRESS1.setDisplayPosition( 7 );
         ADDRESS1.setLeft( 266 );
         ADDRESS1.setParent( this );
         ADDRESS1.setTabPosition( 7 );
         ADDRESS1.setTop( 151 );
         ADDRESS1.setWidth( 500 );
         ADDRESS1.setHeight( 21 );
         ADDRESS1.setUsePicklist( false );
         ADDRESS1.setCaption( "Address1" );
         ADDRESS1.setLabelType( "CAPTION" );
         ADDRESS1.applyDefault();
         ADDRESS1.initialize();

         // --------------------------
         // -- Initialize #ADDRESS2 --
         // --------------------------
         ADDRESS2.setDisplayPosition( 6 );
         ADDRESS2.setLeft( 266 );
         ADDRESS2.setParent( this );
         ADDRESS2.setTabPosition( 6 );
         ADDRESS2.setTop( 181 );
         ADDRESS2.setWidth( 500 );
         ADDRESS2.setHeight( 21 );
         ADDRESS2.setUsePicklist( false );
         ADDRESS2.setCaption( "Address2" );
         ADDRESS2.setLabelType( "CAPTION" );
         ADDRESS2.applyDefault();
         ADDRESS2.initialize();

         // -------------------------------
         // -- Initialize #EMPLOYEELIST2 --
         // -------------------------------
         EMPLOYEELIST2.setCollects( "JI_LIST" );
         EMPLOYEELIST2.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON1 --
         // -------------------------------------
         BUTTON1.addEventHandler( "CLICK", this, evtRoutine2 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON2 --
         // -------------------------------------
         BUTTON2.addEventHandler( "CLICK", this, evtRoutine3 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON3 --
         // -------------------------------------
         BUTTON3.addEventHandler( "CLICK", this, evtRoutine4 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON4 --
         // -------------------------------------
         BUTTON4.addEventHandler( "CLICK", this, evtRoutine5 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON5 --
         // -------------------------------------
         BUTTON5.addEventHandler( "CLICK", this, evtRoutine6 );

         // ---------------------------------------------------
         // -- Define the UDC information for #EMPLOYEELIST2 --
         // ---------------------------------------------------
         EMPLOYEELIST2.addListFields( { "EMPNO": this.REF.EMPNO, "SURNAME": this.REF.SURNAME, "GIVENAME": this.REF.GIVENAME } );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "JI_WP1" );

         //
         // DEF_LIST Name(#PSLMSTLst) Fields(#EMPNO #surname #givename #address1 #address2 #ADDRESS3 #POSTCODE #PHONEHME #PHONEBUS #DEPTMENT #SECTION #SALARY) Counter(#ListCount) Type(*Working) Entrys(*Max)
         //
         list.PSLMSTLST = Lansa.createList( { "EMPNO": EMPNO, "SURNAME": SURNAME, "GIVENAME": GIVENAME, "ADDRESS1": ADDRESS1, "ADDRESS2": ADDRESS2, "ADDRESS3": fld.ADDRESS3, "POSTCODE": fld.POSTCODE, "PHONEHME": fld.PHONEHME, "PHONEBUS": fld.PHONEBUS, "DEPTMENT": fld.DEPTMENT, "SECTION": fld.SECTION, "SALARY": fld.SALARY }, fld.LISTCOUNT );

         //
         // DEF_LIST Name(#EmployeeList) Fields(#EMPNO #surname #givename #address1) Counter(#listcount) Type(*working) Entrys(999)
         //
         list.EMPLOYEELIST = Lansa.createList( { "EMPNO": EMPNO, "SURNAME": SURNAME, "GIVENAME": GIVENAME, "ADDRESS1": ADDRESS1 }, fld.LISTCOUNT );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 31 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 31 );
      {

         //
         // #EMPNO := 'A0070'
         //
         rtn.Line( 33 );
         ref.EMPNO.set( "A0070" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Button1.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button1.Click", 37 );

      //
      // EVTROUTINE Handling(#Button1.Click)
      //
      rtn.Line( 37 );
      {

         //
         // #com_owner.getemployee
         //
         rtn.Line( 39 );
         this.mthGETEMPLOYEE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 41 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Button2.Click
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button2.Click", 43 );

      //
      // EVTROUTINE Handling(#Button2.Click)
      //
      rtn.Line( 43 );
      {

         //
         // #com_owner.GetEmployees2
         //
         rtn.Line( 45 );
         this.mthGETEMPLOYEES2();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 47 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Button3.Click
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button3.Click", 50 );

      //
      // EVTROUTINE Handling(#Button3.Click)
      //
      rtn.Line( 50 );
      {

         //
         // #com_owner.GetImage
         //
         rtn.Line( 52 );
         this.mthGETIMAGE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 54 );
      rtn.end();
   };

   //
   // evtRoutine5 - #Button4.Click
   //
   function evtRoutine5( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button4.Click", 56 );

      //
      // EVTROUTINE Handling(#Button4.Click)
      //
      rtn.Line( 56 );
      {

         //
         // #com_owner.AddEmployee
         //
         rtn.Line( 58 );
         this.mthADDEMPLOYEE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // evtRoutine6 - #Button5.Click
   //
   function evtRoutine6( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button5.Click", 62 );

      //
      // EVTROUTINE Handling(#Button5.Click)
      //
      rtn.Line( 62 );
      {

         //
         // #com_owner.UpdateEmployee
         //
         rtn.Line( 64 );
         this.mthUPDATEEMPLOYEE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 66 );
      rtn.end();
   };

   //
   // mthGETEMPLOYEE - GetEmployee
   //
   COM_OWNER.mthGETEMPLOYEE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployee", 68 );

      //
      // DEFINE_COM Class(#JI_SM1.GetEmployee) Name(#GetEmp)
      //
      var GETEMP = rtn.createDataRequest( "GETEMP", "JI_SM1", "GETEMPLOYEE" );

      // ------------------------
      // -- Initialize #GETEMP --
      // ------------------------
      GETEMP.initialize();

      // ------------------------------------
      // -- Add Event Handlers for #GETEMP --
      // ------------------------------------
      GETEMP.addEventHandler( "COMPLETED", this, evtRoutine7 );
      GETEMP.addEventHandler( "FAILED", this, evtRoutine8 );

      //
      // MTHROUTINE Name(GetEmployee)
      //
      rtn.Line( 68 );
      {

         //
         // #GetEmp.ExecuteAsync Status(#io$sts) Employeedetails(#MyEmployee) Employeeid(#EMPNO)
         //
         rtn.Line( 75 );
         GETEMP.mthEXECUTEASYNC( { FLD: { "EMPNO": ref.EMPNO.get() } }, { FLD: { "IO$STS": ref[ "IO$STS" ], "EMPNO": ref.EMPNO, "SURNAME": ref.SURNAME, "GIVENAME": ref.GIVENAME } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 87 );
      rtn.end();

      //
      // evtRoutine7 - #GetEmp.Completed
      //
      function evtRoutine7( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmp.Completed", 77 );

         //
         // EVTROUTINE Handling(#GetEmp.Completed)
         //
         rtn.Line( 77 );
         {

            //
            // #sys_web.alert( #io$sts )
            //
            rtn.Line( 78 );
            Lansa.WEB().mthALERT( ref[ "IO$STS" ].get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 79 );
         rtn.end();
      }

      //
      // evtRoutine8 - #GetEmp.Failed
      //
      function evtRoutine8( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmp.Failed", 81 );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#GetEmp.Failed) Handled(#handled)
         //
         rtn.Line( 81 );
         {

            //
            // #sys_web.alert( 'failed' )
            //
            rtn.Line( 84 );
            Lansa.WEB().mthALERT( "failed" );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 85 );
         rtn.end();
      }
   };

   //
   // mthADDEMPLOYEE - AddEmployee
   //
   COM_OWNER.mthADDEMPLOYEE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddEmployee", 89 );

      //
      // DEFINE_COM Class(#JI_SM1.AddEmployee) Name(#AddEmp)
      //
      var ADDEMP = rtn.createDataRequest( "ADDEMP", "JI_SM1", "ADDEMPLOYEE" );

      // ------------------------
      // -- Initialize #ADDEMP --
      // ------------------------
      ADDEMP.initialize();

      // ------------------------------------
      // -- Add Event Handlers for #ADDEMP --
      // ------------------------------------
      ADDEMP.addEventHandler( "COMPLETED", this, evtRoutine9 );
      ADDEMP.addEventHandler( "FAILED", this, evtRoutine10 );

      //
      // MTHROUTINE Name(AddEmployee)
      //
      rtn.Line( 89 );
      {

         //
         // #AddEmp.ExecuteAsync Status(#io$sts) Employeedetails(#MyEmployee)
         //
         rtn.Line( 96 );
         ADDEMP.mthEXECUTEASYNC( { FLD: { "EMPNO": ref.EMPNO.get(), "SURNAME": ref.SURNAME.get(), "GIVENAME": ref.GIVENAME.get() } }, { FLD: { "IO$STS": ref[ "IO$STS" ] } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 107 );
      rtn.end();

      //
      // evtRoutine9 - #AddEmp.Completed
      //
      function evtRoutine9( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddEmp.Completed", 98 );

         //
         // EVTROUTINE Handling(#AddEmp.Completed)
         //
         rtn.Line( 98 );
         {

            //
            // #sys_web.alert( #io$sts )
            //
            rtn.Line( 99 );
            Lansa.WEB().mthALERT( ref[ "IO$STS" ].get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 100 );
         rtn.end();
      }

      //
      // evtRoutine10 - #AddEmp.Failed
      //
      function evtRoutine10( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#AddEmp.Failed", 102 );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#AddEmp.Failed) Handled(#handled)
         //
         rtn.Line( 102 );
         {

            //
            // #sys_web.alert( 'failed' )
            //
            rtn.Line( 104 );
            Lansa.WEB().mthALERT( "failed" );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 105 );
         rtn.end();
      }
   };

   //
   // mthUPDATEEMPLOYEE - UpdateEmployee
   //
   COM_OWNER.mthUPDATEEMPLOYEE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "UpdateEmployee", 109 );

      //
      // DEFINE_COM Class(#JI_SM1.UpdateEmployee) Name(#UpdateEmp)
      //
      var UPDATEEMP = rtn.createDataRequest( "UPDATEEMP", "JI_SM1", "UPDATEEMPLOYEE" );

      // ---------------------------
      // -- Initialize #UPDATEEMP --
      // ---------------------------
      UPDATEEMP.initialize();

      // ---------------------------------------
      // -- Add Event Handlers for #UPDATEEMP --
      // ---------------------------------------
      UPDATEEMP.addEventHandler( "COMPLETED", this, evtRoutine11 );
      UPDATEEMP.addEventHandler( "FAILED", this, evtRoutine12 );

      //
      // MTHROUTINE Name(UpdateEmployee)
      //
      rtn.Line( 109 );
      {

         //
         // #UpdateEmp.ExecuteAsync Status(#io$sts) Employeedetails(#MyEmployee)
         //
         rtn.Line( 116 );
         UPDATEEMP.mthEXECUTEASYNC( { FLD: { "EMPNO": ref.EMPNO.get(), "SURNAME": ref.SURNAME.get(), "GIVENAME": ref.GIVENAME.get() } }, { FLD: { "IO$STS": ref[ "IO$STS" ] } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 127 );
      rtn.end();

      //
      // evtRoutine11 - #UpdateEmp.Completed
      //
      function evtRoutine11( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#UpdateEmp.Completed", 118 );

         //
         // EVTROUTINE Handling(#UpdateEmp.Completed)
         //
         rtn.Line( 118 );
         {

            //
            // #sys_web.alert( #io$sts )
            //
            rtn.Line( 119 );
            Lansa.WEB().mthALERT( ref[ "IO$STS" ].get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 120 );
         rtn.end();
      }

      //
      // evtRoutine12 - #UpdateEmp.Failed
      //
      function evtRoutine12( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#UpdateEmp.Failed", 122 );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#UpdateEmp.Failed) Handled(#handled)
         //
         rtn.Line( 122 );
         {

            //
            // #sys_web.alert( 'failed' )
            //
            rtn.Line( 124 );
            Lansa.WEB().mthALERT( "failed" );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 125 );
         rtn.end();
      }
   };

   //
   // mthGETEMPLOYEES - GetEmployees
   //
   COM_OWNER.mthGETEMPLOYEES = function()
   {
      var list = this.LIST.JI_WP1, fld = this.FLD.JI_WP1, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployees", 129 );

      //
      // DEFINE_COM Class(#JI_SM1.GetEmployees) Name(#GetEmps)
      //
      var GETEMPS = rtn.createDataRequest( "GETEMPS", "JI_SM1", "GETEMPLOYEES" );

      // -------------------------
      // -- Initialize #GETEMPS --
      // -------------------------
      GETEMPS.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #GETEMPS --
      // -------------------------------------
      GETEMPS.addEventHandler( "COMPLETED", this, evtRoutine13 );
      GETEMPS.addEventHandler( "FAILED", this, evtRoutine14 );

      //
      // MTHROUTINE Name(GetEmployees)
      //
      rtn.Line( 129 );
      {

         //
         // #GetEmps.ExecuteAsync( #EmployeeList )
         //
         rtn.Line( 135 );
         GETEMPS.mthEXECUTEASYNC( {  }, { LIST: { "EMPLOYEES": list.EMPLOYEELIST } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 150 );
      rtn.end();

      //
      // evtRoutine13 - #GetEmps.Completed
      //
      function evtRoutine13( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps.Completed", 137 );

         //
         // EVTROUTINE Handling(#GetEmps.Completed)
         //
         rtn.Line( 137 );
         {

            //
            // SELECTLIST Named(#EmployeeList)
            //
            rtn.Line( 139 );
            for ( var i1 = 1; i1 <= list.EMPLOYEELIST.entryCount(); i1++ )
            {
               list.EMPLOYEELIST.getEntry( i1 );

               //
               // #std_count += 1
               //
               rtn.Line( 140 );
               fld.STD_COUNT.set( Lansa.add( fld.STD_COUNT.get(), 1 ) );

            //
            // ENDSELECT 
            //
            }

            //
            // #sys_web.alert( (#listcount.asstring + ' ' + #std_count.asstring) )
            //
            rtn.Line( 142 );
            Lansa.WEB().mthALERT( Lansa.cat( Lansa.cat( Lansa.Number.AsString( fld.LISTCOUNT.get() ), " " ), Lansa.Number.AsString( fld.STD_COUNT.get() ) ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 143 );
         rtn.end();
      }

      //
      // evtRoutine14 - #GetEmps.Failed
      //
      function evtRoutine14( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps.Failed", 145 );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#GetEmps.Failed) Handled(#handled)
         //
         rtn.Line( 145 );
         {

            //
            // #sys_web.alert( #std_count.asstring )
            //
            rtn.Line( 147 );
            Lansa.WEB().mthALERT( Lansa.Number.AsString( fld.STD_COUNT.get() ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 148 );
         rtn.end();
      }
   };

   //
   // mthGETEMPLOYEES2 - GetEmployees2
   //
   COM_OWNER.mthGETEMPLOYEES2 = function()
   {
      var fld = this.FLD.JI_WP1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployees2", 152 );

      //
      // DEFINE_COM Class(#JI_SM1.GetEmployees) Name(#GetEmps)
      //
      var GETEMPS = rtn.createDataRequest( "GETEMPS", "JI_SM1", "GETEMPLOYEES" );

      // -------------------------
      // -- Initialize #GETEMPS --
      // -------------------------
      GETEMPS.initialize();

      // -------------------------------------
      // -- Add Event Handlers for #GETEMPS --
      // -------------------------------------
      GETEMPS.addEventHandler( "COMPLETED", this, evtRoutine15 );
      GETEMPS.addEventHandler( "FAILED", this, evtRoutine16 );

      //
      // MTHROUTINE Name(GetEmployees2)
      //
      rtn.Line( 152 );
      {

         //
         // #GetEmps.ExecuteAsync( #EmployeeList2 )
         //
         rtn.Line( 158 );
         GETEMPS.mthEXECUTEASYNC( {  }, { LIST: { "EMPLOYEES": ref.EMPLOYEELIST2 } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 173 );
      rtn.end();

      //
      // evtRoutine15 - #GetEmps.Completed
      //
      function evtRoutine15( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps.Completed", 160 );

         //
         // EVTROUTINE Handling(#GetEmps.Completed)
         //
         rtn.Line( 160 );
         {

            //
            // SELECTLIST Named(#EmployeeList2)
            //
            rtn.Line( 162 );
            for ( var i1 = 1; i1 <= ref.EMPLOYEELIST2.entryCount(); i1++ )
            {
               ref.EMPLOYEELIST2.getEntry( i1 );

               //
               // #std_count += 1
               //
               rtn.Line( 163 );
               fld.STD_COUNT.set( Lansa.add( fld.STD_COUNT.get(), 1 ) );

            //
            // ENDSELECT 
            //
            }

            //
            // #sys_web.alert( ('Collection contains ' + #std_count.asstring) )
            //
            rtn.Line( 165 );
            Lansa.WEB().mthALERT( Lansa.cat( "Collection contains ", Lansa.Number.AsString( fld.STD_COUNT.get() ) ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 166 );
         rtn.end();
      }

      //
      // evtRoutine16 - #GetEmps.Failed
      //
      function evtRoutine16( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps.Failed", 168 );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#GetEmps.Failed) Handled(#handled)
         //
         rtn.Line( 168 );
         {

            //
            // #sys_web.alert( #std_count.asstring )
            //
            rtn.Line( 170 );
            Lansa.WEB().mthALERT( Lansa.Number.AsString( fld.STD_COUNT.get() ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 171 );
         rtn.end();
      }
   };

   //
   // mthGETIMAGE - GetImage
   //
   COM_OWNER.mthGETIMAGE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetImage", 175 );

      //
      // DEFINE_COM Class(#JI_SM1.DownloadImage) Name(#GetImage)
      //
      var GETIMAGE = rtn.createResourceRequest( "GETIMAGE", "JI_SM1", "DOWNLOADIMAGE" );

      // --------------------------
      // -- Initialize #GETIMAGE --
      // --------------------------
      GETIMAGE.initialize();

      //
      // MTHROUTINE Name(GetImage)
      //
      rtn.Line( 175 );
      {

         //
         // #GetImage.Execute Employeeid(#EMPNO) Status(#io$sts)
         //
         rtn.Line( 179 );
         GETIMAGE.mthEXECUTE( { FLD: { "EMPNO": ref.EMPNO.get(), "IO$STS": ref[ "IO$STS" ].get() } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 181 );
      rtn.end();
   };

   //
   // mthGOTO - Goto
   //
   COM_OWNER.mthGOTO = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Goto", 183 );

      //
      // DEFINE_COM Class(#JI_SM1.GotoHome) Name(#GoHome)
      //
      var GOHOME = rtn.createWebPageRequest( "GOHOME", "JI_SM1", "GOTOHOME" );

      // ------------------------
      // -- Initialize #GOHOME --
      // ------------------------
      GOHOME.initialize();

      //
      // MTHROUTINE Name(Goto)
      //
      rtn.Line( 183 );
      {

         //
         // #GoHome.Execute Employeeid(#EMPNO)
         //
         rtn.Line( 187 );
         GOHOME.mthEXECUTE( { FLD: { "EMPNO": ref.EMPNO.get() } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 189 );
      rtn.end();
   };

   //
   // mthTEST - Test
   //
   COM_OWNER.mthTEST = function()
   {
      var list = this.LIST.JI_WP1, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Test", 191 );

      //
      // DEFINE_COM Class(#JI_SM1.Test) Name(#test)
      //
      var TEST = rtn.createDataRequest( "TEST", "JI_SM1", "TEST" );

      // ----------------------
      // -- Initialize #TEST --
      // ----------------------
      TEST.initialize();

      //
      // MTHROUTINE Name(Test)
      //
      rtn.Line( 191 );
      {

         //
         // #test.Execute( #MyEmployee io$sts #EmployeeList )
         //
         rtn.Line( 195 );
         TEST.mthEXECUTE( { FLD: { "EMPNO": ref.EMPNO.get(), "SURNAME": ref.SURNAME.get(), "GIVENAME": ref.GIVENAME.get(), "IO$STS": "IO$STS" }, LIST: { "EMPLOYEES": list.EMPLOYEELIST } }, {  } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 197 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ---------------------------
   // -- IOdSTS Member Classes --
   // ---------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.IOdSTS.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.IOdSTS );
      };

      Lansa.createFieldClass( { co: Fields.IOdSTS.DataClass, an: "PRIM_FLD", fn: "IOdSTS" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.IOdSTS.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.IOdSTS.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.IOdSTS.VISUAL, an: "PRIM_EVEF", fn: "IOdSTS", cn: "Visual" } );
   }

   // --------------------------
   // -- EMPNO Member Classes --
   // --------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.EMPNO.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.EMPNO );
      };

      Lansa.createFieldClass( { co: Fields.EMPNO.DataClass, an: "PRIM_FLD", fn: "EMPNO" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.EMPNO.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.EMPNO.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.EMPNO.VISUAL, an: "PRIM_EVEF", fn: "EMPNO", cn: "Visual" } );
   }

   // ----------------------------
   // -- SURNAME Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.SURNAME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.SURNAME );
      };

      Lansa.createFieldClass( { co: Fields.SURNAME.DataClass, an: "PRIM_FLD", fn: "SURNAME" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.SURNAME.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.SURNAME.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setUsePicklist( false );
         this.setWidth( 419 );
      };

      Lansa.createFieldClass( { co: Fields.SURNAME.VISUALEDIT, an: "PRIM_EVEF", fn: "SURNAME", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- GIVENAME Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.GIVENAME.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.GIVENAME );
      };

      Lansa.createFieldClass( { co: Fields.GIVENAME.DataClass, an: "PRIM_FLD", fn: "GIVENAME" } );

      // ----------------
      // -- VISUALEDIT --
      // ----------------
      Fields.GIVENAME.VISUALEDIT = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.GIVENAME.DataClass() );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setComponentVersion( 1 );
         this.setHeight( 21 );
         this.setUsePicklist( false );
         this.setWidth( 419 );
      };

      Lansa.createFieldClass( { co: Fields.GIVENAME.VISUALEDIT, an: "PRIM_EVEF", fn: "GIVENAME", cn: "VisualEdit" } );
   }

   // -----------------------------
   // -- ADDRESS1 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.ADDRESS1.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.ADDRESS1 );
      };

      Lansa.createFieldClass( { co: Fields.ADDRESS1.DataClass, an: "PRIM_FLD", fn: "ADDRESS1" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.ADDRESS1.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.ADDRESS1.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.ADDRESS1.VISUAL, an: "PRIM_EVEF", fn: "ADDRESS1", cn: "Visual" } );
   }

   // -----------------------------
   // -- ADDRESS2 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.ADDRESS2.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.ADDRESS2 );
      };

      Lansa.createFieldClass( { co: Fields.ADDRESS2.DataClass, an: "PRIM_FLD", fn: "ADDRESS2" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.ADDRESS2.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.ADDRESS2.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.ADDRESS2.VISUAL, an: "PRIM_EVEF", fn: "ADDRESS2", cn: "Visual" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_PHBN", "PRIM_EVEF", "PRIM_ACOL", "PRIM_WEB.DataRequest", "PRIM_WEB.ResourceRequest", "PRIM_WEB.WebPageRequest" ]
});

//# sourceURL=ji_wp1.js
