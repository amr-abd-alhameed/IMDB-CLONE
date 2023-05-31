// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";export const movieApi = createApi({//   reducerPath: "movieApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `
//     https://api.themoviedb.org/3/trending/all/day`,
//   }),
//   endpoints: (builder) => ({
//     getMovies: builder.mutation({
//       query: ({ query }) => {
//         return {
//           url: `
//           https://api.themoviedb.org/3/trending/all/day`,
//           //   url: `/search/movie?api_key=${process.env.KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
//           method: "get",
//         };
//       },
//     }),
//   }),
// });
// export const { useGetMoviesMutation } = movieApi;
// // `${process.env.API}`
