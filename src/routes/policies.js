const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:policies", (req, res) => {
  const policies = req.params.policies;

  res.sendFile(path.join(__dirname, "..", "public", "Policies", `${policies}.html`));
});

module.exports = router;
