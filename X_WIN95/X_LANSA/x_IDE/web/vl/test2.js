// ---------------------
// -- Web Page: TEST2 --
// ---------------------
LANSA.addComponent(
{
   id: "TEST2", 
   nm: "test2", 
   ot: "wp", 
   tp: "Web Page", 
   de: "test2", 
   tl: 14010000
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

   if ( ( Lansa.getCurrentLanguage() == "FRA" ) || ( Lansa.getCurrentLanguage() == "JPN" ) || ( Lansa.getCurrentLanguage() == "LLL" ) )
   {
      curLanguage = Lansa.getCurrentLanguage();
   }

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
         lb: { "ENG": "Text", "FRA": "Texte", "JPN": "Text", "LLL": "Text" }[ curLanguage ],
         h1: { "ENG": "Text", "FRA": "Texte", "JPN": "Text", "LLL": "Text" }[ curLanguage ],
         h2: " ",
         h3: " ",
         de: { "ENG": "Standard TEXT", "FRA": "Texte Standard", "JPN": "Standard TEXT", "LLL": "Standard TEXT" }[ curLanguage ],
         dv: "",
         ia: [ "LC" ]
      },
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "J",
         lb: { "ENG": "Entries .......", "FRA": "Entrées . . . .", "JPN": "Entries .......", "LLL": "Entries ......." }[ curLanguage ],
         h1: { "ENG": "Number", "FRA": "Nombre", "JPN": "Number", "LLL": "Number" }[ curLanguage ],
         h2: { "ENG": "of Entrys", "FRA": "d´Entrées", "JPN": "of Entrys", "LLL": "of Entrys" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "Number of entries in a browse list", "FRA": "Liste, nombre d´entrées ds liste BROWSE", "JPN": "Number of entries in a browse list", "LLL": "Number of entries in a browse list" }[ curLanguage ],
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      LISTENTRY:
      {
         nm: "LISTENTRY",
         ft: "P",
         ln: 7,
         dc: 0,
         ec: "3",
         lb: { "ENG": "List Entry.....", "FRA": "Entrée liste  .", "JPN": "List Entry.....", "LLL": "List Entry....." }[ curLanguage ],
         h1: { "ENG": "List", "FRA": "Entrée", "JPN": "List", "LLL": "List" }[ curLanguage ],
         h2: { "ENG": "Entry", "FRA": "Liste", "JPN": "Entry", "LLL": "Entry" }[ curLanguage ],
         h3: " ",
         de: { "ENG": "List entry control field", "FRA": "Liste, champ sélection d´1 entrée liste", "JPN": "List entry control field", "LLL": "List entry control field" }[ curLanguage ],
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
         this.addFields( "TEST2", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#TableLayout1)
         //
         var TABLELAYOUT1 = this.createReference( "TABLELAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column1) Displayposition(1) Parent(#TableLayout1)
         //
         var COLUMN1 = this.createReference( "COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column2) Displayposition(2) Parent(#TableLayout1) Width(3)
         //
         var COLUMN2 = this.createReference( "COLUMN2", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Column3) Displayposition(3) Parent(#TableLayout1)
         //
         var COLUMN3 = this.createReference( "COLUMN3", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1) Height(3)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row3) Displayposition(3) Parent(#TableLayout1)
         //
         var ROW3 = this.createReference( "ROW3", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(TopLeft) Column(#Column2) Flow(Down) Manage(#Label1) Parent(#TableLayout1) Row(#Row2)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Status :') Displayposition(1) Ellipses(Word) Height(480) Left(240) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Top(160) Width(720) Themedrawstyle('Title')
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

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
         COLUMN2.setWidth( 3 );
         COLUMN2.initialize();

         // -------------------------
         // -- Initialize #COLUMN3 --
         // -------------------------
         COLUMN3.setDisplayPosition( 3 );
         COLUMN3.setParent( TABLELAYOUT1 );
         COLUMN3.initialize();

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.setHeight( 3 );
         ROW2.initialize();

         // ----------------------
         // -- Initialize #ROW3 --
         // ----------------------
         ROW3.setDisplayPosition( 3 );
         ROW3.setParent( TABLELAYOUT1 );
         ROW3.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "TOPLEFT" );
         LAYOUTITEM1.setColumn( COLUMN2 );
         LAYOUTITEM1.setFlow( "DOWN" );
         LAYOUTITEM1.setManage( LABEL1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW2 );
         LAYOUTITEM1.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Status :" );
         LABEL1.setDisplayPosition( 1 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 480 );
         LABEL1.setLeft( 240 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 1 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 160 );
         LABEL1.setWidth( 720 );
         LABEL1.setThemeDrawStyle( "Title" );
         LABEL1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
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
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.TEST2, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 16 );

      //
      // DEFINE_COM Class(#prim_web.Json) Name(#output)
      //
      var OUTPUT = rtn.createReference( "OUTPUT", "PRIM_WEB", "Json" );

      //
      // DEFINE_COM Class(#prim_web.Json) Name(#input)
      //
      var INPUT = rtn.createReference( "INPUT", "PRIM_WEB", "Json" );

      //
      // DEFINE_COM Class(#prim_web.Jsonobject) Name(#json) Reference(*DYNAMIC)
      //
      var JSON = rtn.createDynamicReference( "JSON" );

      //
      // DEFINE_COM Class(#prim_web.JsonElement) Name(#saved) Reference(*DYNAMIC)
      //
      var SAVED = rtn.createDynamicReference( "SAVED" );

      //
      // DEFINE_COM Class(#prim_web.JsonArray) Name(#array) Reference(*DYNAMIC)
      //
      var ARRAY = rtn.createDynamicReference( "ARRAY" );

      //
      // DEFINE_COM Class(#prim_web.Jsonobject) Name(#entry) Reference(*DYNAMIC)
      //
      var ENTRY = rtn.createDynamicReference( "ENTRY" );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonArray) Name(#entryArray) Reference(*DYNAMIC)
      //
      var ENTRYARRAY = rtn.createDynamicReference( "ENTRYARRAY" );

      //
      // DEFINE_COM Class(#prim_web.JsonObject) Name(#entryArrayObject) Reference(*DYNAMIC)
      //
      var ENTRYARRAYOBJECT = rtn.createDynamicReference( "ENTRYARRAYOBJECT" );

      // ------------------------
      // -- Initialize #OUTPUT --
      // ------------------------
      OUTPUT.initialize();

      // -----------------------
      // -- Initialize #INPUT --
      // -----------------------
      INPUT.initialize();

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 16 );
      {

         //
         // #json <= #output.CreateRootObject
         //
         rtn.Line( 38 );
         JSON = rtn.setref( "JSON", OUTPUT.mthCREATEROOTOBJECT() );

         //
         // #std_text := 'Test'
         //
         rtn.Line( 41 );
         fld.STD_TEXT.set( "Test" );

         //
         // #json.InsertString Key('value') String(#STD_TEXT)
         //
         rtn.Line( 42 );
         JSON.mthINSERTSTRING( "value", fld.STD_TEXT.get() );

         //
         // #array <= #json.InsertArray( 'list' )
         //
         rtn.Line( 45 );
         ARRAY = rtn.setref( "ARRAY", JSON.mthINSERTARRAY( "list" ) );

         //
         // BEGIN_LOOP Using(#listcount) To(10)
         //
         rtn.Line( 48 );
         for( var i1 = 1, step1 = 1, to1 = 10; fld.LISTCOUNT.set( i1 ), ( ( ( step1 >= 0 ) && ( i1 <= to1 ) ) || ( ( step1 < 0 ) && ( i1 >= to1 ) ) ); i1 += step1 )
         {

            //
            // #entry <= #array.InsertObject
            //
            rtn.Line( 51 );
            ENTRY = rtn.setref( "ENTRY", ARRAY.mthINSERTOBJECT() );

            //
            // #entry.InsertNumber Key('entryNumber') Number(#listcount)
            //
            rtn.Line( 54 );
            ENTRY.mthINSERTNUMBER( "entryNumber", fld.LISTCOUNT.get() );

            //
            // #entry.InsertString Key('entryValue') String('test_' + #listcount.asstring)
            //
            rtn.Line( 55 );
            ENTRY.mthINSERTSTRING( "entryValue", Lansa.cat( "test_", Lansa.Number.AsString( fld.LISTCOUNT.get() ) ) );

            //
            // #entryArray <= #entry.InsertArray( 'entryArray' )
            //
            rtn.Line( 57 );
            ENTRYARRAY = rtn.setref( "ENTRYARRAY", ENTRY.mthINSERTARRAY( "entryArray" ) );

            //
            // BEGIN_LOOP Using(#LISTENTRY) To(10)
            //
            rtn.Line( 59 );
            for( var i2 = 1, step2 = 1, to2 = 10; fld.LISTENTRY.set( i2 ), ( ( ( step2 >= 0 ) && ( i2 <= to2 ) ) || ( ( step2 < 0 ) && ( i2 >= to2 ) ) ); i2 += step2 )
            {

               //
               // #entryArrayObject <= #entryArray.InsertObject
               //
               rtn.Line( 61 );
               ENTRYARRAYOBJECT = rtn.setref( "ENTRYARRAYOBJECT", ENTRYARRAY.mthINSERTOBJECT() );

               //
               // #entryArrayObject.InsertNumber Key('entryNumber') Number(#listcount)
               //
               rtn.Line( 63 );
               ENTRYARRAYOBJECT.mthINSERTNUMBER( "entryNumber", fld.LISTCOUNT.get() );

               //
               // #entryArrayObject.InsertString Key('entryValue') String('test_' + #listcount.asstring + ' ' + #LISTENTRY.asstring)
               //
               rtn.Line( 64 );
               ENTRYARRAYOBJECT.mthINSERTSTRING( "entryValue", Lansa.cat( Lansa.cat( Lansa.cat( "test_", Lansa.Number.AsString( fld.LISTCOUNT.get() ) ), " " ), Lansa.Number.AsString( fld.LISTENTRY.get() ) ) );

            //
            // END_LOOP 
            //
            }

         //
         // END_LOOP 
         //
         }

         //
         // #Label1.Caption := Created
         //
         rtn.Line( 70 );
         ref.LABEL1.setCaption( "CREATED" );

         //
         // #SYS_WEB.LocalStorage.Add Key(#COM_OWNER.ComponentClassName + '.json') Value(#output.text)
         //
         rtn.Line( 72 );
         Lansa.WEB().getLocalStorage().mthADD( Lansa.cat( this.getComponentClassName(), ".json" ), OUTPUT.getText() );

         //
         // #Label1.Caption := Reading
         //
         rtn.Line( 74 );
         ref.LABEL1.setCaption( "READING" );

         //
         // #STD_TEXT := #COM_OWNER.ComponentClassName + '.json'
         //
         rtn.Line( 76 );
         fld.STD_TEXT.set( Lansa.cat( this.getComponentClassName(), ".json" ) );

         //
         // #input := #SYS_WEB.LocalStorage<#STD_TEXT>
         //
         rtn.Line( 77 );
         INPUT.set( Lansa.WEB().getLocalStorage().get( fld.STD_TEXT.get() ).get() );

         //
         // #saved <= #input.RootItem
         //
         rtn.Line( 79 );
         SAVED = rtn.setref( "SAVED", INPUT.getRootItem() );

         //
         // #Label1.Caption := 'Item 5 is ' + #saved.Item<"list">.ItemAt<5>.item<"entryValue">.AsString
         //
         rtn.Line( 81 );
         ref.LABEL1.setCaption( Lansa.cat( "Item 5 is ", SAVED.getItem( "list" ).getItemAt( 5 ).getItem( "entryValue" ).mthASSTRING() ) );

         //
         // FOR Each(#Item) In(#saved.Item<"list">)
         //
         rtn.Line( 83 );
         {
            var i1 = SAVED.getItem( "list" ).createIterator();

            while( i1.step() )
            {
               var ITEM = rtn.setref( "ITEM", i1.item() );

            //
            // ENDFOR 
            //
            rtn.Line( 84 );
            }

            i1.end();
            rtn.deleteReference( "ITEM" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 86 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL" ],
   dp: [ "PRIM_WEB.Json", "PRIM_WEB.JsonObject", "PRIM_WEB.JsonElement", "PRIM_WEB.JsonArray" ]
});

//# sourceURL=test2.js
