import React from 'react';

const Contact = () => {
  return (
    <section  className="relative  py-16 md:py-24 bg-[#fafafa] font-sans ">
      {/* Background shapes and lines */}
      <img src='/home-contact/img1.png' className="absolute top-4 left-[-5%] -translate-x-1/4 -translate-y-1/4 text-[#0051FF]" fill="none" />
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#0051FF] rounded-full" style={{ opacity: 0.2 }}></div> */}
      {/* <img src='/home-contact/img4.png' className="absolute z-[10] bottom-[-10%] right-[40%] w-32 h-32 text-[#0051FF]" fill="none" /> */}
      <img src='/home-contact/img2.png' className="absolute top-[40%] right-12 flex z-10 w-40 h-40 h-24 text-[#0051FF]" fill="none" />
       
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Side - Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-4xl font-[Quicksand] lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 text-transparent bg-clip-text tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-700 font-[Quicksand] text-lg mb-6">What can we do for you?</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-6 py-2 border border-gray-300 rounded-full font-medium cursor-pointer hover:bg-gray-200 text-gray-800 focus:bg-gray-800 focus:text-white transition-colors duration-300">
              Product Design
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full font-medium cursor-pointer hover:bg-gray-200 text-gray-800 focus:bg-gray-800 focus:text-white transition-colors duration-300">
              Website Development
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-full font-medium cursor-pointer hover:bg-gray-200 text-gray-800 focus:bg-gray-800 focus:text-white transition-colors duration-300">
              Mobile Apps development
            </button>
          </div>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border-b-2 border-gray-300 outline-none focus:border-gray-800 transition-colors duration-300" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border-b-2 border-gray-300 outline-none focus:border-gray-800 transition-colors duration-300" />
            <textarea placeholder="Project details" rows="4" className="w-full px-4 py-3 border-b-2 border-gray-300 outline-none focus:border-gray-800 transition-colors duration-300"></textarea>
            <button type="submit" className="w-auto px-8 py-4 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                Send
              </span>
            </button>
          </form>
        </div>
        {/* Right Side - Have a project? */}
        <div   className="hidden lg:flex flex-col justify-between h-full pt-16 pr-[20%]">
          <div   className="text-right">
            <h2 className="text-7xl font-bold text-gray-200 opacity-60">Have a</h2>
            <h2 className="text-7xl font-bold text-gray-200 opacity-60">project?</h2>
          </div>
          <div  className="mt-8 w-[60%] mx-[20%] text-left  lg:mt-0">
            <div className="flex  flex-col  mb-2">
              <p className="text-gray-400  text-lg">Phone</p>
              <p className="text-gray-800 font-semibold text-lg">+1 (833) 231-3712</p>
            </div>
            <div className="flex flex-col  mb-2">
              <p className="text-gray-400 text-lg">Email</p>
              <p className="text-gray-800 font-semibold text-lg">Hello@Example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
