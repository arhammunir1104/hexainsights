import React from 'react'

import Banner from '../components/Banner/Banner'
import Project from '../components/homepage/Project';
import TechnologyComponent from '../components/Service/TechnologyComponent'
import Team from '../components/homepage/Team';
import WorkContent from '../components/Work/WorkContent';
function WorkPage() {
  return (
   <>
   <Banner  imageUrl= {"/work/banner.png"} title= "OUR WORK"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
   <WorkContent />
   <Project />
   <TechnologyComponent />
   <Team />
   </>
  )
}

export default WorkPage;
