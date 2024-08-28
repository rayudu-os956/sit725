const express = require("express");
const { submitForm } = require("../controllers/userController");

const router = express.Router();

router.post("/submitForm", submitForm);

module.exports = router;
