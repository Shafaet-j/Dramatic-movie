"use client";
import { useGetSingleMovieQuery } from "@/Redux/features/api/baseApi";
import MovieModal from "@/components/Shared/modal/MovieModal";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { FaImdb } from "react-icons/fa";

interface MovieDetailsProps {
  params: { id: number };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ params }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const id = params.id;

  const { data } = useGetSingleMovieQuery(id);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, #000 17.76%, rgba(0, 0, 0, 0.69) 41.44%, rgba(196, 196, 196, 0.00) 100%),url(https://image.tmdb.org/t/p/w500${data?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" h-[90vh] flex flex-col justify-center"
    >
      <div className=" container mx-auto space-y-4 px-5">
        {/* <Image src={tamasha} alt="tamasha" /> */}
        <h1 className=" text-2xl font-semibold">{data?.original_title}</h1>
        <p className=" lg:w-2/5">{data?.overview}</p>
        <p className=" text-red-600 text-lg font-semibold">GENRES</p>

        <div className=" flex items-center gap-3">
          {data?.genres.map((item: any) => (
            <p key={item.id}>{item.name},</p>
          ))}
        </div>
        <div className=" flex items-center gap-5">
          <MovieModal
            data={data}
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange} // Type assertion
          />
          <button className=" px-6 py-2 rounded-full bg-gray-600">
            My list
          </button>
        </div>
        <div className=" flex items-center gap-5">
          <span>
            <FaImdb size={40} color="yellow" />
          </span>
          <span className=" font-bold text-yellow-300">
            {data?.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
