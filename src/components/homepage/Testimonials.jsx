import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "Maxin Will",
    title: "Product Manager",
    initials: "MW"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "Jane Doe",
    title: "Project Lead",
    initials: "JD"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "John Smith",
    title: "Lead Developer",
    initials: "JS"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "Emily Clark",
    title: "UX Designer",
    initials: "EC"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "Michael Lee",
    title: "QA Engineer",
    initials: "ML"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur, sed do",
    author: "Sarah Brown",
    title: "DevOps Engineer",
    initials: "SB"
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === 'left') {
        current.scrollBy({ left: -350, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-[Quicksand] lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 text-transparent bg-clip-text tracking-tight">
            TESTIMONIAL
          </h2>
        </div>
        
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <IconButton onClick={() => scroll('left')} className="absolute left-0 z-10 p-2 md:p-3 bg-gray-100/70 hover:bg-gray-200/90 rounded-full  transition-all duration-300">
            <ArrowBackIosIcon className="text-gray-600" />
          </IconButton>

          {/* Testimonials Container */}
          <div 
            ref={scrollRef} 
            className="flex overflow-x-scroll no-scrollbar py-4 px-4 space-x-8 md:space-x-12 scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 sm:w-96 transform transition-transform duration-300"
              >
                <div className="relative p-8 bg-[#0271FF] rounded-[2rem] mb-6 shadow-xl">
                  {/* Star Icon */}
                  <img src="/home-testimonial/img1.png" className="h-8 w-8 text-white mb-4" viewBox="0 0 24 24" fill="currentColor" />
                    
                 
                  
                  <p className="text-white font-[Quicksand] text-base leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-1/2 w-6 h-6 bg-[#0271FF] transform rotate-45 -translate-x-1/2"></div>
                </div>

                <div className="flex items-center space-x-4 pl-4">
                  <div className="w-12 font-[Quicksand] h-12 rounded-full bg-[#2D2D2D] flex items-center justify-center font-bold text-white text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-[Quicksand] font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-700 font-[Quicksand] text-md font-bold opacity-80">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          <IconButton onClick={() => scroll('right')} className="absolute right-0 z-10 p-2 md:p-3 bg-gray-100/70 hover:bg-gray-200/90 rounded-full  transition-all duration-300">
            <ArrowForwardIosIcon className="text-gray-600" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
