const inquirer = require("inquirer");
const axios = require("axios");
const queryURL = "https://he-roku.herokuapp.com/api/notes";

inquirer
.prompt([
    {name: "title",
    message: "Enter a note title.."},
    {
    name: "note",
    message: "Enter a note.."
    }
]).then(function(data){
    axios.post(queryURL, {
        title: data.title,
        note: data.note
      })
      .then(function (resp) {
        console.log(resp)
      })
})
