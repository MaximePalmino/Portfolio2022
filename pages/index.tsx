import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Works from '../components/Works'


const Home: NextPage = () => {


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
