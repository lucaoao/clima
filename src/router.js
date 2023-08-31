const express = require("express");
const router = express.Router();
const { compare } = require("./controllers/controller");

router.get("/weather", compare);

module.exports = router;
