"use strict";
let personalMovieDB = {
    count: [] ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

while (true){
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    if (numberOfFilms != null && numberOfFilms != ''){
        personalMovieDB.count = numberOfFilms;
        break;
    } else {
        continue;
    }
}


 //user give me information about number of films what he watched


for(let i = 0; i < 2; i++){
    let movieQuestion = prompt('Один из последних просмотренных фильмов?', '');
    let movieUserRating = prompt('На сколько оцените его?','');

    if(movieQuestion != null && movieUserRating != null && movieQuestion != '' && movieUserRating != '' && movieQuestion.length < 50){
        personalMovieDB.movies[movieQuestion] = movieUserRating;
    } else {
        i--;
    } 
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
}else if (10 > personalMovieDB.count < 30) {
    alert("Вы классический зритель");
}else if (personalMovieDB > 30){
    alert("Вы киноман");
}else{
    alert("Произошла ошибка");
}
//user give me information about the last 2 films
console.log(personalMovieDB);