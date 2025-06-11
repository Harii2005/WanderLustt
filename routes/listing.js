const express = require('express');
const router = express.Router();
const Listing = require("../Models/listing.js"); 
const WrapAsync = require('../utils/WrapAsync.js');
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema } = require('../Schema.js');
const {isLoggedIn} = require("../middleware.js");

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
router.get('/new' , isLoggedIn , (req , res) => {
    res.render('listings/new.ejs');
});

//use new route before shoe route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

//show route
router.get('/:id' , WrapAsync(async  (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    if(!listing){
        req.flash("error" , "the listing you requested does not exists sorry!!");
        res.redirect('/listings');
    }
    res.render('listings/show.ejs' , {listing});
}));


//Create Route
router.post('/', isLoggedIn , validateListing, WrapAsync(async (req, res, next) => {
    // console.log("req.body :",req.body);
    // console.log("Listing data:", req.body.listing)  
    const newListing = new Listing(req.body.listing);
    await newListing.save();

    req.flash("success" , "new listing created");
    res.redirect('/listings');
  }));

//edit route 
router.get('/:id/edit' , isLoggedIn , WrapAsync(async (req ,res) => {
    const {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "the listing you requested does not exists sorry!!");
        res.redirect('/listings');
    }
    req.flash("success" , "listing edited");
    res.render('listings/edit.ejs' , {listing});
}));

//update route

router.put('/:id' , isLoggedIn , validateListing , WrapAsync(async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    req.flash("success" , "listing updated");
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete('/:id' , isLoggedIn , WrapAsync(async (req , res) => {
    const {id} = req.params;
    let deletedstring = await Listing.findByIdAndDelete(id);
    console.log("deleted : \n" , deletedstring);
    req.flash("success" , "listing deleted");
    res.redirect('/listings');
}));

module.exports = router;