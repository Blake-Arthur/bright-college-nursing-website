const Joi = require("joi");

const NAME_REGEX = /^[a-zA-Z .'-]+$/;
const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

const enquiryValidationSchema = Joi.object({
  course: Joi.string().valid("bsc", "pbbsc", "gnm", "anm", "dmlt").required(),

  name: Joi.string()
    .trim()
    .custom((value, helpers) => {
      return value.replace(/\s+/g, " ");
    })
    .min(3)
    .max(100)
    .pattern(NAME_REGEX)
    .required(),

  phone: Joi.string().trim().pattern(INDIAN_MOBILE_REGEX).required(),

  altPhone: Joi.string().trim().pattern(INDIAN_MOBILE_REGEX).invalid(Joi.ref("phone")).required(),

  email: Joi.string().trim().lowercase().email().max(150).allow(null, ""),

  district: Joi.string().hex().length(24).required(),

  city: Joi.string().hex().length(24).required(),

  visitDate: Joi.date().min("now").required(),

  hearAbout: Joi.string().valid("website", "ads", "referral", "social").required(),
}).options({ abortEarly: false, stripUnknown: true }); //return all errors

module.exports = enquiryValidationSchema;
