import React from 'react';

const Banner = ({ imageUrl, title, description }) => {
  return (
    <div className="relative w-[95%] mx-[2.5%] h-[60vh] sm:h-[80vh] mt-5 overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt="Hero Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 font-[Quicksand] bg-opacity-60 flex flex-col items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            {title}
          </h1>
          <p className="text-base font-[Quicksand]  sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
