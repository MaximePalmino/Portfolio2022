import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Works from '../components/Works'
import { gsap } from "gsap";
import Footer from '../components/Footer'
import About from '../components/About';

const Home: NextPage = () => {

const headerRef = useRef<any>()

useEffect(() => {
   gsap.to(headerRef.current, { y: "-13%", ease: "power4.out", scrollTrigger: {        
    trigger: headerRef.current,
    start: "-600px center",
    end: "bottom center",
    markers: true,
    scrub: 0.8,

}})

})


  return (
    <>
        <Header />   
        <div ref={headerRef}>
          <About />
          <Works />
          </div> 

    </>
  )
}

export default Home
