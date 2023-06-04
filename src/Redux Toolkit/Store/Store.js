import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Features/addMovie/movieSlice";

export const Store = configureStore({
  reducer: {
    movies: MovieSlice,
    //     [movieApi.reducerPath]: movieApi.reducer,
    //   },
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(movieApi.middleware),
  },
});
