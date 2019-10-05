require("dotenv").config();
let keys = require("./keys.js");
let Search = require("./api.js")
var spotify = new Spotify(keys.spotify);