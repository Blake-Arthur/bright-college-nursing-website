const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = ["about-us", "contacts", `director-message`];

router.get("/:about", (req, res, next) => {
  const about = req.params.about;

  if (!allowedPages.includes(about)) return next();

  res.sendFile(`${about}.html`, {
    root: path.join(__dirname, "..", "public", "About"),
  });
});

module.exports = router;
