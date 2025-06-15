const mongoose = require('mongoose');
const Review = require('./review.js');
const Schema = mongoose.Schema;
const User = require("./user.js");

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: {
      url: String,
      filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews : [
      {
        type : Schema.Types.ObjectId,//this means it will store the objectID of another collection here it is Review Scheam
        ref  : 'Review',
      },
    ],
    owner : {
      type : Schema.Types.ObjectId,//this means it will store the objectID of another collection here it is Review Scheam
      ref  : 'user',
    },
    geometry : {
      type : {
        type : String,
        enum : ['Point'],
        required : true
      },
      coordinates : {
        type : [Number],
        required : true
      },
    }
  });

  listingSchema.post('findOneAndDelete', async (listing) =>{
    if(listing){
      await Review.deleteMany({_id : {$in: listing.reviews}});
    }
   console.log('hai') ;
  });

  

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
