const express = require("express");
const router = express.Router();
const { showLogin } = require("../controllers/login.controller");

router.get("/", showLogin);

module.exports = router;
