import React, { useEffect, useState } from 'react'
import HeroBackground from '../components/homepage/HeroBackground'
import Reloader from '../components/Reloader/Reloader';
import Banner from '../components/Banner/Banner';
import AboutContent from '../components/about/AboutContent';
import AboutContent2 from '../components/about/AboutContent2';
import TechnologyComponent from '../components/Service/TechnologyComponent';
import Team from '../components/homepage/Team';
import CorporateValuesComponent from '../components/about/CorporateValues';

function About() {
    const [isReload, setIsReload] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
          setIsReload(false)
        },1000)
      },[])

  return (
    <>
    {isReload?
    <Reloader/>:
    <>
    <Banner  imageUrl= {"/public/about/hero-background.png"} title= "We are proud of our products"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    <AboutContent/>
    <AboutContent2 />
    <CorporateValuesComponent />
    <Team />
    
    </>
    }
    </>
  )
}

export default About
