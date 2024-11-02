import MovieCard from "./MovieCard";

function MovieGrid() {
  const movies = [
    { title: "Bahubali", director: "rajamouli", year: 2018 },
    { title: "pushpa", director: "sukumar", year: 2020 },
    { title: "bahubali 2", director: "rajamouli", year: 2021 },
    { title: "puspa 2", director: "sukumar", year: 2024},
    { title: "arya", director: "sukumar", year: 2017 },
  ];

  return (
    <>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </>
  );
}

export default MovieGrid;