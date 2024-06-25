"use client";
import Feed from "@/components/Feed";
import { useEffect, useState } from "react";

export default function JobDetail({ params }: { params: { id: string } }) {
  const id = params.id;
  const [post, setPost] = useState({
    jobTitle: "",
    company: "",
    companyLogo: "",
    jobLocation: "",
    experience: "",
    salary: "",
    jobType: "",
    jobMode: "",
  });

  useEffect(() => {
    const getJobDetails = async () => {
      const response = await fetch(`/api/jobs/${id}`);
      const data = await response.json();
      console.log(data);
      setPost((prevPost) => ({
        ...prevPost,
        jobTitle: data.jobTitle,
        company: data.company,
        companyLogo: data.companyLogo,
        jobLocation: data.jobLocation,
        experience: data.experience,
        salary: data.salary,
        jobType: data.jobType,
        jobMode: data.jobMode,
        postedTime: data.postedTime,
      }));
    };

    
      getJobDetails();

  }, [id]);
  console.log(post);

  return (
    <div>
      <Feed post={post} />
    </div>
  );
}
