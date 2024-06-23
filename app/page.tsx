import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import LatestJobs from "@/components/LatestJobs";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Categories/>
      <LatestJobs/>
    </div>
  );
}
