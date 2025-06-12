const Listing = require("./Models/listing");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema , reviewSchema } = require('./Schema.js');



//LISTINGS
module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error" , "you must be logged In");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl){
        res.locals.originalUrl = req.session.redirectUrl;//originUrl will be having the next end point ie in add newisting after login its "/listings/new"
        //it cannot be saved in session as after passport.authticate() it will delete all the sessions ,  so here we have to save it in locals
    }
    next();
}


module.exports.isOwner = async (req , res , next) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    // console.log(listing);
    // console.log(res.locals.currentUser);
    if (!listing.owner.equals(res.locals.currentUser._id)) {//use .equals() method when comparing somthing with mongoose
        req.flash("error" , "you are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//function of middleware for validation of Schema  for LISTINGS
module.exports.validateListing = (req , res , next)=> { //function of validation of schema(Middleware)
    let {error} = listingSchema.validate(req.body); // Validate the request body against the schema
    // console.log(error);
    if (error) {
        let errMsg = error.details.map((el)=>el.message).join(",")//this means that all the eroor msg will by combined in errMsg with a coma(",") btw each error messaeg
        throw new ExpressError(400, errMsg);
    }else {
        next();
    }
};




//REVIEWS
//server side validation for review
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    };
};