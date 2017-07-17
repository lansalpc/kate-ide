// ---------------------------
// -- Reusable Part: MYRU01 --
// ---------------------------
LANSA.addComponent(
{
   id: "MYRU01", 
   nm: "myru01", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "My Reusable Part 1", 
   tl: 14010000
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_PANL", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_PHBN) Name(#Button1) Caption('Button1') Displayposition(1) Left(85) Parent(#COM_OWNER) Tabposition(1) Top(106) Height(79) Width(220)
         //
         var BUTTON1 = this.createReference( "BUTTON1", "PRIM_PHBN" );

         //
         // DEFINE_COM Class(#PRIM_LABL) Name(#Label1) Caption('Label1') Displayposition(2) Ellipses(Word) Height(25) Left(55) Parent(#COM_OWNER) Tabposition(2) Tabstop(False) Top(41) Verticalalignment(Center) Width(120) Themedrawstyle('''Heading1''')
         //
         var LABEL1 = this.createReference( "LABEL1", "PRIM_LABL" );

         // -------------------------
         // -- Initialize #BUTTON1 --
         // -------------------------
         BUTTON1.setCaption( "Button1" );
         BUTTON1.setDisplayPosition( 1 );
         BUTTON1.setLeft( 85 );
         BUTTON1.setParent( this );
         BUTTON1.setTabPosition( 1 );
         BUTTON1.setTop( 106 );
         BUTTON1.setHeight( 79 );
         BUTTON1.setWidth( 220 );
         BUTTON1.initialize();

         // ------------------------
         // -- Initialize #LABEL1 --
         // ------------------------
         LABEL1.setCaption( "Label1" );
         LABEL1.setDisplayPosition( 2 );
         LABEL1.setEllipses( "WORD" );
         LABEL1.setHeight( 25 );
         LABEL1.setLeft( 55 );
         LABEL1.setParent( this );
         LABEL1.setTabPosition( 2 );
         LABEL1.setTabStop( false );
         LABEL1.setTop( 41 );
         LABEL1.setVerticalAlignment( "CENTER" );
         LABEL1.setWidth( 120 );
         LABEL1.setThemeDrawStyle( "'Heading1'" );
         LABEL1.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setHeight( 270 );
         this.setLeft( 0 );
         this.setTabPosition( 1 );
         this.setTop( 0 );
         this.setWidth( 500 );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_PANL", "PRIM_PHBN", "PRIM_LABL" ]
});

//# sourceURL=myru01.js
