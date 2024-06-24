import { connectToDB } from "@/utils/database";
import Job from "@/models/jobs";

export const revalidate = 0;

export const GET = async (req) => {
  try {
    await connectToDB();

    const jobs = await Job.find({});
    return new Response(JSON.stringify(jobs), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
