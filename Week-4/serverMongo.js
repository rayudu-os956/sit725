const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3040;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + "/public"));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://rahulrayudurocky:j35v0Xp57EI4jefX@cluster0.gb4ya1g.mongodb.net/animeStore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// MongoDB models

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: String,
  })
);

const Anime = mongoose.model(
  "Anime",
  new mongoose.Schema({
    anime_name: String,
    anime_reason: String,
  })
);

// Routes

app.post("/submitForm", async (req, res) => {
  const { first_name, last_name, password, email } = req.body;
  const user = new User({ first_name, last_name, password, email });
  await user.save();
  res.json({ message: "Form submitted successfully!", user });
});

app.post("/submitAnimeForm", async (req, res) => {
  const { anime_name, anime_reason } = req.body;
  const anime = new Anime({ anime_name, anime_reason });
  await anime.save();
  res.json({ message: "Anime form submitted successfully!", anime });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
