const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = [];

router.get("/:policies", (req, res) => {
  const policies = req.params.policies;

  if (!allowedPages.includes(policies)) return next();

  res.sendFile(`${policies}.html`, {
    root: path.join(__dirname, "..", "public", "Policies"),
  });
});

module.exports = router;
