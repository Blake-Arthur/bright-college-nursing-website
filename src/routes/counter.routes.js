const express = require("express");
const router = express.Router();
const Counter = require("../models/counter.schema");

router.get("/visit", async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "visits" }, // find this specific counter
      {
        $inc: { count: 1 }, // atomic increment
        $setOnInsert: {
          name: "visits",
          count: 3170,
        },
      },
      {
        new: true, // return updated document
        upsert: true, // create if doesn't exist
      },
    );

    res.json({ count: counter.count });
  } catch (err) {
    console.error("VISIT ROUTE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
