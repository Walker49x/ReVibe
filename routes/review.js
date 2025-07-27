const express = require("express");
const router = express.Router({mergeParams:true});
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Listing = require("../models/listing");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/WrapAsync");
const {listingSchema, reviewSchema} = require("../schema");
const Review = require("../models/review.js");

const validateReview = (req, res, next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        console.log(error);
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

// create reviews
router.post("/", validateReview, wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);  
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
}));

router.delete("/:reviewId", wrapAsync(async (req,res)=> {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Successfully!");
    res.redirect(`/listings/${id}`);
}));
module.exports = router;