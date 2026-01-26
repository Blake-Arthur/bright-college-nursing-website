const express = require("express");
const router = express.Router();
const pages = require("../config/coursesConfig");
const { renderFrom } = require("../controllers/genericController");

router.get("/:slug", renderFrom(pages));

module.exports = router;
