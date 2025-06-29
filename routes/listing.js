const express = require('express');
// const User = require("../Models/user.js");
const router = express.Router();
// const Listing = require("../Models/listing.js"); 
const WrapAsync = require('../utils/WrapAsync.js');
const ListingController= require('../Controller/listings.js');

//middleware
const {isLoggedIn} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");

//to upload files
const {storage} = require('../clouldConfig.js');

const multer  = require('multer')
const upload = multer({ storage});//stores in clouldinary

//  '/' => "/lsiting/"



//using router.route


router
    .route('/')
    .get(WrapAsync(ListingController.index)) // Index Route
    .post(
      isLoggedIn,
      upload.single("listing[image]"), // Middleware for file upload (multer)
      validateListing,
      WrapAsync(ListingController.createListing)
);


//new route
router.get('/new' , isLoggedIn , ListingController.rendernewform);//new route should be above /:id route other it will consider /new as id


router
    .route("/:id")
    .get(WrapAsync(ListingController.showListing))//show route
    .put( //Update Route
        isLoggedIn , 
        isOwner ,  
        upload.single("listing[image]") ,
        validateListing , 
        WrapAsync(ListingController.updateListing)
    )
    .delete( isLoggedIn ,  isOwner , WrapAsync(ListingController.destroyListing));//delete Route


//edit route 
router.get('/:id/edit' , isLoggedIn ,isOwner, WrapAsync(ListingController.editListing));




// //index route
// router.get('/',WrapAsync(ListingController.index));


// //new route
// router.get('/new' , isLoggedIn , ListingController.rendernewform);

// //use new route before show route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

// //show route
// router.get('/:id' , WrapAsync(ListingController.showListing));


// //Create Route
// router.post('/', isLoggedIn , validateListing, WrapAsync(ListingController.createListing));;


// //update route
// router.put('/:id' , isLoggedIn , isOwner ,  validateListing , WrapAsync(ListingController.updateListing));


// //delete route
// router.delete('/:id' , isLoggedIn ,  isOwner , WrapAsync(ListingController.destroyListing));

module.exports = router;