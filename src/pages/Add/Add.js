import { React, useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "../../components/ResultCard/ResultCard";
const Add = () => {
  const [searchValue, SetSearchValue] = useState("");
  // const [getMovies, { data }] = useGetMoviesMutation();
  // console.log("data", data);
  // useEffect(() => {
  //   if (query) {
  //     fetchMovie();
  //   }
  // }, [query]);
  // const fetchMovie = async () => {
  //   await getMovies(query);
  // };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=981153b1`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => SetSearchValue(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
