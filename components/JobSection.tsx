"use client"
import JobCard from "@/components/JobCard";
import {useEffect} from 'react';
import {useState} from 'react';

const JobListings = ({data}: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
      {data.map((job: any)=>(
        <JobCard
          key={job._id}
          jobTitle={job.jobTitle}
          company={job.company}
          companyLogo={job.companyLogo}
          location={job.jobLocation}
          postedTime={job.postedTime}
          salary={job.salary}
          jobType={job.jobType}
          jobNature={job.jobMode}
          experience={job.experience}
        />
      
      ))}
    </div>
  )
}

export default function JobSection() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/post');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  },[]);

  return (
    <div className="flex w-full max-h-screen p-10">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-custom-bg p-6 rounded-lg hidden md:block">
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
        <JobListings
        data={posts}
        />
        {/* Add more job listings as needed */}
      </div>
    </div>
  );
}
