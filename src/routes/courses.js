const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:course", (req, res) => {
  const course = req.params.course;

  res.sendFile(path.join(__dirname, "..", "public", "Courses", `${course}.html`));
});

module.exports = router;
