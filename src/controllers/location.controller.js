const District = require("../models/districts.schema");
const City = require("../models/city.schema");

exports.getDistricts = async (req, res) => {
  const districts = await District.find().sort({ name: 1 });
  res.json(districts);
};

exports.getCitiesByDistricts = async (req, res) => {
  const cities = await City.find({
    district: req.params.districtId,
  }).sort({ name: 1 });

  res.json(cities);
};
