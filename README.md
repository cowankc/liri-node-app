# liri-node-app
Language Interpretation and Recognition Interface

This program uses api databases to run searches for certain keywords. With the use of Node, the user can call liri.js followed by a specific phrase. The user can input 4 different search phrases to look up certain terms. The phrases are:

* movie-this, followed by a movie title to search. Running this will use the OMDB database too display the name of the movie, release date, ratings, country produced, language, plot of the movie, and actors associated with the movie.  

* concert-this, followed by the name of a band or artist. This will use the Bands in Town api too show the venue the band will be playing at, where the venue is, and the date of the concert. 

* spotify-this-song, followed by the name of a song. This will run a search of the spotify api to pull up the name of the artist(s) who sang the song, the song's name, a linl to a preview of the song, and the name of the album the song is from.

* do-what-it-says, this command will change depending on what is written in the random.txt file that is in the folder. The command will read the file and determine which of the previous 3 commands to run based on the first staement. It then will use the second statement in the file to use as a term for the search. 

When the program is run it will also log the results of the searches in the log.txt file. It will keep all previous searches and append any new ones until the contents of the file are deleted. below is a link for a video demonstration on how the program functions 

- https://www.youtube.com/watch?v=tbNQ3DUMBdU&feature=youtu.be 

This project is my first one to use node to execute calls with APIs. The language is all javascript and uses 3 seperate js files. This project is useful in understanding the uses of constructors, filesharing, and APIs. It was created and work on by Kevin Cowan. 