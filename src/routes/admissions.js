const express = require("express");
const router = express.Router();
const pages = require("../config/admissionsConfig");
const { renderFrom } = require("../controllers/genericController");

router.get("/:slug", renderFrom(pages));

module.exports = router;
