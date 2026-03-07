const express = require("express");
const router = express.Router();

const { enquiryLimiter } = require("../middleware/rateLimiter");
const { validateRequest } = require("../middleware/validateRequest");
const enquiryValidationSchema = require("../validations/enquiry.validations");

const enquiryController = require("../controllers/enquiry.controller");

router.post(
  "/",
  enquiryLimiter,
  validateRequest(enquiryValidationSchema),
  enquiryController.createEnquiry,
);

module.exports = router;
