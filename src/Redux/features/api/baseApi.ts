import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query({
      query: () => ({
        url: "movie/popular?language=en-US&page=1",
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFlNmQ0MDM4ZjU0MTM4OThmOTczNjI1ZmUwYTA3YSIsInN1YiI6IjYzOTg4NjEyNzliM2Q0MDA5MTI4ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcJJHz2c_EUjc1lnULNUNJdwE67n_YADv1_bqAQ7-RY",
        },
      }),
    }),
    getRecommendationMovie: builder.query({
      query: () => ({
        url: "movie/976573/recommendations?language=en-US&page=1",
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFlNmQ0MDM4ZjU0MTM4OThmOTczNjI1ZmUwYTA3YSIsInN1YiI6IjYzOTg4NjEyNzliM2Q0MDA5MTI4ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcJJHz2c_EUjc1lnULNUNJdwE67n_YADv1_bqAQ7-RY",
        },
      }),
    }),
    getSingleMovie: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFlNmQ0MDM4ZjU0MTM4OThmOTczNjI1ZmUwYTA3YSIsInN1YiI6IjYzOTg4NjEyNzliM2Q0MDA5MTI4ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcJJHz2c_EUjc1lnULNUNJdwE67n_YADv1_bqAQ7-RY",
        },
      }),
    }),
    getMovies: builder.query({
      query: (id) => ({
        url: "/discover/movie",
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFlNmQ0MDM4ZjU0MTM4OThmOTczNjI1ZmUwYTA3YSIsInN1YiI6IjYzOTg4NjEyNzliM2Q0MDA5MTI4ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcJJHz2c_EUjc1lnULNUNJdwE67n_YADv1_bqAQ7-RY",
        },
      }),
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetRecommendationMovieQuery,
  useGetSingleMovieQuery,
  useGetMoviesQuery,
} = baseApi;
export default baseApi;

// https://api.themoviedb.org/3/discover/movie?api_key=971e6d4038f5413898f973625fe0a07a

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzFlNmQ0MDM4ZjU0MTM4OThmOTczNjI1ZmUwYTA3YSIsInN1YiI6IjYzOTg4NjEyNzliM2Q0MDA5MTI4ODIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcJJHz2c_EUjc1lnULNUNJdwE67n_YADv1_bqAQ7-RY' \
//      --header 'accept: application/json'
