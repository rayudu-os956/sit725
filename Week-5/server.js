const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./dbConnection");
const userRoutes = require("./routes/userRoutes");
const animeRoutes = require("./routes/animeRoutes");

const app = express();
const port = process.env.PORT || 3040;
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server); // Attach socket.io to HTTP server

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + "/"));

// Connect to MongoDB
connectDB();

// Routes

app.use("/api/users", userRoutes);
app.use("/api/animes", animeRoutes);

// Socket.io connection
io.on("connection", (socket) => {
  console.log("a client is connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
