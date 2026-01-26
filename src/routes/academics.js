const express = require("express");
const router = express.Router();
const pages = require("../config/academicsConfig");
const { renderFrom } = require("../controllers/genericController");

router.get("/:slug", renderFrom(pages));

module.exports = router;
