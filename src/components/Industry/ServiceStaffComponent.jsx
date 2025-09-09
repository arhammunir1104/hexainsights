import React from 'react';

const staffMembers = [
  { title: 'Frontend Engineers', image: '/service/img1.png' },
  { title: 'Angular Developers', image: '/service/img2.png'  },
  { title: 'AI and ML Engineers', image: '/service/img3.png'  },
  { title: 'Fullstack Engineers', image: '/service/img4.png'  },
  { title: 'DevOps + DevSecOps Engineers', image: '/service/img5.png'  },
  { title: 'Data Scientist / Data Engineers', image: '/service/img6.png'  },
  { title: 'UI/UX Engineers', image: '/service/img7.png'  },
  { title: 'PHP Developers', image: '/service/img8.png'  },
  { title: 'Project Managers', image: '/service/img9.png' },
  { title: 'QA Engineers', image: '/service/img10.png'  },
  { title: 'Wordpress CMS Developers', image: '/service/img11.png' },
  { title: 'Business Analyst', image: '/service/img12.png'  },
  { title: 'Product Designer', image: '/service/img13.png' },
  { title: 'Mobile App Developers', image: '/service/img14.png'  },
  { title: 'Information Security Engineers', image: '/service/img15.png' },
  { title: 'Database Admin', image: '/service/img16.png' },
  { title: 'Application Security Engineers', image: '/service/img17.png' },
  { title: 'iOS and Android Developers', image: '/service/img18.png'  },
  { title: 'Solution Architects', image: '/service/img19.png'  },
  { title: 'Tech Leads / Team Leads', image: '/service/img20.png'  },
  { title: 'Golang Dev', image: '/service/img21.png'  },
];

const technologies = [
  { title: 'React', image: '/service/t1.png' },
  { title: 'Angular', image: '/service/t2.png' },
  { title: 'Next.js', image: '/service/t3.png' },
  { title: 'Node.js', image: '/service/t4.png'},
];

const ServiceStaffComponent = () => {
  return (
    <>
    <div className="bg-[#F9F9F9] text-gray-800 font-sans p-8 lg:p-16">
      {/* Top Section */}
      <div className="text-left mb-8 lg:mb-12">
      <h1 className="text-md font-bold text-[#001D84] mb-4">
          Specialized 
        </h1>
        <h1 className="text-2xl lg:text-3xl  font-bold text-[#001D84] mb-4">
          Specialized Staff We Provide
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
        {staffMembers.map((staff, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-200 relative overflow-hidden">
            {/* Blue border-like element on the left */}
            <div className="absolute  top-0 left-0 bottom-0 w-1 bg-[#001D84] rounded-l-xl"></div>
            
            <img 
              src={staff.image} 
              alt={staff.title} 
              className="w-10 h-10 object-contain mr-4 ml-2" 
            />
            <h3 className="text-md ">{staff.title}</h3>
          </div>
        ))}
      </div>
</div>
    <div className='my-5'>
         {/* Technologies Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#001D84] mb-8">
          Technologies
        </h2>
        <div className="flex flex-wrap px-8 py-1 justify-between items-center space-x-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center mb-4">
              <img 
                src={tech.image} 
                alt={tech.title} 
                className="h-12 mb-2" 
              />
              <span className="text-lg font-semibold">{tech.title}</span>
            </div>
          ))}
        </div>
      </div>


    </div>
    </>
  );
};


export default ServiceStaffComponent;