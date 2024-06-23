import JobCard from "./JobCard";

export default function LatestJobs() {
  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-black flex justify-center gap-2 pt-20">
        Latest
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-purple-600">
          Job
        </span>{" "}
        Listings
      </h2>
      <div
        id="jobcard"
        className=" px-24 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <JobCard
          jobTitle="Frontend Developer"
          company="Google"
          companyLogo="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
          location="Mumbai, India"
          postedTime="1 day ago"
          salary="₹ 12,00,000 - ₹ 15,00,000"
          jobType="Full-time"
          jobNature="Remote"
        />
        <JobCard
          jobTitle="Applied Scientist Intern"
          company="Amazon"
          companyLogo="https://img.icons8.com/?size=100&id=21295&format=png&color=000000"
          location="Hyderabad, India"
          postedTime="5 day ago"
          salary="₹ 1.5 Lakh Stipend"
          jobType="Full-time"
          jobNature="Onsite"
        />
        <JobCard
        jobTitle="Software Engineer"
        company="Microsoft"
        companyLogo="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
        location="Gurgaon, India"
        postedTime="1 week ago"
        salary="₹ 10,00,000 - ₹ 15,00,000"
        jobType="Full-time"
        jobNature="Onsite"
        />
        <JobCard
        jobTitle="Flutter Developer"
        company="Meta"
        companyLogo="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000"
        location="Mumbai, India"
        postedTime="1 week ago"
        salary="₹ 6,00,000 - ₹ 8,00,000"
        jobType="Full-time"
        jobNature="Onsite"
        />
        <JobCard
        jobTitle="Machine Learning Intern"
        company="Microsoft"
        companyLogo="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
        location="Gurgaon, India"
        postedTime="1 week ago"
        salary="₹ 1,00,000 - ₹ 1,50,000"
        jobType="Part-time"
        jobNature="Remote"
        />
        <JobCard
        jobTitle="React Developer"
        company="X"
        companyLogo="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=000000"
        location="Bengaluru, India"
        postedTime="2 week ago"
        salary="₹ 7,00,000 - ₹ 9,50,000"
        jobType="Full-time"
        jobNature="Onsite"
        />
      </div>
    </div>
  );
}
