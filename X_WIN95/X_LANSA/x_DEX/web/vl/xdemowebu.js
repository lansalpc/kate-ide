// -------------------------
// -- Web Page: XDEMOWEBU --
// -------------------------
LANSA.addComponent(
{
   id: "XDEMOWEBU", 
   nm: "xDemoWebUDCTree", 
   ot: "wp", 
   tp: "Web Page", 
   de: "UDC Tree (Prim_tree)", 
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

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XDEMOVALU:
      {
         nm: "XDEMOVALU",
         ft: "N",
         ln: 256,
         dc: 0,
         lb: "Generic Alphanu",
         h1: "Generic",
         h2: "Alphanumeric",
         h3: "Value",
         de: "Generic Alphanumeric Value",
         dv: "",
         ia: [ "FE", "LC" ]
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
         AddDepartments: 
         {
         },

         AddDepartment: 
         {
            ps: 
            {
               "Department":
               {
                  pt: "i"
               }
            }
         },

         AddEmployees: 
         {
            ps: 
            {
               "Department":
               {
                  pt: "i"
               },

               "ParentItem":
               {
                  pt: "i"
               }
            }
         },

         AddEmployee: 
         {
            ps: 
            {
               "Employee":
               {
                  pt: "i"
               },

               "ParentItem":
               {
                  pt: "i"
               }
            }
         },

         Sort: 
         {
            ps: 
            {
               "Key":
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
         this.addFields( "XDEMOWEBU", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#xDemoWebData) Name(#gData) Scope(*Application)
         //
         var GDATA = this.createApplicationReference( "GDATA", "XDEMO_30" );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Tree1Item1) Column(#Column1) Manage(#Tree) Parent(#TableLayout1) Row(#Row1)
         //
         var TREE1ITEM1 = this.createReference( "TREE1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#Sort) Parent(#TableLayout1) Row(#Row1) Alignment(TopRight) Sizing(None) Flow(Left) Margintop(4) Marginright(20)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TREE<#xDemoWebUDCTreeBaseItem>) Name(#Tree) Displayposition(2) Left(0) Parent(#COM_OWNER) Tabposition(2) Top(0) Height(800) Width(1200)
         //
         var TREE = this.createReference( "TREE", "PRIM_TREE" );

         //
         // DEFINE_COM Class(#xDemoWebDropDown) Name(#Sort) Height(25) Parent(#COM_OWNER) Width(210) Left(970) Top(4)
         //
         var SORT = this.createReference( "SORT", "XDEMO_25" );

         // -----------------------
         // -- Initialize #GDATA --
         // -----------------------
         if ( ( GDATA != null ) && ( GDATA.isInitialized() == false ) )
         {
            GDATA.initialize();
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

         // ----------------------
         // -- Initialize #ROW1 --
         // ----------------------
         ROW1.setDisplayPosition( 1 );
         ROW1.setParent( TABLELAYOUT1 );
         ROW1.initialize();

         // ----------------------------
         // -- Initialize #TREE1ITEM1 --
         // ----------------------------
         TREE1ITEM1.setColumn( COLUMN1 );
         TREE1ITEM1.setManage( TREE );
         TREE1ITEM1.setParent( TABLELAYOUT1 );
         TREE1ITEM1.setRow( ROW1 );
         TREE1ITEM1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( SORT );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.setAlignment( "TOPRIGHT" );
         LAYOUTITEM1.setSizing( "NONE" );
         LAYOUTITEM1.setFlow( "LEFT" );
         LAYOUTITEM1.setMarginTop( 4 );
         LAYOUTITEM1.setMarginRight( 20 );
         LAYOUTITEM1.initialize();

         // ----------------------
         // -- Initialize #TREE --
         // ----------------------
         TREE.setDisplayPosition( 2 );
         TREE.setLeft( 0 );
         TREE.setParent( this );
         TREE.setTabPosition( 2 );
         TREE.setTop( 0 );
         TREE.setHeight( 800 );
         TREE.setWidth( 1200 );
         TREE.initialize();

         // ----------------------
         // -- Initialize #SORT --
         // ----------------------
         SORT.setHeight( 25 );
         SORT.setParent( this );
         SORT.setWidth( 210 );
         SORT.setLeft( 970 );
         SORT.setTop( 4 );
         SORT.initialize();

         // -----------------------------------
         // -- Add Event Handlers for #GDATA --
         // -----------------------------------
         GDATA.addEventHandler( "PREPARED", this, evtRoutine2 );

         // ----------------------------------
         // -- Add Event Handlers for #SORT --
         // ----------------------------------
         SORT.addEventHandler( "ITEMGOTFOCUS", this, evtRoutine3 );

         // ------------------------------------------
         // -- Define the UDC information for #TREE --
         // ------------------------------------------
         TREE.addDesign( "XDEMO_27" );
         TREE.addListFields( {  } );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setLayoutManager( TABLELAYOUT1 );
         this.setTheme( Lansa.getTheme( "XDEMOTH_2" ) );

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
   // evtRoutine1 - #Com_owner.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.CreateInstance", 16 );

      //
      // EVTROUTINE Handling(#Com_owner.CreateInstance)
      //
      rtn.Line( 16 );
      {

         //
         // #Sort.Add( EMPNO "Sort by employee number" )
         //
         rtn.Line( 18 );
         ref.SORT.mthADD( "EMPNO", "Sort by employee number" );

         //
         // #Sort.Add( GIVENAME "Sort by given name" )
         //
         rtn.Line( 19 );
         ref.SORT.mthADD( "GIVENAME", "Sort by given name" );

         //
         // #Sort.Add( SURNAME "Sort by surname" )
         //
         rtn.Line( 20 );
         ref.SORT.mthADD( "SURNAME", "Sort by surname" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      rtn.end();
   };

   //
   // evtRoutine2 - #gData.Prepared
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#gData.Prepared", 24 );

      //
      // EVTROUTINE Handling(#gData.Prepared)
      //
      rtn.Line( 24 );
      {

         //
         // #Com_owner.AddDepartments
         //
         rtn.Line( 26 );
         this.mthADDDEPARTMENTS();

         //
         // #Com_owner.Sort( EMPNO )
         //
         rtn.Line( 28 );
         COM_OWNER.mthSORT.call( this, "EMPNO" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 30 );
      rtn.end();
   };

   //
   // mthADDDEPARTMENTS - AddDepartments
   //
   COM_OWNER.mthADDDEPARTMENTS = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddDepartments", 32 );

      //
      // MTHROUTINE Name(AddDepartments)
      //
      rtn.Line( 32 );
      {

         //
         // FOR Each(#Department) In(#gData.Departments)
         //
         rtn.Line( 34 );
         {
            var i1 = ref.GDATA.ref.getDEPARTMENTS().createIterator();

            while( i1.step() )
            {
               var DEPARTMENT = rtn.setref( "DEPARTMENT", i1.item() );

               //
               // #Com_owner.AddDepartment( #Department )
               //
               rtn.Line( 36 );
               COM_OWNER.mthADDDEPARTMENT.call( this, DEPARTMENT );

            //
            // ENDFOR 
            //
            rtn.Line( 38 );
            }

            i1.end();
            rtn.deleteReference( "DEPARTMENT" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 40 );
      rtn.end();
   };

   //
   // mthADDDEPARTMENT - AddDepartment
   //
   COM_OWNER.mthADDDEPARTMENT = function( parm_DEPARTMENT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddDepartment", 42 );

      //
      // DEFINE_MAP For(*Input) Class(#xDemoWebDataDepartment) Name(#Department) Pass(*by_reference)
      //
      var DEPARTMENT = rtn.createDynamicParameter( "DEPARTMENT" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_tree.TreeItem) Name(#Result) Pass(*by_reference)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      DEPARTMENT = parm_DEPARTMENT;

      //
      // MTHROUTINE Name(AddDepartment)
      //
      rtn.Line( 42 );
      {

         //
         // #Result <= #Tree.Add( #xDemoWebUDCTreeDepartmentItem )
         //
         rtn.Line( 46 );
         RESULT = rtn.setref( "RESULT", ref.TREE.mthADD( "XDEMO_28" ) );

         //
         // #Result.RelatedReference <= #Department
         //
         rtn.Line( 48 );
         RESULT.setRelatedReference( DEPARTMENT );

         //
         // #Com_owner.AddEmployees( #Department #Result )
         //
         rtn.Line( 50 );
         COM_OWNER.mthADDEMPLOYEES.call( this, DEPARTMENT, RESULT );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      return rtn.retRef( RESULT );
   };

   //
   // mthADDEMPLOYEES - AddEmployees
   //
   COM_OWNER.mthADDEMPLOYEES = function( parm_DEPARTMENT, parm_PARENTITEM )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "AddEmployees", 54 );

      //
      // DEFINE_MAP For(*Input) Class(#xDemoWebDataDepartment) Name(#Department) Pass(*by_reference)
      //
      var DEPARTMENT = rtn.createDynamicParameter( "DEPARTMENT" );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_tree.TreeItem) Name(#ParentItem) Pass(*by_reference)
      //
      var PARENTITEM = rtn.createDynamicParameter( "PARENTITEM" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      DEPARTMENT = parm_DEPARTMENT;
      PARENTITEM = parm_PARENTITEM;

      //
      // MTHROUTINE Name(AddEmployees)
      //
      rtn.Line( 54 );
      {

         //
         // FOR Each(#Employee) In(#Department.Employees)
         //
         rtn.Line( 58 );
         {
            var i1 = DEPARTMENT.getEMPLOYEES().createIterator();

            while( i1.step() )
            {
               var EMPLOYEE = rtn.setref( "EMPLOYEE", i1.item() );

               //
               // #Com_owner.AddEmployee( #Employee #ParentItem )
               //
               rtn.Line( 60 );
               COM_OWNER.mthADDEMPLOYEE.call( this, EMPLOYEE, PARENTITEM );

            //
            // ENDFOR 
            //
            rtn.Line( 62 );
            }

            i1.end();
            rtn.deleteReference( "EMPLOYEE" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 64 );
      rtn.end();
   };

   //
   // mthADDEMPLOYEE - AddEmployee
   //
   COM_OWNER.mthADDEMPLOYEE = function( parm_EMPLOYEE, parm_PARENTITEM )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddEmployee", 66 );

      //
      // DEFINE_MAP For(*Input) Class(#xDemoWebDataEmployee) Name(#Employee) Pass(*by_reference)
      //
      var EMPLOYEE = rtn.createDynamicParameter( "EMPLOYEE" );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_tree.TreeItem) Name(#ParentItem) Pass(*by_reference)
      //
      var PARENTITEM = rtn.createDynamicParameter( "PARENTITEM" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_tree.TreeItem) Name(#Result) Pass(*by_reference)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      EMPLOYEE = parm_EMPLOYEE;
      PARENTITEM = parm_PARENTITEM;

      //
      // MTHROUTINE Name(AddEmployee)
      //
      rtn.Line( 66 );
      {

         //
         // #Result <= #Tree.Add( #xDemoWebUDCTreeEmployeeItem )
         //
         rtn.Line( 71 );
         RESULT = rtn.setref( "RESULT", ref.TREE.mthADD( "XDEMO_29" ) );

         //
         // #Result.RelatedReference <= #Employee
         //
         rtn.Line( 73 );
         RESULT.setRelatedReference( EMPLOYEE );

         //
         // #Result.ParentItem <= #ParentItem
         //
         rtn.Line( 74 );
         RESULT.setParentItem( PARENTITEM );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 76 );
      return rtn.retRef( RESULT );
   };

   //
   // evtRoutine3 - #Sort.ItemGotFocus
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Sort.ItemGotFocus", 78 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var VALUE = parms.ref( "VALUE" );

      //
      // EVTROUTINE Handling(#Sort.ItemGotFocus) Value(#Value)
      //
      rtn.Line( 78 );
      {

         //
         // #Com_owner.Sort( #Value.AsNativeString )
         //
         rtn.Line( 80 );
         COM_OWNER.mthSORT.call( this, Lansa.String.AsNativeString( VALUE.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 82 );
      rtn.end();
   };

   //
   // mthSORT - Sort
   //
   COM_OWNER.mthSORT = function( parm_KEY )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Sort", 84 );

      //
      // DEFINE_MAP For(*Input) Class(#prim_alph) Name(#Key)
      //
      var KEY = rtn.createParameter( "KEY", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      KEY.set( parm_KEY );

      //
      // MTHROUTINE Name(Sort)
      //
      rtn.Line( 84 );
      {

         //
         // #Tree.Sort( #Key )
         //
         rtn.Line( 87 );
         ref.TREE.mthSORT( KEY.get() );

         //
         // #Sort.Find( #Key )
         //
         rtn.Line( 88 );
         ref.SORT.mthFIND( KEY.get() );

         //
         // SELECTLIST Named(#Tree)
         //
         rtn.Line( 90 );
         for ( var i1 = 1; i1 <= ref.TREE.entryCount(); i1++ )
         {
            ref.TREE.getEntry( i1 );

            //
            // (#Tree.CurrentItem.Design *As #xDemoWebUDCTreeBaseItem).UpdateName( #Key )
            //
            rtn.Line( 92 );
            Lansa.cast( ref.TREE.getCurrentItem().getDesign(), "XDEMO_27" ).mthUPDATENAME( KEY.get() );

         //
         // ENDSELECT 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 96 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ------------------------------
   // -- XDEMOVALU Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XDEMOVALU.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XDEMOVALU );
      };

      Lansa.createFieldClass( { co: Fields.XDEMOVALU.DataClass, an: "PRIM_FLD", fn: "XDEMOVALU" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XDEMO_30", "XDEMO_25", "XDEMOTH_2" ],
   rp: [ "PRIM_WEB", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_TREE", "PRIM_FLD" ],
   dc: [ "XDEMO_27" ]
});

//# sourceURL=xdemowebu.js
