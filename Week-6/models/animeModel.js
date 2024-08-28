const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  anime_name: String,
  anime_reason: String,
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;
