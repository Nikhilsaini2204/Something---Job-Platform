import { connectToDB } from "@/utils/database";
import Job from "@/models/jobs";

export const POST = async (req) => {
  const {
    jobTitle,
    company,
    companyLogo,
    jobLocation,
    experience,
    salary,
    jobType,
    jobMode,
  } = await req.json();

  try {
    await connectToDB();
    const newJob = new Job({
      jobTitle,
      company,
      companyLogo,
      jobLocation,
      experience,
      salary,
      jobType,
      jobMode,
    });
    await newJob.save();
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a job", { status: 500 });
  }
};
