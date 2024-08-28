// // const Anime = require("../models/animeModel");

// const submitAnimeForm = async (req, res) => {
//   try {
//     const { anime_name, anime_reason } = req.body;

//     // Validate the input
//     if (!anime_name || !anime_reason) {
//       return res
//         .status(400)
//         .json({ message: "Anime name and reason are required." });
//     }

//     // Create a new Anime instance and save it to the database
//     const anime = new Anime({ anime_name, anime_reason });
//     await anime.save();

//     // Respond with success message and the saved anime data
//     res
//       .status(202)
//       .json({ message: "Anime form submitted successfully!", anime });
//   } catch (error) {
//     // Handle any errors
//     console.error("Error submitting anime form:", error);
//     res
//       .status(500)
//       .json({ message: "An error occurred while submitting the form." });
//   }
// };

// module.exports = { submitAnimeForm };
const Anime = require("../models/animeModel");

const submitAnimeForm = async (req, res) => {
  const { anime_name, anime_reason } = req.body;
  const anime = new Anime({ anime_name, anime_reason });
  await anime.save();
  res.json({ message: "Anime form submitted successfully!", anime });
};

module.exports = { submitAnimeForm };
