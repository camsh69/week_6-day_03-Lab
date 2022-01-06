const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function() {
  return this.films.map((film) => {
    return film.title;
  }); 
}

Cinema.prototype.findFilmByTitle = function(string) {
  return this.films.filter((film) => {
    if(film.title === string){
    return film;
  }
  });
}

Cinema.prototype.findByGenre = function(string) {
  return this.films.filter(film => {
    return film.genre === string
  });
}

Cinema.prototype.findByYear = function(year) {
  return this.films.filter(film => {
    return film.year === year
  });
}

Cinema.prototype.minLength = function(length) {
  const result = this.films.filter(film => {
    return film.length >= length;
  });
  return this.films.length === result.length;
}

Cinema.prototype.totalRunTime = function() {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
}

Cinema.prototype.filterByProperty = function(property, value) {
  return this.films.filter(film => {
    return film[property] === value;
  });
}

// Cinema.prototype.findByGenre = function(string) {
//   return this.films.filter(film => {
//     return film.genre === string
//   });
// }

module.exports = Cinema;
