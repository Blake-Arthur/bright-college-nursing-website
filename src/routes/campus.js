const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = [];

router.get("/:campus", (req, res, next) => {
  const campus = req.params.campus;

  if (!allowedPages.includes(campus)) return next();

  res.sendFile(`${campus}.html`, {
    root: path.join(__dirname, "..", "public", "Campus"),
  });
});

module.exports = router;
