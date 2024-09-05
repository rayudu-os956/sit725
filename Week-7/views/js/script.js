document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
  const materialboxed = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(materialboxed);
});

const clickMe = () => {
  alert("Welcome to Anime Fandom! Hope you have a nice day!");
};

const cardList = [
  {
    title: "Zoro",
    image: "/views/images/zoro.png",
    link: "About Zoro",
    description: "Roronoa Zoro", // Fixed typo here
  },
  {
    title: "Sanji",
    image: "/views/images/sanji.png",
    link: "About Sanji",
    description: "Sanji", // Fixed typo here
  },
  {
    title: "Nami",
    image: "/views/images/nami.png",
    link: "About Nami",
    description: "Nami", // Fixed typo here
  },
];

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align ">' +
      '<div class="card medium grey"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content grey">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal grey">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text black-text">' +
      item.description + // Fixed typo here
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

// Call addCards function to add the cards on page load
$(document).ready(() => {
  addCards(cardList);
});

const submitForm = async () => {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  const formData = { first_name, last_name, password, email };

  try {
    const response = await fetch("http://localhost:3040/api/users/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
  alert("Form submitted!");
};

document.getElementById("formSubmit").addEventListener("click", submitForm);

const submitAnimeForm = async () => {
  const anime_name = document.getElementById("anime_name").value;
  const anime_reason = document.getElementById("anime_reason").value;

  const formData = { anime_name, anime_reason };

  try {
    const response = await fetch(
      "http://localhost:3040/api/animes/submitAnimeForm",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
  alert("Form submitted!");
};
let socket = io();
socket.on("number", (msg) => {
  console.log("Random Number: " + msg);
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize socket connection
  const socket = io();

  // Handle "Click Me" button click
  document
    .getElementById("clickMeButton")
    .addEventListener("click", function () {
      // Emit a socket event to request a real-time number
      socket.emit("click_me_button_pressed");
    });

  // Listen for the server's real-time number response
  socket.on("number", function (data) {
    // Display the real-time message with the number
    document.getElementById(
      "realTimeMessage"
    ).innerHTML = `Select anime! Real-time number: ${data}`;
  });
});

document
  .getElementById("animeFormSubmit")
  .addEventListener("click", submitAnimeForm);

document.getElementById("clickMeButton").addEventListener("click", clickMe);
