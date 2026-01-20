const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:campus", (req, res) => {
  const campus = req.params.campus;

  res.sendFile(path.join(__dirname, "..", "public", "Campus", `${campus}.html`));
});

module.exports = router;
