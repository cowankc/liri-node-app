let axios = require("axios");
let fs = require("fs");
let Spotify = require('node-spotify-api');
let moment = require('moment');
let Search = function() {
    let divider = "\n------------------------------------------------------------\n\n"
    this.findBand = function(band) {
        let URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function(response){
            let data = response.data
            for (i = 0; i < data.length; i++) {
            let bandData = [
                "Venue: " + data[i].venue.name,
                "City: " + data[i].venue.city,
                "Date: " + moment(data[i].datetime).format("MM/DD/YYYY"),
            ].join("\n\n");
            console.log(bandData)
            fs.appendFile("log.txt", bandData + divider, function(err) {
                if (err) throw err;
            });
        }
        })
    }
    this.findMovie = function(movie) {
        if (movie === "") {
        let URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + "Mr. Nobody.";
        axios.get(URL).then(function(response){
            let movieData = [
                "Title: " + response.data.Title,
                "Release Date: " + response.data.Released,
                "IMBD Rating: " + response.data.imdbRating,
                "Rotten Tomato Rating: " + response.data.Ratings[1].Value,
                "Country Produced: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Actors: " + response.data.Actors,
            ].join("\n\n");
            console.log(movieData)
            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
            });
        })
        } else { let URL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
        axios.get(URL).then(function(response){
            let movieData = [
                "Title: " + response.data.Title,
                "Release Date: " + response.data.Released,
                "IMBD Rating: " + response.data.imdbRating,
                "Rotten Tomato Rating: " + response.data.Ratings[1].Value,
                "Country Produced: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Actors: " + response.data.Actors,
            ].join("\n\n");
            console.log(movieData)
            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
            });
        })
    }
    }
    this.findSong = function(song) {
        let spotify = new Spotify({
            id: "cb5fa19fa5f8444e835b6d3dc2d63a3f",
            secret: "505ee097257444e4bd42e1789e62b101",
        })
        if (song === "") {
            spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
                let songData = [
                    "Artist(s): " + data.tracks.items[0].artists[0].name,
                    "Song Name: " + data.tracks.items[0].name,
                    "Song Preview: " + data.tracks.items[0].preview_url,
                    "Album Name: " + data.tracks.items[0].album.name,
                ].join("\n\n");
                console.log(songData); 
                fs.appendFile("log.txt", songData + divider, function(err) {
                    if (err) throw err;
                });
            })
        } else {spotify.search({ type: 'track', query: song }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            let songData = [
                "Artist(s): " + data.tracks.items[0].artists[0].name,
                "Song Name: " + data.tracks.items[0].name,
                "Song Preview: " + data.tracks.items[0].preview_url,
                "Album Name: " + data.tracks.items[0].album.name,
            ].join("\n\n");
            console.log(songData); 
            fs.appendFile("log.txt", songData + divider, function(err) {
                if (err) throw err;
            });
        })
    }
    }
}

module.exports = Search
