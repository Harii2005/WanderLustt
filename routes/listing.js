const express = require('express');
const router = express.Router();
const Listing = require("../Models/listing.js"); 
const WrapAsync = require('../utils/WrapAsync.js');
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require('../Schema.js');

//function of middleware for validation of Schema 
const validateListing = (req , res , next)=> { //function of validation of schema(Middleware)
    let {error} = listingSchema.validate(req.body); // Validate the request body against the schema
    // console.log(error);
    if (error) {
        let errMsg = error.details.map((el)=>el.message).join(",")//this means that all the eroor msg will by combined in errMsg with a coma(",") btw each error messaeg
        throw new ExpressError(400, errMsg);
    }else {
        next();
    }
};


//index route
router.get('/', WrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}));


//new route
router.get('/new' , (req , res) => {
    res.render('listings/new.ejs');
});

//use new route before shoe route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

//show route
router.get('/:id' , WrapAsync(async  (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    res.render('listings/show.ejs' , {listing});
}));


//Create Route
router.post('/', validateListing, WrapAsync(async (req, res, next) => {
    // console.log("req.body :",req.body);
    // console.log("Listing data:", req.body.listing)  
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
  }));

//edit route 
router.get('/:id/edit' ,WrapAsync(async (req ,res) => {
    const {id} = req.params;
    let listing = await Listing.findById(id)
    res.render('listings/edit.ejs' , {listing});
}));

//update route

router.put('/:id' , validateListing , WrapAsync(async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing})
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete('/:id' , WrapAsync(async (req , res) => {
    const {id} = req.params;
    let deletedstring = await Listing.findByIdAndDelete(id);
    console.log("deleted : \n" , deletedstring);
    res.redirect('/listings');
}));

module.exports = router;