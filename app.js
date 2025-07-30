if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
// const dbUrl = process.env.ATLASDB_URL//for getting the password of MongoAtlas
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
// const WrapAsync = require('./utils/WrapAsync.js');
// const {listingSchema , reviewSchema} = require('./Schema.js');

//Router
const listingsRouter = require("./routes/listing.js");
const reviewsRouter  = require("./routes/review.js");
const userRouter = require("./routes/user.js");
//the commented parts are not needed as they are now used in routes folder 

const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// //this is for deploying in mongoStore
// const store = MongoStore.create({
//     mongoUrl: dbUrl, // this will store the session in MongoDB Atlas
//     crypto: {
//         secret: process.env.SECRET,
//     },
//     touchAfter : 24 * 3600,//this will clear the session after 25hour
// });
// store.on("error" , ()=>{
//     console.log("error in mongo session store" , err);
// });

const sessionOptions = {
    // store,//this is to store in mongo atlas
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
        maxAge: 1000 * 60 * 60 * 24 * 7, // Also 7 days
        httpOnly: true,
    }
};
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./Models/user.js');


app.use(flash());
app.use(session(sessionOptions));

//authentication
app.use(passport.initialize());//Starts Passport (middleware for authentication).
app.use(passport.session());// Enables persistent login sessions using cookies + sessions.
passport.use(new LocalStrategy(User.authenticate()));//This tells Passport to use the Local Strategy (i.e., username & password login), User.authenticate() comes from passport-local-mongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req , res , next)=>{
    res.locals.success =  req.flash("success");
    res.locals.error =  req.flash("error");
    res.locals.currentUser = req.user;//this means that req.user will be saved in the currentUser it is done beacause in ejs req.user is not possoble so currentUser is used
    next();
});


app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs' , ejsmate);
app.use(express.static(path.join(__dirname,'/public')));



const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() =>{
    console.log('connected to mongoDB Sucessfully...');
}).catch(err => {
    console.log('error');
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

// // using hashed passwords
// app.get('/demouser' , async (req , res)=>{
//     let fakeUser = new User({
//         email : "student@1234",
//         username : "student",//username and pass is already declared in user.js
//     })
//     let regesteredUser = await User.register(fakeUser , "passsword@1234");
//     res.send(regesteredUser);
// });


app.use("/listings" , listingsRouter);
app.use("/listings/:id/reviews" , reviewsRouter);
app.use('/' , userRouter);


app.all("*", (req, res, next) => { 
    next(new ExpressError(404 , "page not found!"));
});

app.use((err , req, res , next)=>{ //for handling asynchronous errors
    let{statusCode = 500  , message = "something went wrong"} = err; //this means if statusCode and message not given then it will take that as default token..
    res.status(statusCode).render('error.ejs' , {err});
});

app.listen(port , () => {
    console.log(`listing to  port  : ${port}`);
});