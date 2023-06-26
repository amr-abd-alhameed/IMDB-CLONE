import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Features/addMovie/movieSlice";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "movie",
  storage,
};
const persistedReducer = persistReducer(persistConfig, MovieSlice);

export const Store = configureStore({
  reducer: {
    movies: persistedReducer,
    //     [movieApi.reducerPath]: movieApi.reducer,
    //   },
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(movieApi.middleware),
  },
  middleware: [thunk],
});
const persistor = persistStore(Store);
export { persistor };
export default Store;
