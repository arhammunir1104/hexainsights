import React from 'react';

const ServicesContent = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="container mx-auto p-8 lg:p-16">
        {/* Top Section */}
        <div className="text-center mb-12">
        <h2 className=" font-[Quicksand] text-xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-4">
            SERVICES
            </h2>
          <h1 className="text-3xl font-[Quicksand] lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            We're service of data analysts
          </h1>
          <p className="text-gray-500 font-[Quicksand] max-w-3xl mx-auto mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8 lg:flex-row items-center lg:items-start lg:space-x-8 mt-24">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="/public/service/service-content-banner.png"
              alt="Hands working on a laptop with holographic elements"
              className="w-full h-auto "
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-[Quicksand] text-xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-4">
            Services
            </h2>
            <h2 className="text-2xl font-[Quicksand] lg:text-3xl font-bold mb-4 leading-tight">
              To provide Industries solutions for growing companies
            </h2>
            <p className="text-gray-500 font-[Quicksand] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;

