const express = require('express');
const router = express.Router();
const Listing = require("../Models/listing.js"); 
const WrapAsync = require('../utils/WrapAsync.js');

//middleware
const {isLoggedIn} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");


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
    const listing = await Listing.findById(id)
        .populate('reviews')
        .populate('owner');
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
    newListing.owner = req.user._id;//req.user will have the information of the user which is logged in ..
    await newListing.save();

    req.flash("success" , "new listing created");
    res.redirect('/listings');
  }));

//edit route 
router.get('/:id/edit' , isLoggedIn ,isOwner, WrapAsync(async (req ,res) => {
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
router.put('/:id' , isLoggedIn , isOwner ,  validateListing , WrapAsync(async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    req.flash("success" , "listing updated");
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete('/:id' , isLoggedIn ,  isOwner , WrapAsync(async (req , res) => {
    const {id} = req.params;
    let deletedstring = await Listing.findByIdAndDelete(id);
    console.log("deleted : \n" , deletedstring);
    req.flash("success" , "listing deleted");
    res.redirect('/listings');
}));

module.exports = router;