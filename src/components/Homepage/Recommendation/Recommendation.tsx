"use client";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetRecommendationMovieQuery } from "@/Redux/features/api/baseApi";
import Button from "@/components/Shared/Button/Button";
import MovieCard from "../MustWatch/MovieCard";

const Recommendation = () => {
  const { data: movies, isLoading } = useGetRecommendationMovieQuery("");
  return (
    <section className=" container mx-auto rounded-2xl p-8">
      <div className=" flex justify-between items-center mb-5">
        <h2 className=" text-lg font-bold text-white">RECOMMENDED FOR YOU</h2>
        <Button>Filter</Button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {movies?.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Recommendation;
