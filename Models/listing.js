const mongoose = require('mongoose');
const review = require('./review');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    image: {
      filename: String,
      url: String,
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
  });

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
