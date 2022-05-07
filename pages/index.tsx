import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Works from '../components/Works'
const Home: NextPage = () => {


  const containerRef = useRef<any>()


  useEffect(() => {
     /* @ts-ignore */
     import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: containerRef.current,
        smooth: true,
      })
    })
  }, [])


  return (
    <div ref={containerRef}>
      {/* <Nav /> */}
      <Header />
      {/* <Works /> */}
    </div>
  )
}

export default Home
