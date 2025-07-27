const express = require("express");
const router = express.Router({mergeParams:true});
const Listing = require("../models/listing");
const User = require("../models/user");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/WrapAsync");
const {listingSchema, reviewSchema} = require("../schema");
const {isLoggedIn} = require("../middleware.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage });

const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error) {
        console.log(error);
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// index route

// listing index
router.get("/", wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

// filter listing
router.get("/filter/:page", wrapAsync(async(req,res)=>{
    const filter = req.params;
    const allListings = await Listing.find({category : filter.page});
    const count = allListings.length;
    res.render("listings/filter.ejs", {allListings, filter, count});    
}));

// search listing
router.post("/search", async (req,res)=>{
    const searchField = req.body.searchField;
    let key = new RegExp(searchField, 'i');
    const allListings = await Listing.find({title : {$regex: key} });
    const count = allListings.length;
    res.render("listings/search.ejs", {allListings, searchField, count});
});

router.get("/search", (req,res)=>{
    res.render("/listings/search.ejs");
});

// create listing
router.get("/new",isLoggedIn, wrapAsync(async(req,res)=>{
    res.render("listings/new.ejs");
}));

// router.post("/", validateListing, wrapAsync(async (req,res)=> {
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     req.flash("success", "New Listing Created!");
//     res.redirect("/listings");
// }));

// router.post("/",upload.single('listing[image]'),wrapAsync(async (req,res)=>{
//     res.send(req.file);
// }));

router.post("/", isLoggedIn , upload.single("listing[image]"), validateListing, wrapAsync(async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename; 
    // console.log(url , "..", filename);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    await newListing.save();
    req.flash("success","New Listing Created!");  
    res.redirect("/listings");
}))


// show listing
router.get("/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate:{
            path:"author",
        }
    }).populate("owner");
    if(!listing) {
        req.flash("failure", "The listing you requested doesn't exist");
        res.redirect("/listings");
        return;
    }
    let flag = false;
    if(req.user) {
        if(req.user.favourates.includes(id)) {
            flag = true;
        }
    }
    res.render("listings/show.ejs", {listing, flag});
}));

// Add favourate
router.post("/:id/addFav", isLoggedIn, wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("failure", "Listing not found");
        return res.redirect(`/listings/${id}`);
    }
    let currUser = await User.findById(req.user._id);
    if(currUser.favourates.includes(id)) {
        const index = currUser.favourates.indexOf(id);
        currUser.favourates.splice(index, 1);
        await currUser.save();
        req.flash("success", "Listing removed to favourates");
        res.redirect(`/listings/${id}`);
    } else {
        currUser.favourates.push(listing._id);
        await currUser.save();
        req.flash("success", "Listing added to favourates");
        res.redirect(`/listings/${id}`);
    }
}));

// favoutites
router.get("/:id/favourates", async (req,res)=>{
    let {id} = req.params;
    const currUser = await User.findById(id).populate('favourates');
    let favourates = currUser.favourates;
    let count = favourates.length;
    res.render("listings/favourates.ejs", {favourates,count});
})

// edit listing
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//update listing
router.put("/:id", validateListing, wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Edited Successfully!");
    res.redirect(`/listings`);
}));


// delete listing
router.delete("/:id", isLoggedIn, wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listings");
}));

module.exports = router;
