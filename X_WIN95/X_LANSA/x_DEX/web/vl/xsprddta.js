// -----------------------------
// -- Reusable Part: XSPRDDTA --
// -----------------------------
LANSA.addComponent(
{
   id: "XSPRDDTA", 
   nm: "XSProductData", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "Product Object", 
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
      XSPRDID:
      {
         nm: "XSPRDID",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product ID",
         h1: "Product",
         h2: "ID",
         h3: " ",
         de: "Product ID",
         dv: "",
         ia: [ "FE" ]
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
      XSPRDDSC:
      {
         nm: "XSPRDDSC",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Desc",
         h1: "Product",
         h2: "Description",
         h3: " ",
         de: "Product Description",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPRDMDL:
      {
         nm: "XSPRDMDL",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Model",
         h1: "Product",
         h2: "Model",
         h3: " ",
         de: "Product Model",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDIMG:
      {
         nm: "XSPRDIMG",
         ft: "C",
         ln: 200,
         dc: 0,
         lb: "Image Link",
         h1: "Image",
         h2: "Link",
         h3: " ",
         de: "Product Image Link",
         dv: "",
         ia: [ "FE", "LC" ]
      },
      XSPRDSTS:
      {
         nm: "XSPRDSTS",
         ft: "A",
         ln: 10,
         dc: 0,
         lb: "Product Stock S",
         h1: "Product",
         h2: "Stock",
         h3: "Status",
         de: "Product Stock Status",
         dv: "",
         ia: [ "FE" ]
      },
      XSPRDPRC:
      {
         nm: "XSPRDPRC",
         ft: "S",
         ln: 9,
         dc: 2,
         ec: "3",
         lb: "Product Price",
         h1: "Product",
         h2: "Price",
         h3: " ",
         de: "Product Price",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
      XSPRDDTL:
      {
         nm: "XSPRDDTL",
         ft: "C",
         ln: 100,
         dc: 0,
         lb: "Product Detail",
         h1: "Product",
         h2: "Detail",
         h3: " ",
         de: "Product Detail",
         dv: "",
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
         ID: 
         {
            da: "r"
         },

         Category: 
         {
            da: "r"
         },

         ProductDesc: 
         {
            da: "r"
         },

         ProductModel: 
         {
            da: "r"
         },

         ImageLink: 
         {
            da: "r"
         },

         StockStatus: 
         {
            da: "r"
         },

         UnitPrice: 
         {
            da: "r"
         },

         ProductDetail: 
         {
            da: "r"
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
         var fld = this.addFields( "XSPRDDTA", Fields );

         // -----------------------------------------------
         // -- Define the UDC information for #COM_OWNER --
         // -----------------------------------------------
         this.addListFields( { "XSPRDID": fld.XSPRDID, "XSPRDLNID": fld.XSPRDLNID, "XSPRDCTID": fld.XSPRDCTID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDMDL": fld.XSPRDMDL, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDPRC": fld.XSPRDPRC, "XSPRDDTL": fld.XSPRDDTL } );

         // ------------------
         // -- Create Lists --
         // ------------------
         var list = this.addLists( "XSPRDDTA" );

         //
         // DEF_LIST Name(#ProductList) Fields(#XSProductID #XSProductLineID #XSProductCategoryID #XSProductDescription #XSProductModel #XSProductImageLink #XSProductStockStatus #XSProductPrice #XSProductDetail) Type(*Working) Entrys(1)
         //
         list.PRODUCTLIST = Lansa.createList( { "XSPRDID": fld.XSPRDID, "XSPRDLNID": fld.XSPRDLNID, "XSPRDCTID": fld.XSPRDCTID, "XSPRDDSC": fld.XSPRDDSC, "XSPRDMDL": fld.XSPRDMDL, "XSPRDIMG": fld.XSPRDIMG, "XSPRDSTS": fld.XSPRDSTS, "XSPRDPRC": fld.XSPRDPRC, "XSPRDDTL": fld.XSPRDDTL }, null );
      }
   });

   // -----------------------------
   // -- START of RDMLX routines --
   // -----------------------------

   //
   // DEFINE_PTY Name(ID) Get(*auto #XSProductID)
   //
   COM_OWNER.getID = function()
   {
      return this.FLD.XSPRDDTA.XSPRDID.get();
   };

   //
   // DEFINE_PTY Name(Category) Get(*auto #XSProductCategoryID)
   //
   COM_OWNER.getCATEGORY = function()
   {
      return this.FLD.XSPRDDTA.XSPRDCTID.get();
   };

   //
   // DEFINE_PTY Name(ProductDesc) Get(*auto #XSProductDescription)
   //
   COM_OWNER.getPRODUCTDESC = function()
   {
      return this.FLD.XSPRDDTA.XSPRDDSC.get();
   };

   //
   // DEFINE_PTY Name(ProductModel) Get(*auto #XSProductModel)
   //
   COM_OWNER.getPRODUCTMODEL = function()
   {
      return this.FLD.XSPRDDTA.XSPRDMDL.get();
   };

   //
   // DEFINE_PTY Name(ImageLink) Get(*auto #XSProductImageLink)
   //
   COM_OWNER.getIMAGELINK = function()
   {
      return this.FLD.XSPRDDTA.XSPRDIMG.get();
   };

   //
   // DEFINE_PTY Name(StockStatus) Get(*Auto #XSProductStockStatus)
   //
   COM_OWNER.getSTOCKSTATUS = function()
   {
      return this.FLD.XSPRDDTA.XSPRDSTS.get();
   };

   //
   // DEFINE_PTY Name(UnitPrice) Get(*Auto #XSProductPrice)
   //
   COM_OWNER.getUNITPRICE = function()
   {
      return this.FLD.XSPRDDTA.XSPRDPRC.get();
   };

   //
   // DEFINE_PTY Name(ProductDetail) Get(*Auto #XSProductDetail)
   //
   COM_OWNER.getPRODUCTDETAIL = function()
   {
      return this.FLD.XSPRDDTA.XSPRDDTL.get();
   };

   // ---------------------------
   // -- END of RDMLX routines --
   // ---------------------------

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xsprddta.js
