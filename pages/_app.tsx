import '../styles/globals.css'
import Loader from '../components/Loader'
import type { AppProps } from 'next/app'
import { useEffect, useState} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 3800)


  },[isLoading])
  

  return (
    <>
        {isLoading ? (<Component {...pageProps}  />) : <Loader />}
     </>
  )
}

export default MyApp
