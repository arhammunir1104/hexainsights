import React, { useEffect, useState } from 'react'
import HeroBackground from '../components/homepage/HeroBackground'
import Reloader from '../components/Reloader/Reloader';
import Banner from '../components/Banner/Banner';

function BlogPage() {
    const [isReload, setIsReload] = useState(true);

    useEffect(()=>{

        setTimeout(()=>{
          setIsReload(false)
        },1000)
      },[]);
  return (
    <>
    {isReload?
    <Reloader/>:
    <>
    <Banner  imageUrl= {"/service/service-banner.png"} title= "BLOG"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
   
    
    </>
    }
    </>
  )
}

export default BlogPage
