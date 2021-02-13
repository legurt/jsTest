"use strict";

let numberOfFilms = prompt("How many films have you already seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastSeenMovie = "";
let rateLastseenMovie = "";

for(let i = 0; i < personalMovieDB.count; i++) {
    lastSeenMovie = prompt("Name one of last seen movies", "");
    while (lastSeenMovie == "" || lastSeenMovie.length > 50) {
        alert("The inserted value should be between 1 and 50 in length.");
        lastSeenMovie = prompt("Name one of last seen movies", "");
    }
    rateLastseenMovie = prompt("Rate it please", "");
    while(rateLastseenMovie == "" || rateLastseenMovie.length > 50) {
        alert("The inserted value should be between 1 and 50 in length.");
        rateLastseenMovie = prompt("Rate it please", "");
    }
    
    personalMovieDB.movies[lastSeenMovie] = rateLastseenMovie;
}

console.log(personalMovieDB);