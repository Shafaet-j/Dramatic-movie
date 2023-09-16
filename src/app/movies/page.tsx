"use client";
import { useGetMoviesQuery } from "@/Redux/features/api/baseApi";
import MovieCard from "@/components/Homepage/MustWatch/MovieCard";
import Loader from "@/components/Shared/Loader/Loader";
import React from "react";

const Movies = () => {
  const { data, isLoading } = useGetMoviesQuery("");

  return (
    <section className=" container mx-auto px-5">
      <h2 className=" text-3xl font-semibold my-5">Movies</h2>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5">
        {isLoading ? (
          <Loader />
        ) : (
          data?.results?.map((movie: any) => <MovieCard movie={movie} />)
        )}
      </div>
    </section>
  );
};

export default Movies;
