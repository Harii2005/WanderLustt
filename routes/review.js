const express = require('express');
const router = express.Router({mergeParams :true});

const Listing = require("../Models/listing.js"); 
const Review = require("../Models/review.js"); 
const WrapAsync = require('../utils/WrapAsync.js');

//middlewares
const {validateReview} = require("../middleware.js");
const {isLoggedIn} = require("../middleware.js");
const {isReviewAuthor} = require("../middleware.js");


const ReviewController = require("../Controller/review.js");


// REVIEW ROUTES
//reviews create post route
router.post("/" , isLoggedIn , validateReview , WrapAsync(ReviewController.createReview));

//delete reviews  button
router.delete("/:reviewId", isLoggedIn , isReviewAuthor , WrapAsync(ReviewController.destroyReview));;


module.exports = router;