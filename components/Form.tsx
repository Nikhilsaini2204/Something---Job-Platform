export default function Form({type, post, setPost, submitting, handleSubmit} : any) {
  return (
    <section>
      <h1 className="flex flex-col justify-center text-4xl font-semibold items-center p-6">
        {type} Job
      </h1>

      <form 
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto pt-4 pb-10">
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Example: Web Developer"
            value={post.jobTitle}
            onChange={(e) => setPost({...post, jobTitle: e.target.value})}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: Google"
            value={post.company}
            onChange={(e) => setPost({...post, company: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="CompanyLogo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Company Logo
          </label>
          <input
            type="text"
            id="companyLogo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter Company .png logo URL"
            value={post.companyLogo}
            onChange={(e) => setPost({...post, companyLogo: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Job Location
          </label>
          <input
            type="text"
            id="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: Hyderabad"
            value={post.jobLocation}
            onChange={(e) => setPost({...post, jobLocation: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="experience"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Experience Required
          </label>
          <input
            type="text"
            id="experience"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: Fresher, 1-2 years"
            value={post.experience}
            onChange={(e) => setPost({...post, experience: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="salary"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Salary or Stipend <span className="text-gray-600 ">(In INR)</span>
          </label>
          <input
            type="text"
            id="salary"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: 50000"
            value={post.salary}
            onChange={(e) => setPost({...post, salary: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="jobtype"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Job Type
          </label>
          <input
            type="text"
            id="jobtype"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: Full-time"
            value={post.jobType}
            onChange={(e) => setPost({...post, jobType: e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="modeofwork"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Enter Mode of Work
          </label>
          <input
            type="text"
            id="stipend"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Example: Remote, onsite"
            value={post.jobMode}
            onChange={(e) => setPost({...post, jobMode: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={submitting}
        >
          {submitting ? `${type}...` : type}
        </button>
      </form>
    </section>
  );
}
