import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useRef, useState } from "react";

const projects = [
  { id: 1, title: "VR training app for a manufacturing company", image: "/home-projects/img1.png", tags: ["3D", "AR/VR/MR", "2D"] },
  { id: 2, title: "VR training app for a construction company", image: "/home-projects/img2.png", tags: ["3D", "Simulation", "Mobile"] },
  { id: 3, title: "VR training app for a healthcare company", image: "/home-projects/img3.png", tags: ["3D", "AR", "2D"] },
  { id: 4, title: "VR training app for a logistics company", image: "/home-projects/img1.png", tags: ["VR", "Training", "Enterprise"] },
  { id: 5, title: "VR training app for an automotive company", image: "/home-projects/img2.png", tags: ["3D", "Simulation", "VR"] },
  { id: 6, title: "VR training app for an oil & gas company", image: "/home-projects/img3.png", tags: ["Enterprise", "AR", "3D"] },
];

export default function Project() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    sliderRef.current.classList.add("cursor-grabbing");
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.classList.remove("cursor-grabbing");
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; // only drag when mouse is pressed
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag speed factor
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="px-6  overflow-x-none no-scrollbar py-12 md:px-12 lg:px-20">
      {/* Section Heading */}
      <h2 className="text-center overflow-x-none  text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-10">
        PROJECT
      </h2>

      {/* Horizontal Drag Scroll */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab 
                   snap-x overflow-x-none p-5 snap-mandatory touch-pan-x select-none scroll-smooth"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[280px] max-w-[280px] flex-shrink-0 relative 
                       bg-white rounded-2xl shadow-md overflow-hidden flex flex-col 
                       group hover:bg-gray-800 group hover:text-white hover:scale-105 hover:shadow-lg
                       snap-center duration-200 transition-all"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col justify-between p-4 h-32 relative">
              <p className="text-sm font-medium line-clamp-2">
                {project.title}
              </p>

              {/* Arrow Button */}
              <button className="absolute group-hover:bg-blue-800 bottom-4 right-4 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition">
                <ArrowForwardIcon fontSize="small group-hover:text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Tailwind - Hide scrollbar */
<style jsx>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
