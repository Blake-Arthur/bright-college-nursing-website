const mongoose = require("mongoose");

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const enquirySchema = new mongoose.Schema(
  {
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

    visitDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return value >= today;
        },
        message: "Visit date cannot be in the past",
      },
    },

    hearAbout: {
      type: String,
      enum: ["website", "ads", "referral", "social"],
    },

    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Enquiry", enquirySchema);
