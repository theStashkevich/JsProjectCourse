"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for(let i = 0; i < 2; i++){
    let movieQuestion = prompt('Один из последних просмотренных фильмов?', '');
    let movieUserRating = prompt('На сколько оцените его?','');
    personalMovieDB.movies[movieQuestion] = movieUserRating; 
}

console.log(personalMovieDB);