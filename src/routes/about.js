const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:about", (req, res) => {
  const about = req.params.about;

  res.sendFile(path.join(__dirname, "..", "public", "About", `${about}.html`));
});

module.exports = router;
