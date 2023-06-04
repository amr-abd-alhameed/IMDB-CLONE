import { createSlice } from "@reduxjs/toolkit";const initialState = {
  watchedMovies: [],
  watchListMovies: [],
};
const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovieToWatchList: (state, action) => {
      state.watchListMovies.push(action.payload);
    },
    addMovieToWatched: (state, action) => {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      state.watchedMovies.push(action.payload);
    },
    removeMovieToWatchList: (state, action) => {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieToWatchList,
} = MovieSlice.actions;
export default MovieSlice.reducer;
