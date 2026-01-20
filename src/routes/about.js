const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = ["About Us", "Contacts", `Director's Message`];

router.get("/:about", (req, res) => {
  const about = req.params.about;

  if (!allowedPages.includes(about)) return next();

  res.sendFile(`${about}.html`, {
    root: path.join(__dirname, "..", "public", "About"),
  });
});

module.exports = router;
