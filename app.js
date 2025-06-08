const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const Listing = require("./Models/listing.js"); 
const Review = require("./Models/review.js"); 
const path = require('path')
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const WrapAsync = require('./utils/WrapAsync.js');
const {listingSchema , reviewSchema} = require('./Schema.js');
const listings = require("./routes/listing.js");



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

//server side validation for review
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};



app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs' , ejsmate);
app.use(express.static(path.join(__dirname,'/public')))



const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() =>{
    console.log('connected to mongoDB Sucessfully...');
}).catch(err => {
    console.log('error');
})

async function main() {
    await mongoose.connect(MONGO_URL);
}



app.use("/listings" , listings);



//root
app.get('/' , (req , res) => {
    res.send('hi this is root');
});

// //LISTING ROUTES
// //new route
// app.get('/listings/new' , (req , res) => {
//     res.render('listings/new.ejs');
// });

// //use new route before shoe route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

// //show route
// app.get('/listings/:id' , WrapAsync(async  (req , res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate('reviews');
//     res.render('listings/show.ejs' , {listing});
// }));


// //Create Route
// app.post('/listings', validateListing, WrapAsync(async (req, res, next) => {
//     // console.log("req.body :",req.body);
//     // console.log("Listing data:", req.body.listing)  
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect('/listings');
//   }));

// //edit route 
// app.get('/listings/:id/edit' ,WrapAsync(async (req ,res) => {
//     const {id} = req.params;
//     let listing = await Listing.findById(id)
//     res.render('listings/edit.ejs' , {listing});
// }));


// //update route
// app.put('/listings/:id' , validateListing , WrapAsync(async (req , res) => {
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id , {...req.body.listing})
//     res.redirect(`/listings/${id}`);
// }));


// //delete route
// app.delete('/listings/:id' , WrapAsync(async (req , res) => {
//     const {id} = req.params;
//     let deletedstring = await Listing.findByIdAndDelete(id);
//     console.log("deleted : \n" , deletedstring);
//     res.redirect('/listings');
// }));




// REVIEW ROUTES
//reviews post route
app.post("/listings/:id/reviews" , validateReview , WrapAsync(async(req , res)=>{
    let listing   = await Listing.findById(req.params.id);//params is used as id is passed via endpoint
    let newReview = new Review(req.body.review);//bez post req is used

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    res.redirect(`/listings/${listing.id}`);
}));

//delete reviews  button
app.delete("/listings/:id/reviews/:reviewId", WrapAsync(async(req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});//this will remove the specified reviewId from listing
    
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

app.all("*", (req, res, next) => { 
    next(new ExpressError(404 , "page not found!"));
});

app.use((err , req, res , next)=>{ //for handling asynchronous errors
    let{statusCode = 500  , message = "something went wrong"} = err;
    res.status(statusCode).render('error.ejs' , {err});
});

app.listen(port , () => {
    console.log(`listing to  port  : ${port}`);
});