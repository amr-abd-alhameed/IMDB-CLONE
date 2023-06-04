import React from "react";import "./ResultCard.css";
import { useDispatch } from "react-redux";
import {
  addMovieToWatchList,
  addMovieToWatched,
} from "../../Redux Toolkit/Features/addMovie/movieSlice";

const ResultCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="poster-filter"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date"> {movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            onClick={() => {
              dispatch(addMovieToWatchList(movie));
            }}
            className="btn"
          >
            Add To WatchList
          </button>
          <button
            onClick={() => {
              dispatch(addMovieToWatched(movie));
            }}
            className="btn"
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
