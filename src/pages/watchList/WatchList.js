import React from "react";
import { useSelector } from "react-redux";
import ResultCard from "../../components/ResultCard/ResultCard";
import MovieCard from "../../components/MovieCard/MovieCard";

const WatchList = () => {
  const moviesSelector = useSelector((state) => state.movies.watchListMovies);
  return (
    <>
      <div className="container">
        <h2 className="list__title">WatchList Movies</h2>
        <div className="movie-grid">
          {moviesSelector == "" ? (
            <p>There is no movies ! try to add it 😊 </p>
          ) : (
            moviesSelector.map((movie) => (
              <div key={movie.imdbID}>
                <MovieCard key={movie.id} movie={movie} type={"watchList"} />{" "}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WatchList;
