import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null); // for desktop hover menus
  const [drawerOpen, setDrawerOpen] = useState(false); // for mobile drawer
  const [openSubMenu, setOpenSubMenu] = useState(null); // for mobile submenu

  // Each menu with sub-items + unique icons
  const menus = {
    Services: [
      { name: "Enterprise Software Development", icon: "https://cdn-icons-png.flaticon.com/512/2620/2620861.png", link: "/service"  },
      { name: "Mobile App Development", icon: "https://cdn-icons-png.flaticon.com/512/888/888859.png" , link: "/service" },
      { name: "Dedicated Development Team", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", link: "/service"  },
      { name: "IT Consulting", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" , link: "/service" },
      { name: "Digital Transformation", icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png", link: "/service"  },
      { name: "UI / UX Design", icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", link: "/service"  },
      { name: "QA & Testing", icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", link: "/service"  },
      { name: "Design LAB", icon: "https://cdn-icons-png.flaticon.com/512/3342/3342137.png", link: "/service"  },
    ],
    Industries: [
      { name: "Finance", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",link: "/industry"  },
      { name: "Healthcare", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png",link: "/industry" },
      { name: "E-commerce", icon: "https://cdn-icons-png.flaticon.com/512/3081/3081823.png",link: "/industry" },
      { name: "Education", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",link: "/industry" },
    ],
    "Our Work": [
      { name: "Case Studies", icon: "https://cdn-icons-png.flaticon.com/512/1484/1484845.png",link: "/work" },
      { name: "Portfolio", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",link: "/work"  },
    ],
    "About Us": [
      { name: "Company", icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",link: "/about"  },
      { name: "Team", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",link: "/about"  },
      { name: "Careers", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",link: "/about"  },
    ],
    Insight: [
      { name: "Blog", icon: "https://cdn-icons-png.flaticon.com/512/893/893292.png",link: "/insights"  },
      { name: "Resources", icon: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",link: "/insights"  },
    ],
  };

  return (
    <nav className="flex justify-between  items-center mx-4 md:mx-8 px-4 md:px-10 py-3 bg-white rounded-md max-w-7xl mt-5 shadow-sm">
      {/* Logo */}
      <div  className="flex w-[40%] h-[80%] lg:w-[15%] items-center gap-2 text-black font-bold text-xl">
       <NavLink to={"/"}> 
        <img
          src="./logo.png"
          alt="logo"
          className="h-full w-full"
        />
        </NavLink>
        
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
        {Object.keys(menus).map((menu, idx) => {
          const items = menus[menu];
          let cols = "grid-cols-1";
          if (items.length > 4 && items.length <= 8) cols = "grid-cols-2";
          if (items.length > 8) cols = "grid-cols-3";

          return (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center  duration-200 transition-all gap-1 cursor-pointer hover:bg-gradient-to-r from-blue-800 via-blue-700 pt-2 to-blue-600 px-2 py-2 rounded-sm hover:text-white">
                {menu} <ChevronDown size={16} /> 
              </button>

              {openMenu === menu && (
                <div
                  className={`absolute top-10 left-0 w-max max-w-[90vw] bg-white shadow-lg rounded-lg p-6 grid ${cols} gap-3 z-50`}
                >
                  {items.map((item, i) => (
                    <NavLink to={`${window?.location?.origin}${item?.link}`}>
                    <div
                      key={i}
                      className="flex p-2 items-center gap-2 hover:text-blue-600 text-sm cursor-pointer transition"
                    >
                      <img src={item.icon} alt="icon" className="w-5 h-5" />
                      {item.name}
                    </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <button className="px-5 py-2 cursor-pointer rounded-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setDrawerOpen(true)}
          className="px-3 py-2 border rounded-md hover:bg-gray-100 transition"
        >
          ☰
        </button>
      </div>

      {/* Drawer with Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="flex-1 bg-opacity-40 transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          ></div>

          {/* Drawer */}
          <div
            className={`w-72 h-full bg-white shadow-lg flex flex-col transform transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="hover:bg-gray-100 p-2 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {Object.keys(menus).map((menu, idx) => (
                <div key={idx} className="border-b pb-2">
                  <button
                    onClick={() =>
                      setOpenSubMenu(openSubMenu === menu ? null : menu)
                    }
                    className="flex justify-between items-center w-full text-left py-2 font-medium hover:text-blue-600 transition"
                  >
                    {menu} <ChevronDown size={16} />
                  </button>

                  {openSubMenu === menu && (
                    <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                      {menus[menu].map((item, i) => (
                        <NavLink to={`${window?.location?.origin}${item?.link}`} onClick={() => {
                          setDrawerOpen(false)
                          setOpenSubMenu(openSubMenu === menu ? null : menu)
                          }}>
                        <div
                          key={i}
                          className="flex items-center gap-3 text-md cursor-pointer hover:text-blue-600 transition"
                        >
                          <img src={item.icon} alt="icon" className="w-5 h-5" />
                          {item.name}
                        </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button className="w-full mt-4 px-5 py-2 cursor-pointer rounded-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
