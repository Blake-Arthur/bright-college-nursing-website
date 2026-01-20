const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:admissions", (req, res) => {
  const admissions = req.params.admissions;

  res.sendFile(path.join(__dirname, "..", "public", "Admissions", `${admissions}.html`));
});

module.exports = router;
