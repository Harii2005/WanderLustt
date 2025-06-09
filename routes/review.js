const express = require('express');
const router = express.Router({mergeParams :true});

const Listing = require("../Models/listing.js"); 
const Review = require("../Models/review.js"); 
const WrapAsync = require('../utils/WrapAsync.js');
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require('../Schema.js');


//server side validation for review
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    };
};


// REVIEW ROUTES
//reviews post route
router.post("/" , validateReview , WrapAsync(async(req , res)=>{
    let listing   = await Listing.findById(req.params.id);//params is used as id is passed via endpoint
    let newReview = new Review(req.body.review);//bez post req is used

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();
    req.flash("success" , "new review created");
    res.redirect(`/listings/${listing.id}`);
}));

//delete reviews  button
router.delete("/:reviewId", WrapAsync(async(req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});//this will remove the specified reviewId from listing
    
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "review deleted");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;