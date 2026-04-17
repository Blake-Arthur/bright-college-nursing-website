const Enquiry = require("../models/enquiry-form.schema");
const City = require("../models/city.schema");

exports.createEnquiry = async (req, res) => {
  try {
    const { name, phone, altPhone, email, district, city, course, visitDate, hearAbout, status } =
      req.body;

    //validate city belongs to district selected
    const cityDoc = await City.findById(city);

    if (!cityDoc || cityDoc.district.toString() !== district) {
      return res.status(400).json({
        message: "Invalid city selection",
      });
    }

    /* =========================
       DUPLICATE ENQUIRY CHECK
    ========================= */

    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const count = await Enquiry.countDocuments({
      phone,
      createdAt: { $gte: last24Hours },
    });

    if (count >= 3) {
      return res.status(429).json({
        message: "Too many enquiries submitted from this phone today.",
      });
    }

    /* =========================
       SAVE ENQUIRY
    ========================= */

    const enquiry = await Enquiry.create({
      name,
      phone,
      altPhone,
      email,
      district,
      city,
      visitDate,
      hearAbout,
      course,
      status,
    });

    res.status(201).json({
      message: "Enquiry saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
