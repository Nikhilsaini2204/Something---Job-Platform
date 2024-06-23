import JobSection from "@/components/JobSection";
import Navbar from "@/components/Navbar";

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl pt-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Discover{" "}
          <mark className="px-2 text-white bg-gradient-to-r from-green-400 to-purple-500 rounded ">
            Jobs
          </mark>{" "}
          & Apply
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Filter roles according to your preferences and apply for the best job
        </p>

        <JobSection/>
      </div>
    </>
  );
}

export default Jobs;
