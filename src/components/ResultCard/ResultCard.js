import React from "react";
import "./ResultCard.css";

const ResultCard = ({ movie }) => {
    // console.log(MovieContext);

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
                    {movie.Year ? (
                        <h4 className="release-date"> {movie.Year}</h4>
                    ) : (
                        "-"
                    )}
                </div>
                <div className="controls">
                    <button
                        // onClick={() => {
                        //     MoviesDispatch({
                        //         type: actions.ADD_MOVIE_TO_WATCH_LIST,
                        //         paylaod: movie,
                        //     });
                        // }}
                        className="btn"
                    >
                        Add To WatchList
                    </button>
                    <button
                        // onClick={() =>
                        //     MoviesDispatch({
                        //         type: actions.ADD_MOVIE_TO_WATCHED,
                        //         paylaod: movie,
                        //     })
                        // }
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
