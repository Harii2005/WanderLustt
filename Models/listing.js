const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String , 
        required : true,
    }, 
    discription : String ,
    image       : {
        type: String,
        default: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=3083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" 
          ? "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=3083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : v // this is  a turnary operation in which if else is used search in GPT for more information
    } , 
    price       : Number , 
    location    : String , 
    country     : String

});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;
