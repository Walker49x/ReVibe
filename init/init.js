const mongoose = require("mongoose");
const Listings = require("../models/listing");
const initData = require("./data");

main().then(()=>{
    console.log("Connection successfull :)");
})
.catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ReVibe');
}

const initialising = async () => {
    await Listings.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner:"65bfc48cf76e70af1bec0dac",}));
    await Listings.insertMany(initData.data);
    console.log("data is initialised");
}

initialising();