import React, { useState } from 'react';

// The data for all team members. The list has been extended to 6 as requested.
const teamMembers = [
  {
    name: 'Emily End',
    role: 'Developer',
    image: '/home-team/img1.png',
  },
  {
    name: 'Jon Arshaf',
    role: 'Marketer',
    image: '/home-team/img2.png',
  },
  {
    name: 'Kani Jon',
    role: 'Designer',
    image: '/home-team/img3.png',
  },
  {
    name: 'Alex Doe',
    role: 'Product Manager',
    image: '/home-team/img1.png',
  },
  {
    name: 'Sarah Lee',
    role: 'UX Designer',
    image: '/home-team/img2.png',
  },
  {
    name: 'Michael Chen',
    role: 'Backend Engineer',
    image: '/home-team/img3.png',
  },
];

// Reusable SVG assets for the background of the cards.
const teamAssets = [
  <>
    {/* Assets for Emily */}
    <img src='/home-team/asset1.png' className="absolute z-20 top-1/8 left-1/6 w-20 h-20 opacity-100"/>
    {/* <img src='/home-team/asset1.png' className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-300 opacity-60"/> */}
  </>,
  <>
    {/* Assets for Jon */}
    <img src='/home-team/asset2.png' className="absolute z-20 top-1/16 right-1/8 w-16 h-16 opacity-100"/>
    {/* <svg className="absolute top-1/4 left-1/4 w-16 h-16 text-blue-300 opacity-60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
    <svg className="absolute bottom-1/4 right-1/4 w-12 h-12 text-white opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> */}
  </>,
  <>
    {/* Assets for Kani */}
    <img src='/home-team/asset3.png' className="absolute z-20 top-1/8 right-1/6 w-14 h-14 opacity-100"/>
    {/* <svg className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-300 opacity-60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> */}
    {/* <svg className="absolute bottom-1/4 right-1/4 w-16 h-16 text-white opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> */}
  </>,
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    // Allows the user to scroll to the end of the team member list.
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, teamMembers.length - 1));
  };

  const handlePrev = () => {
    // Allows the user to scroll back to the start.
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section  className="relative  w-full py-16 z-0 md:py-24 bg-white font-sans overflow-hidden">
      {/* Background elements to match the requested design. */}
      {/* <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-100 opacity-20 transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-100 opacity-20 transform -skew-x-12" /> */}
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-[Quicksand] lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 text-transparent bg-clip-text tracking-tight">
            OUR TEAM
          </h2>
        </div>

        <div className="relative  flex items-center md:justify-center">
          {/* Team Members Container. `overflow-x-auto` enables touch scrolling on mobile. */}
          <div className="flex  flex-nowrap items-center p-6 py-4 space-x-4 md:space-x-8 overflow-x-auto no-scrollbar md:justify-start">
            {teamMembers.slice(startIndex, startIndex + 3).map((member, index) => (
              <div
                key={member.name}
                className={`relative   flex-shrink-0 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-300 ${
                  index === 0 ? 'w-72 md:w-80 scale-110 z-10' : 'w-56 md:w-64 opacity-70'
                }`}
              >
                {/* Background Assets */}
                <div className="absolute inset-0">
                  {/* Using modulo to cycle through the available assets  */}
                  {teamAssets[index]}
                </div> 
                
                
                {/* Image Container with the blue-tinted grayscale effect. */}
                <div className="relative z-10 h-60 md:h-64 lg:h-72 flex items-center  justify-center filter bg-[#001E74] brightness-[1.2]">
                  {/* Overlay for the blue color tint using Tailwind gradient. */}
                  <div  className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-50 mix-blend-multiply"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-contain grayscale-[80%] object-top mt-[10%] h-[100%] w-[100%]"
                    onError={(e) => {
                      e.target.onerror = null; // Prevents infinite loop
                      e.target.src = 'https://placehold.co/400x500/000000/FFFFFF?text=Image+Not+Found';
                    }}
                  />
                </div>
                {/* Text and Social Icons section */}
                <div className="relative z-10 p-6 bg-gradient-to-r from-blue-900 to-blue-700">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    {/* Social Icons */}
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.014 4.851.07A6.476 6.476 0 0122 6.136v.636c0 1.267-.014 1.647-.07 4.851A6.476 6.476 0 0117.864 22h-.636c-1.267 0-1.647-.014-4.851-.07A6.476 6.476 0 012 17.864v-.636c0-1.267.014-1.647.07-4.851A6.476 6.476 0 016.136 2h.636c1.267 0 1.647.014 4.851.07zm0 1.834c-3.125 0-3.473.013-4.721.066A4.542 4.542 0 004.066 6.945c-.053 1.248-.066 1.596-.066 4.721v.636c0 3.125.013 3.473.066 4.721a4.542 4.542 0 002.155 2.155c1.248.053 1.596.066 4.721.066h.636c3.125 0 3.473-.013 4.721-.066a4.542 4.542 0 002.155-2.155c.053-1.248.066-1.596.066-4.721v-.636c0-3.125-.013-3.473-.066-4.721a4.542 4.542 0 00-2.155-2.155c-1.248-.053-1.596-.066-4.721-.066zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 4.5a1 1 0 110 2 1 1 0 010-2z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6.012a8.558 8.558 0 01-2.43.665c.877-.52 1.55-1.344 1.868-2.327-.822.487-1.733.844-2.704 1.036A4.185 4.185 0 0013.92 4c-2.31 0-4.185 1.875-4.185 4.185 0 .328.037.647.108.955-3.476-.174-6.568-1.832-8.635-4.341-.358.614-.567 1.328-.567 2.091 0 1.45.736 2.73 1.862 3.483a4.12 4.12 0 01-1.898-.523c0 .018 0 .037 0 .055 0 2.031 1.444 3.725 3.356 4.102a4.195 4.195 0 01-1.89.072c.532 1.666 2.078 2.88 3.916 2.913a8.398 8.398 0 01-5.18 1.79c-.337 0-.668-.02-.996-.058A11.875 11.875 0 0022 6.012z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8.5c0-.987.804-1.75 1.75-1.75s1.75.763 1.75 1.75c0 .987-.804 1.75-1.75 1.75s-1.75-.763-1.75-1.75zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zM12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM7 16a5 5 0 015-5 5 5 0 015 5H7z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Container, visible on md and up. */}
          <div className="absolute bottom-[-8%] right-2 flex space-x-2 hidden md:flex">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="relative z-10 p-3 cursor-pointer bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              disabled={startIndex === 0}
            >
              {/* Left Arrow Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            {/* Right Button */}
            <button
              onClick={()=>{
                handleNext();
              }}
              className="relative z-10 p-3 bg-gray-800 cursor-pointer text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              disabled={startIndex >= teamMembers.length - 1}
            >
              {/* Right Arrow Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
