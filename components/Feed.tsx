import Navbar from "./Navbar";
import Image from "next/image";

export default function Feed({ post }: any) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <Image
              src={post.companyLogo}
              width={50}
              height={50}
              alt="Company Logo"
              className="pb-2"
            />
            <h2 className="text-2xl font-bold mb-2">{post.jobTitle}</h2>
            <div className="text-gray-600 mb-4">
              <span className="inline-block mr-4">
                <strong>Company:</strong> {post.company}
              </span>
              <span className="inline-block mr-4">
                <strong>Location:</strong> {post.jobLocation}
              </span>
              <span className="inline-block mr-4">
                <strong>Posted:</strong> {post.postedTime}
              </span>
              <span className="inline-block">
                <strong>Last Date to Apply:</strong> Will make that feature
              </span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                {post.experience}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {post.jobType}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {post.jobMode}
              </span>
              <div className="text-lg font-bold mt-2">₹ {post.salary}</div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Job Description</h3>
              <p>
                As a {post.jobTitle}, you will work within a {post.jobTitle} Team fused with engineering, product, and data talent...
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">
                Key Responsibilities
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Be involved in every step of the {post.jobTitle} life cycle from discovery to developer handoff and user acceptance testing.
                </li>
                <li>
                  Work with BAs, product managers, and tech teams to lead the Product or Software.
                </li>
                <li>
                  Maintain the quality of the software process and ensure that when designs are translated into code they accurately reflect the design specifications.
                </li>
                <li>
                  Accurately estimate product tickets during planning sessions.
                </li>
                <li>
                  Contribute to sketching sessions involving
                  non-designers Create, iterate and maintain UI deliverables
                  including sketches, wireframes, and high-fidelity prototypes.
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
