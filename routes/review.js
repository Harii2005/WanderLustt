const express = require('express');
const router = express.Router({mergeParams :true});

const Listing = require("../Models/listing.js"); 
const Review = require("../Models/review.js"); 
const WrapAsync = require('../utils/WrapAsync.js');

//middlewares
const {validateReview} = require("../middleware.js");
const {isLoggedIn} = require("../middleware.js");
const {isReviewAuthor} = require("../middleware.js");





// REVIEW ROUTES
//reviews post route
router.post("/" , isLoggedIn , validateReview , WrapAsync(async(req , res)=>{
    let listing   = await Listing.findById(req.params.id);//params is used as id is passed via endpoint
    let newReview = new Review(req.body.review);//bez post req is used
    // console.log(req.user._id); 
    newReview.author = req.user._id;// we push only the objectId of UserSchema in reviewSchema
    listing.reviews.push(newReview);
    // console.log(newReview);
    // console.log(listing);

    await listing.save();
    await newReview.save();
    req.flash("success" , "new review created");
    res.redirect(`/listings/${listing.id}`);
}));

//delete reviews  button
router.delete("/:reviewId", isLoggedIn , isReviewAuthor , WrapAsync(async(req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});//this will remove the specified reviewId from listing
    
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "review deleted");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;