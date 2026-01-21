const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = ["admission-procedure", "scholarship"];

router.get("/:admissions", (req, res, next) => {
  const admissions = req.params.admissions;

  if (!allowedPages.includes(admissions)) return next();

  res.sendFile(`${admissions}.html`, {
    root: path.join(__dirname, "..", "public", "Admissions"),
  });
});

module.exports = router;
