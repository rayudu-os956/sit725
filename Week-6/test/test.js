const chai = require("chai");
const expect = chai.expect;
const request = require("request");
const { submitAnimeForm } = require("../controllers/animeController");
const Anime = require("../models/animeModel");

const URL = "http://localhost:3040";

// Test for GET request
// describe("GET /", function () {
//   it("Should return a status code of 200", function (done) {
//     request.get(URL, function (error, response, body) {
//       if (error) return done(error);
//       expect(response.statusCode).to.equal(200);
//       done();
//     });
//   });
// });

describe("Test", function () {
  it("Should have main body", function (done) {
    request.get(URL, function (error, response, body) {
      expect(body).to.include('<main class="main-body">');
      done();
    });
  });

  it("Should return a status code of 200", function (done) {
    request.get(URL, function (error, response, body) {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("returns picture is uploading ", function (done) {
    request.get(URL, function (error, response, body) {
      expect(body).to.include('<div class="container">');
      done();
    });
  });
});
