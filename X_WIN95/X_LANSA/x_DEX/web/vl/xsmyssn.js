// ----------------------------
// -- Reusable Part: XSMYSSN --
// ----------------------------
LANSA.addComponent(
{
   id: "XSMYSSN", 
   nm: "XSSession", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "My Session", 
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
      XSCNTRYNM:
      {
         nm: "XSCNTRYNM",
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
      STD_TEXTL:
      {
         nm: "STD_TEXTL",
         ft: "A",
         ln: 75,
         dc: 0,
         lb: "Text",
         h1: "Text",
         h2: " ",
         h3: " ",
         de: "Standard TEXT, LONG",
         dv: "",
         ia: [ "LC" ]
      },
      XSPRDLNID:
      {
         nm: "XSPRDLNID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Categor",
         h1: "Product",
         h2: "Category",
         h3: "ID",
         de: "Product Line ID",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDCTID:
      {
         nm: "XSPRDCTID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Categry",
         h1: "Product",
         h2: "Category",
         h3: "ID",
         de: "Product Category ID",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDLNDS:
      {
         nm: "XSPRDLNDS",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Last Name",
         h1: "Last",
         h2: "Name",
         h3: " ",
         de: "Product Line Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSCRTTAX:
      {
         nm: "XSCRTTAX",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total Tax",
         h1: "Cart",
         h2: "Tax",
         h3: " ",
         de: "Cart Total Tax",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTSHP:
      {
         nm: "XSCRTSHP",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total Tax",
         h1: "Cart",
         h2: "Tax",
         h3: " ",
         de: "Cart Total Shipping",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCRTTTL:
      {
         nm: "XSCRTTTL",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Cart Total",
         h1: "Cart",
         h2: "Total",
         h3: " ",
         de: "Cart Total",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSCURPGE:
      {
         nm: "XSCURPGE",
         ft: "A",
         ln: 20,
         dc: 0,
         lb: "Current Page",
         h1: "Current",
         h2: "Page",
         h3: " ",
         de: "Current Page",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDCTDS:
      {
         nm: "XSPRDCTDS",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Last Name",
         h1: "Last",
         h2: "Name",
         h3: " ",
         de: "Product Category Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSSRCHVL:
      {
         nm: "XSSRCHVL",
         ft: "A",
         ln: 50,
         dc: 0,
         lb: "Text",
         h1: "Text",
         h2: " ",
         h3: " ",
         de: "Search Value",
         dv: "",
         ia: [ "LC" ]
      },
      XSCRTSTS:
      {
         nm: "XSCRTSTS",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Cart Status",
         h1: "Cart",
         h2: "Status",
         h3: " ",
         de: "Cart Status",
         dv: "ACTIVE",
         ia: [ "FE" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_OBJT", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         pCartID: 
         {
            da: "r"
         },

         pEmail: 
         {
            da: "r"
         },

         pCartQuantity: 
         {
            da: "r"
         },

         pCartPrice: 
         {
            da: "r"
         },

         pCartTax: 
         {
            da: "rw"
         },

         pCartShipping: 
         {
            da: "rw"
         },

         pCartTotal: 
         {
            da: "rw"
         },

         pMessageBox: 
         {
            da: "r"
         },

         pCurrentPage: 
         {
            da: "rw"
         },

         pProductLine: 
         {
            da: "rw"
         },

         pProductLineDescription: 
         {
            da: "rw"
         },

         pProductCategory: 
         {
            da: "rw"
         },

         pProductCategoryDescription: 
         {
            da: "rw"
         },

         pProductSearch: 
         {
            da: "rw"
         },

         pCategorySelected: 
         {
            da: "na"
         },

         pCountry: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Setup: 
         {
         },

         SaveLocalValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               },

               "Value":
               {
                  pt: "i"
               }
            }
         },

         RestoreLocalValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         ClearLocalValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         SaveSessionValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               },

               "Value":
               {
                  pt: "i"
               }
            }
         },

         RestoreSessionValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         ClearAllSessionValues: 
         {
         },

         ClearSessionValue: 
         {
            ps: 
            {
               "Name":
               {
                  pt: "i"
               }
            }
         },

         ClearMessageBox: 
         {
         },

         SetMessageBoxTitle: 
         {
            ps: 
            {
               "Title":
               {
                  pt: "i"
               }
            }
         },

         AddMessage: 
         {
            ps: 
            {
               "Message":
               {
                  pt: "i"
               }
            }
         },

         AddSysMessages: 
         {
         },

         ShowMessageBox: 
         {
         },

         ReloadProductPage: 
         {
            ps: 
            {
               "LineID":
               {
                  pt: "i"
               },

               "CategoryID":
               {
                  pt: "i"
               }
            }
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         CartIDUpdated: 
         {
            ps: 
            {
               "CartID":
               {
                  pt: "i"
               }
            }
         },

         EmailUpdated: 
         {
            ps: 
            {
               "AccountEmail":
               {
                  pt: "i"
               }
            }
         },

         CartQuantityUpdated: 
         {
            ps: 
            {
               "CartQuantity":
               {
                  pt: "i"
               }
            }
         },

         CartPriceUpdated: 
         {
            ps: 
            {
               "CartPrice":
               {
                  pt: "i"
               }
            }
         },

         ReloadProducts: 
         {
         },

         CountryUpdated: 
         {
            ps: 
            {
               "CurrentCountry":
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
         var fld = this.addFields( "XSMYSSN", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#prim_web.MessageBox) Name(#MyMessageBox)
         //
         var MYMESSAGEBOX = this.createReference( "MYMESSAGEBOX", "PRIM_WEB", "MessageBox" );

         //
         // DEFINE_COM Class(#XSServer.GetCartStatus) Name(#GetCartStatus)
         //
         var GETCARTSTATUS = this.createDataRequest( "GETCARTSTATUS", "XSSERVER", "GETCARTSTATUS" );

         //
         // DEFINE_COM Class(#XSServer.LoadProductLines) Name(#LoadProductLines)
         //
         var LOADPRODUCTLINES = this.createDataRequest( "LOADPRODUCTLINES", "XSSERVER", "LOADPRODUCTLINES" );

         // ------------------------------
         // -- Initialize #MYMESSAGEBOX --
         // ------------------------------
         MYMESSAGEBOX.initialize();

         // -------------------------------
         // -- Initialize #GETCARTSTATUS --
         // -------------------------------
         GETCARTSTATUS.initialize();

         // ----------------------------------
         // -- Initialize #LOADPRODUCTLINES --
         // ----------------------------------
         LOADPRODUCTLINES.initialize();

         // ------------------------------------------
         // -- Add Event Handlers for #MYMESSAGEBOX --
         // ------------------------------------------
         MYMESSAGEBOX.addEventHandler( "CLOSED", this, evtRoutine3 );

         // -------------------------------------------
         // -- Add Event Handlers for #GETCARTSTATUS --
         // -------------------------------------------
         GETCARTSTATUS.addEventHandler( "COMPLETED", this, evtRoutine2 );

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "XSMYSSN" );

         //
         // DEF_LIST Name(#ProductLineList) Fields(#XSProductLineID #XSProductLineDescription) Type(*Working) Entrys(*max)
         //
         list.PRODUCTLINELIST = Lansa.createList( { "XSPRDLNID": fld.XSPRDLNID, "XSPRDLNDS": fld.XSPRDLNDS }, null );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // mthSETCARTID - SetCartID
   //
   COM_OWNER.mthSETCARTID = function( parm_ID )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCartID", 54 );

      //
      // DEFINE_MAP For(*Input) Class(#XSCartID) Name(#ID)
      //
      var ID = rtn.createFieldParameter( "ID", Fields.XSCRTID.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      ID.set( parm_ID );

      //
      // PTYROUTINE Name(SetCartID)
      //
      rtn.Line( 54 );
      {

         //
         // #XSCartID := #ID
         //
         rtn.Line( 57 );
         fld.XSCRTID.set( ID.get() );

         //
         // #com_owner.SaveLocalValue( CartID #XSCartID )
         //
         rtn.Line( 59 );
         COM_OWNER.mthSAVELOCALVALUE.call( this, "CARTID", fld.XSCRTID.get() );

         //
         // SIGNAL Event(CartIDUpdated) Cartid(#XSCartID)
         //
         rtn.Line( 61 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "CARTID", Fields.XSCRTID.DataClass );

            evtParms.ref( "CARTID" ).set( fld.XSCRTID.get() );

            this.fireEvent( "CARTIDUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 63 );
      rtn.end();
   };

   //
   // mthSETEMAIL - SetEmail
   //
   COM_OWNER.mthSETEMAIL = function( parm_EMAIL )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetEmail", 65 );

      //
      // DEFINE_MAP For(*Input) Class(#XSAccountEmail) Name(#Email)
      //
      var EMAIL = rtn.createFieldParameter( "EMAIL", Fields.XSACCEML.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      EMAIL.set( parm_EMAIL );

      //
      // PTYROUTINE Name(SetEmail)
      //
      rtn.Line( 65 );
      {

         //
         // #XSAccountEmail := #Email
         //
         rtn.Line( 68 );
         fld.XSACCEML.set( EMAIL.get() );

         //
         // #com_owner.SaveLocalValue( Email #Email )
         //
         rtn.Line( 70 );
         COM_OWNER.mthSAVELOCALVALUE.call( this, "EMAIL", EMAIL.get() );

         //
         // SIGNAL Event(EmailUpdated) Accountemail(#XSAccountEmail)
         //
         rtn.Line( 72 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "ACCOUNTEMAIL", Fields.XSACCEML.DataClass );

            evtParms.ref( "ACCOUNTEMAIL" ).set( fld.XSACCEML.get() );

            this.fireEvent( "EMAILUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 74 );
      rtn.end();
   };

   //
   // mthSETCARTTOTALQUANTITY - SetCartTotalQuantity
   //
   COM_OWNER.mthSETCARTTOTALQUANTITY = function( parm_QUANTITY )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCartTotalQuantity", 76 );

      //
      // DEFINE_MAP For(*Input) Class(#XSCartTotalQuantity) Name(#Quantity)
      //
      var QUANTITY = rtn.createFieldParameter( "QUANTITY", Fields.XSCRTQTY.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUANTITY.set( parm_QUANTITY );

      //
      // PTYROUTINE Name(SetCartTotalQuantity)
      //
      rtn.Line( 76 );
      {

         //
         // #XSCartTotalQuantity := #Quantity
         //
         rtn.Line( 79 );
         fld.XSCRTQTY.set( QUANTITY.get() );

         //
         // #com_owner.SaveSessionValue( CartQuantity #XSCartTotalQuantity.asstring )
         //
         rtn.Line( 81 );
         COM_OWNER.mthSAVESESSIONVALUE.call( this, "CARTQUANTITY", Lansa.Number.AsString( fld.XSCRTQTY.get() ) );

         //
         // SIGNAL Event(CartQuantityUpdated) Cartquantity(#XSCartTotalQuantity)
         //
         rtn.Line( 83 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "CARTQUANTITY", Fields.XSCRTQTY.DataClass );

            evtParms.ref( "CARTQUANTITY" ).set( fld.XSCRTQTY.get() );

            this.fireEvent( "CARTQUANTITYUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 85 );
      rtn.end();
   };

   //
   // mthSETCARTTOTALPRICE - SetCartTotalPrice
   //
   COM_OWNER.mthSETCARTTOTALPRICE = function( parm_PRICE )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCartTotalPrice", 87 );

      //
      // DEFINE_MAP For(*Input) Class(#XSCartTotalPrice) Name(#Price)
      //
      var PRICE = rtn.createFieldParameter( "PRICE", Fields.XSCRTPRC.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      PRICE.set( parm_PRICE );

      //
      // PTYROUTINE Name(SetCartTotalPrice)
      //
      rtn.Line( 87 );
      {

         //
         // #XSCartTotalPrice := #Price
         //
         rtn.Line( 90 );
         fld.XSCRTPRC.set( PRICE.get() );

         //
         // #com_owner.SaveSessionValue( CartPrice #XSCartTotalPrice.asstring )
         //
         rtn.Line( 92 );
         COM_OWNER.mthSAVESESSIONVALUE.call( this, "CARTPRICE", Lansa.Number.AsString( fld.XSCRTPRC.get() ) );

         //
         // SIGNAL Event(CartPriceUpdated) Cartprice(#XSCartTotalPrice)
         //
         rtn.Line( 94 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "CARTPRICE", Fields.XSCRTPRC.DataClass );

            evtParms.ref( "CARTPRICE" ).set( fld.XSCRTPRC.get() );

            this.fireEvent( "CARTPRICEUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 96 );
      rtn.end();
   };

   //
   // mthSETCOUNTRYCHANGED - SetCountryChanged
   //
   COM_OWNER.mthSETCOUNTRYCHANGED = function( parm_COUNTRY )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.ptyRoutine( this, COM_OWNER, "SetCountryChanged", 98 );

      //
      // DEFINE_MAP For(*Input) Class(#XSCountryName) Name(#Country)
      //
      var COUNTRY = rtn.createFieldParameter( "COUNTRY", Fields.XSCNTRYNM.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COUNTRY.set( parm_COUNTRY );

      //
      // PTYROUTINE Name(SetCountryChanged)
      //
      rtn.Line( 98 );
      {

         //
         // #XSCountryName := #Country
         //
         rtn.Line( 101 );
         fld.XSCNTRYNM.set( COUNTRY.get() );

         //
         // SIGNAL Event(CountryUpdated) Currentcountry(#XSCountryName)
         //
         rtn.Line( 103 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createFieldReference( "CURRENTCOUNTRY", Fields.XSCNTRYNM.DataClass );

            evtParms.ref( "CURRENTCOUNTRY" ).set( fld.XSCNTRYNM.get() );

            this.fireEvent( "COUNTRYUPDATED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 105 );
      rtn.end();
   };

   //
   // mthISCATEGORYSELECTED - IsCategorySelected
   //
   COM_OWNER.mthISCATEGORYSELECTED = function()
   {
      var rtn = Lansa.ptyRoutine( this, COM_OWNER, "IsCategorySelected", 107 );

      //
      // DEFINE_MAP For(*Output) Class(#prim_boln) Name(#Selected)
      //
      var SELECTED = rtn.createParameter( "SELECTED", "PRIM_BOLN" );

      //
      // PTYROUTINE Name(IsCategorySelected)
      //
      rtn.Line( 107 );
      {

         //
         // #Selected := false
         //
         rtn.Line( 110 );
         SELECTED.set( false );

         //
         // IF (#com_owner.pProductCategory <> *blank)
         //
         rtn.Line( 112 );
         if ( Lansa.String.ne( this.getPPRODUCTCATEGORY(), "" ) )
         {

            //
            // #Selected := true
            //
            rtn.Line( 114 );
            SELECTED.set( true );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 118 );
      return rtn.retVal( SELECTED.get() );
   };

   //
   // evtRoutine1 - #Com_owner.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Com_owner.CreateInstance", 120 );

      //
      // EVTROUTINE Handling(#Com_owner.CreateInstance)
      //
      rtn.Line( 120 );
      {

         //
         // #com_owner.SetUp
         //
         rtn.Line( 122 );
         this.mthSETUP();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 124 );
      rtn.end();
   };

   //
   // evtRoutine2 - #GetCartStatus.completed
   //
   function evtRoutine2( sender, parms )
   {
      var fld = this.FLD.XSMYSSN, rtn = Lansa.evtRoutine( this, COM_OWNER, "#GetCartStatus.completed", 126 );

      //
      // EVTROUTINE Handling(#GetCartStatus.completed)
      //
      rtn.Line( 126 );
      {

         //
         // #Com_owner.pCartQuantity := #XSCartTotalQuantity
         //
         rtn.Line( 128 );
         this.setPCARTQUANTITY( fld.XSCRTQTY.get() );

         //
         // #Com_owner.pCartPrice := #XSCartTotalPrice
         //
         rtn.Line( 129 );
         this.setPCARTPRICE( fld.XSCRTPRC.get() );

         //
         // #Com_owner.pCartTax := #XSCartTotalTax
         //
         rtn.Line( 130 );
         this.setPCARTTAX( fld.XSCRTTAX.get() );

         //
         // #Com_owner.pCartShipping := #XSCartTotalShipping
         //
         rtn.Line( 131 );
         this.setPCARTSHIPPING( fld.XSCRTSHP.get() );

         //
         // #Com_owner.pCartTotal := #XSCartTotal
         //
         rtn.Line( 132 );
         this.setPCARTTOTAL( fld.XSCRTTTL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 134 );
      rtn.end();
   };

   //
   // mthSETUP - Setup
   //
   COM_OWNER.mthSETUP = function()
   {
      var fld = this.FLD.XSMYSSN, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Setup", 136 );

      //
      // MTHROUTINE Name(Setup)
      //
      rtn.Line( 136 );
      {

         //
         // #XSAccountEmail := #Com_owner.RestoreLocalValue( Email )
         //
         rtn.Line( 139 );
         fld.XSACCEML.set( COM_OWNER.mthRESTORELOCALVALUE.call( this, "EMAIL" ) );

         //
         // #XSCartID := #Com_owner.RestoreLocalValue( CartID )
         //
         rtn.Line( 140 );
         fld.XSCRTID.set( COM_OWNER.mthRESTORELOCALVALUE.call( this, "CARTID" ) );

         //
         // IF (#XSCartID = *blank)
         //
         rtn.Line( 142 );
         if ( Lansa.String.eq( fld.XSCRTID.get(), "" ) )
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
         // #GetCartStatus.ExecuteAsync( #XSCartID #XSCartStatus #XSCartTotalPrice #XSCartTotalQuantity #XSCartTotalTax #XSCartTotalShipping )
         //
         rtn.Line( 148 );
         ref.GETCARTSTATUS.mthEXECUTEASYNC( { FLD: { "XSCRTID": fld.XSCRTID.get() } }, { FLD: { "XSCRTSTS": fld.XSCRTSTS, "XSCRTPRC": fld.XSCRTPRC, "XSCRTQTY": fld.XSCRTQTY, "XSCRTTAX": fld.XSCRTTAX, "XSCRTSHP": fld.XSCRTSHP } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 150 );
      rtn.end();
   };

   //
   // mthSAVELOCALVALUE - SaveLocalValue
   //
   COM_OWNER.mthSAVELOCALVALUE = function( parm_NAME, parm_VALUE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "SaveLocalValue", 152 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Value)
      //
      var VALUE = rtn.createParameter( "VALUE", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );
      VALUE.set( parm_VALUE );

      //
      // MTHROUTINE Name(SaveLocalValue)
      //
      rtn.Line( 152 );
      {

         //
         // IF (#Sys_Web.localStorage<#Name> *Is *null)
         //
         rtn.Line( 156 );
         if ( ( Lansa.WEB().getLocalStorage().get( NAME.get() ) == null ) )
         {

            //
            // #Sys_Web.localStorage.add( #Name #Value )
            //
            rtn.Line( 158 );
            Lansa.WEB().getLocalStorage().mthADD( NAME.get(), VALUE.get() );

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
         // #Sys_Web.localStorage<#Name>.Value := #Value
         //
         rtn.Line( 164 );
         Lansa.WEB().getLocalStorage().get( NAME.get() ).setValue( VALUE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 166 );
      rtn.end();
   };

   //
   // mthRESTORELOCALVALUE - RestoreLocalValue
   //
   COM_OWNER.mthRESTORELOCALVALUE = function( parm_NAME )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "RestoreLocalValue", 168 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_alph) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );

      //
      // MTHROUTINE Name(RestoreLocalValue)
      //
      rtn.Line( 168 );
      {

         //
         // IF (#Sys_Web.localStorage<#Name> *IsNot *null)
         //
         rtn.Line( 172 );
         if ( ( Lansa.WEB().getLocalStorage().get( NAME.get() ) != null ) )
         {

            //
            // #Result := #Sys_Web.localStorage<#Name>
            //
            rtn.Line( 174 );
            RESULT.set( Lansa.WEB().getLocalStorage().get( NAME.get() ).get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 178 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthCLEARLOCALVALUE - ClearLocalValue
   //
   COM_OWNER.mthCLEARLOCALVALUE = function( parm_NAME )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ClearLocalValue", 180 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_alph) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );

      //
      // MTHROUTINE Name(ClearLocalValue)
      //
      rtn.Line( 180 );
      {

         //
         // IF (#Sys_Web.LocalStorage<#Name> *IsNot *null)
         //
         rtn.Line( 184 );
         if ( ( Lansa.WEB().getLocalStorage().get( NAME.get() ) != null ) )
         {

            //
            // #Sys_Web.LocalStorage.remove( #Name )
            //
            rtn.Line( 186 );
            Lansa.WEB().getLocalStorage().mthREMOVE( NAME.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 190 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthSAVESESSIONVALUE - SaveSessionValue
   //
   COM_OWNER.mthSAVESESSIONVALUE = function( parm_NAME, parm_VALUE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "SaveSessionValue", 192 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Value)
      //
      var VALUE = rtn.createParameter( "VALUE", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );
      VALUE.set( parm_VALUE );

      //
      // MTHROUTINE Name(SaveSessionValue)
      //
      rtn.Line( 192 );
      {

         //
         // IF (#Sys_Web.SessionStorage<#Name> *Is *null)
         //
         rtn.Line( 196 );
         if ( ( Lansa.WEB().getSessionStorage().get( NAME.get() ) == null ) )
         {

            //
            // #Sys_Web.SessionStorage.add( #Name #Value )
            //
            rtn.Line( 198 );
            Lansa.WEB().getSessionStorage().mthADD( NAME.get(), VALUE.get() );

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
         // #Sys_Web.SessionStorage<#Name>.Value := #Value
         //
         rtn.Line( 204 );
         Lansa.WEB().getSessionStorage().get( NAME.get() ).setValue( VALUE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 206 );
      rtn.end();
   };

   //
   // mthRESTORESESSIONVALUE - RestoreSessionValue
   //
   COM_OWNER.mthRESTORESESSIONVALUE = function( parm_NAME )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "RestoreSessionValue", 208 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_alph) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );

      //
      // MTHROUTINE Name(RestoreSessionValue)
      //
      rtn.Line( 208 );
      {

         //
         // IF (#Sys_Web.SessionStorage<#Name> *IsNot *null)
         //
         rtn.Line( 212 );
         if ( ( Lansa.WEB().getSessionStorage().get( NAME.get() ) != null ) )
         {

            //
            // #Result := #Sys_Web.SessionStorage<#Name>
            //
            rtn.Line( 214 );
            RESULT.set( Lansa.WEB().getSessionStorage().get( NAME.get() ).get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 218 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthCLEARALLSESSIONVALUES - ClearAllSessionValues
   //
   COM_OWNER.mthCLEARALLSESSIONVALUES = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ClearAllSessionValues", 220 );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_alph) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_ALPH" );

      //
      // MTHROUTINE Name(ClearAllSessionValues)
      //
      rtn.Line( 220 );
      {

         //
         // IF (#Sys_Web.SessionStorage<Email> *IsNot *null)
         //
         rtn.Line( 223 );
         if ( ( Lansa.WEB().getSessionStorage().get( "EMAIL" ) != null ) )
         {

            //
            // #Result := #com_owner.ClearSessionValue( Email )
            //
            rtn.Line( 225 );
            RESULT.set( COM_OWNER.mthCLEARSESSIONVALUE.call( this, "EMAIL" ) );

         //
         // ENDIF 
         //
         }

         //
         // IF (#Sys_Web.SessionStorage<FirstName> *IsNot *null)
         //
         rtn.Line( 229 );
         if ( ( Lansa.WEB().getSessionStorage().get( "FIRSTNAME" ) != null ) )
         {

            //
            // #Result := #com_owner.ClearSessionValue( FirstName )
            //
            rtn.Line( 231 );
            RESULT.set( COM_OWNER.mthCLEARSESSIONVALUE.call( this, "FIRSTNAME" ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 235 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthCLEARSESSIONVALUE - ClearSessionValue
   //
   COM_OWNER.mthCLEARSESSIONVALUE = function( parm_NAME )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ClearSessionValue", 237 );

      //
      // DEFINE_MAP For(*Input) Class(#Prim_alph) Name(#Name)
      //
      var NAME = rtn.createParameter( "NAME", "PRIM_ALPH" );

      //
      // DEFINE_MAP For(*Result) Class(#Prim_alph) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_ALPH" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NAME.set( parm_NAME );

      //
      // MTHROUTINE Name(ClearSessionValue)
      //
      rtn.Line( 237 );
      {

         //
         // IF (#Sys_Web.SessionStorage<#Name> *IsNot *null)
         //
         rtn.Line( 241 );
         if ( ( Lansa.WEB().getSessionStorage().get( NAME.get() ) != null ) )
         {

            //
            // #Sys_Web.SessionStorage.remove( #Name )
            //
            rtn.Line( 243 );
            Lansa.WEB().getSessionStorage().mthREMOVE( NAME.get() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 247 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // evtRoutine3 - #MyMessageBox.Closed
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#MyMessageBox.Closed", 249 );

      //
      // EVTROUTINE Handling(#MyMessageBox.Closed)
      //
      rtn.Line( 249 );
      {

         //
         // #Com_owner.ClearMessageBox
         //
         rtn.Line( 251 );
         this.mthCLEARMESSAGEBOX();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 253 );
      rtn.end();
   };

   //
   // mthCLEARMESSAGEBOX - ClearMessageBox
   //
   COM_OWNER.mthCLEARMESSAGEBOX = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ClearMessageBox", 255 );

      //
      // MTHROUTINE Name(ClearMessageBox)
      //
      rtn.Line( 255 );
      {

         //
         // #MyMessageBox.Captions.RemoveAll()
         //
         rtn.Line( 257 );
         ref.MYMESSAGEBOX.getCaptions().mthREMOVEALL();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 259 );
      rtn.end();
   };

   //
   // mthSETMESSAGEBOXTITLE - SetMessageBoxTitle
   //
   COM_OWNER.mthSETMESSAGEBOXTITLE = function( parm_TITLE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SetMessageBoxTitle", 261 );

      //
      // DEFINE_MAP For(*Input) Class(#std_textl) Name(#Title)
      //
      var TITLE = rtn.createFieldParameter( "TITLE", Fields.STD_TEXTL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TITLE.set( parm_TITLE );

      //
      // MTHROUTINE Name(SetMessageBoxTitle)
      //
      rtn.Line( 261 );
      {

         //
         // #MyMessageBox.title := #Title
         //
         rtn.Line( 264 );
         ref.MYMESSAGEBOX.setTitle( TITLE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 266 );
      rtn.end();
   };

   //
   // mthADDMESSAGE - AddMessage
   //
   COM_OWNER.mthADDMESSAGE = function( parm_MESSAGE )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddMessage", 268 );

      //
      // DEFINE_MAP For(*Input) Class(#std_textl) Name(#Message)
      //
      var MESSAGE = rtn.createFieldParameter( "MESSAGE", Fields.STD_TEXTL.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      MESSAGE.set( parm_MESSAGE );

      //
      // MTHROUTINE Name(AddMessage)
      //
      rtn.Line( 268 );
      {

         //
         // #MyMessageBox.captions.add( #Message )
         //
         rtn.Line( 271 );
         ref.MYMESSAGEBOX.getCaptions().mthADD( MESSAGE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 273 );
      rtn.end();
   };

   //
   // mthADDSYSMESSAGES - AddSysMessages
   //
   COM_OWNER.mthADDSYSMESSAGES = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddSysMessages", 275 );

      //
      // MTHROUTINE Name(AddSysMessages)
      //
      rtn.Line( 275 );
      {

         //
         // FOR Each(#Message) In(#sys_msgq.Messages)
         //
         rtn.Line( 277 );
         {
            var i1 = Lansa.MSGQ().getMessages().createIterator();

            while( i1.step() )
            {
               var MESSAGE = rtn.setref( "MESSAGE", i1.item() );

               //
               // #MyMessageBox.captions.add( #Message.Text )
               //
               rtn.Line( 279 );
               ref.MYMESSAGEBOX.getCaptions().mthADD( MESSAGE.getText() );

            //
            // ENDFOR 
            //
            rtn.Line( 281 );
            }

            i1.end();
            rtn.deleteReference( "MESSAGE" );
         }

         //
         // #sys_msgq.ClearAll
         //
         rtn.Line( 283 );
         Lansa.MSGQ().mthCLEARALL();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 285 );
      rtn.end();
   };

   //
   // mthSHOWMESSAGEBOX - ShowMessageBox
   //
   COM_OWNER.mthSHOWMESSAGEBOX = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ShowMessageBox", 287 );

      //
      // MTHROUTINE Name(ShowMessageBox)
      //
      rtn.Line( 287 );
      {

         //
         // #MyMessageBox.show
         //
         rtn.Line( 289 );
         ref.MYMESSAGEBOX.mthSHOW();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 291 );
      rtn.end();
   };

   //
   // mthRELOADPRODUCTPAGE - ReloadProductPage
   //
   COM_OWNER.mthRELOADPRODUCTPAGE = function( parm_LINEID, parm_CATEGORYID )
   {
      var list = this.LIST.XSMYSSN, fld = this.FLD.XSMYSSN, ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ReloadProductPage", 293 );

      //
      // DEFINE_MAP For(*input) Class(#XSProductLineID) Name(#LineID)
      //
      var LINEID = rtn.createFieldParameter( "LINEID", Fields.XSPRDLNID.DataClass );

      //
      // DEFINE_MAP For(*input) Class(#XSProductCategoryID) Name(#CategoryID)
      //
      var CATEGORYID = rtn.createFieldParameter( "CATEGORYID", Fields.XSPRDCTID.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      LINEID.set( parm_LINEID );
      CATEGORYID.set( parm_CATEGORYID );

      //
      // MTHROUTINE Name(ReloadProductPage)
      //
      rtn.Line( 293 );
      {

         //
         // IF (#LineID <> #com_owner.pProductLine)
         //
         rtn.Line( 297 );
         if ( Lansa.String.ne( LINEID.get(), this.getPPRODUCTLINE() ) )
         {

            //
            // #com_owner.pProductLine := #LineID
            //
            rtn.Line( 299 );
            this.setPPRODUCTLINE( LINEID.get() );

            //
            // #LoadProductLines.Execute( #LineID #ProductLineList )
            //
            rtn.Line( 301 );
            ref.LOADPRODUCTLINES.mthEXECUTE( { FLD: { "XSPRDLNID": LINEID.get() } }, { LIST: { "PRODUCTLINELIST": list.PRODUCTLINELIST } } );

            //
            // SELECTLIST Named(#ProductLineList)
            //
            rtn.Line( 304 );
            for ( var i1 = 1; i1 <= list.PRODUCTLINELIST.entryCount(); i1++ )
            {
               list.PRODUCTLINELIST.getEntry( i1 );

               //
               // #Com_owner.pProductLineDescription := #XSProductLineDescription
               //
               rtn.Line( 306 );
               this.setPPRODUCTLINEDESCRIPTION( fld.XSPRDLNDS.get() );

               //
               // LEAVE 
               //
               rtn.Line( 308 );
               break;

            //
            // ENDSELECT 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#CategoryID <> #com_owner.pProductCategory)
         //
         rtn.Line( 314 );
         if ( Lansa.String.ne( CATEGORYID.get(), this.getPPRODUCTCATEGORY() ) )
         {

            //
            // #Com_owner.pProductCategory := #CategoryID
            //
            rtn.Line( 316 );
            this.setPPRODUCTCATEGORY( CATEGORYID.get() );

            //
            // IF (#CategoryID = *blanks)
            //
            rtn.Line( 318 );
            if ( Lansa.String.eq( CATEGORYID.get(), "" ) )
            {

               //
               // #Com_owner.pProductCategoryDescription := *blank
               //
               rtn.Line( 320 );
               this.setPPRODUCTCATEGORYDESCRIPTION( "" );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // SIGNAL Event(ReloadProducts)
         //
         rtn.Line( 326 );
         this.fireEvent( "RELOADPRODUCTS" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 328 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(pCartID) Get(*auto #XSCartID) Set(SetCartID)
   //
   COM_OWNER.getPCARTID = function()
   {
      return this.FLD.XSMYSSN.XSCRTID.get();
   };

   COM_OWNER.setPCARTID = function( value )
   {
      this.mthSETCARTID(value);
   };

   //
   // DEFINE_PTY Name(pEmail) Get(*auto #XSAccountEmail) Set(SetEmail)
   //
   COM_OWNER.getPEMAIL = function()
   {
      return this.FLD.XSMYSSN.XSACCEML.get();
   };

   COM_OWNER.setPEMAIL = function( value )
   {
      this.mthSETEMAIL(value);
   };

   //
   // DEFINE_PTY Name(pCartQuantity) Get(*auto #XSCartTotalQuantity) Set(SetCartTotalQuantity)
   //
   COM_OWNER.getPCARTQUANTITY = function()
   {
      return this.FLD.XSMYSSN.XSCRTQTY.get();
   };

   COM_OWNER.setPCARTQUANTITY = function( value )
   {
      this.mthSETCARTTOTALQUANTITY(value);
   };

   //
   // DEFINE_PTY Name(pCartPrice) Get(*auto #XSCartTotalPrice) Set(SetCartTotalPrice)
   //
   COM_OWNER.getPCARTPRICE = function()
   {
      return this.FLD.XSMYSSN.XSCRTPRC.get();
   };

   COM_OWNER.setPCARTPRICE = function( value )
   {
      this.mthSETCARTTOTALPRICE(value);
   };

   //
   // DEFINE_PTY Name(pCartTax) Get(*auto #XSCartTotalTax) Set(*auto #XSCartTotalTax)
   //
   COM_OWNER.getPCARTTAX = function()
   {
      return this.FLD.XSMYSSN.XSCRTTAX.get();
   };

   COM_OWNER.setPCARTTAX = function( value )
   {
      this.FLD.XSMYSSN.XSCRTTAX.set( value );
   };

   //
   // DEFINE_PTY Name(pCartShipping) Get(*auto #XSCartTotalShipping) Set(*auto #XSCartTotalShipping)
   //
   COM_OWNER.getPCARTSHIPPING = function()
   {
      return this.FLD.XSMYSSN.XSCRTSHP.get();
   };

   COM_OWNER.setPCARTSHIPPING = function( value )
   {
      this.FLD.XSMYSSN.XSCRTSHP.set( value );
   };

   //
   // DEFINE_PTY Name(pCartTotal) Get(*auto #XSCartTotal) Set(*auto #XSCartTotal)
   //
   COM_OWNER.getPCARTTOTAL = function()
   {
      return this.FLD.XSMYSSN.XSCRTTTL.get();
   };

   COM_OWNER.setPCARTTOTAL = function( value )
   {
      this.FLD.XSMYSSN.XSCRTTTL.set( value );
   };

   //
   // DEFINE_PTY Name(pMessageBox) Get(*reference #MyMessageBox)
   //
   COM_OWNER.getPMESSAGEBOX = function()
   {
      return this.REF.MYMESSAGEBOX;
   };

   //
   // DEFINE_PTY Name(pCurrentPage) Get(*auto #XSCurrentPage) Set(*auto #XSCurrentPage)
   //
   COM_OWNER.getPCURRENTPAGE = function()
   {
      return this.FLD.XSMYSSN.XSCURPGE.get();
   };

   COM_OWNER.setPCURRENTPAGE = function( value )
   {
      this.FLD.XSMYSSN.XSCURPGE.set( value );
   };

   //
   // DEFINE_PTY Name(pProductLine) Get(*auto #XSProductLineID) Set(*auto #XSProductLineID)
   //
   COM_OWNER.getPPRODUCTLINE = function()
   {
      return this.FLD.XSMYSSN.XSPRDLNID.get();
   };

   COM_OWNER.setPPRODUCTLINE = function( value )
   {
      this.FLD.XSMYSSN.XSPRDLNID.set( value );
   };

   //
   // DEFINE_PTY Name(pProductLineDescription) Get(*auto #XSProductLineDescription) Set(*auto #XSProductLineDescription)
   //
   COM_OWNER.getPPRODUCTLINEDESCRIPTION = function()
   {
      return this.FLD.XSMYSSN.XSPRDLNDS.get();
   };

   COM_OWNER.setPPRODUCTLINEDESCRIPTION = function( value )
   {
      this.FLD.XSMYSSN.XSPRDLNDS.set( value );
   };

   //
   // DEFINE_PTY Name(pProductCategory) Get(*auto #XSProductCategoryID) Set(*auto #XSProductCategoryID)
   //
   COM_OWNER.getPPRODUCTCATEGORY = function()
   {
      return this.FLD.XSMYSSN.XSPRDCTID.get();
   };

   COM_OWNER.setPPRODUCTCATEGORY = function( value )
   {
      this.FLD.XSMYSSN.XSPRDCTID.set( value );
   };

   //
   // DEFINE_PTY Name(pProductCategoryDescription) Get(*auto #XSProductCategoryDescription) Set(*auto #XSProductCategoryDescription)
   //
   COM_OWNER.getPPRODUCTCATEGORYDESCRIPTION = function()
   {
      return this.FLD.XSMYSSN.XSPRDCTDS.get();
   };

   COM_OWNER.setPPRODUCTCATEGORYDESCRIPTION = function( value )
   {
      this.FLD.XSMYSSN.XSPRDCTDS.set( value );
   };

   //
   // DEFINE_PTY Name(pProductSearch) Get(*auto #XSSearchValue) Set(*auto #XSSearchValue)
   //
   COM_OWNER.getPPRODUCTSEARCH = function()
   {
      return this.FLD.XSMYSSN.XSSRCHVL.get();
   };

   COM_OWNER.setPPRODUCTSEARCH = function( value )
   {
      this.FLD.XSMYSSN.XSSRCHVL.set( value );
   };

   //
   // DEFINE_PTY Name(pCategorySelected) Get(IsCategorySelected)
   //
   COM_OWNER.getPCATEGORYSELECTED = function()
   {
      return this.mthISCATEGORYSELECTED();
   };

   //
   // DEFINE_PTY Name(pCountry) Get(*auto #XSCountryName) Set(SetCountryChanged)
   //
   COM_OWNER.getPCOUNTRY = function()
   {
      return this.FLD.XSMYSSN.XSCNTRYNM.get();
   };

   COM_OWNER.setPCOUNTRY = function( value )
   {
      this.mthSETCOUNTRYCHANGED(value);
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

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
   }

   // -----------------------------
   // -- XSCRTQTY Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTQTY.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTQTY );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTQTY.DataClass, an: "PRIM_FLD", fn: "XSCRTQTY" } );
   }

   // -----------------------------
   // -- XSCRTPRC Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCRTPRC.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCRTPRC );
      };

      Lansa.createFieldClass( { co: Fields.XSCRTPRC.DataClass, an: "PRIM_FLD", fn: "XSCRTPRC" } );
   }

   // ------------------------------
   // -- XSCNTRYNM Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSCNTRYNM.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSCNTRYNM );
      };

      Lansa.createFieldClass( { co: Fields.XSCNTRYNM.DataClass, an: "PRIM_FLD", fn: "XSCNTRYNM" } );
   }

   // ------------------------------
   // -- STD_TEXTL Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_TEXTL.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_TEXTL );
      };

      Lansa.createFieldClass( { co: Fields.STD_TEXTL.DataClass, an: "PRIM_FLD", fn: "STD_TEXTL" } );
   }

   // ------------------------------
   // -- XSPRDLNID Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDLNID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDLNID );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDLNID.DataClass, an: "PRIM_FLD", fn: "XSPRDLNID" } );
   }

   // ------------------------------
   // -- XSPRDCTID Member Classes --
   // ------------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XSPRDCTID.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XSPRDCTID );
      };

      Lansa.createFieldClass( { co: Fields.XSPRDCTID.DataClass, an: "PRIM_FLD", fn: "XSPRDCTID" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT", "PRIM_WEB.MessageBox", "PRIM_WEB.DataRequest", "PRIM_FLD", "PRIM_MSGQ" ]
});

//# sourceURL=xsmyssn.js
