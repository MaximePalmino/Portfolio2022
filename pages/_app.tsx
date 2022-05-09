import '../styles/globals.css'
import Loader from '../components/Loader'
import type { AppProps } from 'next/app'
import { useEffect, useState, useRef } from 'react'
import { gsap } from "gsap";

function MyApp({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const scrollRef = useRef<any>();

  useEffect(() => {


    setTimeout(() => {
      setIsLoading(true)

    }, 3800)


  },[isLoading])
  

  return (

    <div ref={scrollRef}>
        {isLoading ? (<Component {...pageProps}  />) : <Loader />}
    </div>
  )
}

export default MyApp
