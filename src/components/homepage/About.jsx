import React from "react";

function About() {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background Shapes */}
      <img
        src="/aboutus/vector2.png"
        alt="decor"
        className="absolute z-12 left-8 bottom-[5%] md:bottom-[15%] w-14 md:w-18"
      />
      <img
        src="/aboutus/half1.png"
        alt="decor"
        className="absolute left-8 top-16 w-6 md:w-10"
      />
      <img
        src="/aboutus/design1.png"
        alt="decor"
        className="absolute right-28 top-6 w-24 md:w-28"
      />
      <img
        src="/aboutus/design2.png"
        alt="decor"
        className="absolute right-6 bottom-10 w-28 md:w-36"
      />

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2 gap-2">
          {/* Column 1: Single Image */}
          <div className="flex z-[-1] flex-col justify-center">
            <img
              src="/aboutus/img1.png"
              alt="team"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          {/* Column 2: Two stacked images */}
          <div className="flex flex-col gap-2">
            <img
              src="/aboutus/img2.png"
              alt="meeting"
              className="rounded-xl shadow-lg object-cover"
            />
            <img
              src="/aboutus/img3.png"
              alt="discussion"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-4">
        ABOUT US
        </h2>
          <p className="text-blue-900 mb-6 leading-relaxed">
            Concept Softworks is a software company, we develop custom built
            software for clients – covering everything from financial
            institutions & medical companies all the way to tech companies and
            government organizations.
          </p>
          {/* <button className="bg-yellow-400 text-black font-bold rounded-full px-6 py-2 shadow-md hover:bg-yellow-500 transition">
            YOUR IDEA STARTS HERE
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default About;
