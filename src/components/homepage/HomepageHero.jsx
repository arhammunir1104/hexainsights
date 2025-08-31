import React from "react";

const HomepageHero = () => {
  return (
    <section  className="relative w-full z-[-1] overflow-hidden">
      {/* Container for content and image, flex for mobile and grid for desktop */}
      <div  className="max-w-7xl mx-auto px-4 lg:px-8  grid grid-cols-[1.2fr_1fr] items-start gap-8 lg:gap-12 pt-8 lg:pt-10 pb-16 lg:pb-24">

        {/* Right Side - Image Section (will be at the top on mobile) */}
        <div className="relative z-0 order-2 md:-ml-12 lg:-ml-20 overflow-hidden 
            h-[450px] max-h-[480px] md:max-h-[500px] lg:max-h-[800px] w-[150%] ml-[-50%] md:w-[calc(100%+3rem)]
            rounded-tl-2xl rounded-br-[5rem]">
          <img
            src="home-hero.png"
            alt="Team of developers collaborating"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left Side - Content Section (will overlap on mobile) */}
        <div className="z-10 md:mt-[0]  mt-[10%]   order-1 lg:pt-15  p-5 sm:p-8 lg:p-10
              bg-white md:shadow-lg
            rounded-2xl md:w-[100%] w-[120%]  sm:-mt-32 md:translate-y-8
            transition-all duration-300 ease-in-out">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#070778] leading-snug mb-6">
            Quickly and Affordably
          </h1>
          <p className="text-sm  sm:text-lg text-blue-900 mb-8 leading-6">
            We specialize in helping you build a team of expert developers,
            testers, and leaders. We are setup to deliver long term solutions, or
            scale to different needs quickly.
          </p>
          <button className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
            Build a team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
