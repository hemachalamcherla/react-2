function MovieCard({ movie }) {
    return (
      <>
        <h2>{movie.title}</h2>
        <p>Director: {movie.director}</p>
        <p>Year: {movie.year}</p>
    
      </>
    );
  }
  
  export default MovieCard;