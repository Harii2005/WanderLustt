const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const Listing = require("../Airbnb/Models/listing.js");
const path = require('path')

app.set('view engine' , 'ejs'); 
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({extended : true}));

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() =>{
    console.log('connected to mongoDB Sucessfully...');
}).catch(err => {
    console.log('error');
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.listen(port , () => {
    console.log(`listing to  port  : ${port}`);
});

app.get('/' , (req , res) => {
    res.send('hi this is root');``
});


app.get('/listing' , async(req , res) =>{
    let sampleListing = new Listing ({
        title : 'my new car',
        discription : 'i baught my dream car', 
        price : 65000000,
        location : 'Kerala',
        country : 'India',
    });

    await sampleListing.save();
    console.log('item has been saved successfully');
    res.send('saved successfull');
});



//index route
app.get('/listings' , async (req , res) =>{
    let allListings = await Listing.find({});
    res.render('listings/index.ejs' , {allListings});
});


//new route
app.get('/listings/new' , (req , res) => {
    res.render('listings/new.ejs');
});

//use new route before shoe route bez if  /listings/:id accesing 1st then app.js will consider the new also as a id in  /listings/new

//show route
app.get('/listings/:id' , async (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show.ejs' , {listing});
});


//create route
app.post('/listings' , async(req , res) => {
    // let {title , discription , image , price , country  , location} = req.body;
    let listing = req.body.listing;
    const newlisting = new Listing(listing);
    console.log(listing);
    await newlisting.save();
    res.redirect('/listings');
});

