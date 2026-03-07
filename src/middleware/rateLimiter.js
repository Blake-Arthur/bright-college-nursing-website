const rateLimit = require("express-rate-limit");

const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20, //20 req per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many enquiries submited. Please try again later.",
  },
});

module.exports = { enquiryLimiter };
