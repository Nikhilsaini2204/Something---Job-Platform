import CardComponent from "@/components/CardComponent";

export default function Categories() {
  return (
    <>
      <h2 className="text-4xl font-bold dark:text-black flex justify-center gap-2 pt-20">
        Popular
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-purple-600">
          Job
        </span>{" "}
        Categories
      </h2>
      <div className="grid grid-cols-3 px-24 gap-2">
        <CardComponent  title="Fronted Web Developer"/>
        <CardComponent  title="Application Developer"/>
        <CardComponent  title="Ruby Developer"/>
        <CardComponent  title="AI/ML Developer"/>
        <CardComponent  title="Wordpress Developer"/>
        <CardComponent  title="Backend Developer"/>
      </div>
    </>
  );
}
