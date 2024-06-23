import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <h1 className="flex flex-col justify-center items-center min-h-screen text-2xl font-semibold">
        About Page
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
          Yet to implement
        </span>
      </h1>
    </>
  );
}
