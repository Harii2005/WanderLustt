const mongoose = require('mongoose');
const initdata =  require('./data');
const Listing = require("../Models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() =>{
    console.log('connected to mongoDB Sucessfully...');
}).catch(err => {
    console.log('error');
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


const initdb = async() =>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
        ...obj ,
        owner :  "684a92b1a75791931a3cab4c",
    }));
    await Listing.insertMany(initdata.data); 
};
initdb();
