import React from 'react';

// Using a placeholder image for the distinctive blue spiral vector element.
const SPIRAL_IMAGE_URL = '/public/about/design2.png'; 

const CorporateValuesComponent = () => {
  // Array updated with the exact text content from the image.
  const correctedValuesData = [
    { title: 'Best in Class', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card1.png' },
    { title: 'Authenticity', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card2.png' },
    { title: 'Email Support', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card3.png' },
    { title: 'Discounts Available', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card4.png' },
    { title: 'Powerful Marketing', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card5.png' },
    { title: 'Inventory management', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing', icon: '/public/about/card6.png' },
  ];

  return (
    <section className="bg-white font-sans relative overflow-hidden py-16 sm:py-24">
      
      {/* Light Blue Gradient Background Element (Bottom Left) - Corrected */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 z-0"
        style={{
          // Increased size and fixed color to make the glow more pronounced
          backgroundColor: '#E6F0FF',
          opacity: 0.6, // Adjusted opacity for better visibility
          bottom: '-30%',
          left: '-20%',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Blue Spiral Vector Element - Positioned Top Right */}
        <img
          src={SPIRAL_IMAGE_URL}
          alt="Decorative Blue Spiral Vector"
          className="hidden lg:block absolute top-0 right-0 w-[150px] h-[150px] transform translate-x-1/4 -translate-y-1/3 z-0"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E8F5FF/0066CC?text=Spiral' }}
        />

        {/* Header Section */}
        <div className="text-center mb-12 relative z-10">
          
          <h1 className="font-[Quicksand] text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent mb-4">
          OUR CORPORATE VALUES
        </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid  md:mx-[10%] mx-[5%] w-[90%] md:w-[80%] grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {correctedValuesData.map((value, index) => (
            <div
              key={index}
            
              className="bg-white py-8  rounded-[10px] shadow-xl transition-shadow duration-300 hover:shadow-2xl 
                         flex flex-col items-center text-center border border-gray-100"
              style={{
                // Ensured card height is generous to match verticality in image - Increased minHeight
                minHeight: '300px',
                // Custom, subtle shadow to mimic the design's soft elevation
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.02)',
              }}
            >
              {/* Icon Placeholder (Replace with your custom icon URL) */}
              <div className="mb-6">
                <img 
                  src={value?.icon} 
                  alt={`${value.title} icon`} 
                  className="w-16 h-16 object-contain" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/E8F5FF/0066CC?text=Icon' }}
                />
              </div>

              <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-sm px-2 text-gray-500 max-w-xs">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateValuesComponent;
