import React from 'react'

import Banner from '../components/Banner/Banner'
import Project from '../components/homepage/Project';
import IndustryContent from '../components/Industry/IndustryContent';
import HireContent from '../components/Industry/HireContent';
function IndustryPage() {
  return (
   <>
   <Banner  imageUrl= {"/service/service-banner.png"} title= "INDUSTRIES"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
   <IndustryContent />
   <Project />
   <HireContent />
   </>
  )
}

export default IndustryPage;
