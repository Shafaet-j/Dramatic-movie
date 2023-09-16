import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    year: string; // Replace with the actual type of the year
    rating: number;
    poster_path: string; // Replace with the actual type of the rating
    // Add other properties as needed
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log(movie);

  return (
    <div className=" space-y-4">
      <Link href={`movies/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={384}
          height={576}
          alt={movie.title}
          className=" rounded-lg"
        />
      </Link>
      <h2 className=" font-bold text-xl">{movie?.title}</h2>
      <p className=" text-gray-400 font-bold">{movie?.release_date}</p>
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-5">
          <span>
            <FaImdb size={40} color="yellow" />
          </span>
          <span className=" font-bold text-yellow-300">
            {movie?.vote_average}
          </span>
        </div>
        <div className=" flex items-center gap-5 text-2xl">
          <AiOutlineEye />
          <MdFavoriteBorder />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
