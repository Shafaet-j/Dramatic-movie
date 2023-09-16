import Banner from "@/components/Homepage/Banner/Banner";
import MustWatch from "@/components/Homepage/MustWatch/MustWatch";
import Recommendation from "@/components/Homepage/Recommendation/Recommendation";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<p className=" text-7xl">loading..</p>}>
        <MustWatch />
      </Suspense>
      <Recommendation />
    </>
  );
}
