const Anime = require("../models/animeModel");

const submitAnimeForm = async (req, res) => {
  const { anime_name, anime_reason } = req.body;
  const anime = new Anime({ anime_name, anime_reason });
  await anime.save();
  res.json({ message: "Anime form submitted successfully!", anime });
};

module.exports = { submitAnimeForm };
