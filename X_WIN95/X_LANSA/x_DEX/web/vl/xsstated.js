// -----------------------------
// -- Reusable Part: XSSTATED --
// -----------------------------
LANSA.addComponent(
{
   id: "XSSTATED", 
   nm: "XSStateDropDown", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "State Dropdown", 
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
      XSSTATEID:
      {
         nm: "XSSTATEID",
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
      LISTCOUNT:
      {
         nm: "LISTCOUNT",
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
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         pCurrentValue: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         HighlightSelection: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         StateUpdated: 
         {
            ps: 
            {
               "StateID":
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
         var fld = this.addFields( "XSSTATED", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#StatesItem1) Alignment(TopLeft) Column(#Column1) Manage(#States) Parent(#TableLayout1) Row(#Row1)
         //
         var STATESITEM1 = this.createReference( "STATESITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DropDown) Name(#States) Columnheaderheight(0) Columnlines(False) Displayposition(1) Left(0) Parent(#COM_OWNER) Rowlines(False) Showselection(False) Tabposition(1) Top(0) Dropdownstyle(DropDown) Width(489) Rowheight(25) Height(21)
         //
         var STATES = this.createReference( "STATES", "PRIM_LIST", "DropDown" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#DropDownColumn1) Columnresize(False) Columnunits(Proportion) Columnwidth(1) Displayposition(1) Parent(#States) Source(#XSStateID)
         //
         var DROPDOWNCOLUMN1 = this.createReference( "DROPDOWNCOLUMN1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#XSStateID) Name(#SelectedState)
         //
         var SELECTEDSTATE = this.createFieldReference( "SELECTEDSTATE", Fields.XSSTATEID.DataClass );

         //
         // DEFINE_COM Class(#XSServer.LoadStates) Name(#LoadStates)
         //
         var LOADSTATES = this.createDataRequest( "LOADSTATES", "XSSERVER", "LOADSTATES" );

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

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // -----------------------------
         // -- Initialize #STATESITEM1 --
         // -----------------------------
         STATESITEM1.setAlignment( "TOPLEFT" );
         STATESITEM1.setColumn( COLUMN1 );
         STATESITEM1.setManage( STATES );
         STATESITEM1.setParent( TABLELAYOUT1 );
         STATESITEM1.setRow( ROW1 );
         STATESITEM1.initialize();

         // ------------------------
         // -- Initialize #STATES --
         // ------------------------
         STATES.setColumnHeaderHeight( 0 );
         STATES.setColumnLines( false );
         STATES.setDisplayPosition( 1 );
         STATES.setLeft( 0 );
         STATES.setParent( this );
         STATES.setRowLines( false );
         STATES.setShowSelection( false );
         STATES.setTabPosition( 1 );
         STATES.setTop( 0 );
         STATES.setDropDownStyle( "DROPDOWN" );
         STATES.setWidth( 489 );
         STATES.setRowHeight( 25 );
         STATES.setHeight( 21 );
         STATES.initialize();

         // ---------------------------------
         // -- Initialize #DROPDOWNCOLUMN1 --
         // ---------------------------------
         DROPDOWNCOLUMN1.setColumnResize( false );
         DROPDOWNCOLUMN1.setColumnUnits( "PROPORTION" );
         DROPDOWNCOLUMN1.setColumnWidth( 1 );
         DROPDOWNCOLUMN1.setDisplayPosition( 1 );
         DROPDOWNCOLUMN1.setParent( STATES );
         DROPDOWNCOLUMN1.setSource( fld.XSSTATEID );
         DROPDOWNCOLUMN1.initialize();

         // -------------------------------
         // -- Initialize #SELECTEDSTATE --
         // -------------------------------
         SELECTEDSTATE.applyDefault();
         SELECTEDSTATE.initialize();

         // ----------------------------
         // -- Initialize #LOADSTATES --
         // ----------------------------
         LOADSTATES.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #STATES --
         // ------------------------------------
         STATES.addEventHandler( "CHANGED", this, evtRoutine3 );

         // ----------------------------------------
         // -- Add Event Handlers for #LOADSTATES --
         // ----------------------------------------
         LOADSTATES.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 21 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 489 );
         this.setLayoutManager( TABLELAYOUT1 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "INITIALIZE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "XSSTATED" );

         //
         // DEF_LIST Name(#StateList) Fields(#xsstateid) Counter(#listcount) Type(*Working) Entrys(100)
         //
         list.STATELIST = Lansa.createList( { "XSSTATEID": fld.XSSTATEID }, fld.LISTCOUNT );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthGETCURRENT - GetCurrent
   //
   COM_OWNER.mthGETCURRENT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetCurrent", 23 );

      //
      // DEFINE_MAP For(*output) Class(#XSStateID) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSSTATEID.DataClass );

      //
      // PTYROUTINE Name(GetCurrent)
      //
      rtn.Line( 23 );
      {

         //
         // #SelectedState #value := #States.value
         //
         rtn.Line( 26 );
         ref.SELECTEDSTATE.set( ref.STATES.getValue() );
         VALUE.set( ref.STATES.getValue() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      return rtn.retVal( VALUE.get() );
   };

   //
   // mthSETCURRENT - SetCurrent
   //
   COM_OWNER.mthSETCURRENT = function( parm_VALUE )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCurrent", 30 );

      //
      // DEFINE_MAP For(*input) Class(#XSStateID) Name(#value)
      //
      var VALUE = rtn.createFieldParameter( "VALUE", Fields.XSSTATEID.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      VALUE.set( parm_VALUE );

      //
      // PTYROUTINE Name(SetCurrent)
      //
      rtn.Line( 30 );
      {

         //
         // #SelectedState #States.value := #Value
         //
         rtn.Line( 33 );
         ref.SELECTEDSTATE.set( VALUE.get() );
         ref.STATES.setValue( VALUE.get() );

         //
         // #Com_owner.HighlightSelection
         //
         rtn.Line( 35 );
         this.mthHIGHLIGHTSELECTION();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 37 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Com_owner.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var list = this.LIST.XSSTATED, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.Initialize", 39 );

      //
      // EVTROUTINE Handling(#Com_owner.Initialize)
      //
      rtn.Line( 39 );
      {

         //
         // #LoadStates.ExecuteAsync( #StateList )
         //
         rtn.Line( 41 );
         ref.LOADSTATES.mthEXECUTEASYNC( {  }, { LIST: { "STATELIST": list.STATELIST } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // evtRoutine2 - #LoadStates.completed
   //
   function evtRoutine2( sender, parms )
   {
      var list = this.LIST.XSSTATED, fld = this.FLD.XSSTATED, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#LoadStates.completed", 45 );

      //
      // EVTROUTINE Handling(#LoadStates.completed)
      //
      rtn.Line( 45 );
      {

         //
         // #XSStateId := *blanks
         //
         rtn.Line( 48 );
         fld.XSSTATEID.set( "" );

         //
         // ADD_ENTRY To_List(#States)
         //
         rtn.Line( 49 );
         ref.STATES.addEntry();

         //
         // SELECTLIST Named(#StateList)
         //
         rtn.Line( 51 );
         for ( var i1 = 1; i1 <= list.STATELIST.entryCount(); i1++ )
         {
            list.STATELIST.getEntry( i1 );

            //
            // ADD_ENTRY To_List(#States)
            //
            rtn.Line( 53 );
            ref.STATES.addEntry();

         //
         // ENDSELECT 
         //
         }

         //
         // #Com_owner.HighlightSelection
         //
         rtn.Line( 57 );
         this.mthHIGHLIGHTSELECTION();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

   //
   // mthHIGHLIGHTSELECTION - HighlightSelection
   //
   COM_OWNER.mthHIGHLIGHTSELECTION = function()
   {
      var fld = this.FLD.XSSTATED, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "HighlightSelection", 61 );

      //
      // MTHROUTINE Name(HighlightSelection)
      //
      rtn.Line( 61 );
      {

         //
         // SELECTLIST Named(#States)
         //
         rtn.Line( 63 );
         for ( var i1 = 1; i1 <= ref.STATES.entryCount(); i1++ )
         {
            ref.STATES.getEntry( i1 );

            //
            // CONTINUE If(#SelectedState.uppercase <> #XSStateID.uppercase)
            //
            rtn.Line( 65 );
            if ( Lansa.String.ne( Lansa.String.UpperCase( ref.SELECTEDSTATE.get() ), Lansa.String.UpperCase( fld.XSSTATEID.get() ) ) )
            {
               continue;
            }

            //
            // #States.CurrentItem.Selected := true
            //
            rtn.Line( 67 );
            ref.STATES.getCurrentItem().setSelected( true );

            //
            // LEAVE 
            //
            rtn.Line( 69 );
            break;

         //
         // ENDSELECT 
         //
         }

         //
         // #XSStateID := #SelectedState
         //
         rtn.Line( 74 );
         fld.XSSTATEID.set( ref.SELECTEDSTATE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      rtn.end();
   };

   //
   // evtRoutine3 - #States.Changed
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#States.Changed", 78 );

      //
      // EVTROUTINE Handling(#States.Changed)
      //
      rtn.Line( 78 );
      {

         //
         // IF (#States.value.CurChars = 1)
         //
         rtn.Line( 81 );
         if ( Lansa.Number.eq( Lansa.String.CurChars( ref.STATES.getValue() ), 1 ) )
         {

            //
            // #States.value := #States.value.UpperCase
            //
            rtn.Line( 83 );
            ref.STATES.setValue( Lansa.String.UpperCase( ref.STATES.getValue() ) );

         //
         // ENDIF 
         //
         }

         //
         // #com_owner.pCurrentValue := #States.value
         //
         rtn.Line( 87 );
         this.setPCURRENTVALUE( ref.STATES.getValue() );

         //
         // SIGNAL Event(StateUpdated) Stateid(#com_owner.pCurrentValue)
         //
         rtn.Line( 89 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "STATEID", Fields.XSSTATEID.DataClass );

            evtParms.ref( "STATEID" ).set( this.getPCURRENTVALUE() );

            this.fireEvent( "STATEUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 91 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(pCurrentValue) Get(GetCurrent) Set(SetCurrent)
   //
   COM_OWNER.getPCURRENTVALUE = function()
   {
      return this.mthGETCURRENT();
   };

   COM_OWNER.setPCURRENTVALUE = function( value )
   {
      this.mthSETCURRENT(value);
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ------------------------------
   // -- XSSTATEID Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSSTATEID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSSTATEID );
      };

      Lansa.createFieldClass( { co: Fields.XSSTATEID.DataClass, an: "PRIM_FLD", fn: "XSSTATEID" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LIST.DropDown", "PRIM_LIST.String", "PRIM_FLD", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xsstated.js
