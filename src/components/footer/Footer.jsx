import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

// Custom SVG for the Hexainsights logo
const HexainsightsLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.4 12.8L6.8 11.2l2.8-2.8L12 12l-2.4 2.8zM12 12L9.6 9.2l2.4-2.8 2.8 2.8L12 12zm0 0l2.4 2.8 2.8-2.8-2.8-2.8L12 12z" fill="#3b82f6"/>
        <circle cx="12" cy="12" r="1.5" fill="#3b82f6"/>
    </svg>
);

const App = () => {
    const linkSections = [
        {
            title: "Company",
            links: ["About Us", "Success Stories", "Privacy Policy", "Terms & Conditions", "Contact Us"]
        },
        {
            title: "Company",
            links: ["About Us", "Success Stories", "Privacy Policy", "Terms & Conditions", "Contact Us"]
        },
        {
            title: "Company",
            links: ["About Us", "Success Stories", "Privacy Policy", "Terms & Conditions", "Contact Us"]
        },
    ];

    const socialIcons = [
        { icon: <LinkedInIcon className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />, href: "#" },
        { icon: <InstagramIcon className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />, href: "#" },
        { icon: <TwitterIcon className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />, href: "#" },
        { icon: <FacebookIcon className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />, href: "#" },
        { icon: <YouTubeIcon className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />, href: "#" },
    ];

    return (
        <div className="bg-white py-10 px-10 sm:px-20 lg:px-25">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Hexainsights Section */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-4">
                        <NavLink to={"/"}> 
                            <img
                            src="./logo.png"
                            alt="logo"
                            className="h-[50px] w-[180px]"
                            />
                            </NavLink>
                        </div>
                        <p className="text-black leading-relaxed mb-4 text-sm">
                            Expertly trained, battle-tested, elite software developers on demand
                        </p>
                        <div className="flex items-center my-2 text-black text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.01 1.207a.997.997 0 00-.712 1.258l.498 1.494a.997.997 0 001.258.712l1.207-2.01a1 1 0 011.158-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                            </svg>
                            +92 300 0895990
                        </div>
                        <div className="flex items-center my-2 text-black text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@hexainsights.com
                        </div>
                        <div className="flex items-start my-4 text-black text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p>
                            UAE - Al Wahda Street, GIBCA, Dubai<br />Pakistan - North Karachi, Sector 9, Karachi
                            </p>
                        </div>
                    </div>

                    {/* Company Links Sections */}
                    {linkSections.map((section, index) => (
                        <div  key={index}>
                            <h6 className="text-blue-900 font-bold mb-4 text-lg">
                                {section.title}
                            </h6>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className='my-3'>
                                        <a href="#" className="text-black font-[Quicksand]  transition-colors duration-300 hover:text-blue-500">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Follow Us and Copyright Section */}
                <div className="mt-10 pt-6 text-center md:text-left">
                    <h6 className="text-blue-900 font-[Quicksand] font-bold mb-4 text-lg">
                        Follow us
                    </h6>
                    <div className="flex justify-center md:justify-start space-x-4 mb-4">
                        {socialIcons.map((social, index) => (
                            <a key={index} href={social.href} className="text-gray-600 hover:text-blue-500">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-left font-bold  font-[Quicksand]  text-black text-sm border-t pt-3 border-gray-200 ">
                        &copy; Copyright 2025 Hexainsights. Developed by <a href="http://codenthic.com/" target='_blank' className="text-black underline hover:text-blue-500">Codenthic.COM</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
