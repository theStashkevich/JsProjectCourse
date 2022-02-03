"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count) || personalMovieDB.count == undefined){
            personalMovieDB.count= prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            let movieQuestion = prompt('Один из последних просмотренных фильмов?', '');
            if (movieQuestion != null && movieQuestion != '' && movieQuestion.length < 50){
                let movieUserRating = prompt('На сколько оцените его?','');
                    if (movieUserRating != null && movieUserRating != ''){
                        personalMovieDB.movies[movieQuestion] = movieUserRating;
                    } else {
                        i--;
                    } 
            } else {
                i--;
            }
        }
    },
    detectUserLevel: function(){
        if (personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        }else if (10 < personalMovieDB.count >= 30) {
            alert("Вы классический зритель");
        }else if (30 < personalMovieDB.count){
            alert("Вы киноман");
        }else{
            alert("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
            console.log(personalMovieDB);
        } else {
            personalMovieDB.privat = false;
        }
    },
    showMyDb: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let userGenre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(userGenre == '' || userGenre == null) {
                userGenre = prompt(`Ваш любимый жанр под номером ${i}`);
                i--;
            } else {
                personalMovieDB.genres[i - 1] = userGenre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }

};
console.log(personalMovieDB);