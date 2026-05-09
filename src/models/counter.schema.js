const mongoose = require("mongoose");

const Counter = new mongoose.Schema({
  name: { type: String, default: "visits" },
  count: { type: Number, default: 0 },
});

module.exports = mongoose.model("Counter", Counter);
