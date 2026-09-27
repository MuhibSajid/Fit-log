import { IWorkout } from "@/types/workout";
import Hero from "@/components/home/Hero";
import LibraryGridPage from "@/components/home/LibraryGrid";

const getWorkOut = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Home = async () => {
  const workOutDatas = await getWorkOut();

  return (
    <div className="container mx-auto">
      <Hero />
      <LibraryGridPage workOutDatas={workOutDatas} />
    </div>
  );
};

export default Home;