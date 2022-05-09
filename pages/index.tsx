import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Works from '../components/Works'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from "gsap";
import { TweenLite } from 'gsap'
// import { gsap } from "gsap/dist/gsap";
import Work from '../components/Work'
import Footer from '../components/Footer'


const Home: NextPage = () => {
gsap.registerPlugin(ScrollTrigger);

const headerRef = useRef<any>()
const container = useRef<any>()

useEffect(() => {
   // @ts-ignore
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
          <Works />
          </div> 
        <Footer />

    </>
  )
}

export default Home
