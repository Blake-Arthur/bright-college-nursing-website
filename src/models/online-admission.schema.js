const mongoose = require("mongoose");
const { validate } = require("uuid");
const verheoff = require("verheoff");

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INDIAN_PIN_REGEX = /^[1-9][0-9]{5}$/;
const AADHAAR_REGEX = /^[2-9]\d{11}$/;

const onlineAdmmission = new mongoose.Schema({
  course: {
    type: String,
    required: [true, "Course is required"],
    lowercase: true,
    enum: {
      values: ["bsc", "pbbsc", "gnm", "anm", "dmlt"],
      message: "Selected course in invalid",
    },
    index: true,
  },

  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [100, "Name cannot exceed 100 characters"],
  },

  phone: {
    type: String,
    required: [true, "Student mobile number is required"],
    trim: true,
    match: [INDIAN_MOBILE_REGEX, "Enter a valid 10-digit number"],
    index: true,
  },

  guardianname: {
    type: String,
    required: [true, "Guardian name is required"],
    trim: true,
    minlength: [3, "Guardian name must be at least 3 characters"],
    maxlength: [100, "Guardian name cannot exceed 100 characters"],
    validate: {
      validator: function (value) {
        return value != this.name;
      },
      message: "Student and guardian's name should be different",
    },
  },

  altPhone: {
    type: String,
    required: [true, "Student mobile number is required"],
    trim: true,
    match: [INDIAN_MOBILE_REGEX, "Enter a valid 10-digit number"],
    validate: {
      validator: function (value) {
        return value != this.phone;
      },
      message: "Please enter a different mobile number.",
    },
  },

  email: {
    type: String,
    default: null,
    lowercase: true,
    trim: true,
    maxlength: [150, "Email cannot be more than 150 characters"],
    match: [EMAIL_REGEX, "Enter a valid email address"],
    index: true,
    sparse: true,
  },

  caste: {
    type: String,
    required: true,
    enum: {
      values: ["SC", "ST", "OBC_SEBC", "GENERAL"],
      message: "Selected course is invalid",
    },
    index: true,
  },

  address: {
    areaAddress: {
      type: String,
      required: [true, "Area Address is required."],
      trim: true,
      minlength: [10, "Address must be atleast 10 characters."],
      maxlength: [300, "Address cannot exceed 300 characters."],
      validate: {
        validator: function (value) {
          return value.trim().length > 0;
        },
        message: "Address cannot be empty",
      },
    },

    pincode: {
      type: String,
      required: [true, "Pincode is required."],
      trim: true,
      match: [INDIAN_PIN_REGEX, "Enter a valid 6-digit Indian PIN code."],
      index: true,
    },

    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
      required: [true, "District is required."],
    },

    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: [true, "City is required."],
    },

    gp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GP",
      required: [true, "GP is required."],
    },
  },

  aadhaar: {
    type: String,
    required: [true, "Aadhaar number is required."],
    unique: true,
    match: [AADHAAR_REGEX, "Aadhaar must be a valid 12-digit number."],
    validate: {
      validator: function (value) {
        return verheoff.validate(value);
      },
      message: "Invalid Aadhaar number (checksum failed)",
    },
  },

  rationCard: {
    type: String,
    required: [true, "Ration card status is required"],
    enum: {
      values: ["yes", "no"],
      message: "Ration card must be either yes or no",
    },
  },

  cmKisanID: {
    type: String,
    required: [true, "CM Kisan ID status is required"],
    enum: {
      values: ["yes", "no"],
      message: "CM Kisan ID must be either yes or no",
    },
  },

  tenthPercentage: {
    type: Number,
    required: [true, "10th percentage is required"],
    min: [0, "Percentage cannot be less than 0"],
    max: [100, "Percentage cannot exceed 100"],
    validate: {
      validator: function (value) {
        return Number.isFinite(value);
      },
      message: "Enter a valid numeric percentage",
    },
  },

  tenthBoardName: {
    type: String,
    required: [true, "10th board is required"],
    lowercase: true,
    enum: {
      values: ["bse", "cbse", "icse", "sjso", "nios", "other"],
      message: "Invalid 10th board selected",
    },
  },

  twelfthPercentage: {
    type: Number,
    required: [true, "12th percentage is required"],
    min: [0, "Percentage cannot be less than 0"],
    max: [100, "Percentage cannot exceed 100"],
    validate: {
      validator: function (value) {
        return Number.isFinite(value);
      },
      message: "Enter a valid numeric percentage",
    },
  },

  twelfthBoardName: {
    type: String,
    required: [true, "12th board is required"],
    lowercase: true,
    enum: {
      values: ["chse", "cbse", "icse", "sjso", "nios", "other"],
      message: "Invalid 12th board selected",
    },
  },
});
