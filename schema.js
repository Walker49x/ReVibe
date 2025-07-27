const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        price : Joi.number().required().min(0),
        image : Joi.string().allow("",null),
        location : Joi.string().required(),
        country : Joi.string().required(),
        category : Joi.string(),
        date : Joi.date(),
        tax : Joi.number(),
        like : Joi.number(),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        comment : Joi.string().required(),
        rating : Joi.number().min(1).max(5).required(),
        date : Joi.date(),
    }).required()
});