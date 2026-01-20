const express = require("express");
const router = express.Router();
const path = require("node:path");

const allowedPages = ["ANM", "GNM", "B.Sc. Nursing", "PBB.Sc. Nursing", "DMLT"];

router.get("/:courses", (req, res) => {
  const courses = req.params.courses;

  if (!allowedPages.includes(courses)) return next();

  res.sendFile(`${courses}.html`, {
    root: path.join(__dirname, "..", "public", "Courses"),
  });
});

module.exports = router;
