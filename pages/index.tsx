import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Works from '../components/Works'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from "gsap";
// import { gsap } from "gsap/dist/gsap";

const Home: NextPage = () => {
  
gsap.registerPlugin(ScrollTrigger);


  const containerRef = useRef<any>()


  return (
    <>
        <Header />    
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
        <Works />
    </>
  )
}

export default Home
