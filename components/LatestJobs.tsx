"use client"

import JobCard from "@/components/JobCard";

import {useEffect} from 'react';
import {useState} from 'react';

const JobListings = ({data}: any) => {
  return (
    <div>
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

export default function LatestJobs() {

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
        <JobListings
          data={posts}
        />
        
      </div>
      <div className="flex justify-center px-10 py-4">
        <button
          type="button"
          className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={()=> {
            window.location.href = "/jobs";
          }}
        >
          Load More Listings
        </button>
      </div>
    </div>
  );
}
