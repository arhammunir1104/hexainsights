import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import ServicesContent from '../components/Service/ServiceContent'
import Project from '../components/homepage/Project'
import Service from '../components/homepage/Service'
import Team from '../components/homepage/Team'
import TechnologyComponent from '../components/Service/TechnologyComponent'
import Reloader from '../components/Reloader/Reloader';


function ServicePage() {
  const [isReload, setIsReload] = useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setIsReload(false)
    },1000)
  },[])
  return (
    isReload ? 
    <>
    <Reloader />
    </> 
    : 
    <>
        <Banner  imageUrl= {"/service/service-banner.png"} title= "OUR SERVICES"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <ServicesContent />
        <Project />
        <Service />
        <TechnologyComponent />
        <Team />
    </>
  )
}

export default ServicePage
