const express = require("express");
const router = express.Router();
const counterSchema = require("../models/counter.schema");

router.get("/visit", async (req, res) => {
  try {
    const counter = await counterSchema.findOneAndUpdate(
      {},
      { $inc: { count: 1 }, $setOnInsert: { count: 3000 } },
      { new: true, upsert: true },
    );

    res.json({ count: counter.count });
  } catch (err) {
    console.error("VISIT ROUTE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
