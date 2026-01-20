const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:academics", (req, res) => {
  const academics = req.params.academics;

  res.sendFile(path.join(__dirname, "..", "public", "Academics", `${academics}.html`));
});

module.exports = router;
