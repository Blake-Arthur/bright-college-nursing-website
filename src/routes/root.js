const express = require("express");
const router = express.Router();
const { home } = require("../controllers/rootController");

router.get("/", home);

module.exports = router;
