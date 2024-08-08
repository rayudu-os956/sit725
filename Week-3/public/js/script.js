const clickMe = () => {
  alert("Welcome to Anime Fandom! Hope you have a nice day!");
};

const cardList = [
  {
    title: "Zoro",
    image: "images/zoro.png",
    link: "About Zoro",
    desciption: "Roronoa Zoro",
  },
  {
    title: "Sanji",
    image: "images/sanji.png",
    link: "About Sanji",
    desciption: "Sanji",
  },
  {
    title: "Nami",
    image: "images/nami.png",
    link: "About Nami",
    desciption: "Nami",
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
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
};

const submitAnimeForm = () => {
  let animeData = {};
  animeData.anime_name = $("#anime_name").val();
  animeData.anime_reason = $("#anime_reason").val();
  console.log("Anime Form Data Submitted: ", animeData);
};

$(document).ready(function () {
  // Initialize Materialize components
  $(".materialboxed").materialbox();
  $(".modal").modal();

  // Event Listeners
  $("#clickMeButton").click(() => {
    $.ajax({
      url: "addTwoNumber?n1=10&n2=23",
      success: function (result) {
        clickMe();
      },
    });
  });

  $("#formSubmit").click(() => {
    submitForm();
  });

  $("#animeFormSubmit").click(() => {
    submitAnimeForm();
  });

  // Add cards to the card section
  addCards(cardList);
});
