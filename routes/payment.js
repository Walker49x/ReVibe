const express = require('express');
const router = express.Router(  );
const wrapAsync = require('../utils/WrapAsync');
const { isLoggedIn } = require("../middleware");
const Razorpay = require('razorpay');
const Listing = require('../models/listing');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.get('/', async(req,res)=>{
    try{
        res.render('/product');
    } catch(error) {
        console.log(error)
    }
})

router.post('/', async(req,res)=>{
    try {
        const amount = req.body.amount;
        const options = {
            amount: amount,
            currency: 'INR',
        }
        razorpayInstance.orders.create(options, (err,order)=>{
            if(!err) {
                res.status(200).json({
                    success:true,
                    mssg: 'Order Created',
                    order_id:order.id,
                    amount:amount,
                    key_id: process.env.RAZORPAY_KEY_ID,
                    product_name: req.body.name,
                    description: req.body.description,
                    contact: req.body.ownerNumber,
                    name: req.body.ownerName,
                    email: req.body.ownerEmail,
                });
            }
            else {
                console.log(err)
                res.status(400).send({success:false, mssg:'Something went weong'});
            }
        })
    } catch(err) {
        res.status(400).send({success:false, mssg:err});
    }
})

module.exports = router;
