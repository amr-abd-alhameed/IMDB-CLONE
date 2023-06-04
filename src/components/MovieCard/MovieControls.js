import React from "react";import { TiDelete } from "react-icons/ti";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addMovieToWatched,
  moveToWatchList,
  removeMovieFromWatched,
  removeMovieToWatchList,
} from "../../Redux Toolkit/Features/addMovie/movieSlice";

export const MovieControls = ({ movie, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn">
            <TiDelete onClick={() => dispatch(removeMovieToWatchList(movie))} />{" "}
          </button>
          <button className="ctrl-btn">
            <AiFillEye onClick={() => dispatch(addMovieToWatched(movie))} />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <TiDelete onClick={() => dispatch(removeMovieFromWatched(movie))} />{" "}
          </button>
          <button className="ctrl-btn">
            <AiFillEyeInvisible
              onClick={() => dispatch(moveToWatchList(movie))}
            />{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
