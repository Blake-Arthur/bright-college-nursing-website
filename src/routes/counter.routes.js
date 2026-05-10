const express = require("express");
const router = express.Router();
const Counter = require("../models/counter.schema");

router.get("/visit", async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "visits" },
      { $inc: { count: 1 } },
      { new: true },
    );

    if (!counter) {
      return res.status(500).json({
        error: "Counter document missing",
      });
    }

    res.json({ count: counter.count });
  } catch (err) {
    console.error("VISIT ROUTE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
