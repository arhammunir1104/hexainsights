import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import ServicesContent from '../components/Service/ServiceContent'
import Project from '../components/homepage/Project'
import Service from '../components/homepage/Service'
import Team from '../components/homepage/Team'
import TechnologyComponent from '../components/Service/TechnologyComponent'
import Reloader from '../components/Reloader/Reloader';
import { useParams } from 'react-router-dom'
import ServiceStaffComponent from '../components/Industry/ServiceStaffComponent'
import CaseStudy from '../components/Service/CaseStudy'


function ServicePage() {
  const [isReload, setIsReload] = useState(true);
  let q = useParams();
  useEffect(()=>{

    setTimeout(()=>{
      setIsReload(false)
    },1000)
  },[])

  useEffect(()=>{
    console.log(q.serviceType)
    window.scrollTo(0,0)
    ,[q]})
  return (
    isReload ? 
    <>
    <Reloader />
    </> 
    : 
    <>
        <Banner  imageUrl= {"/service/service-banner.png"} title= "OUR SERVICES"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <ServicesContent type={q.serviceType} />
        <Service />
        <ServiceStaffComponent show={false} /> 
        <TechnologyComponent />
        <Project title={"Featured Projects"} />
        <CaseStudy />
        {/* <Team /> */}
    </>
  )
}

export default ServicePage
