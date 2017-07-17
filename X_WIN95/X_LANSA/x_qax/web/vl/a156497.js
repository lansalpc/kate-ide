// -----------------------
// -- Web Page: A156497 --
// -----------------------
LANSA.addComponent(
{
   id: "A156497", 
   ot: "wp", 
   tp: "Web Page", 
   de: "GROUP_BY and LIST passing", 
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
      LISTCOUNT1:
      {
         nm: "LISTCOUNT1",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: "Entries .......",
         h1: "Number",
         h2: "of Entrys",
         h3: " ",
         de: "Number of entries in a browse list",
         dv: 0,
         ia: [ "FE", "RB" ]
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
      LISTCOUNT2:
      {
         nm: "LISTCOUNT2",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: "Entries .......",
         h1: "Number",
         h2: "of Entrys",
         h3: " ",
         de: "Number of entries in a browse list",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      LISTCOUNT3:
      {
         nm: "LISTCOUNT3",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: "Entries .......",
         h1: "Number",
         h2: "of Entrys",
         h3: " ",
         de: "Number of entries in a browse list",
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
         GetEmployees1_1: 
         {
         },

         GetEmployees1_2: 
         {
         },

         GetEmployees1_3: 
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
         var fld = this.addFields( "A156497", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Caption('MAX') Displayposition(1) Left(16) Parent(#COM_OWNER) Tabposition(1) Top(24) Height(41) Width(137)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button2) Caption('40') Displayposition(3) Left(16) Parent(#COM_OWNER) Tabposition(3) Top(88) Height(41) Width(137)
         //
         var BUTTON2 = this.createReference( "BUTTON2", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button3) Caption('20') Displayposition(2) Left(16) Parent(#COM_OWNER) Tabposition(2) Top(152) Height(41) Width(137)
         //
         var BUTTON3 = this.createReference( "BUTTON3", "PRIM_PHBN" );

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setCaption( "MAX" );
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
         BUTTON2.setCaption( "40" );
         BUTTON2.setDisplayPosition( 3 );
         BUTTON2.setLeft( 16 );
         BUTTON2.setParent( this );
         BUTTON2.setTabPosition( 3 );
         BUTTON2.setTop( 88 );
         BUTTON2.setHeight( 41 );
         BUTTON2.setWidth( 137 );
         BUTTON2.initialize();

         // -------------------------
         // -- Initialize #BUTTON3 --
         // -------------------------
         BUTTON3.setCaption( "20" );
         BUTTON3.setDisplayPosition( 2 );
         BUTTON3.setLeft( 16 );
         BUTTON3.setParent( this );
         BUTTON3.setTabPosition( 2 );
         BUTTON3.setTop( 152 );
         BUTTON3.setHeight( 41 );
         BUTTON3.setWidth( 137 );
         BUTTON3.initialize();

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON1 --
         // -------------------------------------
         BUTTON1.addEventHandler( "CLICK", this, evtRoutine1 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON2 --
         // -------------------------------------
         BUTTON2.addEventHandler( "CLICK", this, evtRoutine2 );

         // -------------------------------------
         // -- Add Event Handlers for #BUTTON3 --
         // -------------------------------------
         BUTTON3.addEventHandler( "CLICK", this, evtRoutine3 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "A156497" );

         //
         // DEF_LIST Name(#Employees1) Fields(#Empno #Surname #Givename) Counter(#listcount1) Type(*working) Entrys(*MAX)
         //
         list.EMPLOYEES1 = Lansa.createList( { "EMPNO": fld.EMPNO, "SURNAME": fld.SURNAME, "GIVENAME": fld.GIVENAME }, fld.LISTCOUNT1 );

         //
         // DEF_LIST Name(#Employees2) Fields(#Empno #Surname #Givename) Counter(#listcount2) Type(*working) Entrys(40)
         //
         list.EMPLOYEES2 = Lansa.createList( { "EMPNO": fld.EMPNO, "SURNAME": fld.SURNAME, "GIVENAME": fld.GIVENAME }, fld.LISTCOUNT2 );

         //
         // DEF_LIST Name(#Employees3) Fields(#Empno #Surname #Givename) Counter(#listcount3) Type(*working) Entrys(20)
         //
         list.EMPLOYEES3 = Lansa.createList( { "EMPNO": fld.EMPNO, "SURNAME": fld.SURNAME, "GIVENAME": fld.GIVENAME }, fld.LISTCOUNT3 );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #Button1.Click
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button1.Click", 17 );

      //
      // EVTROUTINE Handling(#Button1.Click)
      //
      rtn.Line( 17 );
      {

         //
         // #com_owner.GetEmployees1_1
         //
         rtn.Line( 19 );
         this.mthGETEMPLOYEES1_1();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Button2.Click
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button2.Click", 22 );

      //
      // EVTROUTINE Handling(#Button2.Click)
      //
      rtn.Line( 22 );
      {

         //
         // #com_owner.GetEmployees1_2
         //
         rtn.Line( 24 );
         this.mthGETEMPLOYEES1_2();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Button3.Click
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Button3.Click", 28 );

      //
      // EVTROUTINE Handling(#Button3.Click)
      //
      rtn.Line( 28 );
      {

         //
         // #com_owner.GetEmployees1_3
         //
         rtn.Line( 30 );
         this.mthGETEMPLOYEES1_3();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      rtn.end();
   };

   //
   // mthGETEMPLOYEES1_1 - GetEmployees1_1
   //
   COM_OWNER.mthGETEMPLOYEES1_1 = function()
   {
      var list = this.LIST.A156497, fld = this.FLD.A156497, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployees1_1", 34 );

      //
      // DEFINE_COM Class(#S156497.GetEmployees1) Name(#GetEmps1)
      //
      var GETEMPS1 = rtn.createDataRequest( "GETEMPS1", "S156497", "GETEMPLOYEES1" );

      // --------------------------
      // -- Initialize #GETEMPS1 --
      // --------------------------
      GETEMPS1.initialize();

      // --------------------------------------
      // -- Add Event Handlers for #GETEMPS1 --
      // --------------------------------------
      GETEMPS1.addEventHandler( "COMPLETED", this, evtRoutine4 );

      //
      // MTHROUTINE Name(GetEmployees1_1)
      //
      rtn.Line( 34 );
      {

         //
         // CLR_LIST Named(#Employees1)
         //
         rtn.Line( 39 );
         list.EMPLOYEES1.clearList();

         //
         // #GetEmps1.ExecuteAsync( #Employees1 )
         //
         rtn.Line( 42 );
         GETEMPS1.mthEXECUTEASYNC( {  }, { LIST: { "EMPLOYEES1": list.EMPLOYEES1 } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      rtn.end();

      //
      // evtRoutine4 - #GetEmps1.Completed
      //
      function evtRoutine4( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps1.Completed", 44 );

         //
         // EVTROUTINE Handling(#GetEmps1.Completed)
         //
         rtn.Line( 44 );
         {

            //
            // #std_count := 0
            //
            rtn.Line( 45 );
            fld.STD_COUNT.set( 0 );

            //
            // SELECTLIST Named(#Employees1)
            //
            rtn.Line( 46 );
            for ( var i1 = 1; i1 <= list.EMPLOYEES1.entryCount(); i1++ )
            {
               list.EMPLOYEES1.getEntry( i1 );

               //
               // #std_count += 1
               //
               rtn.Line( 47 );
               fld.STD_COUNT.set( Lansa.add( fld.STD_COUNT.get(), 1 ) );

            //
            // ENDSELECT 
            //
            }

            //
            // #sys_web.alert( (#listcount1.asstring + ' ' + #std_count.asstring) )
            //
            rtn.Line( 49 );
            Lansa.WEB().mthALERT( Lansa.cat( Lansa.cat( Lansa.Number.AsString( fld.LISTCOUNT1.get() ), " " ), Lansa.Number.AsString( fld.STD_COUNT.get() ) ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 50 );
         rtn.end();
      }
   };

   //
   // mthGETEMPLOYEES1_2 - GetEmployees1_2
   //
   COM_OWNER.mthGETEMPLOYEES1_2 = function()
   {
      var list = this.LIST.A156497, fld = this.FLD.A156497, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployees1_2", 55 );

      //
      // DEFINE_COM Class(#S156497.GetEmployees2) Name(#GetEmps2)
      //
      var GETEMPS2 = rtn.createDataRequest( "GETEMPS2", "S156497", "GETEMPLOYEES2" );

      // --------------------------
      // -- Initialize #GETEMPS2 --
      // --------------------------
      GETEMPS2.initialize();

      // --------------------------------------
      // -- Add Event Handlers for #GETEMPS2 --
      // --------------------------------------
      GETEMPS2.addEventHandler( "COMPLETED", this, evtRoutine5 );

      //
      // MTHROUTINE Name(GetEmployees1_2)
      //
      rtn.Line( 55 );
      {

         //
         // CLR_LIST Named(#Employees1)
         //
         rtn.Line( 60 );
         list.EMPLOYEES1.clearList();

         //
         // #GetEmps2.ExecuteAsync( #Employees1 )
         //
         rtn.Line( 63 );
         GETEMPS2.mthEXECUTEASYNC( {  }, { LIST: { "EMPLOYEES2": list.EMPLOYEES1 } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      rtn.end();

      //
      // evtRoutine5 - #GetEmps2.Completed
      //
      function evtRoutine5( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps2.Completed", 65 );

         //
         // EVTROUTINE Handling(#GetEmps2.Completed)
         //
         rtn.Line( 65 );
         {

            //
            // #std_count := 0
            //
            rtn.Line( 66 );
            fld.STD_COUNT.set( 0 );

            //
            // SELECTLIST Named(#Employees1)
            //
            rtn.Line( 68 );
            for ( var i1 = 1; i1 <= list.EMPLOYEES1.entryCount(); i1++ )
            {
               list.EMPLOYEES1.getEntry( i1 );

               //
               // #std_count += 1
               //
               rtn.Line( 69 );
               fld.STD_COUNT.set( Lansa.add( fld.STD_COUNT.get(), 1 ) );

            //
            // ENDSELECT 
            //
            }

            //
            // #sys_web.alert( (#listcount1.asstring + ' ' + #std_count.asstring) )
            //
            rtn.Line( 72 );
            Lansa.WEB().mthALERT( Lansa.cat( Lansa.cat( Lansa.Number.AsString( fld.LISTCOUNT1.get() ), " " ), Lansa.Number.AsString( fld.STD_COUNT.get() ) ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 74 );
         rtn.end();
      }
   };

   //
   // mthGETEMPLOYEES1_3 - GetEmployees1_3
   //
   COM_OWNER.mthGETEMPLOYEES1_3 = function()
   {
      var list = this.LIST.A156497, fld = this.FLD.A156497, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetEmployees1_3", 79 );

      //
      // DEFINE_COM Class(#S156497.GetEmployees3) Name(#GetEmps3)
      //
      var GETEMPS3 = rtn.createDataRequest( "GETEMPS3", "S156497", "GETEMPLOYEES3" );

      // --------------------------
      // -- Initialize #GETEMPS3 --
      // --------------------------
      GETEMPS3.initialize();

      // --------------------------------------
      // -- Add Event Handlers for #GETEMPS3 --
      // --------------------------------------
      GETEMPS3.addEventHandler( "COMPLETED", this, evtRoutine6 );

      //
      // MTHROUTINE Name(GetEmployees1_3)
      //
      rtn.Line( 79 );
      {

         //
         // CLR_LIST Named(#Employees1)
         //
         rtn.Line( 84 );
         list.EMPLOYEES1.clearList();

         //
         // #GetEmps3.ExecuteAsync( #Employees1 )
         //
         rtn.Line( 87 );
         GETEMPS3.mthEXECUTEASYNC( {  }, { LIST: { "EMPLOYEES3": list.EMPLOYEES1 } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 100 );
      rtn.end();

      //
      // evtRoutine6 - #GetEmps3.Completed
      //
      function evtRoutine6( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetEmps3.Completed", 89 );

         //
         // EVTROUTINE Handling(#GetEmps3.Completed)
         //
         rtn.Line( 89 );
         {

            //
            // #std_count := 0
            //
            rtn.Line( 91 );
            fld.STD_COUNT.set( 0 );

            //
            // SELECTLIST Named(#Employees1)
            //
            rtn.Line( 92 );
            for ( var i1 = 1; i1 <= list.EMPLOYEES1.entryCount(); i1++ )
            {
               list.EMPLOYEES1.getEntry( i1 );

               //
               // #std_count += 1
               //
               rtn.Line( 93 );
               fld.STD_COUNT.set( Lansa.add( fld.STD_COUNT.get(), 1 ) );

            //
            // ENDSELECT 
            //
            }

            //
            // #sys_web.alert( (#listcount1.asstring + ' ' + #std_count.asstring) )
            //
            rtn.Line( 96 );
            Lansa.WEB().mthALERT( Lansa.cat( Lansa.cat( Lansa.Number.AsString( fld.LISTCOUNT1.get() ), " " ), Lansa.Number.AsString( fld.STD_COUNT.get() ) ) );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 98 );
         rtn.end();
      }
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_PHBN", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=a156497.js
