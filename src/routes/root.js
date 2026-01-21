const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = [];

router.get("/", (req, res) => {
  res.sendFile(`index.html`, {
    root: path.join(__dirname, "..", "public"),
  });
});

module.exports = router;
