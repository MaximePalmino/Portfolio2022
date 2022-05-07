import '../styles/globals.css'
import Loader from '../components/Loader'
import type { AppProps } from 'next/app'
import { useEffect, useState, useRef } from 'react'


function MyApp({ Component, pageProps }: AppProps) {

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
