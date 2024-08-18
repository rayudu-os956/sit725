const express = require("express");
const { submitAnimeForm } = require("../controllers/animeController");

const router = express.Router();

router.post("/submitAnimeForm", submitAnimeForm);

module.exports = router;
