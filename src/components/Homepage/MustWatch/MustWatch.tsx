"use client";
import { useGetPopularMovieQuery } from "@/Redux/features/api/baseApi";
import Button from "@/components/Shared/Button/Button";
import React from "react";
import MovieCard from "./MovieCard";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Loader from "@/components/Shared/Loader/Loader";
register();
const MustWatch = () => {
  const { data: movies, isLoading } = useGetPopularMovieQuery("");

  return (
    <section
      style={{
        borderRadius: "24px",
        background: "rgba(11, 15, 22, 0.47)",
        boxShadow: "8px -8px 10px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(12.5px)",
      }}
      className=" container mx-auto rounded-2xl bg-slate-400 p-8 shadow-md backdrop-blur-md -mt-12"
    >
      <div className=" flex justify-between items-center mb-5">
        <h2 className=" text-lg font-bold text-white">MOVIES YOU MUST WATCH</h2>
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
        {isLoading ? (
          <Loader />
        ) : (
          movies?.results.map((movie: any) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
};

export default MustWatch;
