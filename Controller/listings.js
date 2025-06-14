const Listing = require("../Models/listing.js");

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
}

module.exports.rendernewform = (req , res) => {
    res.render('listings/new.ejs');
}

module.exports.showListing = (async  (req , res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path : 'reviews',
            populate : {
                path : 'author',
            }
        }).populate('owner');
    if(!listing){
        req.flash("error" , "the listing you requested does not exists sorry!!");
        res.redirect('/listings');
    }
    res.render('listings/show.ejs' , {listing});
});


module.exports.createListing = async (req, res, next) => {
    // console.log("req.body :",req.body);
    // console.log("Listing data:", req.body.listing) 
    
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;//req.user will have the information of the user which is logged in ..
    newListing.image = {url , filename};
    await newListing.save();
 
    req.flash("success" , "new listing created");
    res.redirect('/listings');
}

module.exports.editListing = async (req ,res) => {
    const {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "the listing you requested does not exists sorry!!");
        res.redirect('/listings');
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload" , "/upload/h_300,w_250");//to reduce the quality of the image for smooth performance
    req.flash("success" , "listing edited");
    res.render('listings/edit.ejs' , {listing , originalImageUrl});
}

module.exports.updateListing = async (req , res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});

    // If a new file is uploaded, update the image
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success" , "listing updated");
    res.redirect(`/listings/${id}`);
}


module.exports.destroyListing = async (req , res) => {
    const {id} = req.params;
    let deletedstring = await Listing.findByIdAndDelete(id);
    console.log("deleted : \n" , deletedstring);
    req.flash("success" , "listing deleted");
    res.redirect('/listings');
}