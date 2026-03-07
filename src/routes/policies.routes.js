const express = require("express");
const router = express.Router();
const pages = require("../config/policies.config");
const { renderFrom } = require("../controllers/generic.controller");

router.get("/:slug", renderFrom(pages));

module.exports = router;
