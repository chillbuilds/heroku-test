const inquirer = require("inquirer");
const axios = require("axios");
const queryURL = "https://he-roku.herokuapp.com/api/notes";


axios.get(queryURL)
  .then(function (resp) {
    console.log(resp.data);
  })
