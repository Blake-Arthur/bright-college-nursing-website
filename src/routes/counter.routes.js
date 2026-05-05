const express = require("express");
const router = express.Router();
const counterSchema = require("../models/counter.schema");

router.get("/visit", async (req, res) => {
  try {
    let counter = await Counter.findOne();

    if (!counter) {
      counter = await Counter.create({ count: 3000 });
    }

    counter.count += 1;
    await counter.save();

    res.json({ count: counter.count });
  } catch (err) {
    console.error("VISIT ROUTE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
