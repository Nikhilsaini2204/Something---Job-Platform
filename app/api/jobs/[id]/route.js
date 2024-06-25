import Job from '@/models/jobs';
import { connectToDB } from '@/utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const { id } = params;
    console.log(id)
    const job = await Job.findById(id);
    if (!job) {
        console.log("Job Not Found")
      return new Response("Job Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(job), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
