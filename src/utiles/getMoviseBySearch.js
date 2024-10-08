export const getMovviesBySearch = (movies,value) =>{
    const fiteredMovies = value?.length>0 ? (movies.filter(movie=> movie.movie.toLowerCase().includes(value))) :movies;
    return fiteredMovies;
}

