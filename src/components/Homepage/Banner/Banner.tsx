import Image from "next/image";
import tamasha from "../../../assets/tamasha.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(90deg, #000 17.76%, rgba(0, 0, 0, 0.69) 41.44%, rgba(196, 196, 196, 0.00) 100%),url(https://i.ibb.co/XYCvZFZ/hero.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" h-[80vh] flex flex-col justify-center -mt-6 px-4"
    >
      <div className=" container mx-auto space-y-4">
        <Image className="w-40 lg:w-96" src={tamasha} alt="tamasha" />
        <p className=" lg:w-2/5">
          Ved and Tara fall in love while on a holiday in Corsica and decide to
          keep their real identities undisclosed. Tara returns to Delhi and
          meets a new Ved, who is trying to discover his true self.
        </p>
        <p className=" text-red-600 text-lg font-semibold">GENRES</p>
        <p> Romance, Drama</p>
        <div className=" flex items-center gap-5">
          <Link href="/movies">
            <button className=" px-6 py-2 rounded-full bg-purple-600">
              Watch
            </button>
          </Link>
          <button className=" px-6 py-2 rounded-full bg-gray-600">
            My list
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
