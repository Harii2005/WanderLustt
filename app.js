const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const Listing = require("./Models/listing.js"); 
const path = require('path')
const methodOverride = require('method-override');
// const method = methodOverride('over-override');
const ejsmate = require('ejs-mate');
const ExpressError = require("./utils/ExpressError.js");
const WrapAsync = require('./utils/WrapAsync.js');

app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({extended : true}));
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


//root
app.get('/' , (req , res) => {
    res.send('hi this is root');
});


//index route
app.get('/listings', WrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}));


//new route
app.get('/listings/new' , (req , res) => {
    res.render('listings/new.ejs');
});

//use new route before shoe route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

//show route
app.get('/listings/:id' ,WrapAsync(async  (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show.ejs' , {listing});
}));


//create route
app.post('/listings' , WrapAsync(async(req , res , next) => {
    // let {title , discription , image , price , country  , location} = req.body;
    // let listing = req.body.listing;//this is the alternative of the above
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect('/listings');
}));

//edit route

app.get('/listings/:id/edit' ,WrapAsync(async (req ,res) => {
    const {id} = req.params;
    let listing = await Listing.findById(id)
    res.render('listings/edit.ejs' , {listing});
}));

//update route

app.put('/listings/:id' , WrapAsync(async (req , res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing})
    res.redirect(`/listings/${id}`);
}));


//delete route
app.delete('/listings/:id' , WrapAsync(async (req , res) => {
    const {id} = req.params;
    let deletedstring = await Listing.findByIdAndDelete(id);
    console.log("deleted : \n" , deletedstring);
    res.redirect('/listings');
}));

app.all("*", (req, res, next) => { 
    next(new ExpressError(404 , "page not found!"));
});

app.use((err , req, res , next)=>{ //for handling asynchronous errors
    let{statusCode = 500  , message = "something went wrong"} = err;
    res.status(statusCode).send(message);
});



app.listen(port , () => {
    console.log(`listing to  port  : ${port}`);
});


