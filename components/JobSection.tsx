import JobCard from "./JobCard";

export default function JobSection() {
  return (
    <div className="flex w-full max-h-screen p-10">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-custom-bg p-6 rounded-lg ">
        <h2 className="text-xl font-semibold mb-4">Filter </h2>
        <div className="mb-4">
          <label className="text-gray-700">Search by keywords</label>
          <input
            type="text"
            placeholder="Search jobs"
            className="w-full p-3 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Select your location"
            className="w-full p-3 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700" htmlFor="category">
            Choose Category
          </label>
          <br />
          <select
            name="category"
            className="w-full p-3 rounded-lg text-gray-500"
          >
            <option value="category">Select one...</option>
            <option value="category">Web developer</option>
            <option value="category">App developer</option>
            <option value="category">UI/UX developer</option>
            <option value="category">Finance</option>
            <option value="category">Marketing</option>
          </select>
        </div>
        <div className="mb-4">
        <label className="text-gray-700 ">
            Job Type
          </label>
          <div>
            <label className="inline-flex items-center cursor-pointer w-full p-2">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full  peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                Full-time
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer w-full p-2">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full  peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                Part-time
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer w-full p-2">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full  peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                Freelancer
              </span>
            </label>
            <label className="inline-flex items-center cursor-pointer w-full p-2">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full  peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">
                Remote
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-white p-4 ">
        <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
        {/* Add your job listings here */}
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
        {/* Add more job listings as needed */}
      </div>
    </div>
  );
}
