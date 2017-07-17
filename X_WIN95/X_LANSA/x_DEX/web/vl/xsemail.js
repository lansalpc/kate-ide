// ----------------------------
// -- Reusable Part: XSEMAIL --
// ----------------------------
LANSA.addComponent(
{
   id: "XSEMAIL", 
   nm: "XSEmail", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Email Us", 
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
      XSTMPEML:
      {
         nm: "XSTMPEML",
         ft: "C",
         ln: 200,
         dc: 0,
         lb: "Email",
         h1: "Email",
         h2: " ",
         h3: " ",
         de: "Temporary Email",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSEMLMSG:
      {
         nm: "XSEMLMSG",
         ft: "C",
         ln: 1024,
         dc: 0,
         lb: "Email Message",
         h1: "Email",
         h2: "Message",
         h3: " ",
         de: "Email Message",
         dv: "",
         ia: [ "FE", "LC" ]
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
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 
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
         this.addFields( "XSEMAIL", Fields );

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
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row1) Displayposition(1) Parent(#TableLayout1) Height(35) Units(Pixels)
         //
         var ROW1 = this.createReference( "ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Row2) Displayposition(2) Parent(#TableLayout1)
         //
         var ROW2 = this.createReference( "ROW2", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#LayoutItem1) Alignment(CenterLeft) Column(#Column1) Manage(#Title) Parent(#TableLayout1) Row(#Row1)
         //
         var LAYOUTITEM1 = this.createReference( "LAYOUTITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#EmailItem1) Column(#Column1) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Alignment(TopLeft) Flow(Down) Marginleft(10) Marginright(10) Margintop(10)
         //
         var EMAILITEM1 = this.createReference( "EMAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#BodyItem1) Alignment(TopLeft) Column(#Column1) Manage(#Body) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Flow(Down) Marginleft(10) Marginright(10) Margintop(10)
         //
         var BODYITEM1 = this.createReference( "BODYITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#SendItem1) Alignment(BottomLeft) Column(#Column1) Manage(#Send) Parent(#TableLayout1) Row(#Row2) Sizing(None) Flow(Down) Marginleft(10) Margintop(10) Marginbottom(10)
         //
         var SENDITEM1 = this.createReference( "SENDITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#MessageItem1) Alignment(BottomRight) Column(#Column1) Manage(#Message) Parent(#TableLayout1) Row(#Row2) Sizing(None) Flow(Down) Margintop(5) Marginleft(10) Marginbottom(10) Marginright(10)
         //
         var MESSAGEITEM1 = this.createReference( "MESSAGEITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#XSTemporaryEmailItem1) Alignment(TopLeft) Column(#Column1) Manage(#XSTemporaryEmail) Parent(#TableLayout1) Row(#Row2) Sizing(FitToWidth) Flow(Down) Margintop(10) Marginleft(10) Marginright(10)
         //
         var XSTEMPORARYEMAILITEM1 = this.createReference( "XSTEMPORARYEMAILITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Title) Caption('Need D.I.Y Advice?  Ask us!') Displayposition(1) Ellipses(Word) Parent(#COM_OWNER) Tabposition(1) Tabstop(False) Verticalalignment(Center) Width(381) Wordwrap(False) Themedrawstyle('PanelHeader2') Top(0) Left(0) Marginleft(10) Height(35)
         //
         var TITLE = this.createReference( "TITLE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#PRIM_text) Name(#Body) Displayposition(3) Parent(#COM_OWNER) Tabposition(3) Top(76) Width(361) Height(134)
         //
         var BODY = this.createReference( "BODY", "PRIM_TEXT" );

         //
         // DEFINE_COM Class(#XSTemporaryEmail.Visual) Name(#XSTemporaryEmail) Displayposition(2) Parent(#COM_OWNER) Tabposition(2) Labeltype(Caption) Labelposition(None) Marginleft(0) Placeholder('Enter your email address') Width(361) Height(21) Usepicklist(False) Top(45) Left(10)
         //
         var XSTEMPORARYEMAIL = this.createFieldReference( "XSTEMPORARYEMAIL", Fields.XSTMPEML.VISUAL );

         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Send) Caption('Send') Displayposition(4) Parent(#COM_OWNER) Tabposition(4) Top(213) Width(100) Themedrawstyle('ButtonLook2')
         //
         var SEND = this.createReference( "SEND", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Message) Displayposition(5) Ellipses(Word) Height(25) Parent(#COM_OWNER) Tabposition(5) Tabstop(False) Top(213) Verticalalignment(Center) Width(233) Left(148) Style(#XSTheme01<Text10Red>)
         //
         var MESSAGE = this.createReference( "MESSAGE", "PRIM_LABL" );

         //
         // DEFINE_COM Class(#XSServer.SendEmail) Name(#SendEmail)
         //
         var SENDEMAIL = this.createDataRequest( "SENDEMAIL", "XSSERVER", "SENDEMAIL" );

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
         ROW1.setHeight( 35 );
         ROW1.setUnits( "PIXELS" );
         ROW1.initialize();

         // ----------------------
         // -- Initialize #ROW2 --
         // ----------------------
         ROW2.setDisplayPosition( 2 );
         ROW2.setParent( TABLELAYOUT1 );
         ROW2.initialize();

         // -----------------------------
         // -- Initialize #LAYOUTITEM1 --
         // -----------------------------
         LAYOUTITEM1.setAlignment( "CENTERLEFT" );
         LAYOUTITEM1.setColumn( COLUMN1 );
         LAYOUTITEM1.setManage( TITLE );
         LAYOUTITEM1.setParent( TABLELAYOUT1 );
         LAYOUTITEM1.setRow( ROW1 );
         LAYOUTITEM1.initialize();

         // ----------------------------
         // -- Initialize #EMAILITEM1 --
         // ----------------------------
         EMAILITEM1.setColumn( COLUMN1 );
         EMAILITEM1.setParent( TABLELAYOUT1 );
         EMAILITEM1.setRow( ROW2 );
         EMAILITEM1.setSizing( "FITTOWIDTH" );
         EMAILITEM1.setAlignment( "TOPLEFT" );
         EMAILITEM1.setFlow( "DOWN" );
         EMAILITEM1.setMarginLeft( 10 );
         EMAILITEM1.setMarginRight( 10 );
         EMAILITEM1.setMarginTop( 10 );
         EMAILITEM1.initialize();

         // ---------------------------
         // -- Initialize #BODYITEM1 --
         // ---------------------------
         BODYITEM1.setAlignment( "TOPLEFT" );
         BODYITEM1.setColumn( COLUMN1 );
         BODYITEM1.setManage( BODY );
         BODYITEM1.setParent( TABLELAYOUT1 );
         BODYITEM1.setRow( ROW2 );
         BODYITEM1.setSizing( "FITTOWIDTH" );
         BODYITEM1.setFlow( "DOWN" );
         BODYITEM1.setMarginLeft( 10 );
         BODYITEM1.setMarginRight( 10 );
         BODYITEM1.setMarginTop( 10 );
         BODYITEM1.initialize();

         // ---------------------------
         // -- Initialize #SENDITEM1 --
         // ---------------------------
         SENDITEM1.setAlignment( "BOTTOMLEFT" );
         SENDITEM1.setColumn( COLUMN1 );
         SENDITEM1.setManage( SEND );
         SENDITEM1.setParent( TABLELAYOUT1 );
         SENDITEM1.setRow( ROW2 );
         SENDITEM1.setSizing( "NONE" );
         SENDITEM1.setFlow( "DOWN" );
         SENDITEM1.setMarginLeft( 10 );
         SENDITEM1.setMarginTop( 10 );
         SENDITEM1.setMarginBottom( 10 );
         SENDITEM1.initialize();

         // ------------------------------
         // -- Initialize #MESSAGEITEM1 --
         // ------------------------------
         MESSAGEITEM1.setAlignment( "BOTTOMRIGHT" );
         MESSAGEITEM1.setColumn( COLUMN1 );
         MESSAGEITEM1.setManage( MESSAGE );
         MESSAGEITEM1.setParent( TABLELAYOUT1 );
         MESSAGEITEM1.setRow( ROW2 );
         MESSAGEITEM1.setSizing( "NONE" );
         MESSAGEITEM1.setFlow( "DOWN" );
         MESSAGEITEM1.setMarginTop( 5 );
         MESSAGEITEM1.setMarginLeft( 10 );
         MESSAGEITEM1.setMarginBottom( 10 );
         MESSAGEITEM1.setMarginRight( 10 );
         MESSAGEITEM1.initialize();

         // ---------------------------------------
         // -- Initialize #XSTEMPORARYEMAILITEM1 --
         // ---------------------------------------
         XSTEMPORARYEMAILITEM1.setAlignment( "TOPLEFT" );
         XSTEMPORARYEMAILITEM1.setColumn( COLUMN1 );
         XSTEMPORARYEMAILITEM1.setManage( XSTEMPORARYEMAIL );
         XSTEMPORARYEMAILITEM1.setParent( TABLELAYOUT1 );
         XSTEMPORARYEMAILITEM1.setRow( ROW2 );
         XSTEMPORARYEMAILITEM1.setSizing( "FITTOWIDTH" );
         XSTEMPORARYEMAILITEM1.setFlow( "DOWN" );
         XSTEMPORARYEMAILITEM1.setMarginTop( 10 );
         XSTEMPORARYEMAILITEM1.setMarginLeft( 10 );
         XSTEMPORARYEMAILITEM1.setMarginRight( 10 );
         XSTEMPORARYEMAILITEM1.initialize();

         // -----------------------
         // -- Initialize #TITLE --
         // -----------------------
         TITLE.setCaption( "Need D.I.Y Advice?  Ask us!" );
         TITLE.setDisplayPosition( 1 );
         TITLE.setEllipses( "WORD" );
         TITLE.setParent( this );
         TITLE.setTabPosition( 1 );
         TITLE.setTabStop( false );
         TITLE.setVerticalAlignment( "CENTER" );
         TITLE.setWidth( 381 );
         TITLE.setWordWrap( false );
         TITLE.setThemeDrawStyle( "PanelHeader2" );
         TITLE.setTop( 0 );
         TITLE.setLeft( 0 );
         TITLE.setMarginLeft( 10 );
         TITLE.setHeight( 35 );
         TITLE.initialize();

         // ----------------------
         // -- Initialize #BODY --
         // ----------------------
         BODY.setDisplayPosition( 3 );
         BODY.setParent( this );
         BODY.setTabPosition( 3 );
         BODY.setTop( 76 );
         BODY.setWidth( 361 );
         BODY.setHeight( 134 );
         BODY.initialize();

         // ----------------------------------
         // -- Initialize #XSTEMPORARYEMAIL --
         // ----------------------------------
         XSTEMPORARYEMAIL.setDisplayPosition( 2 );
         XSTEMPORARYEMAIL.setParent( this );
         XSTEMPORARYEMAIL.setTabPosition( 2 );
         XSTEMPORARYEMAIL.setLabelType( "CAPTION" );
         XSTEMPORARYEMAIL.setLabelPosition( "NONE" );
         XSTEMPORARYEMAIL.setMarginLeft( 0 );
         XSTEMPORARYEMAIL.setPlaceholder( "Enter your email address" );
         XSTEMPORARYEMAIL.setWidth( 361 );
         XSTEMPORARYEMAIL.setHeight( 21 );
         XSTEMPORARYEMAIL.setUsePicklist( false );
         XSTEMPORARYEMAIL.setTop( 45 );
         XSTEMPORARYEMAIL.setLeft( 10 );
         XSTEMPORARYEMAIL.applyDefault();
         XSTEMPORARYEMAIL.initialize();

         // ----------------------
         // -- Initialize #SEND --
         // ----------------------
         SEND.setCaption( "Send" );
         SEND.setDisplayPosition( 4 );
         SEND.setParent( this );
         SEND.setTabPosition( 4 );
         SEND.setTop( 213 );
         SEND.setWidth( 100 );
         SEND.setThemeDrawStyle( "ButtonLook2" );
         SEND.initialize();

         // -------------------------
         // -- Initialize #MESSAGE --
         // -------------------------
         MESSAGE.setDisplayPosition( 5 );
         MESSAGE.setEllipses( "WORD" );
         MESSAGE.setHeight( 25 );
         MESSAGE.setParent( this );
         MESSAGE.setTabPosition( 5 );
         MESSAGE.setTabStop( false );
         MESSAGE.setTop( 213 );
         MESSAGE.setVerticalAlignment( "CENTER" );
         MESSAGE.setWidth( 233 );
         MESSAGE.setLeft( 148 );
         MESSAGE.setStyle( Lansa.getTheme( "XSTHEME01" ).get( "TEXT10RED" ) );
         MESSAGE.initialize();

         // ---------------------------
         // -- Initialize #SENDEMAIL --
         // ---------------------------
         SENDEMAIL.initialize();

         // ----------------------------------
         // -- Add Event Handlers for #SEND --
         // ----------------------------------
         SEND.addEventHandler( "CLICK", this, evtRoutine1 );

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 250 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 383 );
         this.setLayoutManager( TABLELAYOUT1 );
         this.setThemeDrawStyle( "Panel1" );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // evtRoutine1 - #Send.Click
   //
   function evtRoutine1( sender, parms )
   {
      var fld = this.FLD.XSEMAIL, ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Send.Click", 26 );

      //
      // EVTROUTINE Handling(#Send.Click)
      //
      rtn.Line( 26 );
      {

         //
         // #Message.caption := ''
         //
         rtn.Line( 30 );
         ref.MESSAGE.setCaption( "" );

         //
         // #XSEmailMessage := #Body
         //
         rtn.Line( 31 );
         fld.XSEMLMSG.set( ref.BODY.get() );

         //
         // IF (#XSTemporaryEmail = '')
         //
         rtn.Line( 33 );
         if ( Lansa.String.eq( ref.XSTEMPORARYEMAIL.get(), "" ) )
         {

            //
            // #Message.caption := '     Try entering an Email address'
            //
            rtn.Line( 35 );
            ref.MESSAGE.setCaption( "     Try entering an Email address" );

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
         // IF (*Not #XSTemporaryEmail.contains( @ ))
         //
         rtn.Line( 41 );
         if ( Lansa.not( Lansa.String.Contains( ref.XSTEMPORARYEMAIL.get(), "@" ) ) )
         {

            //
            // #Message.caption := 'Check your email address'
            //
            rtn.Line( 43 );
            ref.MESSAGE.setCaption( "Check your email address" );

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
         // IF (*Not #XSTemporaryEmail.contains( '.' ))
         //
         rtn.Line( 49 );
         if ( Lansa.not( Lansa.String.Contains( ref.XSTEMPORARYEMAIL.get(), "." ) ) )
         {

            //
            // #Message.caption := 'Check your email address'
            //
            rtn.Line( 51 );
            ref.MESSAGE.setCaption( "Check your email address" );

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
         // #SendEmail.Execute( #XSTemporaryEmail #XSEmailMessage #WinRetCod )
         //
         rtn.Line( 57 );
         ref.SENDEMAIL.mthEXECUTE( { FLD: { "XSACCEML": ref.XSTEMPORARYEMAIL.get(), "XSEMLMSG": fld.XSEMLMSG.get() } }, { FLD: { "WINRETCOD": fld.WINRETCOD } } );

         //
         // IF (#WinRetCod = 0)
         //
         rtn.Line( 59 );
         if ( Lansa.Number.eq( fld.WINRETCOD.get(), 0 ) )
         {

            //
            // #Message.caption := '     Email has been sent'
            //
            rtn.Line( 61 );
            ref.MESSAGE.setCaption( "     Email has been sent" );

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
         // #Message.caption := '     Email send failed'
         //
         rtn.Line( 67 );
         ref.MESSAGE.setCaption( "     Email send failed" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 69 );
      rtn.end();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

   // -----------------------------
   // -- XSTMPEML Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSTMPEML.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSTMPEML );
      };

      Lansa.createFieldClass( { co: Fields.XSTMPEML.DataClass, an: "PRIM_FLD", fn: "XSTMPEML" } );

      // ------------
      // -- VISUAL --
      // ------------
      Fields.XSTMPEML.VISUAL = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, new Fields.XSTMPEML.DataClass() );
      };

      Lansa.createFieldClass( { co: Fields.XSTMPEML.VISUAL, an: "PRIM_EVEF", fn: "XSTMPEML", cn: "Visual" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XSTHEME01" ],
   rp: [ "PRIM_PANL", "PRIM_TBLO", "PRIM_TBLO.Column", "PRIM_TBLO.Row", "PRIM_TBLO.Item", "PRIM_LABL", "PRIM_TEXT", "PRIM_EVEF", "PRIM_PHBN", "PRIM_WEB.DataRequest" ]
});

//# sourceURL=xsemail.js
