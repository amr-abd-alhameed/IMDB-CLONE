import React from "react";import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
const WatchedMovie = () => {
  const moviesSelector = useSelector((state) => state.movies.watchedMovies);

  return (
    <>
      <div className="container">
        <h2 className="list__title">Watched Movies</h2>

        <div className="movie-grid">
          {moviesSelector == "" ? (
            <p>There is no movies ! try to add it 😊 </p>
          ) : (
            moviesSelector.map((movie) => (
              <div key={movie.imdbID}>
                <MovieCard key={movie.id} movie={movie} type={"watched"} />{" "}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WatchedMovie;
