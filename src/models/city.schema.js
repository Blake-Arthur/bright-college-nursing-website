const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },

  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
    required: true,
  },
});

// prevent duplicate city inside same district
citySchema.index({ name: 1, district: 1 }, { unique: true });

module.exports = mongoose.model("City", citySchema);
