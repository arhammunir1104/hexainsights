import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Data for the featured cards
const featuredContent = [
  {
    id: 1,
    date: '10 JULY 2022',
    heading: 'VR training app for a manufacturing company',
    subheading: "Throughout 2021, the company's specialists implemented important skill-sharing and community development initiatives as part",
    link: '/blog/vr-training-app-1',
    // The first card in the image has a cool graphic in the background. We'll use a placeholder for this.
    backgroundGraphic: '/public/home-content/img1.png',
  },
  {
    id: 2,
    date: '03 AUGUST 2022',
    heading: 'AI-powered diagnostic tools for healthcare startups',
    subheading: 'We developed an advanced machine learning model to analyze medical scans, significantly reducing diagnostic time.',
    link: '/blog/ai-diagnostic-tools-2',
    backgroundGraphic: null, // No graphic for the second card in the original pattern
  },
  {
    id: 3,
    date: '05 JUNE 2022',
    heading: 'Building a custom e-commerce platform with Angular',
    subheading: 'The new platform scaled inventory management by 300% and provided a seamless user experience across devices.',
    link: '/blog/e-commerce-platform-3',
    backgroundGraphic: null, // No graphic for the third card in the original pattern
  },
  {
    id: 4,
    date: '20 MAY 2022',
    heading: 'Optimizing cloud infrastructure for B2B SaaS solutions',
    subheading: 'Successfully migrated legacy systems to a serverless architecture, improving uptime and slashing hosting costs by 40%.',
    link: '/blog/cloud-optimization-4',
    // The fourth card in the image has a large, abstract design. We'll use a different placeholder image for variety.
    backgroundGraphic: 'https://placehold.co/800x600/0A0A0A/777?text=Abstract+Design', 
  },
];

// Component for an individual card
const BlogCard = ({ data }) => {
  const handleReadMore = (link) => {
    // In a real application, this would use a router (e.g., React Router's useNavigate)
    // For this demonstration, we'll log the intended redirection.
    console.log(`Redirecting to blog post: ${link}`);
    // window.location.href = link; // Uncomment this in a non-sandboxed environment
  };

  return (
    <NavLink to={"/blog"} className="block">
    <div 
      className="relative p-8 md:p-10 rounded-2xl bg-black h-[400px] overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] shadow-xl"
    >
      {/* Background Graphic/Image Layer (Optional/Placeholder for first card) */}
      {data.backgroundGraphic && (
        <img 
          src={data.backgroundGraphic} 
          alt="Decorative Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback for the decorative image
            e.target.style.background = 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,1) 100%)';
            e.target.classList.remove('object-cover');
          }}
        />
      )}

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Top Content (Date & Heading) */}
        <div>
          {/* Date */}
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 opacity-90">
            {data.date}
          </p>

          {/* Heading */}
          <h3 className="text-3xl font-bold text-white leading-snug mb-4 transition-colors duration-300 group-hover:text-blue-400">
            {data.heading}
          </h3>

          {/* Subheading with Fading Effect Mimicry */}
          <div className="relative">
            <p className="text-base text-gray-400 leading-relaxed max-w-lg">
              {data.subheading}
            </p>
            {/* This pseudo-element creates the subtle gradient overlay at the bottom 
              of the text area, making the lower lines appear to fade into the black background, 
              mimicking the effect seen in the reference image.
            */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        {/* Read More Link */}
        <button
          onClick={() => handleReadMore(data.link)}
          className="mt-6 flex items-center text-sm font-semibold text-white group-hover:text-blue-400 transition-all duration-300 self-start"
          aria-label={`Read more about ${data.heading}`}
        >
          Read more 
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
    </NavLink>
  );
};


const CaseStudy = () => {
  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center overflow-x-none  text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-10">
          CASE STUDY
        </h2>

        {/* Grid Container (Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {featuredContent.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default CaseStudy;
