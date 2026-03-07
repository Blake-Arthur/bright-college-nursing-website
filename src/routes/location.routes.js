const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location.controller");

//get all districts
router.get("/districts", locationController.getDistricts);

//get all cities by districts
router.get("/cities/:districtId", locationController.getCitiesByDistricts);

module.exports = router;
