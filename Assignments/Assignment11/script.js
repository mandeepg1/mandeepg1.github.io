const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        console.log(error);
      }
};

const showMovies = async () => {
    const movies = await getMovies();
    const moviesSection = document.getElementById("movies-info");

    movies.forEach((movie) => {
       moviesSection.append(getMovie(movie));
    });

};

const getMovie = (movie) => {
    const section = document.createElement("section");

    const movieImg = document.createElement("img");
    movieImg.src = "https://portiaportia.github.io/json/" + movie.img;
    section.append(movieImg);

    const section2  = document.createElement("section2");


    const h2 = document.createElement("h2");
    h2.innerHTML = movie.title;
    section2.append(h2);
    

    section2.append(getMovieInfo(movie));

    section.append(section2);
    
    
    return section;

    

    
};

const getMovieInfo = (movie) => {
    const actorsWithSpaces = movie.actors.join(', ');
    const genresWithSpaces = movie.genres.join(', ');

    const movieP = document.createElement("p");
    movieP.innerHTML = `<strong>Director: </strong>${movie.director}<br> <strong>Actors: </strong>${actorsWithSpaces}<br>
    <strong>Year: </strong>${movie.year}<br> <strong>Genre: </strong>${genresWithSpaces}<br><br> ${movie.description}`;
    return movieP;
}




window.onload = () => showMovies();