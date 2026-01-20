const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = [];

router.get("/:academics", (req, res) => {
  const academics = req.params.academics;

  if (!allowedPages.includes(academics)) return next();

  res.sendFile(`${academics}.html`, {
    root: path.join(__dirname, "..", "public", "Academics"),
  });
});

module.exports = router;
