import React, { useEffect, useState } from 'react'
import HeroBackground from '../components/homepage/HeroBackground'
import Reloader from '../components/Reloader/Reloader';
import Banner from '../components/Banner/Banner';
import ContactCard from '../components/contact/ContactCard';

function ContactPage() {
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
    <Banner  imageUrl= {"/public/contact/contact-banner.png"} title= "CONTACT"  description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    <ContactCard  />
    
    </>
    }
    </>
  )
}

export default ContactPage
