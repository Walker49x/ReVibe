const express = require("express");
const router = express.Router({mergeParams:true});
const User = require("../models/user");
const Listing = require("../models/listing");
const wrapAsync = require("../utils/WrapAsync");
const { isLoggedIn } = require("../middleware");

router.get("/:id", isLoggedIn ,wrapAsync(async(req, res) => {
  let listId = req.params.id;
  const id = req.user._id;
  const user = await User.findById(id);
  const listing = await Listing.findById(listId).populate('owner');
  res.render("listings/chat.ejs", {user, listing});
}));

router.post("/:id", wrapAsync(async(req,res)=>{
  console.log(req.body);

  // var params = {
  //           name: document.getElementById("name").value,
  //           email: document.getElementById("email").value,
  //           phone: document.getElementById("phone").value,
  //           query: document.getElementById("query").value,
  //           offer: document.getElementById("offer").value,
  //           // to_email: "chirag240504@gmail.com",
  //       };
  //       const serviceID = "service_pxg531h";
  //       const templateID = "template_ejkhluq";

  //       emailjs.send(serviceID, templateID, params)
  //           .then((res) => {
  //               alert("Your message sent sucessfully");
  //           })
  //           .catch((err) => console.log(err));
  res.redirect("/listings");
}))

module.exports = router;
