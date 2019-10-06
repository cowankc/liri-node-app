require("dotenv").config();
let keys = require("./keys.js");
let Search = require("./api.js")
let liriSearch = new Search()
let command = process.argv[2]
let term = process.argv.slice(3).join(" ")
let fs = require("fs");

let doWhatItSays = function () {
    fs.readFile("random.txt", 'utf8', function(err, data) {
    dataArray = data.split(",")
    console.log(dataArray[0])
    console.log(dataArray[1])
    if (dataArray[0] === "spotify-this-song") {
        liriSearch.findSong(dataArray[1])
    }
    if (dataArray[0] === "concert-this") {
        liriSearch.findBand(dataArray[1])
    }
    if (dataArray[0] === "movie-this") {
        liriSearch.findMovie(dataArray[1])
    }
    })
}

if (command === "concert-this") {
    liriSearch.findBand(term)
}

if (command === "spotify-this-song") {
    liriSearch.findSong(term)
}

if (command === "spotify-this-song" && term === "") {
    liriSearch.findSong("The Sign")
}

if (command === "movie-this") {
    liriSearch.findMovie(term)
}

if (command === "do-what-it-says") {
    doWhatItSays()
}
