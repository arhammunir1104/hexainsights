import React from "react";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      img: "home-service/img1.png",
    },
    {
      title: "Web Development (React, Next.js, Vue.js)",
      img: "home-service/img2.png",
    },
    {
      title: "Mobile App Development (iOS, Android, Flutter)",
      img: "home-service/img3.png",
    },
    {
      title: "Enterprise Software & SaaS Solutions",
      img: "home-service/img4.png",
    },
    {
      title: "AI & Automation",
      img: "home-service/img5.png",
    },
    {
      title: "UI/UX Design (Figma-Based Modern Interfaces)",
      img: "home-service/img6.png",
    },
    {
      title: "Mobile App Development (iOS, Android, Flutter)",
      img: "home-service/img7.png",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white relative">
      {/* Decorative top-right element */}
      <div className="absolute right-20 md:right-50 top-6 text-xs bg-yellow-400 text-black px-3 py-1 rounded rotate-[-5deg] font-semibold shadow">
        YOUR IDEA STARTS HERE
      </div>

      {/* Title */}
      <div className="text-center leading-2 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#463F87] uppercase tracking-wide">
          OUR SERVICES
        </h2>
        <p className="text-2xl md:text-4xl font-medium text-[#463F87]">
          We Build Future-Ready Digital Solutions
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 lg:w-[80%] lg:mx-[10%]">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col items-center p-2 py-12 space-y-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-sm md:text-base text-center font-medium text-gray-800">
                {service.title}
              </h3>
            </div>
          </div>
        ))}

<div
            className="shadow-md flex items-center justify-center cursor-pointer   rounded-2xl hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center w-[80%] mx-[10%]cursor-pointer  justify-center ">
            <button className="bg-gradient-to-r from-blue-800 via-blue-800 to-blue-600 text-[.7rem] cursor-pointer  hover:bg-[#352d6d] text-white px-6 py-3 rounded-xl shadow-lg">
            Explore Our Services →
            </button>
            </div>
          </div>
      </div>

      {/* Button */}
      {/* <div className="flex justify-center mt-10">
        <button className="bg-[#463F87] hover:bg-[#352d6d] text-white px-6 py-3 rounded-xl shadow-lg">
          Explore Our Services →
        </button>
      </div> */}
    </section>
  );
}
