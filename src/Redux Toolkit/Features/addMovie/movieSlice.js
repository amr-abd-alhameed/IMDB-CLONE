import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
    moveToWatchList(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      state.watchListMovies.push(action.payload);
    },
    removeMovieFromWatched(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieToWatchList,
  moveToWatchList,
  removeMovieFromWatched,
} = MovieSlice.actions;
export default MovieSlice.reducer;
