// -----------------------------
// -- Reusable Part: ZMYMESSA --
// -----------------------------
LANSA.addComponent(
{
   id: "ZMYMESSA", 
   nm: "zmyMessageManager", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "jw message manager", 
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

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      STD_COUNT:
      {
         nm: "STD_COUNT",
         ft: "P",
         ln: 7,
         dc: 0,
         lb: "Standard count",
         h1: "Standard",
         h2: "count",
         h3: " ",
         de: "Standard count",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      STD_STRNG:
      {
         nm: "STD_STRNG",
         ft: "VC",
         ln: 512,
         dc: 0,
         lb: "Std string fld",
         h1: "Standard",
         h2: "String",
         h3: "Field",
         de: "Standard string field",
         dv: "",
         ia: [ "FE" ]
      },
      STD_DTIMX:
      {
         nm: "STD_DTIMX",
         ft: "DT",
         ln: 26,
         dc: 0,
         lb: "Std RDMLX Datim",
         h1: "Standard",
         h2: "RDMLX",
         h3: "Datetime",
         de: "Standard RDMLX Datetime",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "ISO", "SUTC" ]
      },
      STD_CHAR:
      {
         nm: "STD_CHAR",
         ft: "C",
         ln: 10,
         dc: 0,
         lb: "Std fixed char",
         h1: "Standard",
         h2: "fixed",
         h3: "character",
         de: "Standard fixed character",
         dv: "",
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
      rm: [ "dt" ], 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         messageThumbnail: 
         {
            da: "na"
         },

         CurrentMessageType: 
         {
            da: "rw"
         },

         Messagecount: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ClearMessages: 
         {
         },

         getMessages: 
         {
            ps: 
            {
               "SystemMessageCount":
               {
                  pt: "o"
               }
            }
         },

         AddMessage: 
         {
            ps: 
            {
               "messageTExt":
               {
                  pt: "i"
               },

               "messageType":
               {
                  pt: "i"
               }
            }
         },

         Show: 
         {
         },

         SetMessageAttributes: 
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
         var fld = this.addFields( "ZMYMESSA", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Column(#Column1) Manage(#List1) Parent(#TableLayout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LIST) Name(#List1) Displayposition(1) Left(0) Parent(#COM_OWNER) Tabposition(1) Top(0) Width(1049) Columnlines(False) Rowlines(False) Columnheaderheight(0) Selectionstyle(SameLevel) Rowheight(35) Height(273)
         //
         var LIST1 = this.createReference( "LIST1", "PRIM_LIST" );

         //
         // DEFINE_COM Class(#PRIM_LIST.String) Name(#ColumnSTD_STRNG1) Displayposition(2) Parent(#List1) Source(#STD_STRNG) Columnwidth(500) Columncaptiontype(Caption) Columncaptionalign(Left) Columnunits(Proportion)
         //
         var COLUMNSTD_STRNG1 = this.createReference( "COLUMNSTD_STRNG1", "PRIM_LIST", "String" );

         //
         // DEFINE_COM Class(#PRIM_LIST.DateTime) Name(#ColumnSTD_DTIMX1) Displayposition(3) Parent(#List1) Source(#STD_DTIMX) Columncaptiontype(Caption) Columnwidth(180) Showdatebutton(False) Visible(False)
         //
         var COLUMNSTD_DTIMX1 = this.createReference( "COLUMNSTD_DTIMX1", "PRIM_LIST", "DateTime" );

         //
         // DEFINE_COM Class(#PRIM_LIST.Image) Name(#ColumnBOSTESMES1) Displayposition(1) Parent(#List1) Columnwidth(40)
         //
         var COLUMNBOSTESMES1 = this.createReference( "COLUMNBOSTESMES1", "PRIM_LIST", "Image" );

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
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( LIST1 );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // -----------------------
         // -- Initialize #LIST1 --
         // -----------------------
         LIST1.setDisplayPosition( 1 );
         LIST1.setLeft( 0 );
         LIST1.setParent( this );
         LIST1.setTabPosition( 1 );
         LIST1.setTop( 0 );
         LIST1.setWidth( 1049 );
         LIST1.setColumnLines( false );
         LIST1.setRowLines( false );
         LIST1.setColumnHeaderHeight( 0 );
         LIST1.setSelectionStyle( "SAMELEVEL" );
         LIST1.setRowHeight( 35 );
         LIST1.setHeight( 273 );
         LIST1.initialize();

         // ----------------------------------
         // -- Initialize #COLUMNSTD_STRNG1 --
         // ----------------------------------
         COLUMNSTD_STRNG1.setDisplayPosition( 2 );
         COLUMNSTD_STRNG1.setParent( LIST1 );
         COLUMNSTD_STRNG1.setSource( fld.STD_STRNG );
         COLUMNSTD_STRNG1.setColumnWidth( 500 );
         COLUMNSTD_STRNG1.setColumnCaptionType( "CAPTION" );
         COLUMNSTD_STRNG1.setColumnCaptionAlign( "LEFT" );
         COLUMNSTD_STRNG1.setColumnUnits( "PROPORTION" );
         COLUMNSTD_STRNG1.initialize();

         // ----------------------------------
         // -- Initialize #COLUMNSTD_DTIMX1 --
         // ----------------------------------
         COLUMNSTD_DTIMX1.setDisplayPosition( 3 );
         COLUMNSTD_DTIMX1.setParent( LIST1 );
         COLUMNSTD_DTIMX1.setSource( fld.STD_DTIMX );
         COLUMNSTD_DTIMX1.setColumnCaptionType( "CAPTION" );
         COLUMNSTD_DTIMX1.setColumnWidth( 180 );
         COLUMNSTD_DTIMX1.setShowDateButton( false );
         COLUMNSTD_DTIMX1.setVisible( false );
         COLUMNSTD_DTIMX1.initialize();

         // ----------------------------------
         // -- Initialize #COLUMNBOSTESMES1 --
         // ----------------------------------
         COLUMNBOSTESMES1.setDisplayPosition( 1 );
         COLUMNBOSTESMES1.setParent( LIST1 );
         COLUMNBOSTESMES1.setColumnWidth( 40 );
         COLUMNBOSTESMES1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 273 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 1049 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setThemeDrawStyle( "bostesBootstrap" );

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
   // mthGETTHUMBNAIL - GetThumbnail
   //
   COM_OWNER.mthGETTHUMBNAIL = function()
   {
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetThumbnail", 19 );

      //
      // DEFINE_MAP For(*output) Class(#prim_bmp) Name(#Property) Pass(*By_reference)
      //
      var PROPERTY = rtn.createDynamicParameter( "PROPERTY" );

      //
      // PTYROUTINE Name(GetThumbnail)
      //
      rtn.Line( 19 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      return rtn.retRef( PROPERTY );
   };

   //
   // mthGETMESSAGECOUNT - getMessageCount
   //
   COM_OWNER.mthGETMESSAGECOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "getMessageCount", 26 );

      //
      // DEFINE_MAP For(*output) Class(#PRIM_NMBR) Name(#Property)
      //
      var PROPERTY = rtn.createParameter( "PROPERTY", "PRIM_NMBR" );

      //
      // PTYROUTINE Name(getMessageCount)
      //
      rtn.Line( 26 );
      {

         //
         // #Property := #List1.Items.ItemCount
         //
         rtn.Line( 29 );
         PROPERTY.set( ref.LIST1.getItems().getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 31 );
      return rtn.retVal( PROPERTY.get() );
   };

   //
   // evtRoutine1 - #COM_OWNER.Initialize
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.Initialize", 33 );

      //
      // EVTROUTINE Handling(#COM_OWNER.Initialize)
      //
      rtn.Line( 33 );
      {

         //
         // #COM_OWNER.Show
         //
         rtn.Line( 34 );
         this.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 35 );
      rtn.end();
   };

   //
   // mthCLEARMESSAGES - ClearMessages
   //
   COM_OWNER.mthCLEARMESSAGES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ClearMessages", 37 );

      //
      // MTHROUTINE Name(ClearMessages)
      //
      rtn.Line( 37 );
      {

         //
         // CLR_LIST Named(#List1)
         //
         rtn.Line( 38 );
         ref.LIST1.clearList();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
      rtn.end();
   };

   //
   // mthGETMESSAGES - getMessages
   //
   COM_OWNER.mthGETMESSAGES = function( parm_SYSTEMMESSAGECOUNT )
   {
      var fld = this.FLD.ZMYMESSA, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "getMessages", 41 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#std_count) Name(#SystemMessageCount)
      //
      var SYSTEMMESSAGECOUNT = rtn.createFieldParameter( "SYSTEMMESSAGECOUNT", Fields.STD_COUNT.DataClass );

      //
      // MTHROUTINE Name(getMessages)
      //
      rtn.Line( 41 );
      {

         //
         // #SystemMessageCount := #sys_msgq.Messages.ItemCount
         //
         rtn.Line( 44 );
         SYSTEMMESSAGECOUNT.set( Lansa.MSGQ().getMessages().getItemCount() );

         //
         // #COM_OWNER.CurrentMessageType := error
         //
         rtn.Line( 45 );
         this.setCURRENTMESSAGETYPE( "ERROR" );

         //
         // FOR Each(#Message) In(#sys_msgq.Messages)
         //
         rtn.Line( 47 );
         {
            var i1 = Lansa.MSGQ().getMessages().createIterator();

            while( i1.step() )
            {
               var MESSAGE = rtn.setref( "MESSAGE", i1.item() );

               //
               // #STD_STRNG := #Message.Text
               //
               rtn.Line( 49 );
               fld.STD_STRNG.set( MESSAGE.getText() );

               //
               // #STD_DTIMX := #STD_DTIMX.Now
               //
               rtn.Line( 50 );
               fld.STD_DTIMX.set( Lansa.DateTime.Now( fld.STD_DTIMX.get() ) );

               //
               // ADD_ENTRY To_List(#List1)
               //
               rtn.Line( 52 );
               ref.LIST1.addEntry();

               //
               // #COM_OWNER.SetMessageAttributes
               //
               rtn.Line( 54 );
               this.mthSETMESSAGEATTRIBUTES();

            //
            // ENDFOR 
            //
            rtn.Line( 56 );
            }

            i1.end();
            rtn.deleteReference( "MESSAGE" );
         }

         // ---------------------------
         // -- Map Output Parameters --
         // ---------------------------
         parm_SYSTEMMESSAGECOUNT.set( SYSTEMMESSAGECOUNT.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 58 );
      rtn.end();
   };

   //
   // mthADDMESSAGE - AddMessage
   //
   COM_OWNER.mthADDMESSAGE = function( parm_MESSAGETEXT, parm_MESSAGETYPE )
   {
      var fld = this.FLD.ZMYMESSA, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddMessage", 60 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_ALPH) Name(#messageTExt)
      //
      var MESSAGETEXT = rtn.createParameter( "MESSAGETEXT", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_ALPH) Name(#messageType)
      //
      var MESSAGETYPE = rtn.createParameter( "MESSAGETYPE", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      MESSAGETEXT.set( parm_MESSAGETEXT );
      MESSAGETYPE.set( parm_MESSAGETYPE );

      //
      // MTHROUTINE Name(AddMessage)
      //
      rtn.Line( 60 );
      {

         //
         // #COM_OWNER.CurrentMessageType := #messageType
         //
         rtn.Line( 64 );
         this.setCURRENTMESSAGETYPE( MESSAGETYPE.get() );

         //
         // #STD_STRNG := #messageTExt
         //
         rtn.Line( 65 );
         fld.STD_STRNG.set( MESSAGETEXT.get() );

         //
         // #STD_DTIMX := #STD_DTIMX.Now
         //
         rtn.Line( 66 );
         fld.STD_DTIMX.set( Lansa.DateTime.Now( fld.STD_DTIMX.get() ) );

         //
         // ADD_ENTRY To_List(#List1)
         //
         rtn.Line( 68 );
         ref.LIST1.addEntry();

         //
         // #COM_OWNER.SetMessageAttributes
         //
         rtn.Line( 70 );
         this.mthSETMESSAGEATTRIBUTES();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 72 );
      rtn.end();
   };

   //
   // mthSHOW - Show
   //
   COM_OWNER.mthSHOW = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Show", 74 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BOLN) Name(#property)
      //
      var PROPERTY = rtn.createParameter( "PROPERTY", "PRIM_BOLN" );

      //
      // MTHROUTINE Name(Show)
      //
      rtn.Line( 74 );
      {

         //
         // IF (#List1.Items.ItemCount = 0)
         //
         rtn.Line( 77 );
         if ( Lansa.Number.eq( ref.LIST1.getItems().getItemCount(), 0 ) )
         {

            //
            // SET Com(#COM_OWNER) Visible(False)
            //
            rtn.Line( 78 );
            this.setVisible( false );

            //
            // #property := False
            //
            rtn.Line( 79 );
            PROPERTY.set( false );

            //
            // RETURN 
            //
            return rtn.retVal( PROPERTY.get() );

         //
         // ENDIF 
         //
         }

         //
         // #property := True
         //
         rtn.Line( 83 );
         PROPERTY.set( true );

         //
         // SET Com(#COM_OWNER) Visible(True)
         //
         rtn.Line( 84 );
         this.setVisible( true );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 86 );
      return rtn.retVal( PROPERTY.get() );
   };

   //
   // mthSETMESSAGEATTRIBUTES - SetMessageAttributes
   //
   COM_OWNER.mthSETMESSAGEATTRIBUTES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetMessageAttributes", 88 );

      //
      // MTHROUTINE Name(SetMessageAttributes)
      //
      rtn.Line( 88 );
      {

         //
         // #List1.CurrentItem.ThemeDrawStyle := ('MessageItem' + #com_owner.CurrentMessageType)
         //
         rtn.Line( 90 );
         ref.LIST1.getCurrentItem().setThemeDrawStyle( Lansa.cat( "MessageItem", this.getCURRENTMESSAGETYPE() ) );

         //
         // #ColumnBOSTESMES1.currentitem.image <= #COM_OWNER.messageThumbnail
         //
         rtn.Line( 91 );
         ref.COLUMNBOSTESMES1.getCurrentItem().setImage( this.getMESSAGETHUMBNAIL() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 93 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(messageThumbnail) Get(GetThumbnail)
   //
   COM_OWNER.getMESSAGETHUMBNAIL = function()
   {
      return this.mthGETTHUMBNAIL();
   };

   //
   // DEFINE_PTY Name(CurrentMessageType) Get(*auto #std_char) Set(*auto #std_char)
   //
   COM_OWNER.getCURRENTMESSAGETYPE = function()
   {
      return this.FLD.ZMYMESSA.STD_CHAR.get();
   };

   COM_OWNER.setCURRENTMESSAGETYPE = function( value )
   {
      this.FLD.ZMYMESSA.STD_CHAR.set( value );
   };

   //
   // DEFINE_PTY Name(Messagecount) Get(getMessageCount)
   //
   COM_OWNER.getMESSAGECOUNT = function()
   {
      return this.mthGETMESSAGECOUNT();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // ------------------------------
   // -- STD_COUNT Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_COUNT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_COUNT );
      };

      Lansa.createFieldClass( { co: Fields.STD_COUNT.DataClass, an: "PRIM_FLD", fn: "STD_COUNT" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LIST", "PRIM_LIST.String", "PRIM_LIST.DateTime", "PRIM_LIST.Image", "PRIM_FLD", "PRIM_MSGQ", "PRIM_DTIM" ]
});

//# sourceURL=zmymessa.js
