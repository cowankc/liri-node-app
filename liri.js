require("dotenv").config();
let keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);