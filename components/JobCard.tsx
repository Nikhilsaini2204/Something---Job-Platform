import Image from 'next/image';
import Link from 'next/link';
interface Props {
  jobId: string;
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  postedTime: string;
  salary: string;
  jobType: string;
  jobNature: string;
  experience: string;
}

export default function JobCard({
  jobId,
  jobTitle,
  company,
  companyLogo,
  location,
  postedTime,
  salary,
  jobType,
  jobNature,
  experience
}: Props) {
  return (
    <Link key={jobId} href={`/jobs/${jobId}`}>
    <div className="shadow-md bg-clip-border rounded-xl hover:bg-gray-200 p-5 flex flex-col  space-y-4 ">
      <div className="flex items-center space-x-4">
        <Image
        src={companyLogo}
        width={50}
        height={50}
        alt="Company Logo"
        />
        <div>
          <h3 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-900">{jobTitle}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <div className=" text-gray-500 block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 10.5c-1.9 0-3.5-1.6-3.5-3.5S10.1 5.5 12 5.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
          </svg>
          <span className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{postedTime}</span>
        </div>
      </div>
      <div className="flex justify-between text-gray-600">
        <span className="font-medium">₹ {salary}</span>
      </div>
      <div className="flex space-x-2">
        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
          {experience}
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {jobType}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          {jobNature}
        </span>
        
      </div>
    </div>
    </Link>
  );
}
