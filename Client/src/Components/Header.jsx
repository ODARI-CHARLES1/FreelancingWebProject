import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between h-full px-4 lg:px-16">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 py-12 lg:py-0">
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Empower Your Career. <br />
            Connect with Top Freelancers.
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400">
            Find skilled professionals or showcase your expertise to clients
            worldwide—fast, easy, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Post Job
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Find Job
            </a>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="./src/Assets/freelancing.jpg"
            alt="Freelancer collaboration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
